/**
 * 计时装饰器
 */
export function timer(label?: string) {
  const debug = localStorage.getItem('__debug__');

  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const timerLabel = `[${propertyKey}] ${label}`;
    const func = descriptor.value;
    if (typeof func === 'function') {
      // eslint-disable-next-line
      descriptor.value = function (...args: any[]) {
        debug && console.time(timerLabel);
        func.apply(this, args);
        debug && console.timeEnd(timerLabel);
      };
    }
  };
}
