import Line from './tiny-line';
import Area from './tiny-area';
import Column from './tiny-column';

type TinyOptions = Record<string, typeof Line | typeof Area | typeof Column>;

export const Tiny: TinyOptions = { Line, Area, Column };
