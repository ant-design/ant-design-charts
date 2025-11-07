import * as CSS from 'csstype';
import {NanoRenderer} from '../types/nano';

type TLength = string | number;

export interface Atoms {
    // Positioning

    /**
     * Short for `position` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    pos?: CSS.Property.Position;

    /**
     * Short for `top` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    t?: CSS.Property.Top<TLength>;

    /**
     * Short for `right` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    r?: CSS.Property.Right<TLength>;

    /**
     * Short for `bottom` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    b?: CSS.Property.Bottom<TLength>;

    /**
     * Short for `left` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    l?: CSS.Property.Left<TLength>;

    /**
     * Short for `z-index` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    z?: CSS.Property.ZIndex;

    // Layout (box model)

    /**
     * Short for `display` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    d?: CSS.Property.Display;

    /**
     * Short for `visibility` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    vis?: CSS.Property.Visibility;

    /**
     * Short for `width` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    w?: CSS.Property.Width<TLength>;

    /**
     * Short for `min-width` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    minW?: CSS.Property.MinWidth<TLength>;

    /**
     * Short for `max-width` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    maxW?: CSS.Property.MaxWidth<TLength>;

    /**
     * Short for `height` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    h?: CSS.Property.Height<TLength>;

    /**
     * Short for `min-height` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    minH?: CSS.Property.MinHeight<TLength>;

    /**
     * Short for `max-height` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    maxH?: CSS.Property.MaxHeight<TLength>;

    /**
     * Short for `overflow` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    ov?: CSS.Property.Overflow;

    /**
     * Short for `overflow-x` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    ovx?: CSS.Property.OverflowX;

    /**
     * Short for `overflow-y` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    ovy?: CSS.Property.OverflowX;

    /**
     * Short for `box-sizing` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bxz?: CSS.Property.BoxSizing;

    /**
     * Short for `clip` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    cl?: CSS.Property.Clip;

    /**
     * Short for `clip-path` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    clp?: CSS.Property.ClipPath;

    /**
     * Short for `table-layout` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    clr?: CSS.Property.Clear;

    /**
     * Short for `table-layout` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    tbl?: CSS.Property.TableLayout;

    // Flexbox

    /**
     * Short for `flex` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    fl?: CSS.Property.Flex<TLength>;

    /**
     * Short for `flex-direction` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    fld?: CSS.Property.FlexDirection;

    /**
     * Short for `flex-grow` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    flg?: CSS.Property.FlexGrow;

    /**
     * Short for `flex-shrink` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    fls?: CSS.Property.FlexShrink;

    /**
     * Short for `flex-basis` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    flb?: CSS.Property.FlexBasis<TLength>;

    /**
     * Short for `flex-wrap` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    flw?: CSS.Property.FlexWrap;

    /**
     * Short for `justify-content` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    jc?: CSS.Property.JustifyContent;

    /**
     * Short for `align-items` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    ai?: CSS.Property.AlignItems;

    /**
     * Short for `align-content` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    ac?: CSS.Property.AlignContent;

    /**
     * Short for `align-self` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    as?: CSS.Property.AlignSelf;

    // Margins

    /**
     * Short for `margin` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    mr?: CSS.Property.Margin<TLength>;

    /**
     * Short for `margin-top` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    mrt?: CSS.Property.MarginTop<TLength>;

    /**
     * Short for `margin-right` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    mrr?: CSS.Property.MarginRight<TLength>;

    /**
     * Short for `margin-bottom` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    mrb?: CSS.Property.MarginBottom<TLength>;

    /**
     * Short for `margin-left` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    mrl?: CSS.Property.MarginLeft<TLength>;

    /**
     * Same as `mr`.
     * @deprecated Use `mr` instead.
     */
    mar?: CSS.Property.Margin<TLength>;

    /**
     * Same as `mrt`.
     * @deprecated Use `mrt` instead.
     */
    mart?: CSS.Property.MarginTop<TLength>;

    /**
     * Same as `mrr`.
     * @deprecated Use `mrr` instead.
     */
    marr?: CSS.Property.MarginRight<TLength>;

    /**
     * Same as `mrb`.
     * @deprecated Use `mrb` instead.
     */
    marb?: CSS.Property.MarginBottom<TLength>;

    /**
     * Same as `mrl`.
     * @deprecated Use `mrl` instead.
     */
    marl?: CSS.Property.MarginLeft<TLength>;

    // Paddings

    /**
     * Short for `padding` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    pd?: CSS.Property.Padding<TLength>;

    /**
     * Short for `padding-top` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    pdt?: CSS.Property.PaddingTop<TLength>;

    /**
     * Short for `padding-right` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    pdr?: CSS.Property.PaddingRight<TLength>;

    /**
     * Short for `padding-bottom` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    pdb?: CSS.Property.PaddingBottom<TLength>;

    /**
     * Short for `padding-left` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    pdl?: CSS.Property.PaddingLeft<TLength>;

    /**
     * Same as `pd`.
     * @deprecated Use `pd` instead.
     */
    pad?: CSS.Property.Padding<TLength>;

    /**
     * Same as `pdt`.
     * @deprecated Use `pdt` instead.
     */
    padt?: CSS.Property.PaddingTop<TLength>;

    /**
     * Same as `pdr`.
     * @deprecated Use `pdr` instead.
     */
    padr?: CSS.Property.PaddingRight<TLength>;

    /**
     * Same as `pdb`.
     * @deprecated Use `pdb` instead.
     */
    padb?: CSS.Property.PaddingBottom<TLength>;

