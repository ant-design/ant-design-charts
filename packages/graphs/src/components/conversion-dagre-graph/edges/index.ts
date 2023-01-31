import { registerConvCubicVertical } from './convCubicVertical';
import { registerConvCubicHorizontal } from './convCubicHorizontal';
import { registerConvLine } from './convLine';

export const resigterEdges = () => {
  registerConvCubicVertical();
  registerConvCubicHorizontal();
  registerConvLine();
};