import React from '@alipay/bigfish/react';
import ReactDOM from '@alipay/bigfish/react-dom';

export const createNode = (children: React.ReactElement) => {
  const mountPoint = document.createElement('div');
  ReactDOM.render(children, mountPoint);
  return mountPoint;
};
