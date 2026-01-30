import * as fs from "fs";
import * as path from "path";
import { BasketId } from "../../domain/enums/basket-id";
import { ChainId } from "../../domain/enums/chain-id";
import { IBasketRepository } from "../../domain/interfaces/basket-repository.interface";
import { IBasket } from "../../domain/interfaces/basket.interface";
import { IBlocklistEntry } from "../../domain/interfaces/blocklist-entry.interface";

interface UnifiedBasketFile {
  id: string;
  name: string;
  logo: string;
  description: string;
  lastUpdated: string;
  addresses: {
    [chainId: string]: string[];
  };
}

interface UnifiedBlocklistFile {
  [basketId: string]: {
    [chainId: string]: IBlocklistEntry[];
  };
}

export class FileBasketRepository implements IBasketRepository {
  private getBasketPath(basketId: BasketId): string {
    return path.resolve(process.cwd(), "baskets", `${basketId}.json`);
  }

  private getBlocklistPath(): string {
    return path.resolve(process.cwd(), "baskets", "blocklist.json");
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
    const filePath = this.getBasketPath(basketId);
    if (!fs.existsSync(filePath)) return null;

    const content = fs.readFileSync(filePath, "utf-8");

    try {
      const unifiedBasket = JSON.parse(content) as UnifiedBasketFile;
      const chainAddresses = unifiedBasket.addresses[chainId.toString()] || [];

      return {
        id: unifiedBasket.id,
        name: unifiedBasket.name,
        logo: unifiedBasket.logo,
        description: unifiedBasket.description,
        lastUpdated: unifiedBasket.lastUpdated,
        index: chainAddresses,
      };
    } catch (e) {
      console.error(`Error parsing basket file ${filePath}`, e);
      return null;
    }
  }

  async saveBasket(chainId: ChainId, basket: IBasket): Promise<void> {
    const filePath = this.getBasketPath(basket.id as BasketId);
    this.ensureDirectory(filePath);

    let unifiedBasket: UnifiedBasketFile;

    if (fs.existsSync(filePath)) {
      try {
        unifiedBasket = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      } catch {
        // If file exists but is corrupt, overwrite (or handle error, but simplified here)
        unifiedBasket = {
          id: basket.id,
          name: basket.name,
          logo: basket.logo,
          description: basket.description,
          lastUpdated: basket.lastUpdated,
          addresses: {},
        };
      }
    } else {
      unifiedBasket = {
        id: basket.id,
        name: basket.name,
        logo: basket.logo,
        description: basket.description,
        lastUpdated: basket.lastUpdated,
        addresses: {},
      };
    }

    // Update common fields
    unifiedBasket.name = basket.name;
    unifiedBasket.logo = basket.logo;
    unifiedBasket.description = basket.description;
    unifiedBasket.lastUpdated = basket.lastUpdated;

    // Update specific chain addresses
    unifiedBasket.addresses[chainId.toString()] = basket.index;

    fs.writeFileSync(filePath, JSON.stringify(unifiedBasket, null, 4));

    // Also update all.json
    this.updateAllList(unifiedBasket);
  }

  private updateAllList(updatedBasket: UnifiedBasketFile) {
    const allPath = path.resolve(process.cwd(), "baskets", "all.json");
    let allBaskets: UnifiedBasketFile[] = [];

    if (fs.existsSync(allPath)) {
      try {
        const content = JSON.parse(fs.readFileSync(allPath, "utf-8"));
        allBaskets = content.baskets || [];
      } catch (e) {
        console.error("Error parsing all.json", e);
      }
    }

    const index = allBaskets.findIndex((b) => b.id === updatedBasket.id);
    if (index >= 0) {
      allBaskets[index] = updatedBasket;
    } else {
      allBaskets.push(updatedBasket);
    }

    fs.writeFileSync(allPath, JSON.stringify({ baskets: allBaskets }, null, 4));
  }

  private getUnifiedBlocklist(): UnifiedBlocklistFile {
    const filePath = this.getBlocklistPath();
    if (!fs.existsSync(filePath)) return {};

    const content = fs.readFileSync(filePath, "utf-8");
    try {
      return JSON.parse(content) as UnifiedBlocklistFile;
    } catch {
      return {};
    }
  }

  async getBlocklist(
    chainId: ChainId,
    basketId: BasketId,
  ): Promise<IBlocklistEntry[]> {
    const fullBlocklist = this.getUnifiedBlocklist();
    const basketBlocklist = fullBlocklist[basketId] || {};
    return basketBlocklist[chainId.toString()] || [];
  }

  async addToBlocklist(
    chainId: ChainId,
    basketId: BasketId,
    entries: IBlocklistEntry[],
  ): Promise<void> {
    const filePath = this.getBlocklistPath();
    this.ensureDirectory(filePath);

    const fullBlocklist = this.getUnifiedBlocklist();

    if (!fullBlocklist[basketId]) {
      fullBlocklist[basketId] = {};
    }
    if (!fullBlocklist[basketId][chainId.toString()]) {
      fullBlocklist[basketId][chainId.toString()] = [];
    }

    const currentList = fullBlocklist[basketId][chainId.toString()];
    const currentSet = new Set(currentList.map((e) => e.address.toLowerCase()));

    for (const entry of entries) {
      if (!currentSet.has(entry.address.toLowerCase())) {
        currentList.push(entry);
      }
    }

    fs.writeFileSync(filePath, JSON.stringify(fullBlocklist, null, 4));
  }
}
