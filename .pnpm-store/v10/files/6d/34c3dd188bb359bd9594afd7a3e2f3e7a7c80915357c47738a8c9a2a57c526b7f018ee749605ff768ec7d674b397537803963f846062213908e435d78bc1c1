"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatNumericToParts = FormatNumericToParts;
var _262_1 = require("../262");
var PartitionNumberPattern_1 = require("./PartitionNumberPattern");
function FormatNumericToParts(nf, x, implDetails) {
    var parts = (0, PartitionNumberPattern_1.PartitionNumberPattern)(implDetails.getInternalSlots(nf), x);
    var result = (0, _262_1.ArrayCreate)(0);
    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
        var part = parts_1[_i];
        result.push({
            type: part.type,
            value: part.value,
        });
    }
    return result;
}
