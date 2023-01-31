import { setItemStateStyle, getArrowConfig } from '../utils';

export default {
  draw(cfg, group, path) {
    const {
      custom: { ratio },
      style: { dashed, stroke, endArrow = true, sizeMapping = true },
    } = cfg;
    let borderWidth = 0;
    // 如果开启了大小映射，则根据比率映射边框宽度
    if (sizeMapping) {
      borderWidth = !isNaN(ratio) && ratio !== Infinity ? Math.max(2, Math.min(72, 72 * ratio)) : 2;
    }

    // 添加边框
    const keyShape = group?.addShape('path', {
      attrs: {
        stroke,
        opacity: 0.2,
        path,
        lineWidth: borderWidth,
      },
      name: 'path-border-shape',
    });

    // 路径主线
    group?.addShape('path', {
      attrs: {
        stroke,
        path,
        endArrow: endArrow ? getArrowConfig(stroke) : null,
        lineDash: dashed ? [3, 3] : [],
      },
      name: 'path-shape',
    });
    return keyShape;
  },
  afterDraw(cfg, group) {
    const {
      label,
      style: { labelFill },
    } = cfg;
    const shape = group?.get('children')[0];
    // 获取路径图形的中点坐标
    const midPoint = shape.getPoint(0.5);
    if (label) {
      // 绘制label
      const labelShape = group?.addShape('text', {
        attrs: {
          text: label,
          x: midPoint.x,
          y: midPoint.y,
          fill: labelFill,
          opacity: 0.85,
          fontFamily: 'Roboto-Regular',
          fontSize: 12,
          textAlign: 'center',
          textBaseline: 'middle',
        },
        name: 'label-shape',
      });
      const labelBbox = labelShape?.getBBox();
      const padding = 5; // 四周的留白

      // 绘制label背景框
      group?.addShape('rect', {
        attrs: {
          width: labelBbox.width + padding * 2,
          height: labelBbox.height + padding * 2,
          x: midPoint.x - labelBbox.width / 2 - padding,
          y: midPoint.y - labelBbox.height / 2 - padding,
          fill: '#fff',
        },
        name: 'label-bg-shape',
        labelRelated: true,
      });

      // 边名称labelShape上移一个层级
      if (labelShape) {
        labelShape.toFront();
      }
    }
  },
  setState(name, value, edge) {
    // 设置状态样式
    setItemStateStyle(edge, 'edge');
  },
};
