/*!
 * @antv/g-plugin-image-loader
 * @description A G plugin for loading image
 * @version 2.1.26
 * @date 7/30/2025, 1:35:52 PM
 * @author AntVis
 * @docs https://g.antv.antgroup.com/
 */
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _callSuper from '@babel/runtime/helpers/callSuper';
import _inherits from '@babel/runtime/helpers/inherits';
import { ElementEvent, OffscreenCanvasCreator, parsedTransformToMat4, parseTransform, DisplayObject, GradientType, computeLinearGradient, computeRadialGradient, UnitType, Shape, AbstractRendererPlugin } from '@antv/g-lite';
import _regeneratorRuntime from '@babel/runtime/helpers/regeneratorRuntime';
import _objectSpread from '@babel/runtime/helpers/objectSpread2';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import { isString } from '@antv/util';
import { mat4 } from 'gl-matrix';

var RefCountCache = /*#__PURE__*/function () {
  function RefCountCache() {
    _classCallCheck(this, RefCountCache);
    this.cacheStore = new Map();
  }
  return _createClass(RefCountCache, [{
    key: "onRefAdded",
    value: function onRefAdded(ref) {}
  }, {
    key: "has",
    value: function has(key) {
      return this.cacheStore.has(key);
    }
  }, {
    key: "put",
    value: function put(key, item, ref) {
      if (this.cacheStore.has(key)) {
        return false;
      }
      this.cacheStore.set(key, {
        value: item,
        counter: new Set([ref.entity])
      });
      this.onRefAdded(ref);
      return true;
    }
  }, {
    key: "get",
    value: function get(key, ref) {
      var cacheItem = this.cacheStore.get(key);
      if (!cacheItem) {
        return null;
      }
      if (!cacheItem.counter.has(ref.entity)) {
        cacheItem.counter.add(ref.entity);
        this.onRefAdded(ref);
      }
      return cacheItem.value;
    }
  }, {
    key: "update",
    value: function update(key, value, ref) {
      var cacheItem = this.cacheStore.get(key);
      if (!cacheItem) {
        return false;
      }
      cacheItem.value = _objectSpread(_objectSpread({}, cacheItem.value), value);
      if (!cacheItem.counter.has(ref.entity)) {
        cacheItem.counter.add(ref.entity);
        this.onRefAdded(ref);
      }
      return true;
    }
  }, {
    key: "release",
    value: function release(key, ref) {
      var cacheItem = this.cacheStore.get(key);
      if (!cacheItem) {
        return false;
      }
      cacheItem.counter["delete"](ref.entity);
      if (cacheItem.counter.size <= 0) {
        this.cacheStore["delete"](key);
      }
      return true;
    }
  }, {
    key: "releaseRef",
    value: function releaseRef(ref) {
      var _this = this;
      Array.from(this.cacheStore.keys()).forEach(function (key) {
        _this.release(key, ref);
      });
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.cacheStore.size;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.cacheStore.clear();
    }
  }]);
}();

