// 合并 defaultProps
import { useCallback } from 'react';
import { getType, deepClone } from '../util/utils';
import { GraphConfig } from '../interface';

export default function useProps(props: GraphConfig, defaultProps: Partial<GraphConfig>) {
  const cloneProps = deepClone(props);

  const mergeProps = useCallback(
    (p: Partial<GraphConfig>, defaultProps: Partial<GraphConfig>) => {
      const config = {
        ...defaultProps,
      };
      const propsKeys = Object.keys(p);
      propsKeys.forEach((key: string) => {
        if (getType(p[key]) === 'Object') {
          config[key] = {
            ...defaultProps[key],
            ...p[key],
          };
        } else {
          config[key] = p[key];
        }
      });
      return config;
    },
    [props, defaultProps],
  );

  const uProps = mergeProps(cloneProps, defaultProps);

  return {
    uProps,
  };
}
