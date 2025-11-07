"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _types = require("../../types");
var _BaseLayer = _interopRequireDefault(require("../Base/BaseLayer"));
var _utils = require("../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Page extends _BaseLayer.default {
  constructor(params) {
    super(_types.SketchFormat.ClassValue.Page, {
      x: 0,
      y: 0,
      ...params
    });
  }
  toSketchJSON() {
    return {
      horizontalRulerData: _utils.defaultRuleData,
      verticalRulerData: _utils.defaultRuleData,
      hasClickThrough: true,
      _class: 'page',
      booleanOperation: _types.SketchFormat.BooleanOperation.None,
      isTemplate: false,
      frame: this.frame.toSketchJSON(),
      exportOptions: _utils.defaultExportOptions,
      style: this.style.toSketchJSON(),
      isFixedToViewport: false,
      do_objectID: this.id,
      isFlippedHorizontal: false,
      isFlippedVertical: false,
      isLocked: this.locked,
      isVisible: true,
      layerListExpandedType: 0,
      name: this.name || this.class,
      nameIsFixed: false,
      resizingConstraint: this.resizingConstraint,
      resizingType: 0,
      rotation: 0,
      shouldBreakMaskChain: false,
      layers: this.layers.map(layer => layer.toSketchJSON()),
      clippingMaskMode: 0,
      hasClippingMask: this.hasClippingMask,
      userInfo: this.userInfo
    };
  }
}
var _default = Page;
exports.default = _default;