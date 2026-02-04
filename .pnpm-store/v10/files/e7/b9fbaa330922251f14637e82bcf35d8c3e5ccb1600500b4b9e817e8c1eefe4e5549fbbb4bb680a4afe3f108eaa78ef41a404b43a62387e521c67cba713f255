import { substitute, createDOM } from '@antv/util';
import { Component } from '../../core';
import { Group } from '../../shapes';
import { BBox, applyStyleSheet, replaceChildren } from '../../util';
import { getClassNames, getDefaultTooltipStyle } from './constant';
import type { TooltipOptions, TooltipPosition, TooltipStyleProps } from './types';

export type { TooltipStyleProps, TooltipOptions };

export class Tooltip extends Component<TooltipStyleProps> {
  public static tag = 'tooltip';

  private timestamp = -1;

  public get HTMLTooltipElement() {
    return this.element;
  }

  public getContainer() {
    return this.element;
  }

  private get elementSize() {
    const width = this.element.offsetWidth;
    const height = this.element.offsetHeight;
    return { width, height };
  }

  private get HTMLTooltipItemsElements() {
    const { data, template } = this.attributes;
    return data.map(({ name = '', color = 'black', index, ...rest }, idx) => {
      const datum = { name, color, index: index ?? idx, ...rest };
      return createDOM(substitute(template.item!, datum)) as HTMLElement;
    });
  }

  private element!: HTMLElement;

  constructor(options: TooltipOptions) {
    const prefixCls = options.style?.template?.prefixCls;
    const CLASS_NAME = getClassNames(prefixCls);
    super(options, {
      data: [],
      x: 0,
      y: 0,
      visibility: 'visible',
      title: '',
      position: 'bottom-right',
      offset: [5, 5],
      enterable: false,
      container: {
        x: 0,
        y: 0,
      },
      bounding: null,
      template: {
        prefixCls: '',
        container: `<div class="${CLASS_NAME.CONTAINER}"></div>`,
        title: `<div class="${CLASS_NAME.TITLE}"></div>`,
        item: `<li class="${CLASS_NAME.LIST_ITEM}" data-index={index}>
        <span class="${CLASS_NAME.NAME}">
          <span class="${CLASS_NAME.MARKER}" style="background:{color}"></span>
          <span class="${CLASS_NAME.NAME_LABEL}" title="{name}">{name}</span>
        </span>
        <span class="${CLASS_NAME.VALUE}" title="{value}">{value}</span>
      </li>`,
      },
      style: getDefaultTooltipStyle(prefixCls),
    });
    this.initShape();
    this.render(this.attributes, this);
  }

  public render(attributes: TooltipStyleProps, container: Group) {
    this.renderHTMLTooltipElement();
    this.updatePosition();
  }

  public destroy() {
    this.element?.remove();
    super.destroy();
  }

  /**
   * 如果设置了坐标值，显示过程中会立即更新位置并关闭过渡动画
   */
  public show(x?: number, y?: number) {
    if (x !== undefined && y !== undefined) {
      const isToggle = this.element.style.visibility === 'hidden';
      const setPosition = () => {
        this.attributes.x = x ?? this.attributes.x;
        this.attributes.y = y ?? this.attributes.y;
        this.updatePosition();
      };
      // 只有从 hidden 状态变为 visible 状态时才需要关闭过渡动画
      isToggle ? this.closeTransition(setPosition) : setPosition();
    }
    this.element.style.visibility = 'visible';
  }

  /**
   * 如果 hide 时传入了坐标值，那么只有当鼠标不在 tooltip 上时才会隐藏
   * 对于 enterable = true 的时候，需要传入 x y，为了避免问题，建议上层在使用的时候，都传入 x y
   * @param x
   * @param y
   * @returns
   */
  public hide(x = 0, y = 0) {
    const { enterable } = this.attributes;

    // 如果当前鼠标在 tooltip 上，则不隐藏
    if (enterable && this.isCursorEntered(x, y)) return;

    this.element.style.visibility = 'hidden';
  }

  /**
   * 初始化容器
   */
  private initShape() {
    const { template } = this.attributes;
    this.element = createDOM(template.container!) as HTMLElement;
    if (this.id) this.element.setAttribute('id', this.id);
  }

  private prevCustomContentKey = this.attributes.contentKey;

  private renderCustomContent() {
    if (this.prevCustomContentKey !== undefined && this.prevCustomContentKey === this.attributes.contentKey) return;
    this.prevCustomContentKey = this.attributes.contentKey;
    const { content } = this.attributes;
    if (!content) return;
    if (typeof content === 'string') this.element.innerHTML = content;
    else replaceChildren(this.element, content);
  }

