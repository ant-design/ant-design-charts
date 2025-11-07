/*!
 * @antv/g-dom-mutation-observer-api
 * @description A simple implementation of DOM MutationObserver API.
 * @version 2.0.38
 * @date 7/30/2025, 1:34:51 PM
 * @author AntVis
 * @docs https://g.antv.antgroup.com/
 */
'use strict';

var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var gLite = require('@antv/g-lite');

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

var uidCounter = 0;
var registrationsTable = new WeakMap();
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
      if (options.attributes) node.addEventListener(gLite.ElementEvent.ATTR_MODIFIED, this, true);

      // if (options.characterData) node.addEventListener('DOMCharacterDataModified', this, true);

      if (options.childList) node.addEventListener(gLite.ElementEvent.INSERTED, this, true);
      if (options.childList || options.subtree) node.addEventListener(gLite.ElementEvent.REMOVED, this, true);
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
      if (options.attributes) node.removeEventListener(gLite.ElementEvent.ATTR_MODIFIED, this, true);

      // if (options.characterData) node.removeEventListener('DOMCharacterDataModified', this, true);

      if (options.childList) node.removeEventListener(gLite.ElementEvent.INSERTED, this, true);
      if (options.childList || options.subtree) node.removeEventListener(gLite.ElementEvent.REMOVED, this, true);
    }

    /**
     * Adds a transient observer on node. The transient observer gets removed
     * next time we deliver the change records.
     */
    // addTransientObserver(node: IElement) {
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
        case gLite.ElementEvent.ATTR_MODIFIED:
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
          var oldValue = e.attrChange === gLite.MutationEvent.ADDITION ? null : e.prevValue;
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

        case gLite.ElementEvent.REMOVED:
        // this.addTransientObserver(e.target as IElement);
        // Fall through.
        case gLite.ElementEvent.INSERTED:
          // http://dom.spec.whatwg.org/#concept-mo-queue-childlist
          target = e.relatedNode;
          var changedNode = e.target;
          var addedNodes;
          var removedNodes;
          if (e.type === gLite.ElementEvent.INSERTED) {
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
    if (typeof gLite.runtime.globalThis !== 'undefined') {
      gLite.runtime.globalThis.setTimeout(dispatchCallbacks);
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

exports.MutationObserver = MutationObserver;
exports.MutationRecord = MutationRecord;
exports.Registration = Registration;
//# sourceMappingURL=index.js.map
