"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "determination", {
    enumerable: true,
    get: function() {
        return determination;
    }
});
var _points = require("./points");
function determination(data, x, y, uY, predict) {
    var SSE = 0, SST = 0;
    (0, _points.visitPoints)(data, x, y, function(dx, dy) {
        var sse = dy - predict(dx), sst = dy - uY;
        SSE += sse * sse;
        SST += sst * sst;
    });
    return 1 - SSE / SST;
}
