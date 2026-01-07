import { CustomEvent } from '@antv/g';
import { Linear } from '@antv/scale';
import { clamp, isUndefined } from '@antv/util';
import { Component } from '../../core';
import type { DisplayObject, TextStyleProps } from '../../shapes';
import { Group } from '../../shapes';
import { Point } from '../../types';
import {
  BBox,
  Selection,
  deepAssign,
  getEventPos,
  hide,
  ifShow,
  select,
  show,
  subStyleProps,
  superStyleProps,
  toPrecision,
} from '../../util';
import type { LinearAxisStyleProps } from '../axis';
import { Axis } from '../axis';
import { CLASS_NAMES as AXIS_CLASS_NAMES } from '../axis/constant';
import type { IndicatorStyleProps } from '../indicator';
import { Indicator } from '../indicator';
import { Handle as SliderHandle } from '../slider/handle';
import { Title } from './title';
import { CLASS_NAMES, CLASSNAME_SUFFIX_MAP, CONTINUOUS_DEFAULT_OPTIONS, STEP_RATIO } from './constant';
import { getLegendClassName } from './utils/classname';
import type { HandleStyleProps, HandleType } from './continuous/handle';
import { Handle } from './continuous/handle';
import type { RibbonStyleProps } from './continuous/ribbon';
import { Ribbon } from './continuous/ribbon';
import { getNextTickValue } from './continuous/utils';
import { ContinuousDatum, ContinuousOptions, ContinuousStyleProps } from './types';
import { getSafetySelections, getStepValueByValue, ifHorizontal } from './utils';

export type { ContinuousOptions, ContinuousStyleProps };

function getMinMax(data: ContinuousDatum[]) {
  return {
    min: Math.min(...data.map((d) => d.value)),
    max: Math.max(...data.map((d) => d.value)),
  };
}

export class Continuous extends Component<ContinuousStyleProps> {
  constructor(options: ContinuousOptions) {
    super(options, CONTINUOUS_DEFAULT_OPTIONS);
  }

  protected eventToOffsetScale = new Linear({});

  protected innerRibbonScale = new Linear({});

  protected title?: Title;

  protected label!: Axis;

  protected ribbon!: Selection;

  protected indicator!: Selection;

  protected get handleOffsetRatio() {
    return this.ifHorizontal(0.5, 0.5);
  }

  protected handlesGroup!: Selection;

  protected startHandle?: Handle;

  protected endHandle?: Handle;

  public getBBox(): DOMRect {
    const { width, height } = this.attributes;
    return new BBox(0, 0, width, height);
  }

  public render(attributes: Required<ContinuousStyleProps>, container: Group) {
    // Set root container className
    const { classNamePrefix } = attributes;
    const baseClassName = container.className || 'legend-continuous';
    if (classNamePrefix) {
      container.attr('className', `${baseClassName} ${classNamePrefix}legend`);
    } else if (!container.className) {
      container.attr('className', 'legend-continuous');
    }

    // 渲染顺序
    // 1. 绘制 title, 获得可用空间
    // 2. 绘制 label, handle
    // 3. 基于可用空间、label高度、handle 宽高，计算 ribbon 宽高
    // 4. 绘制 ribbon
    // 5. 调整 label、handle 位置
    const { showLabel } = attributes;

    /** title */
    this.renderTitle(select(container));

    const { x, y } = this.availableSpace;

    /** label */

    /** content */
    const contentGroup = select(container)
      .maybeAppendByClassName(CLASS_NAMES.contentGroup, 'g')
      .styles({ transform: `translate(${x}, ${y})` });

    const labelGroup = contentGroup.maybeAppendByClassName(CLASS_NAMES.labelGroup, 'g').styles({ zIndex: 1 });
    ifShow(!!showLabel, labelGroup, (group) => {
      this.renderLabel(group);
    });

    const ribbonGroup = contentGroup.maybeAppendByClassName(CLASS_NAMES.ribbonGroup, 'g').styles({ zIndex: 0 });

    /** handle */
    this.handlesGroup = contentGroup.maybeAppendByClassName(CLASS_NAMES.handlesGroup, 'g').styles({ zIndex: 2 });
    this.renderHandles();

    /** ribbon */
    this.renderRibbon(ribbonGroup);

    this.renderIndicator(contentGroup);

    /** adjust */
    this.adjustLabel();
    this.adjustHandles();
    // this.adjustTitle();
  }

