var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { idOf } from '../utils/id';
import { getLayoutProperty, invokeLayoutMethod } from '../utils/layout';
import { print } from '../utils/print';
import { add } from '../utils/vector';
import { DragElement } from './drag-element';
/**
 * <zh/> 调用力导布局拖拽元素的交互
 *
 * <en/> Call d3-force layout to drag element behavior
 * @remarks
 * <zh/> 只能在使用 d3-force 布局时使用该交互，在拖拽过程中会实时重新计算布局。
 *
 * <en/> This behavior can only be used with d3-force layout. The layout will be recalculated in real time during dragging.
 */
export class DragElementForce extends DragElement {
    get forceLayoutInstance() {
        return this.context.layout.getLayoutInstance().find((layout) => ['d3-force', 'd3-force-3d'].includes(layout === null || layout === void 0 ? void 0 : layout.id));
    }
    /**
     * Whether the behavior is enabled
     * @param event - The event object
     * @returns Is the behavior enabled
     * @internal
     */
    validate(event) {
        if (!this.context.layout)
            return false;
        // 未使用力导布局 / The force layout is not used
        if (!this.forceLayoutInstance) {
            print.warn('DragElementForce only works with d3-force or d3-force-3d layout');
            return false;
        }
        return super.validate(event);
    }
    /**
     * Move selected elements by offset
     * @param ids - The selected element IDs
     * @param offset - The offset to move
     * @internal
     */
    moveElement(ids, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            const layout = this.forceLayoutInstance;
            this.context.graph.getNodeData(ids).forEach((element, index) => {
                const { x = 0, y = 0 } = element.style || {};
                if (layout)
                    invokeLayoutMethod(layout, 'setFixedPosition', ids[index], [...add([+x, +y], this.clampByRotation(offset))]);
            });
        });
    }
    /**
     * Triggered when the drag starts
     * @param event - The event object
     * @internal
     */
    onDragStart(event) {
        this.enable = this.validate(event);
        if (!this.enable)
            return;
        this.target = this.getSelectedNodeIDs([event.target.id]);
        this.hideEdge();
        this.context.graph.frontElement(this.target);
        const layout = this.forceLayoutInstance;
        if (layout)
            getLayoutProperty(layout, 'simulation').alphaTarget(0.3).restart();
        this.context.graph.getNodeData(this.target).forEach((element) => {
            const { x = 0, y = 0 } = element.style || {};
            if (layout)
                invokeLayoutMethod(layout, 'setFixedPosition', idOf(element), [+x, +y]);
        });
    }
    /**
     * Triggered when dragging
     * @param event - The event object
     * @internal
     */
    onDrag(event) {
        if (!this.enable)
            return;
        const delta = this.getDelta(event);
        this.moveElement(this.target, delta);
    }
    /**
     * Triggered when the drag ends
     * @internal
     */
    onDragEnd() {
        const layout = this.forceLayoutInstance;
        if (layout)
            getLayoutProperty(layout, 'simulation').alphaTarget(0);
        if (this.options.fixed)
            return;
        this.context.graph.getNodeData(this.target).forEach((element) => {
            if (layout)
                invokeLayoutMethod(layout, 'setFixedPosition', idOf(element), [null, null, null]);
        });
    }
}
//# sourceMappingURL=drag-element-force.js.map