import ReactDOM from 'react-dom';

export const createNode = (children: React.ReactNode, className: string) => {
  const mountPoint = document.createElement('div');
  mountPoint.className = className;
  ReactDOM.render(children as React.ReactElement, mountPoint);
  return mountPoint;
};
