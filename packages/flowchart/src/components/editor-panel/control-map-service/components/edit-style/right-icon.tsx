import React from 'react';
import { editIconWidth, editIconHeight, editIconColor, rectHeight, rectWidth } from './constants';

//向右箭头
const RightIcon = (
  <svg style={{ width: editIconWidth, height: editIconHeight }} xmlns="http://www.w3.org/2000/svg">
    <g>
      <rect x={-1} y={-1} style={{ width: rectWidth, height: rectHeight, fill: 'none' }} />
      <path
        style={{ strokeWidth: 0, fill: editIconColor }}
        d="m3.21458,10.61941l13.44529,0l0,-2.61941l9.30839,3.58766l-9.30839,3.41234l0,-2.44409l-13.44529,0l0,-1.9365z"
      />
    </g>
  </svg>
);

export default RightIcon;
