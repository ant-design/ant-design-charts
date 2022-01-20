import React, { useContext } from 'react';
import { NsGraph } from '@antv/xflow';
import { AppContext } from '../../index';
import { createPath } from '../../util';
import { NODE_WIDTH, NODE_HEIGHT, NODE_PADDING } from '../../constants';

export const MergeNodePath = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT } } = props;
  const { width, height } = size;

  const path = [
    ['M', NODE_PADDING, NODE_PADDING], // top-left
    ['L', width - 2 * NODE_PADDING, NODE_PADDING], // top-right
    ['L', width / 2, height - 2 * NODE_PADDING], // bottom-center
    ['Z'],
  ];

  return [createPath(path)];
};
