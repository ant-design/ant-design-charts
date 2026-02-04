/*!
 * @antv/g-canvas
 * @description A renderer implemented by Canvas 2D API
 * @version 2.2.0
 * @date 12/24/2025, 11:55:53 AM
 * @author AntVis
 * @docs https://g.antv.antgroup.com/
 */
import _createClass from '@babel/runtime/helpers/createClass';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _callSuper from '@babel/runtime/helpers/callSuper';
import _inherits from '@babel/runtime/helpers/inherits';
import { AABB, CustomEvent, CanvasEvent, Shape, Node, GradientType, isPattern, AbstractRendererPlugin, findClosestClipPathTarget, Point, isFillOrStrokeAffected, getOrCalculatePathTotalLength, isDisplayObject, setDOMSize, RenderReason, AbstractRenderer, ImageLoader, DomInteraction, HTMLRenderer } from '@antv/g-lite';
export { DomInteraction, HTMLRenderer, ImageLoader } from '@antv/g-lite';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectSpread from '@babel/runtime/helpers/objectSpread2';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _classPrivateFieldLooseBase from '@babel/runtime/helpers/classPrivateFieldLooseBase';
import _classPrivateFieldLooseKey from '@babel/runtime/helpers/classPrivateFieldLooseKey';
import { mat4, vec3 } from 'gl-matrix';
import { isNil, arcToCubic, clamp, isString } from '@antv/util';
import _createForOfIteratorHelper from '@babel/runtime/helpers/createForOfIteratorHelper';
import _regeneratorRuntime from '@babel/runtime/helpers/regeneratorRuntime';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import { distance, linePointToLine, cubicPointDistance, quadPointDistance } from '@antv/g-math';

var _renderState = /*#__PURE__*/_classPrivateFieldLooseKey("renderState");
/**
 * support 2 modes in rendering:
 * * immediate
 * * delayed: render at the end of frame with dirty-rectangle
 */
var CanvasRendererPlugin = /*#__PURE__*/function () {
  function CanvasRendererPlugin(canvasRendererPluginOptions // private styleRendererFactory: Record<Shape, StyleRenderer>,
  ) {
    _classCallCheck(this, CanvasRendererPlugin);
    this.renderQueue = [];
    Object.defineProperty(this, _renderState, {
      writable: true,
      value: {
        restoreStack: [],
        prevObject: null,
        currentContext: new Map()
      }
    });
    this.clearFullScreenLastFrame = false;
    this.clearFullScreen = false;
    /**
     * view projection matrix
     */
    this.vpMatrix = mat4.create();
    this.dprMatrix = mat4.create();
    this.tmpMat4 = mat4.create();
    this.vec3a = vec3.create();
    this.vec3b = vec3.create();
    this.vec3c = vec3.create();
    this.vec3d = vec3.create();
    this.canvasRendererPluginOptions = canvasRendererPluginOptions;
  }
  return _createClass(CanvasRendererPlugin, [{
    key: "apply",
    value: function apply(context, runtime) {
      var _this = this;
      this.context = context;
      var _this$context = this.context,
        config = _this$context.config,
        camera = _this$context.camera,
        renderingService = _this$context.renderingService,
        renderingContext = _this$context.renderingContext,
        pathGeneratorFactory = _this$context.pathGeneratorFactory;
      var enableRenderingOptimization = config.renderer.getConfig().enableRenderingOptimization;
      config.renderer.getConfig().enableDirtyCheck = false;
      config.renderer.getConfig().enableDirtyRectangleRendering = false;
      this.pathGeneratorFactory = pathGeneratorFactory;
      var contextService = context.contextService;
      var canvas = renderingContext.root.ownerDocument.defaultView;
      renderingService.hooks.init.tap(CanvasRendererPlugin.tag, function () {
        // clear fullscreen
        var dpr = contextService.getDPR();
        var width = config.width,
          height = config.height;
        var context = contextService.getContext();
        _this.clearRect(context, 0, 0, width * dpr, height * dpr, config.background);
      });
      renderingService.hooks.destroy.tap(CanvasRendererPlugin.tag, function () {
        _this.renderQueue = [];
        _classPrivateFieldLooseBase(_this, _renderState)[_renderState] = {
          restoreStack: [],
          prevObject: null,
          currentContext: null
        };
      });
      var beforeDraw = function beforeDraw() {
        var _canvas$context$rende;
        var context = contextService.getContext();
        var dpr = contextService.getDPR();
        var width = config.width,
          height = config.height;
        var _this$canvasRendererP = _this.canvasRendererPluginOptions,
          dirtyObjectNumThreshold = _this$canvasRendererP.dirtyObjectNumThreshold,
          dirtyObjectRatioThreshold = _this$canvasRendererP.dirtyObjectRatioThreshold;

        // some heuristic conditions such as 80% object changed
        var _renderingService$get = renderingService.getStats(),
          total = _renderingService$get.total,
          rendered = _renderingService$get.rendered;
        var ratio = rendered / total;
        _this.clearFullScreen = _this.clearFullScreenLastFrame ||
        // @ts-ignore
        !((_canvas$context$rende = canvas.context.renderingPlugins[1]) !== null && _canvas$context$rende !== void 0 && _canvas$context$rende.isFirstTimeRenderingFinished) || renderingService.disableDirtyRectangleRendering() || rendered > dirtyObjectNumThreshold && ratio > dirtyObjectRatioThreshold;
        if (!context) {
          return;
        }
        if (typeof context.resetTransform === 'function') {
          context.resetTransform();
        } else {
          context.setTransform(1, 0, 0, 1, 0, 0);
        }
        if (_this.clearFullScreen) {
          _this.clearRect(context, 0, 0, width * dpr, height * dpr, config.background);
        }
      };

      /**
       * render objects by z-index
       *
       * - The level of the child node will be affected by the level of the parent node
       */
      var renderByZIndex = function renderByZIndex(object, context) {
        var stack = [object];
        while (stack.length > 0) {
          var _currentObject$sortab;
          var currentObject = stack.pop();
          if (currentObject.isVisible() && !currentObject.isCulled()) {
            if (enableRenderingOptimization) {
              _this.renderDisplayObjectOptimized(currentObject, context, _this.context, _classPrivateFieldLooseBase(_this, _renderState)[_renderState], runtime);
            } else {
              _this.renderDisplayObject(currentObject, context, _this.context, _classPrivateFieldLooseBase(_this, _renderState)[_renderState], runtime);
            }
          }
          var objects = ((_currentObject$sortab = currentObject.sortable) === null || _currentObject$sortab === void 0 || (_currentObject$sortab = _currentObject$sortab.sorted) === null || _currentObject$sortab === void 0 ? void 0 : _currentObject$sortab.length) > 0 ? currentObject.sortable.sorted : currentObject.childNodes;
          // should account for z-index
          for (var i = objects.length - 1; i >= 0; i--) {
            stack.push(objects[i]);
          }
        }
      };

      // render at the end of frame
      renderingService.hooks.endFrame.tap(CanvasRendererPlugin.tag, function () {
        beforeDraw();

        // Skip rendering.
        if (renderingContext.root.childNodes.length === 0) {
          _this.clearFullScreenLastFrame = true;
          return;
        }
        enableRenderingOptimization = config.renderer.getConfig().enableRenderingOptimization;

        // init
        _classPrivateFieldLooseBase(_this, _renderState)[_renderState] = {
          restoreStack: [],
          prevObject: null,
          currentContext: _classPrivateFieldLooseBase(_this, _renderState)[_renderState].currentContext
        };
        _classPrivateFieldLooseBase(_this, _renderState)[_renderState].currentContext.clear();
        _this.clearFullScreenLastFrame = false;
        var context = contextService.getContext();
        // clear & clip dirty rectangle
        var dpr = contextService.getDPR();
        mat4.fromScaling(_this.dprMatrix, [dpr, dpr, 1]);
        mat4.multiply(_this.vpMatrix, _this.dprMatrix, camera.getOrthoMatrix());
        if (_this.clearFullScreen) {
          // console.time('renderByZIndex');
          if (enableRenderingOptimization) {
            context.save();
            renderByZIndex(renderingContext.root, context);
            context.restore();
          } else {
            renderByZIndex(renderingContext.root, context);
          }
          // console.timeEnd('renderByZIndex');
        } else {
          // console.log('canvas renderer next...', this.renderQueue);
          // merge removed AABB
          var dirtyRenderBounds = _this.safeMergeAABB(_this.mergeDirtyAABBs(_this.renderQueue));
          if (AABB.isEmpty(dirtyRenderBounds)) {
            _this.renderQueue = [];
            return;
          }
          var dirtyRect = _this.convertAABB2Rect(dirtyRenderBounds);
          var x = dirtyRect.x,
            y = dirtyRect.y,
            width = dirtyRect.width,
            height = dirtyRect.height;
          var tl = vec3.transformMat4(_this.vec3a, [x, y, 0], _this.vpMatrix);
          var tr = vec3.transformMat4(_this.vec3b, [x + width, y, 0], _this.vpMatrix);
          var bl = vec3.transformMat4(_this.vec3c, [x, y + height, 0], _this.vpMatrix);
          var br = vec3.transformMat4(_this.vec3d, [x + width, y + height, 0], _this.vpMatrix);
          var minx = Math.min(tl[0], tr[0], br[0], bl[0]);
          var miny = Math.min(tl[1], tr[1], br[1], bl[1]);
          var maxx = Math.max(tl[0], tr[0], br[0], bl[0]);
          var maxy = Math.max(tl[1], tr[1], br[1], bl[1]);
          var ix = Math.floor(minx);
          var iy = Math.floor(miny);
          var iwidth = Math.ceil(maxx - minx);
          var iheight = Math.ceil(maxy - miny);
          context.save();
          _this.clearRect(context, ix, iy, iwidth, iheight, config.background);
          context.beginPath();
          context.rect(ix, iy, iwidth, iheight);
          context.clip();

          // @see https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations
          context.setTransform(_this.vpMatrix[0], _this.vpMatrix[1], _this.vpMatrix[4], _this.vpMatrix[5], _this.vpMatrix[12], _this.vpMatrix[13]);

          // draw dirty rectangle
          var _config$renderer$getC = config.renderer.getConfig(),
            enableDirtyRectangleRenderingDebug = _config$renderer$getC.enableDirtyRectangleRenderingDebug;
          if (enableDirtyRectangleRenderingDebug) {
            canvas.dispatchEvent(new CustomEvent(CanvasEvent.DIRTY_RECTANGLE, {
              dirtyRect: {
                x: ix,
                y: iy,
                width: iwidth,
                height: iheight
              }
            }));
          }

          // search objects intersect with dirty rectangle
          var _dirtyRenderBounds$ge = dirtyRenderBounds.getMin(),
            _dirtyRenderBounds$ge2 = _slicedToArray(_dirtyRenderBounds$ge, 2),
            minX = _dirtyRenderBounds$ge2[0],
            minY = _dirtyRenderBounds$ge2[1];
          var _dirtyRenderBounds$ge3 = dirtyRenderBounds.getMax(),
            _dirtyRenderBounds$ge4 = _slicedToArray(_dirtyRenderBounds$ge3, 2),
            maxX = _dirtyRenderBounds$ge4[0],
            maxY = _dirtyRenderBounds$ge4[1];
          var dirtyObjects = renderingContext.root.ownerDocument.elementsFromBBox(minX, minY, maxX, maxY);

          // do rendering
          dirtyObjects
          // sort by z-index
          .sort(function (a, b) {
            return a.sortable.renderOrder - b.sortable.renderOrder;
          }).forEach(function (object) {
            // culled object should not be rendered
            if (object && object.isVisible() && !object.isCulled()) {
              _this.renderDisplayObject(object, context, _this.context, _classPrivateFieldLooseBase(_this, _renderState)[_renderState], runtime);
            }
          });
          context.restore();

          // save dirty AABBs in last frame
          _this.renderQueue.forEach(function (object) {
            _this.saveDirtyAABB(object);
          });

          // clear queue
          _this.renderQueue = [];
        }

        // pop restore stack, eg. root -> parent -> child
        _classPrivateFieldLooseBase(_this, _renderState)[_renderState].restoreStack.forEach(function () {
          context.restore();
        });
        // clear restore stack
        _classPrivateFieldLooseBase(_this, _renderState)[_renderState].restoreStack = [];
      });
      renderingService.hooks.render.tap(CanvasRendererPlugin.tag, function (object) {
        if (!_this.clearFullScreen) {
          // render at the end of frame
          _this.renderQueue.push(object);
        }
      });
    }
  }, {
    key: "clearRect",
    value: function clearRect(context, x, y, width, height, background) {
      // clearRect is faster than fillRect @see https://stackoverflow.com/a/30830253
      context.clearRect(x, y, width, height);
      if (background) {
        context.fillStyle = background;
        context.fillRect(x, y, width, height);
      }
    }
  }, {
    key: "renderDisplayObjectOptimized",
    value: function renderDisplayObjectOptimized(object, context, canvasContext, renderState, runtime) {
      var nodeName = object.nodeName;
      var updateTransform = false;
      var clipDraw = false;

      // @ts-ignore
      var styleRenderer = this.context.styleRendererFactory[nodeName];
      var generatePath = this.pathGeneratorFactory[nodeName];

      // clip path
      var clipPath = object.parsedStyle.clipPath;
      if (clipPath) {
        updateTransform = !renderState.prevObject || !mat4.exactEquals(clipPath.getWorldTransform(), renderState.prevObject.getWorldTransform());
        if (updateTransform) {
          this.applyWorldTransform(context, clipPath);
          renderState.prevObject = null;
        }

        // generate path in local space
        var _generatePath = this.pathGeneratorFactory[clipPath.nodeName];
        if (_generatePath) {
          context.save();
          clipDraw = true;
          context.beginPath();
          _generatePath(context, clipPath.parsedStyle);
          context.closePath();
          context.clip();
        }
      }

      // fill & stroke

      if (styleRenderer) {
        updateTransform = !renderState.prevObject || !mat4.exactEquals(object.getWorldTransform(), renderState.prevObject.getWorldTransform());
        if (updateTransform) {
          this.applyWorldTransform(context, object);
        }
        var forceUpdateStyle = !renderState.prevObject;
        if (!forceUpdateStyle) {
          var prevNodeName = renderState.prevObject.nodeName;
          if (nodeName === Shape.TEXT) {
            forceUpdateStyle = prevNodeName !== Shape.TEXT;
          } else if (nodeName === Shape.IMAGE) {
            forceUpdateStyle = prevNodeName !== Shape.IMAGE;
          } else {
            forceUpdateStyle = prevNodeName === Shape.TEXT || prevNodeName === Shape.IMAGE;
          }
        }
        styleRenderer.applyStyleToContext(context, object, forceUpdateStyle, renderState);
        renderState.prevObject = object;
      }
      if (generatePath) {
        context.beginPath();
        generatePath(context, object.parsedStyle);
        if (nodeName !== Shape.LINE && nodeName !== Shape.PATH && nodeName !== Shape.POLYLINE) {
          context.closePath();
        }
      }

      // fill & stroke
      if (styleRenderer) {
        styleRenderer.drawToContext(context, object, _classPrivateFieldLooseBase(this, _renderState)[_renderState], this, runtime);
      }
      if (clipDraw) {
        context.restore();
      }

      // finish rendering, clear dirty flag
      object.dirty(false);
    }
  }, {
    key: "renderDisplayObject",
    value: function renderDisplayObject(object, context, canvasContext, renderState, runtime) {
      var nodeName = object.nodeName;

      // restore to its ancestor

      var parent = renderState.restoreStack[renderState.restoreStack.length - 1];
      if (parent && !(object.compareDocumentPosition(parent) & Node.DOCUMENT_POSITION_CONTAINS)) {
        context.restore();
        renderState.restoreStack.pop();
      }

      // @ts-ignore
      var styleRenderer = this.context.styleRendererFactory[nodeName];
      var generatePath = this.pathGeneratorFactory[nodeName];

      // clip path
      var clipPath = object.parsedStyle.clipPath;
      if (clipPath) {
        this.applyWorldTransform(context, clipPath);

        // generate path in local space
        var _generatePath2 = this.pathGeneratorFactory[clipPath.nodeName];
        if (_generatePath2) {
          context.save();

          // save clip
          renderState.restoreStack.push(object);
          context.beginPath();
          _generatePath2(context, clipPath.parsedStyle);
          context.closePath();
          context.clip();
        }
      }

      // fill & stroke

      if (styleRenderer) {
        this.applyWorldTransform(context, object);
        context.save();

        // apply attributes to context
        this.applyAttributesToContext(context, object);
      }
      if (generatePath) {
        context.beginPath();
        generatePath(context, object.parsedStyle);
        if (nodeName !== Shape.LINE && nodeName !== Shape.PATH && nodeName !== Shape.POLYLINE) {
          context.closePath();
        }
      }

      // fill & stroke
      if (styleRenderer) {
        styleRenderer.render(context, object.parsedStyle, object, canvasContext, this, runtime);

        // restore applied attributes, eg. shadowBlur shadowColor...
        context.restore();
      }

      // finish rendering, clear dirty flag
      object.dirty(false);
    }
  }, {
    key: "applyAttributesToContext",
    value: function applyAttributesToContext(context, object) {
      var _ref = object.parsedStyle,
        stroke = _ref.stroke,
        fill = _ref.fill,
        opacity = _ref.opacity,
        lineDash = _ref.lineDash,
        lineDashOffset = _ref.lineDashOffset;
      // @see https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash
      if (lineDash) {
        context.setLineDash(lineDash);
      }

      // @see https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset
      if (!isNil(lineDashOffset)) {
        context.lineDashOffset = lineDashOffset;
      }
      if (!isNil(opacity)) {
        context.globalAlpha *= opacity;
      }
      if (!isNil(stroke) && !Array.isArray(stroke) && !stroke.isNone) {
        context.strokeStyle = object.attributes.stroke;
      }
      if (!isNil(fill) && !Array.isArray(fill) && !fill.isNone) {
        context.fillStyle = object.attributes.fill;
      }
    }
  }, {
    key: "convertAABB2Rect",
    value: function convertAABB2Rect(aabb) {
      var min = aabb.getMin();
      var max = aabb.getMax();
      // expand the rectangle a bit to avoid artifacts
      // @see https://www.yuque.com/antv/ou292n/bi8nix#ExvCu
      var minX = Math.floor(min[0]);
      var minY = Math.floor(min[1]);
      var maxX = Math.ceil(max[0]);
      var maxY = Math.ceil(max[1]);
      var width = maxX - minX;
      var height = maxY - minY;
      return {
        x: minX,
        y: minY,
        width: width,
        height: height
      };
    }

    /**
     * TODO: merge dirty rectangles with some strategies.
     * For now, we just simply merge all the rectangles into one.
     * @see https://idom.me/articles/841.html
     */
  }, {
    key: "mergeDirtyAABBs",
    value: function mergeDirtyAABBs(dirtyObjects) {
      // merge into a big AABB
      // TODO: skip descendant if ancestor is caculated, but compareNodePosition is really slow
      var aabb = new AABB();
      dirtyObjects.forEach(function (object) {
        var renderBounds = object.getRenderBounds();
        aabb.add(renderBounds);
        var dirtyRenderBounds = object.renderable.dirtyRenderBounds;
        if (dirtyRenderBounds) {
          aabb.add(dirtyRenderBounds);
        }
      });
      return aabb;
    }
  }, {
    key: "saveDirtyAABB",
    value: function saveDirtyAABB(object) {
      var renderable = object.renderable;
      if (!renderable.dirtyRenderBounds) {
        renderable.dirtyRenderBounds = new AABB();
      }
      var renderBounds = object.getRenderBounds();
      if (renderBounds) {
        // save last dirty aabb
        renderable.dirtyRenderBounds.update(renderBounds.center, renderBounds.halfExtents);
      }
    }
  }, {
    key: "applyWorldTransform",
    value: function applyWorldTransform(context, object, matrix) {
      // apply clip shape's RTS
      if (matrix) {
        mat4.copy(this.tmpMat4, object.getLocalTransform());
        mat4.multiply(this.tmpMat4, matrix, this.tmpMat4);
        mat4.multiply(this.tmpMat4, this.vpMatrix, this.tmpMat4);
      } else {
        // apply RTS transformation in world space
        mat4.copy(this.tmpMat4, object.getWorldTransform());
        mat4.multiply(this.tmpMat4, this.vpMatrix, this.tmpMat4);
      }

      // @see https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations
      context.setTransform(this.tmpMat4[0], this.tmpMat4[1], this.tmpMat4[4], this.tmpMat4[5], this.tmpMat4[12], this.tmpMat4[13]);
    }
  }, {
    key: "safeMergeAABB",
    value: function safeMergeAABB() {
      var merged = new AABB();
      for (var _len = arguments.length, aabbs = new Array(_len), _key = 0; _key < _len; _key++) {
        aabbs[_key] = arguments[_key];
      }
      aabbs.forEach(function (aabb) {
        merged.add(aabb);
      });
      return merged;
    }
  }]);
}();
CanvasRendererPlugin.tag = 'CanvasRenderer';

