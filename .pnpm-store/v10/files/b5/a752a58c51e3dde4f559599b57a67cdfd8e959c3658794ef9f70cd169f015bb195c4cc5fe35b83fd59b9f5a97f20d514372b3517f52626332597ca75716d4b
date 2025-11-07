import type { DisplayObjectConfig, TextStyleProps as GTextStyleProps } from '@antv/g';
import { Group, Text as GText } from '@antv/g';
import { OmitConflictStyleProps } from './types';
export type TextStyleProps = OmitConflictStyleProps<GTextStyleProps>;
export declare class Text extends GText {
    private _offscreen;
    protected get offscreenGroup(): Group;
    disconnectedCallback(): void;
    constructor({ style, ...restOptions }?: DisplayObjectConfig<TextStyleProps>);
}
