var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { debounce, isObject } from '@antv/util';
import { CommonEvent } from '../constants';
import { getExpandedBBox, getPointBBox, isPointInBBox } from '../utils/bbox';
import { parsePadding } from '../utils/padding';
import { PinchHandler } from '../utils/pinch';
import { Shortcut } from '../utils/shortcut';
import { multiply, rotate, subtract } from '../utils/vector';
import { BaseBehavior } from './base-behavior';
/**
 * <zh/> 拖拽画布交互
 *
 * <en/> Drag canvas behavior
 */
export class DragCanvas extends BaseBehavior {
    constructor(context, options) {
        super(context, Object.assign({}, DragCanvas.defaultOptions, options));
        this.isDragging = false;
        this.onDragStart = (event) => {
            if (!this.validate(event))
                return;
            this.isDragging = true;
            this.context.canvas.setCursor('grabbing');
        };
        this.onDrag = (event) => {
            var _a, _b, _c, _d;
            if (!this.isDragging || PinchHandler.isPinching)
                return;
            const x = (_b = (_a = event.movement) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : event.dx;
            const y = (_d = (_c = event.movement) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : event.dy;
            if ((x | y) !== 0) {
                this.translate([x, y], false);
            }
        };
        this.onDragEnd = () => {
            var _a, _b;
            this.isDragging = false;
            this.context.canvas.setCursor(this.defaultCursor);
            (_b = (_a = this.options).onFinish) === null || _b === void 0 ? void 0 : _b.call(_a);
        };
        this.invokeOnFinish = debounce(() => {
            var _a, _b;
            (_b = (_a = this.options).onFinish) === null || _b === void 0 ? void 0 : _b.call(_a);
        }, 300);
        this.shortcut = new Shortcut(context.graph);
        this.bindEvents();
        this.defaultCursor = this.context.canvas.getConfig().cursor || 'default';
    }
    /**
     * <zh/> 更新配置
     *
     * <en/> Update options
     * @param options - <zh/> 配置项 | <en/> Options
     * @internal
     */
    update(options) {
        this.unbindEvents();
        super.update(options);
        this.bindEvents();
    }
    bindEvents() {
        const { trigger } = this.options;
        if (isObject(trigger)) {
            const { up = [], down = [], left = [], right = [] } = trigger;
            this.shortcut.bind(up, (event) => this.onTranslate([0, 1], event));
            this.shortcut.bind(down, (event) => this.onTranslate([0, -1], event));
            this.shortcut.bind(left, (event) => this.onTranslate([1, 0], event));
            this.shortcut.bind(right, (event) => this.onTranslate([-1, 0], event));
        }
        else {
            const { graph } = this.context;
            graph.on(CommonEvent.DRAG_START, this.onDragStart);
            graph.on(CommonEvent.DRAG, this.onDrag);
            graph.on(CommonEvent.DRAG_END, this.onDragEnd);
        }
    }
    onTranslate(value, event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.validate(event))
                return;
            const { sensitivity } = this.options;
            const delta = sensitivity * -1;
            yield this.translate(multiply(value, delta), this.options.animation);
            this.invokeOnFinish();
        });
    }
    /**
     * <zh/> 平移画布
     *
     * <en/> Translate canvas
     * @param offset - <zh/> 平移距离 | <en/> Translation distance
     * @param animation - <zh/> 动画配置 | <en/> Animation configuration
     * @internal
     */
    translate(offset, animation) {
        return __awaiter(this, void 0, void 0, function* () {
            offset = this.clampByDirection(offset);
            offset = this.clampByRange(offset);
            offset = this.clampByRotation(offset);
            yield this.context.graph.translateBy(offset, animation);
        });
    }
    clampByRotation([dx, dy]) {
        const rotation = this.context.graph.getRotation();
        return rotate([dx, dy], rotation);
    }
    clampByDirection([dx, dy]) {
        const { direction } = this.options;
        if (direction === 'x') {
            dy = 0;
        }
        else if (direction === 'y') {
            dx = 0;
        }
        return [dx, dy];
    }
    clampByRange([dx, dy]) {
        const { viewport, canvas } = this.context;
        const [canvasWidth, canvasHeight] = canvas.getSize();
        const [top, right, bottom, left] = parsePadding(this.options.range);
        const range = [canvasHeight * top, canvasWidth * right, canvasHeight * bottom, canvasWidth * left];
        const draggableArea = getExpandedBBox(getPointBBox(viewport.getCanvasCenter()), range);
        const nextViewportCenter = subtract(viewport.getViewportCenter(), [dx, dy, 0]);
        if (!isPointInBBox(nextViewportCenter, draggableArea)) {
            const { min: [minX, minY], max: [maxX, maxY], } = draggableArea;
            if ((nextViewportCenter[0] < minX && dx > 0) || (nextViewportCenter[0] > maxX && dx < 0)) {
                dx = 0;
            }
            if ((nextViewportCenter[1] < minY && dy > 0) || (nextViewportCenter[1] > maxY && dy < 0)) {
                dy = 0;
            }
        }
        return [dx, dy];
    }
    validate(event) {
        if (this.destroyed)
            return false;
        const { enable } = this.options;
        if (typeof enable === 'function')
            return enable(event);
        return !!enable;
    }
    unbindEvents() {
        this.shortcut.unbindAll();
        const { graph } = this.context;
        graph.off(CommonEvent.DRAG_START, this.onDragStart);
        graph.off(CommonEvent.DRAG, this.onDrag);
        graph.off(CommonEvent.DRAG_END, this.onDragEnd);
    }
    destroy() {
        this.shortcut.destroy();
        this.unbindEvents();
        this.context.canvas.setCursor(this.defaultCursor);
        super.destroy();
    }
}
DragCanvas.defaultOptions = {
    enable: (event) => {
        if ('targetType' in event)
            return event.targetType === 'canvas';
        return true;
    },
    sensitivity: 10,
    direction: 'both',
    range: Infinity,
};
//# sourceMappingURL=drag-canvas.js.map