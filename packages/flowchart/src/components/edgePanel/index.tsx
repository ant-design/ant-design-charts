import React from 'react';
import { GraphConfig } from '@ali/xflow';
import { LabelEdge } from './edges';
import { FLOWCHART_EDGE } from './constants';
export * from './constants';

export const registerEdge = (config: GraphConfig) => {
  config.setEdgeRender(FLOWCHART_EDGE, (props) => <LabelEdge {...props} />);
};
