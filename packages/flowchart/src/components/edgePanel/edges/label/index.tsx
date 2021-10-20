import React from 'react';
import type { NsGraph } from '@ali/xflow';
import { useAppContext } from '@ali/xflow';

export const LabelEdge: NsGraph.IEdgeRender = (props) => {
  const ctx = useAppContext();
  return <span>rect</span>;
};
