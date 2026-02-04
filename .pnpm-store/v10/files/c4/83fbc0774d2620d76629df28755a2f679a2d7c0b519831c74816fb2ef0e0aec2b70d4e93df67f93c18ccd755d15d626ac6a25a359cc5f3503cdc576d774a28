var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { isEmpty, isFunction, isNumber } from '@antv/util';
import { GraphEvent } from '../constants';
import { idOf } from '../utils/id';
import { getDescendantShapes } from '../utils/shape';
import { BaseBehavior } from './base-behavior';
/**
 * <zh/> 缩放画布过程中固定元素大小
 *
 * <en/> Fix element size while zooming
 */
export class FixElementSize extends BaseBehavior {
    constructor(context, options) {
        super(context, Object.assign({}, FixElementSize.defaultOptions, options));
        this.isZoomEvent = (event) => Boolean(event.data && 'scale' in event.data);
        this.relatedEdgeToUpdate = new Set();
        this.zoom = this.context.graph.getZoom();
        this.fixElementSize = (event) => __awaiter(this, void 0, void 0, function* () {
            if (!this.validate(event))
                return;
            const { graph } = this.context;
            const { state, nodeFilter, edgeFilter, comboFilter } = this.options;
            const nodeData = (state ? graph.getElementDataByState('node', state) : graph.getNodeData()).filter(nodeFilter);
            const edgeData = (state ? graph.getElementDataByState('edge', state) : graph.getEdgeData()).filter(edgeFilter);
            const comboData = (state ? graph.getElementDataByState('combo', state) : graph.getComboData()).filter(comboFilter);
            // 设置阈值防止过大或过小时抖动 | Set the threshold to prevent jitter when too large or too small
            const currentScale = this.isZoomEvent(event)
                ? (this.zoom = Math.max(0.01, Math.min(event.data.scale, 10)))
                : this.zoom;
            const nodeLikeData = [...nodeData, ...comboData];
            if (nodeLikeData.length > 0) {
                nodeLikeData.forEach((datum) => this.fixNodeLike(datum, currentScale));
            }
            this.updateRelatedEdges();
            if (edgeData.length > 0) {
                edgeData.forEach((datum) => this.fixEdge(datum, currentScale));
            }
        });
        this.cachedStyles = new Map();
        this.getOriginalFieldValue = (id, shape, field) => {
            var _a;
            const shapesStyle = this.cachedStyles.get(id) || [];
            const shapeStyle = ((_a = shapesStyle.find((style) => style.shape === shape)) === null || _a === void 0 ? void 0 : _a.style) || {};
            if (!(field in shapeStyle)) {
                shapeStyle[field] = shape.attributes[field];
                this.cachedStyles.set(id, [
                    ...shapesStyle.filter((style) => style.shape !== shape),
                    { shape, style: shapeStyle },
                ]);
            }
            return shapeStyle[field];
        };
        this.scaleEntireElement = (id, el, currentScale) => {
            el.setLocalScale(1 / currentScale);
            const shapesStyle = this.cachedStyles.get(id) || [];
            shapesStyle.push({ shape: el });
            this.cachedStyles.set(id, shapesStyle);
        };
        this.scaleSpecificShapes = (el, currentScale, config) => {
            const descendantShapes = getDescendantShapes(el);
            const configs = Array.isArray(config) ? config : [config];
            configs.forEach((config) => {
                const { shape: shapeFilter, fields } = config;
                const shape = typeof shapeFilter === 'function' ? shapeFilter(descendantShapes) : el.getShape(shapeFilter);
                if (!shape)
                    return;
                if (!fields) {
                    this.scaleEntireElement(el.id, shape, currentScale);
                    return;
                }
                fields.forEach((field) => {
                    const oriFieldValue = this.getOriginalFieldValue(el.id, shape, field);
                    if (!isNumber(oriFieldValue))
                        return;
                    shape.style[field] = oriFieldValue / currentScale;
                });
            });
        };
        this.skipIfExceedViewport = (el) => {
            const { viewport } = this.context;
            return !(viewport === null || viewport === void 0 ? void 0 : viewport.isInViewport(el.getRenderBounds(), false, 30));
        };
        this.fixNodeLike = (datum, currentScale) => {
            const id = idOf(datum);
            const { element, model } = this.context;
            const el = element.getElement(id);
            if (!el || this.skipIfExceedViewport(el))
                return;
            const edges = model.getRelatedEdgesData(id);
            edges.forEach((edge) => this.relatedEdgeToUpdate.add(idOf(edge)));
            const config = this.options[el.type];
            if (!config) {
                this.scaleEntireElement(id, el, currentScale);
                return;
            }
            this.scaleSpecificShapes(el, currentScale, config);
        };
        this.fixEdge = (datum, currentScale) => {
            const id = idOf(datum);
            const el = this.context.element.getElement(id);
            if (!el || this.skipIfExceedViewport(el))
                return;
            const config = this.options.edge;
            if (!config) {
                el.style.transformOrigin = 'center';
                this.scaleEntireElement(id, el, currentScale);
                return;
            }
            this.scaleSpecificShapes(el, currentScale, config);
        };
        this.updateRelatedEdges = () => {
            const { element } = this.context;
            if (this.relatedEdgeToUpdate.size > 0) {
                this.relatedEdgeToUpdate.forEach((id) => {
                    const edge = element.getElement(id);
                    edge === null || edge === void 0 ? void 0 : edge.update({});
                });
            }
            this.relatedEdgeToUpdate.clear();
        };
        this.resetTransform = (event) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            // 首屏渲染时跳过 | Skip when rendering the first screen
            if ((_a = event.data) === null || _a === void 0 ? void 0 : _a.firstRender)
                return;
            if (this.options.reset) {
                this.restoreCachedStyles();
            }
            else {
                this.fixElementSize({ data: { scale: this.zoom } });
            }
        });
        this.bindEvents();
    }
    restoreCachedStyles() {
        if (this.cachedStyles.size > 0) {
            this.cachedStyles.forEach((shapesStyle) => {
                shapesStyle.forEach(({ shape, style }) => {
                    if (isEmpty(style)) {
                        shape.setLocalScale(1);
                    }
                    else {
                        if (this.options.state)
                            return;
                        Object.entries(style).forEach(([field, value]) => (shape.style[field] = value));
                    }
                });
            });
            const { graph, element } = this.context;
            const nodeIds = Object.keys(Object.fromEntries(this.cachedStyles)).filter((id) => id && graph.getElementType(id) === 'node');
            if (nodeIds.length > 0) {
                const edgeIds = new Set();
                nodeIds.forEach((id) => {
                    graph.getRelatedEdgesData(id).forEach((edge) => edgeIds.add(idOf(edge)));
                });
                edgeIds.forEach((id) => {
                    const edge = element === null || element === void 0 ? void 0 : element.getElement(id);
                    edge === null || edge === void 0 ? void 0 : edge.update({});
                });
            }
        }
        // this.cachedStyles.clear();
    }
    bindEvents() {
        const { graph } = this.context;
        graph.on(GraphEvent.AFTER_DRAW, this.resetTransform);
        graph.on(GraphEvent.AFTER_TRANSFORM, this.fixElementSize);
    }
    unbindEvents() {
        const { graph } = this.context;
        graph.off(GraphEvent.AFTER_DRAW, this.resetTransform);
        graph.off(GraphEvent.AFTER_TRANSFORM, this.fixElementSize);
    }
    validate(event) {
        if (this.destroyed)
            return false;
        const { enable } = this.options;
        if (isFunction(enable))
            return enable(event);
        return !!enable;
    }
    destroy() {
        this.unbindEvents();
        super.destroy();
    }
}
FixElementSize.defaultOptions = {
    enable: (event) => event.data.scale < 1,
    nodeFilter: () => true,
    edgeFilter: () => true,
    comboFilter: () => true,
    edge: [{ shape: 'key', fields: ['lineWidth'] }, { shape: 'halo', fields: ['lineWidth'] }, { shape: 'label' }],
    reset: false,
};
//# sourceMappingURL=fix-element-size.js.map