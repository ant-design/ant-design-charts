import G6, { IGroup, Node, LabelStyle } from '@antv/g6';
import {
  defaultMargin,
  defaultLabelStyle,
  defaultTitleLabelStyle,
  defaultTitleRectStyle,
  defaultCardStyle,
  defaultIconStyle,
} from './constants';
import { getStyle, getCssPadding, getStatusBBox, getStatusCfg } from './utils';
import { createMarker } from './elements';
import { CardNodeCfg, CardItems } from './interface';

// 通用指标卡
export const registerIndicatorCardNode = () => {
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
          customContent,
        } = nodeCfg as CardNodeCfg;
        const appendPadding = getStatusBBox(badge);
        const { style: labelStyle } = label;
        const cardPadding = getCssPadding(padding);
        const paddingArray = cardPadding.map(
          (item: number, index: number) => item + appendPadding[index],
        );
        const { style: titleStyle, containerStyle: titleContainerStyle } = titleCfg ?? {};
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
        let titleTextShape, itemShape, titleShape;
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
          titleTextShape = group!.addShape('text', {
            attrs: {
              x: paddingArray[3],
              y: paddingArray[0],
              textBaseline: 'top',
              text: title,
              ...defaultTitleLabelStyle,
              ...getStyle(titleStyle, cfg, group),
            },
            name: 'title',
          });
          const { height: titleHeight } = titleTextShape
            ? titleTextShape.getBBox()
            : { height: size[1] / 2 };

          titleShape?.attr('height', titleHeight + paddingArray[0] + paddingArray[2]);
          height += titleShape.getBBox().height;
        }

        if (items) {
          itemShape = group!.addShape('rect', {
            attrs: {
              x: paddingArray[3],
              y: height,
              width: contentWidth,
              height: 0,
              ...getStyle(itemContainerStyle, cfg, group),
            },
            name: 'item-box',
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
            const itemsHeight = [];
            if (customContent) {
              itemsHeight.push(
                customContent(item, group, {
                  startX: paddingArray[3] + itemPaddingArray[3],
                  startY: height,
                  width: itemContentWidth,
                }) ?? 0,
              );
            } else {
              itemsHeight.push(
                ...createRowItems(
                  item,
                  itemContentWidth,
                  paddingArray[3] + itemPaddingArray[3],
                  index,
                ),
              );
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

        itemShape?.attr(
          'height',
          Math.max(height - titleShape?.getBBox().height + itemPaddingArray[2], size[1]),
        );
        const shapeHeight = items
          ? titleShape?.getBBox().height + itemShape?.getBBox().height + paddingArray[2]
          : titleShape?.getBBox().height + itemShape?.getBBox().height;
        shape?.attr('height', shapeHeight);

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
              collapsed,
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
      update(cfg, node) {
        const group = node.getContainer();
        const markerShape = group
          .get('children')
          .find((item: Node) => item.get('type') === 'marker');
        const collapsed = node.getModel().collapsed;
        markerShape?.attr({
          symbol: collapsed ? G6.Marker.expand : G6.Marker.collapse,
        });
      },
    },
    'single-node',
  );
};
// 组织架构图
export const registerOrganizationCardNode = () => {
  G6.registerNode(
    'organization-card',
    {
      draw(cfg: Omit<CardNodeCfg, 'items'> | undefined = {}, group: IGroup | undefined) {
        const { value = {}, nodeCfg, markerCfg } = cfg;
        const { style, padding = 0, label = {}, customContent } = nodeCfg as CardNodeCfg;
        const { style: labelStyle } = label;
        const paddingArray = getCssPadding(padding);
        let size = (cfg?.size || [100, 30]) as number[];
        if (typeof size === 'number') size = [size, size];
        let height = 0; // 统计容器总高度，动态设置，宽度不做调整
        const contentWidth = size[0] - paddingArray[1] - paddingArray[3];
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

        if (value) {
          height += paddingArray[0];
          const createRowItems = (
            item: CardItems,
            contentWidth: number,
            startX: number,
            index: number | string = 0,
          ): number[] => {
            let iconWidth = 0;
            const rowHeight: number[] = [];
            const keys = ['icon', 'text', 'value'];
            const getXY = (type: string, layoutCfg: LabelStyle) => {
              const { fontSize = 12 } = layoutCfg;
              let x = 0;
              let y = 0;
              switch (type) {
                case 'icon':
                  x = startX;
                  y = height;
                  break;
                case 'text':
                  x = startX + (contentWidth + iconWidth) / 2;
                  y = item.value ? paddingArray[0] : (size[1] - fontSize) / 2;
                  break;
                case 'value':
                  x = startX + (contentWidth + iconWidth) / 2;
                  y = item.text
                    ? paddingArray[0] + rowHeight[1] + defaultMargin
                    : (size[1] - fontSize) / 2;
                  break;
                default:
                  break;
              }
              return { x, y };
            };
            keys.forEach((key: string, keyIndex: number) => {
              const isIcon = key.startsWith('icon');
              const shapeStyle = getStyle(labelStyle, cfg, group, key);
              if (key === 'icon' && item[key]) {
                iconWidth = shapeStyle.width || 32;
              }
              const keyShape = group!.addShape(isIcon ? 'image' : 'text', {
                attrs: {
                  textBaseline: 'top',
                  textAlign: 'center',
                  ...getXY(key, shapeStyle),
                  text: item[key],
                  img: item[key],
                  ...(isIcon ? defaultIconStyle : defaultLabelStyle),
                  ...shapeStyle,
                },
                name: `${key}-${index}-${keyIndex}`,
              });
              rowHeight.push(keyShape.getBBox().height);
            });
            return rowHeight;
          };
          const createItems = (item: CardItems, index: number = 0) => {
            const itemsHeight = [];
            if (customContent) {
              itemsHeight.push(
                customContent(item, group, {
                  startX: paddingArray[3],
                  startY: height,
                  width: contentWidth,
                }) ?? 0,
              );
            } else {
              itemsHeight.push(...createRowItems(item, contentWidth, paddingArray[3], index));
            }
            height += Math.max(...itemsHeight);
          };

          createItems(value as CardItems);
        }

        shape?.attr('height', Math.max(height + paddingArray[2], size[1]));
        // collapse marker
        if (markerCfg) {
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
              collapsed,
              style: markerStyle,
            },
            group,
            [shapeWidth, shapeHeight],
          );
          shape.attr('defaultCollapsed', collapsed);
        }

        return shape;
      },
    },
    'single-node',
  );
};
