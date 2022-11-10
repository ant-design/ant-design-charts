import G6, { IGroup, ModelConfig } from '@antv/g6';
import { CardItems, CardNodeCfg, EdgeCfg, NodeCfg } from '../../interface';
import {
  getCssPadding,
  getStyle,
  createFetchLoading,
  closeFetchLoading,
  getMarkerPosition,
  getGlobalInstance,
  getChildrenData,
  pushAsyncEvent,
} from '../../utils';

const { Util } = G6;

// file tree
export const registerFileTreeGeometries = () => {
  const defaultLineWidth = 2;
  const defaultTextStyle = {
    fill: 'rgba(0,0,0,.65)',
    textAlign: 'middle',
    fontSize: 14,
    fontFamily: 'PingFangSC-Regular',
    cursor: 'pointer',
    textBaseline: 'middle',
  };
  const defaultStroke = '#40a9ff';
  const markerSize = 12;
  const defaultMarkerCfg = {
    width: markerSize,
    height: markerSize,
    radius: markerSize / 2,
    stroke: '#999',
    fill: '#fff',
    cursor: 'pointer',
    r: markerSize / 2,
    lineWidth: 1,
  };
  G6.registerNode('file-tree-node', {
    options: {
      style: {
        fill: '#e8f7ff',
      },
      stateStyles: {
        hover: {
          fillOpacity: 0.6,
        },
        selected: {},
      },
    },
    addLabel(group: IGroup, label: string, x: number, y: number) {
      return group.addShape('text', {
        attrs: {
          text: label,
          x: x * 2,
          y,
          textAlign: 'left',
          textBaseline: 'top',
          fontFamily: 'PingFangSC-Regular',
        },
        cursor: 'pointer',
        name: 'name-text-shape',
      });
    },
    addCollapse(group, props) {
      const { collapsed, markerCfg, model, size } = props;
      const { style } = markerCfg;
      const [x, y] = [0, size[1]];
      // 子类数量 icon，绘制圆点在节点正下方
      const markerStyle = getStyle(style, model, group, 'collapse');
      const config = { ...defaultMarkerCfg, ...markerStyle };
      const childCountGroup = group.addGroup({
        name: 'collapse-group',
      });
      const rectX = x - config.width / 2;
      const rectY = y - config.height / 2;
      childCountGroup.addShape('rect', {
        attrs: {
          lineWidth: defaultLineWidth,
          x: rectX,
          y: rectY,
          ...config,
        },
        name: 'collapse-icon-circle',
      });
      childCountGroup.addShape('path', {
        attrs: {
          path: collapsed
            ? [
                ['M', rectX + config.width / 4, y - config.height / 4],
                ['L', rectX + (config.width * 3) / 4, y],
                ['L', rectX + config.width / 4, y + config.height / 4],
              ]
            : [
                ['M', rectX + config.width / 4, y - config.height / 4],
                ['L', rectX + config.width / 2, y + config.height / 4],
                ['L', rectX + (config.width * 3) / 4, y - config.height / 4],
              ],
          ...config,
        },
        name: 'collapse-icon-arrow',
        capture: false,
      });

      if (collapsed) {
        childCountGroup.show();
      } else {
        childCountGroup.hide();
      }
    },
    addMarker(group, props) {
      const { markerCfg, model, size, startX = 0, startY = 0 } = props;
      const { style, position = 'right', show } = markerCfg;
      if (!show) return;
      // 子类数量 icon，绘制圆点在节点正下方
      const markerStyle = getStyle(style, model, group);
      const config = { ...defaultMarkerCfg, ...markerStyle };
      const { x, y } = getMarkerPosition(position, size);
      // 增加子节点 icon
      const markerIcon = group.addShape('marker', {
        attrs: {
          x: x + startX,
          y: y + startY,
          symbol: G6.Marker.expand,
          ...config,
        },
        name: 'icon-add-child',
      });
      markerIcon.hide();
      return markerIcon;
    },
    addHoverBack(group, props) {
      const { x, y, width, height, style } = props;
      group.addShape('rect', {
        attrs: {
          x,
          y,
          width,
          height,
          radius: 4,
          cursor: 'pointer',
          ...style,
        },
        // capture: false,
        name: 'main-shape',
        draggable: true,
      });
    },
    addName(group, props) {
      const { label, x = 0, y, style } = props;
      return group.addShape('text', {
        attrs: {
          text: label,
          x,
          y,
          ...defaultTextStyle,
          ...style,
        },
        name: 'text-shape',
        draggable: true,
      });
    },
    addBottomLine(group, props) {
      const { x, y, width, stroke, lineWidth } = props;
      return group.addShape('path', {
        attrs: {
          path: [
            ['M', x - 1, y],
            ['L', width, y],
          ],
          stroke,
          lineWidth,
        },
        name: 'node-path-shape',
      });
    },
    draw(model, group) {
      const { collapsed, depth, value, markerCfg, edgeCfg, children = [] } = model;
      const nodeCfg = model.nodeCfg as CardNodeCfg;
      const { style, label, padding = 0, customContent } = nodeCfg;
      const edgeStyle = getStyle((edgeCfg as EdgeCfg).style, model, group);
      const fileName = (value as CardItems).text;
      let size = nodeCfg?.size || [];
      if (typeof size === 'number') size = [size, size];
      const cardPadding = getCssPadding(padding);
      // 是否为根节点
      const rootNode = depth === 0;
      // 子节点数量
      const childCount = (children as any[]).length || 0;

      const height = size[1] || 28;
      const x = 0;
      const y = 0;

      let text; // 名称文本
      if (customContent) {
        text = customContent(value as any, group, {
          startX: x + cardPadding[3],
          startY: height / 2,
          width: size[0],
        });
      } else {
        text = this.addName(group, {
          label: fileName,
          x: x + cardPadding[3],
          y: height / 2,
          style: getStyle(label.style, model, group),
        });
      }
      const textWidth = group.getBBox().width;
      const width = Math.max(size[0], textWidth + cardPadding[1] + cardPadding[3]);
      if (!size.length) size = [width, height];

      const cardStyle = getStyle(style, model, group);

      const keyShapeAttrs = {
        x,
        y,
        width,
        height,
        radius: 12,
        ...cardStyle,
      };
      const keyShape = group.addShape('rect', {
        attrs: keyShapeAttrs,
        name: 'root-rect-shape',
      });

      // 底部横线
      this.addBottomLine(group, {
        stroke: defaultStroke,
        lineWidth: rootNode ? 0 : defaultLineWidth,
        x,
        width,
        y: y + height,
        ...edgeStyle,
      });
      let callbackMarkerCfg = markerCfg;
      const graph = getGlobalInstance(model._graphId as string);
      if (typeof markerCfg === 'function') {
        callbackMarkerCfg = markerCfg(
          {
            ...model,
            children: getChildrenData(graph?.get('eventData').getData(), model.g_currentPath as string),
          },
          group,
        );
      }

      if (childCount && !rootNode)
        this.addCollapse(group, {
          collapsed,
          markerCfg: callbackMarkerCfg,
          model,
          size: [width, height],
        });
      const markerIcon = this.addMarker(group, {
        collapsed,
        markerCfg: callbackMarkerCfg,
        model,
        size: [width, height],
        startX: text.getBBox().x - cardPadding[3],
        startY: keyShape.getBBox().y,
      });
      const bbox = group.getBBox();
      const { minX, minY, maxX, maxY } = bbox;
      const backContainer = group.addShape('path', {
        attrs: {
          path: childCount
            ? [
                ['M', minX, minY],
                ['L', maxX, minY],
                ['L', maxX, maxY],
                ['L', minX + 20, maxY],
                ['L', minX + 20, maxY + 20],
                ['L', minX, maxY + 20],
                ['Z'],
              ]
            : [['M', minX, minY], ['L', maxX, minY], ['L', maxX, maxY], ['L', minX, maxY], ['Z']],
          fill: '#fff',
          opacity: 0,
        },
        draggable: true,
      });
      text?.toFront();
      backContainer.toBack();
      if (rootNode) {
        pushAsyncEvent(model._graphId as string, () => {
          const { width: keyShapeWith, maxX } = keyShape.getBBox();
          markerIcon?.attr({
            x: x + keyShapeWith / 2,
          });
          text?.attr({
            x: x + cardPadding[3] - keyShapeWith / 2,
          });
          keyShape.attr({
            x: x - keyShapeWith / 2,
          });
        });
      }

      return keyShape;
    },
    setState(name, value, node) {
      if (['closest', 'selected', 'hover'].includes(name)) {
        const model = node.getModel();
        const { edgeCfg, nodeCfg, depth } = model;
        if (depth === 0) return;
        const { edgeStateStyles, style: edgeStyle } = edgeCfg as EdgeCfg;
        const {
          nodeStateStyles,
          label: { style: lableStyle },
          style,
        } = nodeCfg as NodeCfg;
        // closest 使用 hover 样式
        const _name = name === 'closest' ? 'hover' : name;
        const group = node.getContainer();
        const rootShape = group.find((child) => child.get('name') === 'root-rect-shape');
        const markerShapes = [];
        const getMarkers = (shapes) => {
          shapes.forEach((shape) => {
            const name = shape.get('name');
            if (name?.startsWith('collapse-icon') || name === 'icon-add-child') {
              markerShapes.push(shape);
            }
            if (shape.getChildren?.().length) getMarkers(shape.getChildren());
          });
        };
        getMarkers(group.getChildren());
        const textShape = group.find((child) => child.get('name') === 'text-shape');
        const pathShape = group.find((child) => child.get('name') === 'node-path-shape');
        const selected = node.hasState('selected');
        if (value) {
          const baseStyle = nodeStateStyles[_name];
          rootShape?.attr({
            ...(nodeStateStyles[_name]?.rect || baseStyle),
          });
          markerShapes.forEach((markerShape) => {
            markerShape?.attr({
              ...(nodeStateStyles[_name]?.marker || baseStyle),
            });
          });
          textShape?.attr({
            ...(nodeStateStyles[_name]?.text || baseStyle),
          });
          pathShape?.attr({
            ...edgeStateStyles[_name],
          });
        } else {
          if (selected) {
            const baseStyle = nodeStateStyles['selected'];
            rootShape?.attr({
              ...(nodeStateStyles['selected']?.rect || baseStyle),
            });
            markerShapes.forEach((markerShape) => {
              markerShape?.attr({
                ...(nodeStateStyles['selected']?.marker || baseStyle),
              });
            });
            textShape?.attr({
              ...(nodeStateStyles['selected']?.text || baseStyle),
            });
            pathShape?.attr({
              ...edgeStateStyles['selected'],
            });
          } else {
            const cardStyle = getStyle(style, model, node);
            const textStyle = getStyle(lableStyle, model, node);
            const pathStyle = getStyle(edgeStyle, model, node);
            const markerStyle = getStyle(edgeStyle, model, node);
            rootShape?.attr(cardStyle);
            textShape?.attr(textStyle);
            pathShape?.attr(pathStyle);
            markerShapes.forEach((markerShape) => {
              markerShape?.attr(markerStyle);
            });
          }
        }
      }
    },
  });

  G6.registerEdge(
    'file-tree-edge',
    {
      afterDraw: (cfg: ModelConfig, group) => {
        const { edgeCfg } = cfg;
        const { style } = edgeCfg as EdgeCfg;
        const edgeStyle = getStyle(style, cfg, group);
        const keyShape = group.get('children')[0];
        keyShape.attr({
          stroke: defaultStroke,
          lineWidth: defaultLineWidth, // branchThick
          ...edgeStyle,
        });
        group.toBack();
      },
      getControlPoints: (cfg) => {
        const startPoint = cfg.startPoint;
        const endPoint = cfg.endPoint;
        return [
          startPoint,
          {
            x: startPoint.x,
            y: endPoint.y,
          },
          endPoint,
        ];
      },
      update: undefined,
    },
    'polyline',
  );
};

