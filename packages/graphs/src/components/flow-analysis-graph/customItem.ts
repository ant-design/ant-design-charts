import G6, { IGroup, Node } from '@antv/g6';
import { clone, deepMix, each, isBoolean, isPlainObject, mix } from '@antv/util';
import { defaultCardStyle, defaultLabelStyle, defaultLineLabelStyle, defaultMargin } from '../../constants';
import { CardItems, CardNodeCfg, EdgeCfg, EdgeConfig, IPoint, IShape, CardItem } from '../../interface';
import {
  cloneBesidesImg,
  createMarker,
  getArrowCfg,
  getCssPadding,
  getStatusBBox,
  getStatusCfg,
  getStyle,
  setEllipsis,
  getChildrenData,
} from '../../utils';
import { getGlobalInstance } from '../../utils/global';

const getPathInfo = (
  cfg: EdgeConfig<
    | string
    | {
        text?: string;
        subText?: string;
      }
  >,
) => {
  const { edgeCfg } = cfg;
  const startPoint = cfg.startPoint as IPoint;
  const endPoint = cfg.endPoint as IPoint;
  const { x: startX, y: startY } = startPoint;
  const { x: endX, y: endY } = endPoint;
  const yDiff = endY - startY;
  const useControlPoint = Math.abs(yDiff) > 0;
  let line1EndPoint: IPoint;
  let line2StartPoint: IPoint;
  let controlPoint: IPoint;
  let path: Array<Array<string | number>>;
  if (Math.abs(yDiff) <= 5) {
    line2StartPoint = {
      x: startX + 20,
      y: endY,
    };
    path = [
      ['M', startX, startY],
      ['L', endX, endY],
    ];
  } else {
    const slope = useControlPoint ? Math.min(500 / Math.abs(yDiff), 20) : 0;
    const cpOffset = slope > 15 ? 0 : 16;
    const offset = yDiff < 0 ? cpOffset : -cpOffset;

    line1EndPoint = {
      x: startX + slope,
      y: endY + offset,
    };
    line2StartPoint = {
      x: line1EndPoint.x + cpOffset,
      y: endY,
    };
    // 控制点坐标
    controlPoint = {
      x: ((line1EndPoint.x - startX) * (endY - startY)) / (line1EndPoint.y - startY) + startX,
      y: endY,
    };
    path = [
      ['M', startX, startY],
      ['L', line1EndPoint.x, line1EndPoint.y],
      ['Q', controlPoint.x, controlPoint.y, line2StartPoint.x, line2StartPoint.y],
      ['L', endX, endY],
    ];
  }

  const { startArrow: startArrowCfg, endArrow: endArrowCfg } = edgeCfg as EdgeCfg;
  const startArrow = getArrowCfg(startArrowCfg, cfg);
  const endArrow = getArrowCfg(endArrowCfg, cfg);

  return {
    startArrow,
    endArrow,
    path,
    line2StartPoint,
    endY,
  };
};

const getPathText = (value: EdgeCfg['type']) => {
  let text;
  let subText;
  if (value instanceof Object) {
    text = value.text;
    subText = value.subText;
  } else {
    text = value;
  }
  return { text, subText };
};

