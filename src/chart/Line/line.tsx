import React from 'react';
import { Line, LineConfig } from '@antv/g2plot';
import { checkChanged } from '../../util/utils';
import { withContext } from '../Base';
import { MockData } from './mock';

export interface ITechLineConfig extends LineConfig {
  onInit?: (Line: Line) => void;
}

// 默认配置
const DefaultConfig = {
  xField: 'year',
  yField: 'value',
};

class TechLine extends React.Component<ITechLineConfig> {
  current: HTMLDivElement | null;
  chartInstance: Line;
  componentDidMount() {
    this.onInit();
  }

  componentWillReceiveProps(nextProps: Partial<ITechLineConfig>) {
    console.log('receiveNextProps', nextProps);
    if (checkChanged(this.props, nextProps)) {
      this.updateConfig(nextProps);
    }
  }

  // 初始化图表
  onInit = () => {
    if (!this.current) {
      console.error('canvas instance does not exist');
      return;
    }
    const { onInit, ...config } = this.props;
    const chart = new Line(this.current, {
      data: MockData,
      ...DefaultConfig,
      ...config,
    });
    this.chartInstance = chart;
    if (onInit) {
      onInit(chart);
    }
    this.renderChart();
  };

  // 渲染图表
  renderChart = () => {
    this.chartInstance.render();
  };

  /**
   * 更新图表配置
   * @param {config } Partial<ITechLineConfig> 新配置
   */
  updateConfig = (config: Partial<ITechLineConfig>) => {
    if (this.existInstance) {
      this.chartInstance.updateConfig(config);
    }
  };

  // 销毁图表
  componentWillUnmount() {
    if (this.existInstance) {
      this.chartInstance.destroy();
    }
  }

  // 是否存在canvas实例
  existInstance = (): boolean => {
    return !!this.chartInstance;
  };

  render() {
    return <div ref={ref => (this.current = ref)} />;
  }
}

export default withContext(TechLine);
