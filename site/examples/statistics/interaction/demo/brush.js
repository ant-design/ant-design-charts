import { Scatter } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

function tip({ container, onRemove = () => {}, offsetX = 20, offsetY = 0 }) {
  let div;

  const render = (data, [x, y]) => {
    if (div) remove();
    div = document.createElement('div');
    div.innerHTML = `
    Select a node:
    <ul>${data.map((d) => `<li>x:${d.weight},y:${d.height}</li>`).join('')}</ul>
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
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/scatter.json',
    },
    xField: 'weight',
    yField: 'height',
    colorField: 'gender',
    shapeField: 'point',
    style: {
      fillOpacity: 0.2,
      lineWidth: 1,
      transform: 'scale(1, 1)',
      transformOrigin: 'center center',
    },
    state: {
      inactive: { fill: 'black', fillOpacity: 0.5, transform: 'scale(0.5, 0.5)' },
    },
    interaction: { brushHighlight: true },
  };
  return (
    <Scatter
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
          const data = await fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/scatter.json').then((res) =>
            res.json(),
          );

          const { canvas } = chart.getContext();
          const [mask] = canvas.document.getElementsByClassName('mask');
          const bounds = mask.getBounds();
          const x = bounds.max[0];
          const y = bounds.center[1];
          const [X, Y] = e.data.selection;

          const filtered = data.filter(({ weight, height }) => {
            return weight >= X[0] && weight <= X[1] && height >= Y[0] && height <= Y[1];
          });

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
