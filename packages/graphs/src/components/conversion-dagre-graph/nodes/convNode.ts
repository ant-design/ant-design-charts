import G6 from '@antv/g6';
import type { NodeConfig } from '@antv/g6';
import { setItemStateStyle } from '../utils';

export const registerConvNode = () => {
  // 自定义转化节点
  G6.registerNode('conv-node', {
    options: {},
    draw(cfg: NodeConfig, group) {
      const {
        custom = {} as any,
        style: { stroke, textColor },
        size = 150,
      } = cfg;
      const label = cfg.label as string;
      const { measure = {}, relatedMeasures = [] } = custom;
      const showFormattedValue =
        measure.formattedValue !== undefined && measure.formattedValue !== null;
      // 最外层描边（光晕）
      const keyShape = group.addShape('rect', {
        attrs: {
          x: 0,
          y: 0,
          width: size as number,
          height: 122,
          lineWidth: 0, // 默认不描边
          stroke,
          opacity: 0.3,
          radius: 4,
        },
        name: 'node-key-shape',
        draggable: true,
      });

      const keyShapeBbox = keyShape.getBBox();

      group.addShape('rect', {
        attrs: {
          x: 0,
          y: 0,
          width: keyShapeBbox.width,
          height: keyShapeBbox.height,
          stroke: stroke,
          fill: '#fff',
          radius: 4,
        },
        name: 'node-inner-border-shape',
        draggable: true,
      });

      group.addShape('rect', {
        attrs: {
          x: 0,
          y: 0,
          width: 4,
          height: keyShapeBbox.height,
          fill: stroke,
          radius: [4, 0, 0, 4],
        },
        name: 'node-left-border-shape',
        draggable: true,
      });

      const showNameMore = label.length > 10;
      // 节点名称
      group?.addShape('text', {
        attrs: {
          text: showNameMore ? `${label.slice(0, 11)}...` : label,
          x: 12,
          y: 12,
          fontFamily: 'PingFangSC',
          fontSize: 12,
          fontWeight: 600,
          lineHeight: 17,
          textBaseline: 'top',
          fill: textColor,
          opacity: 0.85,
        },
        name: 'node-name',
      });

      // 主指标名称
      group?.addShape('text', {
        attrs: {
          text: measure.name || '',
          x: 12,
          y: 37,
          fontFamily: 'PingFangSC',
          fontSize: 12,
          fontWeight: 600,
          lineHeight: 17,
          textBaseline: 'top',
          fill: textColor,
          opacity: 0.85,
        },
        name: 'node-measure-name',
        draggable: true,
      });

      // 主指标值
      const measureShape = group?.addShape('text', {
        attrs: {
          text: (showFormattedValue ? measure.formattedValue : measure.value) || '',
          x: 12,
          y: 58,
          fontFamily: 'Roboto-Medium',
          fontSize: 20,
          fontWeight: 600,
          lineHeight: 28,
          textBaseline: 'top',
          fill: textColor,
          opacity: 0.85,
        },
        name: 'node-measure-value',
        draggable: true,
      });

      if (showFormattedValue) {
        const measureShapeBbox = measureShape.getBBox();
        // 主指标单位
        group?.addShape('text', {
          attrs: {
            text: measure.formattedUnit || '',
            x: 12 + measureShapeBbox.width + 4,
            y: 56, // 这个字体要比主指标字体矮一点
            fontFamily: 'PingFangSC',
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 28,
            textBaseline: 'top',
            fill: textColor,
            opacity: 0.85,
          },
          name: 'node-measure-unit',
          draggable: true,
        });
      }

      // 相关指标信息
      relatedMeasures.forEach((relatedMeasure, index) => {
        const showFormattedValue = relatedMeasure.formattedValue !== undefined;
        const relatedMeasureText = `${relatedMeasure.name} ${
          showFormattedValue ? relatedMeasure.formattedValue : relatedMeasure.value
        }${showFormattedValue && relatedMeasure.formattedUnit}`;
        group?.addShape('text', {
          attrs: {
            text: relatedMeasureText,
            x: 12,
            y: 95,
            fontFamily: 'PingFangSC',
            fontSize: 12,
            fontWeight: 400,
            lineHeight: 17,
            textBaseline: 'top',
            fill: textColor,
            opacity: 0.45,
          },
          name: `node-releted-measure-${index}`,
          draggable: true,
        });
      });

      return keyShape;
    },

    setState(name, value, node) {
      // 设置状态样式
      setItemStateStyle(node, 'node');
    },
  });
}