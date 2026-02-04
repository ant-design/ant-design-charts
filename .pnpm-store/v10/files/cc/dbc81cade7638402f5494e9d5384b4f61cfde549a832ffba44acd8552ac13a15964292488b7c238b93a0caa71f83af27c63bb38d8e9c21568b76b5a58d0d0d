"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snapline = void 0;
const g_1 = require("@antv/g");
const util_1 = require("@antv/util");
const constants_1 = require("../../constants");
const element_1 = require("../../utils/element");
const vector_1 = require("../../utils/vector");
const base_plugin_1 = require("../base-plugin");
const defaultLineStyle = { x1: 0, y1: 0, x2: 0, y2: 0, visibility: 'hidden' };
/**
 * <zh/> 对齐线插件
 *
 * <en/> Snapline plugin
 */
class Snapline extends base_plugin_1.BasePlugin {
    constructor(context, options) {
        super(context, Object.assign({}, Snapline.defaultOptions, options));
        this.initSnapline = () => {
            const canvas = this.context.canvas.getLayer('transient');
            if (!this.horizontalLine) {
                this.horizontalLine = canvas.appendChild(new g_1.Line({ style: Object.assign(Object.assign({}, defaultLineStyle), this.options.horizontalLineStyle) }));
            }
            if (!this.verticalLine) {
                this.verticalLine = canvas.appendChild(new g_1.Line({ style: Object.assign(Object.assign({}, defaultLineStyle), this.options.verticalLineStyle) }));
            }
        };
        this.isHorizontalSticking = false;
        this.isVerticalSticking = false;
        this.enableStick = true;
        this.autoSnapToLine = (nodeId, bbox, metadata) => __awaiter(this, void 0, void 0, function* () {
            const { verticalX, horizontalY } = metadata;
            const { tolerance } = this.options;
            const { min: [nodeMinX, nodeMinY], max: [nodeMaxX, nodeMaxY], center: [nodeCenterX, nodeCenterY], } = bbox;
            let dx = 0;
            let dy = 0;
            if (verticalX !== null) {
                if (distance(nodeMaxX, verticalX) < tolerance)
                    dx = verticalX - nodeMaxX;
                if (distance(nodeMinX, verticalX) < tolerance)
                    dx = verticalX - nodeMinX;
                if (distance(nodeCenterX, verticalX) < tolerance)
                    dx = verticalX - nodeCenterX;
                if (dx !== 0)
                    this.isVerticalSticking = true;
            }
            if (horizontalY !== null) {
                if (distance(nodeMaxY, horizontalY) < tolerance)
                    dy = horizontalY - nodeMaxY;
                if (distance(nodeMinY, horizontalY) < tolerance)
                    dy = horizontalY - nodeMinY;
                if (distance(nodeCenterY, horizontalY) < tolerance)
                    dy = horizontalY - nodeCenterY;
                if (dy !== 0)
                    this.isHorizontalSticking = true;
            }
            if (dx !== 0 || dy !== 0) {
                // Stick to the line
                yield this.context.graph.translateElementBy({ [nodeId]: [dx, dy] }, false);
            }
        });
        this.enableSnap = (event) => {
            const { target } = event;
            const threshold = 0.5;
            if (this.isHorizontalSticking || this.isVerticalSticking) {
                const [dx, dy] = this.getDelta(event);
                if (this.isHorizontalSticking &&
                    this.isVerticalSticking &&
                    Math.abs(dx) <= threshold &&
                    Math.abs(dy) <= threshold) {
                    this.context.graph.translateElementBy({ [target.id]: [-dx, -dy] }, false);
                    return false;
                }
                else if (this.isHorizontalSticking && Math.abs(dy) <= threshold) {
                    this.context.graph.translateElementBy({ [target.id]: [0, -dy] }, false);
                    return false;
                }
                else if (this.isVerticalSticking && Math.abs(dx) <= threshold) {
                    this.context.graph.translateElementBy({ [target.id]: [-dx, 0] }, false);
                    return false;
                }
                else {
                    this.isHorizontalSticking = false;
                    this.isVerticalSticking = false;
                    this.enableStick = false;
                    setTimeout(() => {
                        this.enableStick = true;
                    }, 200);
                }
            }
            return this.enableStick;
        };
        this.calcSnaplineMetadata = (target, nodeBBox) => {
            const { tolerance, shape } = this.options;
            const { min: [nodeMinX, nodeMinY], max: [nodeMaxX, nodeMaxY], center: [nodeCenterX, nodeCenterY], } = nodeBBox;
            let verticalX = null;
            let verticalMinY = null;
            let verticalMaxY = null;
            let horizontalY = null;
            let horizontalMinX = null;
            let horizontalMaxX = null;
            this.getNodes().some((snapNode) => {
                if ((0, util_1.isEqual)(target.id, snapNode.id))
                    return false;
                const snapBBox = getShape(snapNode, shape).getRenderBounds();
                const { min: [snapMinX, snapMinY], max: [snapMaxX, snapMaxY], center: [snapCenterX, snapCenterY], } = snapBBox;
                if (verticalX === null) {
                    if (distance(snapCenterX, nodeCenterX) < tolerance) {
                        verticalX = snapCenterX;
                    }
                    else if (distance(snapMinX, nodeMinX) < tolerance) {
                        verticalX = snapMinX;
                    }
                    else if (distance(snapMinX, nodeMaxX) < tolerance) {
                        verticalX = snapMinX;
                    }
                    else if (distance(snapMaxX, nodeMaxX) < tolerance) {
                        verticalX = snapMaxX;
                    }
                    else if (distance(snapMaxX, nodeMinX) < tolerance) {
                        verticalX = snapMaxX;
                    }
                    if (verticalX !== null) {
                        verticalMinY = Math.min(snapMinY, nodeMinY);
                        verticalMaxY = Math.max(snapMaxY, nodeMaxY);
                    }
                }
                if (horizontalY === null) {
                    if (distance(snapCenterY, nodeCenterY) < tolerance) {
                        horizontalY = snapCenterY;
                    }
                    else if (distance(snapMinY, nodeMinY) < tolerance) {
                        horizontalY = snapMinY;
                    }
                    else if (distance(snapMinY, nodeMaxY) < tolerance) {
                        horizontalY = snapMinY;
                    }
                    else if (distance(snapMaxY, nodeMaxY) < tolerance) {
                        horizontalY = snapMaxY;
                    }
                    else if (distance(snapMaxY, nodeMinY) < tolerance) {
                        horizontalY = snapMaxY;
                    }
                    if (horizontalY !== null) {
                        horizontalMinX = Math.min(snapMinX, nodeMinX);
                        horizontalMaxX = Math.max(snapMaxX, nodeMaxX);
                    }
                }
                return verticalX !== null && horizontalY !== null;
            });
            return { verticalX, verticalMinY, verticalMaxY, horizontalY, horizontalMinX, horizontalMaxX };
        };
        this.onDragStart = () => {
            this.initSnapline();
        };
        this.onDrag = (event) => __awaiter(this, void 0, void 0, function* () {
            const { target } = event;
            if (this.options.autoSnap) {
                const enable = this.enableSnap(event);
                if (!enable)
                    return;
            }
            const nodeBBox = getShape(target, this.options.shape).getRenderBounds();
            const metadata = this.calcSnaplineMetadata(target, nodeBBox);
            this.hideSnapline();
            if (metadata.verticalX !== null || metadata.horizontalY !== null) {
                this.updateSnapline(metadata);
            }
            if (this.options.autoSnap) {
                yield this.autoSnapToLine(target.id, nodeBBox, metadata);
            }
        });
        this.onDragEnd = () => {
            this.hideSnapline();
        };
        this.bindEvents();
    }
    getNodes() {
        var _a;
        const { filter } = this.options;
        const allNodes = ((_a = this.context.element) === null || _a === void 0 ? void 0 : _a.getNodes()) || [];
        // 不考虑超出画布视口范围、不可见的节点
        // Nodes that are out of the canvas viewport range, invisible are not considered
        const nodes = allNodes.filter((node) => {
            var _a;
            return (0, element_1.isVisible)(node) && ((_a = this.context.viewport) === null || _a === void 0 ? void 0 : _a.isInViewport(node.getRenderBounds()));
        });
        if (!filter)
            return nodes;
        return nodes.filter((node) => filter(node));
    }
    hideSnapline() {
        this.horizontalLine.style.visibility = 'hidden';
        this.verticalLine.style.visibility = 'hidden';
    }
    getLineWidth(direction) {
        const { lineWidth } = this.options[`${direction}LineStyle`];
        return +(lineWidth || defaultLineStyle.lineWidth || 1) / this.context.graph.getZoom();
    }
    updateSnapline(metadata) {
        const { verticalX, verticalMinY, verticalMaxY, horizontalY, horizontalMinX, horizontalMaxX } = metadata;
        const [canvasWidth, canvasHeight] = this.context.canvas.getSize();
        const { offset } = this.options;
        if (horizontalY !== null) {
            Object.assign(this.horizontalLine.style, {
                x1: offset === Infinity ? 0 : horizontalMinX - offset,
                y1: horizontalY,
                x2: offset === Infinity ? canvasWidth : horizontalMaxX + offset,
                y2: horizontalY,
                visibility: 'visible',
                lineWidth: this.getLineWidth('horizontal'),
            });
        }
        else {
            this.horizontalLine.style.visibility = 'hidden';
        }
        if (verticalX !== null) {
            Object.assign(this.verticalLine.style, {
                x1: verticalX,
                y1: offset === Infinity ? 0 : verticalMinY - offset,
                x2: verticalX,
                y2: offset === Infinity ? canvasHeight : verticalMaxY + offset,
                visibility: 'visible',
                lineWidth: this.getLineWidth('vertical'),
            });
        }
        else {
            this.verticalLine.style.visibility = 'hidden';
        }
    }
    /**
     * Get the delta of the drag
     * @param event - drag event object
     * @returns delta
     * @internal
     */
    getDelta(event) {
        const zoom = this.context.graph.getZoom();
        return (0, vector_1.divide)([event.dx, event.dy], zoom);
    }
    bindEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            const { graph } = this.context;
            graph.on(constants_1.NodeEvent.DRAG_START, this.onDragStart);
            graph.on(constants_1.NodeEvent.DRAG, this.onDrag);
            graph.on(constants_1.NodeEvent.DRAG_END, this.onDragEnd);
        });
    }
    unbindEvents() {
        const { graph } = this.context;
        graph.off(constants_1.NodeEvent.DRAG_START, this.onDragStart);
        graph.off(constants_1.NodeEvent.DRAG, this.onDrag);
        graph.off(constants_1.NodeEvent.DRAG_END, this.onDragEnd);
    }
    destroyElements() {
        var _a, _b;
        (_a = this.horizontalLine) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this.verticalLine) === null || _b === void 0 ? void 0 : _b.destroy();
    }
    destroy() {
        this.destroyElements();
        this.unbindEvents();
        super.destroy();
    }
}
exports.Snapline = Snapline;
Snapline.defaultOptions = {
    tolerance: 5,
    offset: 20,
    autoSnap: true,
    shape: 'key',
    verticalLineStyle: { stroke: '#1783FF' },
    horizontalLineStyle: { stroke: '#1783FF' },
    filter: () => true,
};
const distance = (a, b) => Math.abs(a - b);
const getShape = (node, shapeFilter) => {
    return typeof shapeFilter === 'function' ? shapeFilter(node) : node.getShape(shapeFilter);
};
//# sourceMappingURL=index.js.map