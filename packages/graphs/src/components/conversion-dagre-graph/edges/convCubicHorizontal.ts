import G6 from '@antv/g6';
import type { EdgeConfig } from '@antv/g6';
import baseEdge from './baseEdge';

// 自定义转化边
export const registerConvCubicHorizontal = () => {
  G6.registerEdge('conv-cubic-horizontal', {
    ...baseEdge,
    draw(cfg: EdgeConfig, group) {
      const { startPoint, endPoint } = cfg;
      const hgap = Math.abs(endPoint.y - startPoint.y);
      // 水平三阶贝塞尔曲线，两端留4px的汇总直线
      const path = [
        ['M', startPoint.x, startPoint.y],
        ['L', startPoint.x + 4, startPoint.y],
        [
          'C',
          startPoint.x < endPoint.x ? startPoint.x + hgap / 2 : startPoint.x - hgap / 2,
          startPoint.y,
          startPoint.x < endPoint.x ? endPoint.x - hgap / 2 : endPoint.x + hgap / 2,
          endPoint.y,
          endPoint.x - 15,
          endPoint.y,
        ],
        ['L', endPoint.x, endPoint.y],
      ];
  
      return baseEdge.draw(cfg, group, path);
    },
  });
}
