import React from 'react';
import ReactDOM from 'react-dom';
import { OrganizationGraph } from '@ant-design/charts';

const DemoOrganizationGraph = () => {
  const data = {
    id: 'root',
    value: {
      text: '股东会',
    },
    children: [
      {
        id: 'joel',
        value: {
          text: 'Joel Alan',
        },
        children: [
          {
            id: 'c1',
            value: {
              text: 'c1',
            },
            children: [
              {
                id: 'c1-1',
                value: {
                  text: 'c1-1',
                },
              },
              {
                id: 'c1-2',
                value: {
                  text: 'c1-2',
                },
                children: [
                  {
                    id: 'c1-2-1',
                    value: {
                      text: 'c1-2-1',
                    },
                  },
                  {
                    id: 'c1-2-2',
                    value: {
                      text: 'c1-2-2',
                    },
                  },
                ],
              },
            ],
          },
          {
            id: 'c2',
            value: {
              text: 'c2',
            },
          },
          {
            id: 'c3',
            value: {
              text: 'c3',
            },
            children: [
              {
                id: 'c3-1',
                value: {
                  text: 'c3-1',
                },
              },
              {
                id: 'c3-2',
                value: {
                  text: 'c3-2',
                },
                children: [
                  {
                    id: 'c3-2-1',
                    value: {
                      text: 'c3-2-1',
                    },
                  },
                  {
                    id: 'c3-2-2',
                    value: {
                      text: 'c3-2-2',
                    },
                  },
                  {
                    id: 'c3-2-3',
                    value: {
                      text: 'c3-2-3',
                    },
                  },
                ],
              },
              {
                id: 'c3-3',
                value: {
                  text: 'c3-3',
                },
              },
            ],
          },
        ],
      },
    ],
  };

  return <OrganizationGraph data={data} behaviors={['drag-canvas', 'zoom-canvas', 'drag-node']} />;
};

ReactDOM.render(<DemoOrganizationGraph />, document.getElementById('container'));