export const registerFileTreeBehaviors = (): void => {
  G6.registerBehavior('wheel-scroll', {
    getDefaultCfg() {
      return {
        direction: 'y',
        zoomKey: 'ctrl',
        sensitivity: 3,
        // wheel-scroll 可滚动的扩展范围，默认为 0，即最多可以滚动一屏的位置
        // 当设置的值大于 0 时，即滚动可以超过一屏
        // 当设置的值小于 0 时，相当于缩小了可滚动范围
        // 具体实例可参考：https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*IFfoS67_HssAAAAAAAAAAAAAARQnAQ
        scalableRange: -64,
      };
    },

    getEvents() {
      if (!this.zoomKey || ['shift', 'ctrl', 'alt', 'control'].indexOf(this.zoomKey) === -1) this.zoomKey = 'ctrl';
      return {
        wheel: 'onWheel',
      };
    },

    onWheel(ev) {
      const graph = this.graph;
      let keyDown = ev[`${this.zoomKey}Key`];
      if (this.zoomKey === 'control') keyDown = ev.ctrlKey;
      if (keyDown) {
        const sensitivity = this.get('sensitivity');
        const canvas = graph.get('canvas');
        const point = canvas.getPointByClient(ev.clientX, ev.clientY);
        let ratio = graph.getZoom();
        if (ev.wheelDelta > 0) {
          ratio *= 1 + 0.01 * sensitivity;
        } else {
          ratio *= 1 - 0.01 * sensitivity;
        }
        graph.zoomTo(ratio, {
          x: point.x,
          y: point.y,
        });
        graph.emit('wheelzoom', ev);
      } else {
        let dx = ev.deltaX || ev.movementX;
        let dy = ev.deltaY || ev.movementY;
        if (!dy && navigator.userAgent.indexOf('Firefox') > -1) dy = (-ev.wheelDelta * 125) / 3;

        const width = this.graph.get('width');
        const height = this.graph.get('height');
        const graphCanvasBBox = this.graph.get('group').getCanvasBBox();

        let expandWidth = this.scalableRange;
        let expandHeight = this.scalableRange;
        // 若 scalableRange 是 0~1 的小数，则作为比例考虑
        if (expandWidth < 1 && expandWidth > -1) {
          expandWidth = width * expandWidth;
          expandHeight = height * expandHeight;
        }

        const { minX, maxX, minY, maxY } = graphCanvasBBox;

        if (dx > 0) {
          if (maxX < -expandWidth) {
            dx = 0;
          } else if (maxX - dx < -expandWidth) {
            dx = maxX + expandWidth;
          }
        } else if (dx < 0) {
          if (minX > width + expandWidth) {
            dx = 0;
          } else if (minX - dx > width + expandWidth) {
            dx = minX - (width + expandWidth);
          }
        }

        if (dy > 0) {
          if (maxY < -expandHeight) {
            dy = 0;
          } else if (maxY - dy < -expandHeight) {
            dy = maxY + expandHeight;
          }
        } else if (dy < 0) {
          if (minY > height + expandHeight) {
            dy = 0;
          } else if (minY - dy > height + expandHeight) {
            dy = minY - (height + expandHeight);
          }
        }

        if (this.get('direction') === 'x') {
          dy = 0;
        } else if (this.get('direction') === 'y') {
          dx = 0;
        }

        graph.translate(-dx, -dy);
      }
      ev.preventDefault();
    },
  });
  G6.registerBehavior('drag-branch', {
    getEvents: function getEvents() {
      return {
        'node:dragstart': 'dragstart',
        'node:drag': 'drag',
        'node:dragend': 'dragend',
        'node:dragenter': 'dragenter',
        'node:dragleave': 'dragleave',
      };
    },
    dragstart: function dragstart(e) {
      this.set('foundNode', undefined);
      this.origin = {
        x: e.x,
        y: e.y,
      };
      this.target = e.item;
      const graph = this.get('graph');
      // 未配置 shouldBegin 时 默认为 true
      if (this.shouldBegin && !this.shouldBegin(graph.findDataById(this.target?.getID()))) {
        this.began = false;
        return;
      }
      this.began = true;
    },
    dragenter: function dragenter(e) {
      if (!this.began) {
        return;
      }
      const graph = this.get('graph');
      const foundNode = e.item;
      if (foundNode) graph.setItemState(foundNode, 'closest', true);
      this.set('foundNode', foundNode);
    },
    dragleave: function dragleave(e) {
      if (!this.began) {
        return;
      }
      const graph = this.get('graph');
      const foundNode = this.get('foundNode');
      if (foundNode) graph.setItemState(foundNode, 'closest', false);
      this.set('foundNode', foundNode);
    },
    drag: function drag(e) {
      if (!this.began) {
        return;
      }
      // move the delegate
      this.updateDelegate(e);
    },
    dragend: function dragend(e) {
      const graph = this.get('graph');
      const foundNode = this.get('foundNode');
      if (foundNode) {
        graph.setItemState(foundNode, 'closest', false);
      }
      if (!this.began) {
        return;
      }
      this.began = false;
      const { item } = e;
      const id = item.getID();
      const data = graph.findDataById(id);

      // remove delegate
      if (this.delegateRect) {
        this.delegateRect.remove();
        this.delegateRect = null;
      }

      if (!foundNode) {
        graph.emit('afterdragbranch', {
          success: false,
          message: 'Failed. No node close to the dragged node.',
          branch: data,
        });
        return;
      }

      const foundNodeId = foundNode.getID();

      let oriParentData;
      Util.traverseTree(graph.get('data'), (d) => {
        if (oriParentData) return false;
        if (d.children?.filter((child) => child.id === id)?.length) {
          oriParentData = d;
        }
        return true;
      });

      // 未配置 shouldEnd，则默认为 true
      if (this.shouldEnd && !this.shouldEnd(data, graph.findDataById(foundNodeId), oriParentData)) {
        return;
      }

      // if the foundNode is a descent of the dragged node, return
      let isDescent = false;

      Util.traverseTree(data, (d) => {
        if (d.id === foundNodeId) isDescent = true;
      });
      if (isDescent) {
        const newParentData = graph.findDataById(foundNodeId);
        graph.emit('afterdragbranch', {
          success: false,
          message: 'Failed. The target node is a descendant of the dragged node.',
          newParentData,
          branch: data,
        });
        return;
      }

      const newParentData = graph.findDataById(foundNodeId);
      // 触发外部对数据的改变
      graph.emit('afterdragbranch', { success: true, message: 'Success.', newParentData, oriParentData, branch: data });
      graph.removeChild(data.id);
      setTimeout(() => {
        let newChildren = newParentData.children;
        if (newChildren) newChildren.push(data);
        else newChildren = [data];
        // 更新正在被操作的子树颜色
        Util.traverseTree(data, (d) => {
          d.branchColor = newParentData.branchColor;
        });
        graph.updateChildren(newChildren, newParentData.id);
      }, 600);
    },
    updateDelegate(e) {
      const { graph } = this;
      if (!this.delegateRect) {
        // 拖动多个
        const parent = graph.get('group');
        const attrs = {
          fill: '#F3F9FF',
          fillOpacity: 0.5,
          stroke: '#1890FF',
          strokeOpacity: 0.9,
          lineDash: [5, 5],
        };

        const { x: cx, y: cy, width, height, minX, minY } = this.calculationGroupPosition(e);
        this.originPoint = { x: cx, y: cy, width, height, minX, minY };
        // model上的x, y是相对于图形中心的，delegateShape是g实例，x,y是绝对坐标
        this.delegateRect = parent.addShape('rect', {
          attrs: {
            width,
            height,
            x: cx,
            y: cy,
            ...attrs,
          },
          name: 'rect-delegate-shape',
        });
        this.delegateRect.set('capture', false);
      } else {
        const clientX = e.x - this.origin.x + this.originPoint.minX;
        const clientY = e.y - this.origin.y + this.originPoint.minY;
        this.delegateRect.attr({
          x: clientX,
          y: clientY,
        });
      }
    },
    calculationGroupPosition(evt) {
      let node = this.target;
      if (!node) {
        node = evt.item;
      }

      const bbox = node.getBBox();
      const { minX, minY, maxX, maxY } = bbox;

      return {
        x: Math.floor(minX),
        y: Math.floor(minY),
        width: Math.ceil(maxX) - Math.floor(minX),
        height: Math.ceil(maxY) - Math.floor(minY),
        minX,
        minY,
      };
    },
  });

  G6.registerBehavior('click-node', {
    getEvents() {
      return {
        'node:click': 'onNodeClick',
        'canvas:click': 'onCanvasClick',
      };
    },
    async onNodeClick(e) {
      const { item } = e;
      const shapeName = e.target.get('name');
      const model = item.getModel();
      const { graph } = this;
      // 点击增加节点
      if (shapeName === 'icon-add-child') {
        const data = graph.findDataById(item.getID());
        if (!data.children) data.children = [];
        this.graph.emit('add:children', e);
        const { id, value } = e.item.getModel();
        const { getChildren, fetchLoading } = graph.get('extraPlugin');
        if (getChildren) {
          createFetchLoading(model, fetchLoading);
          const appendChildren = await getChildren({
            id,
            value,
          });
          data.children.push(...appendChildren);
          // @ts-ignore
          graph.updateChildren(data.children, data.id);
          closeFetchLoading();
        }
        return;
      }

      // 选中节点
      graph.getNodes().forEach((node) => {
        graph.setItemState(node, 'selected', false);
      });
      graph.setItemState(item, 'selected', true);

      return;
    },
    onCanvasClick(e) {
      this.graph.getNodes().forEach((node) => {
        this.graph.setItemState(node, 'selected', false);
      });
    },
  });

  G6.registerBehavior('hover-node', {
    getEvents() {
      return {
        'node:mouseover': 'onNodeMouseOver',
        'node:mouseleave': 'onNodeMouseLeave',
        'node:mouseenter': 'onNodeMouseEnter',
      };
    },
    onNodeMouseEnter(e) {
      const { item } = e;
      if (!item || item.get('destroyed')) return;
      item.toFront();
      const model = item.getModel();
      const { collapsed, depth } = model;
      const rootNode = depth === 0 || model.isRoot;
      const group = item.getContainer();

      if (rootNode) return;

      // 控制子节点个数标记
      if (!collapsed) {
        group.find((e) => e.get('name') === 'collapse-group')?.show();
      }
      this.graph.setItemState(item, 'hover', true);
    },
    onNodeMouseOver(e) {
      this.graph.emit('tooltip: show', e);
      // expand 状态下，若 hover 到子节点个数标记，填充背景+显示收起 icon
      const { item } = e;
      const group = item.getContainer();
      const model = item.getModel();
      if (!model.collapsed) {
        const childCountGroup = group.find((e) => e.get('name') === 'collapse-group');
        if (childCountGroup) {
          childCountGroup.show();
          childCountGroup.find((e) => e.get('name') === 'collapse-icon-arrow')?.show();
        }
      }

      group.find((e) => e.get('name') === 'icon-add-child')?.show();
    },
    onNodeMouseLeave(e) {
      const { item } = e;
      const model = item.getModel();
      const group = item.getContainer();
      const { collapsed } = model;
      if (!collapsed) {
        const childCountGroup = group.find((e) => e.get('name') === 'collapse-group');
        if (childCountGroup) {
          childCountGroup.hide();
          childCountGroup.find((e) => e.get('name') === 'collapse-icon-arrow')?.hide();
        }
      }

      group.find((e) => e.get('name') === 'icon-add-child')?.hide();
      this.graph.emit('tooltip: hide', e);
    },
  });
};
