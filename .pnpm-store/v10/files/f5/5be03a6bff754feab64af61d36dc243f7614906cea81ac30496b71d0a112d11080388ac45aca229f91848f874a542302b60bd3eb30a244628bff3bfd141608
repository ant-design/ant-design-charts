import { version } from 'antd';
import { compareVersions } from "../compareVersions";

/**
 * 兼容 antd 5.13.0 以下版本的 bordered 属性
 * @param bordered
 * @returns
 */
export var compatibleBorder = function compatibleBorder(bordered) {
  if (bordered === undefined) {
    return {};
  }
  return compareVersions(version, '5.13.0') <= 0 ? {
    bordered: bordered
  } : {
    variant: bordered ? undefined : 'borderless'
  };
};