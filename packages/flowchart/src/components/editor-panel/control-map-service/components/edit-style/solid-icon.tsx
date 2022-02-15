import React from 'react';
import { editIconWidth, editIconHeight, iconRectHeight, editIconColor } from './constants';

//实线
const SolidIcon = (
  <svg style={{ width: editIconWidth, height: editIconHeight }} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path
        d="m209.8,105.6.5,-3,1.5l7.98,0l0,-1.5l5.5,3-5.5,3,-1.5l-7.98,0l0,1.5l-5.5,-3z"
        style={{ fill: editIconColor }}
      />
      <rect style={{ width: 28, height: iconRectHeight, fill: editIconColor }} x={1.6} y={11} />
    </g>
  </svg>
);

export default SolidIcon;
