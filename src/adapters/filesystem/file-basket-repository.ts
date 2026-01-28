import * as fs from "fs";
import * as path from "path";
import { BasketId } from "../../domain/enums/basket-id";
import { ChainId } from "../../domain/enums/chain-id";
import { IBasketRepository } from "../../domain/interfaces/basket-repository.interface";
import { IBasket } from "../../domain/interfaces/basket.interface";
import { IBlocklistEntry } from "../../domain/interfaces/blocklist-entry.interface";

interface ChainBlocklistFile {
  [basketId: string]: IBlocklistEntry[];
}

export class FileBasketRepository implements IBasketRepository {
  private getBasketPath(chainId: ChainId, basketId: BasketId): string {
    return path.resolve(
      process.cwd(),
      "baskets",
      chainId.toString(),
      `${basketId}.json`,
    );
  }

  private getBlocklistPath(chainId: ChainId): string {
    return path.resolve(
      process.cwd(),
      "baskets",
      chainId.toString(),
      "blocklist.json",
    );
  }

  private ensureDirectory(filePath: string): void {
    const dirname = path.dirname(filePath);
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname, { recursive: true });
    }
  }

  async getBasket(
    chainId: ChainId,
    basketId: BasketId,
  ): Promise<IBasket | null> {
    const filePath = this.getBasketPath(chainId, basketId);
    if (!fs.existsSync(filePath)) return null;

    const content = fs.readFileSync(filePath, "utf-8");

    try {
      return JSON.parse(content) as IBasket;
    } catch (e) {
      console.error(`Error parsing basket file ${filePath}`, e);
      return null;
    }
  }

  async saveBasket(chainId: ChainId, basket: IBasket): Promise<void> {
    const filePath = this.getBasketPath(chainId, basket.id as BasketId);
    this.ensureDirectory(filePath);
    fs.writeFileSync(filePath, JSON.stringify(basket, null, 4));
  }

  private getChainBlocklist(chainId: ChainId): ChainBlocklistFile {
    const filePath = this.getBlocklistPath(chainId);
    if (!fs.existsSync(filePath)) return {};

    const content = fs.readFileSync(filePath, "utf-8");

    try {
      const parsed = JSON.parse(content);
      return parsed as ChainBlocklistFile;
    } catch {
      return {};
    }
  }

  async getBlocklist(
    chainId: ChainId,
    basketId: BasketId,
  ): Promise<IBlocklistEntry[]> {
    const chainBlocklist = this.getChainBlocklist(chainId);
    return chainBlocklist[basketId] || [];
  }

  async addToBlocklist(
    chainId: ChainId,
    basketId: BasketId,
    entries: IBlocklistEntry[],
  ): Promise<void> {
    const filePath = this.getBlocklistPath(chainId);
    this.ensureDirectory(filePath);

    const chainBlocklist = this.getChainBlocklist(chainId);
    const currentList = chainBlocklist[basketId] || [];

    const currentSet = new Set(currentList.map((e) => e.address.toLowerCase()));

    for (const entry of entries) {
      if (!currentSet.has(entry.address.toLowerCase())) {
        currentList.push(entry);
      }
    }

    chainBlocklist[basketId] = currentList;

    fs.writeFileSync(filePath, JSON.stringify(chainBlocklist, null, 4));
  }
}
