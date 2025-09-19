import { Line } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

function tip({ container, onRemove = () => {}, offsetX = 20, offsetY = 0 }) {
  let div;

  const render = (data, [x, y]) => {
    if (div) remove();
    div = document.createElement('div');
    div.innerHTML = `
    Select a node:
    <ul>${data.map((d) => `<li>${d.date}</li>`).join('')}</ul>
    `;
    div.style.position = 'absolute';
    div.style.background = '#eee';
    div.style.padding = '0.5em';
    div.style.left = x + offsetX + 'px';
    div.style.top = y + offsetY + 'px';
    div.onclick = () => {
      remove();
      onRemove();
    };
    container.append(div);
  };

  const remove = () => {
    if (div) div.remove();
    div = null;
  };

  return [render, remove];
}

const DemoInteraction = () => {
  const data = [
    { date: '2007-04-23', close: 93.24 },
    { date: '2007-04-24', close: 95.35 },
    { date: '2007-04-25', close: 98.84 },
    { date: '2007-04-26', close: 99.92 },
    { date: '2007-04-29', close: 99.8 },
    { date: '2007-05-01', close: 99.47 },
    { date: '2007-05-02', close: 100.39 },
    { date: '2007-05-03', close: 100.4 },
    { date: '2007-05-04', close: 100.81 },
    { date: '2007-05-07', close: 103.92 },
  ];

  const config = {
    data,
    xField: (d) => new Date(d.date),
    yField: 'close',
    scale: { y: { nice: true } },
    interaction: { brushXHighlight: true },
  };
  return (
    <Line
      {...config}
      onReady={(plot) => {
        const chart = plot.chart;
        const [render, remove] = tip({
          container: document.getElementById('container'),
          onRemove: () => plot.emit('brush:remove', {}),
        });

        chart.on('brush:start', () => {
          chart.emit('tooltip:disable');
          remove();
        });

        chart.on('brush:end', async (e) => {
          const { canvas } = chart.getContext();
          const [mask] = canvas.document.getElementsByClassName('mask');
          const bounds = mask.getBounds();
          const x = bounds.max[0];
          const y = bounds.center[1];
          const [X] = e.data.selection;
          const filtered = data.filter(({ date }) => new Date(date) >= X[0] && new Date(date) <= X[1]);
          render(filtered, [x, y]);
        });

        chart.on('brush:remove', (e) => {
          const { nativeEvent } = e;
          if (nativeEvent) remove();
          chart.emit('tooltip:enable');
        });
      }}
    />
  );
};

createRoot(document.getElementById('container')).render(<DemoInteraction />);
