import { TRANSFORM_OPTION_KEY } from '../constants';
import { getShapeConfigKeys } from './get-shape-config-keys';

export const getCustomKeys = (): string[] => {
  const customKeys = [];
  Object.keys(TRANSFORM_OPTION_KEY).forEach((key) => {
    customKeys.push(...Object.keys(TRANSFORM_OPTION_KEY[key]));
  });
  getShapeConfigKeys(customKeys);
  return customKeys;
};
