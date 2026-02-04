"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return cumsum;
    }
});
function cumsum(values, valueof) {
    var sum = 0, index = 0;
    return Float64Array.from(values, valueof === undefined ? function(v) {
        return sum += +v || 0;
    } : function(v) {
        return sum += +valueof(v, index++, values) || 0;
    });
}
