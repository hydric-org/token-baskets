import { BasketsRegistry } from "./baskets-registry";
import { ChainId } from "./domain/enums/chain-id";
import { runAll } from "./index";
import { UpdateBasketUseCase } from "./usecases/update-basket-use-case";

jest.mock("./usecases/update-basket-use-case");
jest.mock("./adapters/filesystem/file-basket-repository");
jest.mock("./adapters/liquidity-pools-indexer/liquidity-pools-indexer-adapter");
jest.mock("./adapters/ai/gemini-adapter");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MockType = ReturnType<typeof jest.fn<any, any[]>>;

describe("Index Entry Point", () => {
  it("should execute update for all chains and baskets", async () => {
    const mockExecute = jest.fn();
    (UpdateBasketUseCase as unknown as MockType).mockImplementation(() => ({
      execute: mockExecute,
    }));

    await runAll();

    const numericChains = Object.values(ChainId).filter(
      (v) => typeof v === "number",
    );
    const expectedCalls = numericChains.length * BasketsRegistry.length;

    expect(mockExecute).toHaveBeenCalledTimes(expectedCalls);
  });

  it("should catch and log errors in execute", async () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation();
    (UpdateBasketUseCase as unknown as MockType).mockImplementation(() => ({
      execute: jest.fn().mockRejectedValue(new Error("Major Failure")),
    }));

    await runAll();

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Failed to update basket"),
      expect.any(Error),
    );
    consoleSpy.mockRestore();
  });
});
