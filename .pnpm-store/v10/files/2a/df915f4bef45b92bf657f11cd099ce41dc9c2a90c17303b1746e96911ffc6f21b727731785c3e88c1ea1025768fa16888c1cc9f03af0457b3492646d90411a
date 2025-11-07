import { Runtime, corelib, extend } from '@antv/g2';
import { ConfigProvider, Switch } from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ChartHeader from '../ChartHeader';

const Chart = extend(Runtime, corelib());

export interface DataItem {
  user: string;
  value: number;
}

export interface BotFilterChartProps {
  data: DataItem[];
  title?: string;
  height?: number;
}

const RankChart: React.FC<BotFilterChartProps> = ({
  data,
  title = '',
  height = 400,
}) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [filterBots, setFilterBots] = useState<boolean>(true);

  const filteredData = useMemo(() => {
    if (filterBots) {
      return data?.filter((item) => !item.user.includes('[bot]'))?.slice(0, 10);
    }
    return data?.slice(0, 10);
  }, [filterBots, data]);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = new Chart({
      container: chartRef.current,
      autoFit: true,
    });

    const medal = (datum: string, chartInstance: any) => {
      const { document } = chartInstance.getContext().canvas;
      const group = document?.createElement('g', {});
      const clipPath = document.createElement('circle', {
        style: {
          cx: -15,
          cy: 0,
          r: 15,
        },
      });
      const icon = document.createElement('image', {
        style: {
          src: `https://avatars.githubusercontent.com/${datum}?s=48&v=4`,
          width: 30,
          height: 30,
          x: -30,
          y: -15,
          clipPath: clipPath,
        },
      });
      group.appendChild(clipPath);
      group.appendChild(icon);
      return group;
    };

    chart
      .interval()
      .scale('x', {
        type: 'band',
        padding: 0.4,
      })
      .data(filteredData)
      .encode('x', 'user')
      .encode('y', 'value')
      .axis({
        x: { title: false },
        y: { title: false },
      })
      .style({
        fill: '#FECC6B',
        radius: 4,
        margin: [10, 8, 8, 8],
      })
      .label({
        text: 'value',
        textAlign: 'start',
        fill: '#9CA3AF',
        dx: 8,
      })
      .interaction('elementHighlight', { background: true })
      .coordinate({ transform: [{ type: 'transpose' }] })
      .scale('color', { palette: 'category10' })
      .axis({
        x: {
          tick: false,
          title: false,
          labelSpacing: 8,
          labelAutoRotate: false,
          labelFormatter: (user: string) => medal(user, chart),
        },
        y: false,
      });

    chart.options({
      paddingRight: 40,
    });
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [filteredData]);

  const operation = (
    <label className="flex items-center">
      <span className="text-gray-400 text-[12px] mr-[8px] font-medium">
        Exclude Bots
      </span>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#000',
          },
          components: {
            Switch: {
              handleSize: 16,
              trackPadding: 3,
              trackMinWidth: 22,
            },
          },
        }}
      >
        <Switch checked={filterBots} onChange={setFilterBots} />
      </ConfigProvider>
    </label>
  );

  return (
    <div>
      <ChartHeader title={title} operation={operation} />
      <div
        ref={chartRef}
        style={{
          height: `${height}px`,
          marginTop: 20,
        }}
      />
    </div>
  );
};

export default RankChart;
