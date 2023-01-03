import React from 'react';
import { defaultToolbarStyle } from '../constants';
import { ToolbarCfg, Graph } from '../interface';
import { Toolbar } from './components/toolbar';
import { createNode } from '../utils';

export const processToolbar = (cfg: ToolbarCfg = {}, graph: Graph, container: HTMLDivElement): void => {
  const { show, className, style, ...rest } = cfg;
  const graphId = graph?.get('id');
  if (!graph || graph.destroyed) {
    return;
  }
  const toolbarId = `${graphId}-toolbar`;
  const exist = document.querySelector(`#${toolbarId}`);
  if (exist) {
    exist.parentNode?.removeChild(exist);
  }
  if (show) {
    const mountPoint = createNode(
      <Toolbar graph={graph} container={container} toolbarCfg={rest} />,
      {
        className: className ?? 'charts-toolbar',
        id: toolbarId,
      },
      {
        ...defaultToolbarStyle,
        ...style,
      },
    );
    // @ts-ignore
    container.appendChild(mountPoint);
  }
};
