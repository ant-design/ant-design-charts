import React from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
import { useRef } from 'react';
import { useEffect } from 'react';

document.getElementById('container').innerHTML = `
<div id="focus" ></div>
<div id="context"></div>
`;

const commonConfig = {
  autoFit: false,
  data: {
    type: 'fetch',
    value: 'https://gw.alipayobjects.com/os/bmw-prod/551d80c6-a6be-4f3c-a82a-abd739e12977.csv',
  },
  xField: 'date',
  yField: 'close',
  animate: false,
};

function createPathRender(compute) {
  return (group, options, document) => {
    if (!group.handle) {
      const path = document.createElement('path');
      group.handle = path;
      group.appendChild(group.handle);
    }
    const { handle } = group;
    const { width, height, ...rest } = options;
    if (width === undefined || height === undefined) return handle;
    handle.attr({ ...compute(width, height), ...rest });
    return handle;
  };
}

const DemoInteraction = () => {
  const focusRef = useRef();
  const contextRef = useRef();

  useEffect(() => {
    const focusChart = focusRef.current.chart;
    const contextChart = contextRef.current.chart;

    focusChart.on('brush:filter', (e) => {
      const { nativeEvent } = e;
      if (!nativeEvent) return;
      const { selection } = e.data;
      const { x: scaleX } = focusChart.getScale();
      const [[x1, x2]] = selection;
      const domainX = scaleX.getOptions().domain;
      if (x1 === domainX[0] && x2 === domainX[1]) {
        contextChart.emit('brush:remove', {});
      } else {
        contextChart.emit('brush:highlight', { data: { selection } });
      }
    });

    contextChart.on('brush:highlight', (e) => {
      const { nativeEvent, data } = e;
      if (!nativeEvent) return;
      const { selection } = data;
      focusChart.emit('brush:filter', { data: { selection } });
    });

    contextChart.on('brush:remove', (e) => {
      const { nativeEvent } = e;
      if (!nativeEvent) return;
      const { x: scaleX, y: scaleY } = contextChart.getScale();
      const selection = [scaleX.getOptions().domain, scaleY.getOptions().domain];
      focusChart.emit('brush:filter', { data: { selection } });
    });
  }, []);

  const focusConfig = {
    ...commonConfig,
    height: 360,
    paddingLeft: 60,
    interaction: {
      tooltip: false,
      brushXFilter: true,
    },
  };

  const contextConfig = {
    ...commonConfig,
    paddingTop: 0,
    paddingBottom: 0,
    height: 90,
    paddingLeft: 60,
    axis: false,
    interaction: {
      tooltip: false,
      brushXHighlight: {
        series: true,
        maskOpacity: 0.3,
        maskFill: '#777',
        maskHandleWRender: createPathRender((width, height) => ({
          d: 'M-0.5,31.5c-2.5,0,-4.5,2,-4.5,4.5v30c0,2.5,2,4.5,4.5,4.5V31.5z',
          transform: `translate(${width / 2}, ${-height / 2})`,
        })),
        maskHandleERender: createPathRender((width, height) => ({
          d: 'M0.5,31.5c2.5,0,4.5,2,4.5,4.5v30c0,2.5,-2,4.5,-4.5,4.5V31.5z',
          transform: `translate(${width / 2}, ${-height / 2})`,
        })),
        maskHandleEFill: '#D3D8E0',
        maskHandleWFill: '#D3D8E0',
      },
    },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Area {...focusConfig} getElementById="focus" onReady={(plot) => (focusRef.current = plot)} />
      <Area {...contextConfig} getElementById="context" onReady={(plot) => (contextRef.current = plot)} />
    </div>
  );
};

ReactDOM.render(<DemoInteraction />, document.getElementById('container'));