// 通用指标卡
export const registerIndicatorGeometries = () => {
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
  // 注册节点
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
          percent,
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
        const { title, items, percent: percentValue } = value as CardItem;
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
        let outerMaxX = shapeWidth;
        if (autoWidth) {
          const shapeMaxX = Math.max.apply(
            null,
            group?.getChildren()?.map((childrenShape) => {
              return childrenShape.getBBox().maxX || 0;
            }) as number[],
          );
          outerMaxX = Math.max(shapeWidth, shapeMaxX + paddingArray[1]);
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
        if (percent && percentValue > 0) {
          const {
            size: percentSize = 4,
            position = 'bottom',
            style: percentStyle = {
              fill: '#40a9ff',
            },
            backgroundStyle = {
              fill: 'rgba(0,0,0,.1)',
              radius: [0, 0, 2, 2],
            },
          } = percent;
          const statusConfig = getStatusCfg(
            {
              position,
              size: [outerMaxX, percentSize],
            },
            [outerMaxX, shapeHeight],
          );

          group!.addShape('rect', {
            attrs: {
              ...statusConfig,
              ...getStyle(backgroundStyle, cfg, group),
            },
            name: 'percent-rect-background',
          });
          group!.addShape('rect', {
            attrs: {
              fill: '#40a9ff',
              ...statusConfig,
              width: Math.min(1, percentValue) * statusConfig.width,
              ...getStyle(percentStyle, cfg, group),
            },
            name: 'percent-rect',
          });
        }
        // collapse marker
        if (markerCfg) {
          const graph = getGlobalInstance(cfg._graphId);
          const { collapsed: stateCollapsed } = group?.get('item')?.getModel() ?? {};
          const { width: shapeWidth, height: shapeHeight } = shape.getBBox();
          let markerCfgArray = [];
          if (typeof markerCfg === 'function') {
            const callbackMarkerCfg = markerCfg(
              {
                ...cfg,
                children: getChildrenData(graph?.get('eventData').getData(), cfg.g_currentPath as string),
              },
              group,
            );
            markerCfgArray = callbackMarkerCfg instanceof Array ? callbackMarkerCfg : [callbackMarkerCfg];
          } else {
            markerCfgArray = markerCfg instanceof Array ? markerCfg : [markerCfg];
          }
          markerCfgArray.forEach((mc) => {
            const { show, position = 'right', collapsed, style: markerStyle } = mc;
            createMarker(
              {
                show,
                position,
                collapsed: stateCollapsed ?? collapsed, // 优先使用内部状态
                style: markerStyle,
              },
              group,
              [shapeWidth, shapeHeight],
              markerCfgArray.length > 1,
            );
            shape.attr('defaultCollapsed', collapsed);
          });
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
  // 注册边
  G6.registerEdge(
    'labels-line',
    {
      // @ts-ignore
      draw: function draw(cfg: ItemModelConfig | undefined = {}, group: IGroup | undefined) {
        const { edgeCfg, value } = cfg;
        const { text, subText } = getPathText(value);
        const { style: edgeStyle, label: labelCfg } = edgeCfg as EdgeCfg;
        const { startArrow, endArrow, path, line2StartPoint, endY } = getPathInfo(cfg);
        const { style: labelStyle, margin = 4 } = labelCfg ?? {};

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

        const createItem = (itemText: string, key: string, attrs: object) => {
          group!.addShape('text', {
            attrs: {
              text: itemText,
              x: line2StartPoint.x,
              ...attrs,
            },
            name: `line-text-${key}`,
          });
        };
        if (text) {
          const textStyle = { ...defaultLineLabelStyle, ...getStyle(labelStyle, cfg, group, 'text') };
          const offsetY = subText ? Number((`${textStyle.fontSize}` || '12').replace(/px/g, '')) / 2 : 0;
          createItem(text, 'text', {
            y: endY - offsetY - margin / 2,
            ...textStyle,
          });
        }
        if (subText) {
          const textStyle = { ...defaultLineLabelStyle, ...getStyle(labelStyle, cfg, group, 'subText') };
          const offsetY = Number((`${textStyle.fontSize}` || '12').replace(/px/g, '')) / 2;
          createItem(text, 'subText', {
            y: endY + offsetY + margin / 2,
            ...textStyle,
          });
        }
        return line;
      },
      // @ts-ignore
      update: (cfg: ItemModelConfig, edge) => {
        const { edgeCfg, value } = cfg;
        const { text, subText } = getPathText(value);
        const group = edge.getContainer();
        const getShape = (shapeName: string) => {
          return group.get('children').find((item: Node) => item.get('name') === shapeName);
        };
        const { startArrow, endArrow, path, line2StartPoint, endY } = getPathInfo(cfg);
        const { style: edgeStyle, label: labelCfg } = edgeCfg as EdgeCfg;
        const { style: labelStyle, margin = 4 } = labelCfg ?? {};

        // path
        const pathShape = getShape('path-shape');
        pathShape?.attr({
          path,
          stroke: '#ccc',
          startArrow,
          endArrow,
          ...(typeof edgeStyle === 'function' ? edgeStyle(cfg, group) : edgeStyle),
        });
        // path text
        const texts = ['text', 'subText'];
        const hasSubText = !!getShape(`line-text-subText`);
        texts.forEach((key: string) => {
          const textShape = getShape(`line-text-${key}`);
          const textStyle = { ...defaultLineLabelStyle, ...getStyle(labelStyle, cfg, group, key) };
          const offsetY = hasSubText ? Number((`${textStyle.fontSize}` || '12').replace(/px/g, '')) / 2 : 0;
          textShape?.attr({
            x: line2StartPoint.x,
            y: key === 'text' ? endY - offsetY - margin / 2 : endY + offsetY + margin / 2,
            text: key === 'text' ? text : subText,
            ...textStyle,
          });
        });
      },
    },
    'single-edge',
  );
};
