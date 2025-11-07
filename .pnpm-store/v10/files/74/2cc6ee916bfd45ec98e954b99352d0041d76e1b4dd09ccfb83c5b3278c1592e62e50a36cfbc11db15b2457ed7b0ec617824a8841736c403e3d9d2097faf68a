/*!
 * @antv/g-plugin-svg-picker
 * @description A G plugin for picking in SVG
 * @version 2.0.42
 * @date 7/30/2025, 1:37:06 PM
 * @author AntVis
 * @docs https://g.antv.antgroup.com/
 */
'use strict';

var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var _callSuper = require('@babel/runtime/helpers/callSuper');
var _inherits = require('@babel/runtime/helpers/inherits');
var gLite = require('@antv/g-lite');
var _createForOfIteratorHelper = require('@babel/runtime/helpers/createForOfIteratorHelper');
var _regeneratorRuntime = require('@babel/runtime/helpers/regeneratorRuntime');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');

/**
 * pick shape(s) with Mouse/Touch event
 *
 * 1. find AABB with r-tree
 * 2. use elementFromPoint
 */
var SVGPickerPlugin = /*#__PURE__*/function () {
  function SVGPickerPlugin() {
    _classCallCheck(this, SVGPickerPlugin);
  }
  return _createClass(SVGPickerPlugin, [{
    key: "apply",
    value: function apply(context, runtime) {
      var _this = this;
      var doc = context.config.document,
        renderingService = context.renderingService,
        svgElementMap = context.svgElementMap;
      renderingService.hooks.pick.tapPromise(SVGPickerPlugin.tag, /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(result) {
          return _regeneratorRuntime().wrap(function (_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _this.pick(svgElementMap, doc, result));
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      renderingService.hooks.pickSync.tap(SVGPickerPlugin.tag, function (result) {
        return _this.pick(svgElementMap, doc, result);
      });
    }
  }, {
    key: "pick",
    value: function pick(svgElementMap, doc, result) {
      var topmost = result.topmost,
        _result$position = result.position,
        clientX = _result$position.clientX,
        clientY = _result$position.clientY;
      try {
        var targets = [];
        // @see https://developer.mozilla.org/zh-CN/docs/Web/API/Document/elementsFromPoint
        var _iterator = _createForOfIteratorHelper((doc || document).elementsFromPoint(clientX, clientY)),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var element = _step.value;
            if (element.shadowRoot && element.shadowRoot !== doc) {
              return this.pick(svgElementMap, element.shadowRoot, result);
            }
            var target = svgElementMap.get(element);
            // don't need to account for `visibility` since DOM API already does
            if (target && target.isInteractive()) {
              targets.push(target);
              if (topmost) {
                result.picked = targets;
                return result;
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        result.picked = targets;
      } catch (_unused) {
        result.picked = [];
      }
      return result;
    }
  }]);
}();
SVGPickerPlugin.tag = 'SVGPicker';

var Plugin = /*#__PURE__*/function (_AbstractRendererPlug) {
  function Plugin() {
    var _this;
    _classCallCheck(this, Plugin);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Plugin, [].concat(args));
    _this.name = 'svg-picker';
    return _this;
  }
  _inherits(Plugin, _AbstractRendererPlug);
  return _createClass(Plugin, [{
    key: "init",
    value: function init() {
      this.addRenderingPlugin(new SVGPickerPlugin());
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeAllRenderingPlugins();
    }
  }]);
}(gLite.AbstractRendererPlugin);

exports.Plugin = Plugin;
//# sourceMappingURL=index.js.map
