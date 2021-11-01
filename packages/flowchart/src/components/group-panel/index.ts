import { GraphConfig } from '@ali/xflow';

import { GroupNode } from './group';

export * from './constants';

export const setGroupRender = (config: GraphConfig) => {
  config.setNodeRender('GROUP_NODE_RENDER_ID', GroupNode);
};
