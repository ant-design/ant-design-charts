/*!
 * @antv/g-camera-api
 * @description A simple implementation of Camera API.
 * @version 2.0.41
 * @date 7/30/2025, 1:34:37 PM
 * @author AntVis
 * @docs https://g.antv.antgroup.com/
 */
import { getAngle, CameraType, deg2rad, createVec3, runtime, Camera } from '@antv/g-lite';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _callSuper from '@babel/runtime/helpers/callSuper';
import _inherits from '@babel/runtime/helpers/inherits';
import { isString, isNumber } from '@antv/util';
import { quat, mat4, vec3 } from 'gl-matrix';

/**
 * Provides camera action & animation.
 */
var AdvancedCamera = /*#__PURE__*/function (_Camera) {
  function AdvancedCamera() {
    var _this;
    _classCallCheck(this, AdvancedCamera);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, AdvancedCamera, [].concat(args));
    /**
     * switch between multiple landmarks
     */
    _this.landmarks = [];
    return _this;
  }
  _inherits(AdvancedCamera, _Camera);
  return _createClass(AdvancedCamera, [{
    key: "rotate",
    value:
    /**
     * Changes the azimuth and elevation with respect to the current camera axes
     * @param {Number} azimuth the relative azimuth
     * @param {Number} elevation the relative elevation
     * @param {Number} roll the relative roll
     */
    function rotate(azimuth, elevation, roll) {
      this.relElevation = getAngle(elevation);
      this.relAzimuth = getAngle(azimuth);
      this.relRoll = getAngle(roll);
      this.elevation += this.relElevation;
      this.azimuth += this.relAzimuth;
      this.roll += this.relRoll;
      if (this.type === CameraType.EXPLORING) {
        var rotX = quat.setAxisAngle(quat.create(), [1, 0, 0], deg2rad((this.rotateWorld ? 1 : -1) * this.relElevation));
        var rotY = quat.setAxisAngle(quat.create(), [0, 1, 0], deg2rad((this.rotateWorld ? 1 : -1) * this.relAzimuth));
        var rotZ = quat.setAxisAngle(quat.create(), [0, 0, 1], deg2rad(this.relRoll));
        var rotQ = quat.multiply(quat.create(), rotY, rotX);
        rotQ = quat.multiply(quat.create(), rotQ, rotZ);
        var rotMatrix = mat4.fromQuat(mat4.create(), rotQ);
        mat4.translate(this.matrix, this.matrix, [0, 0, -this.distance]);
        mat4.multiply(this.matrix, this.matrix, rotMatrix);
        mat4.translate(this.matrix, this.matrix, [0, 0, this.distance]);
      } else {
        if (Math.abs(this.elevation) > 90) {
          return this;
        }
        this.computeMatrix();
      }
      this._getAxes();
      if (this.type === CameraType.ORBITING || this.type === CameraType.EXPLORING) {
        this._getPosition();
      } else if (this.type === CameraType.TRACKING) {
        this._getFocalPoint();
      }
      this._update();
      return this;
    }

    /**
     * 沿水平(right) & 垂直(up)平移相机
     */
  }, {
    key: "pan",
    value: function pan(tx, ty) {
      var coords = createVec3(tx, ty, 0);
      var pos = vec3.clone(this.position);
      vec3.add(pos, pos, vec3.scale(vec3.create(), this.right, coords[0]));
      vec3.add(pos, pos, vec3.scale(vec3.create(), this.up, coords[1]));
      this._setPosition(pos);
      this.triggerUpdate();
      return this;
    }

    /**
     * 沿 n 轴移动，当距离视点远时移动速度较快，离视点越近速度越慢
     */
  }, {
    key: "dolly",
    value: function dolly(value) {
      var n = this.forward;
      var pos = vec3.clone(this.position);
      var step = value * this.dollyingStep;
      var updatedDistance = this.distance + value * this.dollyingStep;

      // 限制视点距离范围
      step = Math.max(Math.min(updatedDistance, this.maxDistance), this.minDistance) - this.distance;
      pos[0] += step * n[0];
      pos[1] += step * n[1];
      pos[2] += step * n[2];
      this._setPosition(pos);
      if (this.type === CameraType.ORBITING || this.type === CameraType.EXPLORING) {
        // 重新计算视点距离
        this._getDistance();
      } else if (this.type === CameraType.TRACKING) {
        // 保持视距，移动视点位置
        vec3.add(this.focalPoint, pos, this.distanceVector);
      }
      this.triggerUpdate();
      return this;
    }
  }, {
    key: "cancelLandmarkAnimation",
    value: function cancelLandmarkAnimation() {
      if (this.landmarkAnimationID !== undefined) {
        this.canvas.cancelAnimationFrame(this.landmarkAnimationID);
      }
    }
  }, {
    key: "createLandmark",
    value: function createLandmark(name) {
      var _position$, _position$2, _focalPoint$, _focalPoint$2;
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _params$position = params.position,
        position = _params$position === void 0 ? this.position : _params$position,
        _params$focalPoint = params.focalPoint,
        focalPoint = _params$focalPoint === void 0 ? this.focalPoint : _params$focalPoint,
        roll = params.roll,
        zoom = params.zoom;
      var camera = new runtime.CameraContribution();
      camera.setType(this.type, undefined);
      camera.setPosition(position[0], (_position$ = position[1]) !== null && _position$ !== void 0 ? _position$ : this.position[1], (_position$2 = position[2]) !== null && _position$2 !== void 0 ? _position$2 : this.position[2]);
      camera.setFocalPoint(focalPoint[0], (_focalPoint$ = focalPoint[1]) !== null && _focalPoint$ !== void 0 ? _focalPoint$ : this.focalPoint[1], (_focalPoint$2 = focalPoint[2]) !== null && _focalPoint$2 !== void 0 ? _focalPoint$2 : this.focalPoint[2]);
      camera.setRoll(roll !== null && roll !== void 0 ? roll : this.roll);
      camera.setZoom(zoom !== null && zoom !== void 0 ? zoom : this.zoom);
      var landmark = {
        name: name,
        matrix: mat4.clone(camera.getWorldTransform()),
        right: vec3.clone(camera.right),
        up: vec3.clone(camera.up),
        forward: vec3.clone(camera.forward),
        position: vec3.clone(camera.getPosition()),
        focalPoint: vec3.clone(camera.getFocalPoint()),
        distanceVector: vec3.clone(camera.getDistanceVector()),
        distance: camera.getDistance(),
        dollyingStep: camera.getDollyingStep(),
        azimuth: camera.getAzimuth(),
        elevation: camera.getElevation(),
        roll: camera.getRoll(),
        relAzimuth: camera.relAzimuth,
        relElevation: camera.relElevation,
        relRoll: camera.relRoll,
        zoom: camera.getZoom()
      };
      this.landmarks.push(landmark);
      return landmark;
    }
  }, {
    key: "gotoLandmark",
    value: function gotoLandmark(name) {
      var _this2 = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var landmark = isString(name) ? this.landmarks.find(function (l) {
        return l.name === name;
      }) : name;
      if (landmark) {
        var _ref = isNumber(options) ? {
            duration: options
          } : options,
          _ref$easing = _ref.easing,
          easing = _ref$easing === void 0 ? 'linear' : _ref$easing,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 100 : _ref$duration,
          _ref$easingFunction = _ref.easingFunction,
          easingFunction = _ref$easingFunction === void 0 ? undefined : _ref$easingFunction,
          _ref$onfinish = _ref.onfinish,
          onfinish = _ref$onfinish === void 0 ? undefined : _ref$onfinish,
          _ref$onframe = _ref.onframe,
          onframe = _ref$onframe === void 0 ? undefined : _ref$onframe;
        var epsilon = 0.01;

        // cancel ongoing animation
        this.cancelLandmarkAnimation();
        var destPosition = landmark.position;
        var destFocalPoint = landmark.focalPoint;
        var destZoom = landmark.zoom;
        var destRoll = landmark.roll;
        var easingFunc = easingFunction || runtime.EasingFunction(easing);
        var timeStart;
        var end = function end() {
          _this2.setFocalPoint(destFocalPoint);
          _this2.setPosition(destPosition);
          _this2.setRoll(destRoll);
          _this2.setZoom(destZoom);
          _this2.computeMatrix();
          _this2.triggerUpdate();
          onfinish === null || onfinish === void 0 || onfinish();
        };
        if (duration === 0) return end();
        var _animate = function animate(timestamp) {
          if (timeStart === undefined) {
            timeStart = timestamp;
          }
          var elapsed = timestamp - timeStart;
          if (elapsed >= duration) {
            end();
            return;
          }
          // use the same ease function in animation system
          var t = easingFunc(elapsed / duration);
          var interFocalPoint = vec3.create();
          var interPosition = vec3.create();
          var interZoom = 1;
          var interRoll = 0;
          vec3.lerp(interFocalPoint, _this2.focalPoint, destFocalPoint, t);
          vec3.lerp(interPosition, _this2.position, destPosition, t);
          interRoll = _this2.roll * (1 - t) + destRoll * t;
          interZoom = _this2.zoom * (1 - t) + destZoom * t;
          _this2.setFocalPoint(interFocalPoint);
          _this2.setPosition(interPosition);
          _this2.setRoll(interRoll);
          _this2.setZoom(interZoom);
          var dist = vec3.dist(interFocalPoint, destFocalPoint) + vec3.dist(interPosition, destPosition);
          if (dist <= epsilon && destZoom === undefined && destRoll === undefined) {
            return end();
          }
          _this2.computeMatrix();
          _this2.triggerUpdate();
          if (elapsed < duration) {
            onframe === null || onframe === void 0 || onframe(t);
            _this2.landmarkAnimationID = _this2.canvas.requestAnimationFrame(_animate);
          }
        };
        this.canvas.requestAnimationFrame(_animate);
      }
    }

    /**
     * Sets the camera to a distance such that the area covered by the bounding box is viewed.
     */
    // shot(displayObject: DisplayObject) {
    //   const aabb = displayObject.getBounds();

    //   if (!AABB.isEmpty(aabb)) {
    //     this.setElevation(0);
    //     this.setAzimuth(0);
    //     this.setRoll(0);

    //     const { halfExtents, center } = aabb;
    //     const maxDim = Math.max(halfExtents[0] * 2, halfExtents[1] * 2);

    //     const cc = center.map((c: number) => Math.round(c * 1000) / 1000) as [number, number, number];

    //     if (maxDim !== 0) {
    //       const d = (1.5 * maxDim) / Math.tan(this.fov * DEG_2_RAD);
    //       this.setPosition([cc[0], cc[1], cc[2] + d]);
    //     }

    //     this.setFocalPoint(cc);
    //   }
    // }
  }]);
}(Camera);

runtime.CameraContribution = AdvancedCamera;

export { AdvancedCamera };
//# sourceMappingURL=index.esm.js.map
