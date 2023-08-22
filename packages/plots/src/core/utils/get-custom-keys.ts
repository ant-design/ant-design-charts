import { TRANSFORM_OPTION_KEY, CONFIG_SHAPE } from '../constants';

export const getCustomKeys = () => {
  const customKeys = [];
  Object.keys(TRANSFORM_OPTION_KEY).forEach((key) => {
    customKeys.push(...Object.keys(TRANSFORM_OPTION_KEY[key]));
  });
  Object.keys(CONFIG_SHAPE).forEach((key) => {
    customKeys.push(key);
  });
  return customKeys;
};
