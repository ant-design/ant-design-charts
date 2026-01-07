import { clamp } from '@antv/util';
import { Component } from '../../core';
import { Line } from '../../shapes';
import { BBox, deepAssign, subStyleProps, formatTime } from '../../util';
import { Axis } from '../axis';
import type { LinearAxisStyleProps } from '../axis/types';
import type { SliderStyleProps } from '../slider';
import { Slider } from '../slider';
import { Controller } from './controller';
import { ChartModeHandle, TimeModeHandle } from './handle';
import type { ControllerStyleProps, TimebarOptions, TimebarStyleProps, Datum } from './types';
import { labelFormatter, parseBySeries } from './utils';

type States = Pick<TimebarStyleProps, 'speed' | 'selectionType' | 'chartType' | 'state' | 'playMode'> & {
  values?: [number, number] | [Date, Date] | [number | Date, typeof Infinity];
};

export class Timebar extends Component<TimebarStyleProps> {
  static defaultOptions: TimebarOptions = {
    style: {
      x: 0,
      y: 0,
      axisLabelFill: '#6e6e6e',
      axisLabelTextAlign: 'left',
      axisLabelTextBaseline: 'top',
      axisLabelTransform: 'translate(5, -12)',
      axisLineLineWidth: 1,
      axisLineStroke: '#cacdd1',
      axisTickLength: 15,
      axisTickLineWidth: 1,
      axisTickStroke: '#cacdd1',
      chartShowLabel: false,
      chartType: 'line',
      controllerAlign: 'center',
      controllerHeight: 40,
      data: [],
      interval: 'day',
      loop: false,
      playMode: 'acc',
      selectionType: 'range',
      type: 'time',
    },
  };

  private axis = this.appendChild(
    new Axis({
      style: { type: 'linear', startPos: [0, 0], endPos: [0, 0], data: [], showArrow: false, animate: false },
    })
  );

  /** 时间线 group，用于放置 timeline 或者 chart */
  private timeline = this.appendChild(
    new Slider({
      style: {
        onChange: (values) => {
          this.handleSliderChange(values);
        },
      },
    })
  );

  private controller = this.appendChild(new Controller({}));

  private states: States = {};

  private playInterval?: number;

  private get data() {
    const { data } = this.attributes;
    const compareFn = (a: Datum, b: Datum) => {
      if (a.time < b.time) return -1;
      if (a.time > b.time) return 1;
      return 0;
    };
    return data.sort(compareFn);
  }

  /** 计算空间分配 */
  private get space() {
    const { x, y, width, height, type, controllerHeight } = this.attributes;

    const availableTimelineHeight = clamp(+height - controllerHeight, 0, +height);
    const controllerBBox = new BBox(x, y + +height - controllerHeight, +width, controllerHeight);

    // chart 模式下可用
    let axisBBox: BBox;
    let axisHeight = 0;
    if (type === 'chart') {
      // axis 默认分配高度为 35
      axisHeight = 35;
      axisBBox = new BBox(x, y + availableTimelineHeight - axisHeight, +width, axisHeight);
    } else axisBBox = new BBox();

    const timelineHeight = type === 'time' ? 10 : availableTimelineHeight;
    const timelineBBox = new BBox(
      x,
      y + (type === 'time' ? availableTimelineHeight : availableTimelineHeight - timelineHeight),
      +width,
      timelineHeight - axisHeight
    );

    return { axisBBox, controllerBBox, timelineBBox };
  }

  private setBySliderValues(val: number | number[]) {
    const { data } = this;
    const [startRatio, endRatio] = Array.isArray(val) ? val : [0, val];
    const length = data.length;
    const startDatum = data[Math.floor(startRatio * length)];
    const endDatum = data[Math.ceil(endRatio * length) - (Array.isArray(val) ? 0 : 1)];
    // 如果 endDatum 不存在，则其已经比最大的时间范围更大
    this.states.values = [startDatum?.time ?? data[0].time, endDatum?.time ?? Infinity] as any;
  }

  private setByTimebarValues(val: TimebarStyleProps['values']) {
    const { data } = this;
    const [start, end] = Array.isArray(val) ? val : [undefined, val];
    const startDatum = data.find(({ time }) => time === start);
    const endDatum = data.find(({ time }) => time === end);
    this.states.values = [startDatum?.time ?? data[0]?.time, endDatum?.time ?? Infinity] as any;
  }

