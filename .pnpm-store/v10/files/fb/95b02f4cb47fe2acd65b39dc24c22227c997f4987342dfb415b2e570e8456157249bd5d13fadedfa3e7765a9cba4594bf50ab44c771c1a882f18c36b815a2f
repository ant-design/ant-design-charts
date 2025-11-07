/*!
 * @antv/g-plugin-dom-interaction
 * @description A G plugin
 * @version 2.1.27
 * @date 7/30/2025, 1:35:38 PM
 * @author AntVis
 * @docs https://g.antv.antgroup.com/
 */
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _callSuper from '@babel/runtime/helpers/callSuper';
import _inherits from '@babel/runtime/helpers/inherits';
import { AbstractRendererPlugin } from '@antv/g-lite';

// const MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

/**
 * listen to mouse/touch/pointer events on DOM wrapper, trigger pointer events
 */
var DOMInteractionPlugin = /*#__PURE__*/function () {
  function DOMInteractionPlugin() {
    _classCallCheck(this, DOMInteractionPlugin);
  }
  return _createClass(DOMInteractionPlugin, [{
    key: "apply",
    value: function apply(context, runtime) {
      var _this = this;
      var renderingService = context.renderingService,
        renderingContext = context.renderingContext,
        config = context.config;
      this.context = context;
      var canvas = renderingContext.root.ownerDocument.defaultView;
      // const SUPPORT_ONLY_TOUCH = canvas.supportsTouchEvents && MOBILE_REGEX.test(navigator.userAgent);

      var onPointerMove = function onPointerMove(ev) {
        renderingService.hooks.pointerMove.call(ev);
      };
      var onPointerUp = function onPointerUp(ev) {
        renderingService.hooks.pointerUp.call(ev);
      };
      var onPointerDown = function onPointerDown(ev) {
        renderingService.hooks.pointerDown.call(ev);
      };
      var onPointerOver = function onPointerOver(ev) {
        renderingService.hooks.pointerOver.call(ev);
      };
      var onPointerOut = function onPointerOut(ev) {
        renderingService.hooks.pointerOut.call(ev);
      };
      var onPointerCancel = function onPointerCancel(ev) {
        renderingService.hooks.pointerCancel.call(ev);
      };
      var onPointerWheel = function onPointerWheel(ev) {
        renderingService.hooks.pointerWheel.call(ev);
      };
      var onClick = function onClick(ev) {
        renderingService.hooks.click.call(ev);
      };
      var addPointerEventListener = function addPointerEventListener($el) {
        runtime.globalThis.document.addEventListener('pointermove', onPointerMove, true);
        $el.addEventListener('pointerdown', onPointerDown, true);
        $el.addEventListener('pointerleave', onPointerOut, true);
        $el.addEventListener('pointerover', onPointerOver, true);
        runtime.globalThis.addEventListener('pointerup', onPointerUp, true);
        runtime.globalThis.addEventListener('pointercancel', onPointerCancel, true);
      };
      var addTouchEventListener = function addTouchEventListener($el) {
        $el.addEventListener('touchstart', onPointerDown, true);
        $el.addEventListener('touchend', onPointerUp, true);
        $el.addEventListener('touchmove', onPointerMove, true);
        $el.addEventListener('touchcancel', onPointerCancel, true);
      };
      var addMouseEventListener = function addMouseEventListener($el) {
        runtime.globalThis.document.addEventListener('mousemove', onPointerMove, true);
        $el.addEventListener('mousedown', onPointerDown, true);
        $el.addEventListener('mouseout', onPointerOut, true);
        $el.addEventListener('mouseover', onPointerOver, true);
        runtime.globalThis.addEventListener('mouseup', onPointerUp, true);
      };
      var removePointerEventListener = function removePointerEventListener($el) {
        runtime.globalThis.document.removeEventListener('pointermove', onPointerMove, true);
        $el.removeEventListener('pointerdown', onPointerDown, true);
        $el.removeEventListener('pointerleave', onPointerOut, true);
        $el.removeEventListener('pointerover', onPointerOver, true);
        runtime.globalThis.removeEventListener('pointerup', onPointerUp, true);
        runtime.globalThis.removeEventListener('pointercancel', onPointerCancel, true);
      };
      var removeTouchEventListener = function removeTouchEventListener($el) {
        $el.removeEventListener('touchstart', onPointerDown, true);
        $el.removeEventListener('touchend', onPointerUp, true);
        $el.removeEventListener('touchmove', onPointerMove, true);
        $el.removeEventListener('touchcancel', onPointerCancel, true);
      };
      var removeMouseEventListener = function removeMouseEventListener($el) {
        runtime.globalThis.document.removeEventListener('mousemove', onPointerMove, true);
        $el.removeEventListener('mousedown', onPointerDown, true);
        $el.removeEventListener('mouseout', onPointerOut, true);
        $el.removeEventListener('mouseover', onPointerOver, true);
        runtime.globalThis.removeEventListener('mouseup', onPointerUp, true);
      };
      renderingService.hooks.init.tap(DOMInteractionPlugin.tag, function () {
        var $el = _this.context.contextService.getDomElement();

        // @ts-ignore
        if (runtime.globalThis.navigator.msPointerEnabled) {
          // @ts-ignore
          $el.style.msContentZooming = 'none';
          // @ts-ignore
          $el.style.msTouchAction = 'none';
        } else if (canvas.supportsPointerEvents) {
          $el.style.touchAction = 'none';
        }
        if (canvas.supportsPointerEvents) {
          addPointerEventListener($el);
        } else {
          addMouseEventListener($el);
        }
        if (canvas.supportsTouchEvents) {
          addTouchEventListener($el);
        }
        if (config.useNativeClickEvent) {
          $el.addEventListener('click', onClick, true);
        }

        // use passive event listeners
        // @see https://zhuanlan.zhihu.com/p/24555031
        $el.addEventListener('wheel', onPointerWheel, {
          passive: true,
          capture: true
        });
      });
      renderingService.hooks.destroy.tap(DOMInteractionPlugin.tag, function () {
        var $el = _this.context.contextService.getDomElement();

        // @ts-ignore
        if (runtime.globalThis.navigator.msPointerEnabled) {
          // @ts-ignore
          $el.style.msContentZooming = '';
          // @ts-ignore
          $el.style.msTouchAction = '';
        } else if (canvas.supportsPointerEvents) {
          $el.style.touchAction = '';
        }
        if (canvas.supportsPointerEvents) {
          removePointerEventListener($el);
        } else {
          removeMouseEventListener($el);
        }
        if (canvas.supportsTouchEvents) {
          removeTouchEventListener($el);
        }
        if (config.useNativeClickEvent) {
          $el.removeEventListener('click', onClick, true);
        }
        $el.removeEventListener('wheel', onPointerWheel, true);
      });
    }
  }]);
}();
DOMInteractionPlugin.tag = 'DOMInteraction';

var Plugin = /*#__PURE__*/function (_AbstractRendererPlug) {
  function Plugin() {
    var _this;
    _classCallCheck(this, Plugin);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Plugin, [].concat(args));
    _this.name = 'dom-interaction';
    return _this;
  }
  _inherits(Plugin, _AbstractRendererPlug);
  return _createClass(Plugin, [{
    key: "init",
    value: function init() {
      this.addRenderingPlugin(new DOMInteractionPlugin());
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
