import type { SymbolMaster } from '../models';
import type { TextHorizontalAlign, TextVerticalAlign } from '../models/Style/TextStyle';
import type { GroupLayoutType, ResizingConstraint } from './layout';
import type { SketchFormat } from './sketchFormat';
/**
 * 对 symbol 进行自定义处理的方法
 */
export declare type HandleSymbolFn = (symbol: SymbolMaster) => void;
export interface DefaultSymbolParams {
    symbolName?: string;
    /**
     * symbol 本身的 layout
     */
    symbolLayout?: GroupLayoutType;
    /**
     * symbol 内部的图层配置项
     */
    layerParams: SymbolAdjustParams[];
    /**
     * 图层选择器
     */
    selector?: LayerSelector;
}
export declare enum LayerSelectorMatchMethod {
    Equal = 0,
    Included = 1
}
/**
 * 选择图层的方法
 */
export interface LayerSelector {
    type: 'classname' | 'class' | 'name' | 'text' | 'tag';
    value: string;
    match?: LayerSelectorMatchMethod;
}
/**
 * 对 symbol 的相关配置项调整的参数
 */
export interface SymbolAdjustParams {
    /**
     * 选择器
     */
    selector: LayerSelector;
    /**
     * sketch 的调整参数
     */
    resizing?: ResizingConstraint[];
    /**
     * symbol 内 group 的布局类型
     */
    layout?: GroupLayoutType;
    /**
     * symbol 内文本的配置参数
     */
    text?: TextParam;
}
/**
 * 文本对象的配置项
 */
export interface TextParam {
    textBehaviour?: SketchFormat.TextBehaviour;
    verticalAlign?: TextVerticalAlign;
    horizontalAlign?: TextHorizontalAlign;
}
/**
 * nodeToSymbol 配置项
 */
export interface NodeToSymbolOptions {
    /**
     * symbol 自己的 layout 类型
     */
    symbolLayout?: GroupLayoutType;
    /**
     * 如果需要对 symbol 进行调整处理
     * 传入这个方法
     */
    handleSymbol?: HandleSymbolFn;
    /**
     * symbol 内部图层的配置项
     */
    layerParams?: SymbolAdjustParams[];
}
