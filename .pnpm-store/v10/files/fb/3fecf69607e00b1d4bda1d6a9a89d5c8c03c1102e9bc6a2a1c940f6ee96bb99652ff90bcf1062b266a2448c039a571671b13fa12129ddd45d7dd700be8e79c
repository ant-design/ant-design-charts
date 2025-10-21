"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroupLayout = exports.calcResizingConstraint = exports.GroupLayout = void 0;
var _types = require("../types");
const containsAllItems = (needles, haystack) => needles.every(needle => haystack.includes(needle));
const noHeight = [_types.ResizingConstraint.Top, _types.ResizingConstraint.Bottom, _types.ResizingConstraint.Height];
const noWidth = [_types.ResizingConstraint.Left, _types.ResizingConstraint.Right, _types.ResizingConstraint.Width];

/**
 * 计算 Resizing 变量
 */
const calcResizingConstraint = (...args) => {
  const validValues = Object.values(_types.ResizingConstraint);
  if (!args.every(arg => validValues.includes(arg))) {
    throw new Error('Unknown resizing constraint');
  } else if (containsAllItems(noHeight, args)) {
    throw new Error("Can't fix height when top & bottom are fixed");
  } else if (containsAllItems(noWidth, args)) {
    throw new Error("Can't fix width when left & right are fixed");
  }
  return args.length > 0 ?
  // eslint-disable-next-line no-bitwise
  args.reduce((acc, item) => acc & item, args[0]) : _types.ResizingConstraint.None;
};

/**
 * 智能布局参数
 */
exports.calcResizingConstraint = calcResizingConstraint;
const GroupLayout = {
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
exports.GroupLayout = GroupLayout;
const getGroupLayout = layoutType => {
  switch (layoutType) {
    case GroupLayout.LEFT_TO_RIGHT:
      {
        return {
          _class: _types.SketchFormat.ClassValue.MSImmutableInferredGroupLayout,
          axis: _types.SketchFormat.InferredLayoutAxis.Horizontal,
          layoutAnchor: _types.SketchFormat.InferredLayoutAnchor.Min
        };
      }
    case GroupLayout.HORIZONTALLY_CENTER:
      {
        return {
          _class: _types.SketchFormat.ClassValue.MSImmutableInferredGroupLayout,
          axis: _types.SketchFormat.InferredLayoutAxis.Horizontal,
          layoutAnchor: _types.SketchFormat.InferredLayoutAnchor.Middle
        };
      }
    case GroupLayout.RIGHT_TO_LEFT:
      {
        return {
          _class: _types.SketchFormat.ClassValue.MSImmutableInferredGroupLayout,
          axis: _types.SketchFormat.InferredLayoutAxis.Horizontal,
          layoutAnchor: _types.SketchFormat.InferredLayoutAnchor.Max
        };
      }
    case GroupLayout.TOP_TO_BOTTOM:
      {
        return {
          _class: _types.SketchFormat.ClassValue.MSImmutableInferredGroupLayout,
          axis: _types.SketchFormat.InferredLayoutAxis.Vertical,
          layoutAnchor: _types.SketchFormat.InferredLayoutAnchor.Min
        };
      }
    case GroupLayout.VERTICALLY_CENTER:
      {
        return {
          _class: _types.SketchFormat.ClassValue.MSImmutableInferredGroupLayout,
          axis: _types.SketchFormat.InferredLayoutAxis.Vertical,
          layoutAnchor: _types.SketchFormat.InferredLayoutAnchor.Middle
        };
      }
    case GroupLayout.BOTTOM_TO_TOP:
      {
        return {
          _class: _types.SketchFormat.ClassValue.MSImmutableInferredGroupLayout,
          axis: _types.SketchFormat.InferredLayoutAxis.Vertical,
          layoutAnchor: _types.SketchFormat.InferredLayoutAnchor.Max
        };
      }
    default:
      return {
        _class: _types.SketchFormat.ClassValue.MSImmutableFreeformGroupLayout
      };
  }
};
exports.getGroupLayout = getGroupLayout;