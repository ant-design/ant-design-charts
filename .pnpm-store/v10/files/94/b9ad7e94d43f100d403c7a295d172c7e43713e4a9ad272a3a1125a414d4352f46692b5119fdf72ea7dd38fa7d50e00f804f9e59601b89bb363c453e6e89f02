export const debounce = <F extends Function>(callback: F) => {
  let reqID: number | null = null;

  const exec = (args: F['arguments']) => () => {
    // @ts-ignore TS2488
    callback(...args);
  };

  return (...args: F['arguments']) => {
    if (reqID) {
      cancelAnimationFrame(reqID);
    }
    reqID = requestAnimationFrame(exec(args));
  };
};

export const throttle = <F extends Function>(callback: F) => {
  let reqID: number | null = null;

  const exec = (args: F['arguments']) => () => {
    // @ts-ignore TS2488
    callback(...args);
    reqID = null;
  };

  return (...args: F['arguments']) => {
    if (!reqID) {
      reqID = requestAnimationFrame(exec(args));
    }
  };
};
