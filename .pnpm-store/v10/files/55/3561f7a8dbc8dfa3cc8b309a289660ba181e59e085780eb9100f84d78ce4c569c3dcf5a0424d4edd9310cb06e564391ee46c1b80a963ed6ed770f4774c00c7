import { Group, Style } from "../models";
import { getName } from "../utils/name";
export var parseToGroup = function parseToGroup(node) {
  var bcr = node.getBoundingClientRect();
  var x = bcr.left;
  var y = bcr.top;
  var width = bcr.right - bcr.left;
  var height = bcr.bottom - bcr.top;
  var styles = getComputedStyle(node);
  var opacity = styles.opacity;
  var group = new Group({
    x: x,
    y: y,
    width: width,
    height: height
  });
  var groupStyle = new Style();
  groupStyle.opacity = opacity;
  group.style = groupStyle;

  // Set the group name to the node's name, unless there is a name provider in the options
  group.name = getName(node.nodeName);
  group.mapBasicInfo(node);
  return group;
};