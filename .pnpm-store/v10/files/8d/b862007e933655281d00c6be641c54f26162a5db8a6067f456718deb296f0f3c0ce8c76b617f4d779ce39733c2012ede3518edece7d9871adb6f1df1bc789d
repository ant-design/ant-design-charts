"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeFilterLens = void 0;
const constants_1 = require("../../constants");
const elements_1 = require("../../elements");
const id_1 = require("../../utils/id");
const point_1 = require("../../utils/point");
const position_1 = require("../../utils/position");
const vector_1 = require("../../utils/vector");
const base_plugin_1 = require("../base-plugin");
const defaultLensStyle = {
    fill: '#fff',
    fillOpacity: 1,
    lineWidth: 1,
    stroke: '#000',
    strokeOpacity: 0.8,
    zIndex: -Infinity,
};
const DELTA = 0.05;
/**
 * <zh/> 边过滤镜插件
 *
 * <en/> Edge filter lens plugin
 * @remarks
 * <zh/> 边过滤镜可以将关注的边保留在过滤镜范围内，其他边将在该范围内不显示。
 *
 * <en/> EdgeFilterLens can keep the focused edges within the lens range, while other edges will not be displayed within that range.
 */
class EdgeFilterLens extends base_plugin_1.BasePlugin {
    constructor(context, options) {
        super(context, Object.assign({}, EdgeFilterLens.defaultOptions, options));
        this.shapes = new Map();
        this.r = this.options.r;
        this.onEdgeFilter = (event) => {
            if (this.options.trigger === 'drag' && this.isLensOn)
                return;
            const origin = (0, point_1.parsePoint)(event.canvas);
            this.renderLens(origin);
            this.renderFocusElements();
        };
        this.renderLens = (origin) => {
            const style = Object.assign({}, defaultLensStyle, this.options.style);
            if (!this.isLensOn) {
                this.lens = new elements_1.Circle({ style });
                this.canvas.appendChild(this.lens);
            }
            Object.assign(style, (0, point_1.toPointObject)(origin), { size: this.r * 2 });
            this.lens.update(style);
        };
        this.getFilterData = () => {
            const { filter } = this.options;
            const { model } = this.context;
            const data = model.getData();
            if (!filter)
                return data;
            const { nodes, edges, combos } = data;
            return {
                nodes: nodes.filter((node) => filter((0, id_1.idOf)(node), 'node')),
                edges: edges.filter((edge) => filter((0, id_1.idOf)(edge), 'edge')),
                combos: combos.filter((combo) => filter((0, id_1.idOf)(combo), 'combo')),
            };
        };
        this.getFocusElements = (origin) => {
            const { nodes, edges } = this.getFilterData();
            const focusNodes = nodes.filter((datum) => (0, vector_1.distance)((0, position_1.positionOf)(datum), origin) < this.r);
            const focusNodeIds = focusNodes.map((node) => (0, id_1.idOf)(node));
            const focusEdges = edges.filter((datum) => {
                const { source, target } = datum;
                const isSourceFocus = focusNodeIds.includes(source);
                const isTargetFocus = focusNodeIds.includes(target);
                switch (this.options.nodeType) {
                    case 'both':
                        return isSourceFocus && isTargetFocus;
                    case 'either':
                        return isSourceFocus !== isTargetFocus;
                    case 'source':
                        return isSourceFocus && !isTargetFocus;
                    case 'target':
                        return !isSourceFocus && isTargetFocus;
                    default:
                        return false;
                }
            });
            return { nodes: focusNodes, edges: focusEdges };
        };
        this.renderFocusElements = () => {
            const { element, graph } = this.context;
            if (!this.isLensOn)
                return;
            const origin = this.lens.getCenter();
            const { nodes, edges } = this.getFocusElements(origin);
            const ids = new Set();
            const iterate = (datum) => {
                const id = (0, id_1.idOf)(datum);
                ids.add(id);
                const shape = element.getElement(id);
                if (!shape)
                    return;
                const cloneShape = this.shapes.get(id) || shape.cloneNode();
                cloneShape.setPosition(shape.getPosition());
                cloneShape.id = shape.id;
                if (!this.shapes.has(id)) {
                    this.canvas.appendChild(cloneShape);
                    this.shapes.set(id, cloneShape);
                }
                else {
                    Object.entries(shape.attributes).forEach(([key, value]) => {
                        if (cloneShape.style[key] !== value)
                            cloneShape.style[key] = value;
                    });
                }
                const elementType = graph.getElementType(id);
                const style = this.getElementStyle(elementType, datum);
                // @ts-ignore
                cloneShape.update(style);
            };
            nodes.forEach(iterate);
            edges.forEach(iterate);
            this.shapes.forEach((shape, id) => {
                if (!ids.has(id)) {
                    shape.destroy();
                    this.shapes.delete(id);
                }
            });
        };
        this.scaleRByWheel = (event) => {
            var _a;
            if (this.options.preventDefault)
                event.preventDefault();
            const { clientX, clientY, deltaX, deltaY } = event;
            const { graph, canvas } = this.context;
            const scaleOrigin = graph.getCanvasByClient([clientX, clientY]);
            const origin = (_a = this.lens) === null || _a === void 0 ? void 0 : _a.getCenter();
            if (!this.isLensOn || (0, vector_1.distance)(scaleOrigin, origin) > this.r) {
                return;
            }
            const { maxR, minR } = this.options;
            const ratio = deltaX + deltaY > 0 ? 1 / (1 - DELTA) : 1 - DELTA;
            const canvasR = Math.min(...canvas.getSize()) / 2;
            this.r = Math.max(minR || 0, Math.min(maxR || canvasR, this.r * ratio));
            this.renderLens(origin);
            this.renderFocusElements();
        };
        this.isLensDragging = false;
        this.onDragStart = (event) => {
            var _a;
            const dragOrigin = (0, point_1.parsePoint)(event.canvas);
            const origin = (_a = this.lens) === null || _a === void 0 ? void 0 : _a.getCenter();
            if (!this.isLensOn || (0, vector_1.distance)(dragOrigin, origin) > this.r)
                return;
            this.isLensDragging = true;
        };
        this.onDrag = (event) => {
            if (!this.isLensDragging)
                return;
            const dragOrigin = (0, point_1.parsePoint)(event.canvas);
            this.renderLens(dragOrigin);
            this.renderFocusElements();
        };
        this.onDragEnd = () => {
            this.isLensDragging = false;
        };
        this.bindEvents();
    }
    get canvas() {
        return this.context.canvas.getLayer('transient');
    }
    get isLensOn() {
        return this.lens && !this.lens.destroyed;
    }
    getElementStyle(elementType, datum) {
        const styler = elementType === 'node' ? this.options.nodeStyle : this.options.edgeStyle;
        if (typeof styler === 'function')
            return styler(datum);
        return styler;
    }
    get graphDom() {
        return this.context.graph.getCanvas().getContextService().getDomElement();
    }
    bindEvents() {
        var _a;
        const { graph } = this.context;
        const { trigger, scaleRBy } = this.options;
        const canvas = graph.getCanvas().getLayer();
        if (['click', 'drag'].includes(trigger)) {
            canvas.addEventListener(constants_1.CommonEvent.CLICK, this.onEdgeFilter);
        }
        if (trigger === 'pointermove') {
            canvas.addEventListener(constants_1.CommonEvent.POINTER_MOVE, this.onEdgeFilter);
        }
        else if (trigger === 'drag') {
            canvas.addEventListener(constants_1.CommonEvent.DRAG_START, this.onDragStart);
            canvas.addEventListener(constants_1.CommonEvent.DRAG, this.onDrag);
            canvas.addEventListener(constants_1.CommonEvent.DRAG_END, this.onDragEnd);
        }
        if (scaleRBy === 'wheel') {
            (_a = this.graphDom) === null || _a === void 0 ? void 0 : _a.addEventListener(constants_1.CommonEvent.WHEEL, this.scaleRByWheel, { passive: false });
        }
    }
    unbindEvents() {
        var _a;
        const { graph } = this.context;
        const { trigger, scaleRBy } = this.options;
        const canvas = graph.getCanvas().getLayer();
        if (['click', 'drag'].includes(trigger)) {
            canvas.removeEventListener(constants_1.CommonEvent.CLICK, this.onEdgeFilter);
        }
        if (trigger === 'pointermove') {
            canvas.removeEventListener(constants_1.CommonEvent.POINTER_MOVE, this.onEdgeFilter);
        }
        else if (trigger === 'drag') {
            canvas.removeEventListener(constants_1.CommonEvent.DRAG_START, this.onDragStart);
            canvas.removeEventListener(constants_1.CommonEvent.DRAG, this.onDrag);
            canvas.removeEventListener(constants_1.CommonEvent.DRAG_END, this.onDragEnd);
        }
        if (scaleRBy === 'wheel') {
            (_a = this.graphDom) === null || _a === void 0 ? void 0 : _a.removeEventListener(constants_1.CommonEvent.WHEEL, this.scaleRByWheel);
        }
    }
    update(options) {
        var _a;
        this.unbindEvents();
        super.update(options);
        this.r = (_a = options.r) !== null && _a !== void 0 ? _a : this.r;
        this.bindEvents();
    }
    destroy() {
        this.unbindEvents();
        if (this.isLensOn) {
            this.lens.destroy();
        }
        this.shapes.forEach((shape, id) => {
            shape.destroy();
            this.shapes.delete(id);
        });
        super.destroy();
    }
}
exports.EdgeFilterLens = EdgeFilterLens;
EdgeFilterLens.defaultOptions = {
    trigger: 'pointermove',
    r: 60,
    nodeType: 'both',
    filter: () => true,
    style: { lineWidth: 2 },
    nodeStyle: { label: false },
    edgeStyle: { label: true },
    scaleRBy: 'wheel',
    preventDefault: true,
};
//# sourceMappingURL=index.js.map