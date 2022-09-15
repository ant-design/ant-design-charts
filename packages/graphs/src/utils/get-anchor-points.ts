import { defaultFlowGraphAnchorPoints } from '../constants';
import { NodeConfig } from '../interface';
/** 支持自定义 anchor */
export const getAnchorPoints = (anchorPoints: ((node: NodeConfig) => number[][]) | number[][], node?: NodeConfig) => {
  if (typeof anchorPoints === 'function' && node) {
    return anchorPoints(node) || {};
  }
  if (Array.isArray(anchorPoints)) {
    return anchorPoints;
  }
  return defaultFlowGraphAnchorPoints;
};
