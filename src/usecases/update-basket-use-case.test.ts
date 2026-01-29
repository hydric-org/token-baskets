import { BasketId } from "../domain/enums/basket-id";
import { ChainId } from "../domain/enums/chain-id";
import { IBasketDefinition } from "../domain/interfaces/basket-definition.interface";
import { IBasketRepository } from "../domain/interfaces/basket-repository.interface";
import { ITokenSource } from "../domain/interfaces/token-source.interface";
import { ITokenValidator } from "../domain/interfaces/token-validator.interface";
import { IToken } from "../domain/interfaces/token.interface";
import { UpdateBasketUseCase } from "./update-basket-use-case";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MockType = ReturnType<typeof jest.fn<any, any[]>>;

describe("UpdateBasketUseCase", () => {
  let basketRepo: {
    getBasket: MockType;
    saveBasket: MockType;
    getBlocklist: MockType;
    addToBlocklist: MockType;
  };
  let tokenSource: { getPotentialTokens: MockType };
  let tokenValidator: { validateTokens: MockType };
  let useCase: UpdateBasketUseCase;

  const mockBasketDefinition: IBasketDefinition = {
    id: BasketId.USD_STABLECOINS,
    name: "USD Stablecoins",
    description: "Test",
    logo: "logo.png",
    searchKeywords: ["USD"],
    minUsdPrice: 0.9,
    maxUsdPrice: 1.1,
    validationPrompt: "Test",
  };

  const mockToken: IToken = {
    address: "0x123",
    chainId: ChainId.ETHEREUM,
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    trackedTotalValuePooledUsd: 1000000,
  };

  beforeEach(() => {
    basketRepo = {
      getBasket: jest.fn(),
      saveBasket: jest.fn(),
      getBlocklist: jest.fn(),
      addToBlocklist: jest.fn(),
    };
    tokenSource = {
      getPotentialTokens: jest.fn(),
    };
    tokenValidator = {
      validateTokens: jest.fn(),
    };

    useCase = new UpdateBasketUseCase(
      basketRepo as unknown as IBasketRepository,
      tokenSource as unknown as ITokenSource,
      tokenValidator as unknown as ITokenValidator,
    );
  });

  it("should add valid tokens and create basket if missing", async () => {
    basketRepo.getBasket.mockResolvedValue(null);
    basketRepo.getBlocklist.mockResolvedValue([
      { address: "0xBLOCK", reason: "Blocked", timestamp: "" },
    ]);
    tokenSource.getPotentialTokens.mockResolvedValue([mockToken]);
    tokenValidator.validateTokens.mockResolvedValue([
      {
        address: mockToken.address,
        isValid: true,
        reason: "Valid",
      },
    ]);

    await useCase.execute(ChainId.ETHEREUM, mockBasketDefinition);

    expect(basketRepo.saveBasket).toHaveBeenCalledWith(
      ChainId.ETHEREUM,
      expect.objectContaining({
        id: BasketId.USD_STABLECOINS,
        index: [mockToken.address],
      }),
    );
  });

  it("should deduplicate tokens already in basket", async () => {
    basketRepo.getBasket.mockResolvedValue({
      id: BasketId.USD_STABLECOINS,
      index: [mockToken.address.toLowerCase()],
    });
    basketRepo.getBlocklist.mockResolvedValue([]);
    tokenSource.getPotentialTokens.mockResolvedValue([mockToken]);
    tokenValidator.validateTokens.mockResolvedValue([
      {
        address: mockToken.address,
        isValid: true,
        reason: "Valid",
      },
    ]);

    await useCase.execute(ChainId.ETHEREUM, mockBasketDefinition);

    // Should NOT save if no NEW tokens added
    expect(basketRepo.saveBasket).not.toHaveBeenCalled();
  });

  it("should add invalid tokens to blocklist", async () => {
    basketRepo.getBasket.mockResolvedValue({
      id: BasketId.USD_STABLECOINS,
      index: [],
    });
    basketRepo.getBlocklist.mockResolvedValue([]);
    tokenSource.getPotentialTokens.mockResolvedValue([mockToken]);
    tokenValidator.validateTokens.mockResolvedValue([
      {
        address: mockToken.address,
        isValid: false,
        reason: "Scam",
      },
    ]);

    await useCase.execute(ChainId.ETHEREUM, mockBasketDefinition);

    expect(basketRepo.addToBlocklist).toHaveBeenCalled();
  });

  it("should stop if no candidates found", async () => {
    basketRepo.getBasket.mockResolvedValue({
      id: BasketId.USD_STABLECOINS,
      index: [],
    });
    basketRepo.getBlocklist.mockResolvedValue([]);
    tokenSource.getPotentialTokens.mockResolvedValue([]);

    await useCase.execute(ChainId.ETHEREUM, mockBasketDefinition);

    expect(tokenValidator.validateTokens).not.toHaveBeenCalled();
  });

  it("should complete update even if AI returns no results", async () => {
    basketRepo.getBasket.mockResolvedValue({
      id: BasketId.USD_STABLECOINS,
      index: [],
    });
    basketRepo.getBlocklist.mockResolvedValue([]);
    tokenSource.getPotentialTokens.mockResolvedValue([mockToken]);
    tokenValidator.validateTokens.mockResolvedValue([]); // AI returned nothing

    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    await useCase.execute(ChainId.ETHEREUM, mockBasketDefinition);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Update complete"),
    );
    consoleSpy.mockRestore();
  });

  it("should handle AI returning unexpected address", async () => {
    basketRepo.getBasket.mockResolvedValue({
      id: BasketId.USD_STABLECOINS,
      index: [],
    });
    basketRepo.getBlocklist.mockResolvedValue([]);
    tokenSource.getPotentialTokens.mockResolvedValue([mockToken]);
    tokenValidator.validateTokens.mockResolvedValue([
      { address: "0xUNKNOWN", isValid: true, reason: "Strange" },
    ]);

    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    await useCase.execute(ChainId.ETHEREUM, mockBasketDefinition);

    // Should use address as symbol on line 89
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("0xUNKNOWN"),
    );
    consoleSpy.mockRestore();
  });

  it("should lowercase addresses when adding to basket and blocklist", async () => {
    const uppercaseAddress = "0xABCDEF1234567890ABCDEF1234567890ABCDEF12";
    const lowercaseAddress = uppercaseAddress.toLowerCase();

    const mixedToken: IToken = {
      ...mockToken,
      address: uppercaseAddress,
    };

    basketRepo.getBasket.mockResolvedValue(null);
    basketRepo.getBlocklist.mockResolvedValue([]);
    tokenSource.getPotentialTokens.mockResolvedValue([
      mixedToken,
      { ...mockToken, address: "0xVALID" },
    ]);

    tokenValidator.validateTokens.mockResolvedValue([
      {
        address: uppercaseAddress,
        isValid: true,
        reason: "Valid Uppercase",
      },
      {
        address: "0xINVALID",
        isValid: false,
        reason: "Invalid Mixed",
      },
    ]);

    await useCase.execute(ChainId.ETHEREUM, mockBasketDefinition);

    // Verify basket index has lowercase address
    expect(basketRepo.saveBasket).toHaveBeenCalledWith(
      ChainId.ETHEREUM,
      expect.objectContaining({
        index: expect.arrayContaining([lowercaseAddress]),
      }),
    );

    // Verify basket index does NOT have uppercase address
    const savedBasket = basketRepo.saveBasket.mock.calls[0][1];
    expect(savedBasket.index).not.toContain(uppercaseAddress);

    // Verify blocklist has lowercase address
    expect(basketRepo.addToBlocklist).toHaveBeenCalledWith(
      ChainId.ETHEREUM,
      BasketId.USD_STABLECOINS,
      expect.arrayContaining([
        expect.objectContaining({
          address: "0xinvalid",
        }),
      ]),
    );
  });
});
