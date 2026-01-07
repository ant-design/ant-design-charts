(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.svgson = factory());
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  /*!
   * isobject <https://github.com/jonschlinkert/isobject>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */

  var isobject = function isObject(val) {
    return val != null && typeof val === 'object' && Array.isArray(val) === false;
  };

  function isObjectObject(o) {
    return isobject(o) === true
      && Object.prototype.toString.call(o) === '[object Object]';
  }

  var isPlainObject = function isPlainObject(o) {
    var ctor,prot;

    if (isObjectObject(o) === false) return false;

    // If has modified constructor
    ctor = o.constructor;
    if (typeof ctor !== 'function') return false;

    // If has modified prototype
    prot = ctor.prototype;
    if (isObjectObject(prot) === false) return false;

    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty('isPrototypeOf') === false) {
      return false;
    }

    // Most likely a plain Object
    return true;
  };

  var toString = {}.toString;

  var isarray = Array.isArray || function (arr) {
    return toString.call(arr) == '[object Array]';
  };

  var isobject$1 = function isObject(val) {
    return val != null && typeof val === 'object' && isarray(val) === false;
  };

  /*!
   * has-values <https://github.com/jonschlinkert/has-values>
   *
   * Copyright (c) 2014-2015, Jon Schlinkert.
   * Licensed under the MIT License.
   */

  var hasValues = function hasValue(o, noZero) {
    if (o === null || o === undefined) {
      return false;
    }

    if (typeof o === 'boolean') {
      return true;
    }

    if (typeof o === 'number') {
      if (o === 0 && noZero === true) {
        return false;
      }
      return true;
    }

    if (o.length !== undefined) {
      return o.length !== 0;
    }

    for (var key in o) {
      if (o.hasOwnProperty(key)) {
        return true;
      }
    }
    return false;
  };

  /*!
   * get-value <https://github.com/jonschlinkert/get-value>
   *
   * Copyright (c) 2014-2015, Jon Schlinkert.
   * Licensed under the MIT License.
   */

  var getValue = function(obj, prop, a, b, c) {
    if (!isObject(obj) || !prop) {
      return obj;
    }

    prop = toString$1(prop);

    // allowing for multiple properties to be passed as
    // a string or array, but much faster (3-4x) than doing
    // `[].slice.call(arguments)`
    if (a) prop += '.' + toString$1(a);
    if (b) prop += '.' + toString$1(b);
    if (c) prop += '.' + toString$1(c);

    if (prop in obj) {
      return obj[prop];
    }

    var segs = prop.split('.');
    var len = segs.length;
    var i = -1;

    while (obj && (++i < len)) {
      var key = segs[i];
      while (key[key.length - 1] === '\\') {
        key = key.slice(0, -1) + '.' + segs[++i];
      }
      obj = obj[key];
    }
    return obj;
  };

  function isObject(val) {
    return val !== null && (typeof val === 'object' || typeof val === 'function');
  }

  function toString$1(val) {
    if (!val) return '';
    if (Array.isArray(val)) {
      return val.join('.');
    }
    return val;
  }

  var hasValue = function(obj, prop, noZero) {
    if (isobject$1(obj)) {
      return hasValues(getValue(obj, prop), noZero);
    }
    return hasValues(obj, prop);
  };

  var unsetValue = function unset(obj, prop) {
    if (!isobject(obj)) {
      throw new TypeError('expected an object.');
    }
    if (obj.hasOwnProperty(prop)) {
      delete obj[prop];
      return true;
    }

    if (hasValue(obj, prop)) {
      var segs = prop.split('.');
      var last = segs.pop();
      while (segs.length && segs[segs.length - 1].slice(-1) === '\\') {
        last = segs.pop().slice(0, -1) + '.' + last;
      }
      while (segs.length) obj = obj[prop = segs.shift()];
      return (delete obj[last]);
    }
    return true;
  };

  var omitDeep = function omitDeep(value, keys) {
    if (typeof value === 'undefined') {
      return {};
    }

    if (Array.isArray(value)) {
      for (var i = 0; i < value.length; i++) {
        value[i] = omitDeep(value[i], keys);
      }
      return value;
    }

    if (!isPlainObject(value)) {
      return value;
    }

    if (typeof keys === 'string') {
      keys = [keys];
    }

    if (!Array.isArray(keys)) {
      return value;
    }

    for (var j = 0; j < keys.length; j++) {
      unsetValue(value, keys[j]);
    }

    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        value[key] = omitDeep(value[key], keys);
      }
    }

    return value;
  };

  /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */

  // The _isBuffer check is for Safari 5-7 support, because it's missing
  // Object.prototype.constructor. Remove this eventually
  var isBuffer_1 = function (obj) {
    return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
  };

  function isBuffer (obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
  }

  // For Node v0.10 support. Remove this eventually.
  function isSlowBuffer (obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
  }

  var toString$2 = Object.prototype.toString;

  /**
   * Get the native `typeof` a value.
   *
   * @param  {*} `val`
   * @return {*} Native javascript type
   */

  var kindOf = function kindOf(val) {
    // primitivies
    if (typeof val === 'undefined') {
      return 'undefined';
    }
    if (val === null) {
      return 'null';
    }
    if (val === true || val === false || val instanceof Boolean) {
      return 'boolean';
    }
    if (typeof val === 'string' || val instanceof String) {
      return 'string';
    }
    if (typeof val === 'number' || val instanceof Number) {
      return 'number';
    }

    // functions
    if (typeof val === 'function' || val instanceof Function) {
      return 'function';
    }

    // array
    if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
      return 'array';
    }

    // check for instances of RegExp and Date before calling `toString`
    if (val instanceof RegExp) {
      return 'regexp';
    }
    if (val instanceof Date) {
      return 'date';
    }

    // other objects
    var type = toString$2.call(val);

    if (type === '[object RegExp]') {
      return 'regexp';
    }
    if (type === '[object Date]') {
      return 'date';
    }
    if (type === '[object Arguments]') {
      return 'arguments';
    }
    if (type === '[object Error]') {
      return 'error';
    }

    // buffer
    if (isBuffer_1(val)) {
      return 'buffer';
    }

    // es6: Map, WeakMap, Set, WeakSet
    if (type === '[object Set]') {
      return 'set';
    }
    if (type === '[object WeakSet]') {
      return 'weakset';
    }
    if (type === '[object Map]') {
      return 'map';
    }
    if (type === '[object WeakMap]') {
      return 'weakmap';
    }
    if (type === '[object Symbol]') {
      return 'symbol';
    }

    // typed arrays
    if (type === '[object Int8Array]') {
      return 'int8array';
    }
    if (type === '[object Uint8Array]') {
      return 'uint8array';
    }
    if (type === '[object Uint8ClampedArray]') {
      return 'uint8clampedarray';
    }
    if (type === '[object Int16Array]') {
      return 'int16array';
    }
    if (type === '[object Uint16Array]') {
      return 'uint16array';
    }
    if (type === '[object Int32Array]') {
      return 'int32array';
    }
    if (type === '[object Uint32Array]') {
      return 'uint32array';
    }
    if (type === '[object Float32Array]') {
      return 'float32array';
    }
    if (type === '[object Float64Array]') {
      return 'float64array';
    }

    // must be a plain object
    return 'object';
  };

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var renameKeys = createCommonjsModule(function (module) {
  (function() {

    function rename(obj, fn) {
      if (typeof fn !== 'function') {
        return obj;
      }

      var res = {};
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          res[fn(key, obj[key]) || key] = obj[key];
        }
      }
      return res;
    }

    if ( module.exports) {
      module.exports = rename;
    } else {
      {
        window.rename = rename;
      }
    }
  })();
  });

  /**
   * Expose `renameDeep`
   */

  var deepRenameKeys = function renameDeep(obj, cb) {
    var type = kindOf(obj);

    if (type !== 'object' && type !== 'array') {
      throw new Error('expected an object');
    }

    var res = [];
    if (type === 'object') {
      obj = renameKeys(obj, cb);
      res = {};
    }

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        var val = obj[key];
        if (kindOf(val) === 'object' || kindOf(val) === 'array') {
          res[key] = renameDeep(val, cb);
        } else {
          res[key] = val;
        }
      }
    }
    return res;
  };

  var eventemitter3 = createCommonjsModule(function (module) {

  var has = Object.prototype.hasOwnProperty
    , prefix = '~';

  /**
   * Constructor to create a storage for our `EE` objects.
   * An `Events` instance is a plain object whose properties are event names.
   *
   * @constructor
   * @api private
   */
  function Events() {}

  //
  // We try to not inherit from `Object.prototype`. In some engines creating an
  // instance in this way is faster than calling `Object.create(null)` directly.
  // If `Object.create(null)` is not supported we prefix the event names with a
  // character to make sure that the built-in object properties are not
  // overridden or used as an attack vector.
  //
  if (Object.create) {
    Events.prototype = Object.create(null);

    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
  }

  /**
   * Representation of a single event listener.
   *
   * @param {Function} fn The listener function.
   * @param {Mixed} context The context to invoke the listener with.
   * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
   * @constructor
   * @api private
   */
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }

  /**
   * Minimal `EventEmitter` interface that is molded against the Node.js
   * `EventEmitter` interface.
   *
   * @constructor
   * @api public
   */
  function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
  }

  /**
   * Return an array listing the events for which the emitter has registered
   * listeners.
   *
   * @returns {Array}
   * @api public
   */
  EventEmitter.prototype.eventNames = function eventNames() {
    var names = []
      , events
      , name;

    if (this._eventsCount === 0) return names;

    for (name in (events = this._events)) {
      if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    }

    if (Object.getOwnPropertySymbols) {
      return names.concat(Object.getOwnPropertySymbols(events));
    }

    return names;
  };

  /**
   * Return the listeners registered for a given event.
   *
   * @param {String|Symbol} event The event name.
   * @param {Boolean} exists Only check if there are listeners.
   * @returns {Array|Boolean}
   * @api public
   */
  EventEmitter.prototype.listeners = function listeners(event, exists) {
    var evt = prefix ? prefix + event : event
      , available = this._events[evt];

    if (exists) return !!available;
    if (!available) return [];
    if (available.fn) return [available.fn];

    for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
      ee[i] = available[i].fn;
    }

    return ee;
  };

  /**
   * Calls each of the listeners registered for a given event.
   *
   * @param {String|Symbol} event The event name.
   * @returns {Boolean} `true` if the event had listeners, else `false`.
   * @api public
   */
  EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;

    if (!this._events[evt]) return false;

    var listeners = this._events[evt]
      , len = arguments.length
      , args
      , i;

    if (listeners.fn) {
      if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

      switch (len) {
        case 1: return listeners.fn.call(listeners.context), true;
        case 2: return listeners.fn.call(listeners.context, a1), true;
        case 3: return listeners.fn.call(listeners.context, a1, a2), true;
        case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }

      for (i = 1, args = new Array(len -1); i < len; i++) {
        args[i - 1] = arguments[i];
      }

      listeners.fn.apply(listeners.context, args);
    } else {
      var length = listeners.length
        , j;

      for (i = 0; i < length; i++) {
        if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

        switch (len) {
          case 1: listeners[i].fn.call(listeners[i].context); break;
          case 2: listeners[i].fn.call(listeners[i].context, a1); break;
          case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
          case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
          default:
            if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
              args[j - 1] = arguments[j];
            }

            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }

    return true;
  };

  /**
   * Add a listener for a given event.
   *
   * @param {String|Symbol} event The event name.
   * @param {Function} fn The listener function.
   * @param {Mixed} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @api public
   */
  EventEmitter.prototype.on = function on(event, fn, context) {
    var listener = new EE(fn, context || this)
      , evt = prefix ? prefix + event : event;

    if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
    else if (!this._events[evt].fn) this._events[evt].push(listener);
    else this._events[evt] = [this._events[evt], listener];

    return this;
  };

  /**
   * Add a one-time listener for a given event.
   *
   * @param {String|Symbol} event The event name.
   * @param {Function} fn The listener function.
   * @param {Mixed} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @api public
   */
  EventEmitter.prototype.once = function once(event, fn, context) {
    var listener = new EE(fn, context || this, true)
      , evt = prefix ? prefix + event : event;

    if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
    else if (!this._events[evt].fn) this._events[evt].push(listener);
    else this._events[evt] = [this._events[evt], listener];

    return this;
  };

  /**
   * Remove the listeners of a given event.
   *
   * @param {String|Symbol} event The event name.
   * @param {Function} fn Only remove the listeners that match this function.
   * @param {Mixed} context Only remove the listeners that have this context.
   * @param {Boolean} once Only remove one-time listeners.
   * @returns {EventEmitter} `this`.
   * @api public
   */
  EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;

    if (!this._events[evt]) return this;
    if (!fn) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
      return this;
    }

    var listeners = this._events[evt];

    if (listeners.fn) {
      if (
           listeners.fn === fn
        && (!once || listeners.once)
        && (!context || listeners.context === context)
      ) {
        if (--this._eventsCount === 0) this._events = new Events();
        else delete this._events[evt];
      }
    } else {
      for (var i = 0, events = [], length = listeners.length; i < length; i++) {
        if (
             listeners[i].fn !== fn
          || (once && !listeners[i].once)
          || (context && listeners[i].context !== context)
        ) {
          events.push(listeners[i]);
        }
      }

      //
      // Reset the array, or remove it completely if we have no more listeners.
      //
      if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
      else if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }

    return this;
  };

  /**
   * Remove all listeners, or those of the specified event.
   *
   * @param {String|Symbol} [event] The event name.
   * @returns {EventEmitter} `this`.
   * @api public
   */
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;

    if (event) {
      evt = prefix ? prefix + event : event;
      if (this._events[evt]) {
        if (--this._eventsCount === 0) this._events = new Events();
        else delete this._events[evt];
      }
    } else {
      this._events = new Events();
      this._eventsCount = 0;
    }

    return this;
  };

  //
  // Alias methods names because people roll like that.
  //
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  //
  // This function doesn't apply anymore.
  //
  EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
    return this;
  };

  //
  // Expose the prefix.
  //
  EventEmitter.prefixed = prefix;

  //
  // Allow `EventEmitter` to be imported as module namespace.
  //
  EventEmitter.EventEmitter = EventEmitter;

  //
  // Expose the module.
  //
  {
    module.exports = EventEmitter;
  }
  });

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


  var noop = function noop() {};

  var State = {
      data: 'state-data',
      cdata: 'state-cdata',
      tagBegin: 'state-tag-begin',
      tagName: 'state-tag-name',
      tagEnd: 'state-tag-end',
      attributeNameStart: 'state-attribute-name-start',
      attributeName: 'state-attribute-name',
      attributeNameEnd: 'state-attribute-name-end',
      attributeValueBegin: 'state-attribute-value-begin',
      attributeValue: 'state-attribute-value'
  };

  var Action = {
      lt: 'action-lt',
      gt: 'action-gt',
      space: 'action-space',
      equal: 'action-equal',
      quote: 'action-quote',
      slash: 'action-slash',
      char: 'action-char',
      error: 'action-error'
  };

  var Type = {
      text: 'text',
      openTag: 'open-tag',
      closeTag: 'close-tag',
      attributeName: 'attribute-name',
      attributeValue: 'attribute-value'
  };

  var charToAction = {
      ' ': Action.space,
      '\t': Action.space,
      '\n': Action.space,
      '\r': Action.space,
      '<': Action.lt,
      '>': Action.gt,
      '"': Action.quote,
      "'": Action.quote,
      '=': Action.equal,
      '/': Action.slash
  };

  var getAction = function getAction(char) {
      return charToAction[char] || Action.char;
  };

  /**
   * @param  {Object} options
   * @param  {Boolean} options.debug
   * @return {Object}
   */
  var create = function create(options) {
      var _State$data, _State$tagBegin, _State$tagName, _State$tagEnd, _State$attributeNameS, _State$attributeName, _State$attributeNameE, _State$attributeValue, _State$attributeValue2, _lexer$stateMachine;

      options = Object.assign({ debug: false }, options);
      var lexer = new eventemitter3();
      var state = State.data;
      var data = '';
      var tagName = '';
      var attrName = '';
      var attrValue = '';
      var isClosing = '';
      var openingQuote = '';

      var emit = function emit(type, value) {
          // for now, ignore tags like: '?xml', '!DOCTYPE' or comments
          if (tagName[0] === '?' || tagName[0] === '!') {
              return;
          }
          var event = { type: type, value: value };
          if (options.debug) {
              console.log('emit:', event);
          }
          lexer.emit('data', event);
      };

      lexer.stateMachine = (_lexer$stateMachine = {}, _defineProperty$1(_lexer$stateMachine, State.data, (_State$data = {}, _defineProperty$1(_State$data, Action.lt, function () {
          if (data.trim()) {
              emit(Type.text, data);
          }
          tagName = '';
          isClosing = false;
          state = State.tagBegin;
      }), _defineProperty$1(_State$data, Action.char, function (char) {
          data += char;
      }), _State$data)), _defineProperty$1(_lexer$stateMachine, State.cdata, _defineProperty$1({}, Action.char, function (char) {
          data += char;
          if (data.substr(-3) === ']]>') {
              emit(Type.text, data.slice(0, -3));
              data = '';
              state = State.data;
          }
      })), _defineProperty$1(_lexer$stateMachine, State.tagBegin, (_State$tagBegin = {}, _defineProperty$1(_State$tagBegin, Action.space, noop), _defineProperty$1(_State$tagBegin, Action.char, function (char) {
          tagName = char;
          state = State.tagName;
      }), _defineProperty$1(_State$tagBegin, Action.slash, function () {
          tagName = '';
          isClosing = true;
      }), _State$tagBegin)), _defineProperty$1(_lexer$stateMachine, State.tagName, (_State$tagName = {}, _defineProperty$1(_State$tagName, Action.space, function () {
          if (isClosing) {
              state = State.tagEnd;
          } else {
              state = State.attributeNameStart;
              emit(Type.openTag, tagName);
          }
      }), _defineProperty$1(_State$tagName, Action.gt, function () {
          if (isClosing) {
              emit(Type.closeTag, tagName);
          } else {
              emit(Type.openTag, tagName);
          }
          data = '';
          state = State.data;
      }), _defineProperty$1(_State$tagName, Action.slash, function () {
          state = State.tagEnd;
          emit(Type.openTag, tagName);
      }), _defineProperty$1(_State$tagName, Action.char, function (char) {
          tagName += char;
          if (tagName === '![CDATA[') {
              state = State.cdata;
              data = '';
              tagName = '';
          }
      }), _State$tagName)), _defineProperty$1(_lexer$stateMachine, State.tagEnd, (_State$tagEnd = {}, _defineProperty$1(_State$tagEnd, Action.gt, function () {
          emit(Type.closeTag, tagName);
          data = '';
          state = State.data;
      }), _defineProperty$1(_State$tagEnd, Action.char, noop), _State$tagEnd)), _defineProperty$1(_lexer$stateMachine, State.attributeNameStart, (_State$attributeNameS = {}, _defineProperty$1(_State$attributeNameS, Action.char, function (char) {
          attrName = char;
          state = State.attributeName;
      }), _defineProperty$1(_State$attributeNameS, Action.gt, function () {
          data = '';
          state = State.data;
      }), _defineProperty$1(_State$attributeNameS, Action.space, noop), _defineProperty$1(_State$attributeNameS, Action.slash, function () {
          isClosing = true;
          state = State.tagEnd;
      }), _State$attributeNameS)), _defineProperty$1(_lexer$stateMachine, State.attributeName, (_State$attributeName = {}, _defineProperty$1(_State$attributeName, Action.space, function () {
          state = State.attributeNameEnd;
      }), _defineProperty$1(_State$attributeName, Action.equal, function () {
          emit(Type.attributeName, attrName);
          state = State.attributeValueBegin;
      }), _defineProperty$1(_State$attributeName, Action.gt, function () {
          attrValue = '';
          emit(Type.attributeName, attrName);
          emit(Type.attributeValue, attrValue);
          data = '';
          state = State.data;
      }), _defineProperty$1(_State$attributeName, Action.slash, function () {
          isClosing = true;
          attrValue = '';
          emit(Type.attributeName, attrName);
          emit(Type.attributeValue, attrValue);
          state = State.tagEnd;
      }), _defineProperty$1(_State$attributeName, Action.char, function (char) {
          attrName += char;
      }), _State$attributeName)), _defineProperty$1(_lexer$stateMachine, State.attributeNameEnd, (_State$attributeNameE = {}, _defineProperty$1(_State$attributeNameE, Action.space, noop), _defineProperty$1(_State$attributeNameE, Action.equal, function () {
          emit(Type.attributeName, attrName);
          state = State.attributeValueBegin;
      }), _defineProperty$1(_State$attributeNameE, Action.gt, function () {
          attrValue = '';
          emit(Type.attributeName, attrName);
          emit(Type.attributeValue, attrValue);
          data = '';
          state = State.data;
      }), _defineProperty$1(_State$attributeNameE, Action.char, function (char) {
          attrValue = '';
          emit(Type.attributeName, attrName);
          emit(Type.attributeValue, attrValue);
          attrName = char;
          state = State.attributeName;
      }), _State$attributeNameE)), _defineProperty$1(_lexer$stateMachine, State.attributeValueBegin, (_State$attributeValue = {}, _defineProperty$1(_State$attributeValue, Action.space, noop), _defineProperty$1(_State$attributeValue, Action.quote, function (char) {
          openingQuote = char;
          attrValue = '';
          state = State.attributeValue;
      }), _defineProperty$1(_State$attributeValue, Action.gt, function () {
          attrValue = '';
          emit(Type.attributeValue, attrValue);
          data = '';
          state = State.data;
      }), _defineProperty$1(_State$attributeValue, Action.char, function (char) {
          openingQuote = '';
          attrValue = char;
          state = State.attributeValue;
      }), _State$attributeValue)), _defineProperty$1(_lexer$stateMachine, State.attributeValue, (_State$attributeValue2 = {}, _defineProperty$1(_State$attributeValue2, Action.space, function (char) {
          if (openingQuote) {
              attrValue += char;
          } else {
              emit(Type.attributeValue, attrValue);
              state = State.attributeNameStart;
          }
      }), _defineProperty$1(_State$attributeValue2, Action.quote, function (char) {
          if (openingQuote === char) {
              emit(Type.attributeValue, attrValue);
              state = State.attributeNameStart;
          } else {
              attrValue += char;
          }
      }), _defineProperty$1(_State$attributeValue2, Action.gt, function (char) {
          if (openingQuote) {
              attrValue += char;
          } else {
              emit(Type.attributeValue, attrValue);
              data = '';
              state = State.data;
          }
      }), _defineProperty$1(_State$attributeValue2, Action.slash, function (char) {
          if (openingQuote) {
              attrValue += char;
          } else {
              emit(Type.attributeValue, attrValue);
              isClosing = true;
              state = State.tagEnd;
          }
      }), _defineProperty$1(_State$attributeValue2, Action.char, function (char) {
          attrValue += char;
      }), _State$attributeValue2)), _lexer$stateMachine);

      var step = function step(char) {
          if (options.debug) {
              console.log(state, char);
          }
          var actions = lexer.stateMachine[state];
          var action = actions[getAction(char)] || actions[Action.error] || actions[Action.char];
          action(char);
      };

      lexer.write = function (str) {
          var len = str.length;
          for (var i = 0; i < len; i++) {
              step(str[i]);
          }
      };

      return lexer;
  };

  var lexer = {
      State: State,
      Action: Action,
      Type: Type,
      create: create
  };

  var Type$1 = lexer.Type;

  var NodeType = {
      element: 'element',
      text: 'text'
  };

  var createNode = function createNode(params) {
      return Object.assign({
          name: '',
          type: NodeType.element,
          value: '',
          parent: null,
          attributes: {},
          children: []
      }, params);
  };

  var create$1 = function create(options) {
      options = Object.assign({
          stream: false,
          parentNodes: true,
          doneEvent: 'done',
          tagPrefix: 'tag:',
          emitTopLevelOnly: false,
          debug: false
      }, options);

      var lexer$1 = void 0,
          rootNode = void 0,
          current = void 0,
          attrName = void 0;

      var reader = new eventemitter3();

      var handleLexerData = function handleLexerData(data) {
          switch (data.type) {

              case Type$1.openTag:
                  if (current === null) {
                      current = rootNode;
                      current.name = data.value;
                  } else {
                      var node = createNode({
                          name: data.value,
                          parent: current
                      });
                      current.children.push(node);
                      current = node;
                  }
                  break;

              case Type$1.closeTag:
                  var parent = current.parent;
                  if (!options.parentNodes) {
                      current.parent = null;
                  }
                  if (current.name !== data.value) {
                      // ignore unexpected closing tag
                      break;
                  }
                  if (options.stream && parent === rootNode) {
                      rootNode.children = [];
                      // do not expose parent node in top level nodes
                      current.parent = null;
                  }
                  if (!options.emitTopLevelOnly || parent === rootNode) {
                      reader.emit(options.tagPrefix + current.name, current);
                      reader.emit('tag', current.name, current);
                  }
                  if (current === rootNode) {
                      // end of document, stop listening
                      lexer$1.removeAllListeners('data');
                      reader.emit(options.doneEvent, current);
                      rootNode = null;
                  }
                  current = parent;
                  break;

              case Type$1.text:
                  if (current) {
                      current.children.push(createNode({
                          type: NodeType.text,
                          value: data.value,
                          parent: options.parentNodes ? current : null
                      }));
                  }
                  break;

              case Type$1.attributeName:
                  attrName = data.value;
                  current.attributes[attrName] = '';
                  break;

              case Type$1.attributeValue:
                  current.attributes[attrName] = data.value;
                  break;
          }
      };

      reader.reset = function () {
          lexer$1 = lexer.create({ debug: options.debug });
          lexer$1.on('data', handleLexerData);
          rootNode = createNode();
          current = null;
          attrName = '';
          reader.parse = lexer$1.write;
      };

      reader.reset();
      return reader;
  };

  var parseSync = function parseSync(xml, options) {
      options = Object.assign({}, options, { stream: false, tagPrefix: ':' });
      var reader = create$1(options);
      var res = void 0;
      reader.on('done', function (ast) {
          res = ast;
      });
      reader.parse(xml);
      return res;
  };

  var reader = {
      parseSync: parseSync,
      create: create$1,
      NodeType: NodeType
  };
  var reader_1 = reader.parseSync;

  var parseInput = function parseInput(input) {
    var parsed = reader_1(input, {
      parentNodes: false
    });
    var hasMoreChildren = parsed.name === 'root' && parsed.children.length > 1;
    var isValid = hasMoreChildren ? parsed.children.reduce(function (acc, _ref) {
      var name = _ref.name;
      return !acc ? name === 'svg' : true;
    }, false) : parsed.children[0].name === 'svg';

    if (isValid) {
      return hasMoreChildren ? parsed : parsed.children[0];
    } else {
      throw Error('nothing to parse');
    }
  };
  var removeDoctype = function removeDoctype(input) {
    return input.replace(/<[\/]{0,1}(\!?DOCTYPE|\??xml)[^><]*>/gi, '');
  };
  var wrapInput = function wrapInput(input) {
    return "<root>".concat(input, "</root>");
  };
  var removeAttrs = function removeAttrs(obj) {
    return omitDeep(obj, ['parent']);
  };
  var camelize = function camelize(node) {
    return deepRenameKeys(node, function (key) {
      if (!notCamelcase(key)) {
        return toCamelCase(key);
      }

      return key;
    });
  };
  var toCamelCase = function toCamelCase(prop) {
    return prop.replace(/[-|:]([a-z])/gi, function (all, letter) {
      return letter.toUpperCase();
    });
  };

  var notCamelcase = function notCamelcase(prop) {
    return /^(data|aria)(-\w+)/.test(prop);
  };

  var escapeText = function escapeText(text) {
    if (text) {
      var str = String(text);
      return /[&<>]/.test(str) ? "<![CDATA[".concat(str.replace(/]]>/, ']]]]><![CDATA[>'), "]]>") : str;
    }

    return '';
  };
  var escapeAttr = function escapeAttr(attr) {
    return String(attr).replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };

  var svgsonSync = function svgsonSync(input) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$transformNode = _ref.transformNode,
        transformNode = _ref$transformNode === void 0 ? function (node) {
      return node;
    } : _ref$transformNode,
        _ref$camelcase = _ref.camelcase,
        camelcase = _ref$camelcase === void 0 ? false : _ref$camelcase;

    var wrap = function wrap(input) {
      var cleanInput = removeDoctype(input);
      return wrapInput(cleanInput);
    };

    var unwrap = function unwrap(res) {
      return res.name === 'root' ? res.children : res;
    };

    var applyFilters = function applyFilters(input) {
      var applyTransformNode = function applyTransformNode(node) {
        var children = node.children;
        return node.name === 'root' ? children.map(applyTransformNode) : _objectSpread2(_objectSpread2({}, transformNode(node)), children && children.length > 0 ? {
          children: children.map(applyTransformNode)
        } : {});
      };

      var n;
      n = removeAttrs(input);
      n = applyTransformNode(n);

      if (camelcase) {
        n = camelize(n);
      }

      return n;
    };

    return unwrap(applyFilters(parseInput(wrap(input))));
  };
  function svgson() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {
      try {
        var res = svgsonSync.apply(void 0, args);
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  }

  var stringify = function stringify(ast) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$transformAttr = _ref.transformAttr,
        transformAttr = _ref$transformAttr === void 0 ? function (key, value, escape) {
      return "".concat(key, "=\"").concat(escape(value), "\"");
    } : _ref$transformAttr,
        _ref$selfClose = _ref.selfClose,
        selfClose = _ref$selfClose === void 0 ? true : _ref$selfClose;

    if (Array.isArray(ast)) {
      return ast.map(function (ast) {
        return stringify(ast, {
          transformAttr: transformAttr,
          selfClose: selfClose
        });
      }).join('');
    }

    if (ast.type === 'text') {
      return escapeText(ast.value);
    }

    var attributes = '';

    for (var attr in ast.attributes) {
      var attrStr = transformAttr(attr, ast.attributes[attr], escapeAttr, ast.name);
      attributes += attrStr ? " ".concat(attrStr) : '';
    }

    return ast.children.length || !selfClose ? "<".concat(ast.name).concat(attributes, ">").concat(stringify(ast.children, {
      transformAttr: transformAttr,
      selfClose: selfClose
    }), "</").concat(ast.name, ">") : "<".concat(ast.name).concat(attributes, "/>");
  };

  var indexUmd = Object.assign({}, {
    parse: svgson,
    parseSync: svgsonSync,
    stringify: stringify
  });

  return indexUmd;

})));
