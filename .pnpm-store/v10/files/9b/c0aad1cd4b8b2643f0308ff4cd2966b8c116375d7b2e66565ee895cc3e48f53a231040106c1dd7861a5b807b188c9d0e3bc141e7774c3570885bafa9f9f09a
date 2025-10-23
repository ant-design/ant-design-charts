/*!
 * @antv/g-canvas
 * @description A renderer implemented by Canvas 2D API
 * @version 2.0.48
 * @date 7/30/2025, 1:38:18 PM
 * @author AntVis
 * @docs https://g.antv.antgroup.com/
 */
import _createClass from '@babel/runtime/helpers/createClass';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _callSuper from '@babel/runtime/helpers/callSuper';
import _inherits from '@babel/runtime/helpers/inherits';
import { setDOMSize, RenderReason, AbstractRendererPlugin, AbstractRenderer } from '@antv/g-lite';
import * as CanvasPathGenerator from '@antv/g-plugin-canvas-path-generator';
export { CanvasPathGenerator };
import * as CanvasPicker from '@antv/g-plugin-canvas-picker';
export { CanvasPicker };
import * as CanvasRenderer from '@antv/g-plugin-canvas-renderer';
export { CanvasRenderer };
import * as DomInteraction from '@antv/g-plugin-dom-interaction';
export { DomInteraction };
import * as HTMLRenderer from '@antv/g-plugin-html-renderer';
export { HTMLRenderer };
import * as ImageLoader from '@antv/g-plugin-image-loader';
export { ImageLoader };
import _regeneratorRuntime from '@babel/runtime/helpers/regeneratorRuntime';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import { isString } from '@antv/util';

var Canvas2DContextService = /*#__PURE__*/function () {
  function Canvas2DContextService(context) {
    _classCallCheck(this, Canvas2DContextService);
    this.renderingContext = context.renderingContext;
    this.canvasConfig = context.config;
  }
  return _createClass(Canvas2DContextService, [{
    key: "init",
    value: function init() {
      var _this$canvasConfig = this.canvasConfig,
        container = _this$canvasConfig.container,
        canvas = _this$canvasConfig.canvas;
      if (canvas) {
        this.$canvas = canvas;
        if (container && canvas.parentElement !== container) {
          container.appendChild(canvas);
        }
        this.$container = canvas.parentElement;
        this.canvasConfig.container = this.$container;
      } else if (container) {
        // create container
        this.$container = isString(container) ? document.getElementById(container) : container;
        if (this.$container) {
          // create canvas
          var $canvas = document.createElement('canvas');
          this.$container.appendChild($canvas);
          if (!this.$container.style.position) {
            this.$container.style.position = 'relative';
          }
          this.$canvas = $canvas;
        }
      }
      this.context = this.$canvas.getContext('2d');
      this.resize(this.canvasConfig.width, this.canvasConfig.height);
    }
  }, {
    key: "getContext",
    value: function getContext() {
      return this.context;
    }
  }, {
    key: "getDomElement",
    value: function getDomElement() {
      return this.$canvas;
    }
  }, {
    key: "getDPR",
    value: function getDPR() {
      return this.dpr;
    }
  }, {
    key: "getBoundingClientRect",
    value: function getBoundingClientRect() {
      if (this.$canvas.getBoundingClientRect) {
        return this.$canvas.getBoundingClientRect();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // @ts-ignore
      if (this.$container && this.$canvas && this.$canvas.parentNode) {
        // destroy context
        // @ts-ignore
        this.$container.removeChild(this.$canvas);
      }
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      var dpr = this.canvasConfig.devicePixelRatio;
      this.dpr = dpr;
      if (this.$canvas) {
        // set canvas width & height
        this.$canvas.width = this.dpr * width;
        this.$canvas.height = this.dpr * height;

        // set CSS style width & height
        setDOMSize(this.$canvas, width, height);

        // const dpr = this.getDPR();
        // scale all drawing operations by the dpr
        // @see https://www.html5rocks.com/en/tutorials/canvas/hidpi/
        // this.context.scale(dpr, dpr);
      }
      this.renderingContext.renderReasons.add(RenderReason.CAMERA_CHANGED);
    }
  }, {
    key: "applyCursorStyle",
    value: function applyCursorStyle(cursor) {
      if (this.$container && this.$container.style) {
        this.$container.style.cursor = cursor;
      }
    }
  }, {
    key: "toDataURL",
    value: function () {
      var _toDataURL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var options,
          type,
          encoderOptions,
          _args = arguments;
        return _regeneratorRuntime().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              type = options.type, encoderOptions = options.encoderOptions;
              return _context.abrupt("return", this.context.canvas.toDataURL(type, encoderOptions));
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
    _this.name = 'canvas-context-register';
    return _this;
  }
  _inherits(ContextRegisterPlugin, _AbstractRendererPlug);
  return _createClass(ContextRegisterPlugin, [{
    key: "init",
    value: function init() {
      this.context.ContextService = Canvas2DContextService;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      delete this.context.ContextService;
    }
  }]);
}(AbstractRendererPlugin);

var Renderer = /*#__PURE__*/function (_AbstractRenderer) {
  function Renderer(config) {
    var _this;
    _classCallCheck(this, Renderer);
    _this = _callSuper(this, Renderer, [config]);

    // register Canvas2DContext
    _this.registerPlugin(new ContextRegisterPlugin());
    _this.registerPlugin(new ImageLoader.Plugin());
    _this.registerPlugin(new CanvasPathGenerator.Plugin());
    // enable rendering with Canvas2D API
    _this.registerPlugin(new CanvasRenderer.Plugin());
    _this.registerPlugin(new DomInteraction.Plugin());
    // enable picking with Canvas2D API
    _this.registerPlugin(new CanvasPicker.Plugin());

    // render HTML component
    _this.registerPlugin(new HTMLRenderer.Plugin());
    return _this;
  }
  _inherits(Renderer, _AbstractRenderer);
  return _createClass(Renderer);
}(AbstractRenderer);

export { Renderer };
//# sourceMappingURL=index.esm.js.map
