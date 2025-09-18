import { Area } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const ORIGIN_DATA = [
  { x: 1246406400000, y: 0.1 },
  { x: 1246492800000, y: 0.6 },
  { x: 1246579200000, y: 1 },
  { x: 1246665600000, y: 2.8 },
  { x: 1246752000000, y: 3.4 },
  { x: 1246838400000, y: 4.3 },
  { x: 1246924800000, y: 5.3 },
  { x: 1247011200000, y: 4.4 },
  { x: 1247097600000, y: 7.4 },
  { x: 1247184000000, y: 9.7 },
  { x: 1247270400000, y: 10.5 },
  { x: 1247356800000, y: 9.6 },
  { x: 1247443200000, y: 9.7 },
  { x: 1247529600000, y: 5.8 },
  { x: 1247616000000, y: 6.7 },
  { x: 1247702400000, y: 2.3 },
  { x: 1247788800000, y: 0 },
  { x: 1247875200000, y: -1.1 },
  { x: 1247961600000, y: -2.2 },
  { x: 1248048000000, y: -3.4 },
  { x: 1248134400000, y: -5.7 },
  { x: 1248220800000, y: -6.7 },
  { x: 1248307200000, y: -7.6 },
  { x: 1248393600000, y: -8.3 },
  { x: 1248480000000, y: -5.3 },
  { x: 1248566400000, y: -9.8 },
  { x: 1248652800000, y: -6.2 },
  { x: 1248739200000, y: -4.8 },
  { x: 1248825600000, y: -10.4 },
  { x: 1248912000000, y: -11 },
  { x: 1248998400000, y: -13.6 },
];

function splitAtZeroWithCrossings(data) {
  const result = [];

  data.forEach((p) => {
    const isPos = p.y >= 0;
    result.push({ ...p, type: isPos ? 'pos' : 'neg' }, { ...p, y: null, type: isPos ? 'neg' : 'pos' });
  });
  // 中间值填充为 0，避免断裂
  const middle = Math.floor(result.length / 2) + 1;
  if (!result[middle + 1].y) result[middle + 1].y = 0;

  return result;
}

const color = (d) => (d[0].type === 'pos' ? '#22CBCB' : 'red');
const colorCircle = (d) => (d.type === 'pos' ? '#22CBCB' : 'red');

const DemoSegmentedArea = () => {
  const config = {
    data: splitAtZeroWithCrossings(ORIGIN_DATA),
    scale: { x: { range: [0, 1] }, y: { nice: true } },
    xField: (d) => new Date(d.x).toLocaleDateString(),
    yField: 'y',
    seriesField: 'type',
    shapeField: 'smooth',
    color,
    line: {
      style: {
        stroke: color,
      },
    },
    point: {
      shape: 'circle',
      size: 2,
      style: {
        fill: colorCircle,
        stroke: '#fff',
      },
    },
    style: {
      fill: color,
      fillOpacity: 0.6,
    },
  };
  return <Area {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoSegmentedArea />);
