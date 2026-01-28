import { BasketId } from "../domain/enums/basket-id";
import { ChainId } from "../domain/enums/chain-id";
import { IBasketDefinition } from "../domain/interfaces/basket-definition.interface";
import { IBasketRepository } from "../domain/interfaces/basket-repository.interface";
import { IBlocklistEntry } from "../domain/interfaces/blocklist-entry.interface";
import { ITokenSource } from "../domain/interfaces/token-source.interface";
import { ITokenValidator } from "../domain/interfaces/token-validator.interface";
import { BasketLogger } from "../utils/basket-logger";

export class UpdateBasketUseCase {
  constructor(
    private basketRepository: IBasketRepository,
    private tokenSource: ITokenSource,
    private tokenValidator: ITokenValidator,
  ) {}

  async execute(
    chainId: ChainId,
    basketDefinition: IBasketDefinition,
  ): Promise<void> {
    const logger = new BasketLogger(chainId, basketDefinition);
    logger.startUpdate();

    let basket = await this.basketRepository.getBasket(
      chainId,
      basketDefinition.id as BasketId,
    );

    const blocklist = await this.basketRepository.getBlocklist(
      chainId,
      basketDefinition.id as BasketId,
    );

    if (!basket) {
      logger.basketNotFound();

      basket = {
        id: basketDefinition.id,
        name: basketDefinition.name,
        logo: basketDefinition.logo,
        description: basketDefinition.description,
        lastUpdated: new Date().toISOString(),
        index: [],
      };
    }

    const excludedAddresses = new Set([
      ...basket.index.map((a) => a.toLowerCase()),
      ...blocklist.map((b) => b.address.toLowerCase()),
    ]);

    const excludedIds = Array.from(excludedAddresses).map(
      (addr) => `${chainId}-${addr}`,
    );

    logger.fetchingTokens();
    const candidates = await this.tokenSource.getPotentialTokens(
      chainId,
      basketDefinition,
      excludedIds,
    );
    logger.foundCandidates(candidates.length);

    if (candidates.length === 0) {
      logger.updateComplete();
      return;
    }

    const newValidTokens: string[] = [];
    const newInvalidEntries: IBlocklistEntry[] = [];

    logger.validatingTokens(candidates.length);
    const results = await this.tokenValidator.validateTokens(
      candidates,
      basketDefinition,
    );

    for (const result of results) {
      logger.tokenValidated(result);

      if (result.isValid) {
        newValidTokens.push(result.address);
      } else {
        newInvalidEntries.push({
          address: result.address,
          reason: result.reason,
          timestamp: new Date().toISOString(),
        });
      }
    }

    if (newValidTokens.length > 0) {
      const currentSet = new Set(basket.index.map((i) => i.toLowerCase()));
      let addedAtLeastOne = false;
      for (const t of newValidTokens) {
        if (!currentSet.has(t.toLowerCase())) {
          basket.index.push(t);
          addedAtLeastOne = true;
        }
      }

      if (addedAtLeastOne) {
        basket.lastUpdated = new Date().toISOString();
        logger.savingBasket();
        await this.basketRepository.saveBasket(chainId, basket);
        logger.tokensAdded(newValidTokens.length);
      }
    }

    if (newInvalidEntries.length > 0) {
      await this.basketRepository.addToBlocklist(
        chainId,
        basketDefinition.id as BasketId,
        newInvalidEntries,
      );
      logger.tokensBlocklisted(newInvalidEntries.length);
    }

    logger.updateComplete();
  }
}
