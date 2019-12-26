import React, { useEffect } from 'react';
import { GroupColumn, GroupColumnConfig } from '@antv/g2plot';
import useInit from '../hooks/useInit';
import { checkChanged } from '../util/utils';
import { withContext } from '../base';

export interface IGroupColumnConfig extends GroupColumnConfig {
  theme?: string;
  onInit?: (chart: GroupColumn) => void;
}

// 默认配置
const DefaultConfig = {};

const TechGroupColumn: React.FC<IGroupColumnConfig> = (props: IGroupColumnConfig) => {
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
    const chartInstance = new GroupColumn(container.current, {
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
   * @param {config } Partial<IGroupColumnConfig> 新配置
   */
  const updateConfig = (config: Partial<IGroupColumnConfig>) => {
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

export default withContext(TechGroupColumn);
