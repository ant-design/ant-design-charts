import { CustomEvent } from '@antv/g';
import { noop, set } from '@antv/util';
import type { CallableStyleProps, ComponentOptions, PrefixStyleProps } from '../../../core';
import { Component } from '../../../core';
import type { GroupStyleProps } from '../../../shapes';
import { Group } from '../../../shapes';
import type { CallbackParameter } from '../../../types';
import {
  Selection,
  SeriesAttr,
  classNames,
  deepAssign,
  getCallbackValue,
  groupBy,
  select,
  subStyleProps,
} from '../../../util';
import type { NavigatorStyleProps } from '../../navigator';
import { Navigator } from '../../navigator';
import { ifHorizontal } from '../utils';
import type { CategoryItemStyleProps } from './item';
import { CategoryItem } from './item';
import type { PoptipStyleProps } from '../../poptip/types';
import { getLegendClassName } from '../utils/classname';
import { CLASSNAME_SUFFIX_MAP } from '../constant';

interface CategoryItemsDatum {
  [keys: string]: any;
}

type CallableItemStyle = CallableStyleProps<
  Omit<CategoryItemStyleProps, 'width' | 'height'>,
  CallbackParameter<CategoryItemsDatum>
>;

export type PoptipRender = {
  render?: (params: {
    label: string | number;
    value: string | number;
    color?: string;
    [key: string]: unknown;
  }) => string;
};

export type CategoryItemsStyleProps = GroupStyleProps &
  PrefixStyleProps<CallableItemStyle, 'item'> &
  PrefixStyleProps<NavigatorStyleProps, 'nav'> & {
    data: CategoryItemsDatum[];
    orientation?: 'horizontal' | 'vertical';
    layout?: 'flex' | 'grid';
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    gridRow?: number;
    gridCol?: number;
    // maxItemWidth?: number;
    padding?: SeriesAttr;
    rowPadding?: number;
    colPadding?: number;
    click?: (el: Selection) => void;
    mouseenter?: (el: Selection) => void;
    mouseleave?: (el: Selection) => void;
    poptip?: PoptipStyleProps & PoptipRender;
    focus?: boolean;
    focusMarkerSize?: number;
    classNamePrefix?: string;
    render?: (data: CategoryItemsDatum[]) => string | HTMLElement;
  };

export type CategoryItemsOptions = ComponentOptions<CategoryItemsStyleProps>;

type ItemLayout = {
  page: number;
  index: number;
  pageIndex: number;
  row: number;
  col: number;
  x: number;
  y: number;
  [keys: string]: any;
};

const CLASS_NAMES = classNames(
  {
    page: 'item-page',
    navigator: 'navigator',
    item: 'item',
  },
  'items'
);

/**
 * if value exists, it need to follow rule, otherwise, return default value
 * @param value
 * @param rule
 * @param defaultValue
 * @returns
 */
const ifSatisfied = <T>(value: T, rule: (val: T) => boolean, defaultValue = true) => {
  if (value) {
    return rule(value);
  }
  return defaultValue;
};

export class CategoryItems extends Component<CategoryItemsStyleProps> {
  constructor(options: CategoryItemsOptions) {
    super(options, {
      data: [],
      gridRow: Infinity,
      gridCol: undefined,
      padding: 0,
      width: 1000,
      height: 100,
      rowPadding: 0,
      colPadding: 0,
      layout: 'flex',
      orientation: 'horizontal',
      click: noop,
      mouseenter: noop,
      mouseleave: noop,
    });
  }

  private navigator!: Navigator;

  private navigatorShape: [number, number] = [0, 0];

  private get pageViews() {
    return this.navigator.getContainer();
  }

  private get grid(): [number, number] {
    const { gridRow, gridCol, data } = this.attributes;
    if (!gridRow && !gridCol) throw new Error('gridRow and gridCol can not be set null at the same time');
    if (!!gridRow && !!gridCol) return [gridRow, gridCol];
    if (gridRow) return [gridRow, data.length];
    return [data.length, gridCol!]; // !!gridCol
  }