  private get range() {
    const { data, domain } = this.attributes;
    return domain ? { min: domain[0], max: domain[1] } : getMinMax(data);
  }

  private get ribbonScale() {
    const { min, max } = this.range;
    this.innerRibbonScale.update({
      domain: [min, max],
      range: [0, 1],
    });
    return this.innerRibbonScale;
  }

  private get ribbonRange() {
    const [min, max] = this.selection;
    const scale = this.ribbonScale;
    return [scale.map(min), scale.map(max)];
  }

  public get selection() {
    const { min, max } = this.range;
    const { defaultValue: [start, end] = [min, max] } = this.attributes;
    return [start, end] as [number, number];
  }

  protected ifHorizontal<T>(a: T, b: T): T {
    return ifHorizontal(
      this.attributes.orientation,
      typeof a === 'function' ? a() : a,
      typeof b === 'function' ? b() : b
    );
  }

  private renderTitle(container: Selection) {
    const { showTitle, titleText, width, height, classNamePrefix } = this.attributes;
    const style = subStyleProps<TextStyleProps>(this.attributes, 'title');
    const finalTitleStyle = { ...style, width, height, text: titleText, classNamePrefix };
    const that = this;
    container
      .selectAll(CLASS_NAMES.title.class)
      .data(showTitle ? [titleText] : [])
      .join(
        (enter) =>
          enter
            .append(() => new Title({ style: finalTitleStyle }))
            .attr('className', CLASS_NAMES.title.name)
            .each(function () {
              that.title = this;
            }),
        (update) => update.update(finalTitleStyle),
        (exit) =>
          exit
            .each(() => {
              that.title = undefined;
            })
            .remove()
      );
  }

  private get availableSpace() {
    if (this.title) return this.title.getAvailableSpace();
    const { width, height } = this.attributes;
    return new BBox(0, 0, width, height);
  }

  private get labelFixedSpacing() {
    const { showTick } = this.attributes;
    return showTick ? 5 : 0;
  }

  private get labelPosition() {
    const { orientation, labelDirection } = this.attributes;
    const positions = {
      vertical: { positive: 'right', negative: 'left' },
      horizontal: { positive: 'bottom', negative: 'top' },
    } as const;
    return positions[orientation][labelDirection];
  }

  private cacheLabelBBox: DOMRect | null = null;

  private get labelBBox() {
    const { showLabel } = this.attributes;
    if (!showLabel) return new BBox(0, 0, 0, 0);
    if (this.cacheLabelBBox) return this.cacheLabelBBox;
    const { width, height } = (
      this.label.querySelector(AXIS_CLASS_NAMES.labelGroup.class)?.children.slice(-1)[0] as DisplayObject
    ).getBBox();
    this.cacheLabelBBox = new BBox(0, 0, width, height);
    return this.cacheLabelBBox;
  }

  private get labelShape() {
    const { showLabel, labelSpacing = 0 } = this.attributes;
    if (!showLabel) return { width: 0, height: 0, size: 0, length: 0 };
    const { width, height } = this.labelBBox;
    const size = this.ifHorizontal(height, width) + labelSpacing + this.labelFixedSpacing;
    const length = this.ifHorizontal(width, height);
    return { width, height, size, length };
  }

