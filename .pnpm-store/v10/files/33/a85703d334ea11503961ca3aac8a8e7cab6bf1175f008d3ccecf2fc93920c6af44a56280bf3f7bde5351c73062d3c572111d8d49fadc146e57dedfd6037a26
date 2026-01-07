import type { Cursor } from '@antv/g';
import { CustomEvent } from '@antv/g';
import { clamp } from '@antv/util';
import type { GenericAnimation } from '../../animation';
import { transition } from '../../animation';
import { Component } from '../../core';
import { Group, Rect, Text } from '../../shapes';
import type { Selection } from '../../util';
import {
  getEventViewportPos,
  ifShow,
  parseSeriesAttr,
  select,
  subStyleProps,
  superStyleProps,
  toPrecision,
} from '../../util';
import type { SparklineStyleProps } from '../sparkline';
import { Sparkline } from '../sparkline';
import { CLASS_NAMES, HANDLE_DEFAULT_CFG, HANDLE_ICON_DEFAULT_CFG, HANDLE_LABEL_DEFAULT_CFG } from './constant';
import type { HandleType, IconStyleProps, LabelStyleProps } from './handle';
import { Handle, HandleStyleProps } from './handle';
import type { SliderOptions, SliderStyleProps } from './types';

export type { SliderOptions, SliderStyleProps };

export class Slider extends Component<SliderStyleProps> {
  public static tag = 'slider';

  private range = [0, 1];

  public get values(): [number, number] {
    return this.attributes.values as [number, number];
  }

  public set values(values: Required<SliderStyleProps>['values']) {
    this.attributes.values = this.clampValues(values);
  }

  /** 滑道、背景 */
  private trackShape!: Selection<Rect>;

  /** 刷选交互区域 */
  private brushArea!: Selection<Rect>;

  private foregroundGroup!: Selection<Group>;

  /** 前景、选区 */
  private selectionShape?: Selection<Rect>;

  /** 开始滑块 */
  private startHandle?: Handle;

  /** 结束滑块 */
  private endHandle?: Handle;

  /**
   * 选区开始的位置
   */
  private selectionStartPos: number;

  /**
   * 选区宽度
   */
  private selectionWidth: number;

  /**
   * 记录上一次鼠标事件所在坐标
   */
  private prevPos: number;

  /**
   * drag事件当前选中的对象
   */
  private target: string;

  private get sparklineStyle() {
    const { orientation } = this.attributes;
    if (orientation !== 'horizontal') return null;
    const attr = subStyleProps<SparklineStyleProps>(this.attributes, 'sparkline');
    return { zIndex: 0, ...this.availableSpace, ...attr };
  }

  private get shape() {
    const { trackLength, trackSize } = this.attributes;
    const [width, height] = this.getOrientVal([
      [trackLength, trackSize],
      [trackSize, trackLength],
    ]);
    return { width, height };
  }

  private get availableSpace() {
    const { x, y, padding } = this.attributes;
    const [top, right, bottom, left] = parseSeriesAttr(padding!);
    const { width, height } = this.shape;
    return {
      x: left,
      y: top,
      width: width! - (left + right),
      height: height! - (top + bottom),
    };
  }

  constructor(options: SliderOptions) {
    super(options, {
      x: 0,
      y: 0,
      animate: { duration: 100, fill: 'both' },
      brushable: true,
      formatter: (val: any) => val.toString(),
      handleSpacing: 2,
      orientation: 'horizontal',
      padding: 0,
      autoFitLabel: true,
      scrollable: true,
      selectionFill: '#5B8FF9',
      selectionFillOpacity: 0.45,
      selectionZIndex: 2,
      showHandle: true,
      showLabel: true,
      slidable: true,
      trackFill: '#416180',
      trackLength: 200,
      trackOpacity: 0.05,
      trackSize: 20,
      trackZIndex: -1,
      values: [0, 1],
      type: 'range',
      selectionType: 'select',
      handleIconOffset: 0,
      ...superStyleProps(HANDLE_DEFAULT_CFG, 'handle'),
      ...superStyleProps(HANDLE_ICON_DEFAULT_CFG, 'handleIcon'),
      ...superStyleProps(HANDLE_LABEL_DEFAULT_CFG, 'handleLabel'),
    });

    this.selectionStartPos = 0;
    this.selectionWidth = 0;
    this.prevPos = 0;
    this.target = '';
  }