function getPattern(pattern, object, context, canvasContext, plugin, runtime, imagePool) {
  var $offscreenCanvas;
  var dpr;
  if (pattern.image.nodeName === 'rect') {
    var _parsedStyle = pattern.image.parsedStyle,
      width = _parsedStyle.width,
      height = _parsedStyle.height;
    dpr = canvasContext.contextService.getDPR();
    var offscreenCanvas = canvasContext.config.offscreenCanvas;
    $offscreenCanvas = runtime.offscreenCanvasCreator.getOrCreateCanvas(offscreenCanvas);
    $offscreenCanvas.width = width * dpr;
    $offscreenCanvas.height = height * dpr;
    var offscreenCanvasContext = runtime.offscreenCanvasCreator.getOrCreateContext(offscreenCanvas);
    var renderState = {
      restoreStack: [],
      prevObject: null,
      currentContext: new Map()
    };

    // offscreenCanvasContext.scale(1 / dpr, 1 / dpr);

    pattern.image.forEach(function (object) {
      plugin.renderDisplayObject(object, offscreenCanvasContext, canvasContext, renderState, runtime);
    });
    renderState.restoreStack.forEach(function () {
      offscreenCanvasContext.restore();
    });
  }
  var canvasPattern = imagePool.getOrCreatePatternSync(object, pattern, context, $offscreenCanvas, dpr, object.getGeometryBounds().min, function () {
    // set dirty rectangle flag
    object.dirty();
    canvasContext.renderingService.dirty();
  });
  return canvasPattern;
}
function getColor(parsedColor, object, context, imagePool) {
  var color;
  if (parsedColor.type === GradientType.LinearGradient || parsedColor.type === GradientType.RadialGradient) {
    var bounds = object.getGeometryBounds();
    var width = bounds && bounds.halfExtents[0] * 2 || 1;
    var height = bounds && bounds.halfExtents[1] * 2 || 1;
    var min = bounds && bounds.min || [0, 0];
    color = imagePool.getOrCreateGradient(_objectSpread(_objectSpread({
      type: parsedColor.type
    }, parsedColor.value), {}, {
      min: min,
      width: width,
      height: height
    }), context);
  }
  return color;
}

var SHADOW_NUMBER_STYLE = ['shadowBlur', 'shadowOffsetX', 'shadowOffsetY'];
var STROKE_STYLE = ['lineCap', 'lineJoin', 'miterLimit'];
var DEFAULT_STYLE = {
  // common
  globalAlpha: 1,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: '#000',
  filter: 'none',
  globalCompositeOperation: 'source-over',
  // stroke/fill
  strokeStyle: '#000',
  strokeOpacity: 1,
  lineWidth: 1,
  lineDash: [],
  lineDashOffset: 0,
  lineCap: 'butt',
  lineJoin: 'miter',
  miterLimit: 10,
  fillStyle: '#000',
  fillOpacity: 1

  // image
};
var defaultParsedStyle = {};

/**
 * Updating the canvas context is an expensive operation. The state of the context is cached and the actual update operation is performed only when the cache is not hit.
 *
 * In any case, the previous value is returned, which is convenient for temporarily updating the context and restoring it later.
 */
