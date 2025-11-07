"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _symbolParams = require("../constraints/symbolParams");
var _models = require("../models");
var _utils = require("../utils/utils");
var _adjustSymbolParams = _interopRequireDefault(require("./adjustSymbolParams"));
var _nodeToGroup = _interopRequireDefault(require("./nodeToGroup"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * 解析为 Symbol
 */
var _default = async (node, options) => {
  if (!node) throw Error('解析对象不存在 请检查传入对象');
  const group = await (0, _nodeToGroup.default)(node);
  const symbol = new _models.SymbolMaster({
    x: group.x,
    y: group.y,
    width: group.width,
    height: group.height
  });
  symbol.style = group.style;
  symbol.nodeType = group.nodeType;
  symbol.className = group.className;
  symbol.name = group.name;
  if (group.class !== 'group') {
    symbol.addLayer(group);
  } else {
    symbol.addLayers(group.layers);
  }
  if (options) {
    const {
      symbolLayout,
      handleSymbol,
      layerParams
    } = options;
    if (symbolLayout) {
      symbol.setGroupLayout(symbolLayout);
    }
    if (handleSymbol) {
      handleSymbol(symbol);
    }
    if (layerParams) {
      // 调整 symbol 的 layout 类型
      (0, _adjustSymbolParams.default)(symbol, {
        layerParams
      });
    }
  }

  /**
   * 递归添加 Override
   * @param layer
   */
  const addOverride = layer => {
    if (layer.layers.length > 0) {
      layer.layers.forEach(addOverride);
    }
    switch (layer.class) {
      case 'text':
        // 对所有的文本都添加
        symbol.addOverride(layer.id, 'text');
        break;
      case 'bitmap':
        // 对所有的图片都添加 override
        symbol.addOverride(layer.id, 'image');
        break;
      default:
    }
  };

  // 处理 override
  symbol.layers.forEach(addOverride);

  /**
   * 设置一些内置的的 symbol 配置项
   */
  _symbolParams.defaultSymbolParamsList.forEach(paramsList => {
    (0, _adjustSymbolParams.default)(symbol, paramsList);
  });
  (0, _utils.checkNoNull)(symbol.frame);
  return symbol;
};
exports.default = _default;