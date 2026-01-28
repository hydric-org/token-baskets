export interface IBasketDefinition {
  id: string;
  name: string;
  description: string;
  logo: string;
  searchKeywords: string[];
  minUsdPrice?: number;
  maxUsdPrice?: number;
  validationPrompt: string;
}
