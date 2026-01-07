import type EventEmitter from '@antv/event-emitter';
import type { Graph } from '../../runtime/graph';
import type { RuntimeContext } from '../../runtime/types';
import type { IEvent } from '../../types';
import type { STDExtensionOption } from './types';
export declare abstract class ExtensionController<E extends BaseExtension<any>> {
    protected context: RuntimeContext;
    protected extensions: STDExtensionOption[];
    protected extensionMap: Record<string, E>;
    abstract category: 'plugin' | 'behavior' | 'transform';
    constructor(context: RuntimeContext);
    setExtensions(extensions: (string | {
        type: string;
        [keys: string]: unknown;
    } | ((this: Graph) => {
        type: string;
        [keys: string]: unknown;
    }))[]): void;
    protected createExtension(extension: STDExtensionOption): void;
    protected createExtensions(extensions: STDExtensionOption[]): void;
    protected updateExtension(extension: STDExtensionOption): void;
    protected updateExtensions(extensions: STDExtensionOption[]): void;
    protected destroyExtension(key: string): void;
    protected destroyExtensions(extensions: STDExtensionOption[]): void;
    destroy(): void;
}
/**
 * <zh/> 模块实例基类
 *
 * <en/> Base class for extension instance
 */
export declare class BaseExtension<T extends {
    type: string;
    key?: string;
    [key: string]: unknown;
}> {
    protected context: RuntimeContext;
    protected options: Required<T>;
    protected events: [EventEmitter | HTMLElement, string, (event: IEvent) => void][];
    initialized: boolean;
    destroyed: boolean;
    constructor(context: RuntimeContext, options: Partial<T>);
    update(options: Partial<T>): void;
    destroy(): void;
}
