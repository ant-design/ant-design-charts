/*!
 * @antv/g-svg
 * @description A renderer implemented by SVG
 * @version 2.0.42
 * @date 7/30/2025, 1:37:37 PM
 * @author AntVis
 * @docs https://g.antv.antgroup.com/
 */
'use strict';

var _createClass = require('@babel/runtime/helpers/createClass');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _callSuper = require('@babel/runtime/helpers/callSuper');
var _inherits = require('@babel/runtime/helpers/inherits');
var gLite = require('@antv/g-lite');
var DomInteraction = require('@antv/g-plugin-dom-interaction');
var SVGPicker = require('@antv/g-plugin-svg-picker');
var SVGRenderer = require('@antv/g-plugin-svg-renderer');
var _regeneratorRuntime = require('@babel/runtime/helpers/regeneratorRuntime');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var util = require('@antv/util');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var DomInteraction__namespace = /*#__PURE__*/_interopNamespaceDefault(DomInteraction);
var SVGPicker__namespace = /*#__PURE__*/_interopNamespaceDefault(SVGPicker);
var SVGRenderer__namespace = /*#__PURE__*/_interopNamespaceDefault(SVGRenderer);

var _excluded = ["offset", "composite", "computedOffset", "easing"],
  _excluded2 = ["offset", "composite", "computedOffset", "easing", "transformOrigin"],
  _excluded3 = ["offset", "composite", "computedOffset", "easing", "transformOrigin"],
  _excluded4 = ["offset", "composite", "computedOffset", "easing", "transformOrigin"];
