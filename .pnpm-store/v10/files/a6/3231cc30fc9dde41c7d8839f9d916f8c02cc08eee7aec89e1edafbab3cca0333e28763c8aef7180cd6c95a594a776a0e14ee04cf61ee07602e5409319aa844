import type { DisplayObjectConfig, TextStyleProps as GTextStyleProps } from '@antv/g';
import { Group, Text as GText } from '@antv/g';
import { createOffscreenGroup } from '../util/offscreen';
import { OmitConflictStyleProps } from './types';

export type TextStyleProps = OmitConflictStyleProps<GTextStyleProps>;

export class Text extends GText {
  private _offscreen!: Group;

  protected get offscreenGroup() {
    if (!this._offscreen) this._offscreen = createOffscreenGroup(this);
    return this._offscreen;
  }

  disconnectedCallback(): void {
    this._offscreen?.destroy();
  }

  constructor({ style, ...restOptions }: DisplayObjectConfig<TextStyleProps> = {}) {
    super({
      style: {
        text: '',
        fill: 'black',
        fontFamily: 'sans-serif',
        fontSize: 16,
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: 'normal',
        lineWidth: 1,
        textAlign: 'start',
        textBaseline: 'middle',
        ...style,
      },
      ...restOptions,
    });
  }
}