function updateContextIfNotHitCache(context, key, value, cache) {
  var prevValue = cache.has(key) ? cache.get(key) : DEFAULT_STYLE[key];
  if (prevValue !== value) {
    // console.log('not hit cache', key, value, prevValue, cache);
    if (key === 'lineDash') {
      context.setLineDash(value);
    } else {
      // @ts-ignore
      context[key] = value;
    }
    cache.set(key, value);
  }
  return prevValue;
}
var OptimizedDefaultRenderer = /*#__PURE__*/function () {
  function OptimizedDefaultRenderer(imagePool) {
    _classCallCheck(this, OptimizedDefaultRenderer);
    this.imagePool = imagePool;
  }
  return _createClass(OptimizedDefaultRenderer, [{
    key: "applyAttributesToContext",
    value: function applyAttributesToContext(context, object) {}
  }, {
    key: "render",
    value: function render(context, parsedStyle, object, canvasContext, plugin, runtime) {}

    // #region common style
  }, {
    key: "applyCommonStyleToContext",
    value: function applyCommonStyleToContext(context, object, forceUpdate, renderState) {
      // const dpr = object.ownerDocument.defaultView.getContextService().getDPR();
      var prevStyle = forceUpdate ? defaultParsedStyle : renderState.prevObject.parsedStyle;
      var style = object.parsedStyle;
      if (forceUpdate || style.opacity !== prevStyle.opacity) {
        updateContextIfNotHitCache(context, 'globalAlpha', !isNil(style.opacity) ? style.opacity : DEFAULT_STYLE.globalAlpha, renderState.currentContext);
      }

      // TODO blend prop
      // @ts-ignore
      if (forceUpdate || style.blend !== prevStyle.blend) {
        updateContextIfNotHitCache(context, 'globalCompositeOperation',
        // @ts-ignore
        !isNil(style.blend) ?
        // @ts-ignore
        style.blend : DEFAULT_STYLE.globalCompositeOperation, renderState.currentContext);
      }
    }
    // #endregion common style

    // #region stroke/fill style
  }, {
    key: "applyStrokeFillStyleToContext",
    value: function applyStrokeFillStyleToContext(context, object, forceUpdate, renderState) {
      var prevStyle = forceUpdate ? defaultParsedStyle : renderState.prevObject.parsedStyle;
      var style = object.parsedStyle;
      var _style$lineWidth = style.lineWidth,
        lineWidth = _style$lineWidth === void 0 ? DEFAULT_STYLE.lineWidth : _style$lineWidth;
      var hasFill = style.fill && !style.fill.isNone;
      var hasStroke = style.stroke && !style.stroke.isNone && lineWidth > 0;
      if (hasStroke) {
        if (forceUpdate || object.attributes.stroke !== renderState.prevObject.attributes.stroke) {
          var value = !isNil(style.stroke) && !Array.isArray(style.stroke) && !style.stroke.isNone ? object.attributes.stroke : DEFAULT_STYLE.strokeStyle;
          updateContextIfNotHitCache(context, 'strokeStyle', value, renderState.currentContext);
        }
        if (forceUpdate || style.lineWidth !== prevStyle.lineWidth) {
          updateContextIfNotHitCache(context, 'lineWidth', !isNil(style.lineWidth) ? style.lineWidth : DEFAULT_STYLE.lineWidth, renderState.currentContext);
        }
        if (forceUpdate || style.lineDash !== prevStyle.lineDash) {
          updateContextIfNotHitCache(context, 'lineDash', style.lineDash || DEFAULT_STYLE.lineDash, renderState.currentContext);
        }
        if (forceUpdate || style.lineDashOffset !== prevStyle.lineDashOffset) {
          updateContextIfNotHitCache(context, 'lineDashOffset', !isNil(style.lineDashOffset) ? style.lineDashOffset : DEFAULT_STYLE.lineDashOffset, renderState.currentContext);
        }
        for (var i = 0; i < STROKE_STYLE.length; i++) {
          var styleName = STROKE_STYLE[i];
          if (forceUpdate || style[styleName] !== prevStyle[styleName]) {
            updateContextIfNotHitCache(context, styleName, !isNil(style[styleName]) ? style[styleName] : DEFAULT_STYLE[styleName], renderState.currentContext);
          }
        }
      }
      if (hasFill && (forceUpdate || object.attributes.fill !== renderState.prevObject.attributes.fill)) {
        var _value = !isNil(style.fill) && !Array.isArray(style.fill) && !style.fill.isNone ? object.attributes.fill : DEFAULT_STYLE.fillStyle;
        updateContextIfNotHitCache(context, 'fillStyle', _value, renderState.currentContext);
      }
    }
    // #endregion stroke/fill style
  }, {
    key: "applyStyleToContext",
    value: function applyStyleToContext(context, object, forceUpdate, renderState) {
      var nodeName = object.nodeName;
      this.applyCommonStyleToContext(context, object, forceUpdate, renderState);
      if (nodeName === Shape.IMAGE) ; else {
        this.applyStrokeFillStyleToContext(context, object, forceUpdate, renderState);
      }
    }
  }, {
    key: "applyShadowAndFilterStyleToContext",
    value: function applyShadowAndFilterStyleToContext(context, object, hasShadow, renderState) {
      var style = object.parsedStyle;
      if (hasShadow) {
        updateContextIfNotHitCache(context, 'shadowColor', style.shadowColor.toString(), renderState.currentContext);
        for (var i = 0; i < SHADOW_NUMBER_STYLE.length; i++) {
          var styleName = SHADOW_NUMBER_STYLE[i];
          updateContextIfNotHitCache(context, styleName, style[styleName] || DEFAULT_STYLE[styleName], renderState.currentContext);
        }
      }
      if (style.filter && style.filter.length) {
        updateContextIfNotHitCache(context, 'filter',
        // use raw filter string
        object.attributes.filter, renderState.currentContext);
      }
    }
  }, {
    key: "clearShadowAndFilterStyleForContext",
    value: function clearShadowAndFilterStyleForContext(context, hasShadow, hasFilter, renderState) {
      var onlyClearShadowFilter = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      if (hasShadow) {
        updateContextIfNotHitCache(context, 'shadowColor', DEFAULT_STYLE.shadowColor, renderState.currentContext);
        for (var i = 0; i < SHADOW_NUMBER_STYLE.length; i++) {
          var styleName = SHADOW_NUMBER_STYLE[i];
          updateContextIfNotHitCache(context, styleName, DEFAULT_STYLE[styleName], renderState.currentContext);
        }
      }
      if (hasFilter) {
        if (hasShadow && onlyClearShadowFilter) {
          // save drop-shadow filter
          var oldFilter = context.filter;
          if (!isNil(oldFilter) && oldFilter.indexOf('drop-shadow') > -1) {
            updateContextIfNotHitCache(context, 'filter', oldFilter.replace(/drop-shadow\([^)]*\)/, '').trim() || DEFAULT_STYLE.filter, renderState.currentContext);
          }
        } else {
          updateContextIfNotHitCache(context, 'filter', DEFAULT_STYLE.filter, renderState.currentContext);
        }
      }
    }
  }, {
    key: "fillToContext",
    value: function fillToContext(context, object, renderState, plugin, runtime) {
      var _this = this;
      var _object$parsedStyle = object.parsedStyle,
        fill = _object$parsedStyle.fill,
        fillRule = _object$parsedStyle.fillRule;
      var resetStyle = null;
      if (Array.isArray(fill) && fill.length > 0) {
        fill.forEach(function (gradient) {
          var prevStyle = updateContextIfNotHitCache(context, 'fillStyle', getColor(gradient, object, context, _this.imagePool), renderState.currentContext);
          resetStyle = resetStyle !== null && resetStyle !== void 0 ? resetStyle : prevStyle;
          if (fillRule) {
            context.fill(fillRule);
          } else {
            context.fill();
          }
        });
      } else {
        if (isPattern(fill)) {
          var pattern = getPattern(fill, object, context, object.ownerDocument.defaultView.context, plugin, runtime, this.imagePool);
          if (pattern) {
            context.fillStyle = pattern;
            resetStyle = true;
          }
        }
        if (fillRule) {
          context.fill(fillRule);
        } else {
          context.fill();
        }
      }
      if (resetStyle !== null) {
        updateContextIfNotHitCache(context, 'fillStyle', resetStyle, renderState.currentContext);
      }
    }
  }, {
    key: "strokeToContext",
    value: function strokeToContext(context, object, renderState, plugin, runtime) {
      var _this2 = this;
      var stroke = object.parsedStyle.stroke;
      var resetStyle = null;
      if (Array.isArray(stroke) && stroke.length > 0) {
        stroke.forEach(function (gradient) {
          var prevStyle = updateContextIfNotHitCache(context, 'strokeStyle', getColor(gradient, object, context, _this2.imagePool), renderState.currentContext);
          resetStyle = resetStyle !== null && resetStyle !== void 0 ? resetStyle : prevStyle;
          context.stroke();
        });
      } else {
        if (isPattern(stroke)) {
          var pattern = getPattern(stroke, object, context, object.ownerDocument.defaultView.context, plugin, runtime, this.imagePool);
          if (pattern) {
            var prevStyle = updateContextIfNotHitCache(context, 'strokeStyle', pattern, renderState.currentContext);
            resetStyle = resetStyle !== null && resetStyle !== void 0 ? resetStyle : prevStyle;
          }
        }
        context.stroke();
      }
      if (resetStyle !== null) {
        updateContextIfNotHitCache(context, 'strokeStyle', resetStyle, renderState.currentContext);
      }
    }
  }, {
    key: "drawToContext",
    value: function drawToContext(context, object, renderState, plugin, runtime) {
      var _style$fill;
      var nodeName = object.nodeName;
      var style = object.parsedStyle;
      var _style$opacity = style.opacity,
        opacity = _style$opacity === void 0 ? DEFAULT_STYLE.globalAlpha : _style$opacity,
        _style$fillOpacity = style.fillOpacity,
        fillOpacity = _style$fillOpacity === void 0 ? DEFAULT_STYLE.fillOpacity : _style$fillOpacity,
        _style$strokeOpacity = style.strokeOpacity,
        strokeOpacity = _style$strokeOpacity === void 0 ? DEFAULT_STYLE.strokeOpacity : _style$strokeOpacity,
        _style$lineWidth2 = style.lineWidth,
        lineWidth = _style$lineWidth2 === void 0 ? DEFAULT_STYLE.lineWidth : _style$lineWidth2;
      var hasFill = style.fill && !style.fill.isNone;
      var hasStroke = style.stroke && !style.stroke.isNone && lineWidth > 0;
      if (!hasFill && !hasStroke) {
        return;
      }
      var hasShadow = !isNil(style.shadowColor) && style.shadowBlur > 0;
      var isInnerShadow = style.shadowType === 'inner';
      var isFillTransparent = ((_style$fill = style.fill) === null || _style$fill === void 0 ? void 0 : _style$fill.alpha) === 0;
      var hasFilter = !!(style.filter && style.filter.length);
      // Shadows can only be applied to fill() or stroke(), the default is fill()
      var shouldDrawShadowWithStroke = hasShadow && hasStroke && (nodeName === Shape.PATH || nodeName === Shape.LINE || nodeName === Shape.POLYLINE || isFillTransparent || isInnerShadow);

      // TODO https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/paint-order

      var originGlobalAlpha = null;
      if (hasFill) {
        if (!shouldDrawShadowWithStroke) {
          this.applyShadowAndFilterStyleToContext(context, object, hasShadow, renderState);
        }
        var updateOpacity = opacity * fillOpacity;
        originGlobalAlpha = updateContextIfNotHitCache(context, 'globalAlpha', updateOpacity, renderState.currentContext);
        this.fillToContext(context, object, renderState, plugin, runtime);
        if (!shouldDrawShadowWithStroke) {
          this.clearShadowAndFilterStyleForContext(context, hasShadow, hasFilter, renderState);
        }
      }
      if (hasStroke) {
        var clearShadowAndFilter = false;
        var _updateOpacity = opacity * strokeOpacity;
        var prevOpacity = updateContextIfNotHitCache(context, 'globalAlpha', _updateOpacity, renderState.currentContext);
        originGlobalAlpha = hasFill ? originGlobalAlpha : prevOpacity;
        if (shouldDrawShadowWithStroke) {
          this.applyShadowAndFilterStyleToContext(context, object, hasShadow, renderState);
          clearShadowAndFilter = true;
          if (isInnerShadow) {
            var originBlend = context.globalCompositeOperation;
            context.globalCompositeOperation = 'source-atop';
            this.strokeToContext(context, object, renderState, plugin, runtime);
            context.globalCompositeOperation = originBlend;
            this.clearShadowAndFilterStyleForContext(context, hasShadow, hasFilter, renderState, true);
          }
        }
        this.strokeToContext(context, object, renderState, plugin, runtime);
        if (clearShadowAndFilter) {
          this.clearShadowAndFilterStyleForContext(context, hasShadow, hasFilter, renderState);
        }
      }

      // clear
      if (originGlobalAlpha !== null) {
        updateContextIfNotHitCache(context, 'globalAlpha', originGlobalAlpha, renderState.currentContext);
      }
    }
  }]);
}();

var DefaultRenderer = /*#__PURE__*/function (_OptimizedDefaultRend) {
  function DefaultRenderer() {
    _classCallCheck(this, DefaultRenderer);
    return _callSuper(this, DefaultRenderer, arguments);
  }
  _inherits(DefaultRenderer, _OptimizedDefaultRend);
  return _createClass(DefaultRenderer, [{
    key: "render",
    value: function render(context, parsedStyle, object, canvasContext, plugin, runtime) {
      var fill = parsedStyle.fill,
        fillRule = parsedStyle.fillRule,
        _parsedStyle$opacity = parsedStyle.opacity,
        opacity = _parsedStyle$opacity === void 0 ? 1 : _parsedStyle$opacity,
        _parsedStyle$fillOpac = parsedStyle.fillOpacity,
        fillOpacity = _parsedStyle$fillOpac === void 0 ? 1 : _parsedStyle$fillOpac,
        stroke = parsedStyle.stroke,
        _parsedStyle$strokeOp = parsedStyle.strokeOpacity,
        strokeOpacity = _parsedStyle$strokeOp === void 0 ? 1 : _parsedStyle$strokeOp,
        _parsedStyle$lineWidt = parsedStyle.lineWidth,
        lineWidth = _parsedStyle$lineWidt === void 0 ? 1 : _parsedStyle$lineWidt,
        lineCap = parsedStyle.lineCap,
        lineJoin = parsedStyle.lineJoin,
        shadowType = parsedStyle.shadowType,
        shadowColor = parsedStyle.shadowColor,
        shadowBlur = parsedStyle.shadowBlur,
        filter = parsedStyle.filter,
        miterLimit = parsedStyle.miterLimit;
      var hasFill = fill && !fill.isNone;
      var hasStroke = stroke && !stroke.isNone && lineWidth > 0;
      var isFillTransparent = (fill === null || fill === void 0 ? void 0 : fill.alpha) === 0;
      var hasFilter = !!(filter && filter.length);
      var hasShadow = !isNil(shadowColor) && shadowBlur > 0;
      var nodeName = object.nodeName;
      var isInnerShadow = shadowType === 'inner';
      var shouldDrawShadowWithStroke = hasStroke && hasShadow && (nodeName === Shape.PATH || nodeName === Shape.LINE || nodeName === Shape.POLYLINE || isFillTransparent || isInnerShadow);
      if (hasFill) {
        context.globalAlpha = opacity * fillOpacity;
        if (!shouldDrawShadowWithStroke) {
          setShadowAndFilter(object, context, hasShadow);
        }
        applyFill(context, object, fill, fillRule, canvasContext, plugin, runtime, this.imagePool);
        if (!shouldDrawShadowWithStroke) {
          this.clearShadowAndFilter(context, hasFilter, hasShadow);
        }
      }
      if (hasStroke) {
        context.globalAlpha = opacity * strokeOpacity;
        context.lineWidth = lineWidth;
        if (!isNil(miterLimit)) {
          context.miterLimit = miterLimit;
        }
        if (!isNil(lineCap)) {
          context.lineCap = lineCap;
        }
        if (!isNil(lineJoin)) {
          context.lineJoin = lineJoin;
        }
        if (shouldDrawShadowWithStroke) {
          if (isInnerShadow) {
            context.globalCompositeOperation = 'source-atop';
          }
          setShadowAndFilter(object, context, true);
          if (isInnerShadow) {
            applyStroke(context, object, stroke, canvasContext, plugin, runtime, this.imagePool);
            context.globalCompositeOperation = DEFAULT_STYLE.globalCompositeOperation;
            this.clearShadowAndFilter(context, hasFilter, true);
          }
        }
        applyStroke(context, object, stroke, canvasContext, plugin, runtime, this.imagePool);
      }
    }
  }, {
    key: "clearShadowAndFilter",
    value: function clearShadowAndFilter(context, hasFilter, hasShadow) {
      if (hasShadow) {
        context.shadowColor = 'transparent';
        context.shadowBlur = 0;
      }
      if (hasFilter) {
        // save drop-shadow filter
        var oldFilter = context.filter;
        if (!isNil(oldFilter) && oldFilter.indexOf('drop-shadow') > -1) {
          context.filter = oldFilter.replace(/drop-shadow\([^)]*\)/, '').trim() || 'none';
        }
      }
    }
  }]);
}(OptimizedDefaultRenderer);

/**
 * apply before fill and stroke but only once
 */
