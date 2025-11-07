import { CustomEvent } from '@antv/g';
import { Component } from '../../core';
import { DisplayObject, Rect } from '../../shapes';
import { hide, parseSeriesAttr, renderExtDo, select, show, subStyleProps } from '../../util';
import { deepAssign } from '../../util/deep-assign';
import { Option } from './option';
import type { SelectOptions, SelectStyleProps } from './types';

export class Select extends Component<SelectStyleProps> {
  static defaultOptions: SelectOptions = {
    style: {
      x: 0,
      y: 0,
      width: 140,
      height: 32,
      options: [],
      bordered: true,
      defaultValue: '',
      selectRadius: 8,
      selectStroke: '#d9d9d9',
      showDropdownIcon: true,
      placeholderText: '请选择',
      placeholderFontSize: 12,
      placeholderTextBaseline: 'top',
      placeholderFill: '#c2c2c2',
      dropdownFill: '#fff',
      dropdownStroke: '#d9d9d9',
      dropdownRadius: 8,
      dropdownShadowBlur: 4,
      dropdownShadowColor: 'rgba(0, 0, 0, 0.08)',
      dropdownPadding: 8,
      dropdownSpacing: 10,
      optionPadding: [8, 12],
      optionFontSize: 12,
      optionTextBaseline: 'top',
      optionBackgroundFill: '#fff',
      optionBackgroundRadius: 4,
      optionLabelFontSize: 12,
      optionLabelTextBaseline: 'top',
    },
  };

  /** 当前 value */
  private currentValue: string | number = Select.defaultOptions.style?.defaultValue!;

  private isPointerInSelect = false;

  public setValue(value: string | number) {
    this.currentValue = value;
    this.render();
  }

  public getValue() {
    return this.currentValue;
  }

  private get dropdownPadding() {
    return parseSeriesAttr(this.style.dropdownPadding);
  }

  private select = this.appendChild(
    new Rect({
      className: 'select',
      style: {
        cursor: 'pointer',
        width: 0,
        height: 0,
      },
    })
  );

  private dropdown = this.appendChild(
    new Rect({
      className: 'dropdown',
    })
  );

  private renderSelect() {
    const { x, y, width, height, bordered, showDropdownIcon } = this.style;
    const selectStyle = subStyleProps(this.attributes, 'select');
    const placeholderStyle = subStyleProps(this.attributes, 'placeholder');
    this.select.attr({ x, y, width, height, ...selectStyle, fill: '#fff', strokeWidth: bordered ? 1 : 0 });
    const padding = this.dropdownPadding;
    // dropdown icon
    const iconSize = 10;
    if (showDropdownIcon) {
      select(this.select)
        .maybeAppend('.dropdown-icon', 'path')
        .style('d', 'M-5,-3.5 L0,3.5 L5,-3.5')
        .style('transform', `translate(${x + width - iconSize - padding[1] - padding[3]}, ${y + height / 2})`)
        .style('lineWidth', 1)
        .style('stroke', this.select.style.stroke);
    }

    const currentOption = this.style.options?.find((option) => option.value === this.currentValue);
    // placeholder
    const finalPlaceholderStyle = {
      x: x + padding[3],
      ...placeholderStyle,
    };
    select(this.select)
      .selectAll('.placeholder')
      .data(!currentOption ? [1] : [])
      .join(
        (enter) =>
          enter
            .append('text')
            .attr('className', 'placeholder')
            .styles(finalPlaceholderStyle)
            .style('y', function () {
              const bbox = this.getBBox();
              return y + (height - bbox.height) / 2;
            }),
        (update) => update.styles(finalPlaceholderStyle),
        (exit) => exit.remove()
      );

    // value
    const labelStyle = subStyleProps(this.attributes, 'optionLabel');
    const finalValueStyle = {
      x: x + padding[3],
      ...labelStyle,
    };

    select(this.select)
      .selectAll('.value')
      .data(currentOption ? [currentOption] : [])
      .join(
        (enter) =>
          enter
            .append((datum) => renderExtDo(datum.label))
            .attr('className', 'value')
            .styles(finalValueStyle)
            .style('y', function () {
              const bbox = this.getBBox();
              return y + (height - bbox.height) / 2;
            }),
        (update) => update.styles(finalValueStyle),
        (exit) => exit.remove()
      );
  }

  private renderDropdown() {
    const { x, y, width, height, options, onSelect, open } = this.style;
    const dropdownStyle = subStyleProps(this.attributes, 'dropdown');
    const optionStyle = subStyleProps(this.attributes, 'option');
    const padding = this.dropdownPadding;
    select(this.dropdown)
      .maybeAppend('.dropdown-container', 'g')
      .attr('className', 'dropdown-container')
      .selectAll('.dropdown-item')
      .data(options, (datum) => datum.value)
      .join(
        (enter) =>
          enter
            .append(
              (datum) =>
                new Option({
                  className: 'dropdown-item',
                  style: {
                    ...datum,
                    ...optionStyle,
                    width: width - padding[1] - padding[3],
                    selected: datum.value === this.currentValue,
                    onClick: (value, option, item) => {
                      this.setValue(value);
                      onSelect?.(value, option, item);
                      this.dispatchEvent(new CustomEvent('change', { detail: { value, option, item } }));
                      hide(this.dropdown);
                    },
                  },
                })
            )
            .each(function (datum, i) {
              const nodes = this.parentNode?.children as DisplayObject[];
              const accHeight = nodes.reduce((acc, curr, index) => {
                if (index < i) {
                  acc += curr.getBBox().height;
                }
                return acc;
              }, 0);

              // 设置偏移
              this.attr('transform', `translate(${padding[3]}, ${padding[0] + accHeight})`);
            }),
        (update) =>
          update.update((datum: any) => {
            return { selected: datum.value === this.currentValue };
          }),
        (exit) => exit.remove()
      );

    const bbox = (this.dropdown.getElementsByClassName('dropdown-container')?.[0] as any)?.getBBox();

    const { spacing } = dropdownStyle;

    this.dropdown.attr({
      transform: `translate(${x}, ${y + height + spacing})`,
      width: bbox.width + padding[1] + padding[3],
      height: bbox.height + padding[0] + padding[2],
      ...dropdownStyle,
    });
    // 默认隐藏
    !open && hide(this.dropdown);
  }

  constructor(options: SelectOptions) {
    super(deepAssign({}, Select.defaultOptions, options));
    const { defaultValue } = this.style;
    if (defaultValue && this.style.options?.some((option) => option.value === defaultValue)) {
      this.currentValue = defaultValue;
    }
  }

  render() {
    this.renderSelect();
    this.renderDropdown();
  }

  bindEvents() {
    this.addEventListener('click', (e: Event) => {
      e.stopPropagation();
    });

    this.select.addEventListener('click', () => {
      if (this.dropdown.style.visibility === 'visible') hide(this.dropdown);
      else {
        show(this.dropdown);
      }
    });

    // mock blur
    this.addEventListener('pointerenter', () => {
      this.isPointerInSelect = true;
    });

    this.addEventListener('pointerleave', () => {
      this.isPointerInSelect = false;
    });

    document?.addEventListener('click', () => {
      if (!this.isPointerInSelect) {
        hide(this.dropdown);
      }
    });
  }
}
