import React from 'react';
import { editIconWidth, editIconHeight, iconRectHeight, editIconColor } from './constants';

//实线
const SolidIcon = (
  <svg style={{ width: editIconWidth, height: editIconHeight }} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="m1.53955,11.6586l28.60555,0l0,1.35458l-28.60555,0l0,-1.35458z" fill="#888" />
      <rect style={{ width: 28, height: iconRectHeight, fill: editIconColor }} x={1.6} y={11} />
    </g>
  </svg>
);

export default SolidIcon;
