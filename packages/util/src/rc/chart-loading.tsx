import React from 'react';
import { ContainerConfig } from '../types';

export interface ChartLoadingConfig extends Pick<ContainerConfig, 'loadingTemplate' | 'loading'> {
  /**
   * @title 主题
   * @description 配置主题颜色
   */
  theme?: string;
}

const shadowLoading = (ele: HTMLElement, style = {}) => {
  if (typeof document === 'undefined') {
    return 'loading';
  }
  let overStyle = "";
  if (style) {
    Object.keys(style).forEach((key) => {
      overStyle += `${key}: ${style[key]};\n`;
    });
  }
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
    ${overStyle}
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

export const ChartLoading = ({ loadingTemplate, theme = 'light', loading }: ChartLoadingConfig) => {
  const shadow = React.useRef<HTMLDivElement>(null);
  const { container = {}, icon = {} } = typeof loading === 'object' ? loading : {};

  React.useEffect(() => {
    if (!loadingTemplate && shadow.current) {
      shadowLoading(shadow.current, icon);
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
        background: theme === 'dark' ? 'rgb(20, 20, 20)' : 'rgb(255, 255, 255)',
        ...container
      }}
    >
      {renderLoading()}
    </div>
  );
};
