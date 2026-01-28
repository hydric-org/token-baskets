import { ChainId } from "../domain/enums/chain-id";
import { IBasketDefinition } from "../domain/interfaces/basket-definition.interface";
import { BasketLogger } from "./basket-logger";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MockType = ReturnType<typeof jest.fn<any, any[]>>;

describe("BasketLogger", () => {
  let logger: BasketLogger;
  let consoleSpy: MockType;

  const mockBasketDefinition: IBasketDefinition = {
    id: "test-basket",
    name: "Test Basket",
    description: "Test Description",
    logo: "logo.png",
    searchKeywords: ["TEST"],
    validationPrompt: "Test prompt",
  };

  beforeEach(() => {
    logger = new BasketLogger(ChainId.ETHEREUM, mockBasketDefinition);
    consoleSpy = jest

      .spyOn(console, "log")
      .mockImplementation() as unknown as MockType;
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("should include chain ID and basket name in all logs", () => {
    logger.startUpdate();

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("[Chain 1]"),
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("[Test Basket]"),
    );
  });

  it("should log start update with basket ID", () => {
    logger.startUpdate();

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Starting basket update"),
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("test-basket"),
    );
  });

  it("should log basket not found", () => {
    logger.basketNotFound();

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Basket not found"),
    );
  });

  it("should log fetching tokens", () => {
    logger.fetchingTokens();

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Fetching potential tokens"),
    );
  });

  it("should log found candidates with count", () => {
    logger.foundCandidates(5);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Found 5 new candidates"),
    );
  });

  it("should use singular form for 1 candidate", () => {
    logger.foundCandidates(1);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("1 new candidate to validate"),
    );
  });

  it("should log no candidates when count is 0", () => {
    logger.foundCandidates(0);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("No new candidates"),
    );
  });

  it("should log validating tokens", () => {
    logger.validatingTokens(3);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Validating 3 tokens"),
    );
  });

  it("should log valid token result", () => {
    logger.tokenValidated({
      address: "0x1234567890abcdef",
      isValid: true,
      reason: "Legitimate token",
    });

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("VALID"));
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Legitimate token"),
    );
  });

  it("should log invalid token result", () => {
    logger.tokenValidated({
      address: "0x1234567890abcdef",
      isValid: false,
      reason: "Scam token",
    });

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("INVALID"));
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Scam token"),
    );
  });

  it("should log tokens added", () => {
    logger.tokensAdded(2);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Added 2 tokens to basket"),
    );
  });

  it("should log tokens blocklisted", () => {
    logger.tokensBlocklisted(3);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Added 3 tokens to blocklist"),
    );
  });

  it("should log saving basket", () => {
    logger.savingBasket();

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Saving basket"),
    );
  });

  it("should log update complete", () => {
    logger.updateComplete();

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Update complete"),
    );
  });

  it("should log errors with context", () => {
    const errorSpy = jest.spyOn(console, "error").mockImplementation();
    const testError = new Error("Test error");

    logger.error("Something went wrong", testError);

    expect(errorSpy).toHaveBeenCalledWith(
      expect.stringContaining("ERROR: Something went wrong"),
      testError,
    );

    errorSpy.mockRestore();
  });
});
