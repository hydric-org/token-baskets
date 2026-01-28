import { ChainId } from "../enums/chain-id";
import { IBasketDefinition } from "./basket-definition.interface";
import { IToken } from "./token.interface";

export interface ITokenSource {
  getPotentialTokens(
    chainId: ChainId,
    basketDefinition: IBasketDefinition,
    excludedIds: string[],
  ): Promise<IToken[]>;
}
