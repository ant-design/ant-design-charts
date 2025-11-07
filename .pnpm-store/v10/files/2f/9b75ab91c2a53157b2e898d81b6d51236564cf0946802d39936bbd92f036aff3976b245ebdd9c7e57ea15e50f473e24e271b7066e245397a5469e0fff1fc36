import { debounce, throttle } from '@antv/util';
import { GraphEvent } from '../../constants';
import { isVisible } from '../../utils/element';
import { idOf } from '../../utils/id';
import { parsePadding } from '../../utils/padding';
import { toPointObject } from '../../utils/point';
import { BasePlugin } from '../base-plugin';
import { createPluginCanvas } from '../utils/canvas';
/**
 * <zh/> 缩略图插件
 *
 * <en/> Minimap plugin
 */
export class Minimap extends BasePlugin {
    constructor(context, options) {
        super(context, Object.assign({}, Minimap.defaultOptions, options));
        this.onDraw = (event) => {
            var _a;
            if ((_a = event === null || event === void 0 ? void 0 : event.data) === null || _a === void 0 ? void 0 : _a.render)
                return;
            this.onRender();
        };
        this.landmarkMap = new Map();
        this.mask = null;
        this.isMaskDragging = false;
        this.onMaskDragStart = (event) => {
            if (!this.mask)
                return;
            this.isMaskDragging = true;
            this.mask.setPointerCapture(event.pointerId);
            this.mask.addEventListener('pointermove', this.onMaskDrag);
            this.mask.addEventListener('pointerup', this.onMaskDragEnd);
            this.mask.addEventListener('pointercancel', this.onMaskDragEnd);
        };
        this.onMaskDrag = (event) => {
            if (!this.mask || !this.isMaskDragging)
                return;
            const { size: [minimapWidth, minimapHeight], } = this.options;
            const { movementX, movementY } = event;
            const { left, top, width: w, height: h } = this.mask.style;
            const [, , fullWidth, fullHeight] = this.maskBBox;
            let x = parseInt(left) + movementX;
            let y = parseInt(top) + movementY;
            let width = parseInt(w);
            let height = parseInt(h);
            // 确保 mask 在 minimap 内部
            // Ensure that the mask is inside the minimap
            if (x < 0)
                x = 0;
            if (y < 0)
                y = 0;
            if (x + width > minimapWidth)
                x = lower(minimapWidth - width, 0);
            if (y + height > minimapHeight)
                y = lower(minimapHeight - height, 0);
            // 当拖拽画布导致 mask 缩小时，拖拽 mask 时，能够恢复到实际大小
            // When dragging the canvas causes the mask to shrink, dragging the mask will restore it to its actual size
            if (width < fullWidth) {
                if (movementX > 0) {
                    x = lower(x - movementX, 0);
                    width = upper(width + movementX, minimapWidth);
                }
                else if (movementX < 0)
                    width = upper(width - movementX, minimapWidth);
            }
            if (height < fullHeight) {
                if (movementY > 0) {
                    y = lower(y - movementY, 0);
                    height = upper(height + movementY, minimapHeight);
                }
                else if (movementY < 0)
                    height = upper(height - movementY, minimapHeight);
            }
            Object.assign(this.mask.style, {
                left: x + 'px',
                top: y + 'px',
                width: width + 'px',
                height: height + 'px',
            });
            // 基于 movement 进行相对移动
            // Move relative to movement
            const deltaX = parseInt(left) - x;
            const deltaY = parseInt(top) - y;
            if (deltaX === 0 && deltaY === 0)
                return;
            const zoom1 = this.context.canvas.getCamera().getZoom();
            const zoom2 = this.canvas.getCamera().getZoom();
            const ratio = zoom1 / zoom2;
            this.context.graph.translateBy([deltaX * ratio, deltaY * ratio], false);
        };
        this.onMaskDragEnd = (event) => {
            if (!this.mask)
                return;
            this.isMaskDragging = false;
            this.mask.releasePointerCapture(event.pointerId);
            this.mask.removeEventListener('pointermove', this.onMaskDrag);
            this.mask.removeEventListener('pointerup', this.onMaskDragEnd);
            this.mask.removeEventListener('pointercancel', this.onMaskDragEnd);
        };
        this.onTransform = throttle(() => {
            if (this.isMaskDragging)
                return;
            this.updateMask();
            this.setCamera();
        }, 32, { leading: true });
        this.setOnRender();
        this.bindEvents();
    }
    update(options) {
        this.unbindEvents();
        super.update(options);
        if ('delay' in options)
            this.setOnRender();
        this.bindEvents();
    }
    setOnRender() {
        this.onRender = debounce(() => {
            this.renderMinimap();
            this.renderMask();
        }, this.options.delay);
    }
    bindEvents() {
        const { graph } = this.context;
        graph.on(GraphEvent.AFTER_DRAW, this.onDraw);
        graph.on(GraphEvent.AFTER_RENDER, this.onRender);
        graph.on(GraphEvent.AFTER_ANIMATE, this.onRender);
        graph.on(GraphEvent.AFTER_TRANSFORM, this.onTransform);
    }
    unbindEvents() {
        const { graph } = this.context;
        graph.off(GraphEvent.AFTER_DRAW, this.onDraw);
        graph.off(GraphEvent.AFTER_RENDER, this.onRender);
        graph.off(GraphEvent.AFTER_ANIMATE, this.onRender);
        graph.off(GraphEvent.AFTER_TRANSFORM, this.onTransform);
    }
    /**
     * <zh/> 创建或更新缩略图
     *
     * <en/> Create or update the minimap
     */
    renderMinimap() {
        const data = this.getElements();
        const canvas = this.initCanvas();
        this.setShapes(canvas, data);
    }
    getElements() {
        const { filter } = this.options;
        const { model, element } = this.context;
        const originData = model.getData();
        //过滤那些不存在于elementMap中的数据
        const data = {
            nodes: originData.nodes.filter((node) => element === null || element === void 0 ? void 0 : element.getElement(idOf(node))),
            edges: originData.edges.filter((edge) => {
                const edgeElement = element === null || element === void 0 ? void 0 : element.getElement(idOf(edge));
                // 边数据存在且可见时才保留
                return edgeElement && isVisible(edgeElement);
            }),
            combos: originData.combos.filter((combo) => element === null || element === void 0 ? void 0 : element.getElement(idOf(combo))),
        };
        if (!filter)
            return data;
        const { nodes, edges, combos } = data;
        return {
            nodes: nodes.filter((node) => filter(idOf(node), 'node')),
            edges: edges.filter((edge) => filter(idOf(edge), 'edge')),
            combos: combos.filter((combo) => filter(idOf(combo), 'combo')),
        };
    }
    setShapes(canvas, data) {
        const { nodes, edges, combos } = data;
        const { shape } = this.options;
        const { element } = this.context;
        const iterate = (datum, elType) => {
            const id = idOf(datum);
            const target = element === null || element === void 0 ? void 0 : element.getElement(id);
            if (!target)
                return;
            const keyShape = target.getShape('key');
            let cloneShape;
            if (typeof shape === 'string') {
                const shapeName = shape;
                const miniShape = target.getShape(shapeName);
                cloneShape = miniShape.cloneNode();
            }
            else {
                const miniShape = shape(id, elType, target);
                if (miniShape === target) {
                    cloneShape = miniShape.cloneNode(true);
                }
                else {
                    cloneShape = miniShape;
                }
            }
            /**
             * 这里使用的是 keyShape 的位置
             * 对于整个元素的位置而言，使用 keyShape 位置会比较准确
             * 也比较合理
             */
            cloneShape.setPosition(keyShape.getPosition());
            // keep zIndex / id
            if (target.style.zIndex)
                cloneShape.style.zIndex = target.style.zIndex;
            cloneShape.id = target.id;
            canvas.appendChild(cloneShape);
        };
        canvas.removeChildren();
        // 注意执行顺序 / Note the execution order
        edges.forEach((datum) => iterate(datum, 'edge'));
        combos.forEach((datum) => iterate(datum, 'combo'));
        nodes.forEach((datum) => iterate(datum, 'node'));
    }
    initCanvas() {
        const { renderer, size: [width, height], } = this.options;
        if (this.canvas) {
            const { width: w, height: h } = this.canvas.getConfig();
            if (width !== w || height !== h)
                this.canvas.resize(width, height);
            if (renderer)
                this.canvas.setRenderer(renderer);
        }
        else {
            const { className, position, container, containerStyle } = this.options;
            const [$container, canvas] = createPluginCanvas({
                renderer,
                width,
                height,
                placement: position,
                className: 'minimap',
                container,
                containerStyle,
                graphCanvas: this.context.canvas,
            });
            if (className)
                $container.classList.add(className);
            this.container = $container;
            this.canvas = canvas;
        }
        this.setCamera();
        return this.canvas;
    }
    createLandmark(position, focalPoint, zoom) {
        const key = `${position.join(',')}-${focalPoint.join(',')}-${zoom}`;
        if (this.landmarkMap.has(key))
            return this.landmarkMap.get(key);
        const camera = this.canvas.getCamera();
        const landmark = camera.createLandmark(key, {
            position,
            focalPoint,
            zoom,
        });
        this.landmarkMap.set(key, landmark);
        return landmark;
    }
    setCamera() {
        var _a;
        const { canvas } = this.context;
        const camera = (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.getCamera();
        if (!camera)
            return;
        const { size: [minimapWidth, minimapHeight], padding, } = this.options;
        const [top, right, bottom, left] = parsePadding(padding);
        const { min: boundsMin, max: boundsMax, center } = canvas.getBounds('elements');
        const boundsWidth = boundsMax[0] - boundsMin[0];
        const boundsHeight = boundsMax[1] - boundsMin[1];
        const availableWidth = minimapWidth - left - right;
        const availableHeight = minimapHeight - top - bottom;
        const scaleX = availableWidth / boundsWidth;
        const scaleY = availableHeight / boundsHeight;
        const scale = Math.min(scaleX, scaleY);
        const landmark = this.createLandmark(center, center, scale);
        camera.gotoLandmark(landmark, 0);
    }
    get maskBBox() {
        const { canvas: graphCanvas } = this.context;
        const canvasSize = graphCanvas.getSize();
        const canvasMin = graphCanvas.getCanvasByViewport([0, 0]);
        const canvasMax = graphCanvas.getCanvasByViewport(canvasSize);
        const maskMin = this.canvas.canvas2Viewport(toPointObject(canvasMin));
        const maskMax = this.canvas.canvas2Viewport(toPointObject(canvasMax));
        const width = maskMax.x - maskMin.x;
        const height = maskMax.y - maskMin.y;
        return [maskMin.x, maskMin.y, width, height];
    }
    /**
     * <zh/> 计算遮罩包围盒
     *
     * <en/> Calculate the bounding box of the mask
     * @returns <zh/> 遮罩包围盒 | <en/> Mask bounding box
     */
    calculateMaskBBox() {
        const { size: [minimapWidth, minimapHeight], } = this.options;
        let [x, y, width, height] = this.maskBBox;
        // clamp x, y, width, height
        if (x < 0) {
            width = upper(width + x, minimapWidth);
            x = 0;
        }
        if (y < 0) {
            height = upper(height + y, minimapHeight);
            y = 0;
        }
        if (x + width > minimapWidth)
            width = lower(minimapWidth - x, 0);
        if (y + height > minimapHeight)
            height = lower(minimapHeight - y, 0);
        return [upper(x, minimapWidth), upper(y, minimapHeight), lower(width, 0), lower(height, 0)];
    }
    /**
     * <zh/> 创建或更新遮罩
     *
     * <en/> Create or update the mask
     */
    renderMask() {
        const { maskStyle } = this.options;
        if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.addEventListener('pointerdown', this.onMaskDragStart);
            this.mask.draggable = true;
            this.mask.addEventListener('dragstart', (event) => event.preventDefault && event.preventDefault());
        }
        this.container.appendChild(this.mask);
        Object.assign(this.mask.style, Object.assign(Object.assign({}, maskStyle), { cursor: 'move', position: 'absolute', pointerEvents: 'auto' }));
        this.updateMask();
    }
    updateMask() {
        if (!this.mask)
            return;
        const [x, y, width, height] = this.calculateMaskBBox();
        Object.assign(this.mask.style, {
            top: y + 'px',
            left: x + 'px',
            width: width + 'px',
            height: height + 'px',
        });
    }
    destroy() {
        var _a, _b, _c;
        this.unbindEvents();
        (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this.mask) === null || _b === void 0 ? void 0 : _b.remove();
        (_c = this.container) === null || _c === void 0 ? void 0 : _c.remove();
        super.destroy();
    }
}
Minimap.defaultOptions = {
    size: [240, 160],
    shape: 'key',
    padding: 10,
    position: 'right-bottom',
    maskStyle: {
        border: '1px solid #ddd',
        background: 'rgba(0, 0, 0, 0.1)',
    },
    containerStyle: {
        border: '1px solid #ddd',
        background: '#fff',
    },
    delay: 128,
};
const upper = (value, max) => Math.min(value, max);
const lower = (value, min) => Math.max(value, min);
//# sourceMappingURL=index.js.map