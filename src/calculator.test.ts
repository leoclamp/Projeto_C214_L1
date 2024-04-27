import { Operation } from './interfaces/operation';
import { Calculator } from './interfaces/calculator';
import { Addition } from './addition';
import { Subtraction } from './subtraction';
import { Multiplication } from './multiplication';
import { Division } from './division';
import { BasicCalculator } from './basic-calculator';
import { MockOperation } from './mock-operation';

describe('Calculator', () => {
  let calculator: Calculator;
  let mockOperation: Operation;

  beforeEach(() => {
    calculator = new BasicCalculator();
    mockOperation = new MockOperation();
  });

  test('should add two numbers correctly', () => {
    const result = calculator.calculate(new Addition(), 5, 3);
    expect(result).toEqual(8);
  });

  test('should subtract two numbers correctly', () => {
    const result = calculator.calculate(new Subtraction(), 8, 3);
    expect(result).toEqual(5);
  });

  test('should multiply two numbers correctly', () => {
    const result = calculator.calculate(new Multiplication(), 4, 3);
    expect(result).toEqual(12);
  });

  test('should divide two numbers correctly', () => {
    const result = calculator.calculate(new Division(), 10, 2);
    expect(result).toEqual(5);
  });

  test('should throw error when dividing by zero', () => {
    expect(() => {
      calculator.calculate(new Division(), 10, 0);
    }).toThrowError("Cannot divide by zero"); // Verifica se a mensagem de erro contém "Cannot divide by zero"
  });

  test('should use mock operation for calculation', () => {
    const result = calculator.calculate(mockOperation, 10, 5);
    expect(result).toEqual(42);
  });
});
