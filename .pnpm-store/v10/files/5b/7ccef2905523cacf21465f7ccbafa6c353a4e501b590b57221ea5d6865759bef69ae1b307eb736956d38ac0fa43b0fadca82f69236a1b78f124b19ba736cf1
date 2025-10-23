import type { ComponentOptions } from '../../core';

export type PoptipPosition =
  // x 方向跟随鼠标移动
  | 'top'
  | 'bottom'
  // y 方向跟随鼠标移动
  | 'left'
  | 'right'
  // 不跟随鼠标移动
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-top'
  | 'left-bottom'
  | 'right-top'
  | 'right-bottom';

export interface PoptipStyleProps {
  /**
   * @title 唯一 ID
   * @description poptip 组件的 id。如果没有设置，则全局共享一个 poptip 组件
   */
  id?: string;
  /**
   * @title 容器类名
   * @description poptip 组件的 class 类名，默认为 .component-poptip
   */
  containerClassName?: string;
  /**
   * @title 是否可见。
   * @description 控制 poptip 默认是否可见。
   */
  visibility?: 'visible' | 'hidden';
  /**
   * @title 文本内容
   * @description 默认配置下的文本内容
   */
  text?: string;
  /**
   * @title 偏移量
   * @description 在位置方向上的偏移量
   */
  offset?: [number, number];
  /**
   * @title 气泡框位置
   * @description 可选。top left right bottom top-left top-right bottom-left bottom-right left-top left-bottom right-top right-bottom
   */
  position?: PoptipPosition;
  /**
   * @title 箭头是否指向元素中心
   */
  arrowPointAtCenter?: boolean;
  /**
   * @title 是否跟随鼠标
   * @description 是否跟随鼠标。当设置为 true 时，会忽略 position 的设置
   */
  follow?: boolean;
  /**
   * @title 内容模版
   * @description 可以添加内容的模板
   */
  template?: string | HTMLElement;
  /**
   * @title 样式
   * @description 所有内容模版都可以通过 '.className': cssStyle 的方式，来改变 poptip 的样式
   */
  domStyles?: {
    [key: '.component-poptip' | '.component-poptip-arrow' | '.component-poptip-text' | string]: {
      [key: string]: string;
    };
  };
}

export type PoptipOptions = ComponentOptions<PoptipStyleProps>;
