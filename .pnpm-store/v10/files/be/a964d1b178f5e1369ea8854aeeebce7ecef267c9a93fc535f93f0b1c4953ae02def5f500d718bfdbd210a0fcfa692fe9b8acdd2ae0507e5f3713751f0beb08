import { ComponentOptions, Component, PrefixStyleProps } from '../../core';
import type { DisplayObject, GroupStyleProps, PathStyleProps, TextStyleProps } from '../../shapes';
import { Group } from '../../shapes';
import type { Selection } from '../../util';
import { classNames, ifShow, select, splitStyle, subStyleProps } from '../../util';
import { HANDLE_DEFAULT_CFG, HANDLE_ICON_DEFAULT_CFG, HANDLE_LABEL_DEFAULT_CFG } from './constant';

export type HandleType = 'start' | 'end';

export type IconStyleProps = PathStyleProps & {
  x?: number;
  y?: number;
  size?: number;
  radius?: number;
  shape?: string | ((type: HandleType) => DisplayObject);
  orientation?: 'horizontal' | 'vertical';
};

export type LabelStyleProps = Partial<TextStyleProps>;

export type HandleStyleProps = GroupStyleProps &
  PrefixStyleProps<LabelStyleProps, 'label'> &
  PrefixStyleProps<IconStyleProps, 'icon'> & {
    x?: number;
    y?: number;
    orientation?: IconStyleProps['orientation'];
    showLabel?: boolean;
    spacing?: number;
    type?: HandleType;
  };

export type HandleOptions = ComponentOptions<HandleStyleProps>;

const CLASS_NAMES = classNames(
  {
    labelGroup: 'label-group',
    label: 'label',
    iconGroup: 'icon-group',
    icon: 'icon',
    iconRect: 'icon-rect',
    iconLine: 'icon-line',
  },
  'handle'
);

class HandleIcon extends Component<IconStyleProps> {
  render(attributes: Required<IconStyleProps>, container: DisplayObject) {
    const { x, y, size = 10, radius = size / 4, orientation, ...iconStyle } = attributes;
    // 默认手柄
    const width = size!;
    const height = width * 2.4;

    const rect = select(container)
      .maybeAppendByClassName(CLASS_NAMES.iconRect, 'rect')
      .styles({
        ...iconStyle,
        width,
        height,
        radius,
        x: x - width / 2,
        y: y - height / 2,
        transformOrigin: 'center',
      });

    const x1 = x + (1 / 3) * width - width / 2;
    const x2 = x + (2 / 3) * width - width / 2;
    const y1 = y + (1 / 4) * height - height / 2;
    const y2 = y + (3 / 4) * height - height / 2;

    rect.maybeAppendByClassName(`${CLASS_NAMES.iconLine}-1`, 'line').styles({ x1, x2: x1, y1, y2, ...iconStyle });
    rect.maybeAppendByClassName(`${CLASS_NAMES.iconLine}-2`, 'line').styles({ x1: x2, x2, y1, y2, ...iconStyle });

    if (orientation === 'vertical') rect.node().style.transform = 'rotate(90)';
  }
}

export class Handle extends Component<HandleStyleProps> {
  private label!: Selection;

  private icon!: Selection;

  constructor(options: HandleOptions) {
    super(options, HANDLE_DEFAULT_CFG);
  }

  private renderLabel(container: Group) {
    const { x, y, showLabel } = this.attributes;
    const {
      x: labelX = 0,
      y: labelY = 0,
      transform,
      transformOrigin,
      ...style
    } = subStyleProps(this.attributes, 'label');
    const [labelStyle, groupStyle] = splitStyle(style, []);

    const labelGroup = select(container).maybeAppendByClassName(CLASS_NAMES.labelGroup, 'g').styles(groupStyle);

    // @ts-ignore
    const { text, ...rest } = { ...HANDLE_LABEL_DEFAULT_CFG, ...labelStyle };
    ifShow(!!showLabel, labelGroup, (group) => {
      this.label = group.maybeAppendByClassName(CLASS_NAMES.label, 'text').styles({
        ...rest,
        x: x + labelX,
        y: y + labelY,
        transform,
        transformOrigin,
        text: `${text}`,
      });

      /** avoid trigger event on label */
      this.label.on('mousedown', (e: MouseEvent) => {
        e.stopPropagation();
      });
      this.label.on('touchstart', (e: MouseEvent) => {
        e.stopPropagation();
      });
    });
  }

  private renderIcon(container: Group) {
    const { x, y, orientation, type } = this.attributes;
    const iconStyle = { x, y, orientation, ...HANDLE_ICON_DEFAULT_CFG, ...subStyleProps(this.attributes, 'icon') };
    const { iconShape = () => new HandleIcon({ style: iconStyle }) } = this.attributes;
    const iconGroup = select(container).maybeAppendByClassName(CLASS_NAMES.iconGroup, 'g');
    iconGroup
      .selectAll(CLASS_NAMES.icon.class)
      .data([iconShape])
      .join(
        (enter) =>
          enter
            .append(typeof iconShape === 'string' ? iconShape : () => iconShape(type))
            .attr('className', CLASS_NAMES.icon.name),
        (update) => update.update(iconStyle),
        (exit) => exit.remove()
      );
  }

  public render(attributes: HandleStyleProps, container: Group) {
    this.renderIcon(container);
    this.renderLabel(container);
  }
}