  private get renderData() {
    const { data, layout, poptip, focus, focusMarkerSize, classNamePrefix } = this.attributes;
    const style = subStyleProps<CategoryItemStyleProps>(this.attributes, 'item');

    const d = data.map((datum, index) => {
      const { id = index as number, label: labelText, value: valueText } = datum;
      return {
        id: `${id}`,
        index,
        style: {
          layout,
          labelText,
          valueText,
          poptip,
          focus,
          focusMarkerSize,
          classNamePrefix,
          ...Object.fromEntries(
            Object.entries(style).map(([key, val]) => [key, getCallbackValue(val, [datum, index, data])])
          ),
        } as CategoryItemStyleProps,
      };
    });
    return d;
  }

  private getGridLayout() {
    const { orientation, width, rowPadding, colPadding } = this.attributes;
    const [navWidth] = this.navigatorShape;
    const [gridRow, gridCol] = this.grid;
    const pageSize = gridCol * gridRow;

    let prevOffset = 0;
    return (this.pageViews.children as CategoryItem[]).map((item, index) => {
      // calc page, row and column
      const page = Math.floor(index / pageSize);
      const pageIndex = index % pageSize;
      const dir = this.ifHorizontal(gridCol, gridRow);
      const pos = [Math.floor(pageIndex / dir), pageIndex % dir];
      if (orientation === 'vertical') pos.reverse();
      const [row, col] = pos;

      // calc x, y and shape
      const colWidth = (width - navWidth - (gridCol - 1) * colPadding) / gridCol;
      // const rowHeight = getRenderBBox(item).height;
      const rowHeight = item.getBBox().height;

      let [x, y] = [0, 0];
      if (orientation === 'horizontal') {
        [x, y] = [prevOffset, row * (rowHeight + rowPadding)];
        prevOffset = col === gridCol - 1 ? 0 : prevOffset + colWidth + colPadding;
      } else {
        [x, y] = [col * (colWidth + colPadding), prevOffset];
        prevOffset = row === gridRow - 1 ? 0 : prevOffset + rowHeight + rowPadding;
      }

      return { page, index, row, col, pageIndex, width: colWidth, height: rowHeight, x, y } as ItemLayout;
    });
  }

  private getFlexLayout(): ItemLayout[] {
    const { width: maxWidth, height: maxHeight, rowPadding, colPadding: cP } = this.attributes;
    const [navWidth] = this.navigatorShape;
    const [gridRow, gridCol] = this.grid;

    const [limitWidth, limitHeight] = [maxWidth - navWidth, maxHeight];
    let [x, y, page, pageIndex, col, row, prevWidth, prevHeight] = [0, 0, 0, 0, 0, 0, 0, 0];
    return (this.pageViews.children as CategoryItem[]).map((item, index) => {
      // const { width, height } = getRenderBBox(item);
      const { width, height } = item.getBBox();
      const colPadding = prevWidth === 0 ? 0 : cP;
      // assume that every item has the same height
      const nextWidth = prevWidth + colPadding + width;
      // inline
      if (nextWidth <= limitWidth && ifSatisfied(col, (c) => c < gridCol)) {
        [x, y, prevWidth] = [prevWidth + colPadding, prevHeight, nextWidth];
        return { width, height, x, y, page, index, pageIndex: pageIndex++, row, col: col++ };
      }

      // wrap
      [row, col, prevWidth, prevHeight] = [row + 1, 0, 0, prevHeight + height + rowPadding];
      const nextHeight = prevHeight + height;
      if (nextHeight <= limitHeight && ifSatisfied(row, (r) => r < gridRow)) {
        [x, y, prevWidth] = [prevWidth, prevHeight, width];
        return { width, height, x, y, page, index, pageIndex: pageIndex++, row, col: col++ };
      }

      // paging
      [x, y, prevWidth, prevHeight, page, pageIndex, row, col] = [0, 0, width, 0, page + 1, 0, 0, 0];
      return { width, height, x, y, page, index, pageIndex: pageIndex++, row, col: col++ };
    });
  }

  private get itemsLayout() {
    this.navigatorShape = [0, 0];
    const cb = this.attributes.layout === 'grid' ? this.getGridLayout : this.getFlexLayout;
    const layout = cb.call(this);
    // re layout
    if (layout.slice(-1)[0].page > 0) {
      this.navigatorShape = [55, 0];
      return cb.call(this);
    }
    return layout;
  }

