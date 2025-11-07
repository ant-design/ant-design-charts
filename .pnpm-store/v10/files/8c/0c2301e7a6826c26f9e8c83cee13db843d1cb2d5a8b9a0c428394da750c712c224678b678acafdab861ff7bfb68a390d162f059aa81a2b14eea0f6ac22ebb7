// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return lcg;
    }
});
var mul = 0x19660D;
var inc = 0x3C6EF35F;
var eps = 1 / 0x100000000;
function lcg() {
    var seed = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Math.random();
    var state = (0 <= seed && seed < 1 ? seed / eps : Math.abs(seed)) | 0;
    return function() {
        return state = mul * state + inc | 0, eps * (state >>> 0);
    };
}
