import React from 'react';
import ReactDOM from 'react-dom';
import { Base } from '@ant-design/plots';

const Demobase = () => {
  const toNaN = (d) => (d === 'NaN' ? NaN : d);
  const config = {
    type: "repeatMatrix",
    width: 800,
    height: 800,
    autoFit: false,
    paddingLeft: 70,
    paddingBottom: 70,
    data: {
      type: "fetch",
      value: "https://assets.antv.antgroup.com/g2/penguins.json",
      transform: [
        {
          type: "map",
          callback: ({
            culmen_depth_mm: cdepth,
            culmen_length_mm: clength,
            flipper_length_mm: flength,
            body_mass_g: bmass,
            ...d
          }) => ({
            ...d,
            culmen_depth_mm: toNaN(cdepth),
            culmen_length_mm: toNaN(clength),
            flipper_length_mm: toNaN(flength),
            body_mass_g: toNaN(bmass),
          }),
        },
      ],
    },
    encode: {
      position: [
        "culmen_length_mm",
        "culmen_depth_mm",
        "flipper_length_mm",
        "body_mass_g",
      ],
    },
    children: [{ type: "point", encode: { color: "species" } }],  
  };
  return <Base {...config} />;
};

ReactDOM.render(<Demobase />, document.getElementById('container'));
