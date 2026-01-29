import { BasketId } from "./domain/enums/basket-id";
import { IBasketDefinition } from "./domain/interfaces/basket-definition.interface";

export const BasketsRegistry: IBasketDefinition[] = [
  {
    id: BasketId.BTC_PEGGED_TOKENS,
    name: "BTC Pegged Assets",
    description:
      "A curated list of multiple Tokens that are pegged to Bitcoin's price together in a single place.",
    logo: "../../assets/btc-pegged-tokens.png",
    searchKeywords: ["BTC"],
    minUsdPrice: 30000,
    validationPrompt: `
      You are a crypto expert. Verify if the following tokens match the criteria for the basket "BTC Pegged Assets".
      
      Basket's Criteria:
      - Description: A curated list of multiple tokens that are pegged to BTC's price together in a single place.
      - Must be a valid, legitimate project (not a scam and not a malicious impersonator).
      
      CRITICAL INSTRUCTIONS FOR THIS BASKET:
      1. **BTC Yield Tokens are VALID**: Tokens representing deposits (e.g., LBTC, solvBTC) or wrapped versions are VALID if they are pegged to the bitcoin's price.
      2. **Inclusivity**: If it is a BTC-pegged asset and a real project, it belongs in the basket.
      3. **Price**: It should be close to the BTC price, tokens with price of 10k when the btc price is 70k should be discarded
        `,
  },
  {
    id: BasketId.ETH_PEGGED_TOKENS,
    name: "ETH Pegged Tokens",
    description:
      "A curated list of multiple Tokens that are pegged to ETH's price together in a single place.",
    logo: "../../assets/ether-pegged-tokens.png",
    searchKeywords: ["ETH", "WETH"],
    minUsdPrice: 1000,
    validationPrompt: `
      You are a crypto expert. Verify if the following tokens match the criteria for the basket "ETH Pegged Tokens".
      
      Basket's Criteria:
      - Description: A curated list of multiple tokens that are pegged to ETH's price together in a single place.
      - Must be a valid, legitimate project (not a scam and not a malicious impersonator).
      
      CRITICAL INSTRUCTIONS FOR THIS BASKET:
      1. **Liquid Staking Tokens are VALID**: Tokens representing deposits (e.g., stETH, rETH, cbETH) or wrapped versions are VALID if they are pegged to the ether's price.
      2. **Inclusivity**: If it is a ETH-pegged asset and a real project, it belongs in the basket.
      3. **Price**: The price must be close to ETH's price. But it can be different, for example stETH has a price slightly different from ETH, but it's pegged to ETH's price, if ETH goes up and down, stETH should follow it.
      4. **Zero Address**: If the token is the zero address, it means that the token is the native ETH of the chain, so it's always VALID.
        `,
  },
  {
    id: BasketId.USD_STABLECOINS,
    name: "USD Stablecoins",
    description:
      "A curated list of multiple USD Stablecoins together in a single place.",
    logo: "../../assets/usd-stablecoins.png",
    searchKeywords: ["USD", "DAI", "USAT"],
    minUsdPrice: 0.9,
    maxUsdPrice: 1.1,
    validationPrompt: `
      You are a crypto expert. Verify if the following tokens match the criteria for the basket "USD Stablecoins".
      
      Basket's Criteria:
      - Description: A curated list of multiple USD Stablecoins.
      - Must be a valid, legitimate project (not a scam and not a malicious impersonator).

      CRITICAL INSTRUCTIONS FOR THIS BASKET:
      1. **Wrappers and Vaults are VALID**: Tokens representing deposits (e.g., aUSDC, cUSDC, eUSDe) or wrapped versions are VALID if they are pegged to the asset. The only criteria here is to not be an USD Token that its price goes up as compound interest.
      2. **Inclusivity**: If it is a USD-pegged asset and a real project, it belongs in the basket.
        `,
  },
];
