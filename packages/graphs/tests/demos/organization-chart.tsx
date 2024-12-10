import { OrganizationChart as OrganizationChartComponent, type OrganizationChartOptions } from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';

export const OrganizationChart = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g6/organization-chart.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options: OrganizationChartOptions = {
    autoFit: 'view',
    data,
  };

  return <OrganizationChartComponent {...options} />;
};
