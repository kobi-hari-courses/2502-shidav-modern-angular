import { Calculator, createCalculator, PI } from "./calc";

let c: Calculator = createCalculator();

let i = 10;

let res = c.add(i, PI);
console.log(res);

