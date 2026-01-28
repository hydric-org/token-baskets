import type { CodegenConfig } from "@graphql-codegen/cli";
require("dotenv").config();

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.LIQUIDITY_POOLS_INDEXER_URL,
  documents: "src/infrastructure/indexer/queries/**/*.graphql",
  generates: {
    "src/adapters/liquidity-pools-indexer/generated/liquidity-pools-indexer-sdk.ts":
      {
        plugins: [
          "typescript",
          "typescript-operations",
          "typescript-graphql-request",
        ],
      },
  },
};

export default config;
