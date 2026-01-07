import { Runtime, corelib, extend } from '@antv/g2';
import React, { useEffect, useRef, useState } from 'react';
import ChartHeader from '../ChartHeader';
import SegmentedTabs from '../SegmentedTabs';

const Chart = extend(Runtime, corelib());
interface DataItem {
  day: string;
  hour: string;
  value: number;
}

interface Data {
  year: DataItem[];
  quarter: DataItem[];
  month: DataItem[];
}

interface HeatmapProps {
  data: Data;
  title?: string;
  height?: number;
}
const Heatmap: React.FC<HeatmapProps> = ({
  data,
  title = '',
  height = 400,
}) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [timeDimension, setTimeDimension] = useState<
    'year' | 'quarter' | 'month'
  >('month');

  const handleChange = (val: string) => {
    setTimeDimension(val as 'year' | 'quarter' | 'month');
  };

  const currentData = data[timeDimension] || [];

  useEffect(() => {
    if (!chartRef.current) return;
    const chart = new Chart({
      container: chartRef.current,
      autoFit: true,
    });

    chart
      .cell()
      .data(currentData)
      .transform({ type: 'group', color: 'max' })
      .encode('x', 'hour')
      .encode('y', 'day')
      .encode('color', 'value')
      .style('inset', 0.5)
      .axis({
        x: { title: false },
        y: { title: false },
      })
      .scale('color', { palette: 'oranges' })
      .animate('enter', { type: 'fadeIn' });
    chart.options({ legend: false });
    chart.render();

    return () => {
      chart?.destroy();
    };
  }, [currentData, chartRef.current]);

  return (
    <div>
      <ChartHeader
        title={title}
        operation={<SegmentedTabs onChange={handleChange} />}
      />

      <div ref={chartRef} style={{ height: `${height}px`, marginTop: 20 }} />
    </div>
  );
};

export default Heatmap;
