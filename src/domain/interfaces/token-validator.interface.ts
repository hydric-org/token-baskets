import { IBasketDefinition } from "./basket-definition.interface";
import { IToken } from "./token.interface";

export interface ValidationResult {
  address: string;
  isValid: boolean;
  reason: string;
}

export interface ITokenValidator {
  validateTokens(
    tokens: IToken[],
    basketDefinition: IBasketDefinition,
  ): Promise<ValidationResult[]>;
}