  private get ribbonBBox(): DOMRect {
    const { showHandle, ribbonSize: userDefinedRibbonSize } = this.attributes;
    const { width: availableWidth, height: availableHeight } = this.availableSpace;

    const { size: labelSize, length: labelLength } = this.labelShape;

    const [availableSize, availableLength] = this.ifHorizontal(
      [availableHeight, availableWidth],
      [availableWidth, availableHeight]
    );
    const { size: handleSize, length: handleLength } = showHandle ? this.handleShape : { size: 0, length: 0 };
    const handleRatio = this.handleOffsetRatio;

    let ribbonSize = 0;
    const labelPosition = this.labelPosition;
    if (userDefinedRibbonSize) {
      ribbonSize = userDefinedRibbonSize;
    } else if (['bottom', 'right'].includes(labelPosition)) {
      ribbonSize = Math.min(availableSize - labelSize, (availableSize - handleSize) / handleRatio);
    } else if (availableSize * (1 - handleRatio) > handleSize) {
      ribbonSize = Math.max(availableSize - labelSize, 0);
    } else ribbonSize = Math.max((availableSize - labelSize - handleSize) / handleRatio, 0);

    const edgeLength = Math.max(handleLength, labelLength);
    const ribbonLength = availableLength - edgeLength;

    const [width, height] = this.ifHorizontal([ribbonLength, ribbonSize], [ribbonSize, ribbonLength]);

    // 需要考虑 handle 的占用空间
    // todo 为了防止因为 handle 文本变化导致的 ribbon 位置变化，handle size 取最大值
    const finalLabelOccupy = ['top', 'left'].includes(labelPosition) ? labelSize : 0;

    const [x, y] = this.ifHorizontal([edgeLength / 2, finalLabelOccupy], [finalLabelOccupy, edgeLength / 2]);

    return new BBox(x, y, width, height);
  }

  private get ribbonShape() {
    const { width, height } = this.ribbonBBox;
    return this.ifHorizontal({ size: height, length: width }, { size: width, length: height });
  }

  private renderRibbon(container: Selection) {
    const { data, type, orientation, color, block, classNamePrefix } = this.attributes;
    const ribbonStyle = subStyleProps(this.attributes, 'ribbon');
    const { min, max } = this.range;
    const { x, y } = this.ribbonBBox;
    const { length, size } = this.ribbonShape;
    const style: Required<RibbonStyleProps> = deepAssign(
      {
        transform: `translate(${x}, ${y})`,
        length,
        size,
        type,
        orientation,
        color,
        block,
        partition: data.map((d) => (d.value - min) / (max - min)),
        range: this.ribbonRange,
        classNamePrefix,
      },
      ribbonStyle
    );

    const ribbonClassName = getLegendClassName(CLASS_NAMES.ribbon.name, CLASSNAME_SUFFIX_MAP.ribbon, classNamePrefix);
    this.ribbon = container
      .maybeAppendByClassName(
        CLASS_NAMES.ribbon,
        () =>
          new Ribbon({
            style,
            className: ribbonClassName,
          })
      )
      .update(style);
  }

  private getHandleClassName(type: HandleType) {
    // @ts-ignore
    return `${CLASS_NAMES.prefix(`${type}-handle`)}`;
  }

