import ShapeGroup from "../models/Layer/ShapeGroup";
import { pathToShapeGroup, Svgson } from "../parser/svgson";
export var createClipPathMask = function createClipPathMask(clipPath) {
  if (clipPath.startsWith('path')) {
    // Get path in clip-path, like: path("M0")
    var path = clipPath.slice(6, -2);
    var shapeGroupType = pathToShapeGroup(path);
    var shapePaths = Svgson.shapeGroupDataToLayers(shapeGroupType);
    var shapeGroup = new ShapeGroup(shapeGroupType.frame);
    shapeGroup.addLayers(shapePaths);
    shapeGroup.hasClippingMask = true;
    return shapeGroup;
  }
  return null;
};