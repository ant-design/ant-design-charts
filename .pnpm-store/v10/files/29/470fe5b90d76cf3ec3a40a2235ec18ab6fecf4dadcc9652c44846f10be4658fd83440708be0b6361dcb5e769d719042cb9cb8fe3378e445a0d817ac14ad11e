import { Component } from '../../../core';
import type { Group } from '../../../shapes';
import { DisplayObject, Text } from '../../../shapes';
import { BBox, Selection, classNames, ifShow, parsePosition, parseSeriesAttr, select, splitStyle } from '../../../util';
import { getLegendClassName } from '../utils/classname';
import { CLASSNAME_SUFFIX_MAP } from '../constant';
import type { TitleOptions, TitleStyleProps } from './types';

export type { TitleOptions, TitleStyleProps };

const CLASS_NAMES = classNames(
  {
    text: 'text',
  },
  'title'
);

/**
 * calculate the actual bbox of the element with title
 * @example a legend with width x, height y, but the real bbox is x1 < x, y1 < y
 */
export function getBBox(title: Title, content: DisplayObject): DOMRect {
  const { position, spacing, inset, text } = title.attributes as Required<TitleStyleProps>;
  const titleBBox = title.getBBox();
  const contentBBox = content.getBBox();
  const pos = parsePosition(position);
  const [spacingTop, spacingRight, spacingBottom, spacingLeft] = parseSeriesAttr(text ? spacing : 0);
  const [insetTop, insetRight, insetBottom, insetLeft] = parseSeriesAttr(inset);
  const [spacingWidth, spacingHeight] = [spacingLeft + spacingRight, spacingTop + spacingBottom];
  const [insetWidth, insetHeight] = [insetLeft + insetRight, insetTop + insetBottom];

  // 只基于第一个 pos 进行判断
  // 如果在左边或者上边，直接包围盒相加再加上间距
  if (pos[0] === 'l') {
    return new BBox(
      titleBBox.x,
      titleBBox.y,
      contentBBox.width + titleBBox.width + spacingWidth + insetWidth,
      Math.max(contentBBox.height + insetHeight, titleBBox.height)
    );
  }
  if (pos[0] === 't') {
    return new BBox(
      titleBBox.x,
      titleBBox.y,
      Math.max(contentBBox.width + insetWidth, titleBBox.width),
      contentBBox.height + titleBBox.height + spacingHeight + insetHeight
    );
  }
  // 如果在右边或者下边，基于 content.width, content.height 相加再加上间距

  const [contentWidth, contentHeight] = [
    content.attributes.width || contentBBox.width,
    content.attributes.height || contentBBox.height,
  ];
  return new BBox(
    contentBBox.x,
    contentBBox.y,
    contentWidth + titleBBox.width + spacingWidth + insetWidth,
    contentHeight + titleBBox.height + spacingHeight + insetHeight
  );
}

function mayApplyStyle(el: Selection, style: any) {
  const finalStyle = Object.entries(style).reduce((acc, [key, value]) => {
    const currAttr = el.node().attr(key);
    if (!currAttr) acc[key] = value;
    return acc;
  }, {} as Record<string, any>);

  el.styles(finalStyle);
}

function getTitleLayout(cfg: TitleStyleProps) {
  const { width, height, position } = cfg as Required<TitleStyleProps>;
  const [hW, hH] = [+width / 2, +height / 2];
  let [x, y, textAlign, textBaseline] = [+hW, +hH, 'center', 'middle'];
  const pos = parsePosition(position);

  if (pos.includes('l')) [x, textAlign] = [0, 'start'];
  if (pos.includes('r')) [x, textAlign] = [+width, 'end'];
  if (pos.includes('t')) [y, textBaseline] = [0, 'top'];
  if (pos.includes('b')) [y, textBaseline] = [+height, 'bottom'];

  return { x, y, textAlign, textBaseline };
}

export class Title extends Component<TitleStyleProps> {
  private title!: Text;

  constructor(options: TitleOptions) {
    super(options, {
      text: '',
      width: 0,
      height: 0,
      fill: '#4a505a',
      fontWeight: 'bold',
      fontSize: 12,
      fontFamily: 'sans-serif',
      inset: 0,
      spacing: 0,
      position: 'top-left',
    });
  }

  public getAvailableSpace(): DOMRect {
    const container = this;
    const {
      width: containerWidth,
      height: containerHeight,
      position,
      spacing,
      inset,
    } = this.attributes as Required<TitleStyleProps>;
    const title = container.querySelector<DisplayObject>(CLASS_NAMES.text.class);
    if (!title) return new BBox(0, 0, +containerWidth, +containerHeight);
    const { width: titleWidth, height: titleHeight } = title.getBBox();
    const [spacingTop, spacingRight, spacingBottom, spacingLeft] = parseSeriesAttr(spacing);

    let [x, y, width, height] = [0, 0, +containerWidth, +containerHeight];
    const pos = parsePosition(position);

    if (pos.includes('i')) return new BBox(x, y, width, height);

    pos.forEach((p, i) => {
      if (p === 't')
        [y, height] =
          i === 0
            ? [titleHeight + spacingBottom, +containerHeight - titleHeight - spacingBottom]
            : [0, +containerHeight];
      if (p === 'r') [width] = [+containerWidth - titleWidth - spacingLeft];
      if (p === 'b') [height] = [+containerHeight - titleHeight - spacingTop];
      if (p === 'l')
        [x, width] =
          i === 0 ? [titleWidth + spacingRight, +containerWidth - titleWidth - spacingRight] : [0, +containerWidth];
    });

    const [insetTop, insetRight, insetBottom, insetLeft] = parseSeriesAttr(inset);
    const [insetWidth, insetHeight] = [insetLeft + insetRight, insetTop + insetBottom];
    return new BBox(x + insetLeft, y + insetTop, width - insetWidth, height - insetHeight);
  }

  public getBBox(): DOMRect {
    if (this.title) return this.title.getBBox();
    return new BBox(0, 0, 0, 0);
  }

  public render(attributes: Required<TitleStyleProps>, container: Group) {
    const { width, height, position, spacing, classNamePrefix, ...restStyle } = attributes;

    const [titleStyle] = splitStyle(restStyle);
    const { x, y, textAlign, textBaseline } = getTitleLayout(attributes);

    ifShow(!!restStyle.text, select(container), (group) => {
      const titleClassName = getLegendClassName(CLASS_NAMES.text.name, CLASSNAME_SUFFIX_MAP.title, classNamePrefix);
      this.title = group
        .maybeAppendByClassName(CLASS_NAMES.text, 'text')
        .attr('className', titleClassName)
        .styles(titleStyle)
        .call(mayApplyStyle, { x, y, textAlign, textBaseline })
        .node();
    });
  }
}
