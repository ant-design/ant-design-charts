import { Rose } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoRose = () => {
  const config = {
    data: [
      { year: '2001', population: 41.8 },
      { year: '2002', population: 38 },
      { year: '2003', population: 33.7 },
      { year: '2004', population: 30.7 },
      { year: '2005', population: 25.8 },
      { year: '2006', population: 31.7 },
      { year: '2007', population: 33 },
      { year: '2008', population: 46 },
      { year: '2009', population: 38.3 },
      { year: '2010', population: 28 },
      { year: '2011', population: 42.5 },
      { year: '2012', population: 30.3 },
    ],
    xField: 'year',
    yField: 'population',
    state: {
      active: {
        fill: '#288AFF',
        stroke: 'black',
        lineWidth: 1,
        zIndex: 101,
      },
      inactive: {
        opacity: 0.5,
        zIndex: 100,
      },
    },
    interaction: {
      elementHighlight: true,
    },
    scale: { x: { padding: 0 } },
    axis: false,
    style: {
      lineWidth: 1,
      stroke: '#fff',
    },
    label: {
      text: 'year',
      fontSize: 16,
      fontWeight: 800,
      position: 'inside',
    },
  };
  return <Rose {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoRose />);
