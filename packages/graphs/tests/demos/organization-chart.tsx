import { OrganizationChart as OrganizationChartComponent, type OrganizationChartOptions } from '@ant-design/graphs';
import { Graph } from '@antv/g6';
import React, { useEffect, useState } from 'react';

export const OrganizationChart = () => {
  const [graph, setGraph] = useState<Graph | null>(null);
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

  useEffect(() => {
    if (graph) {
      console.log(graph);
    }
  }, [graph]);

  return <OrganizationChartComponent ref={setGraph} {...options} />;
};
