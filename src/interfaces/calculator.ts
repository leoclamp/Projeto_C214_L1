import { Operation } from './operation';

// Interface para a calculadora
export interface Calculator {
  calculate(operation: Operation, a: number, b: number): number;
}