function setShadowAndFilter(object, context, hasShadow) {
  var _object$parsedStyle = object.parsedStyle,
    filter = _object$parsedStyle.filter,
    shadowColor = _object$parsedStyle.shadowColor,
    shadowBlur = _object$parsedStyle.shadowBlur,
    shadowOffsetX = _object$parsedStyle.shadowOffsetX,
    shadowOffsetY = _object$parsedStyle.shadowOffsetY;
  if (filter && filter.length) {
    // use raw filter string
    context.filter = object.style.filter;
  }
  if (hasShadow) {
    context.shadowColor = shadowColor.toString();
    context.shadowBlur = shadowBlur || 0;
    context.shadowOffsetX = shadowOffsetX || 0;
    context.shadowOffsetY = shadowOffsetY || 0;
  }
}
function applyFill(context, object, fill, fillRule, canvasContext, plugin, runtime, imagePool) {
  var skipFill = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
  if (Array.isArray(fill)) {
    fill.forEach(function (gradient) {
      context.fillStyle = getColor(gradient, object, context, imagePool);
      if (!skipFill) {
        fillRule ? context.fill(fillRule) : context.fill();
      }
    });
  } else {
    if (isPattern(fill)) {
      context.fillStyle = getPattern(fill, object, context, canvasContext, plugin, runtime, imagePool);
    }
    if (!skipFill) {
      fillRule ? context.fill(fillRule) : context.fill();
    }
  }
}
function applyStroke(context, object, stroke, canvasContext, plugin, runtime, imagePool) {
  var skipStroke = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  if (Array.isArray(stroke)) {
    stroke.forEach(function (gradient) {
      context.strokeStyle = getColor(gradient, object, context, imagePool);
      if (!skipStroke) {
        context.stroke();
      }
    });
  } else {
    if (isPattern(stroke)) {
      context.strokeStyle = getPattern(stroke, object, context, canvasContext, plugin, runtime, imagePool);
    }
    if (!skipStroke) {
      context.stroke();
    }
  }
}

function calculateOverlapRect(rect1, rect2) {
  var _rect = _slicedToArray(rect1, 4),
    x1 = _rect[0],
    y1 = _rect[1],
    w1 = _rect[2],
    h1 = _rect[3];
  var _rect2 = _slicedToArray(rect2, 4),
    x2 = _rect2[0],
    y2 = _rect2[1],
    w2 = _rect2[2],
    h2 = _rect2[3];

  // 计算重叠区域的左上角和右下角
  var overlapLeft = Math.max(x1, x2);
  var overlapTop = Math.max(y1, y2);
  var overlapRight = Math.min(x1 + w1, x2 + w2);
  var overlapBottom = Math.min(y1 + h1, y2 + h2);
  if (overlapRight <= overlapLeft || overlapBottom <= overlapTop) {
    return null;
  }
  return [overlapLeft, overlapTop, overlapRight - overlapLeft, overlapBottom - overlapTop];
}
function transformRect(rect, matrix) {
  var tl = vec3.transformMat4(vec3.create(), [rect[0], rect[1], 0], matrix);
  var tr = vec3.transformMat4(vec3.create(), [rect[0] + rect[2], rect[1], 0], matrix);
  var bl = vec3.transformMat4(vec3.create(), [rect[0], rect[1] + rect[3], 0], matrix);
  var br = vec3.transformMat4(vec3.create(), [rect[0] + rect[2], rect[1] + rect[3], 0], matrix);
  return [Math.min(tl[0], tr[0], bl[0], br[0]), Math.min(tl[1], tr[1], bl[1], br[1]), Math.max(tl[0], tr[0], bl[0], br[0]) - Math.min(tl[0], tr[0], bl[0], br[0]), Math.max(tl[1], tr[1], bl[1], br[1]) - Math.min(tl[1], tr[1], bl[1], br[1])];
}

var ImageRenderer = /*#__PURE__*/function (_DefaultRenderer) {
  function ImageRenderer() {
    _classCallCheck(this, ImageRenderer);
    return _callSuper(this, ImageRenderer, arguments);
  }
  _inherits(ImageRenderer, _DefaultRenderer);
  return _createClass(ImageRenderer, [{
    key: "renderDownSampled",
    value: function renderDownSampled(context, parsedStyle, object, data) {
      var src = data.src,
        imageCache = data.imageCache;
      if (!imageCache.downSampled) {
        this.imagePool.createDownSampledImage(src, object).then(function () {
          // be removed from dom tree
          if (!object.ownerDocument) {
            return;
          }

          // rerender
          object.dirty();
          object.ownerDocument.defaultView.context.renderingService.dirty();
        })["catch"](function (reason) {
          console.error(reason);
        });
        return;
      }
      context.drawImage(imageCache.downSampled, Math.floor(data.drawRect[0]), Math.floor(data.drawRect[1]), Math.ceil(data.drawRect[2]), Math.ceil(data.drawRect[3]));
    }
  }, {
    key: "renderTile",
    value: function renderTile(context, parsedStyle, object, data) {
      var src = data.src,
        imageCache = data.imageCache,
        imageRect = data.imageRect,
        drawRect = data.drawRect;
      var originalSize = imageCache.size;
      var _context$getTransform = context.getTransform(),
        a = _context$getTransform.a,
        b = _context$getTransform.b,
        c = _context$getTransform.c,
        d = _context$getTransform.d,
        e = _context$getTransform.e,
        f = _context$getTransform.f;
      context.resetTransform();
      if (!(imageCache !== null && imageCache !== void 0 && imageCache.gridSize)) {
        this.imagePool.createImageTiles(src, [], function () {
          // be removed from dom tree
          if (!object.ownerDocument) {
            return;
          }

          // rerender
          object.dirty();
          object.ownerDocument.defaultView.context.renderingService.dirty();
        }, object)["catch"](function (reason) {
          console.error(reason);
        });
        return;
      }
      var scaleToOrigin = [originalSize[0] / imageRect[2], originalSize[1] / imageRect[3]];
      var scaledTileSize = [imageCache.tileSize[0] / scaleToOrigin[0], imageCache.tileSize[1] / scaleToOrigin[1]];
      var _ref = [Math.floor((drawRect[0] - imageRect[0]) / scaledTileSize[0]), Math.ceil((drawRect[0] + drawRect[2] - imageRect[0]) / scaledTileSize[0])],
        startTileX = _ref[0],
        endTileX = _ref[1];
      var _ref2 = [Math.floor((drawRect[1] - imageRect[1]) / scaledTileSize[1]), Math.ceil((drawRect[1] + drawRect[3] - imageRect[1]) / scaledTileSize[1])],
        startTileY = _ref2[0],
        endTileY = _ref2[1];
      for (var tileY = startTileY; tileY <= endTileY; tileY++) {
        for (var tileX = startTileX; tileX <= endTileX; tileX++) {
          var item = imageCache.tiles[tileY][tileX];
          if (item) {
            var tileRect = [Math.floor(imageRect[0] + item.tileX * scaledTileSize[0]), Math.floor(imageRect[1] + item.tileY * scaledTileSize[1]), Math.ceil(scaledTileSize[0]), Math.ceil(scaledTileSize[1])];
            context.drawImage(item.data, tileRect[0], tileRect[1], tileRect[2], tileRect[3]);
          }
        }
      }
      context.setTransform(a, b, c, d, e, f);
    }
  }, {
    key: "render",
    value: function render(context, parsedStyle, object) {
      var _parsedStyle$x = parsedStyle.x,
        x = _parsedStyle$x === void 0 ? 0 : _parsedStyle$x,
        _parsedStyle$y = parsedStyle.y,
        y = _parsedStyle$y === void 0 ? 0 : _parsedStyle$y,
        width = parsedStyle.width,
        height = parsedStyle.height,
        src = parsedStyle.src,
        shadowColor = parsedStyle.shadowColor,
        shadowBlur = parsedStyle.shadowBlur;
      var imageCache = this.imagePool.getImageSync(src, object);
      var image = imageCache === null || imageCache === void 0 ? void 0 : imageCache.img;
      var iw = width;
      var ih = height;
      if (!image) {
        return;
      }
      iw || (iw = image.width);
      ih || (ih = image.height);
      var hasShadow = !isNil(shadowColor) && shadowBlur > 0;
      setShadowAndFilter(object, context, hasShadow);

      // node-canvas will throw the following err:
      // Error: Image given has not completed loading
      try {
        var _object$ownerDocument = object.ownerDocument.defaultView.getContextService().getDomElement(),
          viewWidth = _object$ownerDocument.width,
          viewHeight = _object$ownerDocument.height;
        var currentTransform = context.getTransform();
        var a = currentTransform.a,
          b = currentTransform.b,
          c = currentTransform.c,
          d = currentTransform.d,
          e = currentTransform.e,
          f = currentTransform.f;
        // 构建 mat4 矩阵
        // prettier-ignore
        var transformMatrix = mat4.fromValues(a, c, 0, 0, b, d, 0, 0, 0, 0, 1, 0, e, f, 0, 1);
        var imageRect = transformRect([x, y, iw, ih], transformMatrix);
        var drawRect = calculateOverlapRect([0, 0, viewWidth, viewHeight], imageRect);
        if (!drawRect) {
          return;
        }
        if (!object.ownerDocument.defaultView.getConfig().enableLargeImageOptimization) {
          ImageRenderer.renderFull(context, parsedStyle, object, {
            image: image,
            drawRect: [x, y, iw, ih]
          });
          return;
        }
        var sizeOfOrigin = imageRect[2] / imageCache.size[0];
        if (sizeOfOrigin < (imageCache.downSamplingRate || 0.5)) {
          this.renderDownSampled(context, parsedStyle, object, {
            src: src,
            imageCache: imageCache,
            drawRect: [x, y, iw, ih]
          });
          return;
        }
        if (!ImagePool.isSupportTile) {
          ImageRenderer.renderFull(context, parsedStyle, object, {
            image: image,
            drawRect: [x, y, iw, ih]
          });
          return;
        }
        this.renderTile(context, parsedStyle, object, {
          src: src,
          imageCache: imageCache,
          imageRect: imageRect,
          drawRect: drawRect
        });
      } catch (_unused) {
        // expected error
      }
    }

    // ---
  }, {
    key: "drawToContext",
    value: function drawToContext(context, object, renderState, plugin, runtime) {
      this.render(context, object.parsedStyle, object);
    }
  }], [{
    key: "renderFull",
    value: function renderFull(context, parsedStyle, object, data) {
      context.drawImage(data.image, Math.floor(data.drawRect[0]), Math.floor(data.drawRect[1]), Math.ceil(data.drawRect[2]), Math.ceil(data.drawRect[3]));
    }
  }]);
}(DefaultRenderer);

