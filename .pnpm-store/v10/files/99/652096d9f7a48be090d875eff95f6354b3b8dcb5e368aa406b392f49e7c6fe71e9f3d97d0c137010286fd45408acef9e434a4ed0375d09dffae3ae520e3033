/*!
 * @antv/g-plugin-html-renderer
 * @description A G plugin for rendering HTML
 * @version 2.1.27
 * @date 7/30/2025, 1:35:48 PM
 * @author AntVis
 * @docs https://g.antv.antgroup.com/
 */
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _callSuper from '@babel/runtime/helpers/callSuper';
import _inherits from '@babel/runtime/helpers/inherits';
import { CanvasEvent, ElementEvent, RenderReason, isCSSRGB, isPattern, Shape, AbstractRendererPlugin } from '@antv/g-lite';
import { isNil, isNumber, isString } from '@antv/util';

var CANVAS_CAMERA_ID = 'g-canvas-camera';
var HTMLRenderingPlugin = /*#__PURE__*/function () {
  function HTMLRenderingPlugin() {
    _classCallCheck(this, HTMLRenderingPlugin);
    this.displayObjectHTMLElementMap = new WeakMap();
  }
  return _createClass(HTMLRenderingPlugin, [{
    key: "joinTransformMatrix",
    value:
    /**
     * ! The reason for adding `offset` is that the `transform-origin` coordinate system of DOM is the local coordinate system of the element, while the `transform-origin` coordinate system of canvas drawing is the local coordinate system of the element's parent element. At the same time, the `transform` attribute value of the DOM element does not include `transform-origin`.
     */
    function joinTransformMatrix(matrix) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0, 0];
      return "matrix(".concat([matrix[0], matrix[1], matrix[4], matrix[5], matrix[12] + offset[0], matrix[13] + offset[1]].join(','), ")");
    }
  }, {
    key: "apply",
    value: function apply(context, runtime) {
      var _this = this;
      var camera = context.camera,
        renderingContext = context.renderingContext,
        renderingService = context.renderingService;
      this.context = context;
      var canvas = renderingContext.root.ownerDocument.defaultView;
      var nativeHTMLMap = canvas.context.eventService.nativeHTMLMap;
      var setTransform = function setTransform(object, $el) {
        $el.style.transform = _this.joinTransformMatrix(object.getWorldTransform(), object.getOrigin());
      };
      var handleMounted = function handleMounted(e) {
        var object = e.target;
        if (object.nodeName === Shape.HTML) {
          if (!_this.$camera) {
            _this.$camera = _this.createCamera(camera);
          }

          // create DOM element
          var $el = _this.getOrCreateEl(object);
          _this.$camera.appendChild($el);
          Object.keys(object.attributes).forEach(function (name) {
            _this.updateAttribute(name, object);
          });
          setTransform(object, $el);
          nativeHTMLMap.set($el, object);
        }
      };
      var handleUnmounted = function handleUnmounted(e) {
        var object = e.target;
        if (object.nodeName === Shape.HTML && _this.$camera) {
          var $el = _this.getOrCreateEl(object);
          if ($el) {
            $el.remove();
            nativeHTMLMap["delete"]($el);
          }
        }
      };
      var handleAttributeChanged = function handleAttributeChanged(e) {
        var object = e.target;
        if (object.nodeName === Shape.HTML) {
          var attrName = e.attrName;
          _this.updateAttribute(attrName, object);
        }
      };
      var handleBoundsChanged = function handleBoundsChanged(e) {
        var object = e.target;
        var nodes = object.nodeName === Shape.FRAGMENT ? object.childNodes : [object];
        nodes.forEach(function (node) {
          if (node.nodeName === Shape.HTML) {
            var $el = _this.getOrCreateEl(node);
            setTransform(node, $el);
          }
        });
      };
      var handleCanvasResize = function handleCanvasResize() {
        if (_this.$camera) {
          var _this$context$config = _this.context.config,
            width = _this$context$config.width,
            height = _this$context$config.height;
          _this.$camera.parentElement.style.width = "".concat(width || 0, "px");
          _this.$camera.parentElement.style.height = "".concat(height || 0, "px");
        }
      };
      renderingService.hooks.init.tap(HTMLRenderingPlugin.tag, function () {
        canvas.addEventListener(CanvasEvent.RESIZE, handleCanvasResize);
        canvas.addEventListener(ElementEvent.MOUNTED, handleMounted);
        canvas.addEventListener(ElementEvent.UNMOUNTED, handleUnmounted);
        canvas.addEventListener(ElementEvent.ATTR_MODIFIED, handleAttributeChanged);
        canvas.addEventListener(ElementEvent.BOUNDS_CHANGED, handleBoundsChanged);
      });
      renderingService.hooks.endFrame.tap(HTMLRenderingPlugin.tag, function () {
        if (_this.$camera && renderingContext.renderReasons.has(RenderReason.CAMERA_CHANGED)) {
          _this.$camera.style.transform = _this.joinTransformMatrix(camera.getOrthoMatrix());
        }
      });
      renderingService.hooks.destroy.tap(HTMLRenderingPlugin.tag, function () {
        // remove camera
        if (_this.$camera) {
          _this.$camera.remove();
        }
        canvas.removeEventListener(CanvasEvent.RESIZE, handleCanvasResize);
        canvas.removeEventListener(ElementEvent.MOUNTED, handleMounted);
        canvas.removeEventListener(ElementEvent.UNMOUNTED, handleUnmounted);
        canvas.removeEventListener(ElementEvent.ATTR_MODIFIED, handleAttributeChanged);
        canvas.removeEventListener(ElementEvent.BOUNDS_CHANGED, handleBoundsChanged);
      });
    }
  }, {
    key: "createCamera",
    value: function createCamera(camera) {
      var _this$context$config2 = this.context.config,
        doc = _this$context$config2.document,
        width = _this$context$config2.width,
        height = _this$context$config2.height;
      var $canvas = this.context.contextService.getDomElement();
      var $container = $canvas.parentNode;
      if ($container) {
        var cameraId = CANVAS_CAMERA_ID;
        var $existedCamera = $container.querySelector("#".concat(cameraId));
        if (!$existedCamera) {
          // fix @see https://github.com/antvis/G/issues/1702
          var $cameraContainer = (doc || document).createElement('div');
          // HTML elements should not overflow with canvas @see https://github.com/antvis/G/issues/1163
          $cameraContainer.style.overflow = 'hidden';
          $cameraContainer.style.pointerEvents = 'none';
          $cameraContainer.style.position = 'absolute';
          $cameraContainer.style.left = "0px";
          $cameraContainer.style.top = "0px";
          $cameraContainer.style.width = "".concat(width || 0, "px");
          $cameraContainer.style.height = "".concat(height || 0, "px");
          var $camera = (doc || document).createElement('div');
          $existedCamera = $camera;
          $camera.id = cameraId;
          // use absolute position
          $camera.style.position = 'absolute';
          // account for DOM element's offset @see https://github.com/antvis/G/issues/1150
          $camera.style.left = "".concat($canvas.offsetLeft || 0, "px");
          $camera.style.top = "".concat($canvas.offsetTop || 0, "px");
          $camera.style.transformOrigin = 'left top';
          $camera.style.transform = this.joinTransformMatrix(camera.getOrthoMatrix());
          $camera.style.pointerEvents = 'none';
          $camera.style.width = "100%";
          $camera.style.height = "100%";
          $cameraContainer.appendChild($camera);
          $container.appendChild($cameraContainer);
        }
        return $existedCamera;
      }
      return null;
    }
  }, {
    key: "getOrCreateEl",
    value: function getOrCreateEl(object) {
      var doc = this.context.config.document;
      var $existedElement = this.displayObjectHTMLElementMap.get(object);
      if (!$existedElement) {
        $existedElement = (doc || document).createElement('div');
        object.parsedStyle.$el = $existedElement;
        this.displayObjectHTMLElementMap.set(object, $existedElement);
        if (object.id) {
          $existedElement.id = object.id;
        }
        if (object.name) {
          $existedElement.setAttribute('name', object.name);
        }
        if (object.className) {
          $existedElement.className = object.className;
        }

        // use absolute position
        $existedElement.style.position = 'absolute';
        // @see https://github.com/antvis/G/issues/1150
        $existedElement.style['will-change'] = 'transform';
        $existedElement.style.transform = this.joinTransformMatrix(object.getWorldTransform(), object.getOrigin());
      }
      return $existedElement;
    }
  }, {
    key: "updateAttribute",
    value: function updateAttribute(name, object) {
      var $el = this.getOrCreateEl(object);
      switch (name) {
        case 'innerHTML':
          var innerHTML = object.parsedStyle.innerHTML;
          if (isString(innerHTML)) {
            $el.innerHTML = innerHTML;
          } else {
            $el.innerHTML = '';
            $el.appendChild(innerHTML);
          }
          break;
        case 'x':
          $el.style.left = "".concat(object.parsedStyle.x, "px");
          break;
        case 'y':
          $el.style.top = "".concat(object.parsedStyle.y, "px");
          break;
        case 'transformOrigin':
          var transformOrigin = object.parsedStyle.transformOrigin;
          $el.style['transform-origin'] = "".concat(transformOrigin[0].buildCSSText(null, null, ''), " ").concat(transformOrigin[1].buildCSSText(null, null, ''));
          break;
        case 'width':
          var width = object.parsedStyle.width;
          $el.style.width = isNumber(width) ? "".concat(width, "px") : width.toString();
          break;
        case 'height':
          var height = object.parsedStyle.height;
          $el.style.height = isNumber(height) ? "".concat(height, "px") : height.toString();
          break;
        case 'zIndex':
          var zIndex = object.parsedStyle.zIndex;
          $el.style['z-index'] = "".concat(zIndex);
          break;
        case 'visibility':
          var visibility = object.parsedStyle.visibility;
          $el.style.visibility = visibility;
          break;
        case 'pointerEvents':
          var _object$parsedStyle$p = object.parsedStyle.pointerEvents,
            pointerEvents = _object$parsedStyle$p === void 0 ? 'auto' : _object$parsedStyle$p;
          $el.style.pointerEvents = pointerEvents;
          break;
        case 'opacity':
          var opacity = object.parsedStyle.opacity;
          $el.style.opacity = "".concat(opacity);
          break;
        case 'fill':
          var fill = object.parsedStyle.fill;
          var color = '';
          if (isCSSRGB(fill)) {
            if (fill.isNone) {
              color = 'transparent';
            } else {
              color = object.getAttribute('fill');
            }
          } else if (Array.isArray(fill)) {
            color = object.getAttribute('fill');
          } else if (isPattern(fill)) ;
          $el.style.background = color;
          break;
        case 'stroke':
          var stroke = object.parsedStyle.stroke;
          var borderColor = '';
          if (isCSSRGB(stroke)) {
            if (stroke.isNone) {
              borderColor = 'transparent';
            } else {
              borderColor = object.getAttribute('stroke');
            }
          } else if (Array.isArray(stroke)) {
            borderColor = object.getAttribute('stroke');
          } else if (isPattern(stroke)) ;
          $el.style['border-color'] = borderColor;
          $el.style['border-style'] = 'solid';
          break;
        case 'lineWidth':
          var lineWidth = object.parsedStyle.lineWidth;
          $el.style['border-width'] = "".concat(lineWidth || 0, "px");
          break;
        case 'lineDash':
          $el.style['border-style'] = 'dashed';
          break;
        case 'filter':
          var filter = object.style.filter;
          $el.style.filter = filter;
          break;
        default:
          if (!isNil(object.style[name]) && object.style[name] !== '') {
            $el.style[name] = object.style[name];
          }
      }
    }
  }]);
}();
HTMLRenderingPlugin.tag = 'HTMLRendering';

var Plugin = /*#__PURE__*/function (_AbstractRendererPlug) {
  function Plugin() {
    var _this;
    _classCallCheck(this, Plugin);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Plugin, [].concat(args));
    _this.name = 'html-renderer';
    return _this;
  }
  _inherits(Plugin, _AbstractRendererPlug);
  return _createClass(Plugin, [{
    key: "init",
    value: function init() {
      this.addRenderingPlugin(new HTMLRenderingPlugin());
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeAllRenderingPlugins();
    }
  }]);
}(AbstractRendererPlugin);

export { Plugin };
//# sourceMappingURL=index.esm.js.map
