import { Runtime, corelib, extend } from '@antv/g2';
import React, { useEffect, useRef, useState } from 'react';
import ChartHeader from '../ChartHeader';
import SegmentedTabs from '../SegmentedTabs';

const Chart = extend(Runtime, corelib());
interface DataItem {
  date: string;
  value: number;
  type?: string;
}

interface Data {
  year: DataItem[];
  quarter: DataItem[];
  month: DataItem[];
}

interface AreaChartProps {
  data: Data;
  title?: string;
  height?: number;
}
const AreaChart: React.FC<AreaChartProps> = ({
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

  const hasTypeField = (data: DataItem[]) =>
    data.some((item) => item.type !== undefined);

  const createAreaChart = (data: DataItem[]) => {
    if (!chartRef.current) return;
    const chart = new Chart({
      container: chartRef.current,
      autoFit: true,
    });

    const chartDefinition = chart
      .data(data)
      .encode('x', 'date')
      .encode('y', 'value')
      .scale('y', { nice: true })
      .options({ paddingRight: 20 })
      .axis({
        x: { title: false, labelAutoRotate: false },
        y: {
          title: false,
          labelFormatter: (d: number) =>
            d >= 1000 || d <= -1000 ? d / 1000 + 'k' : d,
        },
      });

    if (hasTypeField(data)) {
      chartDefinition.encode('color', 'type');
      chartDefinition
        .area()
        .encode('shape', 'smooth')
        .scale('color', {
          range: [
            'l(90) 0:#FECC6B  1:#FECC6B4D',
            'l(270) 0:#EF4444 1:#EF44444D',
          ],
        });
      chartDefinition
        .line()
        .encode('shape', 'smooth')
        .style('strokeWidth', 2)
        .tooltip(false);
    } else {
      chartDefinition
        .area()
        .encode('shape', 'smooth')
        .style('fill', 'l(90) 0:#FECC6B 0.2:#FECC6B 1:#FECC6B08');
      chartDefinition
        .line()
        .encode('shape', 'smooth')
        .style('strokeWidth', 2)
        .style('stroke', '#FECC6B')
        .tooltip(false);
    }

    chart.render();
    return chart;
  };

  const createIntervalChart = (data: DataItem[]) => {
    if (!chartRef.current) return;
    const chart = new Chart({
      container: chartRef.current,
      autoFit: true,
    });

    const chartDefinition = chart
      .interval()
      .data(data)
      .encode('x', 'date')
      .encode('y', 'value')
      .transform({ type: 'dodgeX' })
      .axis({
        x: { title: false },
        y: { title: false },
      });

    if (hasTypeField(data)) {
      chartDefinition.encode('color', 'type');
    } else {
      chartDefinition.encode('color', 'x');
    }

    chartDefinition.scale('color', {
      range: ['#FECC6B ', '#EF4444'],
    });

    chart.render();
    return chart;
  };

  const currentData = data[timeDimension] || [];

  useEffect(() => {
    let chart: any;
    if (currentData?.length > 3) {
      chart = createAreaChart(currentData);
    } else {
      chart = createIntervalChart(currentData);
    }
    return () => {
      chart?.destroy();
    };
  }, [currentData]);

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

export default AreaChart;
