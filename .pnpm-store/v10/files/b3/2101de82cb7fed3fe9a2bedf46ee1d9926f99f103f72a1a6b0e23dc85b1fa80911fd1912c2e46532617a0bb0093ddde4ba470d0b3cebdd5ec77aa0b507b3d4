"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxisRadar = void 0;
const coordinate_1 = require("../utils/coordinate");
const axis_1 = require("./axis");
function inferTitleTransform(orientation) {
    const internalOrientation = orientation % (Math.PI * 2);
    if (internalOrientation === Math.PI / 2) {
        return { titleTransform: 'translate(0, 50%)' };
    }
    if (internalOrientation > -Math.PI / 2 && internalOrientation < Math.PI / 2) {
        return { titleTransform: 'translate(50%, 0)' };
    }
    if (internalOrientation > Math.PI / 2 &&
        internalOrientation < (Math.PI * 3) / 2) {
        return { titleTransform: 'translate(-50%, 0)' };
    }
    return {};
}
function inferAxisStyle(options, theme, coordinate, scales) {
    const { radar } = options;
    const [scale] = scales;
    const name = scale.getOptions().name;
    const [startAngle, endAngle] = (0, coordinate_1.angleOf)(coordinate);
    const { axisRadar: radarTheme = {} } = theme;
    return Object.assign(Object.assign({}, radarTheme), { grid: name === 'position', gridConnect: 'line', gridControlAngles: new Array(radar.count).fill(0).map((_, i) => {
            const angle = (endAngle - startAngle) / radar.count;
            return angle * i;
        }) });
}
const AxisRadar = (options) => {
    const { important = {} } = options, restOptions = __rest(options, ["important"]);
    return (context) => {
        const { theme, coordinate, scales } = context;
        return (0, axis_1.LinearAxis)(Object.assign(Object.assign(Object.assign({}, restOptions), inferTitleTransform(options.orientation)), { important: Object.assign(Object.assign({}, inferAxisStyle(options, theme, coordinate, scales)), important) }))(context);
    };
};
exports.AxisRadar = AxisRadar;
exports.AxisRadar.props = Object.assign(Object.assign({}, axis_1.LinearAxis.props), { defaultPosition: 'center' });
//# sourceMappingURL=axisRadar.js.map