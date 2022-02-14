import React from 'react';
import { Button } from 'antd';
import { IProps } from './interface';
import { usePanelContext } from '@antv/xflow';

export interface IFooterProps extends IProps {}

export const NodePanelFooter: React.FC<IFooterProps> = (props) => {
  const { prefixClz } = props;
  const { propsProxy } = usePanelContext<IProps>();
  const panelProps = propsProxy.getValue();
  return (
    <React.Fragment>
      <div
        className={`${prefixClz}-footer`}
        style={{
          zIndex: 1,
          ...props.style,
        }}
      >
        {panelProps.footer && React.isValidElement(panelProps.footer) && panelProps.footer}
        <Button>更多节点</Button>
      </div>
    </React.Fragment>
  );
};
