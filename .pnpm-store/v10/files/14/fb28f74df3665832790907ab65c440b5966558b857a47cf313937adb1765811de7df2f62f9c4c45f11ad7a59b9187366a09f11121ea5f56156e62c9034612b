import Color from 'color';
export var parserToColor = function parserToColor(node) {
  var color = getComputedStyle(node).backgroundColor;
  return {
    name: node.className || node.id || node.nodeName,
    color: new Color(color).hex()
  };
};

/**
 * 将一组节点转为面板颜色
 * @param paletteName
 * @param nodes
 */
export var parserToColorPalette = function parserToColorPalette(nodes) {
  var paletteName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'palette';
  return nodes.map(function (node, index) {
    var color = getComputedStyle(node).backgroundColor;
    return {
      name: "".concat(paletteName, "-").concat(index + 1),
      color: new Color(color).hex()
    };
  });
};