import { BasketsRegistry } from "./baskets-registry";
import { BasketId } from "./domain/enums/basket-id";

describe("BasketsRegistry", () => {
  it("should have a definition for every BasketId", () => {
    const idsInEnum = Object.values(BasketId);
    const idsInRegistry = BasketsRegistry.map((b) => b.id);

    idsInEnum.forEach((id) => {
      expect(idsInRegistry).toContain(id);
    });
  });

  it("all baskets should have non-empty prompts", () => {
    BasketsRegistry.forEach((basket) => {
      expect(basket.validationPrompt.trim().length).toBeGreaterThan(0);
    });
  });

  it("all baskets should have search keywords", () => {
    BasketsRegistry.forEach((basket) => {
      expect(basket.searchKeywords.length).toBeGreaterThan(0);
    });
  });
});
