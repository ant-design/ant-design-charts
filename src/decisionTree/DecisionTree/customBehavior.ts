import G6 from '@antv/g6';
import { G6Event, IG6GraphEvent } from '@antv/g6/lib/types';

const DELTA = 0.05;

const zoomConfig = {
  getDefaultCfg() {
    return {
      sensitivity: 2,
      minZoom: 0.2,
      maxZoom: 5,
      enableOptimize: false,
      optimizeZoom: 0.7
    };
  },
  getEvents() {
    return {
      wheel: "onWheel"
    };
  },
  onWheel(e: any) {
    const { graph } = this as any;
    if (!(this as any).shouldUpdate.call(this, e)) {
      const x = e.deltaX || e.movementX;
      const y = e.deltaY || e.movementY;

      let moveX = x;
      let moveY = y;
      const bbox = graph.get('group').getBBox();
      const containerWidth = graph.get('width');
      const containerHeight = graph.get('height');
      const leftTopPoint = graph.getCanvasByPoint(bbox.minX, bbox.minY);
      const rightBottomPoint = graph.getCanvasByPoint(bbox.maxX, bbox.maxY);

      const LIMIT_OVERFLOW_WIDTH = containerWidth - 100;
      const LIMIT_OVERFLOW_HEIGHT = containerHeight - 100;
      let needPreventDefault = true;

      if (x < 0 && leftTopPoint.x - x > LIMIT_OVERFLOW_WIDTH) {
        needPreventDefault= false;
        moveX = 0;
      }
      if (
        x > 0 &&
        rightBottomPoint.x - x < containerWidth - LIMIT_OVERFLOW_WIDTH
      ) {
        needPreventDefault = false;
        moveX = 0;
      }
  
      if (y < 0 && leftTopPoint.y - y > LIMIT_OVERFLOW_HEIGHT) {
        needPreventDefault = false;
        moveY = 0;
      }
      if (
        y > 0 &&
        rightBottomPoint.y - y < containerHeight - LIMIT_OVERFLOW_HEIGHT
      ) {
        needPreventDefault = false;
        moveY = 0;
      }
      if(needPreventDefault) {
        e.preventDefault();
      }
      graph.translate(-moveX, -moveY);
      return;
    }
    e.preventDefault();
    const canvas = graph.get("canvas");
    const point = canvas.getPointByClient(e.clientX, e.clientY);
    const sensitivity = (this as any).get("sensitivity");
    let ratio = graph.getZoom();
    // 兼容IE、Firefox及Chrome
    const deltaRatio = DELTA * sensitivity;
    if (e.wheelDelta < 0) {
      ratio = 1 - deltaRatio;
    } else {
      ratio = 1 + deltaRatio;
    }
    const zoom = ratio * graph.getZoom();
    if (zoom > (this as any).get("maxZoom") || zoom < (this as any).get("minZoom")) {
      return;
    }

    const enableOptimize = (this as any).get("enableOptimize");
    if (enableOptimize) {
      const optimizeZoom = (this as any).get("optimizeZoom");

      const currentZoom = graph.getZoom();
      if (currentZoom < optimizeZoom) {
        const nodes = graph.getNodes();
        const edges = graph.getEdges();
        nodes.forEach((node: any) => {
          if (!node.destroyed) {
            const children = node.getContainer().get("children");
            children.forEach((shape: any) => {
              if (!shape.destoryed && !shape.get("isKeyShape")) {
                shape.hide();
              }
            });
          }
        });

        edges.forEach((edge: any) => {
          const children = edge.getContainer().get("children");
          children.forEach((shape: any) => {
            if (!shape.get("isKeyShape")) {
              shape.hide();
            }
          });
        });
      } else {
        const nodes = graph.getNodes();
        const edges = graph.getEdges();
        nodes.forEach((node: any) => {
          const children = node.getContainer().get("children");
          children.forEach((shape: any) => {
            if (!shape.get("visible")) {
              shape.show();
            }
          });
        });

        edges.forEach((edge: any) => {
          const children = edge.getContainer().get("children");
          children.forEach((shape: any) => {
            if (!shape.get("visible")) {
              shape.show();
            }
          });
        });
      }
    }

    graph.zoom(ratio, { x: point.x, y: point.y });
    graph.emit("wheelzoom", e);
  }
};

G6.registerBehavior("zoom-canvas", zoomConfig);

const collapseExpand = {
  getDefaultCfg(): object {
    return {
      /**
       * 发生收缩/扩展变化时的回调
       */
      trigger: 'click',
      onChange() {},
    };
  },
  getEvents(): { [key in G6Event]?: string } {
    return {
      [`node:click`]: 'onNodeClick',
    };
  },
  onNodeClick(e: IG6GraphEvent) {
    const { item } = e;
    // 如果节点进行过更新，model 会进行 merge，直接改 model 就不能改布局，所以需要去改源数据
    const sourceData = (this as any).graph.findDataById(item?.get('id'));
    if (!sourceData) {
      return;
    }

    const { children } = sourceData;
    // 叶子节点的收缩和展开没有意义
    if (!children || children.length === 0) {
      return;
    }
    const collapsed = !sourceData.collapsed;
    if (!(this as any).shouldBegin(e, collapsed)) {
      return;
    }
    sourceData.collapsed = collapsed;
    if(item) {
      item.getModel().collapsed = collapsed;
    }
    (this as any).graph.emit('itemcollapsed', { item: e.item, collapsed });
    if (!(this as any).shouldUpdate(e, collapsed)) {
      return;
    }
    try {
      (this as any).onChange(item, collapsed);
    } catch (err) {}
    (this as any).graph.layout();
  },
};

G6.registerBehavior("collapse-expand", collapseExpand);

