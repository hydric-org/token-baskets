import { GeminiAdapter } from "./adapters/ai/gemini-adapter";
import { FileBasketRepository } from "./adapters/filesystem/file-basket-repository";
import { LiquidityPoolsIndexerAdapter } from "./adapters/liquidity-pools-indexer/liquidity-pools-indexer-adapter";
import { BasketsRegistry } from "./baskets-registry";
import { ChainId } from "./domain/enums/chain-id";
import { UpdateBasketUseCase } from "./usecases/update-basket-use-case";

export async function runAll() {
  const basketRepo = new FileBasketRepository();
  const tokenSource = new LiquidityPoolsIndexerAdapter();
  const tokenValidator = new GeminiAdapter();

  const updateUseCase = new UpdateBasketUseCase(
    basketRepo,
    tokenSource,
    tokenValidator,
  );

  const supportedChains = Object.values(ChainId).filter(
    (value) => typeof value === "number",
  ) as ChainId[];

  for (const chainId of supportedChains) {
    for (const basketDef of BasketsRegistry) {
      try {
        await updateUseCase.execute(chainId, basketDef);
      } catch (error) {
        console.error(
          `Failed to update basket ${basketDef.id} on chain ${chainId}`,
          error,
        );
      }
    }
  }
}

if (require.main === module) {
  runAll().catch(console.error);
}
