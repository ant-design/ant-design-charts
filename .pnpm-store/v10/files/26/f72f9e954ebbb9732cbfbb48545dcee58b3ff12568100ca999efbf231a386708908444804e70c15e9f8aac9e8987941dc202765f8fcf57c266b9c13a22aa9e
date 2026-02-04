import { PartitionNumberRangePattern } from './PartitionNumberRangePattern';
/**
 * https://tc39.es/ecma402/#sec-formatnumericrange
 */
export function FormatNumericRange(numberFormat, x, y, _a) {
    var getInternalSlots = _a.getInternalSlots;
    var parts = PartitionNumberRangePattern(numberFormat, x, y, {
        getInternalSlots: getInternalSlots,
    });
    return parts.map(function (part) { return part.value; }).join('');
}
