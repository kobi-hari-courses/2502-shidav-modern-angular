export class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}

export function createCalculator(): Calculator {
  return new Calculator();
} 

export const PI = 3.14159265359;