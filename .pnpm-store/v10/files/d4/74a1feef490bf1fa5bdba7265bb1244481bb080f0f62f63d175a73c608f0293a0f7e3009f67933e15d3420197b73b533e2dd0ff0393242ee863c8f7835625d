import isNil from './is-nil';
import isArray from './is-array';

const firstValue = function(data: object[], name: string): any {
  let rst = null;
  for (let i = 0; i < data.length; i++) {
    const obj = data[i];
    const value = obj[name];
    if (!isNil(value)) {
      if (isArray(value)) {
        rst = value[0]; // todo 这里是否应该使用递归，调用 firstValue @绝云
      } else {
        rst = value;
      }
      break;
    }
  }
  return rst;
};

export default firstValue;
