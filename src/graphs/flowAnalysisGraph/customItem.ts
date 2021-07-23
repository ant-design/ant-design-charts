import G6, { IGroup, Node } from '@antv/g6';
import { defaultMargin, defaultLabelStyle, defaultCardStyle } from '../constants';
import { getStyle, getCssPadding, getStatusBBox, getStatusCfg, createMarker } from '../utils';
import { CardNodeCfg, CardItems } from '../interface';

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
