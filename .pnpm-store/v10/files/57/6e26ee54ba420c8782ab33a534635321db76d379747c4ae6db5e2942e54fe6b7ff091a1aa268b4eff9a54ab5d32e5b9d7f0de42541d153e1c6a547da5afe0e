// Copyright (c) 2015 David M. Lee, II
'use strict';

var pt = require('../index.js');
var assert = require('assert');

function later(when) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, when);
  });
}

describe('promise-timeout', function() {
  describe('a slow promise', function() {
    it('should time out', function() {
      return pt.timeout(later(1000), 10)
        .then(function() {
          assert.fail('should not have resolved');
        }, function(err) {
          assert(err instanceof pt.TimeoutError);
        });
    });

    it('have a decent stack trace', function() {
      return pt.timeout(later(1000), 10)
        .then(function() {
          assert.fail('should not have resolved');
        }, function(err) {
          assert(err.stack.includes('test.js'));
        });
    });
});

  describe('a fast promise', function() {
    it('should resolve with correct value', function() {
      return pt.timeout(Promise.resolve('some value'), 1000)
        .then(function(val) {
          assert.equal(val, 'some value');
        }, function(err) {
          assert.fail('should have resolved');
        });
    });
    it('should reject with correct exception', function() {
      return pt.timeout(Promise.reject(new Error('some error')), 1000)
        .then(function(val) {
          assert.fail('should have rejected');
        }, function(err) {
          assert.equal(err.message, 'some error');
        });
    });
  });
});
