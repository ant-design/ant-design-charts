export function toRadian(degree) {
    return (degree * Math.PI) / 180;
}
export function toDegree(radian) {
    return (radian * 180) / Math.PI;
}
// convert the angle to the range of 0 to 4*Math.PI
export function convertAngles(startAngle, endAngle) {
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
//# sourceMappingURL=angle.js.map