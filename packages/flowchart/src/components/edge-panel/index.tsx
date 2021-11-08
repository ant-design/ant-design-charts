import React from 'react';
import { LabelEdge } from './edges';
import { FLOWCHART_EDGE } from './constants';
export * from './constants';

export const registerEdge = (config) => {
  config.setEdgeRender(FLOWCHART_EDGE, (props) => <LabelEdge {...props} />);
};
