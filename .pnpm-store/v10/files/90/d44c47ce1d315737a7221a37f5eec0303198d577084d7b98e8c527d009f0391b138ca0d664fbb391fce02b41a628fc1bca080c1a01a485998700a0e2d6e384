"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertAngles = exports.toDegree = exports.toRadian = void 0;
function toRadian(degree) {
    return (degree * Math.PI) / 180;
}
exports.toRadian = toRadian;
function toDegree(radian) {
    return (radian * 180) / Math.PI;
}
exports.toDegree = toDegree;
// convert the angle to the range of 0 to 4*Math.PI
function convertAngles(startAngle, endAngle) {
    startAngle = startAngle % (2 * Math.PI);
    endAngle = endAngle % (2 * Math.PI);
    if (startAngle < 0) {
        startAngle = 2 * Math.PI + startAngle;
    }
    if (endAngle < 0) {
        endAngle = 2 * Math.PI + endAngle;
    }
    if (startAngle >= endAngle) {
        endAngle = endAngle + 2 * Math.PI;
    }
    return {
        startAngle,
        endAngle,
    };
}
exports.convertAngles = convertAngles;
//# sourceMappingURL=angle.js.map