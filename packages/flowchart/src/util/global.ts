import { FlowchartProps } from '../interface';

// 解决 xflow hooks 获取不到上层配置
export const globalProps = {
  config: {},
};

/** 设置全局状态 */
export const setProps = (props: FlowchartProps) => {
  globalProps.config = props;
};

/** 获取全局状态 */
export const getProps = (key: string) => {
  return globalProps.config?.[key];
};