  private ifHorizontal<T>(a: T, b: T): T {
    const { orientation } = this.attributes;
    return ifHorizontal(orientation, a, b);
  }

  private flattenPage(container: Group) {
    container.querySelectorAll(CLASS_NAMES.item.class).forEach((item) => {
      container.appendChild(item);
    });
    container.querySelectorAll(CLASS_NAMES.page.class).forEach((page) => {
      const removedPage = container.removeChild(page);
      removedPage.destroy();
    });
  }

  private renderItems(container: Group) {
    const { click, mouseenter, mouseleave, classNamePrefix } = this.attributes;
    this.flattenPage(container);
    const dispatchCustomEvent = this.dispatchCustomEvent.bind(this);
    const itemClassName = getLegendClassName(CLASS_NAMES.item.name, CLASSNAME_SUFFIX_MAP.item, classNamePrefix);
    select(container)
      .selectAll(CLASS_NAMES.item.class)
      .data(this.renderData, (d) => d.id)
      .join(
        (enter) =>
          enter
            .append(({ style, ...rest }) => new CategoryItem({ style }, rest))
            .attr('className', itemClassName)
            .on('click', function () {
              click?.(this);
              dispatchCustomEvent('itemClick', { item: this });
            })
            .on('pointerenter', function () {
              mouseenter?.(this);
              dispatchCustomEvent('itemMouseenter', { item: this });
            })
            .on('pointerleave', function () {
              mouseleave?.(this);
              dispatchCustomEvent('itemMouseleave', { item: this });
            }),
        (update) =>
          update.each(function ({ style }) {
            this.update(style);
          }),
        (exit) => exit.remove()
      );
  }

  private relayoutNavigator() {
    const { layout, width } = this.attributes;
    const height = (this.pageViews.children[0] as Group)?.getBBox().height || 0;
    const [navWidth, navHeight] = this.navigatorShape;

    this.navigator.update(layout === 'grid' ? { pageWidth: width! - navWidth, pageHeight: height - navHeight } : {});
  }

  private adjustLayout() {
    const itemsLayouts = Object.entries(groupBy(this.itemsLayout, 'page')).map(([page, layouts]) => ({
      page,
      layouts,
    }));
    const categoryItems = [...this.navigator.getContainer().children] as CategoryItem[];

    itemsLayouts.forEach(({ layouts }) => {
      const page = this.pageViews.appendChild(new Group({ className: CLASS_NAMES.page.name }));
      layouts.forEach((layout) => {
        const { x, y, index, width, height } = layout;
        const item = categoryItems[index];
        // @ts-ignore
        page.appendChild(item);
        set(item, '__layout__', layout);
        item.update({ x, y, width, height });
      });
    });
    this.relayoutNavigator();
  }

  private renderNavigator(container: Selection) {
    const { orientation, classNamePrefix } = this.attributes;
    const navStyle = subStyleProps(this.attributes, 'nav');
    const style = deepAssign({ orientation, classNamePrefix }, navStyle);
    const that = this;
    container
      .selectAll(CLASS_NAMES.navigator.class)
      .data(['nav'])
      .join(
        (enter) =>
          enter
            .append(() => new Navigator({ style }))
            .attr('className', CLASS_NAMES.navigator.name)
            .each(function () {
              that.navigator = this;
            }),
        (update) =>
          update.each(function () {
            this.update(style);
          }),
        (exit) => exit.remove()
      );

    return this.navigator;
  }

  public getBBox(): DOMRect {
    return this.navigator.getBBox();
  }

  render(attributes: Required<CategoryItemsStyleProps>, container: Group) {
    const { data } = this.attributes;
    if (!data || data.length === 0) return;
    /**
     * 1. render items
     * 2. paging
     * 3. layout
     */
    const navigator = this.renderNavigator(select(container));

    this.renderItems(navigator.getContainer());
    this.adjustLayout();
  }

  private dispatchCustomEvent(type: string, payload: any) {
    const evt = new CustomEvent(type, {
      detail: payload,
    });
    this.dispatchEvent(evt as any);
  }
}
