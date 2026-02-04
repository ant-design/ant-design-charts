"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/test-utils.ts
var test_utils_exports = {};
__export(test_utils_exports, {
  destroyIntersectionMocking: () => destroyIntersectionMocking,
  intersectionMockInstance: () => intersectionMockInstance,
  mockAllIsIntersecting: () => mockAllIsIntersecting,
  mockIsIntersecting: () => mockIsIntersecting,
  resetIntersectionMocking: () => resetIntersectionMocking,
  setupIntersectionMocking: () => setupIntersectionMocking
});
module.exports = __toCommonJS(test_utils_exports);
var React = __toESM(require("react"));
var DeprecatedReactTestUtils = __toESM(require("react-dom/test-utils"));
var observers = /* @__PURE__ */ new Map();
var originalIntersectionObserver = typeof window !== "undefined" ? window.IntersectionObserver : void 0;
function testLibraryUtil() {
  if (typeof vi !== "undefined") return vi;
  if (typeof jest !== "undefined") return jest;
  return void 0;
}
function isMocking() {
  const util = testLibraryUtil();
  if (util && typeof util.isMockFunction === "function") {
    return util.isMockFunction(window.IntersectionObserver);
  }
  if (typeof window !== "undefined" && window.IntersectionObserver && "mockClear" in window.IntersectionObserver) {
    return true;
  }
  return false;
}
if (typeof window !== "undefined" && typeof beforeEach !== "undefined" && typeof afterEach !== "undefined") {
  beforeEach(() => {
    const util = testLibraryUtil();
    if (util) {
      setupIntersectionMocking(util.fn);
    }
    observers.clear();
  });
  afterEach(resetIntersectionMocking);
}
function getActFn() {
  if (!(typeof window !== "undefined" && // @ts-ignore
  window.IS_REACT_ACT_ENVIRONMENT)) {
    return void 0;
  }
  return typeof React.act === "function" ? React.act : DeprecatedReactTestUtils.act;
}
function warnOnMissingSetup() {
  if (isMocking()) return;
  console.error(
    `React Intersection Observer was not configured to handle mocking.
Outside Jest and Vitest, you might need to manually configure it by calling setupIntersectionMocking() and resetIntersectionMocking() in your test setup file.

// test-setup.js
import { resetIntersectionMocking, setupIntersectionMocking } from 'react-intersection-observer/test-utils';

beforeEach(() => {
  setupIntersectionMocking(vi.fn);
});

afterEach(() => {
  resetIntersectionMocking();
});`
  );
}
function setupIntersectionMocking(mockFn) {
  window.IntersectionObserver = mockFn((cb, options = {}) => {
    var _a, _b, _c;
    const item = {
      callback: cb,
      elements: /* @__PURE__ */ new Set(),
      created: Date.now()
    };
    const instance = {
      thresholds: Array.isArray(options.threshold) ? options.threshold : [(_a = options.threshold) != null ? _a : 0],
      root: (_b = options.root) != null ? _b : null,
      rootMargin: (_c = options.rootMargin) != null ? _c : "",
      observe: mockFn((element) => {
        item.elements.add(element);
      }),
      unobserve: mockFn((element) => {
        item.elements.delete(element);
      }),
      disconnect: mockFn(() => {
        observers.delete(instance);
      }),
      takeRecords: mockFn()
    };
    observers.set(instance, item);
    return instance;
  });
}
function resetIntersectionMocking() {
  if (window.IntersectionObserver && "mockClear" in window.IntersectionObserver && typeof window.IntersectionObserver.mockClear === "function") {
    window.IntersectionObserver.mockClear();
  }
  observers.clear();
}
function destroyIntersectionMocking() {
  resetIntersectionMocking();
  window.IntersectionObserver = originalIntersectionObserver;
}
function triggerIntersection(elements, trigger, observer, item) {
  var _a;
  const entries = [];
  const isIntersecting = typeof trigger === "number" ? observer.thresholds.some((threshold) => trigger >= threshold) : trigger;
  let ratio;
  if (typeof trigger === "number") {
    const intersectedThresholds = observer.thresholds.filter(
      (threshold) => trigger >= threshold
    );
    ratio = intersectedThresholds.length > 0 ? intersectedThresholds[intersectedThresholds.length - 1] : 0;
  } else {
    ratio = trigger ? 1 : 0;
  }
  for (const element of elements) {
    entries.push({
      boundingClientRect: element.getBoundingClientRect(),
      intersectionRatio: ratio,
      intersectionRect: isIntersecting ? element.getBoundingClientRect() : {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
        toJSON() {
        }
      },
      isIntersecting,
      rootBounds: observer.root instanceof Element ? (_a = observer.root) == null ? void 0 : _a.getBoundingClientRect() : null,
      target: element,
      time: Date.now() - item.created
    });
  }
  const act3 = getActFn();
  if (act3) act3(() => item.callback(entries, observer));
  else item.callback(entries, observer);
}
function mockAllIsIntersecting(isIntersecting) {
  warnOnMissingSetup();
  for (const [observer, item] of observers) {
    triggerIntersection(
      Array.from(item.elements),
      isIntersecting,
      observer,
      item
    );
  }
}
function mockIsIntersecting(element, isIntersecting) {
  warnOnMissingSetup();
  const observer = intersectionMockInstance(element);
  if (!observer) {
    throw new Error(
      "No IntersectionObserver instance found for element. Is it still mounted in the DOM?"
    );
  }
  const item = observers.get(observer);
  if (item) {
    triggerIntersection([element], isIntersecting, observer, item);
  }
}
function intersectionMockInstance(element) {
  warnOnMissingSetup();
  for (const [observer, item] of observers) {
    if (item.elements.has(element)) {
      return observer;
    }
  }
  throw new Error(
    "Failed to find IntersectionObserver for element. Is it being observed?"
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  destroyIntersectionMocking,
  intersectionMockInstance,
  mockAllIsIntersecting,
  mockIsIntersecting,
  resetIntersectionMocking,
  setupIntersectionMocking
});
