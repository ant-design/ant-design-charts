import { Pie } from '@ant-design/plots';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const PlotMaps = {};

const DemoPie = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/fKTgtjKdaN/association-pie.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  if (!Object.keys(data).length) {
    return null;
  }

  const showTooltip = (evt, pie) => {
    Object.keys(PlotMaps).forEach((plot) => {
      if (plot !== pie) {
        PlotMaps[plot].chart.emit('tooltip:show', {
          data: { data: { area: evt.data.data.area } },
        });
        PlotMaps[plot].chart.emit('element:highlight', {
          data: { data: { area: evt.data.data.area } },
        });
      }
    });
  };

  const hideTooltip = (evt, pie) => {
    Object.keys(PlotMaps).forEach((plot) => {
      if (plot !== pie) {
        PlotMaps[plot].chart.emit('tooltip:hide', {
          data: { data: { area: evt.data.data.area } },
        });
        PlotMaps[plot].chart.emit('element:unhighlight', {
          data: { data: { area: evt.data.data.area } },
        });
      }
    });
  };

  const LeftConfig = {
    angleField: 'bill',
    colorField: 'area',
    data: data.pie1,
    label: {
      text: 'bill',
    },
    legend: false,
    tooltip: {
      title: 'area',
    },
    interaction: {
      elementHighlight: true,
    },
    state: {
      inactive: { opacity: 0.5 },
    },
  };
  const RightConfig = {
    angleField: 'value',
    colorField: 'area',
    data: data.pie2,
    label: {
      text: 'value',
    },
    legend: false,
    tooltip: {
      title: 'area',
    },
    interaction: {
      elementHighlight: true,
    },
    state: {
      inactive: { opacity: 0.5 },
    },
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Pie
        style={{ width: '50%' }}
        {...LeftConfig}
        onReady={(plot) => {
          PlotMaps.leftPie = plot;
          plot.chart.on('interval:pointerover', (evt) => {
            showTooltip(evt, 'leftPie');
          });
          plot.chart.on('interval:pointerout', (evt) => {
            hideTooltip(evt, 'leftPie');
          });
        }}
      />
      <Pie
        style={{ width: '50%' }}
        {...RightConfig}
        onReady={(plot) => {
          PlotMaps.rightPie = plot;
          plot.chart.on('interval:pointerover', (evt) => {
            showTooltip(evt, 'rightPie');
          });
          plot.chart.on('interval:pointerout', (evt) => {
            hideTooltip(evt, 'rightPie');
          });
        }}
      />
    </div>
  );
};

createRoot(document.getElementById('container')).render(<DemoPie />);
