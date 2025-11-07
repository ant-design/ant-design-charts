var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { isFunction, uniqueId } from '@antv/util';
import { CanvasEvent, ComboEvent, CommonEvent, EdgeEvent, NodeEvent } from '../constants';
import { BaseBehavior } from './base-behavior';
const ASSIST_EDGE_ID = 'g6-create-edge-assist-edge-id';
const ASSIST_NODE_ID = 'g6-create-edge-assist-node-id';
/**
 * <zh/> 创建边交互
 *
 * <en/> Create edge behavior
 * @remarks
 * <zh/> 通过拖拽或点击节点创建边，支持自定义边样式。
 *
 * <en/> Create edges by dragging or clicking nodes, and support custom edge styles.
 */
export class CreateEdge extends BaseBehavior {
    constructor(context, options) {
        super(context, Object.assign({}, CreateEdge.defaultOptions, options));
        this.drop = (event) => __awaiter(this, void 0, void 0, function* () {
            const { targetType } = event;
            if (['combo', 'node'].includes(targetType) && this.source) {
                yield this.handleCreateEdge(event);
            }
            else {
                yield this.cancelEdge();
            }
        });
        this.handleCreateEdge = (event) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            if (!this.validate(event))
                return;
            const { graph, canvas, batch, element } = this.context;
            const { style } = this.options;
            if (this.source) {
                this.createEdge(event);
                yield this.cancelEdge();
                return;
            }
            batch.startBatch();
            canvas.setCursor('crosshair');
            this.source = this.getSelectedNodeIDs([event.target.id])[0];
            const sourceNode = graph.getElementData(this.source);
            graph.addNodeData([
                {
                    id: ASSIST_NODE_ID,
                    style: {
                        visibility: 'hidden',
                        ports: [{ key: 'port-1', placement: [0.5, 0.5] }],
                        x: (_a = sourceNode.style) === null || _a === void 0 ? void 0 : _a.x,
                        y: (_b = sourceNode.style) === null || _b === void 0 ? void 0 : _b.y,
                    },
                },
            ]);
            graph.addEdgeData([
                {
                    id: ASSIST_EDGE_ID,
                    source: this.source,
                    target: ASSIST_NODE_ID,
                    style: Object.assign({ pointerEvents: 'none' }, style),
                },
            ]);
            yield ((_c = element.draw({ animation: false })) === null || _c === void 0 ? void 0 : _c.finished);
        });
        this.updateAssistEdge = (event) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!this.source)
                return;
            const { model, element } = this.context;
            model.translateNodeTo(ASSIST_NODE_ID, [event.canvas.x, event.canvas.y]);
            yield ((_a = element.draw({ animation: false, silence: true })) === null || _a === void 0 ? void 0 : _a.finished);
        });
        this.createEdge = (event) => {
            var _a, _b;
            const { graph } = this.context;
            const { style, onFinish, onCreate } = this.options;
            const targetId = (_a = event.target) === null || _a === void 0 ? void 0 : _a.id;
            if (targetId === undefined || this.source === undefined)
                return;
            const target = (_b = this.getSelectedNodeIDs([event.target.id])) === null || _b === void 0 ? void 0 : _b[0];
            const id = `${this.source}-${target}-${uniqueId()}`;
            const edgeData = onCreate({ id, source: this.source, target, style });
            if (edgeData) {
                graph.addEdgeData([edgeData]);
                onFinish(edgeData);
            }
        };
        this.cancelEdge = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!this.source)
                return;
            const { graph, element, batch } = this.context;
            graph.removeNodeData([ASSIST_NODE_ID]);
            this.source = undefined;
            yield ((_a = element.draw({ animation: false })) === null || _a === void 0 ? void 0 : _a.finished);
            batch.endBatch();
        });
        this.bindEvents();
    }
    /**
     * Update options
     * @param options - The options to update
     * @internal
     */
    update(options) {
        super.update(options);
        this.bindEvents();
    }
    bindEvents() {
        const { graph } = this.context;
        const { trigger } = this.options;
        this.unbindEvents();
        if (trigger === 'click') {
            graph.on(NodeEvent.CLICK, this.handleCreateEdge);
            graph.on(ComboEvent.CLICK, this.handleCreateEdge);
            graph.on(CanvasEvent.CLICK, this.cancelEdge);
            graph.on(EdgeEvent.CLICK, this.cancelEdge);
        }
        else {
            graph.on(NodeEvent.DRAG_START, this.handleCreateEdge);
            graph.on(ComboEvent.DRAG_START, this.handleCreateEdge);
            graph.on(CommonEvent.POINTER_UP, this.drop);
        }
        graph.on(CommonEvent.POINTER_MOVE, this.updateAssistEdge);
    }
    getSelectedNodeIDs(currTarget) {
        return Array.from(new Set(this.context.graph
            .getElementDataByState('node', this.options.state)
            .map((node) => node.id)
            .concat(currTarget)));
    }
    validate(event) {
        if (this.destroyed)
            return false;
        const { enable } = this.options;
        if (isFunction(enable))
            return enable(event);
        return !!enable;
    }
    unbindEvents() {
        const { graph } = this.context;
        graph.off(NodeEvent.CLICK, this.handleCreateEdge);
        graph.off(ComboEvent.CLICK, this.handleCreateEdge);
        graph.off(CanvasEvent.CLICK, this.cancelEdge);
        graph.off(EdgeEvent.CLICK, this.cancelEdge);
        graph.off(NodeEvent.DRAG_START, this.handleCreateEdge);
        graph.off(ComboEvent.DRAG_START, this.handleCreateEdge);
        graph.off(CommonEvent.POINTER_UP, this.drop);
        graph.off(CommonEvent.POINTER_MOVE, this.updateAssistEdge);
    }
    destroy() {
        this.unbindEvents();
        super.destroy();
    }
}
CreateEdge.defaultOptions = {
    animation: true,
    enable: true,
    style: {},
    trigger: 'drag',
    onCreate: (data) => data,
    onFinish: () => { },
};
//# sourceMappingURL=create-edge.js.map