import type { BaseLayerParams } from '../../types';
import { SketchFormat } from '../../types';
import BaseLayer from '../Base/BaseLayer';
import type ShapePath from './ShapePath';
declare class ShapeGroup extends BaseLayer {
    constructor(params?: BaseLayerParams);
    /**
     * ShapeGroup 的 layers 必须是 AnyShape 类型
     */
    layers: ShapePath[];
    /**
     * 填充规则
     * @see https://www.yuque.com/arvinxx/fontend/7ad6671c-d309-40fc-a0a8-55888f508289
     */
    windingRule: SketchFormat.WindingRule;
    /**
     * 添加图层
     * @param layer
     */
    addLayer(layer: ShapePath): void;
    /**
     * 批量添加图层
     * @param layers
     */
    addLayers(layers: ShapePath[]): void;
    /**
     * 转换为 Sketch 对象
     */
    toSketchJSON(): SketchFormat.ShapeGroup | SketchFormat.ShapePath;
}
export default ShapeGroup;
