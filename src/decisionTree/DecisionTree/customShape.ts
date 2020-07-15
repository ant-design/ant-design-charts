import G6 from '@antv/g6';
import { getNodeText } from './utils/g6';
import * as image from './assets';

interface IConfig {
  nodeIcon?: (cfg: any, bbox: any) => any;
  text?: (cfg: any) => any;
  allowAdd?: (cfg: any) => boolean;
  allowCollapse?: (cfg: any) => boolean;
}

export default (config: IConfig, graphId: string) => {
  const { nodeIcon: getNodeIcon, allowAdd, allowCollapse, text: getText } = config;
  G6.registerEdge(
    `step-line-${graphId}`,
    {
      getControlPoints: function getControlPoints(cfg: any) {
        const { startPoint, endPoint } = cfg;
        return [
          {...startPoint, x: startPoint.x + 58 },
          {
            x: startPoint.x + 58,
            y: endPoint.y,
          },
          {...endPoint, x: endPoint.x },
        ];
      } as any,
      draw(cfg: any, group: any) {
        const { startPoint, endPoint, sourceNode, targetNode } = cfg;
        const startPointModel = sourceNode.get('model');
        const endPointModel = targetNode.get('model');
        let color = '#A3B1BF';
        if(endPointModel.status === 'DISMATCH') {
          color = '#FA8C16';
        } else if (startPointModel.status === 'MATCH' && endPointModel.status === 'MATCH') {
          color = '#52C41A';
        }
        const keyShape = group.addShape('path', {
          attrs: {
            path: [
              ['M', startPoint.x, startPoint.y],
              ['L', endPoint.x, endPoint.y],
            ],
            stroke: color,
            lineWidth: 2,
            radius: 10,
            endArrow: {
              path: 'M 0,0 L -6,3 L -6,-3 Z',
              fill: color,
              stroke: color,
            },
          },
          name: 'path-shape',
        });
        return keyShape;
      },
    },
    'polyline',
  );
  
  G6.registerNode(
    `tree-node-collapsable-${graphId}`,
    {
      drawShape: function drawShape(cfg: any, group: any) {
        const rect = group.addShape("rect", {
          attrs: {
            fill: "#fff",
            stroke: "#CED4D9",
            radius: [12],
            cursor: 'pointer',
          },
          name: "whole-node"
        });
        const extraTextAttr = getText ? getText(cfg) : {};
        const content = getNodeText(cfg.name);
        const text = group.addShape("text", {
          attrs: {
            text: content,
            cursor: 'pointer',
            textAlign: "left",
            textBaseline: "middle",
            fill: "#666",
            ...extraTextAttr,
          },
          name: "rect-shape"
        });
        const bbox = text.getBBox();
        const hasChildren = (allowCollapse ? allowCollapse(cfg) : (cfg.children && cfg.children.length > 0) );
        const extraAttr = getNodeIcon ? getNodeIcon(cfg, bbox) : {};
        const hasImage = getNodeIcon && (extraAttr || {}).img;

        if (hasImage) {
          group.addShape('image', {
            attrs: {
              x: bbox.minX - 36,
              y: bbox.minY - 12 + bbox.height / 2,
              width: 24,
              height: 24,
              cursor: 'pointer',
              ...extraAttr,
            },
            name: 'image-shape',
          });
        }

        // 操作的 svg 图片
        if (hasChildren) {
          group.addShape("image", {
            attrs: {
              x: 128,
              y: bbox.minY - 8 + bbox.height / 2,
              width: 16,
              height: 16,
              cursor: 'pointer',
              img: cfg.collapsed ? image.GRAY_EXPAND : image.GRAY_COLLAPSE,
            },
            name: "collapse-icon",
          });
        }
        rect.attr({
          x: bbox.minX - 46,
          y: bbox.minY - 10,
          width: 180,
          height: bbox.height + 20
        });

        if(!hasImage) {
          text.translate(-26)
        } else {
          text.translate(-2);
        }

        return rect;
      }
    },
    "single-node"
  );
  
  G6.registerNode(
    `tree-node-editable-${graphId}`,
    {
      drawShape: function drawShape(cfg: any, group: any) {
        const rect = group.addShape("rect", {
          attrs: {
            fill: "#fff",
            stroke: "#CED4D9",
            radius: [12],
            cursor: 'pointer',
          },
          name: "whole-node"
        });
        const content = getNodeText(cfg.name);
        const extraTextAttr = getText ? getText(cfg) : {};
        const text = group.addShape("text", {
          attrs: {
            text: content,
            cursor: 'pointer',
            textAlign: "left",
            textBaseline: "middle",
            fill: "#666",
            ...extraTextAttr,
          },
          name: "rect-shape"
        });
        const bbox = text.getBBox();
        const extraAttr = getNodeIcon ? getNodeIcon(cfg, bbox) : {};
        const hasImage = getNodeIcon && (extraAttr || {}).img;

        if(hasImage) {
          group.addShape('image', {
            attrs: {
              x: bbox.minX - 36,
              y: bbox.minY - 12 + bbox.height / 2,
              width: 24,
              height: 24,
              cursor: 'pointer',
              ...extraAttr,
            },
            name: 'image-shape',
          });
        }

        if(allowAdd ? allowAdd(cfg) : true) {
          group.addShape("image", {
            attrs: {
              x: 134,
              y: bbox.minY - 8 + bbox.height / 2,
              width: 16,
              height: 16,
              cursor: 'pointer',
              img: image.GRAY_ADD,
            },
            name: "collapse-icon",
          });
        }

        rect.attr({
          x: bbox.minX - 46,
          y: bbox.minY - 10,
          width: 180,
          height: bbox.height + 20
        });

        if(!hasImage) {
          text.translate(-26)
        } else {
          text.translate(-2);
        }
        return rect;
      }
    },
    "single-node"
  );
}