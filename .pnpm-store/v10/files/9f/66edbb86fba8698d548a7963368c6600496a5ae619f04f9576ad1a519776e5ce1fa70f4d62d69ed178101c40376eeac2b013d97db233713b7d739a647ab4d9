import SketchFormat from '@sketch-hq/sketch-file-format-ts';
import type { AnyLayer, BaseLayerParams, GroupLayoutType } from '../../types';
import BaseLayer from '../Base/BaseLayer';
declare class Group extends BaseLayer {
    constructor(params?: BaseLayerParams);
    /**
     * 添加图层
     * @param layer
     */
    addLayer(layer: AnyLayer): void;
    /**
     * Symbol 布局
     */
    groupLayout: SketchFormat.InferredGroupLayout | SketchFormat.FreeformGroupLayout;
    /**
     * 设置布局参数
     * @param layoutType
     */
    setGroupLayout(layoutType: GroupLayoutType): void;
    /**
     * 获取 group 子级的尺寸
     */
    getSize(): {
        width: number;
        height: number;
    };
    /**
     * 转换为 Sketch JSON 对象
     */
    toSketchJSON: () => SketchFormat.Group;
    applyTransformRotate(transformStr: string): void;
}
export default Group;
