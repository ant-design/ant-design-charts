import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line, Pie } from '@ant-design/charts';

import { last } from '@antv/util';

const DemoPie = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/5a209bb2-ee85-412f-a689-cdb16159a459.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const divStyles = {
    position: 'absolute',
    background: 'rgba(255,255,255,0.95)',
    boxShadow: 'rgb(174, 174, 174) 0px 0px 10px',
    borderRadius: '4px',
  };

  const setStyles = (container, styles) => {
    for (const key in styles) {
      container.style[key] = styles[key];
    }
  };

  (function () {})().then((data) => {
    const config = {
      padding: 'auto',
      appendPadding: [8, 10, 0, 10],
      data,
      xField: 'year',
      yField: 'value',
      seriesField: 'country',
      smooth: true,
      lineStyle: ({ country }) => {
        const importantCountries = ['United States', 'France', 'Germany'];
        const idx = importantCountries.indexOf(country);
        return {
          lineWidth: idx !== -1 ? 2 : 1,
        };
      },
      interactions: [
        {
          type: 'brush',
        },
      ],
      tooltip: {
        follow: true,
        enterable: true,
        offset: 18,
        shared: true,
        marker: {
          lineWidth: 0.5,
          r: 3,
        },
      },
    };

    const createPie = (container, data) => {
      const config = {
        data,
        width: 120,
        height: 120,
        appendPadding: 10,
        autoFit: false,
        angleField: 'value',
        colorField: 'type',
        legend: false,
        tooltip: false,
        animation: false,
        color: line.chart.themeObject.colors10,
        label: {
          type: 'inner',
          offset: '-10%',
          content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
        },
      };
    };

    line.update({
      tooltip: {
        customContent: (value, items) => {
          const pieData = items.map((item) => ({
            type: item.name,
            value: Number(item.value),
          }));
          const container = document.createElement('div');
          const pieContainer = document.createElement('div');
          setStyles(container, divStyles);
          createPie(pieContainer, pieData);
          container.appendChild(pieContainer);
          return container;
        },
      },
    }); // 初始化，默认激活

    const point = line.chart.getXY(last(data.filter((d) => !!d.value)));
    line.chart.showTooltip(point);
  });

  return <Pie {...config} />;
};

ReactDOM.render(<DemoPie />, document.getElementById('container'));
