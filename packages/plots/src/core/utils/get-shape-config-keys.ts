import { CONFIG_SHAPE } from '../constants';

export const getShapeConfigKeys = () => {
  const configKeys = [];
  CONFIG_SHAPE.forEach((item) => {
    configKeys.push(item.key);
  });
  return configKeys;
};
