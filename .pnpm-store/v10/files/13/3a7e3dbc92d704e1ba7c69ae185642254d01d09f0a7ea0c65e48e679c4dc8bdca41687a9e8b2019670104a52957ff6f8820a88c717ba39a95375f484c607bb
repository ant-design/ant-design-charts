import { Component } from '../../core';
import { Group } from '../../shapes';
import type { SparklineOptions, SparklineStyleProps } from './types';
export type { SparklineOptions, SparklineStyleProps };
export declare class Sparkline extends Component<SparklineStyleProps> {
    static tag: string;
    /**
     * 将data统一格式化为数组形式
     * 如果堆叠，则生成堆叠数据
     */
    private get rawData();
    private get data();
    private get scales();
    /**
     * 基准线，默认为 0
     */
    private get baseline();
    private get containerShape();
    private get linesStyle();
    private get columnsStyle();
    constructor(options: SparklineOptions);
    render(attributes: Required<SparklineStyleProps>, container: Group): void;
    /**
     * 根据数据索引获取color
     */
    private getColor;
    /**
     * 根据数据生成scale
     */
    private createScales;
}
