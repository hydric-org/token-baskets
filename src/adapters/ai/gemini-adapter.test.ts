import { GoogleGenAI } from "@google/genai";
import { ChainId } from "../../domain/enums/chain-id";
import { IBasketDefinition } from "../../domain/interfaces/basket-definition.interface";
import { IToken } from "../../domain/interfaces/token.interface";
import { GeminiAdapter } from "./gemini-adapter";

jest.mock("@google/genai");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MockType = ReturnType<typeof jest.fn<any, any[]>>;

describe("GeminiAdapter", () => {
  let adapter: GeminiAdapter;
  let mockGenerateContent: MockType;

  const mockBasketDefinition: IBasketDefinition = {
    id: "test",
    name: "Stablecoins",
    description: "USD pegged",
    logo: "",
    searchKeywords: ["USD"],
    validationPrompt: "Verify stablecoins",
  };

  const mockTokens: IToken[] = [
    {
      address: "0x1",
      chainId: ChainId.ETHEREUM,
      symbol: "USDC",
      name: "USD Coin",
      decimals: 6,
      trackedTotalValuePooledUsd: 1000000,
    },
  ];

  beforeEach(() => {
    mockGenerateContent = jest.fn();
    (GoogleGenAI as unknown as MockType).mockImplementation(() => ({
      models: {
        generateContent: mockGenerateContent,
      },
    }));
    adapter = new GeminiAdapter();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should return validation results on success", async () => {
    mockGenerateContent.mockResolvedValue({
      text: JSON.stringify({
        results: [{ address: "0x1", isValid: true, reason: "Official" }],
      }),
    });

    const results = await adapter.validateTokens(
      mockTokens,
      mockBasketDefinition,
    );

    expect(results).toHaveLength(1);
    expect(results[0].isValid).toBe(true);
    expect(results[0].address).toBe("0x1");
  });

  it("should return empty array if no tokens provided", async () => {
    const results = await adapter.validateTokens([], mockBasketDefinition);
    expect(results).toEqual([]);
    expect(mockGenerateContent).not.toHaveBeenCalled();
  });

  it("should retry on failure and eventually return empty array", async () => {
    mockGenerateContent.mockRejectedValue(new Error("AI Busy"));
    const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
    const errorSpy = jest.spyOn(console, "error").mockImplementation();

    const promise = adapter.validateTokens(mockTokens, mockBasketDefinition);

    // Use a loop to advance timers and resolve promises for each retry
    for (let i = 0; i < 2; i++) {
      await jest.advanceTimersByTimeAsync(30001); // Covers both 10s and 30s
    }

    const results = await promise;

    expect(results).toEqual([]);
    expect(mockGenerateContent).toHaveBeenCalledTimes(3);
    consoleSpy.mockRestore();
    errorSpy.mockRestore();
  });

  it("should handle malformed JSON response and retry", async () => {
    mockGenerateContent.mockResolvedValue({
      text: "not a json",
    });
    const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
    const errorSpy = jest.spyOn(console, "error").mockImplementation();

    const promise = adapter.validateTokens(mockTokens, mockBasketDefinition);

    // Advancing enough to cover both retries
    for (let i = 0; i < 2; i++) {
      await jest.advanceTimersByTimeAsync(30001);
    }

    const results = await promise;
    expect(results).toEqual([]);
    expect(mockGenerateContent).toHaveBeenCalledTimes(3);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.any(String),
      expect.anything(),
    );
    consoleSpy.mockRestore();
    errorSpy.mockRestore();
  });

  it("should handle non-Error rejection and retry", async () => {
    mockGenerateContent.mockRejectedValue("String Error");
    const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
    const errorSpy = jest.spyOn(console, "error").mockImplementation();

    const promise = adapter.validateTokens(mockTokens, mockBasketDefinition);
    for (let i = 0; i < 2; i++) {
      await jest.advanceTimersByTimeAsync(30001);
    }
    const results = await promise;

    expect(results).toEqual([]);
    expect(consoleSpy).toHaveBeenCalledWith(expect.any(String), "String Error");
    consoleSpy.mockRestore();
    errorSpy.mockRestore();
  });
});
