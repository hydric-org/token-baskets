import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  LIQUIDITY_POOLS_INDEXER_URL: z.string().url(),
  GEMINI_API_KEY: z.string().min(1),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("❌ Invalid environment variables:", parsed.error.format());
  process.exit(1);
  throw new Error("Invalid environment variables");
}

export const Env = {
  IndexerUrl: parsed.data.LIQUIDITY_POOLS_INDEXER_URL,
  GeminiApiKey: parsed.data.GEMINI_API_KEY,
};
