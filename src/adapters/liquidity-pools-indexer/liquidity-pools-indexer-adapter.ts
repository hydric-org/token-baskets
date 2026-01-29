import { GraphQLClient } from "graphql-request";
import { ChainId } from "../../domain/enums/chain-id";
import { IBasketDefinition } from "../../domain/interfaces/basket-definition.interface";
import { ITokenSource } from "../../domain/interfaces/token-source.interface";
import { IToken } from "../../domain/interfaces/token.interface";
import { Env } from "../../infrastructure/env";
import {
  getSdk,
  SingleChainToken_Bool_Exp,
} from "./generated/liquidity-pools-indexer-sdk";

export class LiquidityPoolsIndexerAdapter implements ITokenSource {
  private client: GraphQLClient;
  private liquidityPoolsIndexerSdk;

  constructor() {
    this.client = new GraphQLClient(Env.IndexerUrl);
    this.liquidityPoolsIndexerSdk = getSdk(this.client);
  }

  async getPotentialTokens(
    chainId: ChainId,
    basketDefinition: IBasketDefinition,
    excludedIds: string[],
  ): Promise<IToken[]> {
    const allTokens: IToken[] = [];
    const seenAddresses = new Set<string>();

    const keywordPromises = basketDefinition.searchKeywords.map(
      async (keyword) => {
        const symbolOrNameContains = `%${keyword}%`;

        const where: SingleChainToken_Bool_Exp = {
          chainId: { _eq: chainId },
          id: { _nin: excludedIds },
          trackedUsdPrice: {
            _gte: basketDefinition.minUsdPrice,
            _lte: basketDefinition.maxUsdPrice,
          },
          trackedTotalValuePooledUsd: { _gt: "1000" },
          _or: [
            { normalizedSymbol: { _ilike: symbolOrNameContains } },
            { symbol: { _ilike: symbolOrNameContains } },
            { name: { _ilike: symbolOrNameContains } },
            { normalizedName: { _ilike: symbolOrNameContains } },
          ],
        };

        try {
          const response = await this.liquidityPoolsIndexerSdk.GetTokens({
            where,
          });
          return response.SingleChainToken;
        } catch (error) {
          console.error(`Error fetching tokens for keyword ${keyword}:`, error);
          return [];
        }
      },
    );

    const results = await Promise.all(keywordPromises);

    for (const tokens of results) {
      for (const t of tokens) {
        if (seenAddresses.has(t.tokenAddress)) continue;

        const price = parseFloat(t.trackedUsdPrice || "0");

        seenAddresses.add(t.tokenAddress);
        allTokens.push({
          address: t.tokenAddress,
          chainId: t.chainId,
          symbol: t.symbol,
          name: t.name,
          decimals: t.decimals,
          trackedTotalValuePooledUsd: parseFloat(
            t.trackedTotalValuePooledUsd || "0",
          ),
          priceUsd: price,
          trackedSwapVolumeUsd: parseFloat(t.trackedSwapVolumeUsd || "0"),
          poolsCount: parseInt(t.poolsCount || "0"),
          swapsCount: parseInt(t.swapsCount || "0"),
        });
      }
    }

    return allTokens;
  }
}
