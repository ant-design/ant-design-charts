// Returns the medium value of an array of numbers.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "median", {
    enumerable: true,
    get: function() {
        return median;
    }
});
function median(arr) {
    arr.sort(function(a, b) {
        return a - b;
    });
    var i = arr.length / 2;
    return i % 1 === 0 ? (arr[i - 1] + arr[i]) / 2 : arr[Math.floor(i)];
}
