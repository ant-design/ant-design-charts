import React from 'react';

export const rightIcon = (
  <svg width="31px" height="22px" transform="rotate(360) scale(0.25)">
    <defs>
      <marker id="right-icon" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#888" />
      </marker>
    </defs>
    <line x1="-20" y1="10" x2="30" y2="10" stroke="#888" stroke-width="5" marker-end="url(#right-icon)" />
  </svg>
);

export const leftIcon = (
  <svg width="31px" height="22px" transform="rotate(180) scale(0.25)">
    <defs>
      <marker id="left-icon" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#888" />
      </marker>
    </defs>
    <line x1="-30" y1="10" x2="20" y2="10" stroke="#888" stroke-width="5" marker-end="url(#left-icon)" />
  </svg>
);

export const solidIcon = (
  <svg width="31px" height="22px" transform="rotate(180) scale(0.4)">
    <line x1="-20" y1="10" x2="70" y2="10" stroke="#888" stroke-width="5" />
  </svg>
);

export const dottedLine = (
  <svg width="31px" height="22px" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <g fill="none" stroke="#888" stroke-width="2">
      <path stroke-dasharray="5,5" d="M1 12 40 12" />
    </g>
  </svg>
);
