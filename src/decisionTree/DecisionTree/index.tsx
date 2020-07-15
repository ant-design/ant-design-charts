import React, { useEffect, useState, useRef, useMemo, useImperativeHandle, forwardRef, Ref, useCallback } from 'react';
import G6, { TreeGraph } from '@antv/g6';
import { uniqueId } from 'lodash';
import { useSize } from 'ahooks';
import GraphToolBar from '../GraphToolBar';
import { renderRootAtCenter, isTrackPad } from './utils/g6';
import mobile from 'is-mobile';
import './customBehavior';
import registerShape from './customShape';
import * as image from './assets';
import { Spin } from 'antd';
import './index.less';

export interface TreeData {
  id: string;
  name: string;
  [key: string]: any;
  children?: TreeData[];
}

export interface TreeProps {
  onSelect?: (e: any, bbox: any) => boolean;
  onDeselect?: () => void;
  onAdd?: (e: any) => TreeData | void | false;
  loading?: boolean;
  data: TreeData;
  edit?: boolean;
  width?: number;
  height?: number;
  spacingBottom?: number;
  initialOffset?: number;
  showToolBar?: boolean;
  config: {
    nodeIcon?: (cfg: any, bbox: any) => any;
    text?: (cfg: any) => any;
    allowAdd?: (cfg: any) => boolean;
    allowCollapse?: (cfg: any) => boolean;
  }
  toolbarPosition?: { left?: number | string, top?: number | string; right?: number | string; bottom?: number | string };
}

export interface TreeRefProps {
  clearSelect: () => void;
  select: (id: string) => void;
  updateData: (data: TreeData, animate?: boolean) => void;
  removeItem: (id: string, animate?: boolean) => void;
  updateItem: (id: string, data: TreeData, animate?: boolean) => void;
  graphInstance: TreeGraph | null;
}

