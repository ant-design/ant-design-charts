import G6, { IGroup, Node } from '@antv/g6';
import { isBoolean, mix, isPlainObject, clone, each, deepMix } from '@antv/util';
import { defaultMargin, defaultLabelStyle, defaultCardStyle } from '../../constants';
import {
  getStyle,
  getCssPadding,
  getStatusBBox,
  getStatusCfg,
  createMarker,
  cloneBesidesImg,
  setEllipsis,
} from '../../utils';
import { CardNodeCfg, CardItems, IShape } from '../../interface';

// 通用指标卡
export const registerIndicatorCardNode = () => {
  const defaultTitleLabelStyle = {
    fill: '#fff',
    fontSize: 12,
  };
  const defaultTitleRectStyle = {
    fill: '#40a9ff',
    radius: [2, 2, 0, 0],
  };
  const defaultIconStyle = {
    width: 12,
    height: 12,
  };
  const ARROWS = ['startArrow', 'endArrow'];
  const SHAPE_DEFAULT_ATTRS = {
    lineWidth: 1,
    stroke: undefined,
    fill: undefined,
    lineAppendWidth: 1,
    opacity: undefined,
    strokeOpacity: undefined,
    fillOpacity: undefined,
    x: 0,
    y: 0,
    r: 10,
    width: 20,
    height: 20,
    shadowColor: undefined,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
  };
  const PATH_SHAPE_DEFAULT_ATTRS = {
    lineWidth: 1,
    stroke: '#000',
    lineDash: undefined,
    startArrow: false,
    endArrow: false,
    opacity: undefined,
    strokeOpacity: undefined,
    fillOpacity: undefined,
    shadowColor: undefined,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
  };
  const SHAPES_DEFAULT_ATTRS = {
    edge: PATH_SHAPE_DEFAULT_ATTRS,
    node: SHAPE_DEFAULT_ATTRS,
  };
  G6.registerNode(
    'indicator-card',
    {
      // @ts-ignore
      draw: (cfg: CardNodeCfg | undefined = {}, group: IGroup | undefined) => {
        const { value = {}, nodeCfg, markerCfg } = cfg;
        const {
          title: titleCfg,
          items: itemsCfg,
          label = {},
          style,
          padding = 0,
          badge,
          autoWidth,
          customContent,
        } = nodeCfg as CardNodeCfg;
        const appendPadding = getStatusBBox(badge);
        const { style: labelStyle } = label;
        const cardPadding = getCssPadding(padding);
        const paddingArray = cardPadding.map((item: number, index: number) => item + appendPadding[index]);
        const { style: titleStyle, containerStyle: titleContainerStyle, autoEllipsis = true } = titleCfg ?? {};
        const {
          style: itemStyle,
          containerStyle: itemContainerStyle,
          layout,
          itemSpacing = 4,
          sort,
          padding: itemPadding = [6, 0, 0],
        } = itemsCfg ?? {};
        const itemPaddingArray = getCssPadding(itemPadding);
        const { title, items } = value as {
          title?: string;
          items?: CardItems[];
        };
        let size = cfg?.size || [100, 30];
        if (typeof size === 'number') size = [size, size];
        let height = 0; // 统计容器总高度，动态设置
        const shapeWidth = size[0];
        const contentWidth = shapeWidth - paddingArray[1] - paddingArray[3];
        // card box
        const cardStyle = getStyle(style, cfg, group);
        const shape = group!.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            width: size[0],
            height: size[1],
            ...defaultCardStyle,
            ...cardStyle,
          },
          name: 'main-box',
          draggable: true,
        });

        // node title
        let titleTextShape;
        let itemShape;
        let titleShape;
        if (title) {
          // title rect
          titleShape = group!.addShape('rect', {
            attrs: {
              x: 0,
              y: 0,
              width: size[0],
              height: 0,
              ...defaultTitleRectStyle,
              ...getStyle(titleContainerStyle, cfg, group),
            },
            name: 'title-rect',
            draggable: true,
          });
          const textStyle = {
            ...defaultTitleLabelStyle,
            ...getStyle(titleStyle, cfg, group),
          };
          titleTextShape = group!.addShape('text', {
            attrs: {
              x: paddingArray[3],
              y: paddingArray[0],
              textBaseline: 'top',
              text: autoEllipsis && !autoWidth ? setEllipsis(title, textStyle?.fontSize, contentWidth) : title,
              ...textStyle,
            },
            name: 'title',
          });
          const { height: titleHeight } = titleTextShape ? titleTextShape.getBBox() : { height: size[1] / 2 };

          titleShape?.attr('height', titleHeight + paddingArray[0] + paddingArray[2]);
          height += titleShape.getBBox().height;
        }

        if (items) {
          if (!titleShape) {
            height += paddingArray[0];
          }
          itemShape = group!.addShape('rect', {
            attrs: {
              x: paddingArray[3],
              y: height,
              width: contentWidth,
              height: 0,
              ...getStyle(itemContainerStyle, cfg, group),
            },
            name: 'item-box',
            draggable: true,
          });
          height += itemPaddingArray[0];
          const itemContentWidth = contentWidth - itemPaddingArray[1] - itemPaddingArray[3];
          const isArray = Array.isArray(items);
          const createRowItems = (
            item: CardItems,
            contentWidth: number,
            startX: number,
            index: number | string = 0,
          ): number[] => {
            const rowHeight: number[] = [];
            let valueShapeWidth = 0;
            const keys = sort ? Object.keys(item) : ['text', 'value', 'icon'];
            keys.forEach((key: string, keyIndex: number) => {
              let x;
              const isIcon = key.startsWith('icon');
              // sort 直接均分，简单化
              if (sort || layout === 'flex') {
                x = (keyIndex * contentWidth) / keys.length;
              } else if (layout === 'follow') {
                x = valueShapeWidth;
              } else {
                // layout === 'bundled'
                // 直接均分，icon 紧随 value
                x = key === 'text' ? 0 : contentWidth / 2;
                x += isIcon ? valueShapeWidth : 0;
              }

              const keyShape = group!.addShape(isIcon ? 'image' : 'text', {
                attrs: {
                  textBaseline: 'top',
                  x: startX + x,
                  y: height,
                  text: item[key],
                  img: item[key],
                  ...(isIcon ? defaultIconStyle : defaultLabelStyle),
                  ...getStyle(itemStyle || labelStyle, cfg, group, key),
                },
                name: `${key}-${index}-${keyIndex}`,
              });
              if (key === 'value' || layout === 'follow') {
                valueShapeWidth += keyShape.getBBox().width;
                valueShapeWidth += layout === 'follow' ? itemSpacing : 0;
              }
              rowHeight.push(keyShape.getBBox().height);
            });
            return rowHeight;
          };
          const createItems = (item: CardItems, index: number = 0) => {
            const itemsHeight: number[] = [];
            if (customContent) {
              itemsHeight.push(
                customContent(item, group, {
                  startX: paddingArray[3] + itemPaddingArray[3],
                  startY: height,
                  width: itemContentWidth,
                }) ?? 0,
              );
            } else {
              itemsHeight.push(...createRowItems(item, itemContentWidth, paddingArray[3] + itemPaddingArray[3], index));
            }
            height += Math.max(...itemsHeight);
            if (isArray && index !== items.length - 1) {
              height += defaultMargin;
            }
          };

          if (Array.isArray(items)) {
            items.forEach((item, index) => {
              createItems(item, index);
            });
          } else {
            createItems(items);
          }
        }

        const titleHeight = titleShape?.getBBox().height || 0;
        itemShape?.attr('height', Math.max(height - titleHeight + itemPaddingArray[2], size[1]));
        const itemHeight = itemShape?.getBBox().height || 0;
        const shapeHeight = items
          ? (titleHeight || paddingArray[0]) + itemHeight + paddingArray[2]
          : titleHeight + itemHeight;
        shape?.attr('height', shapeHeight);
        if (autoWidth) {
          const shapeMaxX = Math.max.apply(
            null,
            group?.getChildren()?.map((childrenShape) => {
              return childrenShape.getBBox().maxX || 0;
            }) as number[],
          );
          const outerMaxX = Math.max(shapeWidth, shapeMaxX + paddingArray[1]);
          titleShape?.attr('width', outerMaxX);
          shape?.attr('width', outerMaxX);
          itemShape?.attr('width', shapeMaxX - paddingArray[1]);
        }

        if (badge) {
          const statusConfig = getStatusCfg(badge, [size[0], shapeHeight]);
          group!.addShape('rect', {
            attrs: {
              fill: '#40a9ff',
              ...statusConfig,
              ...getStyle(badge.style, cfg, group),
            },
            name: 'status-rect',
          });
        }
        // collapse marker
        if (markerCfg) {
          const { collapsed: stateCollapsed } = group?.get('item')?.getModel() ?? {};
          const { width: shapeWidth, height: shapeHeight } = shape.getBBox();
          const {
            show,
            position = 'right',
            collapsed,
            style: markerStyle,
          } = typeof markerCfg === 'function' ? markerCfg(cfg, group) : markerCfg;
          createMarker(
            {
              show,
              position,
              collapsed: stateCollapsed ?? collapsed, // 优先使用内部状态
              style: markerStyle,
            },
            group,
            [shapeWidth, shapeHeight],
          );
          shape.attr('defaultCollapsed', collapsed);
        }

        return shape;
      },
      /**
       * 更新节点，包含文本
       * @override
       * @param  {Object} cfg 节点的配置项
       * @param  {Node} node 节点
       */
      // @ts-ignore
      update: undefined,
      // @ts-ignore
      setState(name: string, value: boolean, item: Node) {
        const shape: IShape = item.get('keyShape');
        if (!shape || shape.destroyed) return;

        const type = item.getType();

        const stateName = isBoolean(value) ? name : `${name}:${value}`;
        const itemStateStyle = item.getStateStyle(stateName);
        // const originStyle = item.getOriginStyle();

        // 不允许设置一个不存在的状态
        if (!itemStateStyle) {
          return;
        }

        // 要设置或取消的状态的样式
        // 当没有 state 状态时，默认使用 model.stateStyles 中的样式
        const styles = Object.assign({}, itemStateStyle);

        const group = item.getContainer();

        // 从图元素现有的样式中删除本次要取消的 states 中存在的属性值。使用对象检索更快
        const keptAttrs: any = { x: 1, y: 1, cx: 1, cy: 1 };

        if (value) {
          // style 为要设置的状态的样式
          for (const key in styles) {
            const style = styles[key];
            if (isPlainObject(style) && !ARROWS.includes(key)) {
              const subShape = group.find((element) => element.get('name') === key);
              if (subShape) {
                subShape.attr(style);
              }
            } else {
              // 非纯对象，则认为是设置到 keyShape 上面的
              shape.attr({
                [key]: style,
              });
            }
          }
        } else {
          // 所有生效的 state 的样式
          const enableStatesStyle = cloneBesidesImg(item.getCurrentStatesStyle());

          const model = item.getModel();
          // 原始样式
          const originStyle = mix({}, model.style, cloneBesidesImg(item.getOriginStyle()));

          const keyShapeName = shape.get('name');

          // cloning  shape.attr(), keys.forEach to avoid cloning the img attr, which leads to maximum clone heap #2383
          // const keyShapeStyles = clone(shape.attr())
          const shapeAttrs = shape.attr();
          const keyShapeStyles = {};
          Object.keys(shapeAttrs).forEach((key) => {
            if (key === 'img') return;
            const attr = shapeAttrs[key];
            if (attr && typeof attr === 'object') {
              keyShapeStyles[key] = clone(attr);
            } else {
              keyShapeStyles[key] = attr;
            }
          });

          // 已有样式 - 要取消的状态的样式
          const filtetDisableStatesStyle: any = {};

          // styles 为要取消的状态的样式
          for (const p in styles) {
            const style = styles[p];
            if (isPlainObject(style) && !ARROWS.includes(p)) {
              const subShape = group.find((element) => element.get('name') === p);
              if (subShape) {
                const subShapeStyles = clone(subShape.attr());
                each(style, (v, key) => {
                  if (p === keyShapeName && keyShapeStyles[key] && !keptAttrs[key]) {
                    delete keyShapeStyles[key];
                    const value = originStyle[p][key] || SHAPES_DEFAULT_ATTRS[type][key];
                    shape.attr(key, value);
                  } else if (subShapeStyles[key] || subShapeStyles[key] === 0) {
                    delete subShapeStyles[key];
                    const value = originStyle[p][key] || SHAPES_DEFAULT_ATTRS[type][key];
                    subShape.attr(key, value);
                  }
                });
                filtetDisableStatesStyle[p] = subShapeStyles;
              }
            } else {
              if (keyShapeStyles[p] && !keptAttrs[p]) {
                delete keyShapeStyles[p];
                const value =
                  originStyle[p] ||
                  (originStyle[keyShapeName] ? originStyle[keyShapeName][p] : undefined) ||
                  SHAPES_DEFAULT_ATTRS[type][p];
                shape.attr(p, value);
              }
            }
          }

          // 从图元素现有的样式中删除本次要取消的 states 中存在的属性值后，
          // 如果 keyShape 有 name 属性，则 filtetDisableStatesStyle 的格式为 { keyShapeName: {} }
          // 否则为普通对象
          if (!keyShapeName) {
            mix(filtetDisableStatesStyle, keyShapeStyles);
          } else {
            filtetDisableStatesStyle[keyShapeName] = keyShapeStyles;
          }
          for (const key in enableStatesStyle) {
            if (keptAttrs[key]) continue;
            const enableStyle = enableStatesStyle[key];
            if (!isPlainObject(enableStyle) || ARROWS.includes(key)) {
              // 把样式属性merge到keyShape中
              if (!keyShapeName) {
                mix(originStyle, {
                  [key]: enableStyle,
                });
              } else {
                mix(originStyle[keyShapeName], {
                  [key]: enableStyle,
                });
                delete originStyle[key];
              }
              delete enableStatesStyle[key];
            }
          }

          const originstyles = {};
          deepMix(originstyles, originStyle, filtetDisableStatesStyle, enableStatesStyle);
          let keyShapeSetted = false;

          for (const originKey in originstyles) {
            const style = originstyles[originKey];
            if (isPlainObject(style) && !ARROWS.includes(originKey)) {
              const subShape = group.find((element) => element.get('name') === originKey);
              if (subShape) {
                if (originKey === keyShapeName) {
                  keyShapeSetted = true;
                }
                if (originKey !== 'collapse-icon') subShape.attr(style);
              }
            } else if (!keyShapeSetted) {
              const value = style || SHAPES_DEFAULT_ATTRS[type][originKey];
              shape.attr({
                [originKey]: value,
              });
            }
          }
        }
      },
    },
    'single-node',
  );
};
