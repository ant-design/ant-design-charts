import type { RuntimeContext } from '../../runtime/types';
import type { DataChange } from '../../types';
import type { Command } from '../../types/history';
/**
 * <zh/> 对齐两个对象的字段。若目标对象缺少字段，则会添加默认值。
 *
 * <en/> Align the fields of two objects. If the target object lacks fields, default values will be added.
 * @param refObject - <zh/> 参考对象 ｜ <en/> Reference object
 * @param targetObject - <zh/> 目标对象 ｜ <en/> Target object
 */
export declare function alignFields(refObject: Record<string, any>, targetObject: Record<string, any>): void;
/**
 * <zh/> 解析数据变更为历史记录命令
 *
 * <en/> Parse data changes into history commands
 * @param changes - <zh/> 数据变更 ｜ <en/> Data changes
 * @param animation - <zh/> 是否开启动画 ｜ <en/> Whether to enable animation
 * @param context - <zh/> 运行时上下文 ｜ <en/> Runtime context
 * @returns <zh/> 历史记录命令 ｜ <en/> History command
 */
export declare function parseCommand(changes: DataChange[], animation?: boolean, context?: RuntimeContext): Command;
