import React, { useContext } from 'react';
import { NsGraphConfig } from '@ali/xflow';
import { AppContext } from '../../index';
import { createPath } from '../../util';
import { NODE_WIDTH, NODE_HEIGHT, NODE_PADDING } from '../../constants';

export const NoteLeftNode: NsGraphConfig.INodeRender = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT }, data } = props;
  const {
    theme: { NodeConfig, LabelConfig },
  } = useContext(AppContext) as any;
  const stateNodeConfig = NodeConfig?.normal;
  const stateLabelConfig = LabelConfig?.normal;
  const { width, height } = size;
  const dx = 6;
  const baseX = width - 2 * NODE_PADDING;
  const path = [
    ['M', baseX, NODE_PADDING], // top-right
    ['C', baseX - dx, NODE_PADDING, baseX - dx, dx],
    ['', baseX - dx, (height - dx) / 2],
    ['L', baseX - 2 * dx, height / 2],
    ['L', baseX - dx, (height + dx) / 2],
    ['L', baseX - dx, height - 2 * NODE_PADDING - dx],
    ['C', baseX - dx, height - 2 * NODE_PADDING, baseX, height - 2 * NODE_PADDING],
    ['', baseX, height - 2 * NODE_PADDING],
  ];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      // viewBox={`0 0 40 30`}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <path
        d={createPath(path)}
        fill={stateNodeConfig.fill}
        stroke={stateNodeConfig.stroke}
        style={{
          fill: '#fff',
        }}
      />
      <text x={width / 2} y={height / 2} fill={stateLabelConfig.fill} textAnchor="middle" alignmentBaseline="middle">
        {data?.label}
      </text>
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};