var TextRenderer = /*#__PURE__*/function (_DefaultRenderer) {
  function TextRenderer() {
    _classCallCheck(this, TextRenderer);
    return _callSuper(this, TextRenderer, arguments);
  }
  _inherits(TextRenderer, _DefaultRenderer);
  return _createClass(TextRenderer, [{
    key: "render",
    value: function render(context, parsedStyle, object, canvasContext, plugin, runtime) {
      // Trigger text geometry calculation.
      object.getBounds();
      var _parsedStyle$lineWidt = parsedStyle.lineWidth,
        lineWidth = _parsedStyle$lineWidt === void 0 ? 1 : _parsedStyle$lineWidt,
        _parsedStyle$textAlig = parsedStyle.textAlign,
        textAlign = _parsedStyle$textAlig === void 0 ? 'start' : _parsedStyle$textAlig,
        _parsedStyle$textBase = parsedStyle.textBaseline,
        textBaseline = _parsedStyle$textBase === void 0 ? 'alphabetic' : _parsedStyle$textBase,
        _parsedStyle$lineJoin = parsedStyle.lineJoin,
        lineJoin = _parsedStyle$lineJoin === void 0 ? 'miter' : _parsedStyle$lineJoin,
        _parsedStyle$miterLim = parsedStyle.miterLimit,
        miterLimit = _parsedStyle$miterLim === void 0 ? 10 : _parsedStyle$miterLim,
        _parsedStyle$letterSp = parsedStyle.letterSpacing,
        letterSpacing = _parsedStyle$letterSp === void 0 ? 0 : _parsedStyle$letterSp,
        stroke = parsedStyle.stroke,
        fill = parsedStyle.fill,
        fillRule = parsedStyle.fillRule,
        _parsedStyle$fillOpac = parsedStyle.fillOpacity,
        fillOpacity = _parsedStyle$fillOpac === void 0 ? 1 : _parsedStyle$fillOpac,
        _parsedStyle$strokeOp = parsedStyle.strokeOpacity,
        strokeOpacity = _parsedStyle$strokeOp === void 0 ? 1 : _parsedStyle$strokeOp,
        _parsedStyle$opacity = parsedStyle.opacity,
        opacity = _parsedStyle$opacity === void 0 ? 1 : _parsedStyle$opacity,
        metrics = parsedStyle.metrics,
        _parsedStyle$x = parsedStyle.x,
        x = _parsedStyle$x === void 0 ? 0 : _parsedStyle$x,
        _parsedStyle$y = parsedStyle.y,
        y = _parsedStyle$y === void 0 ? 0 : _parsedStyle$y,
        dx = parsedStyle.dx,
        dy = parsedStyle.dy,
        shadowColor = parsedStyle.shadowColor,
        shadowBlur = parsedStyle.shadowBlur,
        textDecorationLine = parsedStyle.textDecorationLine;
      var font = metrics.font,
        lines = metrics.lines,
        height = metrics.height,
        lineHeight = metrics.lineHeight,
        lineMetrics = metrics.lineMetrics;
      context.font = font;
      context.lineWidth = lineWidth;
      context.textAlign = textAlign === 'middle' ? 'center' : textAlign;
      var formattedTextBaseline = textBaseline;
      if (formattedTextBaseline === 'alphabetic') {
        formattedTextBaseline = 'bottom';
      }
      context.lineJoin = lineJoin;
      if (!isNil(miterLimit)) {
        context.miterLimit = miterLimit;
      }
      var linePositionY = y;
      // handle vertical text baseline
      if (textBaseline === 'middle') {
        linePositionY += -height / 2 - lineHeight / 2;
      } else if (textBaseline === 'bottom' || textBaseline === 'alphabetic' || textBaseline === 'ideographic') {
        linePositionY += -height;
      } else if (textBaseline === 'top' || textBaseline === 'hanging') {
        linePositionY += -lineHeight;
      }

      // account for dx & dy
      var offsetX = x + (dx || 0);
      linePositionY += dy || 0;
      if (lines.length === 1) {
        if (formattedTextBaseline === 'bottom') {
          formattedTextBaseline = 'middle';
          linePositionY -= 0.5 * height;
        } else if (formattedTextBaseline === 'top') {
          formattedTextBaseline = 'middle';
          linePositionY += 0.5 * height;
        }
      }
      context.textBaseline = formattedTextBaseline;
      var hasShadow = !isNil(shadowColor) && shadowBlur > 0;
      setShadowAndFilter(object, context, hasShadow);

      // draw lines line by line
      for (var i = 0; i < lines.length; i++) {
        var linePositionX = lineWidth / 2 + offsetX;
        linePositionY += lineHeight;

        // no need to re-position X, cause we already set text align
        // @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textAlign
        if (!isNil(stroke) && !stroke.isNone && lineWidth) {
          this.drawLetterSpacing(context, object, lines[i], lineMetrics[i], textAlign, linePositionX, linePositionY, letterSpacing, fill, fillRule, fillOpacity, stroke, strokeOpacity, opacity, true, canvasContext, plugin, runtime);
        }
        if (!isNil(fill)) {
          this.drawLetterSpacing(context, object, lines[i], lineMetrics[i], textAlign, linePositionX, linePositionY, letterSpacing, fill, fillRule, fillOpacity, stroke, strokeOpacity, opacity, false, canvasContext, plugin, runtime);
        }
      }

      // Draw text decoration lines
      if (textDecorationLine && textDecorationLine !== 'none') {
        this.drawTextDecorations(context, parsedStyle, object, lines, lineHeight, offsetX, y + (dy || 0), canvasContext, plugin, runtime);
      }
    }
  }, {
    key: "drawLetterSpacing",
    value: function drawLetterSpacing(context, object, text, lineMetrics, textAlign, x, y, letterSpacing, fill, fillRule, fillOpacity, stroke, strokeOpacity, opacity, isStroke, canvasContext, plugin, runtime) {
      // letterSpacing of 0 means normal, render all texts directly
      if (letterSpacing === 0) {
        if (isStroke) {
          this.strokeText(context, object, text, x, y, stroke, strokeOpacity, canvasContext, plugin, runtime);
        } else {
          this.fillText(context, object, text, x, y, fill, fillRule, fillOpacity, opacity, canvasContext, plugin, runtime);
        }
        return;
      }

      // draw text using left align
      var currentTextAlign = context.textAlign;
      context.textAlign = 'left';
      var currentPosition = x;
      if (textAlign === 'center' || textAlign === 'middle') {
        currentPosition = x - lineMetrics.width / 2;
      } else if (textAlign === 'right' || textAlign === 'end') {
        currentPosition = x - lineMetrics.width;
      }
      var stringArray = Array.from(text);
      var previousWidth = context.measureText(text).width;
      var currentWidth = 0;
      for (var i = 0; i < stringArray.length; ++i) {
        var currentChar = stringArray[i];
        if (isStroke) {
          this.strokeText(context, object, currentChar, currentPosition, y, stroke, strokeOpacity, canvasContext, plugin, runtime);
        } else {
          this.fillText(context, object, currentChar, currentPosition, y, fill, fillRule, fillOpacity, opacity, canvasContext, plugin, runtime);
        }
        currentWidth = context.measureText(text.substring(i + 1)).width;
        currentPosition += previousWidth - currentWidth + letterSpacing;
        previousWidth = currentWidth;
      }
      context.textAlign = currentTextAlign;
    }
  }, {
    key: "fillText",
    value: function fillText(context, object, text, x, y, fill, fillRule, fillOpacity, opacity, canvasContext, plugin, runtime) {
      applyFill(context, object, fill, fillRule, canvasContext, plugin, runtime, this.imagePool, true);
      var currentGlobalAlpha;
      var applyOpacity = !isNil(fillOpacity) && fillOpacity !== 1;
      if (applyOpacity) {
        currentGlobalAlpha = context.globalAlpha;
        context.globalAlpha = fillOpacity * opacity;
      }
      context.fillText(text, x, y);
      if (applyOpacity) {
        context.globalAlpha = currentGlobalAlpha;
      }
    }
  }, {
    key: "strokeText",
    value: function strokeText(context, object, text, x, y, stroke, strokeOpacity, canvasContext, plugin, runtime) {
      applyStroke(context, object, stroke, canvasContext, plugin, runtime, this.imagePool, true);
      var currentGlobalAlpha;
      var applyOpacity = !isNil(strokeOpacity) && strokeOpacity !== 1;
      if (applyOpacity) {
        currentGlobalAlpha = context.globalAlpha;
        context.globalAlpha = strokeOpacity;
      }
      context.strokeText(text, x, y);
      if (applyOpacity) {
        context.globalAlpha = currentGlobalAlpha;
      }
    }

    /**
     * Draw text decoration lines (underline, overline, line-through)
     */
  }, {
    key: "drawTextDecorations",
    value: function drawTextDecorations(context, parsedStyle, object, lines, lineHeight, offsetX, baseY, canvasContext, plugin, runtime) {
      var textDecorationLine = parsedStyle.textDecorationLine,
        textDecorationColor = parsedStyle.textDecorationColor,
        textDecorationStyle = parsedStyle.textDecorationStyle,
        _parsedStyle$textDeco = parsedStyle.textDecorationThickness,
        textDecorationThickness = _parsedStyle$textDeco === void 0 ? 1 : _parsedStyle$textDeco,
        _parsedStyle$textAlig2 = parsedStyle.textAlign,
        textAlign = _parsedStyle$textAlig2 === void 0 ? 'start' : _parsedStyle$textAlig2,
        _parsedStyle$lineWidt2 = parsedStyle.lineWidth,
        lineWidth = _parsedStyle$lineWidt2 === void 0 ? 1 : _parsedStyle$lineWidt2,
        metrics = parsedStyle.metrics;
      if (!textDecorationLine || textDecorationLine === 'none') {
        return;
      }
      var lineMetrics = metrics.lineMetrics;
      var decorations = textDecorationLine.split(' ');

      // Set decoration style
      context.lineWidth = textDecorationThickness;
      if (textDecorationColor) {
        context.strokeStyle = "rgba(".concat(textDecorationColor.r, ", ").concat(textDecorationColor.g, ", ").concat(textDecorationColor.b, ", ").concat(textDecorationColor.alpha, ")");
      }

      // Set line style based on textDecorationStyle
      switch (textDecorationStyle) {
        case 'dashed':
          context.setLineDash([5, 5]);
          break;
        case 'dotted':
          context.setLineDash([2, 2]);
          break;
        case 'wavy':
          // For wavy, we'll use a simple approximation with bezier curves
          // A full implementation would be more complex
          context.setLineDash([]);
          break;
        default:
          context.setLineDash([]);
          break;
      }
      var linePositionY = baseY;

      // Adjust for text baseline
      var _parsedStyle$textBase2 = parsedStyle.textBaseline,
        textBaseline = _parsedStyle$textBase2 === void 0 ? 'alphabetic' : _parsedStyle$textBase2;
      if (textBaseline === 'middle') {
        linePositionY += -metrics.height / 2 - lineHeight / 2;
      } else if (textBaseline === 'bottom' || textBaseline === 'alphabetic' || textBaseline === 'ideographic') {
        linePositionY += -metrics.height;
      } else if (textBaseline === 'top' || textBaseline === 'hanging') {
        linePositionY += -lineHeight;
      }

      // Draw each decoration for each line
      for (var i = 0; i < lines.length; i++) {
        linePositionY += lineHeight;
        var lineMetric = lineMetrics[i];
        if (!lineMetric) continue;
        var lineWidthOffset = lineWidth / 2;
        var startX = offsetX;
        var endX = offsetX + lineMetric.width;

        // Adjust for text alignment
        if (textAlign === 'center' || textAlign === 'middle') {
          startX = offsetX - lineMetric.width / 2;
          endX = offsetX + lineMetric.width / 2;
        } else if (textAlign === 'right' || textAlign === 'end') {
          startX = offsetX - lineMetric.width;
          endX = offsetX;
        }

        // Add lineWidth offset
        startX += lineWidthOffset;
        endX += lineWidthOffset;

        // Draw each type of decoration
        var _iterator = _createForOfIteratorHelper(decorations),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var decoration = _step.value;
            var decorationY = linePositionY;
            switch (decoration) {
              case 'underline':
                decorationY += 2; // Small offset below baseline
                break;
              case 'overline':
                decorationY -= lineHeight - 2; // Small offset above line
                break;
              case 'line-through':
                decorationY -= lineHeight / 2; // Middle of line
                break;
              default:
                continue;
              // Unknown decoration type
            }
            if (textDecorationStyle === 'wavy') {
              this.drawWavyLine(context, startX, endX, decorationY);
            } else {
              context.beginPath();
              context.moveTo(startX, decorationY);
              context.lineTo(endX, decorationY);
              context.stroke();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      // Reset line dash
      context.setLineDash([]);
    }

    /**
     * Draw a wavy line as an approximation of the wavy text decoration style
     */
  }, {
    key: "drawWavyLine",
    value: function drawWavyLine(context, startX, endX, y) {
      var amplitude = 2; // Height of the wave
      var wavelength = 10; // Length of one wave cycle
      var numWaves = Math.floor((endX - startX) / wavelength);
      context.beginPath();
      context.moveTo(startX, y);
      for (var i = 0; i < numWaves; i++) {
        var x1 = startX + i * wavelength + wavelength / 4;
        var y1 = y + amplitude;
        var x2 = startX + i * wavelength + wavelength / 2;
        var y2 = y;
        context.quadraticCurveTo(x1, y1, x2, y2);
        var x3 = startX + i * wavelength + wavelength * 3 / 4;
        var y3 = y - amplitude;
        var x4 = startX + (i + 1) * wavelength;
        var y4 = y;
        context.quadraticCurveTo(x3, y3, x4, y4);
      }
      context.stroke();
    }

    // ---
  }, {
    key: "drawToContext",
    value: function drawToContext(context, object, renderState, plugin, runtime) {
      this.render(context, object.parsedStyle, object, object.ownerDocument.defaultView.context, plugin, runtime);
    }
  }]);
}(DefaultRenderer);

var Plugin$2 = /*#__PURE__*/function (_AbstractRendererPlug) {
  function Plugin() {
    var _this;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Plugin);
    _this = _callSuper(this, Plugin);
    _this.name = 'canvas-renderer';
    _this.options = options;
    return _this;
  }
  _inherits(Plugin, _AbstractRendererPlug);
  return _createClass(Plugin, [{
    key: "init",
    value: function init() {
      var _defaultStyleRenderer;
      var canvasRendererPluginOptions = _objectSpread({
        dirtyObjectNumThreshold: 500,
        dirtyObjectRatioThreshold: 0.8
      }, this.options);

      // @ts-ignore
      var imagePool = this.context.imagePool;
      var defaultRenderer = new DefaultRenderer(imagePool);
      var defaultStyleRendererFactory = (_defaultStyleRenderer = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defaultStyleRenderer, Shape.CIRCLE, defaultRenderer), Shape.ELLIPSE, defaultRenderer), Shape.RECT, defaultRenderer), Shape.IMAGE, new ImageRenderer(imagePool)), Shape.TEXT, new TextRenderer(imagePool)), Shape.LINE, defaultRenderer), Shape.POLYLINE, defaultRenderer), Shape.POLYGON, defaultRenderer), Shape.PATH, defaultRenderer), Shape.GROUP, undefined), _defineProperty(_defineProperty(_defineProperty(_defaultStyleRenderer, Shape.HTML, undefined), Shape.MESH, undefined), Shape.FRAGMENT, undefined));
      this.context.defaultStyleRendererFactory = defaultStyleRendererFactory;
      this.context.styleRendererFactory = defaultStyleRendererFactory;
      this.addRenderingPlugin(new CanvasRendererPlugin(canvasRendererPluginOptions));
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeAllRenderingPlugins();
      delete this.context.defaultStyleRendererFactory;
      delete this.context.styleRendererFactory;
    }
  }]);
}(AbstractRendererPlugin);

var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  CircleRenderer: DefaultRenderer,
  DefaultRenderer: DefaultRenderer,
  EllipseRenderer: DefaultRenderer,
  ImageRenderer: ImageRenderer,
  LineRenderer: DefaultRenderer,
  PathRenderer: DefaultRenderer,
  Plugin: Plugin$2,
  PolygonRenderer: DefaultRenderer,
  PolylineRenderer: DefaultRenderer,
  RectRenderer: DefaultRenderer,
  TextRenderer: TextRenderer
});

var tmpVec3a = vec3.create();
var tmpVec3b = vec3.create();
var tmpVec3c = vec3.create();
var tmpMat4 = mat4.create();
/**
 * pick shape(s) with Mouse/Touch event
 *
 * 1. find AABB with r-tree
 * 2. do math calculation with geometry in an accurate way
 */
