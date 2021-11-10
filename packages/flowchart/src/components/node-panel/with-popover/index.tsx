import React from 'react';
import { Popover } from 'antd';
import { NsGraph } from '@ali/xflow';
import { getProps } from '../../../util';
import { ITreeNode } from '../../canvas-node-tree-panel/interface';

export const withPopover = (props: NsGraph.IReactNodeProps<any>) => (WrappedComponent: NsGraph.INodeRender) => {
  const { content, title, extra } = getProps('popoverProps') ?? {};
  const { data } = props;

  if (!content) {
    return <WrappedComponent {...props} />;
  }

  const getContent = (callback: React.ReactNode | ((data: ITreeNode) => React.ReactNode)) => {
    if (typeof callback === 'function') {
      return callback(data);
    }
    return callback;
  };

  return (
    <Popover {...extra} content={getContent(content)} title={getContent(title)}>
      <div className="charts-popover">
        <WrappedComponent {...props} />
      </div>
    </Popover>
  );
};
