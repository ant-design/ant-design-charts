import React from 'react';
import classnames from 'classnames';
import { Toolbar } from '@antv/x6-react-components';

import type { IToolbarGroupOptions, IToolbarLayout } from '@ali/xflow-core';
import { uuidv4 } from '@ali/xflow-core';

import { ToolbarItem } from './toolbar-item';

export interface IProps {
  group: IToolbarGroupOptions;
  layout: IToolbarLayout;
}

export const ToolbarGroup: React.FC<IProps> = (props) => {
  const { group, layout } = props;
  const groupKey = React.useMemo(() => {
    return group.name || uuidv4();
  }, [group.name]);
  const { items = [] } = group;

  if (items.length === 0) {
    return null;
  }

  const clz = classnames({
    ['xflow-toolbar-group']: true,
  });

  return (
    <Toolbar.Group className={clz} key={groupKey}>
      {items.map((item) => (
        <ToolbarItem item={item} layout={layout} key={item.id} />
      ))}
    </Toolbar.Group>
  );
};
