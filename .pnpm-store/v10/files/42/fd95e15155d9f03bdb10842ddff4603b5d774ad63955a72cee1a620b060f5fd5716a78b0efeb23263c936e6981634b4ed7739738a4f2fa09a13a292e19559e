"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _keys2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/keys"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _ = require('underscore');

var AVError = require('./error');

var _require = require('./request'),
    _request = _require._request;

var _require2 = require('./utils'),
    isNullOrUndefined = _require2.isNullOrUndefined,
    ensureArray = _require2.ensureArray,
    transformFetchOptions = _require2.transformFetchOptions,
    setValue = _require2.setValue,
    findValue = _require2.findValue,
    isPlainObject = _require2.isPlainObject,
    continueWhile = _require2.continueWhile;

var recursiveToPointer = function recursiveToPointer(value) {
  if (_.isArray(value)) return (0, _map.default)(value).call(value, recursiveToPointer);
  if (isPlainObject(value)) return _.mapObject(value, recursiveToPointer);
  if (_.isObject(value) && value._toPointer) return value._toPointer();
  return value;
};

var RESERVED_KEYS = ['objectId', 'createdAt', 'updatedAt'];

var checkReservedKey = function checkReservedKey(key) {
  if ((0, _indexOf.default)(RESERVED_KEYS).call(RESERVED_KEYS, key) !== -1) {
    throw new Error("key[".concat(key, "] is reserved"));
  }
};

var handleBatchResults = function handleBatchResults(results) {
  var firstError = (0, _find.default)(_).call(_, results, function (result) {
    return result instanceof Error;
  });

  if (!firstError) {
    return results;
  }

  var error = new AVError(firstError.code, firstError.message);
  error.results = results;
  throw error;
}; // Helper function to get a value from a Backbone object as a property
// or as a function.


function getValue(object, prop) {
  if (!(object && object[prop])) {
    return null;
  }

  return _.isFunction(object[prop]) ? object[prop]() : object[prop];
} // AV.Object is analogous to the Java AVObject.
// It also implements the same interface as a Backbone model.


