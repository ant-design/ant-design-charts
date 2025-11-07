import { ResizingConstraint, SketchFormat } from "../types";
var containsAllItems = function containsAllItems(needles, haystack) {
  return needles.every(function (needle) {
    return haystack.includes(needle);
  });
};
var noHeight = [ResizingConstraint.Top, ResizingConstraint.Bottom, ResizingConstraint.Height];
var noWidth = [ResizingConstraint.Left, ResizingConstraint.Right, ResizingConstraint.Width];

/**
 * 计算 Resizing 变量
 */
export var calcResizingConstraint = function calcResizingConstraint() {
  var validValues = Object.values(ResizingConstraint);
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  if (!args.every(function (arg) {
    return validValues.includes(arg);
  })) {
    throw new Error('Unknown resizing constraint');
  } else if (containsAllItems(noHeight, args)) {
    throw new Error("Can't fix height when top & bottom are fixed");
  } else if (containsAllItems(noWidth, args)) {
    throw new Error("Can't fix width when left & right are fixed");
  }
  return args.length > 0 ?
  // eslint-disable-next-line no-bitwise
  args.reduce(function (acc, item) {
    return acc & item;
  }, args[0]) : ResizingConstraint.None;
};

/**
 * 智能布局参数
 */
export var GroupLayout = {
  LEFT_TO_RIGHT: 'LEFT_TO_RIGHT',
  HORIZONTALLY_CENTER: 'HORIZONTALLY_CENTER',
  RIGHT_TO_LEFT: 'RIGHT_TO_LEFT',
  TOP_TO_BOTTOM: 'TOP_TO_BOTTOM',
  VERTICALLY_CENTER: 'VERTICALLY_CENTER',
  BOTTOM_TO_TOP: 'BOTTOM_TO_TOP'
};

/**
 * 获取布局参数
 * @param layoutType
 */
export var getGroupLayout = function getGroupLayout(layoutType) {
  switch (layoutType) {
    case GroupLayout.LEFT_TO_RIGHT:
      {
        return {
          _class: SketchFormat.ClassValue.MSImmutableInferredGroupLayout,
          axis: SketchFormat.InferredLayoutAxis.Horizontal,
          layoutAnchor: SketchFormat.InferredLayoutAnchor.Min
        };
      }
    case GroupLayout.HORIZONTALLY_CENTER:
      {
        return {
          _class: SketchFormat.ClassValue.MSImmutableInferredGroupLayout,
          axis: SketchFormat.InferredLayoutAxis.Horizontal,
          layoutAnchor: SketchFormat.InferredLayoutAnchor.Middle
        };
      }
    case GroupLayout.RIGHT_TO_LEFT:
      {
        return {
          _class: SketchFormat.ClassValue.MSImmutableInferredGroupLayout,
          axis: SketchFormat.InferredLayoutAxis.Horizontal,
          layoutAnchor: SketchFormat.InferredLayoutAnchor.Max
        };
      }
    case GroupLayout.TOP_TO_BOTTOM:
      {
        return {
          _class: SketchFormat.ClassValue.MSImmutableInferredGroupLayout,
          axis: SketchFormat.InferredLayoutAxis.Vertical,
          layoutAnchor: SketchFormat.InferredLayoutAnchor.Min
        };
      }
    case GroupLayout.VERTICALLY_CENTER:
      {
        return {
          _class: SketchFormat.ClassValue.MSImmutableInferredGroupLayout,
          axis: SketchFormat.InferredLayoutAxis.Vertical,
          layoutAnchor: SketchFormat.InferredLayoutAnchor.Middle
        };
      }
    case GroupLayout.BOTTOM_TO_TOP:
      {
        return {
          _class: SketchFormat.ClassValue.MSImmutableInferredGroupLayout,
          axis: SketchFormat.InferredLayoutAxis.Vertical,
          layoutAnchor: SketchFormat.InferredLayoutAnchor.Max
        };
      }
    default:
      return {
        _class: SketchFormat.ClassValue.MSImmutableFreeformGroupLayout
      };
  }
};