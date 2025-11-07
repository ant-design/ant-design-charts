import { flex } from './flex';
import { grid } from './grid';
import type { LayoutConfig, LayoutItem } from './types';

export default (container: LayoutItem, children: LayoutItem[], config: LayoutConfig) => {
  if (children.length === 0) return [];
  const callers = { flex, grid };
  const caller = config.display in callers ? callers[config.display] : null;
  // @ts-ignore
  return caller?.call(null, container, children, config) || [];
};
