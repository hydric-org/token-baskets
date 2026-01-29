import { BasketId } from "./domain/enums/basket-id";
import { IBasketDefinition } from "./domain/interfaces/basket-definition.interface";

export const BasketsRegistry: IBasketDefinition[] = [
  {
    id: BasketId.EUR_STABLECOINS,
    name: "EUR Stablecoins",
    description:
      "A curated list of multiple Stablecoins pegged to EUR together in a single place.",
    logo: "../../assets/eur-stablecoins.png",
    searchKeywords: ["EUR", "Euro"],
    minUsdPrice: 0.2,
    maxUsdPrice: 3,
    validationPrompt: `
      You are a crypto expert. Verify if the following tokens match the criteria for the basket "EUR Stablecoins".
      
      Basket's Criteria:
      - Description: A curated list of multiple Stablecoins pegged to EUR together in a single place.
      - Must be a valid, legitimate project (not a scam and not a malicious impersonator).

      CRITICAL INSTRUCTIONS FOR THIS BASKET:
      1. **Wrappers and Vaults are VALID**: Tokens representing deposits (e.g., aEUR, cEUR, eEUR) or wrapped versions are VALID if they are pegged to the asset. The only criteria here is to not be an EUR Token that its price goes up as compound interest.
      2. **Inclusivity**: If it is a EUR-pegged asset and a real project, it belongs in the basket.
        `,
  },
  {
    id: BasketId.XAU_PEGGED_TOKENS,
    name: "Gold Pegged Tokens",
    description:
      "A curated list of multiple Tokens that are pegged to Gold (XAU) USD price together in a single place.",
    logo: "../../assets/xau-pegged-tokens.png",
    searchKeywords: ["XAU", "Gold"],
    minUsdPrice: 2000,
    validationPrompt: `
      You are a crypto expert. Verify if the following tokens match the criteria for the basket "Gold Pegged Tokens".
      
      Basket's Criteria:
      - Description: A curated list of multiple Tokens that are pegged to Gold (XAU) USD price together in a single place.
      - Must be a valid, legitimate project (not a scam and not a malicious impersonator).
      
      CRITICAL INSTRUCTIONS FOR THIS BASKET:
      1. **Inclusivity**: If it is a XAU-pegged asset and a real project, it belongs in the basket.
      2. **Price**: The price must be pegged to XAU's official USD price.`,
  },
  {
    id: BasketId.MONAD_PEGGED_TOKENS,
    name: "Monad Pegged Tokens",
    description:
      "A curated list of multiple Tokens that are pegged to Monad's price together in a single place.",
    logo: "../../assets/monad-pegged-tokens.png",
    searchKeywords: ["MON", "Monad"],
    minUsdPrice: 0.005,
    validationPrompt: `
      You are a crypto expert. Verify if the following tokens match the criteria for the basket "Monad Pegged Tokens".
      
      Basket's Criteria:
      - Description: A curated list of multiple tokens that are pegged to Monad's price together in a single place.
      - Must be a valid, legitimate project (not a scam and not a malicious impersonator).
      
      CRITICAL INSTRUCTIONS FOR THIS BASKET:
      1. **Liquid Staking Tokens are VALID**: Tokens representing deposits (e.g., stMON, gMON, shMON) or wrapped versions are VALID if they are pegged to the Monad's price.
      2. **Inclusivity**: If it is a Monad-pegged asset and a real project, it belongs in the basket.
      3. **Price**: The price must be close to Monad's price. But it can be different, for example stMON has a price slightly different from Monad, but it's pegged to Monad's price, if Monad goes up and down, stMON should follow it.`,
  },
  {
    id: BasketId.HYPE_PEGGED_TOKENS,
    name: "HYPE Pegged Tokens",
    description:
      "A curated list of multiple Tokens that are pegged to Hyperliquid's HYPE price together in a single place.",
    logo: "../../assets/hype-pegged-tokens.png",
    searchKeywords: ["HYPE", "Hyperliquid"],
    minUsdPrice: 5,
    validationPrompt: `
      You are a crypto expert. Verify if the following tokens match the criteria for the basket "HYPE Pegged Tokens".
      
      Basket's Criteria:
      - Description: A curated list of multiple tokens that are pegged to Hyperliquid's HYPE price together in a single place.
      - Must be a valid, legitimate project (not a scam and not a malicious impersonator).
      
      CRITICAL INSTRUCTIONS FOR THIS BASKET:
      1. **Liquid Staking Tokens are VALID**: Tokens representing deposits (e.g., stHYPE, kHYPE, LHYPE) or wrapped versions are VALID if they are pegged to the HYPE's price.
      2. **Inclusivity**: If it is a HYPE-pegged asset and a real project, it belongs in the basket.
      3. **Price**: The price must be close to HYPE's price. But it can be different, for example stHYPE has a price slightly different from HYPE, but it's pegged to HYPE's price, if HYPE goes up and down, stHYPE should follow it.`,
  },
  {
    id: BasketId.BTC_PEGGED_TOKENS,
    name: "BTC Pegged Tokens",
    description:
      "A curated list of multiple Tokens that are pegged to Bitcoin's price together in a single place.",
    logo: "../../assets/btc-pegged-tokens.png",
    searchKeywords: ["BTC", "Bitcoin"],
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
    searchKeywords: ["ETH", "WETH", "Ether"],
    minUsdPrice: 1000,
    validationPrompt: `
      You are a crypto expert. Verify if the following tokens match the criteria for the basket "ETH Pegged Tokens".
      
      Basket's Criteria:
      - Description: A curated list of multiple tokens that are pegged to ETH's price together in a single place.
      - Must be a valid, legitimate project (not a scam and not a malicious impersonator).
      
      CRITICAL INSTRUCTIONS FOR THIS BASKET:
      1. **Liquid Staking Tokens are VALID**: Tokens representing deposits (e.g., stETH, rETH, cbETH) or wrapped versions are VALID if they are pegged to the ether's price.
      2. **Inclusivity**: If it is a ETH-pegged asset and a real project, it belongs in the basket.
      3. **Price**: The price must be close to ETH's price. But it can be different, for example stETH has a price slightly different from ETH, but it's pegged to ETH's price, if ETH goes up and down, stETH should follow it.`,
  },
  {
    id: BasketId.USD_STABLECOINS,
    name: "USD Stablecoins",
    description:
      "A curated list of multiple USD Stablecoins together in a single place.",
    logo: "../../assets/usd-stablecoins.png",
    searchKeywords: ["USD", "DAI", "USAT", "Dollar"],
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
