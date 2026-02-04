import type { GroupStyleProps, RectStyleProps, TextStyleProps } from '../../shapes';
import type { ComponentOptions } from '../../core';
import type { PrefixObject } from '../../types';

export type CheckboxStyleProps = GroupStyleProps &
  PrefixObject<Partial<RectStyleProps>, 'box'> &
  PrefixObject<Partial<RectStyleProps>, 'checked'> &
  PrefixObject<TextStyleProps, 'label'> & {
    /**
     * @title 是否选中
     * @description 指定当前是否选中
     */
    checked?: boolean;
    /**
     * @title label chebox 间距
     * @description label 与 chebox 的方块的间距
     * @default 2
     */
    spacing?: number;
  };

export type CheckboxOptions = ComponentOptions<CheckboxStyleProps>;
