// import { IGraphConfig } from '@ali/xflow';

import { GroupNode } from './group';

export * from './constants';

export const setGroupRender = (config) => {
  config.setNodeRender('GROUP_NODE_RENDER_ID', GroupNode);
};