  private renderHandles() {
    const { showHandle, orientation, classNamePrefix } = this.attributes;
    const handleStyle = subStyleProps<HandleStyleProps>(this.attributes, 'handle');
    const [min, max] = this.selection;
    const style = { ...handleStyle, orientation, classNamePrefix };
    const { shape = 'slider' } = handleStyle;
    const HandleCtor = shape === 'basic' ? Handle : SliderHandle;

    const that = this;
    const baseHandleClassName = getLegendClassName(
      CLASS_NAMES.handle.name,
      CLASSNAME_SUFFIX_MAP.handle,
      classNamePrefix
    );
    this.handlesGroup
      .selectAll(CLASS_NAMES.handle.class)
      .data(
        showHandle
          ? [
              { value: min, type: 'start' },
              { value: max, type: 'end' },
            ]
          : [],
        (d) => d.type
      )
      .join(
        (enter) =>
          enter
            .append(() => new HandleCtor({ style, className: baseHandleClassName }))
            .attr(
              'className',
              ({ type }: any) => `${baseHandleClassName} ${that.getHandleClassName(type as HandleType)}`
            )
            .each(function ({ type, value: labelText }) {
              this.update({ labelText });
              const name = `${type}Handle` as `${HandleType}Handle`;
              that[name] = this;
              this.addEventListener('pointerdown', that.onDragStart(type));
            }),
        (update) =>
          update.update(style).each(function ({ value: labelText }) {
            this.update({ labelText });
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

  private adjustHandles() {
    const [min, max] = this.selection;
    this.setHandlePosition('start', min);
    this.setHandlePosition('end', max);

    // Update SliderHandle sub-elements className after rendering
    const { classNamePrefix, showHandle } = this.attributes;
    const { shape = 'slider' } = subStyleProps<HandleStyleProps>(this.attributes, 'handle');
    if (showHandle && shape === 'slider' && classNamePrefix) {
      if (this.startHandle) this.updateSliderHandleClassNames(this.startHandle, classNamePrefix);
      if (this.endHandle) this.updateSliderHandleClassNames(this.endHandle, classNamePrefix);
    }
  }

  /**
   * Update SliderHandle sub-elements className to use legend prefix
   * SliderHandle generates: handle-icon-rect, handle-icon-line, handle-label
   * Should add legend className: g2-legend-handle-marker, g2-legend-handle-label
   */
  private updateSliderHandleClassNames(handle: any, classNamePrefix: string) {
    // Get the actual DOM node from the component
    const container = handle.container || handle;

    // Update icon elements (rect and lines) to use handleMarker suffix
    const iconRect = container.querySelector('.handle-icon-rect');
    if (iconRect) {
      const markerClassName = getLegendClassName(
        'handle-icon-rect',
        CLASSNAME_SUFFIX_MAP.handleMarker,
        classNamePrefix
      );
      iconRect.setAttribute('class', markerClassName);

      // Line elements are children of rect element
      const iconLines = iconRect.querySelectorAll('line');
      iconLines.forEach((line: any) => {
        const currentClass = line.getAttribute('class') || '';
        const baseClass = currentClass.split(' ')[0]; // e.g., 'handle-icon-line-1'
        const markerClassName = getLegendClassName(baseClass, CLASSNAME_SUFFIX_MAP.handleMarker, classNamePrefix);
        line.setAttribute('class', markerClassName);
      });
    }

    // Update label element to use handleLabel suffix
    const label = container.querySelector('.handle-label');
    if (label) {
      const labelClassName = getLegendClassName('handle-label', CLASSNAME_SUFFIX_MAP.handleLabel, classNamePrefix);
      label.setAttribute('class', labelClassName);
    }
  }

  private cacheHandleBBox: DOMRect | null = null;

  private get handleBBox() {
    if (this.cacheHandleBBox) return this.cacheHandleBBox;
    if (!this.attributes.showHandle) return new BBox(0, 0, 0, 0);
    const { width: startHandleWidth, height: startHandleHeight } = this.startHandle!.getBBox();
    const { width: endHandleWidth, height: endHandleHeight } = this.endHandle!.getBBox();
    const [width, height] = [Math.max(startHandleWidth, endHandleWidth), Math.max(startHandleHeight, endHandleHeight)];
    this.cacheHandleBBox = new BBox(0, 0, width, height);
    return this.cacheHandleBBox;
  }

  /**
   *  因为 handle label 的宽高是动态的，所以 handle bbox 是第一次渲染时的 bbox
   */
  private get handleShape() {
    const { width, height } = this.handleBBox;
    const [size, length] = this.ifHorizontal([height, width], [width, height]);
    return { width, height, size, length };
  }

  private setHandlePosition(type: HandleType, value: number) {
    const { handleFormatter } = this.attributes;
    const { x: ribbonX, y: ribbonY } = this.ribbonBBox;
    const { size: ribbonSize } = this.ribbonShape;
    const offset = this.getOffset(value);
    const [x, y] = this.ifHorizontal(
      [ribbonX + offset, ribbonY + ribbonSize * this.handleOffsetRatio],
      [ribbonX + ribbonSize * this.handleOffsetRatio, ribbonY + offset]
    );
    const handle: Handle = this.handlesGroup.select(`.${this.getHandleClassName(type)}`).node();
    handle?.update({ transform: `translate(${x}, ${y})`, formatter: handleFormatter });
  }

  private renderIndicator(container: Selection) {
    const { classNamePrefix } = this.attributes;
    const style = subStyleProps<IndicatorStyleProps>(this.attributes, 'indicator');
    const indicatorClassName = getLegendClassName(
      CLASS_NAMES.indicator.name,
      CLASSNAME_SUFFIX_MAP.indicator,
      classNamePrefix
    );
    this.indicator = container
      .maybeAppendByClassName(
        CLASS_NAMES.indicator,
        () =>
          new Indicator({
            style,
            className: indicatorClassName,
          })
      )
      .update(style);
    // this.hideIndicator();
  }

  private get labelData(): ContinuousDatum[] {
    const { data } = this.attributes;
    return data.reduce((acc, curr, index, arr) => {
      const id = curr?.id ?? index.toString();
      acc.push({
        ...curr,
        id,
        index,
        type: 'value',
        label: curr?.label ?? curr.value.toString(),
        value: this.ribbonScale.map(curr.value),
      });
      if (index < arr.length - 1) {
        const next = arr[index + 1];
        const [cr, nx] = [curr.value, next.value];
        const midVal = (cr + nx) / 2;
        acc.push({
          ...curr,
          id,
          index,
          type: 'range',
          range: [cr, nx],
          label: [cr, nx].join('~'),
          value: this.ribbonScale.map(midVal),
        });
      }
      return acc;
    }, [] as ContinuousDatum[]);
  }

  private get labelStyle() {
    let [labelTextAlign, labelTextBaseline] = ['center', 'middle'];

    const labelPosition = this.labelPosition;
    if (labelPosition === 'top') labelTextBaseline = 'bottom';
    else if (labelPosition === 'bottom') labelTextBaseline = 'top';
    else if (labelPosition === 'left') labelTextAlign = 'end';
    else if (labelPosition === 'right') labelTextAlign = 'start';

    return {
      labelTextAlign,
      labelTextBaseline,
    };
  }

  private renderLabel(container: Selection) {
    const { showTick = false, labelFilter, labelFormatter } = this.attributes;
    const tickStyle = subStyleProps(this.attributes, 'tick');
    const labelStyle = subStyleProps(this.attributes, 'label');
    const { align } = labelStyle;

    const style = deepAssign(
      {
        showLine: false,
        showGrid: false,
        showTick,
        type: 'linear',
        startPos: [0, 0],
        endPos: [0, 0],
        tickDirection: 'negative',
        labelTransform: 'rotate(0)',
        ...this.labelStyle,
      },
      superStyleProps(tickStyle, 'tick'),
      superStyleProps(labelStyle, 'label'),
      { data: this.labelData }
    ) as LinearAxisStyleProps;

    const functionStyle = {
      tickFilter: (datum: ContinuousDatum, index: number, data: ContinuousDatum[]) => {
        if (datum?.type !== 'value') return false;
        if (labelFilter)
          return labelFilter(
            datum,
            datum.index,
            data.filter((d) => d.type !== 'value')
          );
        return true;
      },
      labelFilter: (datum: ContinuousDatum, index: number, data: ContinuousDatum[]) => {
        if (datum?.type !== align) return false;
        if (labelFilter)
          return labelFilter(
            datum,
            datum.index,
            data.filter((d) => d.type === align)
          );
        return true;
      },
      labelFormatter,
    };

    const finalLabelStyle = { ...style, ...functionStyle, labelOverlap: [{ type: 'hide' }] } as LinearAxisStyleProps;

    this.label = container.maybeAppendByClassName(CLASS_NAMES.label, () => new Axis({ style: finalLabelStyle })).node();
    this.label.update(finalLabelStyle, false);
  }

  private get labelAxisStyle() {
    // @ts-ignore
    const { showTick, labelDirection, labelSpacing, tickLength: definedTickLength } = this.attributes;

    const { size: ribbonSize } = this.ribbonShape;
    const labelPosition = this.labelPosition;
    const labelFixedSpacing = this.labelFixedSpacing;
    let [offset, spacing, tickLength] = [0, 0, 0];

    const internalVal = definedTickLength ?? ribbonSize;

    if (showTick) {
      tickLength = internalVal;
      spacing = labelFixedSpacing;
      if (labelDirection === 'positive') {
        if (labelPosition === 'right') {
          offset = internalVal;
          tickLength = internalVal;
        } else if (labelPosition === 'bottom') offset = tickLength;
      } else if (labelDirection === 'negative') {
        if (labelPosition === 'top') offset = ribbonSize;
        else if (labelPosition === 'left') offset = ribbonSize;
      }
    } else if (labelDirection === 'positive') {
      if (labelPosition === 'right') spacing = internalVal;
      else if (labelPosition === 'bottom') {
        offset = ribbonSize + labelFixedSpacing;
        spacing = labelSpacing;
      }
    } else if (labelDirection === 'negative') {
      if (labelPosition === 'left') spacing = labelSpacing;
      else if (labelPosition === 'top') spacing = labelSpacing;
    }

    return { offset, spacing, tickLength };
  }

  private adjustLabel() {
    const { showLabel } = this.attributes as Required<ContinuousStyleProps>;
    if (!showLabel) return;
    const { x, y, width, height } = this.ribbonBBox;
    const { offset: axisOffset, spacing: axisSpacing, tickLength: axisTickLength } = this.labelAxisStyle;
    const [startPos, endPos]: [[number, number], [number, number]] = this.ifHorizontal(
      [
        [x, y + axisOffset],
        [x + width, y + axisOffset],
      ],
      [
        [x + axisOffset, y + height],
        [x + axisOffset, y],
      ]
    );

    this.label.update(
      {
        startPos,
        endPos,
        tickLength: axisTickLength,
        labelSpacing: axisSpacing,
      },
      false
    );
  }

  /** 当前交互的对象 */
  private target!: string | undefined;

  /** 上次鼠标事件的位置 */
  private prevValue!: number;

  public bindEvents() {
    this.style.cursor = 'pointer';
    // 绑定 drag 开始事件
    this.ribbon.on('pointerdown', this.onDragStart('ribbon'));
    this.ribbon.on('pointermove', this.onHovering);
    this.addEventListener('pointerout', this.hideIndicator);
  }

  private onHovering = (e: any) => {
    const { data, block } = this.attributes;
    e.stopPropagation();
    const value = this.getValueByCanvasPoint(e);
    if (block) {
      const { range } = getNextTickValue(
        data.map(({ value }) => value),
        value
      );

      const selection = this.getRealSelection(range);
      this.showIndicator((range[0] + range[1]) / 2, `${selection[0]}-${selection[1]}`);
      this.dispatchIndicated(value, range);
    } else {
      const safetyValue = this.getTickValue(value);
      this.showIndicator(safetyValue, `${this.getRealValue(safetyValue)}`);
      this.dispatchIndicated(safetyValue);
    }
  };

  public showIndicator(value: number, text = `${value}`) {
    const { showIndicator } = this.attributes;
    if (!showIndicator || typeof value !== 'number') {
      this.hideIndicator();
      return;
    }
    const { min, max } = this.range;
    const { x, y } = this.ribbonBBox;
    const safeValue = clamp(value, min, max);
    const offset = this.getOffset(safeValue);
    const pos: Point = this.ifHorizontal([offset + x, y], [x, offset + y]);

    this.indicator.update({
      x: pos[0],
      y: pos[1],
      position: this.ifHorizontal('top', 'left'),
      labelText: text,
    });
    show(this.indicator.node());
  }

  private hideIndicator() {
    hide(this.indicator.node());
  }

  private onDragStart = (target: string) => (e: any) => {
    e.stopPropagation();

    // 关闭滑动
    if (!this.attributes.slidable) return;
    this.target = target;

    this.prevValue = this.getTickValue(this.getValueByCanvasPoint(e));
    document.addEventListener('mousemove', this.onDragging);
    document.addEventListener('touchmove', this.onDragging);
    document.addEventListener('mouseleave', this.onDragEnd);
    document.addEventListener('mouseup', this.onDragEnd);
    document.addEventListener('mouseup', this.onDragEnd);
    document.addEventListener('touchend', this.onDragEnd);
  };

  private onDragging = (e: any) => {
    const { target } = this;
    this.updateMouse();
    const [start, end] = this.selection;
    const currValue = this.getTickValue(this.getValueByCanvasPoint(e));
    const diffValue = currValue - this.prevValue;

    if (target === 'start') start !== currValue && this.updateSelection(currValue, end);
    else if (target === 'end') end !== currValue && this.updateSelection(start, currValue);
    else if (target === 'ribbon' && diffValue !== 0) {
      this.prevValue = currValue;
      this.updateSelection(diffValue, diffValue, true);
    }
  };

  private onDragEnd = () => {
    this.style.cursor = 'pointer';
    document.removeEventListener('mousemove', this.onDragging);
    document.removeEventListener('touchmove', this.onDragging);
    document.removeEventListener('mouseup', this.onDragEnd);
    document.removeEventListener('touchend', this.onDragEnd);
  };

  private updateMouse() {
    if (this.attributes.slidable) this.style.cursor = 'grabbing';
  }

  public setSelection(start: number, end: number) {
    this.updateSelection(start, end);
  }

  private updateSelection(stVal: number, endVal: number, isOffset: boolean = false) {
    const [currSt, currEnd] = this.selection;

    let [start, end] = [stVal, endVal];
    if (isOffset) {
      // 获取当前值
      start += currSt;
      end += currEnd;
    }
    // 值校验
    const { min, max } = this.range;
    [start, end] = getSafetySelections([min, max], [start, end], this.selection);
    this.update({ defaultValue: [start, end] });
    this.dispatchSelection();
  }

  private get step(): number {
    const { step = 1 } = this.attributes;
    const { min, max } = this.range;
    if (isUndefined(step)) return toPrecision((max - min) * STEP_RATIO, 0);
    return step;
  }

  private getTickValue(value: number): number {
    const { data, block } = this.attributes;
    const { min } = this.range;
    if (block)
      return getNextTickValue(
        data.map(({ value }) => value),
        value
      ).tick;
    return getStepValueByValue(value, this.step, min);
  }

  /**
   * 事件触发的位置对应的value值
   */
  private getValueByCanvasPoint(e: any) {
    const { min, max } = this.range;
    const [x, y] = this.ribbon.node().getPosition();
    const startPos = this.ifHorizontal(x, y);
    const currValue = this.ifHorizontal(...getEventPos(e));
    const offset = currValue - startPos;
    const value = clamp(this.getOffset(offset, true), min, max);
    return value;
  }

  /** reverse: 屏幕偏移量 -> 值 */
  private getOffset(value: number, reverse = false) {
    const { min, max } = this.range;
    const { length: ribbonLen } = this.ribbonShape;
    const scale = this.eventToOffsetScale;
    scale.update({ domain: [min, max], range: [0, ribbonLen] });
    if (reverse) return scale.invert(value);
    return scale.map(value);
  }

  private getRealSelection(range: number[]) {
    const { max } = this.range;
    const [start, end] = range;

    return this.ifHorizontal([start, end], [max - end, max - start]);
  }

  private getRealValue(value: number) {
    const { max } = this.range;

    return this.ifHorizontal(value, max - value);
  }

  private dispatchSelection() {
    const selection = this.getRealSelection(this.selection);

    const evt = new CustomEvent('valuechange', {
      detail: {
        value: selection,
      },
    });
    this.dispatchEvent(evt as any);
  }

  private dispatchIndicated(value: number, range?: number[]) {
    const { max } = this.range;

    const detail = this.ifHorizontal(
      () => {
        return {
          value,
          range,
        };
      },
      () => {
        return {
          value: max - value,
          range: range ? this.getRealSelection(range) : undefined,
        };
      }
    );

    const evt = new CustomEvent('indicate', {
      detail,
    });
    this.dispatchEvent(evt as any);
  }
}
