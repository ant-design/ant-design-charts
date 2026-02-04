// import { CustomElement, DisplayObjectConfig, Group } from '../../shapes';
// import { deepMix, isNull } from '@antv/util';
// import { maybeAppend, normalPadding, select } from '../../util';
// import { Button } from './button';
// import { SliderAxis } from './sliderAxis';
// import { CellAxis } from './cellAxis';
// import { SpeedControl } from './speedcontrol';
// import { Checkbox } from './checkbox';
// import { DEFAULT_TIMELINE_STYLE } from './constants';
// import type { TimelineStyleProps, PlayAxisStyleProps } from './types';
// import { normalSelection } from './playAxis';
var Timeline = /** @class */ (function () {
    function Timeline() {
    }
    return Timeline;
}());
export { Timeline };
// export class Timeline extends CustomElement<TimelineStyleProps> {
//   private speed = 1;
//   private singleMode = false;
//   private playing = false;
//   private selection: [number, number] = [0, 0];
//   constructor(options: DisplayObjectConfig<TimelineStyleProps>) {
//     super(deepMix({}, { style: DEFAULT_TIMELINE_STYLE }, options));
//     this.singleMode = this.style.singleMode || false;
//     this.selection = normalSelection(this.style.selection, this.singleMode);
//   }
//   public update(cfg: Partial<TimelineStyleProps> = {}) {
//     this.attr(deepMix({}, this.attributes, cfg));
//     if (cfg.singleMode !== undefined) {
//       this.singleMode = cfg.singleMode;
//     }
//     if (cfg.selection) {
//       this.selection = normalSelection(cfg.selection, this.singleMode);
//     }
//     this.render();
//   }
//   private get styles(): Required<TimelineStyleProps> {
//     return deepMix({}, DEFAULT_TIMELINE_STYLE, this.attributes);
//   }
//   private render() {
//     const { width, height, controlPosition, speedControl, singleModeControl } = this.styles;
//     const [pt = 0, pr = 0, pb, pl = pr] = normalPadding(this.styles.padding);
//     const container = maybeAppend(this, '.container', 'g')
//       .attr('className', 'container')
//       .style('x', pl)
//       .style('y', pt)
//       .node();
//     const length = this.style.orientation! === 'vertical' ? height - (pt + pb) : width - (pl + pr);
//     const layout = layoutControl(controlPosition, length, this.styles);
//     this.renderAxis(container, layout);
//     this.renderControlButton(container, layout);
//     maybeAppend(container, '.timeline-speed-control', () => new SpeedControl({}))
//       .attr('className', 'timeline-speed-control')
//       .call((selection) => {
//         if (speedControl === null) {
//           selection.remove();
//           return;
//         }
//         (selection.node() as SpeedControl).update({
//           x: layout.speedControl.x,
//           y: layout.speedControl.y,
//           ...speedControl,
//           initialSpeed: this.speed,
//         });
//       });
//     maybeAppend(container, '.timeline-single-control', () => new Checkbox({}))
//       .attr('className', 'timeline-single-control')
//       .call((selection) => {
//         if (singleModeControl === null) {
//           selection.remove();
//           return;
//         }
//         (selection.node() as Checkbox).update({
//           x: layout.singleModeControl.x,
//           y: layout.singleModeControl.y,
//           ...singleModeControl,
//           active: this.singleMode,
//         });
//       });
//   }
//   private renderAxis(container: Group, layout: Layout) {
//     const { data: timeData } = this.styles;
//     const type = this.styles.type || 'slider';
//     let axis = select(container).select('.timeline-axis').node() as PlayAxis | undefined;
//     const Ctor = type === 'cell' ? CellAxis : SliderAxis;
//     if (axis && axis.style.tag !== `${type}-axis`) {
//       axis.remove();
//       this.removeChild(axis);
//     }
//     axis = maybeAppend(container, '.timeline-axis', () => new Ctor({}))
//       .attr('className', 'timeline-axis')
//       .call((selection) => {
//         (selection.node() as PlayAxis).update({
//           x: layout.axis.x,
//           y: layout.axis.y,
//           length: layout.axis.length,
//           data: timeData,
//           selection: this.selection,
//           orientation: this.style.orientation!,
//           playInterval: this.style.playInterval! / this.speed,
//           singleMode: this.singleMode,
//           ...(this.style.playAxis || {}),
//         });
//         (selection.node() as PlayAxis).update({
//           handleStyle: {
//             cursor: this.style.orientation === 'vertical' ? 'ns-resize' : 'ew-resize',
//           },
//         });
//       })
//       .node() as PlayAxis;
//   }
//   private renderControlButton(container: Group, layout: Layout) {
//     const playButtonSize = layout.playBtn.size || 0;
//     const prevButtonSize = layout.prevBtn.size || 0;
//     const nextButtonSize = layout.nextBtn?.size || 0;
//     maybeAppend(container, '.timeline-prev-btn', () => new Button({}))
//       .attr('className', 'timeline-prev-btn')
//       .call((selection) => {
//         if (!prevButtonSize) {
//           selection.remove();
//           return;
//         }
//         (selection.node() as Button).update({
//           ...(this.style.controlButton?.prevBtn || {}),
//           x: layout.prevBtn.x,
//           y: layout.prevBtn.y,
//           size: prevButtonSize,
//           symbol: 'timeline-prev-button',
//         });
//         (selection.node() as Button).update({
//           markerStyle: {
//             transformOrigin: 'center',
//             transform: this.style.orientation === 'vertical' ? 'rotate(90deg)' : '',
//           },
//         });
//       });
//     maybeAppend(container, '.timeline-play-btn', () => new Button({}))
//       .attr('className', 'timeline-play-btn')
//       .call((selection) => {
//         if (!playButtonSize) {
//           selection.remove();
//           return;
//         }
//         (selection.node() as Button).update({
//           backgroundStyle: { radius: (layout.playBtn.size || 0) / 2 },
//         });
//         (selection.node() as Button).update({
//           ...(this.style.controlButton?.playBtn || {}),
//           x: layout.playBtn.x,
//           y: layout.playBtn.y,
//           size: playButtonSize,
//           symbol: !this.playing ? 'timeline-stop-button' : 'timeline-play-button',
//         });
//       });
//     maybeAppend(container, '.timeline-next-btn', () => new Button({}))
//       .attr('className', 'timeline-next-btn')
//       .call((selection) => {
//         if (!nextButtonSize) {
//           selection.remove();
//           return;
//         }
//         (selection.node() as Button).update({
//           ...(this.style.controlButton?.nextBtn || {}),
//           x: layout.nextBtn.x,
//           y: layout.nextBtn.y,
//           size: nextButtonSize,
//           symbol: 'timeline-next-button',
//         });
//         (selection.node() as Button).update({
//           markerStyle: {
//             transformOrigin: 'center',
//             transform: this.style.orientation === 'vertical' ? 'rotate(90deg)' : '',
//           },
//         });
//       });
//     if (this.style.autoPlay && !this.playing) {
//       this.playing = true;
//       select(this)
//         .select('.timeline-axis')
//         .call((selection) => (selection.node() as PlayAxis)?.play());
//       select(this)
//         .select('.timeline-play-btn')
//         .call((selection) => (selection.node() as Button)?.update({ symbol: 'timeline-play-button' }));
//     }
//     if (!this.style.autoPlay && this.playing) {
//       this.playing = false;
//       select(this)
//         .select('.timeline-axis')
//         .call((selection) => (selection.node() as PlayAxis)?.stop());
//       select(this)
//         .select('.timeline-play-btn')
//         .call((selection) => (selection.node() as Button)?.update({ symbol: 'timeline-stop-button' }));
//     }
//   }
//   private bindEvents() {
//     const axis = select(this).select('.timeline-axis').node() as SliderAxis;
//     const playStopBtn = select(this).select('.timeline-play-btn').node() as Button;
//     if (playStopBtn) {
//       select(playStopBtn).on('pointerdown', (evt: any) => {
//         if (this.playing) {
//           this.playing = false;
//           axis.stop();
//           playStopBtn.update({ symbol: 'timeline-stop-button' });
//         } else {
//           this.playing = true;
//           axis.play();
//           playStopBtn.update({ symbol: 'timeline-play-button' });
//         }
//       });
//     }
//     select(this).on('timelineStopped', () => {
//       this.playing = false;
//       playStopBtn?.update({ symbol: 'timeline-stop-button' });
//     });
//     select(this).on('speedChanged', (evt: any) => {
//       this.speed = evt.detail.speed;
//       axis.update({ playInterval: this.style.playInterval! / this.speed });
//     });
//     select(this)
//       .select('.timeline-prev-btn')
//       .on('pointerdown', () => axis.prev());
//     select(this)
//       .select('.timeline-next-btn')
//       .on('pointerdown', () => axis.next());
//     select(this).on('singleModeChanged', (evt: any) => {
//       this.singleMode = evt.detail.active;
//       this.selection = normalSelection(this.selection, this.singleMode);
//       this.render();
//     });
//     select(this).on('selectionChanged', (evt: any) => {
//       this.selection = evt.detail.selection;
//     });
//   }
// }
//# sourceMappingURL=index.js.map