import { HistoryEvent } from '../../constants/events/history';
import type { RuntimeContext } from '../../runtime/types';
import { Loosen } from '../../types';
import type { Command } from '../../types/history';
import type { BasePluginOptions } from '../base-plugin';
import { BasePlugin } from '../base-plugin';
/**
 * <zh/> 历史记录配置项
 *
 * <en/> History options
 */
export interface HistoryOptions extends BasePluginOptions {
    /**
     * <zh/>  最多记录该数据长度的历史记录
     *
     * <en/> The maximum number of history records
     * @defaultValue 0(不做限制)
     */
    stackSize?: number;
    /**
     * <zh/> 当一个命令被添加到 Undo/Redo 队列前被调用，如果该方法返回 false，那么这个命令将不会被添加到队列中。revert 为 true 时表示撤销操作，为 false 时表示重做操作
     *
     * <en/> Called before a command is added to the Undo/Redo queue. If this method returns false, the command will not be added to the queue. revert is true for undo operations and false for redo operations
     */
    beforeAddCommand?: (cmd: Command, revert: boolean) => boolean | void;
    /**
     * <zh/> 当一个命令被添加到 Undo/Redo 队列后被调用。revert 为 true 时表示撤销操作，为 false 时表示重做操作
     *
     * <en/> Called after a command is added to the Undo/Redo queue. revert is true for undo operations and false for redo operations
     */
    afterAddCommand?: (cmd: Command, revert: boolean) => void;
    /**
     * <zh/> 执行命令时的回调函数
     *
     * <en/> Callback function when executing a command
     */
    executeCommand?: (cmd: Command) => void;
}
/**
 * <zh/> 历史记录
 *
 * <en/> History
 * @remarks
 * <zh/> 历史记录用于记录图的数据变化，支持撤销和重做等操作。
 *
 * <en/> History is used to record data changes in the graph and supports operations such as undo and redo.
 */
export declare class History extends BasePlugin<HistoryOptions> {
    static defaultOptions: Partial<HistoryOptions>;
    private emitter;
    private batchChanges;
    private batchAnimation;
    undoStack: Command[];
    redoStack: Command[];
    private freezed;
    constructor(context: RuntimeContext, options: HistoryOptions);
    /**
     * <zh/> 是否可以执行撤销操作
     *
     * <en/> Whether undo can be done
     * @returns <zh/> 是否可以执行撤销操作 | <en/> Whether undo can be done
     */
    canUndo(): boolean;
    /**
     * <zh/> 是否可以执行重做操作
     *
     * <en/> Whether redo can be done
     * @returns <zh/> 是否可以执行重做操作 | <en/> Whether redo can be done
     */
    canRedo(): boolean;
    /**
     * <zh/> 执行撤销
     *
     * <en/> Execute undo
     * @returns <zh/> 返回当前实例 | <en/> Return the current instance
     */
    undo(): this | undefined;
    /**
     * <zh/> 执行重做
     *
     * <en/> Execute redo
     * @returns <zh/> 返回当前实例 | <en/> Return the current instance
     */
    redo(): this;
    /**
     * <zh/> 执行撤销且不计入历史记录
     *
     * <en/> Execute undo and do not record in history
     * @returns <zh/> 返回当前实例 | <en/> Return the current instance
     */
    undoAndCancel(): this;
    private executeCommand;
    private addCommand;
    private initBatchCommand;
    private undoStackPush;
    /**
     * <zh/> 清空历史记录
     *
     * <en/> Clear history
     */
    clear(): void;
    private notify;
    /**
     * <zh/> 监听历史记录事件
     *
     * <en/> Listen to history events
     * @param event  - <zh/> 事件名称 | <en/> Event name
     * @param handler - <zh/> 事件处理函数 | <en/> Event handler
     */
    on(event: Loosen<HistoryEvent>, handler: (e: {
        cmd?: Command | null;
    }) => void): void;
    /**
     * <zh/> 销毁
     *
     * <en/> Destroy
     * @internal
     */
    destroy(): void;
}
