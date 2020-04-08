import deepmerge from 'deepmerge';

export default function getChartConfig<T>(config: T, runtimeConfig: Set<object>): T {
  let newConfig = config;
  runtimeConfig.forEach(item => {
    newConfig = deepmerge(newConfig, item) as T;
  })
  return newConfig;
}
