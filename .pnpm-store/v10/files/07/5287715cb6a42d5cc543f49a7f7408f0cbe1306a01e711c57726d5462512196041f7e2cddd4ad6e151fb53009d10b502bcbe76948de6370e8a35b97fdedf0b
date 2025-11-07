"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.columnWidthRatio = void 0;
const util_1 = require("@antv/util");
// style: { columnWidthRatio: 0.2 } => scale: { x: { padding: 0.8 } }
function columnWidthRatio(options) {
    const { style, scale, type } = options;
    const scaleOption = {};
    const columnWidthRatio = (0, util_1.get)(style, 'columnWidthRatio');
    if (columnWidthRatio && type === 'interval') {
        scaleOption.x = Object.assign(Object.assign({}, scale === null || scale === void 0 ? void 0 : scale.x), { padding: 1 - columnWidthRatio });
    }
    return Object.assign(Object.assign({}, options), { scale: Object.assign(Object.assign({}, scale), scaleOption) });
}
exports.columnWidthRatio = columnWidthRatio;
//# sourceMappingURL=style.js.map