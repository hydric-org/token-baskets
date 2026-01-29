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

    for (const keyword of basketDefinition.searchKeywords) {
      const symbolContains = `%${keyword}%`;

      const where: SingleChainToken_Bool_Exp = {
        chainId: { _eq: chainId },
        id: { _nin: excludedIds },
        trackedUsdPrice: {
          _gte: basketDefinition.minUsdPrice,
          _lte: basketDefinition.maxUsdPrice,
        },
        trackedTotalValuePooledUsd: { _gt: "1000" },
        _or: [
          { normalizedSymbol: { _ilike: symbolContains } },
          { symbol: { _ilike: symbolContains } },
        ],
      };

      try {
        const response = await this.liquidityPoolsIndexerSdk.GetTokens({
          where,
        });

        for (const t of response.SingleChainToken) {
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
      } catch (error) {
        console.error(`Error fetching tokens for keyword ${keyword}:`, error);
      }
    }

    return allTokens;
  }
}
