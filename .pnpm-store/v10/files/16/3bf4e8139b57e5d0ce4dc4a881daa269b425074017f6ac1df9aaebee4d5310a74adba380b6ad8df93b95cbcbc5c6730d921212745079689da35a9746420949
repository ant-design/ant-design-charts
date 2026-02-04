import type { MarkComponent } from '@antv/g2';
export type MarkOptions = Record<string, any>;
export type CompositeMarkOptions = Record<string, any>;
export type CompositeMarkComponent<O extends CompositeMarkOptions = CompositeMarkOptions> = {
    (options?: O, context?: any): CompositeMark;
    props?: MarkComponent<any>['props'];
};
export type CompositeMark = Promise<MarkOptions[] | MarkOptions> | MarkOptions[] | MarkOptions;
