import type SketchFormat from '@sketch-hq/sketch-file-format-ts';
import BaseStyle from '../Base/BaseStyle';
/**
 * 图片资产
 * 用于添加到 Fill 和 Border 的内容
 */
declare class Image extends BaseStyle {
    constructor(url: string);
    /**
     * 完成图片资源的初始化
     */
    init(): Promise<void>;
    /**
     * 外部传入的 URL
     */
    url: string;
    /**
     * 转换成的 base64 数据
     */
    base64: string;
    toSketchJSON(): SketchFormat.DataRef;
}
export default Image;
