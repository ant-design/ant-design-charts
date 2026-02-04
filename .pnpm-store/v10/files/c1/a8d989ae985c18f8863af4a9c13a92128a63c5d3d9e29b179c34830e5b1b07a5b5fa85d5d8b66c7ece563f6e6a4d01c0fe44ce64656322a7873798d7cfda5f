import isNumber from './is-number';

const isInteger = Number.isInteger ? Number.isInteger : function(num: any): boolean {
  return isNumber(num) && num % 1 === 0;
};

export default isInteger;
