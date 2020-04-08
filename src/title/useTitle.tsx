import { useEffect, useState } from 'react';
import { TitleProps } from './';

export interface UseTitle extends TitleProps { }

export default (props = {} as UseTitle) => {
  const { chart, setChartConfig, chartConfig, hasChartConfig, ...other } = props;
  const [title, setTitle] = useState<UseTitle>(other);

  useEffect(() => {
    setChartConfig!({ title: { visible: true, ...title } } as any);
  }, [JSON.stringify(title)]);

  return {
    title, setTitle
  };
}
