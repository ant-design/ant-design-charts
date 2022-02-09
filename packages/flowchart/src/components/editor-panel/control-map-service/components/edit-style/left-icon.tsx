import React from 'react';
import { editIconWidth, editIconHeight, iconRectHeight, iconRectWidth, editIconColor } from './constants';

//向左箭头
const LeftIcon = (
  <svg style={{ width: editIconWidth, height: editIconHeight }} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path style={{ fill: editIconColor }} d="m210,105.67,-3,1.5l,0l0,-1.5l,3-5.5,3,-1.5l-8,0l0,1.5l-5.5,-3z" />
      <path
        transform="rotate(-90 4.5 11)"
        stroke="null"
        d="m0.9,14.29191l3.62,-6.37681l3.62,6.4-7.2,0z"
        style={{ fill: editIconColor }}
      />
      <rect
        style={{ width: iconRectWidth, height: iconRectHeight, fill: editIconColor }}
        y="10"
        x="7.6"
        stroke="null"
      />
    </g>
  </svg>
);

export default LeftIcon;
