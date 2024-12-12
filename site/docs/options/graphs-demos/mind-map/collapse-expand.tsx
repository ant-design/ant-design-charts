import { CollapseExpandIcon, MindMap, type MindMapOptions } from '@ant-design/graphs';
import { Divider } from 'antd';
import React from 'react';

const { PlusMinusIcon } = CollapseExpandIcon;

const data = {
  id: 'Modeling Methods',
  children: [
    { id: 'Classification', children: [{ id: 'Logistic regression' }, { id: 'Linear discriminant analysis' }] },
    { id: 'Consensus', children: [{ id: 'Models diversity' }, { id: 'Methods' }, { id: 'Common' }] },
    { id: 'Regression', children: [{ id: 'Multiple linear regression' }, { id: 'Partial least squares' }] },
  ],
};

export default () => {
  const options: MindMapOptions = {
    type: 'linear',
    containerStyle: {
      height: '200px',
    },
    autoFit: 'center',
    data,
    defaultExpandLevel: 1,
    animation: false,
  };

  const updateCollapseExpandBehavior = (options) => {
    return (transforms) => [
      ...transforms.filter((transform) => (transform as any).key !== 'collapse-expand-react-node'),
      {
        ...(transforms.find((transform) => (transform as any).key === 'collapse-expand-react-node') || ({} as any)),
        ...options,
      },
    ];
  };

  return (
    <>
      <Divider orientation="left" plain>
        Click Icon to Expand/Collapse
      </Divider>
      <MindMap {...options} transforms={updateCollapseExpandBehavior({ enable: true })} />
      <Divider orientation="left" plain>
        Click Node to Expand/Collapse
      </Divider>
      <MindMap {...options} transforms={updateCollapseExpandBehavior({ enable: true, trigger: 'node' })} />
      <Divider orientation="left" plain>
        Custom Icon
      </Divider>
      <MindMap
        {...options}
        transforms={updateCollapseExpandBehavior({
          enable: true,
          iconRender: (isCollapsed) => <PlusMinusIcon isCollapsed={isCollapsed} />,
          iconOffsetX: 8,
        })}
      />
    </>
  );
};
