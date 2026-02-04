"use strict";
// import { CustomElement, CustomEvent, DisplayObjectConfig } from '../../shapes';
// import { deepMix } from '@antv/util';
// import { applyStyle, maybeAppend, select } from '../../util';
// import { DEFAULT_TIMELINE_STYLE } from './constants';
// import { SpeedControlStyleProps } from './types';
// type StyleProps = SpeedControlStyleProps & {
//   x?: number;
//   y?: number;
// };
// function getOffsetByIndex(index: number, height: number): number {
//   const OFFSET = [1.43, 2.79, 4.89, 7.57, 11.66];
//   return (OFFSET[index] / 11.66) * height;
// }
// const DEFAULT_STYLE = deepMix({}, DEFAULT_TIMELINE_STYLE.speedControl, {
//   markerFill: '#8c8c8c',
//   spacing: 1,
//   lineStyle: {
//     stroke: '#bfbfbf',
//     lineWidth: 1,
//   },
// });
// export class SpeedControl extends CustomElement<StyleProps> {
//   public static tag = 'speed-control';
//   public static defaultOptions: DisplayObjectConfig<StyleProps> = {
//     style: DEFAULT_STYLE,
//   };
//   constructor(options: DisplayObjectConfig<StyleProps>) {
//     super(deepMix({}, SpeedControl.defaultOptions, options));
//   }
//   public update(cfg: Partial<StyleProps> = {}): void {
//     this.attr(deepMix({}, this.attributes, cfg));
//     this.render();
//   }
//   private get styles(): Required<SpeedControlStyleProps> {
//     return deepMix({}, SpeedControl.defaultOptions.style, this.attributes);
//   }
//   private render() {
//     const {
//       initialSpeed,
//       markerSize,
//       markerFill,
//       lineStyle,
//       speeds,
//       labelStyle: label,
//       spacing,
//       formatter = (v) => `${v}`,
//     } = this.styles;
//     let initialSpeedIdx = speeds.indexOf(initialSpeed);
//     if (initialSpeedIdx === -1) initialSpeedIdx = 0;
//     const size = markerSize * 2;
//     const y = getOffsetByIndex(initialSpeedIdx, size * 2);
//     const r = markerSize * Math.tan(Math.PI / 6) * 2;
//     maybeAppend(this, '.speed-marker', 'path')
//       .attr('className', 'speed-marker')
//       .style('fill', markerFill)
//       .style('path', [['M', 0, y - r / 2], ['L', markerSize, y], ['L', 0, y + r / 2], ['Z']]);
//     const x = markerSize - 0.5;
//     const group = maybeAppend(this, '.line-group', 'rect')
//       .attr('className', 'line-group')
//       .style('x', x)
//       .style('y', 0)
//       .style('width', size)
//       .style('height', size * 2)
//       .style('cursor', 'pointer')
//       .style('fill', 'transparent')
//       .node();
//     const path = speeds.reduce((arr: any[], _: any, idx: number) => {
//       const offset = getOffsetByIndex(idx, size * 2);
//       arr.push(['M', 0, offset], ['L', size, offset]);
//       return arr;
//     }, [] as any[]);
//     maybeAppend(group, '.speed-path', 'path')
//       .attr('className', 'speed-path')
//       .style('path', path)
//       .call(applyStyle, lineStyle);
//     maybeAppend(this, '.speed-label', 'text')
//       .attr('className', 'speed-label')
//       .style('x', x + size + spacing)
//       .style('y', 2)
//       .style('text', formatter(speeds[initialSpeedIdx]))
//       .call(applyStyle, label);
//   }
//   private bindEvents() {
//     const lineGroup = this.querySelector('.line-group')! as any;
//     lineGroup.addEventListener('pointerdown', (evt: any) => this.onClick(evt));
//     // Only for mobile.
//     lineGroup.addEventListener('touchmove', (evt: any) => this.onClick(evt));
//   }
//   private onClick(evt: any) {
//     const { speeds, markerSize, formatter = (v) => `${v}` } = this.styles;
//     const height = markerSize * 2 * 2;
//     const lineGroup = this.querySelector('.line-group')! as any;
//     const speedText = select(this).select('.speed-label').node();
//     const speedMarker = select(this).select('.speed-marker').node();
//     if (evt.currentTarget === lineGroup) {
//       const diff = evt.y - lineGroup.getBBox().y;
//       const idx = speeds.findIndex((_: any, idx: number) => {
//         const offset = getOffsetByIndex(idx, height);
//         const offset0 = getOffsetByIndex(idx - 1, height);
//         const offset1 = getOffsetByIndex(idx + 1, height);
//         if (idx === 0) return diff < offset + (getOffsetByIndex(1, height) - offset) / 2;
//         if (idx === speeds.length - 1) return diff > offset - (offset - offset0) / 2;
//         const range = [offset - (offset - offset0) / 2, offset + (offset1 - offset) / 2];
//         return diff >= range[0] && diff < range[1];
//       });
//       if (idx === -1) return;
//       speedText.setAttribute('text', formatter(speeds[idx]));
//       speedMarker.setLocalPosition(0, getOffsetByIndex(idx, height) - height / 8);
//       this.dispatchEvent(new CustomEvent('speedChanged', { detail: { speed: speeds[idx] } }));
//     }
//   }
// }
//# sourceMappingURL=speedcontrol.js.map