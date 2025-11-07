"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = void 0;
const event_emitter_1 = __importDefault(require("@antv/event-emitter"));
const constants_1 = require("../../constants");
const history_1 = require("../../constants/events/history");
const id_1 = require("../../utils/id");
const base_plugin_1 = require("../base-plugin");
const util_1 = require("./util");
/**
 * <zh/> 历史记录
 *
 * <en/> History
 * @remarks
 * <zh/> 历史记录用于记录图的数据变化，支持撤销和重做等操作。
 *
 * <en/> History is used to record data changes in the graph and supports operations such as undo and redo.
 */
class History extends base_plugin_1.BasePlugin {
    constructor(context, options) {
        super(context, Object.assign({}, History.defaultOptions, options));
        this.batchChanges = null;
        this.batchAnimation = false;
        this.undoStack = [];
        this.redoStack = [];
        this.freezed = false;
        this.executeCommand = (cmd, revert = true) => {
            var _a, _b, _c;
            this.freezed = true;
            (_b = (_a = this.options).executeCommand) === null || _b === void 0 ? void 0 : _b.call(_a, cmd);
            const values = revert ? cmd.original : cmd.current;
            this.context.graph.addData(values.add);
            this.context.graph.updateData(values.update);
            this.context.graph.removeData((0, id_1.idsOf)(values.remove, false));
            (_c = this.context.element) === null || _c === void 0 ? void 0 : _c.draw({ silence: true, animation: cmd.animation });
            this.freezed = false;
        };
        this.addCommand = (event) => {
            var _a;
            if (this.freezed)
                return;
            if (event.type === constants_1.GraphEvent.AFTER_DRAW) {
                const { dataChanges = [], animation = true } = event.data;
                if ((_a = this.context.batch) === null || _a === void 0 ? void 0 : _a.isBatching) {
                    if (!this.batchChanges)
                        return;
                    this.batchChanges.push(dataChanges);
                    this.batchAnimation && (this.batchAnimation = animation);
                    return;
                }
                this.batchChanges = [dataChanges];
                this.batchAnimation = animation;
            }
            this.undoStackPush((0, util_1.parseCommand)(this.batchChanges.flat(), this.batchAnimation, this.context));
            this.notify(history_1.HistoryEvent.ADD, this.undoStack[this.undoStack.length - 1]);
        };
        this.initBatchCommand = (event) => {
            const { initiate } = event.data;
            this.batchAnimation = false;
            if (initiate) {
                this.batchChanges = [];
            }
            else {
                const cmd = this.undoStack.pop();
                if (!cmd)
                    this.batchChanges = null;
            }
        };
        this.emitter = new event_emitter_1.default();
        const { graph } = this.context;
        graph.on(constants_1.GraphEvent.AFTER_DRAW, this.addCommand);
        graph.on(constants_1.GraphEvent.BATCH_START, this.initBatchCommand);
        graph.on(constants_1.GraphEvent.BATCH_END, this.addCommand);
    }
    /**
     * <zh/> 是否可以执行撤销操作
     *
     * <en/> Whether undo can be done
     * @returns <zh/> 是否可以执行撤销操作 | <en/> Whether undo can be done
     */
    canUndo() {
        return this.undoStack.length > 0;
    }
    /**
     * <zh/> 是否可以执行重做操作
     *
     * <en/> Whether redo can be done
     * @returns <zh/> 是否可以执行重做操作 | <en/> Whether redo can be done
     */
    canRedo() {
        return this.redoStack.length > 0;
    }
    /**
     * <zh/> 执行撤销
     *
     * <en/> Execute undo
     * @returns <zh/> 返回当前实例 | <en/> Return the current instance
     */
    undo() {
        var _a, _b, _c, _d;
        const cmd = this.undoStack.pop();
        if (cmd) {
            this.executeCommand(cmd);
            const before = (_b = (_a = this.options).beforeAddCommand) === null || _b === void 0 ? void 0 : _b.call(_a, cmd, false);
            if (before === false)
                return;
            this.redoStack.push(cmd);
            (_d = (_c = this.options).afterAddCommand) === null || _d === void 0 ? void 0 : _d.call(_c, cmd, false);
            this.notify(history_1.HistoryEvent.UNDO, cmd);
        }
        return this;
    }
    /**
     * <zh/> 执行重做
     *
     * <en/> Execute redo
     * @returns <zh/> 返回当前实例 | <en/> Return the current instance
     */
    redo() {
        const cmd = this.redoStack.pop();
        if (cmd) {
            this.executeCommand(cmd, false);
            this.undoStackPush(cmd);
            this.notify(history_1.HistoryEvent.REDO, cmd);
        }
        return this;
    }
    /**
     * <zh/> 执行撤销且不计入历史记录
     *
     * <en/> Execute undo and do not record in history
     * @returns <zh/> 返回当前实例 | <en/> Return the current instance
     */
    undoAndCancel() {
        const cmd = this.undoStack.pop();
        if (cmd) {
            this.executeCommand(cmd, false);
            this.redoStack = [];
            this.notify(history_1.HistoryEvent.CANCEL, cmd);
        }
        return this;
    }
    undoStackPush(cmd) {
        var _a, _b, _c, _d;
        const { stackSize } = this.options;
        if (stackSize !== 0 && this.undoStack.length >= stackSize) {
            this.undoStack.shift();
        }
        const before = (_b = (_a = this.options).beforeAddCommand) === null || _b === void 0 ? void 0 : _b.call(_a, cmd, true);
        if (before === false)
            return;
        this.undoStack.push(cmd);
        (_d = (_c = this.options).afterAddCommand) === null || _d === void 0 ? void 0 : _d.call(_c, cmd, true);
    }
    /**
     * <zh/> 清空历史记录
     *
     * <en/> Clear history
     */
    clear() {
        this.undoStack = [];
        this.redoStack = [];
        this.batchChanges = null;
        this.batchAnimation = false;
        this.notify(history_1.HistoryEvent.CLEAR, null);
    }
    notify(event, cmd) {
        this.emitter.emit(event, { cmd });
        this.emitter.emit(history_1.HistoryEvent.CHANGE, { cmd });
    }
    /**
     * <zh/> 监听历史记录事件
     *
     * <en/> Listen to history events
     * @param event  - <zh/> 事件名称 | <en/> Event name
     * @param handler - <zh/> 事件处理函数 | <en/> Event handler
     */
    on(event, handler) {
        this.emitter.on(event, handler);
    }
    /**
     * <zh/> 销毁
     *
     * <en/> Destroy
     * @internal
     */
    destroy() {
        const { graph } = this.context;
        graph.off(constants_1.GraphEvent.AFTER_DRAW, this.addCommand);
        graph.off(constants_1.GraphEvent.BATCH_START, this.initBatchCommand);
        graph.off(constants_1.GraphEvent.BATCH_END, this.addCommand);
        this.emitter.off();
        super.destroy();
        this.undoStack = [];
        this.redoStack = [];
    }
}
exports.History = History;
History.defaultOptions = {
    stackSize: 0,
};
//# sourceMappingURL=index.js.map