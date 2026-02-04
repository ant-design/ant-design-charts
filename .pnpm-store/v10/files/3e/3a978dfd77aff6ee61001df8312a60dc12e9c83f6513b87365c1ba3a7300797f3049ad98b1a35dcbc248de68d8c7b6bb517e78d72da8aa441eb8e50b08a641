import { G2ViewTree } from '../runtime';
import { Node } from './node';
export declare const VIEW_KEYS: string[];
export declare const REMOVE_FLAG = "__remove__";
export declare const CALLBACK_NODE = "__callback__";
/** Minimum chart width */
export declare const MIN_CHART_WIDTH = 1;
/** Minimum chart height */
export declare const MIN_CHART_HEIGHT = 1;
export declare function normalizeContainer(container: string | HTMLElement): HTMLElement;
export declare function removeContainer(container: HTMLElement): void;
export declare function normalizeRoot(node: Node): Node<Record<string, any>, Record<string, any>, Record<string, any>>;
export declare function valueOf(node: Node): Record<string, any>;
export declare function sizeOf(options: any, container: any): {
    width: number;
    height: number;
    depth: any;
};
export declare function optionsOf(node: Node): Record<string, any>;
export declare function updateRoot(node: Node, options: G2ViewTree, definedType: string, mark: Record<string, new () => Node>, composition: Record<string, new () => Node>): void;
export declare function createEmptyPromise<T>(): [
    Promise<T>,
    (reason?: any) => void,
    (value: T | PromiseLike<T>) => void
];
