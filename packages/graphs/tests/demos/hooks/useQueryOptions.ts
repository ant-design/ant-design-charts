import { GraphOptions, mergeOptions } from '@ant-design/graphs';
import { useSearchParams } from 'react-router-dom';

export const useGraphOptions = <T extends Omit<GraphOptions, 'data'>>(options: T): T => {
  const [params] = useSearchParams();
  const queryParams = Object.fromEntries(params) as any;

  Object.keys(queryParams).forEach((key) => {
    if (queryParams[key] === 'true') {
      queryParams[key] = true;
    }
    if (queryParams[key] === 'false') {
      queryParams[key] = false;
    }
  });

  queryParams.devicePixelRatio = 4;

  return mergeOptions(options, queryParams) as any;
};
