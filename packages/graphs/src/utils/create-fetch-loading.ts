import { isFunction } from '@antv/util';
import { NodeConfig, FetchLoading } from '../interface';
import { prefix } from '../constants';
import { createNode } from './create-node';
import { setStyles } from './set-styles';

/** 开启加载动画， 不支持同时存在多个 */
export const createFetchLoading = (node: NodeConfig, fetchLoading: FetchLoading) => {
  const loadingClassName = `${prefix}-antd-loading`;
  if (fetchLoading) {
    const loadingTemplate = isFunction(fetchLoading) ? fetchLoading(node) : fetchLoading;
    document.body.appendChild(
      createNode(loadingTemplate, {
        className: loadingClassName,
      }),
    );
  } else {
    const container = document.createElement('div');
    container.className = loadingClassName;
    const styles = {
      position: 'fixed' as 'fixed',
      left: '0',
      top: '0',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0,0,0, 0.25)',
      color: '#fff',
      fontSize: '16px',
      zIndex: 999,
    };
    setStyles(container, styles);
    const span = document.createElement('span');
    span.innerText = 'loading...';
    container.appendChild(span);
    document.body.appendChild(container);
  }
};
