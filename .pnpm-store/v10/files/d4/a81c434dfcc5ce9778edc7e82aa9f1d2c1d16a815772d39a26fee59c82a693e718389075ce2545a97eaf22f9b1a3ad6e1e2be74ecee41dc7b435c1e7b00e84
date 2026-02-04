/*!
 * @antv/g-lite
 * @description A core module for rendering engine implements DOM API.
 * @version 2.7.0
 * @date 12/24/2025, 11:55:20 AM
 * @author AntVis
 * @docs https://g.antv.antgroup.com/
 */
import _objectSpread from '@babel/runtime/helpers/objectSpread2';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _callSuper from '@babel/runtime/helpers/callSuper';
import _inherits from '@babel/runtime/helpers/inherits';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import EventEmitter from 'eventemitter3';
import { vec3, vec4, mat4, mat3, quat as quat$1, vec2 } from 'gl-matrix';
import '@babel/runtime/helpers/readOnlyError';
import { isNumber, distanceSquareRoot, isString, isNil, clamp, getTotalLength, min, max, isNumberEqual, mod, normalizePath, path2Curve, equalizeSegments, getDrawDirection, reverseCurve, clonePath, getRotatedCurve, isUndefined, isArray, isBoolean, isFunction, isObject, getPointAtLength } from '@antv/util';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _superPropGet from '@babel/runtime/helpers/superPropGet';
import _arrayLikeToArray from '@babel/runtime/helpers/arrayLikeToArray';
import { polylineLength, arcBox, cubicBox, quadBox, linePointAt, lineLength } from '@antv/g-math';
import _regeneratorRuntime from '@babel/runtime/helpers/regeneratorRuntime';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _createForOfIteratorHelper from '@babel/runtime/helpers/createForOfIteratorHelper';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';

/// <reference types="webxr" />

var Shape = /*#__PURE__*/function (Shape) {
  Shape["GROUP"] = "g";
  Shape["FRAGMENT"] = "fragment";
  Shape["CIRCLE"] = "circle";
  Shape["ELLIPSE"] = "ellipse";
  Shape["IMAGE"] = "image";
  Shape["RECT"] = "rect";
  Shape["LINE"] = "line";
  Shape["POLYLINE"] = "polyline";
  Shape["POLYGON"] = "polygon";
  Shape["TEXT"] = "text";
  Shape["PATH"] = "path";
  Shape["HTML"] = "html";
  Shape["MESH"] = "mesh";
  return Shape;
}({});

// prettier-ignore

// prettier-ignore

// Cursor style
// See: https://developer.mozilla.org/en-US/docs/Web/CSS/cursor

var ClipSpaceNearZ = /*#__PURE__*/function (ClipSpaceNearZ) {
  ClipSpaceNearZ[ClipSpaceNearZ["ZERO"] = 0] = "ZERO";
  ClipSpaceNearZ[ClipSpaceNearZ["NEGATIVE_ONE"] = 1] = "NEGATIVE_ONE";
  return ClipSpaceNearZ;
}({});

/**
 * eg. NodeCanvas, OffscreenCanvas, HTMLCanvasElement
 */

/**
 * The format to use when defining custom easing functions
 */

// @see https://github.com/zhanba/pailye/blob/master/packages/flex/src/types.ts

var AbstractRendererPlugin = /*#__PURE__*/function () {
  function AbstractRendererPlugin() {
    _classCallCheck(this, AbstractRendererPlugin);
    this.plugins = [];
  }
  return _createClass(AbstractRendererPlugin, [{
    key: "addRenderingPlugin",
    value: function addRenderingPlugin(plugin) {
      this.plugins.push(plugin);
      this.context.renderingPlugins.push(plugin);
    }
  }, {
    key: "removeAllRenderingPlugins",
    value: function removeAllRenderingPlugins() {
      var _this = this;
      this.plugins.forEach(function (plugin) {
        var index = _this.context.renderingPlugins.indexOf(plugin);
        if (index >= 0) {
          _this.context.renderingPlugins.splice(index, 1);
        }
      });
    }
  }]);
}();
var AbstractRenderer = /*#__PURE__*/function () {
  function AbstractRenderer(config) {
    _classCallCheck(this, AbstractRenderer);
    this.clipSpaceNearZ = ClipSpaceNearZ.NEGATIVE_ONE;
    this.plugins = [];
    this.config = _objectSpread({
      /**
       * only dirty object will cause re-render
       */
      enableDirtyCheck: true,
      enableCulling: false,
      /**
       * enable auto rendering by default
       */
      enableAutoRendering: true,
      /**
       * enable dirty rectangle rendering by default
       */
      enableDirtyRectangleRendering: true,
      enableDirtyRectangleRenderingDebug: false,
      enableSizeAttenuation: true,
      enableRenderingOptimization: false
    }, config);
  }
  return _createClass(AbstractRenderer, [{
    key: "registerPlugin",
    value: function registerPlugin(plugin) {
      var index = this.plugins.findIndex(function (p) {
        return p === plugin;
      });
      if (index === -1) {
        this.plugins.push(plugin);
      }
    }
  }, {
    key: "unregisterPlugin",
    value: function unregisterPlugin(plugin) {
      var index = this.plugins.findIndex(function (p) {
        return p === plugin;
      });
      if (index > -1) {
        this.plugins.splice(index, 1);
      }
    }
  }, {
    key: "getPlugins",
    value: function getPlugins() {
      return this.plugins;
    }
  }, {
    key: "getPlugin",
    value: function getPlugin(name) {
      return this.plugins.find(function (plugin) {
        return plugin.name === name;
      });
    }
  }, {
    key: "getConfig",
    value: function getConfig() {
      return this.config;
    }
  }, {
    key: "setConfig",
    value: function setConfig(config) {
      Object.assign(this.config, config);
    }
  }]);
}();

var addVec3 = vec3.add,
  copyVec3 = vec3.copy,
  maxVec3 = vec3.max,
  minVec3 = vec3.min,
  scaleVec3 = vec3.scale,
  subVec3 = vec3.sub;

/**
 * Axis-Aligned Bounding Box
 * 为了便于后续 Frustum Culling，通过查找表定义 p-vertex 和 n-vertex
 * @see https://github.com/antvis/GWebGPUEngine/issues/3
 */
var AABB = /*#__PURE__*/function () {
  function AABB() {
    _classCallCheck(this, AABB);
    this.center = [0, 0, 0];
    this.halfExtents = [0, 0, 0];
    this.min = [0, 0, 0];
    this.max = [0, 0, 0];
  }
  return _createClass(AABB, [{
    key: "update",
    value: function update(center, halfExtents) {
      copyVec3(this.center, center);
      copyVec3(this.halfExtents, halfExtents);
      subVec3(this.min, this.center, this.halfExtents);
      addVec3(this.max, this.center, this.halfExtents);
    }
  }, {
    key: "setMinMax",
    value: function setMinMax(min, max) {
      addVec3(this.center, max, min);
      scaleVec3(this.center, this.center, 0.5);
      subVec3(this.halfExtents, max, min);
      scaleVec3(this.halfExtents, this.halfExtents, 0.5);
      copyVec3(this.min, min);
      copyVec3(this.max, max);
    }
  }, {
    key: "getMin",
    value: function getMin() {
      return this.min;
    }
  }, {
    key: "getMax",
    value: function getMax() {
      return this.max;
    }
  }, {
    key: "add",
    value: function add(aabb) {
      if (AABB.isEmpty(aabb)) {
        return;
      }
      if (AABB.isEmpty(this)) {
        this.setMinMax(aabb.getMin(), aabb.getMax());
        return;
      }
      var tc = this.center;
      var tcx = tc[0];
      var tcy = tc[1];
      var tcz = tc[2];
      var th = this.halfExtents;
      var thx = th[0];
      var thy = th[1];
      var thz = th[2];
      var tminx = tcx - thx;
      var tmaxx = tcx + thx;
      var tminy = tcy - thy;
      var tmaxy = tcy + thy;
      var tminz = tcz - thz;
      var tmaxz = tcz + thz;
      var oc = aabb.center;
      var ocx = oc[0];
      var ocy = oc[1];
      var ocz = oc[2];
      var oh = aabb.halfExtents;
      var ohx = oh[0];
      var ohy = oh[1];
      var ohz = oh[2];
      var ominx = ocx - ohx;
      var omaxx = ocx + ohx;
      var ominy = ocy - ohy;
      var omaxy = ocy + ohy;
      var ominz = ocz - ohz;
      var omaxz = ocz + ohz;
      if (ominx < tminx) {
        tminx = ominx;
      }
      if (omaxx > tmaxx) {
        tmaxx = omaxx;
      }
      if (ominy < tminy) {
        tminy = ominy;
      }
      if (omaxy > tmaxy) {
        tmaxy = omaxy;
      }
      if (ominz < tminz) {
        tminz = ominz;
      }
      if (omaxz > tmaxz) {
        tmaxz = omaxz;
      }
      tc[0] = (tminx + tmaxx) * 0.5;
      tc[1] = (tminy + tmaxy) * 0.5;
      tc[2] = (tminz + tmaxz) * 0.5;
      th[0] = (tmaxx - tminx) * 0.5;
      th[1] = (tmaxy - tminy) * 0.5;
      th[2] = (tmaxz - tminz) * 0.5;
      this.min[0] = tminx;
      this.min[1] = tminy;
      this.min[2] = tminz;
      this.max[0] = tmaxx;
      this.max[1] = tmaxy;
      this.max[2] = tmaxz;
    }
  }, {
    key: "setFromTransformedAABB",
    value: function setFromTransformedAABB(aabb, m) {
      var bc = this.center;
      var br = this.halfExtents;
      var ac = aabb.center;
      var ar = aabb.halfExtents;
      var mx0 = m[0];
      var mx1 = m[4];
      var mx2 = m[8];
      var my0 = m[1];
      var my1 = m[5];
      var my2 = m[9];
      var mz0 = m[2];
      var mz1 = m[6];
      var mz2 = m[10];
      var mx0a = Math.abs(mx0);
      var mx1a = Math.abs(mx1);
      var mx2a = Math.abs(mx2);
      var my0a = Math.abs(my0);
      var my1a = Math.abs(my1);
      var my2a = Math.abs(my2);
      var mz0a = Math.abs(mz0);
      var mz1a = Math.abs(mz1);
      var mz2a = Math.abs(mz2);
      bc[0] = m[12] + mx0 * ac[0] + mx1 * ac[1] + mx2 * ac[2];
      bc[1] = m[13] + my0 * ac[0] + my1 * ac[1] + my2 * ac[2];
      bc[2] = m[14] + mz0 * ac[0] + mz1 * ac[1] + mz2 * ac[2];

      // vec3.set(
      //   bc,
      //   m[12] + mx0 * ac[0] + mx1 * ac[1] + mx2 * ac[2],
      //   m[13] + my0 * ac[0] + my1 * ac[1] + my2 * ac[2],
      //   m[14] + mz0 * ac[0] + mz1 * ac[1] + mz2 * ac[2],
      // );

      br[0] = mx0a * ar[0] + mx1a * ar[1] + mx2a * ar[2];
      br[1] = my0a * ar[0] + my1a * ar[1] + my2a * ar[2];
      br[2] = mz0a * ar[0] + mz1a * ar[1] + mz2a * ar[2];

      // vec3.set(
      //   br,
      //   mx0a * ar[0] + mx1a * ar[1] + mx2a * ar[2],
      //   my0a * ar[0] + my1a * ar[1] + my2a * ar[2],
      //   mz0a * ar[0] + mz1a * ar[1] + mz2a * ar[2],
      // );

      // this.min = vec3.sub(this.min, bc, br);
      // this.max = vec3.add(this.max, bc, br);

      subVec3(this.min, bc, br);
      addVec3(this.max, bc, br);
    }
  }, {
    key: "intersects",
    value: function intersects(aabb) {
      var aMax = this.getMax();
      var aMin = this.getMin();
      var bMax = aabb.getMax();
      var bMin = aabb.getMin();
      return aMin[0] <= bMax[0] && aMax[0] >= bMin[0] && aMin[1] <= bMax[1] && aMax[1] >= bMin[1] && aMin[2] <= bMax[2] && aMax[2] >= bMin[2];
    }
  }, {
    key: "intersection",
    value: function intersection(aabb) {
      if (!this.intersects(aabb)) {
        return null;
      }
      var intersection = new AABB();
      var min = maxVec3([0, 0, 0], this.getMin(), aabb.getMin());
      var max = minVec3([0, 0, 0], this.getMax(), aabb.getMax());
      intersection.setMinMax(min, max);
      return intersection;
    }

    /**
     * get n-vertex
     * @param plane plane of CullingVolume
     */
  }, {
    key: "getNegativeFarPoint",
    value: function getNegativeFarPoint(plane) {
      if (plane.pnVertexFlag === 0x111) {
        return copyVec3([0, 0, 0], this.min);
        // return vec3.copy(vec3.create(), this.min);
      }
      if (plane.pnVertexFlag === 0x110) {
        return [this.min[0], this.min[1], this.max[2]];
        // return vec3.fromValues(this.min[0], this.min[1], this.max[2]);
      }
      if (plane.pnVertexFlag === 0x101) {
        return [this.min[0], this.max[1], this.min[2]];
        // return vec3.fromValues(this.min[0], this.max[1], this.min[2]);
      }
      if (plane.pnVertexFlag === 0x100) {
        return [this.min[0], this.max[1], this.max[2]];
        // return vec3.fromValues(this.min[0], this.max[1], this.max[2]);
      }
      if (plane.pnVertexFlag === 0x011) {
        return [this.max[0], this.min[1], this.min[2]];
        // return vec3.fromValues(this.max[0], this.min[1], this.min[2]);
      }
      if (plane.pnVertexFlag === 0x010) {
        return [this.max[0], this.min[1], this.max[2]];
        // return vec3.fromValues(this.max[0], this.min[1], this.max[2]);
      }
      if (plane.pnVertexFlag === 0x001) {
        return [this.max[0], this.max[1], this.min[2]];
        // return vec3.fromValues(this.max[0], this.max[1], this.min[2]);
      }
      return [this.max[0], this.max[1], this.max[2]];
      // return vec3.fromValues(this.max[0], this.max[1], this.max[2]);
    }

    /**
     * get p-vertex
     * @param plane plane of CullingVolume
     */
  }, {
    key: "getPositiveFarPoint",
    value: function getPositiveFarPoint(plane) {
      if (plane.pnVertexFlag === 0x111) {
        return copyVec3([0, 0, 0], this.max);
        // return vec3.copy(vec3.create(), this.max);
      }
      if (plane.pnVertexFlag === 0x110) {
        return [this.max[0], this.max[1], this.min[2]];
        // return vec3.fromValues(this.max[0], this.max[1], this.min[2]);
      }
      if (plane.pnVertexFlag === 0x101) {
        return [this.max[0], this.min[1], this.max[2]];
        // return vec3.fromValues(this.max[0], this.min[1], this.max[2]);
      }
      if (plane.pnVertexFlag === 0x100) {
        return [this.max[0], this.min[1], this.min[2]];
        // return vec3.fromValues(this.max[0], this.min[1], this.min[2]);
      }
      if (plane.pnVertexFlag === 0x011) {
        return [this.min[0], this.max[1], this.max[2]];
        // return vec3.fromValues(this.min[0], this.max[1], this.max[2]);
      }
      if (plane.pnVertexFlag === 0x010) {
        return [this.min[0], this.max[1], this.min[2]];
        // return vec3.fromValues(this.min[0], this.max[1], this.min[2]);
      }
      if (plane.pnVertexFlag === 0x001) {
        return [this.min[0], this.min[1], this.max[2]];
        // return vec3.fromValues(this.min[0], this.min[1], this.max[2]);
      }
      return [this.min[0], this.min[1], this.min[2]];
      // return vec3.fromValues(this.min[0], this.min[1], this.min[2]);
    }
  }], [{
    key: "isEmpty",
    value: function isEmpty(aabb) {
      return !aabb || aabb.halfExtents[0] === 0 && aabb.halfExtents[1] === 0 && aabb.halfExtents[2] === 0;
    }
  }]);
}();

var Plane = /*#__PURE__*/function () {
  /**
   * lookup table for p-vertex & n-vertex when doing frustum culling
   */

  function Plane(distance, normal) {
    _classCallCheck(this, Plane);
    this.distance = distance || 0;
    this.normal = normal || vec3.fromValues(0, 1, 0);
    this.updatePNVertexFlag();
  }
  return _createClass(Plane, [{
    key: "updatePNVertexFlag",
    value: function updatePNVertexFlag() {
      this.pnVertexFlag = (Number(this.normal[0] >= 0) << 8) + (Number(this.normal[1] >= 0) << 4) + Number(this.normal[2] >= 0);
    }
  }, {
    key: "distanceToPoint",
    value: function distanceToPoint(point) {
      return vec3.dot(point, this.normal) - this.distance;
    }
  }, {
    key: "normalize",
    value: function normalize() {
      var invLen = 1 / vec3.len(this.normal);
      vec3.scale(this.normal, this.normal, invLen);
      this.distance *= invLen;
    }
  }, {
    key: "intersectsLine",
    value: function intersectsLine(start, end, point) {
      var d0 = this.distanceToPoint(start);
      var d1 = this.distanceToPoint(end);
      var t = d0 / (d0 - d1);
      var intersects = t >= 0 && t <= 1;
      if (intersects && point) {
        vec3.lerp(point, start, end, t);
      }
      return intersects;
    }
  }]);
}();

var Mask = /*#__PURE__*/function (Mask) {
  Mask[Mask["OUTSIDE"] = 4294967295] = "OUTSIDE";
  Mask[Mask["INSIDE"] = 0] = "INSIDE";
  Mask[Mask["INDETERMINATE"] = 2147483647] = "INDETERMINATE";
  return Mask;
}({});
var Frustum = /*#__PURE__*/function () {
  function Frustum(planes) {
    _classCallCheck(this, Frustum);
    this.planes = [];
    if (planes) {
      this.planes = planes;
    } else {
      for (var i = 0; i < 6; i++) {
        this.planes.push(new Plane());
      }
    }
  }

  /**
   * extract 6 planes from projectionMatrix
   * @see http://www8.cs.umu.se/kurser/5DV051/HT12/lab/plane_extraction.pdf
   */
  return _createClass(Frustum, [{
    key: "extractFromVPMatrix",
    value: function extractFromVPMatrix(projectionMatrix) {
      // @ts-ignore
      var _projectionMatrix = _slicedToArray(projectionMatrix, 16),
        m0 = _projectionMatrix[0],
        m1 = _projectionMatrix[1],
        m2 = _projectionMatrix[2],
        m3 = _projectionMatrix[3],
        m4 = _projectionMatrix[4],
        m5 = _projectionMatrix[5],
        m6 = _projectionMatrix[6],
        m7 = _projectionMatrix[7],
        m8 = _projectionMatrix[8],
        m9 = _projectionMatrix[9],
        m10 = _projectionMatrix[10],
        m11 = _projectionMatrix[11],
        m12 = _projectionMatrix[12],
        m13 = _projectionMatrix[13],
        m14 = _projectionMatrix[14],
        m15 = _projectionMatrix[15];

      // right
      vec3.set(this.planes[0].normal, m3 - m0, m7 - m4, m11 - m8);
      this.planes[0].distance = m15 - m12;

      // left
      vec3.set(this.planes[1].normal, m3 + m0, m7 + m4, m11 + m8);
      this.planes[1].distance = m15 + m12;

      // bottom
      vec3.set(this.planes[2].normal, m3 + m1, m7 + m5, m11 + m9);
      this.planes[2].distance = m15 + m13;

      // top
      vec3.set(this.planes[3].normal, m3 - m1, m7 - m5, m11 - m9);
      this.planes[3].distance = m15 - m13;

      // far
      vec3.set(this.planes[4].normal, m3 - m2, m7 - m6, m11 - m10);
      this.planes[4].distance = m15 - m14;

      // near
      vec3.set(this.planes[5].normal, m3 + m2, m7 + m6, m11 + m10);
      this.planes[5].distance = m15 + m14;
      this.planes.forEach(function (plane) {
        plane.normalize();
        plane.updatePNVertexFlag();
      });
    }
  }]);
}();

var Point = /*#__PURE__*/function () {
  function Point() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    _classCallCheck(this, Point);
    this.x = 0;
    this.y = 0;
    this.x = x;
    this.y = y;
  }
  return _createClass(Point, [{
    key: "clone",
    value: function clone() {
      return new Point(this.x, this.y);
    }
  }, {
    key: "copyFrom",
    value: function copyFrom(p) {
      this.x = p.x;
      this.y = p.y;
    }
  }]);
}();

var Rectangle = /*#__PURE__*/function () {
  function Rectangle(x, y, width, height) {
    _classCallCheck(this, Rectangle);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.left = x;
    this.right = x + width;
    this.top = y;
    this.bottom = y + height;
  }
  return _createClass(Rectangle, [{
    key: "toJSON",
    value: function toJSON() {}
  }], [{
    key: "fromRect",
    value:
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMRect/fromRect_static
     */
    function fromRect(rect) {
      return new Rectangle(rect.x, rect.y, rect.width, rect.height);
    }

    /**
     * will return a new rect instance
     */
  }, {
    key: "applyTransform",
    value: function applyTransform(rect, matrix) {
      var topLeft = vec4.fromValues(rect.x, rect.y, 0, 1);
      var topRight = vec4.fromValues(rect.x + rect.width, rect.y, 0, 1);
      var bottomLeft = vec4.fromValues(rect.x, rect.y + rect.height, 0, 1);
      var bottomRight = vec4.fromValues(rect.x + rect.width, rect.y + rect.height, 0, 1);
      var transformedTopLeft = vec4.create();
      var transformedTopRight = vec4.create();
      var transformedBottomLeft = vec4.create();
      var transformedBottomRight = vec4.create();
      vec4.transformMat4(transformedTopLeft, topLeft, matrix);
      vec4.transformMat4(transformedTopRight, topRight, matrix);
      vec4.transformMat4(transformedBottomLeft, bottomLeft, matrix);
      vec4.transformMat4(transformedBottomRight, bottomRight, matrix);
      var minX = Math.min(transformedTopLeft[0], transformedTopRight[0], transformedBottomLeft[0], transformedBottomRight[0]);
      var minY = Math.min(transformedTopLeft[1], transformedTopRight[1], transformedBottomLeft[1], transformedBottomRight[1]);
      var maxX = Math.max(transformedTopLeft[0], transformedTopRight[0], transformedBottomLeft[0], transformedBottomRight[0]);
      var maxY = Math.max(transformedTopLeft[1], transformedTopRight[1], transformedBottomLeft[1], transformedBottomRight[1]);
      return Rectangle.fromRect({
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
      });
    }
  }]);
}();

var ERROR_MSG_METHOD_NOT_IMPLEMENTED = 'Method not implemented.';
var ERROR_MSG_USE_DOCUMENT_ELEMENT = 'Use document.documentElement instead.';
var ERROR_MSG_APPEND_DESTROYED_ELEMENT = 'Cannot append a destroyed element.';

function getAngle(angle) {
  if (angle === undefined) {
    return 0;
  }
  if (angle > 360 || angle < -360) {
    return angle % 360;
  }
  return angle;
}
var $vec3$3 = vec3.create();
function createVec3(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var clone = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  if (Array.isArray(x) && x.length === 3) {
    return clone ? vec3.clone(x) : vec3.copy($vec3$3, x);
  }
  if (isNumber(x)) {
    return clone ? vec3.fromValues(x, y, z) : vec3.set($vec3$3, x, y, z);
  }
  return clone ? vec3.fromValues(x[0], x[1] || y, x[2] || z) : vec3.set($vec3$3, x[0], x[1] || y, x[2] || z);
}
var DEG_RAD = Math.PI / 180;
function deg2rad(deg) {
  return deg * DEG_RAD;
}
var RAD_DEG = 180 / Math.PI;
function rad2deg(rad) {
  return rad * RAD_DEG;
}
var GRAD_DEG = 0.9; // 360 / 400;
function grad2deg(grads) {
  grads %= 400;
  if (grads < 0) {
    grads += 400;
  }
  return grads * GRAD_DEG;
}
function deg2turn(deg) {
  return deg / 360;
}
function turn2deg(turn) {
  return 360 * turn;
}
var HALF_PI = Math.PI / 2;
function getEulerFromQuat(out, quat) {
  var x = quat[0];
  var y = quat[1];
  var z = quat[2];
  var w = quat[3];
  var x2 = x * x;
  var y2 = y * y;
  var z2 = z * z;
  var w2 = w * w;
  var unit = x2 + y2 + z2 + w2;
  var test = x * w - y * z;
  if (test > 0.499995 * unit) {
    // TODO: Use glmatrix.EPSILON
    // singularity at the north pole
    out[0] = HALF_PI;
    out[1] = 2 * Math.atan2(y, x);
    out[2] = 0;
  } else if (test < -0.499995 * unit) {
    // TODO: Use glmatrix.EPSILON
    // singularity at the south pole
    out[0] = -HALF_PI;
    out[1] = 2 * Math.atan2(y, x);
    out[2] = 0;
  } else {
    out[0] = Math.asin(2 * (x * z - w * y));
    out[1] = Math.atan2(2 * (x * w + y * z), 1 - 2 * (z2 + w2));
    out[2] = Math.atan2(2 * (x * y + z * w), 1 - 2 * (y2 + z2));
  }
  // TODO: Return them as degrees and not as radians
  return out;
}
function getEulerFromMat4(out, m) {
  var x;
  var z;
  var _mat4$getScaling = mat4.getScaling(vec3.create(), m),
    _mat4$getScaling2 = _slicedToArray(_mat4$getScaling, 3),
    sx = _mat4$getScaling2[0],
    sy = _mat4$getScaling2[1],
    sz = _mat4$getScaling2[2];
  var y = Math.asin(-m[2] / sx);
  if (y < HALF_PI) {
    if (y > -HALF_PI) {
      x = Math.atan2(m[6] / sy, m[10] / sz);
      z = Math.atan2(m[1] / sx, m[0] / sx);
    } else {
      // Not a unique solution
      z = 0;
      x = -Math.atan2(m[4] / sy, m[5] / sy);
    }
  } else {
    // Not a unique solution
    z = 0;
    x = Math.atan2(m[4] / sy, m[5] / sy);
  }
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * @see https://github.com/toji/gl-matrix/issues/329
 * @see https://doc.babylonjs.com/divingDeeper/mesh/transforms/center_origin/rotation_conventions
 */
function getEuler(out, quat) {
  if (quat.length === 16) {
    return getEulerFromMat4(out, quat);
  }
  return getEulerFromQuat(out, quat);
}
function fromRotationTranslationScale(rotation, x, y, scaleX, scaleY) {
  var cos = Math.cos(rotation);
  var sin = Math.sin(rotation);
  return mat3.fromValues(scaleX * cos, scaleY * sin, 0, -scaleX * sin, scaleY * cos, 0, x, y, 1);
}
function makePerspective(out, left, right, top, bottom, near, far) {
  var zero = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var twoNear = 2 * near;
  var rightMinusLeft = right - left;
  var topMinusBottom = top - bottom;
  var x = twoNear / rightMinusLeft;
  var y = twoNear / topMinusBottom;
  var a = (right + left) / rightMinusLeft;
  var b = (top + bottom) / topMinusBottom;
  var c;
  var d;
  var farMinusNear = far - near;
  var farMulNear = far * near;
  if (zero) {
    c = -far / farMinusNear;
    d = -farMulNear / farMinusNear;
  } else {
    c = -(far + near) / farMinusNear;
    d = -2 * farMulNear / farMinusNear;
  }
  out[0] = x;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = y;
  out[6] = 0;
  out[7] = 0;
  out[8] = a;
  out[9] = b;
  out[10] = c;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = d;
  out[15] = 0;
  return out;
}
function decompose(mat) {
  var row0x = mat[0];
  var row0y = mat[1];
  var row1x = mat[3];
  var row1y = mat[4];
  // decompose 3x3 matrix
  // @see https://www.w3.org/TR/css-transforms-1/#decomposing-a-2d-matrix
  var scalingX = Math.sqrt(row0x * row0x + row0y * row0y);
  var scalingY = Math.sqrt(row1x * row1x + row1y * row1y);

  // If determinant is negative, one axis was flipped.
  var determinant = row0x * row1y - row0y * row1x;
  if (determinant < 0) {
    // Flip axis with minimum unit vector dot product.
    if (row0x < row1y) {
      scalingX = -scalingX;
    } else {
      scalingY = -scalingY;
    }
  }

  // Renormalize matrix to remove scale.
  if (scalingX) {
    var invScalingX = 1 / scalingX;
    row0x *= invScalingX;
    row0y *= invScalingX;
  }
  if (scalingY) {
    var invScalingY = 1 / scalingY;
    row1x *= invScalingY;
    row1y *= invScalingY;
  }

  // Compute rotation and renormalize matrix.
  var rotation = Math.atan2(row0y, row0x);
  var angle = rad2deg(rotation);
  return [mat[6], mat[7], scalingX, scalingY, angle];
}
var tmp = mat4.create();
var perspectiveMatrix = mat4.create();
var tmpVec4 = vec4.create();
var row = [vec3.create(), vec3.create(), vec3.create()];
var pdum3 = vec3.create();

/*
Input:  matrix      ; a 4x4 matrix
Output: translation ; a 3 component vector
        scale       ; a 3 component vector
        skew        ; skew factors XY,XZ,YZ represented as a 3 component vector
        perspective ; a 4 component vector
        quaternion  ; a 4 component vector
Returns false if the matrix cannot be decomposed, true if it can


References:
https://github.com/kamicane/matrix3d/blob/master/lib/Matrix3d.js
https://github.com/ChromiumWebApps/chromium/blob/master/ui/gfx/transform_util.cc
http://www.w3.org/TR/css3-transforms/#decomposing-a-3d-matrix
*/
function decomposeMat4(matrix, translation, scale, skew, perspective, quaternion) {
  // normalize, if not possible then bail out early
  if (!normalize(tmp, matrix)) return false;

  // perspectiveMatrix is used to solve for perspective, but it also provides
  // an easy way to test for singularity of the upper 3x3 component.
  mat4.copy(perspectiveMatrix, tmp);
  perspectiveMatrix[3] = 0;
  perspectiveMatrix[7] = 0;
  perspectiveMatrix[11] = 0;
  perspectiveMatrix[15] = 1;

  // If the perspectiveMatrix is not invertible, we are also unable to
  // decompose, so we'll bail early. Constant taken from SkMatrix44::invert.
  if (Math.abs(mat4.determinant(perspectiveMatrix)) < 1e-8) return false;
  var a03 = tmp[3];
  var a13 = tmp[7];
  var a23 = tmp[11];
  var a30 = tmp[12];
  var a31 = tmp[13];
  var a32 = tmp[14];
  var a33 = tmp[15];

  // First, isolate perspective.
  if (a03 !== 0 || a13 !== 0 || a23 !== 0) {
    tmpVec4[0] = a03;
    tmpVec4[1] = a13;
    tmpVec4[2] = a23;
    tmpVec4[3] = a33;

    // Solve the equation by inverting perspectiveMatrix and multiplying
    // rightHandSide by the inverse.
    // resuing the perspectiveMatrix here since it's no longer needed
    var ret = mat4.invert(perspectiveMatrix, perspectiveMatrix);
    if (!ret) return false;
    mat4.transpose(perspectiveMatrix, perspectiveMatrix);

    // multiply by transposed inverse perspective matrix, into perspective vec4
    vec4.transformMat4(perspective, tmpVec4, perspectiveMatrix);
  } else {
    // no perspective
    perspective[0] = perspective[1] = perspective[2] = 0;
    perspective[3] = 1;
  }

  // Next take care of translation
  translation[0] = a30;
  translation[1] = a31;
  translation[2] = a32;

  // Now get scale and shear. 'row' is a 3 element array of 3 component vectors
  mat3from4(row, tmp);

  // Compute X scale factor and normalize first row.
  scale[0] = vec3.length(row[0]);
  vec3.normalize(row[0], row[0]);

  // Compute XY shear factor and make 2nd row orthogonal to 1st.
  skew[0] = vec3.dot(row[0], row[1]);
  combine(row[1], row[1], row[0], 1.0, -skew[0]);

  // Now, compute Y scale and normalize 2nd row.
  scale[1] = vec3.length(row[1]);
  vec3.normalize(row[1], row[1]);
  skew[0] /= scale[1];

  // Compute XZ and YZ shears, orthogonalize 3rd row
  skew[1] = vec3.dot(row[0], row[2]);
  combine(row[2], row[2], row[0], 1.0, -skew[1]);
  skew[2] = vec3.dot(row[1], row[2]);
  combine(row[2], row[2], row[1], 1.0, -skew[2]);

  // Next, get Z scale and normalize 3rd row.
  scale[2] = vec3.length(row[2]);
  vec3.normalize(row[2], row[2]);
  skew[1] /= scale[2];
  skew[2] /= scale[2];

  // At this point, the matrix (in rows) is orthonormal.
  // Check for a coordinate system flip.  If the determinant
  // is -1, then negate the matrix and the scaling factors.
  vec3.cross(pdum3, row[1], row[2]);
  if (vec3.dot(row[0], pdum3) < 0) {
    for (var i = 0; i < 3; i++) {
      scale[i] *= -1;
      row[i][0] *= -1;
      row[i][1] *= -1;
      row[i][2] *= -1;
    }
  }

  // Now, get the rotations out
  quaternion[0] = 0.5 * Math.sqrt(Math.max(1 + row[0][0] - row[1][1] - row[2][2], 0));
  quaternion[1] = 0.5 * Math.sqrt(Math.max(1 - row[0][0] + row[1][1] - row[2][2], 0));
  quaternion[2] = 0.5 * Math.sqrt(Math.max(1 - row[0][0] - row[1][1] + row[2][2], 0));
  quaternion[3] = 0.5 * Math.sqrt(Math.max(1 + row[0][0] + row[1][1] + row[2][2], 0));
  if (row[2][1] > row[1][2]) quaternion[0] = -quaternion[0];
  if (row[0][2] > row[2][0]) quaternion[1] = -quaternion[1];
  if (row[1][0] > row[0][1]) quaternion[2] = -quaternion[2];
  return true;
}
function normalize(out, mat) {
  var m44 = mat[15];
  // Cannot normalize.
  if (m44 === 0) return false;
  var scale = 1 / m44;
  for (var i = 0; i < 16; i++) out[i] = mat[i] * scale;
  return true;
}

// gets upper-left of a 4x4 matrix into a 3x3 of vectors
function mat3from4(out, mat4x4) {
  out[0][0] = mat4x4[0];
  out[0][1] = mat4x4[1];
  out[0][2] = mat4x4[2];
  out[1][0] = mat4x4[4];
  out[1][1] = mat4x4[5];
  out[1][2] = mat4x4[6];
  out[2][0] = mat4x4[8];
  out[2][1] = mat4x4[9];
  out[2][2] = mat4x4[10];
}
function combine(out, a, b, scale1, scale2) {
  out[0] = a[0] * scale1 + b[0] * scale2;
  out[1] = a[1] * scale1 + b[1] * scale2;
  out[2] = a[2] * scale1 + b[2] * scale2;
}

/**
 * Different type of cameras, eg. simple camera used in 2D scene or
 * advanced camera which can do actions & switch between landmarks.
 */

var CameraType = /*#__PURE__*/function (CameraType) {
  /**
   * Performs all the rotational operations with the focal point instead of the camera position.
   * This type of camera is useful in applications(like CAD) where 3D objects are being designed or explored.
   * Camera cannot orbits over the north & south poles.
   * @see http://voxelent.com/tutorial-cameras/
   *
   * In Three.js it's used in OrbitControls.
   * @see https://threejs.org/docs/#examples/zh/controls/OrbitControls
   */
  CameraType[CameraType["ORBITING"] = 0] = "ORBITING";
  /**
   * It's similar to the ORBITING camera, but it allows the camera to orbit over the north or south poles.
   *
   * In Three.js it's used in OrbitControls.
   * @see https://threejs.org/docs/#examples/en/controls/TrackballControls
   */
  CameraType[CameraType["EXPLORING"] = 1] = "EXPLORING";
  /**
   * Performs all the rotational operations with the camera position.
   * It's useful in first person shooting games.
   * Camera cannot orbits over the north & south poles.
   *
   * In Three.js it's used in FirstPersonControls.
   * @see https://threejs.org/docs/#examples/en/controls/FirstPersonControls
   */
  CameraType[CameraType["TRACKING"] = 2] = "TRACKING";
  return CameraType;
}({});

/**
 * CameraType must be TRACKING
 */
var CameraTrackingMode = /*#__PURE__*/function (CameraTrackingMode) {
  CameraTrackingMode[CameraTrackingMode["DEFAULT"] = 0] = "DEFAULT";
  CameraTrackingMode[CameraTrackingMode["ROTATIONAL"] = 1] = "ROTATIONAL";
  CameraTrackingMode[CameraTrackingMode["TRANSLATIONAL"] = 2] = "TRANSLATIONAL";
  CameraTrackingMode[CameraTrackingMode["CINEMATIC"] = 3] = "CINEMATIC";
  return CameraTrackingMode;
}({});
var CameraProjectionMode = /*#__PURE__*/function (CameraProjectionMode) {
  CameraProjectionMode[CameraProjectionMode["ORTHOGRAPHIC"] = 0] = "ORTHOGRAPHIC";
  CameraProjectionMode[CameraProjectionMode["PERSPECTIVE"] = 1] = "PERSPECTIVE";
  return CameraProjectionMode;
}({});
var CameraEvent = {
  UPDATED: 'updated'
};

var MIN_DISTANCE = 0.0002;

/**
 * 参考「WebGL Insights - 23.Designing Cameras for WebGL Applications」，基于 Responsible Camera 思路设计
 * @see https://github.com/d13g0/nucleo.js/blob/master/source/camera/Camera.js
 *
 * 保存相机参数，定义相机动作：
 * 1. dolly 沿 n 轴移动
 * 2. pan 沿 u v 轴移动
 * 3. rotate 以方位角旋转
 * 4. 移动到 Landmark，具有平滑的动画效果，其间禁止其他用户交互
 */

var Camera = /*#__PURE__*/function () {
  function Camera() {
    _classCallCheck(this, Camera);
    /**
     * Clip space near Z, default to range `[-1, 1]`
     */
    this.clipSpaceNearZ = ClipSpaceNearZ.NEGATIVE_ONE;
    this.eventEmitter = new EventEmitter();
    /**
     * Matrix of camera
     */
    this.matrix = mat4.create();
    /**
     * u axis +X is right
     * @see http://learnwebgl.brown37.net/07_cameras/camera_introduction.html#a-camera-definition
     */
    this.right = vec3.fromValues(1, 0, 0);
    /**
     * v axis +Y is up
     */
    this.up = vec3.fromValues(0, 1, 0);
    /**
     * n axis +Z is inside
     */
    this.forward = vec3.fromValues(0, 0, 1);
    /**
     * Position of camera.
     */
    this.position = vec3.fromValues(0, 0, 1);
    /**
     * Position of focal point.
     */
    this.focalPoint = vec3.fromValues(0, 0, 0);
    /**
     * vector from focalPoint to position
     */
    this.distanceVector = vec3.fromValues(0, 0, -1);
    /**
     * length(focalPoint - position)
     */
    this.distance = 1;
    /**
     * @see https://en.wikipedia.org/wiki/Azimuth
     */
    this.azimuth = 0;
    this.elevation = 0;
    this.roll = 0;
    this.relAzimuth = 0;
    this.relElevation = 0;
    this.relRoll = 0;
    /**
     * 沿 n 轴移动时，保证移动速度从快到慢
     */
    this.dollyingStep = 0;
    this.maxDistance = Infinity;
    this.minDistance = -Infinity;
    /**
     * zoom factor of the camera, default is 1
     * eg. https://threejs.org/docs/#api/en/cameras/OrthographicCamera.zoom
     */
    this.zoom = 1;
    /**
     * invert the horizontal coordinate system HCS
     */
    this.rotateWorld = false;
    /**
     * 投影矩阵参数
     */
    /**
     * field of view [0-360]
     * @see http://en.wikipedia.org/wiki/Angle_of_view
     */
    this.fov = 30;
    this.near = 0.1;
    this.far = 1000;
    this.aspect = 1;
    this.projectionMatrix = mat4.create();
    this.projectionMatrixInverse = mat4.create();
    this.jitteredProjectionMatrix = undefined;
    this.enableUpdate = true;
    // protected following = undefined;
    this.type = CameraType.EXPLORING;
    this.trackingMode = CameraTrackingMode.DEFAULT;
    this.projectionMode = CameraProjectionMode.PERSPECTIVE;
    /**
     * for culling use
     */
    this.frustum = new Frustum();
    /**
     * ortho matrix for Canvas2D & SVG
     */
    this.orthoMatrix = mat4.create();
  }
  return _createClass(Camera, [{
    key: "isOrtho",
    value:
    // constructor(type = CameraType.EXPLORING, trackingMode = CameraTrackingMode.DEFAULT) {
    //   this.setType(type, trackingMode);
    // }

    function isOrtho() {
      return this.projectionMode === CameraProjectionMode.ORTHOGRAPHIC;
    }
  }, {
    key: "getProjectionMode",
    value: function getProjectionMode() {
      return this.projectionMode;
    }
  }, {
    key: "getPerspective",
    value: function getPerspective() {
      // account for TAA
      return this.jitteredProjectionMatrix || this.projectionMatrix;
    }
  }, {
    key: "getPerspectiveInverse",
    value: function getPerspectiveInverse() {
      return this.projectionMatrixInverse;
    }
  }, {
    key: "getFrustum",
    value: function getFrustum() {
      return this.frustum;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: "getFocalPoint",
    value: function getFocalPoint() {
      return this.focalPoint;
    }
  }, {
    key: "getDollyingStep",
    value: function getDollyingStep() {
      return this.dollyingStep;
    }
  }, {
    key: "getNear",
    value: function getNear() {
      return this.near;
    }
  }, {
    key: "getFar",
    value: function getFar() {
      return this.far;
    }
  }, {
    key: "getZoom",
    value: function getZoom() {
      return this.zoom;
    }
  }, {
    key: "getOrthoMatrix",
    value: function getOrthoMatrix() {
      return this.orthoMatrix;
    }
  }, {
    key: "getView",
    value: function getView() {
      return this.view;
    }
  }, {
    key: "setEnableUpdate",
    value: function setEnableUpdate(enabled) {
      this.enableUpdate = enabled;
    }
  }, {
    key: "setType",
    value: function setType(type, trackingMode) {
      this.type = type;
      if (this.type === CameraType.EXPLORING) {
        this.setWorldRotation(true);
      } else {
        this.setWorldRotation(false);
      }
      this._getAngles();
      if (this.type === CameraType.TRACKING && trackingMode !== undefined) {
        this.setTrackingMode(trackingMode);
      }
      return this;
    }
  }, {
    key: "setProjectionMode",
    value: function setProjectionMode(projectionMode) {
      this.projectionMode = projectionMode;
      return this;
    }
  }, {
    key: "setTrackingMode",
    value: function setTrackingMode(trackingMode) {
      if (this.type !== CameraType.TRACKING) {
        throw new Error('Impossible to set a tracking mode if the camera is not of tracking type');
      }
      this.trackingMode = trackingMode;
      return this;
    }

    /**
     * If flag is true, it reverses the azimuth and elevation angles.
     * Subsequent calls to rotate, setAzimuth, setElevation,
     * changeAzimuth or changeElevation will cause the inverted effect.
     * setRoll or changeRoll is not affected by this method.
     *
     * This inversion is useful when one wants to simulate that the world
     * is moving, instead of the camera.
     *
     * By default the camera angles are not reversed.
     * @param {Boolean} flag the boolean flag to reverse the angles.
     */
  }, {
    key: "setWorldRotation",
    value: function setWorldRotation(flag) {
      this.rotateWorld = flag;
      this._getAngles();
      return this;
    }

    /**
     * 计算 MV 矩阵，为相机矩阵的逆矩阵
     */
  }, {
    key: "getViewTransform",
    value: function getViewTransform() {
      // mat4.scale(this.matrix, this.matrix, vec3.fromValues(1, -1, 1));

      return mat4.invert(mat4.create(), this.matrix);
    }
  }, {
    key: "getWorldTransform",
    value: function getWorldTransform() {
      return this.matrix;
    }
  }, {
    key: "jitterProjectionMatrix",
    value: function jitterProjectionMatrix(x, y) {
      var translation = mat4.fromTranslation(mat4.create(), [x, y, 0]);
      this.jitteredProjectionMatrix = mat4.multiply(mat4.create(), translation, this.projectionMatrix);
    }
  }, {
    key: "clearJitterProjectionMatrix",
    value: function clearJitterProjectionMatrix() {
      this.jitteredProjectionMatrix = undefined;
    }

    /**
     * 设置相机矩阵
     */
  }, {
    key: "setMatrix",
    value: function setMatrix(matrix) {
      this.matrix = matrix;
      this._update();
      return this;
    }

    /**
     * Set projection matrix manually.
     */
  }, {
    key: "setProjectionMatrix",
    value: function setProjectionMatrix(matrix) {
      this.projectionMatrix = matrix;
    }
  }, {
    key: "setFov",
    value: function setFov(fov) {
      this.setPerspective(this.near, this.far, fov, this.aspect);
      return this;
    }
  }, {
    key: "setAspect",
    value: function setAspect(aspect) {
      this.setPerspective(this.near, this.far, this.fov, aspect);
      return this;
    }
  }, {
    key: "setNear",
    value: function setNear(near) {
      if (this.projectionMode === CameraProjectionMode.PERSPECTIVE) {
        this.setPerspective(near, this.far, this.fov, this.aspect);
      } else {
        this.setOrthographic(this.left, this.rright, this.top, this.bottom, near, this.far);
      }
      return this;
    }
  }, {
    key: "setFar",
    value: function setFar(far) {
      if (this.projectionMode === CameraProjectionMode.PERSPECTIVE) {
        this.setPerspective(this.near, far, this.fov, this.aspect);
      } else {
        this.setOrthographic(this.left, this.rright, this.top, this.bottom, this.near, far);
      }
      return this;
    }

    /**
     * Sets an offset in a larger frustum, used in PixelPicking
     */
  }, {
    key: "setViewOffset",
    value: function setViewOffset(fullWidth, fullHeight, x, y, width, height) {
      this.aspect = fullWidth / fullHeight;
      if (this.view === undefined) {
        this.view = {
          enabled: true,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1
        };
      }
      this.view.enabled = true;
      this.view.fullWidth = fullWidth;
      this.view.fullHeight = fullHeight;
      this.view.offsetX = x;
      this.view.offsetY = y;
      this.view.width = width;
      this.view.height = height;
      if (this.projectionMode === CameraProjectionMode.PERSPECTIVE) {
        this.setPerspective(this.near, this.far, this.fov, this.aspect);
      } else {
        this.setOrthographic(this.left, this.rright, this.top, this.bottom, this.near, this.far);
      }
      return this;
    }
  }, {
    key: "clearViewOffset",
    value: function clearViewOffset() {
      if (this.view !== undefined) {
        this.view.enabled = false;
      }
      if (this.projectionMode === CameraProjectionMode.PERSPECTIVE) {
        this.setPerspective(this.near, this.far, this.fov, this.aspect);
      } else {
        this.setOrthographic(this.left, this.rright, this.top, this.bottom, this.near, this.far);
      }
      return this;
    }
  }, {
    key: "setZoom",
    value: function setZoom(zoom) {
      this.zoom = zoom;
      if (this.projectionMode === CameraProjectionMode.ORTHOGRAPHIC) {
        this.setOrthographic(this.left, this.rright, this.top, this.bottom, this.near, this.far);
      } else if (this.projectionMode === CameraProjectionMode.PERSPECTIVE) {
        this.setPerspective(this.near, this.far, this.fov, this.aspect);
      }
      return this;
    }

    /**
     * Zoom by specified point in viewport coordinates.
     */
  }, {
    key: "setZoomByViewportPoint",
    value: function setZoomByViewportPoint(zoom, viewportPoint) {
      var _this$canvas$viewport = this.canvas.viewport2Canvas({
          x: viewportPoint[0],
          y: viewportPoint[1]
        }),
        ox = _this$canvas$viewport.x,
        oy = _this$canvas$viewport.y;
      var roll = this.roll;
      this.rotate(0, 0, -roll);
      this.setPosition(ox, oy);
      this.setFocalPoint(ox, oy);
      this.setZoom(zoom);
      this.rotate(0, 0, roll);
      var _this$canvas$viewport2 = this.canvas.viewport2Canvas({
          x: viewportPoint[0],
          y: viewportPoint[1]
        }),
        cx = _this$canvas$viewport2.x,
        cy = _this$canvas$viewport2.y;

      // project to rotated axis
      var dvec = vec3.fromValues(cx - ox, cy - oy, 0);
      var dx = vec3.dot(dvec, this.right) / vec3.length(this.right);
      var dy = vec3.dot(dvec, this.up) / vec3.length(this.up);
      var _this$getPosition = this.getPosition(),
        _this$getPosition2 = _slicedToArray(_this$getPosition, 2),
        px = _this$getPosition2[0],
        py = _this$getPosition2[1];
      var _this$getFocalPoint = this.getFocalPoint(),
        _this$getFocalPoint2 = _slicedToArray(_this$getFocalPoint, 2),
        fx = _this$getFocalPoint2[0],
        fy = _this$getFocalPoint2[1];
      this.setPosition(px - dx, py - dy);
      this.setFocalPoint(fx - dx, fy - dy);
      return this;
    }
  }, {
    key: "setPerspective",
    value: function setPerspective(near, far, fov, aspect) {
      var _this$view;
      this.projectionMode = CameraProjectionMode.PERSPECTIVE;
      this.fov = fov;
      this.near = near;
      this.far = far;
      this.aspect = aspect;
      var top = this.near * Math.tan(deg2rad(0.5 * this.fov)) / this.zoom;
      var height = 2 * top;
      var width = this.aspect * height;
      var left = -0.5 * width;
      if ((_this$view = this.view) !== null && _this$view !== void 0 && _this$view.enabled) {
        var fullWidth = this.view.fullWidth;
        var fullHeight = this.view.fullHeight;
        left += this.view.offsetX * width / fullWidth;
        top -= this.view.offsetY * height / fullHeight;
        width *= this.view.width / fullWidth;
        height *= this.view.height / fullHeight;
      }
      makePerspective(this.projectionMatrix, left, left + width, top - height, top, near, this.far, this.clipSpaceNearZ === ClipSpaceNearZ.ZERO);
      mat4.invert(this.projectionMatrixInverse, this.projectionMatrix);
      this.triggerUpdate();
      return this;
    }
  }, {
    key: "setOrthographic",
    value: function setOrthographic(l, r, t, b, near, far) {
      var _this$view2;
      this.projectionMode = CameraProjectionMode.ORTHOGRAPHIC;
      this.rright = r;
      this.left = l;
      this.top = t;
      this.bottom = b;
      this.near = near;
      this.far = far;
      var dx = (this.rright - this.left) / (2 * this.zoom);
      var dy = (this.top - this.bottom) / (2 * this.zoom);
      var cx = (this.rright + this.left) / 2;
      var cy = (this.top + this.bottom) / 2;
      var left = cx - dx;
      var right = cx + dx;
      var top = cy + dy;
      var bottom = cy - dy;
      if ((_this$view2 = this.view) !== null && _this$view2 !== void 0 && _this$view2.enabled) {
        var scaleW = (this.rright - this.left) / this.view.fullWidth / this.zoom;
        var scaleH = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        left += scaleW * this.view.offsetX;
        right = left + scaleW * this.view.width;
        top -= scaleH * this.view.offsetY;
        bottom = top - scaleH * this.view.height;
      }
      if (this.clipSpaceNearZ === ClipSpaceNearZ.NEGATIVE_ONE) {
        // FlipY with switching bottom & top.
        // @see https://stackoverflow.com/a/4886656
        mat4.ortho(this.projectionMatrix, left, right, top, bottom, near, far);
      } else {
        mat4.orthoZO(this.projectionMatrix, left, right, top, bottom, near, far);
      }
      mat4.invert(this.projectionMatrixInverse, this.projectionMatrix);
      this._getOrthoMatrix();
      this.triggerUpdate();
      return this;
    }

    /**
     * Move the camera in world coordinates.
     * It will keep looking at the current focal point.
     *
     * support scalars or vectors.
     * @example
     * setPosition(1, 2, 3);
     * setPosition([1, 2, 3]);
     */
  }, {
    key: "setPosition",
    value: function setPosition(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.position[1];
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.position[2];
      var position = createVec3(x, y, z);
      this._setPosition(position);
      this.setFocalPoint(this.focalPoint);
      this.triggerUpdate();
      return this;
    }

    /**
     * Sets the focal point of this camera in world coordinates.
     *
     * support scalars or vectors.
     * @example
     * setFocalPoint(1, 2, 3);
     * setFocalPoint([1, 2, 3]);
     */
  }, {
    key: "setFocalPoint",
    value: function setFocalPoint(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.focalPoint[1];
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.focalPoint[2];
      var up = vec3.fromValues(0, 1, 0);
      this.focalPoint = createVec3(x, y, z);
      if (this.trackingMode === CameraTrackingMode.CINEMATIC) {
        var d = vec3.subtract(vec3.create(), this.focalPoint, this.position);
        x = d[0];
        y = d[1];
        z = d[2];
        var r = vec3.length(d);
        var el = rad2deg(Math.asin(y / r));
        var az = 90 + rad2deg(Math.atan2(z, x));
        var m = mat4.create();
        mat4.rotateY(m, m, deg2rad(az));
        mat4.rotateX(m, m, deg2rad(el));
        up = vec3.transformMat4(vec3.create(), [0, 1, 0], m);
      }
      mat4.invert(this.matrix, mat4.lookAt(mat4.create(), this.position, this.focalPoint, up));
      this._getAxes();
      this._getDistance();
      this._getAngles();
      this.triggerUpdate();
      return this;
    }
  }, {
    key: "getDistance",
    value: function getDistance() {
      return this.distance;
    }
  }, {
    key: "getDistanceVector",
    value: function getDistanceVector() {
      return this.distanceVector;
    }

    /**
     * Moves the camera towards/from the focal point.
     */
  }, {
    key: "setDistance",
    value: function setDistance(d) {
      if (this.distance === d || d < 0) {
        return this;
      }
      this.distance = d;
      if (this.distance < MIN_DISTANCE) {
        this.distance = MIN_DISTANCE;
      }
      this.dollyingStep = this.distance / 100;
      var pos = vec3.create();
      d = this.distance;
      var n = this.forward;
      var f = this.focalPoint;
      pos[0] = d * n[0] + f[0];
      pos[1] = d * n[1] + f[1];
      pos[2] = d * n[2] + f[2];
      this._setPosition(pos);
      this.triggerUpdate();
      return this;
    }
  }, {
    key: "setMaxDistance",
    value: function setMaxDistance(d) {
      this.maxDistance = d;
      return this;
    }
  }, {
    key: "setMinDistance",
    value: function setMinDistance(d) {
      this.minDistance = d;
      return this;
    }

    /**
     * 设置相机方位角，不同相机模式下需要重新计算相机位置或者是视点位置
     * the azimuth in degrees
     */
  }, {
    key: "setAzimuth",
    value: function setAzimuth(az) {
      this.azimuth = getAngle(az);
      this.computeMatrix();
      this._getAxes();
      if (this.type === CameraType.ORBITING || this.type === CameraType.EXPLORING) {
        this._getPosition();
      } else if (this.type === CameraType.TRACKING) {
        this._getFocalPoint();
      }
      this.triggerUpdate();
      return this;
    }
  }, {
    key: "getAzimuth",
    value: function getAzimuth() {
      return this.azimuth;
    }

    /**
     * 设置相机方位角，不同相机模式下需要重新计算相机位置或者是视点位置
     */
  }, {
    key: "setElevation",
    value: function setElevation(el) {
      this.elevation = getAngle(el);
      this.computeMatrix();
      this._getAxes();
      if (this.type === CameraType.ORBITING || this.type === CameraType.EXPLORING) {
        this._getPosition();
      } else if (this.type === CameraType.TRACKING) {
        this._getFocalPoint();
      }
      this.triggerUpdate();
      return this;
    }
  }, {
    key: "getElevation",
    value: function getElevation() {
      return this.elevation;
    }

    /**
     * 设置相机方位角，不同相机模式下需要重新计算相机位置或者是视点位置
     */
  }, {
    key: "setRoll",
    value: function setRoll(angle) {
      this.roll = getAngle(angle);
      this.computeMatrix();
      this._getAxes();
      if (this.type === CameraType.ORBITING || this.type === CameraType.EXPLORING) {
        this._getPosition();
      } else if (this.type === CameraType.TRACKING) {
        this._getFocalPoint();
      }
      this.triggerUpdate();
      return this;
    }
  }, {
    key: "getRoll",
    value: function getRoll() {
      return this.roll;
    }

    /**
     * 根据相机矩阵重新计算各种相机参数
     */
  }, {
    key: "_update",
    value: function _update() {
      this._getAxes();
      this._getPosition();
      this._getDistance();
      this._getAngles();
      this._getOrthoMatrix();
      this.triggerUpdate();
    }

    /**
     * 计算相机矩阵
     */
  }, {
    key: "computeMatrix",
    value: function computeMatrix() {
      // 使用四元数描述 3D 旋转
      // @see https://xiaoiver.github.io/coding/2018/12/28/Camera-%E8%AE%BE%E8%AE%A1-%E4%B8%80.html
      var rotZ = quat$1.setAxisAngle(quat$1.create(), [0, 0, 1], deg2rad(this.roll));
      mat4.identity(this.matrix);

      // only consider HCS for EXPLORING and ORBITING cameras
      var rotX = quat$1.setAxisAngle(quat$1.create(), [1, 0, 0], deg2rad((this.rotateWorld && this.type !== CameraType.TRACKING || this.type === CameraType.TRACKING ? 1 : -1) * this.elevation));
      var rotY = quat$1.setAxisAngle(quat$1.create(), [0, 1, 0], deg2rad((this.rotateWorld && this.type !== CameraType.TRACKING || this.type === CameraType.TRACKING ? 1 : -1) * this.azimuth));
      var rotQ = quat$1.multiply(quat$1.create(), rotY, rotX);
      rotQ = quat$1.multiply(quat$1.create(), rotQ, rotZ);
      var rotMatrix = mat4.fromQuat(mat4.create(), rotQ);
      if (this.type === CameraType.ORBITING || this.type === CameraType.EXPLORING) {
        mat4.translate(this.matrix, this.matrix, this.focalPoint);
        mat4.multiply(this.matrix, this.matrix, rotMatrix);
        mat4.translate(this.matrix, this.matrix, [0, 0, this.distance]);
      } else if (this.type === CameraType.TRACKING) {
        mat4.translate(this.matrix, this.matrix, this.position);
        mat4.multiply(this.matrix, this.matrix, rotMatrix);
      }
    }

    /**
     * Sets the camera position in the camera matrix
     */
  }, {
    key: "_setPosition",
    value: function _setPosition(x, y, z) {
      this.position = createVec3(x, y, z);
      var m = this.matrix;
      m[12] = this.position[0];
      m[13] = this.position[1];
      m[14] = this.position[2];
      m[15] = 1;
      this._getOrthoMatrix();
    }

    /**
     * Recalculates axes based on the current matrix
     */
  }, {
    key: "_getAxes",
    value: function _getAxes() {
      vec3.copy(this.right, createVec3(vec4.transformMat4(vec4.create(), [1, 0, 0, 0], this.matrix)));
      vec3.copy(this.up, createVec3(vec4.transformMat4(vec4.create(), [0, 1, 0, 0], this.matrix)));
      vec3.copy(this.forward, createVec3(vec4.transformMat4(vec4.create(), [0, 0, 1, 0], this.matrix)));
      vec3.normalize(this.right, this.right);
      vec3.normalize(this.up, this.up);
      vec3.normalize(this.forward, this.forward);
    }

    /**
     * Recalculates euler angles based on the current state
     */
  }, {
    key: "_getAngles",
    value: function _getAngles() {
      // Recalculates angles
      var x = this.distanceVector[0];
      var y = this.distanceVector[1];
      var z = this.distanceVector[2];
      var r = vec3.length(this.distanceVector);

      // FAST FAIL: If there is no distance we cannot compute angles
      if (r === 0) {
        this.elevation = 0;
        this.azimuth = 0;
        return;
      }
      if (this.type === CameraType.TRACKING) {
        this.elevation = rad2deg(Math.asin(y / r));
        this.azimuth = rad2deg(Math.atan2(-x, -z));
      } else if (this.rotateWorld) {
        this.elevation = rad2deg(Math.asin(y / r));
        this.azimuth = rad2deg(Math.atan2(-x, -z));
      } else {
        this.elevation = -rad2deg(Math.asin(y / r));
        this.azimuth = -rad2deg(Math.atan2(-x, -z));
      }
    }

    /**
     * 重新计算相机位置，只有 ORBITING 模式相机位置才会发生变化
     */
  }, {
    key: "_getPosition",
    value: function _getPosition() {
      vec3.copy(this.position, createVec3(vec4.transformMat4(vec4.create(), [0, 0, 0, 1], this.matrix)));

      // 相机位置变化，需要重新计算视距
      this._getDistance();
    }

    /**
     * 重新计算视点，只有 TRACKING 模式视点才会发生变化
     */
  }, {
    key: "_getFocalPoint",
    value: function _getFocalPoint() {
      vec3.transformMat3(this.distanceVector, [0, 0, -this.distance], mat3.fromMat4(mat3.create(), this.matrix));
      vec3.add(this.focalPoint, this.position, this.distanceVector);

      // 视点变化，需要重新计算视距
      this._getDistance();
    }

    /**
     * 重新计算视距
     */
  }, {
    key: "_getDistance",
    value: function _getDistance() {
      this.distanceVector = vec3.subtract(vec3.create(), this.focalPoint, this.position);
      this.distance = vec3.length(this.distanceVector);
      this.dollyingStep = this.distance / 100;
    }
  }, {
    key: "_getOrthoMatrix",
    value: function _getOrthoMatrix() {
      if (this.projectionMode !== CameraProjectionMode.ORTHOGRAPHIC) {
        return;
      }
      var position = this.position;
      var rotZ = quat$1.setAxisAngle(quat$1.create(), [0, 0, 1], -this.roll * Math.PI / 180);
      mat4.fromRotationTranslationScaleOrigin(this.orthoMatrix, rotZ, vec3.fromValues((this.rright - this.left) / 2 - position[0], (this.top - this.bottom) / 2 - position[1], 0), vec3.fromValues(this.zoom, this.zoom, 1), position);
    }
  }, {
    key: "triggerUpdate",
    value: function triggerUpdate() {
      if (this.enableUpdate) {
        // update frustum
        var viewMatrix = this.getViewTransform();
        var vpMatrix = mat4.multiply(mat4.create(), this.getPerspective(), viewMatrix);
        this.getFrustum().extractFromVPMatrix(vpMatrix);
        this.eventEmitter.emit(CameraEvent.UPDATED);
      }
    }
  }, {
    key: "rotate",
    value: function rotate(azimuth, elevation, roll) {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "pan",
    value: function pan(tx, ty) {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "dolly",
    value: function dolly(value) {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "createLandmark",
    value: function createLandmark(name, params) {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "gotoLandmark",
    value: function gotoLandmark(name, options) {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "cancelLandmarkAnimation",
    value: function cancelLandmarkAnimation() {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }]);
}();

/**
 * @see https://doc.babylonjs.com/how_to/optimizing_your_scene#changing-mesh-culling-strategy
 */
var Strategy = /*#__PURE__*/function (Strategy) {
  Strategy[Strategy["Standard"] = 0] = "Standard";
  return Strategy;
}({});

var SortReason = /*#__PURE__*/function (SortReason) {
  SortReason[SortReason["ADDED"] = 0] = "ADDED";
  SortReason[SortReason["REMOVED"] = 1] = "REMOVED";
  SortReason[SortReason["Z_INDEX_CHANGED"] = 2] = "Z_INDEX_CHANGED";
  return SortReason;
}({});

/**
 * do RTS transformation for 2D/3D
 */

/** shared objects */
var $vec3$2 = vec3.create();
/** shared objects */
var $mat4$1 = mat4.create();
/** shared objects */
var $quat$2 = quat$1.create();
function updateLocalTransform(transform) {
  if (!transform.localDirtyFlag) {
    return;
  }
  var hasSkew = transform.localSkew[0] !== 0 || transform.localSkew[1] !== 0;
  if (hasSkew) {
    mat4.fromRotationTranslationScaleOrigin(transform.localTransform, transform.localRotation, transform.localPosition, vec3.fromValues(1, 1, 1), transform.origin);

    // apply skew2D
    if (transform.localSkew[0] !== 0 || transform.localSkew[1] !== 0) {
      mat4.identity($mat4$1);
      $mat4$1[4] = Math.tan(transform.localSkew[0]);
      $mat4$1[1] = Math.tan(transform.localSkew[1]);
      mat4.multiply(transform.localTransform, transform.localTransform, $mat4$1);
    }
    var scaling = mat4.fromRotationTranslationScaleOrigin($mat4$1, quat$1.set($quat$2, 0, 0, 0, 1), vec3.set($vec3$2, 1, 1, 1), transform.localScale, transform.origin);
    mat4.multiply(transform.localTransform, transform.localTransform, scaling);
  } else {
    var localTransform = transform.localTransform,
      localPosition = transform.localPosition,
      localRotation = transform.localRotation,
      localScale = transform.localScale,
      origin = transform.origin;
    var hasPosition = localPosition[0] !== 0 || localPosition[1] !== 0 || localPosition[2] !== 0;
    var hasRotation = localRotation[3] !== 1 || localRotation[0] !== 0 || localRotation[1] !== 0 || localRotation[2] !== 0;
    var hasScale = localScale[0] !== 1 || localScale[1] !== 1 || localScale[2] !== 1;
    var hasOrigin = origin[0] !== 0 || origin[1] !== 0 || origin[2] !== 0;
    if (!hasRotation && !hasScale && !hasOrigin) {
      if (hasPosition) {
        mat4.fromTranslation(localTransform, localPosition);
      } else {
        mat4.identity(localTransform);
      }
    } else {
      // @see https://github.com/mattdesl/css-mat4/blob/master/index.js
      mat4.fromRotationTranslationScaleOrigin(localTransform, localRotation, localPosition, localScale, origin);
    }
  }
  transform.localDirtyFlag = false;
}
function updateWorldTransform(transform, parentTransform) {
  if (!transform.dirtyFlag) {
    return;
  }
  if (!parentTransform) {
    mat4.copy(transform.worldTransform, transform.localTransform);
  } else {
    // TODO: should we support scale compensation?
    // @see https://github.com/playcanvas/engine/issues/1077#issuecomment-359765557
    mat4.multiply(transform.worldTransform, parentTransform.worldTransform, transform.localTransform);
  }
  transform.dirtyFlag = false;
}

var EMPTY_PARSED_PATH = {
  absolutePath: [],
  hasArc: false,
  segments: [],
  polygons: [],
  polylines: [],
  curve: null,
  totalLength: 0,
  rect: new Rectangle(0, 0, 0, 0)
};

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type
 */
var PropertySyntax = /*#__PURE__*/function (PropertySyntax) {
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#coordinate
   */
  PropertySyntax["COORDINATE"] = "<coordinate>";
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#color
   */
  PropertySyntax["COLOR"] = "<color>";
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#paint
   */
  PropertySyntax["PAINT"] = "<paint>";
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#number
   */
  PropertySyntax["NUMBER"] = "<number>";
  /**
   * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/angle
   */
  PropertySyntax["ANGLE"] = "<angle>";
  /**
   * <number> with range 0..1
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#opacity_value
   */
  PropertySyntax["OPACITY_VALUE"] = "<opacity-value>";
  /**
   * <number> with range 0..Infinity
   */
  PropertySyntax["SHADOW_BLUR"] = "<shadow-blur>";
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#length
   */
  PropertySyntax["LENGTH"] = "<length>";
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#percentage
   */
  PropertySyntax["PERCENTAGE"] = "<percentage>";
  PropertySyntax["LENGTH_PERCENTAGE"] = "<length> | <percentage>";
  PropertySyntax["LENGTH_PERCENTAGE_12"] = "[<length> | <percentage>]{1,2}";
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin#formal_syntax
   */
  PropertySyntax["LENGTH_PERCENTAGE_14"] = "[<length> | <percentage>]{1,4}";
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#list-of-ts
   */
  PropertySyntax["LIST_OF_POINTS"] = "<list-of-points>";
  PropertySyntax["PATH"] = "<path>";
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter#formal_syntax
   */
  PropertySyntax["FILTER"] = "<filter>";
  PropertySyntax["Z_INDEX"] = "<z-index>";
  PropertySyntax["OFFSET_DISTANCE"] = "<offset-distance>";
  PropertySyntax["DEFINED_PATH"] = "<defined-path>";
  PropertySyntax["MARKER"] = "<marker>";
  PropertySyntax["TRANSFORM"] = "<transform>";
  PropertySyntax["TRANSFORM_ORIGIN"] = "<transform-origin>";
  PropertySyntax["TEXT"] = "<text>";
  PropertySyntax["TEXT_TRANSFORM"] = "<text-transform>";
  return PropertySyntax;
}({});

function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
    reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
    reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
    reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
    reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
    reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHex8() {
  return this.rgb().formatHex8();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}

function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}

function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}

function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}

function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}

function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));

function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}

function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

function memoize(func, resolver) {
  if (typeof func !== 'function' || resolver != null && typeof resolver !== 'function') {
    throw new TypeError('Expected a function');
  }
  var _memoized = function memoized() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var key = resolver ? resolver.apply(this, args) : args[0];
    var cache = _memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    _memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  _memoized.cache = new (memoize.Cache || Map)();
  memoize.cacheList.push(_memoized.cache);
  return _memoized;
}
memoize.Cache = Map;
memoize.cacheList = [];
memoize.clearCache = function () {
  memoize.cacheList.forEach(function (cache) {
    return cache.clear();
  });
};

// These units are iterated through, so be careful when adding or changing the
// order.
var UnitType = /*#__PURE__*/function (UnitType) {
  UnitType[UnitType["kUnknown"] = 0] = "kUnknown";
  UnitType[UnitType["kNumber"] = 1] = "kNumber";
  UnitType[UnitType["kPercentage"] = 2] = "kPercentage";
  // Length units
  UnitType[UnitType["kEms"] = 3] = "kEms";
  // kExs,
  UnitType[UnitType["kPixels"] = 4] = "kPixels";
  // kCentimeters,
  // kMillimeters,
  // kInches,
  // kPoints,
  // kPicas,
  // kQuarterMillimeters,
  // https://drafts.csswg.org/css-values-4/#viewport-relative-lengths
  //
  // See also IsViewportPercentageLength.
  // kViewportWidth,
  // kViewportHeight,
  // kViewportInlineSize,
  // kViewportBlockSize,
  // kViewportMin,
  // kViewportMax,
  // kSmallViewportWidth,
  // kSmallViewportHeight,
  // kSmallViewportInlineSize,
  // kSmallViewportBlockSize,
  // kSmallViewportMin,
  // kSmallViewportMax,
  // kLargeViewportWidth,
  // kLargeViewportHeight,
  // kLargeViewportInlineSize,
  // kLargeViewportBlockSize,
  // kLargeViewportMin,
  // kLargeViewportMax,
  // kDynamicViewportWidth,
  // kDynamicViewportHeight,
  // kDynamicViewportInlineSize,
  // kDynamicViewportBlockSize,
  // kDynamicViewportMin,
  // kDynamicViewportMax,
  // https://drafts.csswg.org/css-contain-3/#container-lengths
  //
  // See also IsContainerPercentageLength.
  // kContainerWidth,
  // kContainerHeight,
  // kContainerInlineSize,
  // kContainerBlockSize,
  // kContainerMin,
  // kContainerMax,
  UnitType[UnitType["kRems"] = 5] = "kRems";
  // kChs,
  // kUserUnits, // The SVG term for unitless lengths
  // Angle units
  UnitType[UnitType["kDegrees"] = 6] = "kDegrees";
  UnitType[UnitType["kRadians"] = 7] = "kRadians";
  UnitType[UnitType["kGradians"] = 8] = "kGradians";
  UnitType[UnitType["kTurns"] = 9] = "kTurns";
  // Time units
  UnitType[UnitType["kMilliseconds"] = 10] = "kMilliseconds";
  UnitType[UnitType["kSeconds"] = 11] = "kSeconds";
  // kHertz,
  // kKilohertz,
  // Resolution
  // kDotsPerPixel,
  // kDotsPerInch,
  // kDotsPerCentimeter,
  // Other units
  // kFraction,
  UnitType[UnitType["kInteger"] = 12] = "kInteger"; // This value is used to handle quirky margins in reflow roots (body, td,
  // and th) like WinIE. The basic idea is that a stylesheet can use the value
  // __qem (for quirky em) instead of em. When the quirky value is used, if
  // you're in quirks mode, the margin will collapse away inside a table cell.
  // This quirk is specified in the HTML spec but our impl is different.
  // TODO: Remove this. crbug.com/443952
  // kQuirkyEms,
  return UnitType;
}({});
var UnitCategory = /*#__PURE__*/function (UnitCategory) {
  UnitCategory[UnitCategory["kUNumber"] = 0] = "kUNumber";
  UnitCategory[UnitCategory["kUPercent"] = 1] = "kUPercent";
  UnitCategory[UnitCategory["kULength"] = 2] = "kULength";
  UnitCategory[UnitCategory["kUAngle"] = 3] = "kUAngle";
  UnitCategory[UnitCategory["kUTime"] = 4] = "kUTime";
  // kUFrequency,
  // kUResolution,
  UnitCategory[UnitCategory["kUOther"] = 5] = "kUOther";
  return UnitCategory;
}({});
var Nested = /*#__PURE__*/function (Nested) {
  Nested[Nested["kYes"] = 0] = "kYes";
  Nested[Nested["kNo"] = 1] = "kNo";
  return Nested;
}({});
var ParenLess = /*#__PURE__*/function (ParenLess) {
  ParenLess[ParenLess["kYes"] = 0] = "kYes";
  ParenLess[ParenLess["kNo"] = 1] = "kNo";
  return ParenLess;
}({});

// This file specifies the unit strings used in CSSPrimitiveValues.
var data = [{
  name: 'em',
  unit_type: UnitType.kEms
},
// {
//   name: 'ex',
//   unit_type: UnitType.kExs,
// },
{
  name: 'px',
  unit_type: UnitType.kPixels
},
// {
//   name: "cm",
//   unit_type: UnitType.kCentimeters,
// },
// {
//   name: "mm",
//   unit_type: UnitType.kMillimeters,
// },
// {
//   name: "q",
//   unit_type: UnitType.kQuarterMillimeters,
// },
// {
//   name: "in",
//   unit_type: UnitType.kInches,
// },
// {
//   name: "pt",
//   unit_type: UnitType.kPoints,
// },
// {
//   name: "pc",
//   unit_type: UnitType.kPicas,
// },
{
  name: 'deg',
  unit_type: UnitType.kDegrees
}, {
  name: 'rad',
  unit_type: UnitType.kRadians
}, {
  name: 'grad',
  unit_type: UnitType.kGradians
}, {
  name: 'ms',
  unit_type: UnitType.kMilliseconds
}, {
  name: 's',
  unit_type: UnitType.kSeconds
},
// {
//   name: "hz",
//   unit_type: UnitType.kHertz,
// },
// {
//   name: "khz",
//   unit_type: UnitType.kKilohertz,
// },
// {
//   name: "dpi",
//   unit_type: "kDotsPerInch",
// },
// {
//   name: "dpcm",
//   unit_type: "kDotsPerCentimeter",
// },
// {
//   name: "dppx",
//   unit_type: "kDotsPerPixel",
// },
// {
//   name: "x",
//   unit_type: "kDotsPerPixel",
// },
// {
//   name: "vw",
//   unit_type: "kViewportWidth",
// },
// {
//   name: "vh",
//   unit_type: "kViewportHeight",
// },
// {
//   name: "vi",
//   unit_type: "kViewportInlineSize",
// },
// {
//   name: "vb",
//   unit_type: "kViewportBlockSize",
// },
// {
//   name: "vmin",
//   unit_type: UnitType.kViewportMin,
// },
// {
//   name: "vmax",
//   unit_type: UnitType.kViewportMax,
// },
// {
//   name: "svw",
//   unit_type: "kSmallViewportWidth",
// },
// {
//   name: "svh",
//   unit_type: "kSmallViewportHeight",
// },
// {
//   name: "svi",
//   unit_type: "kSmallViewportInlineSize",
// },
// {
//   name: "svb",
//   unit_type: "kSmallViewportBlockSize",
// },
// {
//   name: "svmin",
//   unit_type: "kSmallViewportMin",
// },
// {
//   name: "svmax",
//   unit_type: "kSmallViewportMax",
// },
// {
//   name: "lvw",
//   unit_type: "kLargeViewportWidth",
// },
// {
//   name: "lvh",
//   unit_type: "kLargeViewportHeight",
// },
// {
//   name: "lvi",
//   unit_type: "kLargeViewportInlineSize",
// },
// {
//   name: "lvb",
//   unit_type: "kLargeViewportBlockSize",
// },
// {
//   name: "lvmin",
//   unit_type: UnitType.kLargeViewportMin,
// },
// {
//   name: "lvmax",
//   unit_type: UnitType.kLargeViewportMax,
// },
// {
//   name: "dvw",
//   unit_type: UnitType.kDynamicViewportWidth,
// },
// {
//   name: "dvh",
//   unit_type: UnitType.kDynamicViewportHeight,
// },
// {
//   name: "dvi",
//   unit_type: UnitType.kDynamicViewportInlineSize,
// },
// {
//   name: "dvb",
//   unit_type: UnitType.kDynamicViewportBlockSize,
// },
// {
//   name: "dvmin",
//   unit_type: UnitType.kDynamicViewportMin,
// },
// {
//   name: "dvmax",
//   unit_type: UnitType.kDynamicViewportMax,
// },
// {
//   name: "cqw",
//   unit_type: UnitType.kContainerWidth,
// },
// {
//   name: "cqh",
//   unit_type: UnitType.kContainerHeight,
// },
// {
//   name: "cqi",
//   unit_type: UnitType.kContainerInlineSize,
// },
// {
//   name: "cqb",
//   unit_type: UnitType.kContainerBlockSize,
// },
// {
//   name: "cqmin",
//   unit_type: UnitType.kContainerMin,
// },
// {
//   name: "cqmax",
//   unit_type: UnitType.kContainerMax,
// },
{
  name: 'rem',
  unit_type: UnitType.kRems
},
// {
//   name: 'fr',
//   unit_type: UnitType.kFraction,
// },
{
  name: 'turn',
  unit_type: UnitType.kTurns
}
// {
//   name: 'ch',
//   unit_type: UnitType.kChs,
// },
// {
//   name: '__qem',
//   unit_type: UnitType.kQuirkyEms,
// },
];
var CSSStyleValueType = /*#__PURE__*/function (CSSStyleValueType) {
  CSSStyleValueType[CSSStyleValueType["kUnknownType"] = 0] = "kUnknownType";
  CSSStyleValueType[CSSStyleValueType["kUnparsedType"] = 1] = "kUnparsedType";
  CSSStyleValueType[CSSStyleValueType["kKeywordType"] = 2] = "kKeywordType";
  // Start of CSSNumericValue subclasses
  CSSStyleValueType[CSSStyleValueType["kUnitType"] = 3] = "kUnitType";
  CSSStyleValueType[CSSStyleValueType["kSumType"] = 4] = "kSumType";
  CSSStyleValueType[CSSStyleValueType["kProductType"] = 5] = "kProductType";
  CSSStyleValueType[CSSStyleValueType["kNegateType"] = 6] = "kNegateType";
  CSSStyleValueType[CSSStyleValueType["kInvertType"] = 7] = "kInvertType";
  CSSStyleValueType[CSSStyleValueType["kMinType"] = 8] = "kMinType";
  CSSStyleValueType[CSSStyleValueType["kMaxType"] = 9] = "kMaxType";
  CSSStyleValueType[CSSStyleValueType["kClampType"] = 10] = "kClampType";
  // End of CSSNumericValue subclasses
  CSSStyleValueType[CSSStyleValueType["kTransformType"] = 11] = "kTransformType";
  CSSStyleValueType[CSSStyleValueType["kPositionType"] = 12] = "kPositionType";
  CSSStyleValueType[CSSStyleValueType["kURLImageType"] = 13] = "kURLImageType";
  CSSStyleValueType[CSSStyleValueType["kColorType"] = 14] = "kColorType";
  CSSStyleValueType[CSSStyleValueType["kUnsupportedColorType"] = 15] = "kUnsupportedColorType";
  return CSSStyleValueType;
}({});

// function parseCSSStyleValue(propertyName: string, value: string): CSSStyleValue[] {
//   // const propertyId = cssPropertyID(propertyName);

//   // if (propertyId === CSSPropertyID.kInvalid) {
//   //   return [];
//   // }

//   // const customPropertyName = propertyId === CSSPropertyID.kVariable ? propertyName : null;
//   // return fromString(propertyId, customPropertyName, value);
//   return [];
// }

var stringToUnitType = function stringToUnitType(name) {
  return data.find(function (item) {
    return item.name === name;
  }).unit_type;
};
var unitFromName = function unitFromName(name) {
  if (!name) {
    return UnitType.kUnknown;
  }
  if (name === 'number') {
    return UnitType.kNumber;
  }
  if (name === 'percent' || name === '%') {
    return UnitType.kPercentage;
  }
  return stringToUnitType(name);
};
var unitTypeToUnitCategory = function unitTypeToUnitCategory(type) {
  switch (type) {
    case UnitType.kNumber:
    case UnitType.kInteger:
      return UnitCategory.kUNumber;
    case UnitType.kPercentage:
      return UnitCategory.kUPercent;
    case UnitType.kPixels:
      // case UnitType.kCentimeters:
      // case UnitType.kMillimeters:
      // case UnitType.kQuarterMillimeters:
      // case UnitType.kInches:
      // case UnitType.kPoints:
      // case UnitType.kPicas:
      // case UnitType.kUserUnits:
      return UnitCategory.kULength;
    case UnitType.kMilliseconds:
    case UnitType.kSeconds:
      return UnitCategory.kUTime;
    case UnitType.kDegrees:
    case UnitType.kRadians:
    case UnitType.kGradians:
    case UnitType.kTurns:
      return UnitCategory.kUAngle;
    // case UnitType.kHertz:
    // case UnitType.kKilohertz:
    //   return UnitCategory.kUFrequency;
    // case UnitType.kDotsPerPixel:
    // case UnitType.kDotsPerInch:
    // case UnitType.kDotsPerCentimeter:
    //   return UnitCategory.kUResolution;
    default:
      return UnitCategory.kUOther;
  }
};
var canonicalUnitTypeForCategory = function canonicalUnitTypeForCategory(category) {
  // The canonical unit type is chosen according to the way
  // CSSPropertyParser.ValidUnit() chooses the default unit in each category
  // (based on unitflags).
  switch (category) {
    case UnitCategory.kUNumber:
      return UnitType.kNumber;
    case UnitCategory.kULength:
      return UnitType.kPixels;
    case UnitCategory.kUPercent:
      return UnitType.kPercentage;
    // return UnitType.kUnknown; // Cannot convert between numbers and percent.
    case UnitCategory.kUTime:
      return UnitType.kSeconds;
    case UnitCategory.kUAngle:
      return UnitType.kDegrees;
    // case UnitCategory.kUFrequency:
    //   return UnitType.kHertz;
    // case UnitCategory.kUResolution:
    //   return UnitType.kDotsPerPixel;
    default:
      return UnitType.kUnknown;
  }
};

/**
 * @see https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/core/css/css_primitive_value.cc#353
 */
var conversionToCanonicalUnitsScaleFactor = function conversionToCanonicalUnitsScaleFactor(unit_type) {
  var factor = 1.0;
  // FIXME: the switch can be replaced by an array of scale factors.
  switch (unit_type) {
    // These are "canonical" units in their respective categories.
    case UnitType.kPixels:
    // case UnitType.kUserUnits:
    case UnitType.kDegrees:
    case UnitType.kSeconds:
      // case UnitType.kHertz:
      break;
    case UnitType.kMilliseconds:
      factor = 0.001;
      break;
    // case UnitType.kCentimeters:
    //   // factor = kCssPixelsPerCentimeter;
    //   break;
    // case UnitType.kDotsPerCentimeter:
    //   // factor = 1 / kCssPixelsPerCentimeter;
    //   break;
    // case UnitType.kMillimeters:
    //   // factor = kCssPixelsPerMillimeter;
    //   break;
    // case UnitType.kQuarterMillimeters:
    //   // factor = kCssPixelsPerQuarterMillimeter;
    //   break;
    // case UnitType.kInches:
    //   // factor = kCssPixelsPerInch;
    //   break;
    // case UnitType.kDotsPerInch:
    //   // factor = 1 / kCssPixelsPerInch;
    //   break;
    // case UnitType.kPoints:
    //   // factor = kCssPixelsPerPoint;
    //   break;
    // case UnitType.kPicas:
    //   // factor = kCssPixelsPerPica;
    //   break;
    case UnitType.kRadians:
      factor = 180 / Math.PI;
      break;
    case UnitType.kGradians:
      factor = 0.9;
      break;
    case UnitType.kTurns:
      factor = 360;
      break;
  }
  return factor;
};
var unitTypeToString = function unitTypeToString(type) {
  switch (type) {
    case UnitType.kNumber:
    case UnitType.kInteger:
      // case UnitType.kUserUnits:
      return '';
    case UnitType.kPercentage:
      return '%';
    case UnitType.kEms:
      // case UnitType.kQuirkyEms:
      return 'em';
    // case UnitType.kExs:
    //   return 'ex';
    case UnitType.kRems:
      return 'rem';
    // case UnitType.kChs:
    //   return 'ch';
    case UnitType.kPixels:
      return 'px';
    // case UnitType.kCentimeters:
    //   return 'cm';
    // case UnitType.kDotsPerPixel:
    //   return 'dppx';
    // case UnitType.kDotsPerInch:
    //   return 'dpi';
    // case UnitType.kDotsPerCentimeter:
    //   return 'dpcm';
    // case UnitType.kMillimeters:
    //   return 'mm';
    // case UnitType.kQuarterMillimeters:
    //   return 'q';
    // case UnitType.kInches:
    //   return 'in';
    // case UnitType.kPoints:
    //   return 'pt';
    // case UnitType.kPicas:
    //   return 'pc';
    case UnitType.kDegrees:
      return 'deg';
    case UnitType.kRadians:
      return 'rad';
    case UnitType.kGradians:
      return 'grad';
    case UnitType.kMilliseconds:
      return 'ms';
    case UnitType.kSeconds:
      return 's';
    // case UnitType.kHertz:
    //   return 'hz';
    // case UnitType.kKilohertz:
    //   return 'khz';
    case UnitType.kTurns:
      return 'turn';
  }
  return '';
};

/**
 * CSSStyleValue is the base class for all CSS values accessible from Typed OM.
 * Values that are not yet supported as specific types are also returned as base CSSStyleValues.
 *
 * Spec @see https://drafts.css-houdini.org/css-typed-om/#stylevalue-objects
 * Docs @see https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue
 */
var CSSStyleValue = /*#__PURE__*/function () {
  function CSSStyleValue() {
    _classCallCheck(this, CSSStyleValue);
  }
  return _createClass(CSSStyleValue, [{
    key: "toString",
    value:
    // protected abstract toCSSValue(): CSSValue;

    function toString() {
      return this.buildCSSText(Nested.kNo, ParenLess.kNo, '');
    }
  }, {
    key: "isNumericValue",
    value: function isNumericValue() {
      return this.getType() >= CSSStyleValueType.kUnitType && this.getType() <= CSSStyleValueType.kClampType;
    }
  }], [{
    key: "isAngle",
    value:
    // static parse(propertyName: string, value: string): CSSStyleValue {
    //   return parseCSSStyleValue(propertyName, value)[0];
    // }

    // static parseAll(propertyName: string, value: string): CSSStyleValue[] {
    //   return parseCSSStyleValue(propertyName, value);
    // }

    function isAngle(unit) {
      return unit === UnitType.kDegrees || unit === UnitType.kRadians || unit === UnitType.kGradians || unit === UnitType.kTurns;
    }

    // static isViewportPercentageLength(type: UnitType) {
    //   return type >= UnitType.kViewportWidth && type <= UnitType.kDynamicViewportMax;
    // }

    // static isContainerPercentageLength(type: UnitType) {
    //   return type >= UnitType.kContainerWidth && type <= UnitType.kContainerMax;
    // }
  }, {
    key: "isLength",
    value: function isLength(type) {
      // return (type >= UnitType.kEms && type <= UnitType.kUserUnits) || type == UnitType.kQuirkyEms;
      return type >= UnitType.kEms && type < UnitType.kDegrees;
    }
  }, {
    key: "isRelativeUnit",
    value: function isRelativeUnit(type) {
      return type === UnitType.kPercentage || type === UnitType.kEms ||
      // type === UnitType.kExs ||
      type === UnitType.kRems
      // type === UnitType.kChs ||
      // this.isViewportPercentageLength(type) ||
      // this.isContainerPercentageLength(type)
      ;
    }
  }, {
    key: "isTime",
    value: function isTime(unit) {
      return unit === UnitType.kSeconds || unit === UnitType.kMilliseconds;
    }

    // static isFrequency(unit: UnitType) {
    //   return unit == UnitType.kHertz || unit == UnitType.kKilohertz;
    // }

    // static isResolution(type: UnitType) {
    //   return type >= UnitType.kDotsPerPixel && type <= UnitType.kDotsPerCentimeter;
    // }

    // static isFlex(unit: UnitType) {
    //   return unit === UnitType.kFraction;
    // }
  }]);
}();

/**
 * @see https://drafts.css-houdini.org/css-typed-om-1/#dom-csscolorvalue-colorspace
 */

/**
 * CSSColorValue is the base class used for the various CSS color interfaces.
 *
 * @see https://drafts.css-houdini.org/css-typed-om-1/#colorvalue-objects
 */
var CSSColorValue = /*#__PURE__*/function (_CSSStyleValue) {
  function CSSColorValue(colorSpace) {
    var _this;
    _classCallCheck(this, CSSColorValue);
    _this = _callSuper(this, CSSColorValue);
    _this.colorSpace = colorSpace;
    return _this;
  }
  _inherits(CSSColorValue, _CSSStyleValue);
  return _createClass(CSSColorValue, [{
    key: "getType",
    value: function getType() {
      return CSSStyleValueType.kColorType;
    }

    /**
     * @see https://drafts.css-houdini.org/css-typed-om-1/#dom-csscolorvalue-to
     */
  }, {
    key: "to",
    value: function to(colorSpace) {
      return this;
    }
  }]);
}(CSSStyleValue);

var GradientType = /*#__PURE__*/function (GradientType) {
  GradientType[GradientType["Constant"] = 0] = "Constant";
  GradientType[GradientType["LinearGradient"] = 1] = "LinearGradient";
  GradientType[GradientType["RadialGradient"] = 2] = "RadialGradient";
  return GradientType;
}({});
var CSSGradientValue = /*#__PURE__*/function (_CSSStyleValue) {
  function CSSGradientValue(type, value) {
    var _this;
    _classCallCheck(this, CSSGradientValue);
    _this = _callSuper(this, CSSGradientValue);
    _this.type = type;
    _this.value = value;
    return _this;
  }
  _inherits(CSSGradientValue, _CSSStyleValue);
  return _createClass(CSSGradientValue, [{
    key: "clone",
    value: function clone() {
      return new CSSGradientValue(this.type, this.value);
    }
  }, {
    key: "buildCSSText",
    value: function buildCSSText(n, p, result) {
      return result;
    }
  }, {
    key: "getType",
    value: function getType() {
      return CSSStyleValueType.kColorType;
    }
  }]);
}(CSSStyleValue);

/**
 * CSSKeywordValue represents CSS Values that are specified as keywords
 * eg. 'initial'
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CSSKeywordValue
 * @see https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/core/css/cssom/css_keyword_value.idl
 */
var CSSKeywordValue = /*#__PURE__*/function (_CSSStyleValue) {
  function CSSKeywordValue(value) {
    var _this;
    _classCallCheck(this, CSSKeywordValue);
    _this = _callSuper(this, CSSKeywordValue);
    _this.value = value;
    return _this;
  }
  _inherits(CSSKeywordValue, _CSSStyleValue);
  return _createClass(CSSKeywordValue, [{
    key: "clone",
    value: function clone() {
      return new CSSKeywordValue(this.value);
    }
  }, {
    key: "getType",
    value: function getType() {
      return CSSStyleValueType.kKeywordType;
    }
  }, {
    key: "buildCSSText",
    value: function buildCSSText(n, p, result) {
      return result + this.value;
    }
  }]);
}(CSSStyleValue);

var formatInfinityOrNaN = function formatInfinityOrNaN(number) {
  var suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var result = '';
  if (!Number.isFinite(number)) {
    if (number > 0) result = 'infinity';else result = '-infinity';
  } else {
    result = 'NaN';
  }
  return result += suffix;
};
var toCanonicalUnit = function toCanonicalUnit(unit) {
  return canonicalUnitTypeForCategory(unitTypeToUnitCategory(unit));
};

/**
 * CSSNumericValue is the base class for numeric and length typed CSS Values.
 * @see https://drafts.css-houdini.org/css-typed-om/#numeric-objects
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue
 * @see https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/core/css/cssom/css_numeric_value.idl
 */

/**
 * Represents numeric values that can be expressed as a single number plus a
 * unit (or a naked number or percentage).
 * @see https://drafts.css-houdini.org/css-typed-om/#cssunitvalue
 */
var CSSUnitValue = /*#__PURE__*/function (_CSSStyleValue) {
  function CSSUnitValue(value) {
    var _this;
    var unitOrName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : UnitType.kNumber;
    _classCallCheck(this, CSSUnitValue);
    _this = _callSuper(this, CSSUnitValue);
    var unit;
    if (typeof unitOrName === 'string') {
      unit = unitFromName(unitOrName);
    } else {
      unit = unitOrName;
    }
    _this.unit = unit;
    _this.value = value;
    return _this;
  }
  _inherits(CSSUnitValue, _CSSStyleValue);
  return _createClass(CSSUnitValue, [{
    key: "clone",
    value: function clone() {
      return new CSSUnitValue(this.value, this.unit);
    }
  }, {
    key: "equals",
    value: function equals(other) {
      var other_unit_value = other;
      return this.value === other_unit_value.value && this.unit === other_unit_value.unit;
    }
  }, {
    key: "getType",
    value: function getType() {
      return CSSStyleValueType.kUnitType;
    }
  }, {
    key: "convertTo",
    value: function convertTo(target_unit) {
      if (this.unit === target_unit) {
        return new CSSUnitValue(this.value, this.unit);
      }

      // Instead of defining the scale factors for every unit to every other unit,
      // we simply convert to the canonical unit and back since we already have
      // the scale factors for canonical units.
      var canonical_unit = toCanonicalUnit(this.unit);
      if (canonical_unit !== toCanonicalUnit(target_unit) || canonical_unit === UnitType.kUnknown) {
        return null;
      }
      var scale_factor = conversionToCanonicalUnitsScaleFactor(this.unit) / conversionToCanonicalUnitsScaleFactor(target_unit);
      return new CSSUnitValue(this.value * scale_factor, target_unit);
    }
  }, {
    key: "buildCSSText",
    value: function buildCSSText(n, p, result) {
      var text;
      switch (this.unit) {
        case UnitType.kUnknown:
          // FIXME
          break;
        case UnitType.kInteger:
          text = Number(this.value).toFixed(0);
          break;
        case UnitType.kNumber:
        case UnitType.kPercentage:
        case UnitType.kEms:
        // case UnitType.kQuirkyEms:
        // case UnitType.kExs:
        case UnitType.kRems:
        // case UnitType.kChs:
        case UnitType.kPixels:
        // case UnitType.kCentimeters:
        // case UnitType.kDotsPerPixel:
        // case UnitType.kDotsPerInch:
        // case UnitType.kDotsPerCentimeter:
        // case UnitType.kMillimeters:
        // case UnitType.kQuarterMillimeters:
        // case UnitType.kInches:
        // case UnitType.kPoints:
        // case UnitType.kPicas:
        // case UnitType.kUserUnits:
        case UnitType.kDegrees:
        case UnitType.kRadians:
        case UnitType.kGradians:
        case UnitType.kMilliseconds:
        case UnitType.kSeconds:
        // case UnitType.kHertz:
        // case UnitType.kKilohertz:
        case UnitType.kTurns:
          {
            // case UnitType.kContainerMax: { // case UnitType.kContainerMin: // case UnitType.kContainerBlockSize: // case UnitType.kContainerInlineSize: // case UnitType.kContainerHeight: // case UnitType.kContainerWidth: // case UnitType.kDynamicViewportMax: // case UnitType.kDynamicViewportMin: // case UnitType.kDynamicViewportBlockSize: // case UnitType.kDynamicViewportInlineSize: // case UnitType.kDynamicViewportHeight: // case UnitType.kDynamicViewportWidth: // case UnitType.kLargeViewportMax: // case UnitType.kLargeViewportMin: // case UnitType.kLargeViewportBlockSize: // case UnitType.kLargeViewportInlineSize: // case UnitType.kLargeViewportHeight: // case UnitType.kLargeViewportWidth: // case UnitType.kSmallViewportMax: // case UnitType.kSmallViewportMin: // case UnitType.kSmallViewportBlockSize: // case UnitType.kSmallViewportInlineSize: // case UnitType.kSmallViewportHeight: // case UnitType.kSmallViewportWidth: // case UnitType.kViewportMax: // case UnitType.kViewportMin: // case UnitType.kViewportBlockSize: // case UnitType.kViewportInlineSize: // case UnitType.kViewportHeight: // case UnitType.kViewportWidth: // case UnitType.kFraction:
            var kMinInteger = -999999;
            var kMaxInteger = 999999;
            var value = this.value;
            var unit = unitTypeToString(this.unit);
            if (value < kMinInteger || value > kMaxInteger) {
              var _unit = unitTypeToString(this.unit);
              if (!Number.isFinite(value) || Number.isNaN(value)) {
                text = formatInfinityOrNaN(value, _unit);
              } else {
                text = value + (_unit || '');
              }
            } else {
              text = "".concat(value).concat(unit);
            }
          }
      }
      result += text;
      return result;
    }
  }]);
}(CSSStyleValue);
var Opx = new CSSUnitValue(0, 'px');
new CSSUnitValue(1, 'px');
var Odeg = new CSSUnitValue(0, 'deg');

/**
 * The CSSRGB class represents the CSS rgb()/rgba() functions.
 *
 * @see https://drafts.css-houdini.org/css-typed-om-1/#cssrgb
 */
var CSSRGB = /*#__PURE__*/function (_CSSColorValue) {
  function CSSRGB(r, g, b) {
    var _this;
    var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var isNone = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    _classCallCheck(this, CSSRGB);
    _this = _callSuper(this, CSSRGB, ['rgb']);
    _this.r = r;
    _this.g = g;
    _this.b = b;
    _this.alpha = alpha;
    _this.isNone = isNone;
    return _this;
  }
  _inherits(CSSRGB, _CSSColorValue);
  return _createClass(CSSRGB, [{
    key: "clone",
    value: function clone() {
      return new CSSRGB(this.r, this.g, this.b, this.alpha);
    }
  }, {
    key: "buildCSSText",
    value: function buildCSSText(n, p, result) {
      return "".concat(result, "rgba(").concat(this.r, ",").concat(this.g, ",").concat(this.b, ",").concat(this.alpha, ")");
    }
  }]);
}(CSSColorValue);

/**
 * CSSKeywordValue
 */
var unsetKeywordValue = new CSSKeywordValue('unset');
var initialKeywordValue = new CSSKeywordValue('initial');
var inheritKeywordValue = new CSSKeywordValue('inherit');
var keywordCache = {
  '': unsetKeywordValue,
  unset: unsetKeywordValue,
  initial: initialKeywordValue,
  inherit: inheritKeywordValue
};
var getOrCreateKeyword = function getOrCreateKeyword(name) {
  if (!keywordCache[name]) {
    keywordCache[name] = new CSSKeywordValue(name);
  }
  return keywordCache[name];
};

/**
 * CSSColor
 */
var noneColor = new CSSRGB(0, 0, 0, 0, true);
var transparentColor = new CSSRGB(0, 0, 0, 0);
var getOrCreateRGBA = memoize(function (r, g, b, a) {
  return new CSSRGB(r, g, b, a);
}, function (r, g, b, a) {
  return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
});

// export const getOrCreateUnitValue = memoize(
//   (value: number, unitOrName: UnitType | string = UnitType.kNumber) => {
//     return new CSSUnitValue(value, unitOrName);
//   },
//   (value: number, unitOrName: UnitType | string = UnitType.kNumber) => {
//     return `${value}${unitOrName}`;
//   },
// );

var getOrCreateUnitValue = function getOrCreateUnitValue(value) {
  var unitOrName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : UnitType.kNumber;
  return new CSSUnitValue(value, unitOrName);
};
new CSSUnitValue(50, '%');

/**
 * borrow from gradient-parser, but we delete some browser compatible prefix such as `-webkit-`
 * @see https://github.com/rafaelcaricio/gradient-parser
 */

function colorStopToString(colorStop) {
  var type = colorStop.type,
    value = colorStop.value;
  if (type === 'hex') {
    return "#".concat(value);
  }
  if (type === 'literal') {
    return value;
  }
  if (type === 'rgb') {
    return "rgb(".concat(value.join(','), ")");
  }
  return "rgba(".concat(value.join(','), ")");
}
var parseGradient$1 = function () {
  var tokens = {
    linearGradient: /^(linear\-gradient)/i,
    repeatingLinearGradient: /^(repeating\-linear\-gradient)/i,
    radialGradient: /^(radial\-gradient)/i,
    repeatingRadialGradient: /^(repeating\-radial\-gradient)/i,
    /**
     * @see https://projects.verou.me/conic-gradient/
     */
    conicGradient: /^(conic\-gradient)/i,
    sideOrCorner: /^to (left (top|bottom)|right (top|bottom)|top (left|right)|bottom (left|right)|left|right|top|bottom)/i,
    extentKeywords: /^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,
    positionKeywords: /^(left|center|right|top|bottom)/i,
    pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,
    percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,
    emValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,
    angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,
    startCall: /^\(/,
    endCall: /^\)/,
    comma: /^,/,
    hexColor: /^\#([0-9a-fA-F]+)/,
    literalColor: /^([a-zA-Z]+)/,
    rgbColor: /^rgb/i,
    rgbaColor: /^rgba/i,
    number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/
  };
  var input = '';
  function error(msg) {
    throw new Error("".concat(input, ": ").concat(msg));
  }
  function getAST() {
    var ast = matchListDefinitions();
    if (input.length > 0) {
      error('Invalid input not EOF');
    }
    return ast;
  }
  function matchListDefinitions() {
    return matchListing(matchDefinition);
  }
  function matchDefinition() {
    return matchGradient('linear-gradient', tokens.linearGradient, matchLinearOrientation) || matchGradient('repeating-linear-gradient', tokens.repeatingLinearGradient, matchLinearOrientation) || matchGradient('radial-gradient', tokens.radialGradient, matchListRadialOrientations) || matchGradient('repeating-radial-gradient', tokens.repeatingRadialGradient, matchListRadialOrientations) || matchGradient('conic-gradient', tokens.conicGradient, matchListRadialOrientations);
  }
  function matchGradient(gradientType, pattern, orientationMatcher) {
    return matchCall(pattern, function (captures) {
      var orientation = orientationMatcher();
      if (orientation) {
        if (!scan(tokens.comma)) {
          error('Missing comma before color stops');
        }
      }
      return {
        type: gradientType,
        orientation: orientation,
        colorStops: matchListing(matchColorStop)
      };
    });
  }
  function matchCall(pattern, callback) {
    var captures = scan(pattern);
    if (captures) {
      if (!scan(tokens.startCall)) {
        error('Missing (');
      }
      var result = callback(captures);
      if (!scan(tokens.endCall)) {
        error('Missing )');
      }
      return result;
    }
  }
  function matchLinearOrientation() {
    return matchSideOrCorner() || matchAngle();
  }
  function matchSideOrCorner() {
    return match('directional', tokens.sideOrCorner, 1);
  }
  function matchAngle() {
    return match('angular', tokens.angleValue, 1);
  }
  function matchListRadialOrientations() {
    var radialOrientations;
    var radialOrientation = matchRadialOrientation();
    var lookaheadCache;
    if (radialOrientation) {
      radialOrientations = [];
      radialOrientations.push(radialOrientation);
      lookaheadCache = input;
      if (scan(tokens.comma)) {
        radialOrientation = matchRadialOrientation();
        if (radialOrientation) {
          radialOrientations.push(radialOrientation);
        } else {
          input = lookaheadCache;
        }
      }
    }
    return radialOrientations;
  }
  function matchRadialOrientation() {
    var radialType = matchCircle() || matchEllipse();
    if (radialType) {
      // @ts-ignore
      radialType.at = matchAtPosition();
    } else {
      var extent = matchExtentKeyword();
      if (extent) {
        radialType = extent;
        var positionAt = matchAtPosition();
        if (positionAt) {
          // @ts-ignore
          radialType.at = positionAt;
        }
      } else {
        var defaultPosition = matchPositioning();
        if (defaultPosition) {
          radialType = {
            type: 'default-radial',
            // @ts-ignore
            at: defaultPosition
          };
        }
      }
    }
    return radialType;
  }
  function matchCircle() {
    var circle = match('shape', /^(circle)/i, 0);
    if (circle) {
      // @ts-ignore
      circle.style = matchLength() || matchExtentKeyword();
    }
    return circle;
  }
  function matchEllipse() {
    var ellipse = match('shape', /^(ellipse)/i, 0);
    if (ellipse) {
      // @ts-ignore
      ellipse.style = matchDistance() || matchExtentKeyword();
    }
    return ellipse;
  }
  function matchExtentKeyword() {
    return match('extent-keyword', tokens.extentKeywords, 1);
  }
  function matchAtPosition() {
    if (match('position', /^at/, 0)) {
      var positioning = matchPositioning();
      if (!positioning) {
        error('Missing positioning value');
      }
      return positioning;
    }
  }
  function matchPositioning() {
    var location = matchCoordinates();
    if (location.x || location.y) {
      return {
        type: 'position',
        value: location
      };
    }
  }
  function matchCoordinates() {
    return {
      x: matchDistance(),
      y: matchDistance()
    };
  }
  function matchListing(matcher) {
    var captures = matcher();
    var result = [];
    if (captures) {
      result.push(captures);
      while (scan(tokens.comma)) {
        captures = matcher();
        if (captures) {
          result.push(captures);
        } else {
          error('One extra comma');
        }
      }
    }
    return result;
  }
  function matchColorStop() {
    var color = matchColor();
    if (!color) {
      error('Expected color definition');
    }
    color.length = matchDistance();
    return color;
  }
  function matchColor() {
    return matchHexColor() || matchRGBAColor() || matchRGBColor() || matchLiteralColor();
  }
  function matchLiteralColor() {
    return match('literal', tokens.literalColor, 0);
  }
  function matchHexColor() {
    return match('hex', tokens.hexColor, 1);
  }
  function matchRGBColor() {
    return matchCall(tokens.rgbColor, function () {
      return {
        type: 'rgb',
        value: matchListing(matchNumber)
      };
    });
  }
  function matchRGBAColor() {
    return matchCall(tokens.rgbaColor, function () {
      return {
        type: 'rgba',
        value: matchListing(matchNumber)
      };
    });
  }
  function matchNumber() {
    return scan(tokens.number)[1];
  }
  function matchDistance() {
    return match('%', tokens.percentageValue, 1) || matchPositionKeyword() || matchLength();
  }
  function matchPositionKeyword() {
    return match('position-keyword', tokens.positionKeywords, 1);
  }
  function matchLength() {
    return match('px', tokens.pixelValue, 1) || match('em', tokens.emValue, 1);
  }
  function match(type, pattern, captureIndex) {
    var captures = scan(pattern);
    if (captures) {
      return {
        type: type,
        value: captures[captureIndex]
      };
    }
  }
  function scan(regexp) {
    var blankCaptures = /^[\n\r\t\s]+/.exec(input);
    if (blankCaptures) {
      consume(blankCaptures[0].length);
    }
    var captures = regexp.exec(input);
    if (captures) {
      consume(captures[0].length);
    }
    return captures;
  }
  function consume(size) {
    input = input.substring(size);
  }
  return function (code) {
    input = code;
    return getAST();
  };
}();
function computeLinearGradient(min, width, height, angle) {
  var rad = deg2rad(angle.value);
  var rx = 0;
  var ry = 0;
  var rcx = rx + width / 2;
  var rcy = ry + height / 2;
  // get the length of gradient line
  // @see https://observablehq.com/@danburzo/css-gradient-line
  var length = Math.abs(width * Math.cos(rad)) + Math.abs(height * Math.sin(rad));
  var x1 = min[0] + rcx - Math.cos(rad) * length / 2;
  var y1 = min[1] + rcy - Math.sin(rad) * length / 2;
  var x2 = min[0] + rcx + Math.cos(rad) * length / 2;
  var y2 = min[1] + rcy + Math.sin(rad) * length / 2;
  return {
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
  };
}
function computeRadialGradient(min, width, height, cx, cy, size) {
  // 'px'
  var x = cx.value;
  var y = cy.value;

  // TODO: 'em'

  // '%'
  if (cx.unit === UnitType.kPercentage) {
    x = cx.value / 100 * width;
  }
  if (cy.unit === UnitType.kPercentage) {
    y = cy.value / 100 * height;
  }

  // default to farthest-side
  var r = Math.max(distanceSquareRoot([0, 0], [x, y]), distanceSquareRoot([0, height], [x, y]), distanceSquareRoot([width, height], [x, y]), distanceSquareRoot([width, 0], [x, y]));
  if (size) {
    if (size instanceof CSSUnitValue) {
      r = size.value;
    } else if (size instanceof CSSKeywordValue) {
      // @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Images/Using_CSS_gradients#example_closest-side_for_circles
      if (size.value === 'closest-side') {
        r = Math.min(x, width - x, y, height - y);
      } else if (size.value === 'farthest-side') {
        r = Math.max(x, width - x, y, height - y);
      } else if (size.value === 'closest-corner') {
        r = Math.min(distanceSquareRoot([0, 0], [x, y]), distanceSquareRoot([0, height], [x, y]), distanceSquareRoot([width, height], [x, y]), distanceSquareRoot([width, 0], [x, y]));
      }
    }
  }
  return {
    x: x + min[0],
    y: y + min[1],
    r: r
  };
}

var regexLG = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i;
var regexRG = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i;
var regexPR = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i;
var regexColorStop = /[\d.]+:(#[^\s]+|[^\)]+\))/gi;
function spaceColorStops(colorStops) {
  var _colorStops$length;
  var length = colorStops.length;
  colorStops[length - 1].length = (_colorStops$length = colorStops[length - 1].length) !== null && _colorStops$length !== void 0 ? _colorStops$length : {
    type: '%',
    value: '100'
  };
  if (length > 1) {
    var _colorStops$0$length;
    colorStops[0].length = (_colorStops$0$length = colorStops[0].length) !== null && _colorStops$0$length !== void 0 ? _colorStops$0$length : {
      type: '%',
      value: '0'
    };
  }
  var previousIndex = 0;
  var previousOffset = Number(colorStops[0].length.value);
  for (var i = 1; i < length; i++) {
    var _colorStops$i$length;
    // support '%' & 'px'
    var offset = (_colorStops$i$length = colorStops[i].length) === null || _colorStops$i$length === void 0 ? void 0 : _colorStops$i$length.value;
    if (!isNil(offset) && !isNil(previousOffset)) {
      for (var j = 1; j < i - previousIndex; j++) colorStops[previousIndex + j].length = {
        type: '%',
        value: "".concat(previousOffset + (Number(offset) - previousOffset) * j / (i - previousIndex))
      };
      previousIndex = i;
      previousOffset = Number(offset);
    }
  }
}

// The position of the gradient line's starting point.
// different from CSS side(to top) @see https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient#values
var SideOrCornerToDegMap = {
  left: 270 - 90,
  top: 0 - 90,
  bottom: 180 - 90,
  right: 90 - 90,
  'left top': 315 - 90,
  'top left': 315 - 90,
  'left bottom': 225 - 90,
  'bottom left': 225 - 90,
  'right top': 45 - 90,
  'top right': 45 - 90,
  'right bottom': 135 - 90,
  'bottom right': 135 - 90
};
var angleToDeg = memoize(function (orientation) {
  var angle;
  if (orientation.type === 'angular') {
    angle = Number(orientation.value);
  } else {
    angle = SideOrCornerToDegMap[orientation.value] || 0;
  }
  return getOrCreateUnitValue(angle, 'deg');
});
var positonToCSSUnitValue = memoize(function (position) {
  var cx = 50;
  var cy = 50;
  var unitX = '%';
  var unitY = '%';
  if ((position === null || position === void 0 ? void 0 : position.type) === 'position') {
    var _position$value = position.value,
      x = _position$value.x,
      y = _position$value.y;
    if ((x === null || x === void 0 ? void 0 : x.type) === 'position-keyword') {
      if (x.value === 'left') {
        cx = 0;
      } else if (x.value === 'center') {
        cx = 50;
      } else if (x.value === 'right') {
        cx = 100;
      } else if (x.value === 'top') {
        cy = 0;
      } else if (x.value === 'bottom') {
        cy = 100;
      }
    }
    if ((y === null || y === void 0 ? void 0 : y.type) === 'position-keyword') {
      if (y.value === 'left') {
        cx = 0;
      } else if (y.value === 'center') {
        cy = 50;
      } else if (y.value === 'right') {
        cx = 100;
      } else if (y.value === 'top') {
        cy = 0;
      } else if (y.value === 'bottom') {
        cy = 100;
      }
    }
    if ((x === null || x === void 0 ? void 0 : x.type) === 'px' || (x === null || x === void 0 ? void 0 : x.type) === '%' || (x === null || x === void 0 ? void 0 : x.type) === 'em') {
      unitX = x === null || x === void 0 ? void 0 : x.type;
      cx = Number(x.value);
    }
    if ((y === null || y === void 0 ? void 0 : y.type) === 'px' || (y === null || y === void 0 ? void 0 : y.type) === '%' || (y === null || y === void 0 ? void 0 : y.type) === 'em') {
      unitY = y === null || y === void 0 ? void 0 : y.type;
      cy = Number(y.value);
    }
  }
  return {
    cx: getOrCreateUnitValue(cx, unitX),
    cy: getOrCreateUnitValue(cy, unitY)
  };
});
var parseGradient = memoize(function (colorStr) {
  if (colorStr.indexOf('linear') > -1 || colorStr.indexOf('radial') > -1) {
    var ast = parseGradient$1(colorStr);
    return ast.map(function (_ref) {
      var type = _ref.type,
        orientation = _ref.orientation,
        colorStops = _ref.colorStops;
      spaceColorStops(colorStops);
      var steps = colorStops.map(function (colorStop) {
        // TODO: only support % for now, should calc percentage of axis length when using px/em
        return {
          offset: getOrCreateUnitValue(Number(colorStop.length.value), '%'),
          color: colorStopToString(colorStop)
        };
      });
      if (type === 'linear-gradient') {
        return new CSSGradientValue(GradientType.LinearGradient, {
          angle: orientation ? angleToDeg(orientation) : Odeg,
          steps: steps
        });
      }
      if (type === 'radial-gradient') {
        if (!orientation) {
          orientation = [{
            type: 'shape',
            value: 'circle'
          }];
        }
        if (orientation[0].type === 'shape' && orientation[0].value === 'circle') {
          var _positonToCSSUnitValu = positonToCSSUnitValue(orientation[0].at),
            cx = _positonToCSSUnitValu.cx,
            cy = _positonToCSSUnitValu.cy;
          var size;
          if (orientation[0].style) {
            var _orientation$0$style = orientation[0].style,
              _type = _orientation$0$style.type,
              value = _orientation$0$style.value;
            if (_type === 'extent-keyword') {
              size = getOrCreateKeyword(value);
            } else {
              size = getOrCreateUnitValue(value, _type);
            }
          }
          return new CSSGradientValue(GradientType.RadialGradient, {
            cx: cx,
            cy: cy,
            size: size,
            steps: steps
          });
        }
        // TODO: support ellipse shape
        // TODO: repeating-linear-gradient & repeating-radial-gradient
        // } else if (type === 'repeating-linear-gradient') {
        // } else if (type === 'repeating-radial-gradient') {
      }
      return undefined;
    });
  }

  // legacy format, should be deprecated later
  var type = colorStr[0];
  if (colorStr[1] === '(' || colorStr[2] === '(') {
    if (type === 'l') {
      var arr = regexLG.exec(colorStr);
      if (arr) {
        var _arr$2$match;
        var steps = ((_arr$2$match = arr[2].match(regexColorStop)) === null || _arr$2$match === void 0 ? void 0 : _arr$2$match.map(function (stop) {
          return stop.split(':');
        })) || [];
        return [new CSSGradientValue(GradientType.LinearGradient, {
          angle: getOrCreateUnitValue(parseFloat(arr[1]), 'deg'),
          steps: steps.map(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
              offset = _ref3[0],
              color = _ref3[1];
            return {
              offset: getOrCreateUnitValue(Number(offset) * 100, '%'),
              color: color
            };
          })
        })];
      }
    } else if (type === 'r') {
      var parsedRadialGradient = parseRadialGradient(colorStr);
      if (parsedRadialGradient) {
        if (isString(parsedRadialGradient)) {
          colorStr = parsedRadialGradient;
        } else {
          return [new CSSGradientValue(GradientType.RadialGradient, parsedRadialGradient)];
        }
      }
    } else if (type === 'p') {
      return parsePattern(colorStr);
    }
  }
});
function parseRadialGradient(gradientStr) {
  var arr = regexRG.exec(gradientStr);
  if (arr) {
    var _arr$4$match;
    var steps = ((_arr$4$match = arr[4].match(regexColorStop)) === null || _arr$4$match === void 0 ? void 0 : _arr$4$match.map(function (stop) {
      return stop.split(':');
    })) || [];
    return {
      cx: getOrCreateUnitValue(50, '%'),
      cy: getOrCreateUnitValue(50, '%'),
      steps: steps.map(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
          offset = _ref5[0],
          color = _ref5[1];
        return {
          offset: getOrCreateUnitValue(Number(offset) * 100, '%'),
          color: color
        };
      })
    };
  }
  return null;
}
function parsePattern(patternStr) {
  var arr = regexPR.exec(patternStr);
  if (arr) {
    var repetition = arr[1];
    var src = arr[2];
    switch (repetition) {
      case 'a':
        repetition = 'repeat';
        break;
      case 'x':
        repetition = 'repeat-x';
        break;
      case 'y':
        repetition = 'repeat-y';
        break;
      case 'n':
        repetition = 'no-repeat';
        break;
      default:
        repetition = 'no-repeat';
    }
    return {
      image: src,
      // @ts-ignore
      repetition: repetition
    };
  }
  return null;
}

/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/createPattern
 */

function isCSSGradientValue(object) {
  return !!object.type && !!object.value;
}
function isPattern(object) {
  return object && !!object.image;
}
function isCSSRGB(object) {
  return object && !isNil(object.r) && !isNil(object.g) && !isNil(object.b);
}

/**
 * @see https://github.com/WebKit/WebKit/blob/main/Source/WebCore/css/parser/CSSParser.cpp#L97
 */
var parseColor = memoize(function (colorStr) {
  if (isPattern(colorStr)) {
    return _objectSpread({
      repetition: 'repeat'
    }, colorStr);
  }
  if (isNil(colorStr)) {
    colorStr = '';
  }
  if (colorStr === 'transparent') {
    // transparent black
    return transparentColor;
  }
  if (colorStr === 'currentColor') {
    // @see https://github.com/adobe-webplatform/Snap.svg/issues/526
    colorStr = 'black';
  } else if (colorStr === 'none') {
    return noneColor;
  }

  // support CSS gradient syntax
  var g = parseGradient(colorStr);
  if (g) {
    return g;
  }

  // constants
  var color$1 = color(colorStr);
  var rgba = [0, 0, 0, 0];
  if (color$1 !== null) {
    rgba[0] = color$1.r || 0;
    rgba[1] = color$1.g || 0;
    rgba[2] = color$1.b || 0;
    rgba[3] = color$1.opacity;
  }

  // return new CSSRGB(...rgba);
  return getOrCreateRGBA.apply(void 0, rgba);
});
function mergeColors(left, right) {
  // only support constant value, exclude gradient & pattern
  if (!isCSSRGB(left) || !isCSSRGB(right)) {
    return;
  }
  return [[Number(left.r), Number(left.g), Number(left.b), Number(left.alpha)], [Number(right.r), Number(right.g), Number(right.b), Number(right.alpha)], function (color) {
    var rgba = color.slice();
    if (rgba[3]) {
      for (var i = 0; i < 3; i++) rgba[i] = Math.round(clamp(rgba[i], 0, 255));
    }
    rgba[3] = clamp(rgba[3], 0, 1);
    return "rgba(".concat(rgba.join(','), ")");
  }];
}

function parseDimension(unitRegExp, string) {
  if (isNil(string)) {
    return getOrCreateUnitValue(0, 'px');
  }
  string = "".concat(string).trim().toLowerCase();
  if (isFinite(Number(string))) {
    if ('px'.search(unitRegExp) >= 0) {
      return getOrCreateUnitValue(Number(string), 'px');
    }
    if ('deg'.search(unitRegExp) >= 0) {
      return getOrCreateUnitValue(Number(string), 'deg');
    }
  }
  var matchedUnits = [];
  string = string.replace(unitRegExp, function (match) {
    matchedUnits.push(match);
    return "U".concat(match);
  });
  var taggedUnitRegExp = "U(".concat(unitRegExp.source, ")");
  return matchedUnits.map(function (unit) {
    return getOrCreateUnitValue(Number(string.replace(new RegExp("U".concat(unit), 'g'), '').replace(new RegExp(taggedUnitRegExp, 'g'), '*0')), unit);
  })[0];
}

/**
 * <length>
 * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/length
 * length with only absolute unit, eg. 1px
 */
var parseLengthUnmemoize = function parseLengthUnmemoize(css) {
  return parseDimension(new RegExp('px', 'g'), css);
};
var parseLength = memoize(parseLengthUnmemoize);

/**
 * <percentage>
 * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/percentage
 */
var parserPercentageUnmemoize = function parserPercentageUnmemoize(css) {
  return parseDimension(new RegExp('%', 'g'), css);
};
memoize(parserPercentageUnmemoize);

/**
 * length with absolute or relative unit,
 * eg. 1px, 0.7em, 50%, calc(100% - 200px);
 *
 * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/length-percentage
 */
var parseLengthOrPercentageUnmemoize = function parseLengthOrPercentageUnmemoize(css) {
  if (isNumber(css) || isFinite(Number(css))) {
    // Number(css) is NaN
    return getOrCreateUnitValue(Number(css) || 0, 'px');
    // return Number(css);
  }
  return parseDimension(new RegExp('px|%|em|rem', 'g'), css);
};
var parseLengthOrPercentage = memoize(parseLengthOrPercentageUnmemoize);
var parseAngleUnmemoize = function parseAngleUnmemoize(css) {
  return parseDimension(new RegExp('deg|rad|grad|turn', 'g'), css);
};
var parseAngle = memoize(parseAngleUnmemoize);

/**
 * merge CSSUnitValue
 *
 * @example
 * 10px + 20px = 30px
 * 10deg + 10rad
 * 10% + 20% = 30%
 */
function mergeDimensions(left, right, target, nonNegative) {
  var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var unit = '';
  var leftValue = left.value || 0;
  var rightValue = right.value || 0;
  var canonicalUnit = toCanonicalUnit(left.unit);
  var leftCanonicalUnitValue = left.convertTo(canonicalUnit);
  var rightCanonicalUnitValue = right.convertTo(canonicalUnit);
  if (leftCanonicalUnitValue && rightCanonicalUnitValue) {
    leftValue = leftCanonicalUnitValue.value;
    rightValue = rightCanonicalUnitValue.value;
    unit = unitTypeToString(left.unit);
  }
  // format '%' to 'px'
  else if (CSSUnitValue.isLength(left.unit) || CSSUnitValue.isLength(right.unit)) {
    leftValue = convertPercentUnit(left, index, target);
    rightValue = convertPercentUnit(right, index, target);
    unit = 'px';
  }
  return [leftValue, rightValue, function (value) {
    if (nonNegative) {
      value = Math.max(value, 0);
    }
    return value + unit;
  }];
}
function convertAngleUnit(value) {
  var deg = 0;
  if (value.unit === UnitType.kDegrees) {
    deg = value.value;
  } else if (value.unit === UnitType.kRadians) {
    deg = rad2deg(Number(value.value));
  } else if (value.unit === UnitType.kTurns) {
    deg = turn2deg(Number(value.value));
  } else if (value.value) {
    deg = value.value;
  }
  return deg;
}
function parseDimensionArrayFormat(string, size) {
  var parsed;
  if (Array.isArray(string)) {
    // [1, '2px', 3]
    parsed = string.map(function (segment) {
      return Number(segment);
    });
  } else if (isString(string)) {
    parsed = string.split(' ').map(function (segment) {
      return Number(segment);
    });
  } else if (isNumber(string)) {
    parsed = [string];
  }
  if (size === 2) {
    if (parsed.length === 1) {
      return [parsed[0], parsed[0]];
    }
    return [parsed[0], parsed[1]];
  }
  if (size === 4) {
    if (parsed.length === 1) {
      return [parsed[0], parsed[0], parsed[0], parsed[0]];
    }
    if (parsed.length === 2) {
      return [parsed[0], parsed[1], parsed[0], parsed[1]];
    }
    if (parsed.length === 3) {
      return [parsed[0], parsed[1], parsed[2], parsed[1]];
    }
    return [parsed[0], parsed[1], parsed[2], parsed[3]];
  }
  if (size === 'even' && parsed.length % 2 === 1) {
    return [].concat(_toConsumableArray(parsed), _toConsumableArray(parsed));
  }
  return parsed;
}

// export function mergeDimensionList(
//   left: CSSUnitValue[],
//   right: CSSUnitValue[],
//   target: IElement | null,
// ): [number[], number[], (list: number[]) => string] | undefined {
//   if (left.length !== right.length) {
//     return;
//   }

//   const unit = left[0].unit;

//   return [
//     left.map((l) => l.value),
//     right.map((l) => l.value),
//     (values: number[]) => {
//       return values.map((n) => new CSSUnitValue(n, unit)).join(' ');
//     },
//   ];
// }

function convertPercentUnit(valueWithUnit, vec3Index, target) {
  var useMin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (valueWithUnit.unit === UnitType.kPixels) {
    return Number(valueWithUnit.value);
  }
  if (valueWithUnit.unit === UnitType.kPercentage && target) {
    var bounds = target.nodeName === Shape.GROUP ? target.getLocalBounds() : target.getGeometryBounds();
    return (useMin ? bounds.min[vec3Index] : 0) + valueWithUnit.value / 100 * bounds.halfExtents[vec3Index] * 2;
  }
  return 0;
}

var parseParam = function parseParam(css) {
  return parseDimension(/deg|rad|grad|turn|px|%/g, css);
};
var supportedFilters = ['blur', 'brightness', 'drop-shadow', 'contrast', 'grayscale', 'sepia', 'saturate', 'hue-rotate', 'invert'];
function parseFilter() {
  var filterStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  filterStr = filterStr.toLowerCase().trim();
  if (filterStr === 'none') {
    return [];
  }
  var filterRegExp = /\s*([\w-]+)\(([^)]*)\)/g;
  var result = [];
  var match;
  var prevLastIndex = 0;
  while (match = filterRegExp.exec(filterStr)) {
    if (match.index !== prevLastIndex) {
      return [];
    }
    prevLastIndex = match.index + match[0].length;
    if (supportedFilters.indexOf(match[1]) > -1) {
      result.push({
        name: match[1],
        params: match[2].split(' ').map(function (p) {
          return parseParam(p) || parseColor(p);
        })
      });
    }
    if (filterRegExp.lastIndex === filterStr.length) {
      return result;
    }
  }
  return [];
}

function numberToString(x) {
  // scale(0.00000001) -> scale(0)
  // return x.toFixed(6).replace(/0+$/, '').replace(/\.$/, '');
  return x.toString();
}

/**
 * parse string or number to CSSUnitValue(numeric)
 *
 * eg.
 * * 0 -> CSSUnitValue(0)
 * * '2' -> CSSUnitValue(2)
 */
var parseNumberUnmemoize = function parseNumberUnmemoize(string) {
  if (typeof string === 'number') {
    return getOrCreateUnitValue(string);
  }
  if (/^\s*[-+]?(\d*\.)?\d+\s*$/.test(string)) {
    return getOrCreateUnitValue(Number(string));
  }
  return getOrCreateUnitValue(0);
};
var parseNumber = memoize(parseNumberUnmemoize);
memoize(function (string) {
  if (isString(string)) {
    return string.split(' ').map(parseNumber);
  }
  return string.map(parseNumber);
});
function mergeNumbers(left, right) {
  return [left, right, numberToString];
}
function clampedMergeNumbers(min, max) {
  return function (left, right) {
    return [left, right, function (x) {
      return numberToString(clamp(x, min, max));
    }];
  };
}
function mergeNumberLists(left, right) {
  if (left.length !== right.length) {
    return;
  }
  return [left, right, function (numberList) {
    return numberList;
  }];
}

function getOrCalculatePathTotalLength(path) {
  if (path.parsedStyle.d.totalLength === 0) {
    path.parsedStyle.d.totalLength = getTotalLength(path.parsedStyle.d.absolutePath);
  }
  return path.parsedStyle.d.totalLength;
}
function getOrCalculatePolylineTotalLength(polyline) {
  if (polyline.parsedStyle.points.totalLength === 0) {
    polyline.parsedStyle.points.totalLength = polylineLength(polyline.parsedStyle.points.points);
  }
  return polyline.parsedStyle.points.totalLength;
}
function removeRedundantMCommand(path) {
  for (var i = 0; i < path.length; i++) {
    var prevSegment = path[i - 1];
    var segment = path[i];
    var cmd = segment[0];
    if (cmd === 'M') {
      if (prevSegment) {
        var prevCmd = prevSegment[0];
        var srcPoint = [segment[1], segment[2]];
        var destPoint = void 0;
        if (prevCmd === 'L' || prevCmd === 'M') {
          destPoint = [prevSegment[1], prevSegment[2]];
        } else if (prevCmd === 'C' || prevCmd === 'A' || prevCmd === 'Q') {
          destPoint = [prevSegment[prevSegment.length - 2], prevSegment[prevSegment.length - 1]];
        }
        if (destPoint && isSamePoint(srcPoint, destPoint)) {
          path.splice(i, 1);
          i--;
        }
      }
    }
  }
}
function hasArcOrBezier(path) {
  var hasArc = false;
  var count = path.length;
  for (var i = 0; i < count; i++) {
    var params = path[i];
    var cmd = params[0];
    if (cmd === 'C' || cmd === 'A' || cmd === 'Q') {
      hasArc = true;
      break;
    }
  }
  return hasArc;
}
function extractPolygons(pathArray) {
  var polygons = [];
  var polylines = [];
  var points = []; // 防止第一个命令不是 'M'
  for (var i = 0; i < pathArray.length; i++) {
    var params = pathArray[i];
    var cmd = params[0];
    if (cmd === 'M') {
      // 遇到 'M' 判定是否是新数组，新数组中没有点
      if (points.length) {
        // 如果存在点，则说明没有遇到 'Z'，开始了一个新的多边形
        polylines.push(points);
        points = []; // 创建新的点
      }
      points.push([params[1], params[2]]);
    } else if (cmd === 'Z') {
      if (points.length) {
        // 存在点
        polygons.push(points);
        points = []; // 开始新的点集合
      }
      // 如果不存在点，同时 'Z'，则说明是错误，不处理
    } else {
      points.push([params[1], params[2]]);
    }
  }
  // 说明 points 未放入 polygons 或者 polyline
  // 仅当只有一个 M，没有 Z 时会发生这种情况
  if (points.length > 0) {
    polylines.push(points);
  }
  return {
    polygons: polygons,
    polylines: polylines
  };
}
function isSamePoint(point1, point2) {
  return point1[0] === point2[0] && point1[1] === point2[1];
}
function getPathBBox(segments, lineWidth) {
  var xArr = [];
  var yArr = [];
  var segmentsWithAngle = [];
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    var currentPoint = segment.currentPoint,
      params = segment.params,
      prePoint = segment.prePoint;
    var box = void 0;
    switch (segment.command) {
      case 'Q':
        box = quadBox(prePoint[0], prePoint[1], params[1], params[2], params[3], params[4]);
        break;
      case 'C':
        box = cubicBox(prePoint[0], prePoint[1], params[1], params[2], params[3], params[4], params[5], params[6]);
        break;
      case 'A':
        var arcParams = segment.arcParams;
        box = arcBox(arcParams.cx, arcParams.cy, arcParams.rx, arcParams.ry, arcParams.xRotation, arcParams.startAngle, arcParams.endAngle);
        break;
      default:
        xArr.push(currentPoint[0]);
        yArr.push(currentPoint[1]);
        break;
    }
    if (box) {
      segment.box = box;
      xArr.push(box.x, box.x + box.width);
      yArr.push(box.y, box.y + box.height);
    }
    if (lineWidth && (segment.command === 'L' || segment.command === 'M') && segment.prePoint && segment.nextPoint) {
      segmentsWithAngle.push(segment);
    }
  }
  // bbox calculation should ignore NaN for path attribute
  // ref: https://github.com/antvis/g/issues/210
  // ref: https://github.com/antvis/G2/issues/3109
  xArr = xArr.filter(function (item) {
    return !Number.isNaN(item) && item !== Infinity && item !== -Infinity;
  });
  yArr = yArr.filter(function (item) {
    return !Number.isNaN(item) && item !== Infinity && item !== -Infinity;
  });
  var minX = min(xArr);
  var minY = min(yArr);
  var maxX = max(xArr);
  var maxY = max(yArr);
  if (segmentsWithAngle.length === 0) {
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
  for (var _i = 0; _i < segmentsWithAngle.length; _i++) {
    var _segment = segmentsWithAngle[_i];
    var _currentPoint = _segment.currentPoint;
    var extra = void 0;
    if (_currentPoint[0] === minX) {
      extra = getExtraFromSegmentWithAngle(_segment, lineWidth);
      minX -= extra.xExtra;
    } else if (_currentPoint[0] === maxX) {
      extra = getExtraFromSegmentWithAngle(_segment, lineWidth);
      maxX += extra.xExtra;
    }
    if (_currentPoint[1] === minY) {
      extra = getExtraFromSegmentWithAngle(_segment, lineWidth);
      minY -= extra.yExtra;
    } else if (_currentPoint[1] === maxY) {
      extra = getExtraFromSegmentWithAngle(_segment, lineWidth);
      maxY += extra.yExtra;
    }
  }
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getExtraFromSegmentWithAngle(segment, lineWidth) {
  var prePoint = segment.prePoint,
    currentPoint = segment.currentPoint,
    nextPoint = segment.nextPoint;
  var currentAndPre = Math.pow(currentPoint[0] - prePoint[0], 2) + Math.pow(currentPoint[1] - prePoint[1], 2);
  var currentAndNext = Math.pow(currentPoint[0] - nextPoint[0], 2) + Math.pow(currentPoint[1] - nextPoint[1], 2);
  var preAndNext = Math.pow(prePoint[0] - nextPoint[0], 2) + Math.pow(prePoint[1] - nextPoint[1], 2);
  // 以 currentPoint 为顶点的夹角
  var currentAngle = Math.acos((currentAndPre + currentAndNext - preAndNext) / (2 * Math.sqrt(currentAndPre) * Math.sqrt(currentAndNext)));
  // 夹角为空、 0 或 PI 时，不需要计算夹角处的额外宽度
  // 注意: 由于计算精度问题，夹角为 0 的情况计算出来的角度可能是一个很小的值，还需要判断其与 0 是否近似相等
  if (!currentAngle || Math.sin(currentAngle) === 0 || isNumberEqual(currentAngle, 0)) {
    return {
      xExtra: 0,
      yExtra: 0
    };
  }
  var xAngle = Math.abs(Math.atan2(nextPoint[1] - currentPoint[1], nextPoint[0] - currentPoint[0]));
  var yAngle = Math.abs(Math.atan2(nextPoint[0] - currentPoint[0], nextPoint[1] - currentPoint[1]));
  // 将夹角转为锐角
  xAngle = xAngle > Math.PI / 2 ? Math.PI - xAngle : xAngle;
  yAngle = yAngle > Math.PI / 2 ? Math.PI - yAngle : yAngle;
  // 这里不考虑在水平和垂直方向的投影，直接使用最大差值
  // 由于上层统一加减了二分之一线宽，这里需要进行弥补
  var extra = {
    // 水平方向投影
    xExtra: Math.cos(currentAngle / 2 - xAngle) * (lineWidth / 2 * (1 / Math.sin(currentAngle / 2))) - lineWidth / 2 || 0,
    // 垂直方向投影
    yExtra: Math.cos(yAngle - currentAngle / 2) * (lineWidth / 2 * (1 / Math.sin(currentAngle / 2))) - lineWidth / 2 || 0
  };
  return extra;
}

// 点对称
function toSymmetry(point, center) {
  return [center[0] + (center[0] - point[0]), center[1] + (center[1] - point[1])];
}
var angleBetween = function angleBetween(v0, v1) {
  var p = v0.x * v1.x + v0.y * v1.y;
  var n = Math.sqrt((Math.pow(v0.x, 2) + Math.pow(v0.y, 2)) * (Math.pow(v1.x, 2) + Math.pow(v1.y, 2)));
  var sign = v0.x * v1.y - v0.y * v1.x < 0 ? -1 : 1;
  var angle = sign * Math.acos(p / n);
  return angle;
};
/**
 * @see https://github.com/rveciana/svg-path-properties/blob/b6bd9a322966f6ef7a311872d80c56e3718de861/src/arc.ts#L121
 */
var pointOnEllipticalArc = function pointOnEllipticalArc(p0, rx, ry, xAxisRotation, largeArcFlag, sweepFlag, p1, t) {
  // In accordance to: http://www.w3.org/TR/SVG/implnote.html#ArcOutOfRangeParameters
  rx = Math.abs(rx);
  ry = Math.abs(ry);
  xAxisRotation = mod(xAxisRotation, 360);
  var xAxisRotationRadians = deg2rad(xAxisRotation);
  // If the endpoints are identical, then this is equivalent to omitting the elliptical arc segment entirely.
  if (p0.x === p1.x && p0.y === p1.y) {
    return {
      x: p0.x,
      y: p0.y,
      ellipticalArcAngle: 0
    }; // Check if angle is correct
  }

  // If rx = 0 or ry = 0 then this arc is treated as a straight line segment joining the endpoints.
  if (rx === 0 || ry === 0) {
    // return this.pointOnLine(p0, p1, t);
    return {
      x: 0,
      y: 0,
      ellipticalArcAngle: 0
    }; // Check if angle is correct
  }

  // Following "Conversion from endpoint to center parameterization"
  // http://www.w3.org/TR/SVG/implnote.html#ArcConversionEndpointToCenter

  // Step #1: Compute transformedPoint
  var dx = (p0.x - p1.x) / 2;
  var dy = (p0.y - p1.y) / 2;
  var transformedPoint = {
    x: Math.cos(xAxisRotationRadians) * dx + Math.sin(xAxisRotationRadians) * dy,
    y: -Math.sin(xAxisRotationRadians) * dx + Math.cos(xAxisRotationRadians) * dy
  };
  // Ensure radii are large enough
  var radiiCheck = Math.pow(transformedPoint.x, 2) / Math.pow(rx, 2) + Math.pow(transformedPoint.y, 2) / Math.pow(ry, 2);
  if (radiiCheck > 1) {
    rx *= Math.sqrt(radiiCheck);
    ry *= Math.sqrt(radiiCheck);
  }

  // Step #2: Compute transformedCenter
  var cSquareNumerator = Math.pow(rx, 2) * Math.pow(ry, 2) - Math.pow(rx, 2) * Math.pow(transformedPoint.y, 2) - Math.pow(ry, 2) * Math.pow(transformedPoint.x, 2);
  var cSquareRootDenom = Math.pow(rx, 2) * Math.pow(transformedPoint.y, 2) + Math.pow(ry, 2) * Math.pow(transformedPoint.x, 2);
  var cRadicand = cSquareNumerator / cSquareRootDenom;
  // Make sure this never drops below zero because of precision
  cRadicand = cRadicand < 0 ? 0 : cRadicand;
  var cCoef = (largeArcFlag !== sweepFlag ? 1 : -1) * Math.sqrt(cRadicand);
  var transformedCenter = {
    x: cCoef * (rx * transformedPoint.y / ry),
    y: cCoef * (-(ry * transformedPoint.x) / rx)
  };

  // Step #3: Compute center
  var center = {
    x: Math.cos(xAxisRotationRadians) * transformedCenter.x - Math.sin(xAxisRotationRadians) * transformedCenter.y + (p0.x + p1.x) / 2,
    y: Math.sin(xAxisRotationRadians) * transformedCenter.x + Math.cos(xAxisRotationRadians) * transformedCenter.y + (p0.y + p1.y) / 2
  };

  // Step #4: Compute start/sweep angles
  // Start angle of the elliptical arc prior to the stretch and rotate operations.
  // Difference between the start and end angles
  var startVector = {
    x: (transformedPoint.x - transformedCenter.x) / rx,
    y: (transformedPoint.y - transformedCenter.y) / ry
  };
  var startAngle = angleBetween({
    x: 1,
    y: 0
  }, startVector);
  var endVector = {
    x: (-transformedPoint.x - transformedCenter.x) / rx,
    y: (-transformedPoint.y - transformedCenter.y) / ry
  };
  var sweepAngle = angleBetween(startVector, endVector);
  if (!sweepFlag && sweepAngle > 0) {
    sweepAngle -= 2 * Math.PI;
  } else if (sweepFlag && sweepAngle < 0) {
    sweepAngle += 2 * Math.PI;
  }
  // We use % instead of `mod(..)` because we want it to be -360deg to 360deg(but actually in radians)
  sweepAngle %= 2 * Math.PI;

  // From http://www.w3.org/TR/SVG/implnote.html#ArcParameterizationAlternatives
  var angle = startAngle + sweepAngle * t;
  var ellipseComponentX = rx * Math.cos(angle);
  var ellipseComponentY = ry * Math.sin(angle);
  var point = {
    x: Math.cos(xAxisRotationRadians) * ellipseComponentX - Math.sin(xAxisRotationRadians) * ellipseComponentY + center.x,
    y: Math.sin(xAxisRotationRadians) * ellipseComponentX + Math.cos(xAxisRotationRadians) * ellipseComponentY + center.y,
    ellipticalArcStartAngle: startAngle,
    ellipticalArcEndAngle: startAngle + sweepAngle,
    ellipticalArcAngle: angle,
    ellipticalArcCenter: center,
    resultantRx: rx,
    resultantRy: ry
  };
  return point;
};
function path2Segments(path) {
  var segments = [];
  var currentPoint = null; // 当前图形
  var nextParams = null; // 下一节点的 path 参数
  var startMovePoint = null; // 开始 M 的点，可能会有多个
  var lastStartMovePointIndex = 0; // 最近一个开始点 M 的索引
  var count = path.length;
  for (var i = 0; i < count; i++) {
    var params = path[i];
    nextParams = path[i + 1];
    var command = params[0];
    // 数学定义上的参数，便于后面的计算
    var segment = {
      command: command,
      prePoint: currentPoint,
      params: params,
      startTangent: null,
      endTangent: null,
      currentPoint: null,
      nextPoint: null,
      arcParams: null,
      box: null,
      cubicParams: null
    };
    switch (command) {
      case 'M':
        startMovePoint = [params[1], params[2]];
        lastStartMovePointIndex = i;
        break;
      case 'A':
        var arcParams = getArcParams(currentPoint, params);
        segment.arcParams = arcParams;
        break;
    }
    if (command === 'Z') {
      // 有了 Z 后，当前节点从开始 M 的点开始
      currentPoint = startMovePoint;
      // 如果当前点的命令为 Z，相当于当前点为最近一个 M 点，则下一个点直接指向最近一个 M 点的下一个点
      nextParams = path[lastStartMovePointIndex + 1];
    } else {
      var len = params.length;
      currentPoint = [params[len - 2], params[len - 1]];
    }
    if (nextParams && nextParams[0] === 'Z') {
      // 如果下一个点的命令为 Z，则下一个点直接指向最近一个 M 点
      nextParams = path[lastStartMovePointIndex];
      if (segments[lastStartMovePointIndex]) {
        // 如果下一个点的命令为 Z，则最近一个 M 点的前一个点为当前点
        segments[lastStartMovePointIndex].prePoint = currentPoint;
      }
    }
    segment.currentPoint = currentPoint;
    // 如果当前点与最近一个 M 点相同，则最近一个 M 点的前一个点为当前点的前一个点
    if (segments[lastStartMovePointIndex] && isSamePoint(currentPoint, segments[lastStartMovePointIndex].currentPoint)) {
      segments[lastStartMovePointIndex].prePoint = segment.prePoint;
    }
    var nextPoint = nextParams ? [nextParams[nextParams.length - 2], nextParams[nextParams.length - 1]] : null;
    segment.nextPoint = nextPoint;
    // Add startTangent and endTangent
    var prePoint = segment.prePoint;
    if (['L', 'H', 'V'].includes(command)) {
      segment.startTangent = [prePoint[0] - currentPoint[0], prePoint[1] - currentPoint[1]];
      segment.endTangent = [currentPoint[0] - prePoint[0], currentPoint[1] - prePoint[1]];
    } else if (command === 'Q') {
      // 二次贝塞尔曲线只有一个控制点
      var cp = [params[1], params[2]];
      // 二次贝塞尔曲线的终点为 currentPoint
      segment.startTangent = [prePoint[0] - cp[0], prePoint[1] - cp[1]];
      segment.endTangent = [currentPoint[0] - cp[0], currentPoint[1] - cp[1]];
    } else if (command === 'T') {
      var preSegment = segments[i - 1];
      var _cp = toSymmetry(preSegment.currentPoint, prePoint);
      if (preSegment.command === 'Q') {
        segment.command = 'Q';
        segment.startTangent = [prePoint[0] - _cp[0], prePoint[1] - _cp[1]];
        segment.endTangent = [currentPoint[0] - _cp[0], currentPoint[1] - _cp[1]];
      } else {
        // @ts-ignore
        segment.command = 'TL';
        segment.startTangent = [prePoint[0] - currentPoint[0], prePoint[1] - currentPoint[1]];
        segment.endTangent = [currentPoint[0] - prePoint[0], currentPoint[1] - prePoint[1]];
      }
    } else if (command === 'C') {
      // 三次贝塞尔曲线有两个控制点
      var cp1 = [params[1], params[2]];
      var cp2 = [params[3], params[4]];
      segment.startTangent = [prePoint[0] - cp1[0], prePoint[1] - cp1[1]];
      segment.endTangent = [currentPoint[0] - cp2[0], currentPoint[1] - cp2[1]];

      // horizontal line, eg. ['C', 100, 100, 100, 100, 200, 200]
      if (segment.startTangent[0] === 0 && segment.startTangent[1] === 0) {
        segment.startTangent = [cp1[0] - cp2[0], cp1[1] - cp2[1]];
      }
      if (segment.endTangent[0] === 0 && segment.endTangent[1] === 0) {
        segment.endTangent = [cp2[0] - cp1[0], cp2[1] - cp1[1]];
      }
    } else if (command === 'S') {
      var _preSegment = segments[i - 1];
      var _cp2 = toSymmetry(_preSegment.currentPoint, prePoint);
      var _cp3 = [params[1], params[2]];
      if (_preSegment.command === 'C') {
        segment.command = 'C'; // 将 S 命令变换为 C 命令
        segment.startTangent = [prePoint[0] - _cp2[0], prePoint[1] - _cp2[1]];
        segment.endTangent = [currentPoint[0] - _cp3[0], currentPoint[1] - _cp3[1]];
      } else {
        // @ts-ignore
        segment.command = 'SQ'; // 将 S 命令变换为 SQ 命令
        segment.startTangent = [prePoint[0] - _cp3[0], prePoint[1] - _cp3[1]];
        segment.endTangent = [currentPoint[0] - _cp3[0], currentPoint[1] - _cp3[1]];
      }
    } else if (command === 'A') {
      var _getTangentAtRatio = getTangentAtRatio(segment, 0),
        dx1 = _getTangentAtRatio.x,
        dy1 = _getTangentAtRatio.y;
      var _getTangentAtRatio2 = getTangentAtRatio(segment, 1, false),
        dx2 = _getTangentAtRatio2.x,
        dy2 = _getTangentAtRatio2.y;
      segment.startTangent = [dx1, dy1];
      segment.endTangent = [dx2, dy2];
    }
    segments.push(segment);
  }
  return segments;
}

/**
 * Use length instead of ratio
 */
function getTangentAtRatio(segment, ratio) {
  var sign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var _segment$arcParams = segment.arcParams,
    _segment$arcParams$rx = _segment$arcParams.rx,
    rx = _segment$arcParams$rx === void 0 ? 0 : _segment$arcParams$rx,
    _segment$arcParams$ry = _segment$arcParams.ry,
    ry = _segment$arcParams$ry === void 0 ? 0 : _segment$arcParams$ry,
    xRotation = _segment$arcParams.xRotation,
    arcFlag = _segment$arcParams.arcFlag,
    sweepFlag = _segment$arcParams.sweepFlag;
  var p1 = pointOnEllipticalArc({
    x: segment.prePoint[0],
    y: segment.prePoint[1]
  }, rx, ry, xRotation, !!arcFlag, !!sweepFlag, {
    x: segment.currentPoint[0],
    y: segment.currentPoint[1]
  }, ratio);
  var p2 = pointOnEllipticalArc({
    x: segment.prePoint[0],
    y: segment.prePoint[1]
  }, rx, ry, xRotation, !!arcFlag, !!sweepFlag, {
    x: segment.currentPoint[0],
    y: segment.currentPoint[1]
  }, sign ? ratio + 0.005 : ratio - 0.005);
  var xDist = p2.x - p1.x;
  var yDist = p2.y - p1.y;
  var dist = Math.sqrt(xDist * xDist + yDist * yDist);
  return {
    x: -xDist / dist,
    y: -yDist / dist
  };
}

// 向量长度
function vMag(v) {
  return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
}

// u.v/|u||v|，计算夹角的余弦值
function vRatio(u, v) {
  // 当存在一个向量的长度为 0 时，夹角也为 0，即夹角的余弦值为 1
  return vMag(u) * vMag(v) ? (u[0] * v[0] + u[1] * v[1]) / (vMag(u) * vMag(v)) : 1;
}

// 向量角度
function vAngle(u, v) {
  return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vRatio(u, v));
}
function getArcParams(startPoint, params) {
  var rx = params[1];
  var ry = params[2];
  var xRotation = mod(deg2rad(params[3]), Math.PI * 2);
  var arcFlag = params[4];
  var sweepFlag = params[5];
  // 弧形起点坐标
  var x1 = startPoint[0];
  var y1 = startPoint[1];
  // 弧形终点坐标
  var x2 = params[6];
  var y2 = params[7];
  var xp = Math.cos(xRotation) * (x1 - x2) / 2.0 + Math.sin(xRotation) * (y1 - y2) / 2.0;
  var yp = -1 * Math.sin(xRotation) * (x1 - x2) / 2.0 + Math.cos(xRotation) * (y1 - y2) / 2.0;
  var lambda = xp * xp / (rx * rx) + yp * yp / (ry * ry);
  if (lambda > 1) {
    rx *= Math.sqrt(lambda);
    ry *= Math.sqrt(lambda);
  }
  var diff = rx * rx * (yp * yp) + ry * ry * (xp * xp);
  var f = diff ? Math.sqrt((rx * rx * (ry * ry) - diff) / diff) : 1;
  if (arcFlag === sweepFlag) {
    f *= -1;
  }
  if (isNaN(f)) {
    f = 0;
  }

  // 旋转前的起点坐标，且当长半轴和短半轴的长度为 0 时，坐标按 (0, 0) 处理
  var cxp = ry ? f * rx * yp / ry : 0;
  var cyp = rx ? f * -ry * xp / rx : 0;

  // 椭圆圆心坐标
  var cx = (x1 + x2) / 2.0 + Math.cos(xRotation) * cxp - Math.sin(xRotation) * cyp;
  var cy = (y1 + y2) / 2.0 + Math.sin(xRotation) * cxp + Math.cos(xRotation) * cyp;

  // 起始点的单位向量
  var u = [(xp - cxp) / rx, (yp - cyp) / ry];
  // 终止点的单位向量
  var v = [(-1 * xp - cxp) / rx, (-1 * yp - cyp) / ry];
  // 计算起始点和圆心的连线，与 x 轴正方向的夹角
  var theta = vAngle([1, 0], u);

  // 计算圆弧起始点和终止点与椭圆圆心连线的夹角
  var dTheta = vAngle(u, v);
  if (vRatio(u, v) <= -1) {
    dTheta = Math.PI;
  }
  if (vRatio(u, v) >= 1) {
    dTheta = 0;
  }
  if (sweepFlag === 0 && dTheta > 0) {
    dTheta -= 2 * Math.PI;
  }
  if (sweepFlag === 1 && dTheta < 0) {
    dTheta += 2 * Math.PI;
  }
  return {
    cx: cx,
    cy: cy,
    // 弧形的起点和终点相同时，长轴和短轴的长度按 0 处理
    rx: isSamePoint(startPoint, [x2, y2]) ? 0 : rx,
    ry: isSamePoint(startPoint, [x2, y2]) ? 0 : ry,
    startAngle: theta,
    endAngle: theta + dTheta,
    xRotation: xRotation,
    arcFlag: arcFlag,
    sweepFlag: sweepFlag
  };
}
function commandsToPathString(commands, object, transform) {
  return commands.reduce(function (prev, cur) {
    var path = '';
    if (cur[0] === 'M' || cur[0] === 'L') {
      var p = vec3.fromValues(cur[1], cur[2], 0);
      if (transform) {
        vec3.transformMat4(p, p, transform);
      }
      path = "".concat(cur[0]).concat(p[0], ",").concat(p[1]);
    } else if (cur[0] === 'Z') {
      path = cur[0];
    } else if (cur[0] === 'C') {
      var p1 = vec3.fromValues(cur[1], cur[2], 0);
      var p2 = vec3.fromValues(cur[3], cur[4], 0);
      var p3 = vec3.fromValues(cur[5], cur[6], 0);
      if (transform) {
        vec3.transformMat4(p1, p1, transform);
        vec3.transformMat4(p2, p2, transform);
        vec3.transformMat4(p3, p3, transform);
      }
      path = "".concat(cur[0]).concat(p1[0], ",").concat(p1[1], ",").concat(p2[0], ",").concat(p2[1], ",").concat(p3[0], ",").concat(p3[1]);
    } else if (cur[0] === 'A') {
      var c = vec3.fromValues(cur[6], cur[7], 0);
      if (transform) {
        vec3.transformMat4(c, c, transform);
      }
      path = "".concat(cur[0]).concat(cur[1], ",").concat(cur[2], ",").concat(cur[3], ",").concat(cur[4], ",").concat(cur[5], ",").concat(c[0], ",").concat(c[1]);
    } else if (cur[0] === 'Q') {
      var _p = vec3.fromValues(cur[1], cur[2], 0);
      var _p2 = vec3.fromValues(cur[3], cur[4], 0);
      if (transform) {
        vec3.transformMat4(_p, _p, transform);
        vec3.transformMat4(_p2, _p2, transform);
      }
      path = "".concat(cur[0]).concat(cur[1], ",").concat(cur[2], ",").concat(cur[3], ",").concat(cur[4], "}");
    }
    return prev += path;
  }, '');
}
function lineToCommands(x1, y1, x2, y2) {
  return [['M', x1, y1], ['L', x2, y2]];
}
function ellipseToCommands(rx, ry, cx, cy) {
  var factor = (-1 + Math.sqrt(2)) / 3 * 4;
  var dx = rx * factor;
  var dy = ry * factor;
  var left = cx - rx;
  var right = cx + rx;
  var top = cy - ry;
  var bottom = cy + ry;
  return [['M', left, cy], ['C', left, cy - dy, cx - dx, top, cx, top], ['C', cx + dx, top, right, cy - dy, right, cy], ['C', right, cy + dy, cx + dx, bottom, cx, bottom], ['C', cx - dx, bottom, left, cy + dy, left, cy], ['Z']];
}
function polygonToCommands(points, closed) {
  var result = points.map(function (point, i) {
    return [i === 0 ? 'M' : 'L', point[0], point[1]];
  });
  if (closed) {
    result.push(['Z']);
  }
  return result;
}
function rectToCommands(width, height, x, y, radius) {
  // @see https://gist.github.com/danielpquinn/dd966af424030d47e476
  if (radius) {
    var _radius = _slicedToArray(radius, 4),
      tlr = _radius[0],
      trr = _radius[1],
      brr = _radius[2],
      blr = _radius[3];
    var signX = width > 0 ? 1 : -1;
    var signY = height > 0 ? 1 : -1;
    // sweep-flag @see https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths#arcs
    var sweepFlag = signX + signY !== 0 ? 1 : 0;
    return [['M', signX * tlr + x, y], ['L', width - signX * trr + x, y], trr ? ['A', trr, trr, 0, 0, sweepFlag, width + x, signY * trr + y] : null, ['L', width + x, height - signY * brr + y], brr ? ['A', brr, brr, 0, 0, sweepFlag, width + x - signX * brr, height + y] : null, ['L', x + signX * blr, height + y], blr ? ['A', blr, blr, 0, 0, sweepFlag, x, height + y - signY * blr] : null, ['L', x, signY * tlr + y], tlr ? ['A', tlr, tlr, 0, 0, sweepFlag, signX * tlr + x, y] : null, ['Z']].filter(function (command) {
      return command;
    });
  }
  return [['M', x, y], ['L', x + width, y], ['L', x + width, y + height], ['L', x, y + height], ['Z']];
}

/**
 * convert object to path, should account for:
 * * transform & origin
 * * lineWidth
 */
function convertToPath(object) {
  var transform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : object.getLocalTransform();
  var commands = [];
  switch (object.nodeName) {
    case Shape.LINE:
      var _parsedStyle = object.parsedStyle,
        _parsedStyle$x = _parsedStyle.x1,
        x1 = _parsedStyle$x === void 0 ? 0 : _parsedStyle$x,
        _parsedStyle$y = _parsedStyle.y1,
        y1 = _parsedStyle$y === void 0 ? 0 : _parsedStyle$y,
        _parsedStyle$x2 = _parsedStyle.x2,
        x2 = _parsedStyle$x2 === void 0 ? 0 : _parsedStyle$x2,
        _parsedStyle$y2 = _parsedStyle.y2,
        y2 = _parsedStyle$y2 === void 0 ? 0 : _parsedStyle$y2;
      commands = lineToCommands(x1, y1, x2, y2);
      break;
    case Shape.CIRCLE:
      {
        var _parsedStyle2 = object.parsedStyle,
          _parsedStyle2$r = _parsedStyle2.r,
          r = _parsedStyle2$r === void 0 ? 0 : _parsedStyle2$r,
          _parsedStyle2$cx = _parsedStyle2.cx,
          cx = _parsedStyle2$cx === void 0 ? 0 : _parsedStyle2$cx,
          _parsedStyle2$cy = _parsedStyle2.cy,
          cy = _parsedStyle2$cy === void 0 ? 0 : _parsedStyle2$cy;
        commands = ellipseToCommands(r, r, cx, cy);
        break;
      }
    case Shape.ELLIPSE:
      {
        var _parsedStyle3 = object.parsedStyle,
          _parsedStyle3$rx = _parsedStyle3.rx,
          rx = _parsedStyle3$rx === void 0 ? 0 : _parsedStyle3$rx,
          _parsedStyle3$ry = _parsedStyle3.ry,
          ry = _parsedStyle3$ry === void 0 ? 0 : _parsedStyle3$ry,
          _parsedStyle3$cx = _parsedStyle3.cx,
          _cx = _parsedStyle3$cx === void 0 ? 0 : _parsedStyle3$cx,
          _parsedStyle3$cy = _parsedStyle3.cy,
          _cy = _parsedStyle3$cy === void 0 ? 0 : _parsedStyle3$cy;
        commands = ellipseToCommands(rx, ry, _cx, _cy);
        break;
      }
    case Shape.POLYLINE:
    case Shape.POLYGON:
      var points = object.parsedStyle.points;
      commands = polygonToCommands(points.points, object.nodeName === Shape.POLYGON);
      break;
    case Shape.RECT:
      var _parsedStyle4 = object.parsedStyle,
        _parsedStyle4$width = _parsedStyle4.width,
        width = _parsedStyle4$width === void 0 ? 0 : _parsedStyle4$width,
        _parsedStyle4$height = _parsedStyle4.height,
        height = _parsedStyle4$height === void 0 ? 0 : _parsedStyle4$height,
        _parsedStyle4$x = _parsedStyle4.x,
        x = _parsedStyle4$x === void 0 ? 0 : _parsedStyle4$x,
        _parsedStyle4$y = _parsedStyle4.y,
        y = _parsedStyle4$y === void 0 ? 0 : _parsedStyle4$y,
        radius = _parsedStyle4.radius;
      var hasRadius = radius && radius.some(function (r) {
        return r !== 0;
      });
      commands = rectToCommands(width, height, x, y, hasRadius && radius.map(function (r) {
        return clamp(r, 0, Math.min(Math.abs(width) / 2, Math.abs(height) / 2));
      }));
      break;
    case Shape.PATH:
      var absolutePath = object.parsedStyle.d.absolutePath;
      commands = _toConsumableArray(absolutePath);
      break;
  }
  if (commands.length) {
    return commandsToPathString(commands, object, transform);
  }
}
function translatePathToString(absolutePath) {
  var startOffsetX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var startOffsetY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var endOffsetX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var endOffsetY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var newValue = absolutePath.map(function (params, i) {
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
        return "M ".concat(params[1] + startOffsetXTemp, ",").concat(params[2] + startOffsetYTemp);
      case 'L':
        return "L ".concat(params[1] + endOffsetXTemp, ",").concat(params[2] + endOffsetYTemp);
      case 'Q':
        return "Q ".concat(params[1], " ").concat(params[2], ",").concat(params[3] + endOffsetXTemp, " ").concat(params[4] + endOffsetYTemp);
      case 'C':
        return "C ".concat(params[1], " ").concat(params[2], ",").concat(params[3], " ").concat(params[4], ",").concat(params[5] + endOffsetXTemp, " ").concat(params[6] + endOffsetYTemp);
      case 'A':
        return "A ".concat(params[1], " ").concat(params[2], " ").concat(params[3], " ").concat(params[4], " ").concat(params[5], " ").concat(params[6], " ").concat(params[7]).concat(useEndOffset ? " L ".concat(params[6] + endOffsetX, ",").concat(params[7] + endOffsetY) : '');
      case 'Z':
        return 'Z';
      default:
        return null;
    }
  }).filter(function (item) {
    return item !== null;
  }).join(' ');
  if (~newValue.indexOf('NaN')) {
    return '';
  }
  return newValue;
}

var internalParsePath = function internalParsePath(path) {
  // empty path
  if (path === '' || Array.isArray(path) && path.length === 0) {
    return {
      absolutePath: [],
      hasArc: false,
      segments: [],
      polygons: [],
      polylines: [],
      curve: null,
      totalLength: 0,
      rect: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }
    };
  }
  var absolutePath;
  try {
    absolutePath = normalizePath(path);
  } catch (_unused) {
    absolutePath = normalizePath('');
    console.error("[g]: Invalid SVG Path definition: ".concat(path));
  }
  removeRedundantMCommand(absolutePath);
  var hasArc = hasArcOrBezier(absolutePath);
  var _extractPolygons = extractPolygons(absolutePath),
    polygons = _extractPolygons.polygons,
    polylines = _extractPolygons.polylines;

  // for later use
  var segments = path2Segments(absolutePath);

  // Only calculate bbox here since we don't need length now.
  var _getPathBBox = getPathBBox(segments, 0),
    x = _getPathBBox.x,
    y = _getPathBBox.y,
    width = _getPathBBox.width,
    height = _getPathBBox.height;
  return {
    absolutePath: absolutePath,
    hasArc: hasArc,
    segments: segments,
    polygons: polygons,
    polylines: polylines,
    // curve,
    // Delay the calculation of length.
    totalLength: 0,
    rect: {
      x: Number.isFinite(x) ? x : 0,
      y: Number.isFinite(y) ? y : 0,
      width: Number.isFinite(width) ? width : 0,
      height: Number.isFinite(height) ? height : 0
    }
  };
};
var memoizedParsePath = memoize(internalParsePath);
function parsePath(path) {
  return isString(path) ? memoizedParsePath(path) : internalParsePath(path);
}
function mergePaths(left, right, object) {
  var curve1 = left.curve;
  var curve2 = right.curve;
  if (!curve1 || curve1.length === 0) {
    // convert to curves to do morphing & picking later
    // @see http://thednp.github.io/kute.js/svgCubicMorph.html
    curve1 = path2Curve(left.absolutePath, false);
    left.curve = curve1;
  }
  if (!curve2 || curve2.length === 0) {
    curve2 = path2Curve(right.absolutePath, false);
    right.curve = curve2;
  }
  var curves = [curve1, curve2];
  if (curve1.length !== curve2.length) {
    curves = equalizeSegments(curve1, curve2);
  }
  var curve0 = getDrawDirection(curves[0]) !== getDrawDirection(curves[1]) ? reverseCurve(curves[0]) : clonePath(curves[0]);
  return [curve0, getRotatedCurve(curves[1], curve0), function (pathArray) {
    // need converting to path string?
    return pathArray;
  }];
}

/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/points
 *
 * @example
 * points="100,10 250,150 200,110"
 */
function parsePoints(pointsOrStr, object) {
  var points;
  if (isString(pointsOrStr)) {
    points = pointsOrStr.split(' ').map(function (pointStr) {
      var _pointStr$split = pointStr.split(','),
        _pointStr$split2 = _slicedToArray(_pointStr$split, 2),
        x = _pointStr$split2[0],
        y = _pointStr$split2[1];
      return [Number(x), Number(y)];
    });
  } else {
    points = pointsOrStr;
  }
  return {
    points: points,
    totalLength: 0,
    segments: []
  };
}
function mergePoints(left, right) {
  return [left.points, right.points, function (points) {
    return points;
  }];
}

// eg. { t: 'scale', d: [CSSUnitValue(1), CSSUnitValue(2)] }

var _ = null;
var TRANSFORM_REGEXP = /\s*(\w+)\(([^)]*)\)/g;
function cast(pattern) {
  return function (contents) {
    var i = 0;
    return pattern.map(function (x) {
      return x === _ ? contents[i++] : x;
    });
  };
}
function id(x) {
  return x;
}

// type: [argTypes, convertTo3D, convertTo2D]
// In the argument types string, lowercase characters represent optional arguments
var transformFunctions = {
  // @ts-ignore
  matrix: ['NNNNNN', [_, _, 0, 0, _, _, 0, 0, 0, 0, 1, 0, _, _, 0, 1], id],
  matrix3d: ['NNNNNNNNNNNNNNNN', id],
  rotate: ['A'],
  rotateX: ['A'],
  rotateY: ['A'],
  rotateZ: ['A'],
  rotate3d: ['NNNA'],
  perspective: ['L'],
  scale: ['Nn', cast([_, _, new CSSUnitValue(1)]), id],
  scaleX: ['N', cast([_, new CSSUnitValue(1), new CSSUnitValue(1)]), cast([_, new CSSUnitValue(1)])],
  scaleY: ['N', cast([new CSSUnitValue(1), _, new CSSUnitValue(1)]), cast([new CSSUnitValue(1), _])],
  scaleZ: ['N', cast([new CSSUnitValue(1), new CSSUnitValue(1), _])],
  scale3d: ['NNN', id],
  skew: ['Aa', null, id],
  skewX: ['A', null, cast([_, Odeg])],
  skewY: ['A', null, cast([Odeg, _])],
  translate: ['Tt', cast([_, _, Opx]), id],
  translateX: ['T', cast([_, Opx, Opx]), cast([_, Opx])],
  translateY: ['T', cast([Opx, _, Opx]), cast([Opx, _])],
  translateZ: ['L', cast([Opx, Opx, _])],
  translate3d: ['TTL', id]
};
function parseArrayTransform(transform) {
  var result = [];
  var length = transform.length;
  for (var i = 0; i < length; i++) {
    var item = transform[i];
    var name = item[0];
    var args = item.slice(1);
    // infer default value
    if (name === 'translate' || name === 'skew') {
      if (args.length === 1) args.push(0);
    } else if (name === 'scale') {
      if (args.length === 1) args.push(args[0]);
    }
    var functionData = transformFunctions[name];
    if (!functionData) return [];
    var parsedArgs = args.map(function (value) {
      return getOrCreateUnitValue(value);
    });
    result.push({
      t: name,
      d: parsedArgs
    });
  }
  return result;
}

/**
 * none
 * scale(1) scale(1, 2)
 * scaleX(1)
 */
function parseTransform(transform) {
  if (Array.isArray(transform)) {
    return parseArrayTransform(transform);
  }
  transform = (transform || 'none').trim();
  if (transform === 'none') {
    return [];
  }
  var result = [];
  var match;
  var prevLastIndex = 0;
  TRANSFORM_REGEXP.lastIndex = 0;
  while (match = TRANSFORM_REGEXP.exec(transform)) {
    if (match.index !== prevLastIndex) {
      return [];
    }
    prevLastIndex = match.index + match[0].length;
    var functionName = match[1]; // scale
    var functionData = transformFunctions[functionName]; // scale(1, 2)
    if (!functionData) {
      // invalid, eg. scale()
      return [];
    }
    var args = match[2].split(','); // 1,2
    var argTypes = functionData[0]; // Nn
    if (argTypes.length < args.length) {
      // scale(N, n)
      return [];
    }
    var parsedArgs = [];
    for (var i = 0; i < argTypes.length; i++) {
      var arg = args[i];
      var type = argTypes[i];
      var parsedArg = void 0;
      if (!arg) {
        // @ts-ignore
        parsedArg = {
          a: Odeg,
          n: parsedArgs[0],
          t: Opx
        }[type];
      } else {
        // @ts-ignore
        parsedArg = {
          A: function A(s) {
            return s.trim() === '0' ? Odeg : parseAngle(s);
          },
          N: parseNumber,
          T: parseLengthOrPercentage,
          L: parseLength
        }[type.toUpperCase()](arg);
      }
      if (parsedArg === undefined) {
        return [];
      }
      parsedArgs.push(parsedArg);
    }
    result.push({
      t: functionName,
      d: parsedArgs
    }); // { t: scale, d: [1, 2] }

    if (TRANSFORM_REGEXP.lastIndex === transform.length) {
      return result;
    }
  }
  return [];
}
function parseTransformUnmemoize(transform) {
  if (Array.isArray(transform)) {
    return parseArrayTransform(transform);
  }
  transform = (transform || 'none').trim();
  if (transform === 'none') {
    return [];
  }
  var result = [];
  var match;
  var prevLastIndex = 0;
  TRANSFORM_REGEXP.lastIndex = 0;
  while (match = TRANSFORM_REGEXP.exec(transform)) {
    if (match.index !== prevLastIndex) {
      return [];
    }
    prevLastIndex = match.index + match[0].length;
    var functionName = match[1]; // scale
    var functionData = transformFunctions[functionName]; // scale(1, 2)
    if (!functionData) {
      // invalid, eg. scale()
      return [];
    }
    var args = match[2].split(','); // 1,2
    var argTypes = functionData[0]; // Nn
    if (argTypes.length < args.length) {
      // scale(N, n)
      return [];
    }
    var parsedArgs = [];
    for (var i = 0; i < argTypes.length; i++) {
      var arg = args[i];
      var type = argTypes[i];
      var parsedArg = void 0;
      if (!arg) {
        // @ts-ignore
        parsedArg = {
          a: Odeg,
          n: parsedArgs[0],
          t: Opx
        }[type];
      } else {
        // @ts-ignore
        parsedArg = {
          A: function A(s) {
            return s.trim() === '0' ? Odeg : parseAngleUnmemoize(s);
          },
          N: parseNumberUnmemoize,
          T: parseLengthOrPercentageUnmemoize,
          L: parseLengthUnmemoize
        }[type.toUpperCase()](arg);
      }
      if (parsedArg === undefined) {
        return [];
      }
      parsedArgs.push(parsedArg);
    }
    result.push({
      t: functionName,
      d: parsedArgs
    }); // { t: scale, d: [1, 2] }

    if (TRANSFORM_REGEXP.lastIndex === transform.length) {
      return result;
    }
  }
  return [];
}
function convertItemToMatrix(item) {
  var x;
  var y;
  var z;
  var angle;
  switch (item.t) {
    case 'rotateX':
      angle = deg2rad(convertAngleUnit(item.d[0]));
      return [1, 0, 0, 0, 0, Math.cos(angle), Math.sin(angle), 0, 0, -Math.sin(angle), Math.cos(angle), 0, 0, 0, 0, 1];
    case 'rotateY':
      angle = deg2rad(convertAngleUnit(item.d[0]));
      return [Math.cos(angle), 0, -Math.sin(angle), 0, 0, 1, 0, 0, Math.sin(angle), 0, Math.cos(angle), 0, 0, 0, 0, 1];
    case 'rotate':
    case 'rotateZ':
      angle = deg2rad(convertAngleUnit(item.d[0]));
      return [Math.cos(angle), Math.sin(angle), 0, 0, -Math.sin(angle), Math.cos(angle), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    case 'rotate3d':
      x = item.d[0].value;
      y = item.d[1].value;
      z = item.d[2].value;
      angle = deg2rad(convertAngleUnit(item.d[3]));
      var sqrLength = x * x + y * y + z * z;
      if (sqrLength === 0) {
        x = 1;
        y = 0;
        z = 0;
      } else if (sqrLength !== 1) {
        var length = Math.sqrt(sqrLength);
        x /= length;
        y /= length;
        z /= length;
      }
      var s = Math.sin(angle / 2);
      var sc = s * Math.cos(angle / 2);
      var sq = s * s;
      return [1 - 2 * (y * y + z * z) * sq, 2 * (x * y * sq + z * sc), 2 * (x * z * sq - y * sc), 0, 2 * (x * y * sq - z * sc), 1 - 2 * (x * x + z * z) * sq, 2 * (y * z * sq + x * sc), 0, 2 * (x * z * sq + y * sc), 2 * (y * z * sq - x * sc), 1 - 2 * (x * x + y * y) * sq, 0, 0, 0, 0, 1];
    case 'scale':
      return [item.d[0].value, 0, 0, 0, 0, item.d[1].value, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    case 'scaleX':
      return [item.d[0].value, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    case 'scaleY':
      return [1, 0, 0, 0, 0, item.d[0].value, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    case 'scaleZ':
      return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, item.d[0].value, 0, 0, 0, 0, 1];
    case 'scale3d':
      return [item.d[0].value, 0, 0, 0, 0, item.d[1].value, 0, 0, 0, 0, item.d[2].value, 0, 0, 0, 0, 1];
    case 'skew':
      var xAngle = deg2rad(convertAngleUnit(item.d[0]));
      var yAngle = deg2rad(convertAngleUnit(item.d[1]));
      return [1, Math.tan(yAngle), 0, 0, Math.tan(xAngle), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    case 'skewX':
      angle = deg2rad(convertAngleUnit(item.d[0]));
      return [1, 0, 0, 0, Math.tan(angle), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    case 'skewY':
      angle = deg2rad(convertAngleUnit(item.d[0]));
      return [1, Math.tan(angle), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    case 'translate':
      // TODO: pass target
      x = convertPercentUnit(item.d[0], 0, null) || 0;
      y = convertPercentUnit(item.d[1], 0, null) || 0;
      return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, 0, 1];
    case 'translateX':
      x = convertPercentUnit(item.d[0], 0, null) || 0;
      return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, 0, 0, 1];
    case 'translateY':
      y = convertPercentUnit(item.d[0], 0, null) || 0;
      return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, y, 0, 1];
    case 'translateZ':
      z = convertPercentUnit(item.d[0], 0, null) || 0;
      return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, z, 1];
    case 'translate3d':
      x = convertPercentUnit(item.d[0], 0, null) || 0;
      y = convertPercentUnit(item.d[1], 0, null) || 0;
      z = convertPercentUnit(item.d[2], 0, null) || 0;
      return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
    case 'perspective':
      var t = convertPercentUnit(item.d[0], 0, null) || 0;
      var p = t ? -1 / t : 0;
      return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, p, 0, 0, 0, 1];
    case 'matrix':
      return [item.d[0].value, item.d[1].value, 0, 0, item.d[2].value, item.d[3].value, 0, 0, 0, 0, 1, 0, item.d[4].value, item.d[5].value, 0, 1];
    case 'matrix3d':
      return item.d.map(function (d) {
        return d.value;
      });
  }
}
function multiplyMatrices(a, b) {
  return [a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3], a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3], a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3], a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3], a[0] * b[4] + a[4] * b[5] + a[8] * b[6] + a[12] * b[7], a[1] * b[4] + a[5] * b[5] + a[9] * b[6] + a[13] * b[7], a[2] * b[4] + a[6] * b[5] + a[10] * b[6] + a[14] * b[7], a[3] * b[4] + a[7] * b[5] + a[11] * b[6] + a[15] * b[7], a[0] * b[8] + a[4] * b[9] + a[8] * b[10] + a[12] * b[11], a[1] * b[8] + a[5] * b[9] + a[9] * b[10] + a[13] * b[11], a[2] * b[8] + a[6] * b[9] + a[10] * b[10] + a[14] * b[11], a[3] * b[8] + a[7] * b[9] + a[11] * b[10] + a[15] * b[11], a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12] * b[15], a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13] * b[15], a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14] * b[15], a[3] * b[12] + a[7] * b[13] + a[11] * b[14] + a[15] * b[15]];
}
function convertToMatrix(transformList) {
  if (transformList.length === 0) {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  }
  return transformList.map(convertItemToMatrix).reduce(multiplyMatrices);
}
function makeMatrixDecomposition(transformList) {
  var translate = [0, 0, 0];
  var scale = [1, 1, 1];
  var skew = [0, 0, 0];
  var perspective = [0, 0, 0, 1];
  var quaternion = [0, 0, 0, 1];
  decomposeMat4(
  // @ts-ignore
  convertToMatrix(transformList), translate, scale, skew, perspective, quaternion);
  return [[translate, scale, skew, quaternion, perspective]];
}
var composeMatrix = function () {
  function multiply(a, b) {
    var result = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        for (var k = 0; k < 4; k++) {
          result[i][j] += b[i][k] * a[k][j];
        }
      }
    }
    return result;
  }
  function is2D(m) {
    return m[0][2] === 0 && m[0][3] === 0 && m[1][2] === 0 && m[1][3] === 0 && m[2][0] === 0 && m[2][1] === 0 && m[2][2] === 1 && m[2][3] === 0 && m[3][2] === 0 && m[3][3] === 1;
  }
  function composeMatrix(translate, scale, skew, quat, perspective) {
    var matrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
    for (var i = 0; i < 4; i++) {
      matrix[i][3] = perspective[i];
    }
    for (var _i = 0; _i < 3; _i++) {
      for (var j = 0; j < 3; j++) {
        matrix[3][_i] += translate[j] * matrix[j][_i];
      }
    }
    var x = quat[0];
    var y = quat[1];
    var z = quat[2];
    var w = quat[3];
    var rotMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
    rotMatrix[0][0] = 1 - 2 * (y * y + z * z);
    rotMatrix[0][1] = 2 * (x * y - z * w);
    rotMatrix[0][2] = 2 * (x * z + y * w);
    rotMatrix[1][0] = 2 * (x * y + z * w);
    rotMatrix[1][1] = 1 - 2 * (x * x + z * z);
    rotMatrix[1][2] = 2 * (y * z - x * w);
    rotMatrix[2][0] = 2 * (x * z - y * w);
    rotMatrix[2][1] = 2 * (y * z + x * w);
    rotMatrix[2][2] = 1 - 2 * (x * x + y * y);
    matrix = multiply(matrix, rotMatrix);
    var temp = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
    if (skew[2]) {
      temp[2][1] = skew[2];
      matrix = multiply(matrix, temp);
    }
    if (skew[1]) {
      temp[2][1] = 0;
      temp[2][0] = skew[0];
      matrix = multiply(matrix, temp);
    }
    if (skew[0]) {
      temp[2][0] = 0;
      temp[1][0] = skew[0];
      matrix = multiply(matrix, temp);
    }
    for (var _i2 = 0; _i2 < 3; _i2++) {
      for (var _j = 0; _j < 3; _j++) {
        matrix[_i2][_j] *= scale[_i2];
      }
    }
    if (is2D(matrix)) {
      return [matrix[0][0], matrix[0][1], matrix[1][0], matrix[1][1], matrix[3][0], matrix[3][1]];
    }
    return matrix[0].concat(matrix[1], matrix[2], matrix[3]);
  }
  return composeMatrix;
}();
function numberToLongString(x) {
  return x.toFixed(6).replace('.000000', '');
}
function mergeMatrices(left, right) {
  var leftArgs;
  var rightArgs;
  // @ts-ignore
  if (left.decompositionPair !== right) {
    // @ts-ignore
    left.decompositionPair = right;
    // @ts-ignore
    leftArgs = makeMatrixDecomposition(left);
  }
  // @ts-ignore
  if (right.decompositionPair !== left) {
    // @ts-ignore
    right.decompositionPair = left;
    // @ts-ignore
    rightArgs = makeMatrixDecomposition(right);
  }
  if (leftArgs[0] === null || rightArgs[0] === null) return [
  // @ts-ignore
  [false],
  // @ts-ignore
  [true],
  // @ts-ignore
  function (x) {
    return x ? right[0].d : left[0].d;
  }];
  leftArgs[0].push(0);
  rightArgs[0].push(1);
  return [leftArgs, rightArgs,
  // @ts-ignore
  function (list) {
    // @ts-ignore
    var q = quat(leftArgs[0][3], rightArgs[0][3], list[5]);
    var mat = composeMatrix(list[0], list[1], list[2], q, list[4]);
    var stringifiedArgs = mat.map(numberToLongString).join(',');
    return stringifiedArgs;
  }];
}
function dot(v1, v2) {
  var result = 0;
  for (var i = 0; i < v1.length; i++) {
    result += v1[i] * v2[i];
  }
  return result;
}
function quat(fromQ, toQ, f) {
  var product = dot(fromQ, toQ);
  product = clamp(product, -1.0, 1.0);
  var quat = [];
  if (product === 1.0) {
    quat = fromQ;
  } else {
    var theta = Math.acos(product);
    var w = Math.sin(f * theta) * 1 / Math.sqrt(1 - product * product);
    for (var i = 0; i < 4; i++) {
      quat.push(fromQ[i] * (Math.cos(f * theta) - product * w) + toQ[i] * w);
    }
  }
  return quat;
}

// scaleX/Y/Z -> scale
function typeTo2D(type) {
  return type.replace(/[XY]/, '');
}

// scaleX/Y/Z -> scale3d
function typeTo3D(type) {
  return type.replace(/(X|Y|Z|3d)?$/, '3d');
}
var isMatrixOrPerspective = function isMatrixOrPerspective(lt, rt) {
  return lt === 'perspective' && rt === 'perspective' || (lt === 'matrix' || lt === 'matrix3d') && (rt === 'matrix' || rt === 'matrix3d');
};
function mergeTransforms(left, right, target) {
  var flipResults = false;
  // padding empty transform, eg. merge 'scale(10)' with 'none' -> scale(1)
  if (!left.length || !right.length) {
    if (!left.length) {
      flipResults = true;
      left = right;
      right = [];
    }
    var _loop = function _loop() {
      var _left$i = left[i],
        type = _left$i.t,
        args = _left$i.d;
      // none -> scale(1)/translateX(0)
      var defaultValue = type.substring(0, 5) === 'scale' ? 1 : 0;
      right.push({
        t: type,
        d: args.map(function (arg) {
          if (typeof arg === 'number') {
            return getOrCreateUnitValue(defaultValue);
          }
          return getOrCreateUnitValue(defaultValue, arg.unit);
          //   {
          //     unit: arg.unit,
          //     value: defaultValue,
          //   };
        })
      });
    };
    for (var i = 0; i < left.length; i++) {
      _loop();
    }
  }
  var leftResult = [];
  var rightResult = [];
  var types = [];

  // merge matrix() with matrix3d()
  if (left.length !== right.length) {
    var merged = mergeMatrices(left, right);
    // @ts-ignore
    leftResult = [merged[0]];
    // @ts-ignore
    rightResult = [merged[1]];
    types = [['matrix', [merged[2]]]];
  } else {
    for (var _i3 = 0; _i3 < left.length; _i3++) {
      var leftType = left[_i3].t;
      var rightType = right[_i3].t;
      var leftArgs = left[_i3].d;
      var rightArgs = right[_i3].d;
      var leftFunctionData = transformFunctions[leftType];
      var rightFunctionData = transformFunctions[rightType];
      var type = void 0;
      if (isMatrixOrPerspective(leftType, rightType)) {
        var _merged = mergeMatrices([left[_i3]], [right[_i3]]);
        // @ts-ignore
        leftResult.push(_merged[0]);
        // @ts-ignore
        rightResult.push(_merged[1]);
        types.push(['matrix', [_merged[2]]]);
        continue;
      } else if (leftType === rightType) {
        type = leftType;
      } else if (leftFunctionData[2] && rightFunctionData[2] && typeTo2D(leftType) === typeTo2D(rightType)) {
        type = typeTo2D(leftType);
        // @ts-ignore
        leftArgs = leftFunctionData[2](leftArgs);
        // @ts-ignore
        rightArgs = rightFunctionData[2](rightArgs);
      } else if (leftFunctionData[1] && rightFunctionData[1] && typeTo3D(leftType) === typeTo3D(rightType)) {
        type = typeTo3D(leftType);
        // @ts-ignore
        leftArgs = leftFunctionData[1](leftArgs);
        // @ts-ignore
        rightArgs = rightFunctionData[1](rightArgs);
      } else {
        var _merged2 = mergeMatrices(left, right);
        // @ts-ignore
        leftResult = [_merged2[0]];
        // @ts-ignore
        rightResult = [_merged2[1]];
        types = [['matrix', [_merged2[2]]]];
        break;
      }
      var leftArgsCopy = [];
      var rightArgsCopy = [];
      var stringConversions = [];
      for (var j = 0; j < leftArgs.length; j++) {
        // const merge = leftArgs[j].unit === UnitType.kNumber ? mergeDimensions : mergeDimensions;
        var _merged3 = mergeDimensions(leftArgs[j], rightArgs[j], target, false, j);
        leftArgsCopy[j] = _merged3[0];
        rightArgsCopy[j] = _merged3[1];
        stringConversions.push(_merged3[2]);
      }
      leftResult.push(leftArgsCopy);
      rightResult.push(rightArgsCopy);
      types.push([type, stringConversions]);
    }
  }
  if (flipResults) {
    var tmp = leftResult;
    leftResult = rightResult;
    rightResult = tmp;
  }
  return [leftResult, rightResult, function (list) {
    return list.map(function (args, i) {
      var stringifiedArgs = args.map(function (arg, j) {
        return types[i][1][j](arg);
      }).join(',');
      if (types[i][0] === 'matrix' && stringifiedArgs.split(',').length === 16) {
        types[i][0] = 'matrix3d';
      }
      if (types[i][0] === 'matrix3d' && stringifiedArgs.split(',').length === 6) {
        types[i][0] = 'matrix';
      }
      return "".concat(types[i][0], "(").concat(stringifiedArgs, ")");
    }).join(' ');
  }];
}

/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin
 * eg. 'center' 'top left' '50px 50px'
 */
var parseTransformOrigin = memoize(function (value) {
  if (isString(value)) {
    if (value === 'text-anchor') {
      return [getOrCreateUnitValue(0, 'px'), getOrCreateUnitValue(0, 'px')];
    }
    var values = value.split(' ');
    if (values.length === 1) {
      if (values[0] === 'top' || values[0] === 'bottom') {
        // 'top' -> 'center top'
        values[1] = values[0];
        values[0] = 'center';
      } else {
        // '50px' -> '50px center'
        values[1] = 'center';
      }
    }
    if (values.length !== 2) {
      return null;
    }

    // eg. center bottom
    return [parseLengthOrPercentage(convertKeyword2Percent(values[0])), parseLengthOrPercentage(convertKeyword2Percent(values[1]))];
  }
  return [getOrCreateUnitValue(value[0] || 0, 'px'), getOrCreateUnitValue(value[1] || 0, 'px')];
});
function convertKeyword2Percent(keyword) {
  if (keyword === 'center') {
    return '50%';
  }
  if (keyword === 'left' || keyword === 'top') {
    return '0%';
  }
  if (keyword === 'right' || keyword === 'bottom') {
    return '100%';
  }
  return keyword;
}

/**
 * Blink used them in code generation(css_properties.json5)
 */
var BUILT_IN_PROPERTIES = [{
  /**
   * used in CSS Layout API
   * eg. `display: 'flex'`
   */
  n: 'display',
  k: ['none']
}, {
  /**
   * range [0.0, 1.0]
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
   */
  n: 'opacity',
  "int": true,
  inh: true,
  d: '1',
  syntax: PropertySyntax.OPACITY_VALUE
}, {
  /**
   * inheritable, range [0.0, 1.0]
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-opacity
   * @see https://svgwg.org/svg2-draft/painting.html#FillOpacity
   */
  n: 'fillOpacity',
  "int": true,
  inh: true,
  d: '1',
  syntax: PropertySyntax.OPACITY_VALUE
}, {
  /**
   * inheritable, range [0.0, 1.0]
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-opacity
   * @see https://svgwg.org/svg2-draft/painting.html#StrokeOpacity
   */
  n: 'strokeOpacity',
  "int": true,
  inh: true,
  d: '1',
  syntax: PropertySyntax.OPACITY_VALUE
}, {
  /**
   * background-color is not inheritable
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes
   */
  n: 'fill',
  "int": true,
  k: ['none'],
  d: 'none',
  syntax: PropertySyntax.PAINT
}, {
  n: 'fillRule',
  k: ['nonzero', 'evenodd'],
  d: 'nonzero'
},
/**
 * default to none
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke#usage_notes
 */
{
  n: 'stroke',
  "int": true,
  k: ['none'],
  d: 'none',
  syntax: PropertySyntax.PAINT,
  /**
   * Stroke 'none' won't affect geometry but others will.
   */
  l: true
}, {
  n: 'shadowType',
  k: ['inner', 'outer', 'both'],
  d: 'outer',
  l: true
}, {
  n: 'shadowColor',
  "int": true,
  syntax: PropertySyntax.COLOR
}, {
  n: 'shadowOffsetX',
  "int": true,
  l: true,
  d: '0',
  syntax: PropertySyntax.LENGTH_PERCENTAGE
}, {
  n: 'shadowOffsetY',
  "int": true,
  l: true,
  d: '0',
  syntax: PropertySyntax.LENGTH_PERCENTAGE
}, {
  n: 'shadowBlur',
  "int": true,
  l: true,
  d: '0',
  syntax: PropertySyntax.SHADOW_BLUR
}, {
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width
   */
  n: 'lineWidth',
  "int": true,
  inh: true,
  d: '1',
  l: true,
  a: ['strokeWidth'],
  syntax: PropertySyntax.LENGTH_PERCENTAGE
}, {
  n: 'increasedLineWidthForHitTesting',
  inh: true,
  d: '0',
  l: true,
  syntax: PropertySyntax.LENGTH_PERCENTAGE
}, {
  n: 'lineJoin',
  inh: true,
  l: true,
  a: ['strokeLinejoin'],
  k: ['miter', 'bevel', 'round'],
  d: 'miter'
}, {
  n: 'lineCap',
  inh: true,
  l: true,
  a: ['strokeLinecap'],
  k: ['butt', 'round', 'square'],
  d: 'butt'
}, {
  n: 'lineDash',
  "int": true,
  inh: true,
  k: ['none'],
  a: ['strokeDasharray'],
  syntax: PropertySyntax.LENGTH_PERCENTAGE_12
}, {
  n: 'lineDashOffset',
  "int": true,
  inh: true,
  d: '0',
  a: ['strokeDashoffset'],
  syntax: PropertySyntax.LENGTH_PERCENTAGE
}, {
  n: 'offsetPath',
  syntax: PropertySyntax.DEFINED_PATH
}, {
  n: 'offsetDistance',
  "int": true,
  syntax: PropertySyntax.OFFSET_DISTANCE
}, {
  n: 'dx',
  "int": true,
  l: true,
  d: '0',
  syntax: PropertySyntax.LENGTH_PERCENTAGE
}, {
  n: 'dy',
  "int": true,
  l: true,
  d: '0',
  syntax: PropertySyntax.LENGTH_PERCENTAGE
}, {
  n: 'zIndex',
  ind: true,
  "int": true,
  d: '0',
  k: ['auto'],
  syntax: PropertySyntax.Z_INDEX
}, {
  n: 'visibility',
  k: ['visible', 'hidden'],
  ind: true,
  inh: true,
  /**
   * support interpolation
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/visibility#interpolation
   */
  "int": true,
  d: 'visible'
}, {
  n: 'pointerEvents',
  inh: true,
  k: ['none', 'auto', 'stroke', 'fill', 'painted', 'visible', 'visiblestroke', 'visiblefill', 'visiblepainted',
  // 'bounding-box',
  'all'],
  d: 'auto'
}, {
  n: 'filter',
  ind: true,
  l: true,
  k: ['none'],
  d: 'none',
  syntax: PropertySyntax.FILTER
}, {
  n: 'clipPath',
  syntax: PropertySyntax.DEFINED_PATH
}, {
  n: 'textPath',
  syntax: PropertySyntax.DEFINED_PATH
}, {
  n: 'textPathSide',
  k: ['left', 'right'],
  d: 'left'
}, {
  n: 'textPathStartOffset',
  l: true,
  d: '0',
  syntax: PropertySyntax.LENGTH_PERCENTAGE
}, {
  n: 'transform',
  p: 100,
  "int": true,
  k: ['none'],
  d: 'none',
  syntax: PropertySyntax.TRANSFORM
}, {
  n: 'transformOrigin',
  p: 100,
  d: '0 0',
  // // int: true,
  // d: (nodeName: string) => {
  //   if (nodeName === Shape.CIRCLE || nodeName === Shape.ELLIPSE) {
  //     return 'center';
  //   }
  //   if (nodeName === Shape.TEXT) {
  //     return 'text-anchor';
  //   }
  //   return 'left top';
  // },
  l: true,
  syntax: PropertySyntax.TRANSFORM_ORIGIN
}, {
  n: 'cx',
  "int": true,
  l: true,
  d: '0',
  syntax: PropertySyntax.COORDINATE
}, {
  n: 'cy',
  "int": true,
  l: true,
  d: '0',
  syntax: PropertySyntax.COORDINATE
}, {
  n: 'cz',
  "int": true,
  l: true,
  d: '0',
  syntax: PropertySyntax.COORDINATE
}, {
  n: 'r',
  "int": true,
  l: true,
  d: '0',
  syntax: PropertySyntax.LENGTH_PERCENTAGE
}, {
  n: 'rx',
  "int": true,
  l: true,
  d: '0',
  syntax: PropertySyntax.LENGTH_PERCENTAGE
}, {
  n: 'ry',
  "int": true,
  l: true,
  d: '0',
  syntax: PropertySyntax.LENGTH_PERCENTAGE
},
// Rect Image Group
{
  // x in local space
  n: 'x',
  "int": true,
  l: true,
  d: '0',
  syntax: PropertySyntax.COORDINATE
}, {
  // y in local space
  n: 'y',
  "int": true,
  l: true,
  d: '0',
  syntax: PropertySyntax.COORDINATE
}, {
  // z in local space
  n: 'z',
  "int": true,
  l: true,
  d: '0',
  syntax: PropertySyntax.COORDINATE
}, {
  n: 'width',
  "int": true,
  l: true,
  /**
   * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/width
   */
  k: ['auto', 'fit-content', 'min-content', 'max-content'],
  d: '0',
  syntax: PropertySyntax.LENGTH_PERCENTAGE
}, {
  n: 'height',
  "int": true,
  l: true,
  /**
   * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/height
   */
  k: ['auto', 'fit-content', 'min-content', 'max-content'],
  d: '0',
  syntax: PropertySyntax.LENGTH_PERCENTAGE
}, {
  n: 'radius',
  "int": true,
  l: true,
  d: '0',
  syntax: PropertySyntax.LENGTH_PERCENTAGE_14
},
// Line
{
  n: 'x1',
  "int": true,
  l: true,
  syntax: PropertySyntax.COORDINATE
}, {
  n: 'y1',
  "int": true,
  l: true,
  syntax: PropertySyntax.COORDINATE
}, {
  n: 'z1',
  "int": true,
  l: true,
  syntax: PropertySyntax.COORDINATE
}, {
  n: 'x2',
  "int": true,
  l: true,
  syntax: PropertySyntax.COORDINATE
}, {
  n: 'y2',
  "int": true,
  l: true,
  syntax: PropertySyntax.COORDINATE
}, {
  n: 'z2',
  "int": true,
  l: true,
  syntax: PropertySyntax.COORDINATE
},
// Path
{
  n: 'd',
  "int": true,
  l: true,
  d: '',
  syntax: PropertySyntax.PATH,
  p: 50
},
// Polyline & Polygon
{
  n: 'points',
  /**
   * support interpolation
   */
  "int": true,
  l: true,
  syntax: PropertySyntax.LIST_OF_POINTS,
  p: 50
},
// Text
{
  n: 'text',
  l: true,
  d: '',
  syntax: PropertySyntax.TEXT,
  p: 50
}, {
  n: 'textTransform',
  l: true,
  inh: true,
  k: ['capitalize', 'uppercase', 'lowercase', 'none'],
  d: 'none',
  syntax: PropertySyntax.TEXT_TRANSFORM,
  p: 51 // it must get parsed after text
}, {
  n: 'font',
  l: true
}, {
  n: 'fontSize',
  "int": true,
  inh: true,
  /**
   * @see https://www.w3schools.com/css/css_font_size.asp
   */
  d: '16px',
  l: true,
  syntax: PropertySyntax.LENGTH_PERCENTAGE
}, {
  n: 'fontFamily',
  l: true,
  inh: true,
  d: 'sans-serif'
}, {
  n: 'fontStyle',
  l: true,
  inh: true,
  k: ['normal', 'italic', 'oblique'],
  d: 'normal'
}, {
  n: 'fontWeight',
  l: true,
  inh: true,
  k: ['normal', 'bold', 'bolder', 'lighter'],
  d: 'normal'
}, {
  n: 'fontVariant',
  l: true,
  inh: true,
  k: ['normal', 'small-caps'],
  d: 'normal'
}, {
  n: 'lineHeight',
  l: true,
  syntax: PropertySyntax.LENGTH,
  "int": true,
  d: '0'
}, {
  n: 'letterSpacing',
  l: true,
  syntax: PropertySyntax.LENGTH,
  "int": true,
  d: '0'
}, {
  n: 'miterLimit',
  l: true,
  syntax: PropertySyntax.NUMBER,
  d: function d(nodeName) {
    if (nodeName === Shape.PATH || nodeName === Shape.POLYGON || nodeName === Shape.POLYLINE) {
      return '4';
    }
    return '10';
  }
}, {
  n: 'wordWrap',
  l: true
}, {
  n: 'wordWrapWidth',
  l: true
}, {
  n: 'maxLines',
  l: true
}, {
  n: 'textOverflow',
  l: true,
  d: 'clip'
}, {
  n: 'leading',
  l: true
}, {
  n: 'textBaseline',
  l: true,
  inh: true,
  k: ['top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom'],
  d: 'alphabetic'
}, {
  n: 'textAlign',
  l: true,
  inh: true,
  k: ['start', 'center', 'middle', 'end', 'left', 'right'],
  d: 'start'
},
// {
//   n: 'whiteSpace',
//   l: true,
// },
{
  n: 'markerStart',
  syntax: PropertySyntax.MARKER
}, {
  n: 'markerEnd',
  syntax: PropertySyntax.MARKER
}, {
  n: 'markerMid',
  syntax: PropertySyntax.MARKER
}, {
  n: 'markerStartOffset',
  syntax: PropertySyntax.LENGTH,
  l: true,
  "int": true,
  d: '0'
}, {
  n: 'markerEndOffset',
  syntax: PropertySyntax.LENGTH,
  l: true,
  "int": true,
  d: '0'
}];
var GEOMETRY_ATTRIBUTE_NAMES = new Set(BUILT_IN_PROPERTIES.filter(function (n) {
  return !!n.l;
}).map(function (n) {
  return n.n;
}));
var propertyMetadataCache = {};
var DefaultStyleValueRegistry = /*#__PURE__*/function () {
  function DefaultStyleValueRegistry(runtime) {
    var _this = this;
    _classCallCheck(this, DefaultStyleValueRegistry);
    this.runtime = runtime;
    BUILT_IN_PROPERTIES.forEach(function (property) {
      _this.registerMetadata(property);
    });
  }
  return _createClass(DefaultStyleValueRegistry, [{
    key: "registerMetadata",
    value: function registerMetadata(metadata) {
      [metadata.n].concat(_toConsumableArray(metadata.a || [])).forEach(function (name) {
        propertyMetadataCache[name] = metadata;
      });
    }
  }, {
    key: "getPropertySyntax",
    value: function getPropertySyntax(syntax) {
      return this.runtime.CSSPropertySyntaxFactory[syntax];
    }

    /**
     * * parse value, eg.
     * fill: 'red' => CSSRGB
     * translateX: '10px' => CSSUnitValue { unit: 'px', value: 10 }
     * fontSize: '2em' => { unit: 'px', value: 32 }
     *
     * * calculate used value
     * * post process
     */
  }, {
    key: "processProperties",
    value: function processProperties(object, attributes) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        skipUpdateAttribute: false,
        skipParse: false,
        forceUpdateGeometry: false,
        usedAttributes: [],
        memoize: true
      };
      Object.assign(object.attributes, attributes);

      // clipPath
      var oldClipPath = object.parsedStyle.clipPath;
      var oldOffsetPath = object.parsedStyle.offsetPath;
      assignParsedStyle(object, attributes);
      var needUpdateGeometry = !!options.forceUpdateGeometry;
      if (!needUpdateGeometry) {
        for (var i in attributes) {
          if (GEOMETRY_ATTRIBUTE_NAMES.has(i)) {
            needUpdateGeometry = true;
            break;
          }
        }
      }
      var list = getParsedStyleListOf(object);
      if (list.has('fill') && attributes.fill) {
        object.parsedStyle.fill = parseColor(attributes.fill);
      }
      if (list.has('stroke') && attributes.stroke) {
        object.parsedStyle.stroke = parseColor(attributes.stroke);
      }
      if (list.has('shadowColor') && attributes.shadowColor) {
        object.parsedStyle.shadowColor = parseColor(attributes.shadowColor);
      }
      if (list.has('filter') && attributes.filter) {
        object.parsedStyle.filter = parseFilter(attributes.filter);
      }
      // Rect
      // @ts-ignore
      if (list.has('radius') && !isNil(attributes.radius)) {
        // @ts-ignore
        object.parsedStyle.radius = parseDimensionArrayFormat(
        // @ts-ignore
        attributes.radius, 4);
      }
      // Polyline
      if (list.has('lineDash') && !isNil(attributes.lineDash)) {
        // dom标准自动转化奇数长度数组,webgl需要手动处理
        object.parsedStyle.lineDash = parseDimensionArrayFormat(attributes.lineDash, 'even');
      }
      // @ts-ignore
      if (list.has('points') && attributes.points) {
        // @ts-ignore
        object.parsedStyle.points = parsePoints(attributes.points);
      }
      // Path
      // @ts-ignore
      if (list.has('d') && attributes.d === '') {
        object.parsedStyle.d = _objectSpread({}, EMPTY_PARSED_PATH);
      }
      // @ts-ignore
      if (list.has('d') && attributes.d) {
        object.parsedStyle.d = parsePath(
        // @ts-ignore
        attributes.d);
      }
      // Text
      if (list.has('textTransform') && attributes.textTransform) {
        this.runtime.CSSPropertySyntaxFactory[PropertySyntax.TEXT_TRANSFORM].calculator(null, null, {
          value: attributes.textTransform
        }, object, null);
      }
      if (list.has('clipPath') && !isUndefined(attributes.clipPath)) {
        this.runtime.CSSPropertySyntaxFactory[PropertySyntax.DEFINED_PATH].calculator('clipPath', oldClipPath, attributes.clipPath, object, this.runtime);
      }
      if (list.has('offsetPath') && attributes.offsetPath) {
        this.runtime.CSSPropertySyntaxFactory[PropertySyntax.DEFINED_PATH].calculator('offsetPath', oldOffsetPath, attributes.offsetPath, object, this.runtime);
      }
      if (list.has('transform') && attributes.transform) {
        object.parsedStyle.transform = parseTransform(attributes.transform);
      }
      if (list.has('transformOrigin') && attributes.transformOrigin) {
        object.parsedStyle.transformOrigin = parseTransformOrigin(attributes.transformOrigin);
      }
      // Marker
      // @ts-ignore
      if (list.has('markerStart') && attributes.markerStart) {
        object.parsedStyle.markerStart = this.runtime.CSSPropertySyntaxFactory[PropertySyntax.MARKER].calculator(null,
        // @ts-ignore
        attributes.markerStart,
        // @ts-ignore
        attributes.markerStart, null, null);
      }
      // @ts-ignore
      if (list.has('markerEnd') && attributes.markerEnd) {
        object.parsedStyle.markerEnd = this.runtime.CSSPropertySyntaxFactory[PropertySyntax.MARKER].calculator(null,
        // @ts-ignore
        attributes.markerEnd,
        // @ts-ignore
        attributes.markerEnd, null, null);
      }
      // @ts-ignore
      if (list.has('markerMid') && attributes.markerMid) {
        object.parsedStyle.markerMid = this.runtime.CSSPropertySyntaxFactory[PropertySyntax.MARKER].calculator('',
        // @ts-ignore
        attributes.markerMid,
        // @ts-ignore
        attributes.markerMid, null, null);
      }
      if (list.has('zIndex') && !isNil(attributes.zIndex)) {
        this.runtime.CSSPropertySyntaxFactory[PropertySyntax.Z_INDEX].postProcessor(object);
      }
      if (list.has('offsetDistance') && !isNil(attributes.offsetDistance)) {
        this.runtime.CSSPropertySyntaxFactory[PropertySyntax.OFFSET_DISTANCE].postProcessor(object);
      }
      if (list.has('transform') && attributes.transform) {
        this.runtime.CSSPropertySyntaxFactory[PropertySyntax.TRANSFORM].postProcessor(object);
      }
      if (list.has('transformOrigin') && attributes.transformOrigin) {
        this.runtime.CSSPropertySyntaxFactory[PropertySyntax.TRANSFORM_ORIGIN].postProcessor(object);
      }
      if (needUpdateGeometry) {
        object.dirty(true, true);
        if (!options.forceUpdateGeometry) {
          this.runtime.sceneGraphService.dirtyToRoot(object);
        }
      }
    }

    /**
     * update geometry when relative props changed,
     * eg. r of Circle, width/height of Rect
     */
  }, {
    key: "updateGeometry",
    value: function updateGeometry(object) {
      var nodeName = object.nodeName;
      var geometryUpdater = this.runtime.geometryUpdaterFactory[nodeName];
      if (geometryUpdater) {
        var geometry = object.geometry;
        if (!geometry.contentBounds) {
          geometry.contentBounds = new AABB();
        }
        if (!geometry.renderBounds) {
          geometry.renderBounds = new AABB();
        }
        var parsedStyle = object.parsedStyle;
        var _geometryUpdater$upda = geometryUpdater.update(parsedStyle, object),
          _geometryUpdater$upda2 = _geometryUpdater$upda.cx,
          cx = _geometryUpdater$upda2 === void 0 ? 0 : _geometryUpdater$upda2,
          _geometryUpdater$upda3 = _geometryUpdater$upda.cy,
          cy = _geometryUpdater$upda3 === void 0 ? 0 : _geometryUpdater$upda3,
          _geometryUpdater$upda4 = _geometryUpdater$upda.cz,
          cz = _geometryUpdater$upda4 === void 0 ? 0 : _geometryUpdater$upda4,
          _geometryUpdater$upda5 = _geometryUpdater$upda.hwidth,
          hwidth = _geometryUpdater$upda5 === void 0 ? 0 : _geometryUpdater$upda5,
          _geometryUpdater$upda6 = _geometryUpdater$upda.hheight,
          hheight = _geometryUpdater$upda6 === void 0 ? 0 : _geometryUpdater$upda6,
          _geometryUpdater$upda7 = _geometryUpdater$upda.hdepth,
          hdepth = _geometryUpdater$upda7 === void 0 ? 0 : _geometryUpdater$upda7;
        // init with content box
        var halfExtents = [Math.abs(hwidth), Math.abs(hheight), hdepth];
        // anchor is center by default, don't account for lineWidth here
        var stroke = parsedStyle.stroke,
          _parsedStyle$lineWidt = parsedStyle.lineWidth,
          lineWidth = _parsedStyle$lineWidt === void 0 ? 1 : _parsedStyle$lineWidt,
          _parsedStyle$increase = parsedStyle.increasedLineWidthForHitTesting,
          increasedLineWidthForHitTesting = _parsedStyle$increase === void 0 ? 0 : _parsedStyle$increase,
          _parsedStyle$shadowTy = parsedStyle.shadowType,
          shadowType = _parsedStyle$shadowTy === void 0 ? 'outer' : _parsedStyle$shadowTy,
          shadowColor = parsedStyle.shadowColor,
          _parsedStyle$filter = parsedStyle.filter,
          filter = _parsedStyle$filter === void 0 ? [] : _parsedStyle$filter,
          transformOrigin = parsedStyle.transformOrigin;
        var center = [cx, cy, cz];
        // update geometry's AABB
        geometry.contentBounds.update(center, halfExtents);
        // @see https://github.molgen.mpg.de/git-mirror/cairo/blob/master/src/cairo-stroke-style.c#L97..L128
        var expansion = nodeName === Shape.POLYLINE || nodeName === Shape.POLYGON || nodeName === Shape.PATH ? Math.SQRT2 : 0.5;
        // append border only if stroke existed
        var hasStroke = stroke && !stroke.isNone;
        if (hasStroke) {
          var halfLineWidth = ((lineWidth || 0) + (increasedLineWidthForHitTesting || 0)) * expansion;
          halfExtents[0] += halfLineWidth;
          halfExtents[1] += halfLineWidth;
        }
        geometry.renderBounds.update(center, halfExtents);
        // account for shadow, only support constant value now
        if (shadowColor && shadowType && shadowType !== 'inner') {
          var _geometry$renderBound = geometry.renderBounds,
            min = _geometry$renderBound.min,
            max = _geometry$renderBound.max;
          var shadowBlur = parsedStyle.shadowBlur,
            shadowOffsetX = parsedStyle.shadowOffsetX,
            shadowOffsetY = parsedStyle.shadowOffsetY;
          var shadowBlurInPixels = shadowBlur || 0;
          var shadowOffsetXInPixels = shadowOffsetX || 0;
          var shadowOffsetYInPixels = shadowOffsetY || 0;
          var shadowLeft = min[0] - shadowBlurInPixels + shadowOffsetXInPixels;
          var shadowRight = max[0] + shadowBlurInPixels + shadowOffsetXInPixels;
          var shadowTop = min[1] - shadowBlurInPixels + shadowOffsetYInPixels;
          var shadowBottom = max[1] + shadowBlurInPixels + shadowOffsetYInPixels;
          min[0] = Math.min(min[0], shadowLeft);
          max[0] = Math.max(max[0], shadowRight);
          min[1] = Math.min(min[1], shadowTop);
          max[1] = Math.max(max[1], shadowBottom);
          geometry.renderBounds.setMinMax(min, max);
        }
        // account for filter, eg. blur(5px), drop-shadow()
        filter.forEach(function (_ref) {
          var name = _ref.name,
            params = _ref.params;
          if (name === 'blur') {
            var blurRadius = params[0].value;
            geometry.renderBounds.update(geometry.renderBounds.center, vec3.add(geometry.renderBounds.halfExtents, geometry.renderBounds.halfExtents, [blurRadius, blurRadius, 0]));
          } else if (name === 'drop-shadow') {
            var _shadowOffsetX = params[0].value;
            var _shadowOffsetY = params[1].value;
            var _shadowBlur = params[2].value;
            var _geometry$renderBound2 = geometry.renderBounds,
              _min = _geometry$renderBound2.min,
              _max = _geometry$renderBound2.max;
            var _shadowLeft = _min[0] - _shadowBlur + _shadowOffsetX;
            var _shadowRight = _max[0] + _shadowBlur + _shadowOffsetX;
            var _shadowTop = _min[1] - _shadowBlur + _shadowOffsetY;
            var _shadowBottom = _max[1] + _shadowBlur + _shadowOffsetY;
            _min[0] = Math.min(_min[0], _shadowLeft);
            _max[0] = Math.max(_max[0], _shadowRight);
            _min[1] = Math.min(_min[1], _shadowTop);
            _max[1] = Math.max(_max[1], _shadowBottom);
            geometry.renderBounds.setMinMax(_min, _max);
          }
        });
        object.geometry.dirty = false;

        // @see https://github.com/antvis/g/issues/957
        var flipY = hwidth < 0;
        var flipX = hheight < 0;
        // set transform origin
        var usedOriginXValue = (flipY ? -1 : 1) * (transformOrigin ? convertPercentUnit(transformOrigin[0], 0, object, true) : 0);
        var usedOriginYValue = (flipX ? -1 : 1) * (transformOrigin ? convertPercentUnit(transformOrigin[1], 1, object, true) : 0);
        if (usedOriginXValue || usedOriginYValue) {
          object.setOrigin(usedOriginXValue, usedOriginYValue);
        }
      }
    }
  }, {
    key: "updateSizeAttenuation",
    value: function updateSizeAttenuation(node, zoom) {
      if (node.style.isSizeAttenuation) {
        if (!node.style.rawLineWidth) {
          node.style.rawLineWidth = node.style.lineWidth;
        }
        node.style.lineWidth = (node.style.rawLineWidth || 1) / zoom;
        if (node.nodeName === Shape.CIRCLE) {
          if (!node.style.rawR) {
            node.style.rawR = node.style.r;
          }
          node.style.r = (node.style.rawR || 1) / zoom;
        }
      } else {
        if (node.style.rawLineWidth) {
          node.style.lineWidth = node.style.rawLineWidth;
          delete node.style.rawLineWidth;
        }
        if (node.nodeName === Shape.CIRCLE) {
          if (node.style.rawR) {
            node.style.r = node.style.rawR;
            delete node.style.rawR;
          }
        }
      }
    }
  }]);
}();
function assignParsedStyle(object, attributes) {
  var list = getParsedStyleListOf(object);
  for (var key in attributes) {
    if (list.has(key)) {
      object.parsedStyle[key] = attributes[key];
    }
  }
}
function getParsedStyleListOf(object) {
  return object.constructor.PARSED_STYLE_LIST;
}

var CSSPropertyAngle = /*#__PURE__*/function () {
  function CSSPropertyAngle() {
    _classCallCheck(this, CSSPropertyAngle);
    this.mixer = mergeNumbers;
  }
  return _createClass(CSSPropertyAngle, [{
    key: "calculator",
    value: function calculator(name, oldParsed, parsed, object) {
      return convertAngleUnit(parsed);
    }
  }]);
}();

/**
 * clipPath / textPath / offsetPath
 */
var CSSPropertyClipPath = /*#__PURE__*/function () {
  function CSSPropertyClipPath() {
    _classCallCheck(this, CSSPropertyClipPath);
  }
  return _createClass(CSSPropertyClipPath, [{
    key: "calculator",
    value: function calculator(name, oldPath, newPath, object, runtime) {
      // unset
      if (newPath instanceof CSSKeywordValue) {
        newPath = null;
      }
      runtime.sceneGraphService.updateDisplayObjectDependency(name, oldPath, newPath, object);
      if (name === 'clipPath') {
        // should affect children
        object.forEach(function (leaf) {
          if (leaf.childNodes.length === 0) {
            runtime.sceneGraphService.dirtyToRoot(leaf);
          }
        });
      }
      return newPath;
    }
  }]);
}();

var CSSPropertyColor = /*#__PURE__*/function () {
  function CSSPropertyColor() {
    _classCallCheck(this, CSSPropertyColor);
    this.parser = parseColor;
    this.mixer = mergeColors;
  }
  return _createClass(CSSPropertyColor, [{
    key: "calculator",
    value: function calculator(name, oldParsed, parsed, object) {
      if (parsed instanceof CSSKeywordValue) {
        // 'unset' 'none'
        return parsed.value === 'none' ? noneColor : transparentColor;
      }
      return parsed;
    }
  }]);
}();

var CSSPropertyFilter = /*#__PURE__*/function () {
  function CSSPropertyFilter() {
    _classCallCheck(this, CSSPropertyFilter);
  }
  return _createClass(CSSPropertyFilter, [{
    key: "calculator",
    value: function calculator(name, oldParsed, parsed) {
      // unset or none
      if (parsed instanceof CSSKeywordValue) {
        return [];
      }
      return parsed;
    }
  }]);
}();

function getFontSize(object) {
  var _ref = object.parsedStyle,
    fontSize = _ref.fontSize;
  return isNil(fontSize) ? null : fontSize;
}

/**
 * <length> & <percentage>
 */
var CSSPropertyLengthOrPercentage = /*#__PURE__*/function () {
  function CSSPropertyLengthOrPercentage() {
    _classCallCheck(this, CSSPropertyLengthOrPercentage);
    this.mixer = mergeNumbers;
  }
  return _createClass(CSSPropertyLengthOrPercentage, [{
    key: "calculator",
    value:
    /**
     * according to parent's bounds
     *
     * @example
     * CSS.percent(50) -> CSS.px(0.5 * parent.width)
     */
    function calculator(name, oldParsed, computed, object, runtime) {
      if (isNumber(computed)) {
        return computed;
      }
      if (CSSUnitValue.isRelativeUnit(computed.unit)) {
        if (computed.unit === UnitType.kPercentage) {
          // TODO: merge dimensions
          return 0;
        }
        if (computed.unit === UnitType.kEms) {
          if (object.parentNode) {
            var fontSize = getFontSize(object.parentNode);
            if (fontSize) {
              fontSize *= computed.value;
              return fontSize;
            }
          }
          return 0;
        }
        if (computed.unit === UnitType.kRems) {
          var _object$ownerDocument;
          if (object !== null && object !== void 0 && (_object$ownerDocument = object.ownerDocument) !== null && _object$ownerDocument !== void 0 && _object$ownerDocument.documentElement) {
            var _fontSize = getFontSize(object.ownerDocument.documentElement);
            if (_fontSize) {
              _fontSize *= computed.value;
              return _fontSize;
            }
          }
          return 0;
        }
      } else {
        // remove listener if exists
        // registry.unregisterParentGeometryBoundsChangedHandler(object, name);

        // return absolute value
        return computed.value;
      }
    }
  }]);
}();

/**
 * format to Tuple2<CSSUnitValue>
 *
 * @example
 * rect.style.lineDash = 10;
 * rect.style.lineDash = [10, 10];
 * rect.style.lineDash = '10 10';
 */
var CSSPropertyLengthOrPercentage12 = /*#__PURE__*/function () {
  function CSSPropertyLengthOrPercentage12() {
    _classCallCheck(this, CSSPropertyLengthOrPercentage12);
    this.mixer = mergeNumberLists;
  }
  return _createClass(CSSPropertyLengthOrPercentage12, [{
    key: "calculator",
    value: function calculator(name, oldParsed, computed) {
      return computed.map(function (c) {
        return c.value;
      });
    }
  }]);
}();

/**
 * used in rounded rect
 *
 * @example
 * rect.style.radius = 10;
 * rect.style.radius = '10 10';
 * rect.style.radius = '10 10 10 10';
 */
var CSSPropertyLengthOrPercentage14 = /*#__PURE__*/function () {
  function CSSPropertyLengthOrPercentage14() {
    _classCallCheck(this, CSSPropertyLengthOrPercentage14);
    this.mixer = mergeNumberLists;
  }
  return _createClass(CSSPropertyLengthOrPercentage14, [{
    key: "calculator",
    value: function calculator(name, oldParsed, computed) {
      return computed.map(function (c) {
        return c.value;
      });
    }
  }]);
}();

var CSSPropertyMarker = /*#__PURE__*/function () {
  function CSSPropertyMarker() {
    _classCallCheck(this, CSSPropertyMarker);
  }
  return _createClass(CSSPropertyMarker, [{
    key: "calculator",
    value: function calculator(name, oldMarker, newMarker, object) {
      var _newMarker;
      // unset
      if (newMarker instanceof CSSKeywordValue) {
        newMarker = null;
      }
      var cloned = (_newMarker = newMarker) === null || _newMarker === void 0 ? void 0 : _newMarker.cloneNode(true);
      if (cloned) {
        // FIXME: SVG should not inherit parent's style, add a flag here
        cloned.style.isMarker = true;
      }
      return cloned;
    }
  }]);
}();

var CSSPropertyNumber = /*#__PURE__*/function () {
  function CSSPropertyNumber() {
    _classCallCheck(this, CSSPropertyNumber);
    this.mixer = mergeNumbers;
  }
  return _createClass(CSSPropertyNumber, [{
    key: "calculator",
    value: function calculator(name, oldParsed, computed) {
      return computed.value;
    }
  }]);
}();

var CSSPropertyOffsetDistance = /*#__PURE__*/function () {
  function CSSPropertyOffsetDistance() {
    _classCallCheck(this, CSSPropertyOffsetDistance);
    this.mixer = clampedMergeNumbers(0, 1);
  }
  return _createClass(CSSPropertyOffsetDistance, [{
    key: "calculator",
    value: function calculator(name, oldParsed, computed) {
      return computed.value;
    }
  }, {
    key: "postProcessor",
    value: function postProcessor(object) {
      var _object$parsedStyle = object.parsedStyle,
        offsetPath = _object$parsedStyle.offsetPath,
        offsetDistance = _object$parsedStyle.offsetDistance;
      if (!offsetPath) {
        return;
      }
      var nodeName = offsetPath.nodeName;
      if (nodeName === Shape.LINE || nodeName === Shape.PATH || nodeName === Shape.POLYLINE) {
        // set position in world space
        var point = offsetPath.getPoint(offsetDistance);
        if (point) {
          object.setLocalPosition(point.x, point.y);
        }
      }
    }
  }]);
}();

/**
 * opacity
 */
var CSSPropertyOpacity = /*#__PURE__*/function () {
  function CSSPropertyOpacity() {
    _classCallCheck(this, CSSPropertyOpacity);
    this.mixer = clampedMergeNumbers(0, 1);
  }
  return _createClass(CSSPropertyOpacity, [{
    key: "calculator",
    value: function calculator(name, oldParsed, computed) {
      return computed.value;
    }
  }]);
}();

var CSSPropertyPath = /*#__PURE__*/function () {
  function CSSPropertyPath() {
    _classCallCheck(this, CSSPropertyPath);
    /**
     * path2Curve
     */
    this.parser = parsePath;
    this.mixer = mergePaths;
  }
  return _createClass(CSSPropertyPath, [{
    key: "calculator",
    value: function calculator(name, oldParsed, parsed) {
      // unset
      if (parsed instanceof CSSKeywordValue && parsed.value === 'unset') {
        return {
          absolutePath: [],
          hasArc: false,
          segments: [],
          polygons: [],
          polylines: [],
          curve: null,
          totalLength: 0,
          rect: new Rectangle(0, 0, 0, 0)
        };
      }
      return parsed;
    }
  }]);
}();

var CSSPropertyPoints = /*#__PURE__*/_createClass(function CSSPropertyPoints() {
  _classCallCheck(this, CSSPropertyPoints);
  this.mixer = mergePoints;
});

var CSSPropertyShadowBlur = /*#__PURE__*/function (_CSSPropertyLengthOrP) {
  function CSSPropertyShadowBlur() {
    var _this;
    _classCallCheck(this, CSSPropertyShadowBlur);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, CSSPropertyShadowBlur, [].concat(args));
    _this.mixer = clampedMergeNumbers(0, Infinity);
    return _this;
  }
  _inherits(CSSPropertyShadowBlur, _CSSPropertyLengthOrP);
  return _createClass(CSSPropertyShadowBlur);
}(CSSPropertyLengthOrPercentage);

var CSSPropertyText = /*#__PURE__*/function () {
  function CSSPropertyText() {
    _classCallCheck(this, CSSPropertyText);
  }
  return _createClass(CSSPropertyText, [{
    key: "calculator",
    value: function calculator(name, oldParsed, parsed, object) {
      if (parsed instanceof CSSKeywordValue) {
        if (parsed.value === 'unset') {
          return '';
        }
        return parsed.value;
      }

      // allow number as valid text content
      return "".concat(parsed);
    }
  }, {
    key: "postProcessor",
    value: function postProcessor(object) {
      object.nodeValue = "".concat(object.parsedStyle.text) || '';
    }
  }]);
}();

/**
 * it must transform after text get parsed
 * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-transform
 */
var CSSPropertyTextTransform = /*#__PURE__*/function () {
  function CSSPropertyTextTransform() {
    _classCallCheck(this, CSSPropertyTextTransform);
  }
  return _createClass(CSSPropertyTextTransform, [{
    key: "calculator",
    value: function calculator(name, oldParsed, parsed, object) {
      var rawText = object.getAttribute('text');
      if (rawText) {
        var transformedText = rawText;
        if (parsed.value === 'capitalize') {
          transformedText = rawText.charAt(0).toUpperCase() + rawText.slice(1);
        } else if (parsed.value === 'lowercase') {
          transformedText = rawText.toLowerCase();
        } else if (parsed.value === 'uppercase') {
          transformedText = rawText.toUpperCase();
        }
        object.parsedStyle.text = transformedText;
      }
      return parsed.value;
    }
  }]);
}();

var definedProps = function definedProps(obj) {
  return Object.fromEntries(Object.entries(obj).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      v = _ref2[1];
    return v !== undefined;
  }));
};

var CANVAS_Map = new WeakMap();

/**
 * destroy existed canvas with the same id
 */
function cleanExistedCanvas(container, canvas, cleanUp) {
  if (container) {
    var $dom = typeof container === 'string' ? document.getElementById(container) : container;
    if (CANVAS_Map.has($dom)) CANVAS_Map.get($dom).destroy(cleanUp);
    CANVAS_Map.set($dom, canvas);
  }
}
var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

function isElement(target) {
  return !!target.getAttribute;
}
function sortedIndex(array, value) {
  var low = 0;
  var high = array.length;
  while (low < high) {
    var mid = low + high >>> 1;
    if (sortByZIndex(array[mid], value) < 0) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}
function sortByZIndex(o1, o2) {
  var zIndex1 = Number(o1.parsedStyle.zIndex || 0);
  var zIndex2 = Number(o2.parsedStyle.zIndex || 0);
  if (zIndex1 === zIndex2) {
    var parent = o1.parentNode;
    if (parent) {
      var children = parent.childNodes || [];
      return children.indexOf(o1) - children.indexOf(o2);
    }
  }
  return zIndex1 - zIndex2;
}
function findClosestClipPathTarget(object) {
  var el = object;
  do {
    var _el$parsedStyle;
    var clipPath = (_el$parsedStyle = el.parsedStyle) === null || _el$parsedStyle === void 0 ? void 0 : _el$parsedStyle.clipPath;
    if (clipPath) return el;
    el = el.parentElement;
  } while (el !== null);
  return null;
}
var PX_SUFFIX = 'px';
function setDOMSize($el, width, height) {
  if (isBrowser && $el.style) {
    $el.style.width = width + PX_SUFFIX;
    $el.style.height = height + PX_SUFFIX;
  }
}
function getStyle($el, property) {
  if (isBrowser) {
    return document.defaultView.getComputedStyle($el, null).getPropertyValue(property);
  }
}
function getWidth($el) {
  var width = getStyle($el, 'width');
  if (width === 'auto') {
    return $el.offsetWidth;
  }
  return parseFloat(width);
}
function getHeight($el) {
  var height = getStyle($el, 'height');
  if (height === 'auto') {
    return $el.offsetHeight;
  }
  return parseFloat(height);
}

// borrow from hammer.js
var MOUSE_POINTER_ID = 1;
var TOUCH_TO_POINTER = {
  touchstart: 'pointerdown',
  touchend: 'pointerup',
  touchendoutside: 'pointerupoutside',
  touchmove: 'pointermove',
  touchcancel: 'pointercancel'
};
var clock = typeof performance === 'object' && performance.now ? performance : Date;

function isInFragment(node) {
  if (node.nodeName === Shape.FRAGMENT) return true;
  return node.getRootNode().nodeName === Shape.FRAGMENT;
}

function isFillOrStrokeAffected() {
  var pointerEvents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';
  var fill = arguments.length > 1 ? arguments[1] : undefined;
  var stroke = arguments.length > 2 ? arguments[2] : undefined;
  // account for pointerEvents
  // @see https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events

  var hasFill = false;
  var hasStroke = false;
  var isFillOtherThanNone = !!fill && !fill.isNone;
  var isStrokeOtherThanNone = !!stroke && !stroke.isNone;
  if (pointerEvents === 'visiblepainted' || pointerEvents === 'painted' || pointerEvents === 'auto') {
    hasFill = isFillOtherThanNone;
    hasStroke = isStrokeOtherThanNone;
  } else if (pointerEvents === 'visiblefill' || pointerEvents === 'fill') {
    hasFill = true;
  } else if (pointerEvents === 'visiblestroke' || pointerEvents === 'stroke') {
    hasStroke = true;
  } else if (pointerEvents === 'visible' || pointerEvents === 'all') {
    // The values of the fill and stroke do not affect event processing.
    hasFill = true;
    hasStroke = true;
  }
  return [hasFill, hasStroke];
}

/**
 * Thanks for following contributor of codes
 * https://gist.github.com/1866474
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * https://github.com/Financial-Times/polyfill-library/blob/master/polyfills/requestAnimationFrame/polyfill.js
 * */

var uId = 1;
var uniqueId = function uniqueId() {
  return uId++;
};

// We use `self` instead of `window` for `WebWorker` support.
var root =
// eslint-disable-next-line no-nested-ternary
typeof self === 'object' && self.self === self ? self :
// @ts-ignore
typeof global === 'object' && global.global === global ?
// @ts-ignore
global : {};
var nowOffset = Date.now();

// use performance api if exist, otherwise use Date.now.
// Date.now polyfill required.
var pnow = function pnow() {
  if (root.performance && typeof root.performance.now === 'function') {
    return root.performance.now();
  }

  // fallback
  return Date.now() - nowOffset;
};
var reservedCBs = {};
var lastTime = Date.now();
var polyfillRaf = function polyfillRaf(callback) {
  if (typeof callback !== 'function') {
    throw new TypeError("".concat(callback, " is not a function"));
  }
  var currentTime = Date.now();
  var gap = currentTime - lastTime;
  var delay = gap > 16 ? 0 : 16 - gap;
  var id = uniqueId();
  reservedCBs[id] = callback;

  // keys(reservedCBs).length > 1 의미는 이미 setTimeout 이 걸려있는 경우.
  // 함께 callback 이 실행될 수 있게 reservedCBs 에만 추가해주고 return
  if (Object.keys(reservedCBs).length > 1) return id;
  setTimeout(function () {
    lastTime = currentTime;
    var copied = reservedCBs;
    reservedCBs = {};
    Object.keys(copied).forEach(function (key) {
      return copied[key](pnow());
    });
  }, delay);
  return id;
};
var polyfillCaf = function polyfillCaf(id) {
  delete reservedCBs[id];
};
var vendorPrefixes = ['', 'webkit', 'moz', 'ms', 'o'];
var getRequestAnimationFrame = function getRequestAnimationFrame(vp) {
  if (typeof vp !== 'string') return polyfillRaf;
  if (vp === '') return root.requestAnimationFrame;
  return root["".concat(vp, "RequestAnimationFrame")];
};
var getCancelAnimationFrame = function getCancelAnimationFrame(vp) {
  if (typeof vp !== 'string') return polyfillCaf;
  if (vp === '') return root.cancelAnimationFrame;
  return root["".concat(vp, "CancelAnimationFrame")] || root["".concat(vp, "CancelRequestAnimationFrame")];
};
var find = function find(arr, predicate) {
  var i = 0;
  while (arr[i] !== undefined) {
    if (predicate(arr[i])) return arr[i];
    i += 1;
  }
};
var vp = find(vendorPrefixes, function (vp) {
  return !!getRequestAnimationFrame(vp);
});
var raf = getRequestAnimationFrame(vp);
var caf = getCancelAnimationFrame(vp);
root.requestAnimationFrame = raf;
root.cancelAnimationFrame = caf;

var AsyncParallelHook = /*#__PURE__*/function () {
  function AsyncParallelHook() {
    _classCallCheck(this, AsyncParallelHook);
    this.callbacks = [];
  }
  return _createClass(AsyncParallelHook, [{
    key: "getCallbacksNum",
    value: function getCallbacksNum() {
      return this.callbacks.length;
    }
  }, {
    key: "tapPromise",
    value: function tapPromise(options, fn) {
      this.callbacks.push(fn);
    }
  }, {
    key: "promise",
    value: function promise() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return Promise.all(this.callbacks.map(function (callback) {
        return callback.apply(void 0, args);
      }));
    }
  }]);
}();

var AsyncSeriesWaterfallHook = /*#__PURE__*/function () {
  function AsyncSeriesWaterfallHook() {
    _classCallCheck(this, AsyncSeriesWaterfallHook);
    this.callbacks = [];
  }
  return _createClass(AsyncSeriesWaterfallHook, [{
    key: "tapPromise",
    value: function tapPromise(options, fn) {
      this.callbacks.push(fn);
    }
  }, {
    key: "promise",
    value: function () {
      var _promise = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this$callbacks,
          result,
          i,
          callback,
          _args = arguments;
        return _regeneratorRuntime().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!this.callbacks.length) {
                _context.next = 6;
                break;
              }
              _context.next = 1;
              return (_this$callbacks = this.callbacks)[0].apply(_this$callbacks, _args);
            case 1:
              result = _context.sent;
              i = 1;
            case 2:
              if (!(i < this.callbacks.length)) {
                _context.next = 5;
                break;
              }
              callback = this.callbacks[i]; // @ts-ignore
              // eslint-disable-next-line no-await-in-loop
              _context.next = 3;
              return callback(result);
            case 3:
              result = _context.sent;
            case 4:
              i++;
              _context.next = 2;
              break;
            case 5:
              return _context.abrupt("return", result);
            case 6:
              return _context.abrupt("return", null);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function promise() {
        return _promise.apply(this, arguments);
      }
      return promise;
    }()
  }]);
}();

var SyncHook = /*#__PURE__*/function () {
  function SyncHook() {
    _classCallCheck(this, SyncHook);
    this.callbacks = [];
  }
  return _createClass(SyncHook, [{
    key: "tap",
    value: function tap(options, fn) {
      this.callbacks.push(fn);
    }
  }, {
    key: "call",
    value: function call() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      /* eslint-disable-next-line prefer-rest-params */
      var argsArr = arguments;
      this.callbacks.forEach(function (callback) {
        /* eslint-disable-next-line prefer-spread */
        callback.apply(undefined, argsArr);
      });
    }
  }]);
}();

var SyncWaterfallHook = /*#__PURE__*/function () {
  function SyncWaterfallHook() {
    _classCallCheck(this, SyncWaterfallHook);
    this.callbacks = [];
  }
  return _createClass(SyncWaterfallHook, [{
    key: "tap",
    value: function tap(options, fn) {
      this.callbacks.push(fn);
    }
  }, {
    key: "call",
    value: function call() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (this.callbacks.length) {
        /* eslint-disable-next-line prefer-rest-params */
        var argsArr = arguments;
        /* eslint-disable-next-line prefer-spread */
        var result = this.callbacks[0].apply(undefined, argsArr);
        for (var i = 1; i < this.callbacks.length; i++) {
          var callback = this.callbacks[i];
          // @ts-ignore
          result = callback(result);
        }
        return result;
      }
      return null;
    }
  }]);
}();

var genericFontFamilies = ['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy', 'system-ui'];
var stringRegExp = /([\"\'])[^\'\"]+\1/;
function getFontAttr(attributes) {
  var _attributes$fontSize = attributes.fontSize,
    fontSize = _attributes$fontSize === void 0 ? 16 : _attributes$fontSize,
    _attributes$fontFamil = attributes.fontFamily,
    fontFamily = _attributes$fontFamil === void 0 ? 'sans-serif' : _attributes$fontFamil,
    _attributes$fontStyle = attributes.fontStyle,
    fontStyle = _attributes$fontStyle === void 0 ? 'normal' : _attributes$fontStyle,
    _attributes$fontVaria = attributes.fontVariant,
    fontVariant = _attributes$fontVaria === void 0 ? 'normal' : _attributes$fontVaria,
    _attributes$fontWeigh = attributes.fontWeight,
    fontWeight = _attributes$fontWeigh === void 0 ? 'normal' : _attributes$fontWeigh;
  return {
    fontSize: fontSize,
    fontFamily: fontFamily,
    fontStyle: fontStyle,
    fontVariant: fontVariant,
    fontWeight: fontWeight
  };
}
var toFontString = memoize(function toFontStringRaw(attributes) {
  var _getFontAttr = getFontAttr(attributes),
    fontSize = _getFontAttr.fontSize,
    fontFamily = _getFontAttr.fontFamily,
    fontStyle = _getFontAttr.fontStyle,
    fontVariant = _getFontAttr.fontVariant,
    fontWeight = _getFontAttr.fontWeight;

  // build canvas api font setting from individual components. Convert a numeric this.fontSize to px
  // const fontSizeString: string = isNumber(fontSize) ? `${fontSize}px` : fontSize.toString();
  var fontSizeString = isNumber(fontSize) && "".concat(fontSize, "px") || '16px';
  // Clean-up fontFamily property by quoting each font name
  // this will support font names with spaces

  var fontFamilies = fontFamily.split(',');
  for (var i = fontFamilies.length - 1; i >= 0; i--) {
    // Trim any extra white-space
    var _fontFamily = fontFamilies[i].trim();
    // Check if font already contains strings
    if (!stringRegExp.test(_fontFamily) && genericFontFamilies.indexOf(_fontFamily) < 0) {
      _fontFamily = "\"".concat(_fontFamily, "\"");
    }
    fontFamilies[i] = _fontFamily;
  }
  return "".concat(fontStyle, " ").concat(fontVariant, " ").concat(fontWeight, " ").concat(fontSizeString, " ").concat(fontFamilies.join(','));
}, function (attributes) {
  var _getFontAttr2 = getFontAttr(attributes),
    fontSize = _getFontAttr2.fontSize,
    fontFamily = _getFontAttr2.fontFamily,
    fontStyle = _getFontAttr2.fontStyle,
    fontVariant = _getFontAttr2.fontVariant,
    fontWeight = _getFontAttr2.fontWeight;
  return "".concat(fontStyle, "_").concat(fontVariant, "_").concat(fontWeight, "_").concat(fontSize, "_").concat(fontFamily);
});

/**
 * Minimum scaling limit
 *
 * When `scale` is 0, the matrix will become an irreversible matrix,
 * and `NaN` will appear during matrix calculation and decomposition,
 * causing exceptions
 */
var MIN_SCALE = 0.000001;
var clampScale = function clampScale(item) {
  return Math.max(item, MIN_SCALE);
};
function createSkewMatrix(skewMatrix, skewX, skewY) {
  // Create an identity matrix
  mat4.identity(skewMatrix);
  // Apply skew to the matrix
  skewMatrix[4] = Math.tan(skewX); // Skew Y axis in X direction
  skewMatrix[1] = Math.tan(skewY); // Skew X axis in Y direction

  return skewMatrix;
}
var $mat4_1 = mat4.create();
var $mat4_2 = mat4.create();
var parser = {
  scale: function scale(d) {
    mat4.fromScaling($mat4_1, [d[0].value, d[1].value, 1].map(function (item) {
      return clampScale(item);
    }));
  },
  scaleX: function scaleX(d) {
    mat4.fromScaling($mat4_1, [d[0].value, 1, 1].map(function (item) {
      return clampScale(item);
    }));
  },
  scaleY: function scaleY(d) {
    mat4.fromScaling($mat4_1, [1, d[0].value, 1].map(function (item) {
      return clampScale(item);
    }));
  },
  scaleZ: function scaleZ(d) {
    mat4.fromScaling($mat4_1, [1, 1, d[0].value].map(function (item) {
      return clampScale(item);
    }));
  },
  scale3d: function scale3d(d) {
    mat4.fromScaling($mat4_1, [d[0].value, d[1].value, d[2].value].map(function (item) {
      return clampScale(item);
    }));
  },
  translate: function translate(d) {
    mat4.fromTranslation($mat4_1, [d[0].value, d[1].value, 0]);
  },
  translateX: function translateX(d) {
    mat4.fromTranslation($mat4_1, [d[0].value, 0, 0]);
  },
  translateY: function translateY(d) {
    mat4.fromTranslation($mat4_1, [0, d[0].value, 0]);
  },
  translateZ: function translateZ(d) {
    mat4.fromTranslation($mat4_1, [0, 0, d[0].value]);
  },
  translate3d: function translate3d(d) {
    mat4.fromTranslation($mat4_1, [d[0].value, d[1].value, d[2].value]);
  },
  rotate: function rotate(d) {
    mat4.fromZRotation($mat4_1, deg2rad(convertAngleUnit(d[0])));
  },
  rotateX: function rotateX(d) {
    mat4.fromXRotation($mat4_1, deg2rad(convertAngleUnit(d[0])));
  },
  rotateY: function rotateY(d) {
    mat4.fromYRotation($mat4_1, deg2rad(convertAngleUnit(d[0])));
  },
  rotateZ: function rotateZ(d) {
    mat4.fromZRotation($mat4_1, deg2rad(convertAngleUnit(d[0])));
  },
  rotate3d: function rotate3d(d) {
    mat4.fromRotation($mat4_1, deg2rad(convertAngleUnit(d[3])), [d[0].value, d[1].value, d[2].value]);
  },
  skew: function skew(d) {
    createSkewMatrix($mat4_1, deg2rad(d[0].value), deg2rad(d[1].value));
  },
  skewX: function skewX(d) {
    createSkewMatrix($mat4_1, deg2rad(d[0].value), 0);
  },
  skewY: function skewY(d) {
    createSkewMatrix($mat4_1, 0, deg2rad(d[0].value));
  },
  matrix: function matrix(d) {
    // prettier-ignore
    mat4.set($mat4_1, d[0].value, d[1].value, 0, 0, d[2].value, d[3].value, 0, 0, 0, 0, 1, 0, d[4].value, d[5].value, 0, 1);
  },
  matrix3d: function matrix3d(d) {
    // @ts-ignore
    mat4.set.apply(mat4, [$mat4_1].concat(_toConsumableArray(d.map(function (s) {
      return s.value;
    }))));
  }
};
var $vec3One$1 = vec3.fromValues(1, 1, 1);
var $vec3Zero$1 = vec3.create();
var optimizer = {
  translate: function translate(object, d) {
    runtime.sceneGraphService.setLocalScale(object, $vec3One$1, false);
    runtime.sceneGraphService.setLocalEulerAngles(object, $vec3Zero$1, undefined, undefined, false);
    runtime.sceneGraphService.setLocalPosition(object, [d[0].value, d[1].value, 0], false);
    runtime.sceneGraphService.dirtyLocalTransform(object, object.transformable);
  }
};
function parsedTransformToMat4(transform, object) {
  if (transform.length) {
    if (transform.length === 1 && optimizer[transform[0].t]) {
      optimizer[transform[0].t](object, transform[0].d);
      return;
    }
    var m = mat4.identity($mat4_2);
    for (var i = 0; i < transform.length; i++) {
      var _transform$i = transform[i],
        t = _transform$i.t,
        d = _transform$i.d;
      var p = parser[t];
      if (p) {
        p(d);
        mat4.mul(m, m, $mat4_1);
      }
    }
    object.setLocalTransform(m);
  } else {
    object.resetLocalTransform();
  }
  return object.getLocalTransform();
}

/**
 * @see /zh/docs/api/animation#支持变换的属性
 *
 * support the following formats like CSS Transform:
 *
 * scale
 * * scale(x, y)
 * * scaleX(x)
 * * scaleY(x)
 * * scaleZ(z)
 * * scale3d(x, y, z)
 *
 * translate (unit: none, px, %(relative to its bounds))
 * * translate(x, y) eg. translate(0, 0) translate(0, 30px) translate(100%, 100%)
 * * translateX(0)
 * * translateY(0)
 * * translateZ(0)
 * * translate3d(0, 0, 0)
 *
 * rotate (unit: deg rad turn)
 * * rotate(0.5turn) rotate(30deg) rotate(1rad)
 *
 * none
 *
 * unsupported for now:
 * * calc() eg. translate(calc(100% + 10px))
 * * matrix/matrix3d()
 * * skew/skewX/skewY
 * * perspective
 */
var CSSPropertyTransform = /*#__PURE__*/function () {
  function CSSPropertyTransform() {
    _classCallCheck(this, CSSPropertyTransform);
    this.parser = parseTransformUnmemoize;
    this.mixer = mergeTransforms;
  }
  return _createClass(CSSPropertyTransform, [{
    key: "calculator",
    value: function calculator(name, oldParsed, parsed, object) {
      // 'none'
      if (parsed instanceof CSSKeywordValue) {
        return [];
      }
      return parsed;
    }
  }, {
    key: "postProcessor",
    value: function postProcessor(object) {
      parsedTransformToMat4(object.parsedStyle.transform, object);
    }
  }]);
}();

/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin
 * @example
 * [10px, 10px] [10%, 10%]
 */
var CSSPropertyTransformOrigin = /*#__PURE__*/function () {
  function CSSPropertyTransformOrigin() {
    _classCallCheck(this, CSSPropertyTransformOrigin);
  }
  return _createClass(CSSPropertyTransformOrigin, [{
    key: "postProcessor",
    value: function postProcessor(object) {
      var transformOrigin = object.parsedStyle.transformOrigin;
      if (transformOrigin[0].unit === UnitType.kPixels && transformOrigin[1].unit === UnitType.kPixels) {
        object.setOrigin(transformOrigin[0].value, transformOrigin[1].value);
      } else {
        // Relative to geometry bounds, calculate later.
        object.getGeometryBounds();
      }
    }
  }]);
}();

var CSSPropertyZIndex = /*#__PURE__*/function () {
  function CSSPropertyZIndex() {
    _classCallCheck(this, CSSPropertyZIndex);
  }
  return _createClass(CSSPropertyZIndex, [{
    key: "calculator",
    value: function calculator(name, oldParsed, computed, object) {
      return computed.value;
    }
  }, {
    key: "postProcessor",
    value: function postProcessor(object) {
      if (object.parentNode) {
        var parentEntity = object.parentNode;
        var parentRenderable = parentEntity.renderable;
        var parentSortable = parentEntity.sortable;
        if (parentRenderable) {
          parentEntity.dirty();
        }
        // need re-sort on parent
        if (parentSortable) {
          parentSortable.dirty = true;
          parentSortable.dirtyReason = SortReason.Z_INDEX_CHANGED;
        }
      }
    }
  }]);
}();

var CircleUpdater = /*#__PURE__*/function () {
  function CircleUpdater() {
    _classCallCheck(this, CircleUpdater);
  }
  return _createClass(CircleUpdater, [{
    key: "update",
    value: function update(parsedStyle, object) {
      var _parsedStyle$cx = parsedStyle.cx,
        cx = _parsedStyle$cx === void 0 ? 0 : _parsedStyle$cx,
        _parsedStyle$cy = parsedStyle.cy,
        cy = _parsedStyle$cy === void 0 ? 0 : _parsedStyle$cy,
        _parsedStyle$r = parsedStyle.r,
        r = _parsedStyle$r === void 0 ? 0 : _parsedStyle$r;
      return {
        cx: cx,
        cy: cy,
        hwidth: r,
        hheight: r
      };
    }
  }]);
}();

var EllipseUpdater = /*#__PURE__*/function () {
  function EllipseUpdater() {
    _classCallCheck(this, EllipseUpdater);
  }
  return _createClass(EllipseUpdater, [{
    key: "update",
    value: function update(parsedStyle, object) {
      var _parsedStyle$cx = parsedStyle.cx,
        cx = _parsedStyle$cx === void 0 ? 0 : _parsedStyle$cx,
        _parsedStyle$cy = parsedStyle.cy,
        cy = _parsedStyle$cy === void 0 ? 0 : _parsedStyle$cy,
        _parsedStyle$rx = parsedStyle.rx,
        rx = _parsedStyle$rx === void 0 ? 0 : _parsedStyle$rx,
        _parsedStyle$ry = parsedStyle.ry,
        ry = _parsedStyle$ry === void 0 ? 0 : _parsedStyle$ry;
      return {
        cx: cx,
        cy: cy,
        hwidth: rx,
        hheight: ry
      };
    }
  }]);
}();

var LineUpdater = /*#__PURE__*/function () {
  function LineUpdater() {
    _classCallCheck(this, LineUpdater);
  }
  return _createClass(LineUpdater, [{
    key: "update",
    value: function update(parsedStyle) {
      var x1 = parsedStyle.x1,
        y1 = parsedStyle.y1,
        x2 = parsedStyle.x2,
        y2 = parsedStyle.y2;
      var minX = Math.min(x1, x2);
      var maxX = Math.max(x1, x2);
      var minY = Math.min(y1, y2);
      var maxY = Math.max(y1, y2);
      var width = maxX - minX;
      var height = maxY - minY;
      var hwidth = width / 2;
      var hheight = height / 2;
      return {
        cx: minX + hwidth,
        cy: minY + hheight,
        hwidth: hwidth,
        hheight: hheight
      };
    }
  }]);
}();

var PathUpdater = /*#__PURE__*/function () {
  function PathUpdater() {
    _classCallCheck(this, PathUpdater);
  }
  return _createClass(PathUpdater, [{
    key: "update",
    value: function update(parsedStyle) {
      var d = parsedStyle.d;
      var _d$rect = d.rect,
        x = _d$rect.x,
        y = _d$rect.y,
        width = _d$rect.width,
        height = _d$rect.height;
      var hwidth = width / 2;
      var hheight = height / 2;
      return {
        cx: x + hwidth,
        cy: y + hheight,
        hwidth: hwidth,
        hheight: hheight
      };
    }
  }]);
}();

var PolylineUpdater = /*#__PURE__*/function () {
  function PolylineUpdater() {
    _classCallCheck(this, PolylineUpdater);
  }
  return _createClass(PolylineUpdater, [{
    key: "update",
    value: function update(parsedStyle) {
      if (parsedStyle.points && isArray(parsedStyle.points.points)) {
        var points = parsedStyle.points.points;

        // FIXME: account for miter lineJoin
        var minX = Math.min.apply(Math, _toConsumableArray(points.map(function (point) {
          return point[0];
        })));
        var maxX = Math.max.apply(Math, _toConsumableArray(points.map(function (point) {
          return point[0];
        })));
        var minY = Math.min.apply(Math, _toConsumableArray(points.map(function (point) {
          return point[1];
        })));
        var maxY = Math.max.apply(Math, _toConsumableArray(points.map(function (point) {
          return point[1];
        })));
        var width = maxX - minX;
        var height = maxY - minY;
        var hwidth = width / 2;
        var hheight = height / 2;
        return {
          cx: minX + hwidth,
          cy: minY + hheight,
          hwidth: hwidth,
          hheight: hheight
        };
      }
      return {
        cx: 0,
        cy: 0,
        hwidth: 0,
        hheight: 0
      };
    }
  }]);
}();

var RectUpdater = /*#__PURE__*/function () {
  function RectUpdater() {
    _classCallCheck(this, RectUpdater);
  }
  return _createClass(RectUpdater, [{
    key: "update",
    value: function update(parsedStyle, object) {
      var _parsedStyle$x = parsedStyle.x,
        x = _parsedStyle$x === void 0 ? 0 : _parsedStyle$x,
        _parsedStyle$y = parsedStyle.y,
        y = _parsedStyle$y === void 0 ? 0 : _parsedStyle$y,
        src = parsedStyle.src,
        _parsedStyle$width = parsedStyle.width,
        width = _parsedStyle$width === void 0 ? 0 : _parsedStyle$width,
        _parsedStyle$height = parsedStyle.height,
        height = _parsedStyle$height === void 0 ? 0 : _parsedStyle$height;
      var contentWidth = width;
      var contentHeight = height;

      // resize with HTMLImageElement's size
      if (src && !isString(src)) {
        if (!contentWidth) {
          contentWidth = src.width;
          parsedStyle.width = contentWidth;
        }
        if (!contentHeight) {
          contentHeight = src.height;
          parsedStyle.height = contentHeight;
        }
      }
      return {
        cx: x + contentWidth / 2,
        cy: y + contentHeight / 2,
        hwidth: contentWidth / 2,
        hheight: contentHeight / 2
      };
    }
  }]);
}();

var TextUpdater = /*#__PURE__*/function () {
  function TextUpdater(globalRuntime) {
    _classCallCheck(this, TextUpdater);
    this.globalRuntime = globalRuntime;
  }
  return _createClass(TextUpdater, [{
    key: "isReadyToMeasure",
    value: function isReadyToMeasure(parsedStyle, object) {
      var text = parsedStyle.text;
      return text;
    }
  }, {
    key: "update",
    value: function update(parsedStyle, object) {
      var _object$ownerDocument;
      var text = parsedStyle.text,
        _parsedStyle$textAlig = parsedStyle.textAlign,
        textAlign = _parsedStyle$textAlig === void 0 ? 'start' : _parsedStyle$textAlig,
        _parsedStyle$lineWidt = parsedStyle.lineWidth,
        lineWidth = _parsedStyle$lineWidt === void 0 ? 1 : _parsedStyle$lineWidt,
        _parsedStyle$textBase = parsedStyle.textBaseline,
        textBaseline = _parsedStyle$textBase === void 0 ? 'alphabetic' : _parsedStyle$textBase,
        _parsedStyle$dx = parsedStyle.dx,
        dx = _parsedStyle$dx === void 0 ? 0 : _parsedStyle$dx,
        _parsedStyle$dy = parsedStyle.dy,
        dy = _parsedStyle$dy === void 0 ? 0 : _parsedStyle$dy,
        _parsedStyle$x = parsedStyle.x,
        x = _parsedStyle$x === void 0 ? 0 : _parsedStyle$x,
        _parsedStyle$y = parsedStyle.y,
        y = _parsedStyle$y === void 0 ? 0 : _parsedStyle$y;
      if (!this.isReadyToMeasure(parsedStyle, object)) {
        parsedStyle.metrics = {
          font: '',
          width: 0,
          height: 0,
          lines: [],
          lineWidths: [],
          lineHeight: 0,
          maxLineWidth: 0,
          fontProperties: {
            ascent: 0,
            descent: 0,
            fontSize: 0
          },
          lineMetrics: []
        };
        return {
          hwidth: 0,
          hheight: 0,
          cx: 0,
          cy: 0
        };
      }
      var _ref = (object === null || object === void 0 || (_object$ownerDocument = object.ownerDocument) === null || _object$ownerDocument === void 0 || (_object$ownerDocument = _object$ownerDocument.defaultView) === null || _object$ownerDocument === void 0 ? void 0 : _object$ownerDocument.getConfig()) || {},
        offscreenCanvas = _ref.offscreenCanvas;
      var metrics = this.globalRuntime.textService.measureText(text, parsedStyle, offscreenCanvas);
      parsedStyle.metrics = metrics;
      var width = metrics.width,
        height = metrics.height;
      var hwidth = width / 2;
      var hheight = height / 2;

      // default 'left'
      var lineXOffset = x + hwidth;
      if (textAlign === 'center' || textAlign === 'middle') {
        lineXOffset += lineWidth / 2 - hwidth;
      } else if (textAlign === 'right' || textAlign === 'end') {
        lineXOffset += lineWidth - hwidth * 2;
      }
      var lineYOffset = y - hheight;
      if (textBaseline === 'middle') {
        lineYOffset += hheight;
      } else if (textBaseline === 'top' || textBaseline === 'hanging') {
        lineYOffset += hheight * 2;
      } else if (textBaseline === 'alphabetic') ; else if (textBaseline === 'bottom' || textBaseline === 'ideographic') {
        lineYOffset += 0;
      }
      // TODO: ideographic & bottom

      if (dx) {
        lineXOffset += dx;
      }
      if (dy) {
        lineYOffset += dy;
      }
      return {
        cx: lineXOffset,
        cy: lineYOffset,
        hwidth: hwidth,
        hheight: hheight
      };
    }
  }]);
}();

var GroupUpdater = /*#__PURE__*/function () {
  function GroupUpdater() {
    _classCallCheck(this, GroupUpdater);
  }
  return _createClass(GroupUpdater, [{
    key: "update",
    value: function update(parsedStyle, object) {
      return {
        cx: 0,
        cy: 0,
        hwidth: 0,
        hheight: 0
      };
    }
  }]);
}();

var HTMLUpdater = /*#__PURE__*/function () {
  function HTMLUpdater() {
    _classCallCheck(this, HTMLUpdater);
  }
  return _createClass(HTMLUpdater, [{
    key: "update",
    value: function update(parsedStyle, object) {
      var _parsedStyle$x = parsedStyle.x,
        x = _parsedStyle$x === void 0 ? 0 : _parsedStyle$x,
        _parsedStyle$y = parsedStyle.y,
        y = _parsedStyle$y === void 0 ? 0 : _parsedStyle$y,
        _parsedStyle$width = parsedStyle.width,
        width = _parsedStyle$width === void 0 ? 0 : _parsedStyle$width,
        _parsedStyle$height = parsedStyle.height,
        height = _parsedStyle$height === void 0 ? 0 : _parsedStyle$height;
      return {
        cx: x + width / 2,
        cy: y + height / 2,
        hwidth: width / 2,
        hheight: height / 2
      };
    }
  }]);
}();

function isFederatedEvent(value) {
  return !!value.type;
}

/**
 * An DOM-compatible synthetic event implementation that is "forwarded" on behalf of an original
 * FederatedEvent or native Event.
 */
var FederatedEvent = /*#__PURE__*/function () {
  /**
   * The event boundary which manages this event. Propagation can only occur
   *  within the boundary's jurisdiction.
   */
  function FederatedEvent(manager) {
    _classCallCheck(this, FederatedEvent);
    /**
     * The propagation phase.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/eventPhase
     */
    this.eventPhase = FederatedEvent.prototype.NONE;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Event/bubbles
     */
    this.bubbles = true;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Event/cancelBubble
     */
    this.cancelBubble = true;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelable
     */
    this.cancelable = false;
    /** Flags whether the default response of the user agent was prevent through this event. */
    this.defaultPrevented = false;
    /** Flags whether propagation was stopped. */
    this.propagationStopped = false;
    /** Flags whether propagation was immediately stopped. */
    this.propagationImmediatelyStopped = false;
    /**
     * The coordinates of the evnet relative to the nearest DOM layer.
     * This is a non-standard property.
     */
    this.layer = new Point();
    /**
     * The coordinates of the event relative to the DOM document.
     * This is a non-standard property.
     * relative to the DOM document.
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/pageX
     */
    this.page = new Point();
    /**
     * relative to Canvas, origin is left-top
     */
    this.canvas = new Point();
    /**
     * relative to Viewport, account for Camera
     */
    this.viewport = new Point();
    this.composed = false;
    this.NONE = 0;
    this.CAPTURING_PHASE = 1;
    this.AT_TARGET = 2;
    this.BUBBLING_PHASE = 3;
    this.manager = manager;
  }
  return _createClass(FederatedEvent, [{
    key: "name",
    get:
    /**
     * The type of event, supports the following:
     * * pointerdown
     * * touchstart
     * * mousedown
     * * rightdown
     * * ...
     */

    /**
     * @deprecated
     */
    function get() {
      return this.type;
    }
  }, {
    key: "layerX",
    get: function get() {
      return this.layer.x;
    }
  }, {
    key: "layerY",
    get: function get() {
      return this.layer.y;
    }
  }, {
    key: "pageX",
    get: function get() {
      return this.page.x;
    }
  }, {
    key: "pageY",
    get: function get() {
      return this.page.y;
    }
  }, {
    key: "x",
    get: function get() {
      return this.canvas.x;
    }
  }, {
    key: "y",
    get: function get() {
      return this.canvas.y;
    }
  }, {
    key: "canvasX",
    get: function get() {
      return this.canvas.x;
    }
  }, {
    key: "canvasY",
    get: function get() {
      return this.canvas.y;
    }
  }, {
    key: "viewportX",
    get: function get() {
      return this.viewport.x;
    }
  }, {
    key: "viewportY",
    get: function get() {
      return this.viewport.y;
    }
  }, {
    key: "composedPath",
    value:
    /**
     * The propagation path for this event
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Event/composedPath
     *
     * So composedPath()[0] represents the original target.
     * @see https://polymer-library.polymer-project.org/3.0/docs/devguide/events#retargeting
     */
    function composedPath() {
      if (this.manager && (!this.path || this.path[0] !== this.target)) {
        this.path = this.target ? this.manager.propagationPath(this.target) : [];
      }
      return this.path;
    }
    /**
     * @deprecated
     */
  }, {
    key: "propagationPath",
    get: function get() {
      return this.composedPath();
    }

    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault
     */
  }, {
    key: "preventDefault",
    value: function preventDefault() {
      if (this.nativeEvent instanceof Event && this.nativeEvent.cancelable) {
        this.nativeEvent.preventDefault();
      }
      this.defaultPrevented = true;
    }

    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopImmediatePropagation
     */
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this.propagationImmediatelyStopped = true;
    }

    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopPropagation
     */
  }, {
    key: "stopPropagation",
    value: function stopPropagation() {
      this.propagationStopped = true;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/view
     */
  }, {
    key: "initEvent",
    value:
    /**
     * added for compatibility with DOM Event,
     * deprecated props and methods
     */
    function initEvent() {}
  }, {
    key: "initUIEvent",
    value: function initUIEvent() {}
  }, {
    key: "clone",
    value: function clone() {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }]);
}();

var FederatedMouseEvent = /*#__PURE__*/function (_ref) {
  function FederatedMouseEvent() {
    var _this;
    _classCallCheck(this, FederatedMouseEvent);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, FederatedMouseEvent, [].concat(args));
    /** Whether the "alt" key was pressed when this mouse event occurred. */
    /** The specific button that was pressed in this mouse event. */
    /** The button depressed when this event occurred. */
    /** Whether the "control" key was pressed when this mouse event occurred. */
    /** Whether the "meta" key was pressed when this mouse event occurred. */
    /** This is currently not implemented in the Federated Events API. */
    // @ts-ignore
    /** Whether the "shift" key was pressed when this mouse event occurred. */
    /**
     * The coordinates of the mouse event relative to the canvas.
     */
    _this.client = new Point();
    /**
     * The movement in this pointer relative to the last `mousemove` event.
     */
    _this.movement = new Point();
    /**
     * The offset of the pointer coordinates w.r.t. target DisplayObject in world space. This is
     * not supported at the moment.
     */
    _this.offset = new Point();
    /**
     * The pointer coordinates in world space.
     */
    _this.global = new Point();
    /**
     * The pointer coordinates in sceen space.
     */
    _this.screen = new Point();
    return _this;
  }
  _inherits(FederatedMouseEvent, _ref);
  return _createClass(FederatedMouseEvent, [{
    key: "clientX",
    get: function get() {
      return this.client.x;
    }
  }, {
    key: "clientY",
    get: function get() {
      return this.client.y;
    }
  }, {
    key: "movementX",
    get: function get() {
      return this.movement.x;
    }
  }, {
    key: "movementY",
    get: function get() {
      return this.movement.y;
    }
  }, {
    key: "offsetX",
    get: function get() {
      return this.offset.x;
    }
  }, {
    key: "offsetY",
    get: function get() {
      return this.offset.y;
    }
  }, {
    key: "globalX",
    get: function get() {
      return this.global.x;
    }
  }, {
    key: "globalY",
    get: function get() {
      return this.global.y;
    }
  }, {
    key: "screenX",
    get: function get() {
      return this.screen.x;
    }
  }, {
    key: "screenY",
    get: function get() {
      return this.screen.y;
    }
  }, {
    key: "getModifierState",
    value: function getModifierState(key) {
      return 'getModifierState' in this.nativeEvent && this.nativeEvent.getModifierState(key);
    }
  }, {
    key: "initMouseEvent",
    value: function initMouseEvent() {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }]);
}(FederatedEvent);

// @ts-ignore
var FederatedPointerEvent = /*#__PURE__*/function (_FederatedMouseEvent) {
  function FederatedPointerEvent() {
    var _this;
    _classCallCheck(this, FederatedPointerEvent);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, FederatedPointerEvent, [].concat(args));
    /**
     * The unique identifier of the pointer.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerId
     */
    /**
     * The width of the pointer's contact along the x-axis, measured in CSS pixels.
     * radiusX of TouchEvents will be represented by this value.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/width
     */
    _this.width = 0;
    /**
     * The height of the pointer's contact along the y-axis, measured in CSS pixels.
     * radiusY of TouchEvents will be represented by this value.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/height
     */
    _this.height = 0;
    /**
     * Indicates whether or not the pointer device that created the event is the primary pointer.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/isPrimary
     */
    _this.isPrimary = false;
    return _this;
  }
  _inherits(FederatedPointerEvent, _FederatedMouseEvent);
  return _createClass(FederatedPointerEvent, [{
    key: "getCoalescedEvents",
    value:
    /**
     * The type of pointer that triggered the event.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerType
     */

    /**
     * Pressure applied by the pointing device during the event.
     *s
     * A Touch's force property will be represented by this value.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pressure
     */

    /**
     * Barrel pressure on a stylus pointer.
     *
     * @see https://w3c.github.io/pointerevents/#pointerevent-interface
     */

    /**
     * The angle, in degrees, between the pointer device and the screen.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltX
     */

    /**
     * The angle, in degrees, between the pointer device and the screen.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltY
     */

    /**
     * Twist of a stylus pointer.
     *
     * @see https://w3c.github.io/pointerevents/#pointerevent-interface
     */

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/getCoalescedEvents
     */
    function getCoalescedEvents() {
      if (this.type === 'pointermove' || this.type === 'mousemove' || this.type === 'touchmove') {
        // @ts-ignore
        return [this];
      }
      return [];
    }

    /**
     * @see https://chromestatus.com/feature/5765569655603200
     */
  }, {
    key: "getPredictedEvents",
    value: function getPredictedEvents() {
      throw new Error('getPredictedEvents is not supported!');
    }

    /**
     * @see https://github.com/antvis/G/issues/1115
     * We currently reuses event objects in the event system,
     * avoiding the creation of a large number of event objects.
     * Reused objects are only used to carry different data,
     * such as coordinate information, native event objects,
     * and therefore the lifecycle is limited to the event handler,
     * which can lead to unintended consequences if an attempt is made to cache the entire event object.
     *
     * Therefore, while keeping the above performance considerations in mind, it is possible to provide a clone method that creates a new object when the user really wants to cache it, e.g.
     */
  }, {
    key: "clone",
    value: function clone() {
      return this.manager.clonePointerEvent(this);
    }
  }]);
}(FederatedMouseEvent);

// @ts-ignore
var FederatedWheelEvent = /*#__PURE__*/function (_FederatedMouseEvent) {
  function FederatedWheelEvent() {
    _classCallCheck(this, FederatedWheelEvent);
    return _callSuper(this, FederatedWheelEvent, arguments);
  }
  _inherits(FederatedWheelEvent, _FederatedMouseEvent);
  return _createClass(FederatedWheelEvent, [{
    key: "clone",
    value:
    /**
     * The units of `deltaX`, `deltaY`, and `deltaZ`. This is one of `DOM_DELTA_LINE`,
     * `DOM_DELTA_PAGE`, `DOM_DELTA_PIXEL`.
     */

    /** Horizontal scroll amount */

    /** Vertical scroll amount */

    /** z-axis scroll amount. */

    function clone() {
      return this.manager.cloneWheelEvent(this);
    }
  }]);
}(FederatedMouseEvent);

/**
 * @link https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
 * @link https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events
 *
 * @example
  const event = new CustomEvent('build', { detail: { prop1: 'xx' } });
  circle.addEventListener('build', (e) => {
    e.target; // circle
    e.detail; // { prop1: 'xx' }
  });

  circle.dispatchEvent(event);
 */
var CustomEvent = /*#__PURE__*/function (_FederatedEvent) {
  function CustomEvent(eventName, options) {
    var _this;
    _classCallCheck(this, CustomEvent);
    _this = _callSuper(this, CustomEvent, [null]);
    _this.type = eventName;
    _this.detail = options === null || options === void 0 ? void 0 : options.detail;

    // compatible
    if (options && !('detail' in options)) {
      _this.detail = options;
    }

    // compatible with G 3.0
    Object.assign(_this, options);
    return _this;
  }
  _inherits(CustomEvent, _FederatedEvent);
  return _createClass(CustomEvent);
}(FederatedEvent);

/**
 * Objects that can receive events and may have listeners for them.
 * eg. Element, Canvas, DisplayObject
 * @docs https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
 */
var EventTarget = /*#__PURE__*/function () {
  function EventTarget() {
    _classCallCheck(this, EventTarget);
    /**
     * event emitter
     */
    this.emitter = new EventEmitter();
  }
  return _createClass(EventTarget, [{
    key: "on",
    value:
    /**
     * @deprecated
     * @alias addEventListener
     */
    function on(type, listener, options) {
      this.addEventListener(type, listener, options);
      return this;
    }
    /**
     * support `capture` & `once` in options
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener
     */
  }, {
    key: "addEventListener",
    value: function addEventListener(type, listener, options) {
      var capture = false;
      var once = false;
      if (isBoolean(options)) capture = options;else if (options) {
        var _options$capture = options.capture;
        capture = _options$capture === void 0 ? false : _options$capture;
        var _options$once = options.once;
        once = _options$once === void 0 ? false : _options$once;
      }
      if (capture) type += 'capture';
      // eslint-disable-next-line @typescript-eslint/unbound-method
      listener = isFunction(listener) ? listener : listener.handleEvent;
      var context = isFunction(listener) ? undefined : listener;
      if (once) this.emitter.once(type, listener, context);else this.emitter.on(type, listener, context);
      return this;
    }
    /**
     * @deprecated
     * @alias removeEventListener
     */
  }, {
    key: "off",
    value: function off(type, listener, options) {
      if (type) {
        this.removeEventListener(type, listener, options);
      } else {
        // remove all listeners
        this.removeAllEventListeners();
      }
      return this;
    }
  }, {
    key: "removeAllEventListeners",
    value: function removeAllEventListeners() {
      var _this$emitter;
      (_this$emitter = this.emitter) === null || _this$emitter === void 0 || _this$emitter.removeAllListeners();
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, listener, options) {
      var _listener;
      if (!this.emitter) return this;
      var capture = isBoolean(options) ? options : options === null || options === void 0 ? void 0 : options.capture;
      if (capture) type += 'capture';
      // eslint-disable-next-line @typescript-eslint/unbound-method
      listener = isFunction(listener) ? listener : (_listener = listener) === null || _listener === void 0 ? void 0 : _listener.handleEvent;
      var context = isFunction(listener) ? undefined : listener;
      this.emitter.off(type, listener, context);
      return this;
    }
    /**
     * @deprecated
     * @alias dispatchEvent
     */
  }, {
    key: "emit",
    value: function emit(eventName, object) {
      this.dispatchEvent(new CustomEvent(eventName, object));
    }
  }, {
    key: "dispatchEventToSelf",
    value: function dispatchEventToSelf(e) {
      e.target || (e.target = this);
      e.currentTarget = this;
      this.emitter.emit(e.type, e);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(e) {
      var skipPropagate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var dispatchToSelf = arguments.length > 2 ? arguments[2] : undefined;
      if (dispatchToSelf) {
        this.dispatchEventToSelf(e);
        return true;
      }
      var canvas;
      if (this.document) {
        canvas = this;
      } else if (this.defaultView) {
        canvas = this.defaultView;
      } else {
        var _ownerDocument;
        canvas = (_ownerDocument = this.ownerDocument) === null || _ownerDocument === void 0 ? void 0 : _ownerDocument.defaultView;
      }
      if (canvas) {
        e.manager = canvas.getEventService();
        if (!e.manager) return false;
        e.defaultPrevented = false;
        if (e.path) {
          e.path.length = 0;
        } else {
          // @ts-ignore
          e.page = [];
        }
        if (!skipPropagate) {
          e.target = this;
        }
        e.manager.dispatchEvent(e, e.type, skipPropagate);
      } else {
        // HACK Fixed the issue that after an element leaves the DOM tree, there is no associated canvas,
        // which causes the removed and destroy events to not be triggered
        this.dispatchEventToSelf(e);
      }
      return !e.defaultPrevented;
    }
  }]);
}();

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Node
 */
var Node = /*#__PURE__*/function (_EventTarget) {
  function Node() {
    var _this;
    _classCallCheck(this, Node);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Node, [].concat(args));
    _this.shadow = false;
    /**
     * points to canvas.document
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/ownerDocument
     */
    _this.ownerDocument = null;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/isConnected
     * @example
        circle.isConnected; // false
        canvas.appendChild(circle);
        circle.isConnected; // true
     */
    _this.isConnected = false;
    /**
     * Returns node's node document's document base URL.
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node
     */
    _this.baseURI = '';
    /**
     * Returns the children.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes
     */
    _this.childNodes = [];
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType
     */
    _this.nodeType = 0;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeName
     */
    _this.nodeName = '';
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeValue
     */
    _this.nodeValue = null;
    _this.mutations = undefined;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/ParentNode
     */
    _this.parentNode = null;
    _this.destroyed = false;
    return _this;
  }
  _inherits(Node, _EventTarget);
  return _createClass(Node, [{
    key: "textContent",
    get:
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/textContent
     */
    function get() {
      var out = '';
      if (this.nodeName === Shape.TEXT) {
        // @ts-ignore
        out += this.style.text;
      }
      var _iterator = _createForOfIteratorHelper(this.childNodes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _child = _step.value;
          if (_child.nodeName === Shape.TEXT) {
            out += _child.nodeValue;
          } else {
            out += _child.textContent;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return out;
    },
    set: function set(content) {
      var _this2 = this;
      // remove all children
      this.childNodes.slice().forEach(function (child) {
        _this2.removeChild(child);
      });
      if (this.nodeName === Shape.TEXT) {
        // @ts-ignore
        this.style.text = "".concat(content);
      }
    }

    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/getRootNode
     */
  }, {
    key: "getRootNode",
    value: function getRootNode() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (this.parentNode) {
        return this.parentNode.getRootNode(opts);
      }
      if (opts.composed && this.host) {
        return this.host.getRootNode(opts);
      }
      return this;
    }
  }, {
    key: "hasChildNodes",
    value: function hasChildNodes() {
      return this.childNodes.length > 0;
    }
  }, {
    key: "isDefaultNamespace",
    value: function isDefaultNamespace(namespace) {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "lookupNamespaceURI",
    value: function lookupNamespaceURI(prefix) {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "lookupPrefix",
    value: function lookupPrefix(namespace) {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "normalize",
    value: function normalize() {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }

    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/isEqualNode
     */
  }, {
    key: "isEqualNode",
    value: function isEqualNode(otherNode) {
      // TODO: compare 2 nodes, not sameness
      return this === otherNode;
    }
  }, {
    key: "isSameNode",
    value: function isSameNode(otherNode) {
      return this.isEqualNode(otherNode);
    }
  }, {
    key: "parent",
    get:
    /**
     * @deprecated
     * @alias parentNode
     */
    function get() {
      return this.parentNode;
    }
  }, {
    key: "parentElement",
    get: function get() {
      return null;
    }
  }, {
    key: "nextSibling",
    get: function get() {
      return null;
    }
  }, {
    key: "previousSibling",
    get: function get() {
      return null;
    }
  }, {
    key: "firstChild",
    get: function get() {
      return this.childNodes.length > 0 ? this.childNodes[0] : null;
    }
  }, {
    key: "lastChild",
    get: function get() {
      return this.childNodes.length > 0 ? this.childNodes[this.childNodes.length - 1] : null;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
     * @see https://github.com/b-fuze/deno-dom/blob/master/src/dom/node.ts#L338
     */
  }, {
    key: "compareDocumentPosition",
    value: function compareDocumentPosition(other) {
      if (other === this) {
        // same node
        return 0;
      }

      // if (!(other instanceof Node)) {
      //   throw new TypeError(
      //     'Node.compareDocumentPosition: Argument 1 does not implement interface Node.',
      //   );
      // }

      var node1Root = other;
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var node2Root = this;
      var node1Hierarchy = [node1Root];
      var node2Hierarchy = [node2Root];
      while ((_node1Root$parentNode = node1Root.parentNode) !== null && _node1Root$parentNode !== void 0 ? _node1Root$parentNode : node2Root.parentNode) {
        var _node1Root$parentNode;
        node1Root = node1Root.parentNode ? (node1Hierarchy.push(node1Root.parentNode), node1Root.parentNode) : node1Root;
        node2Root = node2Root.parentNode ? (node2Hierarchy.push(node2Root.parentNode), node2Root.parentNode) : node2Root;
      }

      // Check if they don't share the same root node
      if (node1Root !== node2Root) {
        return Node.DOCUMENT_POSITION_DISCONNECTED | Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC | Node.DOCUMENT_POSITION_PRECEDING;
      }
      var longerHierarchy = node1Hierarchy.length > node2Hierarchy.length ? node1Hierarchy : node2Hierarchy;
      var shorterHierarchy = longerHierarchy === node1Hierarchy ? node2Hierarchy : node1Hierarchy;

      // Check if either is a container of the other
      if (longerHierarchy[longerHierarchy.length - shorterHierarchy.length] === shorterHierarchy[0]) {
        return longerHierarchy === node1Hierarchy ?
        // other is a child of this
        Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING :
        // this is a child of other
        Node.DOCUMENT_POSITION_CONTAINS | Node.DOCUMENT_POSITION_PRECEDING;
      }

      // Find their first common ancestor and see whether they
      // are preceding or following
      var longerStart = longerHierarchy.length - shorterHierarchy.length;
      for (var i = shorterHierarchy.length - 1; i >= 0; i--) {
        var shorterHierarchyNode = shorterHierarchy[i];
        var longerHierarchyNode = longerHierarchy[longerStart + i];

        // We found the first common ancestor
        if (longerHierarchyNode !== shorterHierarchyNode) {
          var siblings = shorterHierarchyNode.parentNode.childNodes;
          if (siblings.indexOf(shorterHierarchyNode) < siblings.indexOf(longerHierarchyNode)) {
            // Shorter is before longer
            if (shorterHierarchy === node1Hierarchy) {
              // Other is before this
              return Node.DOCUMENT_POSITION_PRECEDING;
            }
            // This is before other
            return Node.DOCUMENT_POSITION_FOLLOWING;
          }
          // Longer is before shorter
          if (longerHierarchy === node1Hierarchy) {
            // Other is before this
            return Node.DOCUMENT_POSITION_PRECEDING;
          }
          // Other is after this
          return Node.DOCUMENT_POSITION_FOLLOWING;
        }
      }
      return Node.DOCUMENT_POSITION_FOLLOWING;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode
     */
  }, {
    key: "contain",
    value:
    /**
     * @deprecated
     * @alias contains
     */
    function contain(other) {
      return this.contains(other);
    }
  }, {
    key: "contains",
    value: function contains(other) {
      // the node itself, one of its direct children
      var tmp = other;
      // @see https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
      while (tmp && this !== tmp) {
        tmp = tmp.parentNode;
      }
      return !!tmp;
    }
  }, {
    key: "getAncestor",
    value: function getAncestor(n) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var temp = this;
      while (n > 0 && temp) {
        temp = temp.parentNode;
        n--;
      }
      return temp;
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      var stack = [this];
      while (stack.length > 0) {
        var node = stack.pop();
        var result = callback(node);
        if (result === false) {
          break;
        }
        for (var i = node.childNodes.length - 1; i >= 0; i--) {
          stack.push(node.childNodes[i]);
        }
      }
    }
  }], [{
    key: "isNode",
    value: function isNode(target) {
      return !!target.childNodes;
    }
  }]);
}(EventTarget);
/**
 * Both nodes are in different documents or different trees in the same document.
 */
Node.DOCUMENT_POSITION_DISCONNECTED = 1;
/**
 * otherNode precedes the node in either a pre-order depth-first traversal
 * of a tree containing both (e.g., as an ancestor or previous sibling or a descendant of a previous sibling or previous sibling of an ancestor) or (if they are disconnected) in an arbitrary but consistent ordering.
 */
Node.DOCUMENT_POSITION_PRECEDING = 2;
/**
 * otherNode follows the node in either a pre-order depth-first traversal of a tree containing both (e.g., as a descendant or following sibling or a descendant of a following sibling or following sibling of an ancestor) or (if they are disconnected) in an arbitrary but consistent ordering.
 */
Node.DOCUMENT_POSITION_FOLLOWING = 4;
/**
 * otherNode is an ancestor of the node.
 */
Node.DOCUMENT_POSITION_CONTAINS = 8;
/**
 * otherNode is a descendant of the node.
 */
Node.DOCUMENT_POSITION_CONTAINED_BY = 16;
/**
 * The result relies upon arbitrary and/or implementation-specific behavior and is not guaranteed to be portable.
 */
Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;

var PROPAGATION_LIMIT = 2048;
var EventService = /*#__PURE__*/function () {
  function EventService(globalRuntime, context) {
    var _this = this;
    _classCallCheck(this, EventService);
    /**
     * Store HTML elements in current canvas.
     */
    this.nativeHTMLMap = new WeakMap();
    this.cursor = 'default';
    this.mappingTable = {};
    this.mappingState = {
      trackingData: {}
    };
    this.eventPool = new Map();
    this.tmpMatrix = mat4.create();
    this.tmpVec3 = vec3.create();
    this.onPointerDown = function (from) {
      var e = _this.createPointerEvent(from);
      _this.dispatchEvent(e, 'pointerdown');
      if (e.pointerType === 'touch') {
        _this.dispatchEvent(e, 'touchstart');
      } else if (e.pointerType === 'mouse' || e.pointerType === 'pen') {
        var isRightButton = e.button === 2;
        _this.dispatchEvent(e, isRightButton ? 'rightdown' : 'mousedown');
      }
      var trackingData = _this.trackingData(from.pointerId);
      trackingData.pressTargetsByButton[from.button] = e.composedPath();
      _this.freeEvent(e);
    };
    this.onPointerUp = function (from) {
      var now = clock.now();
      var e = _this.createPointerEvent(from, undefined, undefined, _this.context.config.alwaysTriggerPointerEventOnCanvas ? _this.rootTarget : undefined);
      _this.dispatchEvent(e, 'pointerup');
      if (e.pointerType === 'touch') {
        _this.dispatchEvent(e, 'touchend');
      } else if (e.pointerType === 'mouse' || e.pointerType === 'pen') {
        var isRightButton = e.button === 2;
        _this.dispatchEvent(e, isRightButton ? 'rightup' : 'mouseup');
      }
      var trackingData = _this.trackingData(from.pointerId);
      var pressTarget = _this.findMountedTarget(trackingData.pressTargetsByButton[from.button]);
      var clickTarget = pressTarget;

      // pointerupoutside only bubbles. It only bubbles upto the parent that doesn't contain
      // the pointerup location.
      if (pressTarget && !e.composedPath().includes(pressTarget)) {
        var currentTarget = pressTarget;
        while (currentTarget && !e.composedPath().includes(currentTarget)) {
          e.currentTarget = currentTarget;
          _this.notifyTarget(e, 'pointerupoutside');
          if (e.pointerType === 'touch') {
            _this.notifyTarget(e, 'touchendoutside');
          } else if (e.pointerType === 'mouse' || e.pointerType === 'pen') {
            var _isRightButton = e.button === 2;
            _this.notifyTarget(e, _isRightButton ? 'rightupoutside' : 'mouseupoutside');
          }
          if (Node.isNode(currentTarget)) {
            currentTarget = currentTarget.parentNode;
          }
        }
        delete trackingData.pressTargetsByButton[from.button];

        // currentTarget is the most specific ancestor holding both the pointerdown and pointerup
        // targets. That is - it's our click target!
        clickTarget = currentTarget;
      }
      if (clickTarget) {
        var _e$detail;
        var clickEvent = _this.clonePointerEvent(e, 'click');
        clickEvent.target = clickTarget;
        clickEvent.path = [];
        if (!trackingData.clicksByButton[from.button]) {
          trackingData.clicksByButton[from.button] = {
            clickCount: 0,
            target: clickEvent.target,
            timeStamp: now
          };
        }
        var canvas = _this.context.renderingContext.root.ownerDocument.defaultView;
        var clickHistory = trackingData.clicksByButton[from.button];
        if (clickHistory.target === clickEvent.target && now - clickHistory.timeStamp < canvas.getConfig().dblClickSpeed) {
          ++clickHistory.clickCount;
        } else {
          clickHistory.clickCount = 1;
        }
        clickHistory.target = clickEvent.target;
        clickHistory.timeStamp = now;
        clickEvent.detail = clickHistory.clickCount;

        // @see https://github.com/antvis/G/issues/1091
        if (!((_e$detail = e.detail) !== null && _e$detail !== void 0 && _e$detail.preventClick)) {
          if (!_this.context.config.useNativeClickEvent && (clickEvent.pointerType === 'mouse' || clickEvent.pointerType === 'touch')) {
            _this.dispatchEvent(clickEvent, 'click');
          }
          _this.dispatchEvent(clickEvent, 'pointertap');
        }
        _this.freeEvent(clickEvent);
      }
      _this.freeEvent(e);
    };
    this.onPointerMove = function (from) {
      var e = _this.createPointerEvent(from, undefined, undefined, _this.context.config.alwaysTriggerPointerEventOnCanvas ? _this.rootTarget : undefined);
      var isMouse = e.pointerType === 'mouse' || e.pointerType === 'pen';
      var trackingData = _this.trackingData(from.pointerId);
      var outTarget = _this.findMountedTarget(trackingData.overTargets);

      // First pointerout/pointerleave
      if (trackingData.overTargets && outTarget !== e.target) {
        // pointerout always occurs on the overTarget when the pointer hovers over another element.
        var outType = from.type === 'mousemove' ? 'mouseout' : 'pointerout';
        var outEvent = _this.createPointerEvent(from, outType, outTarget || undefined);
        _this.dispatchEvent(outEvent, 'pointerout');
        if (isMouse) _this.dispatchEvent(outEvent, 'mouseout');

        // If the pointer exits overTarget and its descendants, then a pointerleave event is also fired. This event
        // is dispatched to all ancestors that no longer capture the pointer.
        if (!e.composedPath().includes(outTarget)) {
          var leaveEvent = _this.createPointerEvent(from, 'pointerleave', outTarget || undefined);
          leaveEvent.eventPhase = leaveEvent.AT_TARGET;
          while (leaveEvent.target && !e.composedPath().includes(leaveEvent.target)) {
            leaveEvent.currentTarget = leaveEvent.target;
            _this.notifyTarget(leaveEvent);
            if (isMouse) {
              _this.notifyTarget(leaveEvent, 'mouseleave');
            }
            if (Node.isNode(leaveEvent.target)) {
              leaveEvent.target = leaveEvent.target.parentNode;
            }
          }
          _this.freeEvent(leaveEvent);
        }
        _this.freeEvent(outEvent);
      }

      // Then pointerover
      if (outTarget !== e.target) {
        // pointerover always occurs on the new overTarget
        var overType = from.type === 'mousemove' ? 'mouseover' : 'pointerover';
        var overEvent = _this.clonePointerEvent(e, overType); // clone faster

        _this.dispatchEvent(overEvent, 'pointerover');
        if (isMouse) _this.dispatchEvent(overEvent, 'mouseover');

        // Probe whether the newly hovered Node is an ancestor of the original overTarget.
        var overTargetAncestor = outTarget && Node.isNode(outTarget) && outTarget.parentNode;
        while (overTargetAncestor && overTargetAncestor !== (Node.isNode(_this.rootTarget) && _this.rootTarget.parentNode)) {
          if (overTargetAncestor === e.target) break;
          overTargetAncestor = overTargetAncestor.parentNode;
        }

        // The pointer has entered a non-ancestor of the original overTarget. This means we need a pointerentered
        // event.
        var didPointerEnter = !overTargetAncestor || overTargetAncestor === (Node.isNode(_this.rootTarget) && _this.rootTarget.parentNode);
        if (didPointerEnter) {
          var enterEvent = _this.clonePointerEvent(e, 'pointerenter');
          enterEvent.eventPhase = enterEvent.AT_TARGET;
          while (enterEvent.target && enterEvent.target !== outTarget && enterEvent.target !== (Node.isNode(_this.rootTarget) && _this.rootTarget.parentNode)) {
            enterEvent.currentTarget = enterEvent.target;
            _this.notifyTarget(enterEvent);
            if (isMouse) _this.notifyTarget(enterEvent, 'mouseenter');
            if (Node.isNode(enterEvent.target)) {
              enterEvent.target = enterEvent.target.parentNode;
            }
          }
          _this.freeEvent(enterEvent);
        }
        _this.freeEvent(overEvent);
      }

      // Then pointermove
      _this.dispatchEvent(e, 'pointermove');
      if (e.pointerType === 'touch') _this.dispatchEvent(e, 'touchmove');
      if (isMouse) {
        _this.dispatchEvent(e, 'mousemove');
        _this.cursor = _this.getCursor(e.target);
      }
      trackingData.overTargets = e.composedPath();
      _this.freeEvent(e);
    };
    this.onPointerOut = function (from) {
      var trackingData = _this.trackingData(from.pointerId);
      if (trackingData.overTargets) {
        var isMouse = from.pointerType === 'mouse' || from.pointerType === 'pen';
        var outTarget = _this.findMountedTarget(trackingData.overTargets);

        // pointerout first
        var outEvent = _this.createPointerEvent(from, 'pointerout', outTarget || undefined);
        _this.dispatchEvent(outEvent);
        if (isMouse) _this.dispatchEvent(outEvent, 'mouseout');

        // pointerleave(s) are also dispatched b/c the pointer must've left rootTarget and its descendants to
        // get an upstream pointerout event (upstream events do not know rootTarget has descendants).
        var leaveEvent = _this.createPointerEvent(from, 'pointerleave', outTarget || undefined);
        leaveEvent.eventPhase = leaveEvent.AT_TARGET;
        while (leaveEvent.target && leaveEvent.target !== (Node.isNode(_this.rootTarget) && _this.rootTarget.parentNode)) {
          leaveEvent.currentTarget = leaveEvent.target;
          _this.notifyTarget(leaveEvent);
          if (isMouse) {
            _this.notifyTarget(leaveEvent, 'mouseleave');
          }
          if (Node.isNode(leaveEvent.target)) {
            leaveEvent.target = leaveEvent.target.parentNode;
          }
        }
        trackingData.overTargets = null;
        _this.freeEvent(outEvent);
        _this.freeEvent(leaveEvent);
      }
      _this.cursor = null;
    };
    this.onPointerOver = function (from) {
      var trackingData = _this.trackingData(from.pointerId);
      var e = _this.createPointerEvent(from);
      var isMouse = e.pointerType === 'mouse' || e.pointerType === 'pen';
      _this.dispatchEvent(e, 'pointerover');
      if (isMouse) _this.dispatchEvent(e, 'mouseover');
      if (e.pointerType === 'mouse') _this.cursor = _this.getCursor(e.target);

      // pointerenter events must be fired since the pointer entered from upstream.
      var enterEvent = _this.clonePointerEvent(e, 'pointerenter');
      enterEvent.eventPhase = enterEvent.AT_TARGET;
      while (enterEvent.target && enterEvent.target !== (Node.isNode(_this.rootTarget) && _this.rootTarget.parentNode)) {
        enterEvent.currentTarget = enterEvent.target;
        _this.notifyTarget(enterEvent);
        if (isMouse) {
          // mouseenter should not bubble
          // @see https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event#usage_notes
          _this.notifyTarget(enterEvent, 'mouseenter');
        }
        if (Node.isNode(enterEvent.target)) {
          enterEvent.target = enterEvent.target.parentNode;
        }
      }
      trackingData.overTargets = e.composedPath();
      _this.freeEvent(e);
      _this.freeEvent(enterEvent);
    };
    this.onPointerUpOutside = function (from) {
      var trackingData = _this.trackingData(from.pointerId);
      var pressTarget = _this.findMountedTarget(trackingData.pressTargetsByButton[from.button]);
      var e = _this.createPointerEvent(from);
      if (pressTarget) {
        var currentTarget = pressTarget;
        while (currentTarget) {
          e.currentTarget = currentTarget;
          _this.notifyTarget(e, 'pointerupoutside');
          if (e.pointerType === 'touch') ; else if (e.pointerType === 'mouse' || e.pointerType === 'pen') {
            _this.notifyTarget(e, e.button === 2 ? 'rightupoutside' : 'mouseupoutside');
          }
          if (Node.isNode(currentTarget)) {
            currentTarget = currentTarget.parentNode;
          }
        }
        delete trackingData.pressTargetsByButton[from.button];
      }
      _this.freeEvent(e);
    };
    this.onWheel = function (from) {
      var wheelEvent = _this.createWheelEvent(from);
      _this.dispatchEvent(wheelEvent);
      _this.freeEvent(wheelEvent);
    };
    this.onClick = function (from) {
      if (_this.context.config.useNativeClickEvent) {
        var e = _this.createPointerEvent(from);
        _this.dispatchEvent(e);
        _this.freeEvent(e);
      }
    };
    this.onPointerCancel = function (from) {
      var e = _this.createPointerEvent(from, undefined, undefined, _this.context.config.alwaysTriggerPointerEventOnCanvas ? _this.rootTarget : undefined);
      _this.dispatchEvent(e);
      _this.freeEvent(e);
    };
    this.globalRuntime = globalRuntime;
    this.context = context;
  }
  return _createClass(EventService, [{
    key: "init",
    value: function init() {
      this.rootTarget = this.context.renderingContext.root.parentNode; // document
      this.addEventMapping('pointerdown', this.onPointerDown);
      this.addEventMapping('pointerup', this.onPointerUp);
      this.addEventMapping('pointermove', this.onPointerMove);
      this.addEventMapping('pointerout', this.onPointerOut);
      this.addEventMapping('pointerleave', this.onPointerOut);
      this.addEventMapping('pointercancel', this.onPointerCancel);
      this.addEventMapping('pointerover', this.onPointerOver);
      this.addEventMapping('pointerupoutside', this.onPointerUpOutside);
      this.addEventMapping('wheel', this.onWheel);
      this.addEventMapping('click', this.onClick);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.mappingTable = {};
      this.mappingState = {};
      this.eventPool.clear();
    }
  }, {
    key: "getScale",
    value: function getScale() {
      var bbox = this.context.contextService.getBoundingClientRect();
      var scaleX = 1;
      var scaleY = 1;
      var $el = this.context.contextService.getDomElement();
      if ($el && bbox) {
        var offsetWidth = $el.offsetWidth,
          offsetHeight = $el.offsetHeight;
        if (offsetWidth && offsetHeight) {
          scaleX = bbox.width / offsetWidth;
          scaleY = bbox.height / offsetHeight;
        }
      }
      return {
        scaleX: scaleX,
        scaleY: scaleY,
        bbox: bbox
      };
    }

    /**
     * Should account for CSS Transform applied on container.
     * @see https://github.com/antvis/G/issues/1161
     * @see https://github.com/antvis/G/issues/1677
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/offsetX
     */
  }, {
    key: "client2Viewport",
    value: function client2Viewport(client) {
      var _this$getScale = this.getScale(),
        scaleX = _this$getScale.scaleX,
        scaleY = _this$getScale.scaleY,
        bbox = _this$getScale.bbox;
      return new Point((client.x - ((bbox === null || bbox === void 0 ? void 0 : bbox.left) || 0)) / scaleX, (client.y - ((bbox === null || bbox === void 0 ? void 0 : bbox.top) || 0)) / scaleY);
    }
  }, {
    key: "viewport2Client",
    value: function viewport2Client(canvas) {
      var _this$getScale2 = this.getScale(),
        scaleX = _this$getScale2.scaleX,
        scaleY = _this$getScale2.scaleY,
        bbox = _this$getScale2.bbox;
      return new Point((canvas.x + ((bbox === null || bbox === void 0 ? void 0 : bbox.left) || 0)) * scaleX, (canvas.y + ((bbox === null || bbox === void 0 ? void 0 : bbox.top) || 0)) * scaleY);
    }
  }, {
    key: "viewport2Canvas",
    value: function viewport2Canvas(_ref) {
      var x = _ref.x,
        y = _ref.y;
      var canvas = this.rootTarget.defaultView;
      var camera = canvas.getCamera();
      var _this$context$config = this.context.config,
        width = _this$context$config.width,
        height = _this$context$config.height;
      var projectionMatrixInverse = camera.getPerspectiveInverse();
      var worldMatrix = camera.getWorldTransform();
      var vpMatrix = mat4.multiply(this.tmpMatrix, worldMatrix, projectionMatrixInverse);
      var viewport = vec3.set(this.tmpVec3, x / width * 2 - 1, (1 - y / height) * 2 - 1, 0);
      vec3.transformMat4(viewport, viewport, vpMatrix);
      return new Point(viewport[0], viewport[1]);
    }
  }, {
    key: "canvas2Viewport",
    value: function canvas2Viewport(canvasP) {
      var canvas = this.rootTarget.defaultView;
      var camera = canvas.getCamera();

      // World -> Clip
      var projectionMatrix = camera.getPerspective();
      var viewMatrix = camera.getViewTransform();
      var vpMatrix = mat4.multiply(this.tmpMatrix, projectionMatrix, viewMatrix);
      var clip = vec3.set(this.tmpVec3, canvasP.x, canvasP.y, 0);
      vec3.transformMat4(this.tmpVec3, this.tmpVec3, vpMatrix);

      // Clip -> NDC -> Viewport, flip Y
      var _this$context$config2 = this.context.config,
        width = _this$context$config2.width,
        height = _this$context$config2.height;
      return new Point((clip[0] + 1) / 2 * width, (1 - (clip[1] + 1) / 2) * height);
    }
  }, {
    key: "setPickHandler",
    value: function setPickHandler(pickHandler) {
      this.pickHandler = pickHandler;
    }
  }, {
    key: "addEventMapping",
    value: function addEventMapping(type, fn) {
      if (!this.mappingTable[type]) {
        this.mappingTable[type] = [];
      }
      this.mappingTable[type].push({
        fn: fn,
        priority: 0
      });
      this.mappingTable[type].sort(function (a, b) {
        return a.priority - b.priority;
      });
    }
  }, {
    key: "mapEvent",
    value: function mapEvent(e) {
      if (!this.rootTarget) {
        return;
      }
      var mappers = this.mappingTable[e.type];
      if (mappers) {
        for (var i = 0, j = mappers.length; i < j; i++) {
          mappers[i].fn(e);
        }
      } else {
        console.warn("[EventService]: Event mapping not defined for ".concat(e.type));
      }
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(e, type, skipPropagate) {
      // Canvas should skip
      if (!skipPropagate) {
        e.propagationStopped = false;
        e.propagationImmediatelyStopped = false;
        this.propagate(e, type);
      } else {
        // target phase
        e.eventPhase = e.AT_TARGET;
        var canvas = this.rootTarget.defaultView || null;
        e.currentTarget = canvas;
        this.notifyListeners(e, type);
      }
    }
  }, {
    key: "propagate",
    value: function propagate(e, type) {
      if (!e.target) {
        return;
      }

      // [target, parent, root, Canvas]
      var composedPath = e.composedPath();

      // event flow: capture -> target -> bubbling

      // capture phase
      e.eventPhase = e.CAPTURING_PHASE;
      for (var i = composedPath.length - 1; i >= 1; i--) {
        e.currentTarget = composedPath[i];
        this.notifyTarget(e, type);
        if (e.propagationStopped || e.propagationImmediatelyStopped) return;
      }

      // target phase
      e.eventPhase = e.AT_TARGET;
      e.currentTarget = e.target;
      this.notifyTarget(e, type);
      if (e.propagationStopped || e.propagationImmediatelyStopped) return;

      // find current target in composed path
      var index = composedPath.indexOf(e.currentTarget);

      // bubbling phase
      e.eventPhase = e.BUBBLING_PHASE;
      for (var _i = index + 1; _i < composedPath.length; _i++) {
        e.currentTarget = composedPath[_i];
        this.notifyTarget(e, type);
        if (e.propagationStopped || e.propagationImmediatelyStopped) return;
      }
    }
  }, {
    key: "propagationPath",
    value: function propagationPath(target) {
      var propagationPath = [target];
      var canvas = this.rootTarget.defaultView || null;
      if (canvas && canvas === target) {
        propagationPath.unshift(canvas.document);
        return propagationPath;
      }
      for (var i = 0; i < PROPAGATION_LIMIT && target !== this.rootTarget; i++) {
        // if (Node.isNode(target) && !target.parentNode) {
        //   throw new Error('Cannot find propagation path to disconnected target');
        // }

        if (Node.isNode(target) && target.parentNode) {
          // [target, parent, parent, root]
          propagationPath.push(target.parentNode);
          target = target.parentNode;
        }
      }
      if (canvas) {
        // @ts-ignore
        propagationPath.push(canvas);
      }
      return propagationPath;
    }
  }, {
    key: "hitTest",
    value: function hitTest(position) {
      var viewportX = position.viewportX,
        viewportY = position.viewportY;
      var _this$context$config3 = this.context.config,
        width = _this$context$config3.width,
        height = _this$context$config3.height,
        disableHitTesting = _this$context$config3.disableHitTesting;
      // outside canvas
      if (viewportX < 0 || viewportY < 0 || viewportX > width || viewportY > height) {
        return null;
      }
      return !disableHitTesting && this.pickHandler(position) || this.rootTarget ||
      // return Document
      null;
    }

    /**
     * whether the native event trigger came from Canvas,
     * should account for HTML shape
     */
  }, {
    key: "isNativeEventFromCanvas",
    value: function isNativeEventFromCanvas($el, nativeEvent) {
      var _target;
      var target = nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.target;
      // Get event target inside a web component.
      // @see https://stackoverflow.com/questions/57963312/get-event-target-inside-a-web-component
      if ((_target = target) !== null && _target !== void 0 && _target.shadowRoot) {
        target = nativeEvent.composedPath()[0];
      }
      if (target) {
        // from <canvas>
        if (target === $el) {
          return true;
        }

        // from <svg>
        if ($el && $el.contains) {
          return $el.contains(target);
        }
      }
      if (nativeEvent !== null && nativeEvent !== void 0 && nativeEvent.composedPath) {
        return nativeEvent.composedPath().indexOf($el) > -1;
      }

      // account for Touch
      return false;
    }

    /**
     * Find HTML from composed path in native UI event.
     */
  }, {
    key: "getExistedHTML",
    value: function getExistedHTML(event) {
      if (event.nativeEvent.composedPath) {
        for (var _i2 = 0, _arr = event.nativeEvent.composedPath(); _i2 < _arr.length; _i2++) {
          var eventTarget = _arr[_i2];
          var existed = this.nativeHTMLMap.get(eventTarget);
          if (existed) {
            return existed;
          }
        }
      }
      return null;
    }
  }, {
    key: "pickTarget",
    value: function pickTarget(event) {
      return this.hitTest({
        clientX: event.clientX,
        clientY: event.clientY,
        viewportX: event.viewportX,
        viewportY: event.viewportY,
        x: event.canvasX,
        y: event.canvasY
      });
    }
  }, {
    key: "createPointerEvent",
    value: function createPointerEvent(from, type, target, fallbackTarget) {
      var event = this.allocateEvent(FederatedPointerEvent);
      this.copyPointerData(from, event);
      this.copyMouseData(from, event);
      this.copyData(from, event);
      event.nativeEvent = from.nativeEvent;
      event.originalEvent = from;
      var existedHTML = this.getExistedHTML(event);
      var $el = this.context.contextService.getDomElement();
      event.target = target !== null && target !== void 0 ? target : existedHTML || this.isNativeEventFromCanvas($el, event.nativeEvent) && this.pickTarget(event) || fallbackTarget;
      if (typeof type === 'string') {
        event.type = type;
      }
      return event;
    }
  }, {
    key: "createWheelEvent",
    value: function createWheelEvent(from) {
      var event = this.allocateEvent(FederatedWheelEvent);
      this.copyWheelData(from, event);
      this.copyMouseData(from, event);
      this.copyData(from, event);
      event.nativeEvent = from.nativeEvent;
      event.originalEvent = from;
      var existedHTML = this.getExistedHTML(event);
      var $el = this.context.contextService.getDomElement();
      event.target = existedHTML || this.isNativeEventFromCanvas($el, event.nativeEvent) && this.pickTarget(event);
      return event;
    }
  }, {
    key: "trackingData",
    value: function trackingData(id) {
      if (!this.mappingState.trackingData[id]) {
        this.mappingState.trackingData[id] = {
          pressTargetsByButton: {},
          clicksByButton: {},
          overTarget: null
        };
      }
      return this.mappingState.trackingData[id];
    }
  }, {
    key: "cloneWheelEvent",
    value: function cloneWheelEvent(from) {
      var event = this.allocateEvent(FederatedWheelEvent);
      event.nativeEvent = from.nativeEvent;
      event.originalEvent = from.originalEvent;
      this.copyWheelData(from, event);
      this.copyMouseData(from, event);
      this.copyData(from, event);
      event.target = from.target;
      event.path = from.composedPath().slice();
      event.type = from.type;
      return event;
    }
  }, {
    key: "clonePointerEvent",
    value: function clonePointerEvent(from, type) {
      var event = this.allocateEvent(FederatedPointerEvent);
      event.nativeEvent = from.nativeEvent;
      event.originalEvent = from.originalEvent;
      this.copyPointerData(from, event);
      this.copyMouseData(from, event);
      this.copyData(from, event);
      event.target = from.target;
      event.path = from.composedPath().slice();
      event.type = type !== null && type !== void 0 ? type : event.type;
      return event;
    }
  }, {
    key: "copyPointerData",
    value: function copyPointerData(from, to) {
      // if (
      //   !(
      //     from instanceof FederatedPointerEvent &&
      //     to instanceof FederatedPointerEvent
      //   )
      // )
      //   return;

      to.pointerId = from.pointerId;
      to.width = from.width;
      to.height = from.height;
      to.isPrimary = from.isPrimary;
      to.pointerType = from.pointerType;
      to.pressure = from.pressure;
      to.tangentialPressure = from.tangentialPressure;
      to.tiltX = from.tiltX;
      to.tiltY = from.tiltY;
      to.twist = from.twist;
    }
  }, {
    key: "copyMouseData",
    value: function copyMouseData(from, to) {
      // if (
      //   !(
      //     from instanceof FederatedMouseEvent && to instanceof FederatedMouseEvent
      //   )
      // )
      //   return;

      to.altKey = from.altKey;
      to.button = from.button;
      to.buttons = from.buttons;
      to.ctrlKey = from.ctrlKey;
      to.metaKey = from.metaKey;
      to.shiftKey = from.shiftKey;
      to.client.copyFrom(from.client);
      to.movement.copyFrom(from.movement);
      to.canvas.copyFrom(from.canvas);
      to.screen.copyFrom(from.screen);
      to.global.copyFrom(from.global);
      to.offset.copyFrom(from.offset);
    }
  }, {
    key: "copyWheelData",
    value: function copyWheelData(from, to) {
      to.deltaMode = from.deltaMode;
      to.deltaX = from.deltaX;
      to.deltaY = from.deltaY;
      to.deltaZ = from.deltaZ;
    }
  }, {
    key: "copyData",
    value: function copyData(from, to) {
      to.isTrusted = from.isTrusted;
      to.timeStamp = clock.now();
      to.type = from.type;
      to.detail = from.detail;
      to.view = from.view;
      to.page.copyFrom(from.page);
      to.viewport.copyFrom(from.viewport);
    }
  }, {
    key: "allocateEvent",
    value: function allocateEvent(constructor) {
      if (!this.eventPool.has(constructor)) {
        this.eventPool.set(constructor, []);
      }

      // @ts-ignore
      var event = this.eventPool.get(constructor).pop() || new constructor(this);
      event.eventPhase = event.NONE;
      event.currentTarget = null;
      event.path = [];
      event.target = null;
      return event;
    }
  }, {
    key: "freeEvent",
    value: function freeEvent(event) {
      if (event.manager !== this) throw new Error('It is illegal to free an event not managed by this EventBoundary!');
      var constructor = event.constructor;
      if (!this.eventPool.has(constructor)) {
        this.eventPool.set(constructor, []);
      }

      // @ts-ignore
      this.eventPool.get(constructor).push(event);
    }
  }, {
    key: "notifyTarget",
    value: function notifyTarget(e, type) {
      type = type !== null && type !== void 0 ? type : e.type;
      var key = e.eventPhase === e.CAPTURING_PHASE || e.eventPhase === e.AT_TARGET ? "".concat(type, "capture") : type;
      this.notifyListeners(e, key);
      if (e.eventPhase === e.AT_TARGET) {
        this.notifyListeners(e, type);
      }
    }
  }, {
    key: "notifyListeners",
    value: function notifyListeners(e, type) {
      // hack EventEmitter, stops if the `propagationImmediatelyStopped` flag is set
      var emitter = e.currentTarget.emitter;
      // @ts-ignore
      var listeners = emitter._events[type];
      if (!listeners) return;
      if ('fn' in listeners) {
        if (listeners.once) {
          emitter.removeListener(type, listeners.fn, undefined, true);
        }
        listeners.fn.call(e.currentTarget || listeners.context, e);
        // listeners.fn.call(listeners.context, e);
      } else {
        for (var i = 0; i < listeners.length && !e.propagationImmediatelyStopped; i++) {
          if (listeners[i].once) {
            emitter.removeListener(type, listeners[i].fn, undefined, true);
          }
          listeners[i].fn.call(e.currentTarget || listeners[i].context, e);
          // listeners[i].fn.call(listeners[i].context, e);
        }
      }
    }

    /**
     * some detached nodes may exist in propagation path, need to skip them
     */
  }, {
    key: "findMountedTarget",
    value: function findMountedTarget(propagationPath) {
      if (!propagationPath) {
        return null;
      }
      var currentTarget = propagationPath[propagationPath.length - 1];
      for (var i = propagationPath.length - 2; i >= 0; i--) {
        var target = propagationPath[i];
        if (target === this.rootTarget || Node.isNode(target) && target.parentNode === currentTarget) {
          currentTarget = propagationPath[i];
        } else {
          break;
        }
      }
      return currentTarget;
    }
  }, {
    key: "getCursor",
    value: function getCursor(target) {
      var tmp = target;
      while (tmp) {
        var cursor = isElement(tmp) && tmp.getAttribute('cursor');
        if (cursor) {
          return cursor;
        }
        tmp = Node.isNode(tmp) && tmp.parentNode;
      }
    }
  }]);
}();

/**
 * used in following scenes:
 * - g `ctx.measureText`
 * - canvas-picker `ctx.isPointInPath`
 * - g-plugin-device-renderer `ctx.createLinearGradient` and generate texture
 *
 * @see https://blog.scottlogic.com/2020/03/19/offscreen-canvas.html
 */
var OffscreenCanvasCreator = /*#__PURE__*/function () {
  function OffscreenCanvasCreator() {
    _classCallCheck(this, OffscreenCanvasCreator);
  }
  return _createClass(OffscreenCanvasCreator, [{
    key: "getOrCreateCanvas",
    value: function getOrCreateCanvas(offscreenCanvas, contextAttributes) {
      if (this.canvas) {
        return this.canvas;
      }

      // user-defined offscreen canvas
      if (offscreenCanvas || runtime.offscreenCanvas) {
        this.canvas = offscreenCanvas || runtime.offscreenCanvas;
        this.context = this.canvas.getContext('2d', _objectSpread({
          willReadFrequently: true
        }, contextAttributes));
      } else {
        try {
          // OffscreenCanvas2D measureText can be up to 40% faster.
          this.canvas = new window.OffscreenCanvas(0, 0);
          this.context = this.canvas.getContext('2d', _objectSpread({
            willReadFrequently: true
          }, contextAttributes));
          if (!this.context || !this.context.measureText) {
            this.canvas = document.createElement('canvas');
            this.context = this.canvas.getContext('2d');
          }
        } catch (_unused) {
          this.canvas = document.createElement('canvas');
          this.context = this.canvas.getContext('2d', _objectSpread({
            willReadFrequently: true
          }, contextAttributes));
        }
      }
      this.canvas.width = 10;
      this.canvas.height = 10;
      return this.canvas;
    }
  }, {
    key: "getOrCreateContext",
    value: function getOrCreateContext(offscreenCanvas, contextAttributes) {
      if (this.context) {
        return this.context;
      }
      this.getOrCreateCanvas(offscreenCanvas, contextAttributes);
      return this.context;
    }
  }], [{
    key: "createCanvas",
    value:
    /**
     * @returns new canvas instance
     */
    function createCanvas() {
      try {
        return new window.OffscreenCanvas(0, 0);
      } catch (_unused2) {
        //
      }
      try {
        return document.createElement('canvas');
      } catch (_unused3) {
        //
      }
      return null;
    }
  }]);
}();

/**
 * why we need re-render
 */
var RenderReason = /*#__PURE__*/function (RenderReason) {
  RenderReason[RenderReason["CAMERA_CHANGED"] = 0] = "CAMERA_CHANGED";
  RenderReason[RenderReason["DISPLAY_OBJECT_CHANGED"] = 1] = "DISPLAY_OBJECT_CHANGED";
  RenderReason[RenderReason["NONE"] = 2] = "NONE";
  return RenderReason;
}({});

/**
 * Use frame renderer implemented by `g-canvas/svg/webgl`, in every frame we do followings:
 * * update & merge dirty rectangles
 * * begin frame
 * * filter by visible
 * * sort by z-index in scene graph
 * * culling with strategies registered in `g-canvas/webgl`
 * * end frame
 */
var RenderingService = /*#__PURE__*/function () {
  function RenderingService(globalRuntime, context) {
    _classCallCheck(this, RenderingService);
    this.inited = false;
    this.stats = {
      /**
       * total display objects in scenegraph
       */
      total: 0,
      /**
       * number of display objects need to render in current frame
       */
      rendered: 0
    };
    this.zIndexCounter = 0;
    this.hooks = {
      /**
       * called before any frame rendered
       */
      init: new SyncHook(),
      initAsync: new AsyncParallelHook(),
      /**
       * only dirty object which has sth changed will be rendered
       */
      dirtycheck: new SyncWaterfallHook(),
      /**
       * do culling
       */
      cull: new SyncWaterfallHook(),
      /**
       * called at beginning of each frame, won't get called if nothing to re-render
       */
      beginFrame: new SyncHook(),
      /**
       * called before every dirty object get rendered
       */
      beforeRender: new SyncHook(),
      /**
       * called when every dirty object rendering even it's culled
       */
      render: new SyncHook(),
      /**
       * called after every dirty object get rendered
       */
      afterRender: new SyncHook(),
      /**
       * commit - draw the result on the canvas
       */
      endFrame: new SyncHook(),
      destroy: new SyncHook(),
      /**
       * use async but faster method such as GPU-based picking in `g-plugin-device-renderer`
       */
      pick: new AsyncSeriesWaterfallHook(),
      /**
       * Unsafe but sync version of pick.
       */
      pickSync: new SyncWaterfallHook(),
      /**
       * used in event system
       */
      pointerDown: new SyncHook(),
      pointerUp: new SyncHook(),
      pointerMove: new SyncHook(),
      pointerOut: new SyncHook(),
      pointerOver: new SyncHook(),
      pointerWheel: new SyncHook(),
      pointerCancel: new SyncHook(),
      click: new SyncHook()
    };
    this.globalRuntime = globalRuntime;
    this.context = context;
  }
  return _createClass(RenderingService, [{
    key: "init",
    value: function init(callback) {
      var _this = this;
      var context = _objectSpread(_objectSpread({}, this.globalRuntime), this.context);

      // register rendering plugins
      this.context.renderingPlugins.forEach(function (plugin) {
        plugin.apply(context, _this.globalRuntime);
      });
      this.hooks.init.call();
      if (this.hooks.initAsync.getCallbacksNum() === 0) {
        this.inited = true;
        callback();
      } else {
        this.hooks.initAsync.promise().then(function () {
          _this.inited = true;
          callback();
        })["catch"](function (err) {});
      }
    }
  }, {
    key: "getStats",
    value: function getStats() {
      return this.stats;
    }

    /**
     * Meet the following conditions:
     * * disable DirtyRectangleRendering
     * * camera changed
     */
  }, {
    key: "disableDirtyRectangleRendering",
    value: function disableDirtyRectangleRendering() {
      var renderer = this.context.config.renderer;
      var _renderer$getConfig = renderer.getConfig(),
        enableDirtyRectangleRendering = _renderer$getConfig.enableDirtyRectangleRendering;
      return !enableDirtyRectangleRendering || this.context.renderingContext.renderReasons.has(RenderReason.CAMERA_CHANGED);
    }
  }, {
    key: "render",
    value: function render(canvas, frame, rerenderCallback) {
      var _this2 = this;
      var canvasConfig = canvas.getConfig();
      var renderingContext = this.context.renderingContext;
      this.stats.total = 0;
      this.stats.rendered = 0;
      this.zIndexCounter = 0;
      this.globalRuntime.sceneGraphService.syncHierarchy(renderingContext.root);
      this.globalRuntime.sceneGraphService.notifyMutationObservers(canvas);
      if (renderingContext.renderReasons.size && this.inited) {
        // @ts-ignore
        renderingContext.dirtyRectangleRenderingDisabled = this.disableDirtyRectangleRendering();
        var onlyCameraChanged = renderingContext.renderReasons.size === 1 && renderingContext.renderReasons.has(RenderReason.CAMERA_CHANGED);
        var shouldTriggerRenderHooks = !canvasConfig.disableRenderHooks || !onlyCameraChanged;
        if (shouldTriggerRenderHooks) {
          this.renderDisplayObject(renderingContext.root, canvasConfig, renderingContext);
        }
        this.hooks.beginFrame.call(frame);
        if (shouldTriggerRenderHooks) {
          renderingContext.renderListCurrentFrame.forEach(function (object) {
            _this2.hooks.beforeRender.call(object);
            _this2.hooks.render.call(object);
            _this2.hooks.afterRender.call(object);
          });
        }
        this.hooks.endFrame.call(frame);
        renderingContext.renderListCurrentFrame = [];
        renderingContext.renderReasons.clear();
        rerenderCallback();
      }
    }
  }, {
    key: "renderDisplayObject",
    value: function renderDisplayObject(displayObject, canvasConfig, renderingContext) {
      var self = this;
      var _canvasConfig$rendere = canvasConfig.renderer.getConfig(),
        enableDirtyCheck = _canvasConfig$rendere.enableDirtyCheck,
        enableCulling = _canvasConfig$rendere.enableCulling;
      function internalRenderSingleDisplayObject(object) {
        // TODO: relayout

        // dirtycheck first
        var renderable = object.renderable,
          sortable = object.sortable;
        // eslint-disable-next-line no-nested-ternary
        var objectChanged = enableDirtyCheck ?
        // @ts-ignore
        renderable.dirty || renderingContext.dirtyRectangleRenderingDisabled ? object : null : object;
        var objectToRender = null;
        if (objectChanged) {
          objectToRender = enableCulling ? self.hooks.cull.call(objectChanged, self.context.camera) : objectChanged;
          if (objectToRender) {
            self.stats.rendered += 1;
            renderingContext.renderListCurrentFrame.push(objectToRender);
          }
        }
        object.dirty(false);
        sortable.renderOrder = self.zIndexCounter;
        self.zIndexCounter += 1;
        self.stats.total += 1;

        // sort is very expensive, use cached result if possible
        if (sortable.dirty) {
          self.sort(object, sortable);
          sortable.dirty = false;
          sortable.dirtyChildren = [];
          sortable.dirtyReason = undefined;
        }
      }
      var stack = [displayObject];
      while (stack.length > 0) {
        var _currentObject$sortab;
        var currentObject = stack.pop();
        internalRenderSingleDisplayObject(currentObject);

        // recursive rendering its children
        var objects = ((_currentObject$sortab = currentObject.sortable) === null || _currentObject$sortab === void 0 || (_currentObject$sortab = _currentObject$sortab.sorted) === null || _currentObject$sortab === void 0 ? void 0 : _currentObject$sortab.length) > 0 ? currentObject.sortable.sorted : currentObject.childNodes;
        for (var i = objects.length - 1; i >= 0; i--) {
          stack.push(objects[i]);
        }
      }
    }
  }, {
    key: "sort",
    value: function sort(displayObject, sortable) {
      var _sortable$sorted, _sortable$sorted2;
      if ((sortable === null || sortable === void 0 || (_sortable$sorted = sortable.sorted) === null || _sortable$sorted === void 0 ? void 0 : _sortable$sorted.length) > 0 && sortable.dirtyReason !== SortReason.Z_INDEX_CHANGED) {
        // avoid re-sorting the whole children list
        sortable.dirtyChildren.forEach(function (child) {
          // remove from sorted list
          var sortIndex = sortable.sorted.indexOf(child);
          if (sortIndex > -1) {
            sortable.sorted.splice(sortIndex, 1);
          }
          var index = displayObject.childNodes.indexOf(child);
          if (index > -1) {
            if (sortable.sorted.length === 0) {
              sortable.sorted.push(child);
            } else {
              var _index = sortedIndex(sortable.sorted, child);
              sortable.sorted.splice(_index, 0, child);
            }
          }
        });
      } else {
        sortable.sorted = displayObject.childNodes.slice().sort(sortByZIndex);
      }

      // When the child elements are changed and sorted, if there are no more stacked elements in the child elements (i.e. zIndex != 0), clear the sort list
      if (((_sortable$sorted2 = sortable.sorted) === null || _sortable$sorted2 === void 0 ? void 0 : _sortable$sorted2.length) > 0 && displayObject.childNodes.filter(function (child) {
        return child.parsedStyle.zIndex;
      }).length === 0) {
        sortable.sorted = [];
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.inited = false;
      this.hooks.destroy.call();
    }
  }, {
    key: "dirty",
    value: function dirty() {
      // need re-render
      this.context.renderingContext.renderReasons.add(RenderReason.DISPLAY_OBJECT_CHANGED);
    }
  }]);
}();

var ATTRIBUTE_REGEXP = /\[\s*(.*)=(.*)\s*\]/;

/**
 * support the following DOM API:
 * * getElementById
 * * getElementsByClassName
 * * getElementsByName
 * * getElementsByTag
 * * querySelector
 * * querySelectorAll
 */
var DefaultSceneGraphSelector = /*#__PURE__*/function () {
  function DefaultSceneGraphSelector() {
    _classCallCheck(this, DefaultSceneGraphSelector);
  }
  return _createClass(DefaultSceneGraphSelector, [{
    key: "selectOne",
    value: function selectOne(query, root) {
      var _this = this;
      if (query.startsWith('.')) {
        return root.find(function (node) {
          // return !node.shadow && node.id === query.substring(1);
          return ((node === null || node === void 0 ? void 0 : node.classList) || []).indexOf(_this.getIdOrClassname(query)) > -1;
        });
      }
      if (query.startsWith('#')) {
        // getElementById('id')
        return root.find(function (node) {
          // return !node.shadow && node.id === query.substring(1);
          return node.id === _this.getIdOrClassname(query);
        });
      }
      if (query.startsWith('[')) {
        var _this$getAttribute = this.getAttribute(query),
          name = _this$getAttribute.name,
          value = _this$getAttribute.value;
        if (name) {
          // getElementByName();
          return root.find(function (node) {
            return root !== node && (name === 'name' ? node.name === value : _this.attributeToString(node, name) === value);
          });
        }
        return null;
      }
      // getElementsByTag('circle');
      return root.find(function (node) {
        return root !== node && node.nodeName === query;
      });
    }
  }, {
    key: "selectAll",
    value: function selectAll(query, root) {
      var _this2 = this;
      // only support `[name="${name}"]` `.className` `#id`
      if (query.startsWith('.')) {
        // getElementsByClassName('className');
        // should not include itself
        return root.findAll(function (node) {
          return root !== node && ((node === null || node === void 0 ? void 0 : node.classList) || []).indexOf(_this2.getIdOrClassname(query)) > -1;
        });
      }
      if (query.startsWith('#')) {
        return root.findAll(function (node) {
          return root !== node && node.id === _this2.getIdOrClassname(query);
        });
      }
      if (query.startsWith('[')) {
        var _this$getAttribute2 = this.getAttribute(query),
          name = _this$getAttribute2.name,
          value = _this$getAttribute2.value;
        if (name) {
          // getElementsByName();
          return root.findAll(function (node) {
            return root !== node && (name === 'name' ? node.name === value : _this2.attributeToString(node, name) === value);
          });
        }
        return [];
      }
      // getElementsByTag('circle');
      return root.findAll(function (node) {
        return root !== node && node.nodeName === query;
      });
    }
  }, {
    key: "is",
    value: function is(query, node) {
      // a simple `matches` implementation
      if (query.startsWith('.')) {
        return node.className === this.getIdOrClassname(query);
      }
      if (query.startsWith('#')) {
        return node.id === this.getIdOrClassname(query);
      }
      if (query.startsWith('[')) {
        var _this$getAttribute3 = this.getAttribute(query),
          name = _this$getAttribute3.name,
          value = _this$getAttribute3.value;
        return name === 'name' ? node.name === value : this.attributeToString(node, name) === value;
      }
      return node.nodeName === query;
    }
  }, {
    key: "getIdOrClassname",
    value: function getIdOrClassname(query) {
      return query.substring(1);
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(query) {
      var matches = query.match(ATTRIBUTE_REGEXP);
      var name = '';
      var value = '';
      if (matches && matches.length > 2) {
        name = matches[1].replace(/"/g, '');
        value = matches[2].replace(/"/g, '');
      }
      return {
        name: name,
        value: value
      };
    }
  }, {
    key: "attributeToString",
    value: function attributeToString(node, name) {
      if (!node.getAttribute) {
        return '';
      }
      var value = node.getAttribute(name);
      if (isNil(value)) {
        return '';
      }
      if (value.toString) {
        return value.toString();
      }
      return '';
    }
  }]);
}();

/**
 * built-in events for element
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationEvent
 *
 * TODO: use MutationObserver instead
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 */
var ElementEvent = /*#__PURE__*/function (ElementEvent) {
  // --- @see https://developer.mozilla.org/en-US/docs/Web/API/MutationEvent
  /**
   * @see https://www.w3.org/TR/DOM-Level-3-Events/#event-type-DOMAttrModified
   */
  ElementEvent["ATTR_MODIFIED"] = "DOMAttrModified";
  /**
   * it has been inserted
   * @see https://www.w3.org/TR/DOM-Level-3-Events/#event-type-DOMNodeInserted
   */
  ElementEvent["INSERTED"] = "DOMNodeInserted";
  /**
   * @see https://www.w3.org/TR/DOM-Level-3-Events/#domnodeinsertedintodocument
   */
  ElementEvent["MOUNTED"] = "DOMNodeInsertedIntoDocument";
  /**
   * it is being removed
   * @see https://www.w3.org/TR/DOM-Level-3-Events/#event-type-DOMNodeRemoved
   */
  ElementEvent["REMOVED"] = "removed";
  /**
   * @see https://www.w3.org/TR/DOM-Level-3-Events/#domnoderemovedfromdocument
   */
  ElementEvent["UNMOUNTED"] = "DOMNodeRemovedFromDocument";
  // ---
  ElementEvent["REPARENT"] = "reparent";
  ElementEvent["DESTROY"] = "destroy";
  ElementEvent["BOUNDS_CHANGED"] = "bounds-changed";
  ElementEvent["CULLED"] = "culled";
  return ElementEvent;
}({});

// #region EventTarget

// #region Node

// #region Element

// #region AnimationTimeline

// #region Document

// #region CSSStyleDeclaration
/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/CSSStyleDeclaration
 */

// #region Canvas

/**
 * @deprecated https://developer.chrome.com/blog/mutation-events-deprecation
 */
var MutationEvent = /*#__PURE__*/function (_FederatedEvent) {
  function MutationEvent(typeArg, relatedNode, prevValue, newValue, attrName, attrChange, prevParsedValue, newParsedValue) {
    var _this;
    _classCallCheck(this, MutationEvent);
    _this = _callSuper(this, MutationEvent, [null]);
    _this.relatedNode = relatedNode;
    _this.prevValue = prevValue;
    _this.newValue = newValue;
    _this.attrName = attrName;
    _this.attrChange = attrChange;
    _this.prevParsedValue = prevParsedValue;
    _this.newParsedValue = newParsedValue;
    _this.type = typeArg;
    return _this;
  }
  _inherits(MutationEvent, _FederatedEvent);
  return _createClass(MutationEvent);
}(FederatedEvent);
MutationEvent.ADDITION = 2;
MutationEvent.MODIFICATION = 1;
MutationEvent.REMOVAL = 3;

var reparentEvent = new MutationEvent(ElementEvent.REPARENT, null, '', '', '', 0, '', '');

// Object pooling
/** do not modify this objects */
var $vec2Zero = vec2.create();
/** do not modify this objects */
var $vec3Zero = vec3.create();
/** do not modify this objects */
var $vec3One = vec3.fromValues(1, 1, 1);
/** do not modify this objects */
var $mat4Identity = mat4.create();

/** shared objects */
var $vec2 = vec2.create();
/** shared objects */
var $vec3$1 = vec3.create();
/** shared objects */
var $mat4 = mat4.create();
/** shared objects */
var $quat$1 = quat$1.create();
var $setLocalTransform_1 = vec3.create();
var $setLocalTransform_2 = quat$1.create();
var $setLocalTransform_3 = vec3.create();
var $setLocalPosition = vec3.create();
var $setPosition_1 = vec3.create();
var $setPosition_ParentInvertMatrix = mat4.create();
var $setEulerAngles_InvParentRot = quat$1.create();
var $rotateLocal = quat$1.create();
var $rotate_ParentInvertRotation = quat$1.create();

/**
 * update transform in scene graph
 *
 * @see https://community.khronos.org/t/scene-graphs/50542/7
 */
var DefaultSceneGraphService = /*#__PURE__*/function () {
  function DefaultSceneGraphService(runtime) {
    _classCallCheck(this, DefaultSceneGraphService);
    this.displayObjectDependencyMap = new WeakMap();
    this.runtime = runtime;
  }
  return _createClass(DefaultSceneGraphService, [{
    key: "matches",
    value: function matches(query, root) {
      return this.runtime.sceneGraphSelector.is(query, root);
    }
  }, {
    key: "querySelector",
    value: function querySelector(query, root) {
      return this.runtime.sceneGraphSelector.selectOne(query, root);
    }
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll(query, root) {
      return this.runtime.sceneGraphSelector.selectAll(query, root);
      // .filter((node) => !node.shadow);
    }
  }, {
    key: "attach",
    value: function attach(child, parent, index) {
      var _sortable$sorted;
      var detached = false;
      if (child.parentNode) {
        detached = child.parentNode !== parent;
        this.detach(child);
      }
      var isChildFragment = child.nodeName === Shape.FRAGMENT;
      var isAttachToFragment = isInFragment(parent);
      child.parentNode = parent;
      var nodes = isChildFragment ? child.childNodes : [child];
      if (isNumber(index)) {
        nodes.forEach(function (node) {
          parent.childNodes.splice(index, 0, node);
          node.parentNode = parent;
        });
      } else {
        nodes.forEach(function (node) {
          parent.childNodes.push(node);
          node.parentNode = parent;
        });
      }

      // parent needs re-sort
      var _ref = parent,
        sortable = _ref.sortable;
      if (sortable !== null && sortable !== void 0 && (_sortable$sorted = sortable.sorted) !== null && _sortable$sorted !== void 0 && _sortable$sorted.length || sortable.dirty || child.parsedStyle.zIndex) {
        if (sortable.dirtyChildren.indexOf(child) === -1) {
          sortable.dirtyChildren.push(child);
        }
        // if (sortable) {
        // only child has z-Index
        sortable.dirty = true;
        sortable.dirtyReason = SortReason.ADDED;
      }
      if (isAttachToFragment) return;
      if (isChildFragment) {
        this.dirtyFragment(child);
      } else {
        var transform = child.transformable;
        if (transform) {
          this.dirtyWorldTransform(child, transform);
        }
      }
      if (detached) {
        var _parent$ownerDocument;
        var enableCancelEventPropagation = ((_parent$ownerDocument = parent.ownerDocument) === null || _parent$ownerDocument === void 0 || (_parent$ownerDocument = _parent$ownerDocument.defaultView) === null || _parent$ownerDocument === void 0 || (_parent$ownerDocument = _parent$ownerDocument.getConfig()) === null || _parent$ownerDocument === void 0 || (_parent$ownerDocument = _parent$ownerDocument.future) === null || _parent$ownerDocument === void 0 ? void 0 : _parent$ownerDocument.experimentalCancelEventPropagation) === true;
        child.dispatchEvent(reparentEvent, enableCancelEventPropagation, enableCancelEventPropagation);
      }
    }
  }, {
    key: "detach",
    value: function detach(child) {
      var _sortable$sorted2, _style;
      if (!child.parentNode) {
        return;
      }
      var transform = child.transformable;
      // if (transform) {
      //   const worldTransform = this.getWorldTransform(child, transform);
      //   mat4.getScaling(transform.localScale, worldTransform);
      //   mat4.getTranslation(transform.localPosition, worldTransform);
      //   mat4.getRotation(transform.localRotation, worldTransform);
      //   transform.localDirtyFlag = true;
      // }

      // parent needs re-sort
      var _ref2 = child.parentNode,
        sortable = _ref2.sortable;
      // if (sortable) {
      if (sortable !== null && sortable !== void 0 && (_sortable$sorted2 = sortable.sorted) !== null && _sortable$sorted2 !== void 0 && _sortable$sorted2.length || (_style = child.style) !== null && _style !== void 0 && _style.zIndex) {
        if (sortable.dirtyChildren.indexOf(child) === -1) {
          sortable.dirtyChildren.push(child);
        }
        sortable.dirty = true;
        sortable.dirtyReason = SortReason.REMOVED;
      }
      var index = child.parentNode.childNodes.indexOf(child);
      if (index > -1) {
        child.parentNode.childNodes.splice(index, 1);
      }
      if (transform) {
        this.dirtyWorldTransform(child, transform);
      }
      child.parentNode = null;
    }

    // #region local-transform ----------------------------------------------------------------
  }, {
    key: "getLocalPosition",
    value: function getLocalPosition(element) {
      return element.transformable.localPosition;
    }
  }, {
    key: "getLocalRotation",
    value: function getLocalRotation(element) {
      return element.transformable.localRotation;
    }
  }, {
    key: "getLocalScale",
    value: function getLocalScale(element) {
      return element.transformable.localScale;
    }
  }, {
    key: "getLocalSkew",
    value: function getLocalSkew(element) {
      return element.transformable.localSkew;
    }
  }, {
    key: "getLocalTransform",
    value: function getLocalTransform(element) {
      var transform = element.transformable;
      updateLocalTransform(transform);
      return transform.localTransform;
    }

    /**
     * move to position in local space
     */
  }, {
    key: "setLocalPosition",
    value: function setLocalPosition(element, position) {
      var _position$;
      var dirtify = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var transform = element.transformable;
      $setLocalPosition[0] = position[0];
      $setLocalPosition[1] = position[1];
      $setLocalPosition[2] = (_position$ = position[2]) !== null && _position$ !== void 0 ? _position$ : 0;
      if (vec3.equals(transform.localPosition, $setLocalPosition)) {
        return;
      }
      vec3.copy(transform.localPosition, $setLocalPosition);
      if (dirtify) {
        this.dirtyLocalTransform(element, transform);
      }
    }

    /**
     * translate in local space
     *
     * @example
     * ```
     * translateLocal(x, y, z)
     * translateLocal(vec3(x, y, z))
     * ```
     */
  }, {
    key: "translateLocal",
    value: function translateLocal(element, translation) {
      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      if (typeof translation === 'number') {
        translation = vec3.fromValues(translation, y, z);
      }
      var transform = element.transformable;
      if (vec3.equals(translation, $vec3Zero)) return;
      vec3.transformQuat(translation, translation, transform.localRotation);
      vec3.add(transform.localPosition, transform.localPosition, translation);
      this.dirtyLocalTransform(element, transform);
    }
  }, {
    key: "setLocalRotation",
    value: function setLocalRotation(element, rotation, y, z, w) {
      var dirtify = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
      if (typeof rotation === 'number') {
        rotation = quat$1.set($quat$1, rotation, y, z, w);
      }
      var transform = element.transformable;
      quat$1.copy(transform.localRotation, rotation);
      if (dirtify) {
        this.dirtyLocalTransform(element, transform);
      }
    }

    /**
     * rotate in local space
     * @see @see https://docs.microsoft.com/en-us/windows/win32/api/directxmath/nf-directxmath-xmquaternionrotationrollpitchyaw
     */
  }, {
    key: "rotateLocal",
    value: function rotateLocal(element, degrees) {
      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      if (typeof degrees === 'number') {
        degrees = vec3.fromValues(degrees, y, z);
      }
      var transform = element.transformable;
      quat$1.fromEuler($rotateLocal, degrees[0], degrees[1], degrees[2]);
      quat$1.mul(transform.localRotation, transform.localRotation, $rotateLocal);
      this.dirtyLocalTransform(element, transform);
    }
  }, {
    key: "setLocalScale",
    value: function setLocalScale(element, scaling) {
      var _scaling$;
      var dirtify = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var transform = element.transformable;
      vec3.set($vec3$1, scaling[0], scaling[1], (_scaling$ = scaling[2]) !== null && _scaling$ !== void 0 ? _scaling$ : transform.localScale[2]);
      if (vec3.equals($vec3$1, transform.localScale)) {
        return;
      }
      vec3.copy(transform.localScale, $vec3$1);
      if (dirtify) {
        this.dirtyLocalTransform(element, transform);
      }
    }

    /**
     * scale in local space
     */
  }, {
    key: "scaleLocal",
    value: function scaleLocal(element, scaling) {
      var _scaling$2;
      var transform = element.transformable;
      vec3.multiply(transform.localScale, transform.localScale, vec3.set($vec3$1, scaling[0], scaling[1], (_scaling$2 = scaling[2]) !== null && _scaling$2 !== void 0 ? _scaling$2 : 1));
      this.dirtyLocalTransform(element, transform);
    }
  }, {
    key: "setLocalSkew",
    value: function setLocalSkew(element, skew, y) {
      var dirtify = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      if (typeof skew === 'number') {
        skew = vec2.set($vec2, skew, y);
      }
      var transform = element.transformable;
      vec2.copy(transform.localSkew, skew);
      if (dirtify) {
        this.dirtyLocalTransform(element, transform);
      }
    }

    /**
     * set euler angles(degrees) in local space
     */
  }, {
    key: "setLocalEulerAngles",
    value: function setLocalEulerAngles(element, degrees) {
      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var dirtify = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      if (typeof degrees === 'number') {
        degrees = vec3.fromValues(degrees, y, z);
      }
      var transform = element.transformable;
      quat$1.fromEuler(transform.localRotation, degrees[0], degrees[1], degrees[2]);
      if (dirtify) {
        this.dirtyLocalTransform(element, transform);
      }
    }
  }, {
    key: "setLocalTransform",
    value: function setLocalTransform(element, transform) {
      var t = mat4.getTranslation($setLocalTransform_1, transform);
      var r = mat4.getRotation($setLocalTransform_2, transform);
      var s = mat4.getScaling($setLocalTransform_3, transform);
      this.setLocalScale(element, s, false);
      this.setLocalPosition(element, t, false);
      this.setLocalRotation(element, r, undefined, undefined, undefined, false);
      this.dirtyLocalTransform(element, element.transformable);
    }
  }, {
    key: "resetLocalTransform",
    value: function resetLocalTransform(element) {
      this.setLocalScale(element, $vec3One, false);
      this.setLocalPosition(element, $vec3Zero, false);
      this.setLocalEulerAngles(element, $vec3Zero, undefined, undefined, false);
      this.setLocalSkew(element, $vec2Zero, undefined, false);
      this.dirtyLocalTransform(element, element.transformable);
    }

    // #endregion local-transform
    // #region transform ----------------------------------------------------------------
  }, {
    key: "getPosition",
    value: function getPosition(element) {
      var transform = element.transformable;
      return mat4.getTranslation(transform.position, this.getWorldTransform(element, transform));
    }
  }, {
    key: "getRotation",
    value: function getRotation(element) {
      var transform = element.transformable;
      return mat4.getRotation(transform.rotation, this.getWorldTransform(element, transform));
    }
  }, {
    key: "getScale",
    value: function getScale(element) {
      var transform = element.transformable;
      return mat4.getScaling(transform.scaling, this.getWorldTransform(element, transform));
    }
  }, {
    key: "getOrigin",
    value: function getOrigin(element) {
      element.getGeometryBounds();
      return element.transformable.origin;
    }
  }, {
    key: "getWorldTransform",
    value: function getWorldTransform(element) {
      var transform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : element.transformable;
      if (!transform.localDirtyFlag && !transform.dirtyFlag) {
        return transform.worldTransform;
      }
      if (element.parentNode && element.parentNode.transformable) {
        this.getWorldTransform(element.parentNode);
      }
      this.internalUpdateTransform(element);
      return transform.worldTransform;
    }

    /**
     * move to position in world space
     *
     * 对应 g 原版的 move/moveTo
     * @see https://github.com/antvis/g/blob/master/packages/g-base/src/abstract/element.ts#L684-L689
     */
  }, {
    key: "setPosition",
    value: function setPosition(element, position) {
      var _position$2;
      var transform = element.transformable;
      $setPosition_1[0] = position[0];
      $setPosition_1[1] = position[1];
      $setPosition_1[2] = (_position$2 = position[2]) !== null && _position$2 !== void 0 ? _position$2 : 0;
      if (vec3.equals(this.getPosition(element), $setPosition_1)) {
        return;
      }
      vec3.copy(transform.position, $setPosition_1);
      if (element.parentNode === null || !element.parentNode.transformable) {
        vec3.copy(transform.localPosition, $setPosition_1);
      } else {
        var parentTransform = element.parentNode.transformable;
        mat4.copy($setPosition_ParentInvertMatrix, parentTransform.worldTransform);
        mat4.invert($setPosition_ParentInvertMatrix, $setPosition_ParentInvertMatrix);
        vec3.transformMat4(transform.localPosition, $setPosition_1, $setPosition_ParentInvertMatrix);
      }
      this.dirtyLocalTransform(element, transform);
    }

    /**
     * translate in world space
     *
     * @example
     * ```
     * translate(x, y, z)
     * translate(vec3(x, y, z))
     * ```
     *
     * 对应 g 原版的 translate 2D
     * @see https://github.com/antvis/g/blob/master/packages/g-base/src/abstract/element.ts#L665-L676
     */
  }, {
    key: "translate",
    value: function translate(element, translation) {
      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      if (typeof translation === 'number') {
        translation = vec3.set($vec3$1, translation, y, z);
      }
      if (vec3.equals(translation, $vec3Zero)) return;
      vec3.add($vec3$1, this.getPosition(element), translation);
      this.setPosition(element, $vec3$1);
    }
  }, {
    key: "setRotation",
    value: function setRotation(element, rotation, y, z, w) {
      var transform = element.transformable;
      if (typeof rotation === 'number') {
        rotation = quat$1.fromValues(rotation, y, z, w);
      }
      if (element.parentNode === null || !element.parentNode.transformable) {
        this.setLocalRotation(element, rotation);
      } else {
        var parentRot = this.getRotation(element.parentNode);
        quat$1.copy($quat$1, parentRot);
        quat$1.invert($quat$1, $quat$1);
        quat$1.multiply(transform.localRotation, $quat$1, rotation);
        quat$1.normalize(transform.localRotation, transform.localRotation);
        this.dirtyLocalTransform(element, transform);
      }
    }

    /**
     * rotate in world space
     */
  }, {
    key: "rotate",
    value: function rotate(element, degrees) {
      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      if (typeof degrees === 'number') {
        degrees = vec3.fromValues(degrees, y, z);
      }
      var transform = element.transformable;
      if (element.parentNode === null || !element.parentNode.transformable) {
        this.rotateLocal(element, degrees);
      } else {
        var rotation = $quat$1;
        quat$1.fromEuler(rotation, degrees[0], degrees[1], degrees[2]);
        var rot = this.getRotation(element);
        var parentRot = this.getRotation(element.parentNode);
        quat$1.copy($rotate_ParentInvertRotation, parentRot);
        quat$1.invert($rotate_ParentInvertRotation, $rotate_ParentInvertRotation);
        quat$1.multiply(rotation, $rotate_ParentInvertRotation, rotation);
        quat$1.multiply(transform.localRotation, rotation, rot);
        quat$1.normalize(transform.localRotation, transform.localRotation);
        this.dirtyLocalTransform(element, transform);
      }
    }

    /**
     * same as pivot in Pixi.js
     *
     * @see https://stackoverflow.com/questions/40748452/how-to-change-css-transform-origin-but-preserve-transformation
     */
  }, {
    key: "setOrigin",
    value: function setOrigin(element, origin) {
      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      if (typeof origin === 'number') {
        origin = [origin, y, z];
      }
      var transform = element.transformable;
      if (origin[0] === transform.origin[0] && origin[1] === transform.origin[1] && origin[2] === transform.origin[2]) {
        return;
      }
      var originVec = transform.origin;

      // const delta = vec3.subtract(vec3.create(), origin, originVec);
      // vec3.add(transform.localPosition, transform.localPosition, delta);

      // update origin
      originVec[0] = origin[0];
      originVec[1] = origin[1];
      originVec[2] = origin[2] || 0;
      this.dirtyLocalTransform(element, transform);
    }

    /**
     * set euler angles(degrees) in world space
     */
  }, {
    key: "setEulerAngles",
    value: function setEulerAngles(element, degrees) {
      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      if (typeof degrees === 'number') {
        degrees = vec3.fromValues(degrees, y, z);
      }
      var transform = element.transformable;
      if (element.parentNode === null || !element.parentNode.transformable) {
        this.setLocalEulerAngles(element, degrees);
      } else {
        quat$1.fromEuler(transform.localRotation, degrees[0], degrees[1], degrees[2]);
        var parentRotation = this.getRotation(element.parentNode);
        quat$1.copy($setEulerAngles_InvParentRot, quat$1.invert($quat$1, parentRotation));
        quat$1.mul(transform.localRotation, transform.localRotation, $setEulerAngles_InvParentRot);
        this.dirtyLocalTransform(element, transform);
      }
    }

    // #endregion transform
    // #region bbox ----------------------------------------------------------------

    /**
     * Get the geometry bounds of the element itself, excluding children.
     *
     * @param element - The element to get geometry bounds for
     * @param render - If true, returns render bounds (including strokes, etc.); otherwise returns content bounds
     */
  }, {
    key: "getGeometryBounds",
    value: function getGeometryBounds(element) {
      var render = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _ref3 = element,
        geometry = _ref3.geometry;
      if (geometry.dirty) {
        runtime.styleValueRegistry.updateGeometry(element);
      }
      var bounds = render ? geometry.renderBounds : geometry.contentBounds || null;
      // return (bounds && new AABB(bounds.center, bounds.halfExtents)) || new AABB();
      return bounds || new AABB();
    }

    /**
     * Get the geometry bounds of the element itself in world space, excluding children.
     *
     * @param element - The element to get transformed geometry bounds for
     * @param render - If true, returns render bounds (including strokes, etc.); otherwise returns content bounds
     * @param existedAABB - Optional existing AABB to reuse
     */
  }, {
    key: "getTransformedGeometryBounds",
    value: function getTransformedGeometryBounds(element) {
      var render = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var existedAABB = arguments.length > 2 ? arguments[2] : undefined;
      var bounds = this.getGeometryBounds(element, render);
      if (!AABB.isEmpty(bounds)) {
        var aabb = existedAABB || new AABB();
        aabb.setFromTransformedAABB(bounds, this.getWorldTransform(element));
        return aabb;
      }
      return null;
    }

    /**
     * account for children in world space
     */
  }, {
    key: "getBounds",
    value: function getBounds(element) {
      var _this = this;
      var render = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _ref4 = element,
        renderable = _ref4.renderable;
      if (!renderable.boundsDirty && !render && renderable.bounds) {
        return renderable.bounds;
      }
      if (!renderable.renderBoundsDirty && render && renderable.renderBounds) {
        return renderable.renderBounds;
      }

      // reuse existed if possible
      var existedAABB = render ? renderable.renderBounds : renderable.bounds;

      // reset with geometry's aabb
      var aabb = this.getTransformedGeometryBounds(element, render, existedAABB);

      // merge children's aabbs
      var children = element.childNodes;
      children.forEach(function (child) {
        var childBounds = _this.getBounds(child, render);
        if (childBounds) {
          if (!aabb) {
            aabb = existedAABB || new AABB();
            aabb.update(childBounds.center, childBounds.halfExtents);
          } else {
            aabb.add(childBounds);
          }
        }
      });
      if (!aabb) {
        aabb = new AABB();
      }
      if (render) {
        // FIXME: account for clip path
        var clipped = findClosestClipPathTarget(element);
        if (clipped) {
          // use bounds under world space
          var clipPathBounds = clipped.parsedStyle.clipPath.getBounds(render);
          if (!aabb) {
            aabb.update(clipPathBounds.center, clipPathBounds.halfExtents);
          } else if (clipPathBounds) {
            aabb = clipPathBounds.intersection(aabb);
          }
        }
      }
      if (render) {
        renderable.renderBounds = aabb;
        renderable.renderBoundsDirty = false;
      } else {
        renderable.bounds = aabb;
        renderable.boundsDirty = false;
      }
      return aabb;
    }

    /**
     * account for children in local space
     */
  }, {
    key: "getLocalBounds",
    value: function getLocalBounds(element) {
      if (element.parentNode) {
        var parentInvert = $mat4Identity;
        if (element.parentNode.transformable) {
          parentInvert = mat4.invert($mat4, this.getWorldTransform(element.parentNode));
        }
        var bounds = this.getBounds(element);
        if (!AABB.isEmpty(bounds)) {
          var localBounds = new AABB();
          localBounds.setFromTransformedAABB(bounds, parentInvert);
          return localBounds;
        }
      }
      return this.getBounds(element);
    }
  }, {
    key: "getBoundingClientRect",
    value: function getBoundingClientRect(element) {
      var _element$ownerDocumen;
      var aabb;
      var bounds = this.getGeometryBounds(element);
      if (!AABB.isEmpty(bounds)) {
        aabb = new AABB();
        // apply transformation to aabb
        aabb.setFromTransformedAABB(bounds, this.getWorldTransform(element));
      }

      // calc context's offset
      var bbox = (_element$ownerDocumen = element.ownerDocument) === null || _element$ownerDocumen === void 0 || (_element$ownerDocumen = _element$ownerDocumen.defaultView) === null || _element$ownerDocumen === void 0 ? void 0 : _element$ownerDocumen.getContextService().getBoundingClientRect();
      if (aabb) {
        var _aabb$getMin = aabb.getMin(),
          _aabb$getMin2 = _slicedToArray(_aabb$getMin, 2),
          left = _aabb$getMin2[0],
          top = _aabb$getMin2[1];
        var _aabb$getMax = aabb.getMax(),
          _aabb$getMax2 = _slicedToArray(_aabb$getMax, 2),
          right = _aabb$getMax2[0],
          bottom = _aabb$getMax2[1];
        return new Rectangle(left + ((bbox === null || bbox === void 0 ? void 0 : bbox.left) || 0), top + ((bbox === null || bbox === void 0 ? void 0 : bbox.top) || 0), right - left, bottom - top);
      }
      return new Rectangle((bbox === null || bbox === void 0 ? void 0 : bbox.left) || 0, (bbox === null || bbox === void 0 ? void 0 : bbox.top) || 0, 0, 0);
    }

    // #endregion bbox
    // #region other ----------------------------------------------------------------
  }, {
    key: "internalUpdateTransform",
    value: function internalUpdateTransform(element) {
      var _element$parentNode;
      var parentTransform = (_element$parentNode = element.parentNode) === null || _element$parentNode === void 0 ? void 0 : _element$parentNode.transformable;
      updateLocalTransform(element.transformable);
      updateWorldTransform(element.transformable, parentTransform);
    }
  }, {
    key: "internalUpdateElement",
    value: function internalUpdateElement(element, ancestors) {
      var _element$ownerDocumen2, _element$transformabl, _element$renderable, _element$renderable2;
      var enableAttributeUpdateOptimization = ((_element$ownerDocumen2 = element.ownerDocument) === null || _element$ownerDocumen2 === void 0 || (_element$ownerDocumen2 = _element$ownerDocumen2.defaultView) === null || _element$ownerDocumen2 === void 0 || (_element$ownerDocumen2 = _element$ownerDocumen2.getConfig()) === null || _element$ownerDocumen2 === void 0 || (_element$ownerDocumen2 = _element$ownerDocumen2.future) === null || _element$ownerDocumen2 === void 0 ? void 0 : _element$ownerDocumen2.experimentalAttributeUpdateOptimization) === true;
      var parent = ancestors[ancestors.length - 1];
      // parent nodes affect child nodes
      var transformDirty = (parent === null || parent === void 0 ? void 0 : parent.transformDirty) || ((_element$transformabl = element.transformable) === null || _element$transformabl === void 0 ? void 0 : _element$transformabl.localDirtyFlag);
      if (element.transformable) {
        var _element$transformabl2;
        (_element$transformabl2 = element.transformable).dirtyFlag || (_element$transformabl2.dirtyFlag = transformDirty);
      }
      this.internalUpdateTransform(element);
      if (transformDirty) {
        var _element$dirty;
        (_element$dirty = element.dirty) === null || _element$dirty === void 0 || _element$dirty.call(element, true, true);
      }
      var shapeUpdated = ((_element$renderable = element.renderable) === null || _element$renderable === void 0 ? void 0 : _element$renderable.boundsDirty) || ((_element$renderable2 = element.renderable) === null || _element$renderable2 === void 0 ? void 0 : _element$renderable2.renderBoundsDirty);

      // The transformation matrix of the child node changes,
      // which will cause the bounding box data of the ancestor node to become outdated.
      if ((transformDirty || shapeUpdated) && (parent === null || parent === void 0 ? void 0 : parent.shapeUpdated) === false && enableAttributeUpdateOptimization) {
        var tempElIndex = ancestors.length - 1;
        while (tempElIndex >= 0) {
          var _dirty, _ref5;
          var tempEl = ancestors[tempElIndex];
          if (tempEl.shapeUpdated) {
            break;
          }
          (_dirty = (_ref5 = tempEl.node).dirty) === null || _dirty === void 0 || _dirty.call(_ref5, true, true);
          tempEl.shapeUpdated = true;
          tempElIndex -= 1;
        }
      }
      return transformDirty;
    }
  }, {
    key: "syncHierarchy",
    value: function syncHierarchy(rootNode) {
      var _transformable, _transformable2;
      var stack = [rootNode];
      var ancestors = rootNode.parentNode ? [{
        node: rootNode.parentNode,
        transformDirty: ((_transformable = rootNode.parentNode.transformable) === null || _transformable === void 0 ? void 0 : _transformable.localDirtyFlag) || ((_transformable2 = rootNode.parentNode.transformable) === null || _transformable2 === void 0 ? void 0 : _transformable2.dirtyFlag),
        shapeUpdated: false
      }] : [];
      while (stack.length > 0) {
        var node = stack.pop();
        var parent = ancestors[ancestors.length - 1];
        while (ancestors.length > 0 && node.parentNode !== parent.node) {
          parent = ancestors.pop();
        }
        var transformDirty = this.internalUpdateElement(node, ancestors);
        if (node.childNodes.length > 0) {
          for (var i = node.childNodes.length - 1; i >= 0; i--) {
            stack.push(node.childNodes[i]);
          }
          ancestors.push({
            node: node,
            transformDirty: transformDirty,
            shapeUpdated: false
          });
        }
      }
    }
  }, {
    key: "dirtyLocalTransform",
    value: function dirtyLocalTransform(element, transform) {
      if (isInFragment(element)) return;
      if (!transform.localDirtyFlag) {
        transform.localDirtyFlag = true;
        if (!transform.dirtyFlag) {
          this.dirtyWorldTransform(element, transform);
        }
      }
    }
  }, {
    key: "dirtyWorldTransform",
    value: function dirtyWorldTransform(element, transform) {
      this.dirtyWorldInternal(element, transform);
      this.dirtyToRoot(element, true);
    }
  }, {
    key: "dirtyWorldInternal",
    value: function dirtyWorldInternal(element, transform) {
      var _element$ownerDocumen3,
        _this2 = this;
      var enableAttributeUpdateOptimization = ((_element$ownerDocumen3 = element.ownerDocument) === null || _element$ownerDocumen3 === void 0 || (_element$ownerDocumen3 = _element$ownerDocumen3.defaultView) === null || _element$ownerDocumen3 === void 0 || (_element$ownerDocumen3 = _element$ownerDocumen3.getConfig()) === null || _element$ownerDocumen3 === void 0 || (_element$ownerDocumen3 = _element$ownerDocumen3.future) === null || _element$ownerDocumen3 === void 0 ? void 0 : _element$ownerDocumen3.experimentalAttributeUpdateOptimization) === true;
      if (!transform.dirtyFlag) {
        transform.dirtyFlag = true;
        element.dirty(true, true);
        if (!enableAttributeUpdateOptimization) {
          element.childNodes.forEach(function (child) {
            var childTransform = child.transformable;
            _this2.dirtyWorldInternal(child, childTransform);
          });
        }
      }
    }
  }, {
    key: "dirtyToRoot",
    value: function dirtyToRoot(element) {
      var _element$ownerDocumen4;
      var affectChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var p = element;
      var enableAttributeUpdateOptimization = ((_element$ownerDocumen4 = element.ownerDocument) === null || _element$ownerDocumen4 === void 0 || (_element$ownerDocumen4 = _element$ownerDocumen4.defaultView) === null || _element$ownerDocumen4 === void 0 || (_element$ownerDocumen4 = _element$ownerDocumen4.getConfig()) === null || _element$ownerDocumen4 === void 0 || (_element$ownerDocumen4 = _element$ownerDocumen4.future) === null || _element$ownerDocumen4 === void 0 ? void 0 : _element$ownerDocumen4.experimentalAttributeUpdateOptimization) === true;
      while (p) {
        var _dirty2, _ref6;
        (_dirty2 = (_ref6 = p).dirty) === null || _dirty2 === void 0 || _dirty2.call(_ref6, true, true);
        if (enableAttributeUpdateOptimization) {
          break;
        } else {
          p = p.parentNode;
        }
      }
      if (affectChildren) {
        element.forEach(function (e) {
          var _e$dirty;
          (_e$dirty = e.dirty) === null || _e$dirty === void 0 || _e$dirty.call(e, true, true);
        });
      }
      this.informDependentDisplayObjects(element);
      var mutations = element.mutations || [];
      var boundChangeMutation = mutations.find(function (item) {
        return item.type === 'attributes' && item._boundsChangeData;
      });
      if (!boundChangeMutation) {
        boundChangeMutation = {
          type: 'attributes',
          target: element,
          _boundsChangeData: {
            affectChildren: affectChildren
          }
        };
        mutations.push(boundChangeMutation);
      } else {
        boundChangeMutation._boundsChangeData = {
          affectChildren: boundChangeMutation._boundsChangeData.affectChildren || affectChildren
        };
      }
      element.mutations = mutations;
    }
  }, {
    key: "dirtyFragment",
    value: function dirtyFragment(element) {
      var _dirty3, _ref7;
      var transform = element.transformable;
      if (transform) {
        transform.dirtyFlag = true;
        transform.localDirtyFlag = true;
      }
      (_dirty3 = (_ref7 = element).dirty) === null || _dirty3 === void 0 || _dirty3.call(_ref7, true, true);
      var length = element.childNodes.length;
      for (var i = 0; i < length; i++) {
        this.dirtyFragment(element.childNodes[i]);
      }
    }
  }, {
    key: "notifyMutationObservers",
    value: function notifyMutationObservers(canvas) {
      var mutations = new Set();
      canvas.getRoot().forEach(function (item) {
        (item.mutations || []).forEach(function (mutation) {
          if (mutation.type === 'attributes' && mutation._boundsChangeData) {
            if (mutation._boundsChangeData.affectChildren) {
              item.forEach(function (node) {
                var newMutation = _objectSpread({}, mutation);
                newMutation.target = node;
                mutations.add(newMutation);
              });
            } else {
              mutations.add(mutation);
            }
          }
        });
        item.mutations = undefined;
      });
      if (mutations.size > 0) {
        var event = new CustomEvent(ElementEvent.BOUNDS_CHANGED, {
          detail: Array.from(mutations)
        });
        canvas.dispatchEvent(event, true, true);
      }
    }
  }, {
    key: "updateDisplayObjectDependency",
    value: function updateDisplayObjectDependency(name, oldPath, newPath, object) {
      // clear ref to old clip path
      if (oldPath && oldPath !== newPath) {
        var oldDependencyMap = this.displayObjectDependencyMap.get(oldPath);
        if (oldDependencyMap && oldDependencyMap[name]) {
          var index = oldDependencyMap[name].indexOf(object);
          oldDependencyMap[name].splice(index, 1);
        }
      }
      if (newPath) {
        var newDependencyMap = this.displayObjectDependencyMap.get(newPath);
        if (!newDependencyMap) {
          this.displayObjectDependencyMap.set(newPath, {});
          newDependencyMap = this.displayObjectDependencyMap.get(newPath);
        }
        if (!newDependencyMap[name]) {
          newDependencyMap[name] = [];
        }
        newDependencyMap[name].push(object);
      }
    }
  }, {
    key: "informDependentDisplayObjects",
    value: function informDependentDisplayObjects(object) {
      var _object$ownerDocument,
        _this3 = this;
      var dependencyMap = this.displayObjectDependencyMap.get(object);
      if (!dependencyMap) {
        return;
      }
      var enableCancelEventPropagation = (_object$ownerDocument = object.ownerDocument) === null || _object$ownerDocument === void 0 || (_object$ownerDocument = _object$ownerDocument.defaultView) === null || _object$ownerDocument === void 0 || (_object$ownerDocument = _object$ownerDocument.getConfig()) === null || _object$ownerDocument === void 0 || (_object$ownerDocument = _object$ownerDocument.future) === null || _object$ownerDocument === void 0 ? void 0 : _object$ownerDocument.experimentalCancelEventPropagation;
      Object.keys(dependencyMap).forEach(function (name) {
        dependencyMap[name].forEach(function (target) {
          _this3.dirtyToRoot(target, true);
          target.dispatchEvent(new MutationEvent(ElementEvent.ATTR_MODIFIED, target, _this3, _this3, name, MutationEvent.MODIFICATION, _this3, _this3), enableCancelEventPropagation, enableCancelEventPropagation);
          if (target.isCustomElement && target.isConnected) {
            if (target.attributeChangedCallback) {
              target.attributeChangedCallback(name, _this3, _this3);
            }
          }
        });
      });
    }
  }]);
}();

/**
 * A classic LRU (Least Recently Used) cache implementation.
 * It evicts the least recently used item when the cache is full.
 *
 * It uses a Map for O(1) key-based access
 * to maintain the usage order of items.
 *
 * 通过利用 JavaScript 内置 Map 的特性（按插入顺序迭代），我们不再需要手动维护一个双向链表
 */
var LRU = /*#__PURE__*/function () {
  function LRU(capacity) {
    _classCallCheck(this, LRU);
    if (capacity <= 0) {
      throw new Error('LRU capacity must be a positive number.');
    }
    this.capacity = capacity;
    // Using a Map directly simplifies the implementation significantly.
    // A Map in modern JS engines iterates in insertion order, which is exactly what we need.
    this.cache = new Map();
  }

  /**
   * Retrieves an item from the cache. Marks the item as recently used.
   * @param key The key of the item to retrieve.
   * @returns The value of the item, or undefined if not found.
   */
  return _createClass(LRU, [{
    key: "get",
    value: function get(key) {
      if (!this.cache.has(key)) {
        return undefined;
      }

      // Get the value.
      var value = this.cache.get(key);

      // Mark as recently used by deleting and re-setting the key.
      // This moves the key to the end of the Map's internal order.
      this.cache["delete"](key);
      this.cache.set(key, value);
      return value;
    }

    /**
     * Adds or updates an item in the cache. Marks the item as recently used.
     * If the cache is full, it removes the least recently used item.
     * @param key The key of the item.
     * @param value The value of the item.
     */
  }, {
    key: "put",
    value: function put(key, value) {
      // If the key already exists, delete it first to ensure it's moved to the end.
      if (this.cache.has(key)) {
        this.cache["delete"](key);
      }

      // Add the new item. It will be the most recently used.
      this.cache.set(key, value);

      // Check if the cache has exceeded its capacity.
      if (this.cache.size > this.capacity) {
        // Evict the least recently used item, which is the first one in the Map's iteration order.
        var leastRecentlyUsedKey = this.cache.keys().next().value;
        this.cache["delete"](leastRecentlyUsedKey);
      }
    }

    /**
     * Returns the current number of items in the cache.
     */
  }, {
    key: "len",
    value: function len() {
      return this.cache.size;
    }

    /**
     * Clears all items from the cache.
     */
  }, {
    key: "clear",
    value: function clear() {
      this.cache.clear();
    }
  }]);
}();

var TEXT_METRICS = {
  MetricsString: '|ÉqÅ',
  BaselineSymbol: 'M',
  BaselineMultiplier: 1.4,
  HeightMultiplier: 2,
  Newlines: [0x000a,
  // line feed
  0x000d // carriage return
  ],
  BreakingSpaces: [0x0009,
  // character tabulation
  0x0020,
  // space
  0x2000,
  // en quad
  0x2001,
  // em quad
  0x2002,
  // en space
  0x2003,
  // em space
  0x2004,
  // three-per-em space
  0x2005,
  // four-per-em space
  0x2006,
  // six-per-em space
  0x2008,
  // punctuation space
  0x2009,
  // thin space
  0x200a,
  // hair space
  0x205f,
  // medium mathematical space
  0x3000 // ideographic space
  ]
};
var LATIN_REGEX = /[a-zA-Z0-9\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff!"#$%&'()*+,-./:;]/;

// Line breaking rules in CJK (Kinsoku Shori)
// Refer from https://en.wikipedia.org/wiki/Line_breaking_rules_in_East_Asian_languages
var regexCannotStartZhCn = /[!%),.:;?\]}¢°·'""†‡›℃∶、。〃〆〕〗〞﹚﹜！＂％＇），．：；？！］｝～]/;
var regexCannotEndZhCn = /[$(£¥·'"〈《「『【〔〖〝﹙﹛＄（．［｛￡￥]/;
var regexCannotStartZhTw = /[!),.:;?\]}¢·–—'"•"、。〆〞〕〉》」︰︱︲︳﹐﹑﹒﹓﹔﹕﹖﹘﹚﹜！），．：；？︶︸︺︼︾﹀﹂﹗］｜｝､]/;
var regexCannotEndZhTw = /[([{£¥'"‵〈《「『〔〝︴﹙﹛（｛︵︷︹︻︽︿﹁﹃﹏]/;
var regexCannotStartJaJp = /[)\]｝〕〉》」』】〙〗〟'"｠»ヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻‐゠–〜?!‼⁇⁈⁉・、:;,。.]/;
var regexCannotEndJaJp = /[([｛〔〈《「『【〘〖〝'"｟«—...‥〳〴〵]/;
var regexCannotStartKoKr = /[!%),.:;?\]}¢°'"†‡℃〆〈《「『〕！％），．：；？］｝]/;
var regexCannotEndKoKr = /[$([{£¥'"々〇〉》」〔＄（［｛｠￥￦#]/;
var regexCannotStart = new RegExp("".concat(regexCannotStartZhCn.source, "|").concat(regexCannotStartZhTw.source, "|").concat(regexCannotStartJaJp.source, "|").concat(regexCannotStartKoKr.source));
var regexCannotEnd = new RegExp("".concat(regexCannotEndZhCn.source, "|").concat(regexCannotEndZhTw.source, "|").concat(regexCannotEndJaJp.source, "|").concat(regexCannotEndKoKr.source));

/**
 * Borrow from pixi/packages/text/src/TextMetrics.ts
 */
var TextService = /*#__PURE__*/function () {
  function TextService(runtime) {
    var _this = this;
    _classCallCheck(this, TextService);
    /**
     * font metrics cache
     */
    this.fontMetricsCache = {};
    this.shouldBreakByKinsokuShorui = function (_char, nextChar) {
      if (_this.isBreakingSpace(nextChar)) return false;
      if (_char) {
        // Line breaking rules in CJK (Kinsoku Shori)
        if (regexCannotEnd.exec(nextChar) || regexCannotStart.exec(_char)) {
          return true;
        }
      }
      return false;
    };
    this.trimByKinsokuShorui = function (prev) {
      var next = _toConsumableArray(prev);
      var prevLine = next[next.length - 2];
      if (!prevLine) {
        return prev;
      }
      var lastChar = prevLine[prevLine.length - 1];
      next[next.length - 2] = prevLine.slice(0, -1);
      next[next.length - 1] = lastChar + next[next.length - 1];
      return next;
    };
    this.runtime = runtime;
    this.charWidthCache = new LRU(100);
  }
  return _createClass(TextService, [{
    key: "measureFont",
    value:
    /**
     * A global cache for character widths, keyed by font string.
     * e.g. { '16px Arial': { 'a': 8, 'b': 9 } }
     */

    /**
     * Calculates the ascent, descent and fontSize of a given font-style.
     */
    function measureFont(font, offscreenCanvas) {
      // as this method is used for preparing assets, don't recalculate things if we don't need to
      if (this.fontMetricsCache[font]) {
        return this.fontMetricsCache[font];
      }
      var properties = {
        ascent: 0,
        descent: 0,
        fontSize: 0
      };
      var canvas = this.runtime.offscreenCanvasCreator.getOrCreateCanvas(offscreenCanvas);
      var context = this.runtime.offscreenCanvasCreator.getOrCreateContext(offscreenCanvas, {
        willReadFrequently: true
      });
      context.font = font;
      var metricsString = TEXT_METRICS.MetricsString + TEXT_METRICS.BaselineSymbol;
      var width = Math.ceil(context.measureText(metricsString).width);
      var baseline = Math.ceil(context.measureText(TEXT_METRICS.BaselineSymbol).width);
      var height = TEXT_METRICS.HeightMultiplier * baseline;
      baseline = baseline * TEXT_METRICS.BaselineMultiplier | 0;
      // @ts-ignore
      canvas.width = width;
      // @ts-ignore
      canvas.height = height;
      context.fillStyle = '#f00';
      context.fillRect(0, 0, width, height);
      context.font = font;
      context.textBaseline = 'alphabetic';
      context.fillStyle = '#000';
      context.fillText(metricsString, 0, baseline);
      var imagedata = context.getImageData(0, 0, width || 1, height || 1).data;
      var pixels = imagedata.length;
      var line = width * 4;
      var i = 0;
      var idx = 0;
      var stop = false;
      // ascent. scan from top to bottom until we find a non red pixel
      for (i = 0; i < baseline; ++i) {
        for (var j = 0; j < line; j += 4) {
          if (imagedata[idx + j] !== 255) {
            stop = true;
            break;
          }
        }
        if (!stop) {
          idx += line;
        } else {
          break;
        }
      }
      properties.ascent = baseline - i;
      idx = pixels - line;
      stop = false;
      // descent. scan from bottom to top until we find a non red pixel
      for (i = height; i > baseline; --i) {
        for (var _j = 0; _j < line; _j += 4) {
          if (imagedata[idx + _j] !== 255) {
            stop = true;
            break;
          }
        }
        if (!stop) {
          idx -= line;
        } else {
          break;
        }
      }
      properties.descent = i - baseline;
      properties.fontSize = properties.ascent + properties.descent;
      this.fontMetricsCache[font] = properties;
      return properties;
    }
  }, {
    key: "measureText",
    value: function measureText(text, parsedStyle, offscreenCanvas) {
      var _parsedStyle$fontSize = parsedStyle.fontSize,
        fontSize = _parsedStyle$fontSize === void 0 ? 16 : _parsedStyle$fontSize,
        _parsedStyle$wordWrap = parsedStyle.wordWrap,
        wordWrap = _parsedStyle$wordWrap === void 0 ? false : _parsedStyle$wordWrap,
        strokeHeight = parsedStyle.lineHeight,
        _parsedStyle$lineWidt = parsedStyle.lineWidth,
        lineWidth = _parsedStyle$lineWidt === void 0 ? 1 : _parsedStyle$lineWidt,
        _parsedStyle$textBase = parsedStyle.textBaseline,
        textBaseline = _parsedStyle$textBase === void 0 ? 'alphabetic' : _parsedStyle$textBase,
        _parsedStyle$textAlig = parsedStyle.textAlign,
        textAlign = _parsedStyle$textAlig === void 0 ? 'start' : _parsedStyle$textAlig,
        _parsedStyle$letterSp = parsedStyle.letterSpacing,
        letterSpacing = _parsedStyle$letterSp === void 0 ? 0 : _parsedStyle$letterSp,
        textPath = parsedStyle.textPath;
        parsedStyle.textPathSide;
        parsedStyle.textPathStartOffset;
        var _parsedStyle$leading = parsedStyle.leading,
        leading = _parsedStyle$leading === void 0 ? 0 : _parsedStyle$leading;
      var font = toFontString(parsedStyle);
      var fontProperties = this.measureFont(font, offscreenCanvas);
      // fallback in case UA disallow canvas data extraction
      if (fontProperties.fontSize === 0) {
        fontProperties.fontSize = fontSize;
        fontProperties.ascent = fontSize;
      }
      var context = this.runtime.offscreenCanvasCreator.getOrCreateContext(offscreenCanvas);
      context.font = font;

      // no overflowing by default
      parsedStyle.isOverflowing = false;
      var outputText = wordWrap ? this.wordWrap(text, parsedStyle, offscreenCanvas) : text;
      var lines = outputText.split(/(?:\r\n|\r|\n)/);
      var lineWidths = new Array(lines.length);
      var maxLineWidth = 0;

      // account for textPath
      if (textPath) {
        textPath.getTotalLength();

        // const startingPoint = textPath.getPoint(0);

        for (var i = 0; i < lines.length; i++) {
          context.measureText(lines[i]).width + (lines[i].length - 1) * letterSpacing;
          // for (
          //   let i = reverse ? lines[0].length - 1 : 0;
          //   reverse ? i >= 0 : i < lines[0].length;
          //   reverse ? i-- : i++
          // ) {
          //   graphemeInfo = lineBounds[i];
          //   if (positionInPath > totalPathLength) {
          //     positionInPath %= totalPathLength;
          //   } else if (positionInPath < 0) {
          //     positionInPath += totalPathLength;
          //   }
          //   // it would probably much faster to send all the grapheme position for a line
          //   // and calculate path position/angle at once.
          //   this.setGraphemeOnPath(
          //     positionInPath,
          //     graphemeInfo,
          //     startingPoint
          //   );
          //   positionInPath += graphemeInfo.kernedWidth;
          // }
        }
      } else {
        for (var _i = 0; _i < lines.length; _i++) {
          // char width + letterSpacing
          var _lineWidth = context.measureText(lines[_i]).width + (lines[_i].length - 1) * letterSpacing;
          lineWidths[_i] = _lineWidth;
          maxLineWidth = Math.max(maxLineWidth, _lineWidth);
        }
        var _width = maxLineWidth + lineWidth;

        // if (dropShadow) {
        //   width += dropShadowDistance;
        // }
        var lineHeight = strokeHeight || fontProperties.fontSize + lineWidth;
        var height = Math.max(lineHeight, fontProperties.fontSize + lineWidth) + (lines.length - 1) * (lineHeight + leading);
        // if (dropShadow) {
        //   height += dropShadowDistance;
        // }
        lineHeight += leading;

        // handle vertical text baseline
        var offsetY = 0;
        if (textBaseline === 'middle') {
          offsetY = -height / 2;
        } else if (textBaseline === 'bottom' || textBaseline === 'alphabetic' || textBaseline === 'ideographic') {
          offsetY = -height;
        } else if (textBaseline === 'top' || textBaseline === 'hanging') {
          offsetY = 0;
        }
        return {
          font: font,
          width: _width,
          height: height,
          lines: lines,
          lineWidths: lineWidths,
          lineHeight: lineHeight,
          maxLineWidth: maxLineWidth,
          fontProperties: fontProperties,
          lineMetrics: lineWidths.map(function (width, i) {
            var offsetX = 0;
            // handle horizontal text align
            if (textAlign === 'center' || textAlign === 'middle') {
              offsetX -= width / 2;
            } else if (textAlign === 'right' || textAlign === 'end') {
              offsetX -= width;
            }
            return new Rectangle(offsetX - lineWidth / 2, offsetY + i * lineHeight, width + lineWidth, lineHeight);
          })
        };
      }
    }
  }, {
    key: "wordWrap",
    value: function wordWrap(text, parsedStyle, offscreenCanvas) {
      var _this2 = this;
      var chars = Array.from(text);
      if (chars.length === 0) {
        return '';
      }
      var self = this;
      var _parsedStyle$wordWrap2 = parsedStyle.wordWrapWidth,
        wordWrapWidth = _parsedStyle$wordWrap2 === void 0 ? 0 : _parsedStyle$wordWrap2,
        _parsedStyle$letterSp2 = parsedStyle.letterSpacing,
        letterSpacing = _parsedStyle$letterSp2 === void 0 ? 0 : _parsedStyle$letterSp2,
        _parsedStyle$maxLines = parsedStyle.maxLines,
        maxLines = _parsedStyle$maxLines === void 0 ? Infinity : _parsedStyle$maxLines,
        textOverflow = parsedStyle.textOverflow;
      var context = this.runtime.offscreenCanvasCreator.getOrCreateContext(offscreenCanvas);
      var maxWidth = wordWrapWidth + letterSpacing;
      var ellipsis = '';
      if (textOverflow === 'ellipsis') {
        ellipsis = '...';
      } else if (textOverflow && textOverflow !== 'clip') {
        ellipsis = textOverflow;
      }
      var lines = [''];
      var currentLineIndex = 0;
      var currentLineWidth = 0;
      // @see https://github.com/antvis/G/issues/1932
      var prevLineLastCharIndex = -1;

      // --- 优化核心 ---
      // 1. 获取或创建当前字体对应的字符缓存
      var font = toFontString(parsedStyle);
      var charCache = this.charWidthCache.get(font);
      if (!charCache) {
        charCache = new LRU(500);
        this.charWidthCache.put(font, charCache);
      }

      // 2. calcWidth 现在直接使用持久化的 charCache
      var calcWidth = function calcWidth(_char2) {
        return _this2.getFromCache(_char2, letterSpacing, charCache, context);
      };
      var ellipsisWidth = calcWidth(ellipsis);

      /**
       * Find text fragments that will take up as much of the given line width as possible when rendered.
       *
       * @see https://github.com/antvis/G/issues/1833
       *
       * @param lineTxt - Current line of text
       * @param txtLastCharIndex - The index of the last character of the current line in the entire text
       * @param txtStartCharIndex - The index of the start character of the current line in the entire text
       */
      function findCharIndexClosestWidthThreshold(lineTxt, txtLastCharIndex, txtStartCharIndex, widthThreshold) {
        while (calcWidth(lineTxt) < widthThreshold && txtLastCharIndex < chars.length - 1) {
          if (self.isNewline(chars[txtLastCharIndex + 1])) {
            break;
          }
          txtLastCharIndex += 1;
          lineTxt += chars[txtLastCharIndex];
        }
        while (calcWidth(lineTxt) > widthThreshold &&
        // @see https://github.com/antvis/G/issues/1932
        txtLastCharIndex >= txtStartCharIndex) {
          txtLastCharIndex -= 1;
          lineTxt = lineTxt.slice(0, -1);
        }
        return {
          lineTxt: lineTxt,
          txtLastCharIndex: txtLastCharIndex
        };
      }
      function appendEllipsis(lineIndex, textCharIndex) {
        // If there is not enough space to display the string itself, it is clipped.
        // @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow#values
        if (ellipsisWidth <= 0 || ellipsisWidth > maxWidth) {
          return;
        }
        if (!lines[lineIndex]) {
          lines[lineIndex] = ellipsis;
          return;
        }
        var result = findCharIndexClosestWidthThreshold(lines[lineIndex], textCharIndex, prevLineLastCharIndex + 1, maxWidth - ellipsisWidth);
        lines[lineIndex] = result.lineTxt + ellipsis;
      }
      for (var i = 0; i < chars.length; i++) {
        var _char3 = chars[i];
        var prevChar = chars[i - 1];
        var nextChar = chars[i + 1];
        var charWidth = calcWidth(_char3);
        if (this.isNewline(_char3)) {
          // exceed maxLines, break immediately
          if (currentLineIndex + 1 >= maxLines) {
            if (i < chars.length - 1) {
              appendEllipsis(currentLineIndex, i - 1);
            }
            parsedStyle.isOverflowing = true;
            break;
          }
          prevLineLastCharIndex = i - 1;
          currentLineIndex += 1;
          currentLineWidth = 0;
          lines[currentLineIndex] = '';
          continue;
        }

        // If char width exceeds max width, no need to continue
        if (charWidth > maxWidth) {
          appendEllipsis(currentLineIndex, i - 1);
          parsedStyle.isOverflowing = true;
          break;
        }
        if (currentLineWidth > 0 && currentLineWidth + charWidth > maxWidth) {
          var result = findCharIndexClosestWidthThreshold(lines[currentLineIndex], i - 1, prevLineLastCharIndex + 1, maxWidth);
          if (result.txtLastCharIndex !== i - 1) {
            lines[currentLineIndex] = result.lineTxt;
            if (result.txtLastCharIndex === chars.length - 1) {
              break;
            }
            i = result.txtLastCharIndex + 1;
            _char3 = chars[i];
            prevChar = chars[i - 1];
            nextChar = chars[i + 1];
            charWidth = calcWidth(_char3);
          }
          if (currentLineIndex + 1 >= maxLines) {
            appendEllipsis(currentLineIndex, i - 1);
            parsedStyle.isOverflowing = true;
            break;
          }
          prevLineLastCharIndex = i - 1;
          currentLineIndex += 1;
          currentLineWidth = 0;
          lines[currentLineIndex] = '';
          if (this.isBreakingSpace(_char3)) {
            continue;
          }
          if (!this.canBreakInLastChar(_char3)) {
            lines = this.trimToBreakable(lines);
            currentLineWidth = this.sumTextWidthByCache(lines[currentLineIndex] || '', calcWidth);
          }
          if (this.shouldBreakByKinsokuShorui(_char3, nextChar)) {
            lines = this.trimByKinsokuShorui(lines);
            currentLineWidth += calcWidth(prevChar || '');
          }
        }
        currentLineWidth += charWidth;
        lines[currentLineIndex] += _char3;
      }
      return lines.join('\n');
    }
  }, {
    key: "isBreakingSpace",
    value: function isBreakingSpace(_char4) {
      if (typeof _char4 !== 'string') {
        return false;
      }
      return TEXT_METRICS.BreakingSpaces.indexOf(_char4.charCodeAt(0)) >= 0;
    }
  }, {
    key: "isNewline",
    value: function isNewline(_char5) {
      if (typeof _char5 !== 'string') {
        return false;
      }
      return TEXT_METRICS.Newlines.indexOf(_char5.charCodeAt(0)) >= 0;
    }
  }, {
    key: "trimToBreakable",
    value: function trimToBreakable(prev) {
      var next = _toConsumableArray(prev);
      var prevLine = next[next.length - 2];
      var index = this.findBreakableIndex(prevLine);
      if (index === -1 || !prevLine) return next;
      var trimmedChar = prevLine.slice(index, index + 1);
      var isTrimmedWithSpace = this.isBreakingSpace(trimmedChar);
      var trimFrom = index + 1;
      var trimTo = index + (isTrimmedWithSpace ? 0 : 1);
      next[next.length - 1] += prevLine.slice(trimFrom, prevLine.length);
      next[next.length - 2] = prevLine.slice(0, trimTo);
      return next;
    }
  }, {
    key: "canBreakInLastChar",
    value: function canBreakInLastChar(_char6) {
      if (_char6 && LATIN_REGEX.test(_char6)) return false;
      return true;
    }
  }, {
    key: "sumTextWidthByCache",
    value: function sumTextWidthByCache(text, calcWidthWithCache) {
      return text.split('').reduce(function (sum, c) {
        return sum + calcWidthWithCache(c);
      }, 0);
    }
  }, {
    key: "findBreakableIndex",
    value: function findBreakableIndex(line) {
      for (var i = line.length - 1; i >= 0; i--) {
        if (!LATIN_REGEX.test(line[i])) return i;
      }
      return -1;
    }
  }, {
    key: "getFromCache",
    value: function getFromCache(key, letterSpacing, cache, context) {
      var width = cache.get(key);
      if (typeof width !== 'number') {
        var spacing = key.length * letterSpacing;
        var metrics = context.measureText(key);
        width = metrics.width + spacing;
        cache.put(key, width);
      }
      return width;
    }
  }, {
    key: "clearCache",
    value: function clearCache() {
      this.fontMetricsCache = {};
      this.charWidthCache.clear();
    }
  }]);
}();

var runtime = {};
/**
 * Replace with IoC container
 */
var geometryUpdaterFactory = function (_ref) {
  var rectUpdater = new RectUpdater();
  var polylineUpdater = new PolylineUpdater();
  return _ref = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, Shape.FRAGMENT, null), Shape.CIRCLE, new CircleUpdater()), Shape.ELLIPSE, new EllipseUpdater()), Shape.RECT, rectUpdater), Shape.IMAGE, rectUpdater), Shape.GROUP, new GroupUpdater()), Shape.LINE, new LineUpdater()), Shape.TEXT, new TextUpdater(runtime)), Shape.POLYLINE, polylineUpdater), Shape.POLYGON, polylineUpdater), _defineProperty(_defineProperty(_defineProperty(_ref, Shape.PATH, new PathUpdater()), Shape.HTML, new HTMLUpdater()), Shape.MESH, null);
}();
var CSSPropertySyntaxFactory = function (_ref2) {
  var color = new CSSPropertyColor();
  var length = new CSSPropertyLengthOrPercentage();
  return _ref2 = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref2, PropertySyntax.PERCENTAGE, null), PropertySyntax.NUMBER, new CSSPropertyNumber()), PropertySyntax.ANGLE, new CSSPropertyAngle()), PropertySyntax.DEFINED_PATH, new CSSPropertyClipPath()), PropertySyntax.PAINT, color), PropertySyntax.COLOR, color), PropertySyntax.FILTER, new CSSPropertyFilter()), PropertySyntax.LENGTH, length), PropertySyntax.LENGTH_PERCENTAGE, length), PropertySyntax.LENGTH_PERCENTAGE_12, new CSSPropertyLengthOrPercentage12()), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref2, PropertySyntax.LENGTH_PERCENTAGE_14, new CSSPropertyLengthOrPercentage14()), PropertySyntax.COORDINATE, new CSSPropertyLengthOrPercentage()), PropertySyntax.OFFSET_DISTANCE, new CSSPropertyOffsetDistance()), PropertySyntax.OPACITY_VALUE, new CSSPropertyOpacity()), PropertySyntax.PATH, new CSSPropertyPath()), PropertySyntax.LIST_OF_POINTS, new CSSPropertyPoints()), PropertySyntax.SHADOW_BLUR, new CSSPropertyShadowBlur()), PropertySyntax.TEXT, new CSSPropertyText()), PropertySyntax.TEXT_TRANSFORM, new CSSPropertyTextTransform()), PropertySyntax.TRANSFORM, new CSSPropertyTransform()), _defineProperty(_defineProperty(_defineProperty(_ref2, PropertySyntax.TRANSFORM_ORIGIN, new CSSPropertyTransformOrigin()), PropertySyntax.Z_INDEX, new CSSPropertyZIndex()), PropertySyntax.MARKER, new CSSPropertyMarker());
}();
var getGlobalThis = function getGlobalThis() {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  // @ts-ignore
  if (typeof global !== 'undefined') return global;
  return {};
  // [!] Error: The 'this' keyword is equivalent to 'undefined' at the top level of an ES module, and has been rewritten
  // @see https://rollupjs.org/troubleshooting/#error-this-is-undefined
  // if (typeof this !== 'undefined') return this;
};

/**
 * Camera
 * `camera-api` will provide an advanced implementation
 */
runtime.CameraContribution = Camera;

/**
 * `web-animations-api` will provide an AnimationTimeline
 */
runtime.AnimationTimeline = null;
runtime.EasingFunction = null;
runtime.offscreenCanvasCreator = new OffscreenCanvasCreator();
runtime.sceneGraphSelector = new DefaultSceneGraphSelector();
runtime.sceneGraphService = new DefaultSceneGraphService(runtime);
runtime.textService = new TextService(runtime);
runtime.geometryUpdaterFactory = geometryUpdaterFactory;
runtime.CSSPropertySyntaxFactory = CSSPropertySyntaxFactory;
runtime.styleValueRegistry = new DefaultStyleValueRegistry(runtime);
runtime.layoutRegistry = null;
runtime.globalThis = getGlobalThis();
runtime.enableStyleSyntax = true;
runtime.enableSizeAttenuation = false;

var entityCounter = 0;
function resetEntityCounter() {
  entityCounter = 0;
}
var insertedEvent = new MutationEvent(ElementEvent.INSERTED, null, '', '', '', 0, '', '');
var removedEvent = new MutationEvent(ElementEvent.REMOVED, null, '', '', '', 0, '', '');
var destroyEvent = new CustomEvent(ElementEvent.DESTROY);

/**
 * Has following capabilities:
 * * Node insert/remove, eg. appendChild, removeChild, remove...
 * * Query eg. querySelector getElementById...
 * * Animation
 */
var Element = /*#__PURE__*/function (_Node) {
  function Element() {
    var _this;
    _classCallCheck(this, Element);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Element, [].concat(args));
    /**
     * Unique id.
     */
    _this.entity = entityCounter++;
    _this.transformable = {
      dirtyFlag: false,
      localDirtyFlag: false,
      localPosition: [0, 0, 0],
      localRotation: [0, 0, 0, 1],
      localScale: [1, 1, 1],
      localTransform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      localSkew: [0, 0],
      position: [0, 0, 0],
      rotation: [0, 0, 0, 1],
      scaling: [1, 1, 1],
      worldTransform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      origin: [0, 0, 0]
    };
    _this.renderable = {
      bounds: undefined,
      boundsDirty: true,
      renderBounds: undefined,
      renderBoundsDirty: true,
      dirtyRenderBounds: undefined,
      dirty: false
    };
    _this.geometry = {
      contentBounds: undefined,
      renderBounds: undefined,
      dirty: true
    };
    _this.cullable = {
      strategy: Strategy.Standard,
      visibilityPlaneMask: -1,
      visible: true,
      enable: true
    };
    _this.sortable = {
      dirty: false,
      sorted: undefined,
      renderOrder: 0,
      dirtyChildren: [],
      dirtyReason: undefined
    };
    /**
     * https://developer.mozilla.org/zh-CN/docs/Web/API/Element/namespaceURI
     */
    _this.namespaceURI = 'g';
    _this.scrollLeft = 0;
    _this.scrollTop = 0;
    /**
     * We don't support border now
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/clientTop
     */
    _this.clientTop = 0;
    _this.clientLeft = 0;
    /**
     * compatible with `style`
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
     */
    _this.style = {};
    _this.computedStyle = {};
    /**
     * Renderers will use these used values.
     */
    _this.parsedStyle = {
      // opacity: '',
      // fillOpacity: '',
      // strokeOpacity: '',
      // transformOrigin: '',
      // visibility: '',
      // pointerEvents: '',
      // lineWidth: '',
      // lineCap: '',
      // lineJoin: '',
      // increasedLineWidthForHitTesting: '',
      // fontSize: '',
      // fontFamily: '',
      // fontStyle: '',
      // fontWeight: '',
      // fontVariant: '',
      // textAlign: '',
      // textBaseline: '',
      // textTransform: '',
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes
     */
    _this.attributes = {};
    return _this;
  }
  _inherits(Element, _Node);
  return _createClass(Element, [{
    key: "dirty",
    value:
    /**
     * Marks the element as dirty, indicating it needs re-rendering or relayout.
     *
     * @param styleFlag - Whether to update style state (default: true).
     *                   When true, sets `renderable.dirty` to true.
     * @param layoutFlag - Optional. When provided, updates layout-related dirty flags:
     *                    - `renderable.boundsDirty`
     *                    - `renderable.renderBoundsDirty`
     *                    - `geometry.dirty`
     */
    function dirty() {
      var styleFlag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var layoutFlag = arguments.length > 1 ? arguments[1] : undefined;
      this.renderable.dirty = styleFlag;
      if (layoutFlag !== undefined) {
        this.renderable.boundsDirty = layoutFlag;
        this.renderable.renderBoundsDirty = layoutFlag;
        this.geometry.dirty = layoutFlag;
      }
    }
  }, {
    key: "className",
    get:
    /**
     * used with `getElementById()`
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/id
     */

    /**
     * used in `getElementsByClassName`
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
     */
    function get() {
      // @ts-ignore
      return this.getAttribute('class') || '';
    },
    set: function set(className) {
      this.setAttribute('class', className);
    }

    /**
     * used in `getElementsByName`
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName
     */
  }, {
    key: "classList",
    get:
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
     */
    function get() {
      return this.className.split(' ').filter(function (c) {
        return c !== '';
      });
    }
  }, {
    key: "tagName",
    get: function get() {
      return this.nodeName;
    }
  }, {
    key: "children",
    get: function get() {
      return this.childNodes;
    }
  }, {
    key: "childElementCount",
    get: function get() {
      return this.childNodes.length;
    }
  }, {
    key: "firstElementChild",
    get: function get() {
      return this.firstChild;
    }
  }, {
    key: "lastElementChild",
    get: function get() {
      return this.lastChild;
    }
  }, {
    key: "parentElement",
    get: function get() {
      return this.parentNode;
    }
  }, {
    key: "nextSibling",
    get: function get() {
      if (this.parentNode) {
        var index = this.parentNode.childNodes.indexOf(this);
        return this.parentNode.childNodes[index + 1] || null;
      }
      return null;
    }
  }, {
    key: "previousSibling",
    get: function get() {
      if (this.parentNode) {
        var index = this.parentNode.childNodes.indexOf(this);
        return this.parentNode.childNodes[index - 1] || null;
      }
      return null;
    }
  }, {
    key: "cloneNode",
    value: function cloneNode(deep) {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "appendChild",
    value: function appendChild(child, index) {
      var _this$ownerDocument;
      if (child.destroyed) {
        throw new Error(ERROR_MSG_APPEND_DESTROYED_ELEMENT);
      }
      runtime.sceneGraphService.attach(child, this, index);
      if ((_this$ownerDocument = this.ownerDocument) !== null && _this$ownerDocument !== void 0 && _this$ownerDocument.defaultView) {
        if (!isInFragment(this) && child.nodeName === Shape.FRAGMENT) {
          this.ownerDocument.defaultView.mountFragment(child);
        } else {
          this.ownerDocument.defaultView.mountChildren(child);
        }
      }

      // @ts-ignore
      if (this.isMutationObserved) {
        insertedEvent.relatedNode = this;
        child.dispatchEvent(insertedEvent);
      }
      return child;
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(newChild, refChild) {
      if (!refChild) {
        this.appendChild(newChild);
      } else {
        if (newChild.parentElement) {
          newChild.parentElement.removeChild(newChild);
        }
        var index = this.childNodes.indexOf(refChild);
        if (index === -1) {
          this.appendChild(newChild);
        } else {
          this.appendChild(newChild, index);
        }
      }
      return newChild;
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(newChild, oldChild) {
      var index = this.childNodes.indexOf(oldChild);
      this.removeChild(oldChild);
      this.appendChild(newChild, index);
      return oldChild;
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      var _this$ownerDocument2, _child$ownerDocument;
      var enableCancelEventPropagation = ((_this$ownerDocument2 = this.ownerDocument) === null || _this$ownerDocument2 === void 0 || (_this$ownerDocument2 = _this$ownerDocument2.defaultView) === null || _this$ownerDocument2 === void 0 || (_this$ownerDocument2 = _this$ownerDocument2.getConfig().future) === null || _this$ownerDocument2 === void 0 ? void 0 : _this$ownerDocument2.experimentalCancelEventPropagation) === true;

      // should emit on itself before detach
      removedEvent.relatedNode = this;
      child.dispatchEvent(removedEvent, enableCancelEventPropagation, enableCancelEventPropagation);
      if ((_child$ownerDocument = child.ownerDocument) !== null && _child$ownerDocument !== void 0 && _child$ownerDocument.defaultView) {
        child.ownerDocument.defaultView.unmountChildren(child);
      }

      // remove from scene graph
      runtime.sceneGraphService.detach(child);
      return child;
    }

    /**
     * Remove all children which can be appended to its original parent later again.
     */
  }, {
    key: "removeChildren",
    value: function removeChildren() {
      for (var i = this.childNodes.length - 1; i >= 0; i--) {
        var child = this.childNodes[i];
        this.removeChild(child);
      }
    }

    /**
     * Recursively destroy all children which can not be appended to its original parent later again.
     */
  }, {
    key: "destroyChildren",
    value: function destroyChildren() {
      for (var i = this.childNodes.length - 1; i >= 0; i--) {
        var child = this.childNodes[i];
        if (child.childNodes.length > 0) {
          child.destroyChildren();
        }
        child.destroy();
      }
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
     */
  }, {
    key: "matches",
    value: function matches(selector) {
      return runtime.sceneGraphService.matches(selector, this);
    }
  }, {
    key: "getElementById",
    value: function getElementById(id) {
      return runtime.sceneGraphService.querySelector("#".concat(id), this);
    }
  }, {
    key: "getElementsByName",
    value: function getElementsByName(name) {
      return runtime.sceneGraphService.querySelectorAll("[name=\"".concat(name, "\"]"), this);
    }
  }, {
    key: "getElementsByClassName",
    value: function getElementsByClassName(className) {
      return runtime.sceneGraphService.querySelectorAll(".".concat(className), this);
    }
  }, {
    key: "getElementsByTagName",
    value: function getElementsByTagName(tagName) {
      return runtime.sceneGraphService.querySelectorAll(tagName, this);
    }
  }, {
    key: "querySelector",
    value: function querySelector(selectors) {
      return runtime.sceneGraphService.querySelector(selectors, this);
    }
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll(selectors) {
      return runtime.sceneGraphService.querySelectorAll(selectors, this);
    }

    /**
     * should traverses the element and its parents (heading toward the document root)
     * until it finds a node that matches the specified CSS selector.
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/closest
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#polyfill
     */
  }, {
    key: "closest",
    value: function closest(selectors) {
      var el = this;
      do {
        if (runtime.sceneGraphService.matches(selectors, el)) return el;
        el = el.parentElement;
      } while (el !== null);
      return null;
    }

    /**
     * search in scene group, but should not include itself
     */
  }, {
    key: "find",
    value: function find(filter) {
      var _this2 = this;
      var target = null;
      this.forEach(function (object) {
        if (object !== _this2 && filter(object)) {
          target = object;
          return false;
        }
        return true;
      });
      return target;
    }
  }, {
    key: "findAll",
    value: function findAll(filter) {
      var _this3 = this;
      var objects = [];
      this.forEach(function (object) {
        if (object !== _this3 && filter(object)) {
          objects.push(object);
        }
      });
      return objects;
    }

    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/after
     */
  }, {
    key: "after",
    value: function after() {
      var _this4 = this;
      if (this.parentNode) {
        var index = this.parentNode.childNodes.indexOf(this);
        for (var _len2 = arguments.length, nodes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          nodes[_key2] = arguments[_key2];
        }
        nodes.forEach(function (node, i) {
          var _this4$parentNode;
          return (_this4$parentNode = _this4.parentNode) === null || _this4$parentNode === void 0 ? void 0 : _this4$parentNode.appendChild(node, index + i + 1);
        });
      }
    }

    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/before
     */
  }, {
    key: "before",
    value: function before() {
      if (this.parentNode) {
        var _ref;
        var index = this.parentNode.childNodes.indexOf(this);
        for (var _len3 = arguments.length, nodes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          nodes[_key3] = arguments[_key3];
        }
        var first = nodes[0],
          rest = _arrayLikeToArray(nodes).slice(1);
        this.parentNode.appendChild(first, index);
        (_ref = first).after.apply(_ref, _toConsumableArray(rest));
      }
    }

    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/replaceWith
     */
  }, {
    key: "replaceWith",
    value: function replaceWith() {
      this.after.apply(this, arguments);
      this.remove();
    }

    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/append
     */
  }, {
    key: "append",
    value: function append() {
      var _this5 = this;
      for (var _len4 = arguments.length, nodes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        nodes[_key4] = arguments[_key4];
      }
      nodes.forEach(function (node) {
        return _this5.appendChild(node);
      });
    }

    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/prepend
     */
  }, {
    key: "prepend",
    value: function prepend() {
      var _this6 = this;
      for (var _len5 = arguments.length, nodes = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        nodes[_key5] = arguments[_key5];
      }
      nodes.forEach(function (node, i) {
        return _this6.appendChild(node, i);
      });
    }

    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/replaceChildren
     */
  }, {
    key: "replaceChildren",
    value: function replaceChildren() {
      while (this.childNodes.length && this.firstChild) {
        this.removeChild(this.firstChild);
      }
      this.append.apply(this, arguments);
    }

    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/remove
     */
  }, {
    key: "remove",
    value: function remove() {
      if (this.parentNode) {
        return this.parentNode.removeChild(this);
      }
      return this;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this$ownerDocument3;
      var enableCancelEventPropagation = ((_this$ownerDocument3 = this.ownerDocument) === null || _this$ownerDocument3 === void 0 || (_this$ownerDocument3 = _this$ownerDocument3.defaultView) === null || _this$ownerDocument3 === void 0 || (_this$ownerDocument3 = _this$ownerDocument3.getConfig().future) === null || _this$ownerDocument3 === void 0 ? void 0 : _this$ownerDocument3.experimentalCancelEventPropagation) === true;

      // fix https://github.com/antvis/G/issues/1813
      this.destroyChildren();

      // destroy itself before remove
      this.dispatchEvent(destroyEvent, enableCancelEventPropagation, enableCancelEventPropagation);

      // remove from scenegraph first
      this.remove();

      // remove event listeners
      this.emitter.removeAllListeners();
      this.destroyed = true;
    }
  }, {
    key: "getGeometryBounds",
    value: function getGeometryBounds() {
      var render = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return runtime.sceneGraphService.getGeometryBounds(this, render);
    }

    /**
     * get geometry bounds in world space, not accounting for children
     */
  }, {
    key: "getTransformedGeometryBounds",
    value: function getTransformedGeometryBounds() {
      var render = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return runtime.sceneGraphService.getTransformedGeometryBounds(this, render);
    }

    /**
     * get bounds in world space, account for children
     */
  }, {
    key: "getBounds",
    value: function getBounds() {
      return runtime.sceneGraphService.getBounds(this);
    }
  }, {
    key: "getRenderBounds",
    value: function getRenderBounds() {
      return runtime.sceneGraphService.getBounds(this, true);
    }

    /**
     * get bounds in local space, account for children
     */
  }, {
    key: "getLocalBounds",
    value: function getLocalBounds() {
      return runtime.sceneGraphService.getLocalBounds(this);
    }

    /**
     * account for context's bounds in client space,
     * but not accounting for children
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
     */
  }, {
    key: "getBoundingClientRect",
    value: function getBoundingClientRect() {
      return runtime.sceneGraphService.getBoundingClientRect(this);
    }

    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getClientRects
     */
  }, {
    key: "getClientRects",
    value: function getClientRects() {
      return [this.getBoundingClientRect()];
    }
  }, {
    key: "computedStyleMap",
    value:
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/computedStyleMap
     * eg. circle.computedStyleMap().get('fill');
     */
    function computedStyleMap() {
      return new Map(Object.entries(this.computedStyle));
    }
  }, {
    key: "getAttributeNames",
    value:
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNames
     */
    function getAttributeNames() {
      return Object.keys(this.attributes);
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
     */
  }, {
    key: "getAttribute",
    value: function getAttribute(name) {
      // @see https://github.com/antvis/G/issues/1267
      if (typeof name === 'symbol') {
        return undefined;
      }
      var value = this.attributes[name];
      if (value === undefined) {
        // if the given attribute does not exist, the value returned will either be null or ""
        return value;
      }
      return value;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute
     */
  }, {
    key: "hasAttribute",
    value: function hasAttribute(qualifiedName) {
      return this.getAttributeNames().includes(qualifiedName);
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributes
     */
  }, {
    key: "hasAttributes",
    value: function hasAttributes() {
      return !!this.getAttributeNames().length;
    }

    /**
     * should use removeAttribute() instead of setting the attribute value to null either directly or using setAttribute(). Many attributes will not behave as expected if you set them to null.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
     */
  }, {
    key: "removeAttribute",
    value: function removeAttribute(attributeName) {
      this.setAttribute(attributeName, null);
      delete this.attributes[attributeName];
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
     */
  }, {
    key: "setAttribute",
    value: function setAttribute(attributeName, value) {
      this.attributes[attributeName] = value;
    }
  }, {
    key: "getAttributeNS",
    value: function getAttributeNS(namespace, localName) {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "getAttributeNode",
    value: function getAttributeNode(qualifiedName) {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "getAttributeNodeNS",
    value: function getAttributeNodeNS(namespace, localName) {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "hasAttributeNS",
    value: function hasAttributeNS(namespace, localName) {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "removeAttributeNS",
    value: function removeAttributeNS(namespace, localName) {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "removeAttributeNode",
    value: function removeAttributeNode(attr) {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "setAttributeNS",
    value: function setAttributeNS(namespace, qualifiedName, value) {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "setAttributeNode",
    value: function setAttributeNode(attr) {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "setAttributeNodeNS",
    value: function setAttributeNodeNS(attr) {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "toggleAttribute",
    value: function toggleAttribute(qualifiedName, force) {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }]);
}(Node);

function isDisplayObject(value) {
  return !!(value !== null && value !== void 0 && value.nodeName);
}
var Proxy = runtime.globalThis.Proxy ? runtime.globalThis.Proxy : function () {};
var attrModifiedEvent = new MutationEvent(ElementEvent.ATTR_MODIFIED, null, null, null, null, MutationEvent.MODIFICATION, null, null);
var $vec3 = vec3.create();
var $quat = quat$1.create();

/**
 * prototype chains: DisplayObject -> Element -> Node -> EventTarget
 *
 * mixins: Animatable, Transformable, Visible
 * @see https://github.com/tannerntannern/ts-mixer/blob/master/README.md#mixing-generic-classes
 *
 * Provide abilities in scene graph, such as:
 * * transform `translate/rotate/scale`
 * * add/remove child
 * * visibility and z-index
 *
 * Those abilities are implemented with those components: `Transform/Sortable/Visible`.
 *
 * Emit following events:
 * * init
 * * destroy
 * * attributeChanged
 */
var DisplayObject = /*#__PURE__*/function (_Element) {
  function DisplayObject(config) {
    var _this;
    _classCallCheck(this, DisplayObject);
    _this = _callSuper(this, DisplayObject);

    // assign name, id to config
    // eg. group.get('name')
    _this.isCustomElement = false;
    _this.isMutationObserved = false;
    /**
     * push to active animations after calling `animate()`
     */
    _this.activeAnimations = [];
    _this.config = config;

    // init scene graph node
    _this.id = config.id || '';
    _this.name = config.name || '';
    if (config.className || config["class"]) {
      _this.className = config.className || config["class"];
    }
    _this.nodeName = config.type || Shape.GROUP;
    if (config.initialParsedStyle) {
      Object.assign(_this.parsedStyle, config.initialParsedStyle);
    }

    // start to process attributes
    _this.initAttributes(config.style);
    if (runtime.enableStyleSyntax) {
      _this.style = new Proxy(
      // @ts-ignore
      {
        // ...this.attributes,
        setProperty: function setProperty(propertyName, value
        // priority?: string,
        ) {
          _this.setAttribute(propertyName, value);
        },
        getPropertyValue: function getPropertyValue(propertyName) {
          return _this.getAttribute(propertyName);
        },
        removeProperty: function removeProperty(propertyName) {
          _this.removeAttribute(propertyName);
        },
        item: function item() {
          return '';
        }
      }, {
        get: function get(target, name) {
          if (target[name] !== undefined) {
            // if (name in target) {
            return target[name];
          }
          return _this.getAttribute(name);
        },
        set: function set(_, prop, value) {
          _this.setAttribute(prop, value);
          return true;
        }
      });
    }
    return _this;
  }
  _inherits(DisplayObject, _Element);
  return _createClass(DisplayObject, [{
    key: "destroy",
    value: function destroy() {
      _superPropGet(DisplayObject, "destroy", this, 3)([]);

      // stop all active animations
      this.getAnimations().forEach(function (animation) {
        animation.cancel();
      });
    }
  }, {
    key: "cloneNode",
    value: function cloneNode(deep, customCloneFunc) {
      var clonedStyle = _objectSpread({}, this.attributes);
      for (var attributeName in clonedStyle) {
        var attribute = clonedStyle[attributeName];

        // @see https://github.com/antvis/G/issues/1095
        if (isDisplayObject(attribute) &&
        // share the same clipPath if possible
        attributeName !== 'clipPath' && attributeName !== 'offsetPath' && attributeName !== 'textPath') {
          clonedStyle[attributeName] = attribute.cloneNode(deep);
        }
        // TODO: clone other type
        if (customCloneFunc) {
          clonedStyle[attributeName] = customCloneFunc(attributeName, attribute);
        }
      }
      var cloned = new this.constructor(_objectSpread(_objectSpread({}, this.config), {}, {
        style: clonedStyle
      }));

      // apply transform
      cloned.setLocalTransform(this.getLocalTransform());
      if (deep) {
        this.children.forEach(function (child) {
          // skip marker
          if (!child.style.isMarker) {
            var clonedChild = child.cloneNode(deep);
            cloned.appendChild(clonedChild);
          }
        });
      }
      return cloned;
    }
  }, {
    key: "initAttributes",
    value: function initAttributes() {
      var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = {
        forceUpdateGeometry: true
      };
      runtime.styleValueRegistry.processProperties(this, attributes, options);

      // redraw at next frame
      this.dirty();
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(name, value) {
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var memoize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      // ignore undefined value
      if (isUndefined(value)) {
        return;
      }
      if (force || value !== this.attributes[name]) {
        this.internalSetAttribute(name, value, {
          memoize: memoize
        });
        _superPropGet(DisplayObject, "setAttribute", this, 3)([name, value]);
      }
    }

    /**
     * batch update attributes without attributeChangedCallback, for performance
     * use with caution
     * @param attributes
     * @param parseOptions
     * @experimental
     */
  }, {
    key: "setAttributes",
    value: function setAttributes(attributes) {
      var parseOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _parseOptions$skipDis = parseOptions.skipDispatchAttrModifiedEvent,
        skipDispatchAttrModifiedEvent = _parseOptions$skipDis === void 0 ? false : _parseOptions$skipDis;
      var oldAttributes;
      var oldParsedValues;
      if (!skipDispatchAttrModifiedEvent) {
        oldAttributes = _objectSpread({}, this.attributes);
        oldParsedValues = _objectSpread({}, this.parsedStyle);
      }
      runtime.styleValueRegistry.processProperties(this, attributes, parseOptions);
      // redraw at next frame
      this.dirty();
      if (!skipDispatchAttrModifiedEvent) {
        for (var key in attributes) {
          this.dispatchAttrModifiedEvent(key, oldAttributes[key], attributes[key], oldParsedValues[key]);
        }
      }
    }

    /**
     * called when attributes get changed or initialized
     */
  }, {
    key: "internalSetAttribute",
    value: function internalSetAttribute(name, value) {
      var parseOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var oldValue = this.attributes[name];
      var oldParsedValue = this.parsedStyle[name];
      runtime.styleValueRegistry.processProperties(this, _defineProperty({}, name, value), parseOptions);

      // redraw at next frame
      this.dirty();

      // return;

      this.dispatchAttrModifiedEvent(name, oldValue, value, oldParsedValue);
    }
  }, {
    key: "dispatchAttrModifiedEvent",
    value: function dispatchAttrModifiedEvent(name, oldValue, value, oldParsedValue) {
      var newParsedValue = this.parsedStyle[name];
      if (this.isConnected) {
        attrModifiedEvent.relatedNode = this;
        attrModifiedEvent.prevValue = oldValue;
        attrModifiedEvent.newValue = value;
        attrModifiedEvent.attrName = name;
        attrModifiedEvent.prevParsedValue = oldParsedValue;
        attrModifiedEvent.newParsedValue = newParsedValue;
        if (this.isMutationObserved) {
          this.dispatchEvent(attrModifiedEvent);
        } else {
          var _this$ownerDocument$d;
          var enableCancelEventPropagation = ((_this$ownerDocument$d = this.ownerDocument.defaultView.getConfig().future) === null || _this$ownerDocument$d === void 0 ? void 0 : _this$ownerDocument$d.experimentalCancelEventPropagation) === true;
          attrModifiedEvent.target = this;
          this.ownerDocument.defaultView.dispatchEvent(attrModifiedEvent, true, enableCancelEventPropagation);
        }
      }
      if (this.isCustomElement && this.isConnected || !this.isCustomElement) {
        var _attributeChangedCall, _ref;
        (_attributeChangedCall = (_ref = this).attributeChangedCallback) === null || _attributeChangedCall === void 0 || _attributeChangedCall.call(_ref, name, oldValue, value, oldParsedValue, newParsedValue);
      }
    }

    // #region transformable
    /**
     * returns different values than getBoundingClientRect(), as the latter returns value relative to the viewport
     * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGGraphicsElement/getBBox
     *
     * FIXME: It is worth noting that getBBox responds to original untransformed values of a drawn object.
     * @see https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html#getBBox
     */
  }, {
    key: "getBBox",
    value: function getBBox() {
      var aabb = this.getBounds();
      var _aabb$getMin = aabb.getMin(),
        _aabb$getMin2 = _slicedToArray(_aabb$getMin, 2),
        left = _aabb$getMin2[0],
        top = _aabb$getMin2[1];
      var _aabb$getMax = aabb.getMax(),
        _aabb$getMax2 = _slicedToArray(_aabb$getMax, 2),
        right = _aabb$getMax2[0],
        bottom = _aabb$getMax2[1];
      return new Rectangle(left, top, right - left, bottom - top);
    }
  }, {
    key: "setOrigin",
    value: function setOrigin(position) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      runtime.sceneGraphService.setOrigin(this, createVec3(position, y, z, false));
      return this;
    }
  }, {
    key: "getOrigin",
    value: function getOrigin() {
      return runtime.sceneGraphService.getOrigin(this);
    }

    /**
     * set position in world space
     */
  }, {
    key: "setPosition",
    value: function setPosition(position) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      runtime.sceneGraphService.setPosition(this, createVec3(position, y, z, false));
      return this;
    }

    /**
     * set position in local space
     */
  }, {
    key: "setLocalPosition",
    value: function setLocalPosition(position) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      runtime.sceneGraphService.setLocalPosition(this, createVec3(position, y, z, false));
      return this;
    }

    /**
     * translate in world space
     */
  }, {
    key: "translate",
    value: function translate(position) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      runtime.sceneGraphService.translate(this, createVec3(position, y, z, false));
      return this;
    }

    /**
     * translate in local space
     */
  }, {
    key: "translateLocal",
    value: function translateLocal(position) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      runtime.sceneGraphService.translateLocal(this, createVec3(position, y, z, false));
      return this;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return runtime.sceneGraphService.getPosition(this);
    }
  }, {
    key: "getLocalPosition",
    value: function getLocalPosition() {
      return runtime.sceneGraphService.getLocalPosition(this);
    }

    /**
     * compatible with G 3.0
     *
     * scaling in local space
     * scale(10) = scale(10, 10, 10)
     *
     * we can't set scale in world space
     */
  }, {
    key: "scale",
    value: function scale(scaling, y, z) {
      return this.scaleLocal(scaling, y, z);
    }
  }, {
    key: "scaleLocal",
    value: function scaleLocal(scaling, y, z) {
      if (typeof scaling === 'number') {
        y = y || scaling;
        z = z || scaling;
        scaling = createVec3(scaling, y, z, false);
      }
      runtime.sceneGraphService.scaleLocal(this, scaling);
      return this;
    }

    /**
     * set scaling in local space
     */
  }, {
    key: "setLocalScale",
    value: function setLocalScale(scaling, y, z) {
      if (typeof scaling === 'number') {
        y = y || scaling;
        z = z || scaling;
        scaling = createVec3(scaling, y, z, false);
      }
      runtime.sceneGraphService.setLocalScale(this, scaling);
      return this;
    }

    /**
     * get scaling in local space
     */
  }, {
    key: "getLocalScale",
    value: function getLocalScale() {
      return runtime.sceneGraphService.getLocalScale(this);
    }

    /**
     * get scaling in world space
     */
  }, {
    key: "getScale",
    value: function getScale() {
      return runtime.sceneGraphService.getScale(this);
    }

    /**
     * only return degrees of Z axis in world space
     */
  }, {
    key: "getEulerAngles",
    value: function getEulerAngles() {
      var _getEuler = getEuler($vec3, runtime.sceneGraphService.getWorldTransform(this)),
        _getEuler2 = _slicedToArray(_getEuler, 3),
        ez = _getEuler2[2];
      return rad2deg(ez);
    }

    /**
     * only return degrees of Z axis in local space
     */
  }, {
    key: "getLocalEulerAngles",
    value: function getLocalEulerAngles() {
      var _getEuler3 = getEuler($vec3, runtime.sceneGraphService.getLocalRotation(this)),
        _getEuler4 = _slicedToArray(_getEuler3, 3),
        ez = _getEuler4[2];
      return rad2deg(ez);
    }

    /**
     * set euler angles(degrees) in world space
     */
  }, {
    key: "setEulerAngles",
    value: function setEulerAngles(z) {
      runtime.sceneGraphService.setEulerAngles(this, 0, 0, z);
      return this;
    }

    /**
     * set euler angles(degrees) in local space
     */
  }, {
    key: "setLocalEulerAngles",
    value: function setLocalEulerAngles(z) {
      runtime.sceneGraphService.setLocalEulerAngles(this, 0, 0, z);
      return this;
    }
  }, {
    key: "rotateLocal",
    value: function rotateLocal(x, y, z) {
      if (isNil(y) && isNil(z)) {
        runtime.sceneGraphService.rotateLocal(this, 0, 0, x);
      } else {
        runtime.sceneGraphService.rotateLocal(this, x, y, z);
      }
      return this;
    }
  }, {
    key: "rotate",
    value: function rotate(x, y, z) {
      if (isNil(y) && isNil(z)) {
        runtime.sceneGraphService.rotate(this, 0, 0, x);
      } else {
        runtime.sceneGraphService.rotate(this, x, y, z);
      }
      return this;
    }
  }, {
    key: "setRotation",
    value: function setRotation(rotation, y, z, w) {
      runtime.sceneGraphService.setRotation(this, rotation, y, z, w);
      return this;
    }
  }, {
    key: "setLocalRotation",
    value: function setLocalRotation(rotation, y, z, w) {
      runtime.sceneGraphService.setLocalRotation(this, rotation, y, z, w);
      return this;
    }
  }, {
    key: "setLocalSkew",
    value: function setLocalSkew(skew, y) {
      runtime.sceneGraphService.setLocalSkew(this, skew, y);
      return this;
    }
  }, {
    key: "getRotation",
    value: function getRotation() {
      return runtime.sceneGraphService.getRotation(this);
    }
  }, {
    key: "getLocalRotation",
    value: function getLocalRotation() {
      return runtime.sceneGraphService.getLocalRotation(this);
    }
  }, {
    key: "getLocalSkew",
    value: function getLocalSkew() {
      return runtime.sceneGraphService.getLocalSkew(this);
    }
  }, {
    key: "getLocalTransform",
    value: function getLocalTransform() {
      return runtime.sceneGraphService.getLocalTransform(this);
    }
  }, {
    key: "getWorldTransform",
    value: function getWorldTransform() {
      return runtime.sceneGraphService.getWorldTransform(this);
    }
  }, {
    key: "setLocalTransform",
    value: function setLocalTransform(transform) {
      runtime.sceneGraphService.setLocalTransform(this, transform);
      return this;
    }
  }, {
    key: "resetLocalTransform",
    value: function resetLocalTransform() {
      runtime.sceneGraphService.resetLocalTransform(this);
    }
    // #endregion transformable

    // #region animatable
    /**
     * returns an array of all Animation objects affecting this element
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getAnimations
     */
  }, {
    key: "getAnimations",
    value: function getAnimations() {
      return this.activeAnimations;
    }
    /**
     * create an animation with WAAPI
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/animate
     */
  }, {
    key: "animate",
    value: function animate(keyframes, options) {
      var _this$ownerDocument;
      var timeline = (_this$ownerDocument = this.ownerDocument) === null || _this$ownerDocument === void 0 ? void 0 : _this$ownerDocument.timeline;
      if (timeline) {
        return timeline.play(this, keyframes, options);
      }
      return null;
    }
    // #endregion animatable

    // #region visible
    /**
     * shortcut for Used value of `visibility`
     */
  }, {
    key: "isVisible",
    value: function isVisible() {
      var _this$parsedStyle;
      return ((_this$parsedStyle = this.parsedStyle) === null || _this$parsedStyle === void 0 ? void 0 : _this$parsedStyle.visibility) !== 'hidden';
    }
  }, {
    key: "interactive",
    get: function get() {
      return this.isInteractive();
    },
    set: function set(b) {
      this.style.pointerEvents = b ? 'auto' : 'none';
    }
  }, {
    key: "isInteractive",
    value: function isInteractive() {
      var _this$parsedStyle2;
      return ((_this$parsedStyle2 = this.parsedStyle) === null || _this$parsedStyle2 === void 0 ? void 0 : _this$parsedStyle2.pointerEvents) !== 'none';
    }
  }, {
    key: "isCulled",
    value: function isCulled() {
      return !!(this.cullable && this.cullable.enable && !this.cullable.visible);
    }

    /**
     * bring to front in current group
     */
  }, {
    key: "toFront",
    value: function toFront() {
      if (this.parentNode) {
        this.style.zIndex = Math.max.apply(Math, _toConsumableArray(this.parentNode.children.map(function (child) {
          return Number(child.style.zIndex);
        }))) + 1;
      }
      return this;
    }

    /**
     * send to back in current group
     */
  }, {
    key: "toBack",
    value: function toBack() {
      if (this.parentNode) {
        this.style.zIndex = Math.min.apply(Math, _toConsumableArray(this.parentNode.children.map(function (child) {
          return Number(child.style.zIndex);
        }))) - 1;
      }
      return this;
    }
    // #endregion visible

    // #region deprecated

    /**
     * compatible with G 3.0
     * @alias object.config
     * @deprecated
     */
  }, {
    key: "getConfig",
    value: function getConfig() {
      return this.config;
    }

    /**
     * @alias style
     * @example
     * circle.style.r = 10;
     * const r = circle.style;
     * @deprecated
     */
  }, {
    key: "attr",
    value: function attr() {
      var _this2 = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var name = args[0],
        value = args[1];
      if (!name) {
        return this.attributes;
      }
      if (isObject(name)) {
        Object.keys(name).forEach(function (key) {
          _this2.setAttribute(key, name[key]);
        });
        return this;
      }
      if (args.length === 2) {
        this.setAttribute(name, value);
        return this;
      }
      return this.attributes[name];
    }

    /**
     * return 3x3 matrix in world space
     * @deprecated
     */
  }, {
    key: "getMatrix",
    value: function getMatrix(transformMat4) {
      var transform = transformMat4 || this.getWorldTransform();
      var _mat4$getTranslation = mat4.getTranslation($vec3, transform),
        _mat4$getTranslation2 = _slicedToArray(_mat4$getTranslation, 2),
        tx = _mat4$getTranslation2[0],
        ty = _mat4$getTranslation2[1];
      var _mat4$getScaling = mat4.getScaling($vec3, transform),
        _mat4$getScaling2 = _slicedToArray(_mat4$getScaling, 2),
        sx = _mat4$getScaling2[0],
        sy = _mat4$getScaling2[1];
      var rotation = mat4.getRotation($quat, transform);
      var _getEuler5 = getEuler($vec3, rotation),
        _getEuler6 = _slicedToArray(_getEuler5, 3),
        eux = _getEuler6[0],
        euz = _getEuler6[2];
      // gimbal lock at 90 degrees
      return fromRotationTranslationScale(eux || euz, tx, ty, sx, sy);
    }

    /**
     * return 3x3 matrix in local space
     * @deprecated
     */
  }, {
    key: "getLocalMatrix",
    value: function getLocalMatrix() {
      return this.getMatrix(this.getLocalTransform());
    }

    /**
     * set 3x3 matrix in world space
     * @deprecated
     */
  }, {
    key: "setMatrix",
    value: function setMatrix(mat) {
      var _decompose = decompose(mat),
        _decompose2 = _slicedToArray(_decompose, 5),
        tx = _decompose2[0],
        ty = _decompose2[1],
        scalingX = _decompose2[2],
        scalingY = _decompose2[3],
        angle = _decompose2[4];
      this.setEulerAngles(angle).setPosition(tx, ty).setLocalScale(scalingX, scalingY);
    }

    /**
     * set 3x3 matrix in local space
     * @deprecated
     */
  }, {
    key: "setLocalMatrix",
    value: function setLocalMatrix(mat) {
      var _decompose3 = decompose(mat),
        _decompose4 = _slicedToArray(_decompose3, 5),
        tx = _decompose4[0],
        ty = _decompose4[1],
        scalingX = _decompose4[2],
        scalingY = _decompose4[3],
        angle = _decompose4[4];
      this.setLocalEulerAngles(angle).setLocalPosition(tx, ty).setLocalScale(scalingX, scalingY);
    }

    /**
     * Use `visibility: visible` instead.
     * @deprecated
     */
  }, {
    key: "show",
    value: function show() {
      this.forEach(function (object) {
        object.style.visibility = 'visible';
      });
    }

    /**
     * Use `visibility: hidden` instead.
     * @deprecated
     */
  }, {
    key: "hide",
    value: function hide() {
      this.forEach(function (object) {
        object.style.visibility = 'hidden';
      });
    }

    /**
     * Use `childElementCount` instead.
     * @deprecated
     */
  }, {
    key: "getCount",
    value: function getCount() {
      return this.childElementCount;
    }

    /**
     * Use `parentElement` instead.
     * @deprecated
     */
  }, {
    key: "getParent",
    value: function getParent() {
      return this.parentElement;
    }

    /**
     * Use `children` instead.
     * @deprecated
     */
  }, {
    key: "getChildren",
    value: function getChildren() {
      return this.children;
    }

    /**
     * Use `firstElementChild` instead.
     * @deprecated
     */
  }, {
    key: "getFirst",
    value: function getFirst() {
      return this.firstElementChild;
    }

    /**
     * Use `lastElementChild` instead.
     * @deprecated
     */
  }, {
    key: "getLast",
    value: function getLast() {
      return this.lastElementChild;
    }

    /**
     * Use `this.children[index]` instead.
     * @deprecated
     */
  }, {
    key: "getChildByIndex",
    value: function getChildByIndex(index) {
      return this.children[index] || null;
    }

    /**
     * Use `appendChild` instead.
     * @deprecated
     */
  }, {
    key: "add",
    value: function add(child, index) {
      return this.appendChild(child, index);
    }

    /**
     * @deprecated
     */
  }, {
    key: "set",
    value: function set(name, value) {
      // @ts-ignore
      this.config[name] = value;
    }

    /**
     * @deprecated
     */
  }, {
    key: "get",
    value: function get(name) {
      return this.config[name];
    }

    /**
     * Use `setPosition` instead.
     * @deprecated
     */
  }, {
    key: "moveTo",
    value: function moveTo(position) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      this.setPosition(position, y, z);
      return this;
    }

    /**
     * Use `setPosition` instead.
     * @deprecated
     */
  }, {
    key: "move",
    value: function move(position) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      this.setPosition(position, y, z);
      return this;
    }

    /**
     * Use `this.style.zIndex` instead.
     * @deprecated
     */
  }, {
    key: "setZIndex",
    value: function setZIndex(zIndex) {
      this.style.zIndex = zIndex;
      return this;
    }

    // #endregion deprecated
  }]);
}(Element);
DisplayObject.PARSED_STYLE_LIST = new Set(['class', 'className', 'clipPath', 'cursor', 'display', 'draggable', 'droppable', 'fill', 'fillOpacity', 'fillRule', 'filter', 'increasedLineWidthForHitTesting', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'miterLimit', 'hitArea', 'offsetDistance', 'offsetPath', 'offsetX', 'offsetY', 'opacity', 'pointerEvents', 'shadowColor', 'shadowType', 'shadowBlur', 'shadowOffsetX', 'shadowOffsetY', 'stroke', 'strokeOpacity', 'strokeWidth', 'strokeLinecap', 'strokeLineJoin', 'strokeDasharray', 'strokeDashoffset', 'transform', 'transformOrigin', 'textTransform', 'visibility', 'zIndex']);

var Circle = /*#__PURE__*/function (_DisplayObject) {
  function Circle() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Circle);
    return _callSuper(this, Circle, [_objectSpread({
      type: Shape.CIRCLE
    }, options)]);
  }
  _inherits(Circle, _DisplayObject);
  return _createClass(Circle);
}(DisplayObject);
Circle.PARSED_STYLE_LIST = new Set([].concat(_toConsumableArray(DisplayObject.PARSED_STYLE_LIST), ['cx', 'cy', 'cz', 'r', 'isBillboard', 'isSizeAttenuation']));

var _excluded$6 = ["style"];
/**
 * shadow root
 * @see https://yuque.antfin-inc.com/antv/czqvg5/pgqipg
 */
var CustomElement = /*#__PURE__*/function (_DisplayObject) {
  // private shadowNodes: DisplayObject[] = [];

  function CustomElement() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, _excluded$6);
    _classCallCheck(this, CustomElement);
    _this = _callSuper(this, CustomElement, [_objectSpread({
      style: style
    }, rest)]);
    _this.isCustomElement = true;
    return _this;
  }

  /**
   * fired after element insert into DOM tree
   */
  _inherits(CustomElement, _DisplayObject);
  return _createClass(CustomElement);
}(DisplayObject);
CustomElement.PARSED_STYLE_LIST = new Set(['class', 'className', 'clipPath', 'cursor', 'draggable', 'droppable', 'opacity', 'pointerEvents', 'transform', 'transformOrigin', 'zIndex', 'visibility']);

var Ellipse = /*#__PURE__*/function (_DisplayObject) {
  function Ellipse() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Ellipse);
    return _callSuper(this, Ellipse, [_objectSpread({
      type: Shape.ELLIPSE
    }, options)]);
  }
  _inherits(Ellipse, _DisplayObject);
  return _createClass(Ellipse);
}(DisplayObject);
Ellipse.PARSED_STYLE_LIST = new Set([].concat(_toConsumableArray(DisplayObject.PARSED_STYLE_LIST), ['cx', 'cy', 'cz', 'rx', 'ry', 'isBillboard', 'isSizeAttenuation']));

/**
 * 节点片段，用于包裹多个节点并批量操作
 *
 *  向 Fragment 或者根节点为 Fragment 的节点添加子节点时，不会触发渲染和事件。
 *
 * 当 Fragment 被挂载到 Canvas 中的节点时，其子节点会一次性被渲染，并触发合并事件。
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
 */
var Fragment = /*#__PURE__*/function (_DisplayObject) {
  function Fragment() {
    _classCallCheck(this, Fragment);
    return _callSuper(this, Fragment, [{
      type: Shape.FRAGMENT
    }]);
  }
  _inherits(Fragment, _DisplayObject);
  return _createClass(Fragment);
}(DisplayObject);
Fragment.PARSED_STYLE_LIST = new Set(['class', 'className']);

/**
 * its attributes are inherited by its children.
 * @see https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/g
 * 
 * @example
 * <g fill="white" stroke="green" stroke-width="5">
    <circle cx="40" cy="40" r="25" />
    <circle cx="60" cy="60" r="25" />
  </g>
 */
var Group = /*#__PURE__*/function (_DisplayObject) {
  function Group() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Group);
    return _callSuper(this, Group, [_objectSpread({
      type: Shape.GROUP
    }, options)]);
  }
  _inherits(Group, _DisplayObject);
  return _createClass(Group);
}(DisplayObject);
Group.PARSED_STYLE_LIST = new Set(['class', 'className', 'clipPath', 'cursor', 'draggable', 'droppable', 'opacity', 'pointerEvents', 'transform', 'transformOrigin', 'zIndex', 'visibility']);

var _excluded$5 = ["style"];
/**
 * HTML container
 * @see https://github.com/pmndrs/drei#html
 */
var HTML = /*#__PURE__*/function (_DisplayObject) {
  function HTML() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, _excluded$5);
    _classCallCheck(this, HTML);
    _this = _callSuper(this, HTML, [_objectSpread({
      type: Shape.HTML,
      style: style
    }, rest)]);
    _this.cullable.enable = false;
    return _this;
  }

  /**
   * return wrapper HTMLElement
   * * <div> in g-webgl/canvas
   * * <foreignObject> in g-svg
   */
  _inherits(HTML, _DisplayObject);
  return _createClass(HTML, [{
    key: "getDomElement",
    value: function getDomElement() {
      return this.parsedStyle.$el;
    }

    /**
     * override with $el.getBoundingClientRect
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
     *
     * ! The calculation logic of the html element should be consistent with that of the canvas element
     */
    // getBoundingClientRect(): Rectangle {
    //   if (this.parsedStyle.$el) {
    //     return this.parsedStyle.$el.getBoundingClientRect();
    //   } else {
    //     const { x, y, width, height } = this.parsedStyle;
    //     return new Rectangle(x, y, width, height);
    //   }
    // }
  }, {
    key: "getClientRects",
    value: function getClientRects() {
      return [this.getBoundingClientRect()];
    }

    // getBounds() {
    //   const clientRect = this.getBoundingClientRect();
    //   // calc context's offset
    //   // @ts-ignore
    //   const canvasRect = this.ownerDocument?.defaultView
    //     ?.getContextService()
    //     .getBoundingClientRect();

    //   const aabb = new AABB();
    //   const minX = clientRect.left - (canvasRect?.left || 0);
    //   const minY = clientRect.top - (canvasRect?.top || 0);
    //   aabb.setMinMax(
    //     [minX, minY, 0],
    //     [minX + clientRect.width, minY + clientRect.height, 0],
    //   );
    //   return aabb;
    // }
  }, {
    key: "getLocalBounds",
    value: function getLocalBounds() {
      if (this.parentNode) {
        var parentInvert = mat4.invert(mat4.create(), this.parentNode.getWorldTransform());
        var bounds = this.getBounds();
        if (!AABB.isEmpty(bounds)) {
          var localBounds = new AABB();
          localBounds.setFromTransformedAABB(bounds, parentInvert);
          return localBounds;
        }
      }
      return this.getBounds();
    }
  }]);
}(DisplayObject);
HTML.PARSED_STYLE_LIST = new Set([].concat(_toConsumableArray(DisplayObject.PARSED_STYLE_LIST), ['x', 'y', '$el', 'innerHTML', 'width', 'height']));

var Image = /*#__PURE__*/function (_DisplayObject) {
  function Image() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Image);
    return _callSuper(this, Image, [_objectSpread({
      type: Shape.IMAGE
    }, options)]);
  }
  _inherits(Image, _DisplayObject);
  return _createClass(Image);
}(DisplayObject);
Image.PARSED_STYLE_LIST = new Set([].concat(_toConsumableArray(DisplayObject.PARSED_STYLE_LIST), ['x', 'y', 'z', 'src', 'width', 'height', 'isBillboard', 'billboardRotation', 'isSizeAttenuation', 'keepAspectRatio']));

var _excluded$4 = ["style"];
/**
 * Create a line connecting two points.
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line
 *
 * Also support for using marker.
 */
var Line = /*#__PURE__*/function (_DisplayObject) {
  function Line() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, _excluded$4);
    _classCallCheck(this, Line);
    _this = _callSuper(this, Line, [_objectSpread({
      type: Shape.LINE,
      style: _objectSpread({
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        z1: 0,
        z2: 0
      }, style)
    }, rest)]);
    _this.markerStartAngle = 0;
    _this.markerEndAngle = 0;
    var _this$parsedStyle = _this.parsedStyle,
      markerStart = _this$parsedStyle.markerStart,
      markerEnd = _this$parsedStyle.markerEnd;
    if (markerStart && isDisplayObject(markerStart)) {
      _this.markerStartAngle = markerStart.getLocalEulerAngles();
      _this.appendChild(markerStart);
    }
    if (markerEnd && isDisplayObject(markerEnd)) {
      _this.markerEndAngle = markerEnd.getLocalEulerAngles();
      _this.appendChild(markerEnd);
    }
    _this.transformMarker(true);
    _this.transformMarker(false);
    return _this;
  }
  _inherits(Line, _DisplayObject);
  return _createClass(Line, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attrName, oldValue, newValue, prevParsedValue, newParsedValue) {
      if (attrName === 'x1' || attrName === 'y1' || attrName === 'x2' || attrName === 'y2' || attrName === 'markerStartOffset' || attrName === 'markerEndOffset') {
        this.transformMarker(true);
        this.transformMarker(false);
      } else if (attrName === 'markerStart') {
        if (prevParsedValue && isDisplayObject(prevParsedValue)) {
          this.markerStartAngle = 0;
          prevParsedValue.remove();
        }

        // CSSKeyword 'unset'
        if (newParsedValue && isDisplayObject(newParsedValue)) {
          this.markerStartAngle = newParsedValue.getLocalEulerAngles();
          this.appendChild(newParsedValue);
          this.transformMarker(true);
        }
      } else if (attrName === 'markerEnd') {
        if (prevParsedValue && isDisplayObject(prevParsedValue)) {
          this.markerEndAngle = 0;
          prevParsedValue.remove();
        }
        if (newParsedValue && isDisplayObject(newParsedValue)) {
          this.markerEndAngle = newParsedValue.getLocalEulerAngles();
          this.appendChild(newParsedValue);
          this.transformMarker(false);
        }
      }
    }
  }, {
    key: "transformMarker",
    value: function transformMarker(isStart) {
      var _this$parsedStyle2 = this.parsedStyle,
        markerStart = _this$parsedStyle2.markerStart,
        markerEnd = _this$parsedStyle2.markerEnd,
        markerStartOffset = _this$parsedStyle2.markerStartOffset,
        markerEndOffset = _this$parsedStyle2.markerEndOffset,
        x1 = _this$parsedStyle2.x1,
        x2 = _this$parsedStyle2.x2,
        y1 = _this$parsedStyle2.y1,
        y2 = _this$parsedStyle2.y2;
      var marker = isStart ? markerStart : markerEnd;
      if (!marker || !isDisplayObject(marker)) {
        return;
      }
      var rad = 0;
      var x;
      var y;
      var ox;
      var oy;
      var offset;
      var originalAngle;
      if (isStart) {
        ox = x1;
        oy = y1;
        x = x2 - x1;
        y = y2 - y1;
        offset = markerStartOffset || 0;
        originalAngle = this.markerStartAngle;
      } else {
        ox = x2;
        oy = y2;
        x = x1 - x2;
        y = y1 - y2;
        offset = markerEndOffset || 0;
        originalAngle = this.markerEndAngle;
      }
      rad = Math.atan2(y, x);

      // account for markerOffset
      marker.setLocalEulerAngles(rad * 180 / Math.PI + originalAngle);
      marker.setLocalPosition(ox + Math.cos(rad) * offset, oy + Math.sin(rad) * offset);
    }
  }, {
    key: "getPoint",
    value: function getPoint(ratio) {
      var inWorldSpace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // TODO: account for z1/z2 in 3D line
      var _this$parsedStyle3 = this.parsedStyle,
        x1 = _this$parsedStyle3.x1,
        y1 = _this$parsedStyle3.y1,
        x2 = _this$parsedStyle3.x2,
        y2 = _this$parsedStyle3.y2;
      var _linePointAt = linePointAt(x1, y1, x2, y2, ratio),
        x = _linePointAt.x,
        y = _linePointAt.y;
      var transformed = vec3.transformMat4(vec3.create(), vec3.fromValues(x, y, 0), inWorldSpace ? this.getWorldTransform() : this.getLocalTransform());

      // apply local transformation
      return new Point(transformed[0], transformed[1]);
    }
  }, {
    key: "getPointAtLength",
    value: function getPointAtLength(distance) {
      var inWorldSpace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.getPoint(distance / this.getTotalLength(), inWorldSpace);
    }
  }, {
    key: "getTotalLength",
    value: function getTotalLength() {
      // TODO: account for z1/z2 in 3D line
      var _this$parsedStyle4 = this.parsedStyle,
        x1 = _this$parsedStyle4.x1,
        y1 = _this$parsedStyle4.y1,
        x2 = _this$parsedStyle4.x2,
        y2 = _this$parsedStyle4.y2;
      return lineLength(x1, y1, x2, y2);
    }
  }]);
}(DisplayObject);
Line.PARSED_STYLE_LIST = new Set([].concat(_toConsumableArray(DisplayObject.PARSED_STYLE_LIST), ['x1', 'y1', 'x2', 'y2', 'z1', 'z2', 'isBillboard', 'isSizeAttenuation', 'markerStart', 'markerEnd', 'markerStartOffset', 'markerEndOffset']));

var _excluded$3 = ["style"];
var Path = /*#__PURE__*/function (_DisplayObject) {
  function Path() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, _excluded$3);
    _classCallCheck(this, Path);
    _this = _callSuper(this, Path, [_objectSpread({
      type: Shape.PATH,
      style: style,
      initialParsedStyle: {
        miterLimit: 4,
        d: _objectSpread({}, EMPTY_PARSED_PATH)
      }
    }, rest)]);
    _this.markerStartAngle = 0;
    _this.markerEndAngle = 0;
    /**
     * markers placed at the mid
     */
    _this.markerMidList = [];
    var _this$parsedStyle = _this.parsedStyle,
      markerStart = _this$parsedStyle.markerStart,
      markerEnd = _this$parsedStyle.markerEnd,
      markerMid = _this$parsedStyle.markerMid;
    if (markerStart && isDisplayObject(markerStart)) {
      _this.markerStartAngle = markerStart.getLocalEulerAngles();
      _this.appendChild(markerStart);
    }
    if (markerMid && isDisplayObject(markerMid)) {
      _this.placeMarkerMid(markerMid);
    }
    if (markerEnd && isDisplayObject(markerEnd)) {
      _this.markerEndAngle = markerEnd.getLocalEulerAngles();
      _this.appendChild(markerEnd);
    }
    _this.transformMarker(true);
    _this.transformMarker(false);
    return _this;
  }
  _inherits(Path, _DisplayObject);
  return _createClass(Path, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attrName, oldValue, newValue, prevParsedValue, newParsedValue) {
      if (attrName === 'd') {
        // recalc markers
        this.transformMarker(true);
        this.transformMarker(false);
        this.placeMarkerMid(this.parsedStyle.markerMid);
      } else if (attrName === 'markerStartOffset' || attrName === 'markerEndOffset') {
        this.transformMarker(true);
        this.transformMarker(false);
      } else if (attrName === 'markerStart') {
        if (prevParsedValue && isDisplayObject(prevParsedValue)) {
          this.markerStartAngle = 0;
          prevParsedValue.remove();
        }

        // CSSKeyword 'unset'
        if (newParsedValue && isDisplayObject(newParsedValue)) {
          this.markerStartAngle = newParsedValue.getLocalEulerAngles();
          this.appendChild(newParsedValue);
          this.transformMarker(true);
        }
      } else if (attrName === 'markerEnd') {
        if (prevParsedValue && isDisplayObject(prevParsedValue)) {
          this.markerEndAngle = 0;
          prevParsedValue.remove();
        }
        if (newParsedValue && isDisplayObject(newParsedValue)) {
          this.markerEndAngle = newParsedValue.getLocalEulerAngles();
          this.appendChild(newParsedValue);
          this.transformMarker(false);
        }
      } else if (attrName === 'markerMid') {
        this.placeMarkerMid(newParsedValue);
      }
    }
  }, {
    key: "transformMarker",
    value: function transformMarker(isStart) {
      var _this$parsedStyle2 = this.parsedStyle,
        markerStart = _this$parsedStyle2.markerStart,
        markerEnd = _this$parsedStyle2.markerEnd,
        markerStartOffset = _this$parsedStyle2.markerStartOffset,
        markerEndOffset = _this$parsedStyle2.markerEndOffset;
      var marker = isStart ? markerStart : markerEnd;
      if (!marker || !isDisplayObject(marker)) {
        return;
      }
      var rad = 0;
      var x;
      var y;
      var ox;
      var oy;
      var offset;
      var originalAngle;
      if (isStart) {
        var _this$getStartTangent = this.getStartTangent(),
          _this$getStartTangent2 = _slicedToArray(_this$getStartTangent, 2),
          p1 = _this$getStartTangent2[0],
          p2 = _this$getStartTangent2[1];
        ox = p2[0];
        oy = p2[1];
        x = p1[0] - p2[0];
        y = p1[1] - p2[1];
        offset = markerStartOffset || 0;
        originalAngle = this.markerStartAngle;
      } else {
        var _this$getEndTangent = this.getEndTangent(),
          _this$getEndTangent2 = _slicedToArray(_this$getEndTangent, 2),
          _p = _this$getEndTangent2[0],
          _p2 = _this$getEndTangent2[1];
        ox = _p2[0];
        oy = _p2[1];
        x = _p[0] - _p2[0];
        y = _p[1] - _p2[1];
        offset = markerEndOffset || 0;
        originalAngle = this.markerEndAngle;
      }
      rad = Math.atan2(y, x);

      // account for markerOffset
      marker.setLocalEulerAngles(rad * 180 / Math.PI + originalAngle);
      marker.setLocalPosition(ox + Math.cos(rad) * offset, oy + Math.sin(rad) * offset);
    }
  }, {
    key: "placeMarkerMid",
    value: function placeMarkerMid(marker) {
      var segments = this.parsedStyle.d.segments;
      // clear all existed markers
      this.markerMidList.forEach(function (marker) {
        marker.remove();
      });
      if (marker && isDisplayObject(marker)) {
        for (var i = 1; i < segments.length - 1; i++) {
          var _segments$i$currentPo = _slicedToArray(segments[i].currentPoint, 2),
            ox = _segments$i$currentPo[0],
            oy = _segments$i$currentPo[1];
          var cloned = i === 1 ? marker : marker.cloneNode(true);
          this.markerMidList.push(cloned);
          this.appendChild(cloned);
          cloned.setLocalPosition(ox, oy);
          // TODO: orient of marker
        }
      }
    }

    /**
     * Returns the total length of the path.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/getTotalLength
     */
  }, {
    key: "getTotalLength",
    value: function getTotalLength() {
      return getOrCalculatePathTotalLength(this);
    }

    /**
     * Returns the point at a given distance along the path.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/getPointAtLength
     */
  }, {
    key: "getPointAtLength",
    value: function getPointAtLength$1(distance) {
      var inWorldSpace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var absolutePath = this.parsedStyle.d.absolutePath;
      var _getPointAtLength2 = getPointAtLength(absolutePath, distance),
        x = _getPointAtLength2.x,
        y = _getPointAtLength2.y;
      var transformed = vec3.transformMat4(vec3.create(), vec3.fromValues(x, y, 0), inWorldSpace ? this.getWorldTransform() : this.getLocalTransform());

      // apply local transformation
      return new Point(transformed[0], transformed[1]);
    }

    /**
     * Returns the point at a given ratio of the total length in path.
     */
  }, {
    key: "getPoint",
    value: function getPoint(ratio) {
      var inWorldSpace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.getPointAtLength(ratio * getOrCalculatePathTotalLength(this), inWorldSpace);
    }

    /**
     * Get start tangent vector
     */
  }, {
    key: "getStartTangent",
    value: function getStartTangent() {
      var segments = this.parsedStyle.d.segments;
      var result = [];
      if (segments.length > 1) {
        var startPoint = segments[0].currentPoint;
        var endPoint = segments[1].currentPoint;
        var tangent = segments[1].startTangent;
        result = [];
        if (tangent) {
          result.push([startPoint[0] - tangent[0], startPoint[1] - tangent[1]]);
          result.push([startPoint[0], startPoint[1]]);
        } else {
          result.push([endPoint[0], endPoint[1]]);
          result.push([startPoint[0], startPoint[1]]);
        }
      }
      return result;
    }

    /**
     * Get end tangent vector
     */
  }, {
    key: "getEndTangent",
    value: function getEndTangent() {
      var segments = this.parsedStyle.d.segments;
      var length = segments.length;
      var result = [];
      if (length > 1) {
        var startPoint = segments[length - 2].currentPoint;
        var endPoint = segments[length - 1].currentPoint;
        var tangent = segments[length - 1].endTangent;
        result = [];
        if (tangent) {
          result.push([endPoint[0] - tangent[0], endPoint[1] - tangent[1]]);
          result.push([endPoint[0], endPoint[1]]);
        } else {
          result.push([startPoint[0], startPoint[1]]);
          result.push([endPoint[0], endPoint[1]]);
        }
      }
      return result;
    }
  }]);
}(DisplayObject);
Path.PARSED_STYLE_LIST = new Set([].concat(_toConsumableArray(DisplayObject.PARSED_STYLE_LIST), ['d', 'markerStart', 'markerMid', 'markerEnd', 'markerStartOffset', 'markerEndOffset', 'isBillboard', 'isSizeAttenuation']));

var _excluded$2 = ["style"];
var Polygon = /*#__PURE__*/function (_DisplayObject) {
  function Polygon() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, _excluded$2);
    _classCallCheck(this, Polygon);
    _this = _callSuper(this, Polygon, [_objectSpread({
      type: Shape.POLYGON,
      style: style,
      initialParsedStyle: {
        points: {
          points: [],
          totalLength: 0,
          segments: []
        },
        miterLimit: 4,
        isClosed: true
      }
    }, rest)]);
    _this.markerStartAngle = 0;
    _this.markerEndAngle = 0;
    /**
     * markers placed at the mid
     */
    _this.markerMidList = [];
    var _this$parsedStyle = _this.parsedStyle,
      markerStart = _this$parsedStyle.markerStart,
      markerEnd = _this$parsedStyle.markerEnd,
      markerMid = _this$parsedStyle.markerMid;
    if (markerStart && isDisplayObject(markerStart)) {
      _this.markerStartAngle = markerStart.getLocalEulerAngles();
      _this.appendChild(markerStart);
    }
    if (markerMid && isDisplayObject(markerMid)) {
      _this.placeMarkerMid(markerMid);
    }
    if (markerEnd && isDisplayObject(markerEnd)) {
      _this.markerEndAngle = markerEnd.getLocalEulerAngles();
      _this.appendChild(markerEnd);
    }
    _this.transformMarker(true);
    _this.transformMarker(false);
    return _this;
  }
  _inherits(Polygon, _DisplayObject);
  return _createClass(Polygon, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attrName, oldValue, newValue, prevParsedValue, newParsedValue) {
      if (attrName === 'points') {
        // recalc markers
        this.transformMarker(true);
        this.transformMarker(false);
        this.placeMarkerMid(this.parsedStyle.markerMid);
      } else if (attrName === 'markerStartOffset' || attrName === 'markerEndOffset') {
        this.transformMarker(true);
        this.transformMarker(false);
      } else if (attrName === 'markerStart') {
        if (prevParsedValue && isDisplayObject(prevParsedValue)) {
          this.markerStartAngle = 0;
          prevParsedValue.remove();
        }

        // CSSKeyword 'unset'
        if (newParsedValue && isDisplayObject(newParsedValue)) {
          this.markerStartAngle = newParsedValue.getLocalEulerAngles();
          this.appendChild(newParsedValue);
          this.transformMarker(true);
        }
      } else if (attrName === 'markerEnd') {
        if (prevParsedValue && isDisplayObject(prevParsedValue)) {
          this.markerEndAngle = 0;
          prevParsedValue.remove();
        }
        if (newParsedValue && isDisplayObject(newParsedValue)) {
          this.markerEndAngle = newParsedValue.getLocalEulerAngles();
          this.appendChild(newParsedValue);
          this.transformMarker(false);
        }
      } else if (attrName === 'markerMid') {
        this.placeMarkerMid(newParsedValue);
      }
    }
  }, {
    key: "transformMarker",
    value: function transformMarker(isStart) {
      var _this$parsedStyle2 = this.parsedStyle,
        markerStart = _this$parsedStyle2.markerStart,
        markerEnd = _this$parsedStyle2.markerEnd,
        markerStartOffset = _this$parsedStyle2.markerStartOffset,
        markerEndOffset = _this$parsedStyle2.markerEndOffset,
        P = _this$parsedStyle2.points;
      var _ref2 = P || {},
        points = _ref2.points;
      var marker = isStart ? markerStart : markerEnd;
      if (!marker || !isDisplayObject(marker) || !points) {
        return;
      }
      var rad = 0;
      var x;
      var y;
      var ox;
      var oy;
      var offset;
      var originalAngle;
      ox = points[0][0];
      oy = points[0][1];
      if (isStart) {
        x = points[1][0] - points[0][0];
        y = points[1][1] - points[0][1];
        offset = markerStartOffset || 0;
        originalAngle = this.markerStartAngle;
      } else {
        var length = points.length;
        if (!this.parsedStyle.isClosed) {
          ox = points[length - 1][0];
          oy = points[length - 1][1];
          x = points[length - 2][0] - points[length - 1][0];
          y = points[length - 2][1] - points[length - 1][1];
        } else {
          x = points[length - 1][0] - points[0][0];
          y = points[length - 1][1] - points[0][1];
        }
        offset = markerEndOffset || 0;
        originalAngle = this.markerEndAngle;
      }
      rad = Math.atan2(y, x);

      // account for markerOffset
      marker.setLocalEulerAngles(rad * 180 / Math.PI + originalAngle);
      marker.setLocalPosition(ox + Math.cos(rad) * offset, oy + Math.sin(rad) * offset);
    }
  }, {
    key: "placeMarkerMid",
    value: function placeMarkerMid(marker) {
      var P = this.parsedStyle.points;
      var _ref3 = P || {},
        points = _ref3.points;

      // clear all existed markers
      this.markerMidList.forEach(function (marker) {
        marker.remove();
      });
      this.markerMidList = [];
      if (marker && isDisplayObject(marker) && points) {
        for (var i = 1; i < (this.parsedStyle.isClosed ? points.length : points.length - 1); i++) {
          var ox = points[i][0];
          var oy = points[i][1];
          var cloned = i === 1 ? marker : marker.cloneNode(true);
          this.markerMidList.push(cloned);
          this.appendChild(cloned);
          cloned.setLocalPosition(ox, oy);

          // TODO: orient of marker
        }
      }
    }
  }]);
}(DisplayObject);
Polygon.PARSED_STYLE_LIST = new Set([].concat(_toConsumableArray(DisplayObject.PARSED_STYLE_LIST), ['points', 'markerStart', 'markerMid', 'markerEnd', 'markerStartOffset', 'markerEndOffset', 'isClosed', 'isBillboard', 'isSizeAttenuation']));

var _excluded$1 = ["style"];
/**
 * Polyline inherits the marker-related capabilities of Polygon.
 */
var Polyline = /*#__PURE__*/function (_Polygon) {
  function Polyline() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, _excluded$1);
    _classCallCheck(this, Polyline);
    return _callSuper(this, Polyline, [_objectSpread({
      type: Shape.POLYLINE,
      style: style,
      initialParsedStyle: {
        points: {
          points: [],
          totalLength: 0,
          segments: []
        },
        miterLimit: 4,
        isClosed: false
      }
    }, rest)]);
  }
  _inherits(Polyline, _Polygon);
  return _createClass(Polyline, [{
    key: "getTotalLength",
    value: function getTotalLength() {
      return getOrCalculatePolylineTotalLength(this);
    }
  }, {
    key: "getPointAtLength",
    value: function getPointAtLength(distance) {
      var inWorldSpace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.getPoint(distance / this.getTotalLength(), inWorldSpace);
    }
  }, {
    key: "getPoint",
    value: function getPoint(ratio) {
      var inWorldSpace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var points = this.parsedStyle.points.points;
      if (this.parsedStyle.points.segments.length === 0) {
        var segments = [];
        var tempLength = 0;
        var segmentT;
        var segmentL;
        var totalLength = this.getTotalLength();
        points.forEach(function (p, i) {
          if (points[i + 1]) {
            segmentT = [0, 0];
            segmentT[0] = tempLength / totalLength;
            segmentL = lineLength(p[0], p[1], points[i + 1][0], points[i + 1][1]);
            tempLength += segmentL;
            segmentT[1] = tempLength / totalLength;
            segments.push(segmentT);
          }
        });
        this.parsedStyle.points.segments = segments;
      }
      var subt = 0;
      var index = 0;
      this.parsedStyle.points.segments.forEach(function (v, i) {
        if (ratio >= v[0] && ratio <= v[1]) {
          subt = (ratio - v[0]) / (v[1] - v[0]);
          index = i;
        }
      });
      var _linePointAt = linePointAt(points[index][0], points[index][1], points[index + 1][0], points[index + 1][1], subt),
        x = _linePointAt.x,
        y = _linePointAt.y;
      var transformed = vec3.transformMat4(vec3.create(), vec3.fromValues(x, y, 0), inWorldSpace ? this.getWorldTransform() : this.getLocalTransform());

      // apply local transformation
      return new Point(transformed[0], transformed[1]);
    }
  }, {
    key: "getStartTangent",
    value: function getStartTangent() {
      var points = this.parsedStyle.points.points;
      var result = [];
      result.push([points[1][0], points[1][1]]);
      result.push([points[0][0], points[0][1]]);
      return result;
    }
  }, {
    key: "getEndTangent",
    value: function getEndTangent() {
      var points = this.parsedStyle.points.points;
      var l = points.length - 1;
      var result = [];
      result.push([points[l - 1][0], points[l - 1][1]]);
      result.push([points[l][0], points[l][1]]);
      return result;
    }
  }]);
}(Polygon);
Polyline.PARSED_STYLE_LIST = new Set([].concat(_toConsumableArray(Polygon.PARSED_STYLE_LIST), ['points', 'markerStart', 'markerMid', 'markerEnd', 'markerStartOffset', 'markerEndOffset', 'isBillboard']));

var Rect = /*#__PURE__*/function (_DisplayObject) {
  function Rect() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Rect);
    return _callSuper(this, Rect, [_objectSpread({
      type: Shape.RECT
    }, options)]);
  }
  _inherits(Rect, _DisplayObject);
  return _createClass(Rect);
}(DisplayObject);
Rect.PARSED_STYLE_LIST = new Set([].concat(_toConsumableArray(DisplayObject.PARSED_STYLE_LIST), ['x', 'y', 'z', 'width', 'height', 'isBillboard', 'isSizeAttenuation', 'radius']));

var _excluded = ["style"];
/**
 * <text> @see https://developer.mozilla.org/en-US/docs/Web/API/SVGTextElement
 */
var Text = /*#__PURE__*/function (_DisplayObject) {
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGTextContentElement#constants
   */
  // LENGTHADJUST_SPACING: number = 1;
  // LENGTHADJUST_SPACINGANDGLYPHS: number = 2;
  // LENGTHADJUST_UNKNOWN: number = 0;

  function Text() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, _excluded);
    _classCallCheck(this, Text);
    return _callSuper(this, Text, [_objectSpread({
      type: Shape.TEXT,
      style: _objectSpread({
        fill: 'black'
      }, style)
    }, rest)]);
  }

  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGTextContentElement
   */
  _inherits(Text, _DisplayObject);
  return _createClass(Text, [{
    key: "getComputedTextLength",
    value: function getComputedTextLength() {
      var _this$parsedStyle$met;
      this.getGeometryBounds();
      return ((_this$parsedStyle$met = this.parsedStyle.metrics) === null || _this$parsedStyle$met === void 0 ? void 0 : _this$parsedStyle$met.maxLineWidth) || 0;
    }
  }, {
    key: "getLineBoundingRects",
    value: function getLineBoundingRects() {
      var _this$parsedStyle$met2;
      this.getGeometryBounds();
      return ((_this$parsedStyle$met2 = this.parsedStyle.metrics) === null || _this$parsedStyle$met2 === void 0 ? void 0 : _this$parsedStyle$met2.lineMetrics) || [];
    }
  }, {
    key: "isOverflowing",
    value: function isOverflowing() {
      this.getGeometryBounds();
      return !!this.parsedStyle.isOverflowing;
    }
  }]);
}(DisplayObject);
Text.PARSED_STYLE_LIST = new Set([].concat(_toConsumableArray(DisplayObject.PARSED_STYLE_LIST), ['x', 'y', 'z', 'isBillboard', 'billboardRotation', 'isSizeAttenuation', 'text', 'textAlign', 'textBaseline', 'fontStyle', 'fontSize', 'fontFamily', 'fontWeight', 'fontVariant', 'lineHeight', 'letterSpacing', 'leading', 'wordWrap', 'wordWrapWidth', 'maxLines', 'textOverflow', 'isOverflowing', 'textPath', 'textDecorationLine', 'textDecorationColor', 'textDecorationStyle', 'textDecorationThickness', 'textPathSide', 'textPathStartOffset', 'metrics', 'dx', 'dy']));

/**
 * canvas.customElements
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry
 */
var CustomElementRegistry = /*#__PURE__*/function () {
  function CustomElementRegistry() {
    _classCallCheck(this, CustomElementRegistry);
    this.registry = {};
    this.define(Shape.CIRCLE, Circle);
    this.define(Shape.ELLIPSE, Ellipse);
    this.define(Shape.RECT, Rect);
    this.define(Shape.IMAGE, Image);
    this.define(Shape.LINE, Line);
    this.define(Shape.GROUP, Group);
    this.define(Shape.PATH, Path);
    this.define(Shape.POLYGON, Polygon);
    this.define(Shape.POLYLINE, Polyline);
    this.define(Shape.TEXT, Text);
    this.define(Shape.HTML, HTML);
  }
  return _createClass(CustomElementRegistry, [{
    key: "define",
    value: function define(name, constructor) {
      this.registry[name] = constructor;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/get
     */
  }, {
    key: "get",
    value: function get(name) {
      return this.registry[name];
    }
  }]);
}();

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CSS/RegisterProperty#parameters
 */

/**
 * holds useful CSS-related methods.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CSS
 *
 * * CSS Typed OM @see https://developer.mozilla.org/en-US/docs/Web/API/CSS/factory_functions
 * * register property @see https://developer.mozilla.org/en-US/docs/Web/API/CSS/RegisterProperty
 * * CSS Layout API
 */
var CSS = {
  /**
   * <number>
   * @see https://drafts.csswg.org/css-values-4/#number-value
   */
  number: function number(n) {
    return new CSSUnitValue(n);
  },
  /**
   * <percentage>
   * @see https://drafts.csswg.org/css-values-4/#percentage-value
   */
  percent: function percent(n) {
    return new CSSUnitValue(n, '%');
  },
  /**
   * <length>
   */
  px: function px(n) {
    return new CSSUnitValue(n, 'px');
  },
  /**
   * <length>
   */
  em: function em(n) {
    return new CSSUnitValue(n, 'em');
  },
  rem: function rem(n) {
    return new CSSUnitValue(n, 'rem');
  },
  /**
   * <angle>
   */
  deg: function deg(n) {
    return new CSSUnitValue(n, 'deg');
  },
  /**
   * <angle>
   */
  grad: function grad(n) {
    return new CSSUnitValue(n, 'grad');
  },
  /**
   * <angle>
   */
  rad: function rad(n) {
    return new CSSUnitValue(n, 'rad');
  },
  /**
   * <angle>
   */
  turn: function turn(n) {
    return new CSSUnitValue(n, 'turn');
  },
  /**
   * <time>
   */
  s: function s(n) {
    return new CSSUnitValue(n, 's');
  },
  /**
   * <time>
   */
  ms: function ms(n) {
    return new CSSUnitValue(n, 'ms');
  },
  /**
   * CSS Properties & Values API
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/CSS_Properties_and_Values_API
   * @see https://drafts.css-houdini.org/css-properties-values-api/#registering-custom-properties
   * @see https://developer.mozilla.org/en-US/docs/Web/API/CSS/RegisterProperty
   */
  registerProperty: function registerProperty(definition) {
    var name = definition.name,
      inherits = definition.inherits,
      interpolable = definition.interpolable,
      initialValue = definition.initialValue,
      syntax = definition.syntax;
    runtime.styleValueRegistry.registerMetadata({
      n: name,
      inh: inherits,
      "int": interpolable,
      d: initialValue,
      syntax: syntax
    });
  },
  /**
   * CSS Layout API
   * register layout
   *
   * @see https://github.com/w3c/css-houdini-drafts/blob/main/css-layout-api/EXPLAINER.md
   * @see https://developer.mozilla.org/en-US/docs/Web/Guide/Houdini#css_layout_api
   */
  registerLayout: function registerLayout(name, clazz) {
    runtime.layoutRegistry.registerLayout(name, clazz);
  }
};

/**
 * the entry of DOM tree
 * Document -> Node -> EventTarget
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document
 */
var Document = /*#__PURE__*/function (_Node) {
  function Document() {
    var _this;
    _classCallCheck(this, Document);
    _this = _callSuper(this, Document);
    /**
     * only document has defaultView, points to canvas,
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView
     */
    _this.defaultView = null;
    _this.ownerDocument = null;
    _this.nodeName = 'document';

    // create timeline
    try {
      _this.timeline = new runtime.AnimationTimeline(_this);
    } catch (_unused) {}

    /**
     * for inherited properties, the initial value is used on the root element only,
     * as long as no specified value is supplied.
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/initial_value
     */
    var initialStyle = {};
    BUILT_IN_PROPERTIES.forEach(function (_ref) {
      var n = _ref.n,
        inh = _ref.inh,
        d = _ref.d;
      if (inh && d) {
        initialStyle[n] = isFunction(d) ? d(Shape.GROUP) : d;
      }
    });

    // like <html> in DOM tree
    _this.documentElement = new Group({
      id: 'g-root',
      style: initialStyle
    });
    _this.documentElement.ownerDocument = _this;
    _this.documentElement.parentNode = _this;
    _this.childNodes = [_this.documentElement];
    return _this;
  }
  _inherits(Document, _Node);
  return _createClass(Document, [{
    key: "children",
    get: function get() {
      return this.childNodes;
    }
  }, {
    key: "childElementCount",
    get: function get() {
      return this.childNodes.length;
    }
  }, {
    key: "firstElementChild",
    get: function get() {
      return this.firstChild;
    }
  }, {
    key: "lastElementChild",
    get: function get() {
      return this.lastChild;
    }
  }, {
    key: "createElement",
    value:
    /**
     * @example const circle = document.createElement('circle', { style: { r: 10 } });
     */
    function createElement(tagName, options) {
      // @observablehq/plot will create <svg>
      if (tagName === 'svg') {
        return this.documentElement;
      }

      // d3 will use <tspan>
      var clazz = this.defaultView.customElements.get(tagName);
      if (!clazz) {
        console.warn('Unsupported tagName: ', tagName);
        clazz = tagName === 'tspan' ? Text : Group;
      }
      var shape = new clazz(options);
      shape.ownerDocument = this;
      return shape;
    }
  }, {
    key: "createElementNS",
    value: function createElementNS(namespaceURI, tagName, options) {
      return this.createElement(tagName, options);
    }
  }, {
    key: "cloneNode",
    value: function cloneNode(deep) {
      throw new Error(ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      try {
        this.documentElement.destroyChildren();
        this.timeline.destroy();
      } catch (_unused2) {}
    }

    /**
     * Picking 2D graphics by traversing elements and checking bounding boxes.
     */
  }, {
    key: "elementsFromBBox",
    value: function elementsFromBBox(minX, minY, maxX, maxY) {
      var hitTestList = [];

      // Traverse all elements in the document
      var _traverse = function traverse(node) {
        if (!node.isInteractive() || node.isCulled()) {
          return;
        }
        var _node$parsedStyle$poi = node.parsedStyle.pointerEvents,
          pointerEvents = _node$parsedStyle$poi === void 0 ? 'auto' : _node$parsedStyle$poi;

        // Account for `visibility`
        // @see https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events
        var isVisibilityAffected = ['auto', 'visiblepainted', 'visiblefill', 'visiblestroke', 'visible'].includes(pointerEvents);
        if (!isVisibilityAffected || node.isVisible()) {
          var bounds = node.getTransformedGeometryBounds(true);
          if (bounds && !AABB.isEmpty(bounds)) {
            if (bounds.max[0] >= minX && bounds.min[0] <= maxX && bounds.max[1] >= minY && bounds.min[1] <= maxY) {
              hitTestList.push(node);
            }
          }
        }

        // Traverse children if it's a container
        if (node.childNodes) {
          node.childNodes.forEach(function (child) {
            if (child instanceof DisplayObject) {
              _traverse(child);
            }
          });
        }
      };

      // Start traversal from documentElement
      _traverse(this.documentElement);

      // Sort by render order (z-index)
      hitTestList.sort(function (a, b) {
        return b.sortable.renderOrder - a.sortable.renderOrder;
      });
      return hitTestList;
    }
  }, {
    key: "elementFromPointSync",
    value: function elementFromPointSync(x, y) {
      var _this$defaultView$can = this.defaultView.canvas2Viewport({
          x: x,
          y: y
        }),
        viewportX = _this$defaultView$can.x,
        viewportY = _this$defaultView$can.y;
      var _this$defaultView$get = this.defaultView.getConfig(),
        width = _this$defaultView$get.width,
        height = _this$defaultView$get.height;
      // outside canvas' viewport
      if (viewportX < 0 || viewportY < 0 || viewportX > width || viewportY > height) {
        return null;
      }
      var _this$defaultView$vie = this.defaultView.viewport2Client({
          x: viewportX,
          y: viewportY
        }),
        clientX = _this$defaultView$vie.x,
        clientY = _this$defaultView$vie.y;
      var _this$defaultView$get2 = this.defaultView.getRenderingService().hooks.pickSync.call({
          topmost: true,
          position: {
            x: x,
            y: y,
            viewportX: viewportX,
            viewportY: viewportY,
            clientX: clientX,
            clientY: clientY
          },
          picked: []
        }),
        picked = _this$defaultView$get2.picked;
      return picked && picked[0] || this.documentElement;
    }

    /**
     * Do picking with API instead of triggering interactive events.
     *
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Document/elementFromPoint
     */
  }, {
    key: "elementFromPoint",
    value: (function () {
      var _elementFromPoint = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(x, y) {
        var _this$defaultView$can2, viewportX, viewportY, _this$defaultView$get3, width, height, _this$defaultView$vie2, clientX, clientY, _yield$this$defaultVi, picked;
        return _regeneratorRuntime().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this$defaultView$can2 = this.defaultView.canvas2Viewport({
                x: x,
                y: y
              }), viewportX = _this$defaultView$can2.x, viewportY = _this$defaultView$can2.y;
              _this$defaultView$get3 = this.defaultView.getConfig(), width = _this$defaultView$get3.width, height = _this$defaultView$get3.height; // outside canvas' viewport
              if (!(viewportX < 0 || viewportY < 0 || viewportX > width || viewportY > height)) {
                _context.next = 1;
                break;
              }
              return _context.abrupt("return", null);
            case 1:
              _this$defaultView$vie2 = this.defaultView.viewport2Client({
                x: viewportX,
                y: viewportY
              }), clientX = _this$defaultView$vie2.x, clientY = _this$defaultView$vie2.y;
              _context.next = 2;
              return this.defaultView.getRenderingService().hooks.pick.promise({
                topmost: true,
                position: {
                  x: x,
                  y: y,
                  viewportX: viewportX,
                  viewportY: viewportY,
                  clientX: clientX,
                  clientY: clientY
                },
                picked: []
              });
            case 2:
              _yield$this$defaultVi = _context.sent;
              picked = _yield$this$defaultVi.picked;
              return _context.abrupt("return", picked && picked[0] || this.documentElement);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function elementFromPoint(_x, _x2) {
        return _elementFromPoint.apply(this, arguments);
      }
      return elementFromPoint;
    }())
  }, {
    key: "elementsFromPointSync",
    value: function elementsFromPointSync(x, y) {
      var _this$defaultView$can3 = this.defaultView.canvas2Viewport({
          x: x,
          y: y
        }),
        viewportX = _this$defaultView$can3.x,
        viewportY = _this$defaultView$can3.y;
      var _this$defaultView$get4 = this.defaultView.getConfig(),
        width = _this$defaultView$get4.width,
        height = _this$defaultView$get4.height;
      // outside canvas' viewport
      if (viewportX < 0 || viewportY < 0 || viewportX > width || viewportY > height) {
        return [];
      }
      var _this$defaultView$vie3 = this.defaultView.viewport2Client({
          x: viewportX,
          y: viewportY
        }),
        clientX = _this$defaultView$vie3.x,
        clientY = _this$defaultView$vie3.y;
      var _this$defaultView$get5 = this.defaultView.getRenderingService().hooks.pickSync.call({
          topmost: false,
          position: {
            x: x,
            y: y,
            viewportX: viewportX,
            viewportY: viewportY,
            clientX: clientX,
            clientY: clientY
          },
          picked: []
        }),
        picked = _this$defaultView$get5.picked;
      if (picked[picked.length - 1] !== this.documentElement) {
        picked.push(this.documentElement);
      }
      return picked;
    }

    /**
     * Do picking with API instead of triggering interactive events.
     *
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Document/elementsFromPoint
     */
  }, {
    key: "elementsFromPoint",
    value: (function () {
      var _elementsFromPoint = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(x, y) {
        var _this$defaultView$can4, viewportX, viewportY, _this$defaultView$get6, width, height, _this$defaultView$vie4, clientX, clientY, _yield$this$defaultVi2, picked;
        return _regeneratorRuntime().wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this$defaultView$can4 = this.defaultView.canvas2Viewport({
                x: x,
                y: y
              }), viewportX = _this$defaultView$can4.x, viewportY = _this$defaultView$can4.y;
              _this$defaultView$get6 = this.defaultView.getConfig(), width = _this$defaultView$get6.width, height = _this$defaultView$get6.height; // outside canvas' viewport
              if (!(viewportX < 0 || viewportY < 0 || viewportX > width || viewportY > height)) {
                _context2.next = 1;
                break;
              }
              return _context2.abrupt("return", []);
            case 1:
              _this$defaultView$vie4 = this.defaultView.viewport2Client({
                x: viewportX,
                y: viewportY
              }), clientX = _this$defaultView$vie4.x, clientY = _this$defaultView$vie4.y;
              _context2.next = 2;
              return this.defaultView.getRenderingService().hooks.pick.promise({
                topmost: false,
                position: {
                  x: x,
                  y: y,
                  viewportX: viewportX,
                  viewportY: viewportY,
                  clientX: clientX,
                  clientY: clientY
                },
                picked: []
              });
            case 2:
              _yield$this$defaultVi2 = _context2.sent;
              picked = _yield$this$defaultVi2.picked;
              if (picked[picked.length - 1] !== this.documentElement) {
                picked.push(this.documentElement);
              }
              return _context2.abrupt("return", picked);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function elementsFromPoint(_x3, _x4) {
        return _elementsFromPoint.apply(this, arguments);
      }
      return elementsFromPoint;
    }()
    /**
     * eg. Uncaught DOMException: Failed to execute 'appendChild' on 'Node': Only one element on document allowed.
     */
    )
  }, {
    key: "appendChild",
    value: function appendChild(newChild, index) {
      throw new Error(ERROR_MSG_USE_DOCUMENT_ELEMENT);
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(newChild, refChild) {
      throw new Error(ERROR_MSG_USE_DOCUMENT_ELEMENT);
    }
  }, {
    key: "removeChild",
    value: function removeChild(oldChild, destroy) {
      throw new Error(ERROR_MSG_USE_DOCUMENT_ELEMENT);
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(newChild, oldChild, destroy) {
      throw new Error(ERROR_MSG_USE_DOCUMENT_ELEMENT);
    }
  }, {
    key: "append",
    value: function append() {
      throw new Error(ERROR_MSG_USE_DOCUMENT_ELEMENT);
    }
  }, {
    key: "prepend",
    value: function prepend() {
      throw new Error(ERROR_MSG_USE_DOCUMENT_ELEMENT);
    }

    /**
     * Execute query on documentElement.
     */
  }, {
    key: "getElementById",
    value: function getElementById(id) {
      return this.documentElement.getElementById(id);
    }
  }, {
    key: "getElementsByName",
    value: function getElementsByName(name) {
      return this.documentElement.getElementsByName(name);
    }
  }, {
    key: "getElementsByTagName",
    value: function getElementsByTagName(tagName) {
      return this.documentElement.getElementsByTagName(tagName);
    }
  }, {
    key: "getElementsByClassName",
    value: function getElementsByClassName(className) {
      return this.documentElement.getElementsByClassName(className);
    }
  }, {
    key: "querySelector",
    value: function querySelector(selectors) {
      return this.documentElement.querySelector(selectors);
    }
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll(selectors) {
      return this.documentElement.querySelectorAll(selectors);
    }
  }, {
    key: "find",
    value: function find(filter) {
      return this.documentElement.find(filter);
    }
  }, {
    key: "findAll",
    value: function findAll(filter) {
      return this.documentElement.findAll(filter);
    }
  }]);
}(Node);

/**
 * apply following rules:
 * 1. `visibility` in scenegraph node
 * 2. other custom culling strategies, eg. frustum culling
 */
var CullingPlugin = /*#__PURE__*/function () {
  function CullingPlugin(strategies) {
    _classCallCheck(this, CullingPlugin);
    this.strategies = strategies;
  }
  return _createClass(CullingPlugin, [{
    key: "apply",
    value: function apply(context) {
      var config = context.config,
        camera = context.camera,
        renderingService = context.renderingService,
        renderingContext = context.renderingContext;
      var strategies = this.strategies;
      renderingService.hooks.cull.tap(CullingPlugin.tag, function (object) {
        if (object) {
          var _config$future;
          var cullable = object.cullable;
          // cullable.visible = true;
          // const renderBounds = object.getRenderBounds();
          // if (AABB.isEmpty(renderBounds)) {
          //   cullable.visible = false;
          // } else {
          //   const isShape2D = shape2D.indexOf(object.nodeName as Shape) > -1;
          //   const [p0, p1, p2, p3] = camera.getFrustum().planes;
          //   tmpAABB.setMinMax([-p1.distance, -p3.distance, 0], [p0.distance, p2.distance, 0]);

          //   cullable.visible = isShape2D ? renderBounds.intersects(tmpAABB) : true;
          // }

          if (strategies.length === 0) {
            cullable.visible = renderingContext.unculledEntities.indexOf(object.entity) > -1;
          } else {
            // eg. implemented by g-webgl(frustum culling)
            cullable.visible = strategies.every(function (strategy) {
              return strategy.isVisible(camera, object);
            });
          }
          if (!object.isCulled() && object.isVisible()) {
            return object;
          }
          var enableCancelEventPropagation = ((_config$future = config.future) === null || _config$future === void 0 ? void 0 : _config$future.experimentalCancelEventPropagation) === true;

          // if (this.renderingContext.renderListLastFrame.indexOf(object) > -1) {
          object.dispatchEvent(new CustomEvent(ElementEvent.CULLED), enableCancelEventPropagation, enableCancelEventPropagation);
          // }

          return null;
        }
        return object;
      });
      renderingService.hooks.afterRender.tap(CullingPlugin.tag, function (object) {
        object.cullable.visibilityPlaneMask = -1;
      });
    }
  }]);
}();
CullingPlugin.tag = 'Culling';

/**
 * support mouse & touch events
 * @see https://github.com/pixijs/pixi.js/blob/dev/packages/interaction/README.md
 *
 * also provide some extra events such as `drag`
 */
var EventPlugin = /*#__PURE__*/function () {
  function EventPlugin() {
    var _this = this;
    _classCallCheck(this, EventPlugin);
    this.autoPreventDefault = false;
    this.rootPointerEvent = new FederatedPointerEvent(null);
    this.rootWheelEvent = new FederatedWheelEvent(null);
    this.onPointerMove = function (nativeEvent) {
      var _this$context$renderi;
      var canvas = (_this$context$renderi = _this.context.renderingContext.root) === null || _this$context$renderi === void 0 || (_this$context$renderi = _this$context$renderi.ownerDocument) === null || _this$context$renderi === void 0 ? void 0 : _this$context$renderi.defaultView;
      if (canvas.supportsTouchEvents && nativeEvent.pointerType === 'touch') return;
      var normalizedEvents = _this.normalizeToPointerEvent(nativeEvent, canvas);
      var _iterator = _createForOfIteratorHelper(normalizedEvents),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var normalizedEvent = _step.value;
          var event = _this.bootstrapEvent(_this.rootPointerEvent, normalizedEvent, canvas, nativeEvent);
          _this.context.eventService.mapEvent(event);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      _this.setCursor(_this.context.eventService.cursor);
    };
    this.onClick = function (nativeEvent) {
      var _this$context$renderi2;
      var canvas = (_this$context$renderi2 = _this.context.renderingContext.root) === null || _this$context$renderi2 === void 0 || (_this$context$renderi2 = _this$context$renderi2.ownerDocument) === null || _this$context$renderi2 === void 0 ? void 0 : _this$context$renderi2.defaultView;
      var normalizedEvents = _this.normalizeToPointerEvent(nativeEvent, canvas);
      var _iterator2 = _createForOfIteratorHelper(normalizedEvents),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var normalizedEvent = _step2.value;
          var event = _this.bootstrapEvent(_this.rootPointerEvent, normalizedEvent, canvas, nativeEvent);
          _this.context.eventService.mapEvent(event);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      _this.setCursor(_this.context.eventService.cursor);
    };
  }
  return _createClass(EventPlugin, [{
    key: "apply",
    value: function apply(context) {
      var _this2 = this;
      this.context = context;
      var renderingService = context.renderingService;
      var canvas = this.context.renderingContext.root.ownerDocument.defaultView;
      this.context.eventService.setPickHandler(function (position) {
        var _this2$context$render = _this2.context.renderingService.hooks.pickSync.call({
            position: position,
            picked: [],
            topmost: true // we only concern the topmost element
          }),
          picked = _this2$context$render.picked;
        return picked[0] || null;
      });
      renderingService.hooks.pointerWheel.tap(EventPlugin.tag, function (nativeEvent) {
        var wheelEvent = _this2.normalizeWheelEvent(nativeEvent);
        _this2.context.eventService.mapEvent(wheelEvent);
      });
      renderingService.hooks.pointerDown.tap(EventPlugin.tag, function (nativeEvent) {
        if (canvas.supportsTouchEvents && nativeEvent.pointerType === 'touch') return;
        var events = _this2.normalizeToPointerEvent(nativeEvent, canvas);
        if (_this2.autoPreventDefault && events[0].isNormalized) {
          var cancelable = nativeEvent.cancelable || !('cancelable' in nativeEvent);
          if (cancelable) {
            nativeEvent.preventDefault();
          }
        }
        var _iterator3 = _createForOfIteratorHelper(events),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var event = _step3.value;
            var federatedEvent = _this2.bootstrapEvent(_this2.rootPointerEvent, event, canvas, nativeEvent);
            _this2.context.eventService.mapEvent(federatedEvent);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        _this2.setCursor(_this2.context.eventService.cursor);
      });
      renderingService.hooks.pointerUp.tap(EventPlugin.tag, function (nativeEvent) {
        if (canvas.supportsTouchEvents && nativeEvent.pointerType === 'touch') return;

        // account for element in SVG
        var $element = _this2.context.contextService.getDomElement();
        var isNativeEventFromCanvas = _this2.context.eventService.isNativeEventFromCanvas($element, nativeEvent);
        var outside = !isNativeEventFromCanvas ? 'outside' : '';
        var normalizedEvents = _this2.normalizeToPointerEvent(nativeEvent, canvas);
        var _iterator4 = _createForOfIteratorHelper(normalizedEvents),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var normalizedEvent = _step4.value;
            var event = _this2.bootstrapEvent(_this2.rootPointerEvent, normalizedEvent, canvas, nativeEvent);
            event.type += outside;
            _this2.context.eventService.mapEvent(event);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        _this2.setCursor(_this2.context.eventService.cursor);
      });
      renderingService.hooks.pointerMove.tap(EventPlugin.tag, this.onPointerMove);
      renderingService.hooks.pointerOver.tap(EventPlugin.tag, this.onPointerMove);
      renderingService.hooks.pointerOut.tap(EventPlugin.tag, this.onPointerMove);
      renderingService.hooks.click.tap(EventPlugin.tag, this.onClick);
      renderingService.hooks.pointerCancel.tap(EventPlugin.tag, function (nativeEvent) {
        var normalizedEvents = _this2.normalizeToPointerEvent(nativeEvent, canvas);
        var _iterator5 = _createForOfIteratorHelper(normalizedEvents),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var normalizedEvent = _step5.value;
            var event = _this2.bootstrapEvent(_this2.rootPointerEvent, normalizedEvent, canvas, nativeEvent);
            _this2.context.eventService.mapEvent(event);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        _this2.setCursor(_this2.context.eventService.cursor);
      });
    }
  }, {
    key: "bootstrapEvent",
    value: function bootstrapEvent(event, normalizedEvent, view, nativeEvent) {
      event.view = view;
      event.originalEvent = null;
      event.nativeEvent = nativeEvent;
      event.pointerId = normalizedEvent.pointerId;
      event.width = normalizedEvent.width;
      event.height = normalizedEvent.height;
      event.isPrimary = normalizedEvent.isPrimary;
      event.pointerType = normalizedEvent.pointerType;
      event.pressure = normalizedEvent.pressure;
      event.tangentialPressure = normalizedEvent.tangentialPressure;
      event.tiltX = normalizedEvent.tiltX;
      event.tiltY = normalizedEvent.tiltY;
      event.twist = normalizedEvent.twist;
      this.transferMouseData(event, normalizedEvent);
      var _this$context$eventSe = this.context.eventService.client2Viewport({
          x: normalizedEvent.clientX,
          y: normalizedEvent.clientY
        }),
        x = _this$context$eventSe.x,
        y = _this$context$eventSe.y;
      event.viewport.x = x;
      event.viewport.y = y;
      var _this$context$eventSe2 = this.context.eventService.viewport2Canvas(event.viewport),
        canvasX = _this$context$eventSe2.x,
        canvasY = _this$context$eventSe2.y;
      event.canvas.x = canvasX;
      event.canvas.y = canvasY;
      event.global.copyFrom(event.canvas);
      event.offset.copyFrom(event.canvas);
      event.isTrusted = nativeEvent.isTrusted;
      if (event.type === 'pointerleave') {
        event.type = 'pointerout';
      }
      if (event.type.startsWith('mouse')) {
        event.type = event.type.replace('mouse', 'pointer');
      }
      if (event.type.startsWith('touch')) {
        event.type = TOUCH_TO_POINTER[event.type] || event.type;
      }
      return event;
    }
  }, {
    key: "normalizeWheelEvent",
    value: function normalizeWheelEvent(nativeEvent) {
      var event = this.rootWheelEvent;
      this.transferMouseData(event, nativeEvent);
      event.deltaMode = nativeEvent.deltaMode;
      event.deltaX = nativeEvent.deltaX;
      event.deltaY = nativeEvent.deltaY;
      event.deltaZ = nativeEvent.deltaZ;
      var _this$context$eventSe3 = this.context.eventService.client2Viewport({
          x: nativeEvent.clientX,
          y: nativeEvent.clientY
        }),
        x = _this$context$eventSe3.x,
        y = _this$context$eventSe3.y;
      event.viewport.x = x;
      event.viewport.y = y;
      var _this$context$eventSe4 = this.context.eventService.viewport2Canvas(event.viewport),
        canvasX = _this$context$eventSe4.x,
        canvasY = _this$context$eventSe4.y;
      event.canvas.x = canvasX;
      event.canvas.y = canvasY;
      event.global.copyFrom(event.canvas);
      event.offset.copyFrom(event.canvas);
      event.nativeEvent = nativeEvent;
      event.type = nativeEvent.type;
      return event;
    }

    /**
     * Transfers base & mouse event data from the nativeEvent to the federated event.
     */
  }, {
    key: "transferMouseData",
    value: function transferMouseData(event, nativeEvent) {
      event.isTrusted = nativeEvent.isTrusted;
      event.srcElement = nativeEvent.srcElement;
      event.timeStamp = clock.now();
      event.type = nativeEvent.type;
      event.altKey = nativeEvent.altKey;
      event.metaKey = nativeEvent.metaKey;
      event.shiftKey = nativeEvent.shiftKey;
      event.ctrlKey = nativeEvent.ctrlKey;
      event.button = nativeEvent.button;
      event.buttons = nativeEvent.buttons;
      event.client.x = nativeEvent.clientX;
      event.client.y = nativeEvent.clientY;
      event.movement.x = nativeEvent.movementX;
      event.movement.y = nativeEvent.movementY;
      event.page.x = nativeEvent.pageX;
      event.page.y = nativeEvent.pageY;
      event.screen.x = nativeEvent.screenX;
      event.screen.y = nativeEvent.screenY;
      event.relatedTarget = null;
    }
  }, {
    key: "setCursor",
    value: function setCursor(cursor) {
      this.context.contextService.applyCursorStyle(cursor || this.context.config.cursor || 'default');
    }
  }, {
    key: "normalizeToPointerEvent",
    value: function normalizeToPointerEvent(event, canvas) {
      var normalizedEvents = [];
      if (canvas.isTouchEvent(event)) {
        for (var i = 0; i < event.changedTouches.length; i++) {
          var touch = event.changedTouches[i];

          // use changedTouches instead of touches since touchend has no touches
          // @see https://stackoverflow.com/a/10079076
          if (isUndefined(touch.button)) touch.button = 0;
          if (isUndefined(touch.buttons)) touch.buttons = 1;
          if (isUndefined(touch.isPrimary)) {
            touch.isPrimary = event.touches.length === 1 && event.type === 'touchstart';
          }
          if (isUndefined(touch.width)) touch.width = touch.radiusX || 1;
          if (isUndefined(touch.height)) touch.height = touch.radiusY || 1;
          if (isUndefined(touch.tiltX)) touch.tiltX = 0;
          if (isUndefined(touch.tiltY)) touch.tiltY = 0;
          if (isUndefined(touch.pointerType)) touch.pointerType = 'touch';
          // @see https://developer.mozilla.org/zh-CN/docs/Web/API/Touch/identifier
          if (isUndefined(touch.pointerId)) touch.pointerId = touch.identifier || 0;
          if (isUndefined(touch.pressure)) touch.pressure = touch.force || 0.5;
          if (isUndefined(touch.twist)) touch.twist = 0;
          if (isUndefined(touch.tangentialPressure)) touch.tangentialPressure = 0;
          touch.isNormalized = true;
          touch.type = event.type;
          normalizedEvents.push(touch);
        }
      } else if (canvas.isMouseEvent(event)) {
        var tempEvent = event;
        if (isUndefined(tempEvent.isPrimary)) tempEvent.isPrimary = true;
        if (isUndefined(tempEvent.width)) tempEvent.width = 1;
        if (isUndefined(tempEvent.height)) tempEvent.height = 1;
        if (isUndefined(tempEvent.tiltX)) tempEvent.tiltX = 0;
        if (isUndefined(tempEvent.tiltY)) tempEvent.tiltY = 0;
        if (isUndefined(tempEvent.pointerType)) tempEvent.pointerType = 'mouse';
        if (isUndefined(tempEvent.pointerId)) tempEvent.pointerId = MOUSE_POINTER_ID;
        if (isUndefined(tempEvent.pressure)) tempEvent.pressure = 0.5;
        if (isUndefined(tempEvent.twist)) tempEvent.twist = 0;
        if (isUndefined(tempEvent.tangentialPressure)) tempEvent.tangentialPressure = 0;
        tempEvent.isNormalized = true;
        normalizedEvents.push(tempEvent);
      } else {
        normalizedEvents.push(event);
      }
      return normalizedEvents;
    }
  }]);
}();
EventPlugin.tag = 'Event';

// group is not a 2d shape
var shape2D = [Shape.CIRCLE, Shape.ELLIPSE, Shape.IMAGE, Shape.RECT, Shape.LINE, Shape.POLYLINE, Shape.POLYGON, Shape.TEXT, Shape.PATH, Shape.HTML];
var FrustumCullingStrategy = /*#__PURE__*/function () {
  function FrustumCullingStrategy() {
    _classCallCheck(this, FrustumCullingStrategy);
  }
  return _createClass(FrustumCullingStrategy, [{
    key: "isVisible",
    value: function isVisible(camera, object) {
      var _object$parentNode;
      // return true;

      var cullable = object.cullable;
      if (!cullable.enable) {
        return true;
      }
      var renderBounds = object.getRenderBounds();
      if (AABB.isEmpty(renderBounds)) {
        return false;
      }

      // get VP matrix from camera
      var frustum = camera.getFrustum();
      var parentVisibilityPlaneMask = (_object$parentNode = object.parentNode) === null || _object$parentNode === void 0 || (_object$parentNode = _object$parentNode.cullable) === null || _object$parentNode === void 0 ? void 0 : _object$parentNode.visibilityPlaneMask;
      cullable.visibilityPlaneMask = this.computeVisibilityWithPlaneMask(object, renderBounds, parentVisibilityPlaneMask || Mask.INDETERMINATE, frustum.planes);
      cullable.visible = cullable.visibilityPlaneMask !== Mask.OUTSIDE;
      return cullable.visible;
    }

    /**
     *
     * @see「Optimized View Frustum Culling Algorithms for Bounding Boxes」
     * @see https://github.com/antvis/GWebGPUEngine/issues/3
     *
     * * 基础相交测试 the basic intersection test
     * * 标记 masking @see https://cesium.com/blog/2015/08/04/fast-hierarchical-culling/
     * * TODO: 平面一致性测试 the plane-coherency test
     * * TODO: 支持 mesh 指定自身的剔除策略，参考 Babylon.js @see https://doc.babylonjs.com/how_to/optimizing_your_scene#changing-mesh-culling-strategy
     *
     * @param aabb aabb
     * @param parentPlaneMask mask of parent
     * @param planes planes of frustum
     */
  }, {
    key: "computeVisibilityWithPlaneMask",
    value: function computeVisibilityWithPlaneMask(object, aabb, parentPlaneMask, planes) {
      if (parentPlaneMask === Mask.OUTSIDE || parentPlaneMask === Mask.INSIDE) {
        // 父节点完全位于视锥内或者外部，直接返回
        return parentPlaneMask;
      }

      // Start with MASK_INSIDE (all zeros) so that after the loop, the return value can be compared with MASK_INSIDE.
      // (Because if there are fewer than 31 planes, the upper bits wont be changed.)
      var mask = Mask.INSIDE;
      var isShape2D = shape2D.indexOf(object.nodeName) > -1;

      // Use viewport culling for 2D shapes
      // @see https://github.com/antvis/g/issues/914
      for (var k = 0, len = planes.length; k < len; ++k) {
        // For k greater than 31 (since 31 is the maximum number of INSIDE/INTERSECTING bits we can store), skip the optimization.
        var flag = 1 << k;
        if ((parentPlaneMask & flag) === 0) {
          // 父节点处于当前面内部，可以跳过
          continue;
        }

        // skip near & far planes when testing 2D shapes
        if (isShape2D && (k === 4 || k === 5)) {
          continue;
        }

        // p-vertex n-vertex <-|plane p-vertex n-vertex
        // 使用 p-vertex 和 n-vertex 加速，避免进行平面和 aabb 全部顶点的相交检测
        var _planes$k = planes[k],
          normal = _planes$k.normal,
          distance = _planes$k.distance;
        if (vec3.dot(normal, aabb.getPositiveFarPoint(planes[k])) + distance < 0) {
          return Mask.OUTSIDE;
        }
        if (vec3.dot(normal, aabb.getNegativeFarPoint(planes[k])) + distance < 0) {
          // 和当前面相交，对应位置为1，继续检测下一个面
          mask |= flag;
        }
      }
      return mask;
    }
  }]);
}();

/**
 * PrepareRendererPlugin handles rendering preparation tasks
 * Simplified implementation focused on core rendering needs
 */
var PrepareRendererPlugin = /*#__PURE__*/function () {
  function PrepareRendererPlugin() {
    _classCallCheck(this, PrepareRendererPlugin);
    this.mutationRecords = [];
    this.isFirstTimeRendering = true;
    this.isFirstTimeRenderingFinished = false;
  }
  return _createClass(PrepareRendererPlugin, [{
    key: "apply",
    value: function apply(context) {
      var _this = this,
        _runtime$globalThis$r;
      var renderingService = context.renderingService,
        renderingContext = context.renderingContext;
      var canvas = renderingContext.root.ownerDocument.defaultView;
      var handleAttributeChanged = function handleAttributeChanged(e) {
        renderingService.dirty();
      };
      var handleBoundsChanged = function handleBoundsChanged(e) {
        var _this$mutationRecords;
        var records = e.detail;
        // Store mutation records for potential future processing
        (_this$mutationRecords = _this.mutationRecords).push.apply(_this$mutationRecords, _toConsumableArray(records));
        renderingService.dirty();
      };
      var handleMounted = function handleMounted(e) {
        var object = e.target;
        if (runtime.enableSizeAttenuation) {
          runtime.styleValueRegistry.updateSizeAttenuation(object, canvas.getCamera().getZoom());
        }
      };
      var handleUnmounted = function handleUnmounted(e) {
        var object = e.target;

        // No spatial index cleanup needed
        runtime.sceneGraphService.dirtyToRoot(object);
        renderingService.dirty();
      };
      renderingService.hooks.init.tap(PrepareRendererPlugin.tag, function () {
        canvas.addEventListener(ElementEvent.MOUNTED, handleMounted);
        canvas.addEventListener(ElementEvent.UNMOUNTED, handleUnmounted);
        canvas.addEventListener(ElementEvent.ATTR_MODIFIED, handleAttributeChanged);
        canvas.addEventListener(ElementEvent.BOUNDS_CHANGED, handleBoundsChanged);
      });
      renderingService.hooks.destroy.tap(PrepareRendererPlugin.tag, function () {
        canvas.removeEventListener(ElementEvent.MOUNTED, handleMounted);
        canvas.removeEventListener(ElementEvent.UNMOUNTED, handleUnmounted);
        canvas.removeEventListener(ElementEvent.ATTR_MODIFIED, handleAttributeChanged);
        canvas.removeEventListener(ElementEvent.BOUNDS_CHANGED, handleBoundsChanged);
        _this.mutationRecords = [];
      });
      var ric = (_runtime$globalThis$r = runtime.globalThis.requestIdleCallback) !== null && _runtime$globalThis$r !== void 0 ? _runtime$globalThis$r : raf.bind(runtime.globalThis);
      renderingService.hooks.endFrame.tap(PrepareRendererPlugin.tag, function () {
        if (_this.isFirstTimeRendering) {
          _this.isFirstTimeRendering = false;
          ric(function () {
            _this.isFirstTimeRenderingFinished = true;
          });
        }

        // Clear mutation records after each frame
        _this.mutationRecords = [];
      });
    }
  }]);
}();
PrepareRendererPlugin.tag = 'Prepare';

function isCanvas(value) {
  return !!value.document;
}
var CanvasEvent = /*#__PURE__*/function (CanvasEvent) {
  CanvasEvent["READY"] = "ready";
  CanvasEvent["BEFORE_RENDER"] = "beforerender";
  CanvasEvent["RERENDER"] = "rerender";
  CanvasEvent["AFTER_RENDER"] = "afterrender";
  CanvasEvent["BEFORE_DESTROY"] = "beforedestroy";
  CanvasEvent["AFTER_DESTROY"] = "afterdestroy";
  CanvasEvent["RESIZE"] = "resize";
  CanvasEvent["DIRTY_RECTANGLE"] = "dirtyrectangle";
  CanvasEvent["RENDERER_CHANGED"] = "rendererchanged";
  return CanvasEvent;
}({});
var DEFAULT_CAMERA_Z = 500;
var DEFAULT_CAMERA_NEAR = 0.1;
var DEFAULT_CAMERA_FAR = 1000;

/**
 * reuse custom event preventing from re-create them in every frame
 */
var mountedEvent = new CustomEvent(ElementEvent.MOUNTED);
var unmountedEvent = new CustomEvent(ElementEvent.UNMOUNTED);
var beforeRenderEvent = new CustomEvent(CanvasEvent.BEFORE_RENDER);
var rerenderEvent = new CustomEvent(CanvasEvent.RERENDER);
var afterRenderEvent = new CustomEvent(CanvasEvent.AFTER_RENDER);

/**
 * can be treated like Window in DOM
 * provide some extra methods like `window`, such as:
 * * `window.requestAnimationFrame`
 * * `window.devicePixelRatio`
 *
 * prototype chains: Canvas(Window) -> EventTarget
 *
 * @docs https://g.antv.antgroup.com/api/canvas/intro
 */
var Canvas = /*#__PURE__*/function (_EventTarget) {
  function Canvas(config) {
    var _this;
    _classCallCheck(this, Canvas);
    _this = _callSuper(this, Canvas);
    // #region environment
    /**
     * window.document
     */
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element
     */
    _this.Element = DisplayObject;
    _this.inited = false;
    _this.context = {};
    var container = config.container,
      canvas = config.canvas,
      renderer = config.renderer,
      width = config.width,
      height = config.height,
      background = config.background,
      cursor = config.cursor,
      supportsMutipleCanvasesInOneContainer = config.supportsMutipleCanvasesInOneContainer,
      _config$cleanUpOnDest = config.cleanUpOnDestroy,
      cleanUpOnDestroy = _config$cleanUpOnDest === void 0 ? true : _config$cleanUpOnDest,
      offscreenCanvas = config.offscreenCanvas,
      devicePixelRatio = config.devicePixelRatio,
      requestAnimationFrame = config.requestAnimationFrame,
      cancelAnimationFrame = config.cancelAnimationFrame,
      createImage = config.createImage,
      supportsTouchEvents = config.supportsTouchEvents,
      supportsPointerEvents = config.supportsPointerEvents,
      isTouchEvent = config.isTouchEvent,
      isMouseEvent = config.isMouseEvent,
      dblClickSpeed = config.dblClickSpeed;
    var canvasWidth = width;
    var canvasHeight = height;
    var dpr = devicePixelRatio || isBrowser && window.devicePixelRatio || 1;
    dpr = dpr >= 1 ? Math.ceil(dpr) : 1;

    // use user-defined <canvas> or OffscreenCanvas
    if (canvas) {
      // infer width & height with dpr
      canvasWidth = width || getWidth(canvas) || canvas.width / dpr;
      canvasHeight = height || getHeight(canvas) || canvas.height / dpr;
    }

    /**
     * implements `Window` interface
     */
    _this.customElements = new CustomElementRegistry();
    _this.devicePixelRatio = dpr;
    _this.requestAnimationFrame = requestAnimationFrame !== null && requestAnimationFrame !== void 0 ? requestAnimationFrame : raf.bind(runtime.globalThis);
    _this.cancelAnimationFrame = cancelAnimationFrame !== null && cancelAnimationFrame !== void 0 ? cancelAnimationFrame : caf.bind(runtime.globalThis);
    _this.createImage = createImage !== null && createImage !== void 0 ? createImage : function () {
      return new window.Image();
    };
    // the following feature-detect from hammer.js
    // @see https://github.com/hammerjs/hammer.js/blob/master/src/inputjs/input-consts.js#L5
    _this.supportsTouchEvents = supportsTouchEvents !== null && supportsTouchEvents !== void 0 ? supportsTouchEvents : 'ontouchstart' in runtime.globalThis;
    _this.supportsPointerEvents = supportsPointerEvents !== null && supportsPointerEvents !== void 0 ? supportsPointerEvents : !!runtime.globalThis.PointerEvent;
    _this.isTouchEvent = isTouchEvent !== null && isTouchEvent !== void 0 ? isTouchEvent : function (event) {
      return _this.supportsTouchEvents && event instanceof runtime.globalThis.TouchEvent;
    };
    _this.isMouseEvent = isMouseEvent !== null && isMouseEvent !== void 0 ? isMouseEvent : function (event) {
      return !runtime.globalThis.MouseEvent || event instanceof runtime.globalThis.MouseEvent && (!_this.supportsPointerEvents || !(event instanceof runtime.globalThis.PointerEvent));
    };

    // override it in runtime
    if (offscreenCanvas) {
      runtime.offscreenCanvas = offscreenCanvas;
    }

    // create document
    _this.document = new Document();
    _this.document.defaultView = _this;
    if (!supportsMutipleCanvasesInOneContainer) {
      cleanExistedCanvas(container, _this, cleanUpOnDestroy);
    }
    _this.initRenderingContext(_objectSpread(_objectSpread({}, config), {}, {
      width: canvasWidth,
      height: canvasHeight,
      background: background !== null && background !== void 0 ? background : 'transparent',
      cursor: cursor !== null && cursor !== void 0 ? cursor : 'default',
      cleanUpOnDestroy: cleanUpOnDestroy,
      devicePixelRatio: dpr,
      requestAnimationFrame: _this.requestAnimationFrame,
      cancelAnimationFrame: _this.cancelAnimationFrame,
      createImage: _this.createImage,
      supportsTouchEvents: _this.supportsTouchEvents,
      supportsPointerEvents: _this.supportsPointerEvents,
      isTouchEvent: _this.isTouchEvent,
      isMouseEvent: _this.isMouseEvent,
      dblClickSpeed: dblClickSpeed !== null && dblClickSpeed !== void 0 ? dblClickSpeed : 200
    }));
    _this.initDefaultCamera(canvasWidth, canvasHeight, renderer.clipSpaceNearZ);
    _this.initRenderer(renderer, true);
    return _this;
  }
  _inherits(Canvas, _EventTarget);
  return _createClass(Canvas, [{
    key: "initRenderingContext",
    value: function initRenderingContext(mergedConfig) {
      this.context.config = mergedConfig;

      // bind rendering context, shared by all renderers
      this.context.renderingContext = {
        /**
         * the root node in scene graph
         */
        root: this.document.documentElement,
        unculledEntities: [],
        renderListCurrentFrame: [],
        renderReasons: new Set(),
        force: false,
        dirty: false
      };
    }
  }, {
    key: "initDefaultCamera",
    value: function initDefaultCamera(width, height, clipSpaceNearZ) {
      var _this2 = this;
      // set a default ortho camera
      var camera = new runtime.CameraContribution();
      camera.clipSpaceNearZ = clipSpaceNearZ;
      camera.setType(CameraType.EXPLORING, CameraTrackingMode.DEFAULT).setPosition(width / 2, height / 2, DEFAULT_CAMERA_Z).setFocalPoint(width / 2, height / 2, 0).setOrthographic(width / -2, width / 2, height / 2, height / -2, DEFAULT_CAMERA_NEAR, DEFAULT_CAMERA_FAR);

      // keep ref since it will use raf in camera animation
      camera.canvas = this;

      // redraw when camera changed
      camera.eventEmitter.on(CameraEvent.UPDATED, function () {
        _this2.context.renderingContext.renderReasons.add(RenderReason.CAMERA_CHANGED);
        if (runtime.enableSizeAttenuation && _this2.getConfig().renderer.getConfig().enableSizeAttenuation) {
          _this2.updateSizeAttenuation();
        }
      });

      // bind camera
      this.context.camera = camera;
    }
  }, {
    key: "updateSizeAttenuation",
    value: function updateSizeAttenuation() {
      var zoom = this.getCamera().getZoom();
      this.document.documentElement.forEach(function (node) {
        runtime.styleValueRegistry.updateSizeAttenuation(node, zoom);
      });
    }
  }, {
    key: "getConfig",
    value: function getConfig() {
      return this.context.config;
    }

    /**
     * get the root displayObject in scenegraph
     * @alias this.document.documentElement
     */
  }, {
    key: "getRoot",
    value: function getRoot() {
      return this.document.documentElement;
    }

    /**
     * get the camera of canvas
     */
  }, {
    key: "getCamera",
    value: function getCamera() {
      return this.context.camera;
    }
  }, {
    key: "getContextService",
    value: function getContextService() {
      return this.context.contextService;
    }
  }, {
    key: "getEventService",
    value: function getEventService() {
      return this.context.eventService;
    }
  }, {
    key: "getRenderingService",
    value: function getRenderingService() {
      return this.context.renderingService;
    }
  }, {
    key: "getRenderingContext",
    value: function getRenderingContext() {
      return this.context.renderingContext;
    }
  }, {
    key: "getStats",
    value: function getStats() {
      return this.getRenderingService().getStats();
    }

    // /**
    //  * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle
    //  */
    // getComputedStyle(node: DisplayObject) {
    //   return node.computedStyle;
    // }
  }, {
    key: "ready",
    get: function get() {
      var _this3 = this;
      if (!this.readyPromise) {
        this.readyPromise = new Promise(function (resolve) {
          _this3.resolveReadyPromise = function () {
            resolve(_this3);
          };
        });
        if (this.inited) {
          this.resolveReadyPromise();
        }
      }
      return this.readyPromise;
    }

    /**
     * @param cleanUp - whether to clean up all the internal services of Canvas
     * @param skipTriggerEvent - whether to skip trigger destroy event
     */
  }, {
    key: "destroy",
    value: function destroy() {
      var _this$getConfig$futur;
      var cleanUp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var skipTriggerEvent = arguments.length > 1 ? arguments[1] : undefined;
      memoize.clearCache();
      var enableCancelEventPropagation = ((_this$getConfig$futur = this.getConfig().future) === null || _this$getConfig$futur === void 0 ? void 0 : _this$getConfig$futur.experimentalCancelEventPropagation) === true;
      if (!skipTriggerEvent) {
        this.dispatchEvent(new CustomEvent(CanvasEvent.BEFORE_DESTROY), enableCancelEventPropagation, enableCancelEventPropagation);
      }
      if (this.frameId) {
        this.cancelAnimationFrame(this.frameId);
      }

      // unmount all children
      var root = this.getRoot();
      if (cleanUp) {
        this.unmountChildren(root);
        // destroy Document
        this.document.destroy();
        this.getEventService().destroy();
      }

      // destroy services
      this.getRenderingService().destroy();
      this.getContextService().destroy();

      // clear root after render service destroyed

      if (!skipTriggerEvent) {
        this.dispatchEvent(new CustomEvent(CanvasEvent.AFTER_DESTROY), enableCancelEventPropagation, enableCancelEventPropagation);
      }
      var clearEventRetain = function clearEventRetain(event) {
        event.currentTarget = null;
        event.manager = null;
        event.target = null;
        event.relatedNode = null;
      };
      clearEventRetain(mountedEvent);
      clearEventRetain(unmountedEvent);
      clearEventRetain(beforeRenderEvent);
      clearEventRetain(rerenderEvent);
      clearEventRetain(afterRenderEvent);
      clearEventRetain(attrModifiedEvent);
      clearEventRetain(insertedEvent);
      clearEventRetain(removedEvent);
      clearEventRetain(destroyEvent);
      runtime.textService.clearCache();
    }

    /**
     * compatible with G 3.0
     * @deprecated
     * @alias resize
     */
  }, {
    key: "changeSize",
    value: function changeSize(width, height) {
      this.resize(width, height);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      var _canvasConfig$future;
      // update canvas' config
      var canvasConfig = this.context.config;
      canvasConfig.width = width;
      canvasConfig.height = height;

      // resize context
      this.getContextService().resize(width, height);

      // resize camera
      var camera = this.context.camera;
      var projectionMode = camera.getProjectionMode();
      camera.setPosition(width / 2, height / 2, DEFAULT_CAMERA_Z).setFocalPoint(width / 2, height / 2, 0);
      if (projectionMode === CameraProjectionMode.ORTHOGRAPHIC) {
        camera.setOrthographic(width / -2, width / 2, height / 2, height / -2, camera.getNear(), camera.getFar());
      } else {
        camera.setAspect(width / height);
      }
      var enableCancelEventPropagation = ((_canvasConfig$future = canvasConfig.future) === null || _canvasConfig$future === void 0 ? void 0 : _canvasConfig$future.experimentalCancelEventPropagation) === true;
      this.dispatchEvent(new CustomEvent(CanvasEvent.RESIZE, {
        width: width,
        height: height
      }), enableCancelEventPropagation, enableCancelEventPropagation);
    }

    // proxy to document.documentElement
  }, {
    key: "appendChild",
    value: function appendChild(child, index) {
      return this.document.documentElement.appendChild(child, index);
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(newChild, refChild) {
      return this.document.documentElement.insertBefore(newChild, refChild);
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      return this.document.documentElement.removeChild(child);
    }

    /**
     * Remove all children which can be appended to its original parent later again.
     */
  }, {
    key: "removeChildren",
    value: function removeChildren() {
      this.document.documentElement.removeChildren();
    }

    /**
     * Recursively destroy all children which can not be appended to its original parent later again.
     * But the canvas remains running which means display objects can be appended later.
     */
  }, {
    key: "destroyChildren",
    value: function destroyChildren() {
      this.document.documentElement.destroyChildren();
    }
  }, {
    key: "render",
    value: function render(frame) {
      var _this$getConfig$futur2,
        _this4 = this;
      if (frame) {
        beforeRenderEvent.detail = frame;
        afterRenderEvent.detail = frame;
      }
      var enableCancelEventPropagation = ((_this$getConfig$futur2 = this.getConfig().future) === null || _this$getConfig$futur2 === void 0 ? void 0 : _this$getConfig$futur2.experimentalCancelEventPropagation) === true;
      this.dispatchEvent(beforeRenderEvent, enableCancelEventPropagation, enableCancelEventPropagation);
      var renderingService = this.getRenderingService();
      renderingService.render(this, frame, function () {
        // trigger actual rerender event
        // @see https://github.com/antvis/G/issues/1268
        _this4.dispatchEvent(rerenderEvent, enableCancelEventPropagation, enableCancelEventPropagation);
      });
      this.dispatchEvent(afterRenderEvent, enableCancelEventPropagation, enableCancelEventPropagation);
    }
  }, {
    key: "run",
    value: function run() {
      var _this5 = this;
      var _tick = function tick(time, frame) {
        _this5.render(frame);
        _this5.frameId = _this5.requestAnimationFrame(_tick);
      };
      _tick();
    }
  }, {
    key: "initRenderer",
    value: function initRenderer(renderer) {
      var _this6 = this;
      var firstContentfullPaint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!renderer) {
        throw new Error('Renderer is required.');
      }

      // reset
      this.inited = false;
      this.readyPromise = undefined;

      // reset rendering plugins
      this.context.renderingPlugins = [];
      this.context.renderingPlugins.push(new EventPlugin(), new PrepareRendererPlugin(),
      // new DirtyCheckPlugin(),
      new CullingPlugin([new FrustumCullingStrategy()]));

      //
      this.loadRendererContainerModule(renderer);

      // init context service
      this.context.contextService = new this.context.ContextService(_objectSpread(_objectSpread({}, runtime), this.context));

      // init rendering service
      this.context.renderingService = new RenderingService(runtime, this.context);

      // init event service
      this.context.eventService = new EventService(runtime, this.context);
      this.context.eventService.init();
      if (this.context.contextService.init) {
        this.context.contextService.init();
        this.initRenderingService(renderer, firstContentfullPaint, true);
      } else {
        this.context.contextService.initAsync().then(function () {
          _this6.initRenderingService(renderer, firstContentfullPaint);
        })["catch"](function (err) {
          console.error(err);
        });
      }
    }
  }, {
    key: "initRenderingService",
    value: function initRenderingService(renderer) {
      var _this7 = this;
      var firstContentfullPaint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var async = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.context.renderingService.init(function () {
        var _this7$getConfig$futu;
        _this7.inited = true;
        var enableCancelEventPropagation = ((_this7$getConfig$futu = _this7.getConfig().future) === null || _this7$getConfig$futu === void 0 ? void 0 : _this7$getConfig$futu.experimentalCancelEventPropagation) === true;
        if (firstContentfullPaint) {
          if (async) {
            _this7.requestAnimationFrame(function () {
              _this7.dispatchEvent(new CustomEvent(CanvasEvent.READY), enableCancelEventPropagation, enableCancelEventPropagation);
            });
          } else {
            _this7.dispatchEvent(new CustomEvent(CanvasEvent.READY), enableCancelEventPropagation, enableCancelEventPropagation);
          }
        } else {
          _this7.dispatchEvent(new CustomEvent(CanvasEvent.RENDERER_CHANGED), enableCancelEventPropagation, enableCancelEventPropagation);
        }
        if (_this7.readyPromise) {
          _this7.resolveReadyPromise();
        }
        if (!firstContentfullPaint) {
          _this7.getRoot().forEach(function (node) {
            var _dirty, _ref;
            (_dirty = (_ref = node).dirty) === null || _dirty === void 0 || _dirty.call(_ref, true, true);
          });
        }

        // keep current scenegraph unchanged, just trigger mounted event
        _this7.mountChildren(_this7.getRoot());
        if (renderer.getConfig().enableAutoRendering) {
          _this7.run();
        }
      });
    }
  }, {
    key: "loadRendererContainerModule",
    value: function loadRendererContainerModule(renderer) {
      var _this8 = this;
      // load other container modules provided by g-canvas/g-svg/g-webgl
      var plugins = renderer.getPlugins();
      plugins.forEach(function (plugin) {
        plugin.context = _this8.context;
        plugin.init(runtime);
      });
    }
  }, {
    key: "setRenderer",
    value: function setRenderer(renderer) {
      // update canvas' config
      var canvasConfig = this.getConfig();
      if (canvasConfig.renderer === renderer) {
        return;
      }
      var oldRenderer = canvasConfig.renderer;
      canvasConfig.renderer = renderer;

      // keep all children undestroyed
      this.destroy(false, true);

      // destroy all plugins, reverse will mutate origin array
      _toConsumableArray((oldRenderer === null || oldRenderer === void 0 ? void 0 : oldRenderer.getPlugins()) || []).reverse().forEach(function (plugin) {
        plugin.destroy(runtime);
      });
      this.initRenderer(renderer);
    }
  }, {
    key: "setCursor",
    value: function setCursor(cursor) {
      var canvasConfig = this.getConfig();
      canvasConfig.cursor = cursor;
      this.getContextService().applyCursorStyle(cursor);
    }
  }, {
    key: "unmountChildren",
    value: function unmountChildren(parent) {
      var _this9 = this;
      // unmountChildren recursively
      parent.childNodes.forEach(function (child) {
        _this9.unmountChildren(child);
      });
      if (this.inited) {
        if (parent.isMutationObserved) {
          parent.dispatchEvent(unmountedEvent);
        } else {
          var _this$getConfig$futur3;
          var enableCancelEventPropagation = ((_this$getConfig$futur3 = this.getConfig().future) === null || _this$getConfig$futur3 === void 0 ? void 0 : _this$getConfig$futur3.experimentalCancelEventPropagation) === true;
          unmountedEvent.target = parent;
          this.dispatchEvent(unmountedEvent, true, enableCancelEventPropagation);
        }

        // skip document.documentElement
        if (parent !== this.document.documentElement) {
          parent.ownerDocument = null;
        }
        parent.isConnected = false;
      }

      // trigger after unmounted
      if (parent.isCustomElement) {
        if (parent.disconnectedCallback) {
          parent.disconnectedCallback();
        }
      }
    }
  }, {
    key: "mountChildren",
    value: function mountChildren(child) {
      var _this0 = this;
      var skipTriggerEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isInFragment(child);
      if (this.inited) {
        if (!child.isConnected) {
          child.ownerDocument = this.document;
          child.isConnected = true;
          if (!skipTriggerEvent) {
            if (child.isMutationObserved) {
              child.dispatchEvent(mountedEvent);
            } else {
              var _this$getConfig$futur4;
              var enableCancelEventPropagation = ((_this$getConfig$futur4 = this.getConfig().future) === null || _this$getConfig$futur4 === void 0 ? void 0 : _this$getConfig$futur4.experimentalCancelEventPropagation) === true;
              mountedEvent.target = child;
              this.dispatchEvent(mountedEvent, true, enableCancelEventPropagation);
            }
          }
        }
      } else {
        console.warn("[g]: You are trying to call `canvas.appendChild` before canvas' initialization finished. You can either await `canvas.ready` or listen to `CanvasEvent.READY` manually.", 'appended child: ', child.nodeName);
      }

      // recursively mount children
      child.childNodes.forEach(function (c) {
        _this0.mountChildren(c, skipTriggerEvent);
      });

      // trigger after mounted
      if (child.isCustomElement) {
        if (child.connectedCallback) {
          child.connectedCallback();
        }
      }
    }
  }, {
    key: "mountFragment",
    value: function mountFragment(child) {
      this.mountChildren(child, false);
    }
  }, {
    key: "client2Viewport",
    value: function client2Viewport(client) {
      return this.getEventService().client2Viewport(client);
    }
  }, {
    key: "viewport2Client",
    value: function viewport2Client(canvas) {
      return this.getEventService().viewport2Client(canvas);
    }
  }, {
    key: "viewport2Canvas",
    value: function viewport2Canvas(viewport) {
      return this.getEventService().viewport2Canvas(viewport);
    }
  }, {
    key: "canvas2Viewport",
    value: function canvas2Viewport(canvas) {
      return this.getEventService().canvas2Viewport(canvas);
    }

    /**
     * @deprecated
     * @alias client2Viewport
     */
  }, {
    key: "getPointByClient",
    value: function getPointByClient(clientX, clientY) {
      return this.client2Viewport({
        x: clientX,
        y: clientY
      });
    }

    /**
     * @deprecated
     * @alias viewport2Client
     */
  }, {
    key: "getClientByPoint",
    value: function getClientByPoint(x, y) {
      return this.viewport2Client({
        x: x,
        y: y
      });
    }
  }]);
}(EventTarget);

var uidCounter = 0;
var registrationsTable = new WeakMap();
var MutationRecord = /*#__PURE__*/function () {
  function MutationRecord(type, target) {
    _classCallCheck(this, MutationRecord);
    this.addedNodes = [];
    this.attributeName = null;
    this.attributeNamespace = null;
    this.nextSibling = null;
    this.oldValue = null;
    this.previousSibling = null;
    this.removedNodes = [];
    this.type = type;
    this.target = target;
  }
  return _createClass(MutationRecord, null, [{
    key: "copy",
    value: function copy(original) {
      var record = new MutationRecord(original.type, original.target);
      record.addedNodes = original.addedNodes.slice();
      record.removedNodes = original.removedNodes.slice();
      record.previousSibling = original.previousSibling;
      record.nextSibling = original.nextSibling;
      record.attributeName = original.attributeName;
      record.attributeNamespace = original.attributeNamespace;
      record.oldValue = original.oldValue;
      return record;
    }
  }]);
}();
var Registration = /*#__PURE__*/function () {
  function Registration(observer, target, options) {
    _classCallCheck(this, Registration);
    this.transientObservedNodes = [];
    this.observer = observer;
    this.target = target;
    this.options = options;
  }
  return _createClass(Registration, [{
    key: "enqueue",
    value: function enqueue(record) {
      var records = this.observer.records;
      var length = records.length;

      // There are cases where we replace the last record with the new record.
      // For example if the record represents the same mutation we need to use
      // the one with the oldValue. If we get same record (this can happen as we
      // walk up the tree) we ignore the new record.
      if (records.length > 0) {
        var lastRecord = records[length - 1];
        var recordToReplaceLast = selectRecord(lastRecord, record);
        if (recordToReplaceLast) {
          records[length - 1] = recordToReplaceLast;
          return;
        }
      } else {
        scheduleCallback(this.observer);
      }
      records[length] = record;
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      this.addListeners_(this.target);
    }
  }, {
    key: "addListeners_",
    value: function addListeners_(node) {
      var options = this.options;
      if (options.attributes) node.addEventListener(ElementEvent.ATTR_MODIFIED, this, true);

      // if (options.characterData) node.addEventListener('DOMCharacterDataModified', this, true);

      if (options.childList) node.addEventListener(ElementEvent.INSERTED, this, true);
      if (options.childList || options.subtree) node.addEventListener(ElementEvent.REMOVED, this, true);
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      this.removeListeners_(this.target);
    }
  }, {
    key: "removeListeners_",
    value: function removeListeners_(node) {
      var options = this.options;
      if (options.attributes) node.removeEventListener(ElementEvent.ATTR_MODIFIED, this, true);

      // if (options.characterData) node.removeEventListener('DOMCharacterDataModified', this, true);

      if (options.childList) node.removeEventListener(ElementEvent.INSERTED, this, true);
      if (options.childList || options.subtree) node.removeEventListener(ElementEvent.REMOVED, this, true);
    }

    /**
     * Adds a transient observer on node. The transient observer gets removed
     * next time we deliver the change records.
     */
    // addTransientObserver(node: Node) {
    //   // Don't add transient observers on the target itself. We already have all
    //   // the required listeners set up on the target.
    //   if (node === this.target) return;

    //   this.addListeners_(node);
    //   this.transientObservedNodes.push(node);
    //   let registrations = registrationsTable.get(node);
    //   if (!registrations) registrationsTable.set(node, (registrations = []));

    //   // We know that registrations does not contain this because we already
    //   // checked if node === this.target.
    //   registrations.push(this);
    // }
  }, {
    key: "removeTransientObservers",
    value: function removeTransientObservers() {
      var transientObservedNodes = this.transientObservedNodes;
      this.transientObservedNodes = [];
      transientObservedNodes.forEach(function (node) {
        // Transient observers are never added to the target.
        this.removeListeners_(node);
        var registrations = registrationsTable.get(node);
        for (var i = 0; i < registrations.length; i++) {
          if (registrations[i] === this) {
            registrations.splice(i, 1);
            // Each node can only have one registered observer associated with
            // this observer.
            break;
          }
        }
      }, this);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(e) {
      // Stop propagation since we are managing the propagation manually.
      // This means that other mutation events on the page will not work
      // correctly but that is by design.
      e.stopImmediatePropagation();
      var record;
      var target;
      switch (e.type) {
        case ElementEvent.ATTR_MODIFIED:
          // http://dom.spec.whatwg.org/#concept-mo-queue-attributes

          var name = e.attrName;
          // @ts-ignore
          var namespace = e.relatedNode.namespaceURI;
          target = e.target;

          // 1.
          record = getRecord('attributes', target);
          record.attributeName = name;
          record.attributeNamespace = namespace;

          // 2.
          var oldValue = e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;
          forEachAncestorAndObserverEnqueueRecord(target, function (options) {
            // 3.1, 4.2
            if (!options.attributes) return;

            // 3.2, 4.3
            if (options.attributeFilter && options.attributeFilter.length && options.attributeFilter.indexOf(name) === -1 && options.attributeFilter.indexOf(namespace) === -1) {
              return;
            }
            // 3.3, 4.4
            if (options.attributeOldValue) return getRecordWithOldValue(oldValue);

            // 3.4, 4.5
            return record;
          });
          break;

        // case 'DOMCharacterDataModified':
        //   // http://dom.spec.whatwg.org/#concept-mo-queue-characterdata
        //   var target = e.target;

        //   // 1.
        //   var record = getRecord('characterData', target);

        //   // 2.
        //   var oldValue = e.prevValue;

        //   forEachAncestorAndObserverEnqueueRecord(target, function(options) {
        //     // 3.1, 4.2
        //     if (!options.characterData)
        //       return;

        //     // 3.2, 4.3
        //     if (options.characterDataOldValue)
        //       return getRecordWithOldValue(oldValue);

        //     // 3.3, 4.4
        //     return record;
        //   });

        //   break;

        case ElementEvent.REMOVED:
        // this.addTransientObserver(e.target as Node);
        // Fall through.
        case ElementEvent.INSERTED:
          // http://dom.spec.whatwg.org/#concept-mo-queue-childlist
          target = e.relatedNode;
          var changedNode = e.target;
          var addedNodes;
          var removedNodes;
          if (e.type === ElementEvent.INSERTED) {
            addedNodes = [changedNode];
            removedNodes = [];
          } else {
            addedNodes = [];
            removedNodes = [changedNode];
          }
          var previousSibling = changedNode.previousSibling;
          var nextSibling = changedNode.nextSibling;

          // 1.
          record = getRecord('childList', target);
          record.addedNodes = addedNodes;
          record.removedNodes = removedNodes;
          record.previousSibling = previousSibling;
          record.nextSibling = nextSibling;
          forEachAncestorAndObserverEnqueueRecord(target, function (options) {
            // 2.1, 3.2
            if (!options.childList) return;

            // 2.2, 3.3
            return record;
          });
      }
      clearRecords();
    }
  }]);
}();

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 * @see https://github.com/googlearchive/MutationObservers/blob/master/MutationObserver.js
 */
var MutationObserver = /*#__PURE__*/function () {
  function MutationObserver(callback) {
    _classCallCheck(this, MutationObserver);
    this.nodes = [];
    this.records = [];
    this.uid = uidCounter++;
    this.callback = callback;
  }
  return _createClass(MutationObserver, [{
    key: "observe",
    value: function observe(target, options) {
      // 1.1
      if (!options.childList && !options.attributes && !options.characterData ||
      // 1.2
      options.attributeOldValue && !options.attributes ||
      // 1.3
      options.attributeFilter && options.attributeFilter.length && !options.attributes ||
      // 1.4
      options.characterDataOldValue && !options.characterData) {
        throw new SyntaxError();
      }
      var registrations = registrationsTable.get(target);
      if (!registrations) registrationsTable.set(target, registrations = []);

      // 2
      // If target's list of registered observers already includes a registered
      // observer associated with the context object, replace that registered
      // observer's options with options.
      var registration;
      for (var i = 0; i < registrations.length; i++) {
        if (registrations[i].observer === this) {
          registration = registrations[i];
          registration.removeListeners();
          registration.options = options;
          break;
        }
      }

      // 3.
      // Otherwise, add a new registered observer to target's list of registered
      // observers with the context object as the observer and options as the
      // options, and add target to context object's list of nodes on which it
      // is registered.
      if (!registration) {
        registration = new Registration(this, target, options);
        registrations.push(registration);
        this.nodes.push(target);
      }
      registration.addListeners();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      var _this = this;
      this.nodes.forEach(function (node) {
        var registrations = registrationsTable.get(node);
        for (var i = 0; i < registrations.length; i++) {
          var registration = registrations[i];
          if (registration.observer === _this) {
            registration.removeListeners();
            registrations.splice(i, 1);
            // Each node can only have one registered observer associated with
            // this observer.
            break;
          }
        }
      }, this);
      this.records = [];
    }
  }, {
    key: "takeRecords",
    value: function takeRecords() {
      var copyOfRecords = this.records;
      this.records = [];
      return copyOfRecords;
    }
  }]);
}();

// We keep track of the two (possibly one) records used in a single mutation.
var currentRecord;
var recordWithOldValue;

/**
 * Creates a record without |oldValue| and caches it as |currentRecord| for
 * later use.
 */
function getRecord(type, target) {
  return currentRecord = new MutationRecord(type, target);
}

/**
 * Gets or creates a record with |oldValue| based in the |currentRecord|
 */
function getRecordWithOldValue(oldValue) {
  if (recordWithOldValue) return recordWithOldValue;
  recordWithOldValue = MutationRecord.copy(currentRecord);
  recordWithOldValue.oldValue = oldValue;
  return recordWithOldValue;
}
function clearRecords() {
  currentRecord = recordWithOldValue = undefined;
}

/**
 * Whether the record represents a record from the current
 * mutation event.
 */
function recordRepresentsCurrentMutation(record) {
  return record === recordWithOldValue || record === currentRecord;
}

/**
 * Selects which record, if any, to replace the last record in the queue.
 * This returns |null| if no record should be replaced.
 */
function selectRecord(lastRecord, newRecord) {
  if (lastRecord === newRecord) return lastRecord;

  // Check if the the record we are adding represents the same record. If
  // so, we keep the one with the oldValue in it.
  if (recordWithOldValue && recordRepresentsCurrentMutation(lastRecord)) return recordWithOldValue;
  return null;
}
function removeTransientObserversFor(observer) {
  observer.nodes.forEach(function (node) {
    var registrations = registrationsTable.get(node);
    if (!registrations) return;
    registrations.forEach(function (registration) {
      if (registration.observer === observer) registration.removeTransientObservers();
    });
  });
}

/**
 * This function is used for the "For each registered observer observer (with
 * observer's options as options) in target's list of registered observers,
 * run these substeps:" and the "For each ancestor ancestor of target, and for
 * each registered observer observer (with options options) in ancestor's list
 * of registered observers, run these substeps:" part of the algorithms. The
 * |options.subtree| is checked to ensure that the callback is called
 * correctly.
 *
 * @param {Node} target
 * @param {function(MutationObserverInit):MutationRecord} callback
 */
function forEachAncestorAndObserverEnqueueRecord(target, callback) {
  for (var node = target; node; node = node.parentNode) {
    var registrations = registrationsTable.get(node);
    if (registrations) {
      for (var j = 0; j < registrations.length; j++) {
        var registration = registrations[j];
        var _options = registration.options;

        // Only target ignores subtree.
        if (node !== target && !_options.subtree) continue;
        var record = callback(_options);
        if (record) registration.enqueue(record);
      }
    }
  }
}

// This is used to ensure that we never schedule 2 callas to setImmediate
var isScheduled = false;

// Keep track of observers that needs to be notified next time.
var scheduledObservers = [];

/**
 * Schedules |dispatchCallback| to be called in the future.
 */
function scheduleCallback(observer) {
  scheduledObservers.push(observer);
  if (!isScheduled) {
    isScheduled = true;
    // setImmediate(dispatchCallbacks);
    if (typeof runtime.globalThis !== 'undefined') {
      runtime.globalThis.setTimeout(dispatchCallbacks);
    } else {
      dispatchCallbacks();
    }
  }
}
function dispatchCallbacks() {
  // http://dom.spec.whatwg.org/#mutation-observers

  isScheduled = false; // Used to allow a new setImmediate call above.

  var observers = scheduledObservers;
  scheduledObservers = [];
  // Sort observers based on their creation UID (incremental).
  observers.sort(function (o1, o2) {
    return o1.uid - o2.uid;
  });
  var anyNonEmpty = false;
  observers.forEach(function (observer) {
    // 2.1, 2.2
    var queue = observer.takeRecords();
    // 2.3. Remove all transient registered observers whose observer is mo.
    removeTransientObserversFor(observer);

    // 2.4
    if (queue.length) {
      // @ts-ignore
      observer.callback(queue, observer);
      anyNonEmpty = true;
    }
  });

  // 3.
  if (anyNonEmpty) dispatchCallbacks();
}

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
            object.dirty();
            renderingService.dirty();
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
            object.dirty();
            renderingService.dirty();
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

var Plugin$3 = /*#__PURE__*/function (_AbstractRendererPlug) {
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

var index$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ImagePool: ImagePool,
  Plugin: Plugin$3
});

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
        var records = e.detail;
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          var object = record.target;
          var nodes = object.nodeName === Shape.FRAGMENT ? object.childNodes : [object];
          nodes.forEach(function (node) {
            if (node.nodeName === Shape.HTML) {
              var $el = _this.getOrCreateEl(node);
              setTransform(node, $el);
            }
          });
        }
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

var Plugin$2 = /*#__PURE__*/function (_AbstractRendererPlug) {
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

var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Plugin: Plugin$2
});

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

var Plugin$1 = /*#__PURE__*/function (_AbstractRendererPlug) {
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

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Plugin: Plugin$1
});

/**
 * listen to mouse/touch/pointer events on DOM wrapper, trigger pointer events
 */
var MobileInteractionPlugin = /*#__PURE__*/function () {
  function MobileInteractionPlugin() {
    _classCallCheck(this, MobileInteractionPlugin);
  }
  return _createClass(MobileInteractionPlugin, [{
    key: "apply",
    value: function apply(context) {
      var renderingService = context.renderingService,
        contextService = context.contextService,
        config = context.config;
      // 获取小程序上下文
      var canvasEl = contextService.getDomElement();
      var onPointerDown = function onPointerDown(ev) {
        renderingService.hooks.pointerDown.call(ev);
      };
      var onPointerUp = function onPointerUp(ev) {
        renderingService.hooks.pointerUp.call(ev);
      };
      var onPointerMove = function onPointerMove(ev) {
        // 触发 G 定义的标准 pointerMove 事件
        renderingService.hooks.pointerMove.call(ev);
      };
      var onPointerOver = function onPointerOver(ev) {
        renderingService.hooks.pointerOver.call(ev);
      };
      var onPointerOut = function onPointerOut(ev) {
        renderingService.hooks.pointerOut.call(ev);
      };
      var onClick = function onClick(ev) {
        renderingService.hooks.click.call(ev);
      };
      var onPointerCancel = function onPointerCancel(ev) {
        renderingService.hooks.pointerCancel.call(ev);
      };
      renderingService.hooks.init.tap(MobileInteractionPlugin.tag, function () {
        // 基于小程序上下文的事件监听方式，绑定事件监听，可以参考下面基于 DOM 的方式
        canvasEl.addEventListener('touchstart', onPointerDown, true);
        canvasEl.addEventListener('touchend', onPointerUp, true);
        canvasEl.addEventListener('touchmove', onPointerMove, true);
        canvasEl.addEventListener('touchcancel', onPointerCancel, true);
        // FIXME: 这里不应该只在 canvasEl 上监听 mousemove 和 mouseup，而应该在更高层级的节点上例如 document 监听。
        // 否则无法判断是否移出了 canvasEl
        // canvasEl.addEventListener('mousemove', onPointerMove, true);
        // canvasEl.addEventListener('mousedown', onPointerDown, true);
        canvasEl.addEventListener('mouseout', onPointerOut, true);
        canvasEl.addEventListener('mouseover', onPointerOver, true);
        // canvasEl.addEventListener('mouseup', onPointerUp, true);

        if (config.useNativeClickEvent) {
          canvasEl.addEventListener('click', onClick, true);
        }
      });
      renderingService.hooks.destroy.tap(MobileInteractionPlugin.tag, function () {
        // 基于小程序上下文的事件监听方式，移除事件监听
        canvasEl.removeEventListener('touchstart', onPointerDown, true);
        canvasEl.removeEventListener('touchend', onPointerUp, true);
        canvasEl.removeEventListener('touchmove', onPointerMove, true);
        canvasEl.removeEventListener('touchcancel', onPointerCancel, true);

        // canvasEl.removeEventListener('mousemove', onPointerMove, true);
        // canvasEl.removeEventListener('mousedown', onPointerDown, true);
        canvasEl.removeEventListener('mouseout', onPointerOut, true);
        canvasEl.removeEventListener('mouseover', onPointerOver, true);
        // canvasEl.removeEventListener('mouseup', onPointerUp, true);

        if (config.useNativeClickEvent) {
          canvasEl.removeEventListener('click', onClick, true);
        }
      });
    }
  }]);
}();
MobileInteractionPlugin.tag = 'MobileInteraction';

var Plugin = /*#__PURE__*/function (_AbstractRendererPlug) {
  function Plugin() {
    var _this;
    _classCallCheck(this, Plugin);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Plugin, [].concat(args));
    _this.name = 'mobile-interaction';
    return _this;
  }
  _inherits(Plugin, _AbstractRendererPlug);
  return _createClass(Plugin, [{
    key: "init",
    value: function init() {
      this.addRenderingPlugin(new MobileInteractionPlugin());
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeAllRenderingPlugins();
    }
  }]);
}(AbstractRendererPlugin);

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Plugin: Plugin
});

export { AABB, AbstractRenderer, AbstractRendererPlugin, BUILT_IN_PROPERTIES, CSS, CSSGradientValue, CSSKeywordValue, CSSRGB, CSSStyleValue, CSSUnitValue, Camera, CameraEvent, CameraProjectionMode, CameraTrackingMode, CameraType, Canvas, CanvasEvent, Circle, CircleUpdater, ClipSpaceNearZ, CustomElement, CustomElementRegistry, CustomEvent, DefaultSceneGraphSelector, DefaultSceneGraphService, DisplayObject, Document, index$1 as DomInteraction, ERROR_MSG_METHOD_NOT_IMPLEMENTED, Element, ElementEvent, Ellipse, EllipseUpdater, EventService, EventTarget, FederatedEvent, FederatedMouseEvent, FederatedPointerEvent, FederatedWheelEvent, Fragment, Frustum, GradientType, Group, GroupUpdater, HTML, index$2 as HTMLRenderer, HTMLUpdater, Image, index$3 as ImageLoader, ImagePool, Line, LineUpdater, Mask, index as MobileInteraction, MutationEvent, MutationObserver, MutationRecord, Node, OffscreenCanvasCreator, Path, PathUpdater, Plane, Point, Polygon, Polyline, PolylineUpdater, PropertySyntax, Rect, RectUpdater, Rectangle, Registration, RenderReason, RenderingService, Shape, SortReason, Strategy, Text, TextService, TextUpdater, UnitType, attrModifiedEvent, computeLinearGradient, computeRadialGradient, convertToPath, createVec3, decompose, definedProps, deg2rad, deg2turn, destroyEvent, findClosestClipPathTarget, fromRotationTranslationScale, getAngle, getEuler, getOrCalculatePathTotalLength, grad2deg, insertedEvent, isBrowser, isCSSGradientValue, isCSSRGB, isCanvas, isDisplayObject, isFederatedEvent, isFillOrStrokeAffected, isPattern, mergeColors, parseColor, parseLength, parsePath, parseTransform, parsedTransformToMat4, propertyMetadataCache, rad2deg, removedEvent, resetEntityCounter, runtime, setDOMSize, translatePathToString, turn2deg, updateLocalTransform, updateWorldTransform };
//# sourceMappingURL=index.esm.js.map
