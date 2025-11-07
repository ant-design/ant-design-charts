"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseToGroup = void 0;
var _models = require("../models");
var _name = require("../utils/name");
const parseToGroup = node => {
  const bcr = node.getBoundingClientRect();
  const x = bcr.left;
  const y = bcr.top;
  const width = bcr.right - bcr.left;
  const height = bcr.bottom - bcr.top;
  const styles = getComputedStyle(node);
  const {
    opacity
  } = styles;
  const group = new _models.Group({
    x,
    y,
    width,
    height
  });
  const groupStyle = new _models.Style();
  groupStyle.opacity = opacity;
  group.style = groupStyle;

  // Set the group name to the node's name, unless there is a name provider in the options
  group.name = (0, _name.getName)(node.nodeName);
  group.mapBasicInfo(node);
  return group;
};
exports.parseToGroup = parseToGroup;