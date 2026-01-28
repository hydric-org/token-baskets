import { BasketId } from "../enums/basket-id";
import { ChainId } from "../enums/chain-id";
import { IBasket } from "./basket.interface";
import { IBlocklistEntry } from "./blocklist-entry.interface";

export interface IBasketRepository {
  getBasket(chainId: ChainId, basketId: BasketId): Promise<IBasket | null>;
  saveBasket(chainId: ChainId, basket: IBasket): Promise<void>;
  getBlocklist(
    chainId: ChainId,
    basketId: BasketId,
  ): Promise<IBlocklistEntry[]>;
  addToBlocklist(
    chainId: ChainId,
    basketId: BasketId,
    entries: IBlocklistEntry[],
  ): Promise<void>;
}
