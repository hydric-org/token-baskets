# hydric Token Baskets

A professional tool to manage and update curated token baskets (Stablecoins, LSTs, Pegged Assets, etc.) across multiple chains using AI-powered validation and the hydric Indexer.

## How It Works

The tool follows a **human-in-the-loop automation** strategy:

- **Discovery**  
  Queries the hydric Liquidity Pools Indexer for new tokens matching specific criteria.

- **AI Validation**  
  Uses Gemini 3.5 Flash with Google Search grounding to verify legitimacy and peg adherence.

- **Audit**  
  Automatically filters out known scams and malicious impersonators using high-trust signals such as TVL, volume, and swap counts.

- **GitOps**  
  Updates the local JSON state and opens a pull request for final human verification before merging.

## Accessing Baskets

Baskets are globally accessible via the jsDelivr CDN for easy integration into any dApp or backend.

- **URL template**

```
  https://cdn.jsdelivr.net/gh/hydric-org/token-baskets/baskets/{chainId}/{basketId}.json
```

- **Example (USD Stablecoins on Ethereum)**

```
  https://cdn.jsdelivr.net/gh/hydric-org/token-baskets/baskets/1/usd-stablecoins.json
```

## Setup & Development

### Prerequisites

- Node.js v18 or higher
- Google AI Studio API key
- [hydric Liquidity Pools Indexer](https://github.com/hydric-org/liquidity-pools-indexer) deploy url

### Installation

- Install dependencies  
  `npm install`

- Create a `.env` file with the following variables:

```env
GEMINI_API_KEY
LIQUIDITY_POOLS_INDEXER_URL
```

### Commands

- **Update baskets**  
  `npm run update-baskets`
  Starts the discovery and validation process.

- **Run tests**  
  `npm run test`
  Executes the Jest test suite.

- **Generate SDK**  
  `npm run codegen`
  Generates the GraphQL SDK from the indexer schema.

## Extending the Tool

### Adding a New Basket

1. **Define ID**  
   Add the new identifier to `src/domain/enums/basket-id.ts`.

2. **Register**  
   Add the configuration (keywords, AI prompt, price bounds) to `src/baskets-registry.ts`.

3. **Execute**  
   `npm run update-baskets`
   Run the update command to automatically populate the new basket across all supported chains.

### Adding a New Chain

1. **Verify**  
   Ensure the chain is supported by the hydric Indexer.

2. **Update**  
   Add the new ID to `src/domain/enums/chain-id.ts`.

## Disclaimer

This project is an open-source tool for data aggregation. Token inclusion in a basket is based on automated AI analysis and human review and does not constitute financial advice. Use at your own risk.