export default forwardRef((props: TreeProps, componentRef: Ref<TreeRefProps>) => {
  const [graphInstance, setGraphInstance] = useState<TreeGraph | null>(null);
  const graphDomRef = useRef<HTMLDivElement>(null);
  const { width, height } = useSize(graphDomRef.current);
  const selectedRef = useRef({ model: {} as any, frameNode: null as any, iconNode: null as any });
  const moveRef = useRef({ x: 0, y: 0 });
  const zoomingRef = useRef(false);
  const zoomRatioRef = useRef(1);
  const isMobile = useMemo(() => mobile(), []);
  const propsRef = useRef(props);
  propsRef.current = props;

  const selectItem = useCallback((item: any) => {
    const wholeNode = item.get('group').find((ele: any) => ele.get('name') === 'whole-node');
    // 此次点击的 icon
    const icon = item.get("group").find((ele: any) => ele.get("name") === "collapse-icon");

    const { model, frameNode, iconNode } = selectedRef.current;

    if(wholeNode) {
      wholeNode.attr('stroke', '#40A9FF');
      wholeNode.attr('fill', '#F4F9FF');
    }
    if(icon) {
      if (props.edit) {
        icon.attr('img', image.BLUE_ADD);
      } else {
        if(item.get('model').collapsed) {
          icon.attr("img", image.BLUE_EXPAND);
        } else {
          icon.attr("img", image.BLUE_COLLAPSE);
        }
      }
    }
    // 之前选择的 icon，恢复
    if(model?.id) {
      if(frameNode) {
        frameNode.attr('stroke', '#CED4D9');
        frameNode.attr('fill', 'white');
      }
      if(iconNode) {
        if(props.edit) {
          iconNode.attr('img', image.GRAY_ADD);
        } else {
          if(model.collapsed) {
            iconNode.attr("img", image.GRAY_EXPAND);
          } else {
            iconNode.attr("img", image.GRAY_COLLAPSE);
          }
        }
      }
    }
    selectedRef.current = { model: item.get('model'), frameNode: wholeNode, iconNode: icon };
  }, [])

  const refReturn = useMemo(() => (
    {
      clearSelect: () => {
        const { model, frameNode, iconNode } = selectedRef.current;
        if(model?.id) {
          if(frameNode) {
            frameNode.attr('stroke', '#CED4D9');
            frameNode.attr('fill', 'white');
          }
          if(iconNode) {
            if(props.edit) {
              iconNode.attr('img', image.GRAY_ADD);
            } else {
              if(model.collapsed) {
                iconNode.attr("img", image.GRAY_EXPAND);
              } else {
                iconNode.attr("img", image.GRAY_COLLAPSE);
              }
            }
          }
        }
        selectedRef.current = { model: {} as any, frameNode: null as any, iconNode: null as any };
      },
      select: (id: string) => {
        const item = graphInstance?.findById(id);
        if(!item) {
          return;
        }
        selectItem(item);
      },
      updateData: (data: TreeData, animate: boolean = true) => {
        graphInstance?.data(data);
        renderRootAtCenter(props.data, graphInstance, props.initialOffset);
        if(!animate) {
          graphInstance?.stopAnimate();
        }
      },
      removeItem: (id: string, animate: boolean = true) => {
        const removedItem = graphInstance?.findById(id);
        if(removedItem) {
          const parent = removedItem.get('parent');
          const parentModel = parent.getModel();
          const parentId = parent.getID()
          parentModel.children = parentModel.children?.filter((ele: TreeData) => ele.id !== id);
          const newModel = parent.getModel();
          (graphInstance as any)?.updateChild(newModel, parentId)
          if(!animate) {
            graphInstance?.stopAnimate();
          }
        }
      },
      updateItem: (id: string, data: TreeData, animate: boolean = true) => {
        const updatedItem = graphInstance?.findById(id);
        if(updatedItem) {
          const parent = updatedItem.get('parent');
          const parentModel = parent.getModel();
          const parentId = parent.getID()
          parentModel.children = parentModel.children?.map((ele: TreeData) => {
            if(ele.id === id) {
              return data;
            }
            return ele;
          });
          const newModel = parent.getModel();
          (graphInstance as any)?.updateChild(newModel, parentId);
          if(!animate) {
            graphInstance?.stopAnimate();
          }
        }
      },
      graphInstance,
    }
  ), [graphInstance, selectItem]);

  useImperativeHandle(componentRef, () => refReturn);

  useEffect(() => {
    if(props.loading) {
      return;
    }
    const graphId = uniqueId();
    registerShape(props.config || {}, graphId);
    const graph = new G6.TreeGraph({
      container: graphDomRef.current!,
      width: props.width || 600,
      height: props.height || 400,
      modes: {
        default: [
          {
            type: 'collapse-expand',
            onChange: function onChange(item: any, collapsed: boolean) {
              const data = item.get("model");
              const icon = item
                .get("group")
                .find((ele: any) => ele.get("name") === "collapse-icon");
              if (collapsed) {
                icon.attr("img", image.BLUE_EXPAND);
              } else {
                icon.attr("img", image.BLUE_COLLAPSE);
              }
              data.collapsed = collapsed;
              return true;
            },
            shouldBegin: (e: any) => {
              if(props.edit) {
                return;
              }
              const { shape } = e;
              if(shape.cfg.name === 'collapse-icon') {
                return true;
              }
              return false;
            },
          },
          "drag-canvas",
          {
            type: "zoom-canvas",
            maxZoom: 5,
            minZoom: 0.2,
            sensitivity: 0.5,
            shouldUpdate: (e: any) => {
              // 区分 trackpad 和 鼠标的区别
              if(props.onDeselect) {
                props.onDeselect();
              }
              if(isTrackPad(e)){
                if(e.ctrlKey) {
                  return true;
                }
                return false;
              }
              return true;
            }
          }
        ]
      } as any,
      defaultNode: {
        type: props.edit ? `tree-node-editable-${graphId}` : `tree-node-collapsable-${graphId}`,
        anchorPoints: [[0, 0.5], [1, 0.5]]
      },
      defaultEdge: {
        type: `step-line-${graphId}`,
      },
      layout: {
        type: 'indented',
        dropCap: false,
        isHorizontal: true,
        direction: 'LR',
        indent: 280,
      }
    });
    setGraphInstance(graph);

    const onNodeClick = (e: any) => {
      const { shape, item } = e;
      // 如果点击了 icon，跳过选中的逻辑
      if(!item) {
        return;
      }
      if(shape.cfg.name === 'collapse-icon') {
        if(propsRef.current.edit && propsRef.current.onAdd) {
          // 编辑模式，触发 onAdd
          const child = propsRef.current.onAdd(item.get('model'));
          console.log('aaa', child, item);
          if(child) {
            graph.emit('node:mouseleave', e);
            graph.addChild(child, item)
          }
        }
        return;
      }
      if(propsRef.current.onSelect) {
        if(propsRef.current.onSelect(item.get('model'), { x: e.clientX, y: e.clientY })) {
          selectItem(item);
        }
      }
    }

    if(isMobile) {
      // 移动端 event，touchend 代替 click
      graph.on('node:touchend', (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        // 这里触发 click 是因为，展开收缩的地方只能接受 click, 所以需要 emit click
        graph.emit('node:click', e);
        onNodeClick(e);
      });
      graph.on('touchstart', (e: any) => {
        if(zoomingRef.current) {
          return;
        }
        if (e.originalEvent.touches.length > 1) {
          zoomingRef.current = true;
          zoomRatioRef.current = Math.hypot(
            e.originalEvent.touches[0].pageX - e.originalEvent.touches[1].pageX,
            e.originalEvent.touches[0].pageY - e.originalEvent.touches[1].pageY
          )
        }
        // 记录初始位置
        moveRef.current = { x: e.canvasX, y: e.canvasY };
      })
      graph.on('touchend', (e: any) => {
        // 如果在 shape 上结束了 touch，直接走 node:touchend 逻辑
        if(e.shape) {
          return;
        }
        moveRef.current = { x: e.canvasX, y: e.canvasY };
        if(e.originalEvent.touches.length !== 1) {
          // 两指都松开才退出 zoom 模式
          zoomingRef.current = false;
        }
      })
      graph.on('touchmove', (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        if(zoomingRef.current) {
          const ratio = Math.hypot(
            e.originalEvent.touches[0].pageX - e.originalEvent.touches[1].pageX,
            e.originalEvent.touches[0].pageY - e.originalEvent.touches[1].pageY
          );
          let zoom = 1;
          if(ratio > zoomRatioRef.current) {
            zoom = 1.05;
            zoomRatioRef.current = ratio;
          } else {
            zoom = 0.95
          }
          graph.zoom(zoom, { x: e.canvasX, y: e.canvasY });
          return;
        }
        if (e.shape) {
          return;
        }
        const deltaX = e.canvasX - moveRef.current.x;
        const deltaY = e.canvasY - moveRef.current.y;
        moveRef.current = { x: e.canvasX, y: e.canvasY };
        graph.translate(deltaX, deltaY);
        graph.paint();
      })
    } else {
      // PC 上的 event
      graph.on('node:click', onNodeClick)
      graph.on('node:mouseenter', (e: any) => {
        const { item } = e;
        const wholeNode = item.get('group').find((ele: any) => ele.get('name') === 'whole-node');
        const icon = item.get("group").find((ele: any) => ele.get("name") === "collapse-icon");

        if(wholeNode) {
          wholeNode.attr('stroke', '#40A9FF');
        }
        if(props.edit) {
          if(icon) {
            icon.attr("img", image.BLUE_ADD);
          }
        } else {
          // 非编辑态 - hover 颜色切换
          if(icon) {
            if (item.get('model').collapsed) {
              icon.attr("img", image.BLUE_EXPAND);
            } else {
              icon.attr("img", image.BLUE_COLLAPSE);
            }
          }
        }
      })
      graph.on('node:mouseleave', (e: any) => {
        const { item } = e;
        const icon = item
        .get("group")
        .find((element: any) => element.get("name") === "collapse-icon");

        const wholeNode = item.get('group').find((ele: any) => ele.get('name') === 'whole-node');
        const isSelected = item.get('model').id === selectedRef.current.model?.id;

        if(wholeNode && !isSelected) {
          wholeNode.attr('stroke', '#CED4D9');
        }

        if(icon && !isSelected) {
          if(props.edit) {
            icon.attr("img", image.GRAY_ADD);
          } else {
            if (item.get('model').collapsed) {
              icon.attr("img", image.GRAY_EXPAND);
            } else {
              icon.attr("img", image.GRAY_COLLAPSE);
            }
          }
        }
      })
    }

    graph.on('beforepaint', () => {
      const topLeft = graph.getPointByCanvas(0, 0);
      const bottomRight = graph.getPointByCanvas(graph.get('width'), graph.get('height'));

      graph.getNodes().forEach(node => {
        const model: any = node.getModel();
        if (model.x < topLeft.x - 200 || model.x > bottomRight.x + 200 || model.y < topLeft.y - 200 || model.y > bottomRight.y + 200) {
          node.getContainer().hide();
        } else {
          node.getContainer().show();
        }
      });
      const edges = graph.getEdges();
      edges.forEach(edge => {
        const sourceNode = edge.get('sourceNode');
        const targetNode = edge.get('targetNode');
        if (!sourceNode.get('visible') && !targetNode.get('visible')) {
          edge.hide();
        } else {
          edge.show();
        }
      });
    });

    renderRootAtCenter(props.data, graph, props.initialOffset);

    return () => {
      if(graph && graph.destroy) {
        graph.destroy();
      }
    }
  }, [props.loading])

  useEffect(() => {
    // 页面宽度或高度变化之后, 用 graphDom 的宽和高 reset
    if(graphInstance && graphInstance.changeSize && width) {
      const { top = 0, width: graphWidth } = graphDomRef.current?.getBoundingClientRect()!;
      graphInstance.changeSize(
        props.width || graphWidth, 
        props.height || Math.max(window.innerHeight - (props.spacingBottom || 0) - (top || 0), 400)
      );
    }
  }, [graphInstance, width, height, props.width, props.height])

  return <>
    {
      graphInstance && props.showToolBar && <GraphToolBar toolbarPosition={props.toolbarPosition || {}} graph={graphInstance}  />
    }
    <Spin wrapperClassName='tree_antd_spin' spinning={props.loading || false}>
      <div style={{ height: '100%', marginBottom: '-6px' }}>
        <div ref={graphDomRef} />
      </div>
    </Spin>
  </>
});