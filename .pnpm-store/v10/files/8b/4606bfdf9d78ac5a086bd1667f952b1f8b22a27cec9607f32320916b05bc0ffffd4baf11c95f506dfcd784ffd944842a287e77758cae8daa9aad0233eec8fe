import { get } from '@antv/util';
import type { AnimationResult, StandardAnimationOption } from '../../../animation';
import { transition } from '../../../animation';
import type { DisplayObject, Line } from '../../../shapes';
import type { Point, Vector2 } from '../../../types';
import {
  Selection,
  degToRad,
  keyframeInterpolate,
  omit,
  renderExtDo,
  scaleToPixel,
  subStyleProps,
} from '../../../util';
import { CLASS_NAMES } from '../constant';
import type { RequiredArcAxisStyleProps, RequiredAxisStyleProps, RequiredLinearAxisStyleProps } from '../types';
import { getLineAngle, getLineTangentVector } from './utils';

type LineDatum = {
  line: [Vector2, Vector2];
  className: string;
};

export function getLinearValuePos(value: number, attr: RequiredLinearAxisStyleProps): Vector2 {
  const {
    startPos: [sx, sy],
    endPos: [ex, ey],
  } = attr;
  const [dx, dy] = [ex - sx, ey - sy];
  return [sx + dx * value, sy + dy * value];
}

export function getArcValuePos(value: number, attr: RequiredArcAxisStyleProps): Vector2 {
  const {
    radius,
    center: [cx, cy],
  } = attr;
  const angle = degToRad(getLineAngle(value, attr));
  return [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)];
}

export function getValuePos(value: number, attr: RequiredAxisStyleProps) {
  if (attr.type === 'linear') return getLinearValuePos(value, attr);
  return getArcValuePos(value, attr);
}

export function isAxisHorizontal(attr: RequiredLinearAxisStyleProps): boolean {
  return getLineTangentVector(0, attr)[1] === 0;
}

export function isAxisVertical(attr: RequiredLinearAxisStyleProps): boolean {
  return getLineTangentVector(0, attr)[0] === 0;
}

function isCircle(startAngle: number, endAngle: number) {
  return endAngle - startAngle === 360;
}

function getArcPath(startAngle: number, endAngle: number, cx: number, cy: number, radius: number) {
  const diffAngle = endAngle - startAngle;
  const [rx, ry] = [radius, radius];
  const [startAngleRadians, endAngleRadians] = [degToRad(startAngle), degToRad(endAngle)];
  const getPosByAngle = (angle: number) => [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)];

  const [x1, y1] = getPosByAngle(startAngleRadians);
  const [x2, y2] = getPosByAngle(endAngleRadians);

  if (isCircle(startAngle, endAngle)) {
    const middleAngleRadians = (endAngleRadians + startAngleRadians) / 2;
    const [xm, ym] = getPosByAngle(middleAngleRadians);
    return [
      ['M', x1, y1],
      ['A', rx, ry, 0, 1, 0, xm, ym],
      ['A', rx, ry, 0, 1, 0, x2, y2],
    ];
  }

  // 大小弧
  const large = diffAngle > 180 ? 1 : 0;
  // 1-顺时针 0-逆时针
  const sweep = startAngle > endAngle ? 0 : 1;
  const isClosePath = false;

  return isClosePath
    ? `M${cx},${cy},L${x1},${y1},A${rx},${ry},0,${large},${sweep},${x2},${y2},L${cx},${cy}`
    : `M${x1},${y1},A${rx},${ry},0,${large},${sweep},${x2},${y2}`;
}

function getArcAttr(arc: DisplayObject) {
  const { startAngle, endAngle, center, radius } = arc.attributes;
  return [startAngle, endAngle, ...center, radius];
}

function renderArc(
  container: Selection,
  attr: RequiredArcAxisStyleProps,
  style: RequiredArcAxisStyleProps,
  animate: StandardAnimationOption
) {
  const { startAngle, endAngle, center, radius } = attr;

  return container
    .selectAll(CLASS_NAMES.line.class)
    .data([{ d: getArcPath(startAngle, endAngle, ...center, radius) }], (d, i) => i)
    .join(
      (enter) =>
        enter
          .append('path')
          .attr('className', CLASS_NAMES.line.name)
          .styles(attr)
          .styles({ d: (d: any) => d.d }),
      (update) =>
        update
          .transition(function () {
            const animation = keyframeInterpolate(
              this,
              getArcAttr(this),
              [startAngle, endAngle, ...center, radius],
              animate.update
            );
            if (animation) {
              const layout = () => {
                const data = get(this.attributes, '__keyframe_data__') as Parameters<typeof getArcPath>;
                this.style.d = getArcPath(...data);
              };
              animation.onframe = layout;
              animation.onfinish = layout;
            }
            return animation;
          })
          .styles(attr),
      (exit) => exit.remove()
    )
    .styles(style)
    .transitions();
}

