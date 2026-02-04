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

// export type TimelineOptions = DisplayObjectConfig<TimelineStyleProps>;

// type PlayAxis = SliderAxis | CellAxis;
// type BBox = { x: number; y: number; length?: number; size?: number };
// type Layout = {
//   axis: BBox;
//   playBtn: BBox;
//   prevBtn: BBox;
//   nextBtn: BBox;
//   speedControl: BBox;
//   singleModeControl: BBox;
// };

// function getAxisLabelHeight(options: PlayAxisStyleProps | null | undefined): number {
//   const cfg: Required<PlayAxisStyleProps['label']> = deepMix({}, DEFAULT_TIMELINE_STYLE.playAxis, options).label;
//   if (!cfg) return 0;

//   return (cfg.tickLine?.len || 0) + (cfg.tickPadding || 0) + (Number(cfg.style.fontSize) || 0) + 2;
// }

// function layoutControl(position: string, length: number, props: TimelineStyleProps): Layout {
//   const cfg: Required<TimelineStyleProps> = deepMix({}, DEFAULT_TIMELINE_STYLE, props);
//   const { type, playAxis, controlButton, speedControl, singleModeControl } = cfg;
//   const axisLabelPosition = playAxis?.label?.position || -1;
//   const axisCellSpacing = playAxis?.spacing ?? (CellAxis.defaultOptions?.style?.spacing || 0);
//   let axisSize =
//     playAxis?.size ||
//     (type === 'cell' ? CellAxis.defaultOptions?.style?.size : SliderAxis.defaultOptions?.style?.size) ||
//     4;
//   axisSize += type === 'cell' ? axisCellSpacing : 0;
//   const [axisPt, axisPr, axisPb, axisPl] = normalPadding(playAxis?.appendPadding || 0);

//   const buttonGap = controlButton?.spacing || 0;
//   const playButtonSize = isNull(controlButton) || isNull(controlButton?.playBtn) ? 0 : controlButton?.playBtn?.size!;
//   const prevButtonSize = isNull(controlButton) || isNull(controlButton?.prevBtn) ? 0 : controlButton?.prevBtn?.size!;
//   const nextButtonSize = isNull(controlButton) || isNull(controlButton?.nextBtn) ? 0 : controlButton?.nextBtn?.size!;
//   const prevButtonOffset = playButtonSize / 2 + prevButtonSize / 2 + buttonGap;
//   const nextButtonOffset = playButtonSize / 2 + nextButtonSize / 2 + buttonGap;
//   const speedControlMarkerSize = speedControl === null ? 0 : speedControl?.markerSize!;
//   const speedControlSize = speedControlMarkerSize * 2;
//   const speedControlWidth = speedControl === null ? 0 : speedControl?.width!;
//   const speedControlHeight = speedControlSize * 2 + speedControlMarkerSize / 2;
//   const singleControlWidth = singleModeControl === null ? 0 : singleModeControl?.width!;
//   const singleControlSize = singleModeControl === null ? 0 : singleModeControl?.size! + 2; /** lineWidth of stroke. */

//   if (cfg.orientation === 'vertical') {
//     // Remain 30px for placing axis label.
//     const centerX = axisPl + (axisLabelPosition === -1 ? 30 : 0);
//     const axisX = centerX + (type === 'cell' ? 0 : axisSize / 2);
//     const buttonX = centerX + axisSize / 2;

//     const singleModeControlY = length - singleControlSize;
//     const speedControlY = singleModeControlY - 4 - speedControlHeight;
//     const nextButtonY = speedControlY - buttonGap - nextButtonSize / 2;
//     const playBtnY = prevButtonSize + buttonGap + playButtonSize / 2;
//     const axisY = playBtnY + playButtonSize / 2 + buttonGap + axisPt;
//     const axisEndY = nextButtonY - buttonGap - nextButtonSize / 2 - axisPb;
//     const axisLength = axisEndY - axisY;

