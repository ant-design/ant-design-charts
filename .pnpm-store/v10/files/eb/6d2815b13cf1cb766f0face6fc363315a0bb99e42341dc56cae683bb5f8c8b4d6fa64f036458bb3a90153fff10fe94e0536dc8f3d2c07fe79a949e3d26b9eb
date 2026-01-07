"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isJestMockOrSpy = exports.determinePropertyMessage = exports.containsEntry = exports.contains = void 0;
const contains = (equals, list, value) => {
  return list.findIndex(item => equals(item, value)) > -1;
};
exports.contains = contains;
const determinePropertyMessage = (actual, property, message = 'Not Accessible') => {
  return actual && Object.hasOwnProperty.call(actual, property) ? actual[property] : message;
};
exports.determinePropertyMessage = determinePropertyMessage;
const isJestMockOrSpy = value => {
  return !!(value && value._isMockFunction === true && typeof value.mock === 'object');
};
exports.isJestMockOrSpy = isJestMockOrSpy;
const containsEntry = (equals, obj, [key, value]) => obj.hasOwnProperty && Object.prototype.hasOwnProperty.call(obj, key) && equals(obj[key], value);
exports.containsEntry = containsEntry;