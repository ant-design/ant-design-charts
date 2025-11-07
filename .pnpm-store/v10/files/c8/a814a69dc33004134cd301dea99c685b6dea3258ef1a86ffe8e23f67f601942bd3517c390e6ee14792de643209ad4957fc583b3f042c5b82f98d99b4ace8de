import BaseLayer from '../Base/BaseLayer';
import type { BaseLayerParams } from '../../types';
import { SketchFormat } from '../../types';
interface BitmapInitParams extends BaseLayerParams {
    url: string;
}
/**
 * 图片处理
 * */
declare class Bitmap extends BaseLayer {
    constructor({ url, x, y, width, height }: BitmapInitParams);
    /**
     * 线上 url
     */
    url: string;
    /**
     * 转换成的 base64 数据
     */
    base64: string;
    /**
     * 针对 http的 url 进行资源的初始化
     */
    init(): Promise<void>;
    /**
     * 转为 Sketch JSON 对象
     */
    toSketchJSON: () => SketchFormat.Bitmap;
    /**
     * 转换为 Sketch 引用 JSON 对象
     * */
    toSketchImageJSON: () => SketchFormat.DataRef;
}
export default Bitmap;
