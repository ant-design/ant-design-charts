import type { DisplayObjectConfig, HTMLStyleProps as GHTMLStyleProps } from '@antv/g';
import type { BaseNodeStyleProps, HTMLStyleProps } from '@antv/g6';
import { HTML } from '@antv/g6';
import type { FC } from 'react';
export interface ReactNodeStyleProps extends BaseNodeStyleProps {
    /**
     * <zh/> React 组件
     *
     * <en/> React component
     */
    component: FC;
}
export declare class ReactNode extends HTML {
    protected getKeyStyle(attributes: Required<HTMLStyleProps>): GHTMLStyleProps;
    constructor(options: DisplayObjectConfig<ReactNodeStyleProps>);
    update(attr?: Partial<ReactNodeStyleProps> | undefined): void;
    connectedCallback(): void;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    destroy(): void;
}
