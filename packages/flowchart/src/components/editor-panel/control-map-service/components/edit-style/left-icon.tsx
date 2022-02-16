import React from 'react';
import { editIconWidth, editIconHeight, editIconColor, rectHeight, rectWidth } from './constants';

//向左箭头
const LeftIcon = (
  <svg style={{ width: editIconWidth, height: editIconHeight }} xmlns="http://www.w3.org/2000/svg">
    <g>
      <rect style={{ width: rectWidth, height: rectHeight, fill: 'none' }} x={-1} y={-1} />
      <path
        style={{ strokeWidth: 0, fill: editIconColor }}
        d="m1.06204,11.58766l8.18428,-3.58766l0,2.61941l13.44529,0l0,1.9365l-13.44529,0l0,2.44409l-8.24632,-3.41234z"
      />
    </g>
  </svg>
);

export default LeftIcon;
