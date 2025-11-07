"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatUtil = void 0;
exports.formatUtil = {
    toXy(pointset, format) {
        if (!format)
            return [...pointset];
        const xProperty = format[0].slice(1);
        const yProperty = format[1].slice(1);
        return pointset.map((pt) => [pt[xProperty], pt[yProperty]]);
    },
    fromXy(coordinates, format) {
        if (!format)
            return [...coordinates];
        const xProperty = format[0].slice(1);
        const yProperty = format[1].slice(1);
        return coordinates.map(([x, y]) => ({
            [xProperty]: x,
            [yProperty]: y,
        }));
    },
};
//# sourceMappingURL=format.js.map