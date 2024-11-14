import { GraphOptions } from "../../types";
import type { NodeData } from '@antv/g6';

export interface FishboneOptions extends GraphOptions {
  /**
   * The type of the fishbone diagram.
   * - `'decision'`: direction from left to right.
   * - `'cause-and-effect'`: direction from right to left.
   * @default 'cause-and-effect'
   */
  type?: 'decision' | 'cause-and-effect';
}
