import G6, { ModelConfig, IGroup, Item, IPoint, ArrowConfig } from '@antv/g6';
import { isObject } from '@antv/util';

export const registerCustomItems = () => {
  G6.registerNode(
    'card-node',
    {
      draw: (cfg: ModelConfig | undefined = {}, group: IGroup | undefined) => {
        let size = cfg.size || [100, 30];
        if (typeof size === 'number') size = [size, size];
        const style = { radius: 2, fill: '#fff', ...cfg.style };
        const color = style.stroke || cfg.color || '#5B8FF9';
        const r = style.radius || 0;
        const shape = group!.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            width: size[0],
            height: size[1],
            stroke: color,
            ...style,
          },
          name: 'main-box',
          draggable: true,
        });

        // title text
        const title = cfg.title || cfg.label;
        let titleTextShape;
        const labelStyle = cfg.labelCfg?.style || {};
        if (title) {
          const titleStyle = { fill: '#fff', ...labelStyle };
          titleTextShape = group!.addShape('text', {
            attrs: {
              textBaseline: 'top',
              x: 8,
              y: 2,
              // lineHeight: 20,
              text: title,
              ...titleStyle,
              fill: '#fff',
            },
            name: 'title',
          });
        }

        const titleBox = titleTextShape ? titleTextShape.getBBox() : { height: size[1] / 2 };
        // title rect
        const titleRectShape = group!.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            width: size[0],
            height: titleBox.height + 4,
            fill: color,
            radius: [r, r, 0, 0],
          },
          name: 'title-rect',
          draggable: true,
        });

        titleTextShape?.toFront();

        // marker
        let markerShape;
        if (cfg?.children) {
          markerShape = group!.addShape('marker', {
            attrs: {
              x: size[0] / 2,
              y: 0,
              r: 6,
              cursor: 'pointer',
              symbol: cfg.collapsed ? G6.Marker.expand : G6.Marker.collapse,
              stroke: color,
              lineWidth: 1,
              fill: '#fff',
            },
            name: 'collapse-icon',
          });
        }

        // description
        const description = cfg && cfg.description ? cfg.description : undefined;
        const titleRectBox = titleRectShape.getBBox();
        let descriptionTextShape;
        if (description) {
          descriptionTextShape = group!.addShape('text', {
            attrs: {
              textBaseline: 'top',
              x: 8,
              y: titleRectBox.height + 8,
              text: description,
              ...labelStyle,
            },
            name: `description`,
          });
        }
        if (descriptionTextShape) {
          const desTextShapeBBox = descriptionTextShape.getBBox();
          const height = titleRectBox.height + 16 + desTextShapeBBox.height;
          const width =
            size[0] > desTextShapeBBox.width + 16 ? size[0] : desTextShapeBBox.width + 16;
          shape.attr({ width, height });
          titleRectShape?.attr('width', width);
          markerShape?.attr({
            x: width,
            y: height / 2,
          });
        }
        return shape;
      },
      update: undefined,
    },
    'single-node',
  );

  G6.registerNode(
    'round-rect',
    {
      drawShape: (cfg: ModelConfig | undefined = {}, group: IGroup | undefined) => {
        let size = cfg.size || [100, 30];
        if (typeof size === 'number') size = [size, size];
        let style = cfg.style || {};
        const color = style.stroke || cfg.color || '#5B8FF9';
        const fill = style.fill || '#fff';
        style = {
          width: size[0],
          height: size[1],
          radius: size[1] / 2,
          fill,
          lineWidth: 1.2,
          stroke: color,
          ...style,
        };

        const rect = group!.addShape('rect', {
          attrs: {
            x: -size[0] / 2,
            y: -size[1] / 2,
            ...style,
          },
          name: 'rect-shape',
        });
        // circles for anchor points
        group!.addShape('circle', {
          attrs: {
            x: -size[0] / 2,
            y: 0,
            r: 3,
            fill: style.stroke,
          },
          name: 'circle-shape',
        });
        group!.addShape('circle', {
          attrs: {
            x: size[0] / 2,
            y: 0,
            r: 3,
            fill: style.stroke,
          },
          name: 'circle-shape2',
        });
        return rect;
      },

      getAnchorPoints: function getAnchorPoints() {
        return [
          [0, 0.5],
          [1, 0.5],
        ];
      },

      update: function update(cfg: ModelConfig = {}, item: Item) {
        const group = item.getContainer();
        const children = group.get('children');
        const node = children[0];
        const circleLeft = children[1];
        const circleRight = children[2];

        const stroke = cfg.style?.stroke || '#5B8FF9';

        if (stroke) {
          node.attr('stroke', stroke);
          circleLeft.attr('fill', stroke);
          circleRight.attr('fill', stroke);
        }
      },
    },
    'single-node',
  );

  G6.registerEdge(
    'fund-polyline',
    {
      draw: function draw(cfg: ModelConfig | undefined = {}, group: IGroup | undefined) {
        const startPoint = cfg.startPoint as IPoint;
        const endPoint = cfg.endPoint as IPoint;
        const Ydiff = endPoint.y - startPoint.y;
        const slope = Ydiff !== 0 ? Math.min(500 / Math.abs(Ydiff), 20) : 0;
        const cpOffset = slope > 15 ? 0 : 16;
        const offset = Ydiff < 0 ? cpOffset : -cpOffset;

        const line1EndPoint = {
          x: startPoint.x + slope,
          y: endPoint.y + offset,
        };
        const line2StartPoint = {
          x: line1EndPoint.x + cpOffset,
          y: endPoint.y,
        };

        // 控制点坐标
        const controlPoint = {
          x:
            ((line1EndPoint.x - startPoint.x) * (endPoint.y - startPoint.y)) /
              (line1EndPoint.y - startPoint.y) +
            startPoint.x,
          y: endPoint.y,
        };

        let path = [
          ['M', startPoint.x, startPoint.y],
          ['L', line1EndPoint.x, line1EndPoint.y],
          ['Q', controlPoint.x, controlPoint.y, line2StartPoint.x, line2StartPoint.y],
          ['L', endPoint.x, endPoint.y],
        ];

        if (Math.abs(Ydiff) <= 5) {
          path = [
            ['M', startPoint.x, startPoint.y],
            ['L', endPoint.x, endPoint.y],
          ];
        }

        const { style } = cfg;

        const stroke =
          style!.stroke || (cfg?.colorMap && (cfg.colorMap as Object)[cfg.dataType as string])
            ? (cfg?.colorMap as Object)[cfg?.dataType as string]
            : '#5B8FF9';
        const endArrow: ArrowConfig | boolean = cfg.style?.endArrow || false;
        if (isObject(endArrow)) endArrow.fill = stroke;

        const line = group!.addShape('path', {
          attrs: {
            path,
            stroke,
            lineWidth: style!.lineWidth || 1.2,
            endArrow,
          },
          name: 'path-shape',
        });

        const labelLeftOffset = 0;
        const labelTopOffset = 8;

        // label
        let labelTextShape;
        const textBeginX = line2StartPoint.x + labelLeftOffset;
        if (cfg?.label) {
          labelTextShape = group!.addShape('text', {
            attrs: {
              text: cfg.label,
              x: textBeginX,
              y: endPoint.y - labelTopOffset - 2,
              fontSize: 14,
              textAlign: 'left',
              textBaseline: 'middle',
              fill: '#000',
            },
            name: 'text-shape-label',
          });
        }
        // dataType
        if (cfg?.dataType) {
          const labelTextShapeBBox = labelTextShape ? labelTextShape.getBBox() : { height: 0 };
          group!.addShape('text', {
            attrs: {
              text: cfg.dataType,
              x: textBeginX,
              y: endPoint.y - labelTopOffset - labelTextShapeBBox.height - 2,
              fontSize: 10,
              textAlign: 'left',
              textBaseline: 'middle',
              fill: '#000',
            },
            name: 'text-shape-type',
          });
        }
        // subLabel
        if (cfg?.subLabel) {
          group!.addShape('text', {
            attrs: {
              text: cfg.subLabel,
              x: textBeginX,
              y: endPoint.y + labelTopOffset + 4,
              fontSize: 12,
              fontWeight: 300,
              textAlign: 'left',
              textBaseline: 'middle',
              fill: '#000',
            },
            name: 'text-shape-sub-label',
          });
        }
        return line;
      },
      update: undefined,
    },
    'single-edge',
  );

  G6.registerEdge('flow-line', {
    draw(cfg: ModelConfig | undefined = {}, group: IGroup | undefined) {
      const { startPoint, endPoint } = cfg;
      const { style = {} } = cfg;
      const shape = group!.addShape('path', {
        attrs: {
          stroke: style.stroke,
          endArrow: style.endArrow,
          path: [
            ['M', startPoint!.x, startPoint!.y],
            ['L', startPoint!.x, (startPoint!.y + endPoint!.y) / 2],
            ['L', endPoint!.x, (startPoint!.y + endPoint!.y) / 2],
            ['L', endPoint!.x, endPoint!.y],
          ],
        },
      });
      return shape;
    },
  });
};

