// import { CustomElement, DisplayObjectConfig, CustomEvent } from '../../shapes';
// import { deepMix, isNil } from '@antv/util';
// import { applyStyle, maybeAppend, select } from '../../util';
// import { CheckboxStyleProps } from './types';

// type StyleProps = CheckboxStyleProps & {
//   x?: number;
//   y?: number;
// };

// function CheckSymbol(x: number, y: number, r: number) {
//   return [
//     ['M', x - (r / 7) * 4, y - r / 14],
//     ['L', x - r / 7, y + (r / 7) * 3],
//     ['L', x + (r / 7) * 4, y - (r / 7) * 3],
//   ];
// }

// export class Checkbox extends CustomElement<StyleProps> {
//   private active: boolean | undefined = false;

//   public static defaultOptions = {
//     style: {
//       size: 12,
//       buttonStyle: {
//         fill: 'transparent',
//         stroke: '#000',
//         strokeOpacity: 0.15,
//         cursor: 'pointer',
//         lineWidth: 1,
//         radius: 2,
//         active: {
//           stroke: '#3471F9',
//           fill: '#3471F9',
//           strokeOpacity: 1,
//         },
//       },
//       symbol: {
//         active: {
//           stroke: '#fff',
//         },
//       },
//       labelStyle: {
//         text: '',
//         textAlign: 'left',
//         textBaseline: 'middle',
//         fill: '#000',
//         fillOpacity: 0.65,
//       },
//       cursor: 'pointer',
//     },
//   };

//   constructor(options: DisplayObjectConfig<StyleProps>) {
//     super(deepMix({}, Checkbox.defaultOptions, options));
//     this.active = this.style.active || false;
//   }

//   private get styles(): Required<StyleProps> {
//     return deepMix({}, Checkbox.defaultOptions.style, this.attributes);
//   }

//   public update(cfg: Partial<StyleProps> = {}) {
//     this.attr(deepMix({}, this.attributes, cfg));
//     if (!isNil(cfg.active)) {
//       this.active = cfg.active;
//     }
//     this.render();
//   }

//   private render() {
//     const { size, buttonStyle, labelStyle, symbol } = this.styles;
//     const { active: activeStyle, ...buttonStyles } = buttonStyle;

//     const button = maybeAppend(this, '.button', 'rect')
//       .attr('className', 'button')
//       .style('x', 0)
//       .style('y', 0)
//       .style('width', size)
//       .style('height', size)
//       .call(applyStyle, buttonStyles)
//       .call(applyStyle, this.active ? activeStyle : {})
//       .node();

//     maybeAppend(button, '.symbol', 'path')
//       .attr('className', 'symbol')
//       .style('x', size / 2)
//       .style('y', size / 2)
//       .style('path', CheckSymbol(size / 2, size / 2, size / 2))
//       .style('lineWidth', 1)
//       .style('lineCap', 'round')
//       .style('stroke', 'transparent')
//       .style('cursor', 'pointer')
//       .call(applyStyle, this.active ? symbol?.active : {});

//     maybeAppend(this, '.label', 'text')
//       .attr('className', 'label')
//       .style('x', size)
//       .style('y', size / 2)
//       .call(applyStyle, labelStyle);
//   }

//   private bindEvents() {
//     select(this)
//       .select('.button')
//       .on('pointerdown', () => {
//         this.dispatchEvent(new CustomEvent('singleModeChanged', { detail: { active: !this.active } }));
//         // Do a dummy component.
//         // this.active = !this.active;
//         // this.render();
//       });
//   }
// }
