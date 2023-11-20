import type { Options } from '../../types/common';

export type RadialBarOptions = Options & {
  startAngle: number;
  maxAngle: number;
  radius: number;
  innerRadius: number;
  markBackground: Record<string, string>;
};
