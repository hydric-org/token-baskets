import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { IBasketDefinition } from "../../domain/interfaces/basket-definition.interface";
import {
  ITokenValidator,
  ValidationResult,
} from "../../domain/interfaces/token-validator.interface";
import { IToken } from "../../domain/interfaces/token.interface";
import { Env } from "../../infrastructure/env";
import {
  formatCompactNumber,
  formatCompactUsd,
} from "../../utils/number-format";

const validationResultSchema = z.object({
  address: z.string().describe("The smart contract address of the token."),
  isValid: z
    .boolean()
    .describe("Whether the token is legitimate for the basket."),
  reason: z
    .string()
    .describe("Explanation for why the token was accepted or rejected."),
});

const validationResponseSchema = z.object({
  results: z.array(validationResultSchema),
});

export class GeminiAdapter implements ITokenValidator {
  private client: GoogleGenAI;

  constructor() {
    this.client = new GoogleGenAI({ apiKey: Env.GeminiApiKey });
  }

  async validateTokens(
    tokens: IToken[],
    basketDefinition: IBasketDefinition,
  ): Promise<ValidationResult[]> {
    if (tokens.length === 0) return [];

    const prompt = `
${basketDefinition.validationPrompt}

# Candidate Token Data
# Format: [address] | symbol | name | chain | tvl | volume | pools | swaps
${tokens
  .map(
    (t) =>
      `- [${t.address}]: ${t.symbol}, ${t.name}, ${t.chainId}, ${formatCompactUsd(t.trackedTotalValuePooledUsd)}, ${formatCompactUsd(t.trackedSwapVolumeUsd)}, ${formatCompactNumber(t.poolsCount)}, ${formatCompactNumber(t.swapsCount)}`,
  )
  .join("\n")}

## AI Search Strategy (Grounding)
IMPORTANT: Use Google Search to ground your logic in real-time data for tokens you are unsure about or you think it's an impersonator. You should never search tokens that have high tvl (considerng the network they are on), since it's a clear sign of legitimacy.

If a token is new or its legitimacy is unclear:
1. **Targeted Queries**: Search for: 
   - "official [token symbol] contract address on [chain name]"
   - "[token name] documentation official site"
   - "[token symbol] [chain] address coingecko/defillama"
   - ""[token address]"" - searching only the address with quotes will give you tips on from where the token is
2. **Cross-Reference**: Do not trust a single search snippet. Verify that the address provided by the search results matches the address provided in my data.
3. **Bridge Check**: Specifically check if the address belongs to a known bridge (e.g., "Is [address] the Wormhole bridged USDC on Unichain?").
4. **Transparency**: In your \`reasoning\` field, mention if Google Search was used to confirm the address.
`;

    const retryDelays = [10000, 30000]; // 10s, 30s

    for (let attempt = 0; attempt <= retryDelays.length; attempt++) {
      try {
        const result = await this.client.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: prompt,
          config: {
            tools: [{ googleSearch: {} }],
            responseMimeType: "application/json",
            responseJsonSchema: zodToJsonSchema(validationResponseSchema),
          },
        });

        const responseText = result.text || "{}";
        const responseByAi = JSON.parse(responseText);
        const validated = validationResponseSchema.parse(responseByAi);

        return validated.results as ValidationResult[];
      } catch (e) {
        if (attempt < retryDelays.length) {
          const delay = retryDelays[attempt];

          console.warn(
            `[GeminiAdapter] AI Request failed. Retrying in ${delay / 1000}s... (Attempt ${attempt + 1}/${retryDelays.length + 1})`,
            e instanceof Error
              ? e.message +
                  " (" +
                  ((e as { status?: number }).status ?? "unknown") +
                  ")"
              : e,
          );

          await new Promise((resolve) => setTimeout(resolve, delay));
        } else {
          console.error(
            "[GeminiAdapter] AI Validation failed after retries. Discarding batch.",
            e,
          );
          return [];
        }
      }
    }

    return [];
  }
}
