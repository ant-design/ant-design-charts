import Line from './tiny-line';
import Area from './tiny-area';
import Column from './tiny-column';
import Progress from './tiny-progress';

export type { TinyLineConfig } from './tiny-line';
export type { TinyAreaConfig } from './tiny-area';
export type { TinyColumnConfig } from './tiny-column';
export type { TinyProgressConfig } from './tiny-progress';

type TinyOptions = Record<string, typeof Line | typeof Area | typeof Column | typeof Progress>;

export const Tiny: TinyOptions = { Line, Area, Column, Progress };
