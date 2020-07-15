import React, { useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { debounce } from 'lodash';
import { Graph } from '@antv/g6';
import { getCenterPointByGraph, toPercent } from '../DecisionTree/utils/g6';
import autoFit from './Icons/autoFit';
import minmize from './Icons/minimize';
import './index.less';

export interface GraphToolbarProps {
  // 模式: 悬浮模式 | 嵌入模式
  mode?: 'fixed' | 'embed';
  graph: Graph;
  toolbarPosition: { left?: number | string, top?: number | string; right?: number | string; bottom?: number | string };
  className?: string;
}

const GraphToolbar: React.FC<GraphToolbarProps> = ({
  mode = 'fixed',
  graph,
  toolbarPosition,
  className,
}) => {
  const [zoom, setZoom] = useState(0);
  useEffect(() => {
    const initialZoom = graph.getZoom() > 2 ? 2 : graph.getZoom();
    // 上层调用 graph.fixView() 后缩放可能超过 100%，因此这里再做一次缩放，避免缩放超过 100%
    graph.zoomTo(initialZoom, getCenterPointByGraph(graph));
    setZoom(initialZoom);
    graph.on(
      'wheelzoom',
      // 使用防抖函数，避免状态改变过于频繁，影响页面交互流畅
      // 设置延迟时间为 16ms，为渲染一帧所需时间
      debounce(() => {
        setZoom(graph.getZoom());
      }, 16),
    );
  }, []);


  return (
    <div className={`tree_toolbar ${`tree_${mode}`} ${className}`} style={{ zIndex: 1, ...toolbarPosition }}>
      <span className={'tree_zoomWrapper'}>
        <Tooltip title="缩小">
          <MinusOutlined
            type="minus"
            className={zoom >= 0.3 ? 'pointable' : 'disabled'}
            onClick={() => {
              const ratio = Math.round(zoom * 10) / 10;
              if (ratio >= 0.3) {
                const newZoom = ratio - 0.1;
                setZoom(newZoom);
                graph.zoomTo(newZoom, getCenterPointByGraph(graph));
              }
            }}
          />
        </Tooltip>
        {toPercent(zoom, 1)}
        <Tooltip title="放大">
          <PlusOutlined
            onClick={() => {
              const ratio = Math.round(zoom * 10) / 10;
              if (ratio <= 1.9) {
                const newZoom = ratio + 0.1;
                setZoom(newZoom);
                graph.zoomTo(newZoom, getCenterPointByGraph(graph));
              }
            }}
          />
        </Tooltip>
      </span>
      <Tooltip title="显示原始比例">
        <div
          style={{ margin: '3px 16px 0' }}
          onClick={() => {
            setZoom(1);
            graph.zoomTo(1, getCenterPointByGraph(graph));
          }}
        >
          {autoFit}
        </div>
      </Tooltip>
      <Tooltip title="自适应画布">
        <div
          style={{ margin: '3px 0 0' }}
          onClick={() => {
            graph.fitView();
          }}
        >
          {minmize}
        </div>
      </Tooltip>
    </div>
  );
};

export default GraphToolbar;
