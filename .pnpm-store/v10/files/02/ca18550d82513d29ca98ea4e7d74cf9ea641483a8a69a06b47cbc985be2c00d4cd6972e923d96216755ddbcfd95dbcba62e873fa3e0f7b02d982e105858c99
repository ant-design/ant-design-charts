"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _ = require('underscore');

module.exports = function (AV) {
  /**
   * @private
   * @class
   * A AV.Op is an atomic operation that can be applied to a field in a
   * AV.Object. For example, calling <code>object.set("foo", "bar")</code>
   * is an example of a AV.Op.Set. Calling <code>object.unset("foo")</code>
   * is a AV.Op.Unset. These operations are stored in a AV.Object and
   * sent to the server as part of <code>object.save()</code> operations.
   * Instances of AV.Op should be immutable.
   *
   * You should not create subclasses of AV.Op or instantiate AV.Op
   * directly.
   */
  AV.Op = function () {
    this._initialize.apply(this, arguments);
  };

  _.extend(AV.Op.prototype,
  /** @lends AV.Op.prototype */
  {
    _initialize: function _initialize() {}
  });

  _.extend(AV.Op, {
    /**
     * To create a new Op, call AV.Op._extend();
     * @private
     */
    _extend: AV._extend,
    // A map of __op string to decoder function.
    _opDecoderMap: {},

    /**
     * Registers a function to convert a json object with an __op field into an
     * instance of a subclass of AV.Op.
     * @private
     */
    _registerDecoder: function _registerDecoder(opName, decoder) {
      AV.Op._opDecoderMap[opName] = decoder;
    },

    /**
     * Converts a json object into an instance of a subclass of AV.Op.
     * @private
     */
    _decode: function _decode(json) {
      var decoder = AV.Op._opDecoderMap[json.__op];

      if (decoder) {
        return decoder(json);
      } else {
        return undefined;
      }
    }
  });
  /*
   * Add a handler for Batch ops.
   */


  AV.Op._registerDecoder('Batch', function (json) {
    var op = null;

    AV._arrayEach(json.ops, function (nextOp) {
      nextOp = AV.Op._decode(nextOp);
      op = nextOp._mergeWithPrevious(op);
    });

    return op;
  });
  /**
   * @private
   * @class
   * A Set operation indicates that either the field was changed using
   * AV.Object.set, or it is a mutable container that was detected as being
   * changed.
   */


  AV.Op.Set = AV.Op._extend(
  /** @lends AV.Op.Set.prototype */
  {
    _initialize: function _initialize(value) {
      this._value = value;
    },

    /**
     * Returns the new value of this field after the set.
     */
    value: function value() {
      return this._value;
    },

    /**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      return AV._encode(this.value());
    },
    _mergeWithPrevious: function _mergeWithPrevious(previous) {
      return this;
    },
    _estimate: function _estimate(oldValue) {
      return this.value();
    }
  });
  /**
   * A sentinel value that is returned by AV.Op.Unset._estimate to
   * indicate the field should be deleted. Basically, if you find _UNSET as a
   * value in your object, you should remove that key.
   */

  AV.Op._UNSET = {};
  /**
   * @private
   * @class
   * An Unset operation indicates that this field has been deleted from the
   * object.
   */

  AV.Op.Unset = AV.Op._extend(
  /** @lends AV.Op.Unset.prototype */
  {
    /**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      return {
        __op: 'Delete'
      };
    },
    _mergeWithPrevious: function _mergeWithPrevious(previous) {
      return this;
    },
    _estimate: function _estimate(oldValue) {
      return AV.Op._UNSET;
    }
  });

  AV.Op._registerDecoder('Delete', function (json) {
    return new AV.Op.Unset();
  });
  /**
   * @private
   * @class
   * An Increment is an atomic operation where the numeric value for the field
   * will be increased by a given amount.
   */


  AV.Op.Increment = AV.Op._extend(
  /** @lends AV.Op.Increment.prototype */
  {
    _initialize: function _initialize(amount) {
      this._amount = amount;
    },

    /**
     * Returns the amount to increment by.
     * @return {Number} the amount to increment by.
     */
    amount: function amount() {
      return this._amount;
    },

    /**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      return {
        __op: 'Increment',
        amount: this._amount
      };
    },
    _mergeWithPrevious: function _mergeWithPrevious(previous) {
      if (!previous) {
        return this;
      } else if (previous instanceof AV.Op.Unset) {
        return new AV.Op.Set(this.amount());
      } else if (previous instanceof AV.Op.Set) {
        return new AV.Op.Set(previous.value() + this.amount());
      } else if (previous instanceof AV.Op.Increment) {
        return new AV.Op.Increment(this.amount() + previous.amount());
      } else {
        throw new Error('Op is invalid after previous op.');
      }
    },
    _estimate: function _estimate(oldValue) {
      if (!oldValue) {
        return this.amount();
      }

      return oldValue + this.amount();
    }
  });

  AV.Op._registerDecoder('Increment', function (json) {
    return new AV.Op.Increment(json.amount);
  });
  /**
   * @private
   * @class
   * BitAnd is an atomic operation where the given value will be bit and to the
   * value than is stored in this field.
   */


  AV.Op.BitAnd = AV.Op._extend(
  /** @lends AV.Op.BitAnd.prototype */
  {
    _initialize: function _initialize(value) {
      this._value = value;
    },
    value: function value() {
      return this._value;
    },

    /**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      return {
        __op: 'BitAnd',
        value: this.value()
      };
    },
    _mergeWithPrevious: function _mergeWithPrevious(previous) {
      if (!previous) {
        return this;
      } else if (previous instanceof AV.Op.Unset) {
        return new AV.Op.Set(0);
      } else if (previous instanceof AV.Op.Set) {
        return new AV.Op.Set(previous.value() & this.value());
      } else {
        throw new Error('Op is invalid after previous op.');
      }
    },
    _estimate: function _estimate(oldValue) {
      return oldValue & this.value();
    }
  });

  AV.Op._registerDecoder('BitAnd', function (json) {
    return new AV.Op.BitAnd(json.value);
  });
  /**
   * @private
   * @class
   * BitOr is an atomic operation where the given value will be bit and to the
   * value than is stored in this field.
   */


  AV.Op.BitOr = AV.Op._extend(
  /** @lends AV.Op.BitOr.prototype */
  {
    _initialize: function _initialize(value) {
      this._value = value;
    },
    value: function value() {
      return this._value;
    },

    /**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      return {
        __op: 'BitOr',
        value: this.value()
      };
    },
    _mergeWithPrevious: function _mergeWithPrevious(previous) {
      if (!previous) {
        return this;
      } else if (previous instanceof AV.Op.Unset) {
        return new AV.Op.Set(this.value());
      } else if (previous instanceof AV.Op.Set) {
        return new AV.Op.Set(previous.value() | this.value());
      } else {
        throw new Error('Op is invalid after previous op.');
      }
    },
    _estimate: function _estimate(oldValue) {
      return oldValue | this.value();
    }
  });

  AV.Op._registerDecoder('BitOr', function (json) {
    return new AV.Op.BitOr(json.value);
  });
  /**
   * @private
   * @class
   * BitXor is an atomic operation where the given value will be bit and to the
   * value than is stored in this field.
   */


  AV.Op.BitXor = AV.Op._extend(
  /** @lends AV.Op.BitXor.prototype */
  {
    _initialize: function _initialize(value) {
      this._value = value;
    },
    value: function value() {
      return this._value;
    },

    /**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      return {
        __op: 'BitXor',
        value: this.value()
      };
    },
    _mergeWithPrevious: function _mergeWithPrevious(previous) {
      if (!previous) {
        return this;
      } else if (previous instanceof AV.Op.Unset) {
        return new AV.Op.Set(this.value());
      } else if (previous instanceof AV.Op.Set) {
        return new AV.Op.Set(previous.value() ^ this.value());
      } else {
        throw new Error('Op is invalid after previous op.');
      }
    },
    _estimate: function _estimate(oldValue) {
      return oldValue ^ this.value();
    }
  });

  AV.Op._registerDecoder('BitXor', function (json) {
    return new AV.Op.BitXor(json.value);
  });
  /**
   * @private
   * @class
   * Add is an atomic operation where the given objects will be appended to the
   * array that is stored in this field.
   */


  AV.Op.Add = AV.Op._extend(
  /** @lends AV.Op.Add.prototype */
  {
    _initialize: function _initialize(objects) {
      this._objects = objects;
    },

    /**
     * Returns the objects to be added to the array.
     * @return {Array} The objects to be added to the array.
     */
    objects: function objects() {
      return this._objects;
    },

    /**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      return {
        __op: 'Add',
        objects: AV._encode(this.objects())
      };
    },
    _mergeWithPrevious: function _mergeWithPrevious(previous) {
      if (!previous) {
        return this;
      } else if (previous instanceof AV.Op.Unset) {
        return new AV.Op.Set(this.objects());
      } else if (previous instanceof AV.Op.Set) {
        return new AV.Op.Set(this._estimate(previous.value()));
      } else if (previous instanceof AV.Op.Add) {
        var _context;

        return new AV.Op.Add((0, _concat.default)(_context = previous.objects()).call(_context, this.objects()));
      } else {
        throw new Error('Op is invalid after previous op.');
      }
    },
    _estimate: function _estimate(oldValue) {
      if (!oldValue) {
        return _.clone(this.objects());
      } else {
        return (0, _concat.default)(oldValue).call(oldValue, this.objects());
      }
    }
  });

  AV.Op._registerDecoder('Add', function (json) {
    return new AV.Op.Add(AV._decode(json.objects));
  });
  /**
   * @private
   * @class
   * AddUnique is an atomic operation where the given items will be appended to
   * the array that is stored in this field only if they were not already
   * present in the array.
   */


  AV.Op.AddUnique = AV.Op._extend(
  /** @lends AV.Op.AddUnique.prototype */
  {
    _initialize: function _initialize(objects) {
      this._objects = _.uniq(objects);
    },

    /**
     * Returns the objects to be added to the array.
     * @return {Array} The objects to be added to the array.
     */
    objects: function objects() {
      return this._objects;
    },

    /**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      return {
        __op: 'AddUnique',
        objects: AV._encode(this.objects())
      };
    },
    _mergeWithPrevious: function _mergeWithPrevious(previous) {
      if (!previous) {
        return this;
      } else if (previous instanceof AV.Op.Unset) {
        return new AV.Op.Set(this.objects());
      } else if (previous instanceof AV.Op.Set) {
        return new AV.Op.Set(this._estimate(previous.value()));
      } else if (previous instanceof AV.Op.AddUnique) {
        return new AV.Op.AddUnique(this._estimate(previous.objects()));
      } else {
        throw new Error('Op is invalid after previous op.');
      }
    },
    _estimate: function _estimate(oldValue) {
      if (!oldValue) {
        return _.clone(this.objects());
      } else {
        // We can't just take the _.uniq(_.union(...)) of oldValue and
        // this.objects, because the uniqueness may not apply to oldValue
        // (especially if the oldValue was set via .set())
        var newValue = _.clone(oldValue);

        AV._arrayEach(this.objects(), function (obj) {
          if (obj instanceof AV.Object && obj.id) {
            var matchingObj = (0, _find.default)(_).call(_, newValue, function (anObj) {
              return anObj instanceof AV.Object && anObj.id === obj.id;
            });

            if (!matchingObj) {
              newValue.push(obj);
            } else {
              var index = (0, _indexOf.default)(_).call(_, newValue, matchingObj);
              newValue[index] = obj;
            }
          } else if (!_.contains(newValue, obj)) {
            newValue.push(obj);
          }
        });

        return newValue;
      }
    }
  });

  AV.Op._registerDecoder('AddUnique', function (json) {
    return new AV.Op.AddUnique(AV._decode(json.objects));
  });
  /**
   * @private
   * @class
   * Remove is an atomic operation where the given objects will be removed from
   * the array that is stored in this field.
   */


  AV.Op.Remove = AV.Op._extend(
  /** @lends AV.Op.Remove.prototype */
  {
    _initialize: function _initialize(objects) {
      this._objects = _.uniq(objects);
    },

    /**
     * Returns the objects to be removed from the array.
     * @return {Array} The objects to be removed from the array.
     */
    objects: function objects() {
      return this._objects;
    },

    /**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      return {
        __op: 'Remove',
        objects: AV._encode(this.objects())
      };
    },
    _mergeWithPrevious: function _mergeWithPrevious(previous) {
      if (!previous) {
        return this;
      } else if (previous instanceof AV.Op.Unset) {
        return previous;
      } else if (previous instanceof AV.Op.Set) {
        return new AV.Op.Set(this._estimate(previous.value()));
      } else if (previous instanceof AV.Op.Remove) {
        return new AV.Op.Remove(_.union(previous.objects(), this.objects()));
      } else {
        throw new Error('Op is invalid after previous op.');
      }
    },
    _estimate: function _estimate(oldValue) {
      if (!oldValue) {
        return [];
      } else {
        var newValue = _.difference(oldValue, this.objects()); // If there are saved AV Objects being removed, also remove them.


        AV._arrayEach(this.objects(), function (obj) {
          if (obj instanceof AV.Object && obj.id) {
            newValue = _.reject(newValue, function (other) {
              return other instanceof AV.Object && other.id === obj.id;
            });
          }
        });

        return newValue;
      }
    }
  });

  AV.Op._registerDecoder('Remove', function (json) {
    return new AV.Op.Remove(AV._decode(json.objects));
  });
  /**
   * @private
   * @class
   * A Relation operation indicates that the field is an instance of
   * AV.Relation, and objects are being added to, or removed from, that
   * relation.
   */


  AV.Op.Relation = AV.Op._extend(
  /** @lends AV.Op.Relation.prototype */
  {
    _initialize: function _initialize(adds, removes) {
      this._targetClassName = null;
      var self = this;

      var pointerToId = function pointerToId(object) {
        if (object instanceof AV.Object) {
          if (!object.id) {
            throw new Error("You can't add an unsaved AV.Object to a relation.");
          }

          if (!self._targetClassName) {
            self._targetClassName = object.className;
          }

          if (self._targetClassName !== object.className) {
            throw new Error('Tried to create a AV.Relation with 2 different types: ' + self._targetClassName + ' and ' + object.className + '.');
          }

          return object.id;
        }

        return object;
      };

      this.relationsToAdd = _.uniq((0, _map.default)(_).call(_, adds, pointerToId));
      this.relationsToRemove = _.uniq((0, _map.default)(_).call(_, removes, pointerToId));
    },

    /**
     * Returns an array of unfetched AV.Object that are being added to the
     * relation.
     * @return {Array}
     */
    added: function added() {
      var self = this;
      return (0, _map.default)(_).call(_, this.relationsToAdd, function (objectId) {
        var object = AV.Object._create(self._targetClassName);

        object.id = objectId;
        return object;
      });
    },

    /**
     * Returns an array of unfetched AV.Object that are being removed from
     * the relation.
     * @return {Array}
     */
    removed: function removed() {
      var self = this;
      return (0, _map.default)(_).call(_, this.relationsToRemove, function (objectId) {
        var object = AV.Object._create(self._targetClassName);

        object.id = objectId;
        return object;
      });
    },

    /**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      var adds = null;
      var removes = null;
      var self = this;

      var idToPointer = function idToPointer(id) {
        return {
          __type: 'Pointer',
          className: self._targetClassName,
          objectId: id
        };
      };

      var pointers = null;

      if (this.relationsToAdd.length > 0) {
        pointers = (0, _map.default)(_).call(_, this.relationsToAdd, idToPointer);
        adds = {
          __op: 'AddRelation',
          objects: pointers
        };
      }

      if (this.relationsToRemove.length > 0) {
        pointers = (0, _map.default)(_).call(_, this.relationsToRemove, idToPointer);
        removes = {
          __op: 'RemoveRelation',
          objects: pointers
        };
      }

      if (adds && removes) {
        return {
          __op: 'Batch',
          ops: [adds, removes]
        };
      }

      return adds || removes || {};
    },
    _mergeWithPrevious: function _mergeWithPrevious(previous) {
      if (!previous) {
        return this;
      } else if (previous instanceof AV.Op.Unset) {
        throw new Error("You can't modify a relation after deleting it.");
      } else if (previous instanceof AV.Op.Relation) {
        if (previous._targetClassName && previous._targetClassName !== this._targetClassName) {
          throw new Error('Related object must be of class ' + previous._targetClassName + ', but ' + this._targetClassName + ' was passed in.');
        }

        var newAdd = _.union(_.difference(previous.relationsToAdd, this.relationsToRemove), this.relationsToAdd);

        var newRemove = _.union(_.difference(previous.relationsToRemove, this.relationsToAdd), this.relationsToRemove);

        var newRelation = new AV.Op.Relation(newAdd, newRemove);
        newRelation._targetClassName = this._targetClassName;
        return newRelation;
      } else {
        throw new Error('Op is invalid after previous op.');
      }
    },
    _estimate: function _estimate(oldValue, object, key) {
      if (!oldValue) {
        var relation = new AV.Relation(object, key);
        relation.targetClassName = this._targetClassName;
      } else if (oldValue instanceof AV.Relation) {
        if (this._targetClassName) {
          if (oldValue.targetClassName) {
            if (oldValue.targetClassName !== this._targetClassName) {
              throw new Error('Related object must be a ' + oldValue.targetClassName + ', but a ' + this._targetClassName + ' was passed in.');
            }
          } else {
            oldValue.targetClassName = this._targetClassName;
          }
        }

        return oldValue;
      } else {
        throw new Error('Op is invalid after previous op.');
      }
    }
  });

  AV.Op._registerDecoder('AddRelation', function (json) {
    return new AV.Op.Relation(AV._decode(json.objects), []);
  });

  AV.Op._registerDecoder('RemoveRelation', function (json) {
    return new AV.Op.Relation([], AV._decode(json.objects));
  });
};