# hydric Token Baskets

A tool to manage and update curated token baskets across multiple chains using AI-powered validation and indexing.

## Features

- **AI-Powered Validation**: Uses Gemini AI (with Google Search Search grounding) to verify token legitimacy and peg adherence.
- **Multi-Chain Support**: Supports multiple blockchains
- **Automated Indexing**: Fetches potential candidates from the hydric Liquidity Pools Indexer.
- **Curated Baskets**: Community-driven basket definitions (e.g., USD Stablecoins).

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file with required keys:
   ```
   GEMINI_API_KEY=your_key
   LIQUIDITY_POOLS_INDEXER_URL=your_url
   ```

## Commands

- **Update Baskets**: `npm run update-baskets`
- **Run Tests**: `npm test`
- **Generate GraphQL SDK**: `npm run codegen`

## Extending the Tool

### Adding a New Basket

To create a new curated token basket:

1.  **Define Basket ID**: Add a new identifier to `src/domain/enums/basket-id.ts`.

    ```typescript
    export enum BasketId {
      USD_STABLECOINS = "usd-stablecoins",
      MY_NEW_BASKET = "my-new-basket", // Add this
    }
    ```

2.  **Register Definition**: Add the basket configuration to `src/baskets-registry.ts`.
    - Define search keywords.
    - Write a specific `validationPrompt` for the AI to follow.
    - Set price bounds or other validation metadata.

3.  **Run**: The next execution of `npm run update-baskets` will automatically process your new basket across all supported chains.

### Adding a New Chain

To support a new blockchain:

1.  **Verify Compatibility**: Ensure the chain is supported by the [hydric Liquidity Pools Indexer](https://docs.hydric.org/overview/supported-blockchains#liquidity-pools).
2.  **Update Enum**: Add the Chain ID to `src/domain/enums/chain-id.ts`.
    ```typescript
    export enum ChainId {
      ETHEREUM = 1,
      UNICHAIN = 130,
      NEW_CHAIN = 1234, // Add your chain ID here
    }
    ```
3.  **Run**: The tool iterates through all values in the `ChainId` enum. Just by adding it to the enum, the tool will start fetching and validating tokens for that chain.

## Project Structure

- `src/domain/interfaces`: Entity interfaces (prefixed with `I`).
- `src/usecases`: Core business logic (e.g., `UpdateBasketUseCase`).
- `src/adapters`: External integrations (AI, Indexer, Filesystem).
- `baskets/`: JSON storage for basket definitions and blocklists.
- `assets/`: Image assets for baskets.
