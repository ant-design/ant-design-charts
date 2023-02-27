import Column from './components/column';
import { G2, flow, measureTextWidth, adaptors, getCanvasPattern, FUNNEL_CONVERSATION_FIELD } from '@antv/g2plot';

export {
  Column,
  G2,
  // 直接导出 G2Plot 相关方法
  getCanvasPattern,
  FUNNEL_CONVERSATION_FIELD,
  flow,
  measureTextWidth,
  adaptors,
};

export * from './interface';