var CanvasPickerPlugin = /*#__PURE__*/function () {
  function CanvasPickerPlugin() {
    var _this = this;
    _classCallCheck(this, CanvasPickerPlugin);
    this.isHit = function (displayObject, position, worldTransform, isClipPath) {
      // use picker for current shape's type
      var pick = _this.context.pointInPathPickerFactory[displayObject.nodeName];
      if (pick) {
        // invert with world matrix
        var invertWorldMat = mat4.invert(tmpMat4, worldTransform);

        // transform client position to local space, do picking in local space
        var localPosition = vec3.transformMat4(tmpVec3b, vec3.set(tmpVec3c, position[0], position[1], 0), invertWorldMat);
        if (pick(displayObject, new Point(localPosition[0], localPosition[1]), isClipPath, _this.isPointInPath, _this.context, _this.runtime)) {
          return true;
        }
      }
      return false;
    };
    /**
     * use native picking method
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/isPointInPath
     */
    this.isPointInPath = function (displayObject, position) {
      var context = _this.runtime.offscreenCanvasCreator.getOrCreateContext(_this.context.config.offscreenCanvas);
      var generatePath = _this.context.pathGeneratorFactory[displayObject.nodeName];
      if (generatePath) {
        context.beginPath();
        generatePath(context, displayObject.parsedStyle);
        context.closePath();
      }
      return context.isPointInPath(position.x, position.y);
    };
  }
  return _createClass(CanvasPickerPlugin, [{
    key: "apply",
    value: function apply(context, runtime) {
      var _renderingContext$roo,
        _this2 = this;
      var renderingService = context.renderingService,
        renderingContext = context.renderingContext;
      this.context = context;
      this.runtime = runtime;
      var document = (_renderingContext$roo = renderingContext.root) === null || _renderingContext$roo === void 0 ? void 0 : _renderingContext$roo.ownerDocument;
      renderingService.hooks.pick.tapPromise(CanvasPickerPlugin.tag, /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(result) {
          return _regeneratorRuntime().wrap(function (_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _this2.pick(document, result));
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
      renderingService.hooks.pickSync.tap(CanvasPickerPlugin.tag, function (result) {
        return _this2.pick(document, result);
      });
    }
  }, {
    key: "pick",
    value: function pick(document, result) {
      var topmost = result.topmost,
        _result$position = result.position,
        x = _result$position.x,
        y = _result$position.y;

      // position in world space
      var position = vec3.set(tmpVec3a, x, y, 0);

      // query by AABB
      var hitTestList = document.elementsFromBBox(position[0], position[1], position[0], position[1]);

      // test with clip path & origin shape
      // @see https://github.com/antvis/g/issues/1064
      var pickedDisplayObjects = [];
      var _iterator = _createForOfIteratorHelper(hitTestList),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _displayObject = _step.value;
          var worldTransform = _displayObject.getWorldTransform();
          var isHitOriginShape = this.isHit(_displayObject, position, worldTransform, false);
          if (isHitOriginShape) {
            // should look up in the ancestor node
            var clipped = findClosestClipPathTarget(_displayObject);
            if (clipped) {
              var clipPath = clipped.parsedStyle.clipPath;
              var isHitClipPath = this.isHit(clipPath, position, clipPath.getWorldTransform(), true);
              if (isHitClipPath) {
                if (topmost) {
                  result.picked = [_displayObject];
                  return result;
                }
                pickedDisplayObjects.push(_displayObject);
              }
            } else {
              if (topmost) {
                result.picked = [_displayObject];
                return result;
              }
              pickedDisplayObjects.push(_displayObject);
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      result.picked = pickedDisplayObjects;
      return result;
    }
  }]);
}();
CanvasPickerPlugin.tag = 'CanvasPicker';

function isPointInPath$8(displayObject, position, isClipPath) {
  var _ref = displayObject.parsedStyle,
    _ref$cx = _ref.cx,
    cx = _ref$cx === void 0 ? 0 : _ref$cx,
    _ref$cy = _ref.cy,
    cy = _ref$cy === void 0 ? 0 : _ref$cy,
    r = _ref.r,
    fill = _ref.fill,
    stroke = _ref.stroke,
    _ref$lineWidth = _ref.lineWidth,
    lineWidth = _ref$lineWidth === void 0 ? 1 : _ref$lineWidth,
    _ref$increasedLineWid = _ref.increasedLineWidthForHitTesting,
    increasedLineWidthForHitTesting = _ref$increasedLineWid === void 0 ? 0 : _ref$increasedLineWid,
    _ref$pointerEvents = _ref.pointerEvents,
    pointerEvents = _ref$pointerEvents === void 0 ? 'auto' : _ref$pointerEvents;
  var halfLineWidth = (lineWidth + increasedLineWidthForHitTesting) / 2;
  var absDistance = distance(cx, cy, position.x, position.y);
  var _isFillOrStrokeAffect = isFillOrStrokeAffected(pointerEvents, fill, stroke),
    _isFillOrStrokeAffect2 = _slicedToArray(_isFillOrStrokeAffect, 2),
    hasFill = _isFillOrStrokeAffect2[0],
    hasStroke = _isFillOrStrokeAffect2[1];
  if (hasFill && hasStroke || isClipPath) {
    return absDistance <= r + halfLineWidth;
  }
  if (hasFill) {
    return absDistance <= r;
  }
  if (hasStroke) {
    return absDistance >= r - halfLineWidth && absDistance <= r + halfLineWidth;
  }
  return false;
}

function ellipseDistance(squareX, squareY, rx, ry) {
  return squareX / (rx * rx) + squareY / (ry * ry);
}
function isPointInPath$7(displayObject, position, isClipPath) {
  var _ref = displayObject.parsedStyle,
    _ref$cx = _ref.cx,
    cx = _ref$cx === void 0 ? 0 : _ref$cx,
    _ref$cy = _ref.cy,
    cy = _ref$cy === void 0 ? 0 : _ref$cy,
    rx = _ref.rx,
    ry = _ref.ry,
    fill = _ref.fill,
    stroke = _ref.stroke,
    _ref$lineWidth = _ref.lineWidth,
    lineWidth = _ref$lineWidth === void 0 ? 1 : _ref$lineWidth,
    _ref$increasedLineWid = _ref.increasedLineWidthForHitTesting,
    increasedLineWidthForHitTesting = _ref$increasedLineWid === void 0 ? 0 : _ref$increasedLineWid,
    _ref$pointerEvents = _ref.pointerEvents,
    pointerEvents = _ref$pointerEvents === void 0 ? 'auto' : _ref$pointerEvents;
  var x = position.x,
    y = position.y;
  var _isFillOrStrokeAffect = isFillOrStrokeAffected(pointerEvents, fill, stroke),
    _isFillOrStrokeAffect2 = _slicedToArray(_isFillOrStrokeAffect, 2),
    hasFill = _isFillOrStrokeAffect2[0],
    hasStroke = _isFillOrStrokeAffect2[1];
  var halfLineWith = (lineWidth + increasedLineWidthForHitTesting) / 2;
  var squareX = (x - cx) * (x - cx);
  var squareY = (y - cy) * (y - cy);
  // 使用椭圆的公式： x*x/rx*rx + y*y/ry*ry = 1;
  if (hasFill && hasStroke || isClipPath) {
    return ellipseDistance(squareX, squareY, rx + halfLineWith, ry + halfLineWith) <= 1;
  }
  if (hasFill) {
    return ellipseDistance(squareX, squareY, rx, ry) <= 1;
  }
  if (hasStroke) {
    return ellipseDistance(squareX, squareY, rx - halfLineWith, ry - halfLineWith) >= 1 && ellipseDistance(squareX, squareY, rx + halfLineWith, ry + halfLineWith) <= 1;
  }
  return false;
}

function inBox(minX, minY, width, height, x, y) {
  return x >= minX && x <= minX + width && y >= minY && y <= minY + height;
}
function inRect(minX, minY, width, height, lineWidth, x, y) {
  var halfWidth = lineWidth / 2;
  // 将四个边看做矩形来检测，比边的检测算法要快
  return inBox(minX - halfWidth, minY - halfWidth, width, lineWidth, x, y) ||
  // 上边
  inBox(minX + width - halfWidth, minY - halfWidth, lineWidth, height, x, y) ||
  // 右边
  inBox(minX + halfWidth, minY + height - halfWidth, width, lineWidth, x, y) ||
  // 下边
  inBox(minX - halfWidth, minY + halfWidth, lineWidth, height, x, y); // 左边
}
function inArc(cx, cy, r, startAngle, endAngle, lineWidth, x, y) {
  var angle = (Math.atan2(y - cy, x - cx) + Math.PI * 2) % (Math.PI * 2); // 转换到 0 - 2 * Math.PI 之间
  // if (angle < startAngle || angle > endAngle) {
  //   return false;
  // }
  var point = {
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle)
  };
  return distance(point.x, point.y, x, y) <= lineWidth / 2;
}
function inLine(x1, y1, x2, y2, lineWidth, x, y) {
  var minX = Math.min(x1, x2);
  var maxX = Math.max(x1, x2);
  var minY = Math.min(y1, y2);
  var maxY = Math.max(y1, y2);
  var halfWidth = lineWidth / 2;
  // 因为目前的方案是计算点到直线的距离，而有可能会在延长线上，所以要先判断是否在包围盒内
  // 这种方案会在水平或者竖直的情况下载线的延长线上有半 lineWidth 的误差
  if (!(x >= minX - halfWidth && x <= maxX + halfWidth && y >= minY - halfWidth && y <= maxY + halfWidth)) {
    return false;
  }
  // 因为已经计算了包围盒，所以仅需要计算到直线的距离即可，可以显著提升性能
  return linePointToLine(x1, y1, x2, y2, x, y) <= lineWidth / 2;
}
function inPolyline(points, lineWidth, x, y, isClose) {
  var count = points.length;
  if (count < 2) {
    return false;
  }
  for (var i = 0; i < count - 1; i++) {
    var x1 = points[i][0];
    var y1 = points[i][1];
    var x2 = points[i + 1][0];
    var y2 = points[i + 1][1];
    if (inLine(x1, y1, x2, y2, lineWidth, x, y)) {
      return true;
    }
  }

  // 如果封闭，则计算起始点和结束点的边
  if (isClose) {
    var first = points[0];
    var last = points[count - 1];
    if (inLine(first[0], first[1], last[0], last[1], lineWidth, x, y)) {
      return true;
    }
  }
  return false;
}

// 多边形的射线检测，参考：https://blog.csdn.net/WilliamSun0122/article/details/77994526
var tolerance = 1e-6;
// 三态函数，判断两个double在eps精度下的大小关系
function dcmp(x) {
  if (Math.abs(x) < tolerance) {
    return 0;
  }
  return x < 0 ? -1 : 1;
}

// 判断点Q是否在p1和p2的线段上
function onSegment(p1, p2, q) {
  if ((q[0] - p1[0]) * (p2[1] - p1[1]) === (p2[0] - p1[0]) * (q[1] - p1[1]) && Math.min(p1[0], p2[0]) <= q[0] && q[0] <= Math.max(p1[0], p2[0]) && Math.min(p1[1], p2[1]) <= q[1] && q[1] <= Math.max(p1[1], p2[1])) {
    return true;
  }
  return false;
}

// 判断点P在多边形内-射线法
function inPolygon(points, x, y) {
  var isHit = false;
  var n = points.length;
  if (n <= 2) {
    // svg 中点小于 3 个时，不显示，也无法被拾取
    return false;
  }
  for (var i = 0; i < n; i++) {
    var p1 = points[i];
    var p2 = points[(i + 1) % n];
    if (onSegment(p1, p2, [x, y])) {
      // 点在多边形一条边上
      return true;
    }
    // 前一个判断min(p1[1],p2[1])<P.y<=max(p1[1],p2[1])
    // 后一个判断被测点 在 射线与边交点 的左边
    if (dcmp(p1[1] - y) > 0 !== dcmp(p2[1] - y) > 0 && dcmp(x - (y - p1[1]) * (p1[0] - p2[0]) / (p1[1] - p2[1]) - p1[0]) < 0) {
      isHit = !isHit;
    }
  }
  return isHit;
}
function inPolygons(polygons, x, y) {
  var isHit = false;
  for (var i = 0; i < polygons.length; i++) {
    var points = polygons[i];
    isHit = inPolygon(points, x, y);
    if (isHit) {
      break;
    }
  }
  return isHit;
}

function isPointInPath$6(displayObject, position, isClipPath) {
  var _ref = displayObject.parsedStyle,
    x1 = _ref.x1,
    y1 = _ref.y1,
    x2 = _ref.x2,
    y2 = _ref.y2,
    _ref$lineWidth = _ref.lineWidth,
    lineWidth = _ref$lineWidth === void 0 ? 1 : _ref$lineWidth,
    _ref$increasedLineWid = _ref.increasedLineWidthForHitTesting,
    increasedLineWidthForHitTesting = _ref$increasedLineWid === void 0 ? 0 : _ref$increasedLineWid,
    _ref$pointerEvents = _ref.pointerEvents,
    pointerEvents = _ref$pointerEvents === void 0 ? 'auto' : _ref$pointerEvents,
    fill = _ref.fill,
    stroke = _ref.stroke;
  var _isFillOrStrokeAffect = isFillOrStrokeAffected(pointerEvents, fill, stroke),
    _isFillOrStrokeAffect2 = _slicedToArray(_isFillOrStrokeAffect, 2),
    hasStroke = _isFillOrStrokeAffect2[1];
  if (!hasStroke && !isClipPath || !lineWidth) {
    return false;
  }
  return inLine(x1, y1, x2, y2, lineWidth + increasedLineWidthForHitTesting, position.x, position.y);
}

// TODO: replace it with method in @antv/util
function isPointInStroke(segments, lineWidth, px, py, length) {
  var isHit = false;
  var halfWidth = lineWidth / 2;
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    var currentPoint = segment.currentPoint,
      params = segment.params,
      prePoint = segment.prePoint,
      box = segment.box;
    // 如果在前面已经生成过包围盒，直接按照包围盒计算
    if (box && !inBox(box.x - halfWidth, box.y - halfWidth, box.width + lineWidth, box.height + lineWidth, px, py)) {
      continue;
    }
    switch (segment.command) {
      // L 和 Z 都是直线， M 不进行拾取
      case 'L':
      case 'Z':
        isHit = inLine(prePoint[0], prePoint[1], currentPoint[0], currentPoint[1], lineWidth, px, py);
        if (isHit) {
          return true;
        }
        break;
      case 'Q':
        var qDistance = quadPointDistance(prePoint[0], prePoint[1], params[1], params[2], params[3], params[4], px, py);
        isHit = qDistance <= lineWidth / 2;
        if (isHit) {
          return true;
        }
        break;
      case 'C':
        var cDistance = cubicPointDistance(prePoint[0],
        // 上一段结束位置, 即 C 的起始点
        prePoint[1], params[1],
        // 'C' 的参数，1、2 为第一个控制点，3、4 为第二个控制点，5、6 为结束点
        params[2], params[3], params[4], params[5], params[6], px, py, length);
        isHit = cDistance <= lineWidth / 2;
        if (isHit) {
          return true;
        }
        break;
      case 'A':
        // cache conversion result
        if (!segment.cubicParams) {
          segment.cubicParams = arcToCubic(prePoint[0], prePoint[1], params[1], params[2], params[3], params[4], params[5], params[6], params[7], undefined);
        }
        var args = segment.cubicParams;

        // fixArc
        var prePointInCubic = prePoint;
        for (var _i = 0; _i < args.length; _i += 6) {
          var _cDistance = cubicPointDistance(prePointInCubic[0],
          // 上一段结束位置, 即 C 的起始点
          prePointInCubic[1], args[_i], args[_i + 1], args[_i + 2], args[_i + 3], args[_i + 4], args[_i + 5], px, py, length);
          prePointInCubic = [args[_i + 4], args[_i + 5]];
          isHit = _cDistance <= lineWidth / 2;
          if (isHit) {
            return true;
          }
        }
        break;
    }
  }
  return isHit;
}
function isPointInPath$5(displayObject, position, isClipPath, isPointInPath, renderingPluginContext, runtime) {
  var _ref = displayObject.parsedStyle,
    _ref$lineWidth = _ref.lineWidth,
    lineWidth = _ref$lineWidth === void 0 ? 1 : _ref$lineWidth,
    _ref$increasedLineWid = _ref.increasedLineWidthForHitTesting,
    increasedLineWidthForHitTesting = _ref$increasedLineWid === void 0 ? 0 : _ref$increasedLineWid,
    stroke = _ref.stroke,
    fill = _ref.fill,
    d = _ref.d,
    _ref$pointerEvents = _ref.pointerEvents,
    pointerEvents = _ref$pointerEvents === void 0 ? 'auto' : _ref$pointerEvents;
  var segments = d.segments,
    hasArc = d.hasArc,
    polylines = d.polylines,
    polygons = d.polygons;
  var _isFillOrStrokeAffect = isFillOrStrokeAffected(pointerEvents,
    // Only a closed path can be filled.
    (polygons === null || polygons === void 0 ? void 0 : polygons.length) && fill, stroke),
    _isFillOrStrokeAffect2 = _slicedToArray(_isFillOrStrokeAffect, 2),
    hasFill = _isFillOrStrokeAffect2[0],
    hasStroke = _isFillOrStrokeAffect2[1];
  var totalLength = getOrCalculatePathTotalLength(displayObject);
  var isHit = false;
  if (hasFill || isClipPath) {
    if (hasArc) {
      // 存在曲线时，暂时使用 canvas 的 api 计算，后续可以进行多边形切割
      isHit = isPointInPath(displayObject, position);
    } else {
      // 提取出来的多边形包含闭合的和非闭合的，在这里统一按照多边形处理
      isHit = inPolygons(polygons, position.x, position.y) || inPolygons(polylines, position.x, position.y);
    }
    return isHit;
  }
  if (hasStroke || isClipPath) {
    isHit = isPointInStroke(segments, lineWidth + increasedLineWidthForHitTesting, position.x, position.y, totalLength);
  }
  return isHit;
}

function isPointInPath$4(displayObject, position, isClipPath) {
  var _ref = displayObject.parsedStyle,
    stroke = _ref.stroke,
    fill = _ref.fill,
    _ref$lineWidth = _ref.lineWidth,
    lineWidth = _ref$lineWidth === void 0 ? 1 : _ref$lineWidth,
    _ref$increasedLineWid = _ref.increasedLineWidthForHitTesting,
    increasedLineWidthForHitTesting = _ref$increasedLineWid === void 0 ? 0 : _ref$increasedLineWid,
    points = _ref.points,
    _ref$pointerEvents = _ref.pointerEvents,
    pointerEvents = _ref$pointerEvents === void 0 ? 'auto' : _ref$pointerEvents;
  var _isFillOrStrokeAffect = isFillOrStrokeAffected(pointerEvents, fill, stroke),
    _isFillOrStrokeAffect2 = _slicedToArray(_isFillOrStrokeAffect, 2),
    hasFill = _isFillOrStrokeAffect2[0],
    hasStroke = _isFillOrStrokeAffect2[1];
  var isHit = false;
  if (hasStroke || isClipPath) {
    isHit = inPolyline(points.points, lineWidth + increasedLineWidthForHitTesting, position.x, position.y, true);
  }
  if (!isHit && (hasFill || isClipPath)) {
    isHit = inPolygon(points.points, position.x, position.y);
  }
  return isHit;
}

function isPointInPath$3(displayObject, position, isClipPath) {
  var _ref = displayObject.parsedStyle,
    _ref$lineWidth = _ref.lineWidth,
    lineWidth = _ref$lineWidth === void 0 ? 1 : _ref$lineWidth,
    _ref$increasedLineWid = _ref.increasedLineWidthForHitTesting,
    increasedLineWidthForHitTesting = _ref$increasedLineWid === void 0 ? 0 : _ref$increasedLineWid,
    points = _ref.points,
    _ref$pointerEvents = _ref.pointerEvents,
    pointerEvents = _ref$pointerEvents === void 0 ? 'auto' : _ref$pointerEvents,
    fill = _ref.fill,
    stroke = _ref.stroke;
  var _isFillOrStrokeAffect = isFillOrStrokeAffected(pointerEvents, fill, stroke),
    _isFillOrStrokeAffect2 = _slicedToArray(_isFillOrStrokeAffect, 2),
    hasStroke = _isFillOrStrokeAffect2[1];
  if (!hasStroke && !isClipPath || !lineWidth) {
    return false;
  }
  return inPolyline(points.points, lineWidth + increasedLineWidthForHitTesting, position.x, position.y, false);
}

function isPointInPath$2(displayObject, position, isClipPath, isPointInPath, runtime) {
  var _ref = displayObject.parsedStyle,
    radius = _ref.radius,
    fill = _ref.fill,
    stroke = _ref.stroke,
    _ref$lineWidth = _ref.lineWidth,
    lineWidth = _ref$lineWidth === void 0 ? 1 : _ref$lineWidth,
    _ref$increasedLineWid = _ref.increasedLineWidthForHitTesting,
    increasedLineWidthForHitTesting = _ref$increasedLineWid === void 0 ? 0 : _ref$increasedLineWid,
    _ref$x = _ref.x,
    x = _ref$x === void 0 ? 0 : _ref$x,
    _ref$y = _ref.y,
    y = _ref$y === void 0 ? 0 : _ref$y,
    width = _ref.width,
    height = _ref.height,
    _ref$pointerEvents = _ref.pointerEvents,
    pointerEvents = _ref$pointerEvents === void 0 ? 'auto' : _ref$pointerEvents;
  var _isFillOrStrokeAffect = isFillOrStrokeAffected(pointerEvents, fill, stroke),
    _isFillOrStrokeAffect2 = _slicedToArray(_isFillOrStrokeAffect, 2),
    hasFill = _isFillOrStrokeAffect2[0],
    hasStroke = _isFillOrStrokeAffect2[1];
  var hasRadius = radius && radius.some(function (r) {
    return r !== 0;
  });
  var lineWidthForHitTesting = lineWidth + increasedLineWidthForHitTesting;

  // 无圆角时的策略
  if (!hasRadius) {
    var halfWidth = lineWidthForHitTesting / 2;
    // 同时填充和带有边框
    if (hasFill && hasStroke || isClipPath) {
      return inBox(x - halfWidth, y - halfWidth, width + halfWidth, height + halfWidth, position.x, position.y);
    }
    // 仅填充
    if (hasFill) {
      return inBox(x, y, width, height, position.x, position.y);
    }
    if (hasStroke) {
      return inRect(x, y, width, height, lineWidthForHitTesting, position.x, position.y);
    }
  } else {
    var isHit = false;
    if (hasStroke || isClipPath) {
      isHit = inRectWithRadius(x, y, width, height, radius.map(function (r) {
        return clamp(r, 0, Math.min(Math.abs(width) / 2, Math.abs(height) / 2));
      }), lineWidthForHitTesting, position.x, position.y);
    }
    // 仅填充时带有圆角的矩形直接通过图形拾取
    // 以后可以改成纯数学的近似拾取，将圆弧切割成多边形
    if (!isHit && (hasFill || isClipPath)) {
      isHit = isPointInPath(displayObject, position);
    }
    return isHit;
  }
  return false;
}
function inRectWithRadius(minX, minY, width, height, radiusArray, lineWidth, x, y) {
  var _radiusArray = _slicedToArray(radiusArray, 4),
    tlr = _radiusArray[0],
    trr = _radiusArray[1],
    brr = _radiusArray[2],
    blr = _radiusArray[3];
  return inLine(minX + tlr, minY, minX + width - trr, minY, lineWidth, x, y) || inLine(minX + width, minY + trr, minX + width, minY + height - brr, lineWidth, x, y) || inLine(minX + width - brr, minY + height, minX + blr, minY + height, lineWidth, x, y) || inLine(minX, minY + height - blr, minX, minY + tlr, lineWidth, x, y) || inArc(minX + width - trr, minY + trr, trr, 1.5 * Math.PI, 2 * Math.PI, lineWidth, x, y) || inArc(minX + width - brr, minY + height - brr, brr, 0, 0.5 * Math.PI, lineWidth, x, y) || inArc(minX + blr, minY + height - blr, blr, 0.5 * Math.PI, Math.PI, lineWidth, x, y) || inArc(minX + tlr, minY + tlr, tlr, Math.PI, 1.5 * Math.PI, lineWidth, x, y);
}

function isPointInPath$1(displayObject, position, isClipPath, isPointInPath, renderingPluginContext, runtime) {
  var _ref = displayObject.parsedStyle,
    _ref$pointerEvents = _ref.pointerEvents,
    pointerEvents = _ref$pointerEvents === void 0 ? 'auto' : _ref$pointerEvents,
    _ref$x = _ref.x,
    x = _ref$x === void 0 ? 0 : _ref$x,
    _ref$y = _ref.y,
    y = _ref$y === void 0 ? 0 : _ref$y,
    width = _ref.width,
    height = _ref.height;
  if (pointerEvents === 'non-transparent-pixel') {
    var offscreenCanvas = renderingPluginContext.config.offscreenCanvas;
    var canvas = runtime.offscreenCanvasCreator.getOrCreateCanvas(offscreenCanvas);
    var context = runtime.offscreenCanvasCreator.getOrCreateContext(offscreenCanvas, {
      willReadFrequently: true
    });
    canvas.width = width;
    canvas.height = height;
    renderingPluginContext.defaultStyleRendererFactory[Shape.IMAGE].render(context, _objectSpread(_objectSpread({}, displayObject.parsedStyle), {}, {
      x: 0,
      y: 0
    }), displayObject, undefined, undefined, undefined);
    var imagedata = context.getImageData(position.x - x, position.y - y, 1, 1).data;
    return imagedata.every(function (component) {
      return component !== 0;
    });
  }
  return true;
}

function isPointInPath(displayObject, position, isClipPath, isPointInPath) {
  var bounds = displayObject.getGeometryBounds();

  // @see https://stackoverflow.com/questions/28706989/how-do-i-check-if-a-mouse-click-is-inside-a-rotated-text-on-the-html5-canvas-in
  return position.x >= bounds.min[0] && position.y >= bounds.min[1] && position.x <= bounds.max[0] && position.y <= bounds.max[1];
}

var Plugin$1 = /*#__PURE__*/function (_AbstractRendererPlug) {
  function Plugin() {
    var _this;
    _classCallCheck(this, Plugin);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Plugin, [].concat(args));
    _this.name = 'canvas-picker';
    return _this;
  }
  _inherits(Plugin, _AbstractRendererPlug);
  return _createClass(Plugin, [{
    key: "init",
    value: function init() {
      var _pointInPathPickerFac;
      var pointInPathPickerFactory = (_pointInPathPickerFac = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_pointInPathPickerFac, Shape.CIRCLE, isPointInPath$8), Shape.ELLIPSE, isPointInPath$7), Shape.RECT, isPointInPath$2), Shape.LINE, isPointInPath$6), Shape.POLYLINE, isPointInPath$3), Shape.POLYGON, isPointInPath$4), Shape.PATH, isPointInPath$5), Shape.TEXT, isPointInPath), Shape.GROUP, null), Shape.IMAGE, isPointInPath$1), _defineProperty(_defineProperty(_pointInPathPickerFac, Shape.HTML, null), Shape.MESH, null));

      // @ts-ignore
      this.context.pointInPathPickerFactory = pointInPathPickerFactory;
      this.addRenderingPlugin(new CanvasPickerPlugin());
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // @ts-ignore
      delete this.context.pointInPathPickerFactory;
      this.removeAllRenderingPlugins();
    }
  }]);
}(AbstractRendererPlugin);

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Plugin: Plugin$1
});

