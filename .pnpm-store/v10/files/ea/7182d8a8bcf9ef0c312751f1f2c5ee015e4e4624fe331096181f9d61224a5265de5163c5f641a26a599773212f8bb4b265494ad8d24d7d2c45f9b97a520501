import * as optimization from './';

describe('optimization', () => {
  describe('throttle', () => {
    let fn: jest.Mock;

    beforeEach(() => {
      fn = jest.fn();
    });

    it('called only once', () => {
      const throttledFn = optimization.throttle(fn);
      throttledFn();
      throttledFn();
      expect(fn).toBeCalledTimes(0);

      requestAnimationFrame(() => {
        expect(fn).toBeCalledTimes(1);
      });
    });
    it('called 2 times', () => {
      const throttledFn = optimization.throttle(fn);
      throttledFn();
      throttledFn();
      expect(fn).toBeCalledTimes(0);

      requestAnimationFrame(() => {
        throttledFn();
        expect(fn).toBeCalledTimes(2);
      });
    });
  });

  describe('debounce', () => {
    let fn: jest.Mock;

    beforeEach(() => {
      fn = jest.fn();
    });

    it('called only once', () => {
      const debouncedFn = optimization.debounce(fn);
      debouncedFn();
      debouncedFn();
      expect(fn).toBeCalledTimes(0);

      requestAnimationFrame(() => {
        expect(fn).toBeCalledTimes(1);
      });
    });
    it('called 2 times', () => {
      const debouncedFn = optimization.debounce(fn);
      debouncedFn();
      debouncedFn();
      expect(fn).toBeCalledTimes(0);

      requestAnimationFrame(() => {
        debouncedFn();
        expect(fn).toBeCalledTimes(2);
      });
    });
  });
});