export const customIconNode = (params: { enableEdit?: boolean; options?: any }) => {
  G6.registerNode(
    'icon-node',
    {
      options: {
        size: [60, 20],
        stroke: '#91d5ff',
        fill: '#91d5ff',
      },
      draw(cfg: ModelConfig | undefined = {}, group: IGroup | undefined) {
        // @ts-ignore
        const styles = this.getShapeStyle(cfg);
        const { labelCfg = {} } = cfg;

        const keyShape = group!.addShape('rect', {
          attrs: {
            ...styles,
            x: 0,
            y: 0,
          },
        });

        /**
         * leftIcon 格式如下：
         *  {
         *    style: ShapeStyle;
         *    img: ''
         *  }
         */
        let style = {
          fill: '#e6fffb',
        };
        let img =
          'https://g.alicdn.com/cm-design/arms-trace/1.0.155/styles/armsTrace/images/TAIR.png';
        if (cfg.leftIcon) {
          style = { ...style, ...(cfg.leftIcon as any).style };
          img = (cfg.leftIcon as any).img;
        }
        group!.addShape('rect', {
          attrs: {
            x: 1,
            y: 1,
            width: 38,
            height: styles.height - 2,
            ...style,
          },
        });

        group!.addShape('image', {
          attrs: {
            x: 8,
            y: 8,
            width: 24,
            height: 24,
            img,
          },
          name: 'image-shape',
        });

        if (params.enableEdit) {
          group!.addShape('marker', {
            attrs: {
              x: styles.width / 3,
              y: styles.height + 6,
              r: 6,
              stroke: '#73d13d',
              cursor: 'pointer',
              symbol: G6.Marker.expand,
            },
            name: 'add-item',
          });

          group!.addShape('marker', {
            attrs: {
              x: (styles.width * 2) / 3,
              y: styles.height + 6,
              r: 6,
              stroke: '#ff4d4f',
              cursor: 'pointer',
              symbol: G6.Marker.collapse,
            },
            name: 'remove-item',
          });
        }

        if (cfg.label) {
          group!.addShape('text', {
            attrs: {
              ...labelCfg.style,
              text: cfg.label,
              x: styles.width / 2,
              y: styles.height / 1.5,
            },
          });
        }

        return keyShape;
      },
    },
    'rect',
  );
};
