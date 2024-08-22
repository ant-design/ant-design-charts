import React, { memo, useState } from 'react';
import { Pie } from '@ant-design/plots';
import { Button } from 'antd';
import ReactDOM from 'react-dom';
import { isEqual } from 'lodash-es';

const DemoPie = memo(
  ({ data, onReady }) => {
    var config = {
      data,
      angleField: 'value',
      colorField: 'type',
      label: {
        text: 'value',
        position: 'outside',
      },
      onReady,
    };
    return <Pie {...config} />;
  },
  (pre, next) => {
    return isEqual(pre?.data, next?.data);
  },
);

const DemoMemo = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ]);

  return (
    <div>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        不会重新渲染
      </Button>
      <Button
        style={{ margin: '0 10px' }}
        type="primary"
        onClick={() => {
          setData(data.map((d) => ({ ...d, value: Math.floor(Math.random() * 100) })));
        }}
      >
        重新渲染
      </Button>
      <span>{count}</span>
      <DemoPie data={data} onReady={({ chart }) => {}} />
    </div>
  );
};

ReactDOM.render(<DemoMemo />, document.getElementById('container'));
