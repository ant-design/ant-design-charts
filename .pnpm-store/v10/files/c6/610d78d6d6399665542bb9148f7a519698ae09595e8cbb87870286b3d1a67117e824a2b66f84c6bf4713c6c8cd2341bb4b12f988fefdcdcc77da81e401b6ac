/*!
 * @antv/g-web-animations-api
 * @description A simple implementation of Web Animations API.
 * @version 2.1.28
 * @date 7/30/2025, 1:36:24 PM
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
      this._currentTime = 0;
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

exports.Animation = Animation;
exports.AnimationEvent = AnimationEvent;
exports.AnimationTimeline = AnimationTimeline;
exports.EasingFunctions = EasingFunctions;
exports.KeyframeEffect = KeyframeEffect;
exports.compareAnimations = compareAnimations;
exports.makeTiming = makeTiming;
exports.normalizeKeyframes = normalizeKeyframes;
exports.normalizeTimingInput = normalizeTimingInput;
exports.numericTimingToObject = numericTimingToObject;
//# sourceMappingURL=index.js.map
