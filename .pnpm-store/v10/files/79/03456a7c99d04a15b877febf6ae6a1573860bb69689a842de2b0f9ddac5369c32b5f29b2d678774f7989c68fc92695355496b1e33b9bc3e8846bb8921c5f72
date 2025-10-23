"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultRuleData = exports.defaultNodeStyle = exports.defaultGradient = exports.defaultExportOptions = exports.defaultContextSettings = exports.defaultColorControls = exports.defaultBorderOptions = void 0;
var _types = require("../types");
var _SketchBorderOptions = _interopRequireDefault(require("./Style/SketchBorderOptions"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const defaultExportOptions = {
  _class: 'exportOptions',
  includedLayerIds: [],
  layerOptions: 0,
  shouldTrim: false,
  exportFormats: []
};

/**
 * SKetch 默认的圆角选项
 * */
exports.defaultExportOptions = defaultExportOptions;
const defaultBorderOptions = new _SketchBorderOptions.default().toSketchJSON();

/**
 * SKetch默认的色彩控制
 * */
exports.defaultBorderOptions = defaultBorderOptions;
const defaultColorControls = {
  _class: 'colorControls',
  isEnabled: false,
  brightness: 0,
  contrast: 1,
  hue: 0,
  saturation: 1
};

/**
 * SKetch 默认规则数据
 * */
exports.defaultColorControls = defaultColorControls;
const defaultRuleData = {
  _class: 'rulerData',
  base: 0,
  guides: []
};

/**
 * SKetch 默认blend 样式
 * */
exports.defaultRuleData = defaultRuleData;
const defaultContextSettings = {
  _class: 'graphicsContextSettings',
  blendMode: _types.SketchFormat.BlendMode.Normal,
  opacity: 1
};
exports.defaultContextSettings = defaultContextSettings;
const defaultGradient = {
  _class: 'gradient',
  elipseLength: 0,
  from: '0.5 0',
  to: '0.5 0',
  stops: [],
  gradientType: _types.SketchFormat.GradientType.Linear
};
exports.defaultGradient = defaultGradient;
const defaultNodeStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  backgroundImage: 'none',
  borderWidth: '0px',
  boxShadow: 'none'
  // verticalAlign: 'baseline',
};
exports.defaultNodeStyle = defaultNodeStyle;