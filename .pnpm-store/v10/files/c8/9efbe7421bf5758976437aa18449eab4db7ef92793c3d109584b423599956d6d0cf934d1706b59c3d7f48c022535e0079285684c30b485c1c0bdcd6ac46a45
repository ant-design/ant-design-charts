"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPolygonTextStyleByPlacement = getPolygonTextStyleByPlacement;
const util_1 = require("@antv/util");
const path_1 = require("./path");
const point_1 = require("./point");
const position_1 = require("./position");
/**
 * <zh/> 计算文本位置样式
 *
 * <en/> Calculate text position style
 * @param bounds - <zh/> 外包围盒 | <en/> contour bounds
 * @param placement - <zh/> 位置 | <en/> placement
 * @param offsetX - <zh/> x轴偏移 | <en/> x-axis offset
 * @param offsetY - <zh/> y轴偏移 | <en/> y-axis offset
 * @param closeToContour - <zh/> 标签位置是否贴合轮廓 | <en/> whether the label position is close to the contour
 * @param path - <zh/> 路径 | <en/> path
 * @param autoRotate - <zh/> 是否跟随轮廓旋转 | <en/> whether to rotate with the contour
 * @returns <zh/> 文本样式 | <en/> text style
 */
function getPolygonTextStyleByPlacement(bounds, placement, offsetX, offsetY, closeToContour, path, autoRotate) {
    const [x, y] = (0, position_1.getXYByPlacement)(bounds, placement);
    const style = {
        textAlign: placement === 'left' ? 'right' : placement === 'right' ? 'left' : 'center',
        textBaseline: placement === 'top' ? 'bottom' : placement === 'bottom' ? 'top' : 'middle',
        transform: [['translate', x + offsetX, y + offsetY]],
    };
    if (placement === 'center' || !closeToContour)
        return style;
    const points = (0, path_1.pathToPoints)(path);
    if (!points || points.length <= 3)
        return style;
    const lines = points
        .map((point, index) => {
        const p1 = point;
        const p2 = points[(index + 1) % points.length];
        if ((0, util_1.isEqual)(p1, p2))
            return null;
        return [p1, p2];
    })
        .filter(Boolean);
    const line = (0, point_1.findNearestLine)([x, y], lines);
    const intersection = (0, point_1.findNearestPointOnLine)([x, y], line);
    if (intersection && line) {
        style.transform = [['translate', intersection[0] + offsetX, intersection[1] + offsetY]];
        if (autoRotate) {
            const angle = Math.atan((line[0][1] - line[1][1]) / (line[0][0] - line[1][0]));
            style.transform.push(['rotate', (angle / Math.PI) * 180]);
            style.textAlign = 'center';
            if (placement === 'right' || placement === 'left') {
                if (angle > 0) {
                    style.textBaseline = placement === 'right' ? 'bottom' : 'top';
                }
                else {
                    style.textBaseline = placement === 'right' ? 'top' : 'bottom';
                }
            }
        }
    }
    return style;
}
//# sourceMappingURL=polygon.js.map