import { Component } from '../../core';
import { HTML, type Group } from '../../shapes';
import { BBox, select, Selection, splitStyle, subStyleProps } from '../../util';
import type { TitleStyleProps } from './title';
import { getBBox, Title } from './title';
import { CategoryItems } from './category/items';
import { CATEGORY_DEFAULT_OPTIONS, CLASS_NAMES } from './constant';
import type { CategoryOptions, CategoryStyleProps } from './types';

export type { CategoryOptions, CategoryStyleProps };

class HtmlLegend extends HTML {
  update(options: any) {
    this.attr(options);
  }
}

export class Category extends Component<CategoryStyleProps> {
  constructor(options: CategoryOptions) {
    super(options, CATEGORY_DEFAULT_OPTIONS);
  }

  private titleGroup!: Selection;

  private title!: Selection<Title>;

  private itemsGroup!: Selection;

  private items!: Selection<CategoryItems>;

  private renderTitle(container: Selection, width: number, height: number) {
    const { showTitle, titleText, classNamePrefix } = this.attributes;
    const style = subStyleProps<TitleStyleProps>(this.attributes, 'title');
    const [titleStyle, groupStyle] = splitStyle(style);

    this.titleGroup = container.maybeAppendByClassName<Group>(CLASS_NAMES.titleGroup, 'g').styles(groupStyle);

    const finalTitleStyle = { width, height, ...titleStyle, text: showTitle ? titleText : '', classNamePrefix };
    this.title = this.titleGroup
      .maybeAppendByClassName(CLASS_NAMES.title, () => new Title({ style: finalTitleStyle as TitleStyleProps }))
      .update(finalTitleStyle) as Selection<Title>;
  }

  private renderCustom(container: Selection) {
    const { data } = this.attributes;

    const style = {
      innerHTML: this.attributes.render(data),
      pointerEvents: 'auto' as const,
    };

    container
      .maybeAppendByClassName(
        CLASS_NAMES.html,
        () =>
          new HtmlLegend({
            className: CLASS_NAMES.html.name,
            style,
          })
      )
      .update(style);
  }

  private renderItems(container: Selection, bbox: DOMRect) {
    const { x, y, width, height } = bbox;
    const style = subStyleProps(this.attributes, 'title', true);
    const [partialItemStyle, groupStyle] = splitStyle(style);
    // overwrite width and height to available space
    // overwrite x and y to 0
    const itemStyle = { ...partialItemStyle, width, height, x: 0, y: 0 } as CategoryStyleProps;
    this.itemsGroup = container
      .maybeAppendByClassName<Group>(CLASS_NAMES.itemsGroup, 'g')
      .styles({ ...groupStyle, transform: `translate(${x}, ${y})` });
    const that = this;
    this.itemsGroup
      .selectAll(CLASS_NAMES.items.class)
      .data(['items'])
      .join(
        (enter) =>
          enter
            .append(() => new CategoryItems({ style: itemStyle }))
            .attr('className', CLASS_NAMES.items.name)
            .each(function () {
              that.items = select(this);
            }),
        (update) => update.update(itemStyle),
        (exit) => exit.remove()
      );
  }

  private adjustLayout() {
    const { showTitle } = this.attributes;
    if (showTitle) {
      const { x, y } = this.title.node<Title>().getAvailableSpace();
      this.itemsGroup.node().style.transform = `translate(${x}, ${y})`;
    }
  }

  private get availableSpace(): DOMRect {
    const { showTitle, width, height } = this.attributes;
    if (!showTitle) return new BBox(0, 0, width!, height!);
    return (this.title.node() as Title).getAvailableSpace();
  }

  public getBBox(): DOMRect {
    const title: Title = this.title?.node();
    const items = this.items?.node();
    if (!title || !items) return super.getBBox();
    return getBBox(title, items);
  }

  render(attributes: Required<CategoryStyleProps>, container: Group) {
    const { width, height, x = 0, y = 0, classNamePrefix, render } = this.attributes;
    const ctn = select(container);

    // Set root container className
    const baseClassName = container.className || 'legend-category';
    if (classNamePrefix) {
      container.attr('className', `${baseClassName} ${classNamePrefix}legend`);
    } else if (!container.className) {
      container.attr('className', 'legend-category');
    }

    container.style.transform = `translate(${x}, ${y})`;

    if (render as CategoryStyleProps['render']) {
      this.renderCustom(ctn);
    } else {
      this.renderTitle(ctn, width!, height!);

      this.renderItems(ctn, this.availableSpace);

      this.adjustLayout();
    }
  }
}