  private setByIndex(index: [number, number]) {
    const { data } = this;
    const [startIndex, endIndex] = index;
    this.states.values = [data[startIndex]?.time ?? data[0].time, this.data[endIndex]?.time ?? Infinity] as any;
  }

  /**
   * 获取 timebar 的 values
   */
  private get sliderValues(): [number, number] {
    const { values, selectionType } = this.states;
    const [start, end] = Array.isArray(values) ? values : [undefined, values];

    const { data } = this;
    const length = data.length;
    const isValue = selectionType === 'value';

    const getStartValue = () => {
      const startDatumIndex = data.findIndex(({ time }) => time === start);
      if (isValue) return 0;
      if (startDatumIndex > -1) return startDatumIndex / length;
      // value 模式下默认取 0
      return 0;
    };

    const getEndValue = () => {
      if (end === Infinity) return 1;
      const endDatumIndex = data.findIndex(({ time }) => time === end);
      if (endDatumIndex > -1) return endDatumIndex / length;
      // range 模式下默认取 1，value 模式下默认取 0.5
      if (isValue) return 0.5;
      return 1;
    };

    return [getStartValue(), getEndValue()];
  }

  public get values() {
    const { values, selectionType } = this.states;
    const [start, end] = Array.isArray(values) ? values : [this.data[0].time, values];
    if (selectionType === 'value') return end as number | Date;
    return [start, end] as [number, number] | [Date, Date];
  }

  private getDatumByRatio(ratio: number) {
    const { data } = this;
    const length = data.length;
    const index = Math.floor(ratio * (length - 1));
    return data[index];
  }

  private get chartHandleIconShape() {
    const { selectionType } = this.states;
    const {
      timelineBBox: { height },
    } = this.space;
    if (selectionType === 'range')
      return (type: any) => new ChartModeHandle({ style: { type, height, iconSize: height / 6 } });

    return () =>
      new Line({ style: { x1: 0, y1: -height / 2, x2: 0, y2: height / 2, lineWidth: 2, stroke: '#c8c8c8' } });
  }

  private getChartStyle(bbox: BBox): SliderStyleProps {
    const { x, y, width, height } = bbox;
    const { selectionType, chartType } = this.states;
    const { data } = this;
    const { type, labelFormatter: userDefinedLabelFormatter } = this.attributes;
    const { type: ignoreType, ...userDefinedChartStyle } = subStyleProps(this.attributes, 'chart');
    const isRange = selectionType === 'range';
    if (type === 'time') {
      return {
        handleIconShape: () => new TimeModeHandle({}),
        selectionFill: '#2e7ff8',
        selectionFillOpacity: 1,
        showLabelOnInteraction: true,
        handleLabelDy: isRange ? -15 : 0,
        autoFitLabel: isRange,
        handleSpacing: isRange ? -15 : 0,
        trackFill: '#edeeef',
        trackLength: width,
        trackOpacity: 0.5,
        trackRadius: height / 2,
        trackSize: height / 2,
        type: selectionType,
        values: this.sliderValues,
        formatter: (value) => {
          if (userDefinedLabelFormatter) return userDefinedLabelFormatter(value);
          const time = this.getDatumByRatio(value).time;
          if (typeof time === 'number') return parseBySeries(time);
          return formatTime(time, 'YYYY-MM-DD HH:mm:ss');
        },
        transform: `translate(${x}, ${y})`,
        // x,
        // y,
        zIndex: 1,
        ...userDefinedChartStyle,
      };
    }
    // type === 'chart'
    const handleIconOffset = selectionType === 'range' ? 5 : 0;
    const sparklineData = data.map(({ value }) => value);
    return {
      handleIconOffset,
      handleIconShape: this.chartHandleIconShape,
      selectionFill: '#fff',
      selectionFillOpacity: 0.5,
      selectionType: 'invert',
      sparklineSpacing: 0.1,
      sparklineColumnLineWidth: 0,
      sparklineColor: '#d4e5fd',
      sparklineAreaOpacity: 1,
      sparklineAreaLineWidth: 0,
      sparklineData,
      sparklineType: chartType,
      sparklineScale: 0.8,
      trackLength: width,
      trackSize: height,
      type: selectionType,
      values: this.sliderValues,
      // x,
      // y,
      transform: `translate(${x}, ${y})`,
      zIndex: 1,
      ...userDefinedChartStyle,
    };
  }

  private renderChart(bbox: BBox = this.space.timelineBBox) {
    this.timeline.update(this.getChartStyle(bbox));
  }

  private updateSelection() {
    this.timeline.setValues(this.sliderValues, true);
    this.handleSliderChange(this.sliderValues);
  }

