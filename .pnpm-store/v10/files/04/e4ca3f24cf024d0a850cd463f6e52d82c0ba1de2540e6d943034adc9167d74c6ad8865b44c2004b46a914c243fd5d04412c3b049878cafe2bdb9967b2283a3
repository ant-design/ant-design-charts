const arrPrototype = Array.prototype;
const splice = arrPrototype.splice;
const indexOf = arrPrototype.indexOf;

const pull = function<T>(arr: T[], ...values: any[]): T[] {
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    let fromIndex = -1;
    while ((fromIndex = indexOf.call(arr, value)) > -1) {
      splice.call(arr, fromIndex, 1);
    }
  }
  return arr;
};

export default pull;
