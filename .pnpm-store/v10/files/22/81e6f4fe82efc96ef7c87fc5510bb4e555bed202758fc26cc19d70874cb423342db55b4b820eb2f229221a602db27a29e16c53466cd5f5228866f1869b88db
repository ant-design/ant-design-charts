import { pick } from '@antv/util';
import { CommonEvent } from '../../constants';
import { Circle } from '../../elements';
import { arrayDiff } from '../../utils/diff';
import { idOf } from '../../utils/id';
import { parsePoint, toPointObject } from '../../utils/point';
import { positionOf } from '../../utils/position';
import { distance } from '../../utils/vector';
import { BasePlugin } from '../base-plugin';
const defaultLensStyle = {
    fill: '#ccc',
    fillOpacity: 0.1,
    lineWidth: 2,
    stroke: '#000',
    strokeOpacity: 0.8,
    labelFontSize: 12,
};
const R_DELTA = 0.05;
const D_DELTA = 0.1;
/**
 * <zh/> 鱼眼放大镜
 *
 * <en/> Fisheye Distortion
 * @remarks
 * <zh/> Fisheye 鱼眼放大镜是为 focus+context 的探索场景设计的，它能够保证在放大关注区域的同时，保证上下文以及上下文与关注中心的关系不丢失。
 *
 * <en/> Fisheye is designed for focus+context exploration, it keeps the context and the relationships between context and the focus while magnifying the focus area.
 */