//     return {
//       axis: { x: axisX, y: axisY, length: axisLength },
//       prevBtn: { x: buttonX, y: prevButtonSize / 2, size: prevButtonSize },
//       playBtn: { x: buttonX, y: playBtnY, size: playButtonSize },
//       nextBtn: { x: buttonX, y: nextButtonY, size: nextButtonSize },
//       speedControl: { x: centerX - speedControlWidth / 2, y: speedControlY, size: speedControlWidth },
//       singleModeControl: { x: 0, y: singleModeControlY },
//     };
//   }

//   const singleControlX = length - singleControlWidth;
//   const speedControlX = singleControlX - 8 - speedControlWidth;
//   const axisLabelHeight = getAxisLabelHeight(playAxis);
//   const axisY = (axisLabelPosition === -1 ? axisLabelHeight : 0) + (type === 'cell' ? 0 : axisSize / 2) + axisPt;

//   if (position === 'bottom') {
//     const playBtnX = length / 2;
//     const playBtnY = axisY + (axisLabelPosition === 1 ? axisLabelHeight : 0) + axisSize + playButtonSize / 2 + axisPb;
//     const speedControlY = axisY + (axisLabelPosition === 1 ? axisLabelHeight : 0) + axisSize + axisPb;
//     return {
//       axis: { x: axisPl, y: axisY, length: length - (axisPl + axisPr) },
//       playBtn: { x: playBtnX, y: playBtnY, size: playButtonSize },
//       prevBtn: { x: playBtnX - prevButtonOffset, y: playBtnY, size: prevButtonSize },
//       nextBtn: { x: playBtnX + nextButtonOffset, y: playBtnY, size: nextButtonSize },
//       // SpeedControl align playAxis.
//       speedControl: { x: speedControlX, y: speedControlY, size: speedControlWidth },
//       singleModeControl: { x: singleControlX, y: speedControlY + speedControlSize - singleControlSize / 2 },
//     };
//   }

//   const playBtnY = type === 'cell' ? axisY + axisSize / 2 : axisY;
//   // PlayButton and speedControl is middle align.
//   let speedControlY = axisLabelPosition === 1 ? axisY + speedControlMarkerSize / 2 : axisY - speedControlHeight;
//   if (type === 'cell' && axisLabelPosition === -1) {
//     speedControlY = axisLabelHeight + axisSize - speedControlHeight;
//   }
//   if (position === 'left') {
//     const prevBtnX = prevButtonSize / 2;
//     const playBtnX = prevBtnX + prevButtonOffset;
//     const nextBtnX = playBtnX + nextButtonOffset;
//     const axisX = nextBtnX + nextButtonSize / 2 + axisPl;
//     const axisLength = speedControlX - axisPr - axisX;
//     return {
//       axis: { x: axisX, y: axisY, length: axisLength },
//       prevBtn: { x: prevBtnX, y: playBtnY, size: prevButtonSize },
//       playBtn: { x: playBtnX, y: playBtnY, size: playButtonSize },
//       nextBtn: { x: nextBtnX, y: playBtnY, size: nextButtonSize },
//       speedControl: { x: speedControlX, y: speedControlY, size: speedControlWidth },
//       singleModeControl: { x: singleControlX, y: speedControlY + speedControlSize - singleControlSize / 2 },
//     };
//   }

//   const nextBtnX = speedControlX - (nextButtonSize / 2 + buttonGap);
//   const playBtnX = nextBtnX - nextButtonOffset;
//   const prevBtnX = playBtnX - prevButtonOffset;
//   const axisX = axisPl;
//   return {
//     axis: { x: axisX, y: axisY, length: prevBtnX - prevButtonSize / 2 - axisPr - axisX },
//     playBtn: { x: playBtnX, y: playBtnY, size: playButtonSize },
//     prevBtn: { x: prevBtnX, y: playBtnY, size: prevButtonSize },
//     nextBtn: { x: nextBtnX, y: playBtnY, size: nextButtonSize },
//     speedControl: { x: speedControlX, y: speedControlY, size: speedControlWidth },
//     singleModeControl: { x: singleControlX, y: speedControlY + speedControlSize - singleControlSize / 2 },
//   };
// }

export interface TimelineOptions {}

export class Timeline {}

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
