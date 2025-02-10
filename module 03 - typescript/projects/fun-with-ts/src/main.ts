import { Calculator, createCalculator, PI } from "./calc";

let c: Calculator = createCalculator();

let i = 10;

let res = c.add(i, PI);
console.log(res);

const a = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }


for (let day of a) {
    console.log(day);
}

const translate: Record<string, string> = {
    One: 'Uno',
    Two: 'Dos',
    Three: 'Tres', 
    Four: 'Cuatro',
}

for (let val in translate) {
    console.log(val, translate[val]);
}

while (i < 20) {
    console.log(i);
    i++;
}


