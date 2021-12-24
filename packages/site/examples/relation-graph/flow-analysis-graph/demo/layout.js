import React from 'react';
import ReactDOM from 'react-dom';
import { FlowAnalysisGraph } from '@ant-design/charts';

const DemoFlowAnalysisGraph = () => {
  const data = {
    id: 'A0',
    value: {
      title: '订单金额',
      items: [
        {
          text: '3031万',
        },
      ],
    },
    children: [
      {
        id: 'A1',
        value: {
          title: '华南',
          items: [
            {
              text: '1152万',
            },
            {
              text: '占比',
              value: '30%',
            },
          ],
        },
        children: [
          {
            id: 'A11',
            value: {
              title: '广东',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A12',
            value: {
              title: '广西',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A13',
            value: {
              title: '海南',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'A2',
        value: {
          title: '华北',
          items: [
            {
              text: '595万',
            },
            {
              text: '占比',
              value: '30%',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
            },
          ],
        },
      },
    ],
  };

  const config = {
    data,
    layout: {
      type: 'indented',
      direction: 'LR',
      dropCap: false,
      indent: 250,
      getHeight: () => {
        return 60;
      },
      getWidth: () => {
        return 100;
      },
    },
    markerCfg: (cfg) => {
      const { children } = cfg;
      return {
        show: children?.length,
      };
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <FlowAnalysisGraph {...config} />;
};

ReactDOM.render(<DemoFlowAnalysisGraph />, document.getElementById('container'));
