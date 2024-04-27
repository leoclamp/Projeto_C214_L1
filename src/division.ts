import { Operation } from './interfaces/operation';

// Implementação da divisão
export class Division implements Operation {
  execute(a: number, b: number): number {
    if (b == 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}
