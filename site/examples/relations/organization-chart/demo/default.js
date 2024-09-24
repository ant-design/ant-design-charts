import { OrganizationChart } from '@ant-design/graphs';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(<DemoOrganizationChart />, document.getElementById('container'));
