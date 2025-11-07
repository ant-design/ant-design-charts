function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * 调整文本部分
 * @param layer 文本图册
 * @param param 文本参数
 */
var adjustText = function adjustText(layer, param) {
  var horizontalAlign = param.horizontalAlign,
    textBehaviour = param.textBehaviour,
    verticalAlign = param.verticalAlign;
  if (textBehaviour) {
    layer.sketchTextBehaviour = textBehaviour;
  }
  if (horizontalAlign) {
    layer.textStyle.textAlign = horizontalAlign;
  }
  if (verticalAlign) {
    layer.textStyle.verticalAlign = verticalAlign;
  }
};

/**
 * 调整配置项
 * 1.图层类型的布局模式
 * 2.图层类型的布局模式
 * @param layer
 * @param layout 布局类型
 * @param resizing 调整尺寸的约束条件
 */
var adjust = function adjust(layer, _ref) {
  var layout = _ref.layout,
    resizing = _ref.resizing;
  if (layout) {
    if (layer.class !== 'group') return;
    if (layout) {
      layer.setGroupLayout(layout);
    }
  }
  if (resizing) {
    layer.setResizingConstraint.apply(layer, _toConsumableArray(resizing));
  }
};

/**
 * 选择图层的方法
 * @param layer
 * @param selector
 */
var selectorLayer = function selectorLayer(layer, selector) {
  var _layer$className;
  switch (selector === null || selector === void 0 ? void 0 : selector.type) {
    case 'class':
      if (layer.class === (selector === null || selector === void 0 ? void 0 : selector.value)) return layer;
      return;
    case 'classname':
      if ((_layer$className = layer.className) !== null && _layer$className !== void 0 && _layer$className.includes(selector === null || selector === void 0 ? void 0 : selector.value)) return layer;
      return;
    case 'name':
      if (layer.name === (selector === null || selector === void 0 ? void 0 : selector.value)) return layer;
      return;
    case 'text':
      if (layer.class === 'text' && layer.text.includes(selector === null || selector === void 0 ? void 0 : selector.value)) return layer;
      break;
    case 'tag':
      if (layer.nodeType === (selector === null || selector === void 0 ? void 0 : selector.value)) return layer;
      break;
    default:
  }
};

/**
 * 调整单个图层的 配置项
 * @param layer
 * @param params
 */
var adjustGroupLayer = function adjustGroupLayer(layer, params) {
  if (layer.layers) {
    layer.layers.forEach(function (l) {
      return adjustGroupLayer(l, params);
    });
  }
  if (!params) return false;

  // 对每个传进来的参数进行调教
  params.forEach(function (param) {
    var layout = param.layout,
      resizing = param.resizing,
      selector = param.selector,
      text = param.text;
    var selectedLayer = selectorLayer(layer, selector);
    if (selectedLayer) {
      adjust(selectedLayer, {
        resizing: resizing,
        layout: layout
      });
      if (layer.class === 'text' && text) {
        adjustText(selectedLayer, text);
      }
    }
  });
};

/**
 * 调整 Symbol 的 Layout
 * @param symbol
 * @param symbolParams
 */
var adjustSymbolParams = function adjustSymbolParams(symbol, symbolParams) {
  if (symbol.class !== 'symbolMaster') {
    throw Error('传入对象不是 Symbol 对象,请检查!');
  }
  if (!symbolParams) return;
  var symbolLayout = symbolParams.symbolLayout,
    layerParams = symbolParams.layerParams,
    symbolName = symbolParams.symbolName,
    selector = symbolParams.selector;
  if (selector) {
    var selectedSymbol = selectorLayer(symbol, selector);
    if (!selectedSymbol) return;
  }
  if (symbolName) {
    symbol.name = symbolName;
  }
  if (symbolLayout) {
    symbol.setGroupLayout(symbolLayout);
  }
  symbol.layers.forEach(function (l) {
    adjustGroupLayer(l, layerParams);
  });
};
export default adjustSymbolParams;