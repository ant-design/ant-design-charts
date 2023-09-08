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

const shadowLoading = (ele: HTMLElement) => {
  const shadowRoot = ele.attachShadow({ mode: 'open' });
  const shadowDiv = document.createElement('div');
  const shadowStyle = document.createElement('style');
  shadowStyle.innerHTML = `.loading {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .loading div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #ccc;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .loading div:nth-child(1) {
    left: 8px;
    animation: loading1 0.6s infinite;
  }
  .loading div:nth-child(2) {
    left: 8px;
    animation: loading2 0.6s infinite;
  }
  .loading div:nth-child(3) {
    left: 32px;
    animation: loading2 0.6s infinite;
  }
  .loading div:nth-child(4) {
    left: 56px;
    animation: loading3 0.6s infinite;
  }
  @keyframes loading1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes loading3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes loading2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
  `;
  shadowDiv.classList.add('loading');
  shadowDiv.innerHTML = '<div></div><div></div><div></div><div></div>';
  shadowRoot.appendChild(shadowStyle);
  shadowRoot.appendChild(shadowDiv);
};

export const ChartLoading = ({ loadingTemplate, theme = 'light' }: ChartLoadingConfig) => {
  const shadow = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!loadingTemplate && shadow.current) {
      shadowLoading(shadow.current);
    }
  }, []);
  const renderLoading = () => {
    if (loadingTemplate) return loadingTemplate;
    return <div ref={shadow}></div>;
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
