import { get } from '@antv/util';
// style: { columnWidthRatio: 0.2 } => scale: { x: { padding: 0.8 } }
export function columnWidthRatio(options) {
    const { style, scale, type } = options;
    const scaleOption = {};
    const columnWidthRatio = get(style, 'columnWidthRatio');
    if (columnWidthRatio && type === 'interval') {
        scaleOption.x = Object.assign(Object.assign({}, scale === null || scale === void 0 ? void 0 : scale.x), { padding: 1 - columnWidthRatio });
    }
    return Object.assign(Object.assign({}, options), { scale: Object.assign(Object.assign({}, scale), scaleOption) });
}
//# sourceMappingURL=style.js.map