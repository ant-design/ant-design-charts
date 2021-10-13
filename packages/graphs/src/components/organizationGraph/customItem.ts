import G6, { IGroup, LabelStyle } from '@antv/g6';
import { defaultMargin, defaultLabelStyle, defaultCardStyle } from '../../constants';
import { getStyle, getCssPadding, createMarker } from '../../utils';
import { CardNodeCfg, CardItems } from '../../interface';

// 组织架构图
export const registerOrganizationCardNode = () => {
  const defaultIconStyle = {
    width: 12,
    height: 12,
  };
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
                  y = item.text ? paddingArray[0] + rowHeight[1] + defaultMargin : (size[1] - fontSize) / 2;
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
