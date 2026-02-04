/*!
 * @antv/g
 * @description A core module for rendering engine implements DOM API.
 * @version 6.3.1
 * @date 12/24/2025, 11:55:39 AM
 * @author AntVis
 * @docs https://g.antv.antgroup.com/
 */
'use strict';

var gLite = require('@antv/g-lite');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var _callSuper = require('@babel/runtime/helpers/callSuper');
var _inherits = require('@babel/runtime/helpers/inherits');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var util = require('@antv/util');
var glMatrix = require('gl-matrix');
var _regeneratorRuntime = require('@babel/runtime/helpers/regeneratorRuntime');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var html2canvas = require('html2canvas');
var _createForOfIteratorHelper = require('@babel/runtime/helpers/createForOfIteratorHelper');
var _objectSpread = require('@babel/runtime/helpers/objectSpread2');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _superPropGet = require('@babel/runtime/helpers/superPropGet');

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationPlaybackEvent
 */
// @ts-ignore
var AnimationEvent = /*#__PURE__*/function (_FederatedEvent) {
  function AnimationEvent(manager, target, currentTime, timelineTime) {
    var _this;
    _classCallCheck(this, AnimationEvent);
    _this = _callSuper(this, AnimationEvent, [manager]);

    // @ts-ignore
    _this.currentTime = currentTime;
    _this.timelineTime = timelineTime;
    _this.target = target;
    _this.type = 'finish';
    _this.bubbles = false;
    // @ts-ignore
    _this.currentTarget = target;
    _this.defaultPrevented = false;
    _this.eventPhase = _this.AT_TARGET;
    _this.timeStamp = Date.now();
    _this.currentTime = currentTime;
    _this.timelineTime = timelineTime;
    return _this;
  }
  _inherits(AnimationEvent, _FederatedEvent);
  return _createClass(AnimationEvent);
}(gLite.FederatedEvent);

var sequenceNumber = 0;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/Animation
 */
var Animation = /*#__PURE__*/function () {
  function Animation(effect, timeline) {
    var _this$effect;
    _classCallCheck(this, Animation);
    this.currentTimePending = false;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/playState
     */
    // playState: AnimationPlayState;
    this._idle = true;
    this._paused = false;
    this._finishedFlag = true;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/currentTime
     */
    this._currentTime = 0;
    this._playbackRate = 1;
    this._inTimeline = true;
    this.effect = effect;
    effect.animation = this;
    this.timeline = timeline;
    this.id = "".concat(sequenceNumber++);
    this._inEffect = !!this.effect.update(0);
    this._totalDuration = Number((_this$effect = this.effect) === null || _this$effect === void 0 ? void 0 : _this$effect.getComputedTiming().endTime);
    this._holdTime = 0;
    this._paused = false;
    this.oldPlayState = 'idle';
    this.updatePromises();
  }

  /**
   * state machine,
   * resolve/reject ready/finished Promise according to current state
   */
  return _createClass(Animation, [{
    key: "pending",
    get:
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/effect
     */

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/timeline
     */

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/id
     */

    // animation: InternalAnimation | null;

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/pending
     */
    function get() {
      return this._startTime === null && !this._paused && this.playbackRate !== 0 || this.currentTimePending;
    }
  }, {
    key: "playState",
    get: function get() {
      if (this._idle) return 'idle';
      if (this._isFinished) return 'finished';
      if (this._paused) return 'paused';
      return 'running';
    }

    /**
     * record previos state
     */
  }, {
    key: "ready",
    get:
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/ready
     * @example
      animation.pause();
      animation.ready.then(function() {
        // Displays 'running'
        alert(animation.playState);
      });
      animation.play();
     */
    function get() {
      var _this = this;
      if (!this.readyPromise) {
        if (this.timeline.animationsWithPromises.indexOf(this) === -1) {
          this.timeline.animationsWithPromises.push(this);
        }
        this.readyPromise = new Promise(function (resolve, reject) {
          _this.resolveReadyPromise = function () {
            resolve(_this);
          };
          _this.rejectReadyPromise = function () {
            reject(new Error());
          };
        });
        if (!this.pending) {
          this.resolveReadyPromise();
        }
      }
      return this.readyPromise;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/finished
     * @example
      Promise.all(
        elem.getAnimations().map(
          function(animation) {
            return animation.finished
          }
        )
      ).then(
        function() {
          return elem.remove();
        }
      );
     */
  }, {
    key: "finished",
    get: function get() {
      var _this2 = this;
      if (!this.finishedPromise) {
        if (this.timeline.animationsWithPromises.indexOf(this) === -1) {
          this.timeline.animationsWithPromises.push(this);
        }
        this.finishedPromise = new Promise(function (resolve, reject) {
          _this2.resolveFinishedPromise = function () {
            resolve(_this2);
          };
          _this2.rejectFinishedPromise = function () {
            reject(new Error());
          };
        });
        if (this.playState === 'finished') {
          this.resolveFinishedPromise();
        }
      }
      return this.finishedPromise;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/onfinish
     */

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/oncancel
     */

    /**
     * get called after each frame when running
     */
  }, {
    key: "currentTime",
    get: function get() {
      this.updatePromises();
      return this._idle || this.currentTimePending ? null : this._currentTime;
    },
    set: function set(newTime) {
      newTime = Number(newTime);
      if (isNaN(newTime)) return;
      this.timeline.restart();
      if (!this._paused && this._startTime !== null) {
        var _this$timeline;
        this._startTime = Number((_this$timeline = this.timeline) === null || _this$timeline === void 0 ? void 0 : _this$timeline.currentTime) - newTime / this.playbackRate;
      }
      this.currentTimePending = false;
      if (this._currentTime === newTime) {
        return;
      }
      if (this._idle) {
        this._idle = false;
        this._paused = true;
      }
      this.tickCurrentTime(newTime, true);
      this.timeline.applyDirtiedAnimation(this);
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/startTime
     */
  }, {
    key: "startTime",
    get: function get() {
      return this._startTime;
    },
    set: function set(newTime) {
      if (newTime !== null) {
        this.updatePromises();
        newTime = Number(newTime);
        if (isNaN(newTime)) return;
        if (this._paused || this._idle) return;
        this._startTime = newTime;
        this.tickCurrentTime((Number(this.timeline.currentTime) - this._startTime) * this.playbackRate);
        this.timeline.applyDirtiedAnimation(this);
        this.updatePromises();
      }
    }
  }, {
    key: "playbackRate",
    get: function get() {
      return this._playbackRate;
    },
    set: function set(value) {
      if (value === this._playbackRate) {
        return;
      }
      this.updatePromises();
      var oldCurrentTime = this.currentTime;
      this._playbackRate = value;
      this.startTime = null;
      if (this.playState !== 'paused' && this.playState !== 'idle') {
        this._finishedFlag = false;
        this._idle = false;
        this.ensureAlive();
        this.timeline.applyDirtiedAnimation(this);
      }
      if (oldCurrentTime !== null) {
        this.currentTime = oldCurrentTime;
      }
      this.updatePromises();
    }
  }, {
    key: "_isFinished",
    get: function get() {
      return !this._idle && (this._playbackRate > 0 && Number(this._currentTime) >= this._totalDuration || this._playbackRate < 0 && Number(this._currentTime) <= 0);
    }
  }, {
    key: "totalDuration",
    get: function get() {
      return this._totalDuration;
    }
  }, {
    key: "_needsTick",
    get: function get() {
      return this.pending || this.playState === 'running' || !this._finishedFlag;
    }
  }, {
    key: "updatePromises",
    value: function updatePromises() {
      var _this$effect$target;
      if ((_this$effect$target = this.effect.target) !== null && _this$effect$target !== void 0 && _this$effect$target.destroyed) {
        this.readyPromise = undefined;
        this.finishedPromise = undefined;
        return false;
      }
      var oldPlayState = this.oldPlayState;
      var newPlayState = this.pending ? 'pending' : this.playState;
      if (this.readyPromise && newPlayState !== oldPlayState) {
        if (newPlayState === 'idle') {
          this.rejectReadyPromise();
          this.readyPromise = undefined;
        } else if (oldPlayState === 'pending') {
          this.resolveReadyPromise();
        } else if (newPlayState === 'pending') {
          this.readyPromise = undefined;
        }
      }
      if (this.finishedPromise && newPlayState !== oldPlayState) {
        if (newPlayState === 'idle') {
          this.rejectFinishedPromise();
          this.finishedPromise = undefined;
        } else if (newPlayState === 'finished') {
          this.resolveFinishedPromise();
        } else if (oldPlayState === 'finished') {
          this.finishedPromise = undefined;
        }
      }
      this.oldPlayState = newPlayState;
      return this.readyPromise || this.finishedPromise;
    }
  }, {
    key: "play",
    value: function play() {
      this.updatePromises();
      this._paused = false;
      if (this._isFinished || this._idle) {
        this.rewind();
        this._startTime = null;
      }
      this._finishedFlag = false;
      this._idle = false;
      this.ensureAlive();
      this.timeline.applyDirtiedAnimation(this);
      if (this.timeline.animations.indexOf(this) === -1) {
        this.timeline.animations.push(this);
      }
      this.updatePromises();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.updatePromises();
      if (this.currentTime) {
        this._holdTime = this.currentTime;
      }
      if (!this._isFinished && !this._paused && !this._idle) {
        this.currentTimePending = true;
      } else if (this._idle) {
        this.rewind();
        this._idle = false;
      }
      this._startTime = null;
      this._paused = true;
      this.updatePromises();
    }
  }, {
    key: "finish",
    value: function finish() {
      this.updatePromises();
      if (this._idle) return;
      this.currentTime = this._playbackRate > 0 ? this._totalDuration : 0;
      this._startTime = this._totalDuration - this.currentTime;
      this.currentTimePending = false;
      this.timeline.applyDirtiedAnimation(this);
      this.updatePromises();
    }
  }, {
    key: "cancel",
    value: function cancel() {
      var _this3 = this;
      this.updatePromises();
      if (!this._inEffect) return;
      this._inEffect = false;
      this._idle = true;
      this._paused = false;
      this._finishedFlag = true;
      this._currentTime = null;
      this._startTime = null;
      this.effect.update(null);
      // effects are invalid after cancellation as the animation state
      // needs to un-apply.
      this.timeline.applyDirtiedAnimation(this);
      this.updatePromises();

      /**
       * 1. Reject the current finished promise with a DOMException named "AbortError".
       * 2. Let current finished promise be a new promise
       * @see https://w3c.github.io/csswg-drafts/web-animations-1/#canceling-an-animation-section
       */
      // if (this.finishedPromise) {
      //   this.rejectFinishedPromise();
      //   this.finishedPromise = undefined;
      // }

      if (this.oncancel) {
        var event = new AnimationEvent(null, this, this.currentTime, null);
        setTimeout(function () {
          _this3.oncancel(event);
        });
      }
    }
  }, {
    key: "reverse",
    value: function reverse() {
      this.updatePromises();
      var oldCurrentTime = this.currentTime;
      this.playbackRate *= -1;
      this.play();
      if (oldCurrentTime !== null) {
        this.currentTime = oldCurrentTime;
      }
      this.updatePromises();
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/updatePlaybackRate
     */
  }, {
    key: "updatePlaybackRate",
    value: function updatePlaybackRate(playbackRate) {
      this.playbackRate = playbackRate;
    }
  }, {
    key: "targetAnimations",
    value: function targetAnimations() {
      var _this$effect2;
      var target = (_this$effect2 = this.effect) === null || _this$effect2 === void 0 ? void 0 : _this$effect2.target;
      return target.getAnimations();
    }
  }, {
    key: "markTarget",
    value: function markTarget() {
      var animations = this.targetAnimations();
      if (animations.indexOf(this) === -1) {
        animations.push(this);
      }
    }
  }, {
    key: "unmarkTarget",
    value: function unmarkTarget() {
      var animations = this.targetAnimations();
      var index = animations.indexOf(this);
      if (index !== -1) {
        animations.splice(index, 1);
      }
    }
  }, {
    key: "tick",
    value: function tick(timelineTime, isAnimationFrame) {
      if (!this._idle && !this._paused) {
        if (this._startTime === null) {
          if (isAnimationFrame) {
            this.startTime = timelineTime - this._currentTime / this.playbackRate;
          }
        } else if (!this._isFinished) {
          this.tickCurrentTime((timelineTime - this._startTime) * this.playbackRate);
        }
      }
      if (isAnimationFrame) {
        this.currentTimePending = false;
        this.fireEvents(timelineTime);
      }
    }
  }, {
    key: "rewind",
    value: function rewind() {
      if (this.playbackRate >= 0) {
        this.currentTime = 0;
      } else if (this._totalDuration < Infinity) {
        this.currentTime = this._totalDuration;
      } else {
        throw new Error('Unable to rewind negative playback rate animation with infinite duration');
      }
    }
  }, {
    key: "persist",
    value: function persist() {
      throw new Error(gLite.ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, listener, options) {
      throw new Error(gLite.ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, listener, options) {
      throw new Error(gLite.ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      throw new Error(gLite.ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "commitStyles",
    value:
    // replaceState: AnimationReplaceState;
    function commitStyles() {
      throw new Error(gLite.ERROR_MSG_METHOD_NOT_IMPLEMENTED);
    }
  }, {
    key: "ensureAlive",
    value: function ensureAlive() {
      // If an animation is playing backwards and is not fill backwards/both
      // then it should go out of effect when it reaches the start of its
      // active interval (currentTime === 0).
      if (this.playbackRate < 0 && this.currentTime === 0) {
        var _this$effect3;
        this._inEffect = !!((_this$effect3 = this.effect) !== null && _this$effect3 !== void 0 && _this$effect3.update(-1));
      } else {
        var _this$effect4;
        this._inEffect = !!((_this$effect4 = this.effect) !== null && _this$effect4 !== void 0 && _this$effect4.update(this.currentTime));
      }
      if (!this._inTimeline && (this._inEffect || !this._finishedFlag)) {
        this._inTimeline = true;
        this.timeline.animations.push(this);
      }
    }
  }, {
    key: "tickCurrentTime",
    value: function tickCurrentTime(newTime, ignoreLimit) {
      if (newTime !== this._currentTime) {
        this._currentTime = newTime;
        if (this._isFinished && !ignoreLimit) {
          this._currentTime = this._playbackRate > 0 ? this._totalDuration : 0;
        }
        this.ensureAlive();
      }
    }
  }, {
    key: "fireEvents",
    value: function fireEvents(baseTime) {
      var _this4 = this;
      if (this._isFinished) {
        if (!this._finishedFlag) {
          if (this.onfinish) {
            var event = new AnimationEvent(null, this, this.currentTime, baseTime);
            setTimeout(function () {
              if (_this4.onfinish) {
                _this4.onfinish(event);
              }
            });
          }
          this._finishedFlag = true;
        }
      } else {
        if (this.onframe && this.playState === 'running') {
          var _event = new AnimationEvent(null, this, this.currentTime, baseTime);
          this.onframe(_event);
        }
        this._finishedFlag = false;
      }
    }
  }]);
}();

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
var float32ArraySupported = typeof Float32Array === 'function';
var A = function A(aA1, aA2) {
  return 1.0 - 3.0 * aA2 + 3.0 * aA1;
};
var B = function B(aA1, aA2) {
  return 3.0 * aA2 - 6.0 * aA1;
};
var C = function C(aA1) {
  return 3.0 * aA1;
};

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
var calcBezier = function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
};

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
var getSlope = function getSlope(aT, aA1, aA2) {
  return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
};
var binarySubdivide = function binarySubdivide(aX, aA, aB, mX1, mX2) {
  var currentX;
  var currentT;
  var i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) aB = currentT;else aA = currentT;
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
};
var newtonRaphsonIterate = function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0.0) return aGuessT;
    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
};
var bezier = function bezier(mX1, mY1, mX2, mY2) {
  if (!(mX1 >= 0 && mX1 <= 1 && mX2 >= 0 && mX2 <= 1)) throw new Error('bezier x values must be in [0, 1] range');
  if (mX1 === mY1 && mX2 === mY2) return function (t) {
    return t;
  };

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  var getTForX = function getTForX(aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) intervalStart += kSampleStepSize;
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;
    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    if (initialSlope === 0.0) return guessForT;
    return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
  };
  return function (t) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (t === 0 || t === 1) return t;
    return calcBezier(getTForX(t), mY1, mY2);
  };
};

var convertToDash = function convertToDash(str) {
  str = str.replace(/([A-Z])/g, function (letter) {
    return "-".concat(letter.toLowerCase());
  });

  // Remove first dash
  return str.charAt(0) === '-' ? str.substring(1) : str;
};
/**
  Easing Functions from anime.js, they are tried and true, so, its better to use them instead of other alternatives
*/
var Quad = function Quad(t) {
  return Math.pow(t, 2);
};
var Cubic = function Cubic(t) {
  return Math.pow(t, 3);
};
var Quart = function Quart(t) {
  return Math.pow(t, 4);
};
var Quint = function Quint(t) {
  return Math.pow(t, 5);
};
var Expo = function Expo(t) {
  return Math.pow(t, 6);
};
var Sine = function Sine(t) {
  return 1 - Math.cos(t * Math.PI / 2);
};
var Circ = function Circ(t) {
  return 1 - Math.sqrt(1 - t * t);
};
var Back = function Back(t) {
  return t * t * (3 * t - 2);
};
var Bounce = function Bounce(t) {
  var pow2;
  var b = 4;
  while (t < ((pow2 = Math.pow(2, --b)) - 1) / 11) {}
  return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2);
};
var Elastic = function Elastic(t) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var _params = _slicedToArray(params, 2),
    _params$ = _params[0],
    amplitude = _params$ === void 0 ? 1 : _params$,
    _params$2 = _params[1],
    period = _params$2 === void 0 ? 0.5 : _params$2;
  var a = util.clamp(Number(amplitude), 1, 10);
  var p = util.clamp(Number(period), 0.1, 2);
  if (t === 0 || t === 1) return t;
  return -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
};
var Spring = function Spring(t) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var duration = arguments.length > 2 ? arguments[2] : undefined;
  var _params2 = _slicedToArray(params, 4),
    _params2$ = _params2[0],
    mass = _params2$ === void 0 ? 1 : _params2$,
    _params2$2 = _params2[1],
    stiffness = _params2$2 === void 0 ? 100 : _params2$2,
    _params2$3 = _params2[2],
    damping = _params2$3 === void 0 ? 10 : _params2$3,
    _params2$4 = _params2[3],
    velocity = _params2$4 === void 0 ? 0 : _params2$4;
  mass = util.clamp(mass, 0.1, 1000);
  stiffness = util.clamp(stiffness, 0.1, 1000);
  damping = util.clamp(damping, 0.1, 1000);
  velocity = util.clamp(velocity, 0.1, 1000);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;
  var progress = duration ? duration * t / 1000 : t;
  if (zeta < 1) {
    progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
  } else {
    progress = (a + b * progress) * Math.exp(-progress * w0);
  }
  if (t === 0 || t === 1) return t;
  return 1 - progress;
};

