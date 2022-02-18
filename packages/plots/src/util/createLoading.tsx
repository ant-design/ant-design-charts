import React from 'react';
import ContentLoader from 'react-content-loader';

interface Props {
  /**
   * @title 主题
   * @description 配置主题颜色
   * @title.en_US Theme
   * @description.en_US Configure theme colors
   */
  theme?: string | object;
  /**
   * @title 加载模板
   * @description 图表加载
   * @title.en_US Load template
   * @description.en_US Chart loading
   */
  loadingTemplate?: React.ReactElement;
}

const ChartLoading = ({ loadingTemplate, theme = 'light' }: Props) => {
  const renderLoading = () => {
    if (loadingTemplate) {
      return loadingTemplate;
    }
    return (
      <ContentLoader
        viewBox="0 0 400 180"
        width={200}
        height={90}
        speed={1}
        backgroundColor={theme === 'dark' ? '#262626' : '#D9D9D9'}
      >
        <rect x="20" y="5" rx="0" ry="0" width="1" height="170" />
        <rect x="20" y="175" rx="0" ry="0" width="360" height="1" />
        <rect x="40" y="75" rx="0" ry="0" width="35" height="100" />
        <rect x="80" y="125" rx="0" ry="0" width="35" height="50" />
        <rect x="120" y="105" rx="0" ry="0" width="35" height="70" />
        <rect x="160" y="35" rx="0" ry="0" width="35" height="140" />
        <rect x="200" y="55" rx="0" ry="0" width="35" height="120" />
        <rect x="240" y="15" rx="0" ry="0" width="35" height="160" />
        <rect x="280" y="135" rx="0" ry="0" width="35" height="40" />
        <rect x="320" y="85" rx="0" ry="0" width="35" height="90" />
      </ContentLoader>
    );
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

export default ChartLoading;
