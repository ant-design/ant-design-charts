import { Sankey } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoSankey = () => {
  const config = {
    data: {
      value: {
        links: [
          { source: "Agricultural 'waste'", target: 'Bio-conversion', value: 124.729 },
          { source: 'Bio-conversion', target: 'Liquid', value: 0.597 },
          { source: 'Bio-conversion', target: 'Losses', value: 26.862 },
          { source: 'Bio-conversion', target: 'Solid', value: 280.322 },
          { source: 'Bio-conversion', target: 'Gas', value: 81.144 },
          { source: 'Biofuel imports', target: 'Liquid', value: 35 },
          { source: 'Biomass imports', target: 'Solid', value: 35 },
          { source: 'Coal imports', target: 'Coal', value: 11.606 },
          { source: 'Coal reserves', target: 'Coal', value: 63.965 },
          { source: 'Coal', target: 'Solid', value: 75.571 },
          { source: 'District heating', target: 'Industry', value: 10.639 },
          { source: 'District heating', target: 'Heating and cooling - commercial', value: 22.505 },
          { source: 'District heating', target: 'Heating and cooling - homes', value: 46.184 },
          { source: 'Electricity grid', target: 'Over generation / exports', value: 104.453 },
          { source: 'Electricity grid', target: 'Heating and cooling - homes', value: 113.726 },
          { source: 'Electricity grid', target: 'H2 conversion', value: 27.14 },
          { source: 'Electricity grid', target: 'Industry', value: 342.165 },
          { source: 'Electricity grid', target: 'Road transport', value: 37.797 },
          { source: 'Electricity grid', target: 'Agriculture', value: 4.412 },
          { source: 'Electricity grid', target: 'Heating and cooling - commercial', value: 40.858 },
          { source: 'Electricity grid', target: 'Losses', value: 56.691 },
          { source: 'Electricity grid', target: 'Rail transport', value: 7.863 },
          { source: 'Electricity grid', target: 'Lighting & appliances - commercial', value: 90.008 },
          { source: 'Electricity grid', target: 'Lighting & appliances - homes', value: 93.494 },
          { source: 'Gas imports', target: 'Ngas', value: 40.719 },
          { source: 'Gas reserves', target: 'Ngas', value: 82.233 },
          { source: 'Gas', target: 'Heating and cooling - commercial', value: 0.129 },
          { source: 'Gas', target: 'Losses', value: 1.401 },
          { source: 'Gas', target: 'Thermal generation', value: 151.891 },
          { source: 'Gas', target: 'Agriculture', value: 2.096 },
          { source: 'Gas', target: 'Industry', value: 48.58 },
          { source: 'Geothermal', target: 'Electricity grid', value: 7.013 },
          { source: 'H2 conversion', target: 'H2', value: 20.897 },
          { source: 'H2 conversion', target: 'Losses', value: 6.242 },
          { source: 'H2', target: 'Road transport', value: 20.897 },
          { source: 'Hydro', target: 'Electricity grid', value: 6.995 },
          { source: 'Liquid', target: 'Industry', value: 121.066 },
          { source: 'Liquid', target: 'International shipping', value: 128.69 },
          { source: 'Liquid', target: 'Road transport', value: 135.835 },
          { source: 'Liquid', target: 'Domestic aviation', value: 14.458 },
          { source: 'Liquid', target: 'International aviation', value: 206.267 },
          { source: 'Liquid', target: 'Agriculture', value: 3.64 },
          { source: 'Liquid', target: 'National navigation', value: 33.218 },
          { source: 'Liquid', target: 'Rail transport', value: 4.413 },
          { source: 'Marine algae', target: 'Bio-conversion', value: 4.375 },
          { source: 'Ngas', target: 'Gas', value: 122.952 },
          { source: 'Nuclear', target: 'Thermal generation', value: 839.978 },
          { source: 'Oil imports', target: 'Oil', value: 504.287 },
          { source: 'Oil reserves', target: 'Oil', value: 107.703 },
          { source: 'Oil', target: 'Liquid', value: 611.99 },
          { source: 'Other waste', target: 'Solid', value: 56.587 },
          { source: 'Other waste', target: 'Bio-conversion', value: 77.81 },
          { source: 'Pumped heat', target: 'Heating and cooling - homes', value: 193.026 },
          { source: 'Pumped heat', target: 'Heating and cooling - commercial', value: 70.672 },
          { source: 'Solar PV', target: 'Electricity grid', value: 59.901 },
          { source: 'Solar Thermal', target: 'Heating and cooling - homes', value: 19.263 },
          { source: 'Solar', target: 'Solar Thermal', value: 19.263 },
          { source: 'Solar', target: 'Solar PV', value: 59.901 },
          { source: 'Solid', target: 'Agriculture', value: 0.882 },
          { source: 'Solid', target: 'Thermal generation', value: 400.12 },
          { source: 'Solid', target: 'Industry', value: 46.477 },
          { source: 'Thermal generation', target: 'Electricity grid', value: 525.531 },
          { source: 'Thermal generation', target: 'Losses', value: 787.129 },
          { source: 'Thermal generation', target: 'District heating', value: 79.329 },
          { source: 'Tidal', target: 'Electricity grid', value: 9.452 },
          { source: 'UK land based bioenergy', target: 'Bio-conversion', value: 182.01 },
          { source: 'Wave', target: 'Electricity grid', value: 19.013 },
          { source: 'Wind', target: 'Electricity grid', value: 289.366 },
        ],
      },
    },
    scale: {
      color: {
        range: [
          '#4e79a7',
          '#f28e2c',
          '#e15759',
          '#76b7b2',
          '#59a14f',
          '#edc949',
          '#af7aa1',
          '#ff9da7',
          '#9c755f',
          '#bab0ab',
        ],
      },
    },
    layout: { nodeAlign: 'center', nodePadding: 0.03 },
    style: {
      labelSpacing: 3,
      labelFontWeight: 'bold',
      nodeStrokeWidth: 1.2,
      linkFillOpacity: 0.4,
    },
    interaction: {
      tooltip: {
        render: (e, { title, items }) => {
          console.log(title, items);
          // const div = document.createElement('div');
          // const h3 = document.createElement('h3');
          // h3.innerHTML = title;
          // div.appendChild(h3);
          // div.innerHTML = `${source} → ${target}: ${value}`;
          return <div>123</div>;
        },
      },
    },
  };
  return <Sankey {...config} />;
};

ReactDOM.render(<DemoSankey />, document.getElementById('container'));
