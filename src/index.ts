import { BasicCalculator } from './basic-calculator';
import { Addition } from './addition';
import { Subtraction } from './subtraction';
import { Multiplication } from './multiplication';
import { Division } from './division';

const calculator = new BasicCalculator();

const addResult = calculator.calculate(new Addition(), 5, 3);
console.log(`5 + 3 = ${addResult}`);

const subResult = calculator.calculate(new Subtraction(), 8, 3);
console.log(`8 - 3 = ${subResult}`);

const mulResult = calculator.calculate(new Multiplication(), 4, 3);
console.log(`4 * 3 = ${mulResult}`);

const divResult = calculator.calculate(new Division(), 10, 2);
console.log(`10 / 2 = ${divResult}`);

try {
    calculator.calculate(new Division(), 10, 0);
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
    } else {
        console.error('An unknown error occurred');
    }
}
