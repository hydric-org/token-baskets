export interface IToken {
  address: string;
  chainId: number;
  symbol: string;
  name: string;
  decimals: number;
  trackedTotalValuePooledUsd?: number;
  priceUsd?: number;
  // Metadata for AI validation
  trackedSwapVolumeUsd?: number;
  poolsCount?: number;
  swapsCount?: number;
}
