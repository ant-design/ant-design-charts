import React from 'react';
import { editIconWidth, editIconHeight, editIconColor } from './constants';

//虚线
const DottedLine = (
  <svg style={{ width: editIconWidth, height: editIconHeight }} xmlns="http://www.w3.org/2000/svg" version="1.1">
    <g style={{ stroke: editIconColor }} strokeWidth={2}>
      <path strokeDasharray="6,5" d="M2 12 33 12" />
    </g>
  </svg>
);

export default DottedLine;