export class Fisheye extends BasePlugin {
    constructor(context, options) {
        super(context, Object.assign({}, Fisheye.defaultOptions, options));
        this.r = this.options.r;
        this.d = this.options.d;
        this.onCreateFisheye = (event) => {
            if (this.options.trigger === 'drag' && this.isLensOn)
                return;
            const origin = parsePoint(event.canvas);
            this.onMagnify(origin);
        };
        this.onMagnify = (origin) => {
            if (origin.some(isNaN))
                return;
            this.renderLens(origin);
            this.renderFocusElements();
        };
        this.renderLens = (origin) => {
            const style = Object.assign({}, defaultLensStyle, this.options.style);
            if (!this.isLensOn) {
                this.lens = new Circle({ style });
                this.canvas.appendChild(this.lens);
            }
            Object.assign(style, toPointObject(origin), {
                size: this.r * 2,
                label: this.options.showDPercent,
                labelText: this.getDPercent(),
            });
            this.lens.update(style);
        };
        this.getDPercent = () => {
            const { minD, maxD } = this.options;
            const percent = Math.round(((this.d - minD) / (maxD - minD)) * 100);
            return `${percent}%`;
        };
        this.prevMagnifiedStyleMap = new Map();
        this.prevOriginStyleMap = new Map();
        this.renderFocusElements = () => {
            if (!this.isLensOn)
                return;
            const { graph } = this.context;
            const origin = this.lens.getCenter();
            const molecularParam = (this.d + 1) * this.r;
            const magnifiedStyleMap = new Map();
            const originStyleMap = new Map();
            const nodeData = graph.getNodeData();
            nodeData.forEach((datum) => {
                const position = positionOf(datum);
                const distanceToOrigin = distance(position, origin);
                if (distanceToOrigin > this.r)
                    return;
                const magnifiedDistance = (molecularParam * distanceToOrigin) / (this.d * distanceToOrigin + this.r);
                const [nodeX, nodeY] = position;
                const [originX, originY] = origin;
                const cos = (nodeX - originX) / distanceToOrigin;
                const sin = (nodeY - originY) / distanceToOrigin;
                const newPoint = [originX + magnifiedDistance * cos, originY + magnifiedDistance * sin];
                const nodeId = idOf(datum);
                const style = this.getNodeStyle(datum);
                const originStyle = pick(graph.getElementRenderStyle(nodeId), Object.keys(style));
                magnifiedStyleMap.set(nodeId, Object.assign(Object.assign({}, toPointObject(newPoint)), style));
                originStyleMap.set(nodeId, Object.assign(Object.assign({}, toPointObject(position)), originStyle));
            });
            this.updateStyle(magnifiedStyleMap, originStyleMap);
        };
        this.getNodeStyle = (datum) => {
            const { nodeStyle } = this.options;
            return typeof nodeStyle === 'function' ? nodeStyle(datum) : nodeStyle;
        };
        this.updateStyle = (magnifiedStyleMap, originStyleMap) => {
            const { graph, element } = this.context;
            const { enter, exit, keep } = arrayDiff(Array.from(this.prevMagnifiedStyleMap.keys()), Array.from(magnifiedStyleMap.keys()), (d) => d);
            const relatedEdges = new Set();
            const update = (nodeId, style) => {
                const node = element.getElement(nodeId);
                node === null || node === void 0 ? void 0 : node.update(style);
                graph.getRelatedEdgesData(nodeId).forEach((datum) => {
                    relatedEdges.add(idOf(datum));
                });
            };
            [...enter, ...keep].forEach((nodeId) => {
                update(nodeId, magnifiedStyleMap.get(nodeId));
            });
            exit.forEach((nodeId) => {
                update(nodeId, this.prevOriginStyleMap.get(nodeId));
                this.prevOriginStyleMap.delete(nodeId);
            });
            relatedEdges.forEach((edgeId) => {
                const edge = element.getElement(edgeId);
                edge === null || edge === void 0 ? void 0 : edge.update({});
            });
            this.prevMagnifiedStyleMap = magnifiedStyleMap;
            originStyleMap.forEach((style, nodeId) => {
                if (!this.prevOriginStyleMap.has(nodeId)) {
                    this.prevOriginStyleMap.set(nodeId, style);
                }
            });
        };
        this.isWheelValid = (event) => {
            if (this.options.preventDefault)
                event.preventDefault();
            if (!this.isLensOn)
                return false;
            const { clientX, clientY } = event;
            const scaleOrigin = this.context.graph.getCanvasByClient([clientX, clientY]);
            const origin = this.lens.getCenter();
            if (distance(scaleOrigin, origin) > this.r)
                return false;
            return true;
        };
        this.scaleR = (positive) => {
            const { maxR, minR } = this.options;
            const ratio = positive ? 1 / (1 - R_DELTA) : 1 - R_DELTA;
            const canvasR = Math.min(...this.context.canvas.getSize()) / 2;
            this.r = Math.max(minR || 0, Math.min(maxR || canvasR, this.r * ratio));
        };
        this.scaleD = (positive) => {
            const { maxD, minD } = this.options;
            const newD = positive ? this.d + D_DELTA : this.d - D_DELTA;
            this.d = Math.max(minD, Math.min(maxD, newD));
        };
        this.scaleRByWheel = (event) => {
            if (!this.isWheelValid(event))
                return;
            const { deltaX, deltaY } = event;
            this.scaleR(deltaX + deltaY > 0);
            const origin = this.lens.getCenter();
            this.onMagnify(origin);
        };
        this.scaleDByWheel = (event) => {
            if (!this.isWheelValid(event))
                return;
            const { deltaX, deltaY } = event;
            this.scaleD(deltaX + deltaY > 0);
            const origin = this.lens.getCenter();
            this.onMagnify(origin);
        };
        this.isDragValid = (event) => {
            if (this.options.preventDefault)
                event.preventDefault();
            if (!this.isLensOn)
                return false;
            const dragOrigin = parsePoint(event.canvas);
            const origin = this.lens.getCenter();
            if (distance(dragOrigin, origin) > this.r)
                return false;
            return true;
        };
        this.isLensDragging = false;
        this.onDragStart = (event) => {
            if (!this.isDragValid(event))
                return;
            this.isLensDragging = true;
        };
        this.onDrag = (event) => {
            if (!this.isLensDragging)
                return;
            const dragOrigin = parsePoint(event.canvas);
            this.onMagnify(dragOrigin);
        };
        this.onDragEnd = () => {
            this.isLensDragging = false;
        };
        this.scaleRByDrag = (event) => {
            if (!this.isLensDragging)
                return;
            const { dx, dy } = event;
            this.scaleR(dx - dy > 0);
            const origin = this.lens.getCenter();
            this.onMagnify(origin);
        };
        this.scaleDByDrag = (event) => {
            if (!this.isLensDragging)
                return;
            const { dx, dy } = event;
            this.scaleD(dx - dy > 0);
            const origin = this.lens.getCenter();
            this.onMagnify(origin);
        };
        this.bindEvents();
    }
    get canvas() {
        return this.context.canvas.getLayer('transient');
    }
    get isLensOn() {
        return this.lens && !this.lens.destroyed;
    }
    get graphDom() {
        return this.context.graph.getCanvas().getContextService().getDomElement();
    }
    bindEvents() {
        var _a;
        const { graph } = this.context;
        const { trigger, scaleRBy, scaleDBy } = this.options;
        const canvas = graph.getCanvas().getLayer();
        if (['click', 'drag'].includes(trigger)) {
            canvas.addEventListener(CommonEvent.CLICK, this.onCreateFisheye);
        }
        if (trigger === 'pointermove') {
            canvas.addEventListener(CommonEvent.POINTER_MOVE, this.onCreateFisheye);
        }
        if (trigger === 'drag' || scaleRBy === 'drag' || scaleDBy === 'drag') {
            canvas.addEventListener(CommonEvent.DRAG_START, this.onDragStart);
            canvas.addEventListener(CommonEvent.DRAG_END, this.onDragEnd);
            const dragFunc = trigger === 'drag' ? this.onDrag : scaleRBy === 'drag' ? this.scaleRByDrag : this.scaleDByDrag;
            canvas.addEventListener(CommonEvent.DRAG, dragFunc);
        }
        if (scaleRBy === 'wheel' || scaleDBy === 'wheel') {
            const wheelFunc = scaleRBy === 'wheel' ? this.scaleRByWheel : this.scaleDByWheel;
            (_a = this.graphDom) === null || _a === void 0 ? void 0 : _a.addEventListener(CommonEvent.WHEEL, wheelFunc, { passive: false });
        }
    }
    unbindEvents() {
        var _a;
        const { graph } = this.context;
        const { trigger, scaleRBy, scaleDBy } = this.options;
        const canvas = graph.getCanvas().getLayer();
        if (['click', 'drag'].includes(trigger)) {
            canvas.removeEventListener(CommonEvent.CLICK, this.onCreateFisheye);
        }
        if (trigger === 'pointermove') {
            canvas.removeEventListener(CommonEvent.POINTER_MOVE, this.onCreateFisheye);
        }
        if (trigger === 'drag' || scaleRBy === 'drag' || scaleDBy === 'drag') {
            canvas.removeEventListener(CommonEvent.DRAG_START, this.onDragStart);
            canvas.removeEventListener(CommonEvent.DRAG_END, this.onDragEnd);
            const dragFunc = trigger === 'drag' ? this.onDrag : scaleRBy === 'drag' ? this.scaleRByDrag : this.scaleDByDrag;
            canvas.removeEventListener(CommonEvent.DRAG, dragFunc);
        }
        if (scaleRBy === 'wheel' || scaleDBy === 'wheel') {
            const wheelFunc = scaleRBy === 'wheel' ? this.scaleRByWheel : this.scaleDByWheel;
            (_a = this.graphDom) === null || _a === void 0 ? void 0 : _a.removeEventListener(CommonEvent.WHEEL, wheelFunc);
        }
    }
    update(options) {
        var _a, _b;
        this.unbindEvents();
        super.update(options);
        this.r = (_a = options.r) !== null && _a !== void 0 ? _a : this.r;
        this.d = (_b = options.d) !== null && _b !== void 0 ? _b : this.d;
        this.bindEvents();
    }
    destroy() {
        var _a;
        this.unbindEvents();
        if (this.isLensOn) {
            (_a = this.lens) === null || _a === void 0 ? void 0 : _a.destroy();
        }
        this.prevMagnifiedStyleMap.clear();
        this.prevOriginStyleMap.clear();
        super.destroy();
    }
}
Fisheye.defaultOptions = {
    trigger: 'pointermove',
    r: 120,
    d: 1.5,
    maxD: 5,
    minD: 0,
    showDPercent: true,
    style: {},
    nodeStyle: { label: true },
    preventDefault: true,
};
//# sourceMappingURL=index.js.map