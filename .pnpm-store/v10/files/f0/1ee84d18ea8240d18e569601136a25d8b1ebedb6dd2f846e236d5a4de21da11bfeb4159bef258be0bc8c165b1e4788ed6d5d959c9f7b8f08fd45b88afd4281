import type { GenericAnimation, StandardAnimationOption } from '../../animation';
import { parseAnimationOption } from '../../animation';
import { Component } from '../../core';
import { Group } from '../../shapes';
import type { Selection } from '../../util';
import { ifShow, sampling, select } from '../../util';
import { AXIS_BASE_DEFAULT_ATTR, CLASS_NAMES } from './constant';
import { renderGrid } from './guides/grid';
import { renderLabels } from './guides/labels';
import { renderAxisLine } from './guides/line';
import { renderTicks } from './guides/ticks';
import { renderTitle } from './guides/title';
import type { AxisDatum, AxisOptions, AxisStyleProps, RequiredAxisStyleProps } from './types';

export type {
  ArcAxisOptions,
  ArcAxisStyleProps,
  AxisOptions,
  AxisStyleProps,
  LinearAxisOptions,
  LinearAxisStyleProps,
} from './types';

function renderAxisMain(
  attributes: RequiredAxisStyleProps,
  container: Selection,
  data: AxisDatum[],
  animation: StandardAnimationOption
) {
  const { showLine, showTick, showLabel } = attributes;
  /** line */
  const lineGroup = container.maybeAppendByClassName(CLASS_NAMES.lineGroup, 'g');
  const lineTransitions =
    ifShow(showLine!, lineGroup, (group) => {
      return renderAxisLine(group, attributes, animation);
    }) || [];

  /** tick */
  const tickGroup = container.maybeAppendByClassName(CLASS_NAMES.tickGroup, 'g');
  const tickTransitions =
    ifShow(showTick!, tickGroup, (group) => {
      return renderTicks(group, data, attributes, animation);
    }) || [];

  /** label */
  const labelGroup = container.maybeAppendByClassName(CLASS_NAMES.labelGroup, 'g');
  const labelTransitions =
    ifShow(showLabel!, labelGroup, (group) => {
      return renderLabels(group, data, attributes, animation, container.node());
    }) || [];

  return [...lineTransitions, ...tickTransitions, ...labelTransitions].filter((t) => !!t);
}

export class Axis extends Component<AxisStyleProps> {
  constructor(options: AxisOptions) {
    super(options, AXIS_BASE_DEFAULT_ATTR);
  }

  render(attributes: RequiredAxisStyleProps, container: Group, specificAnimation?: GenericAnimation) {
    const { titleText, data, animate, showTitle, showGrid, dataThreshold, truncRange } = attributes;
    const sampledData = sampling(data, dataThreshold).filter(({ value }) => {
      if (truncRange && value > truncRange[0] && value < truncRange[1]) return false;
      return true;
    });

    const finalAnimation = parseAnimationOption(specificAnimation === undefined ? animate : specificAnimation);

    /** grid */
    const gridGroup = select(container).maybeAppendByClassName(CLASS_NAMES.gridGroup, 'g');
    const gridTransitions =
      ifShow(showGrid!, gridGroup, (group) => renderGrid(group, sampledData, attributes, finalAnimation)) || [];

    /** main group */
    const mainGroup = select(container).maybeAppendByClassName(CLASS_NAMES.mainGroup, 'g');

    if (titleText && ((!this.initialized && finalAnimation.enter) || (this.initialized && finalAnimation.update))) {
      renderAxisMain(attributes, select(this.offscreenGroup), sampledData, parseAnimationOption(false));
    }
    // render
    const mainTransitions = renderAxisMain(attributes, select(mainGroup.node()), sampledData, finalAnimation);
    /** title */
    const titleGroup = select(container).maybeAppendByClassName(CLASS_NAMES.titleGroup, 'g');
    const titleTransitions =
      ifShow(showTitle, titleGroup, (group) => {
        return renderTitle(group, this, attributes, finalAnimation);
      }) || [];
    return [...gridTransitions, ...mainTransitions, ...titleTransitions].flat().filter((t) => !!t);
  }
}
