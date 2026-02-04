import EventEmitter from '@antv/event-emitter';
import { GraphEvent } from '../../constants';
import { HistoryEvent } from '../../constants/events/history';
import { idsOf } from '../../utils/id';
import { BasePlugin } from '../base-plugin';
import { parseCommand } from './util';
/**
 * <zh/> 历史记录
 *
 * <en/> History
 * @remarks
 * <zh/> 历史记录用于记录图的数据变化，支持撤销和重做等操作。
 *
 * <en/> History is used to record data changes in the graph and supports operations such as undo and redo.
 */
export class History extends BasePlugin {
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
            this.context.graph.removeData(idsOf(values.remove, false));
            (_c = this.context.element) === null || _c === void 0 ? void 0 : _c.draw({ silence: true, animation: cmd.animation });
            this.freezed = false;
        };
        this.addCommand = (event) => {
            var _a;
            if (this.freezed)
                return;
            if (event.type === GraphEvent.AFTER_DRAW) {
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
            this.undoStackPush(parseCommand(this.batchChanges.flat(), this.batchAnimation, this.context));
            this.notify(HistoryEvent.ADD, this.undoStack[this.undoStack.length - 1]);
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
        this.emitter = new EventEmitter();
        const { graph } = this.context;
        graph.on(GraphEvent.AFTER_DRAW, this.addCommand);
        graph.on(GraphEvent.BATCH_START, this.initBatchCommand);
        graph.on(GraphEvent.BATCH_END, this.addCommand);
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
            this.notify(HistoryEvent.UNDO, cmd);
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
            this.notify(HistoryEvent.REDO, cmd);
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
            this.notify(HistoryEvent.CANCEL, cmd);
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
        this.notify(HistoryEvent.CLEAR, null);
    }
    notify(event, cmd) {
        this.emitter.emit(event, { cmd });
        this.emitter.emit(HistoryEvent.CHANGE, { cmd });
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
        graph.off(GraphEvent.AFTER_DRAW, this.addCommand);
        graph.off(GraphEvent.BATCH_START, this.initBatchCommand);
        graph.off(GraphEvent.BATCH_END, this.addCommand);
        this.emitter.off();
        super.destroy();
        this.undoStack = [];
        this.redoStack = [];
    }
}
History.defaultOptions = {
    stackSize: 0,
};
//# sourceMappingURL=index.js.map