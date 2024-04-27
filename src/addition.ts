import { Operation } from './interfaces/operation';

// Implementação da adição
export class Addition implements Operation {
  execute(a: number, b: number): number {
    return a + b;
  }
}
