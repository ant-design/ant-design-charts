import { OrganizationChart, type OrganizationChartOptions } from '@ant-design/graphs';
import { Divider, Radio } from 'antd';
import React, { useEffect, useState } from 'react';

export default () => {
  const [direction, setDirection] = useState<OrganizationChartOptions['direction']>('vertical');
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g6/organization-chart.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options: OrganizationChartOptions = {
    autoFit: 'view',
    data,
    direction,
    labelField: 'name',
  };

  return (
    <>
      <Radio.Group value={direction} onChange={(e) => setDirection(e.target.value)}>
        <Radio.Button value="vertical">Vertical</Radio.Button>
        <Radio.Button value="horizontal">Horizontal</Radio.Button>
      </Radio.Group>
      <Divider orientation="left" plain>
        Preview
      </Divider>
      <OrganizationChart {...options} />
    </>
  );
};
