import type { BaseMark as G2BaseMark, MarkTypes, ChannelTypes } from '@antv/g2';
import type { Interaction } from './interaction';
import type { Literal2Object } from './utils';
export type AtheisticChanelTypes = 'size' | 'color' | 'shape' | 'opacity';
export type BaseMark<T extends MarkTypes, C extends string = ChannelTypes> = G2BaseMark<T, C> & {
    interaction: Literal2Object<Interaction>;
};
export type SunburstMark = BaseMark<'rect', 'value' | ChannelTypes>;
