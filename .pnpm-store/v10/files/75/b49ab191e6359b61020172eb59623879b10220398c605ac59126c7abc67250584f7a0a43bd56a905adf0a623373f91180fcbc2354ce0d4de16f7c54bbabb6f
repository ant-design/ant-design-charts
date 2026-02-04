import type { AbsoluteArray } from '@antv/util';
import type { ParsedPathStyleProps } from '../../display-objects';
import { Rectangle } from '../../shapes';
import type { CSSProperty } from '../CSSProperty';
import { mergePaths, parsePath } from '../parser/path';
export declare class CSSPropertyPath implements Partial<CSSProperty<ParsedPathStyleProps['d'], ParsedPathStyleProps['d']>> {
    /**
     * path2Curve
     */
    parser: typeof parsePath;
    calculator(name: string, oldParsed: ParsedPathStyleProps['d'], parsed: ParsedPathStyleProps['d']): {
        absolutePath: AbsoluteArray;
        hasArc: boolean;
        segments: import("../../display-objects").PathSegment[];
        polygons: [number, number][][];
        polylines: [number, number][][];
        curve: import("@antv/util").CurveArray;
        totalLength: number;
        rect: Rectangle;
    };
    mixer: typeof mergePaths;
}
//# sourceMappingURL=CSSPropertyPath.d.ts.map