function renderTruncation<T>(container: Selection, { truncRange, truncShape, lineExtension }: RequiredAxisStyleProps) {
  // TODO
}

function extendLine(startPos: Point, endPos: Point, range: [number, number] = [0, 0]) {
  const [[x1, y1], [x2, y2], [l1, l2]] = [startPos, endPos, range];
  const [x, y] = [x2 - x1, y2 - y1];
  const L = Math.sqrt(x ** 2 + y ** 2);
  const [s1, s2] = [-l1 / L, l2 / L];
  return [s1 * x, s1 * y, s2 * x, s2 * y];
}

function getLinePath(points: [Vector2, Vector2]) {
  const [[x1, y1], [x2, y2]] = points;
  return { x1, y1, x2, y2 };
}

function renderLinear(
  container: Selection,
  attr: RequiredLinearAxisStyleProps,
  style: RequiredLinearAxisStyleProps,
  animate: StandardAnimationOption
) {
  const { showTrunc, startPos, endPos, truncRange, lineExtension } = attr;
  const [[x1, y1], [x2, y2]] = [startPos, endPos];
  const [ox1, oy1, ox2, oy2] = lineExtension ? extendLine(startPos, endPos, lineExtension) : new Array(4).fill(0);
  const renderLine = (data: LineDatum[]) => {
    return container
      .selectAll(CLASS_NAMES.line.class)
      .data(data, (d, i) => i)
      .join(
        (enter) =>
          enter
            .append('line')
            .attr('className', (d: LineDatum) => `${CLASS_NAMES.line.name} ${d.className}`)
            .styles(style)
            .transition(function (d: LineDatum) {
              return transition(this, getLinePath(d.line), false);
            }),
        (update) =>
          update.styles(style).transition(function ({ line }: LineDatum) {
            return transition(this, getLinePath(line), animate.update);
          }),
        (exit) => exit.remove()
      )
      .transitions();
  };

  if (!showTrunc || !truncRange) {
    return renderLine([
      {
        line: [
          [x1 + ox1, y1 + oy1],
          [x2 + ox2, y2 + oy2],
        ],
        className: CLASS_NAMES.line.name,
      },
    ]);
  }
  const [r1, r2] = truncRange;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const [x3, y3] = [x1 + dx * r1, y1 + dy * r1];
  const [x4, y4] = [x1 + dx * r2, y1 + dy * r2];
  const animation = renderLine([
    {
      line: [
        [x1 + ox1, y1 + oy1],
        [x3, y3],
      ],
      className: CLASS_NAMES.lineFirst.name,
    },
    {
      line: [
        [x4, y4],
        [x2 + ox2, y2 + oy2],
      ],
      className: CLASS_NAMES.lineSecond.name,
    },
  ]);
  renderTruncation(container, attr);
  return animation;
}

function renderAxisArrow(
  container: Selection,
  type: 'linear' | 'arc',
  attr: RequiredAxisStyleProps,
  style: RequiredAxisStyleProps
) {
  const { showArrow, showTrunc, lineArrow, lineArrowOffset, lineArrowSize } = attr;

  let shapeToAddArrow: Selection;
  if (type === 'arc') shapeToAddArrow = container.select(CLASS_NAMES.line.class);
  else if (showTrunc) shapeToAddArrow = container.select(CLASS_NAMES.lineSecond.class);
  else shapeToAddArrow = container.select(CLASS_NAMES.line.class);
  if (!showArrow || !lineArrow || (attr.type === 'arc' && isCircle(attr.startAngle, attr.endAngle))) {
    const node = shapeToAddArrow.node<Line>();
    if (node) node.style.markerEnd = undefined;
    return;
  }
  const arrow = renderExtDo(lineArrow);
  arrow.attr(style);
  scaleToPixel(arrow, lineArrowSize!, true);
  shapeToAddArrow.style('markerEnd', arrow).style('markerEndOffset', -lineArrowOffset);
}

export function renderAxisLine(container: Selection, attr: RequiredAxisStyleProps, animate: StandardAnimationOption) {
  const { type } = attr;
  let animation: AnimationResult[];
  const style = subStyleProps<RequiredAxisStyleProps>(attr, 'line');

  if (type === 'linear')
    animation = renderLinear(
      container,
      attr as RequiredLinearAxisStyleProps,
      omit(style, 'arrow') as RequiredLinearAxisStyleProps,
      animate
    );
  else
    animation = renderArc(
      container,
      attr as RequiredArcAxisStyleProps,
      omit(style, 'arrow') as RequiredArcAxisStyleProps,
      animate
    );
  renderAxisArrow(container, type, attr, style);
  return animation;
}