var tasks = [];
var nextFrameTasks = [];
var ImageSlicer = /*#__PURE__*/function () {
  function ImageSlicer() {
    _classCallCheck(this, ImageSlicer);
  }
  return _createClass(ImageSlicer, null, [{
    key: "stop",
    value: function stop() {
      var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ImageSlicer.api;
      if (ImageSlicer.rafId) {
        api.cancelAnimationFrame(ImageSlicer.rafId);
        ImageSlicer.rafId = null;
      }
    }
  }, {
    key: "executeTask",
    value: function executeTask() {
      var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ImageSlicer.api;
      if (tasks.length <= 0 && nextFrameTasks.length <= 0) {
        return;
      }
      nextFrameTasks.forEach(function (task) {
        return task();
      });
      nextFrameTasks = tasks.splice(0, ImageSlicer.TASK_NUM_PER_FRAME);
      ImageSlicer.rafId = api.requestAnimationFrame(function () {
        ImageSlicer.executeTask(api);
      });
    }
  }, {
    key: "sliceImage",
    value: function sliceImage(image, sliceWidth, sliceHeight, rerender) {
      var overlap = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var api = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : ImageSlicer.api;
      var imageWidth = image.naturalWidth || image.width;
      var imageHeight = image.naturalHeight || image.height;

      // 计算步长(考虑重叠区域)
      var strideW = sliceWidth - overlap;
      var strideH = sliceHeight - overlap;

      // 计算网格尺寸
      var gridCols = Math.ceil(imageWidth / strideW);
      var gridRows = Math.ceil(imageHeight / strideH);
      var result = {
        tileSize: [sliceWidth, sliceHeight],
        gridSize: [gridRows, gridCols],
        tiles: Array(gridRows).fill(null).map(function () {
          return Array(gridCols).fill(null);
        })
      };

      // 遍历网格创建切片
      var _loop = function _loop(row) {
        var _loop2 = function _loop2(col) {
          tasks.push(function () {
            // 计算当前切片的坐标
            var startX = col * strideW;
            var startY = row * strideH;

            // 处理最后一列/行的特殊情况
            var _ref = [Math.min(sliceWidth, imageWidth - startX), Math.min(sliceHeight, imageHeight - startY)],
              tempSliceWidth = _ref[0],
              tempSliceHeight = _ref[1];

            // 创建切片canvas
            var sliceCanvas = api.createCanvas();
            sliceCanvas.width = sliceWidth;
            sliceCanvas.height = sliceHeight;
            var sliceCtx = sliceCanvas.getContext('2d');

            // 将图像部分绘制到切片canvas上
            sliceCtx.drawImage(image, startX, startY, tempSliceWidth, tempSliceHeight, 0, 0, tempSliceWidth, tempSliceHeight);

            // 存储切片信息
            result.tiles[row][col] = {
              x: startX,
              y: startY,
              tileX: col,
              tileY: row,
              data: sliceCanvas
            };
            rerender();
          });
        };
        for (var col = 0; col < gridCols; col++) {
          _loop2(col);
        }
      };
      for (var row = 0; row < gridRows; row++) {
        _loop(row);
      }
      ImageSlicer.stop();
      ImageSlicer.executeTask();
      return result;
    }
  }]);
}();
ImageSlicer.TASK_NUM_PER_FRAME = 10;