  public getValues() {
    return this.values as [number, number];
  }

  /** 不触发重绘 */
  public setValues(values: Required<SliderStyleProps>['values'] = [0, 0], animate: boolean = false) {
    this.attributes.values = values;
    const animation = animate === false ? false : this.attributes.animate;

    this.updateSelectionArea(animation);
    this.updateHandlesPosition(animation);
  }

  private updateSelectionArea(animation: GenericAnimation) {
    const newSelectionArea = this.calcSelectionArea();
    this.foregroundGroup.selectAll(CLASS_NAMES.selection.class).each(function (datum, index) {
      transition(this, newSelectionArea[index], animation);
    });
  }

  private updateHandlesPosition(animation: GenericAnimation) {
    if (!this.attributes.showHandle) return;
    this.startHandle && transition(this.startHandle, this.getHandleStyle('start'), animation);
    this.endHandle && transition(this.endHandle, this.getHandleStyle('end'), animation);
  }

  private innerSetValues(values: Required<SliderStyleProps>['values'] = [0, 0], trigger: boolean = false) {
    const oldValues = this.values;
    const newValues = this.clampValues(values);
    this.attributes.values = newValues;
    this.setValues(newValues);
    if (trigger) {
      this.onValueChange(oldValues);
    }
  }

  private renderTrack(container: Group) {
    const { x, y } = this.attributes;
    const style = subStyleProps(this.attributes, 'track');

    this.trackShape = select(container)
      .maybeAppendByClassName(CLASS_NAMES.track, 'rect')
      .styles({ x, y, ...this.shape, ...style });
  }

  private renderBrushArea(container: Group) {
    const { x, y, brushable } = this.attributes;
    this.brushArea = select(container)
      .maybeAppendByClassName(CLASS_NAMES.brushArea, 'rect')
      .styles({
        x,
        y,
        fill: 'transparent',
        cursor: brushable ? 'crosshair' : 'default',
        ...this.shape,
      });
  }

  private renderSparkline(container: Group) {
    const { x, y, orientation } = this.attributes;
    const sparklineGroup = select(container).maybeAppendByClassName(CLASS_NAMES.sparklineGroup, 'g');

    ifShow(orientation === 'horizontal', sparklineGroup, (group) => {
      const style = { ...this.sparklineStyle!, x, y };
      group.maybeAppendByClassName(CLASS_NAMES.sparkline, () => new Sparkline({ style })).update(style);
    });
  }

  private renderHandles() {
    const { showHandle, type } = this.attributes;
    const availableHandle: HandleType[] = type === 'range' ? ['start', 'end'] : ['end'];
    const data = showHandle ? availableHandle : [];
    const that = this;

    this.foregroundGroup
      ?.selectAll(CLASS_NAMES.handle.class)
      .data(
        data.map((type) => ({ type })),
        (d) => d.type
      )
      .join(
        (enter) =>
          enter
            .append(({ type }) => new Handle({ style: this.getHandleStyle(type) }))
            .each(function ({ type }) {
              this.attr('class', `${CLASS_NAMES.handle.name} ${type}-handle`);
              const name = `${type}Handle` as `${HandleType}Handle`;
              that[name] = this;
              this.addEventListener('pointerdown', that.onDragStart(type));
            }),
        (update) =>
          update.each(function ({ type }) {
            this.update(that.getHandleStyle(type));
          }),
        (exit) =>
          exit
            .each(({ type }) => {
              const name = `${type}Handle` as `${HandleType}Handle`;
              that[name] = undefined;
            })
            .remove()
      );
  }

