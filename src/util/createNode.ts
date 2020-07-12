import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

const createNode = (children: React.ReactNode, server?: boolean) => {
  const mountPoint = document.createElement('div');
  mountPoint.className = 'g2-tooltip eva-charts-tootip';
  ReactDOM.render(children as React.ReactElement, mountPoint);
  if (server) {
    return ReactDOMServer.renderToString(children as React.ReactElement);
  }
  return mountPoint;
};

export default createNode;
