import { prefix } from '../constants';
/** 关闭加载动画 */
export const closeFetchLoading = () => {
  const hideContainer = document.getElementsByClassName(`${prefix}-antd-loading`);
  Array.from(hideContainer).forEach((el) => {
    document.body.removeChild(el);
  });
};
