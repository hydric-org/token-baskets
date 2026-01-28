import { ChainId } from "../domain/enums/chain-id";
import { IBasketDefinition } from "../domain/interfaces/basket-definition.interface";
import { ValidationResult } from "../domain/interfaces/token-validator.interface";

export class BasketLogger {
  private chainId: ChainId;
  private basketId: string;
  private basketName: string;

  constructor(chainId: ChainId, basketDefinition: IBasketDefinition) {
    this.chainId = chainId;
    this.basketId = basketDefinition.id;
    this.basketName = basketDefinition.name;
  }

  private formatPrefix(): string {
    return `[Chain ${this.chainId}] [${this.basketName}]`;
  }

  startUpdate(): void {
    console.log("\n" + "=".repeat(100));
    console.log(
      `${this.formatPrefix()} 🚀 Starting basket update (ID: ${this.basketId})`,
    );
    console.log("-".repeat(100));
  }

  basketNotFound(): void {
    console.log(
      `${this.formatPrefix()} 📝 Basket not found, creating new basket`,
    );
  }

  fetchingTokens(): void {
    console.log(`${this.formatPrefix()} 🔍 Fetching potential tokens...`);
  }

  foundCandidates(count: number): void {
    if (count === 0) {
      console.log(`${this.formatPrefix()} ✅ No new candidates to validate`);
    } else {
      console.log(
        `${this.formatPrefix()} 📊 Found ${count} new candidate${count === 1 ? "" : "s"} to validate`,
      );
    }
  }

  validatingTokens(count: number): void {
    console.log(
      `${this.formatPrefix()} 🤖 Validating ${count} token${count === 1 ? "" : "s"} via AI...`,
    );
  }

  tokenValidated(result: ValidationResult): void {
    const status = result.isValid ? "✅ VALID" : "❌ INVALID";
    const address = result.address;
    console.log(
      `${this.formatPrefix()} ${status}: ${address} - ${result.reason}`,
    );
  }

  tokensAdded(count: number): void {
    console.log(
      `${this.formatPrefix()} ✨ Added ${count} token${count === 1 ? "" : "s"} to basket`,
    );
  }

  tokensBlocklisted(count: number): void {
    console.log(
      `${this.formatPrefix()} 🚫 Added ${count} token${count === 1 ? "" : "s"} to blocklist`,
    );
  }

  savingBasket(): void {
    console.log(`${this.formatPrefix()} 💾 Saving basket to filesystem...`);
  }

  updateComplete(): void {
    console.log(`${this.formatPrefix()} ✅ Update complete`);
    console.log("=".repeat(100) + "\n");
  }

  error(message: string, error?: Error): void {
    console.error(`${this.formatPrefix()} ❌ ERROR: ${message}`, error);
  }
}
