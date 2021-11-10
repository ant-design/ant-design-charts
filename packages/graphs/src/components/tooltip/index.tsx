import React from 'react';
import ReactDOM from 'react-dom';
import { get } from '@antv/util';
import { setStyles } from '../../utils';
import { Graph, TooltipCfg, NodeCfg, NodeConfig } from '../../interface';

export interface ITooltip {
  tooltipCfg: TooltipCfg;
  graph: Graph;
  container: HTMLDivElement | null;
  nodeCfg: NodeCfg;
}

export const createTooltip = ({ graph, container, tooltipCfg, nodeCfg }: ITooltip) => {
  let { size = [120, 40] } = nodeCfg;
  const { style, show, className, customContent } = tooltipCfg;
  if (typeof size === 'number') size = [size, size];
  const [nodeWidth, nodeHeight] = size;
  const createTooltipContainer = (positionStyle?: React.CSSProperties, item?: NodeConfig) => {
    const tooltipId = `${graph.get('id')}-toolitp`;
    const exist = document.querySelector(`#${tooltipId}`);
    if (exist) {
      exist.parentNode?.removeChild(exist);
    }
    if (!show || !positionStyle) {
      return;
    }
    const defaultStyle = {
      position: 'absolute',
      width: `${nodeWidth}px`,
      padding: '6px',
      borderRadius: '2px',
      fontSize: '24px',
      backgroundColor: '#fff',
      boxShadow: '0 0 3px #ccc',
      minHeight: '40px',
      boxSizing: 'border-box',
    } as React.CSSProperties;
    const mountPoint = document.createElement('div');
    mountPoint.id = tooltipId;
    mountPoint.className = className ?? 'charts-toolbar';
    setStyles(mountPoint, defaultStyle);
    setStyles(mountPoint, positionStyle);
    setStyles(mountPoint, style);
    ReactDOM.render(customContent(item), mountPoint);
    // @ts-ignore
    container.appendChild(mountPoint);
  };

  const bindEvents = () => {
    const currentNode = {
      current: '',
    };
    graph.on('node:mousemove', (evt) => {
      if (!currentNode.current) {
        // 这里有瑕疵，获取的 minX 不一定是最外层的容器
        const { minX, minY } = get(evt, 'shape.cfg.canvasBBox') ?? {};
        if (!minX) {
          return;
        }
        const modelId = get(evt.item?.getModel(), 'id', '');
        if (modelId) {
          currentNode.current = modelId;
        }
        createTooltipContainer(
          {
            left: `${Math.min(Math.max(minX, 0), graph.getWidth() - nodeWidth)}px`,
            bottom: `${graph.getHeight() - minY + nodeHeight}px`,
          },
          evt.item?.getModel() as NodeConfig,
        );
      }
    });
    graph.on('node:mouseleave', () => {
      currentNode.current = '';
      createTooltipContainer();
    });
  };
  bindEvents();
};
