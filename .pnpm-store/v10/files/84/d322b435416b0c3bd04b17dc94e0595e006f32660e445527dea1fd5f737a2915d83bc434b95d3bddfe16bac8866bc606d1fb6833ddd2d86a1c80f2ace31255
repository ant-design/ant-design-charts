"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClipPathMask = void 0;
var _ShapeGroup = _interopRequireDefault(require("../models/Layer/ShapeGroup"));
var _svgson = require("../parser/svgson");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const createClipPathMask = clipPath => {
  if (clipPath.startsWith('path')) {
    // Get path in clip-path, like: path("M0")
    const path = clipPath.slice(6, -2);
    const shapeGroupType = (0, _svgson.pathToShapeGroup)(path);
    const shapePaths = _svgson.Svgson.shapeGroupDataToLayers(shapeGroupType);
    const shapeGroup = new _ShapeGroup.default(shapeGroupType.frame);
    shapeGroup.addLayers(shapePaths);
    shapeGroup.hasClippingMask = true;
    return shapeGroup;
  }
  return null;
};
exports.createClipPathMask = createClipPathMask;