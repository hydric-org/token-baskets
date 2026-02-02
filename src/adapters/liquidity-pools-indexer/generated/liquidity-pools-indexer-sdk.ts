import { GraphQLClient, RequestOptions } from "graphql-request";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
type GraphQLClientRequestHeaders = RequestOptions["requestHeaders"];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  float8: { input: any; output: any };
  historicaldatainterval: { input: any; output: any };
  jsonb: { input: any; output: any };
  numeric: { input: any; output: any };
  pooltype: { input: any; output: any };
  statstimeframe: { input: any; output: any };
  timestamptz: { input: any; output: any };
};

/** columns and relationships of "AlgebraPoolData" */
export type AlgebraPoolData = {
  __typename?: "AlgebraPoolData";
  communityFeePercentage: Scalars["float8"]["output"];
  deployer: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  plugin: Scalars["String"]["output"];
  pluginConfig: Scalars["Int"]["output"];
  rawCommunityFee: Scalars["Int"]["output"];
  sqrtPriceX96: Scalars["numeric"]["output"];
  tick: Scalars["numeric"]["output"];
  tickSpacing: Scalars["Int"]["output"];
  version: Scalars["String"]["output"];
};

/** Boolean expression to filter rows from the table "AlgebraPoolData". All fields are combined with a logical 'AND'. */
export type AlgebraPoolData_Bool_Exp = {
  _and?: InputMaybe<Array<AlgebraPoolData_Bool_Exp>>;
  _not?: InputMaybe<AlgebraPoolData_Bool_Exp>;
  _or?: InputMaybe<Array<AlgebraPoolData_Bool_Exp>>;
  communityFeePercentage?: InputMaybe<Float8_Comparison_Exp>;
  deployer?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  plugin?: InputMaybe<String_Comparison_Exp>;
  pluginConfig?: InputMaybe<Int_Comparison_Exp>;
  rawCommunityFee?: InputMaybe<Int_Comparison_Exp>;
  sqrtPriceX96?: InputMaybe<Numeric_Comparison_Exp>;
  tick?: InputMaybe<Numeric_Comparison_Exp>;
  tickSpacing?: InputMaybe<Int_Comparison_Exp>;
  version?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "AlgebraPoolData". */
export type AlgebraPoolData_Order_By = {
  communityFeePercentage?: InputMaybe<Order_By>;
  deployer?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  plugin?: InputMaybe<Order_By>;
  pluginConfig?: InputMaybe<Order_By>;
  rawCommunityFee?: InputMaybe<Order_By>;
  sqrtPriceX96?: InputMaybe<Order_By>;
  tick?: InputMaybe<Order_By>;
  tickSpacing?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** select columns of table "AlgebraPoolData" */
export enum AlgebraPoolData_Select_Column {
  /** column name */
  CommunityFeePercentage = "communityFeePercentage",
  /** column name */
  Deployer = "deployer",
  /** column name */
  Id = "id",
  /** column name */
  Plugin = "plugin",
  /** column name */
  PluginConfig = "pluginConfig",
  /** column name */
  RawCommunityFee = "rawCommunityFee",
  /** column name */
  SqrtPriceX96 = "sqrtPriceX96",
  /** column name */
  Tick = "tick",
  /** column name */
  TickSpacing = "tickSpacing",
  /** column name */
  Version = "version",
}

/** Streaming cursor of the table "AlgebraPoolData" */
export type AlgebraPoolData_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AlgebraPoolData_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AlgebraPoolData_Stream_Cursor_Value_Input = {
  communityFeePercentage?: InputMaybe<Scalars["float8"]["input"]>;
  deployer?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  plugin?: InputMaybe<Scalars["String"]["input"]>;
  pluginConfig?: InputMaybe<Scalars["Int"]["input"]>;
  rawCommunityFee?: InputMaybe<Scalars["Int"]["input"]>;
  sqrtPriceX96?: InputMaybe<Scalars["numeric"]["input"]>;
  tick?: InputMaybe<Scalars["numeric"]["input"]>;
  tickSpacing?: InputMaybe<Scalars["Int"]["input"]>;
  version?: InputMaybe<Scalars["String"]["input"]>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** columns and relationships of "Pool" */
export type Pool = {
  __typename?: "Pool";
  accumulatedYield: Scalars["numeric"]["output"];
  /** An object relationship */
  algebraPoolData?: Maybe<AlgebraPoolData>;
  algebraPoolData_id?: Maybe<Scalars["String"]["output"]>;
  chainId: Scalars["Int"]["output"];
  createdAtBlock: Scalars["numeric"]["output"];
  createdAtTimestamp: Scalars["numeric"]["output"];
  currentFeeTierPercentage: Scalars["float8"]["output"];
  feesToken0: Scalars["numeric"]["output"];
  feesToken1: Scalars["numeric"]["output"];
  feesUsd: Scalars["numeric"]["output"];
  /** An array relationship */
  historicalData: Array<PoolHistoricalData>;
  id: Scalars["String"]["output"];
  initialFeeTierPercentage: Scalars["float8"]["output"];
  isDynamicFee: Scalars["Boolean"]["output"];
  lastActivityBlock: Scalars["numeric"]["output"];
  lastActivityDayId: Scalars["String"]["output"];
  lastActivityTimestamp: Scalars["numeric"]["output"];
  lastStatsRefreshTimestamp: Scalars["numeric"]["output"];
  liquidityNetInflowUsd: Scalars["numeric"]["output"];
  liquidityVolumeToken0: Scalars["numeric"]["output"];
  liquidityVolumeToken0Usd: Scalars["numeric"]["output"];
  liquidityVolumeToken1: Scalars["numeric"]["output"];
  liquidityVolumeToken1Usd: Scalars["numeric"]["output"];
  liquidityVolumeUsd: Scalars["numeric"]["output"];
  poolAddress: Scalars["String"]["output"];
  poolType: Scalars["pooltype"]["output"];
  positionManager: Scalars["String"]["output"];
  /** An object relationship */
  protocol?: Maybe<Protocol>;
  protocol_id: Scalars["String"]["output"];
  rawCurrentFeeTier: Scalars["Int"]["output"];
  rawInitialFeeTier: Scalars["Int"]["output"];
  /** An object relationship */
  slipstreamPoolData?: Maybe<SlipstreamPoolData>;
  slipstreamPoolData_id?: Maybe<Scalars["String"]["output"]>;
  swapVolumeToken0: Scalars["numeric"]["output"];
  swapVolumeToken0Usd: Scalars["numeric"]["output"];
  swapVolumeToken1: Scalars["numeric"]["output"];
  swapVolumeToken1Usd: Scalars["numeric"]["output"];
  swapVolumeUsd: Scalars["numeric"]["output"];
  swapsCount: Scalars["numeric"]["output"];
  /** An object relationship */
  token0?: Maybe<SingleChainToken>;
  token0UsdPrice: Scalars["numeric"]["output"];
  token0_id: Scalars["String"]["output"];
  /** An object relationship */
  token1?: Maybe<SingleChainToken>;
  token1UsdPrice: Scalars["numeric"]["output"];
  token1_id: Scalars["String"]["output"];
  tokens0PerToken1: Scalars["numeric"]["output"];
  tokens1PerToken0: Scalars["numeric"]["output"];
  /** An object relationship */
  totalStats7d?: Maybe<PoolTimeframedStats>;
  totalStats7d_id: Scalars["String"]["output"];
  /** An object relationship */
  totalStats24h?: Maybe<PoolTimeframedStats>;
  totalStats24h_id: Scalars["String"]["output"];
  /** An object relationship */
  totalStats30d?: Maybe<PoolTimeframedStats>;
  totalStats30d_id: Scalars["String"]["output"];
  /** An object relationship */
  totalStats90d?: Maybe<PoolTimeframedStats>;
  totalStats90d_id: Scalars["String"]["output"];
  totalValueLockedToken0: Scalars["numeric"]["output"];
  totalValueLockedToken0Usd: Scalars["numeric"]["output"];
  totalValueLockedToken1: Scalars["numeric"]["output"];
  totalValueLockedToken1Usd: Scalars["numeric"]["output"];
  totalValueLockedUsd: Scalars["numeric"]["output"];
  trackedFeesUsd: Scalars["numeric"]["output"];
  trackedLiquidityNetInflowUsd: Scalars["numeric"]["output"];
  trackedLiquidityVolumeToken0Usd: Scalars["numeric"]["output"];
  trackedLiquidityVolumeToken1Usd: Scalars["numeric"]["output"];
  trackedLiquidityVolumeUsd: Scalars["numeric"]["output"];
  trackedSwapVolumeToken0Usd: Scalars["numeric"]["output"];
  trackedSwapVolumeToken1Usd: Scalars["numeric"]["output"];
  trackedSwapVolumeUsd: Scalars["numeric"]["output"];
  trackedToken0UsdPrice: Scalars["numeric"]["output"];
  trackedToken1UsdPrice: Scalars["numeric"]["output"];
  trackedTotalValueLockedToken0Usd: Scalars["numeric"]["output"];
  trackedTotalValueLockedToken1Usd: Scalars["numeric"]["output"];
  trackedTotalValueLockedUsd: Scalars["numeric"]["output"];
  /** An object relationship */
  v3PoolData?: Maybe<V3PoolData>;
  v3PoolData_id?: Maybe<Scalars["String"]["output"]>;
  /** An object relationship */
  v4PoolData?: Maybe<V4PoolData>;
  v4PoolData_id?: Maybe<Scalars["String"]["output"]>;
};

/** columns and relationships of "Pool" */
export type PoolHistoricalDataArgs = {
  distinct_on?: InputMaybe<Array<PoolHistoricalData_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PoolHistoricalData_Order_By>>;
  where?: InputMaybe<PoolHistoricalData_Bool_Exp>;
};

/** columns and relationships of "PoolHistoricalData" */
export type PoolHistoricalData = {
  __typename?: "PoolHistoricalData";
  accumulatedYieldAtEnd: Scalars["numeric"]["output"];
  accumulatedYieldAtStart: Scalars["numeric"]["output"];
  feesUsdAtEnd: Scalars["numeric"]["output"];
  feesUsdAtStart: Scalars["numeric"]["output"];
  id: Scalars["String"]["output"];
  interval: Scalars["historicaldatainterval"]["output"];
  intervalFeesToken0: Scalars["numeric"]["output"];
  intervalFeesToken1: Scalars["numeric"]["output"];
  intervalFeesUsd: Scalars["numeric"]["output"];
  intervalLiquidityInflowToken0: Scalars["numeric"]["output"];
  intervalLiquidityInflowToken1: Scalars["numeric"]["output"];
  intervalLiquidityInflowUsd: Scalars["numeric"]["output"];
  intervalLiquidityNetInflowToken0: Scalars["numeric"]["output"];
  intervalLiquidityNetInflowToken1: Scalars["numeric"]["output"];
  intervalLiquidityNetInflowUsd: Scalars["numeric"]["output"];
  intervalLiquidityOutflowToken0: Scalars["numeric"]["output"];
  intervalLiquidityOutflowToken1: Scalars["numeric"]["output"];
  intervalLiquidityOutflowUsd: Scalars["numeric"]["output"];
  intervalLiquidityVolumeToken0: Scalars["numeric"]["output"];
  intervalLiquidityVolumeToken1: Scalars["numeric"]["output"];
  intervalLiquidityVolumeUsd: Scalars["numeric"]["output"];
  intervalSwapVolumeToken0: Scalars["numeric"]["output"];
  intervalSwapVolumeToken1: Scalars["numeric"]["output"];
  intervalSwapVolumeUsd: Scalars["numeric"]["output"];
  liquidityNetInflowUsdAtEnd: Scalars["numeric"]["output"];
  liquidityNetInflowUsdAtStart: Scalars["numeric"]["output"];
  liquidityVolumeUsdAtEnd: Scalars["numeric"]["output"];
  liquidityVolumeUsdAtStart: Scalars["numeric"]["output"];
  /** An object relationship */
  pool?: Maybe<Pool>;
  pool_id: Scalars["String"]["output"];
  swapVolumeUsdAtEnd: Scalars["numeric"]["output"];
  swapVolumeUsdAtStart: Scalars["numeric"]["output"];
  timestampAtEnd: Scalars["numeric"]["output"];
  timestampAtStart: Scalars["numeric"]["output"];
  totalValueLockedToken0AtEnd: Scalars["numeric"]["output"];
  totalValueLockedToken0AtStart: Scalars["numeric"]["output"];
  totalValueLockedToken1AtEnd: Scalars["numeric"]["output"];
  totalValueLockedToken1AtStart: Scalars["numeric"]["output"];
  totalValueLockedUsdAtEnd: Scalars["numeric"]["output"];
  totalValueLockedUsdAtStart: Scalars["numeric"]["output"];
  trackedFeesUsdAtEnd: Scalars["numeric"]["output"];
  trackedFeesUsdAtStart: Scalars["numeric"]["output"];
  trackedLiquidityNetInflowUsdAtEnd: Scalars["numeric"]["output"];
  trackedLiquidityNetInflowUsdAtStart: Scalars["numeric"]["output"];
  trackedLiquidityVolumeUsdAtEnd: Scalars["numeric"]["output"];
  trackedLiquidityVolumeUsdAtStart: Scalars["numeric"]["output"];
  trackedSwapVolumeUsdAtEnd: Scalars["numeric"]["output"];
  trackedSwapVolumeUsdAtStart: Scalars["numeric"]["output"];
  trackedTotalValueLockedUsdAtEnd: Scalars["numeric"]["output"];
  trackedTotalValueLockedUsdAtStart: Scalars["numeric"]["output"];
};

/** order by aggregate values of table "PoolHistoricalData" */
export type PoolHistoricalData_Aggregate_Order_By = {
  avg?: InputMaybe<PoolHistoricalData_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<PoolHistoricalData_Max_Order_By>;
  min?: InputMaybe<PoolHistoricalData_Min_Order_By>;
  stddev?: InputMaybe<PoolHistoricalData_Stddev_Order_By>;
  stddev_pop?: InputMaybe<PoolHistoricalData_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<PoolHistoricalData_Stddev_Samp_Order_By>;
  sum?: InputMaybe<PoolHistoricalData_Sum_Order_By>;
  var_pop?: InputMaybe<PoolHistoricalData_Var_Pop_Order_By>;
  var_samp?: InputMaybe<PoolHistoricalData_Var_Samp_Order_By>;
  variance?: InputMaybe<PoolHistoricalData_Variance_Order_By>;
};

/** order by avg() on columns of table "PoolHistoricalData" */
export type PoolHistoricalData_Avg_Order_By = {
  accumulatedYieldAtEnd?: InputMaybe<Order_By>;
  accumulatedYieldAtStart?: InputMaybe<Order_By>;
  feesUsdAtEnd?: InputMaybe<Order_By>;
  feesUsdAtStart?: InputMaybe<Order_By>;
  intervalFeesToken0?: InputMaybe<Order_By>;
  intervalFeesToken1?: InputMaybe<Order_By>;
  intervalFeesUsd?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityOutflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken0?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken1?: InputMaybe<Order_By>;
  intervalLiquidityVolumeUsd?: InputMaybe<Order_By>;
  intervalSwapVolumeToken0?: InputMaybe<Order_By>;
  intervalSwapVolumeToken1?: InputMaybe<Order_By>;
  intervalSwapVolumeUsd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  swapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  swapVolumeUsdAtStart?: InputMaybe<Order_By>;
  timestampAtEnd?: InputMaybe<Order_By>;
  timestampAtStart?: InputMaybe<Order_By>;
  totalValueLockedToken0AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken0AtStart?: InputMaybe<Order_By>;
  totalValueLockedToken1AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken1AtStart?: InputMaybe<Order_By>;
  totalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  totalValueLockedUsdAtStart?: InputMaybe<Order_By>;
  trackedFeesUsdAtEnd?: InputMaybe<Order_By>;
  trackedFeesUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtStart?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "PoolHistoricalData". All fields are combined with a logical 'AND'. */
export type PoolHistoricalData_Bool_Exp = {
  _and?: InputMaybe<Array<PoolHistoricalData_Bool_Exp>>;
  _not?: InputMaybe<PoolHistoricalData_Bool_Exp>;
  _or?: InputMaybe<Array<PoolHistoricalData_Bool_Exp>>;
  accumulatedYieldAtEnd?: InputMaybe<Numeric_Comparison_Exp>;
  accumulatedYieldAtStart?: InputMaybe<Numeric_Comparison_Exp>;
  feesUsdAtEnd?: InputMaybe<Numeric_Comparison_Exp>;
  feesUsdAtStart?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  interval?: InputMaybe<Historicaldatainterval_Comparison_Exp>;
  intervalFeesToken0?: InputMaybe<Numeric_Comparison_Exp>;
  intervalFeesToken1?: InputMaybe<Numeric_Comparison_Exp>;
  intervalFeesUsd?: InputMaybe<Numeric_Comparison_Exp>;
  intervalLiquidityInflowToken0?: InputMaybe<Numeric_Comparison_Exp>;
  intervalLiquidityInflowToken1?: InputMaybe<Numeric_Comparison_Exp>;
  intervalLiquidityInflowUsd?: InputMaybe<Numeric_Comparison_Exp>;
  intervalLiquidityNetInflowToken0?: InputMaybe<Numeric_Comparison_Exp>;
  intervalLiquidityNetInflowToken1?: InputMaybe<Numeric_Comparison_Exp>;
  intervalLiquidityNetInflowUsd?: InputMaybe<Numeric_Comparison_Exp>;
  intervalLiquidityOutflowToken0?: InputMaybe<Numeric_Comparison_Exp>;
  intervalLiquidityOutflowToken1?: InputMaybe<Numeric_Comparison_Exp>;
  intervalLiquidityOutflowUsd?: InputMaybe<Numeric_Comparison_Exp>;
  intervalLiquidityVolumeToken0?: InputMaybe<Numeric_Comparison_Exp>;
  intervalLiquidityVolumeToken1?: InputMaybe<Numeric_Comparison_Exp>;
  intervalLiquidityVolumeUsd?: InputMaybe<Numeric_Comparison_Exp>;
  intervalSwapVolumeToken0?: InputMaybe<Numeric_Comparison_Exp>;
  intervalSwapVolumeToken1?: InputMaybe<Numeric_Comparison_Exp>;
  intervalSwapVolumeUsd?: InputMaybe<Numeric_Comparison_Exp>;
  liquidityNetInflowUsdAtEnd?: InputMaybe<Numeric_Comparison_Exp>;
  liquidityNetInflowUsdAtStart?: InputMaybe<Numeric_Comparison_Exp>;
  liquidityVolumeUsdAtEnd?: InputMaybe<Numeric_Comparison_Exp>;
  liquidityVolumeUsdAtStart?: InputMaybe<Numeric_Comparison_Exp>;
  pool?: InputMaybe<Pool_Bool_Exp>;
  pool_id?: InputMaybe<String_Comparison_Exp>;
  swapVolumeUsdAtEnd?: InputMaybe<Numeric_Comparison_Exp>;
  swapVolumeUsdAtStart?: InputMaybe<Numeric_Comparison_Exp>;
  timestampAtEnd?: InputMaybe<Numeric_Comparison_Exp>;
  timestampAtStart?: InputMaybe<Numeric_Comparison_Exp>;
  totalValueLockedToken0AtEnd?: InputMaybe<Numeric_Comparison_Exp>;
  totalValueLockedToken0AtStart?: InputMaybe<Numeric_Comparison_Exp>;
  totalValueLockedToken1AtEnd?: InputMaybe<Numeric_Comparison_Exp>;
  totalValueLockedToken1AtStart?: InputMaybe<Numeric_Comparison_Exp>;
  totalValueLockedUsdAtEnd?: InputMaybe<Numeric_Comparison_Exp>;
  totalValueLockedUsdAtStart?: InputMaybe<Numeric_Comparison_Exp>;
  trackedFeesUsdAtEnd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedFeesUsdAtStart?: InputMaybe<Numeric_Comparison_Exp>;
  trackedLiquidityNetInflowUsdAtEnd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedLiquidityNetInflowUsdAtStart?: InputMaybe<Numeric_Comparison_Exp>;
  trackedLiquidityVolumeUsdAtEnd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedLiquidityVolumeUsdAtStart?: InputMaybe<Numeric_Comparison_Exp>;
  trackedSwapVolumeUsdAtEnd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedSwapVolumeUsdAtStart?: InputMaybe<Numeric_Comparison_Exp>;
  trackedTotalValueLockedUsdAtEnd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedTotalValueLockedUsdAtStart?: InputMaybe<Numeric_Comparison_Exp>;
};

/** order by max() on columns of table "PoolHistoricalData" */
export type PoolHistoricalData_Max_Order_By = {
  accumulatedYieldAtEnd?: InputMaybe<Order_By>;
  accumulatedYieldAtStart?: InputMaybe<Order_By>;
  feesUsdAtEnd?: InputMaybe<Order_By>;
  feesUsdAtStart?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interval?: InputMaybe<Order_By>;
  intervalFeesToken0?: InputMaybe<Order_By>;
  intervalFeesToken1?: InputMaybe<Order_By>;
  intervalFeesUsd?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityOutflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken0?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken1?: InputMaybe<Order_By>;
  intervalLiquidityVolumeUsd?: InputMaybe<Order_By>;
  intervalSwapVolumeToken0?: InputMaybe<Order_By>;
  intervalSwapVolumeToken1?: InputMaybe<Order_By>;
  intervalSwapVolumeUsd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  pool_id?: InputMaybe<Order_By>;
  swapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  swapVolumeUsdAtStart?: InputMaybe<Order_By>;
  timestampAtEnd?: InputMaybe<Order_By>;
  timestampAtStart?: InputMaybe<Order_By>;
  totalValueLockedToken0AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken0AtStart?: InputMaybe<Order_By>;
  totalValueLockedToken1AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken1AtStart?: InputMaybe<Order_By>;
  totalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  totalValueLockedUsdAtStart?: InputMaybe<Order_By>;
  trackedFeesUsdAtEnd?: InputMaybe<Order_By>;
  trackedFeesUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtStart?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "PoolHistoricalData" */
export type PoolHistoricalData_Min_Order_By = {
  accumulatedYieldAtEnd?: InputMaybe<Order_By>;
  accumulatedYieldAtStart?: InputMaybe<Order_By>;
  feesUsdAtEnd?: InputMaybe<Order_By>;
  feesUsdAtStart?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interval?: InputMaybe<Order_By>;
  intervalFeesToken0?: InputMaybe<Order_By>;
  intervalFeesToken1?: InputMaybe<Order_By>;
  intervalFeesUsd?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityOutflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken0?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken1?: InputMaybe<Order_By>;
  intervalLiquidityVolumeUsd?: InputMaybe<Order_By>;
  intervalSwapVolumeToken0?: InputMaybe<Order_By>;
  intervalSwapVolumeToken1?: InputMaybe<Order_By>;
  intervalSwapVolumeUsd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  pool_id?: InputMaybe<Order_By>;
  swapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  swapVolumeUsdAtStart?: InputMaybe<Order_By>;
  timestampAtEnd?: InputMaybe<Order_By>;
  timestampAtStart?: InputMaybe<Order_By>;
  totalValueLockedToken0AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken0AtStart?: InputMaybe<Order_By>;
  totalValueLockedToken1AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken1AtStart?: InputMaybe<Order_By>;
  totalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  totalValueLockedUsdAtStart?: InputMaybe<Order_By>;
  trackedFeesUsdAtEnd?: InputMaybe<Order_By>;
  trackedFeesUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtStart?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "PoolHistoricalData". */
export type PoolHistoricalData_Order_By = {
  accumulatedYieldAtEnd?: InputMaybe<Order_By>;
  accumulatedYieldAtStart?: InputMaybe<Order_By>;
  feesUsdAtEnd?: InputMaybe<Order_By>;
  feesUsdAtStart?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interval?: InputMaybe<Order_By>;
  intervalFeesToken0?: InputMaybe<Order_By>;
  intervalFeesToken1?: InputMaybe<Order_By>;
  intervalFeesUsd?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityOutflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken0?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken1?: InputMaybe<Order_By>;
  intervalLiquidityVolumeUsd?: InputMaybe<Order_By>;
  intervalSwapVolumeToken0?: InputMaybe<Order_By>;
  intervalSwapVolumeToken1?: InputMaybe<Order_By>;
  intervalSwapVolumeUsd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  pool?: InputMaybe<Pool_Order_By>;
  pool_id?: InputMaybe<Order_By>;
  swapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  swapVolumeUsdAtStart?: InputMaybe<Order_By>;
  timestampAtEnd?: InputMaybe<Order_By>;
  timestampAtStart?: InputMaybe<Order_By>;
  totalValueLockedToken0AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken0AtStart?: InputMaybe<Order_By>;
  totalValueLockedToken1AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken1AtStart?: InputMaybe<Order_By>;
  totalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  totalValueLockedUsdAtStart?: InputMaybe<Order_By>;
  trackedFeesUsdAtEnd?: InputMaybe<Order_By>;
  trackedFeesUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtStart?: InputMaybe<Order_By>;
};

/** select columns of table "PoolHistoricalData" */
export enum PoolHistoricalData_Select_Column {
  /** column name */
  AccumulatedYieldAtEnd = "accumulatedYieldAtEnd",
  /** column name */
  AccumulatedYieldAtStart = "accumulatedYieldAtStart",
  /** column name */
  FeesUsdAtEnd = "feesUsdAtEnd",
  /** column name */
  FeesUsdAtStart = "feesUsdAtStart",
  /** column name */
  Id = "id",
  /** column name */
  Interval = "interval",
  /** column name */
  IntervalFeesToken0 = "intervalFeesToken0",
  /** column name */
  IntervalFeesToken1 = "intervalFeesToken1",
  /** column name */
  IntervalFeesUsd = "intervalFeesUsd",
  /** column name */
  IntervalLiquidityInflowToken0 = "intervalLiquidityInflowToken0",
  /** column name */
  IntervalLiquidityInflowToken1 = "intervalLiquidityInflowToken1",
  /** column name */
  IntervalLiquidityInflowUsd = "intervalLiquidityInflowUsd",
  /** column name */
  IntervalLiquidityNetInflowToken0 = "intervalLiquidityNetInflowToken0",
  /** column name */
  IntervalLiquidityNetInflowToken1 = "intervalLiquidityNetInflowToken1",
  /** column name */
  IntervalLiquidityNetInflowUsd = "intervalLiquidityNetInflowUsd",
  /** column name */
  IntervalLiquidityOutflowToken0 = "intervalLiquidityOutflowToken0",
  /** column name */
  IntervalLiquidityOutflowToken1 = "intervalLiquidityOutflowToken1",
  /** column name */
  IntervalLiquidityOutflowUsd = "intervalLiquidityOutflowUsd",
  /** column name */
  IntervalLiquidityVolumeToken0 = "intervalLiquidityVolumeToken0",
  /** column name */
  IntervalLiquidityVolumeToken1 = "intervalLiquidityVolumeToken1",
  /** column name */
  IntervalLiquidityVolumeUsd = "intervalLiquidityVolumeUsd",
  /** column name */
  IntervalSwapVolumeToken0 = "intervalSwapVolumeToken0",
  /** column name */
  IntervalSwapVolumeToken1 = "intervalSwapVolumeToken1",
  /** column name */
  IntervalSwapVolumeUsd = "intervalSwapVolumeUsd",
  /** column name */
  LiquidityNetInflowUsdAtEnd = "liquidityNetInflowUsdAtEnd",
  /** column name */
  LiquidityNetInflowUsdAtStart = "liquidityNetInflowUsdAtStart",
  /** column name */
  LiquidityVolumeUsdAtEnd = "liquidityVolumeUsdAtEnd",
  /** column name */
  LiquidityVolumeUsdAtStart = "liquidityVolumeUsdAtStart",
  /** column name */
  PoolId = "pool_id",
  /** column name */
  SwapVolumeUsdAtEnd = "swapVolumeUsdAtEnd",
  /** column name */
  SwapVolumeUsdAtStart = "swapVolumeUsdAtStart",
  /** column name */
  TimestampAtEnd = "timestampAtEnd",
  /** column name */
  TimestampAtStart = "timestampAtStart",
  /** column name */
  TotalValueLockedToken0AtEnd = "totalValueLockedToken0AtEnd",
  /** column name */
  TotalValueLockedToken0AtStart = "totalValueLockedToken0AtStart",
  /** column name */
  TotalValueLockedToken1AtEnd = "totalValueLockedToken1AtEnd",
  /** column name */
  TotalValueLockedToken1AtStart = "totalValueLockedToken1AtStart",
  /** column name */
  TotalValueLockedUsdAtEnd = "totalValueLockedUsdAtEnd",
  /** column name */
  TotalValueLockedUsdAtStart = "totalValueLockedUsdAtStart",
  /** column name */
  TrackedFeesUsdAtEnd = "trackedFeesUsdAtEnd",
  /** column name */
  TrackedFeesUsdAtStart = "trackedFeesUsdAtStart",
  /** column name */
  TrackedLiquidityNetInflowUsdAtEnd = "trackedLiquidityNetInflowUsdAtEnd",
  /** column name */
  TrackedLiquidityNetInflowUsdAtStart = "trackedLiquidityNetInflowUsdAtStart",
  /** column name */
  TrackedLiquidityVolumeUsdAtEnd = "trackedLiquidityVolumeUsdAtEnd",
  /** column name */
  TrackedLiquidityVolumeUsdAtStart = "trackedLiquidityVolumeUsdAtStart",
  /** column name */
  TrackedSwapVolumeUsdAtEnd = "trackedSwapVolumeUsdAtEnd",
  /** column name */
  TrackedSwapVolumeUsdAtStart = "trackedSwapVolumeUsdAtStart",
  /** column name */
  TrackedTotalValueLockedUsdAtEnd = "trackedTotalValueLockedUsdAtEnd",
  /** column name */
  TrackedTotalValueLockedUsdAtStart = "trackedTotalValueLockedUsdAtStart",
}

/** order by stddev() on columns of table "PoolHistoricalData" */
export type PoolHistoricalData_Stddev_Order_By = {
  accumulatedYieldAtEnd?: InputMaybe<Order_By>;
  accumulatedYieldAtStart?: InputMaybe<Order_By>;
  feesUsdAtEnd?: InputMaybe<Order_By>;
  feesUsdAtStart?: InputMaybe<Order_By>;
  intervalFeesToken0?: InputMaybe<Order_By>;
  intervalFeesToken1?: InputMaybe<Order_By>;
  intervalFeesUsd?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityOutflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken0?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken1?: InputMaybe<Order_By>;
  intervalLiquidityVolumeUsd?: InputMaybe<Order_By>;
  intervalSwapVolumeToken0?: InputMaybe<Order_By>;
  intervalSwapVolumeToken1?: InputMaybe<Order_By>;
  intervalSwapVolumeUsd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  swapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  swapVolumeUsdAtStart?: InputMaybe<Order_By>;
  timestampAtEnd?: InputMaybe<Order_By>;
  timestampAtStart?: InputMaybe<Order_By>;
  totalValueLockedToken0AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken0AtStart?: InputMaybe<Order_By>;
  totalValueLockedToken1AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken1AtStart?: InputMaybe<Order_By>;
  totalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  totalValueLockedUsdAtStart?: InputMaybe<Order_By>;
  trackedFeesUsdAtEnd?: InputMaybe<Order_By>;
  trackedFeesUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtStart?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "PoolHistoricalData" */
export type PoolHistoricalData_Stddev_Pop_Order_By = {
  accumulatedYieldAtEnd?: InputMaybe<Order_By>;
  accumulatedYieldAtStart?: InputMaybe<Order_By>;
  feesUsdAtEnd?: InputMaybe<Order_By>;
  feesUsdAtStart?: InputMaybe<Order_By>;
  intervalFeesToken0?: InputMaybe<Order_By>;
  intervalFeesToken1?: InputMaybe<Order_By>;
  intervalFeesUsd?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityOutflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken0?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken1?: InputMaybe<Order_By>;
  intervalLiquidityVolumeUsd?: InputMaybe<Order_By>;
  intervalSwapVolumeToken0?: InputMaybe<Order_By>;
  intervalSwapVolumeToken1?: InputMaybe<Order_By>;
  intervalSwapVolumeUsd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  swapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  swapVolumeUsdAtStart?: InputMaybe<Order_By>;
  timestampAtEnd?: InputMaybe<Order_By>;
  timestampAtStart?: InputMaybe<Order_By>;
  totalValueLockedToken0AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken0AtStart?: InputMaybe<Order_By>;
  totalValueLockedToken1AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken1AtStart?: InputMaybe<Order_By>;
  totalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  totalValueLockedUsdAtStart?: InputMaybe<Order_By>;
  trackedFeesUsdAtEnd?: InputMaybe<Order_By>;
  trackedFeesUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtStart?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "PoolHistoricalData" */
export type PoolHistoricalData_Stddev_Samp_Order_By = {
  accumulatedYieldAtEnd?: InputMaybe<Order_By>;
  accumulatedYieldAtStart?: InputMaybe<Order_By>;
  feesUsdAtEnd?: InputMaybe<Order_By>;
  feesUsdAtStart?: InputMaybe<Order_By>;
  intervalFeesToken0?: InputMaybe<Order_By>;
  intervalFeesToken1?: InputMaybe<Order_By>;
  intervalFeesUsd?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityOutflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken0?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken1?: InputMaybe<Order_By>;
  intervalLiquidityVolumeUsd?: InputMaybe<Order_By>;
  intervalSwapVolumeToken0?: InputMaybe<Order_By>;
  intervalSwapVolumeToken1?: InputMaybe<Order_By>;
  intervalSwapVolumeUsd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  swapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  swapVolumeUsdAtStart?: InputMaybe<Order_By>;
  timestampAtEnd?: InputMaybe<Order_By>;
  timestampAtStart?: InputMaybe<Order_By>;
  totalValueLockedToken0AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken0AtStart?: InputMaybe<Order_By>;
  totalValueLockedToken1AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken1AtStart?: InputMaybe<Order_By>;
  totalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  totalValueLockedUsdAtStart?: InputMaybe<Order_By>;
  trackedFeesUsdAtEnd?: InputMaybe<Order_By>;
  trackedFeesUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtStart?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "PoolHistoricalData" */
export type PoolHistoricalData_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: PoolHistoricalData_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type PoolHistoricalData_Stream_Cursor_Value_Input = {
  accumulatedYieldAtEnd?: InputMaybe<Scalars["numeric"]["input"]>;
  accumulatedYieldAtStart?: InputMaybe<Scalars["numeric"]["input"]>;
  feesUsdAtEnd?: InputMaybe<Scalars["numeric"]["input"]>;
  feesUsdAtStart?: InputMaybe<Scalars["numeric"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  interval?: InputMaybe<Scalars["historicaldatainterval"]["input"]>;
  intervalFeesToken0?: InputMaybe<Scalars["numeric"]["input"]>;
  intervalFeesToken1?: InputMaybe<Scalars["numeric"]["input"]>;
  intervalFeesUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  intervalLiquidityInflowToken0?: InputMaybe<Scalars["numeric"]["input"]>;
  intervalLiquidityInflowToken1?: InputMaybe<Scalars["numeric"]["input"]>;
  intervalLiquidityInflowUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  intervalLiquidityNetInflowToken0?: InputMaybe<Scalars["numeric"]["input"]>;
  intervalLiquidityNetInflowToken1?: InputMaybe<Scalars["numeric"]["input"]>;
  intervalLiquidityNetInflowUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  intervalLiquidityOutflowToken0?: InputMaybe<Scalars["numeric"]["input"]>;
  intervalLiquidityOutflowToken1?: InputMaybe<Scalars["numeric"]["input"]>;
  intervalLiquidityOutflowUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  intervalLiquidityVolumeToken0?: InputMaybe<Scalars["numeric"]["input"]>;
  intervalLiquidityVolumeToken1?: InputMaybe<Scalars["numeric"]["input"]>;
  intervalLiquidityVolumeUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  intervalSwapVolumeToken0?: InputMaybe<Scalars["numeric"]["input"]>;
  intervalSwapVolumeToken1?: InputMaybe<Scalars["numeric"]["input"]>;
  intervalSwapVolumeUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  liquidityNetInflowUsdAtEnd?: InputMaybe<Scalars["numeric"]["input"]>;
  liquidityNetInflowUsdAtStart?: InputMaybe<Scalars["numeric"]["input"]>;
  liquidityVolumeUsdAtEnd?: InputMaybe<Scalars["numeric"]["input"]>;
  liquidityVolumeUsdAtStart?: InputMaybe<Scalars["numeric"]["input"]>;
  pool_id?: InputMaybe<Scalars["String"]["input"]>;
  swapVolumeUsdAtEnd?: InputMaybe<Scalars["numeric"]["input"]>;
  swapVolumeUsdAtStart?: InputMaybe<Scalars["numeric"]["input"]>;
  timestampAtEnd?: InputMaybe<Scalars["numeric"]["input"]>;
  timestampAtStart?: InputMaybe<Scalars["numeric"]["input"]>;
  totalValueLockedToken0AtEnd?: InputMaybe<Scalars["numeric"]["input"]>;
  totalValueLockedToken0AtStart?: InputMaybe<Scalars["numeric"]["input"]>;
  totalValueLockedToken1AtEnd?: InputMaybe<Scalars["numeric"]["input"]>;
  totalValueLockedToken1AtStart?: InputMaybe<Scalars["numeric"]["input"]>;
  totalValueLockedUsdAtEnd?: InputMaybe<Scalars["numeric"]["input"]>;
  totalValueLockedUsdAtStart?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedFeesUsdAtEnd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedFeesUsdAtStart?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedLiquidityNetInflowUsdAtEnd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedLiquidityNetInflowUsdAtStart?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedLiquidityVolumeUsdAtEnd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedLiquidityVolumeUsdAtStart?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedSwapVolumeUsdAtEnd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedSwapVolumeUsdAtStart?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedTotalValueLockedUsdAtEnd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedTotalValueLockedUsdAtStart?: InputMaybe<Scalars["numeric"]["input"]>;
};

/** order by sum() on columns of table "PoolHistoricalData" */
export type PoolHistoricalData_Sum_Order_By = {
  accumulatedYieldAtEnd?: InputMaybe<Order_By>;
  accumulatedYieldAtStart?: InputMaybe<Order_By>;
  feesUsdAtEnd?: InputMaybe<Order_By>;
  feesUsdAtStart?: InputMaybe<Order_By>;
  intervalFeesToken0?: InputMaybe<Order_By>;
  intervalFeesToken1?: InputMaybe<Order_By>;
  intervalFeesUsd?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityOutflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken0?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken1?: InputMaybe<Order_By>;
  intervalLiquidityVolumeUsd?: InputMaybe<Order_By>;
  intervalSwapVolumeToken0?: InputMaybe<Order_By>;
  intervalSwapVolumeToken1?: InputMaybe<Order_By>;
  intervalSwapVolumeUsd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  swapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  swapVolumeUsdAtStart?: InputMaybe<Order_By>;
  timestampAtEnd?: InputMaybe<Order_By>;
  timestampAtStart?: InputMaybe<Order_By>;
  totalValueLockedToken0AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken0AtStart?: InputMaybe<Order_By>;
  totalValueLockedToken1AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken1AtStart?: InputMaybe<Order_By>;
  totalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  totalValueLockedUsdAtStart?: InputMaybe<Order_By>;
  trackedFeesUsdAtEnd?: InputMaybe<Order_By>;
  trackedFeesUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtStart?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "PoolHistoricalData" */
export type PoolHistoricalData_Var_Pop_Order_By = {
  accumulatedYieldAtEnd?: InputMaybe<Order_By>;
  accumulatedYieldAtStart?: InputMaybe<Order_By>;
  feesUsdAtEnd?: InputMaybe<Order_By>;
  feesUsdAtStart?: InputMaybe<Order_By>;
  intervalFeesToken0?: InputMaybe<Order_By>;
  intervalFeesToken1?: InputMaybe<Order_By>;
  intervalFeesUsd?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityOutflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken0?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken1?: InputMaybe<Order_By>;
  intervalLiquidityVolumeUsd?: InputMaybe<Order_By>;
  intervalSwapVolumeToken0?: InputMaybe<Order_By>;
  intervalSwapVolumeToken1?: InputMaybe<Order_By>;
  intervalSwapVolumeUsd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  swapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  swapVolumeUsdAtStart?: InputMaybe<Order_By>;
  timestampAtEnd?: InputMaybe<Order_By>;
  timestampAtStart?: InputMaybe<Order_By>;
  totalValueLockedToken0AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken0AtStart?: InputMaybe<Order_By>;
  totalValueLockedToken1AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken1AtStart?: InputMaybe<Order_By>;
  totalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  totalValueLockedUsdAtStart?: InputMaybe<Order_By>;
  trackedFeesUsdAtEnd?: InputMaybe<Order_By>;
  trackedFeesUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtStart?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "PoolHistoricalData" */
export type PoolHistoricalData_Var_Samp_Order_By = {
  accumulatedYieldAtEnd?: InputMaybe<Order_By>;
  accumulatedYieldAtStart?: InputMaybe<Order_By>;
  feesUsdAtEnd?: InputMaybe<Order_By>;
  feesUsdAtStart?: InputMaybe<Order_By>;
  intervalFeesToken0?: InputMaybe<Order_By>;
  intervalFeesToken1?: InputMaybe<Order_By>;
  intervalFeesUsd?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityOutflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken0?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken1?: InputMaybe<Order_By>;
  intervalLiquidityVolumeUsd?: InputMaybe<Order_By>;
  intervalSwapVolumeToken0?: InputMaybe<Order_By>;
  intervalSwapVolumeToken1?: InputMaybe<Order_By>;
  intervalSwapVolumeUsd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  swapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  swapVolumeUsdAtStart?: InputMaybe<Order_By>;
  timestampAtEnd?: InputMaybe<Order_By>;
  timestampAtStart?: InputMaybe<Order_By>;
  totalValueLockedToken0AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken0AtStart?: InputMaybe<Order_By>;
  totalValueLockedToken1AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken1AtStart?: InputMaybe<Order_By>;
  totalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  totalValueLockedUsdAtStart?: InputMaybe<Order_By>;
  trackedFeesUsdAtEnd?: InputMaybe<Order_By>;
  trackedFeesUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtStart?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "PoolHistoricalData" */
export type PoolHistoricalData_Variance_Order_By = {
  accumulatedYieldAtEnd?: InputMaybe<Order_By>;
  accumulatedYieldAtStart?: InputMaybe<Order_By>;
  feesUsdAtEnd?: InputMaybe<Order_By>;
  feesUsdAtStart?: InputMaybe<Order_By>;
  intervalFeesToken0?: InputMaybe<Order_By>;
  intervalFeesToken1?: InputMaybe<Order_By>;
  intervalFeesUsd?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken0?: InputMaybe<Order_By>;
  intervalLiquidityOutflowToken1?: InputMaybe<Order_By>;
  intervalLiquidityOutflowUsd?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken0?: InputMaybe<Order_By>;
  intervalLiquidityVolumeToken1?: InputMaybe<Order_By>;
  intervalLiquidityVolumeUsd?: InputMaybe<Order_By>;
  intervalSwapVolumeToken0?: InputMaybe<Order_By>;
  intervalSwapVolumeToken1?: InputMaybe<Order_By>;
  intervalSwapVolumeUsd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  liquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  liquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  swapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  swapVolumeUsdAtStart?: InputMaybe<Order_By>;
  timestampAtEnd?: InputMaybe<Order_By>;
  timestampAtStart?: InputMaybe<Order_By>;
  totalValueLockedToken0AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken0AtStart?: InputMaybe<Order_By>;
  totalValueLockedToken1AtEnd?: InputMaybe<Order_By>;
  totalValueLockedToken1AtStart?: InputMaybe<Order_By>;
  totalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  totalValueLockedUsdAtStart?: InputMaybe<Order_By>;
  trackedFeesUsdAtEnd?: InputMaybe<Order_By>;
  trackedFeesUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsdAtStart?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtEnd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsdAtStart?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtEnd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsdAtStart?: InputMaybe<Order_By>;
};

/** columns and relationships of "PoolTimeframedStats" */
export type PoolTimeframedStats = {
  __typename?: "PoolTimeframedStats";
  accumulatedYield: Scalars["numeric"]["output"];
  dataPointTimestamp: Scalars["numeric"]["output"];
  feesUsd: Scalars["numeric"]["output"];
  id: Scalars["String"]["output"];
  liquidityNetInflowUsd: Scalars["numeric"]["output"];
  liquidityVolumeUsd: Scalars["numeric"]["output"];
  /** An object relationship */
  pool?: Maybe<Pool>;
  pool_id: Scalars["String"]["output"];
  swapVolumeUsd: Scalars["numeric"]["output"];
  timeframe: Scalars["statstimeframe"]["output"];
  trackedFeesUsd: Scalars["numeric"]["output"];
  trackedLiquidityNetInflowUsd: Scalars["numeric"]["output"];
  trackedLiquidityVolumeUsd: Scalars["numeric"]["output"];
  trackedSwapVolumeUsd: Scalars["numeric"]["output"];
  yearlyYield: Scalars["numeric"]["output"];
};

/** Boolean expression to filter rows from the table "PoolTimeframedStats". All fields are combined with a logical 'AND'. */
export type PoolTimeframedStats_Bool_Exp = {
  _and?: InputMaybe<Array<PoolTimeframedStats_Bool_Exp>>;
  _not?: InputMaybe<PoolTimeframedStats_Bool_Exp>;
  _or?: InputMaybe<Array<PoolTimeframedStats_Bool_Exp>>;
  accumulatedYield?: InputMaybe<Numeric_Comparison_Exp>;
  dataPointTimestamp?: InputMaybe<Numeric_Comparison_Exp>;
  feesUsd?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  liquidityNetInflowUsd?: InputMaybe<Numeric_Comparison_Exp>;
  liquidityVolumeUsd?: InputMaybe<Numeric_Comparison_Exp>;
  pool?: InputMaybe<Pool_Bool_Exp>;
  pool_id?: InputMaybe<String_Comparison_Exp>;
  swapVolumeUsd?: InputMaybe<Numeric_Comparison_Exp>;
  timeframe?: InputMaybe<Statstimeframe_Comparison_Exp>;
  trackedFeesUsd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedLiquidityNetInflowUsd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedLiquidityVolumeUsd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedSwapVolumeUsd?: InputMaybe<Numeric_Comparison_Exp>;
  yearlyYield?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "PoolTimeframedStats". */
export type PoolTimeframedStats_Order_By = {
  accumulatedYield?: InputMaybe<Order_By>;
  dataPointTimestamp?: InputMaybe<Order_By>;
  feesUsd?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  liquidityNetInflowUsd?: InputMaybe<Order_By>;
  liquidityVolumeUsd?: InputMaybe<Order_By>;
  pool?: InputMaybe<Pool_Order_By>;
  pool_id?: InputMaybe<Order_By>;
  swapVolumeUsd?: InputMaybe<Order_By>;
  timeframe?: InputMaybe<Order_By>;
  trackedFeesUsd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsd?: InputMaybe<Order_By>;
  yearlyYield?: InputMaybe<Order_By>;
};

/** select columns of table "PoolTimeframedStats" */
export enum PoolTimeframedStats_Select_Column {
  /** column name */
  AccumulatedYield = "accumulatedYield",
  /** column name */
  DataPointTimestamp = "dataPointTimestamp",
  /** column name */
  FeesUsd = "feesUsd",
  /** column name */
  Id = "id",
  /** column name */
  LiquidityNetInflowUsd = "liquidityNetInflowUsd",
  /** column name */
  LiquidityVolumeUsd = "liquidityVolumeUsd",
  /** column name */
  PoolId = "pool_id",
  /** column name */
  SwapVolumeUsd = "swapVolumeUsd",
  /** column name */
  Timeframe = "timeframe",
  /** column name */
  TrackedFeesUsd = "trackedFeesUsd",
  /** column name */
  TrackedLiquidityNetInflowUsd = "trackedLiquidityNetInflowUsd",
  /** column name */
  TrackedLiquidityVolumeUsd = "trackedLiquidityVolumeUsd",
  /** column name */
  TrackedSwapVolumeUsd = "trackedSwapVolumeUsd",
  /** column name */
  YearlyYield = "yearlyYield",
}

/** Streaming cursor of the table "PoolTimeframedStats" */
export type PoolTimeframedStats_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: PoolTimeframedStats_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type PoolTimeframedStats_Stream_Cursor_Value_Input = {
  accumulatedYield?: InputMaybe<Scalars["numeric"]["input"]>;
  dataPointTimestamp?: InputMaybe<Scalars["numeric"]["input"]>;
  feesUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  liquidityNetInflowUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  liquidityVolumeUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  pool_id?: InputMaybe<Scalars["String"]["input"]>;
  swapVolumeUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  timeframe?: InputMaybe<Scalars["statstimeframe"]["input"]>;
  trackedFeesUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedLiquidityNetInflowUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedLiquidityVolumeUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedSwapVolumeUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  yearlyYield?: InputMaybe<Scalars["numeric"]["input"]>;
};

/** order by aggregate values of table "Pool" */
export type Pool_Aggregate_Order_By = {
  avg?: InputMaybe<Pool_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pool_Max_Order_By>;
  min?: InputMaybe<Pool_Min_Order_By>;
  stddev?: InputMaybe<Pool_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Pool_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Pool_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Pool_Sum_Order_By>;
  var_pop?: InputMaybe<Pool_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Pool_Var_Samp_Order_By>;
  variance?: InputMaybe<Pool_Variance_Order_By>;
};

/** order by avg() on columns of table "Pool" */
export type Pool_Avg_Order_By = {
  accumulatedYield?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  createdAtBlock?: InputMaybe<Order_By>;
  createdAtTimestamp?: InputMaybe<Order_By>;
  currentFeeTierPercentage?: InputMaybe<Order_By>;
  feesToken0?: InputMaybe<Order_By>;
  feesToken1?: InputMaybe<Order_By>;
  feesUsd?: InputMaybe<Order_By>;
  initialFeeTierPercentage?: InputMaybe<Order_By>;
  lastActivityBlock?: InputMaybe<Order_By>;
  lastActivityTimestamp?: InputMaybe<Order_By>;
  lastStatsRefreshTimestamp?: InputMaybe<Order_By>;
  liquidityNetInflowUsd?: InputMaybe<Order_By>;
  liquidityVolumeToken0?: InputMaybe<Order_By>;
  liquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  liquidityVolumeToken1?: InputMaybe<Order_By>;
  liquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  liquidityVolumeUsd?: InputMaybe<Order_By>;
  rawCurrentFeeTier?: InputMaybe<Order_By>;
  rawInitialFeeTier?: InputMaybe<Order_By>;
  swapVolumeToken0?: InputMaybe<Order_By>;
  swapVolumeToken0Usd?: InputMaybe<Order_By>;
  swapVolumeToken1?: InputMaybe<Order_By>;
  swapVolumeToken1Usd?: InputMaybe<Order_By>;
  swapVolumeUsd?: InputMaybe<Order_By>;
  swapsCount?: InputMaybe<Order_By>;
  token0UsdPrice?: InputMaybe<Order_By>;
  token1UsdPrice?: InputMaybe<Order_By>;
  tokens0PerToken1?: InputMaybe<Order_By>;
  tokens1PerToken0?: InputMaybe<Order_By>;
  totalValueLockedToken0?: InputMaybe<Order_By>;
  totalValueLockedToken0Usd?: InputMaybe<Order_By>;
  totalValueLockedToken1?: InputMaybe<Order_By>;
  totalValueLockedToken1Usd?: InputMaybe<Order_By>;
  totalValueLockedUsd?: InputMaybe<Order_By>;
  trackedFeesUsd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsd?: InputMaybe<Order_By>;
  trackedToken0UsdPrice?: InputMaybe<Order_By>;
  trackedToken1UsdPrice?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken0Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken1Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsd?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Pool". All fields are combined with a logical 'AND'. */
export type Pool_Bool_Exp = {
  _and?: InputMaybe<Array<Pool_Bool_Exp>>;
  _not?: InputMaybe<Pool_Bool_Exp>;
  _or?: InputMaybe<Array<Pool_Bool_Exp>>;
  accumulatedYield?: InputMaybe<Numeric_Comparison_Exp>;
  algebraPoolData?: InputMaybe<AlgebraPoolData_Bool_Exp>;
  algebraPoolData_id?: InputMaybe<String_Comparison_Exp>;
  chainId?: InputMaybe<Int_Comparison_Exp>;
  createdAtBlock?: InputMaybe<Numeric_Comparison_Exp>;
  createdAtTimestamp?: InputMaybe<Numeric_Comparison_Exp>;
  currentFeeTierPercentage?: InputMaybe<Float8_Comparison_Exp>;
  feesToken0?: InputMaybe<Numeric_Comparison_Exp>;
  feesToken1?: InputMaybe<Numeric_Comparison_Exp>;
  feesUsd?: InputMaybe<Numeric_Comparison_Exp>;
  historicalData?: InputMaybe<PoolHistoricalData_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  initialFeeTierPercentage?: InputMaybe<Float8_Comparison_Exp>;
  isDynamicFee?: InputMaybe<Boolean_Comparison_Exp>;
  lastActivityBlock?: InputMaybe<Numeric_Comparison_Exp>;
  lastActivityDayId?: InputMaybe<String_Comparison_Exp>;
  lastActivityTimestamp?: InputMaybe<Numeric_Comparison_Exp>;
  lastStatsRefreshTimestamp?: InputMaybe<Numeric_Comparison_Exp>;
  liquidityNetInflowUsd?: InputMaybe<Numeric_Comparison_Exp>;
  liquidityVolumeToken0?: InputMaybe<Numeric_Comparison_Exp>;
  liquidityVolumeToken0Usd?: InputMaybe<Numeric_Comparison_Exp>;
  liquidityVolumeToken1?: InputMaybe<Numeric_Comparison_Exp>;
  liquidityVolumeToken1Usd?: InputMaybe<Numeric_Comparison_Exp>;
  liquidityVolumeUsd?: InputMaybe<Numeric_Comparison_Exp>;
  poolAddress?: InputMaybe<String_Comparison_Exp>;
  poolType?: InputMaybe<Pooltype_Comparison_Exp>;
  positionManager?: InputMaybe<String_Comparison_Exp>;
  protocol?: InputMaybe<Protocol_Bool_Exp>;
  protocol_id?: InputMaybe<String_Comparison_Exp>;
  rawCurrentFeeTier?: InputMaybe<Int_Comparison_Exp>;
  rawInitialFeeTier?: InputMaybe<Int_Comparison_Exp>;
  slipstreamPoolData?: InputMaybe<SlipstreamPoolData_Bool_Exp>;
  slipstreamPoolData_id?: InputMaybe<String_Comparison_Exp>;
  swapVolumeToken0?: InputMaybe<Numeric_Comparison_Exp>;
  swapVolumeToken0Usd?: InputMaybe<Numeric_Comparison_Exp>;
  swapVolumeToken1?: InputMaybe<Numeric_Comparison_Exp>;
  swapVolumeToken1Usd?: InputMaybe<Numeric_Comparison_Exp>;
  swapVolumeUsd?: InputMaybe<Numeric_Comparison_Exp>;
  swapsCount?: InputMaybe<Numeric_Comparison_Exp>;
  token0?: InputMaybe<SingleChainToken_Bool_Exp>;
  token0UsdPrice?: InputMaybe<Numeric_Comparison_Exp>;
  token0_id?: InputMaybe<String_Comparison_Exp>;
  token1?: InputMaybe<SingleChainToken_Bool_Exp>;
  token1UsdPrice?: InputMaybe<Numeric_Comparison_Exp>;
  token1_id?: InputMaybe<String_Comparison_Exp>;
  tokens0PerToken1?: InputMaybe<Numeric_Comparison_Exp>;
  tokens1PerToken0?: InputMaybe<Numeric_Comparison_Exp>;
  totalStats7d?: InputMaybe<PoolTimeframedStats_Bool_Exp>;
  totalStats7d_id?: InputMaybe<String_Comparison_Exp>;
  totalStats24h?: InputMaybe<PoolTimeframedStats_Bool_Exp>;
  totalStats24h_id?: InputMaybe<String_Comparison_Exp>;
  totalStats30d?: InputMaybe<PoolTimeframedStats_Bool_Exp>;
  totalStats30d_id?: InputMaybe<String_Comparison_Exp>;
  totalStats90d?: InputMaybe<PoolTimeframedStats_Bool_Exp>;
  totalStats90d_id?: InputMaybe<String_Comparison_Exp>;
  totalValueLockedToken0?: InputMaybe<Numeric_Comparison_Exp>;
  totalValueLockedToken0Usd?: InputMaybe<Numeric_Comparison_Exp>;
  totalValueLockedToken1?: InputMaybe<Numeric_Comparison_Exp>;
  totalValueLockedToken1Usd?: InputMaybe<Numeric_Comparison_Exp>;
  totalValueLockedUsd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedFeesUsd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedLiquidityNetInflowUsd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedLiquidityVolumeToken0Usd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedLiquidityVolumeToken1Usd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedLiquidityVolumeUsd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedSwapVolumeToken0Usd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedSwapVolumeToken1Usd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedSwapVolumeUsd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedToken0UsdPrice?: InputMaybe<Numeric_Comparison_Exp>;
  trackedToken1UsdPrice?: InputMaybe<Numeric_Comparison_Exp>;
  trackedTotalValueLockedToken0Usd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedTotalValueLockedToken1Usd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedTotalValueLockedUsd?: InputMaybe<Numeric_Comparison_Exp>;
  v3PoolData?: InputMaybe<V3PoolData_Bool_Exp>;
  v3PoolData_id?: InputMaybe<String_Comparison_Exp>;
  v4PoolData?: InputMaybe<V4PoolData_Bool_Exp>;
  v4PoolData_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "Pool" */
export type Pool_Max_Order_By = {
  accumulatedYield?: InputMaybe<Order_By>;
  algebraPoolData_id?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  createdAtBlock?: InputMaybe<Order_By>;
  createdAtTimestamp?: InputMaybe<Order_By>;
  currentFeeTierPercentage?: InputMaybe<Order_By>;
  feesToken0?: InputMaybe<Order_By>;
  feesToken1?: InputMaybe<Order_By>;
  feesUsd?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initialFeeTierPercentage?: InputMaybe<Order_By>;
  lastActivityBlock?: InputMaybe<Order_By>;
  lastActivityDayId?: InputMaybe<Order_By>;
  lastActivityTimestamp?: InputMaybe<Order_By>;
  lastStatsRefreshTimestamp?: InputMaybe<Order_By>;
  liquidityNetInflowUsd?: InputMaybe<Order_By>;
  liquidityVolumeToken0?: InputMaybe<Order_By>;
  liquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  liquidityVolumeToken1?: InputMaybe<Order_By>;
  liquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  liquidityVolumeUsd?: InputMaybe<Order_By>;
  poolAddress?: InputMaybe<Order_By>;
  poolType?: InputMaybe<Order_By>;
  positionManager?: InputMaybe<Order_By>;
  protocol_id?: InputMaybe<Order_By>;
  rawCurrentFeeTier?: InputMaybe<Order_By>;
  rawInitialFeeTier?: InputMaybe<Order_By>;
  slipstreamPoolData_id?: InputMaybe<Order_By>;
  swapVolumeToken0?: InputMaybe<Order_By>;
  swapVolumeToken0Usd?: InputMaybe<Order_By>;
  swapVolumeToken1?: InputMaybe<Order_By>;
  swapVolumeToken1Usd?: InputMaybe<Order_By>;
  swapVolumeUsd?: InputMaybe<Order_By>;
  swapsCount?: InputMaybe<Order_By>;
  token0UsdPrice?: InputMaybe<Order_By>;
  token0_id?: InputMaybe<Order_By>;
  token1UsdPrice?: InputMaybe<Order_By>;
  token1_id?: InputMaybe<Order_By>;
  tokens0PerToken1?: InputMaybe<Order_By>;
  tokens1PerToken0?: InputMaybe<Order_By>;
  totalStats7d_id?: InputMaybe<Order_By>;
  totalStats24h_id?: InputMaybe<Order_By>;
  totalStats30d_id?: InputMaybe<Order_By>;
  totalStats90d_id?: InputMaybe<Order_By>;
  totalValueLockedToken0?: InputMaybe<Order_By>;
  totalValueLockedToken0Usd?: InputMaybe<Order_By>;
  totalValueLockedToken1?: InputMaybe<Order_By>;
  totalValueLockedToken1Usd?: InputMaybe<Order_By>;
  totalValueLockedUsd?: InputMaybe<Order_By>;
  trackedFeesUsd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsd?: InputMaybe<Order_By>;
  trackedToken0UsdPrice?: InputMaybe<Order_By>;
  trackedToken1UsdPrice?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken0Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken1Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsd?: InputMaybe<Order_By>;
  v3PoolData_id?: InputMaybe<Order_By>;
  v4PoolData_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Pool" */
export type Pool_Min_Order_By = {
  accumulatedYield?: InputMaybe<Order_By>;
  algebraPoolData_id?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  createdAtBlock?: InputMaybe<Order_By>;
  createdAtTimestamp?: InputMaybe<Order_By>;
  currentFeeTierPercentage?: InputMaybe<Order_By>;
  feesToken0?: InputMaybe<Order_By>;
  feesToken1?: InputMaybe<Order_By>;
  feesUsd?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initialFeeTierPercentage?: InputMaybe<Order_By>;
  lastActivityBlock?: InputMaybe<Order_By>;
  lastActivityDayId?: InputMaybe<Order_By>;
  lastActivityTimestamp?: InputMaybe<Order_By>;
  lastStatsRefreshTimestamp?: InputMaybe<Order_By>;
  liquidityNetInflowUsd?: InputMaybe<Order_By>;
  liquidityVolumeToken0?: InputMaybe<Order_By>;
  liquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  liquidityVolumeToken1?: InputMaybe<Order_By>;
  liquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  liquidityVolumeUsd?: InputMaybe<Order_By>;
  poolAddress?: InputMaybe<Order_By>;
  poolType?: InputMaybe<Order_By>;
  positionManager?: InputMaybe<Order_By>;
  protocol_id?: InputMaybe<Order_By>;
  rawCurrentFeeTier?: InputMaybe<Order_By>;
  rawInitialFeeTier?: InputMaybe<Order_By>;
  slipstreamPoolData_id?: InputMaybe<Order_By>;
  swapVolumeToken0?: InputMaybe<Order_By>;
  swapVolumeToken0Usd?: InputMaybe<Order_By>;
  swapVolumeToken1?: InputMaybe<Order_By>;
  swapVolumeToken1Usd?: InputMaybe<Order_By>;
  swapVolumeUsd?: InputMaybe<Order_By>;
  swapsCount?: InputMaybe<Order_By>;
  token0UsdPrice?: InputMaybe<Order_By>;
  token0_id?: InputMaybe<Order_By>;
  token1UsdPrice?: InputMaybe<Order_By>;
  token1_id?: InputMaybe<Order_By>;
  tokens0PerToken1?: InputMaybe<Order_By>;
  tokens1PerToken0?: InputMaybe<Order_By>;
  totalStats7d_id?: InputMaybe<Order_By>;
  totalStats24h_id?: InputMaybe<Order_By>;
  totalStats30d_id?: InputMaybe<Order_By>;
  totalStats90d_id?: InputMaybe<Order_By>;
  totalValueLockedToken0?: InputMaybe<Order_By>;
  totalValueLockedToken0Usd?: InputMaybe<Order_By>;
  totalValueLockedToken1?: InputMaybe<Order_By>;
  totalValueLockedToken1Usd?: InputMaybe<Order_By>;
  totalValueLockedUsd?: InputMaybe<Order_By>;
  trackedFeesUsd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsd?: InputMaybe<Order_By>;
  trackedToken0UsdPrice?: InputMaybe<Order_By>;
  trackedToken1UsdPrice?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken0Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken1Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsd?: InputMaybe<Order_By>;
  v3PoolData_id?: InputMaybe<Order_By>;
  v4PoolData_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Pool". */
export type Pool_Order_By = {
  accumulatedYield?: InputMaybe<Order_By>;
  algebraPoolData?: InputMaybe<AlgebraPoolData_Order_By>;
  algebraPoolData_id?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  createdAtBlock?: InputMaybe<Order_By>;
  createdAtTimestamp?: InputMaybe<Order_By>;
  currentFeeTierPercentage?: InputMaybe<Order_By>;
  feesToken0?: InputMaybe<Order_By>;
  feesToken1?: InputMaybe<Order_By>;
  feesUsd?: InputMaybe<Order_By>;
  historicalData_aggregate?: InputMaybe<PoolHistoricalData_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  initialFeeTierPercentage?: InputMaybe<Order_By>;
  isDynamicFee?: InputMaybe<Order_By>;
  lastActivityBlock?: InputMaybe<Order_By>;
  lastActivityDayId?: InputMaybe<Order_By>;
  lastActivityTimestamp?: InputMaybe<Order_By>;
  lastStatsRefreshTimestamp?: InputMaybe<Order_By>;
  liquidityNetInflowUsd?: InputMaybe<Order_By>;
  liquidityVolumeToken0?: InputMaybe<Order_By>;
  liquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  liquidityVolumeToken1?: InputMaybe<Order_By>;
  liquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  liquidityVolumeUsd?: InputMaybe<Order_By>;
  poolAddress?: InputMaybe<Order_By>;
  poolType?: InputMaybe<Order_By>;
  positionManager?: InputMaybe<Order_By>;
  protocol?: InputMaybe<Protocol_Order_By>;
  protocol_id?: InputMaybe<Order_By>;
  rawCurrentFeeTier?: InputMaybe<Order_By>;
  rawInitialFeeTier?: InputMaybe<Order_By>;
  slipstreamPoolData?: InputMaybe<SlipstreamPoolData_Order_By>;
  slipstreamPoolData_id?: InputMaybe<Order_By>;
  swapVolumeToken0?: InputMaybe<Order_By>;
  swapVolumeToken0Usd?: InputMaybe<Order_By>;
  swapVolumeToken1?: InputMaybe<Order_By>;
  swapVolumeToken1Usd?: InputMaybe<Order_By>;
  swapVolumeUsd?: InputMaybe<Order_By>;
  swapsCount?: InputMaybe<Order_By>;
  token0?: InputMaybe<SingleChainToken_Order_By>;
  token0UsdPrice?: InputMaybe<Order_By>;
  token0_id?: InputMaybe<Order_By>;
  token1?: InputMaybe<SingleChainToken_Order_By>;
  token1UsdPrice?: InputMaybe<Order_By>;
  token1_id?: InputMaybe<Order_By>;
  tokens0PerToken1?: InputMaybe<Order_By>;
  tokens1PerToken0?: InputMaybe<Order_By>;
  totalStats7d?: InputMaybe<PoolTimeframedStats_Order_By>;
  totalStats7d_id?: InputMaybe<Order_By>;
  totalStats24h?: InputMaybe<PoolTimeframedStats_Order_By>;
  totalStats24h_id?: InputMaybe<Order_By>;
  totalStats30d?: InputMaybe<PoolTimeframedStats_Order_By>;
  totalStats30d_id?: InputMaybe<Order_By>;
  totalStats90d?: InputMaybe<PoolTimeframedStats_Order_By>;
  totalStats90d_id?: InputMaybe<Order_By>;
  totalValueLockedToken0?: InputMaybe<Order_By>;
  totalValueLockedToken0Usd?: InputMaybe<Order_By>;
  totalValueLockedToken1?: InputMaybe<Order_By>;
  totalValueLockedToken1Usd?: InputMaybe<Order_By>;
  totalValueLockedUsd?: InputMaybe<Order_By>;
  trackedFeesUsd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsd?: InputMaybe<Order_By>;
  trackedToken0UsdPrice?: InputMaybe<Order_By>;
  trackedToken1UsdPrice?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken0Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken1Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsd?: InputMaybe<Order_By>;
  v3PoolData?: InputMaybe<V3PoolData_Order_By>;
  v3PoolData_id?: InputMaybe<Order_By>;
  v4PoolData?: InputMaybe<V4PoolData_Order_By>;
  v4PoolData_id?: InputMaybe<Order_By>;
};

/** select columns of table "Pool" */
export enum Pool_Select_Column {
  /** column name */
  AccumulatedYield = "accumulatedYield",
  /** column name */
  AlgebraPoolDataId = "algebraPoolData_id",
  /** column name */
  ChainId = "chainId",
  /** column name */
  CreatedAtBlock = "createdAtBlock",
  /** column name */
  CreatedAtTimestamp = "createdAtTimestamp",
  /** column name */
  CurrentFeeTierPercentage = "currentFeeTierPercentage",
  /** column name */
  FeesToken0 = "feesToken0",
  /** column name */
  FeesToken1 = "feesToken1",
  /** column name */
  FeesUsd = "feesUsd",
  /** column name */
  Id = "id",
  /** column name */
  InitialFeeTierPercentage = "initialFeeTierPercentage",
  /** column name */
  IsDynamicFee = "isDynamicFee",
  /** column name */
  LastActivityBlock = "lastActivityBlock",
  /** column name */
  LastActivityDayId = "lastActivityDayId",
  /** column name */
  LastActivityTimestamp = "lastActivityTimestamp",
  /** column name */
  LastStatsRefreshTimestamp = "lastStatsRefreshTimestamp",
  /** column name */
  LiquidityNetInflowUsd = "liquidityNetInflowUsd",
  /** column name */
  LiquidityVolumeToken0 = "liquidityVolumeToken0",
  /** column name */
  LiquidityVolumeToken0Usd = "liquidityVolumeToken0Usd",
  /** column name */
  LiquidityVolumeToken1 = "liquidityVolumeToken1",
  /** column name */
  LiquidityVolumeToken1Usd = "liquidityVolumeToken1Usd",
  /** column name */
  LiquidityVolumeUsd = "liquidityVolumeUsd",
  /** column name */
  PoolAddress = "poolAddress",
  /** column name */
  PoolType = "poolType",
  /** column name */
  PositionManager = "positionManager",
  /** column name */
  ProtocolId = "protocol_id",
  /** column name */
  RawCurrentFeeTier = "rawCurrentFeeTier",
  /** column name */
  RawInitialFeeTier = "rawInitialFeeTier",
  /** column name */
  SlipstreamPoolDataId = "slipstreamPoolData_id",
  /** column name */
  SwapVolumeToken0 = "swapVolumeToken0",
  /** column name */
  SwapVolumeToken0Usd = "swapVolumeToken0Usd",
  /** column name */
  SwapVolumeToken1 = "swapVolumeToken1",
  /** column name */
  SwapVolumeToken1Usd = "swapVolumeToken1Usd",
  /** column name */
  SwapVolumeUsd = "swapVolumeUsd",
  /** column name */
  SwapsCount = "swapsCount",
  /** column name */
  Token0UsdPrice = "token0UsdPrice",
  /** column name */
  Token0Id = "token0_id",
  /** column name */
  Token1UsdPrice = "token1UsdPrice",
  /** column name */
  Token1Id = "token1_id",
  /** column name */
  Tokens0PerToken1 = "tokens0PerToken1",
  /** column name */
  Tokens1PerToken0 = "tokens1PerToken0",
  /** column name */
  TotalStats7dId = "totalStats7d_id",
  /** column name */
  TotalStats24hId = "totalStats24h_id",
  /** column name */
  TotalStats30dId = "totalStats30d_id",
  /** column name */
  TotalStats90dId = "totalStats90d_id",
  /** column name */
  TotalValueLockedToken0 = "totalValueLockedToken0",
  /** column name */
  TotalValueLockedToken0Usd = "totalValueLockedToken0Usd",
  /** column name */
  TotalValueLockedToken1 = "totalValueLockedToken1",
  /** column name */
  TotalValueLockedToken1Usd = "totalValueLockedToken1Usd",
  /** column name */
  TotalValueLockedUsd = "totalValueLockedUsd",
  /** column name */
  TrackedFeesUsd = "trackedFeesUsd",
  /** column name */
  TrackedLiquidityNetInflowUsd = "trackedLiquidityNetInflowUsd",
  /** column name */
  TrackedLiquidityVolumeToken0Usd = "trackedLiquidityVolumeToken0Usd",
  /** column name */
  TrackedLiquidityVolumeToken1Usd = "trackedLiquidityVolumeToken1Usd",
  /** column name */
  TrackedLiquidityVolumeUsd = "trackedLiquidityVolumeUsd",
  /** column name */
  TrackedSwapVolumeToken0Usd = "trackedSwapVolumeToken0Usd",
  /** column name */
  TrackedSwapVolumeToken1Usd = "trackedSwapVolumeToken1Usd",
  /** column name */
  TrackedSwapVolumeUsd = "trackedSwapVolumeUsd",
  /** column name */
  TrackedToken0UsdPrice = "trackedToken0UsdPrice",
  /** column name */
  TrackedToken1UsdPrice = "trackedToken1UsdPrice",
  /** column name */
  TrackedTotalValueLockedToken0Usd = "trackedTotalValueLockedToken0Usd",
  /** column name */
  TrackedTotalValueLockedToken1Usd = "trackedTotalValueLockedToken1Usd",
  /** column name */
  TrackedTotalValueLockedUsd = "trackedTotalValueLockedUsd",
  /** column name */
  V3PoolDataId = "v3PoolData_id",
  /** column name */
  V4PoolDataId = "v4PoolData_id",
}

/** order by stddev() on columns of table "Pool" */
export type Pool_Stddev_Order_By = {
  accumulatedYield?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  createdAtBlock?: InputMaybe<Order_By>;
  createdAtTimestamp?: InputMaybe<Order_By>;
  currentFeeTierPercentage?: InputMaybe<Order_By>;
  feesToken0?: InputMaybe<Order_By>;
  feesToken1?: InputMaybe<Order_By>;
  feesUsd?: InputMaybe<Order_By>;
  initialFeeTierPercentage?: InputMaybe<Order_By>;
  lastActivityBlock?: InputMaybe<Order_By>;
  lastActivityTimestamp?: InputMaybe<Order_By>;
  lastStatsRefreshTimestamp?: InputMaybe<Order_By>;
  liquidityNetInflowUsd?: InputMaybe<Order_By>;
  liquidityVolumeToken0?: InputMaybe<Order_By>;
  liquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  liquidityVolumeToken1?: InputMaybe<Order_By>;
  liquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  liquidityVolumeUsd?: InputMaybe<Order_By>;
  rawCurrentFeeTier?: InputMaybe<Order_By>;
  rawInitialFeeTier?: InputMaybe<Order_By>;
  swapVolumeToken0?: InputMaybe<Order_By>;
  swapVolumeToken0Usd?: InputMaybe<Order_By>;
  swapVolumeToken1?: InputMaybe<Order_By>;
  swapVolumeToken1Usd?: InputMaybe<Order_By>;
  swapVolumeUsd?: InputMaybe<Order_By>;
  swapsCount?: InputMaybe<Order_By>;
  token0UsdPrice?: InputMaybe<Order_By>;
  token1UsdPrice?: InputMaybe<Order_By>;
  tokens0PerToken1?: InputMaybe<Order_By>;
  tokens1PerToken0?: InputMaybe<Order_By>;
  totalValueLockedToken0?: InputMaybe<Order_By>;
  totalValueLockedToken0Usd?: InputMaybe<Order_By>;
  totalValueLockedToken1?: InputMaybe<Order_By>;
  totalValueLockedToken1Usd?: InputMaybe<Order_By>;
  totalValueLockedUsd?: InputMaybe<Order_By>;
  trackedFeesUsd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsd?: InputMaybe<Order_By>;
  trackedToken0UsdPrice?: InputMaybe<Order_By>;
  trackedToken1UsdPrice?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken0Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken1Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsd?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Pool" */
export type Pool_Stddev_Pop_Order_By = {
  accumulatedYield?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  createdAtBlock?: InputMaybe<Order_By>;
  createdAtTimestamp?: InputMaybe<Order_By>;
  currentFeeTierPercentage?: InputMaybe<Order_By>;
  feesToken0?: InputMaybe<Order_By>;
  feesToken1?: InputMaybe<Order_By>;
  feesUsd?: InputMaybe<Order_By>;
  initialFeeTierPercentage?: InputMaybe<Order_By>;
  lastActivityBlock?: InputMaybe<Order_By>;
  lastActivityTimestamp?: InputMaybe<Order_By>;
  lastStatsRefreshTimestamp?: InputMaybe<Order_By>;
  liquidityNetInflowUsd?: InputMaybe<Order_By>;
  liquidityVolumeToken0?: InputMaybe<Order_By>;
  liquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  liquidityVolumeToken1?: InputMaybe<Order_By>;
  liquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  liquidityVolumeUsd?: InputMaybe<Order_By>;
  rawCurrentFeeTier?: InputMaybe<Order_By>;
  rawInitialFeeTier?: InputMaybe<Order_By>;
  swapVolumeToken0?: InputMaybe<Order_By>;
  swapVolumeToken0Usd?: InputMaybe<Order_By>;
  swapVolumeToken1?: InputMaybe<Order_By>;
  swapVolumeToken1Usd?: InputMaybe<Order_By>;
  swapVolumeUsd?: InputMaybe<Order_By>;
  swapsCount?: InputMaybe<Order_By>;
  token0UsdPrice?: InputMaybe<Order_By>;
  token1UsdPrice?: InputMaybe<Order_By>;
  tokens0PerToken1?: InputMaybe<Order_By>;
  tokens1PerToken0?: InputMaybe<Order_By>;
  totalValueLockedToken0?: InputMaybe<Order_By>;
  totalValueLockedToken0Usd?: InputMaybe<Order_By>;
  totalValueLockedToken1?: InputMaybe<Order_By>;
  totalValueLockedToken1Usd?: InputMaybe<Order_By>;
  totalValueLockedUsd?: InputMaybe<Order_By>;
  trackedFeesUsd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsd?: InputMaybe<Order_By>;
  trackedToken0UsdPrice?: InputMaybe<Order_By>;
  trackedToken1UsdPrice?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken0Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken1Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsd?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Pool" */
export type Pool_Stddev_Samp_Order_By = {
  accumulatedYield?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  createdAtBlock?: InputMaybe<Order_By>;
  createdAtTimestamp?: InputMaybe<Order_By>;
  currentFeeTierPercentage?: InputMaybe<Order_By>;
  feesToken0?: InputMaybe<Order_By>;
  feesToken1?: InputMaybe<Order_By>;
  feesUsd?: InputMaybe<Order_By>;
  initialFeeTierPercentage?: InputMaybe<Order_By>;
  lastActivityBlock?: InputMaybe<Order_By>;
  lastActivityTimestamp?: InputMaybe<Order_By>;
  lastStatsRefreshTimestamp?: InputMaybe<Order_By>;
  liquidityNetInflowUsd?: InputMaybe<Order_By>;
  liquidityVolumeToken0?: InputMaybe<Order_By>;
  liquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  liquidityVolumeToken1?: InputMaybe<Order_By>;
  liquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  liquidityVolumeUsd?: InputMaybe<Order_By>;
  rawCurrentFeeTier?: InputMaybe<Order_By>;
  rawInitialFeeTier?: InputMaybe<Order_By>;
  swapVolumeToken0?: InputMaybe<Order_By>;
  swapVolumeToken0Usd?: InputMaybe<Order_By>;
  swapVolumeToken1?: InputMaybe<Order_By>;
  swapVolumeToken1Usd?: InputMaybe<Order_By>;
  swapVolumeUsd?: InputMaybe<Order_By>;
  swapsCount?: InputMaybe<Order_By>;
  token0UsdPrice?: InputMaybe<Order_By>;
  token1UsdPrice?: InputMaybe<Order_By>;
  tokens0PerToken1?: InputMaybe<Order_By>;
  tokens1PerToken0?: InputMaybe<Order_By>;
  totalValueLockedToken0?: InputMaybe<Order_By>;
  totalValueLockedToken0Usd?: InputMaybe<Order_By>;
  totalValueLockedToken1?: InputMaybe<Order_By>;
  totalValueLockedToken1Usd?: InputMaybe<Order_By>;
  totalValueLockedUsd?: InputMaybe<Order_By>;
  trackedFeesUsd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsd?: InputMaybe<Order_By>;
  trackedToken0UsdPrice?: InputMaybe<Order_By>;
  trackedToken1UsdPrice?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken0Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken1Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsd?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Pool" */
export type Pool_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pool_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pool_Stream_Cursor_Value_Input = {
  accumulatedYield?: InputMaybe<Scalars["numeric"]["input"]>;
  algebraPoolData_id?: InputMaybe<Scalars["String"]["input"]>;
  chainId?: InputMaybe<Scalars["Int"]["input"]>;
  createdAtBlock?: InputMaybe<Scalars["numeric"]["input"]>;
  createdAtTimestamp?: InputMaybe<Scalars["numeric"]["input"]>;
  currentFeeTierPercentage?: InputMaybe<Scalars["float8"]["input"]>;
  feesToken0?: InputMaybe<Scalars["numeric"]["input"]>;
  feesToken1?: InputMaybe<Scalars["numeric"]["input"]>;
  feesUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  initialFeeTierPercentage?: InputMaybe<Scalars["float8"]["input"]>;
  isDynamicFee?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastActivityBlock?: InputMaybe<Scalars["numeric"]["input"]>;
  lastActivityDayId?: InputMaybe<Scalars["String"]["input"]>;
  lastActivityTimestamp?: InputMaybe<Scalars["numeric"]["input"]>;
  lastStatsRefreshTimestamp?: InputMaybe<Scalars["numeric"]["input"]>;
  liquidityNetInflowUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  liquidityVolumeToken0?: InputMaybe<Scalars["numeric"]["input"]>;
  liquidityVolumeToken0Usd?: InputMaybe<Scalars["numeric"]["input"]>;
  liquidityVolumeToken1?: InputMaybe<Scalars["numeric"]["input"]>;
  liquidityVolumeToken1Usd?: InputMaybe<Scalars["numeric"]["input"]>;
  liquidityVolumeUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  poolAddress?: InputMaybe<Scalars["String"]["input"]>;
  poolType?: InputMaybe<Scalars["pooltype"]["input"]>;
  positionManager?: InputMaybe<Scalars["String"]["input"]>;
  protocol_id?: InputMaybe<Scalars["String"]["input"]>;
  rawCurrentFeeTier?: InputMaybe<Scalars["Int"]["input"]>;
  rawInitialFeeTier?: InputMaybe<Scalars["Int"]["input"]>;
  slipstreamPoolData_id?: InputMaybe<Scalars["String"]["input"]>;
  swapVolumeToken0?: InputMaybe<Scalars["numeric"]["input"]>;
  swapVolumeToken0Usd?: InputMaybe<Scalars["numeric"]["input"]>;
  swapVolumeToken1?: InputMaybe<Scalars["numeric"]["input"]>;
  swapVolumeToken1Usd?: InputMaybe<Scalars["numeric"]["input"]>;
  swapVolumeUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  swapsCount?: InputMaybe<Scalars["numeric"]["input"]>;
  token0UsdPrice?: InputMaybe<Scalars["numeric"]["input"]>;
  token0_id?: InputMaybe<Scalars["String"]["input"]>;
  token1UsdPrice?: InputMaybe<Scalars["numeric"]["input"]>;
  token1_id?: InputMaybe<Scalars["String"]["input"]>;
  tokens0PerToken1?: InputMaybe<Scalars["numeric"]["input"]>;
  tokens1PerToken0?: InputMaybe<Scalars["numeric"]["input"]>;
  totalStats7d_id?: InputMaybe<Scalars["String"]["input"]>;
  totalStats24h_id?: InputMaybe<Scalars["String"]["input"]>;
  totalStats30d_id?: InputMaybe<Scalars["String"]["input"]>;
  totalStats90d_id?: InputMaybe<Scalars["String"]["input"]>;
  totalValueLockedToken0?: InputMaybe<Scalars["numeric"]["input"]>;
  totalValueLockedToken0Usd?: InputMaybe<Scalars["numeric"]["input"]>;
  totalValueLockedToken1?: InputMaybe<Scalars["numeric"]["input"]>;
  totalValueLockedToken1Usd?: InputMaybe<Scalars["numeric"]["input"]>;
  totalValueLockedUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedFeesUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedLiquidityNetInflowUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedLiquidityVolumeToken0Usd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedLiquidityVolumeToken1Usd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedLiquidityVolumeUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedSwapVolumeToken0Usd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedSwapVolumeToken1Usd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedSwapVolumeUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedToken0UsdPrice?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedToken1UsdPrice?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedTotalValueLockedToken0Usd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedTotalValueLockedToken1Usd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedTotalValueLockedUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  v3PoolData_id?: InputMaybe<Scalars["String"]["input"]>;
  v4PoolData_id?: InputMaybe<Scalars["String"]["input"]>;
};

/** order by sum() on columns of table "Pool" */
export type Pool_Sum_Order_By = {
  accumulatedYield?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  createdAtBlock?: InputMaybe<Order_By>;
  createdAtTimestamp?: InputMaybe<Order_By>;
  currentFeeTierPercentage?: InputMaybe<Order_By>;
  feesToken0?: InputMaybe<Order_By>;
  feesToken1?: InputMaybe<Order_By>;
  feesUsd?: InputMaybe<Order_By>;
  initialFeeTierPercentage?: InputMaybe<Order_By>;
  lastActivityBlock?: InputMaybe<Order_By>;
  lastActivityTimestamp?: InputMaybe<Order_By>;
  lastStatsRefreshTimestamp?: InputMaybe<Order_By>;
  liquidityNetInflowUsd?: InputMaybe<Order_By>;
  liquidityVolumeToken0?: InputMaybe<Order_By>;
  liquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  liquidityVolumeToken1?: InputMaybe<Order_By>;
  liquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  liquidityVolumeUsd?: InputMaybe<Order_By>;
  rawCurrentFeeTier?: InputMaybe<Order_By>;
  rawInitialFeeTier?: InputMaybe<Order_By>;
  swapVolumeToken0?: InputMaybe<Order_By>;
  swapVolumeToken0Usd?: InputMaybe<Order_By>;
  swapVolumeToken1?: InputMaybe<Order_By>;
  swapVolumeToken1Usd?: InputMaybe<Order_By>;
  swapVolumeUsd?: InputMaybe<Order_By>;
  swapsCount?: InputMaybe<Order_By>;
  token0UsdPrice?: InputMaybe<Order_By>;
  token1UsdPrice?: InputMaybe<Order_By>;
  tokens0PerToken1?: InputMaybe<Order_By>;
  tokens1PerToken0?: InputMaybe<Order_By>;
  totalValueLockedToken0?: InputMaybe<Order_By>;
  totalValueLockedToken0Usd?: InputMaybe<Order_By>;
  totalValueLockedToken1?: InputMaybe<Order_By>;
  totalValueLockedToken1Usd?: InputMaybe<Order_By>;
  totalValueLockedUsd?: InputMaybe<Order_By>;
  trackedFeesUsd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsd?: InputMaybe<Order_By>;
  trackedToken0UsdPrice?: InputMaybe<Order_By>;
  trackedToken1UsdPrice?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken0Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken1Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsd?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "Pool" */
export type Pool_Var_Pop_Order_By = {
  accumulatedYield?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  createdAtBlock?: InputMaybe<Order_By>;
  createdAtTimestamp?: InputMaybe<Order_By>;
  currentFeeTierPercentage?: InputMaybe<Order_By>;
  feesToken0?: InputMaybe<Order_By>;
  feesToken1?: InputMaybe<Order_By>;
  feesUsd?: InputMaybe<Order_By>;
  initialFeeTierPercentage?: InputMaybe<Order_By>;
  lastActivityBlock?: InputMaybe<Order_By>;
  lastActivityTimestamp?: InputMaybe<Order_By>;
  lastStatsRefreshTimestamp?: InputMaybe<Order_By>;
  liquidityNetInflowUsd?: InputMaybe<Order_By>;
  liquidityVolumeToken0?: InputMaybe<Order_By>;
  liquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  liquidityVolumeToken1?: InputMaybe<Order_By>;
  liquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  liquidityVolumeUsd?: InputMaybe<Order_By>;
  rawCurrentFeeTier?: InputMaybe<Order_By>;
  rawInitialFeeTier?: InputMaybe<Order_By>;
  swapVolumeToken0?: InputMaybe<Order_By>;
  swapVolumeToken0Usd?: InputMaybe<Order_By>;
  swapVolumeToken1?: InputMaybe<Order_By>;
  swapVolumeToken1Usd?: InputMaybe<Order_By>;
  swapVolumeUsd?: InputMaybe<Order_By>;
  swapsCount?: InputMaybe<Order_By>;
  token0UsdPrice?: InputMaybe<Order_By>;
  token1UsdPrice?: InputMaybe<Order_By>;
  tokens0PerToken1?: InputMaybe<Order_By>;
  tokens1PerToken0?: InputMaybe<Order_By>;
  totalValueLockedToken0?: InputMaybe<Order_By>;
  totalValueLockedToken0Usd?: InputMaybe<Order_By>;
  totalValueLockedToken1?: InputMaybe<Order_By>;
  totalValueLockedToken1Usd?: InputMaybe<Order_By>;
  totalValueLockedUsd?: InputMaybe<Order_By>;
  trackedFeesUsd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsd?: InputMaybe<Order_By>;
  trackedToken0UsdPrice?: InputMaybe<Order_By>;
  trackedToken1UsdPrice?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken0Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken1Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsd?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Pool" */
export type Pool_Var_Samp_Order_By = {
  accumulatedYield?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  createdAtBlock?: InputMaybe<Order_By>;
  createdAtTimestamp?: InputMaybe<Order_By>;
  currentFeeTierPercentage?: InputMaybe<Order_By>;
  feesToken0?: InputMaybe<Order_By>;
  feesToken1?: InputMaybe<Order_By>;
  feesUsd?: InputMaybe<Order_By>;
  initialFeeTierPercentage?: InputMaybe<Order_By>;
  lastActivityBlock?: InputMaybe<Order_By>;
  lastActivityTimestamp?: InputMaybe<Order_By>;
  lastStatsRefreshTimestamp?: InputMaybe<Order_By>;
  liquidityNetInflowUsd?: InputMaybe<Order_By>;
  liquidityVolumeToken0?: InputMaybe<Order_By>;
  liquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  liquidityVolumeToken1?: InputMaybe<Order_By>;
  liquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  liquidityVolumeUsd?: InputMaybe<Order_By>;
  rawCurrentFeeTier?: InputMaybe<Order_By>;
  rawInitialFeeTier?: InputMaybe<Order_By>;
  swapVolumeToken0?: InputMaybe<Order_By>;
  swapVolumeToken0Usd?: InputMaybe<Order_By>;
  swapVolumeToken1?: InputMaybe<Order_By>;
  swapVolumeToken1Usd?: InputMaybe<Order_By>;
  swapVolumeUsd?: InputMaybe<Order_By>;
  swapsCount?: InputMaybe<Order_By>;
  token0UsdPrice?: InputMaybe<Order_By>;
  token1UsdPrice?: InputMaybe<Order_By>;
  tokens0PerToken1?: InputMaybe<Order_By>;
  tokens1PerToken0?: InputMaybe<Order_By>;
  totalValueLockedToken0?: InputMaybe<Order_By>;
  totalValueLockedToken0Usd?: InputMaybe<Order_By>;
  totalValueLockedToken1?: InputMaybe<Order_By>;
  totalValueLockedToken1Usd?: InputMaybe<Order_By>;
  totalValueLockedUsd?: InputMaybe<Order_By>;
  trackedFeesUsd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsd?: InputMaybe<Order_By>;
  trackedToken0UsdPrice?: InputMaybe<Order_By>;
  trackedToken1UsdPrice?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken0Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken1Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsd?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Pool" */
export type Pool_Variance_Order_By = {
  accumulatedYield?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  createdAtBlock?: InputMaybe<Order_By>;
  createdAtTimestamp?: InputMaybe<Order_By>;
  currentFeeTierPercentage?: InputMaybe<Order_By>;
  feesToken0?: InputMaybe<Order_By>;
  feesToken1?: InputMaybe<Order_By>;
  feesUsd?: InputMaybe<Order_By>;
  initialFeeTierPercentage?: InputMaybe<Order_By>;
  lastActivityBlock?: InputMaybe<Order_By>;
  lastActivityTimestamp?: InputMaybe<Order_By>;
  lastStatsRefreshTimestamp?: InputMaybe<Order_By>;
  liquidityNetInflowUsd?: InputMaybe<Order_By>;
  liquidityVolumeToken0?: InputMaybe<Order_By>;
  liquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  liquidityVolumeToken1?: InputMaybe<Order_By>;
  liquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  liquidityVolumeUsd?: InputMaybe<Order_By>;
  rawCurrentFeeTier?: InputMaybe<Order_By>;
  rawInitialFeeTier?: InputMaybe<Order_By>;
  swapVolumeToken0?: InputMaybe<Order_By>;
  swapVolumeToken0Usd?: InputMaybe<Order_By>;
  swapVolumeToken1?: InputMaybe<Order_By>;
  swapVolumeToken1Usd?: InputMaybe<Order_By>;
  swapVolumeUsd?: InputMaybe<Order_By>;
  swapsCount?: InputMaybe<Order_By>;
  token0UsdPrice?: InputMaybe<Order_By>;
  token1UsdPrice?: InputMaybe<Order_By>;
  tokens0PerToken1?: InputMaybe<Order_By>;
  tokens1PerToken0?: InputMaybe<Order_By>;
  totalValueLockedToken0?: InputMaybe<Order_By>;
  totalValueLockedToken0Usd?: InputMaybe<Order_By>;
  totalValueLockedToken1?: InputMaybe<Order_By>;
  totalValueLockedToken1Usd?: InputMaybe<Order_By>;
  totalValueLockedUsd?: InputMaybe<Order_By>;
  trackedFeesUsd?: InputMaybe<Order_By>;
  trackedLiquidityNetInflowUsd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken0Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeToken1Usd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsd?: InputMaybe<Order_By>;
  trackedToken0UsdPrice?: InputMaybe<Order_By>;
  trackedToken1UsdPrice?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken0Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedToken1Usd?: InputMaybe<Order_By>;
  trackedTotalValueLockedUsd?: InputMaybe<Order_By>;
};

/** columns and relationships of "Protocol" */
export type Protocol = {
  __typename?: "Protocol";
  id: Scalars["String"]["output"];
  logo: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  /** An array relationship */
  pools: Array<Pool>;
  url: Scalars["String"]["output"];
};

/** columns and relationships of "Protocol" */
export type ProtocolPoolsArgs = {
  distinct_on?: InputMaybe<Array<Pool_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Pool_Order_By>>;
  where?: InputMaybe<Pool_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "Protocol". All fields are combined with a logical 'AND'. */
export type Protocol_Bool_Exp = {
  _and?: InputMaybe<Array<Protocol_Bool_Exp>>;
  _not?: InputMaybe<Protocol_Bool_Exp>;
  _or?: InputMaybe<Array<Protocol_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  logo?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  pools?: InputMaybe<Pool_Bool_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "Protocol". */
export type Protocol_Order_By = {
  id?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pools_aggregate?: InputMaybe<Pool_Aggregate_Order_By>;
  url?: InputMaybe<Order_By>;
};

/** select columns of table "Protocol" */
export enum Protocol_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Logo = "logo",
  /** column name */
  Name = "name",
  /** column name */
  Url = "url",
}

/** Streaming cursor of the table "Protocol" */
export type Protocol_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Protocol_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Protocol_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  logo?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

/** columns and relationships of "SingleChainToken" */
export type SingleChainToken = {
  __typename?: "SingleChainToken";
  chainId: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  feesUsd: Scalars["numeric"]["output"];
  id: Scalars["String"]["output"];
  liquidityVolumeUsd: Scalars["numeric"]["output"];
  name: Scalars["String"]["output"];
  normalizedName: Scalars["String"]["output"];
  normalizedSymbol: Scalars["String"]["output"];
  poolsCount: Scalars["numeric"]["output"];
  priceDiscoveryTokenAmount: Scalars["numeric"]["output"];
  swapVolumeUsd: Scalars["numeric"]["output"];
  swapsCount: Scalars["numeric"]["output"];
  swapsInCount: Scalars["numeric"]["output"];
  swapsOutCount: Scalars["numeric"]["output"];
  symbol: Scalars["String"]["output"];
  tokenAddress: Scalars["String"]["output"];
  tokenFees: Scalars["numeric"]["output"];
  tokenLiquidityVolume: Scalars["numeric"]["output"];
  tokenSwapVolume: Scalars["numeric"]["output"];
  tokenTotalValuePooled: Scalars["numeric"]["output"];
  totalValuePooledUsd: Scalars["numeric"]["output"];
  trackedFeesUsd: Scalars["numeric"]["output"];
  trackedLiquidityVolumeUsd: Scalars["numeric"]["output"];
  trackedSwapVolumeUsd: Scalars["numeric"]["output"];
  trackedTotalValuePooledUsd: Scalars["numeric"]["output"];
  trackedUsdPrice: Scalars["numeric"]["output"];
  usdPrice: Scalars["numeric"]["output"];
};

/** Boolean expression to filter rows from the table "SingleChainToken". All fields are combined with a logical 'AND'. */
export type SingleChainToken_Bool_Exp = {
  _and?: InputMaybe<Array<SingleChainToken_Bool_Exp>>;
  _not?: InputMaybe<SingleChainToken_Bool_Exp>;
  _or?: InputMaybe<Array<SingleChainToken_Bool_Exp>>;
  chainId?: InputMaybe<Int_Comparison_Exp>;
  decimals?: InputMaybe<Int_Comparison_Exp>;
  feesUsd?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  liquidityVolumeUsd?: InputMaybe<Numeric_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  normalizedName?: InputMaybe<String_Comparison_Exp>;
  normalizedSymbol?: InputMaybe<String_Comparison_Exp>;
  poolsCount?: InputMaybe<Numeric_Comparison_Exp>;
  priceDiscoveryTokenAmount?: InputMaybe<Numeric_Comparison_Exp>;
  swapVolumeUsd?: InputMaybe<Numeric_Comparison_Exp>;
  swapsCount?: InputMaybe<Numeric_Comparison_Exp>;
  swapsInCount?: InputMaybe<Numeric_Comparison_Exp>;
  swapsOutCount?: InputMaybe<Numeric_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  tokenAddress?: InputMaybe<String_Comparison_Exp>;
  tokenFees?: InputMaybe<Numeric_Comparison_Exp>;
  tokenLiquidityVolume?: InputMaybe<Numeric_Comparison_Exp>;
  tokenSwapVolume?: InputMaybe<Numeric_Comparison_Exp>;
  tokenTotalValuePooled?: InputMaybe<Numeric_Comparison_Exp>;
  totalValuePooledUsd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedFeesUsd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedLiquidityVolumeUsd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedSwapVolumeUsd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedTotalValuePooledUsd?: InputMaybe<Numeric_Comparison_Exp>;
  trackedUsdPrice?: InputMaybe<Numeric_Comparison_Exp>;
  usdPrice?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "SingleChainToken". */
export type SingleChainToken_Order_By = {
  chainId?: InputMaybe<Order_By>;
  decimals?: InputMaybe<Order_By>;
  feesUsd?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  liquidityVolumeUsd?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  normalizedName?: InputMaybe<Order_By>;
  normalizedSymbol?: InputMaybe<Order_By>;
  poolsCount?: InputMaybe<Order_By>;
  priceDiscoveryTokenAmount?: InputMaybe<Order_By>;
  swapVolumeUsd?: InputMaybe<Order_By>;
  swapsCount?: InputMaybe<Order_By>;
  swapsInCount?: InputMaybe<Order_By>;
  swapsOutCount?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  tokenAddress?: InputMaybe<Order_By>;
  tokenFees?: InputMaybe<Order_By>;
  tokenLiquidityVolume?: InputMaybe<Order_By>;
  tokenSwapVolume?: InputMaybe<Order_By>;
  tokenTotalValuePooled?: InputMaybe<Order_By>;
  totalValuePooledUsd?: InputMaybe<Order_By>;
  trackedFeesUsd?: InputMaybe<Order_By>;
  trackedLiquidityVolumeUsd?: InputMaybe<Order_By>;
  trackedSwapVolumeUsd?: InputMaybe<Order_By>;
  trackedTotalValuePooledUsd?: InputMaybe<Order_By>;
  trackedUsdPrice?: InputMaybe<Order_By>;
  usdPrice?: InputMaybe<Order_By>;
};

/** select columns of table "SingleChainToken" */
export enum SingleChainToken_Select_Column {
  /** column name */
  ChainId = "chainId",
  /** column name */
  Decimals = "decimals",
  /** column name */
  FeesUsd = "feesUsd",
  /** column name */
  Id = "id",
  /** column name */
  LiquidityVolumeUsd = "liquidityVolumeUsd",
  /** column name */
  Name = "name",
  /** column name */
  NormalizedName = "normalizedName",
  /** column name */
  NormalizedSymbol = "normalizedSymbol",
  /** column name */
  PoolsCount = "poolsCount",
  /** column name */
  PriceDiscoveryTokenAmount = "priceDiscoveryTokenAmount",
  /** column name */
  SwapVolumeUsd = "swapVolumeUsd",
  /** column name */
  SwapsCount = "swapsCount",
  /** column name */
  SwapsInCount = "swapsInCount",
  /** column name */
  SwapsOutCount = "swapsOutCount",
  /** column name */
  Symbol = "symbol",
  /** column name */
  TokenAddress = "tokenAddress",
  /** column name */
  TokenFees = "tokenFees",
  /** column name */
  TokenLiquidityVolume = "tokenLiquidityVolume",
  /** column name */
  TokenSwapVolume = "tokenSwapVolume",
  /** column name */
  TokenTotalValuePooled = "tokenTotalValuePooled",
  /** column name */
  TotalValuePooledUsd = "totalValuePooledUsd",
  /** column name */
  TrackedFeesUsd = "trackedFeesUsd",
  /** column name */
  TrackedLiquidityVolumeUsd = "trackedLiquidityVolumeUsd",
  /** column name */
  TrackedSwapVolumeUsd = "trackedSwapVolumeUsd",
  /** column name */
  TrackedTotalValuePooledUsd = "trackedTotalValuePooledUsd",
  /** column name */
  TrackedUsdPrice = "trackedUsdPrice",
  /** column name */
  UsdPrice = "usdPrice",
}

/** Streaming cursor of the table "SingleChainToken" */
export type SingleChainToken_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: SingleChainToken_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type SingleChainToken_Stream_Cursor_Value_Input = {
  chainId?: InputMaybe<Scalars["Int"]["input"]>;
  decimals?: InputMaybe<Scalars["Int"]["input"]>;
  feesUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  liquidityVolumeUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  normalizedName?: InputMaybe<Scalars["String"]["input"]>;
  normalizedSymbol?: InputMaybe<Scalars["String"]["input"]>;
  poolsCount?: InputMaybe<Scalars["numeric"]["input"]>;
  priceDiscoveryTokenAmount?: InputMaybe<Scalars["numeric"]["input"]>;
  swapVolumeUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  swapsCount?: InputMaybe<Scalars["numeric"]["input"]>;
  swapsInCount?: InputMaybe<Scalars["numeric"]["input"]>;
  swapsOutCount?: InputMaybe<Scalars["numeric"]["input"]>;
  symbol?: InputMaybe<Scalars["String"]["input"]>;
  tokenAddress?: InputMaybe<Scalars["String"]["input"]>;
  tokenFees?: InputMaybe<Scalars["numeric"]["input"]>;
  tokenLiquidityVolume?: InputMaybe<Scalars["numeric"]["input"]>;
  tokenSwapVolume?: InputMaybe<Scalars["numeric"]["input"]>;
  tokenTotalValuePooled?: InputMaybe<Scalars["numeric"]["input"]>;
  totalValuePooledUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedFeesUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedLiquidityVolumeUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedSwapVolumeUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedTotalValuePooledUsd?: InputMaybe<Scalars["numeric"]["input"]>;
  trackedUsdPrice?: InputMaybe<Scalars["numeric"]["input"]>;
  usdPrice?: InputMaybe<Scalars["numeric"]["input"]>;
};

/** columns and relationships of "SlipstreamPoolData" */
export type SlipstreamPoolData = {
  __typename?: "SlipstreamPoolData";
  id: Scalars["String"]["output"];
  lastFeeAdjustmentTimestamp: Scalars["numeric"]["output"];
  sqrtPriceX96: Scalars["numeric"]["output"];
  tick: Scalars["numeric"]["output"];
  tickSpacing: Scalars["Int"]["output"];
};

/** Boolean expression to filter rows from the table "SlipstreamPoolData". All fields are combined with a logical 'AND'. */
export type SlipstreamPoolData_Bool_Exp = {
  _and?: InputMaybe<Array<SlipstreamPoolData_Bool_Exp>>;
  _not?: InputMaybe<SlipstreamPoolData_Bool_Exp>;
  _or?: InputMaybe<Array<SlipstreamPoolData_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  lastFeeAdjustmentTimestamp?: InputMaybe<Numeric_Comparison_Exp>;
  sqrtPriceX96?: InputMaybe<Numeric_Comparison_Exp>;
  tick?: InputMaybe<Numeric_Comparison_Exp>;
  tickSpacing?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "SlipstreamPoolData". */
export type SlipstreamPoolData_Order_By = {
  id?: InputMaybe<Order_By>;
  lastFeeAdjustmentTimestamp?: InputMaybe<Order_By>;
  sqrtPriceX96?: InputMaybe<Order_By>;
  tick?: InputMaybe<Order_By>;
  tickSpacing?: InputMaybe<Order_By>;
};

/** select columns of table "SlipstreamPoolData" */
export enum SlipstreamPoolData_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  LastFeeAdjustmentTimestamp = "lastFeeAdjustmentTimestamp",
  /** column name */
  SqrtPriceX96 = "sqrtPriceX96",
  /** column name */
  Tick = "tick",
  /** column name */
  TickSpacing = "tickSpacing",
}

/** Streaming cursor of the table "SlipstreamPoolData" */
export type SlipstreamPoolData_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: SlipstreamPoolData_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type SlipstreamPoolData_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastFeeAdjustmentTimestamp?: InputMaybe<Scalars["numeric"]["input"]>;
  sqrtPriceX96?: InputMaybe<Scalars["numeric"]["input"]>;
  tick?: InputMaybe<Scalars["numeric"]["input"]>;
  tickSpacing?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

/** columns and relationships of "V3PoolData" */
export type V3PoolData = {
  __typename?: "V3PoolData";
  id: Scalars["String"]["output"];
  sqrtPriceX96: Scalars["numeric"]["output"];
  tick: Scalars["numeric"]["output"];
  tickSpacing: Scalars["Int"]["output"];
};

/** Boolean expression to filter rows from the table "V3PoolData". All fields are combined with a logical 'AND'. */
export type V3PoolData_Bool_Exp = {
  _and?: InputMaybe<Array<V3PoolData_Bool_Exp>>;
  _not?: InputMaybe<V3PoolData_Bool_Exp>;
  _or?: InputMaybe<Array<V3PoolData_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  sqrtPriceX96?: InputMaybe<Numeric_Comparison_Exp>;
  tick?: InputMaybe<Numeric_Comparison_Exp>;
  tickSpacing?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "V3PoolData". */
export type V3PoolData_Order_By = {
  id?: InputMaybe<Order_By>;
  sqrtPriceX96?: InputMaybe<Order_By>;
  tick?: InputMaybe<Order_By>;
  tickSpacing?: InputMaybe<Order_By>;
};

/** select columns of table "V3PoolData" */
export enum V3PoolData_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  SqrtPriceX96 = "sqrtPriceX96",
  /** column name */
  Tick = "tick",
  /** column name */
  TickSpacing = "tickSpacing",
}

/** Streaming cursor of the table "V3PoolData" */
export type V3PoolData_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: V3PoolData_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type V3PoolData_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  sqrtPriceX96?: InputMaybe<Scalars["numeric"]["input"]>;
  tick?: InputMaybe<Scalars["numeric"]["input"]>;
  tickSpacing?: InputMaybe<Scalars["Int"]["input"]>;
};

/** columns and relationships of "V4PoolData" */
export type V4PoolData = {
  __typename?: "V4PoolData";
  hooks: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  permit2: Scalars["String"]["output"];
  poolManager: Scalars["String"]["output"];
  sqrtPriceX96: Scalars["numeric"]["output"];
  stateView?: Maybe<Scalars["String"]["output"]>;
  tick: Scalars["numeric"]["output"];
  tickSpacing: Scalars["Int"]["output"];
};

/** Boolean expression to filter rows from the table "V4PoolData". All fields are combined with a logical 'AND'. */
export type V4PoolData_Bool_Exp = {
  _and?: InputMaybe<Array<V4PoolData_Bool_Exp>>;
  _not?: InputMaybe<V4PoolData_Bool_Exp>;
  _or?: InputMaybe<Array<V4PoolData_Bool_Exp>>;
  hooks?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  permit2?: InputMaybe<String_Comparison_Exp>;
  poolManager?: InputMaybe<String_Comparison_Exp>;
  sqrtPriceX96?: InputMaybe<Numeric_Comparison_Exp>;
  stateView?: InputMaybe<String_Comparison_Exp>;
  tick?: InputMaybe<Numeric_Comparison_Exp>;
  tickSpacing?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "V4PoolData". */
export type V4PoolData_Order_By = {
  hooks?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  permit2?: InputMaybe<Order_By>;
  poolManager?: InputMaybe<Order_By>;
  sqrtPriceX96?: InputMaybe<Order_By>;
  stateView?: InputMaybe<Order_By>;
  tick?: InputMaybe<Order_By>;
  tickSpacing?: InputMaybe<Order_By>;
};

/** select columns of table "V4PoolData" */
export enum V4PoolData_Select_Column {
  /** column name */
  Hooks = "hooks",
  /** column name */
  Id = "id",
  /** column name */
  Permit2 = "permit2",
  /** column name */
  PoolManager = "poolManager",
  /** column name */
  SqrtPriceX96 = "sqrtPriceX96",
  /** column name */
  StateView = "stateView",
  /** column name */
  Tick = "tick",
  /** column name */
  TickSpacing = "tickSpacing",
}

/** Streaming cursor of the table "V4PoolData" */
export type V4PoolData_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: V4PoolData_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type V4PoolData_Stream_Cursor_Value_Input = {
  hooks?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  permit2?: InputMaybe<Scalars["String"]["input"]>;
  poolManager?: InputMaybe<Scalars["String"]["input"]>;
  sqrtPriceX96?: InputMaybe<Scalars["numeric"]["input"]>;
  stateView?: InputMaybe<Scalars["String"]["input"]>;
  tick?: InputMaybe<Scalars["numeric"]["input"]>;
  tickSpacing?: InputMaybe<Scalars["Int"]["input"]>;
};

/** columns and relationships of "_meta" */
export type _Meta = {
  __typename?: "_meta";
  bufferBlock?: Maybe<Scalars["Int"]["output"]>;
  chainId?: Maybe<Scalars["Int"]["output"]>;
  endBlock?: Maybe<Scalars["Int"]["output"]>;
  eventsProcessed?: Maybe<Scalars["Int"]["output"]>;
  firstEventBlock?: Maybe<Scalars["Int"]["output"]>;
  isReady?: Maybe<Scalars["Boolean"]["output"]>;
  progressBlock?: Maybe<Scalars["Int"]["output"]>;
  readyAt?: Maybe<Scalars["timestamptz"]["output"]>;
  sourceBlock?: Maybe<Scalars["Int"]["output"]>;
  startBlock?: Maybe<Scalars["Int"]["output"]>;
};

/** Boolean expression to filter rows from the table "_meta". All fields are combined with a logical 'AND'. */
export type _Meta_Bool_Exp = {
  _and?: InputMaybe<Array<_Meta_Bool_Exp>>;
  _not?: InputMaybe<_Meta_Bool_Exp>;
  _or?: InputMaybe<Array<_Meta_Bool_Exp>>;
  bufferBlock?: InputMaybe<Int_Comparison_Exp>;
  chainId?: InputMaybe<Int_Comparison_Exp>;
  endBlock?: InputMaybe<Int_Comparison_Exp>;
  eventsProcessed?: InputMaybe<Int_Comparison_Exp>;
  firstEventBlock?: InputMaybe<Int_Comparison_Exp>;
  isReady?: InputMaybe<Boolean_Comparison_Exp>;
  progressBlock?: InputMaybe<Int_Comparison_Exp>;
  readyAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  sourceBlock?: InputMaybe<Int_Comparison_Exp>;
  startBlock?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "_meta". */
export type _Meta_Order_By = {
  bufferBlock?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  endBlock?: InputMaybe<Order_By>;
  eventsProcessed?: InputMaybe<Order_By>;
  firstEventBlock?: InputMaybe<Order_By>;
  isReady?: InputMaybe<Order_By>;
  progressBlock?: InputMaybe<Order_By>;
  readyAt?: InputMaybe<Order_By>;
  sourceBlock?: InputMaybe<Order_By>;
  startBlock?: InputMaybe<Order_By>;
};

/** select columns of table "_meta" */
export enum _Meta_Select_Column {
  /** column name */
  BufferBlock = "bufferBlock",
  /** column name */
  ChainId = "chainId",
  /** column name */
  EndBlock = "endBlock",
  /** column name */
  EventsProcessed = "eventsProcessed",
  /** column name */
  FirstEventBlock = "firstEventBlock",
  /** column name */
  IsReady = "isReady",
  /** column name */
  ProgressBlock = "progressBlock",
  /** column name */
  ReadyAt = "readyAt",
  /** column name */
  SourceBlock = "sourceBlock",
  /** column name */
  StartBlock = "startBlock",
}

/** Streaming cursor of the table "_meta" */
export type _Meta_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: _Meta_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _Meta_Stream_Cursor_Value_Input = {
  bufferBlock?: InputMaybe<Scalars["Int"]["input"]>;
  chainId?: InputMaybe<Scalars["Int"]["input"]>;
  endBlock?: InputMaybe<Scalars["Int"]["input"]>;
  eventsProcessed?: InputMaybe<Scalars["Int"]["input"]>;
  firstEventBlock?: InputMaybe<Scalars["Int"]["input"]>;
  isReady?: InputMaybe<Scalars["Boolean"]["input"]>;
  progressBlock?: InputMaybe<Scalars["Int"]["input"]>;
  readyAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  sourceBlock?: InputMaybe<Scalars["Int"]["input"]>;
  startBlock?: InputMaybe<Scalars["Int"]["input"]>;
};

/** columns and relationships of "chain_metadata" */
export type Chain_Metadata = {
  __typename?: "chain_metadata";
  block_height?: Maybe<Scalars["Int"]["output"]>;
  chain_id?: Maybe<Scalars["Int"]["output"]>;
  end_block?: Maybe<Scalars["Int"]["output"]>;
  first_event_block_number?: Maybe<Scalars["Int"]["output"]>;
  is_hyper_sync?: Maybe<Scalars["Boolean"]["output"]>;
  latest_fetched_block_number?: Maybe<Scalars["Int"]["output"]>;
  latest_processed_block?: Maybe<Scalars["Int"]["output"]>;
  num_batches_fetched?: Maybe<Scalars["Int"]["output"]>;
  num_events_processed?: Maybe<Scalars["Int"]["output"]>;
  start_block?: Maybe<Scalars["Int"]["output"]>;
  timestamp_caught_up_to_head_or_endblock?: Maybe<
    Scalars["timestamptz"]["output"]
  >;
};

/** Boolean expression to filter rows from the table "chain_metadata". All fields are combined with a logical 'AND'. */
export type Chain_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Chain_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Chain_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Chain_Metadata_Bool_Exp>>;
  block_height?: InputMaybe<Int_Comparison_Exp>;
  chain_id?: InputMaybe<Int_Comparison_Exp>;
  end_block?: InputMaybe<Int_Comparison_Exp>;
  first_event_block_number?: InputMaybe<Int_Comparison_Exp>;
  is_hyper_sync?: InputMaybe<Boolean_Comparison_Exp>;
  latest_fetched_block_number?: InputMaybe<Int_Comparison_Exp>;
  latest_processed_block?: InputMaybe<Int_Comparison_Exp>;
  num_batches_fetched?: InputMaybe<Int_Comparison_Exp>;
  num_events_processed?: InputMaybe<Int_Comparison_Exp>;
  start_block?: InputMaybe<Int_Comparison_Exp>;
  timestamp_caught_up_to_head_or_endblock?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "chain_metadata". */
export type Chain_Metadata_Order_By = {
  block_height?: InputMaybe<Order_By>;
  chain_id?: InputMaybe<Order_By>;
  end_block?: InputMaybe<Order_By>;
  first_event_block_number?: InputMaybe<Order_By>;
  is_hyper_sync?: InputMaybe<Order_By>;
  latest_fetched_block_number?: InputMaybe<Order_By>;
  latest_processed_block?: InputMaybe<Order_By>;
  num_batches_fetched?: InputMaybe<Order_By>;
  num_events_processed?: InputMaybe<Order_By>;
  start_block?: InputMaybe<Order_By>;
  timestamp_caught_up_to_head_or_endblock?: InputMaybe<Order_By>;
};

/** select columns of table "chain_metadata" */
export enum Chain_Metadata_Select_Column {
  /** column name */
  BlockHeight = "block_height",
  /** column name */
  ChainId = "chain_id",
  /** column name */
  EndBlock = "end_block",
  /** column name */
  FirstEventBlockNumber = "first_event_block_number",
  /** column name */
  IsHyperSync = "is_hyper_sync",
  /** column name */
  LatestFetchedBlockNumber = "latest_fetched_block_number",
  /** column name */
  LatestProcessedBlock = "latest_processed_block",
  /** column name */
  NumBatchesFetched = "num_batches_fetched",
  /** column name */
  NumEventsProcessed = "num_events_processed",
  /** column name */
  StartBlock = "start_block",
  /** column name */
  TimestampCaughtUpToHeadOrEndblock = "timestamp_caught_up_to_head_or_endblock",
}

/** Streaming cursor of the table "chain_metadata" */
export type Chain_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Chain_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chain_Metadata_Stream_Cursor_Value_Input = {
  block_height?: InputMaybe<Scalars["Int"]["input"]>;
  chain_id?: InputMaybe<Scalars["Int"]["input"]>;
  end_block?: InputMaybe<Scalars["Int"]["input"]>;
  first_event_block_number?: InputMaybe<Scalars["Int"]["input"]>;
  is_hyper_sync?: InputMaybe<Scalars["Boolean"]["input"]>;
  latest_fetched_block_number?: InputMaybe<Scalars["Int"]["input"]>;
  latest_processed_block?: InputMaybe<Scalars["Int"]["input"]>;
  num_batches_fetched?: InputMaybe<Scalars["Int"]["input"]>;
  num_events_processed?: InputMaybe<Scalars["Int"]["input"]>;
  start_block?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_caught_up_to_head_or_endblock?: InputMaybe<
    Scalars["timestamptz"]["input"]
  >;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["float8"]["input"]>;
  _gt?: InputMaybe<Scalars["float8"]["input"]>;
  _gte?: InputMaybe<Scalars["float8"]["input"]>;
  _in?: InputMaybe<Array<Scalars["float8"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["float8"]["input"]>;
  _lte?: InputMaybe<Scalars["float8"]["input"]>;
  _neq?: InputMaybe<Scalars["float8"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["float8"]["input"]>>;
};

/** Boolean expression to compare columns of type "historicaldatainterval". All fields are combined with logical 'AND'. */
export type Historicaldatainterval_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["historicaldatainterval"]["input"]>;
  _gt?: InputMaybe<Scalars["historicaldatainterval"]["input"]>;
  _gte?: InputMaybe<Scalars["historicaldatainterval"]["input"]>;
  _in?: InputMaybe<Array<Scalars["historicaldatainterval"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["historicaldatainterval"]["input"]>;
  _lte?: InputMaybe<Scalars["historicaldatainterval"]["input"]>;
  _neq?: InputMaybe<Scalars["historicaldatainterval"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["historicaldatainterval"]["input"]>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars["jsonb"]["input"]>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars["jsonb"]["input"]>;
  _eq?: InputMaybe<Scalars["jsonb"]["input"]>;
  _gt?: InputMaybe<Scalars["jsonb"]["input"]>;
  _gte?: InputMaybe<Scalars["jsonb"]["input"]>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars["String"]["input"]>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _in?: InputMaybe<Array<Scalars["jsonb"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["jsonb"]["input"]>;
  _lte?: InputMaybe<Scalars["jsonb"]["input"]>;
  _neq?: InputMaybe<Scalars["jsonb"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["jsonb"]["input"]>>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["numeric"]["input"]>;
  _gt?: InputMaybe<Scalars["numeric"]["input"]>;
  _gte?: InputMaybe<Scalars["numeric"]["input"]>;
  _in?: InputMaybe<Array<Scalars["numeric"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["numeric"]["input"]>;
  _lte?: InputMaybe<Scalars["numeric"]["input"]>;
  _neq?: InputMaybe<Scalars["numeric"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["numeric"]["input"]>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** Boolean expression to compare columns of type "pooltype". All fields are combined with logical 'AND'. */
export type Pooltype_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["pooltype"]["input"]>;
  _gt?: InputMaybe<Scalars["pooltype"]["input"]>;
  _gte?: InputMaybe<Scalars["pooltype"]["input"]>;
  _in?: InputMaybe<Array<Scalars["pooltype"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["pooltype"]["input"]>;
  _lte?: InputMaybe<Scalars["pooltype"]["input"]>;
  _neq?: InputMaybe<Scalars["pooltype"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["pooltype"]["input"]>>;
};

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "AlgebraPoolData" */
  AlgebraPoolData: Array<AlgebraPoolData>;
  /** fetch data from the table: "AlgebraPoolData" using primary key columns */
  AlgebraPoolData_by_pk?: Maybe<AlgebraPoolData>;
  /** fetch data from the table: "Pool" */
  Pool: Array<Pool>;
  /** fetch data from the table: "PoolHistoricalData" */
  PoolHistoricalData: Array<PoolHistoricalData>;
  /** fetch data from the table: "PoolHistoricalData" using primary key columns */
  PoolHistoricalData_by_pk?: Maybe<PoolHistoricalData>;
  /** fetch data from the table: "PoolTimeframedStats" */
  PoolTimeframedStats: Array<PoolTimeframedStats>;
  /** fetch data from the table: "PoolTimeframedStats" using primary key columns */
  PoolTimeframedStats_by_pk?: Maybe<PoolTimeframedStats>;
  /** fetch data from the table: "Pool" using primary key columns */
  Pool_by_pk?: Maybe<Pool>;
  /** fetch data from the table: "Protocol" */
  Protocol: Array<Protocol>;
  /** fetch data from the table: "Protocol" using primary key columns */
  Protocol_by_pk?: Maybe<Protocol>;
  /** fetch data from the table: "SingleChainToken" */
  SingleChainToken: Array<SingleChainToken>;
  /** fetch data from the table: "SingleChainToken" using primary key columns */
  SingleChainToken_by_pk?: Maybe<SingleChainToken>;
  /** fetch data from the table: "SlipstreamPoolData" */
  SlipstreamPoolData: Array<SlipstreamPoolData>;
  /** fetch data from the table: "SlipstreamPoolData" using primary key columns */
  SlipstreamPoolData_by_pk?: Maybe<SlipstreamPoolData>;
  /** fetch data from the table: "V3PoolData" */
  V3PoolData: Array<V3PoolData>;
  /** fetch data from the table: "V3PoolData" using primary key columns */
  V3PoolData_by_pk?: Maybe<V3PoolData>;
  /** fetch data from the table: "V4PoolData" */
  V4PoolData: Array<V4PoolData>;
  /** fetch data from the table: "V4PoolData" using primary key columns */
  V4PoolData_by_pk?: Maybe<V4PoolData>;
  /** fetch data from the table: "_meta" */
  _meta: Array<_Meta>;
  /** fetch data from the table: "chain_metadata" */
  chain_metadata: Array<Chain_Metadata>;
  /** fetch data from the table: "raw_events" */
  raw_events: Array<Raw_Events>;
  /** fetch data from the table: "raw_events" using primary key columns */
  raw_events_by_pk?: Maybe<Raw_Events>;
};

export type Query_RootAlgebraPoolDataArgs = {
  distinct_on?: InputMaybe<Array<AlgebraPoolData_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AlgebraPoolData_Order_By>>;
  where?: InputMaybe<AlgebraPoolData_Bool_Exp>;
};

export type Query_RootAlgebraPoolData_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Query_RootPoolArgs = {
  distinct_on?: InputMaybe<Array<Pool_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Pool_Order_By>>;
  where?: InputMaybe<Pool_Bool_Exp>;
};

export type Query_RootPoolHistoricalDataArgs = {
  distinct_on?: InputMaybe<Array<PoolHistoricalData_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PoolHistoricalData_Order_By>>;
  where?: InputMaybe<PoolHistoricalData_Bool_Exp>;
};

export type Query_RootPoolHistoricalData_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Query_RootPoolTimeframedStatsArgs = {
  distinct_on?: InputMaybe<Array<PoolTimeframedStats_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PoolTimeframedStats_Order_By>>;
  where?: InputMaybe<PoolTimeframedStats_Bool_Exp>;
};

export type Query_RootPoolTimeframedStats_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Query_RootPool_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Query_RootProtocolArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Protocol_Order_By>>;
  where?: InputMaybe<Protocol_Bool_Exp>;
};

export type Query_RootProtocol_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Query_RootSingleChainTokenArgs = {
  distinct_on?: InputMaybe<Array<SingleChainToken_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<SingleChainToken_Order_By>>;
  where?: InputMaybe<SingleChainToken_Bool_Exp>;
};

export type Query_RootSingleChainToken_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Query_RootSlipstreamPoolDataArgs = {
  distinct_on?: InputMaybe<Array<SlipstreamPoolData_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<SlipstreamPoolData_Order_By>>;
  where?: InputMaybe<SlipstreamPoolData_Bool_Exp>;
};

export type Query_RootSlipstreamPoolData_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Query_RootV3PoolDataArgs = {
  distinct_on?: InputMaybe<Array<V3PoolData_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<V3PoolData_Order_By>>;
  where?: InputMaybe<V3PoolData_Bool_Exp>;
};

export type Query_RootV3PoolData_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Query_RootV4PoolDataArgs = {
  distinct_on?: InputMaybe<Array<V4PoolData_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<V4PoolData_Order_By>>;
  where?: InputMaybe<V4PoolData_Bool_Exp>;
};

export type Query_RootV4PoolData_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Query_Root_MetaArgs = {
  distinct_on?: InputMaybe<Array<_Meta_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<_Meta_Order_By>>;
  where?: InputMaybe<_Meta_Bool_Exp>;
};

export type Query_RootChain_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Chain_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chain_Metadata_Order_By>>;
  where?: InputMaybe<Chain_Metadata_Bool_Exp>;
};

export type Query_RootRaw_EventsArgs = {
  distinct_on?: InputMaybe<Array<Raw_Events_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Raw_Events_Order_By>>;
  where?: InputMaybe<Raw_Events_Bool_Exp>;
};

export type Query_RootRaw_Events_By_PkArgs = {
  serial: Scalars["Int"]["input"];
};

/** columns and relationships of "raw_events" */
export type Raw_Events = {
  __typename?: "raw_events";
  block_fields: Scalars["jsonb"]["output"];
  block_hash: Scalars["String"]["output"];
  block_number: Scalars["Int"]["output"];
  block_timestamp: Scalars["Int"]["output"];
  chain_id: Scalars["Int"]["output"];
  contract_name: Scalars["String"]["output"];
  event_id: Scalars["numeric"]["output"];
  event_name: Scalars["String"]["output"];
  log_index: Scalars["Int"]["output"];
  params: Scalars["jsonb"]["output"];
  serial: Scalars["Int"]["output"];
  src_address: Scalars["String"]["output"];
  transaction_fields: Scalars["jsonb"]["output"];
};

/** columns and relationships of "raw_events" */
export type Raw_EventsBlock_FieldsArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};

/** columns and relationships of "raw_events" */
export type Raw_EventsParamsArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};

/** columns and relationships of "raw_events" */
export type Raw_EventsTransaction_FieldsArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};

/** Boolean expression to filter rows from the table "raw_events". All fields are combined with a logical 'AND'. */
export type Raw_Events_Bool_Exp = {
  _and?: InputMaybe<Array<Raw_Events_Bool_Exp>>;
  _not?: InputMaybe<Raw_Events_Bool_Exp>;
  _or?: InputMaybe<Array<Raw_Events_Bool_Exp>>;
  block_fields?: InputMaybe<Jsonb_Comparison_Exp>;
  block_hash?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Int_Comparison_Exp>;
  block_timestamp?: InputMaybe<Int_Comparison_Exp>;
  chain_id?: InputMaybe<Int_Comparison_Exp>;
  contract_name?: InputMaybe<String_Comparison_Exp>;
  event_id?: InputMaybe<Numeric_Comparison_Exp>;
  event_name?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Int_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
  serial?: InputMaybe<Int_Comparison_Exp>;
  src_address?: InputMaybe<String_Comparison_Exp>;
  transaction_fields?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** Ordering options when selecting data from "raw_events". */
export type Raw_Events_Order_By = {
  block_fields?: InputMaybe<Order_By>;
  block_hash?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  block_timestamp?: InputMaybe<Order_By>;
  chain_id?: InputMaybe<Order_By>;
  contract_name?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  event_name?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
  serial?: InputMaybe<Order_By>;
  src_address?: InputMaybe<Order_By>;
  transaction_fields?: InputMaybe<Order_By>;
};

/** select columns of table "raw_events" */
export enum Raw_Events_Select_Column {
  /** column name */
  BlockFields = "block_fields",
  /** column name */
  BlockHash = "block_hash",
  /** column name */
  BlockNumber = "block_number",
  /** column name */
  BlockTimestamp = "block_timestamp",
  /** column name */
  ChainId = "chain_id",
  /** column name */
  ContractName = "contract_name",
  /** column name */
  EventId = "event_id",
  /** column name */
  EventName = "event_name",
  /** column name */
  LogIndex = "log_index",
  /** column name */
  Params = "params",
  /** column name */
  Serial = "serial",
  /** column name */
  SrcAddress = "src_address",
  /** column name */
  TransactionFields = "transaction_fields",
}

/** Streaming cursor of the table "raw_events" */
export type Raw_Events_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Raw_Events_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Raw_Events_Stream_Cursor_Value_Input = {
  block_fields?: InputMaybe<Scalars["jsonb"]["input"]>;
  block_hash?: InputMaybe<Scalars["String"]["input"]>;
  block_number?: InputMaybe<Scalars["Int"]["input"]>;
  block_timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  chain_id?: InputMaybe<Scalars["Int"]["input"]>;
  contract_name?: InputMaybe<Scalars["String"]["input"]>;
  event_id?: InputMaybe<Scalars["numeric"]["input"]>;
  event_name?: InputMaybe<Scalars["String"]["input"]>;
  log_index?: InputMaybe<Scalars["Int"]["input"]>;
  params?: InputMaybe<Scalars["jsonb"]["input"]>;
  serial?: InputMaybe<Scalars["Int"]["input"]>;
  src_address?: InputMaybe<Scalars["String"]["input"]>;
  transaction_fields?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** Boolean expression to compare columns of type "statstimeframe". All fields are combined with logical 'AND'. */
export type Statstimeframe_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["statstimeframe"]["input"]>;
  _gt?: InputMaybe<Scalars["statstimeframe"]["input"]>;
  _gte?: InputMaybe<Scalars["statstimeframe"]["input"]>;
  _in?: InputMaybe<Array<Scalars["statstimeframe"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["statstimeframe"]["input"]>;
  _lte?: InputMaybe<Scalars["statstimeframe"]["input"]>;
  _neq?: InputMaybe<Scalars["statstimeframe"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["statstimeframe"]["input"]>>;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "AlgebraPoolData" */
  AlgebraPoolData: Array<AlgebraPoolData>;
  /** fetch data from the table: "AlgebraPoolData" using primary key columns */
  AlgebraPoolData_by_pk?: Maybe<AlgebraPoolData>;
  /** fetch data from the table in a streaming manner: "AlgebraPoolData" */
  AlgebraPoolData_stream: Array<AlgebraPoolData>;
  /** fetch data from the table: "Pool" */
  Pool: Array<Pool>;
  /** fetch data from the table: "PoolHistoricalData" */
  PoolHistoricalData: Array<PoolHistoricalData>;
  /** fetch data from the table: "PoolHistoricalData" using primary key columns */
  PoolHistoricalData_by_pk?: Maybe<PoolHistoricalData>;
  /** fetch data from the table in a streaming manner: "PoolHistoricalData" */
  PoolHistoricalData_stream: Array<PoolHistoricalData>;
  /** fetch data from the table: "PoolTimeframedStats" */
  PoolTimeframedStats: Array<PoolTimeframedStats>;
  /** fetch data from the table: "PoolTimeframedStats" using primary key columns */
  PoolTimeframedStats_by_pk?: Maybe<PoolTimeframedStats>;
  /** fetch data from the table in a streaming manner: "PoolTimeframedStats" */
  PoolTimeframedStats_stream: Array<PoolTimeframedStats>;
  /** fetch data from the table: "Pool" using primary key columns */
  Pool_by_pk?: Maybe<Pool>;
  /** fetch data from the table in a streaming manner: "Pool" */
  Pool_stream: Array<Pool>;
  /** fetch data from the table: "Protocol" */
  Protocol: Array<Protocol>;
  /** fetch data from the table: "Protocol" using primary key columns */
  Protocol_by_pk?: Maybe<Protocol>;
  /** fetch data from the table in a streaming manner: "Protocol" */
  Protocol_stream: Array<Protocol>;
  /** fetch data from the table: "SingleChainToken" */
  SingleChainToken: Array<SingleChainToken>;
  /** fetch data from the table: "SingleChainToken" using primary key columns */
  SingleChainToken_by_pk?: Maybe<SingleChainToken>;
  /** fetch data from the table in a streaming manner: "SingleChainToken" */
  SingleChainToken_stream: Array<SingleChainToken>;
  /** fetch data from the table: "SlipstreamPoolData" */
  SlipstreamPoolData: Array<SlipstreamPoolData>;
  /** fetch data from the table: "SlipstreamPoolData" using primary key columns */
  SlipstreamPoolData_by_pk?: Maybe<SlipstreamPoolData>;
  /** fetch data from the table in a streaming manner: "SlipstreamPoolData" */
  SlipstreamPoolData_stream: Array<SlipstreamPoolData>;
  /** fetch data from the table: "V3PoolData" */
  V3PoolData: Array<V3PoolData>;
  /** fetch data from the table: "V3PoolData" using primary key columns */
  V3PoolData_by_pk?: Maybe<V3PoolData>;
  /** fetch data from the table in a streaming manner: "V3PoolData" */
  V3PoolData_stream: Array<V3PoolData>;
  /** fetch data from the table: "V4PoolData" */
  V4PoolData: Array<V4PoolData>;
  /** fetch data from the table: "V4PoolData" using primary key columns */
  V4PoolData_by_pk?: Maybe<V4PoolData>;
  /** fetch data from the table in a streaming manner: "V4PoolData" */
  V4PoolData_stream: Array<V4PoolData>;
  /** fetch data from the table: "_meta" */
  _meta: Array<_Meta>;
  /** fetch data from the table in a streaming manner: "_meta" */
  _meta_stream: Array<_Meta>;
  /** fetch data from the table: "chain_metadata" */
  chain_metadata: Array<Chain_Metadata>;
  /** fetch data from the table in a streaming manner: "chain_metadata" */
  chain_metadata_stream: Array<Chain_Metadata>;
  /** fetch data from the table: "raw_events" */
  raw_events: Array<Raw_Events>;
  /** fetch data from the table: "raw_events" using primary key columns */
  raw_events_by_pk?: Maybe<Raw_Events>;
  /** fetch data from the table in a streaming manner: "raw_events" */
  raw_events_stream: Array<Raw_Events>;
};

export type Subscription_RootAlgebraPoolDataArgs = {
  distinct_on?: InputMaybe<Array<AlgebraPoolData_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AlgebraPoolData_Order_By>>;
  where?: InputMaybe<AlgebraPoolData_Bool_Exp>;
};

export type Subscription_RootAlgebraPoolData_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootAlgebraPoolData_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<AlgebraPoolData_Stream_Cursor_Input>>;
  where?: InputMaybe<AlgebraPoolData_Bool_Exp>;
};

export type Subscription_RootPoolArgs = {
  distinct_on?: InputMaybe<Array<Pool_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Pool_Order_By>>;
  where?: InputMaybe<Pool_Bool_Exp>;
};

export type Subscription_RootPoolHistoricalDataArgs = {
  distinct_on?: InputMaybe<Array<PoolHistoricalData_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PoolHistoricalData_Order_By>>;
  where?: InputMaybe<PoolHistoricalData_Bool_Exp>;
};

export type Subscription_RootPoolHistoricalData_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootPoolHistoricalData_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<PoolHistoricalData_Stream_Cursor_Input>>;
  where?: InputMaybe<PoolHistoricalData_Bool_Exp>;
};

export type Subscription_RootPoolTimeframedStatsArgs = {
  distinct_on?: InputMaybe<Array<PoolTimeframedStats_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PoolTimeframedStats_Order_By>>;
  where?: InputMaybe<PoolTimeframedStats_Bool_Exp>;
};

export type Subscription_RootPoolTimeframedStats_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootPoolTimeframedStats_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<PoolTimeframedStats_Stream_Cursor_Input>>;
  where?: InputMaybe<PoolTimeframedStats_Bool_Exp>;
};

export type Subscription_RootPool_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootPool_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Pool_Stream_Cursor_Input>>;
  where?: InputMaybe<Pool_Bool_Exp>;
};

export type Subscription_RootProtocolArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Protocol_Order_By>>;
  where?: InputMaybe<Protocol_Bool_Exp>;
};

export type Subscription_RootProtocol_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootProtocol_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Protocol_Stream_Cursor_Input>>;
  where?: InputMaybe<Protocol_Bool_Exp>;
};

export type Subscription_RootSingleChainTokenArgs = {
  distinct_on?: InputMaybe<Array<SingleChainToken_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<SingleChainToken_Order_By>>;
  where?: InputMaybe<SingleChainToken_Bool_Exp>;
};

export type Subscription_RootSingleChainToken_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootSingleChainToken_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<SingleChainToken_Stream_Cursor_Input>>;
  where?: InputMaybe<SingleChainToken_Bool_Exp>;
};

export type Subscription_RootSlipstreamPoolDataArgs = {
  distinct_on?: InputMaybe<Array<SlipstreamPoolData_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<SlipstreamPoolData_Order_By>>;
  where?: InputMaybe<SlipstreamPoolData_Bool_Exp>;
};

export type Subscription_RootSlipstreamPoolData_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootSlipstreamPoolData_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<SlipstreamPoolData_Stream_Cursor_Input>>;
  where?: InputMaybe<SlipstreamPoolData_Bool_Exp>;
};

export type Subscription_RootV3PoolDataArgs = {
  distinct_on?: InputMaybe<Array<V3PoolData_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<V3PoolData_Order_By>>;
  where?: InputMaybe<V3PoolData_Bool_Exp>;
};

export type Subscription_RootV3PoolData_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootV3PoolData_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<V3PoolData_Stream_Cursor_Input>>;
  where?: InputMaybe<V3PoolData_Bool_Exp>;
};

export type Subscription_RootV4PoolDataArgs = {
  distinct_on?: InputMaybe<Array<V4PoolData_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<V4PoolData_Order_By>>;
  where?: InputMaybe<V4PoolData_Bool_Exp>;
};

export type Subscription_RootV4PoolData_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootV4PoolData_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<V4PoolData_Stream_Cursor_Input>>;
  where?: InputMaybe<V4PoolData_Bool_Exp>;
};

export type Subscription_Root_MetaArgs = {
  distinct_on?: InputMaybe<Array<_Meta_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<_Meta_Order_By>>;
  where?: InputMaybe<_Meta_Bool_Exp>;
};

export type Subscription_Root_Meta_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<_Meta_Stream_Cursor_Input>>;
  where?: InputMaybe<_Meta_Bool_Exp>;
};

export type Subscription_RootChain_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Chain_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chain_Metadata_Order_By>>;
  where?: InputMaybe<Chain_Metadata_Bool_Exp>;
};

export type Subscription_RootChain_Metadata_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Chain_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Chain_Metadata_Bool_Exp>;
};

export type Subscription_RootRaw_EventsArgs = {
  distinct_on?: InputMaybe<Array<Raw_Events_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Raw_Events_Order_By>>;
  where?: InputMaybe<Raw_Events_Bool_Exp>;
};

export type Subscription_RootRaw_Events_By_PkArgs = {
  serial: Scalars["Int"]["input"];
};

export type Subscription_RootRaw_Events_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Raw_Events_Stream_Cursor_Input>>;
  where?: InputMaybe<Raw_Events_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
};

export type GetTokensQueryVariables = Exact<{
  where?: InputMaybe<SingleChainToken_Bool_Exp>;
}>;

export type GetTokensQuery = {
  __typename?: "query_root";
  SingleChainToken: Array<{
    __typename?: "SingleChainToken";
    id: string;
    symbol: string;
    name: string;
    decimals: number;
    trackedTotalValuePooledUsd: any;
    trackedUsdPrice: any;
    trackedSwapVolumeUsd: any;
    poolsCount: any;
    swapsCount: any;
    tokenAddress: string;
    chainId: number;
  }>;
};

export const GetTokensDocument = gql`
  query GetTokens($where: SingleChainToken_bool_exp) {
    SingleChainToken(
      where: $where
      order_by: { trackedTotalValuePooledUsd: desc }
      limit: 10
    ) {
      id
      symbol
      name
      decimals
      trackedTotalValuePooledUsd
      trackedUsdPrice
      trackedSwapVolumeUsd
      poolsCount
      swapsCount
      tokenAddress
      chainId
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
  _variables,
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    GetTokens(
      variables?: GetTokensQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
      signal?: RequestInit["signal"],
    ): Promise<GetTokensQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetTokensQuery>({
            document: GetTokensDocument,
            variables,
            requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
            signal,
          }),
        "GetTokens",
        "query",
        variables,
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
