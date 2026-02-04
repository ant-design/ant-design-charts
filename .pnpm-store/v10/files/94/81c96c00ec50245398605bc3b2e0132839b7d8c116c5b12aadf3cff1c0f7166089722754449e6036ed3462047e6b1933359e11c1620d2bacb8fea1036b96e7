import SketchFormat from '@sketch-hq/sketch-file-format-ts';
declare abstract class BaseStyle {
    constructor();
    id: string;
    name: string;
    /**
     * 透明度
     * */
    private _opacity;
    get opacity(): string | number;
    set opacity(opacity: string | number);
    getContextSettings: () => SketchFormat.GraphicsContextSettings;
}
export default BaseStyle;