  private renderSelection(container: Group) {
    const { x, y, type, selectionType } = this.attributes;
    this.foregroundGroup = select(container).maybeAppendByClassName(CLASS_NAMES.foreground, 'g');

    // value 类型的 slider 不渲染选区
    const selectionStyle = subStyleProps(this.attributes, 'selection');
    const applyStyle = (selection: Selection) => {
      return selection
        .style('visibility', (d: any) => (d.show ? 'visible' : 'hidden'))
        .style('cursor', (d: any) => {
          if (selectionType === 'select') return 'grab';
          if (selectionType === 'invert') return 'crosshair';
          return 'default';
        })
        .styles({
          ...selectionStyle,
          transform: `translate(${x}, ${y})`,
        });
    };

    const that = this;
    this.foregroundGroup
      .selectAll(CLASS_NAMES.selection.class)
      .data(
        type === 'value'
          ? []
          : this.calcSelectionArea().map((area, index) => ({
              style: {
                ...area,
              },
              index,
              // 是否可见
              show: selectionType === 'select' ? index === 1 : index !== 1,
            })),
        (d) => d.index
      )
      .join(
        (enter) =>
          enter
            .append('rect')
            .attr('className', CLASS_NAMES.selection.name)
            .call(applyStyle)
            .each(function (datum, index) {
              if (index === 1) {
                that.selectionShape = select(this);
                // 选区drag事件
                this.on('pointerdown', (e: any) => {
                  this.attr('cursor', 'grabbing');
                  that.onDragStart('selection')(e);
                });
                // 选区hover事件
                that.dispatchCustomEvent(this, 'pointerenter', 'selectionMouseenter');
                that.dispatchCustomEvent(this, 'pointerleave', 'selectionMouseleave');
                that.dispatchCustomEvent(this, 'click', 'selectionClick');

                // 拖拽交互
                this.addEventListener('pointerdown', () => {
                  this.attr('cursor', 'grabbing');
                });
                this.addEventListener('pointerup', () => {
                  this.attr('cursor', 'pointer');
                });
                this.addEventListener('pointerover', () => {
                  this.attr('cursor', 'pointer');
                });
              } else {
                this.on('pointerdown', that.onDragStart('track'));
              }
            }),
        (update) => update.call(applyStyle),
        (exit) => exit.remove()
      );
    this.updateSelectionArea(false);
    this.renderHandles();
  }

  public render(attributes: SliderStyleProps, container: Group) {
    this.renderTrack(container);
    this.renderSparkline(container);
    this.renderBrushArea(container);
    this.renderSelection(container);
  }

  private clampValues(values?: Required<SliderStyleProps>['values'], precision = 4): [number, number] {
    const [min, max] = this.range;
    const [prevStart, prevEnd] = this.getValues().map((num) => toPrecision(num, precision));
    const internalValues = Array.isArray(values) ? values : [prevStart, values ?? prevEnd];
    let [startVal, endVal] = (internalValues || [prevStart, prevEnd]).map((num) => toPrecision(num, precision));

    if (this.attributes.type === 'value') return [0, clamp(endVal, min, max)];

    // 交换startVal endVal
    if (startVal > endVal) {
      [startVal, endVal] = [endVal, startVal];
    }
    const range = endVal - startVal;
    // 超出范围就全选
    if (range > max - min) return [min, max];

    if (startVal < min) {
      if (prevStart === min && prevEnd === endVal) return [min, endVal];
      return [min, range + min];
    }
    if (endVal > max) {
      if (prevEnd === max && prevStart === startVal) return [startVal, max];
      return [max - range, max];
    }

    // 保留小数
    return [startVal, endVal];
  }

  /**
   * 计算选区坐标和宽高
   * 默认用来计算前景位置大小
   */
  private calcSelectionArea(values?: [number, number]) {
    const [start, end] = this.clampValues(values);
    const { x, y, width, height } = this.availableSpace;

    // 中间为选区，两端为反选区
    return this.getOrientVal([
      [
        { y, height, x, width: start * width },
        { y, height, x: start * width + x, width: (end - start) * width },
        { y, height, x: end * width, width: (1 - end) * width },
      ],
      [
        { x, width, y, height: start * height },
        { x, width, y: start * height + y, height: (end - start) * height },
        { x, width, y: end * height, height: (1 - end) * height },
      ],
    ]);
  }

  /**
   * 计算手柄的x y
   */
  private calcHandlePosition(handleType: HandleType) {
    const { handleIconOffset } = this.attributes;
    const { x, y, width, height } = this.availableSpace;
    const [stVal, endVal] = this.clampValues();
    const offset = handleType === 'start' ? -handleIconOffset : handleIconOffset;
    const L = (handleType === 'start' ? stVal : endVal) * this.getOrientVal([width, height]) + offset;
    return {
      x: x + this.getOrientVal([L, width / 2]),
      y: y + this.getOrientVal([height / 2, L]),
    };
  }

