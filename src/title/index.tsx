import { FC, forwardRef, useImperativeHandle } from 'react';
import { ITitle } from '@antv/g2plot';
import { Base } from '@antv/g2plot';
import useTitle from './useTitle';

export interface TitleProps extends ITitle {
  chart?: Base;
  setChartConfig?: (d: any) => void;
  chartConfig?: Set<object>;
  hasChartConfig?: (key: object) => boolean;
}

const Title: FC<TitleProps> = forwardRef((props, ref) => {
  const { title, setTitle } = useTitle(props);
  useImperativeHandle(ref, () => ({ title, setTitle }), [title]);
  return null;
})

export default Title