var SVGContextService = /*#__PURE__*/function () {
  function SVGContextService(context) {
    _classCallCheck(this, SVGContextService);
    this.context = context;
    this.canvasConfig = context.config;
  }
  return _createClass(SVGContextService, [{
    key: "init",
    value: function init() {
      var _this$canvasConfig = this.canvasConfig,
        container = _this$canvasConfig.container,
        doc = _this$canvasConfig.document,
        dpr = _this$canvasConfig.devicePixelRatio;

      // create container
      this.$container = util.isString(container) ? (doc || document).getElementById(container) : container;
      if (this.$container) {
        if (!this.$container.style.position) {
          this.$container.style.position = 'relative';
        }
        var $namespace = SVGRenderer.createSVGElement('svg', doc);
        $namespace.setAttribute('width', "".concat(this.canvasConfig.width));
        $namespace.setAttribute('height', "".concat(this.canvasConfig.height));
        this.$container.appendChild($namespace);
        this.$namespace = $namespace;
      }
      this.dpr = dpr;
    }

    // @ts-ignore
  }, {
    key: "getDomElement",
    value: function getDomElement() {
      return this.$namespace;
    }
  }, {
    key: "getContext",
    value: function getContext() {
      return this.$namespace;
    }
  }, {
    key: "getDPR",
    value: function getDPR() {
      return this.dpr;
    }
  }, {
    key: "getBoundingClientRect",
    value: function getBoundingClientRect() {
      var _this$$namespace;
      return (_this$$namespace = this.$namespace) === null || _this$$namespace === void 0 ? void 0 : _this$$namespace.getBoundingClientRect();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // destroy context
      if (this.$container && this.$namespace && this.$namespace.parentNode) {
        this.$container.removeChild(this.$namespace);
      }
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      // SVG should ignore DPR
      if (this.$namespace) {
        this.$namespace.setAttribute('width', "".concat(width));
        this.$namespace.setAttribute('height', "".concat(height));
      }
    }
  }, {
    key: "applyCursorStyle",
    value: function applyCursorStyle(cursor) {
      if (this.$container) {
        this.$container.style.cursor = cursor;
      }
    }
  }, {
    key: "generateCSSText",
    value: function generateCSSText(animationName, selector, keyframes, timing) {
      var prefixes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var duration = timing.duration,
        easing = timing.easing,
        delay = timing.delay,
        direction = timing.direction,
        iterations = timing.iterations,
        fill = timing.fill;
      return "@keyframes ".concat(animationName, "{").concat(keyframes.map(function (keyframe) {
        keyframe.offset;
          keyframe.composite;
          var computedOffset = keyframe.computedOffset;
          keyframe.easing;
          var rest = _objectWithoutProperties(keyframe, _excluded);
        var rules = Object.keys(rest).map(function (attributeName) {
          return "".concat(attributeName, ":").concat(prefixes[attributeName] || '').concat(rest[attributeName], ";");
        }).join('');
        return "".concat(computedOffset * 100, "%{").concat(rules, "}");
      }).join(''), "}") + "".concat(selector, " {animation: ").concat(animationName, " ").concat(duration, "ms ").concat(easing, " ").concat(delay, "ms ").concat(iterations === Infinity ? 'infinite' : iterations, " ").concat(direction, " ").concat(fill, ";}");
    }
  }, {
    key: "toDataURL",
    value: function () {
      var _toDataURL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;
        var cloneNode,
          doc,
          animationCounter,
          $style,
          svgDocType,
          svgDoc;
        return _regeneratorRuntime().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              cloneNode = this.$namespace.cloneNode(true);
              doc = this.canvasConfig.document;
              animationCounter = 0;
              $style = null;
              this.context.renderingContext.root.forEach(function (object) {
                var animations = object.getAnimations();
                if (animations.length) {
                  if (!$style) {
                    // export animations to <style>, using CSS Transformation
                    $style = (doc || document).createElement('style');
                    cloneNode.appendChild($style);
                  }

                  // @ts-ignore
                  var svgElement = object.elementSVG;
                  var selfSelector = "#".concat(svgElement.$el.id);
                  var groupSelector = "#".concat(svgElement.$groupEl.id);
                  var selfCssText = '';
                  var groupCssText = '';
                  animations.forEach(function (animation) {
                    var keyframes = animation.effect.getKeyframes();

                    // split attributes into self and group
                    if (keyframes.length) {
                      var selfAttributes = [];
                      var groupAttributes = [];
                      var _keyframes$ = keyframes[0];
                        _keyframes$.offset;
                        _keyframes$.composite;
                        _keyframes$.computedOffset;
                        _keyframes$.easing;
                        _keyframes$.transformOrigin;
                        var rest = _objectWithoutProperties(_keyframes$, _excluded2);
                      Object.keys(rest).forEach(function (attributeName) {
                        var _propertyMetadataCach;
                        if (attributeName === 'transform') {
                          groupAttributes.push(attributeName);
                        }
                        var inherited = !!((_propertyMetadataCach = gLite.propertyMetadataCache[attributeName]) !== null && _propertyMetadataCach !== void 0 && _propertyMetadataCach.inh);
                        if (inherited) {
                          groupAttributes.push(attributeName);
                        } else if (attributeName !== 'transform') {
                          selfAttributes.push(attributeName);
                        }
                      });
                      if (groupAttributes.length) {
                        var keyframesWithGroup = keyframes.map(function (keyframe) {
                          var offset = keyframe.offset,
                            composite = keyframe.composite,
                            computedOffset = keyframe.computedOffset,
                            easing = keyframe.easing;
                            keyframe.transformOrigin;
                            var rest = _objectWithoutProperties(keyframe, _excluded3);
                          var ret = {
                            offset: offset,
                            composite: composite,
                            computedOffset: computedOffset,
                            easing: easing
                          };
                          Object.keys(rest).forEach(function (attributeName) {
                            if (groupAttributes.includes(attributeName)) {
                              ret[attributeName] = keyframe[attributeName];
                            }
                          });
                          return ret;
                        });
                        groupCssText += _this.generateCSSText("a".concat(animationCounter++), groupSelector, keyframesWithGroup, animation.effect.getComputedTiming(), {
                          transform: svgElement.$groupEl.getAttribute('transform')
                        });
                      }
                      if (selfAttributes.length) {
                        var keyframesWithSelf = keyframes.map(function (keyframe) {
                          var offset = keyframe.offset,
                            composite = keyframe.composite,
                            computedOffset = keyframe.computedOffset,
                            easing = keyframe.easing;
                            keyframe.transformOrigin;
                            var rest = _objectWithoutProperties(keyframe, _excluded4);
                          var ret = {
                            offset: offset,
                            composite: composite,
                            computedOffset: computedOffset,
                            easing: easing
                          };
                          Object.keys(rest).forEach(function (attributeName) {
                            if (selfAttributes.includes(attributeName)) {
                              ret[attributeName] = keyframe[attributeName];
                            }
                          });
                          return ret;
                        });
                        selfCssText += _this.generateCSSText("a".concat(animationCounter++), selfSelector, keyframesWithSelf, animation.effect.getComputedTiming());
                      }
                    }
                  });
                  $style.textContent += selfCssText + groupCssText;
                }
              });
              svgDocType = document.implementation.createDocumentType('svg', '-//W3C//DTD SVG 1.1//EN', 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd');
              svgDoc = document.implementation.createDocument('http://www.w3.org/2000/svg', 'svg', svgDocType);
              svgDoc.replaceChild(cloneNode, svgDoc.documentElement);
              return _context.abrupt("return", "data:image/svg+xml;charset=utf8,".concat(encodeURIComponent(new XMLSerializer().serializeToString(svgDoc))));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function toDataURL() {
        return _toDataURL.apply(this, arguments);
      }
      return toDataURL;
    }()
  }]);
}();

var ContextRegisterPlugin = /*#__PURE__*/function (_AbstractRendererPlug) {
  function ContextRegisterPlugin() {
    var _this;
    _classCallCheck(this, ContextRegisterPlugin);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ContextRegisterPlugin, [].concat(args));
    _this.name = 'svg-context-register';
    return _this;
  }
  _inherits(ContextRegisterPlugin, _AbstractRendererPlug);
  return _createClass(ContextRegisterPlugin, [{
    key: "init",
    value: function init() {
      // @ts-ignore
      this.context.ContextService = SVGContextService;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      delete this.context.ContextService;
    }
  }]);
}(gLite.AbstractRendererPlugin);

var Renderer = /*#__PURE__*/function (_AbstractRenderer) {
  function Renderer() {
    var _this;
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Renderer);
    _this = _callSuper(this, Renderer, [config]);
    _this.registerPlugin(new ContextRegisterPlugin());
    _this.registerPlugin(new SVGRenderer__namespace.Plugin({
      outputSVGElementId: config.outputSVGElementId
    }));
    _this.registerPlugin(new DomInteraction__namespace.Plugin());
    _this.registerPlugin(new SVGPicker__namespace.Plugin());
    return _this;
  }
  _inherits(Renderer, _AbstractRenderer);
  return _createClass(Renderer);
}(gLite.AbstractRenderer);

exports.DomInteraction = DomInteraction__namespace;
exports.SVGPicker = SVGPicker__namespace;
exports.SVGRenderer = SVGRenderer__namespace;
exports.Renderer = Renderer;
//# sourceMappingURL=index.js.map