/**
 * Cache the durations at set easing parameters
 */
// export const EasingDurationCache: Map<string | TypeEasingFunction, number> = new Map();

/**
 * The threshold for an infinite loop
 */
// const INTINITE_LOOP_LIMIT = 10000;

/** Convert easing parameters to Array of numbers, e.g. "spring(2, 500)" to [2, 500] */
// export const parseEasingParameters = (str: string) => {
//   const match = /(\(|\s)([^)]+)\)?/.exec(str);
//   return match
//     ? match[2].split(',').map((value) => {
//         const num = parseFloat(value);
//         return !Number.isNaN(num) ? num : value.trim();
//       })
//     : [];
// };

/**
 * The spring easing function will only look smooth at certain durations, with certain parameters.
 * This functions returns the optimal duration to create a smooth springy animation based on physics
 *
 * Note: it can also be used to determine the optimal duration of other types of easing function, but be careful of 'in-'
 * easing functions, because of the nature of the function it can sometimes create an infinite loop, I suggest only using
 * `getEasingDuration` for `spring`, specifically 'out-spring' and 'spring'
 */
// export const getEasingDuration = (easing: string | TypeEasingFunction = 'spring') => {
//   if (EasingDurationCache.has(easing)) return EasingDurationCache.get(easing);

//   // eslint-disable-next-line @typescript-eslint/no-use-before-define
//   const easingFunction = typeof easing == 'function' ? easing : getEasingFunction(easing as string);
//   const params = typeof easing == 'function' ? [] : parseEasingParameters(easing);
//   const frame = 1 / 6;

//   let elapsed = 0;
//   let rest = 0;
//   let count = 0;

//   while (++count < INTINITE_LOOP_LIMIT) {
//     elapsed += frame;
//     if (easingFunction(elapsed, params, undefined) === 1) {
//       rest++;
//       if (rest >= 16) break;
//     } else {
//       rest = 0;
//     }
//   }

//   const duration = elapsed * frame * 1000;
//   EasingDurationCache.set(easing, duration);
//   return duration;
// };

/**
  These Easing Functions are based off of the Sozi Project's easing functions
  https://github.com/sozi-projects/Sozi/blob/d72e44ebd580dc7579d1e177406ad41e632f961d/src/js/player/Timing.js
*/
var Steps = function Steps(t) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var _ref = params,
    _ref2 = _slicedToArray(_ref, 2),
    _ref2$ = _ref2[0],
    steps = _ref2$ === void 0 ? 10 : _ref2$,
    type = _ref2[1];
  var trunc = type === 'start' ? Math.ceil : Math.floor;
  return trunc(util.clamp(t, 0, 1) * steps) / steps;
};

// @ts-ignore
var Bezier = function Bezier(t) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var _params3 = _slicedToArray(params, 4),
    mX1 = _params3[0],
    mY1 = _params3[1],
    mX2 = _params3[2],
    mY2 = _params3[3];
  return bezier(mX1, mY1, mX2, mY2)(t);
};

/** The default `ease-in` easing function */
var easein = bezier(0.42, 0.0, 1.0, 1.0);

/** Converts easing functions to their `out`counter parts */
var EaseOut = function EaseOut(ease) {
  return function (t) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var duration = arguments.length > 2 ? arguments[2] : undefined;
    return 1 - ease(1 - t, params, duration);
  };
};

/** Converts easing functions to their `in-out` counter parts */
var EaseInOut = function EaseInOut(ease) {
  return function (t) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var duration = arguments.length > 2 ? arguments[2] : undefined;
    return t < 0.5 ? ease(t * 2, params, duration) / 2 : 1 - ease(t * -2 + 2, params, duration) / 2;
  };
};

/** Converts easing functions to their `out-in` counter parts */
var EaseOutIn = function EaseOutIn(ease) {
  return function (t) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var duration = arguments.length > 2 ? arguments[2] : undefined;
    return t < 0.5 ? (1 - ease(1 - t * 2, params, duration)) / 2 : (ease(t * 2 - 1, params, duration) + 1) / 2;
  };
};

/**
 * The default list of easing functions, do note this is different from {@link EASING}
 */

var EasingFunctions = {
  steps: Steps,
  'step-start': function stepStart(t) {
    return Steps(t, [1, 'start']);
  },
  'step-end': function stepEnd(t) {
    return Steps(t, [1, 'end']);
  },
  linear: function linear(t) {
    return t;
  },
  'cubic-bezier': Bezier,
  ease: function ease(t) {
    return Bezier(t, [0.25, 0.1, 0.25, 1.0]);
  },
  "in": easein,
  out: EaseOut(easein),
  'in-out': EaseInOut(easein),
  'out-in': EaseOutIn(easein),
  'in-quad': Quad,
  'out-quad': EaseOut(Quad),
  'in-out-quad': EaseInOut(Quad),
  'out-in-quad': EaseOutIn(Quad),
  'in-cubic': Cubic,
  'out-cubic': EaseOut(Cubic),
  'in-out-cubic': EaseInOut(Cubic),
  'out-in-cubic': EaseOutIn(Cubic),
  'in-quart': Quart,
  'out-quart': EaseOut(Quart),
  'in-out-quart': EaseInOut(Quart),
  'out-in-quart': EaseOutIn(Quart),
  'in-quint': Quint,
  'out-quint': EaseOut(Quint),
  'in-out-quint': EaseInOut(Quint),
  'out-in-quint': EaseOutIn(Quint),
  'in-expo': Expo,
  'out-expo': EaseOut(Expo),
  'in-out-expo': EaseInOut(Expo),
  'out-in-expo': EaseOutIn(Expo),
  'in-sine': Sine,
  'out-sine': EaseOut(Sine),
  'in-out-sine': EaseInOut(Sine),
  'out-in-sine': EaseOutIn(Sine),
  'in-circ': Circ,
  'out-circ': EaseOut(Circ),
  'in-out-circ': EaseInOut(Circ),
  'out-in-circ': EaseOutIn(Circ),
  'in-back': Back,
  'out-back': EaseOut(Back),
  'in-out-back': EaseInOut(Back),
  'out-in-back': EaseOutIn(Back),
  'in-bounce': Bounce,
  'out-bounce': EaseOut(Bounce),
  'in-out-bounce': EaseInOut(Bounce),
  'out-in-bounce': EaseOutIn(Bounce),
  'in-elastic': Elastic,
  'out-elastic': EaseOut(Elastic),
  'in-out-elastic': EaseInOut(Elastic),
  'out-in-elastic': EaseOutIn(Elastic),
  spring: Spring,
  'spring-in': Spring,
  'spring-out': EaseOut(Spring),
  'spring-in-out': EaseInOut(Spring),
  'spring-out-in': EaseOutIn(Spring)
};

