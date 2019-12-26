import React, { useEffect } from 'react';
import { Bubble, BubbleConfig } from '@antv/g2plot';
import useInit from '../hooks/useInit';
import { checkChanged } from '../util/utils';
import { withContext } from '../base';

export interface IBubbleConfig extends BubbleConfig {
  theme?: string;
  onInit?: (chart: Bubble) => void;
}

// 默认配置
const DefaultConfig = {};

const TechBubble: React.FC<IBubbleConfig> = (props: IBubbleConfig) => {
  const { chart, chartsProps, container } = useInit();

  useEffect(() => {
    if (chart.current) {
      updateConfig(props);
      return;
    }
    initChart();
    return destroy;
  }, []);

  const initChart = () => {
    if (!container.current) {
      console.error('canvas instance does not exist');
      return;
    }
    const { onInit, theme, ...config } = props;
    const chartInstance = new Bubble(container.current, {
      ...DefaultConfig,
      ...config,
    });
    chart.current = chartInstance;
    if (typeof onInit === 'function') {
      onInit(chartInstance);
    }
    chartInstance.render();
    chartsProps.current = props;
  };

  /**
   * 更新图表配置
   * @param {config } Partial<IBubbleConfig> 新配置
   */
  const updateConfig = (config: Partial<IBubbleConfig>) => {
    if (existInstance() && checkChanged(chartsProps.current, props)) {
      chart.current.updateConfig(config);
      chartsProps.current = props;
    }
  };

  // 销毁组件
  const destroy = () => {
    if (existInstance()) {
      chart.current.destroy();
    }
  };

  // 是否存在canvas实例
  const existInstance = (): boolean => !!chart.current;

  return <div ref={container} />;
};

export default withContext(TechBubble);
