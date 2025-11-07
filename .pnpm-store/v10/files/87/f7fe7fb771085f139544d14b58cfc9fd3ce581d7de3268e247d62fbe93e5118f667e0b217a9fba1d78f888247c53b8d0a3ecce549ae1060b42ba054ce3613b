"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LassoSelect = void 0;
const g_1 = require("@antv/g");
const path_1 = require("../utils/path");
const brush_select_1 = require("./brush-select");
/**
 * <zh/> 套索选择交互
 *
 * <en/> Lasso select behavior
 * @remarks
 * <zh/> 用不规则多边形框选一组元素。
 *
 * <en/> Select a group of elements with an irregular polygon.
 */
class LassoSelect extends brush_select_1.BrushSelect {
    /**
     * Triggered when the mouse is pressed
     * @param event - mouse event
     * @internal
     */
    onPointerDown(event) {
        if (!super.validate(event) || !super.isKeydown() || this.points)
            return;
        const { canvas, graph } = this.context;
        this.pathShape = new g_1.Path({
            id: 'g6-lasso-select',
            style: this.options.style,
        });
        canvas.appendChild(this.pathShape);
        this.points = [(0, brush_select_1.getCursorPoint)(event, graph)];
    }
    /**
     * Triggered when the mouse is moved
     * @param event - mouse event
     * @internal
     */
    onPointerMove(event) {
        var _a;
        if (!this.points)
            return;
        const { immediately, mode } = this.options;
        this.points.push((0, brush_select_1.getCursorPoint)(event, this.context.graph));
        (_a = this.pathShape) === null || _a === void 0 ? void 0 : _a.setAttribute('d', (0, path_1.pointsToPath)(this.points));
        if (immediately && mode === 'default' && this.points.length > 2)
            super.updateElementsStates(this.points);
    }
    /**
     * Triggered when the mouse is released
     * @internal
     */
    onPointerUp() {
        if (!this.points)
            return;
        if (this.points.length < 2) {
            this.clearLasso();
            return;
        }
        super.updateElementsStates(this.points);
        this.clearLasso();
    }
    clearLasso() {
        var _a;
        (_a = this.pathShape) === null || _a === void 0 ? void 0 : _a.remove();
        this.pathShape = undefined;
        this.points = undefined;
    }
}
exports.LassoSelect = LassoSelect;
//# sourceMappingURL=lasso-select.js.map