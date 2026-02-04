/**
 * 节流修饰器
 * @param delay 节流时间
 */
export function throttle(delay: number = 0, rightNow: boolean = false) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const func = descriptor.value;
    let timeout: number | null;
    if (typeof func === 'function') {
      // eslint-disable-next-line
      descriptor.value = function (...args: any[]) {
        if (timeout) return;
        const context = this;
        if (rightNow) func.apply(context, args);
        timeout = window.setTimeout(() => {
          func.apply(context, args);
          timeout = null;
        }, delay);
      };
    }
  };
}
