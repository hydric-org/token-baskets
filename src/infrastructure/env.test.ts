import dotenv from "dotenv";

jest.mock("dotenv", () => ({
  config: jest.fn(),
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MockType = ReturnType<typeof jest.fn<any, any[]>>;

describe("Env", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
    (dotenv.config as unknown as MockType).mockClear();
    jest
      .spyOn(process, "exit")
      .mockImplementation((() => {}) as unknown as never);
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it("should load variables correctly if all are provided", () => {
    process.env.LIQUIDITY_POOLS_INDEXER_URL = "https://custom.url";
    process.env.GEMINI_API_KEY = "test-key";
    const { Env: localEnv } = require("./env");
    expect(localEnv.IndexerUrl).toBe("https://custom.url");
    expect(localEnv.GeminiApiKey).toBe("test-key");
  });

  it("should exit if required variables are missing", () => {
    delete process.env.LIQUIDITY_POOLS_INDEXER_URL;
    delete process.env.GEMINI_API_KEY;

    const exitSpy = jest
      .spyOn(process, "exit")
      .mockImplementation((() => {}) as unknown as never);

    // Trigger require
    expect(() => require("./env")).toThrow("Invalid environment variables");

    expect(exitSpy).toHaveBeenCalledWith(1);
  });
});
