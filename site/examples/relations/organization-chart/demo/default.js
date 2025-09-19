import { OrganizationChart } from '@ant-design/graphs';
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const DemoOrganizationChart = () => {
  const [data, setData] = React.useState();

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g6/organization-chart.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options = {
    autoFit: 'view',
    data,
  };
  return <OrganizationChart {...options} />;
};

createRoot(document.getElementById('container')).render(<DemoOrganizationChart />);
