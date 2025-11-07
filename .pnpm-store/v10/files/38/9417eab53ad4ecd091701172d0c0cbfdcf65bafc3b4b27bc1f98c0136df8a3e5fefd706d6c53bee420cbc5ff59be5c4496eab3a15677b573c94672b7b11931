import { DisplayObject } from '@antv/g';
export type ElementDescriptor = {
    render(container: DisplayObject): void;
};
export declare function createElement<T = Record<string, any>>(descriptor: ElementDescriptor | ElementDescriptor['render']): new (T?: any) => DisplayObject;
