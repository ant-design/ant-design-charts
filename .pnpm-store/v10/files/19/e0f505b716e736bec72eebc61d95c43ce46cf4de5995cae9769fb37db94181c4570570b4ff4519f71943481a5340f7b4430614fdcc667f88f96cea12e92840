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

interface LineChartProps {
  data: Data;
  title?: string;
  height?: number;
  colors?: string[];
}
const LineChart: React.FC<LineChartProps> = ({
  data,
  colors,
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

  const createLineChart = (data: DataItem[]) => {
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
      chartDefinition.encode('color', 'type').scale('color', {
        range: colors ? colors : ['#FECC6B', '#3B82F6', '#8B5CF6'],
      });
    }

    chartDefinition.line().encode('shape', 'smooth');

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
      chartDefinition.encode('color', 'type').scale('color', {
        range: colors ? colors : ['#FECC6B', '#3B82F6', '#8B5CF6'],
      });
    }

    chart.render();
    return chart;
  };

  const currentData = data[timeDimension] || [];

  useEffect(() => {
    let chart: any;
    if (currentData?.length > 3) {
      chart = createLineChart(currentData);
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

export default LineChart;