function generatePath$6(context, parsedStyle) {
  var _parsedStyle$cx = parsedStyle.cx,
    cx = _parsedStyle$cx === void 0 ? 0 : _parsedStyle$cx,
    _parsedStyle$cy = parsedStyle.cy,
    cy = _parsedStyle$cy === void 0 ? 0 : _parsedStyle$cy,
    r = parsedStyle.r;
  context.arc(cx, cy, r, 0, Math.PI * 2, false);
}

function generatePath$5(context, parsedStyle) {
  var _parsedStyle$cx = parsedStyle.cx,
    cx = _parsedStyle$cx === void 0 ? 0 : _parsedStyle$cx,
    _parsedStyle$cy = parsedStyle.cy,
    cy = _parsedStyle$cy === void 0 ? 0 : _parsedStyle$cy,
    rx = parsedStyle.rx,
    ry = parsedStyle.ry;

  // @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse
  if (context.ellipse) {
    context.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2, false);
  } else {
    // 如果不支持，则使用圆来绘制，进行变形
    var r = rx > ry ? rx : ry;
    var scaleX = rx > ry ? 1 : rx / ry;
    var scaleY = rx > ry ? ry / rx : 1;
    context.save();
    context.scale(scaleX, scaleY);
    context.arc(cx, cy, r, 0, Math.PI * 2);
  }
}

