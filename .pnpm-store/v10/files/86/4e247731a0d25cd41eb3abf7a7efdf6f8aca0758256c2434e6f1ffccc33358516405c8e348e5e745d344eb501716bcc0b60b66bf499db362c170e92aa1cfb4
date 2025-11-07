/*!
 * @antv/g-plugin-canvas-renderer
 * @description A G plugin of renderer implementation with Canvas2D API
 * @version 2.3.3
 * @date 7/30/2025, 1:36:40 PM
 * @author AntVis
 * @docs https://g.antv.antgroup.com/
 */
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectSpread from '@babel/runtime/helpers/objectSpread2';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _callSuper from '@babel/runtime/helpers/callSuper';
import _inherits from '@babel/runtime/helpers/inherits';
import { ElementEvent, AABB, CustomEvent, CanvasEvent, Shape, Node, GradientType, isPattern, AbstractRendererPlugin } from '@antv/g-lite';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _classPrivateFieldLooseBase from '@babel/runtime/helpers/classPrivateFieldLooseBase';
import _classPrivateFieldLooseKey from '@babel/runtime/helpers/classPrivateFieldLooseKey';
import { mat4, vec3 } from 'gl-matrix';
import { isNil } from '@antv/util';
import { ImagePool } from '@antv/g-plugin-image-loader';

var _renderState = /*#__PURE__*/_classPrivateFieldLooseKey("renderState");
/**
 * support 2 modes in rendering:
 * * immediate
 * * delayed: render at the end of frame with dirty-rectangle
 */
var CanvasRendererPlugin = /*#__PURE__*/function () {
  /**
   * RBush used in dirty rectangle rendering
   */

  function CanvasRendererPlugin(canvasRendererPluginOptions // private styleRendererFactory: Record<Shape, StyleRenderer>,
  ) {
    _classCallCheck(this, CanvasRendererPlugin);
    this.removedRBushNodeAABBs = [];
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
        rBushRoot = _this$context.rBushRoot,
        pathGeneratorFactory = _this$context.pathGeneratorFactory;
      var enableRenderingOptimization = config.renderer.getConfig().enableRenderingOptimization;
      config.renderer.getConfig().enableDirtyCheck = false;
      config.renderer.getConfig().enableDirtyRectangleRendering = false;
      this.rBush = rBushRoot;
      this.pathGeneratorFactory = pathGeneratorFactory;
      var contextService = context.contextService;
      var canvas = renderingContext.root.ownerDocument.defaultView;
      var handleUnmounted = function handleUnmounted(e) {
        var object = e.target;

        // remove r-bush node
        // @ts-ignore
        var rBushNode = object.rBushNode;
        if (rBushNode !== null && rBushNode !== void 0 && rBushNode.aabb) {
          // save removed aabbs for dirty-rectangle rendering later
          _this.removedRBushNodeAABBs.push(rBushNode.aabb);
        }
      };
      var handleCulled = function handleCulled(e) {
        var object = e.target;
        // @ts-ignore
        var rBushNode = object.rBushNode;
        if (rBushNode.aabb) {
          // save removed aabbs for dirty-rectangle rendering later
          _this.removedRBushNodeAABBs.push(rBushNode.aabb);
        }
      };
      renderingService.hooks.init.tap(CanvasRendererPlugin.tag, function () {
        canvas.addEventListener(ElementEvent.UNMOUNTED, handleUnmounted);
        canvas.addEventListener(ElementEvent.CULLED, handleCulled);

        // clear fullscreen
        var dpr = contextService.getDPR();
        var width = config.width,
          height = config.height;
        var context = contextService.getContext();
        _this.clearRect(context, 0, 0, width * dpr, height * dpr, config.background);
      });
      renderingService.hooks.destroy.tap(CanvasRendererPlugin.tag, function () {
        canvas.removeEventListener(ElementEvent.UNMOUNTED, handleUnmounted);
        canvas.removeEventListener(ElementEvent.CULLED, handleCulled);
        _this.renderQueue = [];
        _this.removedRBushNodeAABBs = [];
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

          _this.removedRBushNodeAABBs = [];
        } else {
          // console.log('canvas renderer next...', this.renderQueue);
          // merge removed AABB
          var dirtyRenderBounds = _this.safeMergeAABB.apply(_this, [_this.mergeDirtyAABBs(_this.renderQueue)].concat(_toConsumableArray(_this.removedRBushNodeAABBs.map(function (_ref) {
            var minX = _ref.minX,
              minY = _ref.minY,
              maxX = _ref.maxX,
              maxY = _ref.maxY;
            var aabb = new AABB();
            aabb.setMinMax(
            // vec3.fromValues(minX, minY, 0),
            // vec3.fromValues(maxX, maxY, 0),
            [minX, minY, 0], [maxX, maxY, 0]);
            return aabb;
          }))));
          _this.removedRBushNodeAABBs = [];
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
          var dirtyObjects = _this.searchDirtyObjects(dirtyRenderBounds);

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
      var _ref2 = object.parsedStyle,
        stroke = _ref2.stroke,
        fill = _ref2.fill,
        opacity = _ref2.opacity,
        lineDash = _ref2.lineDash,
        lineDashOffset = _ref2.lineDashOffset;
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
    key: "searchDirtyObjects",
    value: function searchDirtyObjects(dirtyRectangle) {
      // search in r-tree, get all affected nodes
      var _dirtyRectangle$getMi = dirtyRectangle.getMin(),
        _dirtyRectangle$getMi2 = _slicedToArray(_dirtyRectangle$getMi, 2),
        minX = _dirtyRectangle$getMi2[0],
        minY = _dirtyRectangle$getMi2[1];
      var _dirtyRectangle$getMa = dirtyRectangle.getMax(),
        _dirtyRectangle$getMa2 = _slicedToArray(_dirtyRectangle$getMa, 2),
        maxX = _dirtyRectangle$getMa2[0],
        maxY = _dirtyRectangle$getMa2[1];
      var rBushNodes = this.rBush.search({
        minX: minX,
        minY: minY,
        maxX: maxX,
        maxY: maxY
      });
      return rBushNodes.map(function (_ref3) {
        var displayObject = _ref3.displayObject;
        return displayObject;
      });
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
    canvasContext.renderingService.dirtify();
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
          object.ownerDocument.defaultView.context.renderingService.dirtify();
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
          object.ownerDocument.defaultView.context.renderingService.dirtify();
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
        shadowBlur = parsedStyle.shadowBlur;
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

    // ---
  }, {
    key: "drawToContext",
    value: function drawToContext(context, object, renderState, plugin, runtime) {
      this.render(context, object.parsedStyle, object, object.ownerDocument.defaultView.context, plugin, runtime);
    }
  }]);
}(DefaultRenderer);

var Plugin = /*#__PURE__*/function (_AbstractRendererPlug) {
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

export { DefaultRenderer as CircleRenderer, DefaultRenderer, DefaultRenderer as EllipseRenderer, ImageRenderer, DefaultRenderer as LineRenderer, DefaultRenderer as PathRenderer, Plugin, DefaultRenderer as PolygonRenderer, DefaultRenderer as PolylineRenderer, DefaultRenderer as RectRenderer, TextRenderer };
//# sourceMappingURL=index.esm.js.map
