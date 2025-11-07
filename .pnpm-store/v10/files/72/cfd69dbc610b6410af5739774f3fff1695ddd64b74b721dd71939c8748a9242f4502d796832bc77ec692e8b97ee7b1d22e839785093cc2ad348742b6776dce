import { Component } from '../../core';
import type { TimebarOptions, TimebarStyleProps } from './types';
export declare class Timebar extends Component<TimebarStyleProps> {
    static defaultOptions: TimebarOptions;
    private axis;
    /** 时间线 group，用于放置 timeline 或者 chart */
    private timeline;
    private controller;
    private states;
    private playInterval?;
    private get data();
    /** 计算空间分配 */
    private get space();
    private setBySliderValues;
    private setByTimebarValues;
    private setByIndex;
    /**
     * 获取 timebar 的 values
     */
    private get sliderValues();
    get values(): number | [number, number] | Date | [Date, Date];
    private getDatumByRatio;
    private get chartHandleIconShape();
    private getChartStyle;
    private renderChart;
    private updateSelection;
    private getAxisStyle;
    private renderAxis;
    private renderController;
    private dispatchOnChange;
    private handleSliderChange;
    private internalReset;
    reset(): void;
    private moveSelection;
    private internalBackward;
    backward(): void;
    private internalPlay;
    play(): void;
    private internalPause;
    pause(): void;
    private internalForward;
    forward(): void;
    private handleSpeedChange;
    private handleSelectionTypeChange;
    private handleChartTypeChange;
    constructor(options: TimebarOptions);
    render(): void;
    destroy(): void;
}