var IMAGE_CACHE = new RefCountCache();
IMAGE_CACHE.onRefAdded = function onRefAdded(ref) {
  var _this = this;
  ref.addEventListener(ElementEvent.DESTROY, function () {
    _this.releaseRef(ref);
  }, {
    once: true
  });
};
var ImagePool = /*#__PURE__*/function () {
  function ImagePool(context, runtime) {
    _classCallCheck(this, ImagePool);
    this.gradientCache = {};
    this.patternCache = {};
    this.context = context;
    this.runtime = runtime;
  }
  return _createClass(ImagePool, [{
    key: "getImageSync",
    value: function getImageSync(src, ref, callback) {
      var imageSource = isString(src) ? src : src.src;
      if (IMAGE_CACHE.has(imageSource)) {
        var imageCache = IMAGE_CACHE.get(imageSource, ref);
        if (imageCache.img.complete) {
          callback === null || callback === void 0 || callback(imageCache);
          return imageCache;
        }
      }
      this.getOrCreateImage(src, ref).then(function (cache) {
        callback === null || callback === void 0 || callback(cache);
      })["catch"](function (reason) {
        console.error(reason);
      });
      return null;
    }
  }, {
    key: "getOrCreateImage",
    value: function getOrCreateImage(src, ref) {
      var _this2 = this;
      var imageSource = isString(src) ? src : src.src;
      if (!isString(src) && !IMAGE_CACHE.has(imageSource)) {
        var imageCache = {
          img: src,
          size: [src.naturalWidth || src.width, src.naturalHeight || src.height],
          tileSize: calculateImageTileSize(src)
        };
        IMAGE_CACHE.put(imageSource, imageCache, ref);
      }
      if (IMAGE_CACHE.has(imageSource)) {
        var _imageCache = IMAGE_CACHE.get(imageSource, ref);
        if (_imageCache.img.complete) {
          return Promise.resolve(_imageCache);
        }
        return new Promise(function (resolve, reject) {
          _imageCache.img.addEventListener('load', function () {
            _imageCache.size = [_imageCache.img.naturalWidth || _imageCache.img.width, _imageCache.img.naturalHeight || _imageCache.img.height];
            _imageCache.tileSize = calculateImageTileSize(_imageCache.img);
            resolve(_imageCache);
          });
          _imageCache.img.addEventListener('error', function (ev) {
            reject(ev);
          });
        });
      }
      return new Promise(function (resolve, reject) {
        // @see https://github.com/antvis/g/issues/938
        var image = _this2.context.config.createImage();
        if (image) {
          var _imageCache2 = {
            img: image,
            size: [0, 0],
            tileSize: calculateImageTileSize(image)
          };
          IMAGE_CACHE.put(imageSource, _imageCache2, ref);
          image.onload = function () {
            _imageCache2.size = [image.naturalWidth || image.width, image.naturalHeight || image.height];
            _imageCache2.tileSize = calculateImageTileSize(_imageCache2.img);
            resolve(_imageCache2);
          };
          image.onerror = function (ev) {
            reject(ev);
          };
          image.crossOrigin = 'Anonymous';
          image.src = imageSource;
        }
      });
    }
  }, {
    key: "createDownSampledImage",
    value: function () {
      var _createDownSampledImage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(src, ref) {
        var imageCache, enableLargeImageOptimization, _ref, _ref$maxDownSampledIm, maxDownSampledImageSize, _ref$downSamplingRate, downSamplingRateThreshold, createImageBitmapFunc, _imageCache$size, originWidth, originHeight, resizedImage, downSamplingRate, updateCache;
        return _regeneratorRuntime().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 1;
              return this.getOrCreateImage(src, ref);
            case 1:
              imageCache = _context.sent;
              if (!(typeof imageCache.downSamplingRate !== 'undefined')) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", imageCache);
            case 2:
              enableLargeImageOptimization = this.context.config.enableLargeImageOptimization;
              _ref = typeof enableLargeImageOptimization === 'boolean' ? {} : enableLargeImageOptimization, _ref$maxDownSampledIm = _ref.maxDownSampledImageSize, maxDownSampledImageSize = _ref$maxDownSampledIm === void 0 ? 2048 : _ref$maxDownSampledIm, _ref$downSamplingRate = _ref.downSamplingRateThreshold, downSamplingRateThreshold = _ref$downSamplingRate === void 0 ? 0.5 : _ref$downSamplingRate;
              createImageBitmapFunc = this.runtime.globalThis.createImageBitmap;
              _imageCache$size = _slicedToArray(imageCache.size, 2), originWidth = _imageCache$size[0], originHeight = _imageCache$size[1];
              resizedImage = imageCache.img;
              downSamplingRate = Math.min((maxDownSampledImageSize + maxDownSampledImageSize) / (originWidth + originHeight), Math.max(0.01, Math.min(downSamplingRateThreshold, 0.5)));
              updateCache = _objectSpread(_objectSpread({}, imageCache), {}, {
                downSamplingRate: downSamplingRate
              });
              IMAGE_CACHE.update(imageCache.img.src, updateCache, ref);
              if (!createImageBitmapFunc) {
                _context.next = 7;
                break;
              }
              _context.prev = 3;
              _context.next = 4;
              return createImageBitmapFunc(imageCache.img, {
                resizeWidth: originWidth * downSamplingRate,
                resizeHeight: originHeight * downSamplingRate
              });
            case 4:
              resizedImage = _context.sent;
              _context.next = 6;
              break;
            case 5:
              _context.prev = 5;
              _context["catch"](3);
              downSamplingRate = 1;
            case 6:
              _context.next = 8;
              break;
            case 7:
              downSamplingRate = 1;
            case 8:
              updateCache = _objectSpread(_objectSpread({}, this.getImageSync(src, ref)), {}, {
                downSampled: resizedImage,
                downSamplingRate: downSamplingRate
              });
              IMAGE_CACHE.update(imageCache.img.src, updateCache, ref);
              return _context.abrupt("return", updateCache);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[3, 5]]);
      }));
      function createDownSampledImage(_x, _x2) {
        return _createDownSampledImage.apply(this, arguments);
      }
      return createDownSampledImage;
    }()
  }, {
    key: "createImageTiles",
    value: function () {
      var _createImageTiles = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(src, tiles, rerender, ref) {
        var imageCache, _ref$ownerDocument$de, requestAnimationFrame, cancelAnimationFrame, updateCache;
        return _regeneratorRuntime().wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 1;
              return this.getOrCreateImage(src, ref);
            case 1:
              imageCache = _context2.sent;
              _ref$ownerDocument$de = ref.ownerDocument.defaultView, requestAnimationFrame = _ref$ownerDocument$de.requestAnimationFrame, cancelAnimationFrame = _ref$ownerDocument$de.cancelAnimationFrame;
              ImageSlicer.api = {
                requestAnimationFrame: requestAnimationFrame,
                cancelAnimationFrame: cancelAnimationFrame,
                createCanvas: function createCanvas() {
                  return OffscreenCanvasCreator.createCanvas();
                }
              };
              updateCache = _objectSpread(_objectSpread({}, imageCache), ImageSlicer.sliceImage(imageCache.img, imageCache.tileSize[0], imageCache.tileSize[0], rerender));
              IMAGE_CACHE.update(imageCache.img.src, updateCache, ref);
              return _context2.abrupt("return", updateCache);
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createImageTiles(_x3, _x4, _x5, _x6) {
        return _createImageTiles.apply(this, arguments);
      }
      return createImageTiles;
    }()
  }, {
    key: "releaseImage",
    value: function releaseImage(src, ref) {
      IMAGE_CACHE.release(isString(src) ? src : src.src, ref);
    }
  }, {
    key: "releaseImageRef",
    value: function releaseImageRef(ref) {
      IMAGE_CACHE.releaseRef(ref);
    }
  }, {
    key: "getOrCreatePatternSync",
    value: function getOrCreatePatternSync(object, pattern, context, $offscreenCanvas, dpr, min, callback) {
      var patternKey = this.generatePatternKey(pattern);
      if (patternKey && this.patternCache[patternKey]) {
        return this.patternCache[patternKey];
      }
      var image = pattern.image,
        repetition = pattern.repetition,
        transform = pattern.transform;
      var src;
      var needScaleWithDPR = false;
      // Image URL
      if (isString(image)) {
        var imageCache = this.getImageSync(image, object, callback);
        src = imageCache === null || imageCache === void 0 ? void 0 : imageCache.img;
      } else if ($offscreenCanvas) {
        src = $offscreenCanvas;
        needScaleWithDPR = true;
      } else {
        src = image;
      }

      // @see https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/createPattern
      var canvasPattern = src && context.createPattern(src, repetition);
      if (canvasPattern) {
        var mat;
        // @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern/setTransform
        if (transform) {
          mat = parsedTransformToMat4(parseTransform(transform), new DisplayObject({}));
        } else {
          mat = mat4.identity(mat4.create());
        }
        if (needScaleWithDPR) {
          mat4.scale(mat, mat, [1 / dpr, 1 / dpr, 1]);
        }
        canvasPattern.setTransform({
          a: mat[0],
          b: mat[1],
          c: mat[4],
          d: mat[5],
          e: mat[12] + min[0],
          f: mat[13] + min[1]
        });
      }
      if (patternKey && canvasPattern) {
        this.patternCache[patternKey] = canvasPattern;
      }
      return canvasPattern;
    }
  }, {
    key: "getOrCreateGradient",
    value: function getOrCreateGradient(params, context) {
      var key = this.generateGradientKey(params);
      var type = params.type,
        steps = params.steps,
        min = params.min,
        width = params.width,
        height = params.height,
        angle = params.angle,
        cx = params.cx,
        cy = params.cy,
        size = params.size;
      if (this.gradientCache[key]) {
        return this.gradientCache[key];
      }
      var gradient = null;
      if (type === GradientType.LinearGradient) {
        var _computeLinearGradien = computeLinearGradient(min, width, height, angle),
          x1 = _computeLinearGradien.x1,
          y1 = _computeLinearGradien.y1,
          x2 = _computeLinearGradien.x2,
          y2 = _computeLinearGradien.y2;
        // @see https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/createLinearGradient
        gradient = context.createLinearGradient(x1, y1, x2, y2);
      } else if (type === GradientType.RadialGradient) {
        var _computeRadialGradien = computeRadialGradient(min, width, height, cx, cy, size),
          x = _computeRadialGradien.x,
          y = _computeRadialGradien.y,
          r = _computeRadialGradien.r;
        // @see https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/createRadialGradient
        gradient = context.createRadialGradient(x, y, 0, x, y, r);
      }
      if (gradient) {
        steps.forEach(function (_ref2) {
          var offset = _ref2.offset,
            color = _ref2.color;
          if (offset.unit === UnitType.kPercentage) {
            var _gradient;
            (_gradient = gradient) === null || _gradient === void 0 || _gradient.addColorStop(offset.value / 100, color.toString());
          }
        });
        this.gradientCache[key] = gradient;
      }
      return this.gradientCache[key];
    }
  }, {
    key: "generateGradientKey",
    value: function generateGradientKey(params) {
      var type = params.type,
        min = params.min,
        width = params.width,
        height = params.height,
        steps = params.steps,
        angle = params.angle,
        cx = params.cx,
        cy = params.cy,
        size = params.size;
      return "gradient-".concat(type, "-").concat((angle === null || angle === void 0 ? void 0 : angle.toString()) || 0, "-").concat((cx === null || cx === void 0 ? void 0 : cx.toString()) || 0, "-").concat((cy === null || cy === void 0 ? void 0 : cy.toString()) || 0, "-").concat((size === null || size === void 0 ? void 0 : size.toString()) || 0, "-").concat(min[0], "-").concat(min[1], "-").concat(width, "-").concat(height, "-").concat(steps.map(function (_ref3) {
        var offset = _ref3.offset,
          color = _ref3.color;
        return "".concat(offset).concat(color);
      }).join('-'));
    }
  }, {
    key: "generatePatternKey",
    value: function generatePatternKey(pattern) {
      var image = pattern.image,
        repetition = pattern.repetition;
      // only generate cache for Image
      if (isString(image)) {
        return "pattern-".concat(image, "-").concat(repetition);
      }
      if (image.nodeName === 'rect') {
        return "pattern-".concat(image.entity, "-").concat(repetition);
      }
    }
  }]);
}();
ImagePool.isSupportTile = !!OffscreenCanvasCreator.createCanvas();
function calculateImageTileSize(img) {
  if (!img.complete) {
    return [0, 0];
  }
  var width = img.naturalWidth || img.width,
    height = img.naturalHeight || img.height;
  var tileSize = 256;
  [256, 512].forEach(function (size) {
    var rows = Math.ceil(height / size);
    var cols = Math.ceil(width / size);
    if (rows * cols < 1e3) {
      tileSize = size;
    }
  });
  return [tileSize, tileSize];
}

