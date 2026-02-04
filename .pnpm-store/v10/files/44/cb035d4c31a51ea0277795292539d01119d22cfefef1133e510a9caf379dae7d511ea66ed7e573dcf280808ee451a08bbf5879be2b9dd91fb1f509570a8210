import { PartitionNumberRangePattern } from './PartitionNumberRangePattern';
/**
 * https://tc39.es/ecma402/#sec-formatnumericrangetoparts
 */
export function FormatNumericRangeToParts(numberFormat, x, y, _a) {
    var getInternalSlots = _a.getInternalSlots;
    var parts = PartitionNumberRangePattern(numberFormat, x, y, {
        getInternalSlots: getInternalSlots,
    });
    return parts.map(function (part, index) { return ({
        type: part.type,
        value: part.value,
        source: part.source,
        result: index.toString(),
    }); });
}
