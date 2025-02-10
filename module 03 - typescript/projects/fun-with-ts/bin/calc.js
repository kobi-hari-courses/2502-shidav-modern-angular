"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = exports.Calculator = void 0;
exports.createCalculator = createCalculator;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
function createCalculator() {
    return new Calculator();
}
exports.PI = 3.14159265359;
//# sourceMappingURL=calc.js.map