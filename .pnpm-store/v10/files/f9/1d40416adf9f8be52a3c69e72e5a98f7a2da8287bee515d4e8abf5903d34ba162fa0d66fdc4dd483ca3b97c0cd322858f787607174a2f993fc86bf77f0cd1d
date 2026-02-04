import { PartitionNumberPattern } from './PartitionNumberPattern';
export function FormatNumeric(internalSlots, x) {
    var parts = PartitionNumberPattern(internalSlots, x);
    return parts.map(function (p) { return p.value; }).join('');
}
