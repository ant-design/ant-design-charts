import React, { useContext } from 'react';
import { Popover } from 'antd';
import { NsGraph } from '@antv/xflow';
import AppContext from '../../../context';
import { getProps } from '../../../util';
import { ITreeNode } from '../../canvas-node-tree-panel/interface';

export const withPopover = (props: NsGraph.IReactNodeProps<any>) => (WrappedComponent: NsGraph.INodeRender) => {
  const { flowchartId } = useContext(AppContext);
  const { content, title, extra } = getProps(flowchartId, 'popoverProps') ?? {};
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
