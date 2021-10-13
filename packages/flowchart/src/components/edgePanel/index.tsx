import React from 'react';
import { GraphConfig } from '@ali/xflow';
import { LabelEdge } from './edges';
export * from './constants';

export const registerEdge = (config: GraphConfig) => {
  config.setEdgeRender('EDGE1', (props) => <LabelEdge {...props} />);
};
