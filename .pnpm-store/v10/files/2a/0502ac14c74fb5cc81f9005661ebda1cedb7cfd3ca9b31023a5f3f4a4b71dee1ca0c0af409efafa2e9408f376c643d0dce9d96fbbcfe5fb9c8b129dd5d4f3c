import BaseLayer from '../Base/BaseLayer';
import Color from '../Style/Color';
import SymbolInstance from './SymbolInstance';
import type { AnyLayer, BaseLayerParams, FrameType, GroupLayoutType } from '../../types';
import { SketchFormat } from '../../types';
/**
 * Sketch 的 Symbol 对象
 * */
declare class SymbolMaster extends BaseLayer {
    constructor(params?: BaseLayerParams);
    /**
     * 背景颜色
     * */
    backgroundColor: Color;
    symbolID: string;
    /**
     * 覆盖层属性
     */
    overrideProperties: SketchFormat.OverrideProperty[];
    /**
     * Symbol 布局
     */
    groupLayout: SketchFormat.InferredGroupLayout | SketchFormat.FreeformGroupLayout;
    /**
     * 生成 Symbol 实例
     * */
    getSymbolInstance({ x, y, width, height }: Partial<FrameType>): SymbolInstance;
    /**
     * 添加图层
     * @param layer
     */
    addLayer(layer: AnyLayer): void;
    /**
     * 获取 symbol 的尺寸
     */
    getSize(): {
        width: number;
        height: number;
    };
    /**
     * 设置布局参数
     * @param layoutType
     */
    setGroupLayout(layoutType: GroupLayoutType): void;
    /**
     * 添加 override 设置
     * @param id
     * @param type 覆盖层的类型
     * @param canOverride 是否允许覆盖
     */
    addOverride: (id: string, type: 'image' | 'style' | 'text', canOverride?: boolean) => void;
    toSketchJSON: () => SketchFormat.SymbolMaster;
}
export default SymbolMaster;