var LoadImagePlugin = /*#__PURE__*/function () {
  function LoadImagePlugin() {
    _classCallCheck(this, LoadImagePlugin);
  }
  return _createClass(LoadImagePlugin, [{
    key: "apply",
    value: function apply(context) {
      var renderingService = context.renderingService,
        renderingContext = context.renderingContext,
        imagePool = context.imagePool;
      var canvas = renderingContext.root.ownerDocument.defaultView;
      var calculateWithAspectRatio = function calculateWithAspectRatio(object, imageWidth, imageHeight) {
        var _object$parsedStyle = object.parsedStyle,
          width = _object$parsedStyle.width,
          height = _object$parsedStyle.height;
        if (width && !height) {
          object.setAttribute('height', imageHeight / imageWidth * width);
        } else if (!width && height) {
          object.setAttribute('width', imageWidth / imageHeight * height);
        }
      };
      var handleMounted = function handleMounted(e) {
        var object = e.target;
        var nodeName = object.nodeName,
          attributes = object.attributes;
        if (nodeName === Shape.IMAGE) {
          var src = attributes.src,
            keepAspectRatio = attributes.keepAspectRatio;
          imagePool.getImageSync(src, object, function (_ref) {
            var _ref$img = _ref.img,
              width = _ref$img.width,
              height = _ref$img.height;
            if (keepAspectRatio) {
              calculateWithAspectRatio(object, width, height);
            }

            // set dirty rectangle flag
            object.renderable.dirty = true;
            renderingService.dirtify();
          });
        }
      };
      var handleAttributeChanged = function handleAttributeChanged(e) {
        var object = e.target;
        var attrName = e.attrName,
          prevValue = e.prevValue,
          newValue = e.newValue;
        if (object.nodeName !== Shape.IMAGE || attrName !== 'src') {
          return;
        }
        if (prevValue !== newValue) {
          imagePool.releaseImage(prevValue, object);
        }
        if (isString(newValue)) {
          imagePool.getOrCreateImage(newValue, object).then(function (_ref2) {
            var _ref2$img = _ref2.img,
              width = _ref2$img.width,
              height = _ref2$img.height;
            if (object.attributes.keepAspectRatio) {
              calculateWithAspectRatio(object, width, height);
            }

            // set dirty rectangle flag
            object.renderable.dirty = true;
            renderingService.dirtify();
          })["catch"](function () {
            //
          });
        }
      };
      renderingService.hooks.init.tap(LoadImagePlugin.tag, function () {
        canvas.addEventListener(ElementEvent.MOUNTED, handleMounted);
        canvas.addEventListener(ElementEvent.ATTR_MODIFIED, handleAttributeChanged);
      });
      renderingService.hooks.destroy.tap(LoadImagePlugin.tag, function () {
        canvas.removeEventListener(ElementEvent.MOUNTED, handleMounted);
        canvas.removeEventListener(ElementEvent.ATTR_MODIFIED, handleAttributeChanged);
      });
    }
  }]);
}();
LoadImagePlugin.tag = 'LoadImage';

var Plugin = /*#__PURE__*/function (_AbstractRendererPlug) {
  function Plugin() {
    var _this;
    _classCallCheck(this, Plugin);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Plugin, [].concat(args));
    _this.name = 'image-loader';
    return _this;
  }
  _inherits(Plugin, _AbstractRendererPlug);
  return _createClass(Plugin, [{
    key: "init",
    value: function init(runtime) {
      // @ts-ignore
      this.context.imagePool = new ImagePool(this.context, runtime);
      this.addRenderingPlugin(new LoadImagePlugin());
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeAllRenderingPlugins();
    }
  }]);
}(AbstractRendererPlugin);

export { ImagePool, Plugin };
//# sourceMappingURL=index.esm.js.map
