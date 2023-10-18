import Line from './line';
import Area from './area';
import Column from './column';
import Progress from './progress';
import Ring from './ring';

export type { TinyLineConfig } from './line';
export type { TinyAreaConfig } from './area';
export type { TinyColumnConfig } from './column';
export type { TinyProgressConfig } from './progress';
export type { TinyRingConfig } from './ring';

type TinyOptions = Record<string, typeof Line | typeof Area | typeof Column | typeof Progress | typeof Ring>;

export const Tiny: TinyOptions = { Line, Area, Column, Progress, Ring };
