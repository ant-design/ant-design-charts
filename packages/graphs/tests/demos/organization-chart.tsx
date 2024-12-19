import { OrganizationChart as OrganizationChartComponent, type OrganizationChartOptions } from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';
import { useGraphOptions } from './hooks/useQueryOptions';

export const OrganizationChart = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g6/organization-chart.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options = useGraphOptions<OrganizationChartOptions>({
    autoFit: 'view',
    data,
    transforms: [],
  });

  return <OrganizationChartComponent {...options} />;
};