  /**
   * 更新 HTML 上的内容
   */
  private renderHTMLTooltipElement() {
    const { template, title, enterable, style, content } = this.attributes;
    const CLASS_NAME = getClassNames(template.prefixCls);
    const container = this.element;
    this.element.style.pointerEvents = enterable ? 'auto' : 'none';
    if (content) this.renderCustomContent();
    else {
      if (title) {
        container.innerHTML = template.title!;
        container.getElementsByClassName(CLASS_NAME.TITLE)[0].innerHTML = title;
      } else container.getElementsByClassName(CLASS_NAME.TITLE)?.[0]?.remove();
      const itemsElements = this.HTMLTooltipItemsElements;
      const ul = document.createElement('ul');
      ul.className = CLASS_NAME.LIST;
      replaceChildren(ul, itemsElements);
      const list = this.element.querySelector(`.${CLASS_NAME.LIST}`);
      if (list) list.replaceWith(ul);
      else container.appendChild(ul);
    }

    applyStyleSheet(container, style);
  }

  /**
   * 根据 position 和指针位置，计算出 tooltip 相对于指针的偏移量
   * @param assignPosition {TooltipPosition} tooltip相对于指针的位置，不指定时使用默认参数
   */
  private getRelativeOffsetFromCursor(assignPosition?: TooltipPosition) {
    const { position, offset } = this.attributes;
    const interPosition = assignPosition || position;
    const finalPosition = interPosition.split('-') as ('top' | 'bottom' | 'left' | 'right')[];
    const positionScore = { left: [-1, 0], right: [1, 0], top: [0, -1], bottom: [0, 1] };
    const { width, height } = this.elementSize;
    let absolutelyOffset = [-width / 2, -height / 2];
    finalPosition.forEach((pos) => {
      const [abs1, abs2] = absolutelyOffset;
      const [pos1, pos2] = positionScore[pos];
      absolutelyOffset = [abs1 + (width / 2 + offset[0]) * pos1, abs2 + (height / 2 + offset[1]) * pos2];
    });
    return absolutelyOffset as [number, number];
  }

  /**
   * 将相对于指针的偏移量生效到dom元素上
   */
  private setOffsetPosition([offsetX, offsetY]: [number, number]) {
    const {
      x = 0,
      y = 0,
      container: { x: cx, y: cy },
    } = this.attributes;
    this.element.style.left = `${+x + cx + offsetX}px`;
    this.element.style.top = `${+y + cy + offsetY}px`;
  }

  /**
   * 更新tooltip的位置
   */
  private updatePosition() {
    const { showDelay = 60 } = this.attributes;

    const currentTimestamp = Date.now();
    if (this.timestamp > 0 && currentTimestamp - this.timestamp < showDelay) return;

    this.timestamp = currentTimestamp;
    // 尝试当前的位置使用默认 position 能否放下
    // 如果不能，则改变取溢出边的反向 position
    /**
     * 默认位置
     *    ⬇️
     * 计算自动调整位置
     *    ⬇️
     * 实际摆放位置
     */
    this.setOffsetPosition(this.autoPosition(this.getRelativeOffsetFromCursor()));
  }

  /**
   * 计算自动调整位置后的相对位置
   * @param offsetX 根据position计算的横向偏移量
   * @param offsetY 根据position计算的纵向偏移量
   */
  private autoPosition([offsetX, offsetY]: [number, number]): [number, number] {
    const { x: cursorX, y: cursorY, bounding, position } = this.attributes;
    // 如果没有设置 bounds，那么意思就是不限制空间
    if (!bounding) return [offsetX, offsetY];
    // 更新前的位置和宽度
    const { offsetWidth, offsetHeight } = this.element;
    // 预期放置的位置
    const [expectLeft, expectTop] = [+cursorX + offsetX, +cursorY + offsetY];

    // 反方向
    const inversion = {
      left: 'right',
      right: 'left',
      top: 'bottom',
      bottom: 'top',
    };
    // 各个边界是否超出容器边界
    const { x: boundingX, y: boundingY, width: boundingWidth, height: boundingHeight } = bounding;
    const edgeCompare = {
      left: expectLeft < boundingX,
      right: expectLeft + offsetWidth > boundingX + boundingWidth,
      top: expectTop < boundingY,
      bottom: expectTop + offsetHeight > boundingY + boundingHeight,
    };
    // 修正的位置
    const correctivePosition: string[] = [];
    // 判断是否超出边界
    (position.split('-') as ('top' | 'bottom' | 'left' | 'right')[]).forEach((pos) => {
      // 如果在当前方向超出边界，则设置其反方向
      if (edgeCompare[pos]) correctivePosition.push(inversion[pos]);
      else correctivePosition.push(pos);
    });

    const correctedPositionString = correctivePosition.join('-');
    return this.getRelativeOffsetFromCursor(correctedPositionString as TooltipPosition);
  }

  private isCursorEntered(clientX: number, clientY: number) {
    // 是可捕获的，并且点在 tooltip dom 上
    if (this.element) {
      const { x, y, width, height } = this.element.getBoundingClientRect();
      // const { container } = this.attributes;
      // const { x: cx, y: cy } = container;

      // console.log(1113, [clientX, clientY], [x, y, width, height], [cx, cy], new BBox(x - cx, y - cy, width, height).isPointIn(cursorX, cursorY));

      return new BBox(x, y, width, height).isPointIn(clientX, clientY);
    }
    return false;
  }

  private closeTransition(callback: () => void) {
    const transition = this.element.style.transition;
    this.element.style.transition = 'none';

    callback();

    setTimeout(() => {
      this.element.style.transition = transition;
    }, 10);
  }
}