  private getAxisStyle(bbox: BBox) {
    const { data } = this;
    const { interval, labelFormatter: userDefinedLabelFormatter } = this.attributes;
    const userDefinedAxisStyle = subStyleProps(this.attributes, 'axis');

    const { x, y, width } = bbox;
    // 需要补一个刻度
    const axisData = [...data, { time: 0 }].map(({ time }, index, arr) => ({
      label: `${time}`,
      value: index / (arr.length - 1),
      time,
    }));
    const style: Partial<LinearAxisStyleProps> = {
      startPos: [x, y],
      endPos: [x + width, y],
      data: axisData,
      // hide last label
      labelFilter: (_datum, index) => index < axisData.length - 1,
      labelFormatter: ({ time }) =>
        userDefinedLabelFormatter ? userDefinedLabelFormatter(time) : labelFormatter(time, interval),
      ...userDefinedAxisStyle,
    };
    return style;
  }

  private renderAxis(bbox: BBox = this.space.axisBBox) {
    const { type } = this.attributes;
    if (type !== 'chart') return;
    this.axis.update(this.getAxisStyle(bbox));
  }

  private renderController(bbox: BBox = this.space.controllerBBox) {
    const { type } = this.attributes;
    const { state, speed, selectionType, chartType } = this.states;
    const userDefinedControllerStyle = subStyleProps(this.attributes, 'controller');

    const that = this;

    const style: ControllerStyleProps = {
      ...bbox,
      iconSize: 20,
      speed,
      state,
      selectionType,
      chartType,
      onChange(type, { value }) {
        switch (type) {
          case 'reset':
            that.internalReset();
            break;
          case 'speed':
            that.handleSpeedChange(value);
            break;
          case 'backward':
            that.internalBackward();
            break;
          case 'playPause':
            if (value === 'play') that.internalPlay();
            else that.internalPause();
            break;
          case 'forward':
            that.internalForward();
            break;
          case 'selectionType':
            that.handleSelectionTypeChange(value);
            break;
          case 'chartType':
            that.handleChartTypeChange(value);
            break;
          default:
            break;
        }
      },
      ...userDefinedControllerStyle,
    };

    if (type === 'time') {
      style.functions = [['reset', 'speed'], ['backward', 'playPause', 'forward'], ['selectionType']];
    }

    this.controller.update(style);
  }

  private dispatchOnChange(prevValues?: any) {
    const { data } = this;
    const { onChange } = this.attributes;
    const { values, selectionType } = this.states;
    const [start, end] = values as any;
    const endTime = end === Infinity ? data.at(-1)!.time : end;
    const newValues = selectionType === 'range' ? [start, endTime] : endTime;

    const isEqual = (val1: TimebarStyleProps['values'], val2: TimebarStyleProps['values']) => {
      if (Array.isArray(val1)) {
        if (!Array.isArray(val2)) return false;
        if (val1[0] === val2[0]) {
          if (val1[1] === val2[1]) return true;
          if (val1[1] === Infinity || val2[1] === Infinity) return true;
        }
        return false;
      }
      if (Array.isArray(val2)) return false;
      return val1 === val2;
    };
    // 如果和当前值不同，才响应
    if (!prevValues || !isEqual(prevValues, newValues)) {
      onChange?.(selectionType === 'range' ? [start, endTime] : endTime);
    }
  }

  private handleSliderChange = (values: SliderStyleProps['values']) => {
    const prevValues: any = (() => {
      const val = this.states.values;
      if (Array.isArray(val)) return [...val];
      return val;
    })();

    this.setBySliderValues(values!);
    this.dispatchOnChange(prevValues);
  };

  private internalReset(preventEvent?: boolean) {
    const { selectionType } = this.states;
    this.internalPause();
    this.setBySliderValues(selectionType === 'range' ? [0, 1] : [0, 0]);
    this.renderController();
    this.updateSelection();
    if (!preventEvent) {
      this.attributes?.onReset?.();
      this.dispatchOnChange();
    }
  }

  public reset() {
    this.internalReset();
  }

