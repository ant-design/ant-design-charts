import isArray from './is-array';
import isNil from './is-nil';

export default (data: any[], name: string): any[] => {
  const rst = [];
  const tmpMap = {};

  for (let i = 0; i < data.length; i++) {
    const obj = data[i];
    let value = obj[name] as string[];

    if (!isNil(value)) {
      // flatten
      if (!isArray(value)) {
        value = [ value ];
      }
      for (let j = 0; j < value.length; j++) {
        const val = value[j];
        // unique
        if (!tmpMap[val]) {
          rst.push(val);
          tmpMap[val] = true;
        }
      }
    }
  }

  return rst;
};
