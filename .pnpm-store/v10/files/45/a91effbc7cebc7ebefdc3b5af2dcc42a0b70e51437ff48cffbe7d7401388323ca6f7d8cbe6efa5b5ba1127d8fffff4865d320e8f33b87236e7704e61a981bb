import { DisplayObjectConfig, HTML as GHTML, HTMLStyleProps as GHTMLStyleProps, Group } from '@antv/g';
import type { BaseNodeStyleProps } from './base-node';
import { BaseNode } from './base-node';
/**
 * <zh/> HTML 节点样式配置项
 *
 * <en/> HTML node style props
 */
export interface HTMLStyleProps extends BaseNodeStyleProps {
    /**
     * <zh/> HTML 内容，可以为字符串或者 `HTMLElement`
     *
     * <en/> HTML content, can be a string or `HTMLElement`
     */
    innerHTML: string | HTMLElement;
    /**
     * <zh/> 横行偏移量。HTML 容器默认以左上角为原点，通过 dx 来进行横向偏移
     *
     * <en/> Horizontal offset. The HTML container defaults to the upper left corner as the origin, and the horizontal offset is performed through dx
     * @defaultValue 0
     */
    dx?: number;
    /**
     * <zh/> 纵向偏移量。HTML 容器默认以左上角为原点，通过 dy 来进行纵向偏移
     *
     * <en/> Vertical offset. The HTML container defaults to the upper left corner as the origin, and the vertical offset is performed through dy
     * @defaultValue 0
     */
    dy?: number;
}
/**
 * <zh/> HTML 节点
 *
 * <en/> HTML node
 * @see https://github.com/antvis/G/blob/next/packages/g/src/plugins/EventPlugin.ts
 */
export declare class HTML extends BaseNode<HTMLStyleProps> {
    static defaultStyleProps: Partial<HTMLStyleProps>;
    constructor(options: DisplayObjectConfig<HTMLStyleProps>);
    private rootPointerEvent;
    private get eventService();
    private get events();
    protected getDomElement(): HTMLElement;
    /**
     * @override
     */
    render(attributes?: Required<HTMLStyleProps>, container?: Group): void;
    protected getKeyStyle(attributes: Required<HTMLStyleProps>): GHTMLStyleProps;
    protected drawKeyShape(attributes: Required<HTMLStyleProps>, container: Group): GHTML | undefined;
    connectedCallback(): void;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    destroy(): void;
    private forwardEvents;
    private normalizeToPointerEvent;
    private transferMouseData;
    private bootstrapEvent;
    private getViewportXY;
    protected onframe(): void;
}
