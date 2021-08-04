import React from 'react';
import type { NsGraphConfig } from '@ali/xflow';
import { useAppContext } from '@ali/xflow';

export const LabelEdge: NsGraphConfig.IEdgeRender = (props) => {
  const ctx = useAppContext();
  return <span>rect</span>;
};
