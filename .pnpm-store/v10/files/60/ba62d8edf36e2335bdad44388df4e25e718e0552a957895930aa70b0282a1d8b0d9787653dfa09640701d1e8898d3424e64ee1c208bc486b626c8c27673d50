import type Group from '../Layer/Group';
import type Color from '../Style/Color';
import type ColorAsset from '../Style/ColorAsset';
import type Page from './Page';
import type { AnyLayer } from '../../types';
import { SketchFormat } from '../../types';
/**
 * Sketch 文档对象
 */
declare class SketchDocument {
    id: string;
    colors: Color[];
    /**
     * 色板
     */
    swatches: SketchFormat.Swatch[];
    /**
     * 颜色资产
     */
    colorAssets: ColorAsset[];
    /**
     * 文本样式
     */
    textStyles: SketchFormat.SharedStyle[];
    /**
     * 图层样式
     */
    layerStyles: SketchFormat.SharedStyle[];
    /**
     * 外部图层样式
     */
    foreignLayerStyles: SketchFormat.ForeignLayerStyle[];
    /**
     * 外部文本样式
     */
    foreignTextStyles: SketchFormat.ForeignTextStyle[];
    /**
     * 外部 Swatch
     */
    foreignSwatch: SketchFormat.ForeignSwatch[];
    /**
     * 外部 Symbol
     */
    foreignSymbol: SketchFormat.ForeignSymbol[];
    /**
     * 画板
     */
    pages: Page[];
    /**
     * 文件名
     */
    name: string;
    constructor();
    addPage(page: any): void;
    addTextStyle(textLayer: AnyLayer, id?: string): void;
    addLayerStyle(layer: Group, id: string): void;
    addColor(color: Color): void;
    /**
     * 转为 Sketch JSON对象
     */
    toSketchJSON(): SketchFormat.Document;
    /**
     * 将 Page 转为参考对象
     */
    pageToPageReference: (page: Page) => SketchFormat.FileRef;
}
export default SketchDocument;
