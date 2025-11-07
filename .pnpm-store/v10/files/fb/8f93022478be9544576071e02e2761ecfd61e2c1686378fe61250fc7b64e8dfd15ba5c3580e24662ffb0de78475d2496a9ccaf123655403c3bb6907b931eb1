import { Component } from '../../core';
import type { Group, Rect } from '../../shapes';
import { maybeAppend, subStyleProps } from '../../util';
import type { CheckboxOptions, CheckboxStyleProps } from './types';

import { CHECKBOX_RECT_STYLE, CHECKED_SHAPE_STYLE, LABEL_TEXT_STYLE } from './constant';

export type { CheckboxStyleProps, CheckboxOptions };

function getLablePosition(shape: Rect, spacing?: number) {
  const bounds = shape.getLocalBounds();

  return {
    x: bounds.halfExtents[0] ? bounds.max[0] + (spacing || 0) : (shape.style.x as number),
    y: bounds.halfExtents[1] ? (bounds.min[1] + bounds.max[1]) / 2 : (shape.style.y as number),
  };
}

export class Checkbox extends Component<CheckboxStyleProps> {
  /**
   * 组件 checkbox
   */
  public static tag = 'checkbox';

  /**  checkbox 的背景方框组件 */
  private checkboxBoxShape!: Rect;

  /** 值 */
  private checked!: boolean;

  constructor(options: CheckboxOptions) {
    super(options, {
      labelText: '',
      spacing: 4,
      checked: false,
      ...LABEL_TEXT_STYLE,
    });
  }

  public render(attributes: Required<CheckboxStyleProps>, container: Group) {
    const { checked, spacing } = attributes;
    this.checked = !!checked;
    const group = maybeAppend(container, '.checkbox-content', 'g').attr('className', 'checkbox-content').node();
    const boxStyle = subStyleProps(attributes, 'box');
    const checkedStyle = subStyleProps(attributes, 'checked');
    const labelStyle = subStyleProps(attributes, 'label');
    const checkboxStyle = {
      ...(this.checked ? CHECKBOX_RECT_STYLE.selected : CHECKBOX_RECT_STYLE.default),
      ...boxStyle,
    };
    const checkboxBoxCheckedStyle = { ...CHECKED_SHAPE_STYLE, ...checkedStyle };

    this.checkboxBoxShape = maybeAppend(group, '.checkbox-box', 'rect')
      .styles({
        className: 'checkbox-box',
        zIndex: (group.style.zIndex || 0) - 1,
        ...checkboxStyle,
      })
      .node();

    maybeAppend(this.checkboxBoxShape, '.checkbox-checked', 'path').styles({
      className: 'checkbox-box-checked',
      stroke: '#fff',
      ...checkboxBoxCheckedStyle,
    });

    const { x, y } = getLablePosition(this.checkboxBoxShape, Number(spacing));

    maybeAppend(group, '.checkbox-label', 'text').styles({
      className: 'checkbox-label',
      x,
      y,
      ...labelStyle,
    });
  }
}
