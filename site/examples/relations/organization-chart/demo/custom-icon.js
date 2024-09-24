import { CollapseExpandIcon, OrganizationChart } from '@ant-design/graphs';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const { ArrowCountIcon } = CollapseExpandIcon;

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
    transforms: (prev) => [
      ...prev.filter((transform) => transform.type !== 'collapse-expand-react-node'),
      {
        ...prev.find((transform) => transform.type === 'collapse-expand-react-node'),
        enable: true,
        iconRender: function (isCollapsed, data) {
          return <ArrowCountIcon style={{ display: 'flex' }} graph={this} data={data} isCollapsed={isCollapsed} />;
        },
      },
    ],
  };
  return <OrganizationChart {...options} />;
};

ReactDOM.render(<DemoOrganizationChart />, document.getElementById('container'));