function generatePath$4(context, parsedStyle) {
  var x1 = parsedStyle.x1,
    y1 = parsedStyle.y1,
    x2 = parsedStyle.x2,
    y2 = parsedStyle.y2,
    markerStart = parsedStyle.markerStart,
    markerEnd = parsedStyle.markerEnd,
    markerStartOffset = parsedStyle.markerStartOffset,
    markerEndOffset = parsedStyle.markerEndOffset;
  var startOffsetX = 0;
  var startOffsetY = 0;
  var endOffsetX = 0;
  var endOffsetY = 0;
  var rad = 0;
  var x;
  var y;
  if (markerStart && isDisplayObject(markerStart) && markerStartOffset) {
    x = x2 - x1;
    y = y2 - y1;
    rad = Math.atan2(y, x);
    startOffsetX = Math.cos(rad) * (markerStartOffset || 0);
    startOffsetY = Math.sin(rad) * (markerStartOffset || 0);
  }
  if (markerEnd && isDisplayObject(markerEnd) && markerEndOffset) {
    x = x1 - x2;
    y = y1 - y2;
    rad = Math.atan2(y, x);
    endOffsetX = Math.cos(rad) * (markerEndOffset || 0);
    endOffsetY = Math.sin(rad) * (markerEndOffset || 0);
  }
  context.moveTo(x1 + startOffsetX, y1 + startOffsetY);
  context.lineTo(x2 + endOffsetX, y2 + endOffsetY);
}

function generatePath$3(context, parsedStyle) {
  var markerStart = parsedStyle.markerStart,
    markerEnd = parsedStyle.markerEnd,
    markerStartOffset = parsedStyle.markerStartOffset,
    markerEndOffset = parsedStyle.markerEndOffset;
  var _parsedStyle$d = parsedStyle.d,
    absolutePath = _parsedStyle$d.absolutePath,
    segments = _parsedStyle$d.segments;
  var startOffsetX = 0;
  var startOffsetY = 0;
  var endOffsetX = 0;
  var endOffsetY = 0;
  var rad = 0;
  var x;
  var y;
  if (markerStart && isDisplayObject(markerStart) && markerStartOffset) {
    var _getStartTangent = markerStart.parentNode.getStartTangent(),
      _getStartTangent2 = _slicedToArray(_getStartTangent, 2),
      p1 = _getStartTangent2[0],
      p2 = _getStartTangent2[1];
    x = p1[0] - p2[0];
    y = p1[1] - p2[1];
    rad = Math.atan2(y, x);
    startOffsetX = Math.cos(rad) * (markerStartOffset || 0);
    startOffsetY = Math.sin(rad) * (markerStartOffset || 0);
  }
  if (markerEnd && isDisplayObject(markerEnd) && markerEndOffset) {
    var _getEndTangent = markerEnd.parentNode.getEndTangent(),
      _getEndTangent2 = _slicedToArray(_getEndTangent, 2),
      _p = _getEndTangent2[0],
      _p2 = _getEndTangent2[1];
    x = _p[0] - _p2[0];
    y = _p[1] - _p2[1];
    rad = Math.atan2(y, x);
    endOffsetX = Math.cos(rad) * (markerEndOffset || 0);
    endOffsetY = Math.sin(rad) * (markerEndOffset || 0);
  }
  for (var i = 0; i < absolutePath.length; i++) {
    var params = absolutePath[i];
    var command = params[0];
    var nextSegment = absolutePath[i + 1];
    var useStartOffset = i === 0 && (startOffsetX !== 0 || startOffsetY !== 0);
    var useEndOffset = (i === absolutePath.length - 1 || nextSegment && (nextSegment[0] === 'M' || nextSegment[0] === 'Z')) && endOffsetX !== 0 && endOffsetY !== 0;
    var _ref = useStartOffset ? [startOffsetX, startOffsetY] : [0, 0],
      _ref2 = _slicedToArray(_ref, 2),
      startOffsetXTemp = _ref2[0],
      startOffsetYTemp = _ref2[1];
    var _ref3 = useEndOffset ? [endOffsetX, endOffsetY] : [0, 0],
      _ref4 = _slicedToArray(_ref3, 2),
      endOffsetXTemp = _ref4[0],
      endOffsetYTemp = _ref4[1];
    switch (command) {
      case 'M':
        // Use start marker offset
        context.moveTo(params[1] + startOffsetXTemp, params[2] + startOffsetYTemp);
        break;
      case 'L':
        context.lineTo(params[1] + endOffsetXTemp, params[2] + endOffsetYTemp);
        break;
      case 'Q':
        context.quadraticCurveTo(params[1], params[2], params[3] + endOffsetXTemp, params[4] + endOffsetYTemp);
        break;
      case 'C':
        context.bezierCurveTo(params[1], params[2], params[3], params[4], params[5] + endOffsetXTemp, params[6] + endOffsetYTemp);
        break;
      case 'A':
        {
          // FIXME startOffset / endOffset
          var arcParams = segments[i].arcParams;
          var cx = arcParams.cx,
            cy = arcParams.cy,
            rx = arcParams.rx,
            ry = arcParams.ry,
            startAngle = arcParams.startAngle,
            endAngle = arcParams.endAngle,
            xRotation = arcParams.xRotation,
            sweepFlag = arcParams.sweepFlag;
          // @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse
          if (context.ellipse) {
            context.ellipse(cx, cy, rx, ry, xRotation, startAngle, endAngle, !!(1 - sweepFlag));
          } else {
            // @see https://stackoverflow.com/a/47494351
            var r = rx > ry ? rx : ry;
            var scaleX = rx > ry ? 1 : rx / ry;
            var scaleY = rx > ry ? ry / rx : 1;
            context.translate(cx, cy);
            context.rotate(xRotation);
            context.scale(scaleX, scaleY);
            context.arc(0, 0, r, startAngle, endAngle, !!(1 - sweepFlag));
            context.scale(1 / scaleX, 1 / scaleY);
            context.rotate(-xRotation);
            context.translate(-cx, -cy);
          }
          if (useEndOffset) {
            context.lineTo(params[6] + endOffsetX, params[7] + endOffsetY);
          }
          break;
        }
      case 'Z':
        context.closePath();
        break;
    }
  }
}

function generatePath$2(context, parsedStyle) {
  var markerStart = parsedStyle.markerStart,
    markerEnd = parsedStyle.markerEnd,
    markerStartOffset = parsedStyle.markerStartOffset,
    markerEndOffset = parsedStyle.markerEndOffset;
  var points = parsedStyle.points.points;
  var length = points.length;
  var x1 = points[0][0];
  var y1 = points[0][1];
  var x2 = points[length - 1][0];
  var y2 = points[length - 1][1];
  var startOffsetX = 0;
  var startOffsetY = 0;
  var endOffsetX = 0;
  var endOffsetY = 0;
  var rad = 0;
  var x;
  var y;
  if (markerStart && isDisplayObject(markerStart) && markerStartOffset) {
    x = points[1][0] - points[0][0];
    y = points[1][1] - points[0][1];
    rad = Math.atan2(y, x);
    startOffsetX = Math.cos(rad) * (markerStartOffset || 0);
    startOffsetY = Math.sin(rad) * (markerStartOffset || 0);
  }
  if (markerEnd && isDisplayObject(markerEnd) && markerEndOffset) {
    x = points[length - 1][0] - points[0][0];
    y = points[length - 1][1] - points[0][1];
    rad = Math.atan2(y, x);
    endOffsetX = Math.cos(rad) * (markerEndOffset || 0);
    endOffsetY = Math.sin(rad) * (markerEndOffset || 0);
  }
  context.moveTo(x1 + (startOffsetX || endOffsetX), y1 + (startOffsetY || endOffsetY));
  for (var i = 1; i < length - 1; i++) {
    var point = points[i];
    context.lineTo(point[0], point[1]);
  }
  context.lineTo(x2, y2);
}

function generatePath$1(context, parsedStyle) {
  var markerStart = parsedStyle.markerStart,
    markerEnd = parsedStyle.markerEnd,
    markerStartOffset = parsedStyle.markerStartOffset,
    markerEndOffset = parsedStyle.markerEndOffset;
  var points = parsedStyle.points.points;
  var length = points.length;
  var x1 = points[0][0];
  var y1 = points[0][1];
  var x2 = points[length - 1][0];
  var y2 = points[length - 1][1];
  var startOffsetX = 0;
  var startOffsetY = 0;
  var endOffsetX = 0;
  var endOffsetY = 0;
  var rad = 0;
  var x;
  var y;
  if (markerStart && isDisplayObject(markerStart) && markerStartOffset) {
    x = points[1][0] - points[0][0];
    y = points[1][1] - points[0][1];
    rad = Math.atan2(y, x);
    startOffsetX = Math.cos(rad) * (markerStartOffset || 0);
    startOffsetY = Math.sin(rad) * (markerStartOffset || 0);
  }
  if (markerEnd && isDisplayObject(markerEnd) && markerEndOffset) {
    x = points[length - 2][0] - points[length - 1][0];
    y = points[length - 2][1] - points[length - 1][1];
    rad = Math.atan2(y, x);
    endOffsetX = Math.cos(rad) * (markerEndOffset || 0);
    endOffsetY = Math.sin(rad) * (markerEndOffset || 0);
  }
  context.moveTo(x1 + startOffsetX, y1 + startOffsetY);
  for (var i = 1; i < length - 1; i++) {
    var point = points[i];
    context.lineTo(point[0], point[1]);
  }
  context.lineTo(x2 + endOffsetX, y2 + endOffsetY);
}

function generatePath(context, parsedStyle) {
  var _parsedStyle$x = parsedStyle.x,
    x = _parsedStyle$x === void 0 ? 0 : _parsedStyle$x,
    _parsedStyle$y = parsedStyle.y,
    y = _parsedStyle$y === void 0 ? 0 : _parsedStyle$y,
    radius = parsedStyle.radius,
    width = parsedStyle.width,
    height = parsedStyle.height;
  var w = width;
  var h = height;
  var hasRadius = radius && radius.some(function (r) {
    return r !== 0;
  });
  if (!hasRadius) {
    // Canvas support negative width/height of rect
    context.rect(x, y, w, h);
  } else {
    var signX = width > 0 ? 1 : -1;
    var signY = height > 0 ? 1 : -1;
    var sweepFlag = signX + signY === 0;
    var _radius$map = radius.map(function (r) {
        return clamp(r, 0, Math.min(Math.abs(w) / 2, Math.abs(h) / 2));
      }),
      _radius$map2 = _slicedToArray(_radius$map, 4),
      tlr = _radius$map2[0],
      trr = _radius$map2[1],
      brr = _radius$map2[2],
      blr = _radius$map2[3];
    context.moveTo(signX * tlr + x, y);
    context.lineTo(w - signX * trr + x, y);
    if (trr !== 0) {
      context.arc(w - signX * trr + x, signY * trr + y, trr, -signY * Math.PI / 2, signX > 0 ? 0 : Math.PI, sweepFlag);
    }
    context.lineTo(w + x, h - signY * brr + y);
    if (brr !== 0) {
      context.arc(w - signX * brr + x, h - signY * brr + y, brr, signX > 0 ? 0 : Math.PI, signY > 0 ? Math.PI / 2 : 1.5 * Math.PI, sweepFlag);
    }
    context.lineTo(signX * blr + x, h + y);
    if (blr !== 0) {
      context.arc(signX * blr + x, h - signY * blr + y, blr, signY > 0 ? Math.PI / 2 : -Math.PI / 2, signX > 0 ? Math.PI : 0, sweepFlag);
    }
    context.lineTo(x, signY * tlr + y);
    if (tlr !== 0) {
      context.arc(signX * tlr + x, signY * tlr + y, tlr, signX > 0 ? Math.PI : 0, signY > 0 ? Math.PI * 1.5 : Math.PI / 2, sweepFlag);
    }
  }
}

var Plugin = /*#__PURE__*/function (_AbstractRendererPlug) {
  function Plugin() {
    var _this;
    _classCallCheck(this, Plugin);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Plugin, [].concat(args));
    _this.name = 'canvas-path-generator';
    return _this;
  }
  _inherits(Plugin, _AbstractRendererPlug);
  return _createClass(Plugin, [{
    key: "init",
    value: function init() {
      var _pathGeneratorFactory;
      var pathGeneratorFactory = (_pathGeneratorFactory = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_pathGeneratorFactory, Shape.CIRCLE, generatePath$6), Shape.ELLIPSE, generatePath$5), Shape.RECT, generatePath), Shape.LINE, generatePath$4), Shape.POLYLINE, generatePath$1), Shape.POLYGON, generatePath$2), Shape.PATH, generatePath$3), Shape.TEXT, undefined), Shape.GROUP, undefined), Shape.IMAGE, undefined), _defineProperty(_defineProperty(_defineProperty(_pathGeneratorFactory, Shape.HTML, undefined), Shape.MESH, undefined), Shape.FRAGMENT, undefined));

      // @ts-ignore
      this.context.pathGeneratorFactory = pathGeneratorFactory;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // @ts-ignore
      delete this.context.pathGeneratorFactory;
    }
  }]);
}(AbstractRendererPlugin);

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Plugin: Plugin
});

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
    _this.registerPlugin(new Plugin());
    // enable rendering with Canvas2D API
    _this.registerPlugin(new Plugin$2());
    _this.registerPlugin(new DomInteraction.Plugin());
    // enable picking with Canvas2D API
    _this.registerPlugin(new Plugin$1());

    // render HTML component
    _this.registerPlugin(new HTMLRenderer.Plugin());
    return _this;
  }
  _inherits(Renderer, _AbstractRenderer);
  return _createClass(Renderer);
}(AbstractRenderer);

export { index as CanvasPathGenerator, index$1 as CanvasPicker, index$2 as CanvasRenderer, Renderer };
//# sourceMappingURL=index.esm.js.map
