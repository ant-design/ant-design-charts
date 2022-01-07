import React from 'react';
import ReactDOM from 'react-dom';
import { OrganizationGraph } from '@ant-design/graphs';

const DemoOrganizationGraph = () => {
  const data = {
    id: 'joel',
    value: {
      name: 'Joel Alan',
      title: 'CEO',
      // 建议使用 bae64 数据
      icon: 'https://avatars.githubusercontent.com/u/31396322?v=4',
    },
    children: [
      {
        id: 'c1',
        value: {
          name: 'c1',
          title: 'CTO',
        },
        children: [
          {
            id: 'c1-1',
            value: {
              name: 'c1-1',
            },
          },
          {
            id: 'c1-2',
            value: {
              name: 'c1-2',
            },
            children: [
              {
                id: 'c1-2-1',
                value: {
                  name: 'c1-2-1',
                },
              },
              {
                id: 'c1-2-2',
                value: {
                  name: 'c1-2-2',
                },
              },
            ],
          },
        ],
      },
      {
        id: 'c2',
        value: {
          name: 'c2',
          title: 'COO',
        },
      },
      {
        id: 'c3',
        value: {
          name: 'c3',
          title: 'CFO',
        },
        children: [
          {
            id: 'c3-1',
            value: {
              name: 'c3-1',
            },
          },
          {
            id: 'c3-2',
            value: {
              name: 'c3-2',
            },
            children: [
              {
                id: 'c3-2-1',
                value: {
                  name: 'c3-2-1',
                },
              },
              {
                id: 'c3-2-2',
                value: {
                  name: 'c3-2-2',
                },
              },
              {
                id: 'c3-2-3',
                value: {
                  name: 'c3-2-3',
                },
              },
            ],
          },
          {
            id: 'c3-3',
            value: {
              name: 'c3-3',
            },
          },
        ],
      },
    ],
  };

  return (
    <OrganizationGraph
      data={data}
      nodeCfg={{
        style: (node) => {
          return node.id === 'joel'
            ? {
                fill: '#91d5ff',
                stroke: '#91d5ff',
              }
            : {};
        },
        label: {
          style: (node, group, type) => {
            const styles = {
              icon: {
                width: 32,
                height: 32,
              },
              value: {
                fill: '#fff',
              },
              name: {
                fill: '#fff',
              },
            };
            return node.id === 'joel' ? styles[type] : {};
          },
        },
      }}
    />
  );
};

ReactDOM.render(<DemoOrganizationGraph />, document.getElementById('container'));
