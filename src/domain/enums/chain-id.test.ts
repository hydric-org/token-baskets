import { ChainId } from "./chain-id";

describe("ChainId", () => {
  it("should have correct values for supported chains", () => {
    expect(ChainId.ETHEREUM).toBe(1);
    expect(ChainId.UNICHAIN).toBe(130);
  });

  it("should contain expected number of chains", () => {
    const keys = Object.keys(ChainId).filter((k) => isNaN(Number(k)));
    expect(keys).toHaveLength(2);
  });
});
