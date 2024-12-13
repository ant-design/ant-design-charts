import type { OrganizationChartOptions } from '@ant-design/graphs';
import { CollapseExpandIcon, OrganizationChart } from '@ant-design/graphs';
import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';

const { ArrowCountIcon } = CollapseExpandIcon;

export default () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g6/organization-chart.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options: OrganizationChartOptions = {
    autoFit: 'view',
    data,
    labelField: 'name',
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
        Click Preset Icon to Expand/Collapse
      </Divider>
      <OrganizationChart
        {...options}
        direction="horizontal"
        transforms={updateCollapseExpandBehavior({ enable: true, iconOffsetX: 12 })}
      />
      <Divider orientation="left" plain>
        Click Custom Icon to Expand/Collapse
      </Divider>
      <OrganizationChart
        {...options}
        direction="vertical"
        transforms={updateCollapseExpandBehavior({
          enable: true,
          iconRender: function (isCollapsed, data) {
            return <ArrowCountIcon style={{ display: 'flex' }} graph={this} data={data} isCollapsed={isCollapsed} />;
          },
        })}
      />
    </>
  );
};
