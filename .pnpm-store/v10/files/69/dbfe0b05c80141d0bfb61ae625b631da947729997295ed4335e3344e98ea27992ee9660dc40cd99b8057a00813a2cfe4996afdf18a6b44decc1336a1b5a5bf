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
import { applyClassName, getAxisClassName } from './utils/classname';
import { CLASSNAME_SUFFIX_MAP } from './classname-map';

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
  const { showLine, showTick, showLabel, classNamePrefix } = attributes;
  /** line */
  const lineGroup = container.maybeAppendByClassName(CLASS_NAMES.lineGroup, 'g');
  applyClassName(lineGroup, CLASS_NAMES.lineGroup, CLASSNAME_SUFFIX_MAP.lineGroup, classNamePrefix);
  const lineTransitions =
    ifShow(showLine!, lineGroup, (group) => {
      return renderAxisLine(group, attributes, animation);
    }) || [];

  /** tick */
  const tickGroup = container.maybeAppendByClassName(CLASS_NAMES.tickGroup, 'g');
  applyClassName(tickGroup, CLASS_NAMES.tickGroup, CLASSNAME_SUFFIX_MAP.tickGroup, classNamePrefix);
  const tickTransitions =
    ifShow(showTick!, tickGroup, (group) => {
      return renderTicks(group, data, attributes, animation);
    }) || [];

  /** label */
  const labelGroup = container.maybeAppendByClassName(CLASS_NAMES.labelGroup, 'g');
  applyClassName(labelGroup, CLASS_NAMES.labelGroup, CLASSNAME_SUFFIX_MAP.labelGroup, classNamePrefix);
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
    const { titleText, data, animate, showTitle, showGrid, dataThreshold, truncRange, classNamePrefix } = attributes;

    // Set root container className
    const baseClassName = container.className || 'axis';
    if (classNamePrefix) {
      container.attr('className', `${baseClassName} ${classNamePrefix}axis`);
    } else if (!container.className) {
      container.attr('className', 'axis');
    }

    const sampledData = sampling(data, dataThreshold).filter(({ value }) => {
      if (truncRange && value > truncRange[0] && value < truncRange[1]) return false;
      return true;
    });

    const finalAnimation = parseAnimationOption(specificAnimation === undefined ? animate : specificAnimation);

    /** grid */
    const gridGroup = select(container).maybeAppendByClassName(CLASS_NAMES.gridGroup, 'g');
    applyClassName(gridGroup, CLASS_NAMES.gridGroup, CLASSNAME_SUFFIX_MAP.gridGroup, classNamePrefix);
    const gridTransitions =
      ifShow(showGrid!, gridGroup, (group) => renderGrid(group, sampledData, attributes, finalAnimation)) || [];

    /** main group */
    const mainGroup = select(container).maybeAppendByClassName(CLASS_NAMES.mainGroup, 'g');
    applyClassName(mainGroup, CLASS_NAMES.mainGroup, CLASSNAME_SUFFIX_MAP.mainGroup, classNamePrefix);

    if (titleText && ((!this.initialized && finalAnimation.enter) || (this.initialized && finalAnimation.update))) {
      renderAxisMain(attributes, select(this.offscreenGroup), sampledData, parseAnimationOption(false));
    }
    // render
    const mainTransitions = renderAxisMain(attributes, select(mainGroup.node()), sampledData, finalAnimation);
    /** title */
    const titleGroup = select(container).maybeAppendByClassName(CLASS_NAMES.titleGroup, 'g');
    applyClassName(titleGroup, CLASS_NAMES.titleGroup, CLASSNAME_SUFFIX_MAP.titleGroup, classNamePrefix);
    const titleTransitions =
      ifShow(showTitle, titleGroup, (group) => {
        return renderTitle(group, this, attributes, finalAnimation);
      }) || [];
    return [...gridTransitions, ...mainTransitions, ...titleTransitions].flat().filter((t) => !!t);
  }
}
