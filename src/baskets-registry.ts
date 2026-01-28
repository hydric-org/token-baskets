import { BasketId } from "./domain/enums/basket-id";
import { IBasketDefinition } from "./domain/interfaces/basket-definition.interface";

export const BasketsRegistry: IBasketDefinition[] = [
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
      
      Criteria:
      - Description: A curated list of multiple USD Stablecoins.
      - Must be a valid, legitimate project (not a scam and not a malicious impersonator).
      - Symbol/Name must be related to: USD, DAI, USAT
      
      CRITICAL INSTRUCTIONS:
      1. **Legitimate Bridged Tokens are VALID**: Tokens bridged via Wormhole, LayerZero, Axelar, Multichain, etc., are legitimate. Do NOT mark them as impersonators.
      2. **Wrappers and Vaults are VALID**: Tokens representing deposits (e.g., aUSDC, cUSDC, eUSDe) or wrapped versions are VALID if they are pegged to the asset. The only criteria here is to not be an USD Token that its price goes up as compound interest.
      3. **Scam Check**: Only mark as INVALID if it is a *malicious* fake trying to deceive (e.g., low TVL fake USDT). High TVL is a strong signal of legitimacy.
      4. **Inclusivity**: If it is a USD-pegged asset and a real project, it belongs in the basket.
      5. **Impersonation**: Note that some bridge tokens might use the same name and symbol as the original token, in case you see repeated symbol/names, with low liquidity, or volume, perform a double check to see if it's bridged or just a scam trying to impersonate the original token.
        `,
  },
];
