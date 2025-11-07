const reflect = (f: Function) => {
  return (x: number) => -f(-x);
};

export const logs = (base: number, shouldReflect: boolean) => {
  const baseCache = Math.log(base);
  const log =
    base === Math.E
      ? Math.log
      : base === 10
      ? Math.log10
      : base === 2
      ? Math.log2
      : (x: number) => Math.log(x) / baseCache;
  return shouldReflect ? reflect(log) : log;
};

export const pows = (base: number, shouldReflect: boolean) => {
  const pow = base === Math.E ? Math.exp : (x: number) => base ** x;
  return shouldReflect ? reflect(pow) : pow;
};
