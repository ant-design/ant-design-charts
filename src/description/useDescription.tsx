import { useEffect, useState } from 'react';
import { DescriptionProps } from './';

export interface UseDescription extends DescriptionProps { }

export default (props = {} as UseDescription) => {
  const { chart, setChartConfig, chartConfig, hasChartConfig, ...other } = props;
  const [description, setDescription] = useState<UseDescription>(other);

  useEffect(() => {
    setChartConfig!({ description: { visible: true, ...description } } as any);
  }, [JSON.stringify(description)]);

  return {
    description, setDescription
  };
}
