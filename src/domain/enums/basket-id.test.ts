import { BasketId } from "./basket-id";

describe("BasketId", () => {
  it("should have correct values for baskets", () => {
    expect(BasketId.USD_STABLECOINS).toBe("usd-stablecoins");
    expect(BasketId.ETH_PEGGED_TOKENS).toBe("eth-pegged-tokens");
  });

  it("should contain expected number of baskets", () => {
    const keys = Object.keys(BasketId);
    expect(keys).toHaveLength(2);
  });
});
