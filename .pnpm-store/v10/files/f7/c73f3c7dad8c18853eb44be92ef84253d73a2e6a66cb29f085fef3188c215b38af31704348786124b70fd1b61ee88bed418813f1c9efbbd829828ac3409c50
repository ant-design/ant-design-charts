import type { BaseStyleProps, PathStyleProps } from '../../shapes';
import { DisplayObject } from '../../shapes';
export interface LinesStyleProps extends BaseStyleProps {
    x?: number;
    y?: number;
    lines: PathStyleProps[];
    areas: PathStyleProps[];
}
export declare class Lines extends DisplayObject<LinesStyleProps> {
    private linesGroup;
    private areasGroup;
    constructor({ style, ...rest }: Partial<DisplayObject<LinesStyleProps>>);
    render(): void;
    clear(): void;
    update(attr: Partial<LinesStyleProps>): void;
    private renderLines;
    private renderAreas;
}
