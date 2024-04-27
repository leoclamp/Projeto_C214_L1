import { Operation } from './interfaces/operation';

// Implementação da multiplicação
export class Multiplication implements Operation {
  execute(a: number, b: number): number {
    return a * b;
  }
}
