"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _types = require("../../types");
var _BaseLayer = _interopRequireDefault(require("../Base/BaseLayer"));
var _utils = require("../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class SymbolInstance extends _BaseLayer.default {
  constructor({
    x,
    y,
    width,
    height,
    symbolID
  }) {
    super(_types.SketchFormat.ClassValue.SymbolInstance, {
      width,
      y,
      x,
      height
    });
    this.symbolID = symbolID;
  }
  symbolID;
  shouldBreakMaskChain = false;
  toSketchJSON() {
    return {
      _class: 'symbolInstance',
      frame: this.frame.toSketchJSON(),
      booleanOperation: _types.SketchFormat.BooleanOperation.None,
      isTemplate: false,
      do_objectID: this.id,
      symbolID: this.symbolID,
      exportOptions: _utils.defaultExportOptions,
      nameIsFixed: this.nameIsFixed,
      shouldBreakMaskChain: this.shouldBreakMaskChain,
      resizingConstraint: 1,
      resizingType: 1,
      isFixedToViewport: false,
      isFlippedHorizontal: false,
      isFlippedVertical: false,
      isLocked: this.locked,
      name: this.name,
      rotation: 0,
      layerListExpandedType: _types.SketchFormat.LayerListExpanded.Undecided,
      isVisible: true,
      overrideValues: [],
      scale: 1,
      horizontalSpacing: 0,
      verticalSpacing: 0
    };
  }
}
var _default = SymbolInstance;
exports.default = _default;