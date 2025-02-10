"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calc_1 = require("./calc");
var c = (0, calc_1.createCalculator)();
var i = 10;
var res = c.add(i, calc_1.PI);
console.log(res);
var a = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }
for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
    var day = a_1[_i];
    console.log(day);
}
var translate = {
    One: 'Uno',
    Two: 'Dos',
    Three: 'Tres',
    Four: 'Cuatro',
};
for (var val in translate) {
    console.log(val, translate[val]);
}
while (i < 20) {
    console.log(i);
    i++;
}
//# sourceMappingURL=main.js.map