  private inferTextStyle(handleType: HandleType): Record<string, any> {
    const { orientation } = this.attributes;
    if (orientation === 'horizontal') return {};
    if (handleType === 'start') return { transformOrigin: 'left center', transform: 'rotate(90)', textAlign: 'start' };
    if (handleType === 'end') return { transformOrigin: 'right center', transform: 'rotate(90)', textAlign: 'end' };
    return {};
  }

  /**
   * 计算手柄应当处于的位置
   * @param handleType start手柄还是end手柄
   * @returns
   */
  private calcHandleText(handleType: HandleType) {
    const { type, orientation, formatter, autoFitLabel } = this.attributes;
    const handleStyle = subStyleProps(this.attributes, 'handle');
    const labelStyle = subStyleProps(handleStyle, 'label');
    const { spacing } = handleStyle;
    const size = this.getHandleSize();
    const values = this.clampValues();

    const value = handleType === 'start' ? values[0] : values[1];
    const text = formatter(value);

    const temp = new Text({
      style: {
        ...labelStyle,
        ...this.inferTextStyle(handleType),
        text,
      },
    });
    // 文字包围盒的宽高
    const { width: textWidth, height: textHeight } = temp.getBBox();
    temp.destroy();

    if (!autoFitLabel) {
      if (type === 'value') return { text, x: 0, y: -textHeight - spacing };
      const finaleWidth = spacing + size + (orientation === 'horizontal' ? textWidth / 2 : 0);
      return { text, [orientation === 'horizontal' ? 'x' : 'y']: handleType === 'start' ? -finaleWidth : finaleWidth };
    }

    let x = 0;
    let y = 0;
    // 相对于获取两端可用空间
    const { width: iW, height: iH } = this.availableSpace;
    const { x: fX, y: fY, width: fW, height: fH } = this.calcSelectionArea()[1];
    const totalSpacing = spacing + size;
    if (orientation === 'horizontal') {
      const finalWidth = totalSpacing + textWidth / 2;
      if (handleType === 'start') {
        const left = fX - totalSpacing - textWidth;
        x = left > 0 ? -finalWidth : finalWidth;
      } else {
        const sign = iW - fX - fW - totalSpacing > textWidth;
        x = sign ? finalWidth : -finalWidth;
      }
    } else {
      const positiveSize = totalSpacing;
      const negativeSize = textHeight + totalSpacing;
      if (handleType === 'start') {
        y = fY - size > textHeight ? -negativeSize : positiveSize;
      } else {
        y = iH - (fY + fH) - size > textHeight ? negativeSize : -positiveSize;
      }
    }
    return { x, y, text };
  }

  private getHandleLabelStyle(handleType: HandleType): LabelStyleProps {
    const style = subStyleProps(this.attributes, 'handleLabel');
    return {
      ...style,
      ...this.calcHandleText(handleType),
      ...this.inferTextStyle(handleType),
    };
  }

  private getHandleIconStyle(): IconStyleProps {
    const { handleIconShape: shape } = this.attributes;
    const style = subStyleProps(this.attributes, 'handleIcon');
    const cursor = this.getOrientVal(['ew-resize', 'ns-resize']) as Cursor;
    const size = this.getHandleSize();

    return {
      cursor,
      shape,
      size,
      ...style,
    };
  }

  private getHandleStyle(handleType: HandleType): HandleStyleProps {
    const { x: ox, y: oy, showLabel, showLabelOnInteraction, orientation } = this.attributes;
    const { x, y } = this.calcHandlePosition(handleType);
    const textStyle = this.calcHandleText(handleType);

    let internalShowLabel = showLabel;
    if (!showLabel && showLabelOnInteraction) {
      if (this.target) internalShowLabel = true;
      else internalShowLabel = false;
    }

    return {
      ...superStyleProps(this.getHandleIconStyle(), 'icon'),
      ...superStyleProps({ ...this.getHandleLabelStyle(handleType), ...textStyle }, 'label'),
      transform: `translate(${x + ox}, ${y + oy})`,
      orientation,
      showLabel: internalShowLabel,
      type: handleType,
      zIndex: 3,
    } as const;
  }

  private getHandleSize() {
    const { handleIconSize: size, width, height } = this.attributes;
    if (size) return size;
    // 没设置 size 的话，高度就取 height + 4 高度，手柄宽度是高度的 1/ 2.4
    return Math.floor((this.getOrientVal([+height!, +width!]) + 4) / 2.4);
  }

