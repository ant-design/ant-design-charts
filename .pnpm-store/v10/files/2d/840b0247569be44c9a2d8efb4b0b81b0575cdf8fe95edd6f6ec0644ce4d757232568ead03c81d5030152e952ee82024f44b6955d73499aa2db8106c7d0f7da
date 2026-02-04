import { deepMix, isString, isElement, assign, get } from '@antv/util';
import { DisplayObject, Group } from '../../shapes';
import { Component } from '../../core';
import { deepAssign } from '../../util';
import { CLASS_NAME, POPTIP_ID, POPTIP_STYLE } from './constant';
import { getPositionXY, getSingleTonElement } from './utils';

import type { PoptipStyleProps, PoptipOptions } from './types';

export type { PoptipStyleProps as PoptipCfg, PoptipOptions };

// 到处方法，可以外部使用
export { getPositionXY } from './utils';

type PoptipCallbackOptions = {
  html?: string;
  target?: HTMLElement | DisplayObject | false;
} & Pick<PoptipStyleProps, 'position' | 'arrowPointAtCenter' | 'follow' | 'offset'>;

export class Poptip extends Component<PoptipStyleProps> {
  public static tag = 'poptip';

  public get visible(): boolean {
    return this.visibility === 'visible';
  }

  private static defaultOptions = {
    style: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      target: null,
      visibility: 'hidden',
      text: '',
      position: 'top',
      follow: false,
      offset: [0, 0],
      domStyles: POPTIP_STYLE,
      template: `<div class="${CLASS_NAME.TEXT}"></div>`,
    },
  };

  /** 容器 HTML 元素节点 */
  private container!: HTMLElement;

  /** 显影控制 */
  private visibility: 'visible' | 'hidden' = 'visible';

  /** 所有绑定的目标对象 */
  private map: Map<HTMLElement | DisplayObject, any[]> = new Map();

  /** 节点样式 */
  private domStyles: string = '';

  constructor(options: PoptipOptions) {
    super(deepMix({ style: { id: POPTIP_ID } }, Poptip.defaultOptions, options));
    this.initShape();
    this.render(this.attributes, this);
  }

  public render(attributes: PoptipStyleProps, container: Group) {
    this.visibility = this.style.visibility;
    this.updatePoptipElement();
  }

  /**
   * poptip 组件更新
   */
  public update(cfg?: Partial<PoptipStyleProps>) {
    this.attr(deepMix({}, this.style, cfg));
    this.render(this.attributes, this);
  }

  /**
   * 绑定元素
   */
  public bind(
    element: HTMLElement | DisplayObject,
    callback?: PoptipCallbackOptions | ((e: any) => PoptipCallbackOptions)
  ): void {
    if (!element) return;

    const { text: defaultText } = this.style;

    const onmousemove = (e: any) => {
      let target: PoptipCallbackOptions['target'] = element;
      let options = this.style;
      let text = defaultText;
      if (callback) {
        const {
          html,
          target: ele,
          ...restOptions
        } = typeof callback === 'function' ? callback.call(null, e) : callback;
        options = assign({} as any, this.style, restOptions);
        if (ele || ele === false) target = ele;
        if (typeof html === 'string') text = html;
      }

      const { position, arrowPointAtCenter, follow, offset } = options;

      if (target) {
        const { clientX, clientY } = e as MouseEvent;
        const [x, y] = getPositionXY(clientX, clientY, target, position, arrowPointAtCenter, follow);
        this.showTip(x, y, { text, position, offset });
      } else {
        // 没有移动到指定的目标 关闭弹框
        this.hideTip();
      }
    };

    const onmouseleave = () => {
      this.hideTip();
    };

    element.addEventListener('mousemove', onmousemove);
    element.addEventListener('mouseleave', onmouseleave);
    // 存储监听
    this.map.set(element, [onmousemove, onmouseleave]);
  }

  public unbind(element: HTMLElement | DisplayObject): void {
    if (this.map.has(element)) {
      const [listener1, listener2] = this.map.get(element) || [];
      listener1 && element.removeEventListener('mousemove', listener1);
      listener2 && element.removeEventListener('mouseleave', listener2);
      this.map.delete(element);
    }
  }

  /**
   * 清空容器内容
   */
  public clear() {
    this.container.innerHTML = '';
  }

  /**
   * 清除
   */
  public destroy() {
    [...this.map.keys()].forEach((ele) => this.unbind(ele));

    this.container?.remove();
    super.destroy();
  }

  /**
   * 显示 + 改变位置
   * @param x 可选 改变位置 x 方向
   * @param y 可选 改变位置 y 方向
   * @param text 文本变化
   */
  public showTip(x?: number, y?: number, options?: Pick<PoptipStyleProps, 'text' | 'position' | 'offset'>) {
    const text = get(options, 'text');
    if (text && typeof text !== 'string') return;

    this.applyStyles();
    // 不传入 不希望改变 x y
    if (x && y && options) {
      const { offset, position } = options;
      position && this.container.setAttribute('data-position', position);

      this.setOffsetPosition(x, y, offset);
      if (typeof text === 'string') {
        // do something
        const textElement = this.container.querySelector(`.${CLASS_NAME.TEXT}`);
        if (textElement) {
          (textElement as HTMLDivElement).innerHTML = text;
        }
      }

      this.visibility = 'visible';
      this.container.style.visibility = 'visible';
    }
  }

  /**
   * 隐藏
   */
  public hideTip() {
    this.visibility = 'hidden';
    this.container.style.visibility = 'hidden';
  }

  /**
   * 获取内部容器 HTMLElement
   * @returns this.element:HTMLElement;
   */
  public getContainer(): HTMLElement {
    return this.container;
  }

  public getClassName(): string {
    const { containerClassName } = this.style;
    return `${CLASS_NAME.CONTAINER}${containerClassName ? ` ${containerClassName}` : ''}`;
  }

  /**
   * 初始化容器
   */
  private initShape() {
    const { id } = this.style;

    this.container = getSingleTonElement(id);
    this.container.className = this.getClassName();

    // 盒子添加交互
    this.container.addEventListener('mousemove', () => this.showTip());
    this.container.addEventListener('mouseleave', () => this.hideTip());
  }

  /**
   * 更新 HTML 上的内容
   */
  private updatePoptipElement() {
    const { container } = this;

    this.clear();
    const { id, template, text } = this.style;

    this.container.setAttribute('id', id);
    this.container.className = this.getClassName();

    // 增加 arrow 元素
    const arrowNode = `<span class="${CLASS_NAME.ARROW}"></span>`;
    container.innerHTML = arrowNode;

    // 置入 text 模版
    if (isString(template)) {
      container.innerHTML += template;
    } else if (template && isElement(template)) {
      container.appendChild(template);
    }

    // 置入 text
    if (text) {
      container.getElementsByClassName(CLASS_NAME.TEXT)[0]!.textContent = text;
    }

    this.applyStyles();

    this.container.style.visibility = this.visibility;
  }

  /**
   * 应用样式表
   */
  private applyStyles() {
    const styles = deepAssign({}, POPTIP_STYLE, this.style.domStyles) as object;

    const styleStr = Object.entries(styles).reduce((r, [key, value]) => {
      const styleStr = Object.entries(value).reduce((r, [k, v]) => `${r}${k}: ${v};`, '');
      return `${r}${key}{${styleStr}}`;
    }, '');

    if (this.domStyles !== styleStr) {
      this.domStyles = styleStr;
      let styleDOM = this.container.querySelector('style') as HTMLStyleElement;
      if (styleDOM) this.container.removeChild(styleDOM);
      styleDOM = document.createElement('style');
      styleDOM.innerHTML = styleStr;
      this.container.appendChild(styleDOM);
    }
  }

  /**
   * 将相对于指针的偏移量生效到dom元素上
   * @param x 盒子相对于页面 x 的位置
   * @param y 盒子相对于页面 y 的位置
   */
  private setOffsetPosition(x: number, y: number, offset: number[] = this.style.offset): void {
    const [offsetX = 0, offsetY = 0] = offset;

    this.container.style.left = `${x + offsetX}px`;
    this.container.style.top = `${y + offsetY}px`;
  }
}
