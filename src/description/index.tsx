import { FC, forwardRef, useImperativeHandle } from 'react';
import { IDescription } from '@antv/g2plot';
import { Base } from '@antv/g2plot';
import useDescription from './useDescription';

export interface DescriptionProps extends IDescription {
  chart?: Base;
  setChartConfig?: (d: any) => void;
  chartConfig?: Set<object>;
  hasChartConfig?: (key: object) => boolean;
}

const Description: FC<DescriptionProps> = forwardRef((props, ref) => {
  const { description, setDescription } = useDescription(props);
  useImperativeHandle(ref, () => ({ description, setDescription }), [description]);
  return null;
})

export default Description;
