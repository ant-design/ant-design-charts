import { SketchFormat } from '../../types';
/**
 * 描边参数项
 * */
declare class SketchBorderOptions {
    constructor(dashArr?: number[]);
    class: string;
    isEnabled: boolean;
    dashPattern: number[];
    lineCap: SketchFormat.LineCapStyle;
    lineJoin: SketchFormat.LineJoinStyle;
    /**
     * 转为 Sketch JSON 对象
     * @returns {SketchFormat.BorderOptions}
     */
    toSketchJSON: () => SketchFormat.BorderOptions;
}
export default SketchBorderOptions;