  private getOrientVal<T>([x, y]: [T, T]): T {
    const { orientation } = this.attributes;
    return orientation === 'horizontal' ? x : y;
  }

  private setValuesOffset(stOffset: number, endOffset: number = 0) {
    const { type } = this.attributes;
    const [oldStartVal, oldEndVal] = this.getValues();
    const internalStartOffset = type === 'range' ? stOffset : 0;
    const values = [oldStartVal + internalStartOffset, oldEndVal + endOffset].sort() as [number, number];
    this.innerSetValues(values, true);
  }

  private getRatio(val: number) {
    const { width, height } = this.availableSpace;
    return val / this.getOrientVal([width, height]);
  }

  private dispatchCustomEvent(target: Selection, event: string, name: string) {
    target.on(event, (e: MouseEvent) => {
      e.stopPropagation();
      this.dispatchEvent(new CustomEvent(name, { detail: e }));
    });
  }

  public bindEvents() {
    // scroll 事件
    this.addEventListener('wheel', this.onScroll);
    const brushArea = this.brushArea;
    this.dispatchCustomEvent(brushArea, 'click', 'trackClick');
    this.dispatchCustomEvent(brushArea, 'pointerenter', 'trackMouseenter');
    this.dispatchCustomEvent(brushArea, 'pointerleave', 'trackMouseleave');
    // Drag and brush
    brushArea.on('pointerdown', this.onDragStart('track'));
  }

  private onScroll(event: WheelEvent) {
    const { scrollable } = this.attributes;
    if (scrollable) {
      const { deltaX, deltaY } = event;
      const offset = deltaY || deltaX;
      const deltaVal = this.getRatio(offset);

      this.setValuesOffset(deltaVal, deltaVal);
    }
  }

  private onDragStart = (target: string) => (e: any) => {
    e.stopPropagation();
    this.target = target;
    this.prevPos = this.getOrientVal(getEventViewportPos(e));
    const { x, y } = this.availableSpace;
    const { x: X, y: Y } = this.getBBox();
    this.selectionStartPos = this.getRatio(this.prevPos - this.getOrientVal([x, y]) - this.getOrientVal([+X!, +Y!]));
    this.selectionWidth = 0;
    document.addEventListener('pointermove', this.onDragging);
    document.addEventListener('pointerup', this.onDragEnd);
  };

  private onDragging = (e: PointerEvent) => {
    const { slidable, brushable, type } = this.attributes;
    e.stopPropagation();

    const currPos = this.getOrientVal(getEventViewportPos(e));
    const diffPos = currPos - this.prevPos;

    if (!diffPos) return;
    const deltaVal = this.getRatio(diffPos);

    switch (this.target) {
      case 'start':
        if (slidable) this.setValuesOffset(deltaVal);
        break;
      case 'end':
        if (slidable) this.setValuesOffset(0, deltaVal);
        break;
      case 'selection':
        if (slidable) this.setValuesOffset(deltaVal, deltaVal);
        break;
      case 'track':
        if (!brushable) return;
        // 绘制蒙板
        this.selectionWidth += deltaVal;
        if (type === 'range') {
          this.innerSetValues(
            [this.selectionStartPos, this.selectionStartPos + this.selectionWidth].sort() as [number, number],
            true
          );
        } else this.innerSetValues([0, this.selectionStartPos + this.selectionWidth], true);

        break;
      default:
        break;
    }

    this.prevPos = currPos;
  };

  private onDragEnd = () => {
    document.removeEventListener('pointermove', this.onDragging);
    document.removeEventListener('pointermove', this.onDragging);
    document.removeEventListener('pointerup', this.onDragEnd);
    this.target = '';
    // 更新 handle 状态
    this.updateHandlesPosition(false);
  };

  private onValueChange = (oldValue: [number, number]) => {
    const { onChange, type } = this.attributes;
    const internalOldValue = type === 'range' ? oldValue : oldValue[1];
    const value = type === 'range' ? this.getValues() : this.getValues()[1];
    const evt = new CustomEvent('valuechange', {
      detail: { oldValue: internalOldValue, value },
    });
    this.dispatchEvent(evt);
    onChange?.(value);
  };
}
