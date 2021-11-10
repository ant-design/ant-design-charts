// 合并 defaultProps
import { useCallback } from 'react';
import { getType, deepClone } from '../utils';
import { CommonConfig } from '../interface';

type SpecialKey = 'level';

export default function useProps(
  props: CommonConfig,
  defaultProps: Partial<CommonConfig>,
): {
  uProps: Partial<CommonConfig> & { [key in SpecialKey]?: number };
} {
  const cloneProps = deepClone(props);

  const mergeProps = useCallback(
    (p: Partial<CommonConfig>, defaultProps: Partial<CommonConfig>) => {
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
