import { CONFIG_SHAPE } from '../constants';

export const getShapeConfigKeys = (): string[] => {
  const configKeys = [];
  CONFIG_SHAPE.forEach((item) => {
    configKeys.push(item.key);
  });
  return configKeys;
};
