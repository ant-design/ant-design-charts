"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUnsignedRoundingMode = GetUnsignedRoundingMode;
var negativeMapping = {
    ceil: 'zero',
    floor: 'infinity',
    expand: 'infinity',
    trunc: 'zero',
    halfCeil: 'half-zero',
    halfFloor: 'half-infinity',
    halfExpand: 'half-infinity',
    halfTrunc: 'half-zero',
    halfEven: 'half-even',
};
var positiveMapping = {
    ceil: 'infinity',
    floor: 'zero',
    expand: 'infinity',
    trunc: 'zero',
    halfCeil: 'half-infinity',
    halfFloor: 'half-zero',
    halfExpand: 'half-infinity',
    halfTrunc: 'half-zero',
    halfEven: 'half-even',
};
function GetUnsignedRoundingMode(roundingMode, isNegative) {
    if (isNegative) {
        return negativeMapping[roundingMode];
    }
    return positiveMapping[roundingMode];
}