module.exports = function (AV) {
  /**
   * Creates a new model with defined attributes. A client id (cid) is
   * automatically generated and assigned for you.
   *
   * <p>You won't normally call this method directly.  It is recommended that
   * you use a subclass of <code>AV.Object</code> instead, created by calling
   * <code>extend</code>.</p>
   *
   * <p>However, if you don't want to use a subclass, or aren't sure which
   * subclass is appropriate, you can use this form:<pre>
   *     var object = new AV.Object("ClassName");
   * </pre>
   * That is basically equivalent to:<pre>
   *     var MyClass = AV.Object.extend("ClassName");
   *     var object = new MyClass();
   * </pre></p>
   *
   * @param {Object} attributes The initial set of data to store in the object.
   * @param {Object} options A set of Backbone-like options for creating the
   *     object.  The only option currently supported is "collection".
   * @see AV.Object.extend
   *
   * @class
   *
   * <p>The fundamental unit of AV data, which implements the Backbone Model
   * interface.</p>
   */
  AV.Object = function (attributes, options) {
    // Allow new AV.Object("ClassName") as a shortcut to _create.
    if (_.isString(attributes)) {
      return AV.Object._create.apply(this, arguments);
    }

    attributes = attributes || {};

    if (options && options.parse) {
      attributes = this.parse(attributes);
      attributes = this._mergeMagicFields(attributes);
    }

    var defaults = getValue(this, 'defaults');

    if (defaults) {
      attributes = _.extend({}, defaults, attributes);
    }

    if (options && options.collection) {
      this.collection = options.collection;
    }

    this._serverData = {}; // The last known data for this object from cloud.

    this._opSetQueue = [{}]; // List of sets of changes to the data.

    this._flags = {};
    this.attributes = {}; // The best estimate of this's current data.

    this._hashedJSON = {}; // Hash of values of containers at last save.

    this._escapedAttributes = {};
    this.cid = _.uniqueId('c');
    this.changed = {};
    this._silent = {};
    this._pending = {};
    this.set(attributes, {
      silent: true
    });
    this.changed = {};
    this._silent = {};
    this._pending = {};
    this._hasData = true;
    this._previousAttributes = _.clone(this.attributes);
    this.initialize.apply(this, arguments);
  };
  /**
   * @lends AV.Object.prototype
   * @property {String} id The objectId of the AV Object.
   */

  /**
   * Saves the given list of AV.Object.
   * If any error is encountered, stops and calls the error handler.
   *
   * @example
   * AV.Object.saveAll([object1, object2, ...]).then(function(list) {
   *   // All the objects were saved.
   * }, function(error) {
   *   // An error occurred while saving one of the objects.
   * });
   *
   * @param {Array} list A list of <code>AV.Object</code>.
   */


  AV.Object.saveAll = function (list, options) {
    return AV.Object._deepSaveAsync(list, null, options);
  };
  /**
   * Fetch the given list of AV.Object.
   *
   * @param {AV.Object[]} objects A list of <code>AV.Object</code>
   * @param {AuthOptions} options
   * @return {Promise.<AV.Object[]>} The given list of <code>AV.Object</code>, updated
   */


  AV.Object.fetchAll = function (objects, options) {
    return _promise.default.resolve().then(function () {
      return _request('batch', null, null, 'POST', {
        requests: (0, _map.default)(_).call(_, objects, function (object) {
          var _context;

          if (!object.className) throw new Error('object must have className to fetch');
          if (!object.id) throw new Error('object must have id to fetch');
          if (object.dirty()) throw new Error('object is modified but not saved');
          return {
            method: 'GET',
            path: (0, _concat.default)(_context = "/1.1/classes/".concat(object.className, "/")).call(_context, object.id)
          };
        })
      }, options);
    }).then(function (response) {
      var results = (0, _map.default)(_).call(_, objects, function (object, i) {
        if (response[i].success) {
          var fetchedAttrs = object.parse(response[i].success);

          object._cleanupUnsetKeys(fetchedAttrs);

          object._finishFetch(fetchedAttrs);

          return object;
        }

        if (response[i].success === null) {
          return new AVError(AVError.OBJECT_NOT_FOUND, 'Object not found.');
        }

        return new AVError(response[i].error.code, response[i].error.error);
      });
      return handleBatchResults(results);
    });
  }; // Attach all inheritable methods to the AV.Object prototype.


  _.extend(AV.Object.prototype, AV.Events,
  /** @lends AV.Object.prototype */
  {
    _fetchWhenSave: false,

    /**
     * Initialize is an empty function by default. Override it with your own
     * initialization logic.
     */
    initialize: function initialize() {},

    /**
     * Set whether to enable fetchWhenSave option when updating object.
     * When set true, SDK would fetch the latest object after saving.
     * Default is false.
     *
     * @deprecated use AV.Object#save with options.fetchWhenSave instead
     * @param {boolean} enable  true to enable fetchWhenSave option.
     */
    fetchWhenSave: function fetchWhenSave(enable) {
      console.warn('AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead.');

      if (!_.isBoolean(enable)) {
        throw new Error('Expect boolean value for fetchWhenSave');
      }

      this._fetchWhenSave = enable;
    },

    /**
     * Returns the object's objectId.
     * @return {String} the objectId.
     */
    getObjectId: function getObjectId() {
      return this.id;
    },

    /**
     * Returns the object's createdAt attribute.
     * @return {Date}
     */
    getCreatedAt: function getCreatedAt() {
      return this.createdAt;
    },

    /**
     * Returns the object's updatedAt attribute.
     * @return {Date}
     */
    getUpdatedAt: function getUpdatedAt() {
      return this.updatedAt;
    },

    /**
     * Returns a JSON version of the object.
     * @return {Object}
     */
    toJSON: function toJSON(key, holder) {
      var seenObjects = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      return this._toFullJSON(seenObjects, false);
    },

    /**
     * Returns a JSON version of the object with meta data.
     * Inverse to {@link AV.parseJSON}
     * @since 3.0.0
     * @return {Object}
     */
    toFullJSON: function toFullJSON() {
      var seenObjects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return this._toFullJSON(seenObjects);
    },
    _toFullJSON: function _toFullJSON(seenObjects) {
      var _this = this;

      var full = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var json = _.clone(this.attributes);

      if (_.isArray(seenObjects)) {
        var newSeenObjects = (0, _concat.default)(seenObjects).call(seenObjects, this);
      }

      AV._objectEach(json, function (val, key) {
        json[key] = AV._encode(val, newSeenObjects, undefined, full);
      });

      AV._objectEach(this._operations, function (val, key) {
        json[key] = val;
      });

      if (_.has(this, 'id')) {
        json.objectId = this.id;
      }

      ['createdAt', 'updatedAt'].forEach(function (key) {
        if (_.has(_this, key)) {
          var val = _this[key];
          json[key] = _.isDate(val) ? val.toJSON() : val;
        }
      });

      if (full) {
        json.__type = 'Object';
        if (_.isArray(seenObjects) && seenObjects.length) json.__type = 'Pointer';
        json.className = this.className;
      }

      return json;
    },

    /**
     * Updates _hashedJSON to reflect the current state of this object.
     * Adds any changed hash values to the set of pending changes.
     * @private
     */
    _refreshCache: function _refreshCache() {
      var self = this;

      if (self._refreshingCache) {
        return;
      }

      self._refreshingCache = true;

      AV._objectEach(this.attributes, function (value, key) {
        if (value instanceof AV.Object) {
          value._refreshCache();
        } else if (_.isObject(value)) {
          if (self._resetCacheForKey(key)) {
            self.set(key, new AV.Op.Set(value), {
              silent: true
            });
          }
        }
      });

      delete self._refreshingCache;
    },

    /**
     * Returns true if this object has been modified since its last
     * save/refresh.  If an attribute is specified, it returns true only if that
     * particular attribute has been modified since the last save/refresh.
     * @param {String} attr An attribute name (optional).
     * @return {Boolean}
     */
    dirty: function dirty(attr) {
      this._refreshCache();

      var currentChanges = _.last(this._opSetQueue);

      if (attr) {
        return currentChanges[attr] ? true : false;
      }

      if (!this.id) {
        return true;
      }

      if ((0, _keys2.default)(_).call(_, currentChanges).length > 0) {
        return true;
      }

      return false;
    },

    /**
     * Returns the keys of the modified attribute since its last save/refresh.
     * @return {String[]}
     */
    dirtyKeys: function dirtyKeys() {
      this._refreshCache();

      var currentChanges = _.last(this._opSetQueue);

      return (0, _keys2.default)(_).call(_, currentChanges);
    },

    /**
     * Gets a Pointer referencing this Object.
     * @private
     */
    _toPointer: function _toPointer() {
      // if (!this.id) {
      //   throw new Error("Can't serialize an unsaved AV.Object");
      // }
      return {
        __type: 'Pointer',
        className: this.className,
        objectId: this.id
      };
    },

    /**
     * Gets the value of an attribute.
     * @param {String} attr The string name of an attribute.
     */
    get: function get(attr) {
      switch (attr) {
        case 'objectId':
          return this.id;

        case 'createdAt':
        case 'updatedAt':
          return this[attr];

        default:
          return this.attributes[attr];
      }
    },

    /**
     * Gets a relation on the given class for the attribute.
     * @param {String} attr The attribute to get the relation for.
     * @return {AV.Relation}
     */
    relation: function relation(attr) {
      var value = this.get(attr);

      if (value) {
        if (!(value instanceof AV.Relation)) {
          throw new Error('Called relation() on non-relation field ' + attr);
        }

        value._ensureParentAndKey(this, attr);

        return value;
      } else {
        return new AV.Relation(this, attr);
      }
    },

    /**
     * Gets the HTML-escaped value of an attribute.
     */
    escape: function escape(attr) {
      var html = this._escapedAttributes[attr];

      if (html) {
        return html;
      }

      var val = this.attributes[attr];
      var escaped;

      if (isNullOrUndefined(val)) {
        escaped = '';
      } else {
        escaped = _.escape(val.toString());
      }

      this._escapedAttributes[attr] = escaped;
      return escaped;
    },

    /**
     * Returns <code>true</code> if the attribute contains a value that is not
     * null or undefined.
     * @param {String} attr The string name of the attribute.
     * @return {Boolean}
     */
    has: function has(attr) {
      return !isNullOrUndefined(this.attributes[attr]);
    },

    /**
     * Pulls "special" fields like objectId, createdAt, etc. out of attrs
     * and puts them on "this" directly.  Removes them from attrs.
     * @param attrs - A dictionary with the data for this AV.Object.
     * @private
     */
    _mergeMagicFields: function _mergeMagicFields(attrs) {
      // Check for changes of magic fields.
      var model = this;
      var specialFields = ['objectId', 'createdAt', 'updatedAt'];

      AV._arrayEach(specialFields, function (attr) {
        if (attrs[attr]) {
          if (attr === 'objectId') {
            model.id = attrs[attr];
          } else if ((attr === 'createdAt' || attr === 'updatedAt') && !_.isDate(attrs[attr])) {
            model[attr] = AV._parseDate(attrs[attr]);
          } else {
            model[attr] = attrs[attr];
          }

          delete attrs[attr];
        }
      });

      return attrs;
    },

    /**
     * Returns the json to be sent to the server.
     * @private
     */
    _startSave: function _startSave() {
      this._opSetQueue.push({});
    },

    /**
     * Called when a save fails because of an error. Any changes that were part
     * of the save need to be merged with changes made after the save. This
     * might throw an exception is you do conflicting operations. For example,
     * if you do:
     *   object.set("foo", "bar");
     *   object.set("invalid field name", "baz");
     *   object.save();
     *   object.increment("foo");
     * then this will throw when the save fails and the client tries to merge
     * "bar" with the +1.
     * @private
     */
    _cancelSave: function _cancelSave() {
      var failedChanges = _.first(this._opSetQueue);

      this._opSetQueue = _.rest(this._opSetQueue);

      var nextChanges = _.first(this._opSetQueue);

      AV._objectEach(failedChanges, function (op, key) {
        var op1 = failedChanges[key];
        var op2 = nextChanges[key];

        if (op1 && op2) {
          nextChanges[key] = op2._mergeWithPrevious(op1);
        } else if (op1) {
          nextChanges[key] = op1;
        }
      });

      this._saving = this._saving - 1;
    },

    /**
     * Called when a save completes successfully. This merges the changes that
     * were saved into the known server data, and overrides it with any data
     * sent directly from the server.
     * @private
     */
    _finishSave: function _finishSave(serverData) {
      var _context2;

      // Grab a copy of any object referenced by this object. These instances
      // may have already been fetched, and we don't want to lose their data.
      // Note that doing it like this means we will unify separate copies of the
      // same object, but that's a risk we have to take.
      var fetchedObjects = {};

      AV._traverse(this.attributes, function (object) {
        if (object instanceof AV.Object && object.id && object._hasData) {
          fetchedObjects[object.id] = object;
        }
      });

      var savedChanges = _.first(this._opSetQueue);

      this._opSetQueue = _.rest(this._opSetQueue);

      this._applyOpSet(savedChanges, this._serverData);

      this._mergeMagicFields(serverData);

      var self = this;

      AV._objectEach(serverData, function (value, key) {
        self._serverData[key] = AV._decode(value, key); // Look for any objects that might have become unfetched and fix them
        // by replacing their values with the previously observed values.

        var fetched = AV._traverse(self._serverData[key], function (object) {
          if (object instanceof AV.Object && fetchedObjects[object.id]) {
            return fetchedObjects[object.id];
          }
        });

        if (fetched) {
          self._serverData[key] = fetched;
        }
      });

      this._rebuildAllEstimatedData();

      var opSetQueue = (0, _map.default)(_context2 = this._opSetQueue).call(_context2, _.clone);

      this._refreshCache();

      this._opSetQueue = opSetQueue;
      this._saving = this._saving - 1;
    },

    /**
     * Called when a fetch or login is complete to set the known server data to
     * the given object.
     * @private
     */
    _finishFetch: function _finishFetch(serverData, hasData) {
      // Clear out any changes the user might have made previously.
      this._opSetQueue = [{}]; // Bring in all the new server data.

      this._mergeMagicFields(serverData);

      var self = this;

      AV._objectEach(serverData, function (value, key) {
        self._serverData[key] = AV._decode(value, key);
      }); // Refresh the attributes.


      this._rebuildAllEstimatedData(); // Clear out the cache of mutable containers.


      this._refreshCache();

      this._opSetQueue = [{}];
      this._hasData = hasData;
    },

    /**
     * Applies the set of AV.Op in opSet to the object target.
     * @private
     */
    _applyOpSet: function _applyOpSet(opSet, target) {
      var self = this;

      AV._objectEach(opSet, function (change, key) {
        var _findValue = findValue(target, key),
            _findValue2 = (0, _slicedToArray2.default)(_findValue, 3),
            value = _findValue2[0],
            actualTarget = _findValue2[1],
            actualKey = _findValue2[2];

        setValue(target, key, change._estimate(value, self, key));

        if (actualTarget && actualTarget[actualKey] === AV.Op._UNSET) {
          delete actualTarget[actualKey];
        }
      });
    },

    /**
     * Replaces the cached value for key with the current value.
     * Returns true if the new value is different than the old value.
     * @private
     */
    _resetCacheForKey: function _resetCacheForKey(key) {
      var value = this.attributes[key];

      if (_.isObject(value) && !(value instanceof AV.Object) && !(value instanceof AV.File)) {
        var json = (0, _stringify.default)(recursiveToPointer(value));

        if (this._hashedJSON[key] !== json) {
          var wasSet = !!this._hashedJSON[key];
          this._hashedJSON[key] = json;
          return wasSet;
        }
      }

      return false;
    },

    /**
     * Populates attributes[key] by starting with the last known data from the
     * server, and applying all of the local changes that have been made to that
     * key since then.
     * @private
     */
    _rebuildEstimatedDataForKey: function _rebuildEstimatedDataForKey(key) {
      var self = this;
      delete this.attributes[key];

      if (this._serverData[key]) {
        this.attributes[key] = this._serverData[key];
      }

      AV._arrayEach(this._opSetQueue, function (opSet) {
        var op = opSet[key];

        if (op) {
          var _findValue3 = findValue(self.attributes, key),
              _findValue4 = (0, _slicedToArray2.default)(_findValue3, 4),
              value = _findValue4[0],
              actualTarget = _findValue4[1],
              actualKey = _findValue4[2],
              firstKey = _findValue4[3];

          setValue(self.attributes, key, op._estimate(value, self, key));

          if (actualTarget && actualTarget[actualKey] === AV.Op._UNSET) {
            delete actualTarget[actualKey];
          }

          self._resetCacheForKey(firstKey);
        }
      });
    },

    /**
     * Populates attributes by starting with the last known data from the
     * server, and applying all of the local changes that have been made since
     * then.
     * @private
     */
    _rebuildAllEstimatedData: function _rebuildAllEstimatedData() {
      var self = this;

      var previousAttributes = _.clone(this.attributes);

      this.attributes = _.clone(this._serverData);

      AV._arrayEach(this._opSetQueue, function (opSet) {
        self._applyOpSet(opSet, self.attributes);

        AV._objectEach(opSet, function (op, key) {
          self._resetCacheForKey(key);
        });
      }); // Trigger change events for anything that changed because of the fetch.


      AV._objectEach(previousAttributes, function (oldValue, key) {
        if (self.attributes[key] !== oldValue) {
          self.trigger('change:' + key, self, self.attributes[key], {});
        }
      });

      AV._objectEach(this.attributes, function (newValue, key) {
        if (!_.has(previousAttributes, key)) {
          self.trigger('change:' + key, self, newValue, {});
        }
      });
    },

    /**
     * Sets a hash of model attributes on the object, firing
     * <code>"change"</code> unless you choose to silence it.
     *
     * <p>You can call it with an object containing keys and values, or with one
     * key and value.  For example:</p>
     *
     * @example
     * gameTurn.set({
     *   player: player1,
     *   diceRoll: 2
     * });
     *
     * game.set("currentPlayer", player2);
     *
     * game.set("finished", true);
     *
     * @param {String} key The key to set.
     * @param {Any} value The value to give it.
     * @param {Object} [options]
     * @param {Boolean} [options.silent]
     * @return {AV.Object} self if succeeded, throws if the value is not valid.
     * @see AV.Object#validate
     */
    set: function set(key, value, options) {
      var attrs;

      if (_.isObject(key) || isNullOrUndefined(key)) {
        attrs = _.mapObject(key, function (v, k) {
          checkReservedKey(k);
          return AV._decode(v, k);
        });
        options = value;
      } else {
        attrs = {};
        checkReservedKey(key);
        attrs[key] = AV._decode(value, key);
      } // Extract attributes and options.


      options = options || {};

      if (!attrs) {
        return this;
      }

      if (attrs instanceof AV.Object) {
        attrs = attrs.attributes;
      } // If the unset option is used, every attribute should be a Unset.


      if (options.unset) {
        AV._objectEach(attrs, function (unused_value, key) {
          attrs[key] = new AV.Op.Unset();
        });
      } // Apply all the attributes to get the estimated values.


      var dataToValidate = _.clone(attrs);

      var self = this;

      AV._objectEach(dataToValidate, function (value, key) {
        if (value instanceof AV.Op) {
          dataToValidate[key] = value._estimate(self.attributes[key], self, key);

          if (dataToValidate[key] === AV.Op._UNSET) {
            delete dataToValidate[key];
          }
        }
      }); // Run validation.


      this._validate(attrs, options);

      options.changes = {};
      var escaped = this._escapedAttributes; // Update attributes.

      AV._arrayEach((0, _keys2.default)(_).call(_, attrs), function (attr) {
        var val = attrs[attr]; // If this is a relation object we need to set the parent correctly,
        // since the location where it was parsed does not have access to
        // this object.

        if (val instanceof AV.Relation) {
          val.parent = self;
        }

        if (!(val instanceof AV.Op)) {
          val = new AV.Op.Set(val);
        } // See if this change will actually have any effect.


        var isRealChange = true;

        if (val instanceof AV.Op.Set && _.isEqual(self.attributes[attr], val.value)) {
          isRealChange = false;
        }

        if (isRealChange) {
          delete escaped[attr];

          if (options.silent) {
            self._silent[attr] = true;
          } else {
            options.changes[attr] = true;
          }
        }

        var currentChanges = _.last(self._opSetQueue);

        currentChanges[attr] = val._mergeWithPrevious(currentChanges[attr]);

        self._rebuildEstimatedDataForKey(attr);

        if (isRealChange) {
          self.changed[attr] = self.attributes[attr];

          if (!options.silent) {
            self._pending[attr] = true;
          }
        } else {
          delete self.changed[attr];
          delete self._pending[attr];
        }
      });

      if (!options.silent) {
        this.change(options);
      }

      return this;
    },

    /**
     * Remove an attribute from the model, firing <code>"change"</code> unless
     * you choose to silence it. This is a noop if the attribute doesn't
     * exist.
     * @param key {String} The key.
     */
    unset: function unset(attr, options) {
      options = options || {};
      options.unset = true;
      return this.set(attr, null, options);
    },

    /**
     * Atomically increments the value of the given attribute the next time the
     * object is saved. If no amount is specified, 1 is used by default.
     *
     * @param key {String} The key.
     * @param amount {Number} The amount to increment by.
     */
    increment: function increment(attr, amount) {
      if (_.isUndefined(amount) || _.isNull(amount)) {
        amount = 1;
      }

      return this.set(attr, new AV.Op.Increment(amount));
    },

    /**
     * Atomically add an object to the end of the array associated with a given
     * key.
     * @param key {String} The key.
     * @param item {} The item to add.
     */
    add: function add(attr, item) {
      return this.set(attr, new AV.Op.Add(ensureArray(item)));
    },

    /**
     * Atomically add an object to the array associated with a given key, only
     * if it is not already present in the array. The position of the insert is
     * not guaranteed.
     *
     * @param key {String} The key.
     * @param item {} The object to add.
     */
    addUnique: function addUnique(attr, item) {
      return this.set(attr, new AV.Op.AddUnique(ensureArray(item)));
    },

    /**
     * Atomically remove all instances of an object from the array associated
     * with a given key.
     *
     * @param key {String} The key.
     * @param item {} The object to remove.
     */
    remove: function remove(attr, item) {
      return this.set(attr, new AV.Op.Remove(ensureArray(item)));
    },

    /**
     * Atomically apply a "bit and" operation on the value associated with a
     * given key.
     *
     * @param key {String} The key.
     * @param value {Number} The value to apply.
     */
    bitAnd: function bitAnd(attr, value) {
      return this.set(attr, new AV.Op.BitAnd(value));
    },

    /**
     * Atomically apply a "bit or" operation on the value associated with a
     * given key.
     *
     * @param key {String} The key.
     * @param value {Number} The value to apply.
     */
    bitOr: function bitOr(attr, value) {
      return this.set(attr, new AV.Op.BitOr(value));
    },

    /**
     * Atomically apply a "bit xor" operation on the value associated with a
     * given key.
     *
     * @param key {String} The key.
     * @param value {Number} The value to apply.
     */
    bitXor: function bitXor(attr, value) {
      return this.set(attr, new AV.Op.BitXor(value));
    },

    /**
     * Returns an instance of a subclass of AV.Op describing what kind of
     * modification has been performed on this field since the last time it was
     * saved. For example, after calling object.increment("x"), calling
     * object.op("x") would return an instance of AV.Op.Increment.
     *
     * @param key {String} The key.
     * @returns {AV.Op} The operation, or undefined if none.
     */
    op: function op(attr) {
      return _.last(this._opSetQueue)[attr];
    },

    /**
     * Clear all attributes on the model, firing <code>"change"</code> unless
     * you choose to silence it.
     */
    clear: function clear(options) {
      options = options || {};
      options.unset = true;

      var keysToClear = _.extend(this.attributes, this._operations);

      return this.set(keysToClear, options);
    },

    /**
     * Clears any (or specific) changes to the model made since the last save.
     * @param {string|string[]} [keys] specify keys to revert.
     */
    revert: function revert(keys) {
      var lastOp = _.last(this._opSetQueue);

      var _keys = ensureArray(keys || (0, _keys2.default)(_).call(_, lastOp));

      _keys.forEach(function (key) {
        delete lastOp[key];
      });

      this._rebuildAllEstimatedData();

      return this;
    },

    /**
     * Returns a JSON-encoded set of operations to be sent with the next save
     * request.
     * @private
     */
    _getSaveJSON: function _getSaveJSON() {
      var json = _.clone(_.first(this._opSetQueue));

      AV._objectEach(json, function (op, key) {
        json[key] = op.toJSON();
      });

      return json;
    },

    /**
     * Returns true if this object can be serialized for saving.
     * @private
     */
    _canBeSerialized: function _canBeSerialized() {
      return AV.Object._canBeSerializedAsValue(this.attributes);
    },

    /**
     * Fetch the model from the server. If the server's representation of the
     * model differs from its current attributes, they will be overriden,
     * triggering a <code>"change"</code> event.
     * @param {Object} fetchOptions Optional options to set 'keys',
     *      'include' and 'includeACL' option.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the fetch
     *     completes.
     */
    fetch: function fetch() {
      var fetchOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 ? arguments[1] : undefined;

      if (!this.id) {
        throw new Error('Cannot fetch unsaved object');
      }

      var self = this;

      var request = _request('classes', this.className, this.id, 'GET', transformFetchOptions(fetchOptions), options);

      return request.then(function (response) {
        var fetchedAttrs = self.parse(response);

        self._cleanupUnsetKeys(fetchedAttrs, (0, _keys2.default)(fetchOptions) ? ensureArray((0, _keys2.default)(fetchOptions)).join(',').split(',') : undefined);

        self._finishFetch(fetchedAttrs, true);

        return self;
      });
    },
    _cleanupUnsetKeys: function _cleanupUnsetKeys(fetchedAttrs) {
      var _this2 = this;

      var fetchedKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _keys2.default)(_).call(_, this._serverData);

      _.forEach(fetchedKeys, function (key) {
        if (fetchedAttrs[key] === undefined) delete _this2._serverData[key];
      });
    },

    /**
     * Set a hash of model attributes, and save the model to the server.
     * updatedAt will be updated when the request returns.
     * You can either call it as:<pre>
     *   object.save();</pre>
     * or<pre>
     *   object.save(null, options);</pre>
     * or<pre>
     *   object.save(attrs, options);</pre>
     * or<pre>
     *   object.save(key, value, options);</pre>
     *
     * @example
     * gameTurn.save({
     *   player: "Jake Cutter",
     *   diceRoll: 2
     * }).then(function(gameTurnAgain) {
     *   // The save was successful.
     * }, function(error) {
     *   // The save failed.  Error is an instance of AVError.
     * });
     *
     * @param {AuthOptions} options AuthOptions plus:
     * @param {Boolean} options.fetchWhenSave fetch and update object after save succeeded
     * @param {AV.Query} options.query Save object only when it matches the query
     * @return {Promise} A promise that is fulfilled when the save
     *     completes.
     * @see AVError
     */
    save: function save(arg1, arg2, arg3) {
      var attrs, current, options;

      if (_.isObject(arg1) || isNullOrUndefined(arg1)) {
        attrs = arg1;
        options = arg2;
      } else {
        attrs = {};
        attrs[arg1] = arg2;
        options = arg3;
      }

      options = _.clone(options) || {};

      if (options.wait) {
        current = _.clone(this.attributes);
      }

      var setOptions = _.clone(options) || {};

      if (setOptions.wait) {
        setOptions.silent = true;
      }

      if (attrs) {
        this.set(attrs, setOptions);
      }

      var model = this;
      var unsavedChildren = [];
      var unsavedFiles = [];

      AV.Object._findUnsavedChildren(model, unsavedChildren, unsavedFiles);

      if (unsavedChildren.length + unsavedFiles.length > 1) {
        return AV.Object._deepSaveAsync(this, model, options);
      }

      this._startSave();

      this._saving = (this._saving || 0) + 1;
      this._allPreviousSaves = this._allPreviousSaves || _promise.default.resolve();
      this._allPreviousSaves = this._allPreviousSaves.catch(function (e) {}).then(function () {
        var method = model.id ? 'PUT' : 'POST';

        var json = model._getSaveJSON();

        var query = {};

        if (model._fetchWhenSave || options.fetchWhenSave) {
          query['new'] = 'true';
        } // user login option


        if (options._failOnNotExist) {
          query.failOnNotExist = 'true';
        }

        if (options.query) {
          var queryParams;

          if (typeof options.query._getParams === 'function') {
            queryParams = options.query._getParams();

            if (queryParams) {
              query.where = queryParams.where;
            }
          }

          if (!query.where) {
            var error = new Error('options.query is not an AV.Query');
            throw error;
          }
        }

        _.extend(json, model._flags);

        var route = 'classes';
        var className = model.className;

        if (model.className === '_User' && !model.id) {
          // Special-case user sign-up.
          route = 'users';
          className = null;
        } //hook makeRequest in options.


        var makeRequest = options._makeRequest || _request;
        var requestPromise = makeRequest(route, className, model.id, method, json, options, query);
        requestPromise = requestPromise.then(function (resp) {
          var serverAttrs = model.parse(resp);

          if (options.wait) {
            serverAttrs = _.extend(attrs || {}, serverAttrs);
          }

          model._finishSave(serverAttrs);

          if (options.wait) {
            model.set(current, setOptions);
          }

          return model;
        }, function (error) {
          model._cancelSave();

          throw error;
        });
        return requestPromise;
      });
      return this._allPreviousSaves;
    },

    /**
     * Destroy this model on the server if it was already persisted.
     * Optimistically removes the model from its collection, if it has one.
     * @param {AuthOptions} options AuthOptions plus:
     * @param {Boolean} [options.wait] wait for the server to respond
     * before removal.
     *
     * @return {Promise} A promise that is fulfilled when the destroy
     *     completes.
     */
    destroy: function destroy(options) {
      options = options || {};
      var model = this;

      var triggerDestroy = function triggerDestroy() {
        model.trigger('destroy', model, model.collection, options);
      };

      if (!this.id) {
        return triggerDestroy();
      }

      if (!options.wait) {
        triggerDestroy();
      }

      var request = _request('classes', this.className, this.id, 'DELETE', this._flags, options);

      return request.then(function () {
        if (options.wait) {
          triggerDestroy();
        }

        return model;
      });
    },

    /**
     * Converts a response into the hash of attributes to be set on the model.
     * @ignore
     */
    parse: function parse(resp) {
      var output = _.clone(resp);

      ['createdAt', 'updatedAt'].forEach(function (key) {
        if (output[key]) {
          output[key] = AV._parseDate(output[key]);
        }
      });

      if (output.createdAt && !output.updatedAt) {
        output.updatedAt = output.createdAt;
      }

      return output;
    },

    /**
     * Creates a new model with identical attributes to this one.
     * @return {AV.Object}
     */
    clone: function clone() {
      return new this.constructor(this.attributes);
    },

    /**
     * Returns true if this object has never been saved to AV.
     * @return {Boolean}
     */
    isNew: function isNew() {
      return !this.id;
    },

    /**
     * Call this method to manually fire a `"change"` event for this model and
     * a `"change:attribute"` event for each changed attribute.
     * Calling this will cause all objects observing the model to update.
     */
    change: function change(options) {
      options = options || {};
      var changing = this._changing;
      this._changing = true; // Silent changes become pending changes.

      var self = this;

      AV._objectEach(this._silent, function (attr) {
        self._pending[attr] = true;
      }); // Silent changes are triggered.


      var changes = _.extend({}, options.changes, this._silent);

      this._silent = {};

      AV._objectEach(changes, function (unused_value, attr) {
        self.trigger('change:' + attr, self, self.get(attr), options);
      });

      if (changing) {
        return this;
      } // This is to get around lint not letting us make a function in a loop.


      var deleteChanged = function deleteChanged(value, attr) {
        if (!self._pending[attr] && !self._silent[attr]) {
          delete self.changed[attr];
        }
      }; // Continue firing `"change"` events while there are pending changes.


      while (!_.isEmpty(this._pending)) {
        this._pending = {};
        this.trigger('change', this, options); // Pending and silent changes still remain.

        AV._objectEach(this.changed, deleteChanged);

        self._previousAttributes = _.clone(this.attributes);
      }

      this._changing = false;
      return this;
    },

    /**
     * Gets the previous value of an attribute, recorded at the time the last
     * <code>"change"</code> event was fired.
     * @param {String} attr Name of the attribute to get.
     */
    previous: function previous(attr) {
      if (!arguments.length || !this._previousAttributes) {
        return null;
      }

      return this._previousAttributes[attr];
    },

    /**
     * Gets all of the attributes of the model at the time of the previous
     * <code>"change"</code> event.
     * @return {Object}
     */
    previousAttributes: function previousAttributes() {
      return _.clone(this._previousAttributes);
    },

    /**
     * Checks if the model is currently in a valid state. It's only possible to
     * get into an *invalid* state if you're using silent changes.
     * @return {Boolean}
     */
    isValid: function isValid() {
      try {
        this.validate(this.attributes);
      } catch (error) {
        return false;
      }

      return true;
    },

    /**
     * You should not call this function directly unless you subclass
     * <code>AV.Object</code>, in which case you can override this method
     * to provide additional validation on <code>set</code> and
     * <code>save</code>.  Your implementation should throw an Error if
     * the attrs is invalid
     *
     * @param {Object} attrs The current data to validate.
     * @see AV.Object#set
     */
    validate: function validate(attrs) {
      if (_.has(attrs, 'ACL') && !(attrs.ACL instanceof AV.ACL)) {
        throw new AVError(AVError.OTHER_CAUSE, 'ACL must be a AV.ACL.');
      }
    },

    /**
     * Run validation against a set of incoming attributes, returning `true`
     * if all is well. If a specific `error` callback has been passed,
     * call that instead of firing the general `"error"` event.
     * @private
     */
    _validate: function _validate(attrs, options) {
      if (options.silent || !this.validate) {
        return;
      }

      attrs = _.extend({}, this.attributes, attrs);
      this.validate(attrs);
    },

    /**
     * Returns the ACL for this object.
     * @returns {AV.ACL} An instance of AV.ACL.
     * @see AV.Object#get
     */
    getACL: function getACL() {
      return this.get('ACL');
    },

    /**
     * Sets the ACL to be used for this object.
     * @param {AV.ACL} acl An instance of AV.ACL.
     * @param {Object} options Optional Backbone-like options object to be
     *     passed in to set.
     * @return {AV.Object} self
     * @see AV.Object#set
     */
    setACL: function setACL(acl, options) {
      return this.set('ACL', acl, options);
    },
    disableBeforeHook: function disableBeforeHook() {
      this.ignoreHook('beforeSave');
      this.ignoreHook('beforeUpdate');
      this.ignoreHook('beforeDelete');
    },
    disableAfterHook: function disableAfterHook() {
      this.ignoreHook('afterSave');
      this.ignoreHook('afterUpdate');
      this.ignoreHook('afterDelete');
    },
    ignoreHook: function ignoreHook(hookName) {
      if (!_.contains(['beforeSave', 'afterSave', 'beforeUpdate', 'afterUpdate', 'beforeDelete', 'afterDelete'], hookName)) {
        throw new Error('Unsupported hookName: ' + hookName);
      }

      if (!AV.hookKey) {
        throw new Error('ignoreHook required hookKey');
      }

      if (!this._flags.__ignore_hooks) {
        this._flags.__ignore_hooks = [];
      }

      this._flags.__ignore_hooks.push(hookName);
    }
  });
  /**
   * Creates an instance of a subclass of AV.Object for the give classname
   * and id.
   * @param  {String|Function} class the className or a subclass of AV.Object.
   * @param {String} id The object id of this model.
   * @return {AV.Object} A new subclass instance of AV.Object.
   */


  AV.Object.createWithoutData = function (klass, id, hasData) {
    var _klass;

    if (_.isString(klass)) {
      _klass = AV.Object._getSubclass(klass);
    } else if (klass.prototype && klass.prototype instanceof AV.Object) {
      _klass = klass;
    } else {
      throw new Error('class must be a string or a subclass of AV.Object.');
    }

    if (!id) {
      throw new TypeError('The objectId must be provided');
    }

    var object = new _klass();
    object.id = id;
    object._hasData = hasData;
    return object;
  };
  /**
   * Delete objects in batch.
   * @param {AV.Object[]} objects The <code>AV.Object</code> array to be deleted.
   * @param {AuthOptions} options
   * @return {Promise} A promise that is fulfilled when the save
   *     completes.
   */


  AV.Object.destroyAll = function (objects) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!objects || objects.length === 0) {
      return _promise.default.resolve();
    }

    var objectsByClassNameAndFlags = _.groupBy(objects, function (object) {
      return (0, _stringify.default)({
        className: object.className,
        flags: object._flags
      });
    });

    var body = {
      requests: (0, _map.default)(_).call(_, objectsByClassNameAndFlags, function (objects) {
        var _context3;

        var ids = (0, _map.default)(_).call(_, objects, 'id').join(',');
        return {
          method: 'DELETE',
          path: (0, _concat.default)(_context3 = "/1.1/classes/".concat(objects[0].className, "/")).call(_context3, ids),
          body: objects[0]._flags
        };
      })
    };
    return _request('batch', null, null, 'POST', body, options).then(function (response) {
      var firstError = (0, _find.default)(_).call(_, response, function (result) {
        return !result.success;
      });
      if (firstError) throw new AVError(firstError.error.code, firstError.error.error);
      return undefined;
    });
  };
  /**
   * Returns the appropriate subclass for making new instances of the given
   * className string.
   * @private
   */


  AV.Object._getSubclass = function (className) {
    if (!_.isString(className)) {
      throw new Error('AV.Object._getSubclass requires a string argument.');
    }

    var ObjectClass = AV.Object._classMap[className];

    if (!ObjectClass) {
      ObjectClass = AV.Object.extend(className);
      AV.Object._classMap[className] = ObjectClass;
    }

    return ObjectClass;
  };
  /**
   * Creates an instance of a subclass of AV.Object for the given classname.
   * @private
   */


  AV.Object._create = function (className, attributes, options) {
    var ObjectClass = AV.Object._getSubclass(className);

    return new ObjectClass(attributes, options);
  }; // Set up a map of className to class so that we can create new instances of
  // AV Objects from JSON automatically.


  AV.Object._classMap = {};
  AV.Object._extend = AV._extend;
  /**
   * Creates a new model with defined attributes,
   * It's the same with
   * <pre>
   *   new AV.Object(attributes, options);
   *  </pre>
   * @param {Object} attributes The initial set of data to store in the object.
   * @param {Object} options A set of Backbone-like options for creating the
   *     object.  The only option currently supported is "collection".
   * @return {AV.Object}
   * @since v0.4.4
   * @see AV.Object
   * @see AV.Object.extend
   */

  AV.Object['new'] = function (attributes, options) {
    return new AV.Object(attributes, options);
  };
  /**
   * Creates a new subclass of AV.Object for the given AV class name.
   *
   * <p>Every extension of a AV class will inherit from the most recent
   * previous extension of that class. When a AV.Object is automatically
   * created by parsing JSON, it will use the most recent extension of that
   * class.</p>
   *
   * @example
   * var MyClass = AV.Object.extend("MyClass", {
   *     // Instance properties
   * }, {
   *     // Class properties
   * });
   *
   * @param {String} className The name of the AV class backing this model.
   * @param {Object} protoProps Instance properties to add to instances of the
   *     class returned from this method.
   * @param {Object} classProps Class properties to add the class returned from
   *     this method.
   * @return {Class} A new subclass of AV.Object.
   */


  AV.Object.extend = function (className, protoProps, classProps) {
    // Handle the case with only two args.
    if (!_.isString(className)) {
      if (className && _.has(className, 'className')) {
        return AV.Object.extend(className.className, className, protoProps);
      } else {
        throw new Error("AV.Object.extend's first argument should be the className.");
      }
    } // If someone tries to subclass "User", coerce it to the right type.


    if (className === 'User') {
      className = '_User';
    }

    var NewClassObject = null;

    if (_.has(AV.Object._classMap, className)) {
      var OldClassObject = AV.Object._classMap[className]; // This new subclass has been told to extend both from "this" and from
      // OldClassObject. This is multiple inheritance, which isn't supported.
      // For now, let's just pick one.

      if (protoProps || classProps) {
        NewClassObject = OldClassObject._extend(protoProps, classProps);
      } else {
        return OldClassObject;
      }
    } else {
      protoProps = protoProps || {};
      protoProps._className = className;
      NewClassObject = this._extend(protoProps, classProps);
    } // Extending a subclass should reuse the classname automatically.


    NewClassObject.extend = function (arg0) {
      var _context4;

      if (_.isString(arg0) || arg0 && _.has(arg0, 'className')) {
        return AV.Object.extend.apply(NewClassObject, arguments);
      }

      var newArguments = (0, _concat.default)(_context4 = [className]).call(_context4, _.toArray(arguments));
      return AV.Object.extend.apply(NewClassObject, newArguments);
    }; // Add the query property descriptor.


    (0, _defineProperty.default)(NewClassObject, 'query', (0, _getOwnPropertyDescriptor.default)(AV.Object, 'query'));

    NewClassObject['new'] = function (attributes, options) {
      return new NewClassObject(attributes, options);
    };

    AV.Object._classMap[className] = NewClassObject;
    return NewClassObject;
  }; // ES6 class syntax support


  (0, _defineProperty.default)(AV.Object.prototype, 'className', {
    get: function get() {
      var className = this._className || this.constructor._LCClassName || this.constructor.name; // If someone tries to subclass "User", coerce it to the right type.

      if (className === 'User') {
        return '_User';
      }

      return className;
    }
  });
  /**
   * Register a class.
   * If a subclass of <code>AV.Object</code> is defined with your own implement
   * rather then <code>AV.Object.extend</code>, the subclass must be registered.
   * @param {Function} klass A subclass of <code>AV.Object</code>
   * @param {String} [name] Specify the name of the class. Useful when the class might be uglified.
   * @example
   * class Person extend AV.Object {}
   * AV.Object.register(Person);
   */

  AV.Object.register = function (klass, name) {
    if (!(klass.prototype instanceof AV.Object)) {
      throw new Error('registered class is not a subclass of AV.Object');
    }

    var className = name || klass.name;

    if (!className.length) {
      throw new Error('registered class must be named');
    }

    if (name) {
      klass._LCClassName = name;
    }

    AV.Object._classMap[className] = klass;
  };
  /**
   * Get a new Query of the current class
   * @name query
   * @memberof AV.Object
   * @type AV.Query
   * @readonly
   * @since v3.1.0
   * @example
   * const Post = AV.Object.extend('Post');
   * Post.query.equalTo('author', 'leancloud').find().then();
   */


  (0, _defineProperty.default)(AV.Object, 'query', {
    get: function get() {
      return new AV.Query(this.prototype.className);
    }
  });

  AV.Object._findUnsavedChildren = function (objects, children, files) {
    AV._traverse(objects, function (object) {
      if (object instanceof AV.Object) {
        if (object.dirty()) {
          children.push(object);
        }

        return;
      }

      if (object instanceof AV.File) {
        if (!object.id) {
          files.push(object);
        }

        return;
      }
    });
  };

  AV.Object._canBeSerializedAsValue = function (object) {
    var canBeSerializedAsValue = true;

    if (object instanceof AV.Object || object instanceof AV.File) {
      canBeSerializedAsValue = !!object.id;
    } else if (_.isArray(object)) {
      AV._arrayEach(object, function (child) {
        if (!AV.Object._canBeSerializedAsValue(child)) {
          canBeSerializedAsValue = false;
        }
      });
    } else if (_.isObject(object)) {
      AV._objectEach(object, function (child) {
        if (!AV.Object._canBeSerializedAsValue(child)) {
          canBeSerializedAsValue = false;
        }
      });
    }

    return canBeSerializedAsValue;
  };

  AV.Object._deepSaveAsync = function (object, model, options) {
    var unsavedChildren = [];
    var unsavedFiles = [];

    AV.Object._findUnsavedChildren(object, unsavedChildren, unsavedFiles);

    unsavedFiles = _.uniq(unsavedFiles);

    var promise = _promise.default.resolve();

    _.each(unsavedFiles, function (file) {
      promise = promise.then(function () {
        return file.save();
      });
    });

    var objects = _.uniq(unsavedChildren);

    var remaining = _.uniq(objects);

    return promise.then(function () {
      return continueWhile(function () {
        return remaining.length > 0;
      }, function () {
        // Gather up all the objects that can be saved in this batch.
        var batch = [];
        var newRemaining = [];

        AV._arrayEach(remaining, function (object) {
          if (object._canBeSerialized()) {
            batch.push(object);
          } else {
            newRemaining.push(object);
          }
        });

        remaining = newRemaining; // If we can't save any objects, there must be a circular reference.

        if (batch.length === 0) {
          return _promise.default.reject(new AVError(AVError.OTHER_CAUSE, 'Tried to save a batch with a cycle.'));
        } // Reserve a spot in every object's save queue.


        var readyToStart = _promise.default.resolve((0, _map.default)(_).call(_, batch, function (object) {
          return object._allPreviousSaves || _promise.default.resolve();
        })); // Save a single batch, whether previous saves succeeded or failed.


        var bathSavePromise = readyToStart.then(function () {
          return _request('batch', null, null, 'POST', {
            requests: (0, _map.default)(_).call(_, batch, function (object) {
              var method = object.id ? 'PUT' : 'POST';

              var json = object._getSaveJSON();

              _.extend(json, object._flags);

              var route = 'classes';
              var className = object.className;
              var path = "/".concat(route, "/").concat(className);

              if (object.className === '_User' && !object.id) {
                // Special-case user sign-up.
                path = '/users';
              }

              var path = "/1.1".concat(path);

              if (object.id) {
                path = path + '/' + object.id;
              }

              object._startSave();

              return {
                method: method,
                path: path,
                body: json,
                params: options && options.fetchWhenSave ? {
                  fetchWhenSave: true
                } : undefined
              };
            })
          }, options).then(function (response) {
            var results = (0, _map.default)(_).call(_, batch, function (object, i) {
              if (response[i].success) {
                object._finishSave(object.parse(response[i].success));

                return object;
              }

              object._cancelSave();

              return new AVError(response[i].error.code, response[i].error.error);
            });
            return handleBatchResults(results);
          });
        });

        AV._arrayEach(batch, function (object) {
          object._allPreviousSaves = bathSavePromise;
        });

        return bathSavePromise;
      });
    }).then(function () {
      return object;
    });
  };
};