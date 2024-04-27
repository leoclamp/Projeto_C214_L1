import { Operation } from './interfaces/operation';

// Implementação da subtração
export class Subtraction implements Operation {
  execute(a: number, b: number): number {
    return a - b;
  }
}
