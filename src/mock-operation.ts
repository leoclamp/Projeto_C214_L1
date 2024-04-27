import { Operation } from './interfaces/operation';

// Mock para operações de teste
export class MockOperation implements Operation {
  execute(a: number, b: number): number {
    return 42; // Qualquer valor para teste
  }
}
