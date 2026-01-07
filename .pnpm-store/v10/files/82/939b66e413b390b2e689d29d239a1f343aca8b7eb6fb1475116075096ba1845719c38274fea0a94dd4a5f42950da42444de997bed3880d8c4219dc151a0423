import type { BaseLayerParams } from '../../types';
import { SketchFormat } from '../../types';
import BaseLayer from '../Base/BaseLayer';
import Color from '../Style/Color';
/**
 * 画板对象
 * */
declare class Artboard extends BaseLayer {
    constructor(params?: BaseLayerParams);
    /**
     * 背景颜色值
     */
    backgroundColor: Color;
    /**
     * 是否包含颜色
     */
    hasBackgroundColor: boolean;
    /**
     * 导出画板带上背景颜色
     */
    includeBackgroundColorInExport: boolean;
    isFixedToViewport: boolean;
    /**
     * 是否横向翻转
     */
    isFlippedHorizontal: boolean;
    /**
     * 是否是流程图起点
     */
    isFlowHome: boolean;
    /**
     * 是否纵向翻转
     */
    isFlippedVertical: boolean;
    /**
     * 内容自适应
     */
    resizesContent: boolean;
    toSketchJSON: () => SketchFormat.Artboard;
}
export default Artboard;
