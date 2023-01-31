import G6 from '@antv/g6';
import type { EdgeConfig } from '@antv/g6';
import baseEdge from './baseEdge';


export const registerConvLine = () => {
  // 自定义转化边
  G6.registerEdge('conv-line', {
    ...baseEdge,
    draw(cfg: EdgeConfig, group) {
      const { startPoint, endPoint } = cfg;
      // 直线，线条样式、箭头自定义
      const path = [
        ['M', startPoint.x, startPoint.y],
        ['L', endPoint.x, endPoint.y],
      ];
      return baseEdge.draw(cfg, group, path);
    },
  });
}
