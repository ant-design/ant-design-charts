const { parse, NodeRepr } = require('./index.js');

// Implement classList and dataset wrappers
Object.defineProperty(NodeRepr.prototype, 'classList', {
  get() {
    const node = this;
    return {
      add(...tokens) {
        tokens.forEach(t => node._classListAdd(String(t)));
      },
      remove(...tokens) {
        tokens.forEach(t => node._classListRemove(String(t)));
      },
      toggle(token, force) {
        return node._classListToggle(String(token), force);
      },
      contains(token) {
        return node._classListContains(String(token));
      },
      get length() {
        const classAttr = node.getAttribute('class');
        return classAttr ? classAttr.split(/\s+/).filter(Boolean).length : 0;
      },
      item(index) {
        const classAttr = node.getAttribute('class');
        if (!classAttr) return null;
        const classes = classAttr.split(/\s+/).filter(Boolean);
        return classes[index] || null;
      },
      toString() {
        return node.getAttribute('class') || '';
      },
      value: {
          get() { return node.getAttribute('class') || ''; },
          set(v) { node.setAttribute('class', v); }
      },
      [Symbol.iterator]() {
        const classAttr = node.getAttribute('class');
        const classes = classAttr ? classAttr.split(/\s+/).filter(Boolean) : [];
        return classes[Symbol.iterator]();
      }
    };
  },
  configurable: true
});

Object.defineProperty(NodeRepr.prototype, 'dataset', {
  get() {
    const node = this;
    const data = node._datasetGet();
    return new Proxy(data, {
      get(target, prop) {
        if (typeof prop === 'string') {
           // Refresh data from native side is expensive, but we need to be live?
           // Actually datasetGet returns a snapshot map.
           // So we should probably implement get/set directly on node via helper methods.
           // But datasetGet returns all keys.
           // Let's assume we use the snapshot for enumeration but for get/set we use native helpers.
           // Wait, datasetGet returns a plain object (IndexMap -> Object).
           // So 'target' is that object.
           return target[prop];
        }
        return Reflect.get(target, prop);
      },
      set(target, prop, value) {
        if (typeof prop === 'string') {
          node._datasetSet(prop, String(value));
          target[prop] = String(value); // Update local snapshot too
          return true;
        }
        return false;
      },
      deleteProperty(target, prop) {
        if (typeof prop === 'string') {
          node._datasetRemove(prop);
          delete target[prop];
          return true;
        }
        return false;
      }
    });
  },
  configurable: true
});

class DOMParser {
  parseFromString(string, mimeType) {
    if (mimeType === 'text/html') {
      return parse(string);
    }
    throw new Error(`Unsupported mime type: ${mimeType}`);
  }
}

module.exports = {
  NodeRepr,
  DOMParser,
  parse
};

