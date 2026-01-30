import * as fs from "fs";
import * as path from "path";
import { BasketId } from "../../domain/enums/basket-id";
import { ChainId } from "../../domain/enums/chain-id";
import { IBasket } from "../../domain/interfaces/basket.interface";
import { FileBasketRepository } from "./file-basket-repository";

jest.mock("fs");
jest.mock("path");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MockType = ReturnType<typeof jest.fn<any, any[]>>;

describe("FileBasketRepository", () => {
  let repo: FileBasketRepository;

  beforeEach(() => {
    repo = new FileBasketRepository();
    jest.clearAllMocks();
    (path.resolve as unknown as MockType).mockImplementation(
      (...args: string[]) => args.join("/"),
    );
    (path.dirname as unknown as MockType).mockReturnValue("/dir");
  });

  describe("getBasket", () => {
    it("should return null if file does not exist", async () => {
      (fs.existsSync as unknown as MockType).mockReturnValue(false);
      const result = await repo.getBasket(
        ChainId.ETHEREUM,
        BasketId.USD_STABLECOINS,
      );
      expect(result).toBeNull();
    });

    it("should return parsed basket if file exists", async () => {
      const unifiedMock = {
        id: BasketId.USD_STABLECOINS,
        name: "Test",
        logo: "",
        description: "",
        lastUpdated: "",
        addresses: {
          [ChainId.ETHEREUM.toString()]: ["0x123"],
        },
      };

      const expectedBasket: IBasket = {
        id: BasketId.USD_STABLECOINS,
        name: "Test",
        logo: "",
        description: "",
        lastUpdated: "",
        index: ["0x123"],
      };

      (fs.existsSync as unknown as MockType).mockReturnValue(true);
      (fs.readFileSync as unknown as MockType).mockReturnValue(
        JSON.stringify(unifiedMock),
      );
      const result = await repo.getBasket(
        ChainId.ETHEREUM,
        BasketId.USD_STABLECOINS,
      );
      expect(result).toEqual(expectedBasket);
    });

    it("should return null and log error if parsing fails", async () => {
      (fs.existsSync as unknown as MockType).mockReturnValue(true);
      (fs.readFileSync as unknown as MockType).mockReturnValue("invalid json");
      const consoleSpy = jest.spyOn(console, "error").mockImplementation();
      const result = await repo.getBasket(
        ChainId.ETHEREUM,
        BasketId.USD_STABLECOINS,
      );
      expect(result).toBeNull();
      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });

  describe("saveBasket", () => {
    it("should create directory and save file", async () => {
      const mockBasket: IBasket = {
        id: BasketId.USD_STABLECOINS,
        name: "Test",
        logo: "",
        description: "",
        lastUpdated: "",
        index: ["0x1"],
      };
      (fs.existsSync as unknown as MockType).mockReturnValue(false); // for ensureDirectory and read check
      await repo.saveBasket(ChainId.ETHEREUM, mockBasket);
      expect(fs.mkdirSync).toHaveBeenCalledWith("/dir", { recursive: true });
      expect(fs.writeFileSync).toHaveBeenCalled();

      const savedContent = JSON.parse(
        (fs.writeFileSync as unknown as MockType).mock.calls[0][1],
      );
      expect(savedContent.addresses[ChainId.ETHEREUM.toString()]).toEqual([
        "0x1",
      ]);
    });
  });

  describe("blocklist", () => {
    it("should return empty array if blocklist file does not exist", async () => {
      (fs.existsSync as unknown as MockType).mockReturnValue(false);
      const result = await repo.getBlocklist(
        ChainId.ETHEREUM,
        BasketId.USD_STABLECOINS,
      );
      expect(result).toEqual([]);
    });

    it("should return empty array if blocklist file parsing fails", async () => {
      (fs.existsSync as unknown as MockType).mockReturnValue(true);
      (fs.readFileSync as unknown as MockType).mockReturnValue("invalid json");
      const result = await repo.getBlocklist(
        ChainId.ETHEREUM,
        BasketId.USD_STABLECOINS,
      );
      expect(result).toEqual([]);
    });

    it("should add entries and dedup by address", async () => {
      const existing = {
        [BasketId.USD_STABLECOINS]: {
          [ChainId.ETHEREUM.toString()]: [
            { address: "0x1", reason: "old", timestamp: "" },
          ],
        },
      };
      (fs.existsSync as unknown as MockType).mockReturnValue(true);
      (fs.readFileSync as unknown as MockType).mockReturnValue(
        JSON.stringify(existing),
      );

      await repo.addToBlocklist(ChainId.ETHEREUM, BasketId.USD_STABLECOINS, [
        { address: "0x1", reason: "new", timestamp: "" },
        { address: "0x2", reason: "new", timestamp: "" },
      ]);

      const saved = JSON.parse(
        (fs.writeFileSync as unknown as MockType).mock.calls[0][1],
      );

      const chainList =
        saved[BasketId.USD_STABLECOINS][ChainId.ETHEREUM.toString()];
      expect(chainList).toHaveLength(2);
      expect(chainList[1].address).toBe("0x2");
    });
  });
});
