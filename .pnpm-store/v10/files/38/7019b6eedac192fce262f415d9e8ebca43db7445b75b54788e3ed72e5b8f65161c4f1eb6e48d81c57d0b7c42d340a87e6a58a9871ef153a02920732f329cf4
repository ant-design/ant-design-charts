"use strict";
// import {
//   CustomElement,
//   DisplayObjectConfig,
//   PathStyleProps,
//   RectStyleProps,
//   BaseCustomElementStyleProps,
// } from '../../shapes';
// import { deepMix, omit } from '@antv/util';
// import { FunctionalSymbol } from '../marker/types';
// import { applyStyle, maybeAppend, normalPadding, select } from '../../util';
// type ButtonBackgroundStyle = Omit<RectStyleProps, 'x' | 'y' | 'width' | 'height'>;
// type ButtonMarkerStyle = Omit<PathStyleProps, 'path'>;
// export type ControlButtonStyleProps = {
//   // The size of marker is equal to [size - padding[1] - padding[3], size - padding[0] - padding[2]]
//   size: number;
//   symbol?: string;
//   disabled?: boolean;
//   // Used to enlarge the hot area of button.
//   margin?: number | number[];
//   padding?: number | number[];
//   backgroundStyle?: ButtonBackgroundStyle & {
//     active?: Omit<RectStyleProps, 'x' | 'y' | 'width' | 'height'>;
//     disabled?: Omit<RectStyleProps, 'x' | 'y' | 'width' | 'height'>;
//   };
//   markerStyle?: ButtonMarkerStyle & {
//     active?: Omit<PathStyleProps, 'path'>;
//     disabled?: Omit<PathStyleProps, 'path'>;
//   };
// };
// export type ButtonStyleProps = BaseCustomElementStyleProps & ControlButtonStyleProps;
// export class Button extends CustomElement<ButtonStyleProps> {
//   private active: boolean = false;
//   private disabled: boolean = false;
//   private static MARKER_SYMBOL_MAP = new Map<string, FunctionalSymbol>();
//   /**
//    * 注册 icon 类型
//    * @param type
//    * @param path
//    */
//   public static registerSymbol = (type: string, symbol: FunctionalSymbol) => {
//     Button.MARKER_SYMBOL_MAP.set(type, symbol);
//   };
//   /**
//    * 获取已经注册的 icon 的 path
//    */
//   public static getSymbol = (type: string): FunctionalSymbol | undefined => {
//     return Button.MARKER_SYMBOL_MAP.get(type);
//   };
//   constructor(options: DisplayObjectConfig<ButtonStyleProps>) {
//     super(options);
//     this.disabled = this.style.disabled || false;
//   }
//   public update(cfg: Partial<ButtonStyleProps> = {}) {
//     this.attr(deepMix({}, this.attributes, cfg));
//     if (cfg.disabled) {
//       this.active = false;
//       this.disabled = true;
//     }
//     this.render();
//   }
//   public setState(state?: 'disabled' | 'default') {
//     if (state === 'disabled') {
//       this.active = false;
//       this.disabled = true;
//     } else {
//       this.disabled = false;
//     }
//     this.render();
//   }
//   private render() {
//     const { size = 8, symbol, markerStyle, margin = 0, padding = 0, backgroundStyle } = this.style;
//     const [mt, mr, mb, ml] = normalPadding(margin);
//     const [pt, pr, pb, pl] = normalPadding(padding);
//     const rx = (size - pr - pl) / 2;
//     const ry = (size - pt - pb) / 2;
//     maybeAppend(this, '.container', 'rect')
//       .attr('className', 'container')
//       .style('x', -(rx + pl + ml))
//       .style('y', -(ry + pt + mt))
//       .style('width', size + mr + ml)
//       .style('height', size + mt + mb)
//       .style('fill', 'transparent')
//       .style('cursor', this.disabled ? 'not-allowed' : 'pointer')
//       .style('zIndex', 1);
//     const { active: bgActiveStyle, disabled: bgDisabledStyle, ...bgStyles } = backgroundStyle || {};
//     maybeAppend(this, '.background', 'rect')
//       .attr('className', 'background')
//       .style('x', -(rx + pl))
//       .style('y', -(ry + pt))
//       .style('width', size)
//       .style('height', size)
//       .call(applyStyle, bgStyles)
//       .call(applyStyle, this.active ? bgActiveStyle : {})
//       .call(applyStyle, this.disabled ? bgDisabledStyle : {});
//     const symbolFn = typeof symbol === 'function' ? symbol : Button.getSymbol(symbol || '');
//     const { active: markerActiveStyle, disabled: markerDisabledStyle, ...markerStyles } = markerStyle || {};
//     maybeAppend(this, '.marker', 'path')
//       .attr('className', 'marker')
//       .style('x', 0)
//       .style('y', 0)
//       .style('path', symbolFn?.(0, 0, Math.min(rx, ry)))
//       .call(applyStyle, markerStyles)
//       .call(applyStyle, this.active ? markerActiveStyle : {})
//       .call(applyStyle, this.disabled ? markerDisabledStyle : {});
//   }
//   private bindEvents() {
//     const marker = select(this).select('.marker');
//     const background = select(this).select('.background');
//     select(this).on('pointerup', () => {
//       if (this.disabled) return;
//       this.active = true;
//     });
//     select(this).on('pointermove', () => {
//       if (this.disabled) return;
//       this.active = true;
//       applyStyle(marker, this.style.markerStyle?.active as any);
//       applyStyle(background, this.style.backgroundStyle?.active as any);
//     });
//     select(this).on('pointerout', () => {
//       if (this.disabled) return;
//       this.active = false;
//       applyStyle(marker, omit(this.style.markerStyle || {}, ['active']) as any);
//       applyStyle(background, omit(this.style.backgroundStyle || {}, ['active']) as any);
//     });
//   }
// }
// Button.registerSymbol('timeline-prev-button', (x: number, y: number, r: number) => {
//   return [
//     ['M', x + r, y + r],
//     ['L', x, y],
//     ['L', x + r, y - r],
//     ['M', x, y + r],
//     ['L', x - r, y],
//     ['L', x, y - r],
//   ];
// });
// Button.registerSymbol('timeline-next-button', (x: number, y: number, r: number) => {
//   return [
//     ['M', x, y + r],
//     ['L', x + r, y],
//     ['L', x, y - r],
//     ['M', x - r, y + r],
//     ['L', x, y],
//     ['L', x - r, y - r],
//   ];
// });
// Button.registerSymbol('timeline-play-button', (x: number, y: number, r: number) => {
//   return [
//     ['M', x + 2, y + 3],
//     ['L', x + 2, y - 3],
//     ['M', x - 2, y + 3],
//     ['L', x - 2, y - 3],
//   ];
// });
// Button.registerSymbol('timeline-stop-button', (x: number, y: number, r: number) => {
//   return [['M', x + 3, y], ['L', x - 1.5, y - 1.5 * Math.sqrt(3)], ['L', x - 1.5, y + 1.5 * Math.sqrt(3)], ['Z']];
// });
//# sourceMappingURL=button.js.map