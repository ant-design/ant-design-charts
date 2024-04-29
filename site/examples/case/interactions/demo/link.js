import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Line, Column } from '@ant-design/plots';

const CHART_MAP = {};

const DemoLine = () => {
  const [data, setData] = useState([]);
  const dataRef = useRef();
  dataRef.current = data;

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/sp500.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    xField: 'date',
    yField: 'price',
    height: 200,
  };

  const showTooltip = (data) => {
    const { line, column } = CHART_MAP;
    //  连续图表
    line.emit('tooltip:show', {
      data: { data: { x: data.date } },
    });
    column.emit('tooltip:show', {
      data: { data },
    });
  };

  const hideTooltip = () => {
    const { line, column } = CHART_MAP;
    line.emit('tooltip:hide');
    column.emit('tooltip:hide');
  };

  const setTooltipPosition = (evt, chart) => {
    const { x } = evt;
    const { layout } = chart.getView();
    // 根据位置粗略计算出 tooltip data
    const percent = x / layout.width;
    showTooltip(dataRef.current[Math.floor(percent * dataRef.current.length)]);
  };

  return (
    <div>
      <Line
        {...config}
        onReady={({ chart }) => {
          CHART_MAP['line'] = chart;
          chart.on('plot:pointermove', (evt) => {
            setTooltipPosition(evt, chart);
          });
          chart.on('plot:pointerout', hideTooltip);
        }}
      />
      <Column
        {...config}
        onReady={({ chart }) => {
          CHART_MAP['column'] = chart;
          chart.on('plot:pointermove', (evt) => {
            setTooltipPosition(evt, chart);
          });
          chart.on('plot:pointerout', hideTooltip);
        }}
      />
    </div>
  );
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
