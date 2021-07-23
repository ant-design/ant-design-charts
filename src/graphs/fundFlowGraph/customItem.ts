import G6, { IGroup, Node } from '@antv/g6';
import { defaultMargin, defaultLabelStyle } from '../constants';
import { getStyle, getCssPadding, getSize, getArrowCfg, createMarker } from '../utils';
import { CardNodeCfg, CardItems, ModelConfig, IPoint, EdgeCfg } from '../interface';
import { edgeType } from './index';

interface ItemModelConfig extends ModelConfig {
  value: edgeType;
}

// 资金流向图
export const registerFundFlowItems = () => {
  // 注册节点
  G6.registerNode(
    'fund-card',
    {
      // @ts-ignore
      draw: (cfg: CardNodeCfg | undefined = {}, group: IGroup | undefined) => {
        const { value = {}, nodeCfg, markerCfg } = cfg;
        const { label = {}, style, padding = 0, customContent } = nodeCfg as CardNodeCfg;
        const { style: labelStyle } = label;
        const paddingArray = getCssPadding(padding);
        const size = getSize(cfg.size);
        let height = 0; // 统计容器总高度，动态设置
        const shapeWidth = size[0];
        const contentWidth = shapeWidth - paddingArray[1] - paddingArray[3];
        const contentHeight = size[1] - paddingArray[0] - paddingArray[2];
        // card box
        const cardStyle = getStyle(style, cfg, group);
        const shape = group!.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            width: size[0],
            height: size[1],
            radius: size[1] / 2,
            fill: '#fff',
            stroke: '#40a9ff',
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
          ): number[] => {
            const { text, icon } = item;
            let textShape, iconShape;
            if (icon) {
              iconShape = group!.addShape('image', {
                attrs: {
                  x: startX,
                  y: height,
                  img: icon,
                  width: contentHeight,
                  height: contentHeight,
                  ...getStyle(labelStyle, cfg, group, 'icon'),
                },
                name: 'fund-icon',
              });
            }
            textShape = group?.addShape('text', {
              attrs: {
                textBaseline: 'middle',
                textAlign: iconShape ? 'start' : 'center',
                x:
                  startX +
                  (iconShape ? iconShape?.getBBox().width + defaultMargin : contentWidth / 2),
                y: paddingArray[0] + contentHeight / 2,
                text,
                ...defaultLabelStyle,
                ...getStyle(labelStyle, cfg, group, 'text'),
              },
              name: `fund-text`,
            });
            return [textShape?.getBBox().height ?? 0, iconShape?.getBBox().height ?? 0];
          };
          const createItems = (item: CardItems) => {
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
              itemsHeight.push(...createRowItems(item, contentWidth, paddingArray[3]));
            }
            height += Math.max(...itemsHeight);
          };

          createItems(value as CardItems);
        }
        shape?.attr('height', Math.max(size[1], height + paddingArray[2]));

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

  // 注册边
  G6.registerEdge(
    'fund-polyline',
    {
      // @ts-ignore
      draw: function draw(cfg: ItemModelConfig | undefined = {}, group: IGroup | undefined) {
        const { edgeCfg, value } = cfg;
        let text;
        let subText;
        if (value instanceof Object) {
          text = value.text;
          subText = value.subText;
        } else {
          text = value;
        }
        const startPoint = cfg.startPoint as IPoint;
        const endPoint = cfg.endPoint as IPoint;
        const { x: startX, y: startY } = startPoint;
        const { x: endX, y: endY } = endPoint;
        const Ydiff = endY - startY;
        const slope = Ydiff !== 0 ? Math.min(500 / Math.abs(Ydiff), 20) : 0;
        const cpOffset = slope > 15 ? 0 : 16;
        const offset = Ydiff < 0 ? cpOffset : -cpOffset;

        const line1EndPoint = {
          x: startX + slope,
          y: endY + offset,
        };
        const line2StartPoint = {
          x: line1EndPoint.x + cpOffset,
          y: endY,
        };

        // 控制点坐标
        const controlPoint = {
          x: ((line1EndPoint.x - startX) * (endY - startY)) / (line1EndPoint.y - startY) + startX,
          y: endY,
        };

        let path = [
          ['M', startX, startY],
          ['L', line1EndPoint.x, line1EndPoint.y],
          ['Q', controlPoint.x, controlPoint.y, line2StartPoint.x, line2StartPoint.y],
          ['L', endX, endY],
        ];

        if (Math.abs(Ydiff) <= 5) {
          path = [
            ['M', startX, startY],
            ['L', endX, endY],
          ];
        }
        const {
          style: edgeStyle,
          startArrow: startArrowCfg,
          endArrow: endArrowCfg,
          label: labelCfg,
        } = edgeCfg as EdgeCfg;
        const startArrow = getArrowCfg(startArrowCfg, cfg);
        const endArrow = getArrowCfg(endArrowCfg, cfg);
        const { style: labelStyle } = labelCfg ?? {};
        const line = group!.addShape('path', {
          attrs: {
            path,
            stroke: '#ccc',
            startArrow,
            endArrow,
            ...(typeof edgeStyle === 'function' ? edgeStyle(cfg, group) : edgeStyle),
          },
          name: 'path-shape',
        });

        const createItem = (itemText: string, key: string) => {
          group!.addShape('text', {
            attrs: {
              text: itemText,
              x: line2StartPoint.x,
              y: key === 'text' ? endY - 4 : endY + 16,
              ...defaultLabelStyle,
              ...getStyle(labelStyle, cfg, group, key),
            },
            name: `line-text-${key}`,
          });
        };
        text && createItem(text, 'text');
        subText && createItem(subText, 'subText');

        return line;
      },
      update: undefined,
    },
    'single-edge',
  );
};
