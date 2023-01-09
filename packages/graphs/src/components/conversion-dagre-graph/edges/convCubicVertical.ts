import G6 from '@antv/g6';
import type { EdgeConfig } from '@antv/g6';
import { getArrowConfig } from '../utils';
import baseEdge from './baseEdge';

// 自定义转化边
export const registerConvCubicVertical = () => {
  G6.registerEdge('conv-cubic-vertical', {
    ...baseEdge,
    draw(cfg: EdgeConfig, group) {
      const { startPoint, endPoint } = cfg;
      const hgap = Math.abs(endPoint.y - startPoint.y);
      // 垂直三阶贝塞尔曲线，两端留4px的汇总直线
      const path = [
        ['M', startPoint.x, startPoint.y],
        ['L', startPoint.x, startPoint.y + 4],
        [
          'C',
          startPoint.x,
          startPoint.y < endPoint.y ? startPoint.y + hgap / 2 : startPoint.y - hgap / 2,
          endPoint.x,
          startPoint.y < endPoint.y ? endPoint.y - hgap / 2 : endPoint.y + hgap / 2,
          endPoint.x,
          endPoint.y - 15,
        ],
        ['L', endPoint.x, endPoint.y],
      ];
  
      return baseEdge.draw(cfg, group, path);
    },
  });
}