  private moveSelection(direction: 'forward' | 'backward', preventEvent?: boolean) {
    const { data } = this;
    const length = data.length;
    const { values, selectionType, playMode } = this.states;
    const [startTime, endTime] = values!;
    const startIndex = data.findIndex(({ time }) => time === startTime);
    let endIndex = data.findIndex(({ time }) => time === endTime);
    if (endIndex === -1) endIndex = length;
    const diff = direction === 'backward' ? -1 : 1;
    let currentIndexes: [number, number];
    if (selectionType === 'range') {
      // end 后移一个时间间隔
      if (playMode === 'acc') {
        currentIndexes = [startIndex, endIndex + diff];
        // 如果回退过程中，start 和 end 相遇，则 end 重置到 length
        if (diff === -1 && startIndex === endIndex) {
          currentIndexes = [startIndex, length];
        }
      }
      // start, end 后移一个时间间隔
      else currentIndexes = [startIndex + diff, endIndex + diff];
    }
    // end 后移一个时间间隔
    else currentIndexes = [startIndex, endIndex + diff];

    const normalizeIndexes = (indexes: [number, number]): [number, number] => {
      // 先进行排序
      const [start, end] = indexes.sort((a, b) => a - b);
      // 保证 index 在 [0, length]
      const clampIndex = (index: number) => clamp(index, 0, length);
      // 如果 end 超出最大值
      if (end > length) {
        // value 模式下，重置到 0
        if (selectionType === 'value') return [0, 0];
        // 移动到 start
        if (playMode === 'acc') return [clampIndex(start), clampIndex(start)];
        // 整体移动到起始位置
        return [0, clampIndex(end - start)];
      }
      // 如果是倒放，到头时，整体移动到末尾
      if (start < 0) {
        if (playMode === 'acc') return [0, clampIndex(end)];
        return [clampIndex(start + length - end), length];
      }
      return [clampIndex(start), clampIndex(end)];
    };

    const normalizedIndexes = normalizeIndexes(currentIndexes);

    this.setByIndex(normalizedIndexes);
    this.updateSelection();
    return normalizedIndexes;
  }

  private internalBackward(preventEvent?: boolean) {
    const indexes = this.moveSelection('backward', preventEvent);
    if (!preventEvent) {
      this.attributes?.onBackward?.();
      this.dispatchOnChange();
    }

    return indexes;
  }

  public backward() {
    this.internalBackward();
  }

  private internalPlay(preventEvent?: boolean) {
    const { data } = this;
    const { loop } = this.attributes;
    const { speed = 1 } = this.states;
    this.playInterval = window.setInterval(() => {
      const indexes = this.internalForward();
      // 如果不是循环播放，则播放到最后一个值时暂停
      if (indexes[1] === data.length && !loop) {
        // 这里需要抛出暂停事件
        this.internalPause();
        this.renderController();
      }
    }, 1000 / speed);
    this.states.state = 'play';
    !preventEvent && this.attributes?.onPlay?.();
  }

  public play() {
    this.internalPlay();
  }

  private internalPause(preventEvent?: boolean) {
    clearInterval(this.playInterval);
    this.states.state = 'pause';
    !preventEvent && this.attributes?.onPause?.();
  }

  public pause() {
    this.internalPause();
  }

  private internalForward(preventEvent?: boolean) {
    const indexes = this.moveSelection('forward', preventEvent);
    if (!preventEvent) {
      this.attributes?.onForward?.();
      this.dispatchOnChange();
    }
    return indexes;
  }

  public forward() {
    this.internalForward();
  }

  private handleSpeedChange(value: number) {
    this.states.speed = value;
    const { state } = this.states;
    if (state === 'play') {
      // 重新设定 interval
      this.internalPause(true);
      this.internalPlay(true);
    }
    this.attributes?.onSpeedChange?.(value);
  }

  private handleSelectionTypeChange(type: TimebarStyleProps['selectionType']) {
    this.states.selectionType = type;
    this.renderChart();
    this.attributes?.onSelectionTypeChange?.(type);
  }

  private handleChartTypeChange(type: TimebarStyleProps['chartType']) {
    this.states.chartType = type;
    this.renderChart();
    this.attributes?.onChartTypeChange?.(type);
  }

  constructor(options: TimebarOptions) {
    super(deepAssign({}, Timebar.defaultOptions, options));
    const { selectionType, chartType, speed, state, playMode, values } = this.attributes;
    this.states = { chartType, playMode, selectionType, speed, state };
    this.setByTimebarValues(values);
  }

  render() {
    const { axisBBox, controllerBBox, timelineBBox } = this.space;
    this.renderController(controllerBBox);
    this.renderAxis(axisBBox);
    this.renderChart(timelineBBox);

    if (this.states.state === 'play') this.internalPlay();
  }

  destroy(): void {
    super.destroy();
    this.internalPause(true);
  }
}
