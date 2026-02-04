declare function runAsync<F extends (...args: any[]) => any>(
  func: F,
): (...args: Parameters<F>) => Promise<Awaited<ReturnType<F>>>;

export = runAsync;
