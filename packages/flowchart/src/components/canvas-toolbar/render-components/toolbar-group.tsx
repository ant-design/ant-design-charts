import React, { useContext } from 'react';
import classnames from 'classnames';
import { Toolbar } from '@antv/x6-react-components';
import AppContext from '../../../context';
import type { IToolbarGroupOptions, IToolbarLayout } from '@antv/xflow';
import { uuidv4 } from '@antv/xflow';
import { ToolbarItem } from './toolbar-item';
import useFullscreen from '../../../hooks/useFullscreen';
import { getContainer } from '../../../util';

export interface IProps {
  group: IToolbarGroupOptions;
  layout: IToolbarLayout;
}

export const ToolbarGroup: React.FC<IProps> = (props) => {
  const { group, layout } = props;
  const { flowchartId } = useContext(AppContext);
  const [fullscreen, toggleFullscreen] = useFullscreen(getContainer(flowchartId));
  const groupKey = React.useMemo(() => {
    return group.name || uuidv4();
  }, [group.name]);
  let { items = [] } = group;

  if (items.length === 0) {
    return null;
  }

  const clz = classnames({
    ['xflow-toolbar-group']: true,
  });

  items = items.filter((item) => item.id !== 'fullscreen');
  items.push({
    id: 'fullscreen',
    tooltip: fullscreen ? '退出全屏' : '全屏',
    iconName: fullscreen ? 'FullscreenExitOutlined' : 'FullscreenOutlined',
    onClick: () => {
      toggleFullscreen();
    },
  });

  return (
    <Toolbar.Group className={clz} key={groupKey}>
      {items.map((item) => (
        <ToolbarItem item={item} layout={layout} key={item.id} />
      ))}
    </Toolbar.Group>
  );
};
