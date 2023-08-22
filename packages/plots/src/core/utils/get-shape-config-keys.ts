import { CONFIG_SHAPE } from '../constants';

export const getShapeConfigKeys = (keys: string[] = []): string[] => {
  const configKeys = keys;
  CONFIG_SHAPE.forEach((item) => {
    configKeys.push(item.key);
  });
  return configKeys;
};
