"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatNumericRangeToParts = FormatNumericRangeToParts;
var PartitionNumberRangePattern_1 = require("./PartitionNumberRangePattern");
/**
 * https://tc39.es/ecma402/#sec-formatnumericrangetoparts
 */
function FormatNumericRangeToParts(numberFormat, x, y, _a) {
    var getInternalSlots = _a.getInternalSlots;
    var parts = (0, PartitionNumberRangePattern_1.PartitionNumberRangePattern)(numberFormat, x, y, {
        getInternalSlots: getInternalSlots,
    });
    return parts.map(function (part, index) { return ({
        type: part.type,
        value: part.value,
        source: part.source,
        result: index.toString(),
    }); });
}
