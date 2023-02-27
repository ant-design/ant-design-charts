import React from 'react';

export interface ChartLoadingConfig {
  /**
   * @title 主题
   * @description 配置主题颜色
   */
  theme?: string | object;
  /**
   * @title 加载模板
   * @description 图表加载
   */
  loadingTemplate?: React.ReactElement;
}

export const ChartLoading = ({ loadingTemplate, theme = 'light' }: ChartLoadingConfig) => {
  const renderLoading = () => {
    if (loadingTemplate) return loadingTemplate;
    return 'loading...';
  };

  return (
    <div
      className="charts-loading-container"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        top: 0,
        zIndex: 99,
        backgroundColor: theme === 'dark' ? 'rgb(20, 20, 20)' : 'rgb(255, 255, 255)',
      }}
    >
      {renderLoading()}
    </div>
  );
};
