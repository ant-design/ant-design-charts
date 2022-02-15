import React from 'react';
import { editIconWidth, editIconHeight, iconRectHeight, iconRectWidth, editIconColor } from './constants';

//向右箭头
const RightIcon = (
  <svg style={{ width: editIconWidth, height: editIconHeight }} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path style={{ fill: editIconColor }} d="m209.86,105.67.5,-3,1.5,0l0,-1.5,3-5.5,3,-1.5-7.9,0l0,1.5l-5.5,-3z" />
      <path
        transform="rotate(90 21.3394 11.1035)"
        d="m17.7,14.29191l3.62319,-6.37681l3.62,6.37-7.24,0z"
        style={{ fill: editIconColor }}
      />
      <rect style={{ width: iconRectWidth, height: iconRectHeight, fill: editIconColor }} y={10} x={1.6} />
    </g>
  </svg>
);

export default RightIcon;
