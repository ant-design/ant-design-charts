import { Component } from '../../core';
import { Group, Rect } from '../../shapes';
import { parseSeriesAttr, renderExtDo, select, subStyleProps } from '../../util';
import { deepAssign } from '../../util/deep-assign';
import type { OptionOptions, OptionStyleProps } from './types';

export class Option extends Component<OptionStyleProps> {
  static defaultOptions: OptionOptions = {
    style: {
      value: '',
      label: '',
      cursor: 'pointer',
    },
  };

  private hoverColor = '#f5f5f5';

  private selectedColor = '#e6f7ff';

  private background = this.appendChild(new Rect({}));

  private label = this.background.appendChild(new Group({}));

  private get padding() {
    return parseSeriesAttr(this.style.padding);
  }

  private renderLabel() {
    const { label, value } = this.style;
    const labelStyle = subStyleProps(this.attributes, 'label');
    select(this.label)
      .maybeAppend('.label', () => renderExtDo(label))
      .attr('className', 'label')
      .styles(labelStyle);
    // bind data to label
    this.label.attr('__data__', value);
  }

  private renderBackground() {
    const labelBBox = this.label.getBBox();
    const [top, right, bottom, left] = this.padding;
    const { width: labelWidth, height: labelHeight } = labelBBox;
    const backgroundWidth = labelWidth + left + right;
    const backgroundHeight = labelHeight + top + bottom;
    const backgroundStyle = subStyleProps(this.attributes, 'background');
    const { width: styleWidth = 0, height: styleHeight = 0, selected } = this.style;

    this.background.attr({
      ...backgroundStyle,
      width: Math.max(backgroundWidth, styleWidth),
      height: Math.max(backgroundHeight, styleHeight),
      fill: selected ? this.selectedColor : '#fff',
    });
    // place label
    this.label.attr({ transform: `translate(${left}, ${(backgroundHeight - labelHeight) / 2})` });
  }

  constructor(options: OptionOptions) {
    super(deepAssign({}, Option.defaultOptions, options));
  }

  render() {
    this.renderLabel();
    this.renderBackground();
  }

  public bindEvents() {
    this.addEventListener('pointerenter', () => {
      if (this.style.selected) return;
      this.background.attr('fill', this.hoverColor);
    });
    this.addEventListener('pointerleave', () => {
      if (this.style.selected) return;
      this.background.attr('fill', this.style.backgroundFill);
    });

    const item = this as unknown as typeof Option;
    this.addEventListener('click', () => {
      const { label, value, onClick } = this.style;
      onClick?.(value, { label, value }, item);
    });
  }
}
