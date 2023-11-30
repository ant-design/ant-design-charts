import { Runtime, extend, stdlib } from '@antv/g2';
import { plotlib } from '@antv/g2-extension-plot';
export { Chart as G2Chart } from '@antv/g2';

export const Chart = extend(Runtime, { ...stdlib(), ...plotlib() });
