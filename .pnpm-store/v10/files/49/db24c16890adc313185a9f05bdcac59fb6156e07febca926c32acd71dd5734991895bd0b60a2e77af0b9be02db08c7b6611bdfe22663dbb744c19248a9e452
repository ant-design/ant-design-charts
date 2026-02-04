'use strict';

var RequireObjectCoercible = require('es-object-atoms/RequireObjectCoercible');
var implementation = require('./implementation');

var getProto = require('get-proto');

var $getPrototypeOf = Object.getPrototypeOf;
var getPrototypeOfPrimitivesToo = function getPrototypeOf(value) {
	RequireObjectCoercible(value);
	return $getPrototypeOf(Object(value));
};

module.exports = function getPolyfill() {
	if ($getPrototypeOf) {
		try {
			$getPrototypeOf(true);
		} catch (e) {
			return getPrototypeOfPrimitivesToo;
		}
		return $getPrototypeOf;
	}
	return getProto || implementation;
};
