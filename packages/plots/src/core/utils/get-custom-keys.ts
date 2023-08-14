import { TRANSFORM_OPTION_KEY } from '../constants';

export const getCustomKeys = () => {
  const customKeys = [];
  Object.keys(TRANSFORM_OPTION_KEY).forEach((key) => {
    customKeys.push(...Object.keys(TRANSFORM_OPTION_KEY[key]));
  });
  return customKeys;
};
