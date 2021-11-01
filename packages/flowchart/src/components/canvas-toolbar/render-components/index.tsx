import React from 'react';
import { Spin } from 'antd';
import classnames from 'classnames';
// xflow
import type { IToolbarOptions, IToolbarLayout, IToolbarGroupOptions } from '@ali/xflow-core';
import { usePositionStyle } from '@ali/xflow-core';
// component
import { Toolbar } from '@antv/x6-react-components';
import { ToolbarGroup } from './toolbar-group';
import { useToolbarModel } from '../service';
import type { IToolbarProps } from '../interface';
import classNames from 'classnames';

/** render toolbar */
const ToolbarRender: React.FC<{
  idx: string;
  toolbarOptions: IToolbarOptions;
  groups: IToolbarGroupOptions[];
  layout: IToolbarLayout;
}> = (props) => {
  const { idx, groups, layout, toolbarOptions } = props;
  const { hoverEffect = true } = toolbarOptions;
  return (
    <Toolbar hoverEffect={hoverEffect}>
      {groups.map((g, gIdx) => {
        const key = idx + gIdx;
        return <ToolbarGroup key={key} group={g} layout={layout} />;
      })}
    </Toolbar>
  );
};

const InnerRender: React.FC<IToolbarProps> = (props) => {
  const { isModelReady, state } = useToolbarModel(props);
  const positionStyle = usePositionStyle(props.position);
  const { mainGroups = [], extraGroups = [], layout, customRender } = state;
  const containerClz = classNames(props.className, layout, 'xflow-toolbar');
  const clz = classnames({
    [layout]: true,
    ['xflow-toolbar-root']: true,
  });

  // loading
  if (!isModelReady) {
    return (
      <div
        className={containerClz}
        style={{
          ...positionStyle,
          ...props.style,
        }}
      >
        <Spin spinning size="small" />
      </div>
    );
  }

  // render custom component
  if (customRender) {
    return (
      <div
        className={containerClz}
        style={{
          ...positionStyle,
          ...props.style,
        }}
      >
        {React.createElement(customRender, { config: state })}
      </div>
    );
  }

  // render toolbars
  return (
    <div
      className={containerClz}
      style={{
        ...positionStyle,
        ...props.style,
      }}
    >
      <div className={clz}>
        {mainGroups.length > 0 && (
          <ToolbarRender idx="mainGroups" groups={mainGroups} layout={layout} toolbarOptions={state} />
        )}
        {extraGroups.length > 0 && (
          <ToolbarRender idx="extraGroups" groups={extraGroups} layout={layout} toolbarOptions={state} />
        )}
      </div>
    </div>
  );
};

/** connect 数据 */
export const XFlowToolbar = React.memo<IToolbarProps>(InnerRender);
