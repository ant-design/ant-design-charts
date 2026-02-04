import type { BaseStyleProps, DisplayObject, DisplayObjectConfig, Line, Polyline } from '@antv/g-lite';
import { CustomElement, Path } from '@antv/g-lite';
type ArrowHead = boolean | DisplayObject;
type ArrowBody = Line | Path | Polyline;
export interface ArrowStyleProps extends BaseStyleProps {
    body?: ArrowBody;
    startHead?: ArrowHead;
    endHead?: ArrowHead;
    /**
     * offset along tangent for start head
     */
    startHeadOffset?: number;
    /**
     * offset along tangent for end head
     */
    endHeadOffset?: number;
    stroke?: string;
    lineWidth?: number;
    opacity?: number;
    strokeOpacity?: number;
}
/**
 * support 3 types of arrow line:
 * 1. Line
 * 2. Polyline
 * 3. Path
 *
 * support 2 types of arrow head:
 * 1. default(Path)
 * 2. custom
 */
export declare class Arrow extends CustomElement<ArrowStyleProps> {
    static tag: string;
    static PARSED_STYLE_LIST: Set<string>;
    private body;
    private startHead?;
    private endHead?;
    private startHeadPosition;
    private startHeadRad;
    private endHeadPosition;
    private endHeadRad;
    constructor(config: DisplayObjectConfig<ArrowStyleProps>);
    private handleBodyAttributeChanged;
    getBody(): Line | Path | Polyline;
    getStartHead(): DisplayObject<any, any>;
    getEndHead(): DisplayObject<any, any>;
    attributeChangedCallback<Key extends keyof ArrowStyleProps>(name: Key, oldValue: ArrowStyleProps[Key], newValue: ArrowStyleProps[Key]): void;
    private getArrowHeadType;
    private appendArrowHead;
    /**
     * transform arrow head according to arrow line
     */
    private transformArrowHead;
    private moveArrowHeadAlongTangent;
    private destroyArrowHead;
    private getTangent;
    private createDefaultArrowHead;
    private applyArrowStyle;
}
export {};
//# sourceMappingURL=Arrow.d.ts.map