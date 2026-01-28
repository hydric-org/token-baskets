import { ChainId } from "../../domain/enums/chain-id";
import { IBasketDefinition } from "../../domain/interfaces/basket-definition.interface";
import { getSdk } from "./generated/liquidity-pools-indexer-sdk";
import { LiquidityPoolsIndexerAdapter } from "./liquidity-pools-indexer-adapter";

jest.mock("graphql-request");
jest.mock("./generated/liquidity-pools-indexer-sdk");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MockType = ReturnType<typeof jest.fn<any, any[]>>;

describe("IndexerAdapter", () => {
  let adapter: LiquidityPoolsIndexerAdapter;
  let mockSdk: { GetTokens: MockType };

  const mockBasketDefinition: IBasketDefinition = {
    id: "test-basket",
    name: "Test Basket",
    description: "Test Description",
    logo: "logo.png",
    searchKeywords: ["USD", "DAI"],
    minUsdPrice: 0.9,
    maxUsdPrice: 1.1,
    validationPrompt: "prompt",
  };

  beforeEach(() => {
    mockSdk = {
      GetTokens: jest.fn(),
    };
    (getSdk as unknown as MockType).mockReturnValue(mockSdk);
    adapter = new LiquidityPoolsIndexerAdapter();
  });

  it("should fetch and filter tokens by price", async () => {
    // Price filtering now happens at the database level via GraphQL query
    // The mock should only return tokens that match the price filter (0.9-1.1)
    mockSdk.GetTokens.mockResolvedValueOnce({
      SingleChainToken: [
        {
          tokenAddress: "0x1",
          chainId: ChainId.ETHEREUM,
          symbol: "USDC",
          name: "USD Coin",
          decimals: 6,
          trackedUsdPrice: "1.0",
          trackedTotalValuePooledUsd: "1000000",
        },
      ],
    });
    mockSdk.GetTokens.mockResolvedValueOnce({ SingleChainToken: [] });

    const tokens = await adapter.getPotentialTokens(
      ChainId.ETHEREUM,
      mockBasketDefinition,
      [],
    );

    expect(tokens).toHaveLength(1);
    expect(tokens[0].address).toBe("0x1");
    expect(tokens[0].priceUsd).toBe(1.0);

    // Verify that price filters were passed to the query
    expect(mockSdk.GetTokens).toHaveBeenCalledWith(
      expect.objectContaining({
        minUsdPrice: 0.9,
        maxUsdPrice: 1.1,
      }),
    );
  });

  it("should avoid duplicate tokens from multiple keywords", async () => {
    const mockToken = {
      tokenAddress: "0x1",
      chainId: ChainId.ETHEREUM,
      symbol: "USDC",
      name: "USD Coin",
      decimals: 6,
      trackedUsdPrice: "1.0",
      trackedTotalValuePooledUsd: "1000000",
    };
    mockSdk.GetTokens.mockResolvedValue({
      SingleChainToken: [mockToken],
    });

    const tokens = await adapter.getPotentialTokens(
      ChainId.ETHEREUM,
      mockBasketDefinition,
      [],
    );

    expect(tokens).toHaveLength(1);
    expect(mockSdk.GetTokens).toHaveBeenCalledTimes(2);
  });

  it("should handle indexer errors gracefully", async () => {
    mockSdk.GetTokens.mockRejectedValue(new Error("Indexer down"));
    const consoleSpy = jest.spyOn(console, "error").mockImplementation();

    const tokens = await adapter.getPotentialTokens(
      ChainId.ETHEREUM,
      mockBasketDefinition,
      [],
    );

    expect(tokens).toHaveLength(0);
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it("should work without price filters", async () => {
    const defNoPrice: IBasketDefinition = {
      ...mockBasketDefinition,
      minUsdPrice: undefined,
      maxUsdPrice: undefined,
    };
    mockSdk.GetTokens.mockResolvedValue({
      SingleChainToken: [
        {
          tokenAddress: "0x1",
          chainId: ChainId.ETHEREUM,
          symbol: "ANY",
          name: "Any Price",
          decimals: 18,
          trackedUsdPrice: "50000",
          trackedTotalValuePooledUsd: "100",
        },
      ],
    });

    const tokens = await adapter.getPotentialTokens(
      ChainId.ETHEREUM,
      defNoPrice,
      [],
    );
    expect(tokens).toHaveLength(1);

    // Verify that undefined price filters are passed to the query
    expect(mockSdk.GetTokens).toHaveBeenCalledWith(
      expect.objectContaining({
        minUsdPrice: undefined,
        maxUsdPrice: undefined,
      }),
    );
  });

  it("should handle missing price or TVL strings by defaulting to 0", async () => {
    mockSdk.GetTokens.mockResolvedValue({
      SingleChainToken: [
        {
          tokenAddress: "0x1",
          chainId: ChainId.ETHEREUM,
          symbol: "MISSING",
          name: "Missing Price",
          decimals: 18,
          trackedUsdPrice: null,
          trackedTotalValuePooledUsd: undefined,
        },
      ],
    });

    const tokens = await adapter.getPotentialTokens(
      ChainId.ETHEREUM,
      {
        ...mockBasketDefinition,
        minUsdPrice: undefined,
        maxUsdPrice: undefined,
      },
      [],
    );
    expect(tokens).toHaveLength(1);
    expect(tokens[0].priceUsd).toBe(0);
    expect(tokens[0].trackedTotalValuePooledUsd).toBe(0);
  });
});
