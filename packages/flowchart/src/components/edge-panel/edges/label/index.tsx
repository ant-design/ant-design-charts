import React from 'react';
import { NsGraph } from '@antv/xflow';

export const LabelEdge: NsGraph.IEdgeRender = (props) => {
  const { data = {} } = props;
  const { label, fontFill, fontSize } = data;

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <span
        style={{
          fontSize,
          color: fontFill,
        }}
      >
        {label}
      </span>
    </div>
  );
};