/**
 * Convert string easing to their proper form
 */
var complexEasingSyntax = function complexEasingSyntax(ease) {
  return convertToDash(ease).replace(/^ease-/, '') // Remove the "ease-" keyword
  .replace(/(\(|\s).+/, '') // Remove the function brackets and parameters
  .toLowerCase().trim();
};

/** Re-maps a number from one range to another. Numbers outside the range are not clamped to 0 and 1, because out-of-range values are often intentional and useful. */
var getEasingFunction = function getEasingFunction(ease) {
  return EasingFunctions[complexEasingSyntax(ease)] || EasingFunctions.linear;
};

// /**
//  * Allows you to register new easing functions
//  */
// export const registerEasingFunction = (key: string, fn: TypeEasingFunction) => {
//   Object.assign(EasingFunctions, {
//     [key]: fn,
//   });
// };

// /**
//  * Allows you to register multiple new easing functions
//  */
// export const registerEasingFunctions = (...obj: typeof EasingFunctions[]) => {
//   Object.assign(EasingFunctions, ...obj);
// };

var linear = function linear(x) {
  return x;
};
var Start = 1;
var Middle = 0.5;
var End = 0;
function step(count, pos) {
  return function (x) {
    if (x >= 1) {
      return 1;
    }
    var stepSize = 1 / count;
    x += pos * stepSize;
    return x - x % stepSize;
  };
}
var numberString = '\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*';
var cubicBezierRe = new RegExp("cubic-bezier\\(".concat(numberString, ",").concat(numberString, ",").concat(numberString, ",").concat(numberString, "\\)"));
var step1Re = /steps\(\s*(\d+)\s*\)/;
var step2Re = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/;
function parseEasingFunction(normalizedEasing) {
  var cubicData = cubicBezierRe.exec(normalizedEasing);
  if (cubicData) {
    // @ts-ignore
    return bezier.apply(void 0, _toConsumableArray(cubicData.slice(1).map(Number)));
  }
  var step1Data = step1Re.exec(normalizedEasing);
  if (step1Data) {
    return step(Number(step1Data[1]), End);
  }
  var step2Data = step2Re.exec(normalizedEasing);
  if (step2Data) {
    // @ts-ignore
    return step(Number(step2Data[1]), {
      start: Start,
      middle: Middle,
      end: End
    }[step2Data[2]]);
  }
  return getEasingFunction(normalizedEasing);
}
function calculateActiveDuration(timing) {
  // @ts-ignore
  return Math.abs(repeatedDuration(timing) / (timing.playbackRate || 1));
}
function repeatedDuration(timing) {
  var _timing$iterations;
  // https://drafts.csswg.org/web-animations/#calculating-the-active-duration
  if (timing.duration === 0 || timing.iterations === 0) {
    return 0;
  }

  // @see https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/duration#value
  // if (timing.duration === 'auto') {
  //   timing.duration = 0;
  // }

  return (timing.duration === 'auto' ? 0 : Number(timing.duration)) * ((_timing$iterations = timing.iterations) !== null && _timing$iterations !== void 0 ? _timing$iterations : 1);
}
var PhaseNone = 0;
var PhaseBefore = 1;
var PhaseAfter = 2;
var PhaseActive = 3;
function calculatePhase(activeDuration, localTime, timing) {
  // https://drafts.csswg.org/web-animations/#animation-effect-phases-and-states
  if (localTime === null) {
    return PhaseNone;
  }
  var endTime = timing.endTime;
  if (localTime < Math.min(timing.delay, endTime)) {
    return PhaseBefore;
  }
  if (localTime >= Math.min(timing.delay + activeDuration + timing.endDelay, endTime)) {
    return PhaseAfter;
  }
  return PhaseActive;
}
function calculateActiveTime(activeDuration, fillMode, localTime, phase, delay) {
  // https://drafts.csswg.org/web-animations/#calculating-the-active-time
  switch (phase) {
    case PhaseBefore:
      if (fillMode === 'backwards' || fillMode === 'both') return 0;
      return null;
    case PhaseActive:
      return localTime - delay;
    case PhaseAfter:
      if (fillMode === 'forwards' || fillMode === 'both') return activeDuration;
      return null;
    case PhaseNone:
      return null;
  }
}
function calculateOverallProgress(iterationDuration, phase, iterations, activeTime, iterationStart) {
  // https://drafts.csswg.org/web-animations/#calculating-the-overall-progress
  var overallProgress = iterationStart;
  if (iterationDuration === 0) {
    if (phase !== PhaseBefore) {
      overallProgress += iterations;
    }
  } else {
    overallProgress += activeTime / iterationDuration;
  }
  return overallProgress;
}
function calculateSimpleIterationProgress(overallProgress, iterationStart, phase, iterations, activeTime, iterationDuration) {
  // https://drafts.csswg.org/web-animations/#calculating-the-simple-iteration-progress

  var simpleIterationProgress = overallProgress === Infinity ? iterationStart % 1 : overallProgress % 1;
  if (simpleIterationProgress === 0 && phase === PhaseAfter && iterations !== 0 && (activeTime !== 0 || iterationDuration === 0)) {
    simpleIterationProgress = 1;
  }
  return simpleIterationProgress;
}
function calculateCurrentIteration(phase, iterations, simpleIterationProgress, overallProgress) {
  // https://drafts.csswg.org/web-animations/#calculating-the-current-iteration
  if (phase === PhaseAfter && iterations === Infinity) {
    return Infinity;
  }
  if (simpleIterationProgress === 1) {
    return Math.floor(overallProgress) - 1;
  }
  return Math.floor(overallProgress);
}
function calculateDirectedProgress(playbackDirection, currentIteration, simpleIterationProgress) {
  // https://drafts.csswg.org/web-animations/#calculating-the-directed-progress
  var currentDirection = playbackDirection;
  if (playbackDirection !== 'normal' && playbackDirection !== 'reverse') {
    var d = currentIteration;
    if (playbackDirection === 'alternate-reverse') {
      d += 1;
    }
    currentDirection = 'normal';
    if (d !== Infinity && d % 2 !== 0) {
      currentDirection = 'reverse';
    }
  }
  if (currentDirection === 'normal') {
    return simpleIterationProgress;
  }
  return 1 - simpleIterationProgress;
}
function calculateIterationProgress(activeDuration, localTime, timing) {
  var phase = calculatePhase(activeDuration, localTime, timing);
  var activeTime = calculateActiveTime(activeDuration, timing.fill, localTime, phase, timing.delay);
  if (activeTime === null) return null;
  var duration = timing.duration === 'auto' ? 0 : timing.duration;
  var overallProgress = calculateOverallProgress(duration, phase, timing.iterations, activeTime, timing.iterationStart);
  var simpleIterationProgress = calculateSimpleIterationProgress(overallProgress, timing.iterationStart, phase, timing.iterations, activeTime, duration);
  var currentIteration = calculateCurrentIteration(phase, timing.iterations, simpleIterationProgress, overallProgress);
  var directedProgress = calculateDirectedProgress(timing.direction, currentIteration, simpleIterationProgress);
  timing.currentIteration = currentIteration;
  timing.progress = directedProgress;

  // https://drafts.csswg.org/web-animations/#calculating-the-transformed-progress
  // https://drafts.csswg.org/web-animations/#calculating-the-iteration-progress
  return timing.easingFunction(directedProgress);
}

function convertEffectInput(keyframes, timing, target) {
  var propertySpecificKeyframeGroups = makePropertySpecificKeyframeGroups(keyframes, timing);
  var interpolations = makeInterpolations(propertySpecificKeyframeGroups, target);
  return function (target, fraction) {
    if (fraction !== null) {
      interpolations.filter(function (interpolation) {
        return fraction >= interpolation.applyFrom && fraction < interpolation.applyTo;
      }).forEach(function (interpolation) {
        var offsetFraction = fraction - interpolation.startOffset;
        var localDuration = interpolation.endOffset - interpolation.startOffset;
        var scaledLocalTime = localDuration === 0 ? 0 : offsetFraction / localDuration;
        // apply updated attribute
        target.setAttribute(interpolation.property, interpolation.interpolation(scaledLocalTime), false, false // disable memoize
        );

        // if (interpolation.property === 'visibility') {
        //   console.log(
        //     scaledLocalTime,
        //     interpolation.interpolation(scaledLocalTime),
        //   );
        // }
      });
    } else {
      for (var property in propertySpecificKeyframeGroups) if (isNotReservedWord(property)) {
        // clear attribute
        target.setAttribute(property, null);
      }
    }
  };
}
function isNotReservedWord(member) {
  return member !== 'offset' && member !== 'easing' && member !== 'composite' && member !== 'computedOffset';
}
function makePropertySpecificKeyframeGroups(keyframes, timing) {
  var propertySpecificKeyframeGroups = {};
  for (var i = 0; i < keyframes.length; i++) {
    for (var member in keyframes[i]) {
      if (isNotReservedWord(member)) {
        var propertySpecificKeyframe = {
          offset: keyframes[i].offset,
          computedOffset: keyframes[i].computedOffset,
          easing: keyframes[i].easing,
          easingFunction: parseEasingFunction(keyframes[i].easing) || timing.easingFunction,
          value: keyframes[i][member]
        };
        propertySpecificKeyframeGroups[member] = propertySpecificKeyframeGroups[member] || [];
        propertySpecificKeyframeGroups[member].push(propertySpecificKeyframe);
      }
    }
  }
  return propertySpecificKeyframeGroups;
}
function makeInterpolations(propertySpecificKeyframeGroups, target) {
  var interpolations = [];
  for (var groupName in propertySpecificKeyframeGroups) {
    var keyframes = propertySpecificKeyframeGroups[groupName];
    for (var i = 0; i < keyframes.length - 1; i++) {
      var startIndex = i;
      var endIndex = i + 1;
      var startOffset = keyframes[startIndex].computedOffset;
      var endOffset = keyframes[endIndex].computedOffset;
      var applyFrom = startOffset;
      var applyTo = endOffset;
      if (i === 0) {
        applyFrom = -Infinity;
        if (endOffset === 0) {
          endIndex = startIndex;
        }
      }
      if (i === keyframes.length - 2) {
        applyTo = Infinity;
        if (startOffset === 1) {
          startIndex = endIndex;
        }
      }
      interpolations.push({
        applyFrom: applyFrom,
        applyTo: applyTo,
        startOffset: keyframes[startIndex].computedOffset,
        endOffset: keyframes[endIndex].computedOffset,
        easingFunction: keyframes[startIndex].easingFunction,
        property: groupName,
        interpolation: propertyInterpolation(groupName, keyframes[startIndex].value, keyframes[endIndex].value, target)
      });
    }
  }
  interpolations.sort(function (leftInterpolation, rightInterpolation) {
    return leftInterpolation.startOffset - rightInterpolation.startOffset;
  });
  return interpolations;
}
var InterpolationFactory = function InterpolationFactory(from, to, convertToString) {
  return function (f) {
    var interpolated = interpolate(from, to, f);
    return util.isNumber(interpolated) ? interpolated : convertToString(interpolated);
  };
};
function propertyInterpolation(property, left, right, target) {
  var metadata = gLite.propertyMetadataCache[property];
  if (metadata && metadata.syntax && metadata["int"]) {
    var propertyHandler = gLite.runtime.styleValueRegistry.getPropertySyntax(metadata.syntax);
    if (propertyHandler) {
      var parser = propertyHandler.parser;
      var usedLeft = parser ? parser(left, target) : left;
      var usedRight = parser ? parser(right, target) : right;

      // merger [left, right, n2string()]
      var interpolationArgs = propertyHandler.mixer(usedLeft, usedRight, target);
      if (interpolationArgs) {
        var interp = InterpolationFactory.apply(void 0, _toConsumableArray(interpolationArgs));
        return function (t) {
          if (t === 0) return left;
          if (t === 1) return right;
          return interp(t);
        };
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return InterpolationFactory(false, true, function (bool) {
    return bool ? right : left;
  });
}

/**
 * interpolate with number, boolean, number[], boolean[]
 */
function interpolate(from, to, f) {
  if (typeof from === 'number' && typeof to === 'number') {
    return from * (1 - f) + to * f;
  }
  if (typeof from === 'boolean' && typeof to === 'boolean' || typeof from === 'string' && typeof to === 'string' // skip string, eg. path ['M', 10, 10]
  ) {
    return f < 0.5 ? from : to;
  }
  if (Array.isArray(from) && Array.isArray(to)) {
    // interpolate arrays/matrix
    var fromLength = from.length;
    var toLength = to.length;
    var length = Math.max(fromLength, toLength);
    var r = [];
    for (var i = 0; i < length; i++) {
      r.push(interpolate(from[i < fromLength ? i : fromLength - 1], to[i < toLength ? i : toLength - 1], f));
    }
    return r;
  }
  throw new Error("Mismatched interpolation arguments ".concat(from, ":").concat(to));
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming
 */
var AnimationEffectTiming = /*#__PURE__*/function () {
  function AnimationEffectTiming() {
    _classCallCheck(this, AnimationEffectTiming);
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/delay
     */
    this.delay = 0;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/direction
     */
    this.direction = 'normal';
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/duration
     */
    this.duration = 'auto';
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/easing
     */
    this._easing = 'linear';
    this.easingFunction = linear;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/endDelay
     */
    this.endDelay = 0;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/fill
     */
    this.fill = 'auto';
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/iterationStart
     */
    this.iterationStart = 0;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/iterations
     */
    this.iterations = 1;
    this.currentIteration = null;
    this.progress = null;
  }
  return _createClass(AnimationEffectTiming, [{
    key: "easing",
    get: function get() {
      return this._easing;
    },
    set: function set(value) {
      this.easingFunction = parseEasingFunction(value);
      this._easing = value;
    }
  }]);
}();

/**
 * @example
  {
    translateY: [200, 300],
    scale: [1, 10],
  }

 * groups' length can be different, the following config should generate 3 frames:
  @example
  {
    translateY: [200, 300, 400],
    scale: [1, 10],
  }
 */
function convertToArrayForm(effectInput) {
  var normalizedEffectInput = [];
  for (var property in effectInput) {
    // skip reserved props
    if (property in ['easing', 'offset', 'composite']) {
      continue;
    }

    // @ts-ignore
    var values = effectInput[property];
    if (!Array.isArray(values)) {
      values = [values];
    }
    var numKeyframes = values.length;
    for (var i = 0; i < numKeyframes; i++) {
      if (!normalizedEffectInput[i]) {
        var keyframe = {};
        if ('offset' in effectInput) {
          keyframe.offset = Number(effectInput.offset);
        }
        if ('easing' in effectInput) {
          // @ts-ignore
          keyframe.easing = effectInput.easing;
        }
        if ('composite' in effectInput) {
          // @ts-ignore
          keyframe.composite = effectInput.composite;
        }
        normalizedEffectInput[i] = keyframe;
      }
      if (values[i] !== undefined && values[i] !== null) {
        normalizedEffectInput[i][property] = values[i];
      }
    }
  }
  normalizedEffectInput.sort(function (a, b) {
    return (a.computedOffset || 0) - (b.computedOffset || 0);
  });
  return normalizedEffectInput;
}
function normalizeKeyframes(effectInput, timing) {
  if (effectInput === null) {
    return [];
  }
  if (!Array.isArray(effectInput)) {
    effectInput = convertToArrayForm(effectInput);
  }
  var keyframes = effectInput.map(function (originalKeyframe) {
    var keyframe = {};
    if (timing !== null && timing !== void 0 && timing.composite) {
      // This will be auto if the composite operation specified on the effect is being used.
      // @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats
      keyframe.composite = 'auto';
    }
    for (var member in originalKeyframe) {
      var memberValue = originalKeyframe[member];
      if (member === 'offset') {
        if (memberValue !== null) {
          memberValue = Number(memberValue);
          if (!isFinite(memberValue)) throw new Error('Keyframe offsets must be numbers.');
          if (memberValue < 0 || memberValue > 1) throw new Error('Keyframe offsets must be between 0 and 1.');
          keyframe.computedOffset = memberValue;
        }
      } else if (member === 'composite') {
        // TODO: Support add & accumulate in KeyframeEffect.composite
        // @see https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/composite
        if (['replace', 'add', 'accumulate', 'auto'].indexOf(memberValue) === -1) {
          throw new Error("".concat(memberValue, " compositing is not supported"));
        }
      } else ;

      // assign to keyframe, no need to parse shorthand value
      keyframe[member] = memberValue;
    }
    if (keyframe.offset === undefined) {
      keyframe.offset = null;
    }
    if (keyframe.easing === undefined) {
      // override with timing.easing
      keyframe.easing = (timing === null || timing === void 0 ? void 0 : timing.easing) || 'linear';
    }
    if (keyframe.composite === undefined) {
      keyframe.composite = 'auto';
    }
    return keyframe;
  });
  var everyFrameHasOffset = true;
  var previousOffset = -Infinity;
  for (var i = 0; i < keyframes.length; i++) {
    var offset = keyframes[i].offset;
    if (!util.isNil(offset)) {
      if (offset < previousOffset) {
        throw new TypeError('Keyframes are not loosely sorted by offset. Sort or specify offsets.');
      }
      previousOffset = offset;
    } else {
      everyFrameHasOffset = false;
    }
  }
  keyframes = keyframes.filter(function (keyframe) {
    return Number(keyframe.offset) >= 0 && Number(keyframe.offset) <= 1;
  });
  function spaceKeyframes() {
    var _keyframes$offset;
    var _keyframes = keyframes,
      length = _keyframes.length;
    keyframes[length - 1].computedOffset = Number((_keyframes$offset = keyframes[length - 1].offset) !== null && _keyframes$offset !== void 0 ? _keyframes$offset : 1);
    if (length > 1) {
      var _keyframes$0$offset;
      keyframes[0].computedOffset = Number((_keyframes$0$offset = keyframes[0].offset) !== null && _keyframes$0$offset !== void 0 ? _keyframes$0$offset : 0);
    }
    var previousIndex = 0;
    var previousOffset = Number(keyframes[0].computedOffset);
    for (var _i = 1; _i < length; _i++) {
      var _offset = keyframes[_i].computedOffset;
      if (!util.isNil(_offset) && !util.isNil(previousOffset)) {
        for (var j = 1; j < _i - previousIndex; j++) keyframes[previousIndex + j].computedOffset = previousOffset + (Number(_offset) - previousOffset) * j / (_i - previousIndex);
        previousIndex = _i;
        previousOffset = Number(_offset);
      }
    }
  }
  if (!everyFrameHasOffset) spaceKeyframes();
  return keyframes;
}

var fills = 'backwards|forwards|both|none'.split('|');
var directions = 'reverse|alternate|alternate-reverse'.split('|');
function makeTiming(timingInput, forGroup) {
  var timing = new AnimationEffectTiming();
  if (forGroup) {
    timing.fill = 'both';
    timing.duration = 'auto';
  }
  if (typeof timingInput === 'number' && !isNaN(timingInput)) {
    timing.duration = timingInput;
  } else if (timingInput !== undefined) {
    Object.keys(timingInput).forEach(function (property) {
      if (timingInput[property] !== undefined && timingInput[property] !== null && timingInput[property] !== 'auto') {
        if (typeof timing[property] === 'number' || property === 'duration') {
          if (typeof timingInput[property] !== 'number' || isNaN(timingInput[property])) {
            return;
          }
        }
        if (property === 'fill' && fills.indexOf(timingInput[property]) === -1) {
          return;
        }
        if (property === 'direction' && directions.indexOf(timingInput[property]) === -1) {
          return;
        }
        // @ts-ignore
        timing[property] = timingInput[property];
      }
    });
  }
  return timing;
}
function normalizeTimingInput(timingInput, forGroup) {
  timingInput = numericTimingToObject(timingInput !== null && timingInput !== void 0 ? timingInput : {
    duration: 'auto'
  });
  return makeTiming(timingInput, forGroup);
}
function numericTimingToObject(timingInput) {
  if (typeof timingInput === 'number') {
    if (isNaN(timingInput)) {
      timingInput = {
        duration: 'auto'
      };
    } else {
      timingInput = {
        duration: timingInput
      };
    }
  }
  return timingInput;
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect
 * @example
  const circleDownKeyframes = new KeyframeEffect(
    circle, // element to animate
    [
      { transform: 'translateY(0)' }, // keyframe
      { transform: 'translateY(100)' } // keyframe
    ],
    { duration: 3000, fill: 'forwards' } // keyframe options
  );
 *
 */
var KeyframeEffect = /*#__PURE__*/function () {
  // pseudoElement: string | null;

  function KeyframeEffect(target, effectInput, timingInput) {
    var _this = this;
    _classCallCheck(this, KeyframeEffect);
    this.composite = 'replace';
    this.iterationComposite = 'replace';
    this.target = target;
    this.timing = normalizeTimingInput(timingInput, false);
    this.timing.effect = this;
    this.timing.activeDuration = calculateActiveDuration(this.timing);
    this.timing.endTime = Math.max(0, this.timing.delay + this.timing.activeDuration + this.timing.endDelay);
    this.normalizedKeyframes = normalizeKeyframes(effectInput, this.timing);
    this.interpolations = convertEffectInput(this.normalizedKeyframes, this.timing, this.target);

    // 不支持 proxy 时降级成 this.timing
    var Proxy = gLite.runtime.globalThis.Proxy;
    this.computedTiming = Proxy ? new Proxy(this.timing, {
      get: function get(target, prop) {
        if (prop === 'duration') {
          return target.duration === 'auto' ? 0 : target.duration;
        }
        if (prop === 'fill') {
          return target.fill === 'auto' ? 'none' : target.fill;
        }
        if (prop === 'localTime') {
          return _this.animation && _this.animation.currentTime || null;
        }
        if (prop === 'currentIteration') {
          if (!_this.animation || _this.animation.playState !== 'running') {
            return null;
          }
          return target.currentIteration || 0;
        }
        if (prop === 'progress') {
          if (!_this.animation || _this.animation.playState !== 'running') {
            return null;
          }
          return target.progress || 0;
        }
        return target[prop];
      },
      set: function set() {
        return true;
      }
    }) : this.timing;
  }
  return _createClass(KeyframeEffect, [{
    key: "applyInterpolations",
    value: function applyInterpolations() {
      this.interpolations(this.target, Number(this.timeFraction));
    }
  }, {
    key: "update",
    value: function update(localTime) {
      if (localTime === null) {
        return false;
      }
      this.timeFraction = calculateIterationProgress(this.timing.activeDuration, localTime, this.timing);
      return this.timeFraction !== null;
    }
  }, {
    key: "getKeyframes",
    value: function getKeyframes() {
      return this.normalizedKeyframes;
    }
  }, {
    key: "setKeyframes",
    value: function setKeyframes(keyframes) {
      this.normalizedKeyframes = normalizeKeyframes(keyframes);
    }
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getComputedTiming
     */
  }, {
    key: "getComputedTiming",
    value: function getComputedTiming() {
      return this.computedTiming;
    }
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getTiming
     */
  }, {
    key: "getTiming",
    value: function getTiming() {
      return this.timing;
    }
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/updateTiming
     */
  }, {
    key: "updateTiming",
    value: function updateTiming(timing) {
      var _this2 = this;
      Object.keys(timing || {}).forEach(function (name) {
        _this2.timing[name] = timing[name];
      });
    }
  }]);
}();

function compareAnimations(leftAnimation, rightAnimation) {
  return Number(leftAnimation.id) - Number(rightAnimation.id);
}

/**
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/web-animations-js/index.d.ts
 */
var AnimationTimeline = /*#__PURE__*/function () {
  function AnimationTimeline(document) {
    var _this = this;
    _classCallCheck(this, AnimationTimeline);
    /**
     * all active animations
     */
    this.animations = [];
    this.ticking = false;
    this.timelineTicking = false;
    this.hasRestartedThisFrame = false;
    this.animationsWithPromises = [];
    this.inTick = false;
    this.pendingEffects = [];
    this.currentTime = null;
    this.rafId = 0;
    this.rafCallbacks = [];
    this.webAnimationsNextTick = function (t) {
      _this.currentTime = t;
      _this.discardAnimations();
      if (_this.animations.length === 0) {
        _this.timelineTicking = false;
      } else {
        _this.requestAnimationFrame(_this.webAnimationsNextTick);
      }
    };
    this.processRafCallbacks = function (t) {
      var processing = _this.rafCallbacks;
      _this.rafCallbacks = [];
      if (t < Number(_this.currentTime)) t = Number(_this.currentTime);
      _this.animations.sort(compareAnimations);
      _this.animations = _this.tick(t, true, _this.animations)[0];
      processing.forEach(function (entry) {
        entry[1](t);
      });
      _this.applyPendingEffects();
    };
    this.document = document;
  }
  return _createClass(AnimationTimeline, [{
    key: "getAnimations",
    value: function getAnimations() {
      this.discardAnimations();
      return this.animations.slice();
    }
  }, {
    key: "isTicking",
    value: function isTicking() {
      return this.inTick;
    }
  }, {
    key: "play",
    value: function play(target, keyframes, options) {
      var effect = new KeyframeEffect(target, keyframes, options);
      var animation = new Animation(effect, this);
      this.animations.push(animation);
      this.restartWebAnimationsNextTick();
      animation.updatePromises();
      animation.play();
      animation.updatePromises();
      return animation;
    }

    // RAF is supposed to be the last script to occur before frame rendering but not
    // all browsers behave like this. This function is for synchonously updating an
    // animation's effects whenever its state is mutated by script to work around
    // incorrect script execution ordering by the browser.
  }, {
    key: "applyDirtiedAnimation",
    value: function applyDirtiedAnimation(animation) {
      var _this2 = this;
      if (this.inTick) {
        return;
      }
      // update active animations in displayobject
      animation.markTarget();
      var animations = animation.targetAnimations();
      animations.sort(compareAnimations);

      // clear inactive animations
      var inactiveAnimations = this.tick(Number(this.currentTime), false, animations.slice())[1];
      inactiveAnimations.forEach(function (animation) {
        var index = _this2.animations.indexOf(animation);
        if (index !== -1) {
          _this2.animations.splice(index, 1);
        }
      });
      this.applyPendingEffects();
    }
  }, {
    key: "restart",
    value: function restart() {
      if (!this.ticking) {
        this.ticking = true;
        this.requestAnimationFrame(function () {});
        this.hasRestartedThisFrame = true;
      }
      return this.hasRestartedThisFrame;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.document.defaultView.cancelAnimationFrame(this.frameId);
    }
  }, {
    key: "applyPendingEffects",
    value: function applyPendingEffects() {
      this.pendingEffects.forEach(function (effect) {
        effect === null || effect === void 0 || effect.applyInterpolations();
      });
      this.pendingEffects = [];
    }
  }, {
    key: "updateAnimationsPromises",
    value: function updateAnimationsPromises() {
      this.animationsWithPromises = this.animationsWithPromises.filter(function (animation) {
        return animation.updatePromises();
      });
    }
  }, {
    key: "discardAnimations",
    value: function discardAnimations() {
      this.updateAnimationsPromises();
      this.animations = this.animations.filter(function (animation) {
        return animation.playState !== 'finished' && animation.playState !== 'idle';
      });
    }
  }, {
    key: "restartWebAnimationsNextTick",
    value: function restartWebAnimationsNextTick() {
      if (!this.timelineTicking) {
        this.timelineTicking = true;
        this.requestAnimationFrame(this.webAnimationsNextTick);
      }
    }
  }, {
    key: "rAF",
    value: function rAF(f) {
      var id = this.rafId++;
      if (this.rafCallbacks.length === 0) {
        this.frameId = this.document.defaultView.requestAnimationFrame(this.processRafCallbacks);
      }
      this.rafCallbacks.push([id, f]);
      return id;
    }
  }, {
    key: "requestAnimationFrame",
    value: function requestAnimationFrame(f) {
      var _this3 = this;
      return this.rAF(function (x) {
        _this3.updateAnimationsPromises();
        f(x);
        _this3.updateAnimationsPromises();
      });
    }
  }, {
    key: "tick",
    value: function tick(t, isAnimationFrame, updatingAnimations) {
      var _this4 = this,
        _this$pendingEffects,
        _this$pendingEffects2;
      this.inTick = true;
      this.hasRestartedThisFrame = false;
      this.currentTime = t;
      this.ticking = false;
      var newPendingClears = [];
      var newPendingEffects = [];
      var activeAnimations = [];
      var inactiveAnimations = [];
      updatingAnimations.forEach(function (animation) {
        animation.tick(t, isAnimationFrame);
        if (!animation._inEffect) {
          newPendingClears.push(animation.effect);
          animation.unmarkTarget();
        } else {
          newPendingEffects.push(animation.effect);
          animation.markTarget();
        }
        if (animation._needsTick) _this4.ticking = true;
        var alive = animation._inEffect || animation._needsTick;
        animation._inTimeline = alive;
        if (alive) {
          activeAnimations.push(animation);
        } else {
          inactiveAnimations.push(animation);
        }
      });
      (_this$pendingEffects = this.pendingEffects).push.apply(_this$pendingEffects, newPendingClears);
      (_this$pendingEffects2 = this.pendingEffects).push.apply(_this$pendingEffects2, newPendingEffects);
      if (this.ticking) this.requestAnimationFrame(function () {});
      this.inTick = false;
      return [activeAnimations, inactiveAnimations];
    }
  }]);
}();

gLite.runtime.EasingFunction = parseEasingFunction;
gLite.runtime.AnimationTimeline = AnimationTimeline;

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
      this.relElevation = gLite.getAngle(elevation);
      this.relAzimuth = gLite.getAngle(azimuth);
      this.relRoll = gLite.getAngle(roll);
      this.elevation += this.relElevation;
      this.azimuth += this.relAzimuth;
      this.roll += this.relRoll;
      if (this.type === gLite.CameraType.EXPLORING) {
        var rotX = glMatrix.quat.setAxisAngle(glMatrix.quat.create(), [1, 0, 0], gLite.deg2rad((this.rotateWorld ? 1 : -1) * this.relElevation));
        var rotY = glMatrix.quat.setAxisAngle(glMatrix.quat.create(), [0, 1, 0], gLite.deg2rad((this.rotateWorld ? 1 : -1) * this.relAzimuth));
        var rotZ = glMatrix.quat.setAxisAngle(glMatrix.quat.create(), [0, 0, 1], gLite.deg2rad(this.relRoll));
        var rotQ = glMatrix.quat.multiply(glMatrix.quat.create(), rotY, rotX);
        rotQ = glMatrix.quat.multiply(glMatrix.quat.create(), rotQ, rotZ);
        var rotMatrix = glMatrix.mat4.fromQuat(glMatrix.mat4.create(), rotQ);
        glMatrix.mat4.translate(this.matrix, this.matrix, [0, 0, -this.distance]);
        glMatrix.mat4.multiply(this.matrix, this.matrix, rotMatrix);
        glMatrix.mat4.translate(this.matrix, this.matrix, [0, 0, this.distance]);
      } else {
        if (Math.abs(this.elevation) > 90) {
          return this;
        }
        this.computeMatrix();
      }
      this._getAxes();
      if (this.type === gLite.CameraType.ORBITING || this.type === gLite.CameraType.EXPLORING) {
        this._getPosition();
      } else if (this.type === gLite.CameraType.TRACKING) {
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
      var coords = gLite.createVec3(tx, ty, 0);
      var pos = glMatrix.vec3.clone(this.position);
      glMatrix.vec3.add(pos, pos, glMatrix.vec3.scale(glMatrix.vec3.create(), this.right, coords[0]));
      glMatrix.vec3.add(pos, pos, glMatrix.vec3.scale(glMatrix.vec3.create(), this.up, coords[1]));
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
      var pos = glMatrix.vec3.clone(this.position);
      var step = value * this.dollyingStep;
      var updatedDistance = this.distance + value * this.dollyingStep;

      // 限制视点距离范围
      step = Math.max(Math.min(updatedDistance, this.maxDistance), this.minDistance) - this.distance;
      pos[0] += step * n[0];
      pos[1] += step * n[1];
      pos[2] += step * n[2];
      this._setPosition(pos);
      if (this.type === gLite.CameraType.ORBITING || this.type === gLite.CameraType.EXPLORING) {
        // 重新计算视点距离
        this._getDistance();
      } else if (this.type === gLite.CameraType.TRACKING) {
        // 保持视距，移动视点位置
        glMatrix.vec3.add(this.focalPoint, pos, this.distanceVector);
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
      var camera = new gLite.runtime.CameraContribution();
      camera.setType(this.type, undefined);
      camera.setPosition(position[0], (_position$ = position[1]) !== null && _position$ !== void 0 ? _position$ : this.position[1], (_position$2 = position[2]) !== null && _position$2 !== void 0 ? _position$2 : this.position[2]);
      camera.setFocalPoint(focalPoint[0], (_focalPoint$ = focalPoint[1]) !== null && _focalPoint$ !== void 0 ? _focalPoint$ : this.focalPoint[1], (_focalPoint$2 = focalPoint[2]) !== null && _focalPoint$2 !== void 0 ? _focalPoint$2 : this.focalPoint[2]);
      camera.setRoll(roll !== null && roll !== void 0 ? roll : this.roll);
      camera.setZoom(zoom !== null && zoom !== void 0 ? zoom : this.zoom);
      var landmark = {
        name: name,
        matrix: glMatrix.mat4.clone(camera.getWorldTransform()),
        right: glMatrix.vec3.clone(camera.right),
        up: glMatrix.vec3.clone(camera.up),
        forward: glMatrix.vec3.clone(camera.forward),
        position: glMatrix.vec3.clone(camera.getPosition()),
        focalPoint: glMatrix.vec3.clone(camera.getFocalPoint()),
        distanceVector: glMatrix.vec3.clone(camera.getDistanceVector()),
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
      var landmark = util.isString(name) ? this.landmarks.find(function (l) {
        return l.name === name;
      }) : name;
      if (landmark) {
        var _ref = util.isNumber(options) ? {
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
        var easingFunc = easingFunction || gLite.runtime.EasingFunction(easing);
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
          var interFocalPoint = glMatrix.vec3.create();
          var interPosition = glMatrix.vec3.create();
          var interZoom = 1;
          var interRoll = 0;
          glMatrix.vec3.lerp(interFocalPoint, _this2.focalPoint, destFocalPoint, t);
          glMatrix.vec3.lerp(interPosition, _this2.position, destPosition, t);
          interRoll = _this2.roll * (1 - t) + destRoll * t;
          interZoom = _this2.zoom * (1 - t) + destZoom * t;
          _this2.setFocalPoint(interFocalPoint);
          _this2.setPosition(interPosition);
          _this2.setRoll(interRoll);
          _this2.setZoom(interZoom);
          var dist = glMatrix.vec3.dist(interFocalPoint, destFocalPoint) + glMatrix.vec3.dist(interPosition, destPosition);
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
}(gLite.Camera);

gLite.runtime.CameraContribution = AdvancedCamera;

var _excluded$1 = ["clippingRegion", "beforeDrawImage", "afterDrawImage", "ignoreElements"];
var ImageExporter = /*#__PURE__*/function () {
  function ImageExporter(options) {
    _classCallCheck(this, ImageExporter);
    this.options = options;
  }

  /**
   * return a HTMLCanvasElement which you can call `toDataURL` later
   *
   * @example
   * const canvas = await exporter.toCanvas();
   * canvas.toDataURL(); // data:
   */
  return _createClass(ImageExporter, [{
    key: "toCanvas",
    value: (function () {
      var _toCanvas = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var options,
          _this$options$canvas$,
          width,
          height,
          doc,
          dpr,
          _options$clippingRegi,
          clippingRegion,
          beforeDrawImage,
          afterDrawImage,
          _ignoreElements,
          rest,
          dataURL,
          image,
          sx,
          sy,
          sWidth,
          sHeight,
          canvas,
          context,
          sourceImageMultipiler,
          $dom,
          _canvas,
          _image,
          _args = arguments;
        return _regeneratorRuntime().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              _this$options$canvas$ = this.options.canvas.getConfig(), width = _this$options$canvas$.width, height = _this$options$canvas$.height, doc = _this$options$canvas$.document;
              dpr = this.options.canvas.getContextService().getDPR();
              _options$clippingRegi = options.clippingRegion, clippingRegion = _options$clippingRegi === void 0 ? new gLite.Rectangle(0, 0, width, height) : _options$clippingRegi, beforeDrawImage = options.beforeDrawImage, afterDrawImage = options.afterDrawImage, _ignoreElements = options.ignoreElements, rest = _objectWithoutProperties(options, _excluded$1);
              _context.next = 1;
              return this.toDataURL(rest);
            case 1:
              dataURL = _context.sent;
              _context.next = 2;
              return this.getOrCreateImage(dataURL);
            case 2:
              image = _context.sent;
              sx = clippingRegion.x, sy = clippingRegion.y, sWidth = clippingRegion.width, sHeight = clippingRegion.height; // TODO: provide custom `createCanvas` method like `createImage`
              canvas = (doc || document).createElement('canvas');
              canvas.width = sWidth * dpr;
              canvas.height = sHeight * dpr;
              context = canvas.getContext('2d');
              context.scale(dpr, dpr);
              if (beforeDrawImage) {
                beforeDrawImage(context);
              }
              sourceImageMultipiler = image.width > width ? dpr : 1;
              context.drawImage(image, sx * sourceImageMultipiler, sy * sourceImageMultipiler, sWidth * sourceImageMultipiler, sHeight * sourceImageMultipiler, 0, 0, sWidth, sHeight);
              if (this.isSVG()) {
                _context.next = 5;
                break;
              }
              $dom = this.options.canvas.getContextService().getDomElement();
              if (!($dom && $dom.parentElement)) {
                _context.next = 5;
                break;
              }
              _context.next = 3;
              return html2canvas($dom.parentElement, {
                backgroundColor: null,
                width: width,
                height: height,
                x: 0,
                y: 0,
                ignoreElements: function ignoreElements(element) {
                  if (element === $dom) {
                    return true;
                  }
                  return _ignoreElements && _ignoreElements(element);
                }
              });
            case 3:
              _canvas = _context.sent;
              _context.next = 4;
              return this.getOrCreateImage(_canvas.toDataURL());
            case 4:
              _image = _context.sent;
              context.drawImage(_image, sx * sourceImageMultipiler, sy * sourceImageMultipiler, sWidth * sourceImageMultipiler, sHeight * sourceImageMultipiler, 0, 0, sWidth, sHeight);
            case 5:
              if (afterDrawImage) {
                afterDrawImage(context);
              }
              return _context.abrupt("return", canvas);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function toCanvas() {
        return _toCanvas.apply(this, arguments);
      }
      return toCanvas;
    }()
    /**
     * generate data url for the whole viewport
     */
    )
  }, {
    key: "toDataURL",
    value: (function () {
      var _toDataURL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var options,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              options = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
              return _context2.abrupt("return", this.options.canvas.getContextService().toDataURL(options));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function toDataURL() {
        return _toDataURL.apply(this, arguments);
      }
      return toDataURL;
    }())
  }, {
    key: "isSVG",
    value: function isSVG() {
      return gLite.isBrowser && this.options.canvas.getContextService().getDomElement() instanceof SVGSVGElement;
    }
  }, {
    key: "toSVGDataURL",
    value: function () {
      var _toSVGDataURL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function (_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!this.isSVG()) {
                _context3.next = 1;
                break;
              }
              return _context3.abrupt("return", this.toDataURL());
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function toSVGDataURL() {
        return _toSVGDataURL.apply(this, arguments);
      }
      return toSVGDataURL;
    }()
  }, {
    key: "downloadImage",
    value: function downloadImage(options) {
      var _this$options$canvas$2 = this.options.canvas.getConfig(),
        doc = _this$options$canvas$2.document;

      // retrieve context at runtime
      var defaultFilename = this.options.defaultFilename;
      var dataURL = options.dataURL,
        _options$name = options.name,
        name = _options$name === void 0 ? defaultFilename || 'g' : _options$name;
      var mimeType = dataURL.substring(dataURL.indexOf(':') + 1, dataURL.indexOf(';'));
      var suffix = mimeType.split('/')[1];

      // g-svg only support .svg
      var isSVG = dataURL.startsWith('data:image/svg');
      var fileName = "".concat(name, ".").concat(isSVG ? 'svg' : suffix);
      var link = (doc || document).createElement('a');
      if (isSVG) {
        link.addEventListener('click', function () {
          link.download = fileName;
          link.href = dataURL;
        });
      } else if (window.Blob && window.URL) {
        var arr = dataURL.split(',');
        var mime = '';
        if (arr && arr.length > 0) {
          var match = arr[0].match(/:(.*?);/);
          // eslint-disable-next-line prefer-destructuring
          if (match && match.length >= 2) mime = match[1];
        }
        var bstr = atob(arr[1]);
        var n = bstr.length;
        var u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        var blobObj = new Blob([u8arr], {
          type: mime
        });

        // account for IE
        // @see https://stackoverflow.com/a/41434373
        if (gLite.runtime.globalThis.navigator.msSaveBlob) {
          gLite.runtime.globalThis.navigator.msSaveBlob(blobObj, fileName);
        } else {
          link.addEventListener('click', function () {
            link.download = fileName;
            link.href = window.URL.createObjectURL(blobObj);
          });
        }
      }

      // trigger click
      if (link.click) {
        link.click();
      } else {
        var e = (doc || document).createEvent('MouseEvents');
        e.initEvent('click', false, false);
        link.dispatchEvent(e);
      }
    }
  }, {
    key: "getOrCreateImage",
    value: function getOrCreateImage(src) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        // @see https://github.com/antvis/g/issues/938
        var image = _this.options.canvas.getConfig().createImage();
        if (image) {
          image.onload = function () {
            resolve(image);
          };
          image.onerror = function (ev) {
            reject(ev);
          };
          image.crossOrigin = 'Anonymous';
          image.src = src;
        }
      });
    }
  }]);
}();

/**
 * 计算贴图单元大小
 *
 * @param size 元素大小
 * @param padding 圆点间隔
 * @param isStagger 是否交错
 * @reutrn 返回贴图单元大小
 */
function getUnitPatternSize(size, padding, isStagger) {
  // 如果交错, unitSize 放大两倍
  var unitSize = size + padding;
  return isStagger ? unitSize * 2 : unitSize;
}

/**
 * 计算有交错情况的元素坐标
 *
 * @param unitSize 贴图单元大小
 * @param isStagger 是否交错
 * @reutrn 元素中心坐标 x,y 数组集合
 */
function getSymbolsPosition(unitSize, isStagger) {
  // 如果交错, 交错绘制 dot
  var symbolsPos = isStagger ? [[unitSize * (1 / 4), unitSize * (1 / 4)], [unitSize * (3 / 4), unitSize * (3 / 4)]] : [[unitSize * (1 / 2), unitSize * (1 / 2)]];
  return symbolsPos;
}

var defaultDotPatternCfg = {
  size: 6,
  padding: 2,
  backgroundColor: 'transparent',
  opacity: 1,
  fill: '#fff',
  fillOpacity: 1,
  stroke: 'transparent',
  strokeOpacity: 1,
  lineWidth: 0,
  isStagger: true
};
function dots(cfg) {
  var dotCfg = _objectSpread(_objectSpread({}, defaultDotPatternCfg), cfg);
  var size = dotCfg.size,
    padding = dotCfg.padding,
    isStagger = dotCfg.isStagger,
    backgroundColor = dotCfg.backgroundColor,
    backgroundOpacity = dotCfg.backgroundOpacity,
    opacity = dotCfg.opacity,
    fill = dotCfg.fill,
    fillOpacity = dotCfg.fillOpacity,
    lineWidth = dotCfg.lineWidth,
    stroke = dotCfg.stroke,
    strokeOpacity = dotCfg.strokeOpacity;

  // 计算 画布大小，dots的位置
  var unitSize = getUnitPatternSize(size, padding, isStagger);
  var dots = getSymbolsPosition(unitSize, isStagger);
  var background = new gLite.Rect({
    style: {
      width: unitSize,
      height: unitSize,
      fill: backgroundColor,
      opacity: 1,
      fillOpacity: backgroundOpacity
    }
  });
  var _iterator = _createForOfIteratorHelper(dots),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        cx = _step$value[0],
        cy = _step$value[1];
      var circle = new gLite.Circle({
        style: {
          opacity: opacity,
          fill: fill,
          fillOpacity: fillOpacity,
          cx: cx,
          cy: cy,
          r: size / 2,
          lineWidth: lineWidth,
          stroke: stroke,
          strokeOpacity: strokeOpacity
        }
      });
      background.appendChild(circle);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return background;
}

/**
 * linePattern 的 默认配置
 */
var defaultLinePatternCfg = {
  spacing: 5,
  opacity: 1,
  backgroundColor: 'transparent',
  backgroundOpacity: 1,
  strokeOpacity: 1,
  stroke: '#fff',
  lineWidth: 2
};

/**
 * 创建 linePattern
 */
function lines(cfg) {
  var lineCfg = _objectSpread(_objectSpread({}, defaultLinePatternCfg), cfg);
  var spacing = lineCfg.spacing,
    lineWidth = lineCfg.lineWidth,
    backgroundColor = lineCfg.backgroundColor,
    backgroundOpacity = lineCfg.backgroundOpacity,
    opacity = lineCfg.opacity,
    stroke = lineCfg.stroke,
    strokeOpacity = lineCfg.strokeOpacity;

  // 计算 pattern 画布的大小， path 所需的 d
  var width = spacing + lineWidth || 1;
  var height = spacing + lineWidth || 1;
  var d = "\n            M 0 0 L ".concat(width, " 0\n            M 0 ").concat(height, " L ").concat(width, " ").concat(height, "\n            ");
  var background = new gLite.Rect({
    style: {
      width: width,
      height: height,
      fill: backgroundColor,
      opacity: 1,
      fillOpacity: backgroundOpacity
    }
  });
  var path = new gLite.Path({
    style: {
      d: d,
      opacity: opacity,
      stroke: stroke,
      strokeOpacity: strokeOpacity,
      fillOpacity: 1,
      lineWidth: lineWidth
    }
  });
  background.appendChild(path);
  return background;
}

/**
 * squarePattern 的 默认配置
 */
var defaultSquarePatternCfg = {
  size: 6,
  padding: 1,
  isStagger: true,
  backgroundColor: 'transparent',
  opacity: 1,
  fill: '#fff',
  fillOpacity: 1,
  stroke: 'transparent',
  lineWidth: 0
};

/**
 * 创建 squarePattern
 */
function squares(cfg) {
  var squareCfg = _objectSpread(_objectSpread({}, defaultSquarePatternCfg), cfg);
  var size = squareCfg.size,
    padding = squareCfg.padding,
    isStagger = squareCfg.isStagger,
    backgroundColor = squareCfg.backgroundColor,
    backgroundOpacity = squareCfg.backgroundOpacity,
    opacity = squareCfg.opacity,
    fill = squareCfg.fill,
    fillOpacity = squareCfg.fillOpacity,
    stroke = squareCfg.stroke,
    strokeOpacity = squareCfg.strokeOpacity,
    lineWidth = squareCfg.lineWidth;

  // 计算 画布大小，squares的位置
  var unitSize = getUnitPatternSize(size, padding, isStagger);
  var squares = getSymbolsPosition(unitSize, isStagger); // 计算方法与 dots 一样

  var background = new gLite.Rect({
    style: {
      width: unitSize,
      height: unitSize,
      fill: backgroundColor,
      opacity: 1,
      fillOpacity: backgroundOpacity
    }
  });
  var _iterator = _createForOfIteratorHelper(squares),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        x = _step$value[0],
        y = _step$value[1];
      var square = new gLite.Rect({
        style: {
          opacity: opacity,
          fill: fill,
          fillOpacity: fillOpacity,
          x: x - size / 2,
          y: y - size / 2,
          width: size,
          height: size,
          lineWidth: lineWidth,
          stroke: stroke,
          strokeOpacity: strokeOpacity
        }
      });
      background.appendChild(square);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return background;
}

var _excluded = ["body", "startHead", "endHead", "startHeadOffset", "endHeadOffset"],
  _excluded2 = ["body", "startHead", "endHead", "startHeadOffset", "endHeadOffset"],
  _excluded3 = ["body", "startHead", "endHead", "startHeadOffset", "endHeadOffset"];
/**
 * support 3 types of arrow line:
 * 1. Line
 * 2. Polyline
 * 3. Path
 *
 * support 2 types of arrow head:
 * 1. default(Path)
 * 2. custom
 */
var Arrow = /*#__PURE__*/function (_CustomElement) {
  function Arrow(config) {
    var _this;
    _classCallCheck(this, Arrow);
    _this = _callSuper(this, Arrow, [_objectSpread(_objectSpread({}, config), {}, {
      type: Arrow.tag
    })]);
    var _this$attributes = _this.attributes,
      body = _this$attributes.body,
      startHead = _this$attributes.startHead,
      endHead = _this$attributes.endHead;
      _this$attributes.startHeadOffset;
      _this$attributes.endHeadOffset;
      var rest = _objectWithoutProperties(_this$attributes, _excluded);
    if (!body) {
      throw new Error("Arrow's body is required");
    }

    // append arrow body
    _this.body = body;
    _this.appendChild(_this.body);
    _this.handleBodyAttributeChanged(_this.body);
    if (startHead) {
      _this.appendArrowHead(_this.getArrowHeadType(startHead), true);
    }
    if (endHead) {
      _this.appendArrowHead(_this.getArrowHeadType(endHead), false);
    }
    _this.applyArrowStyle(rest, [_this.body, _this.startHead, _this.endHead]);
    return _this;
  }
  _inherits(Arrow, _CustomElement);
  return _createClass(Arrow, [{
    key: "handleBodyAttributeChanged",
    value: function handleBodyAttributeChanged(body) {
      var _this2 = this;
      body.addEventListener(gLite.ElementEvent.ATTR_MODIFIED, function (e) {
        var attrName = e.attrName;
        if (attrName === 'x1' || attrName === 'y1') {
          if (_this2.startHead) {
            _this2.transformArrowHead(_this2.startHead, true);
          }
        } else if (attrName === 'x2' || attrName === 'y2') {
          if (_this2.endHead) {
            _this2.transformArrowHead(_this2.endHead, false);
          }
        }
        // const { nodeName } = body;
        // if (nodeName === Shape.LINE) {
        //   body
        // }
      });
    }
  }, {
    key: "getBody",
    value: function getBody() {
      return this.body;
    }
  }, {
    key: "getStartHead",
    value: function getStartHead() {
      return this.startHead;
    }
  }, {
    key: "getEndHead",
    value: function getEndHead() {
      return this.endHead;
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'opacity' || name === 'strokeOpacity' || name === 'stroke' || name === 'lineWidth' || name === 'increasedLineWidthForHitTesting') {
        this.applyArrowStyle(_defineProperty({}, name, newValue), [this.body, this.startHead, this.endHead]);
      } else if (name === 'startHead' || name === 'endHead') {
        var isStart = name === 'startHead';
        // delete existed arrow head first
        this.destroyArrowHead(isStart);
        if (newValue) {
          var _this$attributes2 = this.attributes;
            _this$attributes2.body;
            _this$attributes2.startHead;
            _this$attributes2.endHead;
            _this$attributes2.startHeadOffset;
            _this$attributes2.endHeadOffset;
            var rest = _objectWithoutProperties(_this$attributes2, _excluded2);
          // append new arrow head

          this.appendArrowHead(this.getArrowHeadType(newValue), isStart);
          this.applyArrowStyle(rest, [isStart ? this.startHead : this.endHead]);
        }
      } else if (name === 'body') {
        var _this$attributes3 = this.attributes;
          _this$attributes3.body;
          _this$attributes3.startHead;
          _this$attributes3.endHead;
          _this$attributes3.startHeadOffset;
          _this$attributes3.endHeadOffset;
          var _rest = _objectWithoutProperties(_this$attributes3, _excluded3);
        this.body.destroy();
        // @ts-ignore
        this.body = newValue;
        this.appendChild(this.body);
        this.applyArrowStyle(_rest, [this.body]);
      } else if (name === 'startHeadOffset') {
        this.moveArrowHeadAlongTangent(newValue, true);
      } else if (name === 'endHeadOffset') {
        this.moveArrowHeadAlongTangent(newValue, false);
      }
    }
  }, {
    key: "getArrowHeadType",
    value: function getArrowHeadType(head) {
      if (typeof head === 'boolean') {
        return 'default';
      }
      return 'custom';
    }
  }, {
    key: "appendArrowHead",
    value: function appendArrowHead(type, isStart) {
      var head;
      if (type === 'default') {
        head = this.createDefaultArrowHead();
      } else {
        // @ts-ignore
        head = isStart ? this.attributes.startHead : this.attributes.endHead;
      }

      // set position & rotation
      this.transformArrowHead(head, isStart);

      // heads should display on top of body
      head.setAttribute('zIndex', 1);
      if (isStart) {
        this.startHead = head;
      } else {
        this.endHead = head;
      }
      this.appendChild(head);
      var offset = isStart ? this.attributes.startHeadOffset : this.attributes.endHeadOffset;
      if (offset) {
        this.moveArrowHeadAlongTangent(offset, isStart);
      }
    }

    /**
     * transform arrow head according to arrow line
     */
  }, {
    key: "transformArrowHead",
    value: function transformArrowHead(head, isStart) {
      var position = glMatrix.vec3.create();
      var rad = 0;
      var x1 = 0;
      var x2 = 0;
      var y1 = 0;
      var y2 = 0;
      var bodyType = this.body && this.body.nodeName;
      if (bodyType === gLite.Shape.LINE) {
        var _attributes = this.body.attributes,
          _x1 = _attributes.x1,
          _x2 = _attributes.x2,
          _y1 = _attributes.y1,
          _y2 = _attributes.y2;
        x1 = isStart ? _x2 : _x1;
        x2 = isStart ? _x1 : _x2;
        y1 = isStart ? _y2 : _y1;
        y2 = isStart ? _y1 : _y2;
      } else if (bodyType === gLite.Shape.POLYLINE) {
        var points = this.body.attributes.points;
        var length = points.length;
        x1 = isStart ? points[1][0] : points[length - 2][0];
        y1 = isStart ? points[1][1] : points[length - 2][1];
        x2 = isStart ? points[0][0] : points[length - 1][0];
        y2 = isStart ? points[0][1] : points[length - 1][1];
      } else if (bodyType === gLite.Shape.PATH) {
        var _this$getTangent = this.getTangent(this.body, isStart),
          _this$getTangent2 = _slicedToArray(_this$getTangent, 2),
          p1 = _this$getTangent2[0],
          p2 = _this$getTangent2[1];
        x1 = p1[0];
        y1 = p1[1];
        x2 = p2[0];
        y2 = p2[1];
      }
      var x = x1 - x2;
      var y = y1 - y2;
      rad = Math.atan2(y, x);
      position = glMatrix.vec3.fromValues(x2, y2, 0);
      if (isStart) {
        this.startHeadPosition = position;
        this.startHeadRad = rad;
      } else {
        this.endHeadPosition = position;
        this.endHeadRad = rad;
      }
      head.setLocalPosition(position);
      head.setLocalEulerAngles(rad * 180 / Math.PI + head.getLocalEulerAngles());
    }
  }, {
    key: "moveArrowHeadAlongTangent",
    value: function moveArrowHeadAlongTangent(offset, isStart) {
      var head = isStart ? this.startHead : this.endHead;
      if (head) {
        head.setLocalPosition(glMatrix.vec3.sub(glMatrix.vec3.create(), isStart ? this.startHeadPosition : this.endHeadPosition, glMatrix.vec3.fromValues(Math.cos(isStart ? this.startHeadRad : this.endHeadRad) * offset, Math.sin(isStart ? this.startHeadRad : this.endHeadRad) * offset, 0)));
      }

      // cut body
      if (this.body) ;
    }
  }, {
    key: "destroyArrowHead",
    value: function destroyArrowHead(isStart) {
      if (isStart && this.startHead) {
        this.startHead.destroy();
        this.startHead = undefined;
      }
      if (!isStart && this.endHead) {
        this.endHead.destroy();
        this.endHead = undefined;
      }
    }
  }, {
    key: "getTangent",
    value: function getTangent(path, isStart) {
      return isStart ? path.getStartTangent() : path.getEndTangent();
    }
  }, {
    key: "createDefaultArrowHead",
    value: function createDefaultArrowHead() {
      var _this$attributes4 = this.attributes,
        stroke = _this$attributes4.stroke,
        lineWidth = _this$attributes4.lineWidth;
      var sin = Math.sin,
        cos = Math.cos,
        PI = Math.PI;
      var width = 10 * cos(PI / 6);
      return new gLite.Path({
        style: {
          // draw an angle '<'
          d: "M".concat(width / 2, ",").concat(10 * sin(PI / 6), " L-").concat(width / 2, ",0 L").concat(width / 2, ",-").concat(10 * sin(PI / 6)),
          stroke: stroke,
          lineWidth: lineWidth,
          transformOrigin: 'center'
        }
      });
    }
  }, {
    key: "applyArrowStyle",
    value: function applyArrowStyle(attributes, objects) {
      var opacity = attributes.opacity,
        stroke = attributes.stroke,
        strokeOpacity = attributes.strokeOpacity,
        lineWidth = attributes.lineWidth,
        increasedLineWidthForHitTesting = attributes.increasedLineWidthForHitTesting;
      objects.forEach(function (shape) {
        if (shape) {
          if (!util.isNil(opacity)) {
            shape.style.opacity = opacity;
          }
          if (!util.isNil(stroke)) {
            shape.style.stroke = stroke;
          }
          if (!util.isNil(strokeOpacity)) {
            shape.style.strokeOpacity = strokeOpacity;
          }
          if (!util.isNil(lineWidth)) {
            shape.style.lineWidth = lineWidth;
          }
          if (!util.isNil(increasedLineWidthForHitTesting)) {
            shape.style.increasedLineWidthForHitTesting = increasedLineWidthForHitTesting;
          }
        }
      });
    }
  }]);
}(gLite.CustomElement);
Arrow.tag = 'arrow';
Arrow.PARSED_STYLE_LIST = new Set([].concat(_toConsumableArray(gLite.CustomElement.PARSED_STYLE_LIST), ['body', 'startHead', 'endHead', 'startHeadOffset', 'endHeadOffset', 'stroke', 'lineWidth', 'opacity', 'strokeOpacity']));

var PI = Math.PI;
var PI2 = PI * 2;
var mathSin = Math.sin;
var mathCos = Math.cos;
var mathACos = Math.acos;
var mathATan2 = Math.atan2;
// const mathAbs = Math.abs;
var mathSqrt = Math.sqrt;
var mathMax = Math.max;
var mathMin = Math.min;
var e = 1e-4;

// 注册 css 属性
var SECTOR_CSS_PROPERTY = [{
  name: 'sr',
  inherits: false,
  interpolable: true,
  syntax: gLite.PropertySyntax.LENGTH_PERCENTAGE
}, {
  name: 'sr0',
  inherits: false,
  interpolable: true,
  syntax: gLite.PropertySyntax.LENGTH_PERCENTAGE
}, {
  name: 'startAngle',
  inherits: false,
  interpolable: true,
  syntax: gLite.PropertySyntax.ANGLE
}, {
  name: 'endAngle',
  inherits: false,
  interpolable: true,
  syntax: gLite.PropertySyntax.ANGLE
}];
SECTOR_CSS_PROPERTY.forEach(function (property) {
  gLite.CSS.registerProperty(property);
});
var polarToCartesian = function polarToCartesian(centerX, centerY, radius, angleInRadian) {
  return {
    x: centerX + radius * Math.cos(angleInRadian),
    y: centerY + radius * Math.sin(angleInRadian)
  };
};
function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var dx10 = x1 - x0;
  var dy10 = y1 - y0;
  var dx32 = x3 - x2;
  var dy32 = y3 - y2;
  var t = dy32 * dx10 - dx32 * dy10;
  if (t * t < e) {
    return;
  }
  t = (dx32 * (y0 - y2) - dy32 * (x0 - x2)) / t;
  return [x0 + t * dx10, y0 + t * dy10];
}

// Compute perpendicular offset line of length rc.
function computeCornerTangents(x0, y0, x1, y1, radius, cr, clockwise) {
  var x01 = x0 - x1;
  var y01 = y0 - y1;
  var lo = (clockwise ? cr : -cr) / mathSqrt(x01 * x01 + y01 * y01);
  var ox = lo * y01;
  var oy = -lo * x01;
  var x11 = x0 + ox;
  var y11 = y0 + oy;
  var x10 = x1 + ox;
  var y10 = y1 + oy;
  var x00 = (x11 + x10) / 2;
  var y00 = (y11 + y10) / 2;
  var dx = x10 - x11;
  var dy = y10 - y11;
  var d2 = dx * dx + dy * dy;
  var r = radius - cr;
  var s = x11 * y10 - x10 * y11;
  var d = (dy < 0 ? -1 : 1) * mathSqrt(mathMax(0, r * r * d2 - s * s));
  var cx0 = (s * dy - dx * d) / d2;
  var cy0 = (-s * dx - dy * d) / d2;
  var cx1 = (s * dy + dx * d) / d2;
  var cy1 = (-s * dx + dy * d) / d2;
  var dx0 = cx0 - x00;
  var dy0 = cy0 - y00;
  var dx1 = cx1 - x00;
  var dy1 = cy1 - y00;

  // Pick the closer of the two intersection points
  // TODO: Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) {
    cx0 = cx1;
    cy0 = cy1;
  }
  return {
    cx: cx0,
    cy: cy0,
    x0: -ox,
    y0: -oy,
    x1: cx0 * (radius / r - 1),
    y1: cy0 * (radius / r - 1)
  };
}
function computeArcSweep(startAngle, endAngle) {
  endAngle = endAngle < 0 && startAngle >= 0 ? endAngle + PI2 : endAngle;
  return endAngle - startAngle <= PI ? 0 : 1;
}
var Sector = /*#__PURE__*/function (_Path) {
  // parsedStyle: any;
  function Sector(config) {
    var _this;
    _classCallCheck(this, Sector);
    _this = _callSuper(this, Sector, [config]);
    _this.updatePath();
    return _this;
  }
  _inherits(Sector, _Path);
  return _createClass(Sector, [{
    key: "setAttribute",
    value: function setAttribute(name, value, force) {
      _superPropGet(Sector, "setAttribute", this, 3)([name, value, force]);
      if (['startAngle', 'endAngle', 'sr', 'sr0', 'radius'].indexOf(name) > -1) {
        this.updatePath();
      }
    }
  }, {
    key: "updatePath",
    value: function updatePath() {
      // @ts-ignore
      var _this$parsedStyle = this.parsedStyle,
        x = _this$parsedStyle.x,
        y = _this$parsedStyle.y,
        startAngle = _this$parsedStyle.startAngle,
        endAngle = _this$parsedStyle.endAngle,
        sr = _this$parsedStyle.sr,
        sr0 = _this$parsedStyle.sr0,
        radius = _this$parsedStyle.radius;
      var path = this.createPath(x, y, startAngle ? gLite.deg2rad(startAngle) : 0, endAngle ? gLite.deg2rad(endAngle) : Math.PI * 2, sr || 0, sr0 || 0, radius || [0, 0, 0, 0]);
      _superPropGet(Sector, "setAttribute", this, 3)(['d', path]);
    }
  }, {
    key: "createPath",
    value: function createPath(x, y, startAngle, endAngle, r, r0, borderRadius) {
      if (r <= 0) {
        return;
      }
      var start = polarToCartesian(x, y, r, startAngle);
      var end = polarToCartesian(x, y, r, endAngle);
      var innerStart = polarToCartesian(x, y, r0, startAngle);
      var innerEnd = polarToCartesian(x, y, r0, endAngle);

      // 整圆
      if (util.isNumberEqual(endAngle - startAngle, Math.PI * 2)) {
        // 整个圆是分割成两个圆
        var middlePoint = polarToCartesian(x, y, r, startAngle + Math.PI);
        var innerMiddlePoint = polarToCartesian(x, y, r0, startAngle + Math.PI);
        var circlePathCommands = [['M', start.x, start.y], ['A', r, r, 0, 1, 1, middlePoint.x, middlePoint.y], ['A', r, r, 0, 1, 1, end.x, end.y], ['M', innerStart.x, innerStart.y]];
        if (r0) {
          circlePathCommands.push(['A', r0, r0, 0, 1, 0, innerMiddlePoint.x, innerMiddlePoint.y]);
          circlePathCommands.push(['A', r0, r0, 0, 1, 0, innerEnd.x, innerEnd.y]);
        }
        circlePathCommands.push(['M', start.x, start.y]);
        circlePathCommands.push(['Z']);
        return circlePathCommands;
      }
      var angle = endAngle - startAngle;
      var xrs = r * mathCos(startAngle);
      var yrs = r * mathSin(startAngle);
      var xire = r0 * mathCos(endAngle);
      var yire = r0 * mathSin(endAngle);
      var xre = r * mathCos(endAngle);
      var yre = r * mathSin(endAngle);
      var xirs = r0 * mathCos(startAngle);
      var yirs = r0 * mathSin(startAngle);

      // 顺时针反向，同 radius
      var _borderRadius = _slicedToArray(borderRadius, 4),
        outStartRadius = _borderRadius[0],
        outEndRadius = _borderRadius[1],
        innerEndRadius = _borderRadius[2],
        innerStartRadius = _borderRadius[3];
      var halfRadius = (r - r0) / 2;
      var outStartBorderRadius = mathMin(halfRadius, outStartRadius);
      var outEndBorderRadius = mathMin(halfRadius, outEndRadius);
      var innerEndBorderRadius = mathMin(halfRadius, innerEndRadius);
      var innerStartBorderRadius = mathMin(halfRadius, innerStartRadius);
      var outBorderRadiusMax = mathMax(outStartBorderRadius, outEndBorderRadius);
      var innerBorderRadiusMax = mathMax(innerEndBorderRadius, innerStartBorderRadius);
      var limitedOutBorderRadiusMax = outBorderRadiusMax;
      var limitedInnerBorderRadiusMax = innerBorderRadiusMax;

      // draw corner radius
      if (outBorderRadiusMax > e || innerBorderRadiusMax > e) {
        // restrict the max value of corner radius
        if (angle < PI) {
          var it = intersect(xrs, yrs, xirs, yirs, xre, yre, xire, yire);
          if (it) {
            var x0 = xrs - it[0];
            var y0 = yrs - it[1];
            var x1 = xre - it[0];
            var y1 = yre - it[1];
            var a = 1 / mathSin(mathACos((x0 * x1 + y0 * y1) / (mathSqrt(x0 * x0 + y0 * y0) * mathSqrt(x1 * x1 + y1 * y1))) / 2);
            var b = mathSqrt(it[0] * it[0] + it[1] * it[1]);
            limitedOutBorderRadiusMax = mathMin(outBorderRadiusMax, (r - b) / (a + 1));
            limitedInnerBorderRadiusMax = mathMin(innerBorderRadiusMax, (r0 - b) / (a - 1));
          }
        }
      }
      var arcSweep = computeArcSweep(startAngle, endAngle);
      var clockwise = true;
      var sectorPathCommands = [];
      if (limitedOutBorderRadiusMax > e) {
        var crStart = mathMin(outStartRadius, limitedOutBorderRadiusMax);
        var crEnd = mathMin(outEndRadius, limitedOutBorderRadiusMax);
        var ct0 = computeCornerTangents(xirs, yirs, xrs, yrs, r, crStart, clockwise);
        var ct1 = computeCornerTangents(xre, yre, xire, yire, r, crEnd, clockwise);
        sectorPathCommands.push(['M', x + ct0.cx + ct0.x0, y + ct0.cy + ct0.y0]);

        // Have the corners merged?
        if (limitedOutBorderRadiusMax < outBorderRadiusMax && crStart === crEnd) {
          var outStartBorderRadiusStartAngle = mathATan2(ct0.y0, ct0.x0);
          var outStartBorderRadiusEndAngle = mathATan2(ct1.y0, ct1.x0);
          sectorPathCommands.push(['A', limitedOutBorderRadiusMax, limitedOutBorderRadiusMax, 0, computeArcSweep(outStartBorderRadiusStartAngle, outStartBorderRadiusEndAngle), 1, x + ct1.cx + ct1.x0, y + ct1.cy + ct1.y0]);
        } else {
          // draw the two corners and the ring
          if (crStart > 0) {
            var _outStartBorderRadiusStartAngle = mathATan2(ct0.y0, ct0.x0);
            var _outStartBorderRadiusEndAngle = mathATan2(ct0.y1, ct0.x1);
            var outStartBorderRadiusEndPoint = polarToCartesian(x, y, r, _outStartBorderRadiusEndAngle);
            sectorPathCommands.push(['A', crStart, crStart, 0, computeArcSweep(_outStartBorderRadiusStartAngle, _outStartBorderRadiusEndAngle), 1, outStartBorderRadiusEndPoint.x, outStartBorderRadiusEndPoint.y]);
          }
          var outRadiusStartAngle = mathATan2(ct0.cy + ct0.y1, ct0.cx + ct0.x1);
          var outRadiusEndAngle = mathATan2(ct1.cy + ct1.y1, ct1.cx + ct1.x1);
          var outRadiusEndPoint = polarToCartesian(x, y, r, outRadiusEndAngle);
          sectorPathCommands.push(['A', r, r, 0, computeArcSweep(outRadiusStartAngle, outRadiusEndAngle), 1, outRadiusEndPoint.x, outRadiusEndPoint.y]);
          if (crEnd > 0) {
            var outEndBorderRadiusStartAngle = mathATan2(ct1.y1, ct1.x1);
            var outEndBorderRadiusEndAngle = mathATan2(ct1.y0, ct1.x0);
            sectorPathCommands.push(['A', crEnd, crEnd, 0, computeArcSweep(outEndBorderRadiusStartAngle, outEndBorderRadiusEndAngle), 1, x + ct1.cx + ct1.x0, y + ct1.cy + ct1.y0]);
          }
        }
      } else {
        sectorPathCommands.push(['M', start.x, start.y]);
        sectorPathCommands.push(['A', r, r, 0, arcSweep, 1, end.x, end.y]);
      }

      // no inner ring, is a circular sector
      if (r0 < e) {
        sectorPathCommands.push(['L', innerEnd.x, innerEnd.y]);
      }
      // the inner ring has corners
      else if (limitedInnerBorderRadiusMax > e) {
        var _crStart = mathMin(innerStartRadius, limitedInnerBorderRadiusMax);
        var _crEnd = mathMin(innerEndRadius, limitedInnerBorderRadiusMax);
        var _ct = computeCornerTangents(xire, yire, 0, 0, r0 - r, _crEnd, clockwise);
        var _ct2 = computeCornerTangents(0, 0, xirs, yirs, r0 - r, _crStart, clockwise);
        sectorPathCommands.push(['L', x + _ct.cx + _ct.x0, y + _ct.cy + _ct.y0]);

        // Have the corners merged?
        if (limitedInnerBorderRadiusMax < innerBorderRadiusMax && _crStart === _crEnd) {
          var innerStartBorderRadiusStartAngle = mathATan2(_ct.y0, _ct.x0);
          var innerStartBorderRadiusEndAngle = mathATan2(_ct2.y0, _ct2.x0);
          var innerStartBorderRadiusEndPoint = polarToCartesian(x, y, r0, innerStartBorderRadiusEndAngle);
          sectorPathCommands.push(['A', limitedOutBorderRadiusMax, limitedOutBorderRadiusMax, 0, computeArcSweep(innerStartBorderRadiusStartAngle, innerStartBorderRadiusEndAngle), 1, innerStartBorderRadiusEndPoint.x, innerStartBorderRadiusEndPoint.y]);
        }
        // draw the two corners and the ring
        else {
          if (_crEnd > 0) {
            var _innerStartBorderRadiusStartAngle = mathATan2(_ct.y0, _ct.x0);
            var _innerStartBorderRadiusEndAngle = mathATan2(_ct.y1, _ct.x1);
            var _innerStartBorderRadiusEndPoint = polarToCartesian(x, y, r0 - r, _innerStartBorderRadiusEndAngle);
            sectorPathCommands.push(['A', _crEnd, _crEnd, 0, computeArcSweep(_innerStartBorderRadiusStartAngle, _innerStartBorderRadiusEndAngle), 1, _innerStartBorderRadiusEndPoint.x, _innerStartBorderRadiusEndPoint.y]);
          }
          var innerRadiusStartAngle = mathATan2(_ct.cy + _ct.y1, _ct.cx + _ct.x1);
          var innerRadiusEndAngle = mathATan2(_ct2.cy + _ct2.y1, _ct2.cx + _ct2.x1);
          var innerRadiusEndPoint = polarToCartesian(x, y, r0, innerRadiusEndAngle);
          sectorPathCommands.push(['A', r0, r0, 0, computeArcSweep(innerRadiusEndAngle, innerRadiusStartAngle), 0, innerRadiusEndPoint.x, innerRadiusEndPoint.y]);
          sectorPathCommands.push(['L', innerRadiusEndPoint.x, innerRadiusEndPoint.y]);
          if (_crStart > 0) {
            var innerEndBorderRadiusStartAngle = mathATan2(_ct2.y1, _ct2.x1);
            var innerEndBorderRadiusEndAngle = mathATan2(_ct2.y0, _ct2.x0);
            sectorPathCommands.push(['A', _crStart, _crStart, 0, computeArcSweep(innerEndBorderRadiusStartAngle, innerEndBorderRadiusEndAngle), 1, x + _ct2.cx + _ct2.x0, y + _ct2.cy + _ct2.y0]);
          }
        }
      }
      // the inner ring is just a circular arc
      else {
        sectorPathCommands.push(['L', innerEnd.x, innerEnd.y]);
        sectorPathCommands.push(['A', r0, r0, 0, arcSweep, 0, innerStart.x, innerStart.y]);
      }
      sectorPathCommands.push(['Z']);
      return sectorPathCommands;
    }
  }]);
}(gLite.Path);
Sector.PARSED_STYLE_LIST = new Set([].concat(_toConsumableArray(gLite.Path.PARSED_STYLE_LIST), ['x', 'y', 'sr', 'sr0', 'radius', 'startAngle', 'endAngle']));

exports.AdvancedCamera = AdvancedCamera;
exports.Animation = Animation;
exports.AnimationEvent = AnimationEvent;
exports.AnimationTimeline = AnimationTimeline;
exports.Arrow = Arrow;
exports.EasingFunctions = EasingFunctions;
exports.ImageExporter = ImageExporter;
exports.KeyframeEffect = KeyframeEffect;
exports.Sector = Sector;
exports.compareAnimations = compareAnimations;
exports.defaultDotPatternCfg = defaultDotPatternCfg;
exports.defaultLinePatternCfg = defaultLinePatternCfg;
exports.defaultSquarePatternCfg = defaultSquarePatternCfg;
exports.dots = dots;
exports.lines = lines;
exports.makeTiming = makeTiming;
exports.normalizeKeyframes = normalizeKeyframes;
exports.normalizeTimingInput = normalizeTimingInput;
exports.numericTimingToObject = numericTimingToObject;
exports.squares = squares;
Object.keys(gLite).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return gLite[k]; }
  });
});
//# sourceMappingURL=index.js.map
