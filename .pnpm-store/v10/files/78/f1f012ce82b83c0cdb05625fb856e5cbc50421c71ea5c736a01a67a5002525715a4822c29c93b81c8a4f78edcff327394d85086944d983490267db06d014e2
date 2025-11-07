"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/keys"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _ = require('underscore');

module.exports = function (AV) {
  var eventSplitter = /\s+/;
  var slice = (0, _slice.default)(Array.prototype);
  /**
   * @class
   *
   * <p>AV.Events is a fork of Backbone's Events module, provided for your
   * convenience.</p>
   *
   * <p>A module that can be mixed in to any object in order to provide
   * it with custom events. You may bind callback functions to an event
   * with `on`, or remove these functions with `off`.
   * Triggering an event fires all callbacks in the order that `on` was
   * called.
   *
   * @private
   * @example
   * var object = {};
   * _.extend(object, AV.Events);
   * object.on('expand', function(){ alert('expanded'); });
   * object.trigger('expand');</pre></p>
   *
   */

  AV.Events = {
    /**
     * Bind one or more space separated events, `events`, to a `callback`
     * function. Passing `"all"` will bind the callback to all events fired.
     */
    on: function on(events, callback, context) {
      var calls, event, node, tail, list;

      if (!callback) {
        return this;
      }

      events = events.split(eventSplitter);
      calls = this._callbacks || (this._callbacks = {}); // Create an immutable callback list, allowing traversal during
      // modification.  The tail is an empty object that will always be used
      // as the next node.

      event = events.shift();

      while (event) {
        list = calls[event];
        node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {
          tail: tail,
          next: list ? list.next : node
        };
        event = events.shift();
      }

      return this;
    },

    /**
     * Remove one or many callbacks. If `context` is null, removes all callbacks
     * with that function. If `callback` is null, removes all callbacks for the
     * event. If `events` is null, removes all bound callbacks for all events.
     */
    off: function off(events, callback, context) {
      var event, calls, node, tail, cb, ctx; // No events, or removing *all* events.

      if (!(calls = this._callbacks)) {
        return;
      }

      if (!(events || callback || context)) {
        delete this._callbacks;
        return this;
      } // Loop through the listed events and contexts, splicing them out of the
      // linked list of callbacks if appropriate.


      events = events ? events.split(eventSplitter) : (0, _keys.default)(_).call(_, calls);
      event = events.shift();

      while (event) {
        node = calls[event];
        delete calls[event];

        if (!node || !(callback || context)) {
          continue;
        } // Create a new list, omitting the indicated callbacks.


        tail = node.tail;
        node = node.next;

        while (node !== tail) {
          cb = node.callback;
          ctx = node.context;

          if (callback && cb !== callback || context && ctx !== context) {
            this.on(event, cb, ctx);
          }

          node = node.next;
        }

        event = events.shift();
      }

      return this;
    },

    /**
     * Trigger one or many events, firing all bound callbacks. Callbacks are
     * passed the same arguments as `trigger` is, apart from the event name
     * (unless you're listening on `"all"`, which will cause your callback to
     * receive the true name of the event as the first argument).
     */
    trigger: function trigger(events) {
      var event, node, calls, tail, args, all, rest;

      if (!(calls = this._callbacks)) {
        return this;
      }

      all = calls.all;
      events = events.split(eventSplitter);
      rest = slice.call(arguments, 1); // For each event, walk through the linked list of callbacks twice,
      // first to trigger the event, then to trigger any `"all"` callbacks.

      event = events.shift();

      while (event) {
        node = calls[event];

        if (node) {
          tail = node.tail;

          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, rest);
          }
        }

        node = all;

        if (node) {
          var _context;

          tail = node.tail;
          args = (0, _concat.default)(_context = [event]).call(_context, rest);

          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, args);
          }
        }

        event = events.shift();
      }

      return this;
    }
  };
  /**
   * @function
   */

  AV.Events.bind = AV.Events.on;
  /**
   * @function
   */

  AV.Events.unbind = AV.Events.off;
};