import { Sankey } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoSankey = () => {
  const config = {
    data: [
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
    ],
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
      nodeLineWidth: 1.2,
      linkFillOpacity: 0.4,
    },
  };
  return <Sankey {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoSankey />);
