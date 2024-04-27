import { Calculator } from './interfaces/calculator';
import { Operation } from './interfaces/operation';

// Implementação da calculadora
export class BasicCalculator implements Calculator {
  calculate(operation: Operation, a: number, b: number): number {
    return operation.execute(a, b);
  }
}