    /**
     * Same as `pdl`.
     * @deprecated Use `pdl` instead.
     */
    padl?: CSS.Property.PaddingLeft<TLength>;

    // Borders

    /**
     * Short for `border` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bd?: CSS.Property.BorderBottom<TLength>;

    /**
     * Short for `border-top` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bdt?: CSS.Property.BorderTop<TLength>;

    /**
     * Short for `border-right` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bdr?: CSS.Property.BorderRight<TLength>;

    /**
     * Short for `border-bottom` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bdb?: CSS.Property.BorderBottom<TLength>;

    /**
     * Short for `border-left` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bdl?: CSS.Property.BorderLeft<TLength>;

    /**
     * Short for `border-radius` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bdrad?: CSS.Property.BorderRadius<TLength>;

    /**
     * Short for `border-color` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bdc?: CSS.Property.BorderColor;

    /**
     * Short for `border-style` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bds?: CSS.Property.BorderStyle;

    /**
     * Short for `outline` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    out?: CSS.Property.Outline<TLength>;

    /**
     * Short for `box-shadow` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bxsh?: CSS.Property.BoxShadow;

    // Colors

    /**
     * Short for `color` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    col?: CSS.Property.Color;

    /**
     * Short for `opacity` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    op?: number | string;

    /**
     * Short for `background` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bg?: CSS.Property.Background<TLength>;

    /**
     * Short for `background-color` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bgc?: CSS.Property.BackgroundColor;

    /**
     * Short for `background-image` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bgi?: CSS.Property.BackgroundImage;

    /**
     * Short for `background-repeat` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bgr?: CSS.Property.BackgroundRepeat;

    /**
     * Short for `background-attachment` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bga?: CSS.Property.BackgroundAttachment;

    /**
     * Short for `background-position` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bgp?: CSS.Property.BackgroundPosition<TLength>;

    /**
     * Short for `background-size` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bgs?: CSS.Property.BackgroundSize<TLength>;

    /**
     * Short for `background-origin` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bgo?: CSS.Property.BackgroundOrigin;

    /**
     * Short for `background-clip` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bgcl?: CSS.Property.BackgroundClip;

    /**
     * Short for `backdrop-filter` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bdfl?: CSS.Property.BackdropFilter;

    /**
     * Short for `backface-visibility` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    bfvis?: CSS.Property.BackfaceVisibility;

    // Text

    /**
     * Short for `font` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    f?: CSS.Property.Font;

    /**
     * Short for `font-size` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    fz?: CSS.Property.FontSize<TLength>;

    /**
     * Short for `font-style` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    fs?: CSS.Property.FontStyle;

    /**
     * Short for `font-weight` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    fw?: CSS.Property.FontWeight;

    /**
     * Short for `font-family` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    ff?: CSS.Property.FontFamily;

    /**
     * Short for `text-align` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    ta?: CSS.Property.TextAlign;

    /**
     * Short for `text-decoration` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    td?: CSS.Property.TextDecoration<TLength>;

    /**
     * Short for `text-transform` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    tt?: CSS.Property.TextTransform;

    /**
     * Short for `text-shadow` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    ts?: CSS.Property.TextShadow;

    /**
     * Short for `text-overflow` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    tov?: CSS.Property.TextOverflow;

    /**
     * Short for `word-wrap` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    ww?: CSS.Property.WordWrap;

    /**
     * Short for `letter-spacing` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    lts?: CSS.Property.LetterSpacing<TLength>;

    /**
     * Short for `white-space` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    ws?: CSS.Property.WhiteSpace;

    /**
     * Short for `line-height` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    lh?: CSS.Property.LineHeight<TLength>;

    /**
     * Short for `vertical-align` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    va?: CSS.Property.VerticalAlign<TLength>;

    // Pointer

    /**
     * Short for `cursor` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    cur?: CSS.Property.Cursor;

    /**
     * Short for `pointer-events` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    pe?: CSS.Property.PointerEvents;

    /**
     * Short for `user-select` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    us?: CSS.Property.UserSelect;

    // Animations

    /**
     * Short for `animation` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    an?: CSS.Property.Animation;

    /**
     * Short for `animation-name` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    ann?: CSS.Property.AnimationName;

    /**
     * Short for `animation-duration` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    and?: CSS.Property.AnimationDuration;

    /**
     * Short for `animation-fill-mode` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    anf?: CSS.Property.AnimationFillMode;

    /**
     * Short for `animation-iteration-count` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    anit?: CSS.Property.AnimationIterationCount;

    /**
     * Short for `animation-play-state` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    anp?: CSS.Property.AnimationPlayState;

    /**
     * Short for `animation-timing-function` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    ant?: CSS.Property.AnimationTimingFunction;

    /**
     * Short for `transition` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    trs?: CSS.Property.Transition;

    /**
     * Short for `transform` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    tr?: CSS.Property.Transform;

    // SVG

    /**
     * Short for `stroke` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    st?: CSS.Property.Stroke;

    /**
     * Short for `stroke-width` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    stw?: CSS.Property.StrokeWidth<TLength>;

    /**
     * Short for `stroke-linecap` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    stl?: CSS.Property.StrokeLinecap;

    // Other

    /**
     * Short for `list-style` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    ls?: CSS.Property.ListStyle;

    /**
     * Short for `content` property.
     * Requires [`atoms` addon](https://github.com/streamich/nano-css/blob/master/docs/atoms.md).
     */
    con?: CSS.Property.Content;
}

export function addon(nano: NanoRenderer);
