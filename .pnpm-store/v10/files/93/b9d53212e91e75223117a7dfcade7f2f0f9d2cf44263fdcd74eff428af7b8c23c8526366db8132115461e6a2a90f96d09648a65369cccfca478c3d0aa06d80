var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AABB } from '@antv/g';
import { clamp, isNumber, pick } from '@antv/util';
import { AnimationType, GraphEvent } from '../constants';
import { getAnimationOptions } from '../utils/animation';
import { getBBoxSize, getCombinedBBox, getExpandedBBox, isBBoxInside, isPointInBBox } from '../utils/bbox';
import { AnimateEvent, ViewportEvent, emit } from '../utils/event';
import { isPoint } from '../utils/is';
import { parsePadding } from '../utils/padding';
import { add, divide, subtract } from '../utils/vector';
export class ViewportController {
    get padding() {
        return parsePadding(this.context.options.padding);
    }
    get paddingOffset() {
        const [top, right, bottom, left] = this.padding;
        const [offsetX, offsetY, offsetZ] = [(left - right) / 2, (top - bottom) / 2, 0];
        return [offsetX, offsetY, offsetZ];
    }
    constructor(context) {
        this.landmarkCounter = 0;
        this.context = context;
        const [px, py] = this.paddingOffset;
        const { zoom, rotation, x = px, y = py } = context.options;
        this.transform({ mode: 'absolute', scale: zoom, translate: [x, y], rotate: rotation }, false);
    }
    get camera() {
        const { canvas } = this.context;
        return new Proxy(canvas.getCamera(), {
            get: (target, prop) => {
                const layers = Object.entries(canvas.getLayers()).filter(([name]) => !['main'].includes(name));
                const cameras = layers.map(([, layer]) => layer.getCamera());
                const value = target[prop];
                if (typeof value === 'function') {
                    return (...args) => {
                        const result = value.apply(target, args);
                        cameras.forEach((camera) => {
                            camera[prop].apply(camera, args);
                        });
                        return result;
                    };
                }
            },
        });
    }
    createLandmark(options) {
        return this.camera.createLandmark(`landmark-${this.landmarkCounter++}`, options);
    }
    getAnimation(animation) {
        const finalAnimation = getAnimationOptions(this.context.options, animation);
        if (!finalAnimation)
            return false;
        return pick(Object.assign({}, finalAnimation), ['easing', 'duration']);
    }
    getCanvasSize() {
        const { canvas } = this.context;
        const { width = 0, height = 0 } = canvas.getConfig();
        return [width, height];
    }
    /**
     * <zh/> 获取画布中心坐标
     *
     * <en/> Get the center coordinates of the canvas
     * @returns - <zh/> 画布中心坐标 | <en/> Center coordinates of the canvas
     * @remarks
     * <zh/> 基于画布的宽高计算中心坐标，不受视口变换影响
     *
     * <en/> Calculate the center coordinates based on the width and height of the canvas, not affected by the viewport transformation
     */
    getCanvasCenter() {
        const { canvas } = this.context;
        const { width = 0, height = 0 } = canvas.getConfig();
        return [width / 2, height / 2, 0];
    }
    /**
     * <zh/> 当前视口中心坐标
     *
     * <en/> Current viewport center coordinates
     * @returns - <zh/> 视口中心坐标 | <en/> Viewport center coordinates
     * @remarks
     * <zh/> 以画布原点为原点，受到视口变换影响
     *
     * <en/> With the origin of the canvas as the origin, affected by the viewport transformation
     */
    getViewportCenter() {
        // 理论上应该通过 camera.getFocalPoint() 获取
        // 但在 2D 场景下，通过 pan 操作时，focalPoint 不会变化
        const [x, y] = this.camera.getPosition();
        return [x, y, 0];
    }
    getGraphCenter() {
        return this.context.graph.getViewportByCanvas(this.getCanvasCenter());
    }
    getZoom() {
        return this.camera.getZoom();
    }
    getRotation() {
        return this.camera.getRoll();
    }
    getTranslateOptions(options) {
        const { camera } = this;
        const { mode, translate = [] } = options;
        const currentZoom = this.getZoom();
        const position = camera.getPosition();
        const focalPoint = camera.getFocalPoint();
        const [cx, cy] = this.getCanvasCenter();
        const [x = 0, y = 0, z = 0] = translate;
        const delta = divide([-x, -y, -z], currentZoom);
        return mode === 'relative'
            ? {
                position: add(position, delta),
                focalPoint: add(focalPoint, delta),
            }
            : {
                position: add([cx, cy, position[2]], delta),
                focalPoint: add([cx, cy, focalPoint[2]], delta),
            };
    }
    getRotateOptions(options) {
        const { mode, rotate = 0 } = options;
        const roll = mode === 'relative' ? this.camera.getRoll() + rotate : rotate;
        return { roll };
    }
    getZoomOptions(options) {
        const { zoomRange } = this.context.options;
        const currentZoom = this.camera.getZoom();
        const { mode, scale = 1 } = options;
        return clamp(mode === 'relative' ? currentZoom * scale : scale, ...zoomRange);
    }
    transform(options, animation) {
        return __awaiter(this, void 0, void 0, function* () {
            const { graph } = this.context;
            const { translate, rotate, scale, origin } = options;
            this.cancelAnimation();
            const _animation = this.getAnimation(animation);
            emit(graph, new ViewportEvent(GraphEvent.BEFORE_TRANSFORM, options));
            // 针对缩放操作，且不涉及平移、旋转、中心点、动画时，直接调用 setZoomByViewportPoint
            // For zoom operations, and no translation, rotation, center point, and animation involved, call setZoomByViewportPoint directly
            if (!rotate && scale && !translate && origin && !_animation) {
                this.camera.setZoomByViewportPoint(this.getZoomOptions(options), origin);
                emit(graph, new ViewportEvent(GraphEvent.AFTER_TRANSFORM, options));
                return;
            }
            const landmarkOptions = {};
            if (translate)
                Object.assign(landmarkOptions, this.getTranslateOptions(options));
            if (isNumber(rotate))
                Object.assign(landmarkOptions, this.getRotateOptions(options));
            if (isNumber(scale))
                Object.assign(landmarkOptions, { zoom: this.getZoomOptions(options) });
            if (_animation) {
                emit(graph, new AnimateEvent(GraphEvent.BEFORE_ANIMATE, AnimationType.TRANSFORM, null, options));
                return new Promise((resolve) => {
                    this.transformResolver = resolve;
                    this.camera.gotoLandmark(this.createLandmark(landmarkOptions), Object.assign(Object.assign({}, _animation), { onfinish: () => {
                            emit(graph, new AnimateEvent(GraphEvent.AFTER_ANIMATE, AnimationType.TRANSFORM, null, options));
                            emit(graph, new ViewportEvent(GraphEvent.AFTER_TRANSFORM, options));
                            this.transformResolver = undefined;
                            resolve();
                        } }));
                });
            }
            else {
                this.camera.gotoLandmark(this.createLandmark(landmarkOptions), {
                    duration: 0,
                });
                emit(graph, new ViewportEvent(GraphEvent.AFTER_TRANSFORM, options));
            }
        });
    }
    fitView(options, animation) {
        return __awaiter(this, void 0, void 0, function* () {
            const [top, right, bottom, left] = this.padding;
            const { when = 'always', direction = 'both' } = options || {};
            const [width, height] = this.context.canvas.getSize();
            const innerWidth = width - left - right;
            const innerHeight = height - top - bottom;
            const canvasBounds = this.context.canvas.getBounds();
            const bboxInViewPort = this.getBBoxInViewport(canvasBounds);
            const [contentWidth, contentHeight] = getBBoxSize(bboxInViewPort);
            const isOverflow = (direction === 'x' && contentWidth >= innerWidth) ||
                (direction === 'y' && contentHeight >= innerHeight) ||
                (direction === 'both' && contentWidth >= innerWidth && contentHeight >= innerHeight);
            if (when === 'overflow' && !isOverflow)
                return yield this.fitCenter({ animation });
            const scaleX = innerWidth / contentWidth;
            const scaleY = innerHeight / contentHeight;
            const scale = direction === 'x' ? scaleX : direction === 'y' ? scaleY : Math.min(scaleX, scaleY);
            const _animation = this.getAnimation(animation);
            if (!Number.isFinite(scale)) {
                return;
            }
            yield this.transform({
                mode: 'relative',
                scale,
                translate: add(subtract(this.getCanvasCenter(), this.getBBoxInViewport(canvasBounds).center), divide(this.paddingOffset, scale)),
            }, _animation);
        });
    }
    fitCenter(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const canvasBounds = this.context.canvas.getBounds();
            yield this.focus(canvasBounds, options);
        });
    }
    focusElements(ids_1) {
        return __awaiter(this, arguments, void 0, function* (ids, options = {}) {
            const { element } = this.context;
            if (!element)
                return;
            const getBoundsOf = (el) => options.shapes ? el.getShape(options.shapes).getRenderBounds() : el.getRenderBounds();
            const elementsBounds = getCombinedBBox(ids.map((id) => getBoundsOf(element.getElement(id))));
            yield this.focus(elementsBounds, options);
        });
    }
    focus(bbox, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const center = this.context.graph.getViewportByCanvas(bbox.center);
            const position = options.position || this.getCanvasCenter();
            const delta = subtract(position, center);
            yield this.transform({ mode: 'relative', translate: add(delta, this.paddingOffset) }, options.animation);
        });
    }
    /**
     * <zh/> 获取画布元素在视口中的包围盒
     *
     * <en/> Get the bounding box of the canvas element in the viewport
     * @param bbox - <zh/> 画布元素包围盒 | <en/> Canvas element bounding box
     * @returns - <zh/> 视口中的包围盒 | <en/> Bounding box in the viewport
     */
    getBBoxInViewport(bbox) {
        const { min, max } = bbox;
        const { graph } = this.context;
        const [x1, y1] = graph.getViewportByCanvas(min);
        const [x2, y2] = graph.getViewportByCanvas(max);
        const bboxInViewport = new AABB();
        bboxInViewport.setMinMax([x1, y1, 0], [x2, y2, 0]);
        return bboxInViewport;
    }
    /**
     * <zh/> 判断点或包围盒是否在视口中
     *
     * <en/> Determine whether the point or bounding box is in the viewport
     * @param target - <zh/> 点或包围盒 | <en/> Point or bounding box
     * @param complete - <zh/> 是否完全在视口中 | <en/> Whether it is completely in the viewport
     * @param tolerance - <zh/> 视口外的容差 | <en/> Tolerance outside the viewport
     * @returns - <zh/> 是否在视口中 | <en/> Whether it is in the viewport
     */
    isInViewport(target, complete = false, tolerance = 0) {
        const { graph } = this.context;
        const size = this.getCanvasSize();
        const [x1, y1] = graph.getCanvasByViewport([0, 0]);
        const [x2, y2] = graph.getCanvasByViewport(size);
        let viewportBBox = new AABB();
        viewportBBox.setMinMax([x1, y1, 0], [x2, y2, 0]);
        if (tolerance) {
            viewportBBox = getExpandedBBox(viewportBBox, tolerance);
        }
        return isPoint(target)
            ? isPointInBBox(target, viewportBBox)
            : !complete
                ? viewportBBox.intersects(target)
                : isBBoxInside(target, viewportBBox);
    }
    cancelAnimation() {
        var _a, _b;
        // @ts-expect-error landmarks is private
        if ((_a = this.camera.landmarks) === null || _a === void 0 ? void 0 : _a.length) {
            this.camera.cancelLandmarkAnimation();
        }
        (_b = this.transformResolver) === null || _b === void 0 ? void 0 : _b.call(this);
    }
}
//# sourceMappingURL=viewport.js.map