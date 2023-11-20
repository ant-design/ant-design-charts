import { Venn } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoVenn = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/c4c17fe9-0a93-4255-bc1e-1ff84966d24a.json',
      transform: [
        {
          type: 'venn',
          sets: 'sets',
          size: 'size',
          as: ['key', 'path'],
        },
      ],
    },
    setsField: 'sets',
    sizeField: 'size',
    style: { fillOpacity: 0.85 },
    scale: {
      color: {
        range: ['#9DF5CA', '#61DDAA', '#42C090'],
      },
    },
    label: {
      position: 'inside',
      style: {
        lineHeight: 20,
      },
      text: (datum) => {
        return `${datum.size}`;
      },
    },
    interaction: {
      tooltip: {
        // render 回调方法返回一个innerHTML 或者 DOM
        render: (event, { title, items }) => {
          return `<div>
          <h3 style="padding:0;margin:0">title:${title}</h3>
          <ul>${items.map((d) => `<li><span style="color: ${d.color}">${d.name}</span> ${d.value}</li>`)}</ul>
          </div>`;
        },
      },
    },
  };
  return <Venn {...config} />;
};

ReactDOM.render(<DemoVenn />, document.getElementById('container'));
