import { Runtime, corelib, extend } from '@antv/g2';
import React, { useEffect, useRef, useState } from 'react';
import ChartHeader from '../ChartHeader';
import SegmentedTabs from '../SegmentedTabs';

const Chart = extend(Runtime, corelib());
interface DataItem {
  date: string;
  value: number[];
}

interface Data {
  year: DataItem[];
  quarter: DataItem[];
  month: DataItem[];
}

interface BoxChartProps {
  data: Data;
  title?: string;
  height?: number;
}
const BoxChart: React.FC<BoxChartProps> = ({
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
      .box()
      .data(currentData)
      .encode('x', 'date')
      .encode('y', 'value')
      .scale('x', { paddingInner: 0.3, paddingOuter: 0 })
      .scale('y', { zero: true })
      .axis({
        x: { title: false, labelAutoRotate: false },
        y: { title: false },
      })
      .legend(false)
      .style({
        fill: '#FECC6B',
        stroke: '#FECC6B',
      })
      .tooltip([
        { name: 'min', channel: 'y' },
        { name: 'p25', channel: 'y1' },
        { name: 'medium', channel: 'y2' },
        { name: 'p75', channel: 'y3' },
        { name: 'max', channel: 'y4' },
      ]);

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

export default BoxChart;
