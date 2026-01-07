import type { GroupStyleProps } from '../../shapes';
import type { ComponentOptions } from '../../core';
import type { TagStyleProps } from '../tag';

export type SwitchStyleProps = GroupStyleProps & {
  x?: number;
  y?: number;
  /**
   * @title 大小
   * @description switch 开关组件大小。默认为: default, 高度大小等于 22px，宽度默认等于高度的两倍，会随着内部的子元素大小自动调整。
   * @default 'default'
   */
  size?: 'default' | 'small' | 'mini';
  /**
   * @title 是否选中
   * @description 指定当前是否选中
   */
  checked?: boolean;
  /**
   * @title 是否禁用
   * @description 指定当前是否禁用
   */
  disabled?: boolean;
  /**
   * @title 组件的内边距
   * @description 组件的内边距
   * @default 2
   */
  spacing?: number;
  /**
   * @title 选中时的内容
   * @description 选中时的内容。可以自定义文本和图标
   */
  checkedChildren?: TagStyleProps;
  /**
   * @title 非选中时的内容
   * @description 选中时的内容。可以自定义文本和图标
   */
  unCheckedChildren?: TagStyleProps;
};

export type SwitchOptions = ComponentOptions<SwitchStyleProps>;
