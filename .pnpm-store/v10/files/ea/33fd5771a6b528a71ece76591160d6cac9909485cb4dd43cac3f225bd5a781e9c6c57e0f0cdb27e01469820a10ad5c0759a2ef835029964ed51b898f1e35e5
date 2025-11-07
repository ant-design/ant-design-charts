"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampling = sampling;
function sampling(data, size) {
    if (data.length <= size)
        return data;
    var step = Math.floor(data.length / size);
    var result = [];
    for (var i = 0; i < data.length; i += step) {
        result.push(data[i]);
    }
    return result;
}
//# sourceMappingURL=sampling.js.map