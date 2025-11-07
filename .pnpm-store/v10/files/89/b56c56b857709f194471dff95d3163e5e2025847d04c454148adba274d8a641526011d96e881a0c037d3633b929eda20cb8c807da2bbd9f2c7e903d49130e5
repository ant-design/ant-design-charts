"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToIntlMathematicalValue = ToIntlMathematicalValue;
var tslib_1 = require("tslib");
var decimal_js_1 = tslib_1.__importDefault(require("decimal.js"));
var _262_1 = require("./262");
function ToIntlMathematicalValue(input) {
    var primValue = (0, _262_1.ToPrimitive)(input, 'number');
    if (typeof primValue === 'bigint') {
        return new decimal_js_1.default(primValue);
    }
    // IMPL
    if (primValue === undefined) {
        return new decimal_js_1.default(NaN);
    }
    if (primValue === true) {
        return new decimal_js_1.default(1);
    }
    if (primValue === false) {
        return new decimal_js_1.default(0);
    }
    if (primValue === null) {
        return new decimal_js_1.default(0);
    }
    try {
        return new decimal_js_1.default(primValue);
    }
    catch (e) {
        return new decimal_js_1.default(NaN);
    }
}
