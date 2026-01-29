import { ChainId } from "./chain-id";

describe("ChainId", () => {
  it("should have correct values for supported chains", () => {
    expect(ChainId.ETHEREUM).toBe(1);
    expect(ChainId.UNICHAIN).toBe(130);
    expect(ChainId.MONAD).toBe(143);
    expect(ChainId.PLASMA).toBe(9745);
    expect(ChainId.SCROLL).toBe(534352);
    expect(ChainId.HYPER_EVM).toBe(999);
    expect(ChainId.BASE).toBe(8453);
  });

  it("should contain expected number of chains", () => {
    const keys = Object.keys(ChainId).filter((k) => isNaN(Number(k)));
    expect(keys).toHaveLength(7);
  });
});
