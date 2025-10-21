(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define('leancloud-realtime', ['exports'], factory) :
	(global = global || self, factory(global.AV = global.AV || {}));
}(this, (function (exports) { 'use strict';

	var define = undefined;
	var require = require || function(id) {throw new Error('Unexpected required ' + id)};



	var process = (typeof window !== 'undefined' && window.process) || {};
	process.env = process.env || {};

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, basedir, module) {
		return module = {
		  path: basedir,
		  exports: {},
		  require: function (path, base) {
	      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
	    }
		}, fn(module, module.exports), module.exports;
	}

	function getCjsExportFromNamespace (n) {
		return n && n['default'] || n;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var long_1 = createCommonjsModule(function (module) {
	/*
	 Copyright 2013 Daniel Wirtz <dcode@dcode.io>
	 Copyright 2009 The Closure Library Authors. All Rights Reserved.

	 Licensed under the Apache License, Version 2.0 (the "License");
	 you may not use this file except in compliance with the License.
	 You may obtain a copy of the License at

	 http://www.apache.org/licenses/LICENSE-2.0

	 Unless required by applicable law or agreed to in writing, software
	 distributed under the License is distributed on an "AS-IS" BASIS,
	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 See the License for the specific language governing permissions and
	 limitations under the License.
	 */

	/**
	 * @license long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
	 * Released under the Apache License, Version 2.0
	 * see: https://github.com/dcodeIO/long.js for details
	 */
	(function(global, factory) {

	    /* AMD */ if (typeof commonjsRequire === 'function' && 'object' === "object" && module && module["exports"])
	        module["exports"] = factory();
	    /* Global */ else
	        (global["dcodeIO"] = global["dcodeIO"] || {})["Long"] = factory();

	})(commonjsGlobal, function() {

	    /**
	     * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
	     *  See the from* functions below for more convenient ways of constructing Longs.
	     * @exports Long
	     * @class A Long class for representing a 64 bit two's-complement integer value.
	     * @param {number} low The low (signed) 32 bits of the long
	     * @param {number} high The high (signed) 32 bits of the long
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
	     * @constructor
	     */
	    function Long(low, high, unsigned) {

	        /**
	         * The low 32 bits as a signed value.
	         * @type {number}
	         */
	        this.low = low | 0;

	        /**
	         * The high 32 bits as a signed value.
	         * @type {number}
	         */
	        this.high = high | 0;

	        /**
	         * Whether unsigned or not.
	         * @type {boolean}
	         */
	        this.unsigned = !!unsigned;
	    }

	    // The internal representation of a long is the two given signed, 32-bit values.
	    // We use 32-bit pieces because these are the size of integers on which
	    // Javascript performs bit-operations.  For operations like addition and
	    // multiplication, we split each number into 16 bit pieces, which can easily be
	    // multiplied within Javascript's floating-point representation without overflow
	    // or change in sign.
	    //
	    // In the algorithms below, we frequently reduce the negative case to the
	    // positive case by negating the input(s) and then post-processing the result.
	    // Note that we must ALWAYS check specially whether those values are MIN_VALUE
	    // (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
	    // a positive number, it overflows back into a negative).  Not handling this
	    // case would often result in infinite recursion.
	    //
	    // Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
	    // methods on which they depend.

	    /**
	     * An indicator used to reliably determine if an object is a Long or not.
	     * @type {boolean}
	     * @const
	     * @private
	     */
	    Long.prototype.__isLong__;

	    Object.defineProperty(Long.prototype, "__isLong__", {
	        value: true,
	        enumerable: false,
	        configurable: false
	    });

	    /**
	     * @function
	     * @param {*} obj Object
	     * @returns {boolean}
	     * @inner
	     */
	    function isLong(obj) {
	        return (obj && obj["__isLong__"]) === true;
	    }

	    /**
	     * Tests if the specified object is a Long.
	     * @function
	     * @param {*} obj Object
	     * @returns {boolean}
	     */
	    Long.isLong = isLong;

	    /**
	     * A cache of the Long representations of small integer values.
	     * @type {!Object}
	     * @inner
	     */
	    var INT_CACHE = {};

	    /**
	     * A cache of the Long representations of small unsigned integer values.
	     * @type {!Object}
	     * @inner
	     */
	    var UINT_CACHE = {};

	    /**
	     * @param {number} value
	     * @param {boolean=} unsigned
	     * @returns {!Long}
	     * @inner
	     */
	    function fromInt(value, unsigned) {
	        var obj, cachedObj, cache;
	        if (unsigned) {
	            value >>>= 0;
	            if (cache = (0 <= value && value < 256)) {
	                cachedObj = UINT_CACHE[value];
	                if (cachedObj)
	                    return cachedObj;
	            }
	            obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
	            if (cache)
	                UINT_CACHE[value] = obj;
	            return obj;
	        } else {
	            value |= 0;
	            if (cache = (-128 <= value && value < 128)) {
	                cachedObj = INT_CACHE[value];
	                if (cachedObj)
	                    return cachedObj;
	            }
	            obj = fromBits(value, value < 0 ? -1 : 0, false);
	            if (cache)
	                INT_CACHE[value] = obj;
	            return obj;
	        }
	    }

	    /**
	     * Returns a Long representing the given 32 bit integer value.
	     * @function
	     * @param {number} value The 32 bit integer in question
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
	     * @returns {!Long} The corresponding Long value
	     */
	    Long.fromInt = fromInt;

	    /**
	     * @param {number} value
	     * @param {boolean=} unsigned
	     * @returns {!Long}
	     * @inner
	     */
	    function fromNumber(value, unsigned) {
	        if (isNaN(value) || !isFinite(value))
	            return unsigned ? UZERO : ZERO;
	        if (unsigned) {
	            if (value < 0)
	                return UZERO;
	            if (value >= TWO_PWR_64_DBL)
	                return MAX_UNSIGNED_VALUE;
	        } else {
	            if (value <= -TWO_PWR_63_DBL)
	                return MIN_VALUE;
	            if (value + 1 >= TWO_PWR_63_DBL)
	                return MAX_VALUE;
	        }
	        if (value < 0)
	            return fromNumber(-value, unsigned).neg();
	        return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
	    }

	    /**
	     * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
	     * @function
	     * @param {number} value The number in question
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
	     * @returns {!Long} The corresponding Long value
	     */
	    Long.fromNumber = fromNumber;

	    /**
	     * @param {number} lowBits
	     * @param {number} highBits
	     * @param {boolean=} unsigned
	     * @returns {!Long}
	     * @inner
	     */
	    function fromBits(lowBits, highBits, unsigned) {
	        return new Long(lowBits, highBits, unsigned);
	    }

	    /**
	     * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
	     *  assumed to use 32 bits.
	     * @function
	     * @param {number} lowBits The low 32 bits
	     * @param {number} highBits The high 32 bits
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
	     * @returns {!Long} The corresponding Long value
	     */
	    Long.fromBits = fromBits;

	    /**
	     * @function
	     * @param {number} base
	     * @param {number} exponent
	     * @returns {number}
	     * @inner
	     */
	    var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

	    /**
	     * @param {string} str
	     * @param {(boolean|number)=} unsigned
	     * @param {number=} radix
	     * @returns {!Long}
	     * @inner
	     */
	    function fromString(str, unsigned, radix) {
	        if (str.length === 0)
	            throw Error('empty string');
	        if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
	            return ZERO;
	        if (typeof unsigned === 'number') {
	            // For goog.math.long compatibility
	            radix = unsigned,
	            unsigned = false;
	        } else {
	            unsigned = !! unsigned;
	        }
	        radix = radix || 10;
	        if (radix < 2 || 36 < radix)
	            throw RangeError('radix');

	        var p;
	        if ((p = str.indexOf('-')) > 0)
	            throw Error('interior hyphen');
	        else if (p === 0) {
	            return fromString(str.substring(1), unsigned, radix).neg();
	        }

	        // Do several (8) digits each time through the loop, so as to
	        // minimize the calls to the very expensive emulated div.
	        var radixToPower = fromNumber(pow_dbl(radix, 8));

	        var result = ZERO;
	        for (var i = 0; i < str.length; i += 8) {
	            var size = Math.min(8, str.length - i),
	                value = parseInt(str.substring(i, i + size), radix);
	            if (size < 8) {
	                var power = fromNumber(pow_dbl(radix, size));
	                result = result.mul(power).add(fromNumber(value));
	            } else {
	                result = result.mul(radixToPower);
	                result = result.add(fromNumber(value));
	            }
	        }
	        result.unsigned = unsigned;
	        return result;
	    }

	    /**
	     * Returns a Long representation of the given string, written using the specified radix.
	     * @function
	     * @param {string} str The textual representation of the Long
	     * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to `false` for signed
	     * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
	     * @returns {!Long} The corresponding Long value
	     */
	    Long.fromString = fromString;

	    /**
	     * @function
	     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
	     * @returns {!Long}
	     * @inner
	     */
	    function fromValue(val) {
	        if (val /* is compatible */ instanceof Long)
	            return val;
	        if (typeof val === 'number')
	            return fromNumber(val);
	        if (typeof val === 'string')
	            return fromString(val);
	        // Throws for non-objects, converts non-instanceof Long:
	        return fromBits(val.low, val.high, val.unsigned);
	    }

	    /**
	     * Converts the specified value to a Long.
	     * @function
	     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
	     * @returns {!Long}
	     */
	    Long.fromValue = fromValue;

	    // NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
	    // no runtime penalty for these.

	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_16_DBL = 1 << 16;

	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_24_DBL = 1 << 24;

	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

	    /**
	     * @type {!Long}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var ZERO = fromInt(0);

	    /**
	     * Signed zero.
	     * @type {!Long}
	     */
	    Long.ZERO = ZERO;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var UZERO = fromInt(0, true);

	    /**
	     * Unsigned zero.
	     * @type {!Long}
	     */
	    Long.UZERO = UZERO;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var ONE = fromInt(1);

	    /**
	     * Signed one.
	     * @type {!Long}
	     */
	    Long.ONE = ONE;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var UONE = fromInt(1, true);

	    /**
	     * Unsigned one.
	     * @type {!Long}
	     */
	    Long.UONE = UONE;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var NEG_ONE = fromInt(-1);

	    /**
	     * Signed negative one.
	     * @type {!Long}
	     */
	    Long.NEG_ONE = NEG_ONE;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var MAX_VALUE = fromBits(0xFFFFFFFF|0, 0x7FFFFFFF|0, false);

	    /**
	     * Maximum signed value.
	     * @type {!Long}
	     */
	    Long.MAX_VALUE = MAX_VALUE;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF|0, 0xFFFFFFFF|0, true);

	    /**
	     * Maximum unsigned value.
	     * @type {!Long}
	     */
	    Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var MIN_VALUE = fromBits(0, 0x80000000|0, false);

	    /**
	     * Minimum signed value.
	     * @type {!Long}
	     */
	    Long.MIN_VALUE = MIN_VALUE;

	    /**
	     * @alias Long.prototype
	     * @inner
	     */
	    var LongPrototype = Long.prototype;

	    /**
	     * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
	     * @returns {number}
	     */
	    LongPrototype.toInt = function toInt() {
	        return this.unsigned ? this.low >>> 0 : this.low;
	    };

	    /**
	     * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
	     * @returns {number}
	     */
	    LongPrototype.toNumber = function toNumber() {
	        if (this.unsigned)
	            return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
	        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
	    };

	    /**
	     * Converts the Long to a string written in the specified radix.
	     * @param {number=} radix Radix (2-36), defaults to 10
	     * @returns {string}
	     * @override
	     * @throws {RangeError} If `radix` is out of range
	     */
	    LongPrototype.toString = function toString(radix) {
	        radix = radix || 10;
	        if (radix < 2 || 36 < radix)
	            throw RangeError('radix');
	        if (this.isZero())
	            return '0';
	        if (this.isNegative()) { // Unsigned Longs are never negative
	            if (this.eq(MIN_VALUE)) {
	                // We need to change the Long value before it can be negated, so we remove
	                // the bottom-most digit in this base and then recurse to do the rest.
	                var radixLong = fromNumber(radix),
	                    div = this.div(radixLong),
	                    rem1 = div.mul(radixLong).sub(this);
	                return div.toString(radix) + rem1.toInt().toString(radix);
	            } else
	                return '-' + this.neg().toString(radix);
	        }

	        // Do several (6) digits each time through the loop, so as to
	        // minimize the calls to the very expensive emulated div.
	        var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
	            rem = this;
	        var result = '';
	        while (true) {
	            var remDiv = rem.div(radixToPower),
	                intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
	                digits = intval.toString(radix);
	            rem = remDiv;
	            if (rem.isZero())
	                return digits + result;
	            else {
	                while (digits.length < 6)
	                    digits = '0' + digits;
	                result = '' + digits + result;
	            }
	        }
	    };

	    /**
	     * Gets the high 32 bits as a signed integer.
	     * @returns {number} Signed high bits
	     */
	    LongPrototype.getHighBits = function getHighBits() {
	        return this.high;
	    };

	    /**
	     * Gets the high 32 bits as an unsigned integer.
	     * @returns {number} Unsigned high bits
	     */
	    LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
	        return this.high >>> 0;
	    };

	    /**
	     * Gets the low 32 bits as a signed integer.
	     * @returns {number} Signed low bits
	     */
	    LongPrototype.getLowBits = function getLowBits() {
	        return this.low;
	    };

	    /**
	     * Gets the low 32 bits as an unsigned integer.
	     * @returns {number} Unsigned low bits
	     */
	    LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
	        return this.low >>> 0;
	    };

	    /**
	     * Gets the number of bits needed to represent the absolute value of this Long.
	     * @returns {number}
	     */
	    LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
	        if (this.isNegative()) // Unsigned Longs are never negative
	            return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
	        var val = this.high != 0 ? this.high : this.low;
	        for (var bit = 31; bit > 0; bit--)
	            if ((val & (1 << bit)) != 0)
	                break;
	        return this.high != 0 ? bit + 33 : bit + 1;
	    };

	    /**
	     * Tests if this Long's value equals zero.
	     * @returns {boolean}
	     */
	    LongPrototype.isZero = function isZero() {
	        return this.high === 0 && this.low === 0;
	    };

	    /**
	     * Tests if this Long's value is negative.
	     * @returns {boolean}
	     */
	    LongPrototype.isNegative = function isNegative() {
	        return !this.unsigned && this.high < 0;
	    };

	    /**
	     * Tests if this Long's value is positive.
	     * @returns {boolean}
	     */
	    LongPrototype.isPositive = function isPositive() {
	        return this.unsigned || this.high >= 0;
	    };

	    /**
	     * Tests if this Long's value is odd.
	     * @returns {boolean}
	     */
	    LongPrototype.isOdd = function isOdd() {
	        return (this.low & 1) === 1;
	    };

	    /**
	     * Tests if this Long's value is even.
	     * @returns {boolean}
	     */
	    LongPrototype.isEven = function isEven() {
	        return (this.low & 1) === 0;
	    };

	    /**
	     * Tests if this Long's value equals the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.equals = function equals(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
	            return false;
	        return this.high === other.high && this.low === other.low;
	    };

	    /**
	     * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.eq = LongPrototype.equals;

	    /**
	     * Tests if this Long's value differs from the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.notEquals = function notEquals(other) {
	        return !this.eq(/* validates */ other);
	    };

	    /**
	     * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.neq = LongPrototype.notEquals;

	    /**
	     * Tests if this Long's value is less than the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.lessThan = function lessThan(other) {
	        return this.comp(/* validates */ other) < 0;
	    };

	    /**
	     * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.lt = LongPrototype.lessThan;

	    /**
	     * Tests if this Long's value is less than or equal the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
	        return this.comp(/* validates */ other) <= 0;
	    };

	    /**
	     * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.lte = LongPrototype.lessThanOrEqual;

	    /**
	     * Tests if this Long's value is greater than the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.greaterThan = function greaterThan(other) {
	        return this.comp(/* validates */ other) > 0;
	    };

	    /**
	     * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.gt = LongPrototype.greaterThan;

	    /**
	     * Tests if this Long's value is greater than or equal the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
	        return this.comp(/* validates */ other) >= 0;
	    };

	    /**
	     * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.gte = LongPrototype.greaterThanOrEqual;

	    /**
	     * Compares this Long's value with the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
	     *  if the given one is greater
	     */
	    LongPrototype.compare = function compare(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        if (this.eq(other))
	            return 0;
	        var thisNeg = this.isNegative(),
	            otherNeg = other.isNegative();
	        if (thisNeg && !otherNeg)
	            return -1;
	        if (!thisNeg && otherNeg)
	            return 1;
	        // At this point the sign bits are the same
	        if (!this.unsigned)
	            return this.sub(other).isNegative() ? -1 : 1;
	        // Both are positive if at least one is unsigned
	        return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
	    };

	    /**
	     * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
	     *  if the given one is greater
	     */
	    LongPrototype.comp = LongPrototype.compare;

	    /**
	     * Negates this Long's value.
	     * @returns {!Long} Negated Long
	     */
	    LongPrototype.negate = function negate() {
	        if (!this.unsigned && this.eq(MIN_VALUE))
	            return MIN_VALUE;
	        return this.not().add(ONE);
	    };

	    /**
	     * Negates this Long's value. This is an alias of {@link Long#negate}.
	     * @function
	     * @returns {!Long} Negated Long
	     */
	    LongPrototype.neg = LongPrototype.negate;

	    /**
	     * Returns the sum of this and the specified Long.
	     * @param {!Long|number|string} addend Addend
	     * @returns {!Long} Sum
	     */
	    LongPrototype.add = function add(addend) {
	        if (!isLong(addend))
	            addend = fromValue(addend);

	        // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

	        var a48 = this.high >>> 16;
	        var a32 = this.high & 0xFFFF;
	        var a16 = this.low >>> 16;
	        var a00 = this.low & 0xFFFF;

	        var b48 = addend.high >>> 16;
	        var b32 = addend.high & 0xFFFF;
	        var b16 = addend.low >>> 16;
	        var b00 = addend.low & 0xFFFF;

	        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
	        c00 += a00 + b00;
	        c16 += c00 >>> 16;
	        c00 &= 0xFFFF;
	        c16 += a16 + b16;
	        c32 += c16 >>> 16;
	        c16 &= 0xFFFF;
	        c32 += a32 + b32;
	        c48 += c32 >>> 16;
	        c32 &= 0xFFFF;
	        c48 += a48 + b48;
	        c48 &= 0xFFFF;
	        return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
	    };

	    /**
	     * Returns the difference of this and the specified Long.
	     * @param {!Long|number|string} subtrahend Subtrahend
	     * @returns {!Long} Difference
	     */
	    LongPrototype.subtract = function subtract(subtrahend) {
	        if (!isLong(subtrahend))
	            subtrahend = fromValue(subtrahend);
	        return this.add(subtrahend.neg());
	    };

	    /**
	     * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
	     * @function
	     * @param {!Long|number|string} subtrahend Subtrahend
	     * @returns {!Long} Difference
	     */
	    LongPrototype.sub = LongPrototype.subtract;

	    /**
	     * Returns the product of this and the specified Long.
	     * @param {!Long|number|string} multiplier Multiplier
	     * @returns {!Long} Product
	     */
	    LongPrototype.multiply = function multiply(multiplier) {
	        if (this.isZero())
	            return ZERO;
	        if (!isLong(multiplier))
	            multiplier = fromValue(multiplier);
	        if (multiplier.isZero())
	            return ZERO;
	        if (this.eq(MIN_VALUE))
	            return multiplier.isOdd() ? MIN_VALUE : ZERO;
	        if (multiplier.eq(MIN_VALUE))
	            return this.isOdd() ? MIN_VALUE : ZERO;

	        if (this.isNegative()) {
	            if (multiplier.isNegative())
	                return this.neg().mul(multiplier.neg());
	            else
	                return this.neg().mul(multiplier).neg();
	        } else if (multiplier.isNegative())
	            return this.mul(multiplier.neg()).neg();

	        // If both longs are small, use float multiplication
	        if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
	            return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

	        // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
	        // We can skip products that would overflow.

	        var a48 = this.high >>> 16;
	        var a32 = this.high & 0xFFFF;
	        var a16 = this.low >>> 16;
	        var a00 = this.low & 0xFFFF;

	        var b48 = multiplier.high >>> 16;
	        var b32 = multiplier.high & 0xFFFF;
	        var b16 = multiplier.low >>> 16;
	        var b00 = multiplier.low & 0xFFFF;

	        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
	        c00 += a00 * b00;
	        c16 += c00 >>> 16;
	        c00 &= 0xFFFF;
	        c16 += a16 * b00;
	        c32 += c16 >>> 16;
	        c16 &= 0xFFFF;
	        c16 += a00 * b16;
	        c32 += c16 >>> 16;
	        c16 &= 0xFFFF;
	        c32 += a32 * b00;
	        c48 += c32 >>> 16;
	        c32 &= 0xFFFF;
	        c32 += a16 * b16;
	        c48 += c32 >>> 16;
	        c32 &= 0xFFFF;
	        c32 += a00 * b32;
	        c48 += c32 >>> 16;
	        c32 &= 0xFFFF;
	        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
	        c48 &= 0xFFFF;
	        return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
	    };

	    /**
	     * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
	     * @function
	     * @param {!Long|number|string} multiplier Multiplier
	     * @returns {!Long} Product
	     */
	    LongPrototype.mul = LongPrototype.multiply;

	    /**
	     * Returns this Long divided by the specified. The result is signed if this Long is signed or
	     *  unsigned if this Long is unsigned.
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Quotient
	     */
	    LongPrototype.divide = function divide(divisor) {
	        if (!isLong(divisor))
	            divisor = fromValue(divisor);
	        if (divisor.isZero())
	            throw Error('division by zero');
	        if (this.isZero())
	            return this.unsigned ? UZERO : ZERO;
	        var approx, rem, res;
	        if (!this.unsigned) {
	            // This section is only relevant for signed longs and is derived from the
	            // closure library as a whole.
	            if (this.eq(MIN_VALUE)) {
	                if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
	                    return MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
	                else if (divisor.eq(MIN_VALUE))
	                    return ONE;
	                else {
	                    // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
	                    var halfThis = this.shr(1);
	                    approx = halfThis.div(divisor).shl(1);
	                    if (approx.eq(ZERO)) {
	                        return divisor.isNegative() ? ONE : NEG_ONE;
	                    } else {
	                        rem = this.sub(divisor.mul(approx));
	                        res = approx.add(rem.div(divisor));
	                        return res;
	                    }
	                }
	            } else if (divisor.eq(MIN_VALUE))
	                return this.unsigned ? UZERO : ZERO;
	            if (this.isNegative()) {
	                if (divisor.isNegative())
	                    return this.neg().div(divisor.neg());
	                return this.neg().div(divisor).neg();
	            } else if (divisor.isNegative())
	                return this.div(divisor.neg()).neg();
	            res = ZERO;
	        } else {
	            // The algorithm below has not been made for unsigned longs. It's therefore
	            // required to take special care of the MSB prior to running it.
	            if (!divisor.unsigned)
	                divisor = divisor.toUnsigned();
	            if (divisor.gt(this))
	                return UZERO;
	            if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
	                return UONE;
	            res = UZERO;
	        }

	        // Repeat the following until the remainder is less than other:  find a
	        // floating-point that approximates remainder / other *from below*, add this
	        // into the result, and subtract it from the remainder.  It is critical that
	        // the approximate value is less than or equal to the real value so that the
	        // remainder never becomes negative.
	        rem = this;
	        while (rem.gte(divisor)) {
	            // Approximate the result of division. This may be a little greater or
	            // smaller than the actual value.
	            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

	            // We will tweak the approximate result by changing it in the 48-th digit or
	            // the smallest non-fractional digit, whichever is larger.
	            var log2 = Math.ceil(Math.log(approx) / Math.LN2),
	                delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48),

	            // Decrease the approximation until it is smaller than the remainder.  Note
	            // that if it is too large, the product overflows and is negative.
	                approxRes = fromNumber(approx),
	                approxRem = approxRes.mul(divisor);
	            while (approxRem.isNegative() || approxRem.gt(rem)) {
	                approx -= delta;
	                approxRes = fromNumber(approx, this.unsigned);
	                approxRem = approxRes.mul(divisor);
	            }

	            // We know the answer can't be zero... and actually, zero would cause
	            // infinite recursion since we would make no progress.
	            if (approxRes.isZero())
	                approxRes = ONE;

	            res = res.add(approxRes);
	            rem = rem.sub(approxRem);
	        }
	        return res;
	    };

	    /**
	     * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
	     * @function
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Quotient
	     */
	    LongPrototype.div = LongPrototype.divide;

	    /**
	     * Returns this Long modulo the specified.
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Remainder
	     */
	    LongPrototype.modulo = function modulo(divisor) {
	        if (!isLong(divisor))
	            divisor = fromValue(divisor);
	        return this.sub(this.div(divisor).mul(divisor));
	    };

	    /**
	     * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
	     * @function
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Remainder
	     */
	    LongPrototype.mod = LongPrototype.modulo;

	    /**
	     * Returns the bitwise NOT of this Long.
	     * @returns {!Long}
	     */
	    LongPrototype.not = function not() {
	        return fromBits(~this.low, ~this.high, this.unsigned);
	    };

	    /**
	     * Returns the bitwise AND of this Long and the specified.
	     * @param {!Long|number|string} other Other Long
	     * @returns {!Long}
	     */
	    LongPrototype.and = function and(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
	    };

	    /**
	     * Returns the bitwise OR of this Long and the specified.
	     * @param {!Long|number|string} other Other Long
	     * @returns {!Long}
	     */
	    LongPrototype.or = function or(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
	    };

	    /**
	     * Returns the bitwise XOR of this Long and the given one.
	     * @param {!Long|number|string} other Other Long
	     * @returns {!Long}
	     */
	    LongPrototype.xor = function xor(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
	    };

	    /**
	     * Returns this Long with bits shifted to the left by the given amount.
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shiftLeft = function shiftLeft(numBits) {
	        if (isLong(numBits))
	            numBits = numBits.toInt();
	        if ((numBits &= 63) === 0)
	            return this;
	        else if (numBits < 32)
	            return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
	        else
	            return fromBits(0, this.low << (numBits - 32), this.unsigned);
	    };

	    /**
	     * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
	     * @function
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shl = LongPrototype.shiftLeft;

	    /**
	     * Returns this Long with bits arithmetically shifted to the right by the given amount.
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shiftRight = function shiftRight(numBits) {
	        if (isLong(numBits))
	            numBits = numBits.toInt();
	        if ((numBits &= 63) === 0)
	            return this;
	        else if (numBits < 32)
	            return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
	        else
	            return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
	    };

	    /**
	     * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
	     * @function
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shr = LongPrototype.shiftRight;

	    /**
	     * Returns this Long with bits logically shifted to the right by the given amount.
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
	        if (isLong(numBits))
	            numBits = numBits.toInt();
	        numBits &= 63;
	        if (numBits === 0)
	            return this;
	        else {
	            var high = this.high;
	            if (numBits < 32) {
	                var low = this.low;
	                return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
	            } else if (numBits === 32)
	                return fromBits(high, 0, this.unsigned);
	            else
	                return fromBits(high >>> (numBits - 32), 0, this.unsigned);
	        }
	    };

	    /**
	     * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
	     * @function
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shru = LongPrototype.shiftRightUnsigned;

	    /**
	     * Converts this Long to signed.
	     * @returns {!Long} Signed long
	     */
	    LongPrototype.toSigned = function toSigned() {
	        if (!this.unsigned)
	            return this;
	        return fromBits(this.low, this.high, false);
	    };

	    /**
	     * Converts this Long to unsigned.
	     * @returns {!Long} Unsigned long
	     */
	    LongPrototype.toUnsigned = function toUnsigned() {
	        if (this.unsigned)
	            return this;
	        return fromBits(this.low, this.high, true);
	    };

	    /**
	     * Converts this Long to its byte representation.
	     * @param {boolean=} le Whether little or big endian, defaults to big endian
	     * @returns {!Array.<number>} Byte representation
	     */
	    LongPrototype.toBytes = function(le) {
	        return le ? this.toBytesLE() : this.toBytesBE();
	    };

	    /**
	     * Converts this Long to its little endian byte representation.
	     * @returns {!Array.<number>} Little endian byte representation
	     */
	    LongPrototype.toBytesLE = function() {
	        var hi = this.high,
	            lo = this.low;
	        return [
	             lo         & 0xff,
	            (lo >>>  8) & 0xff,
	            (lo >>> 16) & 0xff,
	            (lo >>> 24) & 0xff,
	             hi         & 0xff,
	            (hi >>>  8) & 0xff,
	            (hi >>> 16) & 0xff,
	            (hi >>> 24) & 0xff
	        ];
	    };

	    /**
	     * Converts this Long to its big endian byte representation.
	     * @returns {!Array.<number>} Big endian byte representation
	     */
	    LongPrototype.toBytesBE = function() {
	        var hi = this.high,
	            lo = this.low;
	        return [
	            (hi >>> 24) & 0xff,
	            (hi >>> 16) & 0xff,
	            (hi >>>  8) & 0xff,
	             hi         & 0xff,
	            (lo >>> 24) & 0xff,
	            (lo >>> 16) & 0xff,
	            (lo >>>  8) & 0xff,
	             lo         & 0xff
	        ];
	    };

	    return Long;
	});
	});

	var bytebuffer = createCommonjsModule(function (module) {
	/*
	 Copyright 2013-2014 Daniel Wirtz <dcode@dcode.io>

	 Licensed under the Apache License, Version 2.0 (the "License");
	 you may not use this file except in compliance with the License.
	 You may obtain a copy of the License at

	 http://www.apache.org/licenses/LICENSE-2.0

	 Unless required by applicable law or agreed to in writing, software
	 distributed under the License is distributed on an "AS IS" BASIS,
	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 See the License for the specific language governing permissions and
	 limitations under the License.
	 */

	/**
	 * @license bytebuffer.js (c) 2015 Daniel Wirtz <dcode@dcode.io>
	 * Backing buffer: ArrayBuffer, Accessor: Uint8Array
	 * Released under the Apache License, Version 2.0
	 * see: https://github.com/dcodeIO/bytebuffer.js for details
	 */
	(function(global, factory) {

	    /* AMD */ if (typeof commonjsRequire === 'function' && 'object' === "object" && module && module["exports"])
	        module['exports'] = (function() {
	            var Long; try { Long = long_1; } catch (e) {}
	            return factory(Long);
	        })();
	    /* Global */ else
	        (global["dcodeIO"] = global["dcodeIO"] || {})["ByteBuffer"] = factory(global["dcodeIO"]["Long"]);

	})(commonjsGlobal, function(Long) {

	    /**
	     * Constructs a new ByteBuffer.
	     * @class The swiss army knife for binary data in JavaScript.
	     * @exports ByteBuffer
	     * @constructor
	     * @param {number=} capacity Initial capacity. Defaults to {@link ByteBuffer.DEFAULT_CAPACITY}.
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @expose
	     */
	    var ByteBuffer = function(capacity, littleEndian, noAssert) {
	        if (typeof capacity === 'undefined')
	            capacity = ByteBuffer.DEFAULT_CAPACITY;
	        if (typeof littleEndian === 'undefined')
	            littleEndian = ByteBuffer.DEFAULT_ENDIAN;
	        if (typeof noAssert === 'undefined')
	            noAssert = ByteBuffer.DEFAULT_NOASSERT;
	        if (!noAssert) {
	            capacity = capacity | 0;
	            if (capacity < 0)
	                throw RangeError("Illegal capacity");
	            littleEndian = !!littleEndian;
	            noAssert = !!noAssert;
	        }

	        /**
	         * Backing ArrayBuffer.
	         * @type {!ArrayBuffer}
	         * @expose
	         */
	        this.buffer = capacity === 0 ? EMPTY_BUFFER : new ArrayBuffer(capacity);

	        /**
	         * Uint8Array utilized to manipulate the backing buffer. Becomes `null` if the backing buffer has a capacity of `0`.
	         * @type {?Uint8Array}
	         * @expose
	         */
	        this.view = capacity === 0 ? null : new Uint8Array(this.buffer);

	        /**
	         * Absolute read/write offset.
	         * @type {number}
	         * @expose
	         * @see ByteBuffer#flip
	         * @see ByteBuffer#clear
	         */
	        this.offset = 0;

	        /**
	         * Marked offset.
	         * @type {number}
	         * @expose
	         * @see ByteBuffer#mark
	         * @see ByteBuffer#reset
	         */
	        this.markedOffset = -1;

	        /**
	         * Absolute limit of the contained data. Set to the backing buffer's capacity upon allocation.
	         * @type {number}
	         * @expose
	         * @see ByteBuffer#flip
	         * @see ByteBuffer#clear
	         */
	        this.limit = capacity;

	        /**
	         * Whether to use little endian byte order, defaults to `false` for big endian.
	         * @type {boolean}
	         * @expose
	         */
	        this.littleEndian = littleEndian;

	        /**
	         * Whether to skip assertions of offsets and values, defaults to `false`.
	         * @type {boolean}
	         * @expose
	         */
	        this.noAssert = noAssert;
	    };

	    /**
	     * ByteBuffer version.
	     * @type {string}
	     * @const
	     * @expose
	     */
	    ByteBuffer.VERSION = "5.0.1";

	    /**
	     * Little endian constant that can be used instead of its boolean value. Evaluates to `true`.
	     * @type {boolean}
	     * @const
	     * @expose
	     */
	    ByteBuffer.LITTLE_ENDIAN = true;

	    /**
	     * Big endian constant that can be used instead of its boolean value. Evaluates to `false`.
	     * @type {boolean}
	     * @const
	     * @expose
	     */
	    ByteBuffer.BIG_ENDIAN = false;

	    /**
	     * Default initial capacity of `16`.
	     * @type {number}
	     * @expose
	     */
	    ByteBuffer.DEFAULT_CAPACITY = 16;

	    /**
	     * Default endianess of `false` for big endian.
	     * @type {boolean}
	     * @expose
	     */
	    ByteBuffer.DEFAULT_ENDIAN = ByteBuffer.BIG_ENDIAN;

	    /**
	     * Default no assertions flag of `false`.
	     * @type {boolean}
	     * @expose
	     */
	    ByteBuffer.DEFAULT_NOASSERT = false;

	    /**
	     * A `Long` class for representing a 64-bit two's-complement integer value. May be `null` if Long.js has not been loaded
	     *  and int64 support is not available.
	     * @type {?Long}
	     * @const
	     * @see https://github.com/dcodeIO/long.js
	     * @expose
	     */
	    ByteBuffer.Long = Long || null;

	    /**
	     * @alias ByteBuffer.prototype
	     * @inner
	     */
	    var ByteBufferPrototype = ByteBuffer.prototype;

	    /**
	     * An indicator used to reliably determine if an object is a ByteBuffer or not.
	     * @type {boolean}
	     * @const
	     * @expose
	     * @private
	     */
	    ByteBufferPrototype.__isByteBuffer__;

	    Object.defineProperty(ByteBufferPrototype, "__isByteBuffer__", {
	        value: true,
	        enumerable: false,
	        configurable: false
	    });

	    // helpers

	    /**
	     * @type {!ArrayBuffer}
	     * @inner
	     */
	    var EMPTY_BUFFER = new ArrayBuffer(0);

	    /**
	     * String.fromCharCode reference for compile-time renaming.
	     * @type {function(...number):string}
	     * @inner
	     */
	    var stringFromCharCode = String.fromCharCode;

	    /**
	     * Creates a source function for a string.
	     * @param {string} s String to read from
	     * @returns {function():number|null} Source function returning the next char code respectively `null` if there are
	     *  no more characters left.
	     * @throws {TypeError} If the argument is invalid
	     * @inner
	     */
	    function stringSource(s) {
	        var i=0; return function() {
	            return i < s.length ? s.charCodeAt(i++) : null;
	        };
	    }

	    /**
	     * Creates a destination function for a string.
	     * @returns {function(number=):undefined|string} Destination function successively called with the next char code.
	     *  Returns the final string when called without arguments.
	     * @inner
	     */
	    function stringDestination() {
	        var cs = [], ps = []; return function() {
	            if (arguments.length === 0)
	                return ps.join('')+stringFromCharCode.apply(String, cs);
	            if (cs.length + arguments.length > 1024)
	                ps.push(stringFromCharCode.apply(String, cs)),
	                    cs.length = 0;
	            Array.prototype.push.apply(cs, arguments);
	        };
	    }

	    /**
	     * Gets the accessor type.
	     * @returns {Function} `Buffer` under node.js, `Uint8Array` respectively `DataView` in the browser (classes)
	     * @expose
	     */
	    ByteBuffer.accessor = function() {
	        return Uint8Array;
	    };
	    /**
	     * Allocates a new ByteBuffer backed by a buffer of the specified capacity.
	     * @param {number=} capacity Initial capacity. Defaults to {@link ByteBuffer.DEFAULT_CAPACITY}.
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @returns {!ByteBuffer}
	     * @expose
	     */
	    ByteBuffer.allocate = function(capacity, littleEndian, noAssert) {
	        return new ByteBuffer(capacity, littleEndian, noAssert);
	    };

	    /**
	     * Concatenates multiple ByteBuffers into one.
	     * @param {!Array.<!ByteBuffer|!ArrayBuffer|!Uint8Array|string>} buffers Buffers to concatenate
	     * @param {(string|boolean)=} encoding String encoding if `buffers` contains a string ("base64", "hex", "binary",
	     *  defaults to "utf8")
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order for the resulting ByteBuffer. Defaults
	     *  to {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values for the resulting ByteBuffer. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @returns {!ByteBuffer} Concatenated ByteBuffer
	     * @expose
	     */
	    ByteBuffer.concat = function(buffers, encoding, littleEndian, noAssert) {
	        if (typeof encoding === 'boolean' || typeof encoding !== 'string') {
	            noAssert = littleEndian;
	            littleEndian = encoding;
	            encoding = undefined;
	        }
	        var capacity = 0;
	        for (var i=0, k=buffers.length, length; i<k; ++i) {
	            if (!ByteBuffer.isByteBuffer(buffers[i]))
	                buffers[i] = ByteBuffer.wrap(buffers[i], encoding);
	            length = buffers[i].limit - buffers[i].offset;
	            if (length > 0) capacity += length;
	        }
	        if (capacity === 0)
	            return new ByteBuffer(0, littleEndian, noAssert);
	        var bb = new ByteBuffer(capacity, littleEndian, noAssert),
	            bi;
	        i=0; while (i<k) {
	            bi = buffers[i++];
	            length = bi.limit - bi.offset;
	            if (length <= 0) continue;
	            bb.view.set(bi.view.subarray(bi.offset, bi.limit), bb.offset);
	            bb.offset += length;
	        }
	        bb.limit = bb.offset;
	        bb.offset = 0;
	        return bb;
	    };

	    /**
	     * Tests if the specified type is a ByteBuffer.
	     * @param {*} bb ByteBuffer to test
	     * @returns {boolean} `true` if it is a ByteBuffer, otherwise `false`
	     * @expose
	     */
	    ByteBuffer.isByteBuffer = function(bb) {
	        return (bb && bb["__isByteBuffer__"]) === true;
	    };
	    /**
	     * Gets the backing buffer type.
	     * @returns {Function} `Buffer` under node.js, `ArrayBuffer` in the browser (classes)
	     * @expose
	     */
	    ByteBuffer.type = function() {
	        return ArrayBuffer;
	    };
	    /**
	     * Wraps a buffer or a string. Sets the allocated ByteBuffer's {@link ByteBuffer#offset} to `0` and its
	     *  {@link ByteBuffer#limit} to the length of the wrapped data.
	     * @param {!ByteBuffer|!ArrayBuffer|!Uint8Array|string|!Array.<number>} buffer Anything that can be wrapped
	     * @param {(string|boolean)=} encoding String encoding if `buffer` is a string ("base64", "hex", "binary", defaults to
	     *  "utf8")
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @returns {!ByteBuffer} A ByteBuffer wrapping `buffer`
	     * @expose
	     */
	    ByteBuffer.wrap = function(buffer, encoding, littleEndian, noAssert) {
	        if (typeof encoding !== 'string') {
	            noAssert = littleEndian;
	            littleEndian = encoding;
	            encoding = undefined;
	        }
	        if (typeof buffer === 'string') {
	            if (typeof encoding === 'undefined')
	                encoding = "utf8";
	            switch (encoding) {
	                case "base64":
	                    return ByteBuffer.fromBase64(buffer, littleEndian);
	                case "hex":
	                    return ByteBuffer.fromHex(buffer, littleEndian);
	                case "binary":
	                    return ByteBuffer.fromBinary(buffer, littleEndian);
	                case "utf8":
	                    return ByteBuffer.fromUTF8(buffer, littleEndian);
	                case "debug":
	                    return ByteBuffer.fromDebug(buffer, littleEndian);
	                default:
	                    throw Error("Unsupported encoding: "+encoding);
	            }
	        }
	        if (buffer === null || typeof buffer !== 'object')
	            throw TypeError("Illegal buffer");
	        var bb;
	        if (ByteBuffer.isByteBuffer(buffer)) {
	            bb = ByteBufferPrototype.clone.call(buffer);
	            bb.markedOffset = -1;
	            return bb;
	        }
	        if (buffer instanceof Uint8Array) { // Extract ArrayBuffer from Uint8Array
	            bb = new ByteBuffer(0, littleEndian, noAssert);
	            if (buffer.length > 0) { // Avoid references to more than one EMPTY_BUFFER
	                bb.buffer = buffer.buffer;
	                bb.offset = buffer.byteOffset;
	                bb.limit = buffer.byteOffset + buffer.byteLength;
	                bb.view = new Uint8Array(buffer.buffer);
	            }
	        } else if (buffer instanceof ArrayBuffer) { // Reuse ArrayBuffer
	            bb = new ByteBuffer(0, littleEndian, noAssert);
	            if (buffer.byteLength > 0) {
	                bb.buffer = buffer;
	                bb.offset = 0;
	                bb.limit = buffer.byteLength;
	                bb.view = buffer.byteLength > 0 ? new Uint8Array(buffer) : null;
	            }
	        } else if (Object.prototype.toString.call(buffer) === "[object Array]") { // Create from octets
	            bb = new ByteBuffer(buffer.length, littleEndian, noAssert);
	            bb.limit = buffer.length;
	            for (var i=0; i<buffer.length; ++i)
	                bb.view[i] = buffer[i];
	        } else
	            throw TypeError("Illegal buffer"); // Otherwise fail
	        return bb;
	    };

	    /**
	     * Writes the array as a bitset.
	     * @param {Array<boolean>} value Array of booleans to write
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `length` if omitted.
	     * @returns {!ByteBuffer}
	     * @expose
	     */
	    ByteBufferPrototype.writeBitSet = function(value, offset) {
	      var relative = typeof offset === 'undefined';
	      if (relative) offset = this.offset;
	      if (!this.noAssert) {
	        if (!(value instanceof Array))
	          throw TypeError("Illegal BitSet: Not an array");
	        if (typeof offset !== 'number' || offset % 1 !== 0)
	            throw TypeError("Illegal offset: "+offset+" (not an integer)");
	        offset >>>= 0;
	        if (offset < 0 || offset + 0 > this.buffer.byteLength)
	            throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	      }

	      var start = offset,
	          bits = value.length,
	          bytes = (bits >> 3),
	          bit = 0,
	          k;

	      offset += this.writeVarint32(bits,offset);

	      while(bytes--) {
	        k = (!!value[bit++] & 1) |
	            ((!!value[bit++] & 1) << 1) |
	            ((!!value[bit++] & 1) << 2) |
	            ((!!value[bit++] & 1) << 3) |
	            ((!!value[bit++] & 1) << 4) |
	            ((!!value[bit++] & 1) << 5) |
	            ((!!value[bit++] & 1) << 6) |
	            ((!!value[bit++] & 1) << 7);
	        this.writeByte(k,offset++);
	      }

	      if(bit < bits) {
	        var m = 0; k = 0;
	        while(bit < bits) k = k | ((!!value[bit++] & 1) << (m++));
	        this.writeByte(k,offset++);
	      }

	      if (relative) {
	        this.offset = offset;
	        return this;
	      }
	      return offset - start;
	    };

	    /**
	     * Reads a BitSet as an array of booleans.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `length` if omitted.
	     * @returns {Array<boolean>
	     * @expose
	     */
	    ByteBufferPrototype.readBitSet = function(offset) {
	      var relative = typeof offset === 'undefined';
	      if (relative) offset = this.offset;

	      var ret = this.readVarint32(offset),
	          bits = ret.value,
	          bytes = (bits >> 3),
	          bit = 0,
	          value = [],
	          k;

	      offset += ret.length;

	      while(bytes--) {
	        k = this.readByte(offset++);
	        value[bit++] = !!(k & 0x01);
	        value[bit++] = !!(k & 0x02);
	        value[bit++] = !!(k & 0x04);
	        value[bit++] = !!(k & 0x08);
	        value[bit++] = !!(k & 0x10);
	        value[bit++] = !!(k & 0x20);
	        value[bit++] = !!(k & 0x40);
	        value[bit++] = !!(k & 0x80);
	      }

	      if(bit < bits) {
	        var m = 0;
	        k = this.readByte(offset++);
	        while(bit < bits) value[bit++] = !!((k >> (m++)) & 1);
	      }

	      if (relative) {
	        this.offset = offset;
	      }
	      return value;
	    };
	    /**
	     * Reads the specified number of bytes.
	     * @param {number} length Number of bytes to read
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `length` if omitted.
	     * @returns {!ByteBuffer}
	     * @expose
	     */
	    ByteBufferPrototype.readBytes = function(length, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + length > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+length+") <= "+this.buffer.byteLength);
	        }
	        var slice = this.slice(offset, offset + length);
	        if (relative) this.offset += length;
	        return slice;
	    };

	    /**
	     * Writes a payload of bytes. This is an alias of {@link ByteBuffer#append}.
	     * @function
	     * @param {!ByteBuffer|!ArrayBuffer|!Uint8Array|string} source Data to write. If `source` is a ByteBuffer, its offsets
	     *  will be modified according to the performed read operation.
	     * @param {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeBytes = ByteBufferPrototype.append;

	    // types/ints/int8

	    /**
	     * Writes an 8bit signed integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeInt8 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value |= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 1;
	        var capacity0 = this.buffer.byteLength;
	        if (offset > capacity0)
	            this.resize((capacity0 *= 2) > offset ? capacity0 : offset);
	        offset -= 1;
	        this.view[offset] = value;
	        if (relative) this.offset += 1;
	        return this;
	    };

	    /**
	     * Writes an 8bit signed integer. This is an alias of {@link ByteBuffer#writeInt8}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeByte = ByteBufferPrototype.writeInt8;

	    /**
	     * Reads an 8bit signed integer.
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readInt8 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	        }
	        var value = this.view[offset];
	        if ((value & 0x80) === 0x80) value = -(0xFF - value + 1); // Cast to signed
	        if (relative) this.offset += 1;
	        return value;
	    };

	    /**
	     * Reads an 8bit signed integer. This is an alias of {@link ByteBuffer#readInt8}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readByte = ByteBufferPrototype.readInt8;

	    /**
	     * Writes an 8bit unsigned integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeUint8 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value >>>= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 1;
	        var capacity1 = this.buffer.byteLength;
	        if (offset > capacity1)
	            this.resize((capacity1 *= 2) > offset ? capacity1 : offset);
	        offset -= 1;
	        this.view[offset] = value;
	        if (relative) this.offset += 1;
	        return this;
	    };

	    /**
	     * Writes an 8bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint8}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeUInt8 = ByteBufferPrototype.writeUint8;

	    /**
	     * Reads an 8bit unsigned integer.
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readUint8 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	        }
	        var value = this.view[offset];
	        if (relative) this.offset += 1;
	        return value;
	    };

	    /**
	     * Reads an 8bit unsigned integer. This is an alias of {@link ByteBuffer#readUint8}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readUInt8 = ByteBufferPrototype.readUint8;

	    // types/ints/int16

	    /**
	     * Writes a 16bit signed integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @throws {TypeError} If `offset` or `value` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.writeInt16 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value |= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 2;
	        var capacity2 = this.buffer.byteLength;
	        if (offset > capacity2)
	            this.resize((capacity2 *= 2) > offset ? capacity2 : offset);
	        offset -= 2;
	        if (this.littleEndian) {
	            this.view[offset+1] = (value & 0xFF00) >>> 8;
	            this.view[offset  ] =  value & 0x00FF;
	        } else {
	            this.view[offset]   = (value & 0xFF00) >>> 8;
	            this.view[offset+1] =  value & 0x00FF;
	        }
	        if (relative) this.offset += 2;
	        return this;
	    };

	    /**
	     * Writes a 16bit signed integer. This is an alias of {@link ByteBuffer#writeInt16}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @throws {TypeError} If `offset` or `value` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.writeShort = ByteBufferPrototype.writeInt16;

	    /**
	     * Reads a 16bit signed integer.
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @returns {number} Value read
	     * @throws {TypeError} If `offset` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.readInt16 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 2 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+2+") <= "+this.buffer.byteLength);
	        }
	        var value = 0;
	        if (this.littleEndian) {
	            value  = this.view[offset  ];
	            value |= this.view[offset+1] << 8;
	        } else {
	            value  = this.view[offset  ] << 8;
	            value |= this.view[offset+1];
	        }
	        if ((value & 0x8000) === 0x8000) value = -(0xFFFF - value + 1); // Cast to signed
	        if (relative) this.offset += 2;
	        return value;
	    };

	    /**
	     * Reads a 16bit signed integer. This is an alias of {@link ByteBuffer#readInt16}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @returns {number} Value read
	     * @throws {TypeError} If `offset` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.readShort = ByteBufferPrototype.readInt16;

	    /**
	     * Writes a 16bit unsigned integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @throws {TypeError} If `offset` or `value` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.writeUint16 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value >>>= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 2;
	        var capacity3 = this.buffer.byteLength;
	        if (offset > capacity3)
	            this.resize((capacity3 *= 2) > offset ? capacity3 : offset);
	        offset -= 2;
	        if (this.littleEndian) {
	            this.view[offset+1] = (value & 0xFF00) >>> 8;
	            this.view[offset  ] =  value & 0x00FF;
	        } else {
	            this.view[offset]   = (value & 0xFF00) >>> 8;
	            this.view[offset+1] =  value & 0x00FF;
	        }
	        if (relative) this.offset += 2;
	        return this;
	    };

	    /**
	     * Writes a 16bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint16}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @throws {TypeError} If `offset` or `value` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.writeUInt16 = ByteBufferPrototype.writeUint16;

	    /**
	     * Reads a 16bit unsigned integer.
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @returns {number} Value read
	     * @throws {TypeError} If `offset` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.readUint16 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 2 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+2+") <= "+this.buffer.byteLength);
	        }
	        var value = 0;
	        if (this.littleEndian) {
	            value  = this.view[offset  ];
	            value |= this.view[offset+1] << 8;
	        } else {
	            value  = this.view[offset  ] << 8;
	            value |= this.view[offset+1];
	        }
	        if (relative) this.offset += 2;
	        return value;
	    };

	    /**
	     * Reads a 16bit unsigned integer. This is an alias of {@link ByteBuffer#readUint16}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @returns {number} Value read
	     * @throws {TypeError} If `offset` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.readUInt16 = ByteBufferPrototype.readUint16;

	    // types/ints/int32

	    /**
	     * Writes a 32bit signed integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @expose
	     */
	    ByteBufferPrototype.writeInt32 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value |= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 4;
	        var capacity4 = this.buffer.byteLength;
	        if (offset > capacity4)
	            this.resize((capacity4 *= 2) > offset ? capacity4 : offset);
	        offset -= 4;
	        if (this.littleEndian) {
	            this.view[offset+3] = (value >>> 24) & 0xFF;
	            this.view[offset+2] = (value >>> 16) & 0xFF;
	            this.view[offset+1] = (value >>>  8) & 0xFF;
	            this.view[offset  ] =  value         & 0xFF;
	        } else {
	            this.view[offset  ] = (value >>> 24) & 0xFF;
	            this.view[offset+1] = (value >>> 16) & 0xFF;
	            this.view[offset+2] = (value >>>  8) & 0xFF;
	            this.view[offset+3] =  value         & 0xFF;
	        }
	        if (relative) this.offset += 4;
	        return this;
	    };

	    /**
	     * Writes a 32bit signed integer. This is an alias of {@link ByteBuffer#writeInt32}.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @expose
	     */
	    ByteBufferPrototype.writeInt = ByteBufferPrototype.writeInt32;

	    /**
	     * Reads a 32bit signed integer.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readInt32 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 4 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+4+") <= "+this.buffer.byteLength);
	        }
	        var value = 0;
	        if (this.littleEndian) {
	            value  = this.view[offset+2] << 16;
	            value |= this.view[offset+1] <<  8;
	            value |= this.view[offset  ];
	            value += this.view[offset+3] << 24 >>> 0;
	        } else {
	            value  = this.view[offset+1] << 16;
	            value |= this.view[offset+2] <<  8;
	            value |= this.view[offset+3];
	            value += this.view[offset  ] << 24 >>> 0;
	        }
	        value |= 0; // Cast to signed
	        if (relative) this.offset += 4;
	        return value;
	    };

	    /**
	     * Reads a 32bit signed integer. This is an alias of {@link ByteBuffer#readInt32}.
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readInt = ByteBufferPrototype.readInt32;

	    /**
	     * Writes a 32bit unsigned integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @expose
	     */
	    ByteBufferPrototype.writeUint32 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value >>>= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 4;
	        var capacity5 = this.buffer.byteLength;
	        if (offset > capacity5)
	            this.resize((capacity5 *= 2) > offset ? capacity5 : offset);
	        offset -= 4;
	        if (this.littleEndian) {
	            this.view[offset+3] = (value >>> 24) & 0xFF;
	            this.view[offset+2] = (value >>> 16) & 0xFF;
	            this.view[offset+1] = (value >>>  8) & 0xFF;
	            this.view[offset  ] =  value         & 0xFF;
	        } else {
	            this.view[offset  ] = (value >>> 24) & 0xFF;
	            this.view[offset+1] = (value >>> 16) & 0xFF;
	            this.view[offset+2] = (value >>>  8) & 0xFF;
	            this.view[offset+3] =  value         & 0xFF;
	        }
	        if (relative) this.offset += 4;
	        return this;
	    };

	    /**
	     * Writes a 32bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint32}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @expose
	     */
	    ByteBufferPrototype.writeUInt32 = ByteBufferPrototype.writeUint32;

	    /**
	     * Reads a 32bit unsigned integer.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readUint32 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 4 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+4+") <= "+this.buffer.byteLength);
	        }
	        var value = 0;
	        if (this.littleEndian) {
	            value  = this.view[offset+2] << 16;
	            value |= this.view[offset+1] <<  8;
	            value |= this.view[offset  ];
	            value += this.view[offset+3] << 24 >>> 0;
	        } else {
	            value  = this.view[offset+1] << 16;
	            value |= this.view[offset+2] <<  8;
	            value |= this.view[offset+3];
	            value += this.view[offset  ] << 24 >>> 0;
	        }
	        if (relative) this.offset += 4;
	        return value;
	    };

	    /**
	     * Reads a 32bit unsigned integer. This is an alias of {@link ByteBuffer#readUint32}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readUInt32 = ByteBufferPrototype.readUint32;

	    // types/ints/int64

	    if (Long) {

	        /**
	         * Writes a 64bit signed integer.
	         * @param {number|!Long} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.writeInt64 = function(value, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof value === 'number')
	                    value = Long.fromNumber(value);
	                else if (typeof value === 'string')
	                    value = Long.fromString(value);
	                else if (!(value && value instanceof Long))
	                    throw TypeError("Illegal value: "+value+" (not an integer or Long)");
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            if (typeof value === 'number')
	                value = Long.fromNumber(value);
	            else if (typeof value === 'string')
	                value = Long.fromString(value);
	            offset += 8;
	            var capacity6 = this.buffer.byteLength;
	            if (offset > capacity6)
	                this.resize((capacity6 *= 2) > offset ? capacity6 : offset);
	            offset -= 8;
	            var lo = value.low,
	                hi = value.high;
	            if (this.littleEndian) {
	                this.view[offset+3] = (lo >>> 24) & 0xFF;
	                this.view[offset+2] = (lo >>> 16) & 0xFF;
	                this.view[offset+1] = (lo >>>  8) & 0xFF;
	                this.view[offset  ] =  lo         & 0xFF;
	                offset += 4;
	                this.view[offset+3] = (hi >>> 24) & 0xFF;
	                this.view[offset+2] = (hi >>> 16) & 0xFF;
	                this.view[offset+1] = (hi >>>  8) & 0xFF;
	                this.view[offset  ] =  hi         & 0xFF;
	            } else {
	                this.view[offset  ] = (hi >>> 24) & 0xFF;
	                this.view[offset+1] = (hi >>> 16) & 0xFF;
	                this.view[offset+2] = (hi >>>  8) & 0xFF;
	                this.view[offset+3] =  hi         & 0xFF;
	                offset += 4;
	                this.view[offset  ] = (lo >>> 24) & 0xFF;
	                this.view[offset+1] = (lo >>> 16) & 0xFF;
	                this.view[offset+2] = (lo >>>  8) & 0xFF;
	                this.view[offset+3] =  lo         & 0xFF;
	            }
	            if (relative) this.offset += 8;
	            return this;
	        };

	        /**
	         * Writes a 64bit signed integer. This is an alias of {@link ByteBuffer#writeInt64}.
	         * @param {number|!Long} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.writeLong = ByteBufferPrototype.writeInt64;

	        /**
	         * Reads a 64bit signed integer.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!Long}
	         * @expose
	         */
	        ByteBufferPrototype.readInt64 = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 8 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+8+") <= "+this.buffer.byteLength);
	            }
	            var lo = 0,
	                hi = 0;
	            if (this.littleEndian) {
	                lo  = this.view[offset+2] << 16;
	                lo |= this.view[offset+1] <<  8;
	                lo |= this.view[offset  ];
	                lo += this.view[offset+3] << 24 >>> 0;
	                offset += 4;
	                hi  = this.view[offset+2] << 16;
	                hi |= this.view[offset+1] <<  8;
	                hi |= this.view[offset  ];
	                hi += this.view[offset+3] << 24 >>> 0;
	            } else {
	                hi  = this.view[offset+1] << 16;
	                hi |= this.view[offset+2] <<  8;
	                hi |= this.view[offset+3];
	                hi += this.view[offset  ] << 24 >>> 0;
	                offset += 4;
	                lo  = this.view[offset+1] << 16;
	                lo |= this.view[offset+2] <<  8;
	                lo |= this.view[offset+3];
	                lo += this.view[offset  ] << 24 >>> 0;
	            }
	            var value = new Long(lo, hi, false);
	            if (relative) this.offset += 8;
	            return value;
	        };

	        /**
	         * Reads a 64bit signed integer. This is an alias of {@link ByteBuffer#readInt64}.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!Long}
	         * @expose
	         */
	        ByteBufferPrototype.readLong = ByteBufferPrototype.readInt64;

	        /**
	         * Writes a 64bit unsigned integer.
	         * @param {number|!Long} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.writeUint64 = function(value, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof value === 'number')
	                    value = Long.fromNumber(value);
	                else if (typeof value === 'string')
	                    value = Long.fromString(value);
	                else if (!(value && value instanceof Long))
	                    throw TypeError("Illegal value: "+value+" (not an integer or Long)");
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            if (typeof value === 'number')
	                value = Long.fromNumber(value);
	            else if (typeof value === 'string')
	                value = Long.fromString(value);
	            offset += 8;
	            var capacity7 = this.buffer.byteLength;
	            if (offset > capacity7)
	                this.resize((capacity7 *= 2) > offset ? capacity7 : offset);
	            offset -= 8;
	            var lo = value.low,
	                hi = value.high;
	            if (this.littleEndian) {
	                this.view[offset+3] = (lo >>> 24) & 0xFF;
	                this.view[offset+2] = (lo >>> 16) & 0xFF;
	                this.view[offset+1] = (lo >>>  8) & 0xFF;
	                this.view[offset  ] =  lo         & 0xFF;
	                offset += 4;
	                this.view[offset+3] = (hi >>> 24) & 0xFF;
	                this.view[offset+2] = (hi >>> 16) & 0xFF;
	                this.view[offset+1] = (hi >>>  8) & 0xFF;
	                this.view[offset  ] =  hi         & 0xFF;
	            } else {
	                this.view[offset  ] = (hi >>> 24) & 0xFF;
	                this.view[offset+1] = (hi >>> 16) & 0xFF;
	                this.view[offset+2] = (hi >>>  8) & 0xFF;
	                this.view[offset+3] =  hi         & 0xFF;
	                offset += 4;
	                this.view[offset  ] = (lo >>> 24) & 0xFF;
	                this.view[offset+1] = (lo >>> 16) & 0xFF;
	                this.view[offset+2] = (lo >>>  8) & 0xFF;
	                this.view[offset+3] =  lo         & 0xFF;
	            }
	            if (relative) this.offset += 8;
	            return this;
	        };

	        /**
	         * Writes a 64bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint64}.
	         * @function
	         * @param {number|!Long} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.writeUInt64 = ByteBufferPrototype.writeUint64;

	        /**
	         * Reads a 64bit unsigned integer.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!Long}
	         * @expose
	         */
	        ByteBufferPrototype.readUint64 = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 8 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+8+") <= "+this.buffer.byteLength);
	            }
	            var lo = 0,
	                hi = 0;
	            if (this.littleEndian) {
	                lo  = this.view[offset+2] << 16;
	                lo |= this.view[offset+1] <<  8;
	                lo |= this.view[offset  ];
	                lo += this.view[offset+3] << 24 >>> 0;
	                offset += 4;
	                hi  = this.view[offset+2] << 16;
	                hi |= this.view[offset+1] <<  8;
	                hi |= this.view[offset  ];
	                hi += this.view[offset+3] << 24 >>> 0;
	            } else {
	                hi  = this.view[offset+1] << 16;
	                hi |= this.view[offset+2] <<  8;
	                hi |= this.view[offset+3];
	                hi += this.view[offset  ] << 24 >>> 0;
	                offset += 4;
	                lo  = this.view[offset+1] << 16;
	                lo |= this.view[offset+2] <<  8;
	                lo |= this.view[offset+3];
	                lo += this.view[offset  ] << 24 >>> 0;
	            }
	            var value = new Long(lo, hi, true);
	            if (relative) this.offset += 8;
	            return value;
	        };

	        /**
	         * Reads a 64bit unsigned integer. This is an alias of {@link ByteBuffer#readUint64}.
	         * @function
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!Long}
	         * @expose
	         */
	        ByteBufferPrototype.readUInt64 = ByteBufferPrototype.readUint64;

	    } // Long


	    // types/floats/float32

	    /*
	     ieee754 - https://github.com/feross/ieee754

	     The MIT License (MIT)

	     Copyright (c) Feross Aboukhadijeh

	     Permission is hereby granted, free of charge, to any person obtaining a copy
	     of this software and associated documentation files (the "Software"), to deal
	     in the Software without restriction, including without limitation the rights
	     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	     copies of the Software, and to permit persons to whom the Software is
	     furnished to do so, subject to the following conditions:

	     The above copyright notice and this permission notice shall be included in
	     all copies or substantial portions of the Software.

	     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	     THE SOFTWARE.
	    */

	    /**
	     * Reads an IEEE754 float from a byte array.
	     * @param {!Array} buffer
	     * @param {number} offset
	     * @param {boolean} isLE
	     * @param {number} mLen
	     * @param {number} nBytes
	     * @returns {number}
	     * @inner
	     */
	    function ieee754_read(buffer, offset, isLE, mLen, nBytes) {
	        var e, m,
	            eLen = nBytes * 8 - mLen - 1,
	            eMax = (1 << eLen) - 1,
	            eBias = eMax >> 1,
	            nBits = -7,
	            i = isLE ? (nBytes - 1) : 0,
	            d = isLE ? -1 : 1,
	            s = buffer[offset + i];

	        i += d;

	        e = s & ((1 << (-nBits)) - 1);
	        s >>= (-nBits);
	        nBits += eLen;
	        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	        m = e & ((1 << (-nBits)) - 1);
	        e >>= (-nBits);
	        nBits += mLen;
	        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	        if (e === 0) {
	            e = 1 - eBias;
	        } else if (e === eMax) {
	            return m ? NaN : ((s ? -1 : 1) * Infinity);
	        } else {
	            m = m + Math.pow(2, mLen);
	            e = e - eBias;
	        }
	        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	    }

	    /**
	     * Writes an IEEE754 float to a byte array.
	     * @param {!Array} buffer
	     * @param {number} value
	     * @param {number} offset
	     * @param {boolean} isLE
	     * @param {number} mLen
	     * @param {number} nBytes
	     * @inner
	     */
	    function ieee754_write(buffer, value, offset, isLE, mLen, nBytes) {
	        var e, m, c,
	            eLen = nBytes * 8 - mLen - 1,
	            eMax = (1 << eLen) - 1,
	            eBias = eMax >> 1,
	            rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
	            i = isLE ? 0 : (nBytes - 1),
	            d = isLE ? 1 : -1,
	            s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

	        value = Math.abs(value);

	        if (isNaN(value) || value === Infinity) {
	            m = isNaN(value) ? 1 : 0;
	            e = eMax;
	        } else {
	            e = Math.floor(Math.log(value) / Math.LN2);
	            if (value * (c = Math.pow(2, -e)) < 1) {
	                e--;
	                c *= 2;
	            }
	            if (e + eBias >= 1) {
	                value += rt / c;
	            } else {
	                value += rt * Math.pow(2, 1 - eBias);
	            }
	            if (value * c >= 2) {
	                e++;
	                c /= 2;
	            }

	            if (e + eBias >= eMax) {
	                m = 0;
	                e = eMax;
	            } else if (e + eBias >= 1) {
	                m = (value * c - 1) * Math.pow(2, mLen);
	                e = e + eBias;
	            } else {
	                m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	                e = 0;
	            }
	        }

	        for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	        e = (e << mLen) | m;
	        eLen += mLen;
	        for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	        buffer[offset + i - d] |= s * 128;
	    }

	    /**
	     * Writes a 32bit float.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeFloat32 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number')
	                throw TypeError("Illegal value: "+value+" (not a number)");
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 4;
	        var capacity8 = this.buffer.byteLength;
	        if (offset > capacity8)
	            this.resize((capacity8 *= 2) > offset ? capacity8 : offset);
	        offset -= 4;
	        ieee754_write(this.view, value, offset, this.littleEndian, 23, 4);
	        if (relative) this.offset += 4;
	        return this;
	    };

	    /**
	     * Writes a 32bit float. This is an alias of {@link ByteBuffer#writeFloat32}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeFloat = ByteBufferPrototype.writeFloat32;

	    /**
	     * Reads a 32bit float.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {number}
	     * @expose
	     */
	    ByteBufferPrototype.readFloat32 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 4 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+4+") <= "+this.buffer.byteLength);
	        }
	        var value = ieee754_read(this.view, offset, this.littleEndian, 23, 4);
	        if (relative) this.offset += 4;
	        return value;
	    };

	    /**
	     * Reads a 32bit float. This is an alias of {@link ByteBuffer#readFloat32}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {number}
	     * @expose
	     */
	    ByteBufferPrototype.readFloat = ByteBufferPrototype.readFloat32;

	    // types/floats/float64

	    /**
	     * Writes a 64bit float.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeFloat64 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number')
	                throw TypeError("Illegal value: "+value+" (not a number)");
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 8;
	        var capacity9 = this.buffer.byteLength;
	        if (offset > capacity9)
	            this.resize((capacity9 *= 2) > offset ? capacity9 : offset);
	        offset -= 8;
	        ieee754_write(this.view, value, offset, this.littleEndian, 52, 8);
	        if (relative) this.offset += 8;
	        return this;
	    };

	    /**
	     * Writes a 64bit float. This is an alias of {@link ByteBuffer#writeFloat64}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeDouble = ByteBufferPrototype.writeFloat64;

	    /**
	     * Reads a 64bit float.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	     * @returns {number}
	     * @expose
	     */
	    ByteBufferPrototype.readFloat64 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 8 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+8+") <= "+this.buffer.byteLength);
	        }
	        var value = ieee754_read(this.view, offset, this.littleEndian, 52, 8);
	        if (relative) this.offset += 8;
	        return value;
	    };

	    /**
	     * Reads a 64bit float. This is an alias of {@link ByteBuffer#readFloat64}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	     * @returns {number}
	     * @expose
	     */
	    ByteBufferPrototype.readDouble = ByteBufferPrototype.readFloat64;


	    // types/varints/varint32

	    /**
	     * Maximum number of bytes required to store a 32bit base 128 variable-length integer.
	     * @type {number}
	     * @const
	     * @expose
	     */
	    ByteBuffer.MAX_VARINT32_BYTES = 5;

	    /**
	     * Calculates the actual number of bytes required to store a 32bit base 128 variable-length integer.
	     * @param {number} value Value to encode
	     * @returns {number} Number of bytes required. Capped to {@link ByteBuffer.MAX_VARINT32_BYTES}
	     * @expose
	     */
	    ByteBuffer.calculateVarint32 = function(value) {
	        // ref: src/google/protobuf/io/coded_stream.cc
	        value = value >>> 0;
	             if (value < 1 << 7 ) return 1;
	        else if (value < 1 << 14) return 2;
	        else if (value < 1 << 21) return 3;
	        else if (value < 1 << 28) return 4;
	        else                      return 5;
	    };

	    /**
	     * Zigzag encodes a signed 32bit integer so that it can be effectively used with varint encoding.
	     * @param {number} n Signed 32bit integer
	     * @returns {number} Unsigned zigzag encoded 32bit integer
	     * @expose
	     */
	    ByteBuffer.zigZagEncode32 = function(n) {
	        return (((n |= 0) << 1) ^ (n >> 31)) >>> 0; // ref: src/google/protobuf/wire_format_lite.h
	    };

	    /**
	     * Decodes a zigzag encoded signed 32bit integer.
	     * @param {number} n Unsigned zigzag encoded 32bit integer
	     * @returns {number} Signed 32bit integer
	     * @expose
	     */
	    ByteBuffer.zigZagDecode32 = function(n) {
	        return ((n >>> 1) ^ -(n & 1)) | 0; // // ref: src/google/protobuf/wire_format_lite.h
	    };

	    /**
	     * Writes a 32bit base 128 variable-length integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {!ByteBuffer|number} this if `offset` is omitted, else the actual number of bytes written
	     * @expose
	     */
	    ByteBufferPrototype.writeVarint32 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value |= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        var size = ByteBuffer.calculateVarint32(value),
	            b;
	        offset += size;
	        var capacity10 = this.buffer.byteLength;
	        if (offset > capacity10)
	            this.resize((capacity10 *= 2) > offset ? capacity10 : offset);
	        offset -= size;
	        value >>>= 0;
	        while (value >= 0x80) {
	            b = (value & 0x7f) | 0x80;
	            this.view[offset++] = b;
	            value >>>= 7;
	        }
	        this.view[offset++] = value;
	        if (relative) {
	            this.offset = offset;
	            return this;
	        }
	        return size;
	    };

	    /**
	     * Writes a zig-zag encoded (signed) 32bit base 128 variable-length integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {!ByteBuffer|number} this if `offset` is omitted, else the actual number of bytes written
	     * @expose
	     */
	    ByteBufferPrototype.writeVarint32ZigZag = function(value, offset) {
	        return this.writeVarint32(ByteBuffer.zigZagEncode32(value), offset);
	    };

	    /**
	     * Reads a 32bit base 128 variable-length integer.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {number|!{value: number, length: number}} The value read if offset is omitted, else the value read
	     *  and the actual number of bytes read.
	     * @throws {Error} If it's not a valid varint. Has a property `truncated = true` if there is not enough data available
	     *  to fully decode the varint.
	     * @expose
	     */
	    ByteBufferPrototype.readVarint32 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	        }
	        var c = 0,
	            value = 0 >>> 0,
	            b;
	        do {
	            if (!this.noAssert && offset > this.limit) {
	                var err = Error("Truncated");
	                err['truncated'] = true;
	                throw err;
	            }
	            b = this.view[offset++];
	            if (c < 5)
	                value |= (b & 0x7f) << (7*c);
	            ++c;
	        } while ((b & 0x80) !== 0);
	        value |= 0;
	        if (relative) {
	            this.offset = offset;
	            return value;
	        }
	        return {
	            "value": value,
	            "length": c
	        };
	    };

	    /**
	     * Reads a zig-zag encoded (signed) 32bit base 128 variable-length integer.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {number|!{value: number, length: number}} The value read if offset is omitted, else the value read
	     *  and the actual number of bytes read.
	     * @throws {Error} If it's not a valid varint
	     * @expose
	     */
	    ByteBufferPrototype.readVarint32ZigZag = function(offset) {
	        var val = this.readVarint32(offset);
	        if (typeof val === 'object')
	            val["value"] = ByteBuffer.zigZagDecode32(val["value"]);
	        else
	            val = ByteBuffer.zigZagDecode32(val);
	        return val;
	    };

	    // types/varints/varint64

	    if (Long) {

	        /**
	         * Maximum number of bytes required to store a 64bit base 128 variable-length integer.
	         * @type {number}
	         * @const
	         * @expose
	         */
	        ByteBuffer.MAX_VARINT64_BYTES = 10;

	        /**
	         * Calculates the actual number of bytes required to store a 64bit base 128 variable-length integer.
	         * @param {number|!Long} value Value to encode
	         * @returns {number} Number of bytes required. Capped to {@link ByteBuffer.MAX_VARINT64_BYTES}
	         * @expose
	         */
	        ByteBuffer.calculateVarint64 = function(value) {
	            if (typeof value === 'number')
	                value = Long.fromNumber(value);
	            else if (typeof value === 'string')
	                value = Long.fromString(value);
	            // ref: src/google/protobuf/io/coded_stream.cc
	            var part0 = value.toInt() >>> 0,
	                part1 = value.shiftRightUnsigned(28).toInt() >>> 0,
	                part2 = value.shiftRightUnsigned(56).toInt() >>> 0;
	            if (part2 == 0) {
	                if (part1 == 0) {
	                    if (part0 < 1 << 14)
	                        return part0 < 1 << 7 ? 1 : 2;
	                    else
	                        return part0 < 1 << 21 ? 3 : 4;
	                } else {
	                    if (part1 < 1 << 14)
	                        return part1 < 1 << 7 ? 5 : 6;
	                    else
	                        return part1 < 1 << 21 ? 7 : 8;
	                }
	            } else
	                return part2 < 1 << 7 ? 9 : 10;
	        };

	        /**
	         * Zigzag encodes a signed 64bit integer so that it can be effectively used with varint encoding.
	         * @param {number|!Long} value Signed long
	         * @returns {!Long} Unsigned zigzag encoded long
	         * @expose
	         */
	        ByteBuffer.zigZagEncode64 = function(value) {
	            if (typeof value === 'number')
	                value = Long.fromNumber(value, false);
	            else if (typeof value === 'string')
	                value = Long.fromString(value, false);
	            else if (value.unsigned !== false) value = value.toSigned();
	            // ref: src/google/protobuf/wire_format_lite.h
	            return value.shiftLeft(1).xor(value.shiftRight(63)).toUnsigned();
	        };

	        /**
	         * Decodes a zigzag encoded signed 64bit integer.
	         * @param {!Long|number} value Unsigned zigzag encoded long or JavaScript number
	         * @returns {!Long} Signed long
	         * @expose
	         */
	        ByteBuffer.zigZagDecode64 = function(value) {
	            if (typeof value === 'number')
	                value = Long.fromNumber(value, false);
	            else if (typeof value === 'string')
	                value = Long.fromString(value, false);
	            else if (value.unsigned !== false) value = value.toSigned();
	            // ref: src/google/protobuf/wire_format_lite.h
	            return value.shiftRightUnsigned(1).xor(value.and(Long.ONE).toSigned().negate()).toSigned();
	        };

	        /**
	         * Writes a 64bit base 128 variable-length integer.
	         * @param {number|Long} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  written if omitted.
	         * @returns {!ByteBuffer|number} `this` if offset is omitted, else the actual number of bytes written.
	         * @expose
	         */
	        ByteBufferPrototype.writeVarint64 = function(value, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof value === 'number')
	                    value = Long.fromNumber(value);
	                else if (typeof value === 'string')
	                    value = Long.fromString(value);
	                else if (!(value && value instanceof Long))
	                    throw TypeError("Illegal value: "+value+" (not an integer or Long)");
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            if (typeof value === 'number')
	                value = Long.fromNumber(value, false);
	            else if (typeof value === 'string')
	                value = Long.fromString(value, false);
	            else if (value.unsigned !== false) value = value.toSigned();
	            var size = ByteBuffer.calculateVarint64(value),
	                part0 = value.toInt() >>> 0,
	                part1 = value.shiftRightUnsigned(28).toInt() >>> 0,
	                part2 = value.shiftRightUnsigned(56).toInt() >>> 0;
	            offset += size;
	            var capacity11 = this.buffer.byteLength;
	            if (offset > capacity11)
	                this.resize((capacity11 *= 2) > offset ? capacity11 : offset);
	            offset -= size;
	            switch (size) {
	                case 10: this.view[offset+9] = (part2 >>>  7) & 0x01;
	                case 9 : this.view[offset+8] = size !== 9 ? (part2       ) | 0x80 : (part2       ) & 0x7F;
	                case 8 : this.view[offset+7] = size !== 8 ? (part1 >>> 21) | 0x80 : (part1 >>> 21) & 0x7F;
	                case 7 : this.view[offset+6] = size !== 7 ? (part1 >>> 14) | 0x80 : (part1 >>> 14) & 0x7F;
	                case 6 : this.view[offset+5] = size !== 6 ? (part1 >>>  7) | 0x80 : (part1 >>>  7) & 0x7F;
	                case 5 : this.view[offset+4] = size !== 5 ? (part1       ) | 0x80 : (part1       ) & 0x7F;
	                case 4 : this.view[offset+3] = size !== 4 ? (part0 >>> 21) | 0x80 : (part0 >>> 21) & 0x7F;
	                case 3 : this.view[offset+2] = size !== 3 ? (part0 >>> 14) | 0x80 : (part0 >>> 14) & 0x7F;
	                case 2 : this.view[offset+1] = size !== 2 ? (part0 >>>  7) | 0x80 : (part0 >>>  7) & 0x7F;
	                case 1 : this.view[offset  ] = size !== 1 ? (part0       ) | 0x80 : (part0       ) & 0x7F;
	            }
	            if (relative) {
	                this.offset += size;
	                return this;
	            } else {
	                return size;
	            }
	        };

	        /**
	         * Writes a zig-zag encoded 64bit base 128 variable-length integer.
	         * @param {number|Long} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  written if omitted.
	         * @returns {!ByteBuffer|number} `this` if offset is omitted, else the actual number of bytes written.
	         * @expose
	         */
	        ByteBufferPrototype.writeVarint64ZigZag = function(value, offset) {
	            return this.writeVarint64(ByteBuffer.zigZagEncode64(value), offset);
	        };

	        /**
	         * Reads a 64bit base 128 variable-length integer. Requires Long.js.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  read if omitted.
	         * @returns {!Long|!{value: Long, length: number}} The value read if offset is omitted, else the value read and
	         *  the actual number of bytes read.
	         * @throws {Error} If it's not a valid varint
	         * @expose
	         */
	        ByteBufferPrototype.readVarint64 = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	            }
	            // ref: src/google/protobuf/io/coded_stream.cc
	            var start = offset,
	                part0 = 0,
	                part1 = 0,
	                part2 = 0,
	                b  = 0;
	            b = this.view[offset++]; part0  = (b & 0x7F)      ; if ( b & 0x80                                                   ) {
	            b = this.view[offset++]; part0 |= (b & 0x7F) <<  7; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part0 |= (b & 0x7F) << 14; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part0 |= (b & 0x7F) << 21; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part1  = (b & 0x7F)      ; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part1 |= (b & 0x7F) <<  7; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part1 |= (b & 0x7F) << 14; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part1 |= (b & 0x7F) << 21; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part2  = (b & 0x7F)      ; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part2 |= (b & 0x7F) <<  7; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            throw Error("Buffer overrun"); }}}}}}}}}}
	            var value = Long.fromBits(part0 | (part1 << 28), (part1 >>> 4) | (part2) << 24, false);
	            if (relative) {
	                this.offset = offset;
	                return value;
	            } else {
	                return {
	                    'value': value,
	                    'length': offset-start
	                };
	            }
	        };

	        /**
	         * Reads a zig-zag encoded 64bit base 128 variable-length integer. Requires Long.js.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  read if omitted.
	         * @returns {!Long|!{value: Long, length: number}} The value read if offset is omitted, else the value read and
	         *  the actual number of bytes read.
	         * @throws {Error} If it's not a valid varint
	         * @expose
	         */
	        ByteBufferPrototype.readVarint64ZigZag = function(offset) {
	            var val = this.readVarint64(offset);
	            if (val && val['value'] instanceof Long)
	                val["value"] = ByteBuffer.zigZagDecode64(val["value"]);
	            else
	                val = ByteBuffer.zigZagDecode64(val);
	            return val;
	        };

	    } // Long


	    // types/strings/cstring

	    /**
	     * Writes a NULL-terminated UTF8 encoded string. For this to work the specified string must not contain any NULL
	     *  characters itself.
	     * @param {string} str String to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  contained in `str` + 1 if omitted.
	     * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written
	     * @expose
	     */
	    ByteBufferPrototype.writeCString = function(str, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        var i,
	            k = str.length;
	        if (!this.noAssert) {
	            if (typeof str !== 'string')
	                throw TypeError("Illegal str: Not a string");
	            for (i=0; i<k; ++i) {
	                if (str.charCodeAt(i) === 0)
	                    throw RangeError("Illegal str: Contains NULL-characters");
	            }
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        // UTF8 strings do not contain zero bytes in between except for the zero character, so:
	        k = utfx.calculateUTF16asUTF8(stringSource(str))[1];
	        offset += k+1;
	        var capacity12 = this.buffer.byteLength;
	        if (offset > capacity12)
	            this.resize((capacity12 *= 2) > offset ? capacity12 : offset);
	        offset -= k+1;
	        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
	            this.view[offset++] = b;
	        }.bind(this));
	        this.view[offset++] = 0;
	        if (relative) {
	            this.offset = offset;
	            return this;
	        }
	        return k;
	    };

	    /**
	     * Reads a NULL-terminated UTF8 encoded string. For this to work the string read must not contain any NULL characters
	     *  itself.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  read if omitted.
	     * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
	     *  read and the actual number of bytes read.
	     * @expose
	     */
	    ByteBufferPrototype.readCString = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	        }
	        var start = offset;
	        // UTF8 strings do not contain zero bytes in between except for the zero character itself, so:
	        var sd, b = -1;
	        utfx.decodeUTF8toUTF16(function() {
	            if (b === 0) return null;
	            if (offset >= this.limit)
	                throw RangeError("Illegal range: Truncated data, "+offset+" < "+this.limit);
	            b = this.view[offset++];
	            return b === 0 ? null : b;
	        }.bind(this), sd = stringDestination(), true);
	        if (relative) {
	            this.offset = offset;
	            return sd();
	        } else {
	            return {
	                "string": sd(),
	                "length": offset - start
	            };
	        }
	    };

	    // types/strings/istring

	    /**
	     * Writes a length as uint32 prefixed UTF8 encoded string.
	     * @param {string} str String to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {!ByteBuffer|number} `this` if `offset` is omitted, else the actual number of bytes written
	     * @expose
	     * @see ByteBuffer#writeVarint32
	     */
	    ByteBufferPrototype.writeIString = function(str, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof str !== 'string')
	                throw TypeError("Illegal str: Not a string");
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        var start = offset,
	            k;
	        k = utfx.calculateUTF16asUTF8(stringSource(str), this.noAssert)[1];
	        offset += 4+k;
	        var capacity13 = this.buffer.byteLength;
	        if (offset > capacity13)
	            this.resize((capacity13 *= 2) > offset ? capacity13 : offset);
	        offset -= 4+k;
	        if (this.littleEndian) {
	            this.view[offset+3] = (k >>> 24) & 0xFF;
	            this.view[offset+2] = (k >>> 16) & 0xFF;
	            this.view[offset+1] = (k >>>  8) & 0xFF;
	            this.view[offset  ] =  k         & 0xFF;
	        } else {
	            this.view[offset  ] = (k >>> 24) & 0xFF;
	            this.view[offset+1] = (k >>> 16) & 0xFF;
	            this.view[offset+2] = (k >>>  8) & 0xFF;
	            this.view[offset+3] =  k         & 0xFF;
	        }
	        offset += 4;
	        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
	            this.view[offset++] = b;
	        }.bind(this));
	        if (offset !== start + 4 + k)
	            throw RangeError("Illegal range: Truncated data, "+offset+" == "+(offset+4+k));
	        if (relative) {
	            this.offset = offset;
	            return this;
	        }
	        return offset - start;
	    };

	    /**
	     * Reads a length as uint32 prefixed UTF8 encoded string.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  read if omitted.
	     * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
	     *  read and the actual number of bytes read.
	     * @expose
	     * @see ByteBuffer#readVarint32
	     */
	    ByteBufferPrototype.readIString = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 4 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+4+") <= "+this.buffer.byteLength);
	        }
	        var start = offset;
	        var len = this.readUint32(offset);
	        var str = this.readUTF8String(len, ByteBuffer.METRICS_BYTES, offset += 4);
	        offset += str['length'];
	        if (relative) {
	            this.offset = offset;
	            return str['string'];
	        } else {
	            return {
	                'string': str['string'],
	                'length': offset - start
	            };
	        }
	    };

	    // types/strings/utf8string

	    /**
	     * Metrics representing number of UTF8 characters. Evaluates to `c`.
	     * @type {string}
	     * @const
	     * @expose
	     */
	    ByteBuffer.METRICS_CHARS = 'c';

	    /**
	     * Metrics representing number of bytes. Evaluates to `b`.
	     * @type {string}
	     * @const
	     * @expose
	     */
	    ByteBuffer.METRICS_BYTES = 'b';

	    /**
	     * Writes an UTF8 encoded string.
	     * @param {string} str String to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} if omitted.
	     * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written.
	     * @expose
	     */
	    ByteBufferPrototype.writeUTF8String = function(str, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        var k;
	        var start = offset;
	        k = utfx.calculateUTF16asUTF8(stringSource(str))[1];
	        offset += k;
	        var capacity14 = this.buffer.byteLength;
	        if (offset > capacity14)
	            this.resize((capacity14 *= 2) > offset ? capacity14 : offset);
	        offset -= k;
	        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
	            this.view[offset++] = b;
	        }.bind(this));
	        if (relative) {
	            this.offset = offset;
	            return this;
	        }
	        return offset - start;
	    };

	    /**
	     * Writes an UTF8 encoded string. This is an alias of {@link ByteBuffer#writeUTF8String}.
	     * @function
	     * @param {string} str String to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} if omitted.
	     * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written.
	     * @expose
	     */
	    ByteBufferPrototype.writeString = ByteBufferPrototype.writeUTF8String;

	    /**
	     * Calculates the number of UTF8 characters of a string. JavaScript itself uses UTF-16, so that a string's
	     *  `length` property does not reflect its actual UTF8 size if it contains code points larger than 0xFFFF.
	     * @param {string} str String to calculate
	     * @returns {number} Number of UTF8 characters
	     * @expose
	     */
	    ByteBuffer.calculateUTF8Chars = function(str) {
	        return utfx.calculateUTF16asUTF8(stringSource(str))[0];
	    };

	    /**
	     * Calculates the number of UTF8 bytes of a string.
	     * @param {string} str String to calculate
	     * @returns {number} Number of UTF8 bytes
	     * @expose
	     */
	    ByteBuffer.calculateUTF8Bytes = function(str) {
	        return utfx.calculateUTF16asUTF8(stringSource(str))[1];
	    };

	    /**
	     * Calculates the number of UTF8 bytes of a string. This is an alias of {@link ByteBuffer.calculateUTF8Bytes}.
	     * @function
	     * @param {string} str String to calculate
	     * @returns {number} Number of UTF8 bytes
	     * @expose
	     */
	    ByteBuffer.calculateString = ByteBuffer.calculateUTF8Bytes;

	    /**
	     * Reads an UTF8 encoded string.
	     * @param {number} length Number of characters or bytes to read.
	     * @param {string=} metrics Metrics specifying what `length` is meant to count. Defaults to
	     *  {@link ByteBuffer.METRICS_CHARS}.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  read if omitted.
	     * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
	     *  read and the actual number of bytes read.
	     * @expose
	     */
	    ByteBufferPrototype.readUTF8String = function(length, metrics, offset) {
	        if (typeof metrics === 'number') {
	            offset = metrics;
	            metrics = undefined;
	        }
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (typeof metrics === 'undefined') metrics = ByteBuffer.METRICS_CHARS;
	        if (!this.noAssert) {
	            if (typeof length !== 'number' || length % 1 !== 0)
	                throw TypeError("Illegal length: "+length+" (not an integer)");
	            length |= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        var i = 0,
	            start = offset,
	            sd;
	        if (metrics === ByteBuffer.METRICS_CHARS) { // The same for node and the browser
	            sd = stringDestination();
	            utfx.decodeUTF8(function() {
	                return i < length && offset < this.limit ? this.view[offset++] : null;
	            }.bind(this), function(cp) {
	                ++i; utfx.UTF8toUTF16(cp, sd);
	            });
	            if (i !== length)
	                throw RangeError("Illegal range: Truncated data, "+i+" == "+length);
	            if (relative) {
	                this.offset = offset;
	                return sd();
	            } else {
	                return {
	                    "string": sd(),
	                    "length": offset - start
	                };
	            }
	        } else if (metrics === ByteBuffer.METRICS_BYTES) {
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + length > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+length+") <= "+this.buffer.byteLength);
	            }
	            var k = offset + length;
	            utfx.decodeUTF8toUTF16(function() {
	                return offset < k ? this.view[offset++] : null;
	            }.bind(this), sd = stringDestination(), this.noAssert);
	            if (offset !== k)
	                throw RangeError("Illegal range: Truncated data, "+offset+" == "+k);
	            if (relative) {
	                this.offset = offset;
	                return sd();
	            } else {
	                return {
	                    'string': sd(),
	                    'length': offset - start
	                };
	            }
	        } else
	            throw TypeError("Unsupported metrics: "+metrics);
	    };

	    /**
	     * Reads an UTF8 encoded string. This is an alias of {@link ByteBuffer#readUTF8String}.
	     * @function
	     * @param {number} length Number of characters or bytes to read
	     * @param {number=} metrics Metrics specifying what `n` is meant to count. Defaults to
	     *  {@link ByteBuffer.METRICS_CHARS}.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  read if omitted.
	     * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
	     *  read and the actual number of bytes read.
	     * @expose
	     */
	    ByteBufferPrototype.readString = ByteBufferPrototype.readUTF8String;

	    // types/strings/vstring

	    /**
	     * Writes a length as varint32 prefixed UTF8 encoded string.
	     * @param {string} str String to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {!ByteBuffer|number} `this` if `offset` is omitted, else the actual number of bytes written
	     * @expose
	     * @see ByteBuffer#writeVarint32
	     */
	    ByteBufferPrototype.writeVString = function(str, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof str !== 'string')
	                throw TypeError("Illegal str: Not a string");
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        var start = offset,
	            k, l;
	        k = utfx.calculateUTF16asUTF8(stringSource(str), this.noAssert)[1];
	        l = ByteBuffer.calculateVarint32(k);
	        offset += l+k;
	        var capacity15 = this.buffer.byteLength;
	        if (offset > capacity15)
	            this.resize((capacity15 *= 2) > offset ? capacity15 : offset);
	        offset -= l+k;
	        offset += this.writeVarint32(k, offset);
	        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
	            this.view[offset++] = b;
	        }.bind(this));
	        if (offset !== start+k+l)
	            throw RangeError("Illegal range: Truncated data, "+offset+" == "+(offset+k+l));
	        if (relative) {
	            this.offset = offset;
	            return this;
	        }
	        return offset - start;
	    };

	    /**
	     * Reads a length as varint32 prefixed UTF8 encoded string.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  read if omitted.
	     * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
	     *  read and the actual number of bytes read.
	     * @expose
	     * @see ByteBuffer#readVarint32
	     */
	    ByteBufferPrototype.readVString = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	        }
	        var start = offset;
	        var len = this.readVarint32(offset);
	        var str = this.readUTF8String(len['value'], ByteBuffer.METRICS_BYTES, offset += len['length']);
	        offset += str['length'];
	        if (relative) {
	            this.offset = offset;
	            return str['string'];
	        } else {
	            return {
	                'string': str['string'],
	                'length': offset - start
	            };
	        }
	    };


	    /**
	     * Appends some data to this ByteBuffer. This will overwrite any contents behind the specified offset up to the appended
	     *  data's length.
	     * @param {!ByteBuffer|!ArrayBuffer|!Uint8Array|string} source Data to append. If `source` is a ByteBuffer, its offsets
	     *  will be modified according to the performed read operation.
	     * @param {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
	     * @param {number=} offset Offset to append at. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     * @example A relative `<01 02>03.append(<04 05>)` will result in `<01 02 04 05>, 04 05|`
	     * @example An absolute `<01 02>03.append(04 05>, 1)` will result in `<01 04>05, 04 05|`
	     */
	    ByteBufferPrototype.append = function(source, encoding, offset) {
	        if (typeof encoding === 'number' || typeof encoding !== 'string') {
	            offset = encoding;
	            encoding = undefined;
	        }
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        if (!(source instanceof ByteBuffer))
	            source = ByteBuffer.wrap(source, encoding);
	        var length = source.limit - source.offset;
	        if (length <= 0) return this; // Nothing to append
	        offset += length;
	        var capacity16 = this.buffer.byteLength;
	        if (offset > capacity16)
	            this.resize((capacity16 *= 2) > offset ? capacity16 : offset);
	        offset -= length;
	        this.view.set(source.view.subarray(source.offset, source.limit), offset);
	        source.offset += length;
	        if (relative) this.offset += length;
	        return this;
	    };

	    /**
	     * Appends this ByteBuffer's contents to another ByteBuffer. This will overwrite any contents at and after the
	        specified offset up to the length of this ByteBuffer's data.
	     * @param {!ByteBuffer} target Target ByteBuffer
	     * @param {number=} offset Offset to append to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  read if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     * @see ByteBuffer#append
	     */
	    ByteBufferPrototype.appendTo = function(target, offset) {
	        target.append(this, offset);
	        return this;
	    };

	    /**
	     * Enables or disables assertions of argument types and offsets. Assertions are enabled by default but you can opt to
	     *  disable them if your code already makes sure that everything is valid.
	     * @param {boolean} assert `true` to enable assertions, otherwise `false`
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.assert = function(assert) {
	        this.noAssert = !assert;
	        return this;
	    };

	    /**
	     * Gets the capacity of this ByteBuffer's backing buffer.
	     * @returns {number} Capacity of the backing buffer
	     * @expose
	     */
	    ByteBufferPrototype.capacity = function() {
	        return this.buffer.byteLength;
	    };
	    /**
	     * Clears this ByteBuffer's offsets by setting {@link ByteBuffer#offset} to `0` and {@link ByteBuffer#limit} to the
	     *  backing buffer's capacity. Discards {@link ByteBuffer#markedOffset}.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.clear = function() {
	        this.offset = 0;
	        this.limit = this.buffer.byteLength;
	        this.markedOffset = -1;
	        return this;
	    };

	    /**
	     * Creates a cloned instance of this ByteBuffer, preset with this ByteBuffer's values for {@link ByteBuffer#offset},
	     *  {@link ByteBuffer#markedOffset} and {@link ByteBuffer#limit}.
	     * @param {boolean=} copy Whether to copy the backing buffer or to return another view on the same, defaults to `false`
	     * @returns {!ByteBuffer} Cloned instance
	     * @expose
	     */
	    ByteBufferPrototype.clone = function(copy) {
	        var bb = new ByteBuffer(0, this.littleEndian, this.noAssert);
	        if (copy) {
	            bb.buffer = new ArrayBuffer(this.buffer.byteLength);
	            bb.view = new Uint8Array(bb.buffer);
	        } else {
	            bb.buffer = this.buffer;
	            bb.view = this.view;
	        }
	        bb.offset = this.offset;
	        bb.markedOffset = this.markedOffset;
	        bb.limit = this.limit;
	        return bb;
	    };

	    /**
	     * Compacts this ByteBuffer to be backed by a {@link ByteBuffer#buffer} of its contents' length. Contents are the bytes
	     *  between {@link ByteBuffer#offset} and {@link ByteBuffer#limit}. Will set `offset = 0` and `limit = capacity` and
	     *  adapt {@link ByteBuffer#markedOffset} to the same relative position if set.
	     * @param {number=} begin Offset to start at, defaults to {@link ByteBuffer#offset}
	     * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.compact = function(begin, end) {
	        if (typeof begin === 'undefined') begin = this.offset;
	        if (typeof end === 'undefined') end = this.limit;
	        if (!this.noAssert) {
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        if (begin === 0 && end === this.buffer.byteLength)
	            return this; // Already compacted
	        var len = end - begin;
	        if (len === 0) {
	            this.buffer = EMPTY_BUFFER;
	            this.view = null;
	            if (this.markedOffset >= 0) this.markedOffset -= begin;
	            this.offset = 0;
	            this.limit = 0;
	            return this;
	        }
	        var buffer = new ArrayBuffer(len);
	        var view = new Uint8Array(buffer);
	        view.set(this.view.subarray(begin, end));
	        this.buffer = buffer;
	        this.view = view;
	        if (this.markedOffset >= 0) this.markedOffset -= begin;
	        this.offset = 0;
	        this.limit = len;
	        return this;
	    };

	    /**
	     * Creates a copy of this ByteBuffer's contents. Contents are the bytes between {@link ByteBuffer#offset} and
	     *  {@link ByteBuffer#limit}.
	     * @param {number=} begin Begin offset, defaults to {@link ByteBuffer#offset}.
	     * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
	     * @returns {!ByteBuffer} Copy
	     * @expose
	     */
	    ByteBufferPrototype.copy = function(begin, end) {
	        if (typeof begin === 'undefined') begin = this.offset;
	        if (typeof end === 'undefined') end = this.limit;
	        if (!this.noAssert) {
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        if (begin === end)
	            return new ByteBuffer(0, this.littleEndian, this.noAssert);
	        var capacity = end - begin,
	            bb = new ByteBuffer(capacity, this.littleEndian, this.noAssert);
	        bb.offset = 0;
	        bb.limit = capacity;
	        if (bb.markedOffset >= 0) bb.markedOffset -= begin;
	        this.copyTo(bb, 0, begin, end);
	        return bb;
	    };

	    /**
	     * Copies this ByteBuffer's contents to another ByteBuffer. Contents are the bytes between {@link ByteBuffer#offset} and
	     *  {@link ByteBuffer#limit}.
	     * @param {!ByteBuffer} target Target ByteBuffer
	     * @param {number=} targetOffset Offset to copy to. Will use and increase the target's {@link ByteBuffer#offset}
	     *  by the number of bytes copied if omitted.
	     * @param {number=} sourceOffset Offset to start copying from. Will use and increase {@link ByteBuffer#offset} by the
	     *  number of bytes copied if omitted.
	     * @param {number=} sourceLimit Offset to end copying from, defaults to {@link ByteBuffer#limit}
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.copyTo = function(target, targetOffset, sourceOffset, sourceLimit) {
	        var relative,
	            targetRelative;
	        if (!this.noAssert) {
	            if (!ByteBuffer.isByteBuffer(target))
	                throw TypeError("Illegal target: Not a ByteBuffer");
	        }
	        targetOffset = (targetRelative = typeof targetOffset === 'undefined') ? target.offset : targetOffset | 0;
	        sourceOffset = (relative = typeof sourceOffset === 'undefined') ? this.offset : sourceOffset | 0;
	        sourceLimit = typeof sourceLimit === 'undefined' ? this.limit : sourceLimit | 0;

	        if (targetOffset < 0 || targetOffset > target.buffer.byteLength)
	            throw RangeError("Illegal target range: 0 <= "+targetOffset+" <= "+target.buffer.byteLength);
	        if (sourceOffset < 0 || sourceLimit > this.buffer.byteLength)
	            throw RangeError("Illegal source range: 0 <= "+sourceOffset+" <= "+this.buffer.byteLength);

	        var len = sourceLimit - sourceOffset;
	        if (len === 0)
	            return target; // Nothing to copy

	        target.ensureCapacity(targetOffset + len);

	        target.view.set(this.view.subarray(sourceOffset, sourceLimit), targetOffset);

	        if (relative) this.offset += len;
	        if (targetRelative) target.offset += len;

	        return this;
	    };

	    /**
	     * Makes sure that this ByteBuffer is backed by a {@link ByteBuffer#buffer} of at least the specified capacity. If the
	     *  current capacity is exceeded, it will be doubled. If double the current capacity is less than the required capacity,
	     *  the required capacity will be used instead.
	     * @param {number} capacity Required capacity
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.ensureCapacity = function(capacity) {
	        var current = this.buffer.byteLength;
	        if (current < capacity)
	            return this.resize((current *= 2) > capacity ? current : capacity);
	        return this;
	    };

	    /**
	     * Overwrites this ByteBuffer's contents with the specified value. Contents are the bytes between
	     *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}.
	     * @param {number|string} value Byte value to fill with. If given as a string, the first character is used.
	     * @param {number=} begin Begin offset. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted. defaults to {@link ByteBuffer#offset}.
	     * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
	     * @returns {!ByteBuffer} this
	     * @expose
	     * @example `someByteBuffer.clear().fill(0)` fills the entire backing buffer with zeroes
	     */
	    ByteBufferPrototype.fill = function(value, begin, end) {
	        var relative = typeof begin === 'undefined';
	        if (relative) begin = this.offset;
	        if (typeof value === 'string' && value.length > 0)
	            value = value.charCodeAt(0);
	        if (typeof begin === 'undefined') begin = this.offset;
	        if (typeof end === 'undefined') end = this.limit;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value |= 0;
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        if (begin >= end)
	            return this; // Nothing to fill
	        while (begin < end) this.view[begin++] = value;
	        if (relative) this.offset = begin;
	        return this;
	    };

	    /**
	     * Makes this ByteBuffer ready for a new sequence of write or relative read operations. Sets `limit = offset` and
	     *  `offset = 0`. Make sure always to flip a ByteBuffer when all relative read or write operations are complete.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.flip = function() {
	        this.limit = this.offset;
	        this.offset = 0;
	        return this;
	    };
	    /**
	     * Marks an offset on this ByteBuffer to be used later.
	     * @param {number=} offset Offset to mark. Defaults to {@link ByteBuffer#offset}.
	     * @returns {!ByteBuffer} this
	     * @throws {TypeError} If `offset` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @see ByteBuffer#reset
	     * @expose
	     */
	    ByteBufferPrototype.mark = function(offset) {
	        offset = typeof offset === 'undefined' ? this.offset : offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        this.markedOffset = offset;
	        return this;
	    };
	    /**
	     * Sets the byte order.
	     * @param {boolean} littleEndian `true` for little endian byte order, `false` for big endian
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.order = function(littleEndian) {
	        if (!this.noAssert) {
	            if (typeof littleEndian !== 'boolean')
	                throw TypeError("Illegal littleEndian: Not a boolean");
	        }
	        this.littleEndian = !!littleEndian;
	        return this;
	    };

	    /**
	     * Switches (to) little endian byte order.
	     * @param {boolean=} littleEndian Defaults to `true`, otherwise uses big endian
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.LE = function(littleEndian) {
	        this.littleEndian = typeof littleEndian !== 'undefined' ? !!littleEndian : true;
	        return this;
	    };

	    /**
	     * Switches (to) big endian byte order.
	     * @param {boolean=} bigEndian Defaults to `true`, otherwise uses little endian
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.BE = function(bigEndian) {
	        this.littleEndian = typeof bigEndian !== 'undefined' ? !bigEndian : false;
	        return this;
	    };
	    /**
	     * Prepends some data to this ByteBuffer. This will overwrite any contents before the specified offset up to the
	     *  prepended data's length. If there is not enough space available before the specified `offset`, the backing buffer
	     *  will be resized and its contents moved accordingly.
	     * @param {!ByteBuffer|string|!ArrayBuffer} source Data to prepend. If `source` is a ByteBuffer, its offset will be
	     *  modified according to the performed read operation.
	     * @param {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
	     * @param {number=} offset Offset to prepend at. Will use and decrease {@link ByteBuffer#offset} by the number of bytes
	     *  prepended if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     * @example A relative `00<01 02 03>.prepend(<04 05>)` results in `<04 05 01 02 03>, 04 05|`
	     * @example An absolute `00<01 02 03>.prepend(<04 05>, 2)` results in `04<05 02 03>, 04 05|`
	     */
	    ByteBufferPrototype.prepend = function(source, encoding, offset) {
	        if (typeof encoding === 'number' || typeof encoding !== 'string') {
	            offset = encoding;
	            encoding = undefined;
	        }
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        if (!(source instanceof ByteBuffer))
	            source = ByteBuffer.wrap(source, encoding);
	        var len = source.limit - source.offset;
	        if (len <= 0) return this; // Nothing to prepend
	        var diff = len - offset;
	        if (diff > 0) { // Not enough space before offset, so resize + move
	            var buffer = new ArrayBuffer(this.buffer.byteLength + diff);
	            var view = new Uint8Array(buffer);
	            view.set(this.view.subarray(offset, this.buffer.byteLength), len);
	            this.buffer = buffer;
	            this.view = view;
	            this.offset += diff;
	            if (this.markedOffset >= 0) this.markedOffset += diff;
	            this.limit += diff;
	            offset += diff;
	        } else {
	            var arrayView = new Uint8Array(this.buffer);
	        }
	        this.view.set(source.view.subarray(source.offset, source.limit), offset - len);

	        source.offset = source.limit;
	        if (relative)
	            this.offset -= len;
	        return this;
	    };

	    /**
	     * Prepends this ByteBuffer to another ByteBuffer. This will overwrite any contents before the specified offset up to the
	     *  prepended data's length. If there is not enough space available before the specified `offset`, the backing buffer
	     *  will be resized and its contents moved accordingly.
	     * @param {!ByteBuffer} target Target ByteBuffer
	     * @param {number=} offset Offset to prepend at. Will use and decrease {@link ByteBuffer#offset} by the number of bytes
	     *  prepended if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     * @see ByteBuffer#prepend
	     */
	    ByteBufferPrototype.prependTo = function(target, offset) {
	        target.prepend(this, offset);
	        return this;
	    };
	    /**
	     * Prints debug information about this ByteBuffer's contents.
	     * @param {function(string)=} out Output function to call, defaults to console.log
	     * @expose
	     */
	    ByteBufferPrototype.printDebug = function(out) {
	        if (typeof out !== 'function') out = console.log.bind(console);
	        out(
	            this.toString()+"\n"+
	            "-------------------------------------------------------------------\n"+
	            this.toDebug(/* columns */ true)
	        );
	    };

	    /**
	     * Gets the number of remaining readable bytes. Contents are the bytes between {@link ByteBuffer#offset} and
	     *  {@link ByteBuffer#limit}, so this returns `limit - offset`.
	     * @returns {number} Remaining readable bytes. May be negative if `offset > limit`.
	     * @expose
	     */
	    ByteBufferPrototype.remaining = function() {
	        return this.limit - this.offset;
	    };
	    /**
	     * Resets this ByteBuffer's {@link ByteBuffer#offset}. If an offset has been marked through {@link ByteBuffer#mark}
	     *  before, `offset` will be set to {@link ByteBuffer#markedOffset}, which will then be discarded. If no offset has been
	     *  marked, sets `offset = 0`.
	     * @returns {!ByteBuffer} this
	     * @see ByteBuffer#mark
	     * @expose
	     */
	    ByteBufferPrototype.reset = function() {
	        if (this.markedOffset >= 0) {
	            this.offset = this.markedOffset;
	            this.markedOffset = -1;
	        } else {
	            this.offset = 0;
	        }
	        return this;
	    };
	    /**
	     * Resizes this ByteBuffer to be backed by a buffer of at least the given capacity. Will do nothing if already that
	     *  large or larger.
	     * @param {number} capacity Capacity required
	     * @returns {!ByteBuffer} this
	     * @throws {TypeError} If `capacity` is not a number
	     * @throws {RangeError} If `capacity < 0`
	     * @expose
	     */
	    ByteBufferPrototype.resize = function(capacity) {
	        if (!this.noAssert) {
	            if (typeof capacity !== 'number' || capacity % 1 !== 0)
	                throw TypeError("Illegal capacity: "+capacity+" (not an integer)");
	            capacity |= 0;
	            if (capacity < 0)
	                throw RangeError("Illegal capacity: 0 <= "+capacity);
	        }
	        if (this.buffer.byteLength < capacity) {
	            var buffer = new ArrayBuffer(capacity);
	            var view = new Uint8Array(buffer);
	            view.set(this.view);
	            this.buffer = buffer;
	            this.view = view;
	        }
	        return this;
	    };
	    /**
	     * Reverses this ByteBuffer's contents.
	     * @param {number=} begin Offset to start at, defaults to {@link ByteBuffer#offset}
	     * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.reverse = function(begin, end) {
	        if (typeof begin === 'undefined') begin = this.offset;
	        if (typeof end === 'undefined') end = this.limit;
	        if (!this.noAssert) {
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        if (begin === end)
	            return this; // Nothing to reverse
	        Array.prototype.reverse.call(this.view.subarray(begin, end));
	        return this;
	    };
	    /**
	     * Skips the next `length` bytes. This will just advance
	     * @param {number} length Number of bytes to skip. May also be negative to move the offset back.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.skip = function(length) {
	        if (!this.noAssert) {
	            if (typeof length !== 'number' || length % 1 !== 0)
	                throw TypeError("Illegal length: "+length+" (not an integer)");
	            length |= 0;
	        }
	        var offset = this.offset + length;
	        if (!this.noAssert) {
	            if (offset < 0 || offset > this.buffer.byteLength)
	                throw RangeError("Illegal length: 0 <= "+this.offset+" + "+length+" <= "+this.buffer.byteLength);
	        }
	        this.offset = offset;
	        return this;
	    };

	    /**
	     * Slices this ByteBuffer by creating a cloned instance with `offset = begin` and `limit = end`.
	     * @param {number=} begin Begin offset, defaults to {@link ByteBuffer#offset}.
	     * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
	     * @returns {!ByteBuffer} Clone of this ByteBuffer with slicing applied, backed by the same {@link ByteBuffer#buffer}
	     * @expose
	     */
	    ByteBufferPrototype.slice = function(begin, end) {
	        if (typeof begin === 'undefined') begin = this.offset;
	        if (typeof end === 'undefined') end = this.limit;
	        if (!this.noAssert) {
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        var bb = this.clone();
	        bb.offset = begin;
	        bb.limit = end;
	        return bb;
	    };
	    /**
	     * Returns a copy of the backing buffer that contains this ByteBuffer's contents. Contents are the bytes between
	     *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}.
	     * @param {boolean=} forceCopy If `true` returns a copy, otherwise returns a view referencing the same memory if
	     *  possible. Defaults to `false`
	     * @returns {!ArrayBuffer} Contents as an ArrayBuffer
	     * @expose
	     */
	    ByteBufferPrototype.toBuffer = function(forceCopy) {
	        var offset = this.offset,
	            limit = this.limit;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: Not an integer");
	            offset >>>= 0;
	            if (typeof limit !== 'number' || limit % 1 !== 0)
	                throw TypeError("Illegal limit: Not an integer");
	            limit >>>= 0;
	            if (offset < 0 || offset > limit || limit > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+offset+" <= "+limit+" <= "+this.buffer.byteLength);
	        }
	        // NOTE: It's not possible to have another ArrayBuffer reference the same memory as the backing buffer. This is
	        // possible with Uint8Array#subarray only, but we have to return an ArrayBuffer by contract. So:
	        if (!forceCopy && offset === 0 && limit === this.buffer.byteLength)
	            return this.buffer;
	        if (offset === limit)
	            return EMPTY_BUFFER;
	        var buffer = new ArrayBuffer(limit - offset);
	        new Uint8Array(buffer).set(new Uint8Array(this.buffer).subarray(offset, limit), 0);
	        return buffer;
	    };

	    /**
	     * Returns a raw buffer compacted to contain this ByteBuffer's contents. Contents are the bytes between
	     *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}. This is an alias of {@link ByteBuffer#toBuffer}.
	     * @function
	     * @param {boolean=} forceCopy If `true` returns a copy, otherwise returns a view referencing the same memory.
	     *  Defaults to `false`
	     * @returns {!ArrayBuffer} Contents as an ArrayBuffer
	     * @expose
	     */
	    ByteBufferPrototype.toArrayBuffer = ByteBufferPrototype.toBuffer;

	    /**
	     * Converts the ByteBuffer's contents to a string.
	     * @param {string=} encoding Output encoding. Returns an informative string representation if omitted but also allows
	     *  direct conversion to "utf8", "hex", "base64" and "binary" encoding. "debug" returns a hex representation with
	     *  highlighted offsets.
	     * @param {number=} begin Offset to begin at, defaults to {@link ByteBuffer#offset}
	     * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
	     * @returns {string} String representation
	     * @throws {Error} If `encoding` is invalid
	     * @expose
	     */
	    ByteBufferPrototype.toString = function(encoding, begin, end) {
	        if (typeof encoding === 'undefined')
	            return "ByteBufferAB(offset="+this.offset+",markedOffset="+this.markedOffset+",limit="+this.limit+",capacity="+this.capacity()+")";
	        if (typeof encoding === 'number')
	            encoding = "utf8",
	            begin = encoding,
	            end = begin;
	        switch (encoding) {
	            case "utf8":
	                return this.toUTF8(begin, end);
	            case "base64":
	                return this.toBase64(begin, end);
	            case "hex":
	                return this.toHex(begin, end);
	            case "binary":
	                return this.toBinary(begin, end);
	            case "debug":
	                return this.toDebug();
	            case "columns":
	                return this.toColumns();
	            default:
	                throw Error("Unsupported encoding: "+encoding);
	        }
	    };

	    // lxiv-embeddable

	    /**
	     * lxiv-embeddable (c) 2014 Daniel Wirtz <dcode@dcode.io>
	     * Released under the Apache License, Version 2.0
	     * see: https://github.com/dcodeIO/lxiv for details
	     */
	    var lxiv = function() {

	        /**
	         * lxiv namespace.
	         * @type {!Object.<string,*>}
	         * @exports lxiv
	         */
	        var lxiv = {};

	        /**
	         * Character codes for output.
	         * @type {!Array.<number>}
	         * @inner
	         */
	        var aout = [
	            65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
	            81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102,
	            103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
	            119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47
	        ];

	        /**
	         * Character codes for input.
	         * @type {!Array.<number>}
	         * @inner
	         */
	        var ain = [];
	        for (var i=0, k=aout.length; i<k; ++i)
	            ain[aout[i]] = i;

	        /**
	         * Encodes bytes to base64 char codes.
	         * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if
	         *  there are no more bytes left.
	         * @param {!function(number)} dst Characters destination as a function successively called with each encoded char
	         *  code.
	         */
	        lxiv.encode = function(src, dst) {
	            var b, t;
	            while ((b = src()) !== null) {
	                dst(aout[(b>>2)&0x3f]);
	                t = (b&0x3)<<4;
	                if ((b = src()) !== null) {
	                    t |= (b>>4)&0xf;
	                    dst(aout[(t|((b>>4)&0xf))&0x3f]);
	                    t = (b&0xf)<<2;
	                    if ((b = src()) !== null)
	                        dst(aout[(t|((b>>6)&0x3))&0x3f]),
	                        dst(aout[b&0x3f]);
	                    else
	                        dst(aout[t&0x3f]),
	                        dst(61);
	                } else
	                    dst(aout[t&0x3f]),
	                    dst(61),
	                    dst(61);
	            }
	        };

	        /**
	         * Decodes base64 char codes to bytes.
	         * @param {!function():number|null} src Characters source as a function returning the next char code respectively
	         *  `null` if there are no more characters left.
	         * @param {!function(number)} dst Bytes destination as a function successively called with the next byte.
	         * @throws {Error} If a character code is invalid
	         */
	        lxiv.decode = function(src, dst) {
	            var c, t1, t2;
	            function fail(c) {
	                throw Error("Illegal character code: "+c);
	            }
	            while ((c = src()) !== null) {
	                t1 = ain[c];
	                if (typeof t1 === 'undefined') fail(c);
	                if ((c = src()) !== null) {
	                    t2 = ain[c];
	                    if (typeof t2 === 'undefined') fail(c);
	                    dst((t1<<2)>>>0|(t2&0x30)>>4);
	                    if ((c = src()) !== null) {
	                        t1 = ain[c];
	                        if (typeof t1 === 'undefined')
	                            if (c === 61) break; else fail(c);
	                        dst(((t2&0xf)<<4)>>>0|(t1&0x3c)>>2);
	                        if ((c = src()) !== null) {
	                            t2 = ain[c];
	                            if (typeof t2 === 'undefined')
	                                if (c === 61) break; else fail(c);
	                            dst(((t1&0x3)<<6)>>>0|t2);
	                        }
	                    }
	                }
	            }
	        };

	        /**
	         * Tests if a string is valid base64.
	         * @param {string} str String to test
	         * @returns {boolean} `true` if valid, otherwise `false`
	         */
	        lxiv.test = function(str) {
	            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(str);
	        };

	        return lxiv;
	    }();

	    // encodings/base64

	    /**
	     * Encodes this ByteBuffer's contents to a base64 encoded string.
	     * @param {number=} begin Offset to begin at, defaults to {@link ByteBuffer#offset}.
	     * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}.
	     * @returns {string} Base64 encoded string
	     * @throws {RangeError} If `begin` or `end` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.toBase64 = function(begin, end) {
	        if (typeof begin === 'undefined')
	            begin = this.offset;
	        if (typeof end === 'undefined')
	            end = this.limit;
	        begin = begin | 0; end = end | 0;
	        if (begin < 0 || end > this.capacity || begin > end)
	            throw RangeError("begin, end");
	        var sd; lxiv.encode(function() {
	            return begin < end ? this.view[begin++] : null;
	        }.bind(this), sd = stringDestination());
	        return sd();
	    };

	    /**
	     * Decodes a base64 encoded string to a ByteBuffer.
	     * @param {string} str String to decode
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @returns {!ByteBuffer} ByteBuffer
	     * @expose
	     */
	    ByteBuffer.fromBase64 = function(str, littleEndian) {
	        if (typeof str !== 'string')
	            throw TypeError("str");
	        var bb = new ByteBuffer(str.length/4*3, littleEndian),
	            i = 0;
	        lxiv.decode(stringSource(str), function(b) {
	            bb.view[i++] = b;
	        });
	        bb.limit = i;
	        return bb;
	    };

	    /**
	     * Encodes a binary string to base64 like `window.btoa` does.
	     * @param {string} str Binary string
	     * @returns {string} Base64 encoded string
	     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.btoa
	     * @expose
	     */
	    ByteBuffer.btoa = function(str) {
	        return ByteBuffer.fromBinary(str).toBase64();
	    };

	    /**
	     * Decodes a base64 encoded string to binary like `window.atob` does.
	     * @param {string} b64 Base64 encoded string
	     * @returns {string} Binary string
	     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.atob
	     * @expose
	     */
	    ByteBuffer.atob = function(b64) {
	        return ByteBuffer.fromBase64(b64).toBinary();
	    };

	    // encodings/binary

	    /**
	     * Encodes this ByteBuffer to a binary encoded string, that is using only characters 0x00-0xFF as bytes.
	     * @param {number=} begin Offset to begin at. Defaults to {@link ByteBuffer#offset}.
	     * @param {number=} end Offset to end at. Defaults to {@link ByteBuffer#limit}.
	     * @returns {string} Binary encoded string
	     * @throws {RangeError} If `offset > limit`
	     * @expose
	     */
	    ByteBufferPrototype.toBinary = function(begin, end) {
	        if (typeof begin === 'undefined')
	            begin = this.offset;
	        if (typeof end === 'undefined')
	            end = this.limit;
	        begin |= 0; end |= 0;
	        if (begin < 0 || end > this.capacity() || begin > end)
	            throw RangeError("begin, end");
	        if (begin === end)
	            return "";
	        var chars = [],
	            parts = [];
	        while (begin < end) {
	            chars.push(this.view[begin++]);
	            if (chars.length >= 1024)
	                parts.push(String.fromCharCode.apply(String, chars)),
	                chars = [];
	        }
	        return parts.join('') + String.fromCharCode.apply(String, chars);
	    };

	    /**
	     * Decodes a binary encoded string, that is using only characters 0x00-0xFF as bytes, to a ByteBuffer.
	     * @param {string} str String to decode
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @returns {!ByteBuffer} ByteBuffer
	     * @expose
	     */
	    ByteBuffer.fromBinary = function(str, littleEndian) {
	        if (typeof str !== 'string')
	            throw TypeError("str");
	        var i = 0,
	            k = str.length,
	            charCode,
	            bb = new ByteBuffer(k, littleEndian);
	        while (i<k) {
	            charCode = str.charCodeAt(i);
	            if (charCode > 0xff)
	                throw RangeError("illegal char code: "+charCode);
	            bb.view[i++] = charCode;
	        }
	        bb.limit = k;
	        return bb;
	    };

	    // encodings/debug

	    /**
	     * Encodes this ByteBuffer to a hex encoded string with marked offsets. Offset symbols are:
	     * * `<` : offset,
	     * * `'` : markedOffset,
	     * * `>` : limit,
	     * * `|` : offset and limit,
	     * * `[` : offset and markedOffset,
	     * * `]` : markedOffset and limit,
	     * * `!` : offset, markedOffset and limit
	     * @param {boolean=} columns If `true` returns two columns hex + ascii, defaults to `false`
	     * @returns {string|!Array.<string>} Debug string or array of lines if `asArray = true`
	     * @expose
	     * @example `>00'01 02<03` contains four bytes with `limit=0, markedOffset=1, offset=3`
	     * @example `00[01 02 03>` contains four bytes with `offset=markedOffset=1, limit=4`
	     * @example `00|01 02 03` contains four bytes with `offset=limit=1, markedOffset=-1`
	     * @example `|` contains zero bytes with `offset=limit=0, markedOffset=-1`
	     */
	    ByteBufferPrototype.toDebug = function(columns) {
	        var i = -1,
	            k = this.buffer.byteLength,
	            b,
	            hex = "",
	            asc = "",
	            out = "";
	        while (i<k) {
	            if (i !== -1) {
	                b = this.view[i];
	                if (b < 0x10) hex += "0"+b.toString(16).toUpperCase();
	                else hex += b.toString(16).toUpperCase();
	                if (columns)
	                    asc += b > 32 && b < 127 ? String.fromCharCode(b) : '.';
	            }
	            ++i;
	            if (columns) {
	                if (i > 0 && i % 16 === 0 && i !== k) {
	                    while (hex.length < 3*16+3) hex += " ";
	                    out += hex+asc+"\n";
	                    hex = asc = "";
	                }
	            }
	            if (i === this.offset && i === this.limit)
	                hex += i === this.markedOffset ? "!" : "|";
	            else if (i === this.offset)
	                hex += i === this.markedOffset ? "[" : "<";
	            else if (i === this.limit)
	                hex += i === this.markedOffset ? "]" : ">";
	            else
	                hex += i === this.markedOffset ? "'" : (columns || (i !== 0 && i !== k) ? " " : "");
	        }
	        if (columns && hex !== " ") {
	            while (hex.length < 3*16+3)
	                hex += " ";
	            out += hex + asc + "\n";
	        }
	        return columns ? out : hex;
	    };

	    /**
	     * Decodes a hex encoded string with marked offsets to a ByteBuffer.
	     * @param {string} str Debug string to decode (not be generated with `columns = true`)
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @returns {!ByteBuffer} ByteBuffer
	     * @expose
	     * @see ByteBuffer#toDebug
	     */
	    ByteBuffer.fromDebug = function(str, littleEndian, noAssert) {
	        var k = str.length,
	            bb = new ByteBuffer(((k+1)/3)|0, littleEndian, noAssert);
	        var i = 0, j = 0, ch, b,
	            rs = false, // Require symbol next
	            ho = false, hm = false, hl = false, // Already has offset (ho), markedOffset (hm), limit (hl)?
	            fail = false;
	        while (i<k) {
	            switch (ch = str.charAt(i++)) {
	                case '!':
	                    if (!noAssert) {
	                        if (ho || hm || hl) {
	                            fail = true;
	                            break;
	                        }
	                        ho = hm = hl = true;
	                    }
	                    bb.offset = bb.markedOffset = bb.limit = j;
	                    rs = false;
	                    break;
	                case '|':
	                    if (!noAssert) {
	                        if (ho || hl) {
	                            fail = true;
	                            break;
	                        }
	                        ho = hl = true;
	                    }
	                    bb.offset = bb.limit = j;
	                    rs = false;
	                    break;
	                case '[':
	                    if (!noAssert) {
	                        if (ho || hm) {
	                            fail = true;
	                            break;
	                        }
	                        ho = hm = true;
	                    }
	                    bb.offset = bb.markedOffset = j;
	                    rs = false;
	                    break;
	                case '<':
	                    if (!noAssert) {
	                        if (ho) {
	                            fail = true;
	                            break;
	                        }
	                        ho = true;
	                    }
	                    bb.offset = j;
	                    rs = false;
	                    break;
	                case ']':
	                    if (!noAssert) {
	                        if (hl || hm) {
	                            fail = true;
	                            break;
	                        }
	                        hl = hm = true;
	                    }
	                    bb.limit = bb.markedOffset = j;
	                    rs = false;
	                    break;
	                case '>':
	                    if (!noAssert) {
	                        if (hl) {
	                            fail = true;
	                            break;
	                        }
	                        hl = true;
	                    }
	                    bb.limit = j;
	                    rs = false;
	                    break;
	                case "'":
	                    if (!noAssert) {
	                        if (hm) {
	                            fail = true;
	                            break;
	                        }
	                        hm = true;
	                    }
	                    bb.markedOffset = j;
	                    rs = false;
	                    break;
	                case ' ':
	                    rs = false;
	                    break;
	                default:
	                    if (!noAssert) {
	                        if (rs) {
	                            fail = true;
	                            break;
	                        }
	                    }
	                    b = parseInt(ch+str.charAt(i++), 16);
	                    if (!noAssert) {
	                        if (isNaN(b) || b < 0 || b > 255)
	                            throw TypeError("Illegal str: Not a debug encoded string");
	                    }
	                    bb.view[j++] = b;
	                    rs = true;
	            }
	            if (fail)
	                throw TypeError("Illegal str: Invalid symbol at "+i);
	        }
	        if (!noAssert) {
	            if (!ho || !hl)
	                throw TypeError("Illegal str: Missing offset or limit");
	            if (j<bb.buffer.byteLength)
	                throw TypeError("Illegal str: Not a debug encoded string (is it hex?) "+j+" < "+k);
	        }
	        return bb;
	    };

	    // encodings/hex

	    /**
	     * Encodes this ByteBuffer's contents to a hex encoded string.
	     * @param {number=} begin Offset to begin at. Defaults to {@link ByteBuffer#offset}.
	     * @param {number=} end Offset to end at. Defaults to {@link ByteBuffer#limit}.
	     * @returns {string} Hex encoded string
	     * @expose
	     */
	    ByteBufferPrototype.toHex = function(begin, end) {
	        begin = typeof begin === 'undefined' ? this.offset : begin;
	        end = typeof end === 'undefined' ? this.limit : end;
	        if (!this.noAssert) {
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        var out = new Array(end - begin),
	            b;
	        while (begin < end) {
	            b = this.view[begin++];
	            if (b < 0x10)
	                out.push("0", b.toString(16));
	            else out.push(b.toString(16));
	        }
	        return out.join('');
	    };

	    /**
	     * Decodes a hex encoded string to a ByteBuffer.
	     * @param {string} str String to decode
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @returns {!ByteBuffer} ByteBuffer
	     * @expose
	     */
	    ByteBuffer.fromHex = function(str, littleEndian, noAssert) {
	        if (!noAssert) {
	            if (typeof str !== 'string')
	                throw TypeError("Illegal str: Not a string");
	            if (str.length % 2 !== 0)
	                throw TypeError("Illegal str: Length not a multiple of 2");
	        }
	        var k = str.length,
	            bb = new ByteBuffer((k / 2) | 0, littleEndian),
	            b;
	        for (var i=0, j=0; i<k; i+=2) {
	            b = parseInt(str.substring(i, i+2), 16);
	            if (!noAssert)
	                if (!isFinite(b) || b < 0 || b > 255)
	                    throw TypeError("Illegal str: Contains non-hex characters");
	            bb.view[j++] = b;
	        }
	        bb.limit = j;
	        return bb;
	    };

	    // utfx-embeddable

	    /**
	     * utfx-embeddable (c) 2014 Daniel Wirtz <dcode@dcode.io>
	     * Released under the Apache License, Version 2.0
	     * see: https://github.com/dcodeIO/utfx for details
	     */
	    var utfx = function() {

	        /**
	         * utfx namespace.
	         * @inner
	         * @type {!Object.<string,*>}
	         */
	        var utfx = {};

	        /**
	         * Maximum valid code point.
	         * @type {number}
	         * @const
	         */
	        utfx.MAX_CODEPOINT = 0x10FFFF;

	        /**
	         * Encodes UTF8 code points to UTF8 bytes.
	         * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
	         *  respectively `null` if there are no more code points left or a single numeric code point.
	         * @param {!function(number)} dst Bytes destination as a function successively called with the next byte
	         */
	        utfx.encodeUTF8 = function(src, dst) {
	            var cp = null;
	            if (typeof src === 'number')
	                cp = src,
	                src = function() { return null; };
	            while (cp !== null || (cp = src()) !== null) {
	                if (cp < 0x80)
	                    dst(cp&0x7F);
	                else if (cp < 0x800)
	                    dst(((cp>>6)&0x1F)|0xC0),
	                    dst((cp&0x3F)|0x80);
	                else if (cp < 0x10000)
	                    dst(((cp>>12)&0x0F)|0xE0),
	                    dst(((cp>>6)&0x3F)|0x80),
	                    dst((cp&0x3F)|0x80);
	                else
	                    dst(((cp>>18)&0x07)|0xF0),
	                    dst(((cp>>12)&0x3F)|0x80),
	                    dst(((cp>>6)&0x3F)|0x80),
	                    dst((cp&0x3F)|0x80);
	                cp = null;
	            }
	        };

	        /**
	         * Decodes UTF8 bytes to UTF8 code points.
	         * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if there
	         *  are no more bytes left.
	         * @param {!function(number)} dst Code points destination as a function successively called with each decoded code point.
	         * @throws {RangeError} If a starting byte is invalid in UTF8
	         * @throws {Error} If the last sequence is truncated. Has an array property `bytes` holding the
	         *  remaining bytes.
	         */
	        utfx.decodeUTF8 = function(src, dst) {
	            var a, b, c, d, fail = function(b) {
	                b = b.slice(0, b.indexOf(null));
	                var err = Error(b.toString());
	                err.name = "TruncatedError";
	                err['bytes'] = b;
	                throw err;
	            };
	            while ((a = src()) !== null) {
	                if ((a&0x80) === 0)
	                    dst(a);
	                else if ((a&0xE0) === 0xC0)
	                    ((b = src()) === null) && fail([a, b]),
	                    dst(((a&0x1F)<<6) | (b&0x3F));
	                else if ((a&0xF0) === 0xE0)
	                    ((b=src()) === null || (c=src()) === null) && fail([a, b, c]),
	                    dst(((a&0x0F)<<12) | ((b&0x3F)<<6) | (c&0x3F));
	                else if ((a&0xF8) === 0xF0)
	                    ((b=src()) === null || (c=src()) === null || (d=src()) === null) && fail([a, b, c ,d]),
	                    dst(((a&0x07)<<18) | ((b&0x3F)<<12) | ((c&0x3F)<<6) | (d&0x3F));
	                else throw RangeError("Illegal starting byte: "+a);
	            }
	        };

	        /**
	         * Converts UTF16 characters to UTF8 code points.
	         * @param {!function():number|null} src Characters source as a function returning the next char code respectively
	         *  `null` if there are no more characters left.
	         * @param {!function(number)} dst Code points destination as a function successively called with each converted code
	         *  point.
	         */
	        utfx.UTF16toUTF8 = function(src, dst) {
	            var c1, c2 = null;
	            while (true) {
	                if ((c1 = c2 !== null ? c2 : src()) === null)
	                    break;
	                if (c1 >= 0xD800 && c1 <= 0xDFFF) {
	                    if ((c2 = src()) !== null) {
	                        if (c2 >= 0xDC00 && c2 <= 0xDFFF) {
	                            dst((c1-0xD800)*0x400+c2-0xDC00+0x10000);
	                            c2 = null; continue;
	                        }
	                    }
	                }
	                dst(c1);
	            }
	            if (c2 !== null) dst(c2);
	        };

	        /**
	         * Converts UTF8 code points to UTF16 characters.
	         * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
	         *  respectively `null` if there are no more code points left or a single numeric code point.
	         * @param {!function(number)} dst Characters destination as a function successively called with each converted char code.
	         * @throws {RangeError} If a code point is out of range
	         */
	        utfx.UTF8toUTF16 = function(src, dst) {
	            var cp = null;
	            if (typeof src === 'number')
	                cp = src, src = function() { return null; };
	            while (cp !== null || (cp = src()) !== null) {
	                if (cp <= 0xFFFF)
	                    dst(cp);
	                else
	                    cp -= 0x10000,
	                    dst((cp>>10)+0xD800),
	                    dst((cp%0x400)+0xDC00);
	                cp = null;
	            }
	        };

	        /**
	         * Converts and encodes UTF16 characters to UTF8 bytes.
	         * @param {!function():number|null} src Characters source as a function returning the next char code respectively `null`
	         *  if there are no more characters left.
	         * @param {!function(number)} dst Bytes destination as a function successively called with the next byte.
	         */
	        utfx.encodeUTF16toUTF8 = function(src, dst) {
	            utfx.UTF16toUTF8(src, function(cp) {
	                utfx.encodeUTF8(cp, dst);
	            });
	        };

	        /**
	         * Decodes and converts UTF8 bytes to UTF16 characters.
	         * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if there
	         *  are no more bytes left.
	         * @param {!function(number)} dst Characters destination as a function successively called with each converted char code.
	         * @throws {RangeError} If a starting byte is invalid in UTF8
	         * @throws {Error} If the last sequence is truncated. Has an array property `bytes` holding the remaining bytes.
	         */
	        utfx.decodeUTF8toUTF16 = function(src, dst) {
	            utfx.decodeUTF8(src, function(cp) {
	                utfx.UTF8toUTF16(cp, dst);
	            });
	        };

	        /**
	         * Calculates the byte length of an UTF8 code point.
	         * @param {number} cp UTF8 code point
	         * @returns {number} Byte length
	         */
	        utfx.calculateCodePoint = function(cp) {
	            return (cp < 0x80) ? 1 : (cp < 0x800) ? 2 : (cp < 0x10000) ? 3 : 4;
	        };

	        /**
	         * Calculates the number of UTF8 bytes required to store UTF8 code points.
	         * @param {(!function():number|null)} src Code points source as a function returning the next code point respectively
	         *  `null` if there are no more code points left.
	         * @returns {number} The number of UTF8 bytes required
	         */
	        utfx.calculateUTF8 = function(src) {
	            var cp, l=0;
	            while ((cp = src()) !== null)
	                l += (cp < 0x80) ? 1 : (cp < 0x800) ? 2 : (cp < 0x10000) ? 3 : 4;
	            return l;
	        };

	        /**
	         * Calculates the number of UTF8 code points respectively UTF8 bytes required to store UTF16 char codes.
	         * @param {(!function():number|null)} src Characters source as a function returning the next char code respectively
	         *  `null` if there are no more characters left.
	         * @returns {!Array.<number>} The number of UTF8 code points at index 0 and the number of UTF8 bytes required at index 1.
	         */
	        utfx.calculateUTF16asUTF8 = function(src) {
	            var n=0, l=0;
	            utfx.UTF16toUTF8(src, function(cp) {
	                ++n; l += (cp < 0x80) ? 1 : (cp < 0x800) ? 2 : (cp < 0x10000) ? 3 : 4;
	            });
	            return [n,l];
	        };

	        return utfx;
	    }();

	    // encodings/utf8

	    /**
	     * Encodes this ByteBuffer's contents between {@link ByteBuffer#offset} and {@link ByteBuffer#limit} to an UTF8 encoded
	     *  string.
	     * @returns {string} Hex encoded string
	     * @throws {RangeError} If `offset > limit`
	     * @expose
	     */
	    ByteBufferPrototype.toUTF8 = function(begin, end) {
	        if (typeof begin === 'undefined') begin = this.offset;
	        if (typeof end === 'undefined') end = this.limit;
	        if (!this.noAssert) {
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        var sd; try {
	            utfx.decodeUTF8toUTF16(function() {
	                return begin < end ? this.view[begin++] : null;
	            }.bind(this), sd = stringDestination());
	        } catch (e) {
	            if (begin !== end)
	                throw RangeError("Illegal range: Truncated data, "+begin+" != "+end);
	        }
	        return sd();
	    };

	    /**
	     * Decodes an UTF8 encoded string to a ByteBuffer.
	     * @param {string} str String to decode
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @returns {!ByteBuffer} ByteBuffer
	     * @expose
	     */
	    ByteBuffer.fromUTF8 = function(str, littleEndian, noAssert) {
	        if (!noAssert)
	            if (typeof str !== 'string')
	                throw TypeError("Illegal str: Not a string");
	        var bb = new ByteBuffer(utfx.calculateUTF16asUTF8(stringSource(str), true)[1], littleEndian, noAssert),
	            i = 0;
	        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
	            bb.view[i++] = b;
	        });
	        bb.limit = i;
	        return bb;
	    };

	    return ByteBuffer;
	});
	});

	var _nodeResolve_empty = {};

	var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': _nodeResolve_empty
	});

	var require$$2 = getCjsExportFromNamespace(_nodeResolve_empty$1);

	var protobufLight = createCommonjsModule(function (module) {
	/*
	 Copyright 2013 Daniel Wirtz <dcode@dcode.io>

	 Licensed under the Apache License, Version 2.0 (the "License");
	 you may not use this file except in compliance with the License.
	 You may obtain a copy of the License at

	 http://www.apache.org/licenses/LICENSE-2.0

	 Unless required by applicable law or agreed to in writing, software
	 distributed under the License is distributed on an "AS IS" BASIS,
	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 See the License for the specific language governing permissions and
	 limitations under the License.
	 */

	/**
	 * @license protobuf.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
	 * Released under the Apache License, Version 2.0
	 * see: https://github.com/dcodeIO/protobuf.js for details
	 */
	(function(global, factory) {

	    /* AMD */ if (typeof commonjsRequire === "function" && 'object' === "object" && module && module["exports"])
	        module["exports"] = factory(bytebuffer, true);
	    /* Global */ else
	        (global["dcodeIO"] = global["dcodeIO"] || {})["ProtoBuf"] = factory(global["dcodeIO"]["ByteBuffer"]);

	})(commonjsGlobal, function(ByteBuffer, isCommonJS) {

	    /**
	     * The ProtoBuf namespace.
	     * @exports ProtoBuf
	     * @namespace
	     * @expose
	     */
	    var ProtoBuf = {};

	    /**
	     * @type {!function(new: ByteBuffer, ...[*])}
	     * @expose
	     */
	    ProtoBuf.ByteBuffer = ByteBuffer;

	    /**
	     * @type {?function(new: Long, ...[*])}
	     * @expose
	     */
	    ProtoBuf.Long = ByteBuffer.Long || null;

	    /**
	     * ProtoBuf.js version.
	     * @type {string}
	     * @const
	     * @expose
	     */
	    ProtoBuf.VERSION = "5.0.3";

	    /**
	     * Wire types.
	     * @type {Object.<string,number>}
	     * @const
	     * @expose
	     */
	    ProtoBuf.WIRE_TYPES = {};

	    /**
	     * Varint wire type.
	     * @type {number}
	     * @expose
	     */
	    ProtoBuf.WIRE_TYPES.VARINT = 0;

	    /**
	     * Fixed 64 bits wire type.
	     * @type {number}
	     * @const
	     * @expose
	     */
	    ProtoBuf.WIRE_TYPES.BITS64 = 1;

	    /**
	     * Length delimited wire type.
	     * @type {number}
	     * @const
	     * @expose
	     */
	    ProtoBuf.WIRE_TYPES.LDELIM = 2;

	    /**
	     * Start group wire type.
	     * @type {number}
	     * @const
	     * @expose
	     */
	    ProtoBuf.WIRE_TYPES.STARTGROUP = 3;

	    /**
	     * End group wire type.
	     * @type {number}
	     * @const
	     * @expose
	     */
	    ProtoBuf.WIRE_TYPES.ENDGROUP = 4;

	    /**
	     * Fixed 32 bits wire type.
	     * @type {number}
	     * @const
	     * @expose
	     */
	    ProtoBuf.WIRE_TYPES.BITS32 = 5;

	    /**
	     * Packable wire types.
	     * @type {!Array.<number>}
	     * @const
	     * @expose
	     */
	    ProtoBuf.PACKABLE_WIRE_TYPES = [
	        ProtoBuf.WIRE_TYPES.VARINT,
	        ProtoBuf.WIRE_TYPES.BITS64,
	        ProtoBuf.WIRE_TYPES.BITS32
	    ];

	    /**
	     * Types.
	     * @dict
	     * @type {!Object.<string,{name: string, wireType: number, defaultValue: *}>}
	     * @const
	     * @expose
	     */
	    ProtoBuf.TYPES = {
	        // According to the protobuf spec.
	        "int32": {
	            name: "int32",
	            wireType: ProtoBuf.WIRE_TYPES.VARINT,
	            defaultValue: 0
	        },
	        "uint32": {
	            name: "uint32",
	            wireType: ProtoBuf.WIRE_TYPES.VARINT,
	            defaultValue: 0
	        },
	        "sint32": {
	            name: "sint32",
	            wireType: ProtoBuf.WIRE_TYPES.VARINT,
	            defaultValue: 0
	        },
	        "int64": {
	            name: "int64",
	            wireType: ProtoBuf.WIRE_TYPES.VARINT,
	            defaultValue: ProtoBuf.Long ? ProtoBuf.Long.ZERO : undefined
	        },
	        "uint64": {
	            name: "uint64",
	            wireType: ProtoBuf.WIRE_TYPES.VARINT,
	            defaultValue: ProtoBuf.Long ? ProtoBuf.Long.UZERO : undefined
	        },
	        "sint64": {
	            name: "sint64",
	            wireType: ProtoBuf.WIRE_TYPES.VARINT,
	            defaultValue: ProtoBuf.Long ? ProtoBuf.Long.ZERO : undefined
	        },
	        "bool": {
	            name: "bool",
	            wireType: ProtoBuf.WIRE_TYPES.VARINT,
	            defaultValue: false
	        },
	        "double": {
	            name: "double",
	            wireType: ProtoBuf.WIRE_TYPES.BITS64,
	            defaultValue: 0
	        },
	        "string": {
	            name: "string",
	            wireType: ProtoBuf.WIRE_TYPES.LDELIM,
	            defaultValue: ""
	        },
	        "bytes": {
	            name: "bytes",
	            wireType: ProtoBuf.WIRE_TYPES.LDELIM,
	            defaultValue: null // overridden in the code, must be a unique instance
	        },
	        "fixed32": {
	            name: "fixed32",
	            wireType: ProtoBuf.WIRE_TYPES.BITS32,
	            defaultValue: 0
	        },
	        "sfixed32": {
	            name: "sfixed32",
	            wireType: ProtoBuf.WIRE_TYPES.BITS32,
	            defaultValue: 0
	        },
	        "fixed64": {
	            name: "fixed64",
	            wireType: ProtoBuf.WIRE_TYPES.BITS64,
	            defaultValue:  ProtoBuf.Long ? ProtoBuf.Long.UZERO : undefined
	        },
	        "sfixed64": {
	            name: "sfixed64",
	            wireType: ProtoBuf.WIRE_TYPES.BITS64,
	            defaultValue: ProtoBuf.Long ? ProtoBuf.Long.ZERO : undefined
	        },
	        "float": {
	            name: "float",
	            wireType: ProtoBuf.WIRE_TYPES.BITS32,
	            defaultValue: 0
	        },
	        "enum": {
	            name: "enum",
	            wireType: ProtoBuf.WIRE_TYPES.VARINT,
	            defaultValue: 0
	        },
	        "message": {
	            name: "message",
	            wireType: ProtoBuf.WIRE_TYPES.LDELIM,
	            defaultValue: null
	        },
	        "group": {
	            name: "group",
	            wireType: ProtoBuf.WIRE_TYPES.STARTGROUP,
	            defaultValue: null
	        }
	    };

	    /**
	     * Valid map key types.
	     * @type {!Array.<!Object.<string,{name: string, wireType: number, defaultValue: *}>>}
	     * @const
	     * @expose
	     */
	    ProtoBuf.MAP_KEY_TYPES = [
	        ProtoBuf.TYPES["int32"],
	        ProtoBuf.TYPES["sint32"],
	        ProtoBuf.TYPES["sfixed32"],
	        ProtoBuf.TYPES["uint32"],
	        ProtoBuf.TYPES["fixed32"],
	        ProtoBuf.TYPES["int64"],
	        ProtoBuf.TYPES["sint64"],
	        ProtoBuf.TYPES["sfixed64"],
	        ProtoBuf.TYPES["uint64"],
	        ProtoBuf.TYPES["fixed64"],
	        ProtoBuf.TYPES["bool"],
	        ProtoBuf.TYPES["string"],
	        ProtoBuf.TYPES["bytes"]
	    ];

	    /**
	     * Minimum field id.
	     * @type {number}
	     * @const
	     * @expose
	     */
	    ProtoBuf.ID_MIN = 1;

	    /**
	     * Maximum field id.
	     * @type {number}
	     * @const
	     * @expose
	     */
	    ProtoBuf.ID_MAX = 0x1FFFFFFF;

	    /**
	     * If set to `true`, field names will be converted from underscore notation to camel case. Defaults to `false`.
	     *  Must be set prior to parsing.
	     * @type {boolean}
	     * @expose
	     */
	    ProtoBuf.convertFieldsToCamelCase = false;

	    /**
	     * By default, messages are populated with (setX, set_x) accessors for each field. This can be disabled by
	     *  setting this to `false` prior to building messages.
	     * @type {boolean}
	     * @expose
	     */
	    ProtoBuf.populateAccessors = true;

	    /**
	     * By default, messages are populated with default values if a field is not present on the wire. To disable
	     *  this behavior, set this setting to `false`.
	     * @type {boolean}
	     * @expose
	     */
	    ProtoBuf.populateDefaults = true;

	    /**
	     * @alias ProtoBuf.Util
	     * @expose
	     */
	    ProtoBuf.Util = (function() {

	        /**
	         * ProtoBuf utilities.
	         * @exports ProtoBuf.Util
	         * @namespace
	         */
	        var Util = {};

	        /**
	         * Flag if running in node or not.
	         * @type {boolean}
	         * @const
	         * @expose
	         */
	        Util.IS_NODE = !!(
	            typeof process === 'object' && process+'' === '[object process]' && !process['browser']
	        );

	        /**
	         * Constructs a XMLHttpRequest object.
	         * @return {XMLHttpRequest}
	         * @throws {Error} If XMLHttpRequest is not supported
	         * @expose
	         */
	        Util.XHR = function() {
	            // No dependencies please, ref: http://www.quirksmode.org/js/xmlhttp.html
	            var XMLHttpFactories = [
	                function () {return new XMLHttpRequest()},
	                function () {return new ActiveXObject("Msxml2.XMLHTTP")},
	                function () {return new ActiveXObject("Msxml3.XMLHTTP")},
	                function () {return new ActiveXObject("Microsoft.XMLHTTP")}
	            ];
	            /** @type {?XMLHttpRequest} */
	            var xhr = null;
	            for (var i=0;i<XMLHttpFactories.length;i++) {
	                try { xhr = XMLHttpFactories[i](); }
	                catch (e) { continue; }
	                break;
	            }
	            if (!xhr)
	                throw Error("XMLHttpRequest is not supported");
	            return xhr;
	        };

	        /**
	         * Fetches a resource.
	         * @param {string} path Resource path
	         * @param {function(?string)=} callback Callback receiving the resource's contents. If omitted the resource will
	         *   be fetched synchronously. If the request failed, contents will be null.
	         * @return {?string|undefined} Resource contents if callback is omitted (null if the request failed), else undefined.
	         * @expose
	         */
	        Util.fetch = function(path, callback) {
	            if (callback && typeof callback != 'function')
	                callback = null;
	            if (Util.IS_NODE) {
	                var fs = require$$2;
	                if (callback) {
	                    fs.readFile(path, function(err, data) {
	                        if (err)
	                            callback(null);
	                        else
	                            callback(""+data);
	                    });
	                } else
	                    try {
	                        return fs.readFileSync(path);
	                    } catch (e) {
	                        return null;
	                    }
	            } else {
	                var xhr = Util.XHR();
	                xhr.open('GET', path, callback ? true : false);
	                // xhr.setRequestHeader('User-Agent', 'XMLHTTP/1.0');
	                xhr.setRequestHeader('Accept', 'text/plain');
	                if (typeof xhr.overrideMimeType === 'function') xhr.overrideMimeType('text/plain');
	                if (callback) {
	                    xhr.onreadystatechange = function() {
	                        if (xhr.readyState != 4) return;
	                        if (/* remote */ xhr.status == 200 || /* local */ (xhr.status == 0 && typeof xhr.responseText === 'string'))
	                            callback(xhr.responseText);
	                        else
	                            callback(null);
	                    };
	                    if (xhr.readyState == 4)
	                        return;
	                    xhr.send(null);
	                } else {
	                    xhr.send(null);
	                    if (/* remote */ xhr.status == 200 || /* local */ (xhr.status == 0 && typeof xhr.responseText === 'string'))
	                        return xhr.responseText;
	                    return null;
	                }
	            }
	        };

	        /**
	         * Converts a string to camel case.
	         * @param {string} str
	         * @returns {string}
	         * @expose
	         */
	        Util.toCamelCase = function(str) {
	            return str.replace(/_([a-zA-Z])/g, function ($0, $1) {
	                return $1.toUpperCase();
	            });
	        };

	        return Util;
	    })();

	    /**
	     * Language expressions.
	     * @type {!Object.<string,!RegExp>}
	     * @expose
	     */
	    ProtoBuf.Lang = {

	        // Characters always ending a statement
	        DELIM: /[\s\{\}=;:\[\],'"\(\)<>]/g,

	        // Field rules
	        RULE: /^(?:required|optional|repeated|map)$/,

	        // Field types
	        TYPE: /^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,

	        // Names
	        NAME: /^[a-zA-Z_][a-zA-Z_0-9]*$/,

	        // Type definitions
	        TYPEDEF: /^[a-zA-Z][a-zA-Z_0-9]*$/,

	        // Type references
	        TYPEREF: /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,

	        // Fully qualified type references
	        FQTYPEREF: /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/,

	        // All numbers
	        NUMBER: /^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,

	        // Decimal numbers
	        NUMBER_DEC: /^(?:[1-9][0-9]*|0)$/,

	        // Hexadecimal numbers
	        NUMBER_HEX: /^0[xX][0-9a-fA-F]+$/,

	        // Octal numbers
	        NUMBER_OCT: /^0[0-7]+$/,

	        // Floating point numbers
	        NUMBER_FLT: /^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,

	        // Booleans
	        BOOL: /^(?:true|false)$/i,

	        // Id numbers
	        ID: /^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,

	        // Negative id numbers (enum values)
	        NEGID: /^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,

	        // Whitespaces
	        WHITESPACE: /\s/,

	        // All strings
	        STRING: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,

	        // Double quoted strings
	        STRING_DQ: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,

	        // Single quoted strings
	        STRING_SQ: /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g
	    };


	    /**
	     * @alias ProtoBuf.Reflect
	     * @expose
	     */
	    ProtoBuf.Reflect = (function(ProtoBuf) {

	        /**
	         * Reflection types.
	         * @exports ProtoBuf.Reflect
	         * @namespace
	         */
	        var Reflect = {};

	        /**
	         * Constructs a Reflect base class.
	         * @exports ProtoBuf.Reflect.T
	         * @constructor
	         * @abstract
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {?ProtoBuf.Reflect.T} parent Parent object
	         * @param {string} name Object name
	         */
	        var T = function(builder, parent, name) {

	            /**
	             * Builder reference.
	             * @type {!ProtoBuf.Builder}
	             * @expose
	             */
	            this.builder = builder;

	            /**
	             * Parent object.
	             * @type {?ProtoBuf.Reflect.T}
	             * @expose
	             */
	            this.parent = parent;

	            /**
	             * Object name in namespace.
	             * @type {string}
	             * @expose
	             */
	            this.name = name;

	            /**
	             * Fully qualified class name
	             * @type {string}
	             * @expose
	             */
	            this.className;
	        };

	        /**
	         * @alias ProtoBuf.Reflect.T.prototype
	         * @inner
	         */
	        var TPrototype = T.prototype;

	        /**
	         * Returns the fully qualified name of this object.
	         * @returns {string} Fully qualified name as of ".PATH.TO.THIS"
	         * @expose
	         */
	        TPrototype.fqn = function() {
	            var name = this.name,
	                ptr = this;
	            do {
	                ptr = ptr.parent;
	                if (ptr == null)
	                    break;
	                name = ptr.name+"."+name;
	            } while (true);
	            return name;
	        };

	        /**
	         * Returns a string representation of this Reflect object (its fully qualified name).
	         * @param {boolean=} includeClass Set to true to include the class name. Defaults to false.
	         * @return String representation
	         * @expose
	         */
	        TPrototype.toString = function(includeClass) {
	            return (includeClass ? this.className + " " : "") + this.fqn();
	        };

	        /**
	         * Builds this type.
	         * @throws {Error} If this type cannot be built directly
	         * @expose
	         */
	        TPrototype.build = function() {
	            throw Error(this.toString(true)+" cannot be built directly");
	        };

	        /**
	         * @alias ProtoBuf.Reflect.T
	         * @expose
	         */
	        Reflect.T = T;

	        /**
	         * Constructs a new Namespace.
	         * @exports ProtoBuf.Reflect.Namespace
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {?ProtoBuf.Reflect.Namespace} parent Namespace parent
	         * @param {string} name Namespace name
	         * @param {Object.<string,*>=} options Namespace options
	         * @param {string?} syntax The syntax level of this definition (e.g., proto3)
	         * @constructor
	         * @extends ProtoBuf.Reflect.T
	         */
	        var Namespace = function(builder, parent, name, options, syntax) {
	            T.call(this, builder, parent, name);

	            /**
	             * @override
	             */
	            this.className = "Namespace";

	            /**
	             * Children inside the namespace.
	             * @type {!Array.<ProtoBuf.Reflect.T>}
	             */
	            this.children = [];

	            /**
	             * Options.
	             * @type {!Object.<string, *>}
	             */
	            this.options = options || {};

	            /**
	             * Syntax level (e.g., proto2 or proto3).
	             * @type {!string}
	             */
	            this.syntax = syntax || "proto2";
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Namespace.prototype
	         * @inner
	         */
	        var NamespacePrototype = Namespace.prototype = Object.create(T.prototype);

	        /**
	         * Returns an array of the namespace's children.
	         * @param {ProtoBuf.Reflect.T=} type Filter type (returns instances of this type only). Defaults to null (all children).
	         * @return {Array.<ProtoBuf.Reflect.T>}
	         * @expose
	         */
	        NamespacePrototype.getChildren = function(type) {
	            type = type || null;
	            if (type == null)
	                return this.children.slice();
	            var children = [];
	            for (var i=0, k=this.children.length; i<k; ++i)
	                if (this.children[i] instanceof type)
	                    children.push(this.children[i]);
	            return children;
	        };

	        /**
	         * Adds a child to the namespace.
	         * @param {ProtoBuf.Reflect.T} child Child
	         * @throws {Error} If the child cannot be added (duplicate)
	         * @expose
	         */
	        NamespacePrototype.addChild = function(child) {
	            var other;
	            if (other = this.getChild(child.name)) {
	                // Try to revert camelcase transformation on collision
	                if (other instanceof Message.Field && other.name !== other.originalName && this.getChild(other.originalName) === null)
	                    other.name = other.originalName; // Revert previous first (effectively keeps both originals)
	                else if (child instanceof Message.Field && child.name !== child.originalName && this.getChild(child.originalName) === null)
	                    child.name = child.originalName;
	                else
	                    throw Error("Duplicate name in namespace "+this.toString(true)+": "+child.name);
	            }
	            this.children.push(child);
	        };

	        /**
	         * Gets a child by its name or id.
	         * @param {string|number} nameOrId Child name or id
	         * @return {?ProtoBuf.Reflect.T} The child or null if not found
	         * @expose
	         */
	        NamespacePrototype.getChild = function(nameOrId) {
	            var key = typeof nameOrId === 'number' ? 'id' : 'name';
	            for (var i=0, k=this.children.length; i<k; ++i)
	                if (this.children[i][key] === nameOrId)
	                    return this.children[i];
	            return null;
	        };

	        /**
	         * Resolves a reflect object inside of this namespace.
	         * @param {string|!Array.<string>} qn Qualified name to resolve
	         * @param {boolean=} excludeNonNamespace Excludes non-namespace types, defaults to `false`
	         * @return {?ProtoBuf.Reflect.Namespace} The resolved type or null if not found
	         * @expose
	         */
	        NamespacePrototype.resolve = function(qn, excludeNonNamespace) {
	            var part = typeof qn === 'string' ? qn.split(".") : qn,
	                ptr = this,
	                i = 0;
	            if (part[i] === "") { // Fully qualified name, e.g. ".My.Message'
	                while (ptr.parent !== null)
	                    ptr = ptr.parent;
	                i++;
	            }
	            var child;
	            do {
	                do {
	                    if (!(ptr instanceof Reflect.Namespace)) {
	                        ptr = null;
	                        break;
	                    }
	                    child = ptr.getChild(part[i]);
	                    if (!child || !(child instanceof Reflect.T) || (excludeNonNamespace && !(child instanceof Reflect.Namespace))) {
	                        ptr = null;
	                        break;
	                    }
	                    ptr = child; i++;
	                } while (i < part.length);
	                if (ptr != null)
	                    break; // Found
	                // Else search the parent
	                if (this.parent !== null)
	                    return this.parent.resolve(qn, excludeNonNamespace);
	            } while (ptr != null);
	            return ptr;
	        };

	        /**
	         * Determines the shortest qualified name of the specified type, if any, relative to this namespace.
	         * @param {!ProtoBuf.Reflect.T} t Reflection type
	         * @returns {string} The shortest qualified name or, if there is none, the fqn
	         * @expose
	         */
	        NamespacePrototype.qn = function(t) {
	            var part = [], ptr = t;
	            do {
	                part.unshift(ptr.name);
	                ptr = ptr.parent;
	            } while (ptr !== null);
	            for (var len=1; len <= part.length; len++) {
	                var qn = part.slice(part.length-len);
	                if (t === this.resolve(qn, t instanceof Reflect.Namespace))
	                    return qn.join(".");
	            }
	            return t.fqn();
	        };

	        /**
	         * Builds the namespace and returns the runtime counterpart.
	         * @return {Object.<string,Function|Object>} Runtime namespace
	         * @expose
	         */
	        NamespacePrototype.build = function() {
	            /** @dict */
	            var ns = {};
	            var children = this.children;
	            for (var i=0, k=children.length, child; i<k; ++i) {
	                child = children[i];
	                if (child instanceof Namespace)
	                    ns[child.name] = child.build();
	            }
	            if (Object.defineProperty)
	                Object.defineProperty(ns, "$options", { "value": this.buildOpt() });
	            return ns;
	        };

	        /**
	         * Builds the namespace's '$options' property.
	         * @return {Object.<string,*>}
	         */
	        NamespacePrototype.buildOpt = function() {
	            var opt = {},
	                keys = Object.keys(this.options);
	            for (var i=0, k=keys.length; i<k; ++i) {
	                var key = keys[i],
	                    val = this.options[keys[i]];
	                // TODO: Options are not resolved, yet.
	                // if (val instanceof Namespace) {
	                //     opt[key] = val.build();
	                // } else {
	                opt[key] = val;
	                // }
	            }
	            return opt;
	        };

	        /**
	         * Gets the value assigned to the option with the specified name.
	         * @param {string=} name Returns the option value if specified, otherwise all options are returned.
	         * @return {*|Object.<string,*>}null} Option value or NULL if there is no such option
	         */
	        NamespacePrototype.getOption = function(name) {
	            if (typeof name === 'undefined')
	                return this.options;
	            return typeof this.options[name] !== 'undefined' ? this.options[name] : null;
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Namespace
	         * @expose
	         */
	        Reflect.Namespace = Namespace;

	        /**
	         * Constructs a new Element implementation that checks and converts values for a
	         * particular field type, as appropriate.
	         *
	         * An Element represents a single value: either the value of a singular field,
	         * or a value contained in one entry of a repeated field or map field. This
	         * class does not implement these higher-level concepts; it only encapsulates
	         * the low-level typechecking and conversion.
	         *
	         * @exports ProtoBuf.Reflect.Element
	         * @param {{name: string, wireType: number}} type Resolved data type
	         * @param {ProtoBuf.Reflect.T|null} resolvedType Resolved type, if relevant
	         * (e.g. submessage field).
	         * @param {boolean} isMapKey Is this element a Map key? The value will be
	         * converted to string form if so.
	         * @param {string} syntax Syntax level of defining message type, e.g.,
	         * proto2 or proto3.
	         * @param {string} name Name of the field containing this element (for error
	         * messages)
	         * @constructor
	         */
	        var Element = function(type, resolvedType, isMapKey, syntax, name) {

	            /**
	             * Element type, as a string (e.g., int32).
	             * @type {{name: string, wireType: number}}
	             */
	            this.type = type;

	            /**
	             * Element type reference to submessage or enum definition, if needed.
	             * @type {ProtoBuf.Reflect.T|null}
	             */
	            this.resolvedType = resolvedType;

	            /**
	             * Element is a map key.
	             * @type {boolean}
	             */
	            this.isMapKey = isMapKey;

	            /**
	             * Syntax level of defining message type, e.g., proto2 or proto3.
	             * @type {string}
	             */
	            this.syntax = syntax;

	            /**
	             * Name of the field containing this element (for error messages)
	             * @type {string}
	             */
	            this.name = name;

	            if (isMapKey && ProtoBuf.MAP_KEY_TYPES.indexOf(type) < 0)
	                throw Error("Invalid map key type: " + type.name);
	        };

	        var ElementPrototype = Element.prototype;

	        /**
	         * Obtains a (new) default value for the specified type.
	         * @param type {string|{name: string, wireType: number}} Field type
	         * @returns {*} Default value
	         * @inner
	         */
	        function mkDefault(type) {
	            if (typeof type === 'string')
	                type = ProtoBuf.TYPES[type];
	            if (typeof type.defaultValue === 'undefined')
	                throw Error("default value for type "+type.name+" is not supported");
	            if (type == ProtoBuf.TYPES["bytes"])
	                return new ByteBuffer(0);
	            return type.defaultValue;
	        }

	        /**
	         * Returns the default value for this field in proto3.
	         * @function
	         * @param type {string|{name: string, wireType: number}} the field type
	         * @returns {*} Default value
	         */
	        Element.defaultFieldValue = mkDefault;

	        /**
	         * Makes a Long from a value.
	         * @param {{low: number, high: number, unsigned: boolean}|string|number} value Value
	         * @param {boolean=} unsigned Whether unsigned or not, defaults to reuse it from Long-like objects or to signed for
	         *  strings and numbers
	         * @returns {!Long}
	         * @throws {Error} If the value cannot be converted to a Long
	         * @inner
	         */
	        function mkLong(value, unsigned) {
	            if (value && typeof value.low === 'number' && typeof value.high === 'number' && typeof value.unsigned === 'boolean'
	                && value.low === value.low && value.high === value.high)
	                return new ProtoBuf.Long(value.low, value.high, typeof unsigned === 'undefined' ? value.unsigned : unsigned);
	            if (typeof value === 'string')
	                return ProtoBuf.Long.fromString(value, unsigned || false, 10);
	            if (typeof value === 'number')
	                return ProtoBuf.Long.fromNumber(value, unsigned || false);
	            throw Error("not convertible to Long");
	        }

	        ElementPrototype.toString = function() {
	            return (this.name || '') + (this.isMapKey ? 'map' : 'value') + ' element';
	        };

	        /**
	         * Checks if the given value can be set for an element of this type (singular
	         * field or one element of a repeated field or map).
	         * @param {*} value Value to check
	         * @return {*} Verified, maybe adjusted, value
	         * @throws {Error} If the value cannot be verified for this element slot
	         * @expose
	         */
	        ElementPrototype.verifyValue = function(value) {
	            var self = this;
	            function fail(val, msg) {
	                throw Error("Illegal value for "+self.toString(true)+" of type "+self.type.name+": "+val+" ("+msg+")");
	            }
	            switch (this.type) {
	                // Signed 32bit
	                case ProtoBuf.TYPES["int32"]:
	                case ProtoBuf.TYPES["sint32"]:
	                case ProtoBuf.TYPES["sfixed32"]:
	                    // Account for !NaN: value === value
	                    if (typeof value !== 'number' || (value === value && value % 1 !== 0))
	                        fail(typeof value, "not an integer");
	                    return value > 4294967295 ? value | 0 : value;

	                // Unsigned 32bit
	                case ProtoBuf.TYPES["uint32"]:
	                case ProtoBuf.TYPES["fixed32"]:
	                    if (typeof value !== 'number' || (value === value && value % 1 !== 0))
	                        fail(typeof value, "not an integer");
	                    return value < 0 ? value >>> 0 : value;

	                // Signed 64bit
	                case ProtoBuf.TYPES["int64"]:
	                case ProtoBuf.TYPES["sint64"]:
	                case ProtoBuf.TYPES["sfixed64"]: {
	                    if (ProtoBuf.Long)
	                        try {
	                            return mkLong(value, false);
	                        } catch (e) {
	                            fail(typeof value, e.message);
	                        }
	                    else
	                        fail(typeof value, "requires Long.js");
	                }

	                // Unsigned 64bit
	                case ProtoBuf.TYPES["uint64"]:
	                case ProtoBuf.TYPES["fixed64"]: {
	                    if (ProtoBuf.Long)
	                        try {
	                            return mkLong(value, true);
	                        } catch (e) {
	                            fail(typeof value, e.message);
	                        }
	                    else
	                        fail(typeof value, "requires Long.js");
	                }

	                // Bool
	                case ProtoBuf.TYPES["bool"]:
	                    if (typeof value !== 'boolean')
	                        fail(typeof value, "not a boolean");
	                    return value;

	                // Float
	                case ProtoBuf.TYPES["float"]:
	                case ProtoBuf.TYPES["double"]:
	                    if (typeof value !== 'number')
	                        fail(typeof value, "not a number");
	                    return value;

	                // Length-delimited string
	                case ProtoBuf.TYPES["string"]:
	                    if (typeof value !== 'string' && !(value && value instanceof String))
	                        fail(typeof value, "not a string");
	                    return ""+value; // Convert String object to string

	                // Length-delimited bytes
	                case ProtoBuf.TYPES["bytes"]:
	                    if (ByteBuffer.isByteBuffer(value))
	                        return value;
	                    return ByteBuffer.wrap(value, "base64");

	                // Constant enum value
	                case ProtoBuf.TYPES["enum"]: {
	                    var values = this.resolvedType.getChildren(ProtoBuf.Reflect.Enum.Value);
	                    for (i=0; i<values.length; i++)
	                        if (values[i].name == value)
	                            return values[i].id;
	                        else if (values[i].id == value)
	                            return values[i].id;

	                    if (this.syntax === 'proto3') {
	                        // proto3: just make sure it's an integer.
	                        if (typeof value !== 'number' || (value === value && value % 1 !== 0))
	                            fail(typeof value, "not an integer");
	                        if (value > 4294967295 || value < 0)
	                            fail(typeof value, "not in range for uint32");
	                        return value;
	                    } else {
	                        // proto2 requires enum values to be valid.
	                        fail(value, "not a valid enum value");
	                    }
	                }
	                // Embedded message
	                case ProtoBuf.TYPES["group"]:
	                case ProtoBuf.TYPES["message"]: {
	                    if (!value || typeof value !== 'object')
	                        fail(typeof value, "object expected");
	                    if (value instanceof this.resolvedType.clazz)
	                        return value;
	                    if (value instanceof ProtoBuf.Builder.Message) {
	                        // Mismatched type: Convert to object (see: https://github.com/dcodeIO/ProtoBuf.js/issues/180)
	                        var obj = {};
	                        for (var i in value)
	                            if (value.hasOwnProperty(i))
	                                obj[i] = value[i];
	                        value = obj;
	                    }
	                    // Else let's try to construct one from a key-value object
	                    return new (this.resolvedType.clazz)(value); // May throw for a hundred of reasons
	                }
	            }

	            // We should never end here
	            throw Error("[INTERNAL] Illegal value for "+this.toString(true)+": "+value+" (undefined type "+this.type+")");
	        };

	        /**
	         * Calculates the byte length of an element on the wire.
	         * @param {number} id Field number
	         * @param {*} value Field value
	         * @returns {number} Byte length
	         * @throws {Error} If the value cannot be calculated
	         * @expose
	         */
	        ElementPrototype.calculateLength = function(id, value) {
	            if (value === null) return 0; // Nothing to encode
	            // Tag has already been written
	            var n;
	            switch (this.type) {
	                case ProtoBuf.TYPES["int32"]:
	                    return value < 0 ? ByteBuffer.calculateVarint64(value) : ByteBuffer.calculateVarint32(value);
	                case ProtoBuf.TYPES["uint32"]:
	                    return ByteBuffer.calculateVarint32(value);
	                case ProtoBuf.TYPES["sint32"]:
	                    return ByteBuffer.calculateVarint32(ByteBuffer.zigZagEncode32(value));
	                case ProtoBuf.TYPES["fixed32"]:
	                case ProtoBuf.TYPES["sfixed32"]:
	                case ProtoBuf.TYPES["float"]:
	                    return 4;
	                case ProtoBuf.TYPES["int64"]:
	                case ProtoBuf.TYPES["uint64"]:
	                    return ByteBuffer.calculateVarint64(value);
	                case ProtoBuf.TYPES["sint64"]:
	                    return ByteBuffer.calculateVarint64(ByteBuffer.zigZagEncode64(value));
	                case ProtoBuf.TYPES["fixed64"]:
	                case ProtoBuf.TYPES["sfixed64"]:
	                    return 8;
	                case ProtoBuf.TYPES["bool"]:
	                    return 1;
	                case ProtoBuf.TYPES["enum"]:
	                    return ByteBuffer.calculateVarint32(value);
	                case ProtoBuf.TYPES["double"]:
	                    return 8;
	                case ProtoBuf.TYPES["string"]:
	                    n = ByteBuffer.calculateUTF8Bytes(value);
	                    return ByteBuffer.calculateVarint32(n) + n;
	                case ProtoBuf.TYPES["bytes"]:
	                    if (value.remaining() < 0)
	                        throw Error("Illegal value for "+this.toString(true)+": "+value.remaining()+" bytes remaining");
	                    return ByteBuffer.calculateVarint32(value.remaining()) + value.remaining();
	                case ProtoBuf.TYPES["message"]:
	                    n = this.resolvedType.calculate(value);
	                    return ByteBuffer.calculateVarint32(n) + n;
	                case ProtoBuf.TYPES["group"]:
	                    n = this.resolvedType.calculate(value);
	                    return n + ByteBuffer.calculateVarint32((id << 3) | ProtoBuf.WIRE_TYPES.ENDGROUP);
	            }
	            // We should never end here
	            throw Error("[INTERNAL] Illegal value to encode in "+this.toString(true)+": "+value+" (unknown type)");
	        };

	        /**
	         * Encodes a value to the specified buffer. Does not encode the key.
	         * @param {number} id Field number
	         * @param {*} value Field value
	         * @param {ByteBuffer} buffer ByteBuffer to encode to
	         * @return {ByteBuffer} The ByteBuffer for chaining
	         * @throws {Error} If the value cannot be encoded
	         * @expose
	         */
	        ElementPrototype.encodeValue = function(id, value, buffer) {
	            if (value === null) return buffer; // Nothing to encode
	            // Tag has already been written

	            switch (this.type) {
	                // 32bit signed varint
	                case ProtoBuf.TYPES["int32"]:
	                    // "If you use int32 or int64 as the type for a negative number, the resulting varint is always ten bytes
	                    // long – it is, effectively, treated like a very large unsigned integer." (see #122)
	                    if (value < 0)
	                        buffer.writeVarint64(value);
	                    else
	                        buffer.writeVarint32(value);
	                    break;

	                // 32bit unsigned varint
	                case ProtoBuf.TYPES["uint32"]:
	                    buffer.writeVarint32(value);
	                    break;

	                // 32bit varint zig-zag
	                case ProtoBuf.TYPES["sint32"]:
	                    buffer.writeVarint32ZigZag(value);
	                    break;

	                // Fixed unsigned 32bit
	                case ProtoBuf.TYPES["fixed32"]:
	                    buffer.writeUint32(value);
	                    break;

	                // Fixed signed 32bit
	                case ProtoBuf.TYPES["sfixed32"]:
	                    buffer.writeInt32(value);
	                    break;

	                // 64bit varint as-is
	                case ProtoBuf.TYPES["int64"]:
	                case ProtoBuf.TYPES["uint64"]:
	                    buffer.writeVarint64(value); // throws
	                    break;

	                // 64bit varint zig-zag
	                case ProtoBuf.TYPES["sint64"]:
	                    buffer.writeVarint64ZigZag(value); // throws
	                    break;

	                // Fixed unsigned 64bit
	                case ProtoBuf.TYPES["fixed64"]:
	                    buffer.writeUint64(value); // throws
	                    break;

	                // Fixed signed 64bit
	                case ProtoBuf.TYPES["sfixed64"]:
	                    buffer.writeInt64(value); // throws
	                    break;

	                // Bool
	                case ProtoBuf.TYPES["bool"]:
	                    if (typeof value === 'string')
	                        buffer.writeVarint32(value.toLowerCase() === 'false' ? 0 : !!value);
	                    else
	                        buffer.writeVarint32(value ? 1 : 0);
	                    break;

	                // Constant enum value
	                case ProtoBuf.TYPES["enum"]:
	                    buffer.writeVarint32(value);
	                    break;

	                // 32bit float
	                case ProtoBuf.TYPES["float"]:
	                    buffer.writeFloat32(value);
	                    break;

	                // 64bit float
	                case ProtoBuf.TYPES["double"]:
	                    buffer.writeFloat64(value);
	                    break;

	                // Length-delimited string
	                case ProtoBuf.TYPES["string"]:
	                    buffer.writeVString(value);
	                    break;

	                // Length-delimited bytes
	                case ProtoBuf.TYPES["bytes"]:
	                    if (value.remaining() < 0)
	                        throw Error("Illegal value for "+this.toString(true)+": "+value.remaining()+" bytes remaining");
	                    var prevOffset = value.offset;
	                    buffer.writeVarint32(value.remaining());
	                    buffer.append(value);
	                    value.offset = prevOffset;
	                    break;

	                // Embedded message
	                case ProtoBuf.TYPES["message"]:
	                    var bb = new ByteBuffer().LE();
	                    this.resolvedType.encode(value, bb);
	                    buffer.writeVarint32(bb.offset);
	                    buffer.append(bb.flip());
	                    break;

	                // Legacy group
	                case ProtoBuf.TYPES["group"]:
	                    this.resolvedType.encode(value, buffer);
	                    buffer.writeVarint32((id << 3) | ProtoBuf.WIRE_TYPES.ENDGROUP);
	                    break;

	                default:
	                    // We should never end here
	                    throw Error("[INTERNAL] Illegal value to encode in "+this.toString(true)+": "+value+" (unknown type)");
	            }
	            return buffer;
	        };

	        /**
	         * Decode one element value from the specified buffer.
	         * @param {ByteBuffer} buffer ByteBuffer to decode from
	         * @param {number} wireType The field wire type
	         * @param {number} id The field number
	         * @return {*} Decoded value
	         * @throws {Error} If the field cannot be decoded
	         * @expose
	         */
	        ElementPrototype.decode = function(buffer, wireType, id) {
	            if (wireType != this.type.wireType)
	                throw Error("Unexpected wire type for element");

	            var value, nBytes;
	            switch (this.type) {
	                // 32bit signed varint
	                case ProtoBuf.TYPES["int32"]:
	                    return buffer.readVarint32() | 0;

	                // 32bit unsigned varint
	                case ProtoBuf.TYPES["uint32"]:
	                    return buffer.readVarint32() >>> 0;

	                // 32bit signed varint zig-zag
	                case ProtoBuf.TYPES["sint32"]:
	                    return buffer.readVarint32ZigZag() | 0;

	                // Fixed 32bit unsigned
	                case ProtoBuf.TYPES["fixed32"]:
	                    return buffer.readUint32() >>> 0;

	                case ProtoBuf.TYPES["sfixed32"]:
	                    return buffer.readInt32() | 0;

	                // 64bit signed varint
	                case ProtoBuf.TYPES["int64"]:
	                    return buffer.readVarint64();

	                // 64bit unsigned varint
	                case ProtoBuf.TYPES["uint64"]:
	                    return buffer.readVarint64().toUnsigned();

	                // 64bit signed varint zig-zag
	                case ProtoBuf.TYPES["sint64"]:
	                    return buffer.readVarint64ZigZag();

	                // Fixed 64bit unsigned
	                case ProtoBuf.TYPES["fixed64"]:
	                    return buffer.readUint64();

	                // Fixed 64bit signed
	                case ProtoBuf.TYPES["sfixed64"]:
	                    return buffer.readInt64();

	                // Bool varint
	                case ProtoBuf.TYPES["bool"]:
	                    return !!buffer.readVarint32();

	                // Constant enum value (varint)
	                case ProtoBuf.TYPES["enum"]:
	                    // The following Builder.Message#set will already throw
	                    return buffer.readVarint32();

	                // 32bit float
	                case ProtoBuf.TYPES["float"]:
	                    return buffer.readFloat();

	                // 64bit float
	                case ProtoBuf.TYPES["double"]:
	                    return buffer.readDouble();

	                // Length-delimited string
	                case ProtoBuf.TYPES["string"]:
	                    return buffer.readVString();

	                // Length-delimited bytes
	                case ProtoBuf.TYPES["bytes"]: {
	                    nBytes = buffer.readVarint32();
	                    if (buffer.remaining() < nBytes)
	                        throw Error("Illegal number of bytes for "+this.toString(true)+": "+nBytes+" required but got only "+buffer.remaining());
	                    value = buffer.clone(); // Offset already set
	                    value.limit = value.offset+nBytes;
	                    buffer.offset += nBytes;
	                    return value;
	                }

	                // Length-delimited embedded message
	                case ProtoBuf.TYPES["message"]: {
	                    nBytes = buffer.readVarint32();
	                    return this.resolvedType.decode(buffer, nBytes);
	                }

	                // Legacy group
	                case ProtoBuf.TYPES["group"]:
	                    return this.resolvedType.decode(buffer, -1, id);
	            }

	            // We should never end here
	            throw Error("[INTERNAL] Illegal decode type");
	        };

	        /**
	         * Converts a value from a string to the canonical element type.
	         *
	         * Legal only when isMapKey is true.
	         *
	         * @param {string} str The string value
	         * @returns {*} The value
	         */
	        ElementPrototype.valueFromString = function(str) {
	            if (!this.isMapKey) {
	                throw Error("valueFromString() called on non-map-key element");
	            }

	            switch (this.type) {
	                case ProtoBuf.TYPES["int32"]:
	                case ProtoBuf.TYPES["sint32"]:
	                case ProtoBuf.TYPES["sfixed32"]:
	                case ProtoBuf.TYPES["uint32"]:
	                case ProtoBuf.TYPES["fixed32"]:
	                    return this.verifyValue(parseInt(str));

	                case ProtoBuf.TYPES["int64"]:
	                case ProtoBuf.TYPES["sint64"]:
	                case ProtoBuf.TYPES["sfixed64"]:
	                case ProtoBuf.TYPES["uint64"]:
	                case ProtoBuf.TYPES["fixed64"]:
	                      // Long-based fields support conversions from string already.
	                      return this.verifyValue(str);

	                case ProtoBuf.TYPES["bool"]:
	                      return str === "true";

	                case ProtoBuf.TYPES["string"]:
	                      return this.verifyValue(str);

	                case ProtoBuf.TYPES["bytes"]:
	                      return ByteBuffer.fromBinary(str);
	            }
	        };

	        /**
	         * Converts a value from the canonical element type to a string.
	         *
	         * It should be the case that `valueFromString(valueToString(val))` returns
	         * a value equivalent to `verifyValue(val)` for every legal value of `val`
	         * according to this element type.
	         *
	         * This may be used when the element must be stored or used as a string,
	         * e.g., as a map key on an Object.
	         *
	         * Legal only when isMapKey is true.
	         *
	         * @param {*} val The value
	         * @returns {string} The string form of the value.
	         */
	        ElementPrototype.valueToString = function(value) {
	            if (!this.isMapKey) {
	                throw Error("valueToString() called on non-map-key element");
	            }

	            if (this.type === ProtoBuf.TYPES["bytes"]) {
	                return value.toString("binary");
	            } else {
	                return value.toString();
	            }
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Element
	         * @expose
	         */
	        Reflect.Element = Element;

	        /**
	         * Constructs a new Message.
	         * @exports ProtoBuf.Reflect.Message
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {!ProtoBuf.Reflect.Namespace} parent Parent message or namespace
	         * @param {string} name Message name
	         * @param {Object.<string,*>=} options Message options
	         * @param {boolean=} isGroup `true` if this is a legacy group
	         * @param {string?} syntax The syntax level of this definition (e.g., proto3)
	         * @constructor
	         * @extends ProtoBuf.Reflect.Namespace
	         */
	        var Message = function(builder, parent, name, options, isGroup, syntax) {
	            Namespace.call(this, builder, parent, name, options, syntax);

	            /**
	             * @override
	             */
	            this.className = "Message";

	            /**
	             * Extensions range.
	             * @type {!Array.<number>|undefined}
	             * @expose
	             */
	            this.extensions = undefined;

	            /**
	             * Runtime message class.
	             * @type {?function(new:ProtoBuf.Builder.Message)}
	             * @expose
	             */
	            this.clazz = null;

	            /**
	             * Whether this is a legacy group or not.
	             * @type {boolean}
	             * @expose
	             */
	            this.isGroup = !!isGroup;

	            // The following cached collections are used to efficiently iterate over or look up fields when decoding.

	            /**
	             * Cached fields.
	             * @type {?Array.<!ProtoBuf.Reflect.Message.Field>}
	             * @private
	             */
	            this._fields = null;

	            /**
	             * Cached fields by id.
	             * @type {?Object.<number,!ProtoBuf.Reflect.Message.Field>}
	             * @private
	             */
	            this._fieldsById = null;

	            /**
	             * Cached fields by name.
	             * @type {?Object.<string,!ProtoBuf.Reflect.Message.Field>}
	             * @private
	             */
	            this._fieldsByName = null;
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Message.prototype
	         * @inner
	         */
	        var MessagePrototype = Message.prototype = Object.create(Namespace.prototype);

	        /**
	         * Builds the message and returns the runtime counterpart, which is a fully functional class.
	         * @see ProtoBuf.Builder.Message
	         * @param {boolean=} rebuild Whether to rebuild or not, defaults to false
	         * @return {ProtoBuf.Reflect.Message} Message class
	         * @throws {Error} If the message cannot be built
	         * @expose
	         */
	        MessagePrototype.build = function(rebuild) {
	            if (this.clazz && !rebuild)
	                return this.clazz;

	            // Create the runtime Message class in its own scope
	            var clazz = (function(ProtoBuf, T) {

	                var fields = T.getChildren(ProtoBuf.Reflect.Message.Field),
	                    oneofs = T.getChildren(ProtoBuf.Reflect.Message.OneOf);

	                /**
	                 * Constructs a new runtime Message.
	                 * @name ProtoBuf.Builder.Message
	                 * @class Barebone of all runtime messages.
	                 * @param {!Object.<string,*>|string} values Preset values
	                 * @param {...string} var_args
	                 * @constructor
	                 * @throws {Error} If the message cannot be created
	                 */
	                var Message = function(values, var_args) {
	                    ProtoBuf.Builder.Message.call(this);

	                    // Create virtual oneof properties
	                    for (var i=0, k=oneofs.length; i<k; ++i)
	                        this[oneofs[i].name] = null;
	                    // Create fields and set default values
	                    for (i=0, k=fields.length; i<k; ++i) {
	                        var field = fields[i];
	                        this[field.name] =
	                            field.repeated ? [] :
	                            (field.map ? new ProtoBuf.Map(field) : null);
	                        if ((field.required || T.syntax === 'proto3') &&
	                            field.defaultValue !== null)
	                            this[field.name] = field.defaultValue;
	                    }

	                    if (arguments.length > 0) {
	                        var value;
	                        // Set field values from a values object
	                        if (arguments.length === 1 && values !== null && typeof values === 'object' &&
	                            /* not _another_ Message */ (typeof values.encode !== 'function' || values instanceof Message) &&
	                            /* not a repeated field */ !Array.isArray(values) &&
	                            /* not a Map */ !(values instanceof ProtoBuf.Map) &&
	                            /* not a ByteBuffer */ !ByteBuffer.isByteBuffer(values) &&
	                            /* not an ArrayBuffer */ !(values instanceof ArrayBuffer) &&
	                            /* not a Long */ !(ProtoBuf.Long && values instanceof ProtoBuf.Long)) {
	                            this.$set(values);
	                        } else // Set field values from arguments, in declaration order
	                            for (i=0, k=arguments.length; i<k; ++i)
	                                if (typeof (value = arguments[i]) !== 'undefined')
	                                    this.$set(fields[i].name, value); // May throw
	                    }
	                };

	                /**
	                 * @alias ProtoBuf.Builder.Message.prototype
	                 * @inner
	                 */
	                var MessagePrototype = Message.prototype = Object.create(ProtoBuf.Builder.Message.prototype);

	                /**
	                 * Adds a value to a repeated field.
	                 * @name ProtoBuf.Builder.Message#add
	                 * @function
	                 * @param {string} key Field name
	                 * @param {*} value Value to add
	                 * @param {boolean=} noAssert Whether to assert the value or not (asserts by default)
	                 * @returns {!ProtoBuf.Builder.Message} this
	                 * @throws {Error} If the value cannot be added
	                 * @expose
	                 */
	                MessagePrototype.add = function(key, value, noAssert) {
	                    var field = T._fieldsByName[key];
	                    if (!noAssert) {
	                        if (!field)
	                            throw Error(this+"#"+key+" is undefined");
	                        if (!(field instanceof ProtoBuf.Reflect.Message.Field))
	                            throw Error(this+"#"+key+" is not a field: "+field.toString(true)); // May throw if it's an enum or embedded message
	                        if (!field.repeated)
	                            throw Error(this+"#"+key+" is not a repeated field");
	                        value = field.verifyValue(value, true);
	                    }
	                    if (this[key] === null)
	                        this[key] = [];
	                    this[key].push(value);
	                    return this;
	                };

	                /**
	                 * Adds a value to a repeated field. This is an alias for {@link ProtoBuf.Builder.Message#add}.
	                 * @name ProtoBuf.Builder.Message#$add
	                 * @function
	                 * @param {string} key Field name
	                 * @param {*} value Value to add
	                 * @param {boolean=} noAssert Whether to assert the value or not (asserts by default)
	                 * @returns {!ProtoBuf.Builder.Message} this
	                 * @throws {Error} If the value cannot be added
	                 * @expose
	                 */
	                MessagePrototype.$add = MessagePrototype.add;

	                /**
	                 * Sets a field's value.
	                 * @name ProtoBuf.Builder.Message#set
	                 * @function
	                 * @param {string|!Object.<string,*>} keyOrObj String key or plain object holding multiple values
	                 * @param {(*|boolean)=} value Value to set if key is a string, otherwise omitted
	                 * @param {boolean=} noAssert Whether to not assert for an actual field / proper value type, defaults to `false`
	                 * @returns {!ProtoBuf.Builder.Message} this
	                 * @throws {Error} If the value cannot be set
	                 * @expose
	                 */
	                MessagePrototype.set = function(keyOrObj, value, noAssert) {
	                    if (keyOrObj && typeof keyOrObj === 'object') {
	                        noAssert = value;
	                        for (var ikey in keyOrObj) {
	                            // Check if virtual oneof field - don't set these
	                            if (keyOrObj.hasOwnProperty(ikey) && typeof (value = keyOrObj[ikey]) !== 'undefined' && T._oneofsByName[ikey] === undefined)
	                                this.$set(ikey, value, noAssert);
	                        }
	                        return this;
	                    }
	                    var field = T._fieldsByName[keyOrObj];
	                    if (!noAssert) {
	                        if (!field)
	                            throw Error(this+"#"+keyOrObj+" is not a field: undefined");
	                        if (!(field instanceof ProtoBuf.Reflect.Message.Field))
	                            throw Error(this+"#"+keyOrObj+" is not a field: "+field.toString(true));
	                        this[field.name] = (value = field.verifyValue(value)); // May throw
	                    } else
	                        this[keyOrObj] = value;
	                    if (field && field.oneof) { // Field is part of an OneOf (not a virtual OneOf field)
	                        var currentField = this[field.oneof.name]; // Virtual field references currently set field
	                        if (value !== null) {
	                            if (currentField !== null && currentField !== field.name)
	                                this[currentField] = null; // Clear currently set field
	                            this[field.oneof.name] = field.name; // Point virtual field at this field
	                        } else if (/* value === null && */currentField === keyOrObj)
	                            this[field.oneof.name] = null; // Clear virtual field (current field explicitly cleared)
	                    }
	                    return this;
	                };

	                /**
	                 * Sets a field's value. This is an alias for [@link ProtoBuf.Builder.Message#set}.
	                 * @name ProtoBuf.Builder.Message#$set
	                 * @function
	                 * @param {string|!Object.<string,*>} keyOrObj String key or plain object holding multiple values
	                 * @param {(*|boolean)=} value Value to set if key is a string, otherwise omitted
	                 * @param {boolean=} noAssert Whether to not assert the value, defaults to `false`
	                 * @throws {Error} If the value cannot be set
	                 * @expose
	                 */
	                MessagePrototype.$set = MessagePrototype.set;

	                /**
	                 * Gets a field's value.
	                 * @name ProtoBuf.Builder.Message#get
	                 * @function
	                 * @param {string} key Key
	                 * @param {boolean=} noAssert Whether to not assert for an actual field, defaults to `false`
	                 * @return {*} Value
	                 * @throws {Error} If there is no such field
	                 * @expose
	                 */
	                MessagePrototype.get = function(key, noAssert) {
	                    if (noAssert)
	                        return this[key];
	                    var field = T._fieldsByName[key];
	                    if (!field || !(field instanceof ProtoBuf.Reflect.Message.Field))
	                        throw Error(this+"#"+key+" is not a field: undefined");
	                    if (!(field instanceof ProtoBuf.Reflect.Message.Field))
	                        throw Error(this+"#"+key+" is not a field: "+field.toString(true));
	                    return this[field.name];
	                };

	                /**
	                 * Gets a field's value. This is an alias for {@link ProtoBuf.Builder.Message#$get}.
	                 * @name ProtoBuf.Builder.Message#$get
	                 * @function
	                 * @param {string} key Key
	                 * @return {*} Value
	                 * @throws {Error} If there is no such field
	                 * @expose
	                 */
	                MessagePrototype.$get = MessagePrototype.get;

	                // Getters and setters

	                for (var i=0; i<fields.length; i++) {
	                    var field = fields[i];
	                    // no setters for extension fields as these are named by their fqn
	                    if (field instanceof ProtoBuf.Reflect.Message.ExtensionField)
	                        continue;

	                    if (T.builder.options['populateAccessors'])
	                        (function(field) {
	                            // set/get[SomeValue]
	                            var Name = field.originalName.replace(/(_[a-zA-Z])/g, function(match) {
	                                return match.toUpperCase().replace('_','');
	                            });
	                            Name = Name.substring(0,1).toUpperCase() + Name.substring(1);

	                            // set/get_[some_value] FIXME: Do we really need these?
	                            var name = field.originalName.replace(/([A-Z])/g, function(match) {
	                                return "_"+match;
	                            });

	                            /**
	                             * The current field's unbound setter function.
	                             * @function
	                             * @param {*} value
	                             * @param {boolean=} noAssert
	                             * @returns {!ProtoBuf.Builder.Message}
	                             * @inner
	                             */
	                            var setter = function(value, noAssert) {
	                                this[field.name] = noAssert ? value : field.verifyValue(value);
	                                return this;
	                            };

	                            /**
	                             * The current field's unbound getter function.
	                             * @function
	                             * @returns {*}
	                             * @inner
	                             */
	                            var getter = function() {
	                                return this[field.name];
	                            };

	                            if (T.getChild("set"+Name) === null)
	                                /**
	                                 * Sets a value. This method is present for each field, but only if there is no name conflict with
	                                 *  another field.
	                                 * @name ProtoBuf.Builder.Message#set[SomeField]
	                                 * @function
	                                 * @param {*} value Value to set
	                                 * @param {boolean=} noAssert Whether to not assert the value, defaults to `false`
	                                 * @returns {!ProtoBuf.Builder.Message} this
	                                 * @abstract
	                                 * @throws {Error} If the value cannot be set
	                                 */
	                                MessagePrototype["set"+Name] = setter;

	                            if (T.getChild("set_"+name) === null)
	                                /**
	                                 * Sets a value. This method is present for each field, but only if there is no name conflict with
	                                 *  another field.
	                                 * @name ProtoBuf.Builder.Message#set_[some_field]
	                                 * @function
	                                 * @param {*} value Value to set
	                                 * @param {boolean=} noAssert Whether to not assert the value, defaults to `false`
	                                 * @returns {!ProtoBuf.Builder.Message} this
	                                 * @abstract
	                                 * @throws {Error} If the value cannot be set
	                                 */
	                                MessagePrototype["set_"+name] = setter;

	                            if (T.getChild("get"+Name) === null)
	                                /**
	                                 * Gets a value. This method is present for each field, but only if there is no name conflict with
	                                 *  another field.
	                                 * @name ProtoBuf.Builder.Message#get[SomeField]
	                                 * @function
	                                 * @abstract
	                                 * @return {*} The value
	                                 */
	                                MessagePrototype["get"+Name] = getter;

	                            if (T.getChild("get_"+name) === null)
	                                /**
	                                 * Gets a value. This method is present for each field, but only if there is no name conflict with
	                                 *  another field.
	                                 * @name ProtoBuf.Builder.Message#get_[some_field]
	                                 * @function
	                                 * @return {*} The value
	                                 * @abstract
	                                 */
	                                MessagePrototype["get_"+name] = getter;

	                        })(field);
	                }

	                // En-/decoding

	                /**
	                 * Encodes the message.
	                 * @name ProtoBuf.Builder.Message#$encode
	                 * @function
	                 * @param {(!ByteBuffer|boolean)=} buffer ByteBuffer to encode to. Will create a new one and flip it if omitted.
	                 * @param {boolean=} noVerify Whether to not verify field values, defaults to `false`
	                 * @return {!ByteBuffer} Encoded message as a ByteBuffer
	                 * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
	                 *  returns the encoded ByteBuffer in the `encoded` property on the error.
	                 * @expose
	                 * @see ProtoBuf.Builder.Message#encode64
	                 * @see ProtoBuf.Builder.Message#encodeHex
	                 * @see ProtoBuf.Builder.Message#encodeAB
	                 */
	                MessagePrototype.encode = function(buffer, noVerify) {
	                    if (typeof buffer === 'boolean')
	                        noVerify = buffer,
	                        buffer = undefined;
	                    var isNew = false;
	                    if (!buffer)
	                        buffer = new ByteBuffer(),
	                        isNew = true;
	                    var le = buffer.littleEndian;
	                    try {
	                        T.encode(this, buffer.LE(), noVerify);
	                        return (isNew ? buffer.flip() : buffer).LE(le);
	                    } catch (e) {
	                        buffer.LE(le);
	                        throw(e);
	                    }
	                };

	                /**
	                 * Encodes a message using the specified data payload.
	                 * @param {!Object.<string,*>} data Data payload
	                 * @param {(!ByteBuffer|boolean)=} buffer ByteBuffer to encode to. Will create a new one and flip it if omitted.
	                 * @param {boolean=} noVerify Whether to not verify field values, defaults to `false`
	                 * @return {!ByteBuffer} Encoded message as a ByteBuffer
	                 * @expose
	                 */
	                Message.encode = function(data, buffer, noVerify) {
	                    return new Message(data).encode(buffer, noVerify);
	                };

	                /**
	                 * Calculates the byte length of the message.
	                 * @name ProtoBuf.Builder.Message#calculate
	                 * @function
	                 * @returns {number} Byte length
	                 * @throws {Error} If the message cannot be calculated or if required fields are missing.
	                 * @expose
	                 */
	                MessagePrototype.calculate = function() {
	                    return T.calculate(this);
	                };

	                /**
	                 * Encodes the varint32 length-delimited message.
	                 * @name ProtoBuf.Builder.Message#encodeDelimited
	                 * @function
	                 * @param {(!ByteBuffer|boolean)=} buffer ByteBuffer to encode to. Will create a new one and flip it if omitted.
	                 * @param {boolean=} noVerify Whether to not verify field values, defaults to `false`
	                 * @return {!ByteBuffer} Encoded message as a ByteBuffer
	                 * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
	                 *  returns the encoded ByteBuffer in the `encoded` property on the error.
	                 * @expose
	                 */
	                MessagePrototype.encodeDelimited = function(buffer, noVerify) {
	                    var isNew = false;
	                    if (!buffer)
	                        buffer = new ByteBuffer(),
	                        isNew = true;
	                    var enc = new ByteBuffer().LE();
	                    T.encode(this, enc, noVerify).flip();
	                    buffer.writeVarint32(enc.remaining());
	                    buffer.append(enc);
	                    return isNew ? buffer.flip() : buffer;
	                };

	                /**
	                 * Directly encodes the message to an ArrayBuffer.
	                 * @name ProtoBuf.Builder.Message#encodeAB
	                 * @function
	                 * @return {ArrayBuffer} Encoded message as ArrayBuffer
	                 * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
	                 *  returns the encoded ArrayBuffer in the `encoded` property on the error.
	                 * @expose
	                 */
	                MessagePrototype.encodeAB = function() {
	                    try {
	                        return this.encode().toArrayBuffer();
	                    } catch (e) {
	                        if (e["encoded"]) e["encoded"] = e["encoded"].toArrayBuffer();
	                        throw(e);
	                    }
	                };

	                /**
	                 * Returns the message as an ArrayBuffer. This is an alias for {@link ProtoBuf.Builder.Message#encodeAB}.
	                 * @name ProtoBuf.Builder.Message#toArrayBuffer
	                 * @function
	                 * @return {ArrayBuffer} Encoded message as ArrayBuffer
	                 * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
	                 *  returns the encoded ArrayBuffer in the `encoded` property on the error.
	                 * @expose
	                 */
	                MessagePrototype.toArrayBuffer = MessagePrototype.encodeAB;

	                /**
	                 * Directly encodes the message to a node Buffer.
	                 * @name ProtoBuf.Builder.Message#encodeNB
	                 * @function
	                 * @return {!Buffer}
	                 * @throws {Error} If the message cannot be encoded, not running under node.js or if required fields are
	                 *  missing. The later still returns the encoded node Buffer in the `encoded` property on the error.
	                 * @expose
	                 */
	                MessagePrototype.encodeNB = function() {
	                    try {
	                        return this.encode().toBuffer();
	                    } catch (e) {
	                        if (e["encoded"]) e["encoded"] = e["encoded"].toBuffer();
	                        throw(e);
	                    }
	                };

	                /**
	                 * Returns the message as a node Buffer. This is an alias for {@link ProtoBuf.Builder.Message#encodeNB}.
	                 * @name ProtoBuf.Builder.Message#toBuffer
	                 * @function
	                 * @return {!Buffer}
	                 * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
	                 *  returns the encoded node Buffer in the `encoded` property on the error.
	                 * @expose
	                 */
	                MessagePrototype.toBuffer = MessagePrototype.encodeNB;

	                /**
	                 * Directly encodes the message to a base64 encoded string.
	                 * @name ProtoBuf.Builder.Message#encode64
	                 * @function
	                 * @return {string} Base64 encoded string
	                 * @throws {Error} If the underlying buffer cannot be encoded or if required fields are missing. The later
	                 *  still returns the encoded base64 string in the `encoded` property on the error.
	                 * @expose
	                 */
	                MessagePrototype.encode64 = function() {
	                    try {
	                        return this.encode().toBase64();
	                    } catch (e) {
	                        if (e["encoded"]) e["encoded"] = e["encoded"].toBase64();
	                        throw(e);
	                    }
	                };

	                /**
	                 * Returns the message as a base64 encoded string. This is an alias for {@link ProtoBuf.Builder.Message#encode64}.
	                 * @name ProtoBuf.Builder.Message#toBase64
	                 * @function
	                 * @return {string} Base64 encoded string
	                 * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
	                 *  returns the encoded base64 string in the `encoded` property on the error.
	                 * @expose
	                 */
	                MessagePrototype.toBase64 = MessagePrototype.encode64;

	                /**
	                 * Directly encodes the message to a hex encoded string.
	                 * @name ProtoBuf.Builder.Message#encodeHex
	                 * @function
	                 * @return {string} Hex encoded string
	                 * @throws {Error} If the underlying buffer cannot be encoded or if required fields are missing. The later
	                 *  still returns the encoded hex string in the `encoded` property on the error.
	                 * @expose
	                 */
	                MessagePrototype.encodeHex = function() {
	                    try {
	                        return this.encode().toHex();
	                    } catch (e) {
	                        if (e["encoded"]) e["encoded"] = e["encoded"].toHex();
	                        throw(e);
	                    }
	                };

	                /**
	                 * Returns the message as a hex encoded string. This is an alias for {@link ProtoBuf.Builder.Message#encodeHex}.
	                 * @name ProtoBuf.Builder.Message#toHex
	                 * @function
	                 * @return {string} Hex encoded string
	                 * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
	                 *  returns the encoded hex string in the `encoded` property on the error.
	                 * @expose
	                 */
	                MessagePrototype.toHex = MessagePrototype.encodeHex;

	                /**
	                 * Clones a message object or field value to a raw object.
	                 * @param {*} obj Object to clone
	                 * @param {boolean} binaryAsBase64 Whether to include binary data as base64 strings or as a buffer otherwise
	                 * @param {boolean} longsAsStrings Whether to encode longs as strings
	                 * @param {!ProtoBuf.Reflect.T=} resolvedType The resolved field type if a field
	                 * @returns {*} Cloned object
	                 * @inner
	                 */
	                function cloneRaw(obj, binaryAsBase64, longsAsStrings, resolvedType) {
	                    if (obj === null || typeof obj !== 'object') {
	                        // Convert enum values to their respective names
	                        if (resolvedType && resolvedType instanceof ProtoBuf.Reflect.Enum) {
	                            var name = ProtoBuf.Reflect.Enum.getName(resolvedType.object, obj);
	                            if (name !== null)
	                                return name;
	                        }
	                        // Pass-through string, number, boolean, null...
	                        return obj;
	                    }
	                    // Convert ByteBuffers to raw buffer or strings
	                    if (ByteBuffer.isByteBuffer(obj))
	                        return binaryAsBase64 ? obj.toBase64() : obj.toBuffer();
	                    // Convert Longs to proper objects or strings
	                    if (ProtoBuf.Long.isLong(obj))
	                        return longsAsStrings ? obj.toString() : ProtoBuf.Long.fromValue(obj);
	                    var clone;
	                    // Clone arrays
	                    if (Array.isArray(obj)) {
	                        clone = [];
	                        obj.forEach(function(v, k) {
	                            clone[k] = cloneRaw(v, binaryAsBase64, longsAsStrings, resolvedType);
	                        });
	                        return clone;
	                    }
	                    clone = {};
	                    // Convert maps to objects
	                    if (obj instanceof ProtoBuf.Map) {
	                        var it = obj.entries();
	                        for (var e = it.next(); !e.done; e = it.next())
	                            clone[obj.keyElem.valueToString(e.value[0])] = cloneRaw(e.value[1], binaryAsBase64, longsAsStrings, obj.valueElem.resolvedType);
	                        return clone;
	                    }
	                    // Everything else is a non-null object
	                    var type = obj.$type,
	                        field = undefined;
	                    for (var i in obj)
	                        if (obj.hasOwnProperty(i)) {
	                            if (type && (field = type.getChild(i)))
	                                clone[i] = cloneRaw(obj[i], binaryAsBase64, longsAsStrings, field.resolvedType);
	                            else
	                                clone[i] = cloneRaw(obj[i], binaryAsBase64, longsAsStrings);
	                        }
	                    return clone;
	                }

	                /**
	                 * Returns the message's raw payload.
	                 * @param {boolean=} binaryAsBase64 Whether to include binary data as base64 strings instead of Buffers, defaults to `false`
	                 * @param {boolean} longsAsStrings Whether to encode longs as strings
	                 * @returns {Object.<string,*>} Raw payload
	                 * @expose
	                 */
	                MessagePrototype.toRaw = function(binaryAsBase64, longsAsStrings) {
	                    return cloneRaw(this, !!binaryAsBase64, !!longsAsStrings, this.$type);
	                };

	                /**
	                 * Encodes a message to JSON.
	                 * @returns {string} JSON string
	                 * @expose
	                 */
	                MessagePrototype.encodeJSON = function() {
	                    return JSON.stringify(
	                        cloneRaw(this,
	                             /* binary-as-base64 */ true,
	                             /* longs-as-strings */ true,
	                             this.$type
	                        )
	                    );
	                };

	                /**
	                 * Decodes a message from the specified buffer or string.
	                 * @name ProtoBuf.Builder.Message.decode
	                 * @function
	                 * @param {!ByteBuffer|!ArrayBuffer|!Buffer|string} buffer Buffer to decode from
	                 * @param {(number|string)=} length Message length. Defaults to decode all the remainig data.
	                 * @param {string=} enc Encoding if buffer is a string: hex, utf8 (not recommended), defaults to base64
	                 * @return {!ProtoBuf.Builder.Message} Decoded message
	                 * @throws {Error} If the message cannot be decoded or if required fields are missing. The later still
	                 *  returns the decoded message with missing fields in the `decoded` property on the error.
	                 * @expose
	                 * @see ProtoBuf.Builder.Message.decode64
	                 * @see ProtoBuf.Builder.Message.decodeHex
	                 */
	                Message.decode = function(buffer, length, enc) {
	                    if (typeof length === 'string')
	                        enc = length,
	                        length = -1;
	                    if (typeof buffer === 'string')
	                        buffer = ByteBuffer.wrap(buffer, enc ? enc : "base64");
	                    else if (!ByteBuffer.isByteBuffer(buffer))
	                        buffer = ByteBuffer.wrap(buffer); // May throw
	                    var le = buffer.littleEndian;
	                    try {
	                        var msg = T.decode(buffer.LE(), length);
	                        buffer.LE(le);
	                        return msg;
	                    } catch (e) {
	                        buffer.LE(le);
	                        throw(e);
	                    }
	                };

	                /**
	                 * Decodes a varint32 length-delimited message from the specified buffer or string.
	                 * @name ProtoBuf.Builder.Message.decodeDelimited
	                 * @function
	                 * @param {!ByteBuffer|!ArrayBuffer|!Buffer|string} buffer Buffer to decode from
	                 * @param {string=} enc Encoding if buffer is a string: hex, utf8 (not recommended), defaults to base64
	                 * @return {ProtoBuf.Builder.Message} Decoded message or `null` if not enough bytes are available yet
	                 * @throws {Error} If the message cannot be decoded or if required fields are missing. The later still
	                 *  returns the decoded message with missing fields in the `decoded` property on the error.
	                 * @expose
	                 */
	                Message.decodeDelimited = function(buffer, enc) {
	                    if (typeof buffer === 'string')
	                        buffer = ByteBuffer.wrap(buffer, enc ? enc : "base64");
	                    else if (!ByteBuffer.isByteBuffer(buffer))
	                        buffer = ByteBuffer.wrap(buffer); // May throw
	                    if (buffer.remaining() < 1)
	                        return null;
	                    var off = buffer.offset,
	                        len = buffer.readVarint32();
	                    if (buffer.remaining() < len) {
	                        buffer.offset = off;
	                        return null;
	                    }
	                    try {
	                        var msg = T.decode(buffer.slice(buffer.offset, buffer.offset + len).LE());
	                        buffer.offset += len;
	                        return msg;
	                    } catch (err) {
	                        buffer.offset += len;
	                        throw err;
	                    }
	                };

	                /**
	                 * Decodes the message from the specified base64 encoded string.
	                 * @name ProtoBuf.Builder.Message.decode64
	                 * @function
	                 * @param {string} str String to decode from
	                 * @return {!ProtoBuf.Builder.Message} Decoded message
	                 * @throws {Error} If the message cannot be decoded or if required fields are missing. The later still
	                 *  returns the decoded message with missing fields in the `decoded` property on the error.
	                 * @expose
	                 */
	                Message.decode64 = function(str) {
	                    return Message.decode(str, "base64");
	                };

	                /**
	                 * Decodes the message from the specified hex encoded string.
	                 * @name ProtoBuf.Builder.Message.decodeHex
	                 * @function
	                 * @param {string} str String to decode from
	                 * @return {!ProtoBuf.Builder.Message} Decoded message
	                 * @throws {Error} If the message cannot be decoded or if required fields are missing. The later still
	                 *  returns the decoded message with missing fields in the `decoded` property on the error.
	                 * @expose
	                 */
	                Message.decodeHex = function(str) {
	                    return Message.decode(str, "hex");
	                };

	                /**
	                 * Decodes the message from a JSON string.
	                 * @name ProtoBuf.Builder.Message.decodeJSON
	                 * @function
	                 * @param {string} str String to decode from
	                 * @return {!ProtoBuf.Builder.Message} Decoded message
	                 * @throws {Error} If the message cannot be decoded or if required fields are
	                 * missing.
	                 * @expose
	                 */
	                Message.decodeJSON = function(str) {
	                    return new Message(JSON.parse(str));
	                };

	                // Utility

	                /**
	                 * Returns a string representation of this Message.
	                 * @name ProtoBuf.Builder.Message#toString
	                 * @function
	                 * @return {string} String representation as of ".Fully.Qualified.MessageName"
	                 * @expose
	                 */
	                MessagePrototype.toString = function() {
	                    return T.toString();
	                };

	                if (Object.defineProperty)
	                    Object.defineProperty(Message, '$options', { "value": T.buildOpt() }),
	                    Object.defineProperty(MessagePrototype, "$options", { "value": Message["$options"] }),
	                    Object.defineProperty(Message, "$type", { "value": T }),
	                    Object.defineProperty(MessagePrototype, "$type", { "value": T });

	                return Message;

	            })(ProtoBuf, this);

	            // Static enums and prototyped sub-messages / cached collections
	            this._fields = [];
	            this._fieldsById = {};
	            this._fieldsByName = {};
	            this._oneofsByName = {};
	            for (var i=0, k=this.children.length, child; i<k; i++) {
	                child = this.children[i];
	                if (child instanceof Enum || child instanceof Message || child instanceof Service) {
	                    if (clazz.hasOwnProperty(child.name))
	                        throw Error("Illegal reflect child of "+this.toString(true)+": "+child.toString(true)+" cannot override static property '"+child.name+"'");
	                    clazz[child.name] = child.build();
	                } else if (child instanceof Message.Field)
	                    child.build(),
	                    this._fields.push(child),
	                    this._fieldsById[child.id] = child,
	                    this._fieldsByName[child.name] = child;
	                else if (child instanceof Message.OneOf) {
	                    this._oneofsByName[child.name] = child;
	                }
	                else if (!(child instanceof Message.OneOf) && !(child instanceof Extension)) // Not built
	                    throw Error("Illegal reflect child of "+this.toString(true)+": "+this.children[i].toString(true));
	            }

	            return this.clazz = clazz;
	        };

	        /**
	         * Encodes a runtime message's contents to the specified buffer.
	         * @param {!ProtoBuf.Builder.Message} message Runtime message to encode
	         * @param {ByteBuffer} buffer ByteBuffer to write to
	         * @param {boolean=} noVerify Whether to not verify field values, defaults to `false`
	         * @return {ByteBuffer} The ByteBuffer for chaining
	         * @throws {Error} If required fields are missing or the message cannot be encoded for another reason
	         * @expose
	         */
	        MessagePrototype.encode = function(message, buffer, noVerify) {
	            var fieldMissing = null,
	                field;
	            for (var i=0, k=this._fields.length, val; i<k; ++i) {
	                field = this._fields[i];
	                val = message[field.name];
	                if (field.required && val === null) {
	                    if (fieldMissing === null)
	                        fieldMissing = field;
	                } else
	                    field.encode(noVerify ? val : field.verifyValue(val), buffer, message);
	            }
	            if (fieldMissing !== null) {
	                var err = Error("Missing at least one required field for "+this.toString(true)+": "+fieldMissing);
	                err["encoded"] = buffer; // Still expose what we got
	                throw(err);
	            }
	            return buffer;
	        };

	        /**
	         * Calculates a runtime message's byte length.
	         * @param {!ProtoBuf.Builder.Message} message Runtime message to encode
	         * @returns {number} Byte length
	         * @throws {Error} If required fields are missing or the message cannot be calculated for another reason
	         * @expose
	         */
	        MessagePrototype.calculate = function(message) {
	            for (var n=0, i=0, k=this._fields.length, field, val; i<k; ++i) {
	                field = this._fields[i];
	                val = message[field.name];
	                if (field.required && val === null)
	                   throw Error("Missing at least one required field for "+this.toString(true)+": "+field);
	                else
	                    n += field.calculate(val, message);
	            }
	            return n;
	        };

	        /**
	         * Skips all data until the end of the specified group has been reached.
	         * @param {number} expectedId Expected GROUPEND id
	         * @param {!ByteBuffer} buf ByteBuffer
	         * @returns {boolean} `true` if a value as been skipped, `false` if the end has been reached
	         * @throws {Error} If it wasn't possible to find the end of the group (buffer overrun or end tag mismatch)
	         * @inner
	         */
	        function skipTillGroupEnd(expectedId, buf) {
	            var tag = buf.readVarint32(), // Throws on OOB
	                wireType = tag & 0x07,
	                id = tag >>> 3;
	            switch (wireType) {
	                case ProtoBuf.WIRE_TYPES.VARINT:
	                    do tag = buf.readUint8();
	                    while ((tag & 0x80) === 0x80);
	                    break;
	                case ProtoBuf.WIRE_TYPES.BITS64:
	                    buf.offset += 8;
	                    break;
	                case ProtoBuf.WIRE_TYPES.LDELIM:
	                    tag = buf.readVarint32(); // reads the varint
	                    buf.offset += tag;        // skips n bytes
	                    break;
	                case ProtoBuf.WIRE_TYPES.STARTGROUP:
	                    skipTillGroupEnd(id, buf);
	                    break;
	                case ProtoBuf.WIRE_TYPES.ENDGROUP:
	                    if (id === expectedId)
	                        return false;
	                    else
	                        throw Error("Illegal GROUPEND after unknown group: "+id+" ("+expectedId+" expected)");
	                case ProtoBuf.WIRE_TYPES.BITS32:
	                    buf.offset += 4;
	                    break;
	                default:
	                    throw Error("Illegal wire type in unknown group "+expectedId+": "+wireType);
	            }
	            return true;
	        }

	        /**
	         * Decodes an encoded message and returns the decoded message.
	         * @param {ByteBuffer} buffer ByteBuffer to decode from
	         * @param {number=} length Message length. Defaults to decode all remaining data.
	         * @param {number=} expectedGroupEndId Expected GROUPEND id if this is a legacy group
	         * @return {ProtoBuf.Builder.Message} Decoded message
	         * @throws {Error} If the message cannot be decoded
	         * @expose
	         */
	        MessagePrototype.decode = function(buffer, length, expectedGroupEndId) {
	            if (typeof length !== 'number')
	                length = -1;
	            var start = buffer.offset,
	                msg = new (this.clazz)(),
	                tag, wireType, id, field;
	            while (buffer.offset < start+length || (length === -1 && buffer.remaining() > 0)) {
	                tag = buffer.readVarint32();
	                wireType = tag & 0x07;
	                id = tag >>> 3;
	                if (wireType === ProtoBuf.WIRE_TYPES.ENDGROUP) {
	                    if (id !== expectedGroupEndId)
	                        throw Error("Illegal group end indicator for "+this.toString(true)+": "+id+" ("+(expectedGroupEndId ? expectedGroupEndId+" expected" : "not a group")+")");
	                    break;
	                }
	                if (!(field = this._fieldsById[id])) {
	                    // "messages created by your new code can be parsed by your old code: old binaries simply ignore the new field when parsing."
	                    switch (wireType) {
	                        case ProtoBuf.WIRE_TYPES.VARINT:
	                            buffer.readVarint32();
	                            break;
	                        case ProtoBuf.WIRE_TYPES.BITS32:
	                            buffer.offset += 4;
	                            break;
	                        case ProtoBuf.WIRE_TYPES.BITS64:
	                            buffer.offset += 8;
	                            break;
	                        case ProtoBuf.WIRE_TYPES.LDELIM:
	                            var len = buffer.readVarint32();
	                            buffer.offset += len;
	                            break;
	                        case ProtoBuf.WIRE_TYPES.STARTGROUP:
	                            while (skipTillGroupEnd(id, buffer)) {}
	                            break;
	                        default:
	                            throw Error("Illegal wire type for unknown field "+id+" in "+this.toString(true)+"#decode: "+wireType);
	                    }
	                    continue;
	                }
	                if (field.repeated && !field.options["packed"]) {
	                    msg[field.name].push(field.decode(wireType, buffer));
	                } else if (field.map) {
	                    var keyval = field.decode(wireType, buffer);
	                    msg[field.name].set(keyval[0], keyval[1]);
	                } else {
	                    msg[field.name] = field.decode(wireType, buffer);
	                    if (field.oneof) { // Field is part of an OneOf (not a virtual OneOf field)
	                        var currentField = msg[field.oneof.name]; // Virtual field references currently set field
	                        if (currentField !== null && currentField !== field.name)
	                            msg[currentField] = null; // Clear currently set field
	                        msg[field.oneof.name] = field.name; // Point virtual field at this field
	                    }
	                }
	            }

	            // Check if all required fields are present and set default values for optional fields that are not
	            for (var i=0, k=this._fields.length; i<k; ++i) {
	                field = this._fields[i];
	                if (msg[field.name] === null) {
	                    if (this.syntax === "proto3") { // Proto3 sets default values by specification
	                        msg[field.name] = field.defaultValue;
	                    } else if (field.required) {
	                        var err = Error("Missing at least one required field for " + this.toString(true) + ": " + field.name);
	                        err["decoded"] = msg; // Still expose what we got
	                        throw(err);
	                    } else if (ProtoBuf.populateDefaults && field.defaultValue !== null)
	                        msg[field.name] = field.defaultValue;
	                }
	            }
	            return msg;
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Message
	         * @expose
	         */
	        Reflect.Message = Message;

	        /**
	         * Constructs a new Message Field.
	         * @exports ProtoBuf.Reflect.Message.Field
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {!ProtoBuf.Reflect.Message} message Message reference
	         * @param {string} rule Rule, one of requried, optional, repeated
	         * @param {string?} keytype Key data type, if any.
	         * @param {string} type Data type, e.g. int32
	         * @param {string} name Field name
	         * @param {number} id Unique field id
	         * @param {Object.<string,*>=} options Options
	         * @param {!ProtoBuf.Reflect.Message.OneOf=} oneof Enclosing OneOf
	         * @param {string?} syntax The syntax level of this definition (e.g., proto3)
	         * @constructor
	         * @extends ProtoBuf.Reflect.T
	         */
	        var Field = function(builder, message, rule, keytype, type, name, id, options, oneof, syntax) {
	            T.call(this, builder, message, name);

	            /**
	             * @override
	             */
	            this.className = "Message.Field";

	            /**
	             * Message field required flag.
	             * @type {boolean}
	             * @expose
	             */
	            this.required = rule === "required";

	            /**
	             * Message field repeated flag.
	             * @type {boolean}
	             * @expose
	             */
	            this.repeated = rule === "repeated";

	            /**
	             * Message field map flag.
	             * @type {boolean}
	             * @expose
	             */
	            this.map = rule === "map";

	            /**
	             * Message field key type. Type reference string if unresolved, protobuf
	             * type if resolved. Valid only if this.map === true, null otherwise.
	             * @type {string|{name: string, wireType: number}|null}
	             * @expose
	             */
	            this.keyType = keytype || null;

	            /**
	             * Message field type. Type reference string if unresolved, protobuf type if
	             * resolved. In a map field, this is the value type.
	             * @type {string|{name: string, wireType: number}}
	             * @expose
	             */
	            this.type = type;

	            /**
	             * Resolved type reference inside the global namespace.
	             * @type {ProtoBuf.Reflect.T|null}
	             * @expose
	             */
	            this.resolvedType = null;

	            /**
	             * Unique message field id.
	             * @type {number}
	             * @expose
	             */
	            this.id = id;

	            /**
	             * Message field options.
	             * @type {!Object.<string,*>}
	             * @dict
	             * @expose
	             */
	            this.options = options || {};

	            /**
	             * Default value.
	             * @type {*}
	             * @expose
	             */
	            this.defaultValue = null;

	            /**
	             * Enclosing OneOf.
	             * @type {?ProtoBuf.Reflect.Message.OneOf}
	             * @expose
	             */
	            this.oneof = oneof || null;

	            /**
	             * Syntax level of this definition (e.g., proto3).
	             * @type {string}
	             * @expose
	             */
	            this.syntax = syntax || 'proto2';

	            /**
	             * Original field name.
	             * @type {string}
	             * @expose
	             */
	            this.originalName = this.name; // Used to revert camelcase transformation on naming collisions

	            /**
	             * Element implementation. Created in build() after types are resolved.
	             * @type {ProtoBuf.Element}
	             * @expose
	             */
	            this.element = null;

	            /**
	             * Key element implementation, for map fields. Created in build() after
	             * types are resolved.
	             * @type {ProtoBuf.Element}
	             * @expose
	             */
	            this.keyElement = null;

	            // Convert field names to camel case notation if the override is set
	            if (this.builder.options['convertFieldsToCamelCase'] && !(this instanceof Message.ExtensionField))
	                this.name = ProtoBuf.Util.toCamelCase(this.name);
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Message.Field.prototype
	         * @inner
	         */
	        var FieldPrototype = Field.prototype = Object.create(T.prototype);

	        /**
	         * Builds the field.
	         * @override
	         * @expose
	         */
	        FieldPrototype.build = function() {
	            this.element = new Element(this.type, this.resolvedType, false, this.syntax, this.name);
	            if (this.map)
	                this.keyElement = new Element(this.keyType, undefined, true, this.syntax, this.name);

	            // In proto3, fields do not have field presence, and every field is set to
	            // its type's default value ("", 0, 0.0, or false).
	            if (this.syntax === 'proto3' && !this.repeated && !this.map)
	                this.defaultValue = Element.defaultFieldValue(this.type);

	            // Otherwise, default values are present when explicitly specified
	            else if (typeof this.options['default'] !== 'undefined')
	                this.defaultValue = this.verifyValue(this.options['default']);
	        };

	        /**
	         * Checks if the given value can be set for this field.
	         * @param {*} value Value to check
	         * @param {boolean=} skipRepeated Whether to skip the repeated value check or not. Defaults to false.
	         * @return {*} Verified, maybe adjusted, value
	         * @throws {Error} If the value cannot be set for this field
	         * @expose
	         */
	        FieldPrototype.verifyValue = function(value, skipRepeated) {
	            skipRepeated = skipRepeated || false;
	            var self = this;
	            function fail(val, msg) {
	                throw Error("Illegal value for "+self.toString(true)+" of type "+self.type.name+": "+val+" ("+msg+")");
	            }
	            if (value === null) { // NULL values for optional fields
	                if (this.required)
	                    fail(typeof value, "required");
	                if (this.syntax === 'proto3' && this.type !== ProtoBuf.TYPES["message"])
	                    fail(typeof value, "proto3 field without field presence cannot be null");
	                return null;
	            }
	            var i;
	            if (this.repeated && !skipRepeated) { // Repeated values as arrays
	                if (!Array.isArray(value))
	                    value = [value];
	                var res = [];
	                for (i=0; i<value.length; i++)
	                    res.push(this.element.verifyValue(value[i]));
	                return res;
	            }
	            if (this.map && !skipRepeated) { // Map values as objects
	                if (!(value instanceof ProtoBuf.Map)) {
	                    // If not already a Map, attempt to convert.
	                    if (!(value instanceof Object)) {
	                        fail(typeof value,
	                             "expected ProtoBuf.Map or raw object for map field");
	                    }
	                    return new ProtoBuf.Map(this, value);
	                } else {
	                    return value;
	                }
	            }
	            // All non-repeated fields expect no array
	            if (!this.repeated && Array.isArray(value))
	                fail(typeof value, "no array expected");

	            return this.element.verifyValue(value);
	        };

	        /**
	         * Determines whether the field will have a presence on the wire given its
	         * value.
	         * @param {*} value Verified field value
	         * @param {!ProtoBuf.Builder.Message} message Runtime message
	         * @return {boolean} Whether the field will be present on the wire
	         */
	        FieldPrototype.hasWirePresence = function(value, message) {
	            if (this.syntax !== 'proto3')
	                return (value !== null);
	            if (this.oneof && message[this.oneof.name] === this.name)
	                return true;
	            switch (this.type) {
	                case ProtoBuf.TYPES["int32"]:
	                case ProtoBuf.TYPES["sint32"]:
	                case ProtoBuf.TYPES["sfixed32"]:
	                case ProtoBuf.TYPES["uint32"]:
	                case ProtoBuf.TYPES["fixed32"]:
	                    return value !== 0;

	                case ProtoBuf.TYPES["int64"]:
	                case ProtoBuf.TYPES["sint64"]:
	                case ProtoBuf.TYPES["sfixed64"]:
	                case ProtoBuf.TYPES["uint64"]:
	                case ProtoBuf.TYPES["fixed64"]:
	                    return value.low !== 0 || value.high !== 0;

	                case ProtoBuf.TYPES["bool"]:
	                    return value;

	                case ProtoBuf.TYPES["float"]:
	                case ProtoBuf.TYPES["double"]:
	                    return value !== 0.0;

	                case ProtoBuf.TYPES["string"]:
	                    return value.length > 0;

	                case ProtoBuf.TYPES["bytes"]:
	                    return value.remaining() > 0;

	                case ProtoBuf.TYPES["enum"]:
	                    return value !== 0;

	                case ProtoBuf.TYPES["message"]:
	                    return value !== null;
	                default:
	                    return true;
	            }
	        };

	        /**
	         * Encodes the specified field value to the specified buffer.
	         * @param {*} value Verified field value
	         * @param {ByteBuffer} buffer ByteBuffer to encode to
	         * @param {!ProtoBuf.Builder.Message} message Runtime message
	         * @return {ByteBuffer} The ByteBuffer for chaining
	         * @throws {Error} If the field cannot be encoded
	         * @expose
	         */
	        FieldPrototype.encode = function(value, buffer, message) {
	            if (this.type === null || typeof this.type !== 'object')
	                throw Error("[INTERNAL] Unresolved type in "+this.toString(true)+": "+this.type);
	            if (value === null || (this.repeated && value.length == 0))
	                return buffer; // Optional omitted
	            try {
	                if (this.repeated) {
	                    var i;
	                    // "Only repeated fields of primitive numeric types (types which use the varint, 32-bit, or 64-bit wire
	                    // types) can be declared 'packed'."
	                    if (this.options["packed"] && ProtoBuf.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
	                        // "All of the elements of the field are packed into a single key-value pair with wire type 2
	                        // (length-delimited). Each element is encoded the same way it would be normally, except without a
	                        // tag preceding it."
	                        buffer.writeVarint32((this.id << 3) | ProtoBuf.WIRE_TYPES.LDELIM);
	                        buffer.ensureCapacity(buffer.offset += 1); // We do not know the length yet, so let's assume a varint of length 1
	                        var start = buffer.offset; // Remember where the contents begin
	                        for (i=0; i<value.length; i++)
	                            this.element.encodeValue(this.id, value[i], buffer);
	                        var len = buffer.offset-start,
	                            varintLen = ByteBuffer.calculateVarint32(len);
	                        if (varintLen > 1) { // We need to move the contents
	                            var contents = buffer.slice(start, buffer.offset);
	                            start += varintLen-1;
	                            buffer.offset = start;
	                            buffer.append(contents);
	                        }
	                        buffer.writeVarint32(len, start-varintLen);
	                    } else {
	                        // "If your message definition has repeated elements (without the [packed=true] option), the encoded
	                        // message has zero or more key-value pairs with the same tag number"
	                        for (i=0; i<value.length; i++)
	                            buffer.writeVarint32((this.id << 3) | this.type.wireType),
	                            this.element.encodeValue(this.id, value[i], buffer);
	                    }
	                } else if (this.map) {
	                    // Write out each map entry as a submessage.
	                    value.forEach(function(val, key, m) {
	                        // Compute the length of the submessage (key, val) pair.
	                        var length =
	                            ByteBuffer.calculateVarint32((1 << 3) | this.keyType.wireType) +
	                            this.keyElement.calculateLength(1, key) +
	                            ByteBuffer.calculateVarint32((2 << 3) | this.type.wireType) +
	                            this.element.calculateLength(2, val);

	                        // Submessage with wire type of length-delimited.
	                        buffer.writeVarint32((this.id << 3) | ProtoBuf.WIRE_TYPES.LDELIM);
	                        buffer.writeVarint32(length);

	                        // Write out the key and val.
	                        buffer.writeVarint32((1 << 3) | this.keyType.wireType);
	                        this.keyElement.encodeValue(1, key, buffer);
	                        buffer.writeVarint32((2 << 3) | this.type.wireType);
	                        this.element.encodeValue(2, val, buffer);
	                    }, this);
	                } else {
	                    if (this.hasWirePresence(value, message)) {
	                        buffer.writeVarint32((this.id << 3) | this.type.wireType);
	                        this.element.encodeValue(this.id, value, buffer);
	                    }
	                }
	            } catch (e) {
	                throw Error("Illegal value for "+this.toString(true)+": "+value+" ("+e+")");
	            }
	            return buffer;
	        };

	        /**
	         * Calculates the length of this field's value on the network level.
	         * @param {*} value Field value
	         * @param {!ProtoBuf.Builder.Message} message Runtime message
	         * @returns {number} Byte length
	         * @expose
	         */
	        FieldPrototype.calculate = function(value, message) {
	            value = this.verifyValue(value); // May throw
	            if (this.type === null || typeof this.type !== 'object')
	                throw Error("[INTERNAL] Unresolved type in "+this.toString(true)+": "+this.type);
	            if (value === null || (this.repeated && value.length == 0))
	                return 0; // Optional omitted
	            var n = 0;
	            try {
	                if (this.repeated) {
	                    var i, ni;
	                    if (this.options["packed"] && ProtoBuf.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
	                        n += ByteBuffer.calculateVarint32((this.id << 3) | ProtoBuf.WIRE_TYPES.LDELIM);
	                        ni = 0;
	                        for (i=0; i<value.length; i++)
	                            ni += this.element.calculateLength(this.id, value[i]);
	                        n += ByteBuffer.calculateVarint32(ni);
	                        n += ni;
	                    } else {
	                        for (i=0; i<value.length; i++)
	                            n += ByteBuffer.calculateVarint32((this.id << 3) | this.type.wireType),
	                            n += this.element.calculateLength(this.id, value[i]);
	                    }
	                } else if (this.map) {
	                    // Each map entry becomes a submessage.
	                    value.forEach(function(val, key, m) {
	                        // Compute the length of the submessage (key, val) pair.
	                        var length =
	                            ByteBuffer.calculateVarint32((1 << 3) | this.keyType.wireType) +
	                            this.keyElement.calculateLength(1, key) +
	                            ByteBuffer.calculateVarint32((2 << 3) | this.type.wireType) +
	                            this.element.calculateLength(2, val);

	                        n += ByteBuffer.calculateVarint32((this.id << 3) | ProtoBuf.WIRE_TYPES.LDELIM);
	                        n += ByteBuffer.calculateVarint32(length);
	                        n += length;
	                    }, this);
	                } else {
	                    if (this.hasWirePresence(value, message)) {
	                        n += ByteBuffer.calculateVarint32((this.id << 3) | this.type.wireType);
	                        n += this.element.calculateLength(this.id, value);
	                    }
	                }
	            } catch (e) {
	                throw Error("Illegal value for "+this.toString(true)+": "+value+" ("+e+")");
	            }
	            return n;
	        };

	        /**
	         * Decode the field value from the specified buffer.
	         * @param {number} wireType Leading wire type
	         * @param {ByteBuffer} buffer ByteBuffer to decode from
	         * @param {boolean=} skipRepeated Whether to skip the repeated check or not. Defaults to false.
	         * @return {*} Decoded value: array for packed repeated fields, [key, value] for
	         *             map fields, or an individual value otherwise.
	         * @throws {Error} If the field cannot be decoded
	         * @expose
	         */
	        FieldPrototype.decode = function(wireType, buffer, skipRepeated) {
	            var value, nBytes;

	            // We expect wireType to match the underlying type's wireType unless we see
	            // a packed repeated field, or unless this is a map field.
	            var wireTypeOK =
	                (!this.map && wireType == this.type.wireType) ||
	                (!skipRepeated && this.repeated && this.options["packed"] &&
	                 wireType == ProtoBuf.WIRE_TYPES.LDELIM) ||
	                (this.map && wireType == ProtoBuf.WIRE_TYPES.LDELIM);
	            if (!wireTypeOK)
	                throw Error("Illegal wire type for field "+this.toString(true)+": "+wireType+" ("+this.type.wireType+" expected)");

	            // Handle packed repeated fields.
	            if (wireType == ProtoBuf.WIRE_TYPES.LDELIM && this.repeated && this.options["packed"] && ProtoBuf.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
	                if (!skipRepeated) {
	                    nBytes = buffer.readVarint32();
	                    nBytes = buffer.offset + nBytes; // Limit
	                    var values = [];
	                    while (buffer.offset < nBytes)
	                        values.push(this.decode(this.type.wireType, buffer, true));
	                    return values;
	                }
	                // Read the next value otherwise...
	            }

	            // Handle maps.
	            if (this.map) {
	                // Read one (key, value) submessage, and return [key, value]
	                var key = Element.defaultFieldValue(this.keyType);
	                value = Element.defaultFieldValue(this.type);

	                // Read the length
	                nBytes = buffer.readVarint32();
	                if (buffer.remaining() < nBytes)
	                    throw Error("Illegal number of bytes for "+this.toString(true)+": "+nBytes+" required but got only "+buffer.remaining());

	                // Get a sub-buffer of this key/value submessage
	                var msgbuf = buffer.clone();
	                msgbuf.limit = msgbuf.offset + nBytes;
	                buffer.offset += nBytes;

	                while (msgbuf.remaining() > 0) {
	                    var tag = msgbuf.readVarint32();
	                    wireType = tag & 0x07;
	                    var id = tag >>> 3;
	                    if (id === 1) {
	                        key = this.keyElement.decode(msgbuf, wireType, id);
	                    } else if (id === 2) {
	                        value = this.element.decode(msgbuf, wireType, id);
	                    } else {
	                        throw Error("Unexpected tag in map field key/value submessage");
	                    }
	                }

	                return [key, value];
	            }

	            // Handle singular and non-packed repeated field values.
	            return this.element.decode(buffer, wireType, this.id);
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Message.Field
	         * @expose
	         */
	        Reflect.Message.Field = Field;

	        /**
	         * Constructs a new Message ExtensionField.
	         * @exports ProtoBuf.Reflect.Message.ExtensionField
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {!ProtoBuf.Reflect.Message} message Message reference
	         * @param {string} rule Rule, one of requried, optional, repeated
	         * @param {string} type Data type, e.g. int32
	         * @param {string} name Field name
	         * @param {number} id Unique field id
	         * @param {!Object.<string,*>=} options Options
	         * @constructor
	         * @extends ProtoBuf.Reflect.Message.Field
	         */
	        var ExtensionField = function(builder, message, rule, type, name, id, options) {
	            Field.call(this, builder, message, rule, /* keytype = */ null, type, name, id, options);

	            /**
	             * Extension reference.
	             * @type {!ProtoBuf.Reflect.Extension}
	             * @expose
	             */
	            this.extension;
	        };

	        // Extends Field
	        ExtensionField.prototype = Object.create(Field.prototype);

	        /**
	         * @alias ProtoBuf.Reflect.Message.ExtensionField
	         * @expose
	         */
	        Reflect.Message.ExtensionField = ExtensionField;

	        /**
	         * Constructs a new Message OneOf.
	         * @exports ProtoBuf.Reflect.Message.OneOf
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {!ProtoBuf.Reflect.Message} message Message reference
	         * @param {string} name OneOf name
	         * @constructor
	         * @extends ProtoBuf.Reflect.T
	         */
	        var OneOf = function(builder, message, name) {
	            T.call(this, builder, message, name);

	            /**
	             * Enclosed fields.
	             * @type {!Array.<!ProtoBuf.Reflect.Message.Field>}
	             * @expose
	             */
	            this.fields = [];
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Message.OneOf
	         * @expose
	         */
	        Reflect.Message.OneOf = OneOf;

	        /**
	         * Constructs a new Enum.
	         * @exports ProtoBuf.Reflect.Enum
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {!ProtoBuf.Reflect.T} parent Parent Reflect object
	         * @param {string} name Enum name
	         * @param {Object.<string,*>=} options Enum options
	         * @param {string?} syntax The syntax level (e.g., proto3)
	         * @constructor
	         * @extends ProtoBuf.Reflect.Namespace
	         */
	        var Enum = function(builder, parent, name, options, syntax) {
	            Namespace.call(this, builder, parent, name, options, syntax);

	            /**
	             * @override
	             */
	            this.className = "Enum";

	            /**
	             * Runtime enum object.
	             * @type {Object.<string,number>|null}
	             * @expose
	             */
	            this.object = null;
	        };

	        /**
	         * Gets the string name of an enum value.
	         * @param {!ProtoBuf.Builder.Enum} enm Runtime enum
	         * @param {number} value Enum value
	         * @returns {?string} Name or `null` if not present
	         * @expose
	         */
	        Enum.getName = function(enm, value) {
	            var keys = Object.keys(enm);
	            for (var i=0, key; i<keys.length; ++i)
	                if (enm[key = keys[i]] === value)
	                    return key;
	            return null;
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Enum.prototype
	         * @inner
	         */
	        var EnumPrototype = Enum.prototype = Object.create(Namespace.prototype);

	        /**
	         * Builds this enum and returns the runtime counterpart.
	         * @param {boolean} rebuild Whether to rebuild or not, defaults to false
	         * @returns {!Object.<string,number>}
	         * @expose
	         */
	        EnumPrototype.build = function(rebuild) {
	            if (this.object && !rebuild)
	                return this.object;
	            var enm = new ProtoBuf.Builder.Enum(),
	                values = this.getChildren(Enum.Value);
	            for (var i=0, k=values.length; i<k; ++i)
	                enm[values[i]['name']] = values[i]['id'];
	            if (Object.defineProperty)
	                Object.defineProperty(enm, '$options', {
	                    "value": this.buildOpt(),
	                    "enumerable": false
	                });
	            return this.object = enm;
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Enum
	         * @expose
	         */
	        Reflect.Enum = Enum;

	        /**
	         * Constructs a new Enum Value.
	         * @exports ProtoBuf.Reflect.Enum.Value
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {!ProtoBuf.Reflect.Enum} enm Enum reference
	         * @param {string} name Field name
	         * @param {number} id Unique field id
	         * @constructor
	         * @extends ProtoBuf.Reflect.T
	         */
	        var Value = function(builder, enm, name, id) {
	            T.call(this, builder, enm, name);

	            /**
	             * @override
	             */
	            this.className = "Enum.Value";

	            /**
	             * Unique enum value id.
	             * @type {number}
	             * @expose
	             */
	            this.id = id;
	        };

	        // Extends T
	        Value.prototype = Object.create(T.prototype);

	        /**
	         * @alias ProtoBuf.Reflect.Enum.Value
	         * @expose
	         */
	        Reflect.Enum.Value = Value;

	        /**
	         * An extension (field).
	         * @exports ProtoBuf.Reflect.Extension
	         * @constructor
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {!ProtoBuf.Reflect.T} parent Parent object
	         * @param {string} name Object name
	         * @param {!ProtoBuf.Reflect.Message.Field} field Extension field
	         */
	        var Extension = function(builder, parent, name, field) {
	            T.call(this, builder, parent, name);

	            /**
	             * Extended message field.
	             * @type {!ProtoBuf.Reflect.Message.Field}
	             * @expose
	             */
	            this.field = field;
	        };

	        // Extends T
	        Extension.prototype = Object.create(T.prototype);

	        /**
	         * @alias ProtoBuf.Reflect.Extension
	         * @expose
	         */
	        Reflect.Extension = Extension;

	        /**
	         * Constructs a new Service.
	         * @exports ProtoBuf.Reflect.Service
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {!ProtoBuf.Reflect.Namespace} root Root
	         * @param {string} name Service name
	         * @param {Object.<string,*>=} options Options
	         * @constructor
	         * @extends ProtoBuf.Reflect.Namespace
	         */
	        var Service = function(builder, root, name, options) {
	            Namespace.call(this, builder, root, name, options);

	            /**
	             * @override
	             */
	            this.className = "Service";

	            /**
	             * Built runtime service class.
	             * @type {?function(new:ProtoBuf.Builder.Service)}
	             */
	            this.clazz = null;
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Service.prototype
	         * @inner
	         */
	        var ServicePrototype = Service.prototype = Object.create(Namespace.prototype);

	        /**
	         * Builds the service and returns the runtime counterpart, which is a fully functional class.
	         * @see ProtoBuf.Builder.Service
	         * @param {boolean=} rebuild Whether to rebuild or not
	         * @return {Function} Service class
	         * @throws {Error} If the message cannot be built
	         * @expose
	         */
	        ServicePrototype.build = function(rebuild) {
	            if (this.clazz && !rebuild)
	                return this.clazz;

	            // Create the runtime Service class in its own scope
	            return this.clazz = (function(ProtoBuf, T) {

	                /**
	                 * Constructs a new runtime Service.
	                 * @name ProtoBuf.Builder.Service
	                 * @param {function(string, ProtoBuf.Builder.Message, function(Error, ProtoBuf.Builder.Message=))=} rpcImpl RPC implementation receiving the method name and the message
	                 * @class Barebone of all runtime services.
	                 * @constructor
	                 * @throws {Error} If the service cannot be created
	                 */
	                var Service = function(rpcImpl) {
	                    ProtoBuf.Builder.Service.call(this);

	                    /**
	                     * Service implementation.
	                     * @name ProtoBuf.Builder.Service#rpcImpl
	                     * @type {!function(string, ProtoBuf.Builder.Message, function(Error, ProtoBuf.Builder.Message=))}
	                     * @expose
	                     */
	                    this.rpcImpl = rpcImpl || function(name, msg, callback) {
	                        // This is what a user has to implement: A function receiving the method name, the actual message to
	                        // send (type checked) and the callback that's either provided with the error as its first
	                        // argument or null and the actual response message.
	                        setTimeout(callback.bind(this, Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")), 0); // Must be async!
	                    };
	                };

	                /**
	                 * @alias ProtoBuf.Builder.Service.prototype
	                 * @inner
	                 */
	                var ServicePrototype = Service.prototype = Object.create(ProtoBuf.Builder.Service.prototype);

	                /**
	                 * Asynchronously performs an RPC call using the given RPC implementation.
	                 * @name ProtoBuf.Builder.Service.[Method]
	                 * @function
	                 * @param {!function(string, ProtoBuf.Builder.Message, function(Error, ProtoBuf.Builder.Message=))} rpcImpl RPC implementation
	                 * @param {ProtoBuf.Builder.Message} req Request
	                 * @param {function(Error, (ProtoBuf.Builder.Message|ByteBuffer|Buffer|string)=)} callback Callback receiving
	                 *  the error if any and the response either as a pre-parsed message or as its raw bytes
	                 * @abstract
	                 */

	                /**
	                 * Asynchronously performs an RPC call using the instance's RPC implementation.
	                 * @name ProtoBuf.Builder.Service#[Method]
	                 * @function
	                 * @param {ProtoBuf.Builder.Message} req Request
	                 * @param {function(Error, (ProtoBuf.Builder.Message|ByteBuffer|Buffer|string)=)} callback Callback receiving
	                 *  the error if any and the response either as a pre-parsed message or as its raw bytes
	                 * @abstract
	                 */

	                var rpc = T.getChildren(ProtoBuf.Reflect.Service.RPCMethod);
	                for (var i=0; i<rpc.length; i++) {
	                    (function(method) {

	                        // service#Method(message, callback)
	                        ServicePrototype[method.name] = function(req, callback) {
	                            try {
	                                try {
	                                    // If given as a buffer, decode the request. Will throw a TypeError if not a valid buffer.
	                                    req = method.resolvedRequestType.clazz.decode(ByteBuffer.wrap(req));
	                                } catch (err) {
	                                    if (!(err instanceof TypeError))
	                                        throw err;
	                                }
	                                if (req === null || typeof req !== 'object')
	                                    throw Error("Illegal arguments");
	                                if (!(req instanceof method.resolvedRequestType.clazz))
	                                    req = new method.resolvedRequestType.clazz(req);
	                                this.rpcImpl(method.fqn(), req, function(err, res) { // Assumes that this is properly async
	                                    if (err) {
	                                        callback(err);
	                                        return;
	                                    }
	                                    // Coalesce to empty string when service response has empty content
	                                    if (res === null)
	                                        res = '';
	                                    try { res = method.resolvedResponseType.clazz.decode(res); } catch (notABuffer) {}
	                                    if (!res || !(res instanceof method.resolvedResponseType.clazz)) {
	                                        callback(Error("Illegal response type received in service method "+ T.name+"#"+method.name));
	                                        return;
	                                    }
	                                    callback(null, res);
	                                });
	                            } catch (err) {
	                                setTimeout(callback.bind(this, err), 0);
	                            }
	                        };

	                        // Service.Method(rpcImpl, message, callback)
	                        Service[method.name] = function(rpcImpl, req, callback) {
	                            new Service(rpcImpl)[method.name](req, callback);
	                        };

	                        if (Object.defineProperty)
	                            Object.defineProperty(Service[method.name], "$options", { "value": method.buildOpt() }),
	                            Object.defineProperty(ServicePrototype[method.name], "$options", { "value": Service[method.name]["$options"] });
	                    })(rpc[i]);
	                }

	                if (Object.defineProperty)
	                    Object.defineProperty(Service, "$options", { "value": T.buildOpt() }),
	                    Object.defineProperty(ServicePrototype, "$options", { "value": Service["$options"] }),
	                    Object.defineProperty(Service, "$type", { "value": T }),
	                    Object.defineProperty(ServicePrototype, "$type", { "value": T });

	                return Service;

	            })(ProtoBuf, this);
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Service
	         * @expose
	         */
	        Reflect.Service = Service;

	        /**
	         * Abstract service method.
	         * @exports ProtoBuf.Reflect.Service.Method
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {!ProtoBuf.Reflect.Service} svc Service
	         * @param {string} name Method name
	         * @param {Object.<string,*>=} options Options
	         * @constructor
	         * @extends ProtoBuf.Reflect.T
	         */
	        var Method = function(builder, svc, name, options) {
	            T.call(this, builder, svc, name);

	            /**
	             * @override
	             */
	            this.className = "Service.Method";

	            /**
	             * Options.
	             * @type {Object.<string, *>}
	             * @expose
	             */
	            this.options = options || {};
	        };

	        /**
	         * @alias ProtoBuf.Reflect.Service.Method.prototype
	         * @inner
	         */
	        var MethodPrototype = Method.prototype = Object.create(T.prototype);

	        /**
	         * Builds the method's '$options' property.
	         * @name ProtoBuf.Reflect.Service.Method#buildOpt
	         * @function
	         * @return {Object.<string,*>}
	         */
	        MethodPrototype.buildOpt = NamespacePrototype.buildOpt;

	        /**
	         * @alias ProtoBuf.Reflect.Service.Method
	         * @expose
	         */
	        Reflect.Service.Method = Method;

	        /**
	         * RPC service method.
	         * @exports ProtoBuf.Reflect.Service.RPCMethod
	         * @param {!ProtoBuf.Builder} builder Builder reference
	         * @param {!ProtoBuf.Reflect.Service} svc Service
	         * @param {string} name Method name
	         * @param {string} request Request message name
	         * @param {string} response Response message name
	         * @param {boolean} request_stream Whether requests are streamed
	         * @param {boolean} response_stream Whether responses are streamed
	         * @param {Object.<string,*>=} options Options
	         * @constructor
	         * @extends ProtoBuf.Reflect.Service.Method
	         */
	        var RPCMethod = function(builder, svc, name, request, response, request_stream, response_stream, options) {
	            Method.call(this, builder, svc, name, options);

	            /**
	             * @override
	             */
	            this.className = "Service.RPCMethod";

	            /**
	             * Request message name.
	             * @type {string}
	             * @expose
	             */
	            this.requestName = request;

	            /**
	             * Response message name.
	             * @type {string}
	             * @expose
	             */
	            this.responseName = response;

	            /**
	             * Whether requests are streamed
	             * @type {bool}
	             * @expose
	             */
	            this.requestStream = request_stream;

	            /**
	             * Whether responses are streamed
	             * @type {bool}
	             * @expose
	             */
	            this.responseStream = response_stream;

	            /**
	             * Resolved request message type.
	             * @type {ProtoBuf.Reflect.Message}
	             * @expose
	             */
	            this.resolvedRequestType = null;

	            /**
	             * Resolved response message type.
	             * @type {ProtoBuf.Reflect.Message}
	             * @expose
	             */
	            this.resolvedResponseType = null;
	        };

	        // Extends Method
	        RPCMethod.prototype = Object.create(Method.prototype);

	        /**
	         * @alias ProtoBuf.Reflect.Service.RPCMethod
	         * @expose
	         */
	        Reflect.Service.RPCMethod = RPCMethod;

	        return Reflect;

	    })(ProtoBuf);

	    /**
	     * @alias ProtoBuf.Builder
	     * @expose
	     */
	    ProtoBuf.Builder = (function(ProtoBuf, Lang, Reflect) {

	        /**
	         * Constructs a new Builder.
	         * @exports ProtoBuf.Builder
	         * @class Provides the functionality to build protocol messages.
	         * @param {Object.<string,*>=} options Options
	         * @constructor
	         */
	        var Builder = function(options) {

	            /**
	             * Namespace.
	             * @type {ProtoBuf.Reflect.Namespace}
	             * @expose
	             */
	            this.ns = new Reflect.Namespace(this, null, ""); // Global namespace

	            /**
	             * Namespace pointer.
	             * @type {ProtoBuf.Reflect.T}
	             * @expose
	             */
	            this.ptr = this.ns;

	            /**
	             * Resolved flag.
	             * @type {boolean}
	             * @expose
	             */
	            this.resolved = false;

	            /**
	             * The current building result.
	             * @type {Object.<string,ProtoBuf.Builder.Message|Object>|null}
	             * @expose
	             */
	            this.result = null;

	            /**
	             * Imported files.
	             * @type {Array.<string>}
	             * @expose
	             */
	            this.files = {};

	            /**
	             * Import root override.
	             * @type {?string}
	             * @expose
	             */
	            this.importRoot = null;

	            /**
	             * Options.
	             * @type {!Object.<string, *>}
	             * @expose
	             */
	            this.options = options || {};
	        };

	        /**
	         * @alias ProtoBuf.Builder.prototype
	         * @inner
	         */
	        var BuilderPrototype = Builder.prototype;

	        // ----- Definition tests -----

	        /**
	         * Tests if a definition most likely describes a message.
	         * @param {!Object} def
	         * @returns {boolean}
	         * @expose
	         */
	        Builder.isMessage = function(def) {
	            // Messages require a string name
	            if (typeof def["name"] !== 'string')
	                return false;
	            // Messages do not contain values (enum) or rpc methods (service)
	            if (typeof def["values"] !== 'undefined' || typeof def["rpc"] !== 'undefined')
	                return false;
	            return true;
	        };

	        /**
	         * Tests if a definition most likely describes a message field.
	         * @param {!Object} def
	         * @returns {boolean}
	         * @expose
	         */
	        Builder.isMessageField = function(def) {
	            // Message fields require a string rule, name and type and an id
	            if (typeof def["rule"] !== 'string' || typeof def["name"] !== 'string' || typeof def["type"] !== 'string' || typeof def["id"] === 'undefined')
	                return false;
	            return true;
	        };

	        /**
	         * Tests if a definition most likely describes an enum.
	         * @param {!Object} def
	         * @returns {boolean}
	         * @expose
	         */
	        Builder.isEnum = function(def) {
	            // Enums require a string name
	            if (typeof def["name"] !== 'string')
	                return false;
	            // Enums require at least one value
	            if (typeof def["values"] === 'undefined' || !Array.isArray(def["values"]) || def["values"].length === 0)
	                return false;
	            return true;
	        };

	        /**
	         * Tests if a definition most likely describes a service.
	         * @param {!Object} def
	         * @returns {boolean}
	         * @expose
	         */
	        Builder.isService = function(def) {
	            // Services require a string name and an rpc object
	            if (typeof def["name"] !== 'string' || typeof def["rpc"] !== 'object' || !def["rpc"])
	                return false;
	            return true;
	        };

	        /**
	         * Tests if a definition most likely describes an extended message
	         * @param {!Object} def
	         * @returns {boolean}
	         * @expose
	         */
	        Builder.isExtend = function(def) {
	            // Extends rquire a string ref
	            if (typeof def["ref"] !== 'string')
	                return false;
	            return true;
	        };

	        // ----- Building -----

	        /**
	         * Resets the pointer to the root namespace.
	         * @returns {!ProtoBuf.Builder} this
	         * @expose
	         */
	        BuilderPrototype.reset = function() {
	            this.ptr = this.ns;
	            return this;
	        };

	        /**
	         * Defines a namespace on top of the current pointer position and places the pointer on it.
	         * @param {string} namespace
	         * @return {!ProtoBuf.Builder} this
	         * @expose
	         */
	        BuilderPrototype.define = function(namespace) {
	            if (typeof namespace !== 'string' || !Lang.TYPEREF.test(namespace))
	                throw Error("illegal namespace: "+namespace);
	            namespace.split(".").forEach(function(part) {
	                var ns = this.ptr.getChild(part);
	                if (ns === null) // Keep existing
	                    this.ptr.addChild(ns = new Reflect.Namespace(this, this.ptr, part));
	                this.ptr = ns;
	            }, this);
	            return this;
	        };

	        /**
	         * Creates the specified definitions at the current pointer position.
	         * @param {!Array.<!Object>} defs Messages, enums or services to create
	         * @returns {!ProtoBuf.Builder} this
	         * @throws {Error} If a message definition is invalid
	         * @expose
	         */
	        BuilderPrototype.create = function(defs) {
	            if (!defs)
	                return this; // Nothing to create
	            if (!Array.isArray(defs))
	                defs = [defs];
	            else {
	                if (defs.length === 0)
	                    return this;
	                defs = defs.slice();
	            }

	            // It's quite hard to keep track of scopes and memory here, so let's do this iteratively.
	            var stack = [defs];
	            while (stack.length > 0) {
	                defs = stack.pop();

	                if (!Array.isArray(defs)) // Stack always contains entire namespaces
	                    throw Error("not a valid namespace: "+JSON.stringify(defs));

	                while (defs.length > 0) {
	                    var def = defs.shift(); // Namespaces always contain an array of messages, enums and services

	                    if (Builder.isMessage(def)) {
	                        var obj = new Reflect.Message(this, this.ptr, def["name"], def["options"], def["isGroup"], def["syntax"]);

	                        // Create OneOfs
	                        var oneofs = {};
	                        if (def["oneofs"])
	                            Object.keys(def["oneofs"]).forEach(function(name) {
	                                obj.addChild(oneofs[name] = new Reflect.Message.OneOf(this, obj, name));
	                            }, this);

	                        // Create fields
	                        if (def["fields"])
	                            def["fields"].forEach(function(fld) {
	                                if (obj.getChild(fld["id"]|0) !== null)
	                                    throw Error("duplicate or invalid field id in "+obj.name+": "+fld['id']);
	                                if (fld["options"] && typeof fld["options"] !== 'object')
	                                    throw Error("illegal field options in "+obj.name+"#"+fld["name"]);
	                                var oneof = null;
	                                if (typeof fld["oneof"] === 'string' && !(oneof = oneofs[fld["oneof"]]))
	                                    throw Error("illegal oneof in "+obj.name+"#"+fld["name"]+": "+fld["oneof"]);
	                                fld = new Reflect.Message.Field(this, obj, fld["rule"], fld["keytype"], fld["type"], fld["name"], fld["id"], fld["options"], oneof, def["syntax"]);
	                                if (oneof)
	                                    oneof.fields.push(fld);
	                                obj.addChild(fld);
	                            }, this);

	                        // Push children to stack
	                        var subObj = [];
	                        if (def["enums"])
	                            def["enums"].forEach(function(enm) {
	                                subObj.push(enm);
	                            });
	                        if (def["messages"])
	                            def["messages"].forEach(function(msg) {
	                                subObj.push(msg);
	                            });
	                        if (def["services"])
	                            def["services"].forEach(function(svc) {
	                                subObj.push(svc);
	                            });

	                        // Set extension ranges
	                        if (def["extensions"]) {
	                            if (typeof def["extensions"][0] === 'number') // pre 5.0.1
	                                obj.extensions = [ def["extensions"] ];
	                            else
	                                obj.extensions = def["extensions"];
	                        }

	                        // Create on top of current namespace
	                        this.ptr.addChild(obj);
	                        if (subObj.length > 0) {
	                            stack.push(defs); // Push the current level back
	                            defs = subObj; // Continue processing sub level
	                            subObj = null;
	                            this.ptr = obj; // And move the pointer to this namespace
	                            obj = null;
	                            continue;
	                        }
	                        subObj = null;

	                    } else if (Builder.isEnum(def)) {

	                        obj = new Reflect.Enum(this, this.ptr, def["name"], def["options"], def["syntax"]);
	                        def["values"].forEach(function(val) {
	                            obj.addChild(new Reflect.Enum.Value(this, obj, val["name"], val["id"]));
	                        }, this);
	                        this.ptr.addChild(obj);

	                    } else if (Builder.isService(def)) {

	                        obj = new Reflect.Service(this, this.ptr, def["name"], def["options"]);
	                        Object.keys(def["rpc"]).forEach(function(name) {
	                            var mtd = def["rpc"][name];
	                            obj.addChild(new Reflect.Service.RPCMethod(this, obj, name, mtd["request"], mtd["response"], !!mtd["request_stream"], !!mtd["response_stream"], mtd["options"]));
	                        }, this);
	                        this.ptr.addChild(obj);

	                    } else if (Builder.isExtend(def)) {

	                        obj = this.ptr.resolve(def["ref"], true);
	                        if (obj) {
	                            def["fields"].forEach(function(fld) {
	                                if (obj.getChild(fld['id']|0) !== null)
	                                    throw Error("duplicate extended field id in "+obj.name+": "+fld['id']);
	                                // Check if field id is allowed to be extended
	                                if (obj.extensions) {
	                                    var valid = false;
	                                    obj.extensions.forEach(function(range) {
	                                        if (fld["id"] >= range[0] && fld["id"] <= range[1])
	                                            valid = true;
	                                    });
	                                    if (!valid)
	                                        throw Error("illegal extended field id in "+obj.name+": "+fld['id']+" (not within valid ranges)");
	                                }
	                                // Convert extension field names to camel case notation if the override is set
	                                var name = fld["name"];
	                                if (this.options['convertFieldsToCamelCase'])
	                                    name = ProtoBuf.Util.toCamelCase(name);
	                                // see #161: Extensions use their fully qualified name as their runtime key and...
	                                var field = new Reflect.Message.ExtensionField(this, obj, fld["rule"], fld["type"], this.ptr.fqn()+'.'+name, fld["id"], fld["options"]);
	                                // ...are added on top of the current namespace as an extension which is used for
	                                // resolving their type later on (the extension always keeps the original name to
	                                // prevent naming collisions)
	                                var ext = new Reflect.Extension(this, this.ptr, fld["name"], field);
	                                field.extension = ext;
	                                this.ptr.addChild(ext);
	                                obj.addChild(field);
	                            }, this);

	                        } else if (!/\.?google\.protobuf\./.test(def["ref"])) // Silently skip internal extensions
	                            throw Error("extended message "+def["ref"]+" is not defined");

	                    } else
	                        throw Error("not a valid definition: "+JSON.stringify(def));

	                    def = null;
	                    obj = null;
	                }
	                // Break goes here
	                defs = null;
	                this.ptr = this.ptr.parent; // Namespace done, continue at parent
	            }
	            this.resolved = false; // Require re-resolve
	            this.result = null; // Require re-build
	            return this;
	        };

	        /**
	         * Propagates syntax to all children.
	         * @param {!Object} parent
	         * @inner
	         */
	        function propagateSyntax(parent) {
	            if (parent['messages']) {
	                parent['messages'].forEach(function(child) {
	                    child["syntax"] = parent["syntax"];
	                    propagateSyntax(child);
	                });
	            }
	            if (parent['enums']) {
	                parent['enums'].forEach(function(child) {
	                    child["syntax"] = parent["syntax"];
	                });
	            }
	        }

	        /**
	         * Imports another definition into this builder.
	         * @param {Object.<string,*>} json Parsed import
	         * @param {(string|{root: string, file: string})=} filename Imported file name
	         * @returns {!ProtoBuf.Builder} this
	         * @throws {Error} If the definition or file cannot be imported
	         * @expose
	         */
	        BuilderPrototype["import"] = function(json, filename) {
	            var delim = '/';

	            // Make sure to skip duplicate imports

	            if (typeof filename === 'string') {

	                if (ProtoBuf.Util.IS_NODE)
	                    filename = require$$2['resolve'](filename);
	                if (this.files[filename] === true)
	                    return this.reset();
	                this.files[filename] = true;

	            } else if (typeof filename === 'object') { // Object with root, file.

	                var root = filename.root;
	                if (ProtoBuf.Util.IS_NODE)
	                    root = require$$2['resolve'](root);
	                if (root.indexOf("\\") >= 0 || filename.file.indexOf("\\") >= 0)
	                    delim = '\\';
	                var fname;
	                if (ProtoBuf.Util.IS_NODE)
	                    fname = require$$2['join'](root, filename.file);
	                else
	                    fname = root + delim + filename.file;
	                if (this.files[fname] === true)
	                    return this.reset();
	                this.files[fname] = true;
	            }

	            // Import imports

	            if (json['imports'] && json['imports'].length > 0) {
	                var importRoot,
	                    resetRoot = false;

	                if (typeof filename === 'object') { // If an import root is specified, override

	                    this.importRoot = filename["root"]; resetRoot = true; // ... and reset afterwards
	                    importRoot = this.importRoot;
	                    filename = filename["file"];
	                    if (importRoot.indexOf("\\") >= 0 || filename.indexOf("\\") >= 0)
	                        delim = '\\';

	                } else if (typeof filename === 'string') {

	                    if (this.importRoot) // If import root is overridden, use it
	                        importRoot = this.importRoot;
	                    else { // Otherwise compute from filename
	                        if (filename.indexOf("/") >= 0) { // Unix
	                            importRoot = filename.replace(/\/[^\/]*$/, "");
	                            if (/* /file.proto */ importRoot === "")
	                                importRoot = "/";
	                        } else if (filename.indexOf("\\") >= 0) { // Windows
	                            importRoot = filename.replace(/\\[^\\]*$/, "");
	                            delim = '\\';
	                        } else
	                            importRoot = ".";
	                    }

	                } else
	                    importRoot = null;

	                for (var i=0; i<json['imports'].length; i++) {
	                    if (typeof json['imports'][i] === 'string') { // Import file
	                        if (!importRoot)
	                            throw Error("cannot determine import root");
	                        var importFilename = json['imports'][i];
	                        if (importFilename === "google/protobuf/descriptor.proto")
	                            continue; // Not needed and therefore not used
	                        if (ProtoBuf.Util.IS_NODE)
	                            importFilename = require$$2['join'](importRoot, importFilename);
	                        else
	                            importFilename = importRoot + delim + importFilename;
	                        if (this.files[importFilename] === true)
	                            continue; // Already imported
	                        if (/\.proto$/i.test(importFilename) && !ProtoBuf.DotProto)       // If this is a light build
	                            importFilename = importFilename.replace(/\.proto$/, ".json"); // always load the JSON file
	                        var contents = ProtoBuf.Util.fetch(importFilename);
	                        if (contents === null)
	                            throw Error("failed to import '"+importFilename+"' in '"+filename+"': file not found");
	                        if (/\.json$/i.test(importFilename)) // Always possible
	                            this["import"](JSON.parse(contents+""), importFilename); // May throw
	                        else
	                            this["import"](ProtoBuf.DotProto.Parser.parse(contents), importFilename); // May throw
	                    } else // Import structure
	                        if (!filename)
	                            this["import"](json['imports'][i]);
	                        else if (/\.(\w+)$/.test(filename)) // With extension: Append _importN to the name portion to make it unique
	                            this["import"](json['imports'][i], filename.replace(/^(.+)\.(\w+)$/, function($0, $1, $2) { return $1+"_import"+i+"."+$2; }));
	                        else // Without extension: Append _importN to make it unique
	                            this["import"](json['imports'][i], filename+"_import"+i);
	                }
	                if (resetRoot) // Reset import root override when all imports are done
	                    this.importRoot = null;
	            }

	            // Import structures

	            if (json['package'])
	                this.define(json['package']);
	            if (json['syntax'])
	                propagateSyntax(json);
	            var base = this.ptr;
	            if (json['options'])
	                Object.keys(json['options']).forEach(function(key) {
	                    base.options[key] = json['options'][key];
	                });
	            if (json['messages'])
	                this.create(json['messages']),
	                this.ptr = base;
	            if (json['enums'])
	                this.create(json['enums']),
	                this.ptr = base;
	            if (json['services'])
	                this.create(json['services']),
	                this.ptr = base;
	            if (json['extends'])
	                this.create(json['extends']);

	            return this.reset();
	        };

	        /**
	         * Resolves all namespace objects.
	         * @throws {Error} If a type cannot be resolved
	         * @returns {!ProtoBuf.Builder} this
	         * @expose
	         */
	        BuilderPrototype.resolveAll = function() {
	            // Resolve all reflected objects
	            var res;
	            if (this.ptr == null || typeof this.ptr.type === 'object')
	                return this; // Done (already resolved)

	            if (this.ptr instanceof Reflect.Namespace) { // Resolve children

	                this.ptr.children.forEach(function(child) {
	                    this.ptr = child;
	                    this.resolveAll();
	                }, this);

	            } else if (this.ptr instanceof Reflect.Message.Field) { // Resolve type

	                if (!Lang.TYPE.test(this.ptr.type)) {
	                    if (!Lang.TYPEREF.test(this.ptr.type))
	                        throw Error("illegal type reference in "+this.ptr.toString(true)+": "+this.ptr.type);
	                    res = (this.ptr instanceof Reflect.Message.ExtensionField ? this.ptr.extension.parent : this.ptr.parent).resolve(this.ptr.type, true);
	                    if (!res)
	                        throw Error("unresolvable type reference in "+this.ptr.toString(true)+": "+this.ptr.type);
	                    this.ptr.resolvedType = res;
	                    if (res instanceof Reflect.Enum) {
	                        this.ptr.type = ProtoBuf.TYPES["enum"];
	                        if (this.ptr.syntax === 'proto3' && res.syntax !== 'proto3')
	                            throw Error("proto3 message cannot reference proto2 enum");
	                    }
	                    else if (res instanceof Reflect.Message)
	                        this.ptr.type = res.isGroup ? ProtoBuf.TYPES["group"] : ProtoBuf.TYPES["message"];
	                    else
	                        throw Error("illegal type reference in "+this.ptr.toString(true)+": "+this.ptr.type);
	                } else
	                    this.ptr.type = ProtoBuf.TYPES[this.ptr.type];

	                // If it's a map field, also resolve the key type. The key type can be only a numeric, string, or bool type
	                // (i.e., no enums or messages), so we don't need to resolve against the current namespace.
	                if (this.ptr.map) {
	                    if (!Lang.TYPE.test(this.ptr.keyType))
	                        throw Error("illegal key type for map field in "+this.ptr.toString(true)+": "+this.ptr.keyType);
	                    this.ptr.keyType = ProtoBuf.TYPES[this.ptr.keyType];
	                }

	                // If it's a repeated and packable field then proto3 mandates it should be packed by
	                // default
	                if (
	                  this.ptr.syntax === 'proto3' &&
	                  this.ptr.repeated && this.ptr.options.packed === undefined &&
	                  ProtoBuf.PACKABLE_WIRE_TYPES.indexOf(this.ptr.type.wireType) !== -1
	                ) {
	                  this.ptr.options.packed = true;
	                }

	            } else if (this.ptr instanceof ProtoBuf.Reflect.Service.Method) {

	                if (this.ptr instanceof ProtoBuf.Reflect.Service.RPCMethod) {
	                    res = this.ptr.parent.resolve(this.ptr.requestName, true);
	                    if (!res || !(res instanceof ProtoBuf.Reflect.Message))
	                        throw Error("Illegal type reference in "+this.ptr.toString(true)+": "+this.ptr.requestName);
	                    this.ptr.resolvedRequestType = res;
	                    res = this.ptr.parent.resolve(this.ptr.responseName, true);
	                    if (!res || !(res instanceof ProtoBuf.Reflect.Message))
	                        throw Error("Illegal type reference in "+this.ptr.toString(true)+": "+this.ptr.responseName);
	                    this.ptr.resolvedResponseType = res;
	                } else // Should not happen as nothing else is implemented
	                    throw Error("illegal service type in "+this.ptr.toString(true));

	            } else if (
	                !(this.ptr instanceof ProtoBuf.Reflect.Message.OneOf) && // Not built
	                !(this.ptr instanceof ProtoBuf.Reflect.Extension) && // Not built
	                !(this.ptr instanceof ProtoBuf.Reflect.Enum.Value) // Built in enum
	            )
	                throw Error("illegal object in namespace: "+typeof(this.ptr)+": "+this.ptr);

	            return this.reset();
	        };

	        /**
	         * Builds the protocol. This will first try to resolve all definitions and, if this has been successful,
	         * return the built package.
	         * @param {(string|Array.<string>)=} path Specifies what to return. If omitted, the entire namespace will be returned.
	         * @returns {!ProtoBuf.Builder.Message|!Object.<string,*>}
	         * @throws {Error} If a type could not be resolved
	         * @expose
	         */
	        BuilderPrototype.build = function(path) {
	            this.reset();
	            if (!this.resolved)
	                this.resolveAll(),
	                this.resolved = true,
	                this.result = null; // Require re-build
	            if (this.result === null) // (Re-)Build
	                this.result = this.ns.build();
	            if (!path)
	                return this.result;
	            var part = typeof path === 'string' ? path.split(".") : path,
	                ptr = this.result; // Build namespace pointer (no hasChild etc.)
	            for (var i=0; i<part.length; i++)
	                if (ptr[part[i]])
	                    ptr = ptr[part[i]];
	                else {
	                    ptr = null;
	                    break;
	                }
	            return ptr;
	        };

	        /**
	         * Similar to {@link ProtoBuf.Builder#build}, but looks up the internal reflection descriptor.
	         * @param {string=} path Specifies what to return. If omitted, the entire namespace wiil be returned.
	         * @param {boolean=} excludeNonNamespace Excludes non-namespace types like fields, defaults to `false`
	         * @returns {?ProtoBuf.Reflect.T} Reflection descriptor or `null` if not found
	         */
	        BuilderPrototype.lookup = function(path, excludeNonNamespace) {
	            return path ? this.ns.resolve(path, excludeNonNamespace) : this.ns;
	        };

	        /**
	         * Returns a string representation of this object.
	         * @return {string} String representation as of "Builder"
	         * @expose
	         */
	        BuilderPrototype.toString = function() {
	            return "Builder";
	        };

	        // ----- Base classes -----
	        // Exist for the sole purpose of being able to "... instanceof ProtoBuf.Builder.Message" etc.

	        /**
	         * @alias ProtoBuf.Builder.Message
	         */
	        Builder.Message = function() {};

	        /**
	         * @alias ProtoBuf.Builder.Enum
	         */
	        Builder.Enum = function() {};

	        /**
	         * @alias ProtoBuf.Builder.Message
	         */
	        Builder.Service = function() {};

	        return Builder;

	    })(ProtoBuf, ProtoBuf.Lang, ProtoBuf.Reflect);

	    /**
	     * @alias ProtoBuf.Map
	     * @expose
	     */
	    ProtoBuf.Map = (function(ProtoBuf, Reflect) {

	        /**
	         * Constructs a new Map. A Map is a container that is used to implement map
	         * fields on message objects. It closely follows the ES6 Map API; however,
	         * it is distinct because we do not want to depend on external polyfills or
	         * on ES6 itself.
	         *
	         * @exports ProtoBuf.Map
	         * @param {!ProtoBuf.Reflect.Field} field Map field
	         * @param {Object.<string,*>=} contents Initial contents
	         * @constructor
	         */
	        var Map = function(field, contents) {
	            if (!field.map)
	                throw Error("field is not a map");

	            /**
	             * The field corresponding to this map.
	             * @type {!ProtoBuf.Reflect.Field}
	             */
	            this.field = field;

	            /**
	             * Element instance corresponding to key type.
	             * @type {!ProtoBuf.Reflect.Element}
	             */
	            this.keyElem = new Reflect.Element(field.keyType, null, true, field.syntax);

	            /**
	             * Element instance corresponding to value type.
	             * @type {!ProtoBuf.Reflect.Element}
	             */
	            this.valueElem = new Reflect.Element(field.type, field.resolvedType, false, field.syntax);

	            /**
	             * Internal map: stores mapping of (string form of key) -> (key, value)
	             * pair.
	             *
	             * We provide map semantics for arbitrary key types, but we build on top
	             * of an Object, which has only string keys. In order to avoid the need
	             * to convert a string key back to its native type in many situations,
	             * we store the native key value alongside the value. Thus, we only need
	             * a one-way mapping from a key type to its string form that guarantees
	             * uniqueness and equality (i.e., str(K1) === str(K2) if and only if K1
	             * === K2).
	             *
	             * @type {!Object<string, {key: *, value: *}>}
	             */
	            this.map = {};

	            /**
	             * Returns the number of elements in the map.
	             */
	            Object.defineProperty(this, "size", {
	                get: function() { return Object.keys(this.map).length; }
	            });

	            // Fill initial contents from a raw object.
	            if (contents) {
	                var keys = Object.keys(contents);
	                for (var i = 0; i < keys.length; i++) {
	                    var key = this.keyElem.valueFromString(keys[i]);
	                    var val = this.valueElem.verifyValue(contents[keys[i]]);
	                    this.map[this.keyElem.valueToString(key)] =
	                        { key: key, value: val };
	                }
	            }
	        };

	        var MapPrototype = Map.prototype;

	        /**
	         * Helper: return an iterator over an array.
	         * @param {!Array<*>} arr the array
	         * @returns {!Object} an iterator
	         * @inner
	         */
	        function arrayIterator(arr) {
	            var idx = 0;
	            return {
	                next: function() {
	                    if (idx < arr.length)
	                        return { done: false, value: arr[idx++] };
	                    return { done: true };
	                }
	            }
	        }

	        /**
	         * Clears the map.
	         */
	        MapPrototype.clear = function() {
	            this.map = {};
	        };

	        /**
	         * Deletes a particular key from the map.
	         * @returns {boolean} Whether any entry with this key was deleted.
	         */
	        MapPrototype["delete"] = function(key) {
	            var keyValue = this.keyElem.valueToString(this.keyElem.verifyValue(key));
	            var hadKey = keyValue in this.map;
	            delete this.map[keyValue];
	            return hadKey;
	        };

	        /**
	         * Returns an iterator over [key, value] pairs in the map.
	         * @returns {Object} The iterator
	         */
	        MapPrototype.entries = function() {
	            var entries = [];
	            var strKeys = Object.keys(this.map);
	            for (var i = 0, entry; i < strKeys.length; i++)
	                entries.push([(entry=this.map[strKeys[i]]).key, entry.value]);
	            return arrayIterator(entries);
	        };

	        /**
	         * Returns an iterator over keys in the map.
	         * @returns {Object} The iterator
	         */
	        MapPrototype.keys = function() {
	            var keys = [];
	            var strKeys = Object.keys(this.map);
	            for (var i = 0; i < strKeys.length; i++)
	                keys.push(this.map[strKeys[i]].key);
	            return arrayIterator(keys);
	        };

	        /**
	         * Returns an iterator over values in the map.
	         * @returns {!Object} The iterator
	         */
	        MapPrototype.values = function() {
	            var values = [];
	            var strKeys = Object.keys(this.map);
	            for (var i = 0; i < strKeys.length; i++)
	                values.push(this.map[strKeys[i]].value);
	            return arrayIterator(values);
	        };

	        /**
	         * Iterates over entries in the map, calling a function on each.
	         * @param {function(this:*, *, *, *)} cb The callback to invoke with value, key, and map arguments.
	         * @param {Object=} thisArg The `this` value for the callback
	         */
	        MapPrototype.forEach = function(cb, thisArg) {
	            var strKeys = Object.keys(this.map);
	            for (var i = 0, entry; i < strKeys.length; i++)
	                cb.call(thisArg, (entry=this.map[strKeys[i]]).value, entry.key, this);
	        };

	        /**
	         * Sets a key in the map to the given value.
	         * @param {*} key The key
	         * @param {*} value The value
	         * @returns {!ProtoBuf.Map} The map instance
	         */
	        MapPrototype.set = function(key, value) {
	            var keyValue = this.keyElem.verifyValue(key);
	            var valValue = this.valueElem.verifyValue(value);
	            this.map[this.keyElem.valueToString(keyValue)] =
	                { key: keyValue, value: valValue };
	            return this;
	        };

	        /**
	         * Gets the value corresponding to a key in the map.
	         * @param {*} key The key
	         * @returns {*|undefined} The value, or `undefined` if key not present
	         */
	        MapPrototype.get = function(key) {
	            var keyValue = this.keyElem.valueToString(this.keyElem.verifyValue(key));
	            if (!(keyValue in this.map))
	                return undefined;
	            return this.map[keyValue].value;
	        };

	        /**
	         * Determines whether the given key is present in the map.
	         * @param {*} key The key
	         * @returns {boolean} `true` if the key is present
	         */
	        MapPrototype.has = function(key) {
	            var keyValue = this.keyElem.valueToString(this.keyElem.verifyValue(key));
	            return (keyValue in this.map);
	        };

	        return Map;
	    })(ProtoBuf, ProtoBuf.Reflect);


	    /**
	     * Constructs a new empty Builder.
	     * @param {Object.<string,*>=} options Builder options, defaults to global options set on ProtoBuf
	     * @return {!ProtoBuf.Builder} Builder
	     * @expose
	     */
	    ProtoBuf.newBuilder = function(options) {
	        options = options || {};
	        if (typeof options['convertFieldsToCamelCase'] === 'undefined')
	            options['convertFieldsToCamelCase'] = ProtoBuf.convertFieldsToCamelCase;
	        if (typeof options['populateAccessors'] === 'undefined')
	            options['populateAccessors'] = ProtoBuf.populateAccessors;
	        return new ProtoBuf.Builder(options);
	    };

	    /**
	     * Loads a .json definition and returns the Builder.
	     * @param {!*|string} json JSON definition
	     * @param {(ProtoBuf.Builder|string|{root: string, file: string})=} builder Builder to append to. Will create a new one if omitted.
	     * @param {(string|{root: string, file: string})=} filename The corresponding file name if known. Must be specified for imports.
	     * @return {ProtoBuf.Builder} Builder to create new messages
	     * @throws {Error} If the definition cannot be parsed or built
	     * @expose
	     */
	    ProtoBuf.loadJson = function(json, builder, filename) {
	        if (typeof builder === 'string' || (builder && typeof builder["file"] === 'string' && typeof builder["root"] === 'string'))
	            filename = builder,
	            builder = null;
	        if (!builder || typeof builder !== 'object')
	            builder = ProtoBuf.newBuilder();
	        if (typeof json === 'string')
	            json = JSON.parse(json);
	        builder["import"](json, filename);
	        builder.resolveAll();
	        return builder;
	    };

	    /**
	     * Loads a .json file and returns the Builder.
	     * @param {string|!{root: string, file: string}} filename Path to json file or an object specifying 'file' with
	     *  an overridden 'root' path for all imported files.
	     * @param {function(?Error, !ProtoBuf.Builder=)=} callback Callback that will receive `null` as the first and
	     *  the Builder as its second argument on success, otherwise the error as its first argument. If omitted, the
	     *  file will be read synchronously and this function will return the Builder.
	     * @param {ProtoBuf.Builder=} builder Builder to append to. Will create a new one if omitted.
	     * @return {?ProtoBuf.Builder|undefined} The Builder if synchronous (no callback specified, will be NULL if the
	     *   request has failed), else undefined
	     * @expose
	     */
	    ProtoBuf.loadJsonFile = function(filename, callback, builder) {
	        if (callback && typeof callback === 'object')
	            builder = callback,
	            callback = null;
	        else if (!callback || typeof callback !== 'function')
	            callback = null;
	        if (callback)
	            return ProtoBuf.Util.fetch(typeof filename === 'string' ? filename : filename["root"]+"/"+filename["file"], function(contents) {
	                if (contents === null) {
	                    callback(Error("Failed to fetch file"));
	                    return;
	                }
	                try {
	                    callback(null, ProtoBuf.loadJson(JSON.parse(contents), builder, filename));
	                } catch (e) {
	                    callback(e);
	                }
	            });
	        var contents = ProtoBuf.Util.fetch(typeof filename === 'object' ? filename["root"]+"/"+filename["file"] : filename);
	        return contents === null ? null : ProtoBuf.loadJson(JSON.parse(contents), builder, filename);
	    };

	    return ProtoBuf;
	});
	});

	var messageCompiled = protobufLight.newBuilder({})['import']({
	  package: 'push_server.messages2',
	  syntax: 'proto2',
	  options: {
	    objc_class_prefix: 'AVIM'
	  },
	  messages: [{
	    name: 'JsonObjectMessage',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'required',
	      type: 'string',
	      name: 'data',
	      id: 1
	    }]
	  }, {
	    name: 'UnreadTuple',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'required',
	      type: 'string',
	      name: 'cid',
	      id: 1
	    }, {
	      rule: 'required',
	      type: 'int32',
	      name: 'unread',
	      id: 2
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'mid',
	      id: 3
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'timestamp',
	      id: 4
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'from',
	      id: 5
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'data',
	      id: 6
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'patchTimestamp',
	      id: 7
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'mentioned',
	      id: 8
	    }, {
	      rule: 'optional',
	      type: 'bytes',
	      name: 'binaryMsg',
	      id: 9
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'convType',
	      id: 10
	    }]
	  }, {
	    name: 'LogItem',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'optional',
	      type: 'string',
	      name: 'from',
	      id: 1
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'data',
	      id: 2
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'timestamp',
	      id: 3
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'msgId',
	      id: 4
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'ackAt',
	      id: 5
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'readAt',
	      id: 6
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'patchTimestamp',
	      id: 7
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'mentionAll',
	      id: 8
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'mentionPids',
	      id: 9
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'bin',
	      id: 10
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'convType',
	      id: 11
	    }]
	  }, {
	    name: 'ConvMemberInfo',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'optional',
	      type: 'string',
	      name: 'pid',
	      id: 1
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'role',
	      id: 2
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'infoId',
	      id: 3
	    }]
	  }, {
	    name: 'DataCommand',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'repeated',
	      type: 'string',
	      name: 'ids',
	      id: 1
	    }, {
	      rule: 'repeated',
	      type: 'JsonObjectMessage',
	      name: 'msg',
	      id: 2
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'offline',
	      id: 3
	    }]
	  }, {
	    name: 'SessionCommand',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'optional',
	      type: 'int64',
	      name: 't',
	      id: 1
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'n',
	      id: 2
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 's',
	      id: 3
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'ua',
	      id: 4
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'r',
	      id: 5
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'tag',
	      id: 6
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'deviceId',
	      id: 7
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'sessionPeerIds',
	      id: 8
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'onlineSessionPeerIds',
	      id: 9
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'st',
	      id: 10
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'stTtl',
	      id: 11
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'code',
	      id: 12
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'reason',
	      id: 13
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'deviceToken',
	      id: 14
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'sp',
	      id: 15
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'detail',
	      id: 16
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'lastUnreadNotifTime',
	      id: 17
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'lastPatchTime',
	      id: 18
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'configBitmap',
	      id: 19
	    }]
	  }, {
	    name: 'ErrorCommand',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'required',
	      type: 'int32',
	      name: 'code',
	      id: 1
	    }, {
	      rule: 'required',
	      type: 'string',
	      name: 'reason',
	      id: 2
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'appCode',
	      id: 3
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'detail',
	      id: 4
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'pids',
	      id: 5
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'appMsg',
	      id: 6
	    }]
	  }, {
	    name: 'DirectCommand',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'optional',
	      type: 'string',
	      name: 'msg',
	      id: 1
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'uid',
	      id: 2
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'fromPeerId',
	      id: 3
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'timestamp',
	      id: 4
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'offline',
	      id: 5
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'hasMore',
	      id: 6
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'toPeerIds',
	      id: 7
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'r',
	      id: 10
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'cid',
	      id: 11
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'id',
	      id: 12
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'transient',
	      id: 13
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'dt',
	      id: 14
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'roomId',
	      id: 15
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'pushData',
	      id: 16
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'will',
	      id: 17
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'patchTimestamp',
	      id: 18
	    }, {
	      rule: 'optional',
	      type: 'bytes',
	      name: 'binaryMsg',
	      id: 19
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'mentionPids',
	      id: 20
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'mentionAll',
	      id: 21
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'convType',
	      id: 22
	    }]
	  }, {
	    name: 'AckCommand',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'optional',
	      type: 'int32',
	      name: 'code',
	      id: 1
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'reason',
	      id: 2
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'mid',
	      id: 3
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'cid',
	      id: 4
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 't',
	      id: 5
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'uid',
	      id: 6
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'fromts',
	      id: 7
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'tots',
	      id: 8
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'type',
	      id: 9
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'ids',
	      id: 10
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'appCode',
	      id: 11
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'appMsg',
	      id: 12
	    }]
	  }, {
	    name: 'UnreadCommand',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'repeated',
	      type: 'UnreadTuple',
	      name: 'convs',
	      id: 1
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'notifTime',
	      id: 2
	    }]
	  }, {
	    name: 'ConvCommand',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'repeated',
	      type: 'string',
	      name: 'm',
	      id: 1
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'transient',
	      id: 2
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'unique',
	      id: 3
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'cid',
	      id: 4
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'cdate',
	      id: 5
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'initBy',
	      id: 6
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'sort',
	      id: 7
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'limit',
	      id: 8
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'skip',
	      id: 9
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'flag',
	      id: 10
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'count',
	      id: 11
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'udate',
	      id: 12
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 't',
	      id: 13
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'n',
	      id: 14
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 's',
	      id: 15
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'statusSub',
	      id: 16
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'statusPub',
	      id: 17
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'statusTTL',
	      id: 18
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'uniqueId',
	      id: 19
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'targetClientId',
	      id: 20
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'maxReadTimestamp',
	      id: 21
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'maxAckTimestamp',
	      id: 22
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'queryAllMembers',
	      id: 23
	    }, {
	      rule: 'repeated',
	      type: 'MaxReadTuple',
	      name: 'maxReadTuples',
	      id: 24
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'cids',
	      id: 25
	    }, {
	      rule: 'optional',
	      type: 'ConvMemberInfo',
	      name: 'info',
	      id: 26
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'tempConv',
	      id: 27
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'tempConvTTL',
	      id: 28
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'tempConvIds',
	      id: 29
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'allowedPids',
	      id: 30
	    }, {
	      rule: 'repeated',
	      type: 'ErrorCommand',
	      name: 'failedPids',
	      id: 31
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'next',
	      id: 40
	    }, {
	      rule: 'optional',
	      type: 'JsonObjectMessage',
	      name: 'results',
	      id: 100
	    }, {
	      rule: 'optional',
	      type: 'JsonObjectMessage',
	      name: 'where',
	      id: 101
	    }, {
	      rule: 'optional',
	      type: 'JsonObjectMessage',
	      name: 'attr',
	      id: 103
	    }, {
	      rule: 'optional',
	      type: 'JsonObjectMessage',
	      name: 'attrModified',
	      id: 104
	    }]
	  }, {
	    name: 'RoomCommand',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'optional',
	      type: 'string',
	      name: 'roomId',
	      id: 1
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 's',
	      id: 2
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 't',
	      id: 3
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'n',
	      id: 4
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'transient',
	      id: 5
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'roomPeerIds',
	      id: 6
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'byPeerId',
	      id: 7
	    }]
	  }, {
	    name: 'LogsCommand',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'optional',
	      type: 'string',
	      name: 'cid',
	      id: 1
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'l',
	      id: 2
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'limit',
	      id: 3
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 't',
	      id: 4
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'tt',
	      id: 5
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'tmid',
	      id: 6
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'mid',
	      id: 7
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'checksum',
	      id: 8
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'stored',
	      id: 9
	    }, {
	      rule: 'optional',
	      type: 'QueryDirection',
	      name: 'direction',
	      id: 10,
	      options: {
	        default: 'OLD'
	      }
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'tIncluded',
	      id: 11
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'ttIncluded',
	      id: 12
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'lctype',
	      id: 13
	    }, {
	      rule: 'repeated',
	      type: 'LogItem',
	      name: 'logs',
	      id: 105
	    }],
	    enums: [{
	      name: 'QueryDirection',
	      syntax: 'proto2',
	      values: [{
	        name: 'OLD',
	        id: 1
	      }, {
	        name: 'NEW',
	        id: 2
	      }]
	    }]
	  }, {
	    name: 'RcpCommand',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'optional',
	      type: 'string',
	      name: 'id',
	      id: 1
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'cid',
	      id: 2
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 't',
	      id: 3
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'read',
	      id: 4
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'from',
	      id: 5
	    }]
	  }, {
	    name: 'ReadTuple',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'required',
	      type: 'string',
	      name: 'cid',
	      id: 1
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'timestamp',
	      id: 2
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'mid',
	      id: 3
	    }]
	  }, {
	    name: 'MaxReadTuple',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'optional',
	      type: 'string',
	      name: 'pid',
	      id: 1
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'maxAckTimestamp',
	      id: 2
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'maxReadTimestamp',
	      id: 3
	    }]
	  }, {
	    name: 'ReadCommand',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'optional',
	      type: 'string',
	      name: 'cid',
	      id: 1
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'cids',
	      id: 2
	    }, {
	      rule: 'repeated',
	      type: 'ReadTuple',
	      name: 'convs',
	      id: 3
	    }]
	  }, {
	    name: 'PresenceCommand',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'optional',
	      type: 'StatusType',
	      name: 'status',
	      id: 1
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'sessionPeerIds',
	      id: 2
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'cid',
	      id: 3
	    }]
	  }, {
	    name: 'ReportCommand',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'optional',
	      type: 'bool',
	      name: 'initiative',
	      id: 1
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'type',
	      id: 2
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'data',
	      id: 3
	    }]
	  }, {
	    name: 'PatchItem',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'optional',
	      type: 'string',
	      name: 'cid',
	      id: 1
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'mid',
	      id: 2
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'timestamp',
	      id: 3
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'recall',
	      id: 4
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'data',
	      id: 5
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'patchTimestamp',
	      id: 6
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'from',
	      id: 7
	    }, {
	      rule: 'optional',
	      type: 'bytes',
	      name: 'binaryMsg',
	      id: 8
	    }, {
	      rule: 'optional',
	      type: 'bool',
	      name: 'mentionAll',
	      id: 9
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'mentionPids',
	      id: 10
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'patchCode',
	      id: 11
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'patchReason',
	      id: 12
	    }]
	  }, {
	    name: 'PatchCommand',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'repeated',
	      type: 'PatchItem',
	      name: 'patches',
	      id: 1
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'lastPatchTime',
	      id: 2
	    }]
	  }, {
	    name: 'PubsubCommand',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'optional',
	      type: 'string',
	      name: 'cid',
	      id: 1
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'cids',
	      id: 2
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'topic',
	      id: 3
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'subtopic',
	      id: 4
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'topics',
	      id: 5
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'subtopics',
	      id: 6
	    }, {
	      rule: 'optional',
	      type: 'JsonObjectMessage',
	      name: 'results',
	      id: 7
	    }]
	  }, {
	    name: 'BlacklistCommand',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'optional',
	      type: 'string',
	      name: 'srcCid',
	      id: 1
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'toPids',
	      id: 2
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'srcPid',
	      id: 3
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'toCids',
	      id: 4
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'limit',
	      id: 5
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'next',
	      id: 6
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'blockedPids',
	      id: 8
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'blockedCids',
	      id: 9
	    }, {
	      rule: 'repeated',
	      type: 'string',
	      name: 'allowedPids',
	      id: 10
	    }, {
	      rule: 'repeated',
	      type: 'ErrorCommand',
	      name: 'failedPids',
	      id: 11
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 't',
	      id: 12
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'n',
	      id: 13
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 's',
	      id: 14
	    }]
	  }, {
	    name: 'GenericCommand',
	    syntax: 'proto2',
	    fields: [{
	      rule: 'optional',
	      type: 'CommandType',
	      name: 'cmd',
	      id: 1
	    }, {
	      rule: 'optional',
	      type: 'OpType',
	      name: 'op',
	      id: 2
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'appId',
	      id: 3
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'peerId',
	      id: 4
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'i',
	      id: 5
	    }, {
	      rule: 'optional',
	      type: 'string',
	      name: 'installationId',
	      id: 6
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'priority',
	      id: 7
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'service',
	      id: 8
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'serverTs',
	      id: 9
	    }, {
	      rule: 'optional',
	      type: 'int64',
	      name: 'clientTs',
	      id: 10
	    }, {
	      rule: 'optional',
	      type: 'int32',
	      name: 'notificationType',
	      id: 11
	    }, {
	      rule: 'optional',
	      type: 'DataCommand',
	      name: 'dataMessage',
	      id: 101
	    }, {
	      rule: 'optional',
	      type: 'SessionCommand',
	      name: 'sessionMessage',
	      id: 102
	    }, {
	      rule: 'optional',
	      type: 'ErrorCommand',
	      name: 'errorMessage',
	      id: 103
	    }, {
	      rule: 'optional',
	      type: 'DirectCommand',
	      name: 'directMessage',
	      id: 104
	    }, {
	      rule: 'optional',
	      type: 'AckCommand',
	      name: 'ackMessage',
	      id: 105
	    }, {
	      rule: 'optional',
	      type: 'UnreadCommand',
	      name: 'unreadMessage',
	      id: 106
	    }, {
	      rule: 'optional',
	      type: 'ReadCommand',
	      name: 'readMessage',
	      id: 107
	    }, {
	      rule: 'optional',
	      type: 'RcpCommand',
	      name: 'rcpMessage',
	      id: 108
	    }, {
	      rule: 'optional',
	      type: 'LogsCommand',
	      name: 'logsMessage',
	      id: 109
	    }, {
	      rule: 'optional',
	      type: 'ConvCommand',
	      name: 'convMessage',
	      id: 110
	    }, {
	      rule: 'optional',
	      type: 'RoomCommand',
	      name: 'roomMessage',
	      id: 111
	    }, {
	      rule: 'optional',
	      type: 'PresenceCommand',
	      name: 'presenceMessage',
	      id: 112
	    }, {
	      rule: 'optional',
	      type: 'ReportCommand',
	      name: 'reportMessage',
	      id: 113
	    }, {
	      rule: 'optional',
	      type: 'PatchCommand',
	      name: 'patchMessage',
	      id: 114
	    }, {
	      rule: 'optional',
	      type: 'PubsubCommand',
	      name: 'pubsubMessage',
	      id: 115
	    }, {
	      rule: 'optional',
	      type: 'BlacklistCommand',
	      name: 'blacklistMessage',
	      id: 116
	    }]
	  }],
	  enums: [{
	    name: 'CommandType',
	    syntax: 'proto2',
	    values: [{
	      name: 'session',
	      id: 0
	    }, {
	      name: 'conv',
	      id: 1
	    }, {
	      name: 'direct',
	      id: 2
	    }, {
	      name: 'ack',
	      id: 3
	    }, {
	      name: 'rcp',
	      id: 4
	    }, {
	      name: 'unread',
	      id: 5
	    }, {
	      name: 'logs',
	      id: 6
	    }, {
	      name: 'error',
	      id: 7
	    }, {
	      name: 'login',
	      id: 8
	    }, {
	      name: 'data',
	      id: 9
	    }, {
	      name: 'room',
	      id: 10
	    }, {
	      name: 'read',
	      id: 11
	    }, {
	      name: 'presence',
	      id: 12
	    }, {
	      name: 'report',
	      id: 13
	    }, {
	      name: 'echo',
	      id: 14
	    }, {
	      name: 'loggedin',
	      id: 15
	    }, {
	      name: 'logout',
	      id: 16
	    }, {
	      name: 'loggedout',
	      id: 17
	    }, {
	      name: 'patch',
	      id: 18
	    }, {
	      name: 'pubsub',
	      id: 19
	    }, {
	      name: 'blacklist',
	      id: 20
	    }, {
	      name: 'goaway',
	      id: 21
	    }]
	  }, {
	    name: 'OpType',
	    syntax: 'proto2',
	    values: [{
	      name: 'open',
	      id: 1
	    }, {
	      name: 'add',
	      id: 2
	    }, {
	      name: 'remove',
	      id: 3
	    }, {
	      name: 'close',
	      id: 4
	    }, {
	      name: 'opened',
	      id: 5
	    }, {
	      name: 'closed',
	      id: 6
	    }, {
	      name: 'query',
	      id: 7
	    }, {
	      name: 'query_result',
	      id: 8
	    }, {
	      name: 'conflict',
	      id: 9
	    }, {
	      name: 'added',
	      id: 10
	    }, {
	      name: 'removed',
	      id: 11
	    }, {
	      name: 'refresh',
	      id: 12
	    }, {
	      name: 'refreshed',
	      id: 13
	    }, {
	      name: 'start',
	      id: 30
	    }, {
	      name: 'started',
	      id: 31
	    }, {
	      name: 'joined',
	      id: 32
	    }, {
	      name: 'members_joined',
	      id: 33
	    }, {
	      name: 'left',
	      id: 39
	    }, {
	      name: 'members_left',
	      id: 40
	    }, {
	      name: 'results',
	      id: 42
	    }, {
	      name: 'count',
	      id: 43
	    }, {
	      name: 'result',
	      id: 44
	    }, {
	      name: 'update',
	      id: 45
	    }, {
	      name: 'updated',
	      id: 46
	    }, {
	      name: 'mute',
	      id: 47
	    }, {
	      name: 'unmute',
	      id: 48
	    }, {
	      name: 'status',
	      id: 49
	    }, {
	      name: 'members',
	      id: 50
	    }, {
	      name: 'max_read',
	      id: 51
	    }, {
	      name: 'is_member',
	      id: 52
	    }, {
	      name: 'member_info_update',
	      id: 53
	    }, {
	      name: 'member_info_updated',
	      id: 54
	    }, {
	      name: 'member_info_changed',
	      id: 55
	    }, {
	      name: 'join',
	      id: 80
	    }, {
	      name: 'invite',
	      id: 81
	    }, {
	      name: 'leave',
	      id: 82
	    }, {
	      name: 'kick',
	      id: 83
	    }, {
	      name: 'reject',
	      id: 84
	    }, {
	      name: 'invited',
	      id: 85
	    }, {
	      name: 'kicked',
	      id: 86
	    }, {
	      name: 'upload',
	      id: 100
	    }, {
	      name: 'uploaded',
	      id: 101
	    }, {
	      name: 'subscribe',
	      id: 120
	    }, {
	      name: 'subscribed',
	      id: 121
	    }, {
	      name: 'unsubscribe',
	      id: 122
	    }, {
	      name: 'unsubscribed',
	      id: 123
	    }, {
	      name: 'is_subscribed',
	      id: 124
	    }, {
	      name: 'modify',
	      id: 150
	    }, {
	      name: 'modified',
	      id: 151
	    }, {
	      name: 'block',
	      id: 170
	    }, {
	      name: 'unblock',
	      id: 171
	    }, {
	      name: 'blocked',
	      id: 172
	    }, {
	      name: 'unblocked',
	      id: 173
	    }, {
	      name: 'members_blocked',
	      id: 174
	    }, {
	      name: 'members_unblocked',
	      id: 175
	    }, {
	      name: 'check_block',
	      id: 176
	    }, {
	      name: 'check_result',
	      id: 177
	    }, {
	      name: 'add_shutup',
	      id: 180
	    }, {
	      name: 'remove_shutup',
	      id: 181
	    }, {
	      name: 'query_shutup',
	      id: 182
	    }, {
	      name: 'shutup_added',
	      id: 183
	    }, {
	      name: 'shutup_removed',
	      id: 184
	    }, {
	      name: 'shutup_result',
	      id: 185
	    }, {
	      name: 'shutuped',
	      id: 186
	    }, {
	      name: 'unshutuped',
	      id: 187
	    }, {
	      name: 'members_shutuped',
	      id: 188
	    }, {
	      name: 'members_unshutuped',
	      id: 189
	    }, {
	      name: 'check_shutup',
	      id: 190
	    }]
	  }, {
	    name: 'StatusType',
	    syntax: 'proto2',
	    values: [{
	      name: 'on',
	      id: 1
	    }, {
	      name: 'off',
	      id: 2
	    }]
	  }],
	  isNamespace: true
	}).build();

	const {
	  JsonObjectMessage,
	  UnreadTuple,
	  LogItem,
	  DataCommand,
	  SessionCommand,
	  ErrorCommand,
	  DirectCommand,
	  AckCommand,
	  UnreadCommand,
	  ConvCommand,
	  RoomCommand,
	  LogsCommand,
	  RcpCommand,
	  ReadTuple,
	  MaxReadTuple,
	  ReadCommand,
	  PresenceCommand,
	  ReportCommand,
	  GenericCommand,
	  BlacklistCommand,
	  PatchCommand,
	  PatchItem,
	  ConvMemberInfo,
	  CommandType,
	  OpType,
	  StatusType
	} = messageCompiled.push_server.messages2;

	var message = /*#__PURE__*/Object.freeze({
		__proto__: null,
		JsonObjectMessage: JsonObjectMessage,
		UnreadTuple: UnreadTuple,
		LogItem: LogItem,
		DataCommand: DataCommand,
		SessionCommand: SessionCommand,
		ErrorCommand: ErrorCommand,
		DirectCommand: DirectCommand,
		AckCommand: AckCommand,
		UnreadCommand: UnreadCommand,
		ConvCommand: ConvCommand,
		RoomCommand: RoomCommand,
		LogsCommand: LogsCommand,
		RcpCommand: RcpCommand,
		ReadTuple: ReadTuple,
		MaxReadTuple: MaxReadTuple,
		ReadCommand: ReadCommand,
		PresenceCommand: PresenceCommand,
		ReportCommand: ReportCommand,
		GenericCommand: GenericCommand,
		BlacklistCommand: BlacklistCommand,
		PatchCommand: PatchCommand,
		PatchItem: PatchItem,
		ConvMemberInfo: ConvMemberInfo,
		CommandType: CommandType,
		OpType: OpType,
		StatusType: StatusType
	});

	var eventemitter3 = createCommonjsModule(function (module) {

	var has = Object.prototype.hasOwnProperty
	  , prefix = '~';

	/**
	 * Constructor to create a storage for our `EE` objects.
	 * An `Events` instance is a plain object whose properties are event names.
	 *
	 * @constructor
	 * @private
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
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	 * @constructor
	 * @private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Add a listener for a given event.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} once Specify if the listener is a one-time listener.
	 * @returns {EventEmitter}
	 * @private
	 */
	function addListener(emitter, event, fn, context, once) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('The listener must be a function');
	  }

	  var listener = new EE(fn, context || emitter, once)
	    , evt = prefix ? prefix + event : event;

	  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
	  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
	  else emitter._events[evt] = [emitter._events[evt], listener];

	  return emitter;
	}

	/**
	 * Clear event by name.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} evt The Event name.
	 * @private
	 */
	function clearEvent(emitter, evt) {
	  if (--emitter._eventsCount === 0) emitter._events = new Events();
	  else delete emitter._events[evt];
	}

	/**
	 * Minimal `EventEmitter` interface that is molded against the Node.js
	 * `EventEmitter` interface.
	 *
	 * @constructor
	 * @public
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
	 * @public
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
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Array} The registered listeners.
	 * @public
	 */
	EventEmitter.prototype.listeners = function listeners(event) {
	  var evt = prefix ? prefix + event : event
	    , handlers = this._events[evt];

	  if (!handlers) return [];
	  if (handlers.fn) return [handlers.fn];

	  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
	    ee[i] = handlers[i].fn;
	  }

	  return ee;
	};

	/**
	 * Return the number of listeners listening to a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Number} The number of listeners.
	 * @public
	 */
	EventEmitter.prototype.listenerCount = function listenerCount(event) {
	  var evt = prefix ? prefix + event : event
	    , listeners = this._events[evt];

	  if (!listeners) return 0;
	  if (listeners.fn) return 1;
	  return listeners.length;
	};

	/**
	 * Calls each of the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Boolean} `true` if the event had listeners, else `false`.
	 * @public
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
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  return addListener(this, event, fn, context, false);
	};

	/**
	 * Add a one-time listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  return addListener(this, event, fn, context, true);
	};

	/**
	 * Remove the listeners of a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn Only remove the listeners that match this function.
	 * @param {*} context Only remove the listeners that have this context.
	 * @param {Boolean} once Only remove one-time listeners.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return this;
	  if (!fn) {
	    clearEvent(this, evt);
	    return this;
	  }

	  var listeners = this._events[evt];

	  if (listeners.fn) {
	    if (
	      listeners.fn === fn &&
	      (!once || listeners.once) &&
	      (!context || listeners.context === context)
	    ) {
	      clearEvent(this, evt);
	    }
	  } else {
	    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
	      if (
	        listeners[i].fn !== fn ||
	        (once && !listeners[i].once) ||
	        (context && listeners[i].context !== context)
	      ) {
	        events.push(listeners[i]);
	      }
	    }

	    //
	    // Reset the array, or remove it completely if we have no more listeners.
	    //
	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
	    else clearEvent(this, evt);
	  }

	  return this;
	};

	/**
	 * Remove all listeners, or those of the specified event.
	 *
	 * @param {(String|Symbol)} [event] The event name.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  var evt;

	  if (event) {
	    evt = prefix ? prefix + event : event;
	    if (this._events[evt]) clearEvent(this, evt);
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

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var w = d * 7;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */

	var ms = function(val, options) {
	  options = options || {};
	  var type = typeof val;
	  if (type === 'string' && val.length > 0) {
	    return parse(val);
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error(
	    'val is not a non-empty string or a valid number. val=' +
	      JSON.stringify(val)
	  );
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = String(str);
	  if (str.length > 100) {
	    return;
	  }
	  var match = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
	    str
	  );
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'weeks':
	    case 'week':
	    case 'w':
	      return n * w;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtShort(ms) {
	  var msAbs = Math.abs(ms);
	  if (msAbs >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (msAbs >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (msAbs >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (msAbs >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtLong(ms) {
	  var msAbs = Math.abs(ms);
	  if (msAbs >= d) {
	    return plural(ms, msAbs, d, 'day');
	  }
	  if (msAbs >= h) {
	    return plural(ms, msAbs, h, 'hour');
	  }
	  if (msAbs >= m) {
	    return plural(ms, msAbs, m, 'minute');
	  }
	  if (msAbs >= s) {
	    return plural(ms, msAbs, s, 'second');
	  }
	  return ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, msAbs, n, name) {
	  var isPlural = msAbs >= n * 1.5;
	  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
	}

	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 */
	function setup(env) {
	  createDebug.debug = createDebug;
	  createDebug.default = createDebug;
	  createDebug.coerce = coerce;
	  createDebug.disable = disable;
	  createDebug.enable = enable;
	  createDebug.enabled = enabled;
	  createDebug.humanize = ms;
	  Object.keys(env).forEach(function (key) {
	    createDebug[key] = env[key];
	  });
	  /**
	  * Active `debug` instances.
	  */

	  createDebug.instances = [];
	  /**
	  * The currently active debug mode names, and names to skip.
	  */

	  createDebug.names = [];
	  createDebug.skips = [];
	  /**
	  * Map of special "%n" handling functions, for the debug "format" argument.
	  *
	  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	  */

	  createDebug.formatters = {};
	  /**
	  * Selects a color for a debug namespace
	  * @param {String} namespace The namespace string for the for the debug instance to be colored
	  * @return {Number|String} An ANSI color code for the given namespace
	  * @api private
	  */

	  function selectColor(namespace) {
	    var hash = 0;

	    for (var i = 0; i < namespace.length; i++) {
	      hash = (hash << 5) - hash + namespace.charCodeAt(i);
	      hash |= 0; // Convert to 32bit integer
	    }

	    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	  }

	  createDebug.selectColor = selectColor;
	  /**
	  * Create a debugger with the given `namespace`.
	  *
	  * @param {String} namespace
	  * @return {Function}
	  * @api public
	  */

	  function createDebug(namespace) {
	    var prevTime;

	    function debug() {
	      // Disabled?
	      if (!debug.enabled) {
	        return;
	      }

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      var self = debug; // Set `diff` timestamp

	      var curr = Number(new Date());
	      var ms = curr - (prevTime || curr);
	      self.diff = ms;
	      self.prev = prevTime;
	      self.curr = curr;
	      prevTime = curr;
	      args[0] = createDebug.coerce(args[0]);

	      if (typeof args[0] !== 'string') {
	        // Anything else let's inspect with %O
	        args.unshift('%O');
	      } // Apply any `formatters` transformations


	      var index = 0;
	      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
	        // If we encounter an escaped % then don't increase the array index
	        if (match === '%%') {
	          return match;
	        }

	        index++;
	        var formatter = createDebug.formatters[format];

	        if (typeof formatter === 'function') {
	          var val = args[index];
	          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

	          args.splice(index, 1);
	          index--;
	        }

	        return match;
	      }); // Apply env-specific formatting (colors, etc.)

	      createDebug.formatArgs.call(self, args);
	      var logFn = self.log || createDebug.log;
	      logFn.apply(self, args);
	    }

	    debug.namespace = namespace;
	    debug.enabled = createDebug.enabled(namespace);
	    debug.useColors = createDebug.useColors();
	    debug.color = selectColor(namespace);
	    debug.destroy = destroy;
	    debug.extend = extend; // Debug.formatArgs = formatArgs;
	    // debug.rawLog = rawLog;
	    // env-specific initialization logic for debug instances

	    if (typeof createDebug.init === 'function') {
	      createDebug.init(debug);
	    }

	    createDebug.instances.push(debug);
	    return debug;
	  }

	  function destroy() {
	    var index = createDebug.instances.indexOf(this);

	    if (index !== -1) {
	      createDebug.instances.splice(index, 1);
	      return true;
	    }

	    return false;
	  }

	  function extend(namespace, delimiter) {
	    return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
	  }
	  /**
	  * Enables a debug mode by namespaces. This can include modes
	  * separated by a colon and wildcards.
	  *
	  * @param {String} namespaces
	  * @api public
	  */


	  function enable(namespaces) {
	    createDebug.save(namespaces);
	    createDebug.names = [];
	    createDebug.skips = [];
	    var i;
	    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
	    var len = split.length;

	    for (i = 0; i < len; i++) {
	      if (!split[i]) {
	        // ignore empty strings
	        continue;
	      }

	      namespaces = split[i].replace(/\*/g, '.*?');

	      if (namespaces[0] === '-') {
	        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	      } else {
	        createDebug.names.push(new RegExp('^' + namespaces + '$'));
	      }
	    }

	    for (i = 0; i < createDebug.instances.length; i++) {
	      var instance = createDebug.instances[i];
	      instance.enabled = createDebug.enabled(instance.namespace);
	    }
	  }
	  /**
	  * Disable debug output.
	  *
	  * @api public
	  */


	  function disable() {
	    createDebug.enable('');
	  }
	  /**
	  * Returns true if the given mode name is enabled, false otherwise.
	  *
	  * @param {String} name
	  * @return {Boolean}
	  * @api public
	  */


	  function enabled(name) {
	    if (name[name.length - 1] === '*') {
	      return true;
	    }

	    var i;
	    var len;

	    for (i = 0, len = createDebug.skips.length; i < len; i++) {
	      if (createDebug.skips[i].test(name)) {
	        return false;
	      }
	    }

	    for (i = 0, len = createDebug.names.length; i < len; i++) {
	      if (createDebug.names[i].test(name)) {
	        return true;
	      }
	    }

	    return false;
	  }
	  /**
	  * Coerce `val`.
	  *
	  * @param {Mixed} val
	  * @return {Mixed}
	  * @api private
	  */


	  function coerce(val) {
	    if (val instanceof Error) {
	      return val.stack || val.message;
	    }

	    return val;
	  }

	  createDebug.enable(createDebug.load());
	  return createDebug;
	}

	var common = setup;

	var browser = createCommonjsModule(function (module, exports) {

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	/* eslint-env browser */

	/**
	 * This is the web browser implementation of `debug()`.
	 */
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = localstorage();
	/**
	 * Colors.
	 */

	exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	// eslint-disable-next-line complexity

	function useColors() {
	  // NB: In an Electron preload script, document will be defined but not fully
	  // initialized. Since we know we're in Chrome, we'll just detect this case
	  // explicitly
	  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
	    return true;
	  } // Internet Explorer and Edge do not support colors.


	  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
	    return false;
	  } // Is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


	  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
	  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
	  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
	  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
	}
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */


	function formatArgs(args) {
	  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

	  if (!this.useColors) {
	    return;
	  }

	  var c = 'color: ' + this.color;
	  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into

	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-zA-Z%]/g, function (match) {
	    if (match === '%%') {
	      return;
	    }

	    index++;

	    if (match === '%c') {
	      // We only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	  args.splice(lastC, 0, c);
	}
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */


	function log() {
	  var _console;

	  // This hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
	}
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */


	function save(namespaces) {
	  try {
	    if (namespaces) {
	      exports.storage.setItem('debug', namespaces);
	    } else {
	      exports.storage.removeItem('debug');
	    }
	  } catch (error) {// Swallow
	    // XXX (@Qix-) should we be logging these?
	  }
	}
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */


	function load() {
	  var r;

	  try {
	    r = exports.storage.getItem('debug');
	  } catch (error) {} // Swallow
	  // XXX (@Qix-) should we be logging these?
	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


	  if (!r && typeof process !== 'undefined' && 'env' in process) {
	    r = process.env.DEBUG;
	  }

	  return r;
	}
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */


	function localstorage() {
	  try {
	    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
	    // The Browser also has localStorage in the global context.
	    return localStorage;
	  } catch (error) {// Swallow
	    // XXX (@Qix-) should we be logging these?
	  }
	}

	module.exports = common(exports);
	var formatters = module.exports.formatters;
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	formatters.j = function (v) {
	  try {
	    return JSON.stringify(v);
	  } catch (error) {
	    return '[UnexpectedJSONParseError]: ' + error.message;
	  }
	};
	});
	var browser_1 = browser.log;
	var browser_2 = browser.formatArgs;
	var browser_3 = browser.save;
	var browser_4 = browser.load;
	var browser_5 = browser.useColors;
	var browser_6 = browser.storage;
	var browser_7 = browser.colors;

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	var _copyArray = copyArray;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeFloor = Math.floor,
	    nativeRandom = Math.random;

	/**
	 * The base implementation of `_.random` without support for returning
	 * floating-point numbers.
	 *
	 * @private
	 * @param {number} lower The lower bound.
	 * @param {number} upper The upper bound.
	 * @returns {number} Returns the random number.
	 */
	function baseRandom(lower, upper) {
	  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
	}

	var _baseRandom = baseRandom;

	/**
	 * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
	 *
	 * @private
	 * @param {Array} array The array to shuffle.
	 * @param {number} [size=array.length] The size of `array`.
	 * @returns {Array} Returns `array`.
	 */
	function shuffleSelf(array, size) {
	  var index = -1,
	      length = array.length,
	      lastIndex = length - 1;

	  size = size === undefined ? length : size;
	  while (++index < size) {
	    var rand = _baseRandom(index, lastIndex),
	        value = array[rand];

	    array[rand] = array[index];
	    array[index] = value;
	  }
	  array.length = size;
	  return array;
	}

	var _shuffleSelf = shuffleSelf;

	/**
	 * A specialized version of `_.shuffle` for arrays.
	 *
	 * @private
	 * @param {Array} array The array to shuffle.
	 * @returns {Array} Returns the new shuffled array.
	 */
	function arrayShuffle(array) {
	  return _shuffleSelf(_copyArray(array));
	}

	var _arrayShuffle = arrayShuffle;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var _arrayMap = arrayMap;

	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return _arrayMap(props, function(key) {
	    return object[key];
	  });
	}

	var _baseValues = baseValues;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	var _baseTimes = baseTimes;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = _freeGlobal || freeSelf || Function('return this')();

	var _root = root;

	/** Built-in value references. */
	var Symbol$1 = _root.Symbol;

	var _Symbol = Symbol$1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag$1 && symToStringTag$1 in Object(value))
	    ? _getRawTag(value)
	    : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
	}

	var _baseIsArguments = baseIsArguments;

	/** Used for built-in method references. */
	var objectProto$2 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
	  return isObjectLike_1(value) && hasOwnProperty$1.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	var isArguments_1 = isArguments;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	var isArray_1 = isArray;

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	var stubFalse_1 = stubFalse;

	var isBuffer_1 = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports =  exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? _root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse_1;

	module.exports = isBuffer;
	});

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	var _isIndex = isIndex;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
	}

	var isLength_1 = isLength;

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike_1(value) &&
	    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
	}

	var _baseIsTypedArray = baseIsTypedArray;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary;

	var _nodeUtil = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports =  exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && _freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;
	});

	/* Node.js helper references. */
	var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

	var isTypedArray_1 = isTypedArray;

	/** Used for built-in method references. */
	var objectProto$3 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray_1(value),
	      isArg = !isArr && isArguments_1(value),
	      isBuff = !isArr && !isArg && isBuffer_1(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? _baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$2.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           _isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys;

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$4;

	  return value === proto;
	}

	var _isPrototype = isPrototype;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	var _overArg = overArg;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = _overArg(Object.keys, Object);

	var _nativeKeys = nativeKeys;

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!_isPrototype(object)) {
	    return _nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeys = baseKeys;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject;

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag$1 = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject_1(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = _baseGetTag(value);
	  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength_1(value.length) && !isFunction_1(value);
	}

	var isArrayLike_1 = isArrayLike;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
	}

	var keys_1 = keys;

	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object == null ? [] : _baseValues(object, keys_1(object));
	}

	var values_1 = values;

	/**
	 * The base implementation of `_.shuffle`.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to shuffle.
	 * @returns {Array} Returns the new shuffled array.
	 */
	function baseShuffle(collection) {
	  return _shuffleSelf(values_1(collection));
	}

	var _baseShuffle = baseShuffle;

	/**
	 * Creates an array of shuffled values, using a version of the
	 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to shuffle.
	 * @returns {Array} Returns the new shuffled array.
	 * @example
	 *
	 * _.shuffle([1, 2, 3, 4]);
	 * // => [4, 1, 3, 2]
	 */
	function shuffle(collection) {
	  var func = isArray_1(collection) ? _arrayShuffle : _baseShuffle;
	  return func(collection);
	}

	var shuffle_1 = shuffle;

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object.keys(descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;
	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }
	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);
	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }
	  if (desc.initializer === void 0) {
	    Object.defineProperty(target, property, desc);
	    desc = null;
	  }
	  return desc;
	}

	var stateMachine = createCommonjsModule(function (module, exports) {
	/*

	  Javascript State Machine Library - https://github.com/jakesgordon/javascript-state-machine

	  Copyright (c) 2012, 2013, 2014, 2015, Jake Gordon and contributors
	  Released under the MIT license - https://github.com/jakesgordon/javascript-state-machine/blob/master/LICENSE

	*/

	(function () {

	  var StateMachine = {

	    //---------------------------------------------------------------------------

	    VERSION: "2.4.0",

	    //---------------------------------------------------------------------------

	    Result: {
	      SUCCEEDED:    1, // the event transitioned successfully from one state to another
	      NOTRANSITION: 2, // the event was successfull but no state transition was necessary
	      CANCELLED:    3, // the event was cancelled by the caller in a beforeEvent callback
	      PENDING:      4  // the event is asynchronous and the caller is in control of when the transition occurs
	    },

	    Error: {
	      INVALID_TRANSITION: 100, // caller tried to fire an event that was innapropriate in the current state
	      PENDING_TRANSITION: 200, // caller tried to fire an event while an async transition was still pending
	      INVALID_CALLBACK:   300 // caller provided callback function threw an exception
	    },

	    WILDCARD: '*',
	    ASYNC: 'async',

	    //---------------------------------------------------------------------------

	    create: function(cfg, target) {

	      var initial      = (typeof cfg.initial == 'string') ? { state: cfg.initial } : cfg.initial; // allow for a simple string, or an object with { state: 'foo', event: 'setup', defer: true|false }
	      var terminal     = cfg.terminal || cfg['final'];
	      var fsm          = target || cfg.target  || {};
	      var events       = cfg.events || [];
	      var callbacks    = cfg.callbacks || {};
	      var map          = {}; // track state transitions allowed for an event { event: { from: [ to ] } }
	      var transitions  = {}; // track events allowed from a state            { state: [ event ] }

	      var add = function(e) {
	        var from = Array.isArray(e.from) ? e.from : (e.from ? [e.from] : [StateMachine.WILDCARD]); // allow 'wildcard' transition if 'from' is not specified
	        map[e.name] = map[e.name] || {};
	        for (var n = 0 ; n < from.length ; n++) {
	          transitions[from[n]] = transitions[from[n]] || [];
	          transitions[from[n]].push(e.name);

	          map[e.name][from[n]] = e.to || from[n]; // allow no-op transition if 'to' is not specified
	        }
	        if (e.to)
	          transitions[e.to] = transitions[e.to] || [];
	      };

	      if (initial) {
	        initial.event = initial.event || 'startup';
	        add({ name: initial.event, from: 'none', to: initial.state });
	      }

	      for(var n = 0 ; n < events.length ; n++)
	        add(events[n]);

	      for(var name in map) {
	        if (map.hasOwnProperty(name))
	          fsm[name] = StateMachine.buildEvent(name, map[name]);
	      }

	      for(var name in callbacks) {
	        if (callbacks.hasOwnProperty(name))
	          fsm[name] = callbacks[name];
	      }

	      fsm.current     = 'none';
	      fsm.is          = function(state) { return Array.isArray(state) ? (state.indexOf(this.current) >= 0) : (this.current === state); };
	      fsm.can         = function(event) { return !this.transition && (map[event] !== undefined) && (map[event].hasOwnProperty(this.current) || map[event].hasOwnProperty(StateMachine.WILDCARD)); };
	      fsm.cannot      = function(event) { return !this.can(event); };
	      fsm.transitions = function()      { return (transitions[this.current] || []).concat(transitions[StateMachine.WILDCARD] || []); };
	      fsm.isFinished  = function()      { return this.is(terminal); };
	      fsm.error       = cfg.error || function(name, from, to, args, error, msg, e) { throw e || msg; }; // default behavior when something unexpected happens is to throw an exception, but caller can override this behavior if desired (see github issue #3 and #17)
	      fsm.states      = function() { return Object.keys(transitions).sort() };

	      if (initial && !initial.defer)
	        fsm[initial.event]();

	      return fsm;

	    },

	    //===========================================================================

	    doCallback: function(fsm, func, name, from, to, args) {
	      if (func) {
	        try {
	          return func.apply(fsm, [name, from, to].concat(args));
	        }
	        catch(e) {
	          return fsm.error(name, from, to, args, StateMachine.Error.INVALID_CALLBACK, "an exception occurred in a caller-provided callback function", e);
	        }
	      }
	    },

	    beforeAnyEvent:  function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onbeforeevent'],                       name, from, to, args); },
	    afterAnyEvent:   function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onafterevent'] || fsm['onevent'],      name, from, to, args); },
	    leaveAnyState:   function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onleavestate'],                        name, from, to, args); },
	    enterAnyState:   function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onenterstate'] || fsm['onstate'],      name, from, to, args); },
	    changeState:     function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onchangestate'],                       name, from, to, args); },

	    beforeThisEvent: function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onbefore' + name],                     name, from, to, args); },
	    afterThisEvent:  function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onafter'  + name] || fsm['on' + name], name, from, to, args); },
	    leaveThisState:  function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onleave'  + from],                     name, from, to, args); },
	    enterThisState:  function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onenter'  + to]   || fsm['on' + to],   name, from, to, args); },

	    beforeEvent: function(fsm, name, from, to, args) {
	      if ((false === StateMachine.beforeThisEvent(fsm, name, from, to, args)) ||
	          (false === StateMachine.beforeAnyEvent( fsm, name, from, to, args)))
	        return false;
	    },

	    afterEvent: function(fsm, name, from, to, args) {
	      StateMachine.afterThisEvent(fsm, name, from, to, args);
	      StateMachine.afterAnyEvent( fsm, name, from, to, args);
	    },

	    leaveState: function(fsm, name, from, to, args) {
	      var specific = StateMachine.leaveThisState(fsm, name, from, to, args),
	          general  = StateMachine.leaveAnyState( fsm, name, from, to, args);
	      if ((false === specific) || (false === general))
	        return false;
	      else if ((StateMachine.ASYNC === specific) || (StateMachine.ASYNC === general))
	        return StateMachine.ASYNC;
	    },

	    enterState: function(fsm, name, from, to, args) {
	      StateMachine.enterThisState(fsm, name, from, to, args);
	      StateMachine.enterAnyState( fsm, name, from, to, args);
	    },

	    //===========================================================================

	    buildEvent: function(name, map) {
	      return function() {

	        var from  = this.current;
	        var to    = map[from] || (map[StateMachine.WILDCARD] != StateMachine.WILDCARD ? map[StateMachine.WILDCARD] : from) || from;
	        var args  = Array.prototype.slice.call(arguments); // turn arguments into pure array

	        if (this.transition)
	          return this.error(name, from, to, args, StateMachine.Error.PENDING_TRANSITION, "event " + name + " inappropriate because previous transition did not complete");

	        if (this.cannot(name))
	          return this.error(name, from, to, args, StateMachine.Error.INVALID_TRANSITION, "event " + name + " inappropriate in current state " + this.current);

	        if (false === StateMachine.beforeEvent(this, name, from, to, args))
	          return StateMachine.Result.CANCELLED;

	        if (from === to) {
	          StateMachine.afterEvent(this, name, from, to, args);
	          return StateMachine.Result.NOTRANSITION;
	        }

	        // prepare a transition method for use EITHER lower down, or by caller if they want an async transition (indicated by an ASYNC return value from leaveState)
	        var fsm = this;
	        this.transition = function() {
	          fsm.transition = null; // this method should only ever be called once
	          fsm.current = to;
	          StateMachine.enterState( fsm, name, from, to, args);
	          StateMachine.changeState(fsm, name, from, to, args);
	          StateMachine.afterEvent( fsm, name, from, to, args);
	          return StateMachine.Result.SUCCEEDED;
	        };
	        this.transition.cancel = function() { // provide a way for caller to cancel async transition if desired (issue #22)
	          fsm.transition = null;
	          StateMachine.afterEvent(fsm, name, from, to, args);
	        };

	        var leave = StateMachine.leaveState(this, name, from, to, args);
	        if (false === leave) {
	          this.transition = null;
	          return StateMachine.Result.CANCELLED;
	        }
	        else if (StateMachine.ASYNC === leave) {
	          return StateMachine.Result.PENDING;
	        }
	        else {
	          if (this.transition) // need to check in case user manually called transition() but forgot to return StateMachine.ASYNC
	            return this.transition();
	        }

	      };
	    }

	  }; // StateMachine

	  //===========================================================================

	  //======
	  // NODE
	  //======
	  {
	    if ( module.exports) {
	      exports = module.exports = StateMachine;
	    }
	    exports.StateMachine = StateMachine;
	  }

	}());
	});
	var stateMachine_1 = stateMachine.StateMachine;

	const adapters = {};
	const getAdapter = name => {
	  const adapter = adapters[name];
	  if (adapter === undefined) {
	    throw new Error(`${name} adapter is not configured`);
	  }
	  return adapter;
	};

	/**
	 * 指定 Adapters
	 * @function
	 * @memberof module:leancloud-realtime
	 * @param {Adapters} newAdapters Adapters 的类型请参考 {@link https://url.leanapp.cn/adapter-type-definitions @leancloud/adapter-types} 中的定义
	 */
	const setAdapters = newAdapters => {
	  Object.assign(adapters, newAdapters);
	};

	/** Built-in value references. */
	var getPrototype = _overArg(Object.getPrototypeOf, Object);

	var _getPrototype = getPrototype;

	/** `Object#toString` result references. */
	var objectTag$1 = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto$6 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag$1) {
	    return false;
	  }
	  var proto = _getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty$4.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	var isPlainObject_1 = isPlainObject;

	/* eslint-disable */
	var global$1 = typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : {};

	const EXPIRED = Symbol('expired');
	const debug = browser('LC:Expirable');
	class Expirable {
	  constructor(value, ttl) {
	    this.originalValue = value;
	    if (typeof ttl === 'number') {
	      this.expiredAt = Date.now() + ttl;
	    }
	  }
	  get value() {
	    const expired = this.expiredAt && this.expiredAt <= Date.now();
	    if (expired) debug(`expired: ${this.originalValue}`);
	    return expired ? EXPIRED : this.originalValue;
	  }
	}
	Expirable.EXPIRED = EXPIRED;

	const debug$1 = browser('LC:Cache');
	class Cache {
	  constructor(name = 'anonymous') {
	    this.name = name;
	    this._map = {};
	  }
	  get(key) {
	    const cache = this._map[key];
	    if (cache) {
	      const {
	        value
	      } = cache;
	      if (value !== Expirable.EXPIRED) {
	        debug$1('[%s] hit: %s', this.name, key);
	        return value;
	      }
	      delete this._map[key];
	    }
	    debug$1(`[${this.name}] missed: ${key}`);
	    return null;
	  }
	  set(key, value, ttl) {
	    debug$1('[%s] set: %s %d', this.name, key, ttl);
	    this._map[key] = new Expirable(value, ttl);
	  }
	}

	/**
	 * 调试日志控制器
	 * @const
	 * @memberof module:leancloud-realtime
	 * @example
	 * debug.enable();  // 启用调试日志
	 * debug.disable(); // 关闭调试日志
	 */
	const debug$2 = {
	  enable: (namespaces = 'LC*') => browser.enable(namespaces),
	  disable: browser.disable
	};
	const tryAll = promiseConstructors => {
	  const promise = new Promise(promiseConstructors[0]);
	  if (promiseConstructors.length === 1) {
	    return promise;
	  }
	  return promise.catch(() => tryAll(promiseConstructors.slice(1)));
	};

	// eslint-disable-next-line no-sequences
	const tap = interceptor => value => (interceptor(value), value);
	const finalize = callback => [
	// eslint-disable-next-line no-sequences
	value => (callback(), value), error => {
	  callback();
	  throw error;
	}];

	/**
	 * 将对象转换为 Date，支持 string、number、ProtoBuf Long 以及 LeanCloud 的 Date 类型，
	 * 其他情况下（包括对象为 falsy）返回原值。
	 * @private
	 */
	const decodeDate = date => {
	  if (!date) return date;
	  if (typeof date === 'string' || typeof date === 'number') {
	    return new Date(date);
	  }
	  if (date.__type === 'Date' && date.iso) {
	    return new Date(date.iso);
	  }
	  // Long
	  if (typeof date.toNumber === 'function') {
	    return new Date(date.toNumber());
	  }
	  return date;
	};
	/**
	 * 获取 Date 的毫秒数，如果不是一个 Date 返回 undefined。
	 * @private
	 */
	const getTime = date => date && date.getTime ? date.getTime() : undefined;

	/**
	 * 解码对象中的 LeanCloud 数据结构。
	 * 目前仅会处理 Date 类型。
	 * @private
	 */
	const decode = value => {
	  if (!value) return value;
	  if (value.__type === 'Date' && value.iso) {
	    return new Date(value.iso);
	  }
	  if (Array.isArray(value)) {
	    return value.map(decode);
	  }
	  if (isPlainObject_1(value)) {
	    return Object.keys(value).reduce((result, key) => ({
	      ...result,
	      [key]: decode(value[key])
	    }), {});
	  }
	  return value;
	};
	/**
	 * 将对象中的特殊类型编码为 LeanCloud 数据结构。
	 * 目前仅会处理 Date 类型。
	 * @private
	 */
	const encode = value => {
	  if (value instanceof Date) return {
	    __type: 'Date',
	    iso: value.toJSON()
	  };
	  if (Array.isArray(value)) {
	    return value.map(encode);
	  }
	  if (isPlainObject_1(value)) {
	    return Object.keys(value).reduce((result, key) => ({
	      ...result,
	      [key]: encode(value[key])
	    }), {});
	  }
	  return value;
	};
	const keyRemap = (keymap, obj) => Object.keys(obj).reduce((newObj, key) => {
	  const newKey = keymap[key] || key;
	  return Object.assign(newObj, {
	    [newKey]: obj[key]
	  });
	}, {});
	const isIE10 = global$1.navigator && global$1.navigator.userAgent && global$1.navigator.userAgent.indexOf('MSIE 10.') !== -1;

	/* eslint-disable no-proto */
	const getStaticProperty = (klass, property) => klass[property] || (klass.__proto__ ? getStaticProperty(klass.__proto__, property) : undefined);
	/* eslint-enable no-proto */

	const union = (a, b) => Array.from(new Set([...a, ...b]));
	const difference = (a, b) => Array.from((bSet => new Set(a.filter(x => !bSet.has(x))))(new Set(b)));
	const map = new WeakMap();

	// protected property helper
	const internal = object => {
	  if (!map.has(object)) {
	    map.set(object, {});
	  }
	  return map.get(object);
	};
	const compact = (obj, filter) => {
	  if (!isPlainObject_1(obj)) return obj;
	  const object = {
	    ...obj
	  };
	  Object.keys(object).forEach(prop => {
	    const value = object[prop];
	    if (value === filter) {
	      delete object[prop];
	    } else {
	      object[prop] = compact(value, filter);
	    }
	  });
	  return object;
	};

	// debug utility
	const removeNull = obj => compact(obj, null);
	const trim = message => removeNull(JSON.parse(JSON.stringify(message)));
	const ensureArray = target => {
	  if (Array.isArray(target)) {
	    return target;
	  }
	  if (target === undefined || target === null) {
	    return [];
	  }
	  return [target];
	};
	const setValue = (target, key, value) => {
	  // '.' is not allowed in Class keys, escaping is not in concern now.
	  const segs = key.split('.');
	  const lastSeg = segs.pop();
	  let currentTarget = target;
	  segs.forEach(seg => {
	    if (currentTarget[seg] === undefined) currentTarget[seg] = {};
	    currentTarget = currentTarget[seg];
	  });
	  currentTarget[lastSeg] = value;
	  return target;
	};
	const isWeapp =
	// eslint-disable-next-line no-undef
	typeof wx === 'object' && typeof wx.connectSocket === 'function';

	// throttle decorator
	const throttle = wait => (target, property, descriptor) => {
	  const callback = descriptor.value;
	  // very naive, internal use only
	  if (callback.length) {
	    throw new Error('throttled function should not accept any arguments');
	  }
	  return {
	    ...descriptor,
	    value() {
	      let {
	        throttleMeta
	      } = internal(this);
	      if (!throttleMeta) {
	        throttleMeta = {};
	        internal(this).throttleMeta = throttleMeta;
	      }
	      let {
	        [property]: propertyMeta
	      } = throttleMeta;
	      if (!propertyMeta) {
	        propertyMeta = {};
	        throttleMeta[property] = propertyMeta;
	      }
	      const {
	        previouseTimestamp = 0,
	        timeout
	      } = propertyMeta;
	      const now = Date.now();
	      const remainingTime = wait - (now - previouseTimestamp);
	      if (remainingTime <= 0) {
	        throttleMeta[property].previouseTimestamp = now;
	        callback.apply(this);
	      } else if (!timeout) {
	        propertyMeta.timeout = setTimeout(() => {
	          propertyMeta.previouseTimestamp = Date.now();
	          delete propertyMeta.timeout;
	          callback.apply(this);
	        }, remainingTime);
	      }
	    }
	  };
	};
	const isCNApp = appId => appId.slice(-9) !== '-MdYXbMMI';
	const equalBuffer = (buffer1, buffer2) => {
	  if (!buffer1 || !buffer2) return false;
	  if (buffer1.byteLength !== buffer2.byteLength) return false;
	  const a = new Uint8Array(buffer1);
	  const b = new Uint8Array(buffer2);
	  return !a.some((value, index) => value !== b[index]);
	};

	var _class;
	const debug$3 = browser('LC:WebSocketPlus');
	const OPEN = 'open';
	const DISCONNECT = 'disconnect';
	const RECONNECT = 'reconnect';
	const RETRY = 'retry';
	const SCHEDULE = 'schedule';
	const OFFLINE = 'offline';
	const ONLINE = 'online';
	const ERROR = 'error';
	const MESSAGE = 'message';
	const HEARTBEAT_TIME = 180000;
	const TIMEOUT_TIME = 380000;
	const DEFAULT_RETRY_STRATEGY = attempt => Math.min(1000 * 2 ** attempt, 300000);
	const requireConnected = (target, name, descriptor) => ({
	  ...descriptor,
	  value: function requireConnectedWrapper(...args) {
	    this.checkConnectionAvailability(name);
	    return descriptor.value.call(this, ...args);
	  }
	});
	let WebSocketPlus = (_class = class WebSocketPlus extends eventemitter3 {
	  get urls() {
	    return this._urls;
	  }
	  set urls(urls) {
	    this._urls = ensureArray(urls);
	  }
	  constructor(getUrls, protocol) {
	    super();
	    this.init();
	    this._protocol = protocol;
	    Promise.resolve(typeof getUrls === 'function' ? getUrls() : getUrls).then(ensureArray).then(urls => {
	      this._urls = urls;
	      return this._open();
	    }).then(() => {
	      this.__postponeTimeoutTimer = this._postponeTimeoutTimer.bind(this);
	      if (global$1.addEventListener) {
	        this.__pause = () => {
	          if (this.can('pause')) this.pause();
	        };
	        this.__resume = () => {
	          if (this.can('resume')) this.resume();
	        };
	        global$1.addEventListener('offline', this.__pause);
	        global$1.addEventListener('online', this.__resume);
	      }
	      this.open();
	    }).catch(this.throw.bind(this));
	  }
	  _open() {
	    return this._createWs(this._urls, this._protocol).then(ws => {
	      const [first, ...reset] = this._urls;
	      this._urls = [...reset, first];
	      return ws;
	    });
	  }
	  _createWs(urls, protocol) {
	    return tryAll(urls.map(url => (resolve, reject) => {
	      debug$3(`connect [${url}] ${protocol}`);
	      const WebSocket = getAdapter('WebSocket');
	      const ws = protocol ? new WebSocket(url, protocol) : new WebSocket(url);
	      ws.binaryType = this.binaryType || 'arraybuffer';
	      ws.onopen = () => resolve(ws);
	      ws.onclose = error => {
	        if (error instanceof Error) {
	          return reject(error);
	        }
	        // in browser, error event is useless
	        return reject(new Error(`Failed to connect [${url}]`));
	      };
	      ws.onerror = ws.onclose;
	    })).then(ws => {
	      this._ws = ws;
	      this._ws.onclose = this._handleClose.bind(this);
	      this._ws.onmessage = this._handleMessage.bind(this);
	      return ws;
	    });
	  }
	  _destroyWs() {
	    const ws = this._ws;
	    if (!ws) return;
	    ws.onopen = null;
	    ws.onclose = null;
	    ws.onerror = null;
	    ws.onmessage = null;
	    this._ws = null;
	    ws.close();
	  }

	  // eslint-disable-next-line class-methods-use-this
	  onbeforeevent(event, from, to, ...payload) {
	    debug$3(`${event}: ${from} -> ${to} %o`, payload);
	  }
	  onopen() {
	    this.emit(OPEN);
	  }
	  onconnected() {
	    this._startConnectionKeeper();
	  }
	  onleaveconnected(event, from, to) {
	    this._stopConnectionKeeper();
	    this._destroyWs();
	    if (to === 'offline' || to === 'disconnected') {
	      this.emit(DISCONNECT);
	    }
	  }
	  onpause() {
	    this.emit(OFFLINE);
	  }
	  onbeforeresume() {
	    this.emit(ONLINE);
	  }
	  onreconnect() {
	    this.emit(RECONNECT);
	  }
	  ondisconnected(event, from, to, attempt = 0) {
	    const delay = from === OFFLINE ? 0 : DEFAULT_RETRY_STRATEGY.call(null, attempt);
	    debug$3(`schedule attempt=${attempt} delay=${delay}`);
	    this.emit(SCHEDULE, attempt, delay);
	    if (this.__scheduledRetry) {
	      clearTimeout(this.__scheduledRetry);
	    }
	    this.__scheduledRetry = setTimeout(() => {
	      if (this.is('disconnected')) {
	        this.retry(attempt);
	      }
	    }, delay);
	  }
	  onretry(event, from, to, attempt = 0) {
	    this.emit(RETRY, attempt);
	    this._open().then(() => this.can('reconnect') && this.reconnect(), () => this.can('fail') && this.fail(attempt + 1));
	  }
	  onerror(event, from, to, error) {
	    this.emit(ERROR, error);
	  }
	  onclose() {
	    if (global$1.removeEventListener) {
	      if (this.__pause) global$1.removeEventListener('offline', this.__pause);
	      if (this.__resume) global$1.removeEventListener('online', this.__resume);
	    }
	  }
	  checkConnectionAvailability(name = 'API') {
	    if (!this.is('connected')) {
	      const currentState = this.current;
	      console.warn(`${name} should not be called when the connection is ${currentState}`);
	      if (this.is('disconnected') || this.is('reconnecting')) {
	        console.warn('disconnect and reconnect event should be handled to avoid such calls.');
	      }
	      throw new Error('Connection unavailable');
	    }
	  }

	  // jsdoc-ignore-start
	  // jsdoc-ignore-end
	  _ping() {
	    debug$3('ping');
	    try {
	      this.ping();
	    } catch (error) {
	      console.warn(`websocket ping error: ${error.message}`);
	    }
	  }
	  ping() {
	    if (this._ws.ping) {
	      this._ws.ping();
	    } else {
	      console.warn(`The WebSocket implement does not support sending ping frame.
        Override ping method to use application defined ping/pong mechanism.`);
	    }
	  }
	  _postponeTimeoutTimer() {
	    debug$3('_postponeTimeoutTimer');
	    this._clearTimeoutTimers();
	    this._timeoutTimer = setTimeout(() => {
	      debug$3('timeout');
	      this.disconnect();
	    }, TIMEOUT_TIME);
	  }
	  _clearTimeoutTimers() {
	    if (this._timeoutTimer) {
	      clearTimeout(this._timeoutTimer);
	    }
	  }
	  _startConnectionKeeper() {
	    debug$3('start connection keeper');
	    this._heartbeatTimer = setInterval(this._ping.bind(this), HEARTBEAT_TIME);
	    const addListener = this._ws.addListener || this._ws.addEventListener;
	    if (!addListener) {
	      debug$3('connection keeper disabled due to the lack of #addEventListener.');
	      return;
	    }
	    addListener.call(this._ws, 'message', this.__postponeTimeoutTimer);
	    addListener.call(this._ws, 'pong', this.__postponeTimeoutTimer);
	    this._postponeTimeoutTimer();
	  }
	  _stopConnectionKeeper() {
	    debug$3('stop connection keeper');
	    // websockets/ws#489
	    const removeListener = this._ws.removeListener || this._ws.removeEventListener;
	    if (removeListener) {
	      removeListener.call(this._ws, 'message', this.__postponeTimeoutTimer);
	      removeListener.call(this._ws, 'pong', this.__postponeTimeoutTimer);
	      this._clearTimeoutTimers();
	    }
	    if (this._heartbeatTimer) {
	      clearInterval(this._heartbeatTimer);
	    }
	  }
	  _handleClose(event) {
	    debug$3(`ws closed [${event.code}] ${event.reason}`);
	    // socket closed manually, ignore close event.
	    if (this.isFinished()) return;
	    this.handleClose(event);
	  }
	  handleClose() {
	    // reconnect
	    this.disconnect();
	  }

	  // jsdoc-ignore-start
	  // jsdoc-ignore-end
	  send(data) {
	    debug$3('send', data);
	    this._ws.send(data);
	  }
	  _handleMessage(event) {
	    debug$3('message', event.data);
	    this.handleMessage(event.data);
	  }
	  handleMessage(message) {
	    this.emit(MESSAGE, message);
	  }
	}, (_applyDecoratedDescriptor(_class.prototype, "_ping", [requireConnected], Object.getOwnPropertyDescriptor(_class.prototype, "_ping"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "send", [requireConnected], Object.getOwnPropertyDescriptor(_class.prototype, "send"), _class.prototype)), _class);
	stateMachine.create({
	  target: WebSocketPlus.prototype,
	  initial: {
	    state: 'initialized',
	    event: 'init',
	    defer: true
	  },
	  terminal: 'closed',
	  events: [{
	    name: 'open',
	    from: 'initialized',
	    to: 'connected'
	  }, {
	    name: 'disconnect',
	    from: 'connected',
	    to: 'disconnected'
	  }, {
	    name: 'retry',
	    from: 'disconnected',
	    to: 'reconnecting'
	  }, {
	    name: 'fail',
	    from: 'reconnecting',
	    to: 'disconnected'
	  }, {
	    name: 'reconnect',
	    from: 'reconnecting',
	    to: 'connected'
	  }, {
	    name: 'pause',
	    from: ['connected', 'disconnected', 'reconnecting'],
	    to: 'offline'
	  }, {}, {
	    name: 'resume',
	    from: 'offline',
	    to: 'disconnected'
	  }, {
	    name: 'close',
	    from: ['connected', 'disconnected', 'reconnecting', 'offline'],
	    to: 'closed'
	  }, {
	    name: 'throw',
	    from: '*',
	    to: 'error'
	  }]
	});

	const error = Object.freeze({
	  1000: {
	    name: 'CLOSE_NORMAL'
	  },
	  1006: {
	    name: 'CLOSE_ABNORMAL'
	  },
	  4100: {
	    name: 'APP_NOT_AVAILABLE',
	    message: 'App not exists or realtime message service is disabled.'
	  },
	  4102: {
	    name: 'SIGNATURE_FAILED',
	    message: 'Login signature mismatch.'
	  },
	  4103: {
	    name: 'INVALID_LOGIN',
	    message: 'Malformed clientId.'
	  },
	  4105: {
	    name: 'SESSION_REQUIRED',
	    message: 'Message sent before session opened.'
	  },
	  4107: {
	    name: 'READ_TIMEOUT'
	  },
	  4108: {
	    name: 'LOGIN_TIMEOUT'
	  },
	  4109: {
	    name: 'FRAME_TOO_LONG'
	  },
	  4110: {
	    name: 'INVALID_ORIGIN',
	    message: 'Access denied by domain whitelist.'
	  },
	  4111: {
	    name: 'SESSION_CONFLICT'
	  },
	  4112: {
	    name: 'SESSION_TOKEN_EXPIRED'
	  },
	  4113: {
	    name: 'APP_QUOTA_EXCEEDED',
	    message: 'The daily active users limit exceeded.'
	  },
	  4116: {
	    name: 'MESSAGE_SENT_QUOTA_EXCEEDED',
	    message: 'Command sent too fast.'
	  },
	  4200: {
	    name: 'INTERNAL_ERROR',
	    message: 'Internal error, please contact LeanCloud for support.'
	  },
	  4301: {
	    name: 'CONVERSATION_API_FAILED',
	    message: 'Upstream Conversatoin API failed, see error.detail for details.'
	  },
	  4302: {
	    name: 'CONVERSATION_SIGNATURE_FAILED',
	    message: 'Conversation action signature mismatch.'
	  },
	  4303: {
	    name: 'CONVERSATION_NOT_FOUND'
	  },
	  4304: {
	    name: 'CONVERSATION_FULL'
	  },
	  4305: {
	    name: 'CONVERSATION_REJECTED_BY_APP',
	    message: 'Conversation action rejected by hook.'
	  },
	  4306: {
	    name: 'CONVERSATION_UPDATE_FAILED'
	  },
	  4307: {
	    name: 'CONVERSATION_READ_ONLY'
	  },
	  4308: {
	    name: 'CONVERSATION_NOT_ALLOWED'
	  },
	  4309: {
	    name: 'CONVERSATION_UPDATE_REJECTED',
	    message: 'Conversation update rejected because the client is not a member.'
	  },
	  4310: {
	    name: 'CONVERSATION_QUERY_FAILED',
	    message: 'Conversation query failed because it is too expansive.'
	  },
	  4311: {
	    name: 'CONVERSATION_LOG_FAILED'
	  },
	  4312: {
	    name: 'CONVERSATION_LOG_REJECTED',
	    message: 'Message query rejected because the client is not a member of the conversation.'
	  },
	  4313: {
	    name: 'SYSTEM_CONVERSATION_REQUIRED'
	  },
	  4314: {
	    name: 'NORMAL_CONVERSATION_REQUIRED'
	  },
	  4315: {
	    name: 'CONVERSATION_BLACKLISTED',
	    message: 'Blacklisted in the conversation.'
	  },
	  4316: {
	    name: 'TRANSIENT_CONVERSATION_REQUIRED'
	  },
	  4317: {
	    name: 'CONVERSATION_MEMBERSHIP_REQUIRED'
	  },
	  4318: {
	    name: 'CONVERSATION_API_QUOTA_EXCEEDED',
	    message: 'LeanCloud API quota exceeded. You may upgrade your plan.'
	  },
	  4323: {
	    name: 'TEMPORARY_CONVERSATION_EXPIRED',
	    message: 'Temporary conversation expired or does not exist.'
	  },
	  4401: {
	    name: 'INVALID_MESSAGING_TARGET',
	    message: 'Conversation does not exist or client is not a member.'
	  },
	  4402: {
	    name: 'MESSAGE_REJECTED_BY_APP',
	    message: 'Message rejected by hook.'
	  },
	  4403: {
	    name: 'MESSAGE_OWNERSHIP_REQUIRED'
	  },
	  4404: {
	    name: 'MESSAGE_NOT_FOUND'
	  },
	  4405: {
	    name: 'MESSAGE_UPDATE_REJECTED_BY_APP',
	    message: 'Message update rejected by hook.'
	  },
	  4406: {
	    name: 'MESSAGE_EDIT_DISABLED'
	  },
	  4407: {
	    name: 'MESSAGE_RECALL_DISABLED'
	  },
	  5130: {
	    name: 'OWNER_PROMOTION_NOT_ALLOWED',
	    message: "Updating a member's role to owner is not allowed."
	  }
	});
	const ErrorCode = Object.freeze(Object.keys(error).reduce((result, code) => Object.assign(result, {
	  [error[code].name]: Number(code)
	}), {}));
	const createError = ({
	  code,
	  reason,
	  appCode,
	  detail,
	  error: errorMessage
	}) => {
	  let message = reason || detail || errorMessage;
	  let name = reason;
	  if (!message && error[code]) {
	    ({
	      name
	    } = error[code]);
	    message = error[code].message || name;
	  }
	  if (!message) {
	    message = `Unknow Error: ${code}`;
	  }
	  const err = new Error(message);
	  return Object.assign(err, {
	    code,
	    appCode,
	    detail,
	    name
	  });
	};

	const debug$4 = browser('LC:Connection');
	const COMMAND_TIMEOUT = 20000;
	const EXPIRE = Symbol('expire');
	const isIdempotentCommand = command => !(command.cmd === CommandType.direct || command.cmd === CommandType.session && command.op === OpType.open || command.cmd === CommandType.conv && (command.op === OpType.start || command.op === OpType.update || command.op === OpType.members));
	class Connection extends WebSocketPlus {
	  constructor(getUrl, {
	    format,
	    version
	  }) {
	    debug$4('initializing Connection');
	    const protocolString = `lc.${format}.${version}`;
	    super(getUrl, protocolString);
	    this._protocolFormat = format;
	    this._commands = {};
	    this._serialId = 0;
	  }
	  async send(command, waitingForRespond = true) {
	    let buffer;
	    let serialId;
	    if (waitingForRespond) {
	      if (isIdempotentCommand(command)) {
	        buffer = command.toArrayBuffer();
	        const duplicatedCommand = values_1(this._commands).find(({
	          buffer: targetBuffer,
	          command: targetCommand
	        }) => targetCommand.cmd === command.cmd && targetCommand.op === command.op && equalBuffer(targetBuffer, buffer));
	        if (duplicatedCommand) {
	          console.warn(`Duplicated command [cmd:${command.cmd} op:${command.op}] is throttled.`);
	          return duplicatedCommand.promise;
	        }
	      }
	      this._serialId += 1;
	      serialId = this._serialId;
	      command.i = serialId; // eslint-disable-line no-param-reassign
	    }

	    if (debug$4.enabled) debug$4('↑ %O sent', trim(command));
	    let message;
	    if (this._protocolFormat === 'proto2base64') {
	      message = command.toBase64();
	    } else if (command.toArrayBuffer) {
	      message = command.toArrayBuffer();
	    }
	    if (!message) {
	      throw new TypeError(`${command} is not a GenericCommand`);
	    }
	    super.send(message);
	    if (!waitingForRespond) return undefined;
	    const promise = new Promise((resolve, reject) => {
	      this._commands[serialId] = {
	        command,
	        buffer,
	        resolve,
	        reject,
	        timeout: setTimeout(() => {
	          if (this._commands[serialId]) {
	            if (debug$4.enabled) debug$4('✗ %O timeout', trim(command));
	            reject(createError({
	              error: `Command Timeout [cmd:${command.cmd} op:${command.op}]`,
	              name: 'COMMAND_TIMEOUT'
	            }));
	            delete this._commands[serialId];
	          }
	        }, COMMAND_TIMEOUT)
	      };
	    });
	    this._commands[serialId].promise = promise;
	    return promise;
	  }
	  handleMessage(msg) {
	    let message;
	    try {
	      message = GenericCommand.decode(msg);
	      if (debug$4.enabled) debug$4('↓ %O received', trim(message));
	    } catch (e) {
	      console.warn('Decode message failed:', e.message, msg);
	      return;
	    }
	    const serialId = message.i;
	    if (serialId) {
	      if (this._commands[serialId]) {
	        clearTimeout(this._commands[serialId].timeout);
	        if (message.cmd === CommandType.error) {
	          this._commands[serialId].reject(createError(message.errorMessage));
	        } else {
	          this._commands[serialId].resolve(message);
	        }
	        delete this._commands[serialId];
	      } else {
	        console.warn(`Unexpected command received with serialId [${serialId}],
         which have timed out or never been requested.`);
	      }
	    } else {
	      switch (message.cmd) {
	        case CommandType.error:
	          {
	            this.emit(ERROR, createError(message.errorMessage));
	            return;
	          }
	        case CommandType.goaway:
	          {
	            this.emit(EXPIRE);
	            return;
	          }
	        default:
	          {
	            this.emit(MESSAGE, message);
	          }
	      }
	    }
	  }
	  ping() {
	    return this.send(new GenericCommand({
	      cmd: CommandType.echo
	    })).catch(error => debug$4('ping failed:', error));
	  }
	}

	var promiseTimeout = createCommonjsModule(function (module) {

	  /**
	   * Local reference to TimeoutError
	   * @private
	   */
	  var TimeoutError;

	  /**
	   * Rejects a promise with a {@link TimeoutError} if it does not settle within
	   * the specified timeout.
	   *
	   * @param {Promise} promise The promise.
	   * @param {number} timeoutMillis Number of milliseconds to wait on settling.
	   * @returns {Promise} Either resolves/rejects with `promise`, or rejects with
	   *                   `TimeoutError`, whichever settles first.
	   */
	  var timeout = module.exports.timeout = function (promise, timeoutMillis) {
	    var error = new TimeoutError(),
	      timeout;
	    return Promise.race([promise, new Promise(function (resolve, reject) {
	      timeout = setTimeout(function () {
	        reject(error);
	      }, timeoutMillis);
	    })]).then(function (v) {
	      clearTimeout(timeout);
	      return v;
	    }, function (err) {
	      clearTimeout(timeout);
	      throw err;
	    });
	  };

	  /**
	   * Exception indicating that the timeout expired.
	   */
	  TimeoutError = module.exports.TimeoutError = function () {
	    Error.call(this);
	    this.stack = Error().stack;
	    this.message = 'Timeout';
	  };
	  TimeoutError.prototype = Object.create(Error.prototype);
	  TimeoutError.prototype.name = "TimeoutError";
	});
	var promiseTimeout_1 = promiseTimeout.timeout;
	var promiseTimeout_2 = promiseTimeout.TimeoutError;

	const debug$5 = browser('LC:request');
	var request = (({
	  method = 'GET',
	  url: _url,
	  query,
	  headers,
	  data,
	  timeout: time
	}) => {
	  let url = _url;
	  if (query) {
	    const queryString = Object.keys(query).map(key => {
	      const value = query[key];
	      if (value === undefined) return undefined;
	      const v = isPlainObject_1(value) ? JSON.stringify(value) : value;
	      return `${encodeURIComponent(key)}=${encodeURIComponent(v)}`;
	    }).filter(qs => qs).join('&');
	    url = `${url}?${queryString}`;
	  }
	  debug$5('Req: %O %O %O', method, url, {
	    headers,
	    data
	  });
	  const request = getAdapter('request');
	  const promise = request(url, {
	    method,
	    headers,
	    data
	  }).then(response => {
	    if (response.ok === false) {
	      const error = createError(response.data);
	      error.response = response;
	      throw error;
	    }
	    debug$5('Res: %O %O %O', url, response.status, response.data);
	    return response.data;
	  }).catch(error => {
	    if (error.response) {
	      debug$5('Error: %O %O %O', url, error.response.status, error.response.data);
	    }
	    throw error;
	  });
	  return time ? promiseTimeout_1(promise, time) : promise;
	});

	/* eslint-disable max-len */
	const checkType = middleware => param => {
	  const {
	    constructor
	  } = param;
	  return Promise.resolve(param).then(middleware).then(tap(result => {
	    if (result === undefined || result === null) {
	      // eslint-disable-next-line max-len
	      return console.warn(`Middleware[${middleware._pluginName || 'anonymous plugin'}:${middleware.name || 'anonymous middleware'}] param/return types not match. It returns ${result} while a ${param.constructor.name} expected.`);
	    }
	    if (!(result instanceof constructor)) {
	      // eslint-disable-next-line max-len
	      return console.warn(`Middleware[${middleware._pluginName || 'anonymous plugin'}:${middleware.name || 'anonymous middleware'}] param/return types not match. It returns a ${result.constructor.name} while a ${param.constructor.name} expected.`);
	    }
	    return 0;
	  }));
	};
	const applyDecorators = (decorators, target) => {
	  if (decorators) {
	    decorators.forEach(decorator => {
	      try {
	        decorator(target);
	      } catch (error) {
	        if (decorator._pluginName) {
	          error.message += `[${decorator._pluginName}]`;
	        }
	        throw error;
	      }
	    });
	  }
	};
	const applyMiddlewares = middlewares => target => ensureArray(middlewares).reduce((previousPromise, middleware) => previousPromise.then(checkType(middleware)).catch(error => {
	  if (middleware._pluginName) {
	    // eslint-disable-next-line no-param-reassign
	    error.message += `[${middleware._pluginName}]`;
	  }
	  throw error;
	}), Promise.resolve(target));
	const applyDispatcher = (dispatchers, payload) => ensureArray(dispatchers).reduce((resultPromise, dispatcher) => resultPromise.then(shouldDispatch => shouldDispatch === false ? false : dispatcher(...payload)).catch(error => {
	  if (dispatcher._pluginName) {
	    // eslint-disable-next-line no-param-reassign
	    error.message += `[${dispatcher._pluginName}]`;
	  }
	  throw error;
	}), Promise.resolve(true));

	var version = "5.0.0-rc.8";

	// eslint-disable-next-line max-classes-per-file
	const debug$6 = browser('LC:Realtime');
	const routerCache = new Cache('push-router');
	const initializedApp = {};
	class Realtime extends eventemitter3 {
	  /**
	   * @extends EventEmitter
	   * @param  {Object} options
	   * @param  {String} options.appId
	   * @param  {String} options.appKey （since 4.0.0）
	   * @param  {String|Object} [options.server] 指定服务器域名，中国节点应用此参数必填（since 4.0.0）
	   * @param  {Boolean} [options.noBinary=false] 设置 WebSocket 使用字符串格式收发消息（默认为二进制格式）。
	   *                                            适用于 WebSocket 实现不支持二进制数据格式的情况
	   * @param  {Boolean} [options.ssl=true] 使用 wss 进行连接
	   * @param  {String|String[]} [options.RTMServers] 指定私有部署的 RTM 服务器地址（since 4.0.0）
	   * @param  {Plugin[]} [options.plugins] 加载插件（since 3.1.0）
	   */
	  constructor({
	    plugins,
	    ...options
	  }) {
	    debug$6('initializing Realtime %s %O', version, options);
	    super();
	    const {
	      appId
	    } = options;
	    if (typeof appId !== 'string') {
	      throw new TypeError(`appId [${appId}] is not a string`);
	    }
	    if (initializedApp[appId]) {
	      throw new Error(`App [${appId}] is already initialized.`);
	    }
	    initializedApp[appId] = true;
	    if (typeof options.appKey !== 'string') {
	      throw new TypeError(`appKey [${options.appKey}] is not a string`);
	    }
	    if (isCNApp(appId)) {
	      if (!options.server) {
	        throw new TypeError(`server option is required for apps from CN region`);
	      }
	    }
	    this._options = {
	      appId: undefined,
	      appKey: undefined,
	      noBinary: false,
	      ssl: true,
	      RTMServerName: typeof process !== 'undefined' ? process.env.RTM_SERVER_NAME : undefined,
	      // undocumented on purpose, internal use only
	      ...options
	    };
	    this._cache = new Cache('endpoints');
	    const _this = internal(this);
	    _this.clients = new Set();
	    _this.pendingClients = new Set();
	    const mergedPlugins = [...ensureArray(Realtime.__preRegisteredPlugins), ...ensureArray(plugins)];
	    debug$6('Using plugins %o', mergedPlugins.map(plugin => plugin.name));
	    this._plugins = mergedPlugins.reduce((result, plugin) => {
	      Object.keys(plugin).forEach(hook => {
	        if ({}.hasOwnProperty.call(plugin, hook) && hook !== 'name') {
	          if (plugin.name) {
	            ensureArray(plugin[hook]).forEach(value => {
	              // eslint-disable-next-line no-param-reassign
	              value._pluginName = plugin.name;
	            });
	          }
	          // eslint-disable-next-line no-param-reassign
	          result[hook] = ensureArray(result[hook]).concat(plugin[hook]);
	        }
	      });
	      return result;
	    }, {});
	    // onRealtimeCreate hook
	    applyDecorators(this._plugins.onRealtimeCreate, this);
	  }
	  async _request({
	    method,
	    url: _url,
	    version = '1.1',
	    path,
	    query,
	    headers,
	    data
	  }) {
	    let url = _url;
	    if (!url) {
	      const {
	        appId,
	        server
	      } = this._options;
	      const {
	        api
	      } = await this.constructor._getServerUrls({
	        appId,
	        server
	      });
	      url = `${api}/${version}${path}`;
	    }
	    return request({
	      url,
	      method,
	      query,
	      headers: {
	        'X-LC-Id': this._options.appId,
	        'X-LC-Key': this._options.appKey,
	        ...headers
	      },
	      data
	    });
	  }
	  _open() {
	    if (this._openPromise) return this._openPromise;
	    let format = 'protobuf2';
	    if (this._options.noBinary) {
	      // 不发送 binary data，fallback to base64 string
	      format = 'proto2base64';
	    }
	    const version = 3;
	    const protocol = {
	      format,
	      version
	    };
	    this._openPromise = new Promise((resolve, reject) => {
	      debug$6('No connection established, create a new one.');
	      const connection = new Connection(() => this._getRTMServers(this._options), protocol);
	      connection.on(OPEN, () => resolve(connection)).on(ERROR, error => {
	        delete this._openPromise;
	        reject(error);
	      }).on(EXPIRE, async () => {
	        debug$6('Connection expired. Refresh endpoints.');
	        this._cache.set('endpoints', null, 0);
	        connection.urls = await this._getRTMServers(this._options);
	        connection.disconnect();
	      }).on(MESSAGE, this._dispatchCommand.bind(this));
	      /**
	       * 连接断开。
	       * 连接断开可能是因为 SDK 进入了离线状态（see {@link Realtime#event:OFFLINE}），或长时间没有收到服务器心跳。
	       * 连接断开后所有的网络操作都会失败，请在连接断开后禁用相关的 UI 元素。
	       * @event Realtime#DISCONNECT
	       */
	      /**
	       * 计划在一段时间后尝试重新连接
	       * @event Realtime#SCHEDULE
	       * @param {Number} attempt 尝试重连的次数
	       * @param {Number} delay 延迟的毫秒数
	       */
	      /**
	       * 正在尝试重新连接
	       * @event Realtime#RETRY
	       * @param {Number} attempt 尝试重连的次数
	       */
	      /**
	       * 连接恢复正常。
	       * 请重新启用在 {@link Realtime#event:DISCONNECT} 事件中禁用的相关 UI 元素
	       * @event Realtime#RECONNECT
	       */

	      /**
	       * 客户端连接断开
	       * @event IMClient#DISCONNECT
	       * @see Realtime#event:DISCONNECT
	       * @since 3.2.0
	       */
	      /**
	       * 计划在一段时间后尝试重新连接
	       * @event IMClient#SCHEDULE
	       * @param {Number} attempt 尝试重连的次数
	       * @param {Number} delay 延迟的毫秒数
	       * @since 3.2.0
	       */
	      /**
	       * 正在尝试重新连接
	       * @event IMClient#RETRY
	       * @param {Number} attempt 尝试重连的次数
	       * @since 3.2.0
	       */

	      /**
	       * 客户端进入离线状态。
	       * 这通常意味着网络已断开，或者 {@link Realtime#pause} 被调用
	       * @event Realtime#OFFLINE
	       * @since 3.4.0
	       */
	      /**
	       * 客户端恢复在线状态
	       * 这通常意味着网络已恢复，或者 {@link Realtime#resume} 被调用
	       * @event Realtime#ONLINE
	       * @since 3.4.0
	       */
	      /**
	       * 进入离线状态。
	       * 这通常意味着网络已断开，或者 {@link Realtime#pause} 被调用
	       * @event IMClient#OFFLINE
	       * @since 3.4.0
	       */
	      /**
	       * 恢复在线状态
	       * 这通常意味着网络已恢复，或者 {@link Realtime#resume} 被调用
	       * @event IMClient#ONLINE
	       * @since 3.4.0
	       */

	      // event proxy
	      [DISCONNECT, RECONNECT, RETRY, SCHEDULE, OFFLINE, ONLINE].forEach(event => connection.on(event, (...payload) => {
	        debug$6(`${event} event emitted. %o`, payload);
	        this.emit(event, ...payload);
	        if (event !== RECONNECT) {
	          internal(this).clients.forEach(client => {
	            client.emit(event, ...payload);
	          });
	        }
	      }));
	      // override handleClose
	      connection.handleClose = function handleClose(event) {
	        const isFatal = [ErrorCode.APP_NOT_AVAILABLE, ErrorCode.INVALID_LOGIN, ErrorCode.INVALID_ORIGIN].some(errorCode => errorCode === event.code);
	        if (isFatal) {
	          // in these cases, SDK should throw.
	          this.throw(createError(event));
	        } else {
	          // reconnect
	          this.disconnect();
	        }
	      };
	      internal(this).connection = connection;
	    });
	    return this._openPromise;
	  }
	  async _getRTMServers(options) {
	    if (options.RTMServers) return shuffle_1(ensureArray(options.RTMServers));
	    let info;
	    const cachedEndPoints = this._cache.get('endpoints');
	    if (cachedEndPoints) {
	      info = cachedEndPoints;
	    } else {
	      info = await this.constructor._fetchRTMServers(options);
	      const {
	        server,
	        secondary,
	        ttl
	      } = info;
	      if (typeof server !== 'string' && typeof secondary !== 'string' && typeof ttl !== 'number') {
	        throw new Error(`malformed RTM route response: ${JSON.stringify(info)}`);
	      }
	      this._cache.set('endpoints', info, info.ttl * 1000);
	    }
	    debug$6('endpoint info: %O', info);
	    return [info.server, info.secondary];
	  }
	  static async _getServerUrls({
	    appId,
	    server
	  }) {
	    debug$6('fetch server urls');
	    if (server) {
	      if (typeof server !== 'string') return server;
	      return {
	        RTMRouter: server,
	        api: server
	      };
	    }
	    const cachedRouter = routerCache.get(appId);
	    if (cachedRouter) return cachedRouter;
	    const defaultProtocol = 'https://';
	    return request({
	      url: 'https://app-router.com/2/route',
	      query: {
	        appId
	      },
	      timeout: 20000
	    }).then(tap(debug$6)).then(({
	      rtm_router_server: RTMRouterServer,
	      api_server: APIServer,
	      ttl = 3600
	    }) => {
	      if (!RTMRouterServer) {
	        throw new Error('rtm router not exists');
	      }
	      const serverUrls = {
	        RTMRouter: `${defaultProtocol}${RTMRouterServer}`,
	        api: `${defaultProtocol}${APIServer}`
	      };
	      routerCache.set(appId, serverUrls, ttl * 1000);
	      return serverUrls;
	    }).catch(() => {
	      const id = appId.slice(0, 8).toLowerCase();
	      const domain = 'lncldglobal.com';
	      return {
	        RTMRouter: `${defaultProtocol}${id}.rtm.${domain}`,
	        api: `${defaultProtocol}${id}.api.${domain}`
	      };
	    });
	  }
	  static _fetchRTMServers({
	    appId,
	    ssl,
	    server,
	    RTMServerName
	  }) {
	    debug$6('fetch endpoint info');
	    return this._getServerUrls({
	      appId,
	      server
	    }).then(tap(debug$6)).then(({
	      RTMRouter
	    }) => request({
	      url: `${RTMRouter}/v1/route`,
	      query: {
	        appId,
	        secure: ssl,
	        features: isWeapp ? 'wechat' : undefined,
	        server: RTMServerName,
	        _t: Date.now()
	      },
	      timeout: 20000
	    }).then(tap(debug$6)));
	  }
	  _close() {
	    if (this._openPromise) {
	      this._openPromise.then(connection => connection.close());
	    }
	    delete this._openPromise;
	  }

	  /**
	   * 手动进行重连。
	   * SDK 在网络出现异常时会自动按照一定的时间间隔尝试重连，调用该方法会立即尝试重连并重置重连尝试计数器。
	   * 只能在 `SCHEDULE` 事件之后，`RETRY` 事件之前调用，如果当前网络正常或者正在进行重连，调用该方法会抛异常。
	   */
	  retry() {
	    const {
	      connection
	    } = internal(this);
	    if (!connection) {
	      throw new Error('no connection established');
	    }
	    if (connection.cannot('retry')) {
	      throw new Error(`retrying not allowed when not disconnected. the connection is now ${connection.current}`);
	    }
	    return connection.retry();
	  }

	  /**
	   * 暂停，使 SDK 进入离线状态。
	   * 你可以在网络断开、应用进入后台等时刻调用该方法让 SDK 进入离线状态，离线状态下不会尝试重连。
	   * 在浏览器中 SDK 会自动监听网络变化，因此无需手动调用该方法。
	   *
	   * @since 3.4.0
	   * @see Realtime#event:OFFLINE
	   */
	  pause() {
	    // 这个方法常常在网络断开、进入后台时被调用，此时 connection 可能没有建立或者已经 close。
	    // 因此不像 retry，这个方法应该尽可能 loose
	    const {
	      connection
	    } = internal(this);
	    if (!connection) return;
	    if (connection.can('pause')) connection.pause();
	  }

	  /**
	   * 恢复在线状态。
	   * 你可以在网络恢复、应用回到前台等时刻调用该方法让 SDK 恢复在线状态，恢复在线状态后 SDK 会开始尝试重连。
	   *
	   * @since 3.4.0
	   * @see Realtime#event:ONLINE
	   */
	  resume() {
	    // 与 pause 一样，这个方法应该尽可能 loose
	    const {
	      connection
	    } = internal(this);
	    if (!connection) return;
	    if (connection.can('resume')) connection.resume();
	  }
	  _registerPending(value) {
	    internal(this).pendingClients.add(value);
	  }
	  _deregisterPending(client) {
	    internal(this).pendingClients.delete(client);
	  }
	  _register(client) {
	    internal(this).clients.add(client);
	  }
	  _deregister(client) {
	    const _this = internal(this);
	    _this.clients.delete(client);
	    if (_this.clients.size + _this.pendingClients.size === 0) {
	      this._close();
	    }
	  }
	  _dispatchCommand(command) {
	    return applyDispatcher(this._plugins.beforeCommandDispatch, [command, this]).then(shouldDispatch => {
	      // no plugin handled this command
	      if (shouldDispatch) return debug$6('[WARN] Unexpected message received: %O', trim(command));
	      return false;
	    });
	  }
	}

	const polyfilledPromise = Promise;

	var rngBrowser = createCommonjsModule(function (module) {
	// Unique ID creation requires a high quality random # generator.  In the
	// browser this is a little complicated due to unknown quality of Math.random()
	// and inconsistent support for the `crypto` API.  We do the best we can via
	// feature-detection

	// getRandomValues needs to be invoked in a context where "this" is a Crypto
	// implementation. Also, find the complete implementation of crypto on IE11.
	var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
	                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

	if (getRandomValues) {
	  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
	  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

	  module.exports = function whatwgRNG() {
	    getRandomValues(rnds8);
	    return rnds8;
	  };
	} else {
	  // Math.random()-based (RNG)
	  //
	  // If all else fails, use Math.random().  It's fast, but is of unspecified
	  // quality.
	  var rnds = new Array(16);

	  module.exports = function mathRNG() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }

	    return rnds;
	  };
	}
	});

	/**
	 * Convert array of 16 byte values to UUID string format of the form:
	 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
	 */
	var byteToHex = [];
	for (var i = 0; i < 256; ++i) {
	  byteToHex[i] = (i + 0x100).toString(16).substr(1);
	}

	function bytesToUuid(buf, offset) {
	  var i = offset || 0;
	  var bth = byteToHex;
	  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
	  return ([bth[buf[i++]], bth[buf[i++]], 
		bth[buf[i++]], bth[buf[i++]], '-',
		bth[buf[i++]], bth[buf[i++]], '-',
		bth[buf[i++]], bth[buf[i++]], '-',
		bth[buf[i++]], bth[buf[i++]], '-',
		bth[buf[i++]], bth[buf[i++]],
		bth[buf[i++]], bth[buf[i++]],
		bth[buf[i++]], bth[buf[i++]]]).join('');
	}

	var bytesToUuid_1 = bytesToUuid;

	function v4(options, buf, offset) {
	  var i = buf && offset || 0;

	  if (typeof(options) == 'string') {
	    buf = options === 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};

	  var rnds = options.random || (options.rng || rngBrowser)();

	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = (rnds[6] & 0x0f) | 0x40;
	  rnds[8] = (rnds[8] & 0x3f) | 0x80;

	  // Copy bytes to buffer, if provided
	  if (buf) {
	    for (var ii = 0; ii < 16; ++ii) {
	      buf[i + ii] = rnds[ii];
	    }
	  }

	  return buf || bytesToUuid_1(rnds);
	}

	var v4_1 = v4;

	var base64Arraybuffer = createCommonjsModule(function (module, exports) {
	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */
	(function(){

	  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

	  // Use a lookup table to find the index.
	  var lookup = new Uint8Array(256);
	  for (var i = 0; i < chars.length; i++) {
	    lookup[chars.charCodeAt(i)] = i;
	  }

	  exports.encode = function(arraybuffer) {
	    var bytes = new Uint8Array(arraybuffer),
	    i, len = bytes.length, base64 = "";

	    for (i = 0; i < len; i+=3) {
	      base64 += chars[bytes[i] >> 2];
	      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
	      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
	      base64 += chars[bytes[i + 2] & 63];
	    }

	    if ((len % 3) === 2) {
	      base64 = base64.substring(0, base64.length - 1) + "=";
	    } else if (len % 3 === 1) {
	      base64 = base64.substring(0, base64.length - 2) + "==";
	    }

	    return base64;
	  };

	  exports.decode =  function(base64) {
	    var bufferLength = base64.length * 0.75,
	    len = base64.length, i, p = 0,
	    encoded1, encoded2, encoded3, encoded4;

	    if (base64[base64.length - 1] === "=") {
	      bufferLength--;
	      if (base64[base64.length - 2] === "=") {
	        bufferLength--;
	      }
	    }

	    var arraybuffer = new ArrayBuffer(bufferLength),
	    bytes = new Uint8Array(arraybuffer);

	    for (i = 0; i < len; i+=4) {
	      encoded1 = lookup[base64.charCodeAt(i)];
	      encoded2 = lookup[base64.charCodeAt(i+1)];
	      encoded3 = lookup[base64.charCodeAt(i+2)];
	      encoded4 = lookup[base64.charCodeAt(i+3)];

	      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
	      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
	      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
	    }

	    return arraybuffer;
	  };
	})();
	});
	var base64Arraybuffer_1 = base64Arraybuffer.encode;
	var base64Arraybuffer_2 = base64Arraybuffer.decode;

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	var eq_1 = eq;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq_1(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var _assocIndexOf = assocIndexOf;

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	var _listCacheDelete = listCacheDelete;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return _assocIndexOf(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	var _listCacheSet = listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = _listCacheClear;
	ListCache.prototype['delete'] = _listCacheDelete;
	ListCache.prototype.get = _listCacheGet;
	ListCache.prototype.has = _listCacheHas;
	ListCache.prototype.set = _listCacheSet;

	var _ListCache = ListCache;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new _ListCache;
	  this.size = 0;
	}

	var _stackClear = stackClear;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	var _stackDelete = stackDelete;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	var _stackGet = stackGet;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	var _stackHas = stackHas;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = _root['__core-js_shared__'];

	var _coreJsData = coreJsData;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	var _isMasked = isMasked;

	/** Used for built-in method references. */
	var funcProto$1 = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString$1.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	var _toSource = toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto$2 = Function.prototype,
	    objectProto$7 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$2 = funcProto$2.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString$2.call(hasOwnProperty$5).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject_1(value) || _isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(_toSource(value));
	}

	var _baseIsNative = baseIsNative;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = _getValue(object, key);
	  return _baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative;

	/* Built-in method references that are verified to be native. */
	var Map = _getNative(_root, 'Map');

	var _Map = Map;

	/* Built-in method references that are verified to be native. */
	var nativeCreate = _getNative(Object, 'create');

	var _nativeCreate = nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (_nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty$6.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet;

	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$7.call(data, key);
	}

	var _hashHas = hashHas;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var _hashSet = hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = _hashClear;
	Hash.prototype['delete'] = _hashDelete;
	Hash.prototype.get = _hashGet;
	Hash.prototype.has = _hashHas;
	Hash.prototype.set = _hashSet;

	var _Hash = Hash;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new _Hash,
	    'map': new (_Map || _ListCache),
	    'string': new _Hash
	  };
	}

	var _mapCacheClear = mapCacheClear;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	var _isKeyable = isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return _isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	var _getMapData = getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = _getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return _getMapData(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return _getMapData(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = _getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = _mapCacheClear;
	MapCache.prototype['delete'] = _mapCacheDelete;
	MapCache.prototype.get = _mapCacheGet;
	MapCache.prototype.has = _mapCacheHas;
	MapCache.prototype.set = _mapCacheSet;

	var _MapCache = MapCache;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof _ListCache) {
	    var pairs = data.__data__;
	    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new _MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	var _stackSet = stackSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new _ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = _stackClear;
	Stack.prototype['delete'] = _stackDelete;
	Stack.prototype.get = _stackGet;
	Stack.prototype.has = _stackHas;
	Stack.prototype.set = _stackSet;

	var _Stack = Stack;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED$2);
	  return this;
	}

	var _setCacheAdd = setCacheAdd;

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	var _setCacheHas = setCacheHas;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new _MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
	SetCache.prototype.has = _setCacheHas;

	var _SetCache = SetCache;

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	var _arraySome = arraySome;

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	var _cacheHas = cacheHas;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Check that cyclic values are equal.
	  var arrStacked = stack.get(array);
	  var othStacked = stack.get(other);
	  if (arrStacked && othStacked) {
	    return arrStacked == other && othStacked == array;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!_arraySome(other, function(othValue, othIndex) {
	            if (!_cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	var _equalArrays = equalArrays;

	/** Built-in value references. */
	var Uint8Array$1 = _root.Uint8Array;

	var _Uint8Array = Uint8Array$1;

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	var _mapToArray = mapToArray;

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	var _setToArray = setToArray;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$1 = 1,
	    COMPARE_UNORDERED_FLAG$1 = 2;

	/** `Object#toString` result references. */
	var boolTag$1 = '[object Boolean]',
	    dateTag$1 = '[object Date]',
	    errorTag$1 = '[object Error]',
	    mapTag$1 = '[object Map]',
	    numberTag$1 = '[object Number]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$1 = '[object Set]',
	    stringTag$1 = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag$1 = '[object ArrayBuffer]',
	    dataViewTag$1 = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag$1:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag$1:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag$1:
	    case dateTag$1:
	    case numberTag$1:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq_1(+object, +other);

	    case errorTag$1:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag$1:
	    case stringTag$1:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag$1:
	      var convert = _mapToArray;

	    case setTag$1:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
	      convert || (convert = _setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG$1;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	var _equalByTag = equalByTag;

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	var _arrayPush = arrayPush;

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
	}

	var _baseGetAllKeys = baseGetAllKeys;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	var _arrayFilter = arrayFilter;

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	var stubArray_1 = stubArray;

	/** Used for built-in method references. */
	var objectProto$a = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable$1.call(object, symbol);
	  });
	};

	var _getSymbols = getSymbols;

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return _baseGetAllKeys(object, keys_1, _getSymbols);
	}

	var _getAllKeys = getAllKeys;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$2 = 1;

	/** Used for built-in method references. */
	var objectProto$b = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$8 = objectProto$b.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
	      objProps = _getAllKeys(object),
	      objLength = objProps.length,
	      othProps = _getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty$8.call(other, key))) {
	      return false;
	    }
	  }
	  // Check that cyclic values are equal.
	  var objStacked = stack.get(object);
	  var othStacked = stack.get(other);
	  if (objStacked && othStacked) {
	    return objStacked == other && othStacked == object;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	var _equalObjects = equalObjects;

	/* Built-in method references that are verified to be native. */
	var DataView = _getNative(_root, 'DataView');

	var _DataView = DataView;

	/* Built-in method references that are verified to be native. */
	var Promise$1 = _getNative(_root, 'Promise');

	var _Promise = Promise$1;

	/* Built-in method references that are verified to be native. */
	var Set$1 = _getNative(_root, 'Set');

	var _Set = Set$1;

	/* Built-in method references that are verified to be native. */
	var WeakMap$1 = _getNative(_root, 'WeakMap');

	var _WeakMap = WeakMap$1;

	/** `Object#toString` result references. */
	var mapTag$2 = '[object Map]',
	    objectTag$2 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag$2 = '[object Set]',
	    weakMapTag$1 = '[object WeakMap]';

	var dataViewTag$2 = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = _toSource(_DataView),
	    mapCtorString = _toSource(_Map),
	    promiseCtorString = _toSource(_Promise),
	    setCtorString = _toSource(_Set),
	    weakMapCtorString = _toSource(_WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = _baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
	    (_Map && getTag(new _Map) != mapTag$2) ||
	    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
	    (_Set && getTag(new _Set) != setTag$2) ||
	    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
	  getTag = function(value) {
	    var result = _baseGetTag(value),
	        Ctor = result == objectTag$2 ? value.constructor : undefined,
	        ctorString = Ctor ? _toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag$2;
	        case mapCtorString: return mapTag$2;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag$2;
	        case weakMapCtorString: return weakMapTag$1;
	      }
	    }
	    return result;
	  };
	}

	var _getTag = getTag;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$3 = 1;

	/** `Object#toString` result references. */
	var argsTag$2 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    objectTag$3 = '[object Object]';

	/** Used for built-in method references. */
	var objectProto$c = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$9 = objectProto$c.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray_1(object),
	      othIsArr = isArray_1(other),
	      objTag = objIsArr ? arrayTag$1 : _getTag(object),
	      othTag = othIsArr ? arrayTag$1 : _getTag(other);

	  objTag = objTag == argsTag$2 ? objectTag$3 : objTag;
	  othTag = othTag == argsTag$2 ? objectTag$3 : othTag;

	  var objIsObj = objTag == objectTag$3,
	      othIsObj = othTag == objectTag$3,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer_1(object)) {
	    if (!isBuffer_1(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new _Stack);
	    return (objIsArr || isTypedArray_1(object))
	      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
	    var objIsWrapped = objIsObj && hasOwnProperty$9.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty$9.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new _Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new _Stack);
	  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	var _baseIsEqualDeep = baseIsEqualDeep;

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
	    return value !== value && other !== other;
	  }
	  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	var _baseIsEqual = baseIsEqual;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$4 = 1,
	    COMPARE_UNORDERED_FLAG$2 = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new _Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	var _baseIsMatch = baseIsMatch;

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject_1(value);
	}

	var _isStrictComparable = isStrictComparable;

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys_1(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, _isStrictComparable(value)];
	  }
	  return result;
	}

	var _getMatchData = getMatchData;

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	var _matchesStrictComparable = matchesStrictComparable;

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = _getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || _baseIsMatch(object, source, matchData);
	  };
	}

	var _baseMatches = baseMatches;

	/** `Object#toString` result references. */
	var symbolTag$1 = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag$1);
	}

	var isSymbol_1 = isSymbol;

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray_1(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol_1(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	var _isKey = isKey;

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || _MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = _MapCache;

	var memoize_1 = memoize;

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize_1(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	var _memoizeCapped = memoizeCapped;

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = _memoizeCapped(function(string) {
	  var result = [];
	  if (string.charCodeAt(0) === 46 /* . */) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, subString) {
	    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	var _stringToPath = stringToPath;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
	    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray_1(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return _arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol_1(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	var _baseToString = baseToString;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : _baseToString(value);
	}

	var toString_1 = toString;

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray_1(value)) {
	    return value;
	  }
	  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
	}

	var _castPath = castPath;

	/** Used as references for various `Number` constants. */
	var INFINITY$1 = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol_1(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
	}

	var _toKey = toKey;

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = _castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[_toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	var _baseGet = baseGet;

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : _baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	var get_1 = get;

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	var _baseHasIn = baseHasIn;

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = _castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = _toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength_1(length) && _isIndex(key, length) &&
	    (isArray_1(object) || isArguments_1(object));
	}

	var _hasPath = hasPath;

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && _hasPath(object, path, _baseHasIn);
	}

	var hasIn_1 = hasIn;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$5 = 1,
	    COMPARE_UNORDERED_FLAG$3 = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (_isKey(path) && _isStrictComparable(srcValue)) {
	    return _matchesStrictComparable(_toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get_1(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn_1(object, path)
	      : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
	  };
	}

	var _baseMatchesProperty = baseMatchesProperty;

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	var identity_1 = identity;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	var _baseProperty = baseProperty;

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return _baseGet(object, path);
	  };
	}

	var _basePropertyDeep = basePropertyDeep;

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
	}

	var property_1 = property;

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity_1;
	  }
	  if (typeof value == 'object') {
	    return isArray_1(value)
	      ? _baseMatchesProperty(value[0], value[1])
	      : _baseMatches(value);
	  }
	  return property_1(value);
	}

	var _baseIteratee = baseIteratee;

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? array[length - 1] : undefined;
	}

	var last_1 = last;

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	var _baseSlice = baseSlice;

	/**
	 * Gets the parent value at `path` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path to get the parent value of.
	 * @returns {*} Returns the parent value.
	 */
	function parent(object, path) {
	  return path.length < 2 ? object : _baseGet(object, _baseSlice(path, 0, -1));
	}

	var _parent = parent;

	/**
	 * The base implementation of `_.unset`.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The property path to unset.
	 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	 */
	function baseUnset(object, path) {
	  path = _castPath(path, object);
	  object = _parent(object, path);
	  return object == null || delete object[_toKey(last_1(path))];
	}

	var _baseUnset = baseUnset;

	/** Used for built-in method references. */
	var arrayProto$1 = Array.prototype;

	/** Built-in value references. */
	var splice$1 = arrayProto$1.splice;

	/**
	 * The base implementation of `_.pullAt` without support for individual
	 * indexes or capturing the removed elements.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {number[]} indexes The indexes of elements to remove.
	 * @returns {Array} Returns `array`.
	 */
	function basePullAt(array, indexes) {
	  var length = array ? indexes.length : 0,
	      lastIndex = length - 1;

	  while (length--) {
	    var index = indexes[length];
	    if (length == lastIndex || index !== previous) {
	      var previous = index;
	      if (_isIndex(index)) {
	        splice$1.call(array, index, 1);
	      } else {
	        _baseUnset(array, index);
	      }
	    }
	  }
	  return array;
	}

	var _basePullAt = basePullAt;

	/**
	 * Removes all elements from `array` that `predicate` returns truthy for
	 * and returns an array of the removed elements. The predicate is invoked
	 * with three arguments: (value, index, array).
	 *
	 * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
	 * to pull elements from an array by value.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.0.0
	 * @category Array
	 * @param {Array} array The array to modify.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @returns {Array} Returns the new array of removed elements.
	 * @example
	 *
	 * var array = [1, 2, 3, 4];
	 * var evens = _.remove(array, function(n) {
	 *   return n % 2 == 0;
	 * });
	 *
	 * console.log(array);
	 * // => [1, 3]
	 *
	 * console.log(evens);
	 * // => [2, 4]
	 */
	function remove(array, predicate) {
	  var result = [];
	  if (!(array && array.length)) {
	    return result;
	  }
	  var index = -1,
	      indexes = [],
	      length = array.length;

	  predicate = _baseIteratee(predicate);
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result.push(value);
	      indexes.push(index);
	    }
	  }
	  _basePullAt(array, indexes);
	  return result;
	}

	var remove_1 = remove;

	/** `Object#toString` result references. */
	var mapTag$3 = '[object Map]',
	    setTag$3 = '[object Set]';

	/** Used for built-in method references. */
	var objectProto$d = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$a = objectProto$d.hasOwnProperty;

	/**
	 * Checks if `value` is an empty object, collection, map, or set.
	 *
	 * Objects are considered empty if they have no own enumerable string keyed
	 * properties.
	 *
	 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	 * jQuery-like collections are considered empty if they have a `length` of `0`.
	 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	 * @example
	 *
	 * _.isEmpty(null);
	 * // => true
	 *
	 * _.isEmpty(true);
	 * // => true
	 *
	 * _.isEmpty(1);
	 * // => true
	 *
	 * _.isEmpty([1, 2, 3]);
	 * // => false
	 *
	 * _.isEmpty({ 'a': 1 });
	 * // => false
	 */
	function isEmpty(value) {
	  if (value == null) {
	    return true;
	  }
	  if (isArrayLike_1(value) &&
	      (isArray_1(value) || typeof value == 'string' || typeof value.splice == 'function' ||
	        isBuffer_1(value) || isTypedArray_1(value) || isArguments_1(value))) {
	    return !value.length;
	  }
	  var tag = _getTag(value);
	  if (tag == mapTag$3 || tag == setTag$3) {
	    return !value.size;
	  }
	  if (_isPrototype(value)) {
	    return !_baseKeys(value).length;
	  }
	  for (var key in value) {
	    if (hasOwnProperty$a.call(value, key)) {
	      return false;
	    }
	  }
	  return true;
	}

	var isEmpty_1 = isEmpty;

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	var _arrayEach = arrayEach;

	var defineProperty = (function() {
	  try {
	    var func = _getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	var _defineProperty = defineProperty;

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && _defineProperty) {
	    _defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	var _baseAssignValue = baseAssignValue;

	/** Used for built-in method references. */
	var objectProto$e = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$b = objectProto$e.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty$b.call(object, key) && eq_1(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    _baseAssignValue(object, key, value);
	  }
	}

	var _assignValue = assignValue;

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      _baseAssignValue(object, key, newValue);
	    } else {
	      _assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	var _copyObject = copyObject;

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && _copyObject(source, keys_1(source), object);
	}

	var _baseAssign = baseAssign;

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _nativeKeysIn = nativeKeysIn;

	/** Used for built-in method references. */
	var objectProto$f = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$c = objectProto$f.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject_1(object)) {
	    return _nativeKeysIn(object);
	  }
	  var isProto = _isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty$c.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeysIn = baseKeysIn;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
	}

	var keysIn_1 = keysIn;

	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssignIn(object, source) {
	  return object && _copyObject(source, keysIn_1(source), object);
	}

	var _baseAssignIn = baseAssignIn;

	var _cloneBuffer = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports =  exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? _root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;
	});

	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return _copyObject(source, _getSymbols(source), object);
	}

	var _copySymbols = copySymbols;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
	  var result = [];
	  while (object) {
	    _arrayPush(result, _getSymbols(object));
	    object = _getPrototype(object);
	  }
	  return result;
	};

	var _getSymbolsIn = getSymbolsIn;

	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbolsIn(source, object) {
	  return _copyObject(source, _getSymbolsIn(source), object);
	}

	var _copySymbolsIn = copySymbolsIn;

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
	}

	var _getAllKeysIn = getAllKeysIn;

	/** Used for built-in method references. */
	var objectProto$g = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$d = objectProto$g.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty$d.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	var _initCloneArray = initCloneArray;

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
	  return result;
	}

	var _cloneArrayBuffer = cloneArrayBuffer;

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	var _cloneDataView = cloneDataView;

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	var _cloneRegExp = cloneRegExp;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto$2 = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
	}

	var _cloneSymbol = cloneSymbol;

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	var _cloneTypedArray = cloneTypedArray;

	/** `Object#toString` result references. */
	var boolTag$2 = '[object Boolean]',
	    dateTag$2 = '[object Date]',
	    mapTag$4 = '[object Map]',
	    numberTag$2 = '[object Number]',
	    regexpTag$2 = '[object RegExp]',
	    setTag$4 = '[object Set]',
	    stringTag$2 = '[object String]',
	    symbolTag$2 = '[object Symbol]';

	var arrayBufferTag$2 = '[object ArrayBuffer]',
	    dataViewTag$3 = '[object DataView]',
	    float32Tag$1 = '[object Float32Array]',
	    float64Tag$1 = '[object Float64Array]',
	    int8Tag$1 = '[object Int8Array]',
	    int16Tag$1 = '[object Int16Array]',
	    int32Tag$1 = '[object Int32Array]',
	    uint8Tag$1 = '[object Uint8Array]',
	    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
	    uint16Tag$1 = '[object Uint16Array]',
	    uint32Tag$1 = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag$2:
	      return _cloneArrayBuffer(object);

	    case boolTag$2:
	    case dateTag$2:
	      return new Ctor(+object);

	    case dataViewTag$3:
	      return _cloneDataView(object, isDeep);

	    case float32Tag$1: case float64Tag$1:
	    case int8Tag$1: case int16Tag$1: case int32Tag$1:
	    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
	      return _cloneTypedArray(object, isDeep);

	    case mapTag$4:
	      return new Ctor;

	    case numberTag$2:
	    case stringTag$2:
	      return new Ctor(object);

	    case regexpTag$2:
	      return _cloneRegExp(object);

	    case setTag$4:
	      return new Ctor;

	    case symbolTag$2:
	      return _cloneSymbol(object);
	  }
	}

	var _initCloneByTag = initCloneByTag;

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject_1(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	var _baseCreate = baseCreate;

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !_isPrototype(object))
	    ? _baseCreate(_getPrototype(object))
	    : {};
	}

	var _initCloneObject = initCloneObject;

	/** `Object#toString` result references. */
	var mapTag$5 = '[object Map]';

	/**
	 * The base implementation of `_.isMap` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 */
	function baseIsMap(value) {
	  return isObjectLike_1(value) && _getTag(value) == mapTag$5;
	}

	var _baseIsMap = baseIsMap;

	/* Node.js helper references. */
	var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

	/**
	 * Checks if `value` is classified as a `Map` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 * @example
	 *
	 * _.isMap(new Map);
	 * // => true
	 *
	 * _.isMap(new WeakMap);
	 * // => false
	 */
	var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

	var isMap_1 = isMap;

	/** `Object#toString` result references. */
	var setTag$5 = '[object Set]';

	/**
	 * The base implementation of `_.isSet` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 */
	function baseIsSet(value) {
	  return isObjectLike_1(value) && _getTag(value) == setTag$5;
	}

	var _baseIsSet = baseIsSet;

	/* Node.js helper references. */
	var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

	/**
	 * Checks if `value` is classified as a `Set` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 * @example
	 *
	 * _.isSet(new Set);
	 * // => true
	 *
	 * _.isSet(new WeakSet);
	 * // => false
	 */
	var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

	var isSet_1 = isSet;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG = 4;

	/** `Object#toString` result references. */
	var argsTag$3 = '[object Arguments]',
	    arrayTag$2 = '[object Array]',
	    boolTag$3 = '[object Boolean]',
	    dateTag$3 = '[object Date]',
	    errorTag$2 = '[object Error]',
	    funcTag$2 = '[object Function]',
	    genTag$1 = '[object GeneratorFunction]',
	    mapTag$6 = '[object Map]',
	    numberTag$3 = '[object Number]',
	    objectTag$4 = '[object Object]',
	    regexpTag$3 = '[object RegExp]',
	    setTag$6 = '[object Set]',
	    stringTag$3 = '[object String]',
	    symbolTag$3 = '[object Symbol]',
	    weakMapTag$2 = '[object WeakMap]';

	var arrayBufferTag$3 = '[object ArrayBuffer]',
	    dataViewTag$4 = '[object DataView]',
	    float32Tag$2 = '[object Float32Array]',
	    float64Tag$2 = '[object Float64Array]',
	    int8Tag$2 = '[object Int8Array]',
	    int16Tag$2 = '[object Int16Array]',
	    int32Tag$2 = '[object Int32Array]',
	    uint8Tag$2 = '[object Uint8Array]',
	    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
	    uint16Tag$2 = '[object Uint16Array]',
	    uint32Tag$2 = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] =
	cloneableTags[arrayBufferTag$3] = cloneableTags[dataViewTag$4] =
	cloneableTags[boolTag$3] = cloneableTags[dateTag$3] =
	cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
	cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
	cloneableTags[int32Tag$2] = cloneableTags[mapTag$6] =
	cloneableTags[numberTag$3] = cloneableTags[objectTag$4] =
	cloneableTags[regexpTag$3] = cloneableTags[setTag$6] =
	cloneableTags[stringTag$3] = cloneableTags[symbolTag$3] =
	cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
	cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
	cloneableTags[errorTag$2] = cloneableTags[funcTag$2] =
	cloneableTags[weakMapTag$2] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG;

	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject_1(value)) {
	    return value;
	  }
	  var isArr = isArray_1(value);
	  if (isArr) {
	    result = _initCloneArray(value);
	    if (!isDeep) {
	      return _copyArray(value, result);
	    }
	  } else {
	    var tag = _getTag(value),
	        isFunc = tag == funcTag$2 || tag == genTag$1;

	    if (isBuffer_1(value)) {
	      return _cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag$4 || tag == argsTag$3 || (isFunc && !object)) {
	      result = (isFlat || isFunc) ? {} : _initCloneObject(value);
	      if (!isDeep) {
	        return isFlat
	          ? _copySymbolsIn(value, _baseAssignIn(result, value))
	          : _copySymbols(value, _baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = _initCloneByTag(value, tag, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new _Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (isSet_1(value)) {
	    value.forEach(function(subValue) {
	      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	    });
	  } else if (isMap_1(value)) {
	    value.forEach(function(subValue, key) {
	      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	    });
	  }

	  var keysFunc = isFull
	    ? (isFlat ? _getAllKeysIn : _getAllKeys)
	    : (isFlat ? keysIn_1 : keys_1);

	  var props = isArr ? undefined : keysFunc(value);
	  _arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}

	var _baseClone = baseClone;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG$1 = 1,
	    CLONE_SYMBOLS_FLAG$1 = 4;

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return _baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
	}

	var cloneDeep_1 = cloneDeep;

	/**
	 * Creates a `_.find` or `_.findLast` function.
	 *
	 * @private
	 * @param {Function} findIndexFunc The function to find the collection index.
	 * @returns {Function} Returns the new find function.
	 */
	function createFind(findIndexFunc) {
	  return function(collection, predicate, fromIndex) {
	    var iterable = Object(collection);
	    if (!isArrayLike_1(collection)) {
	      var iteratee = _baseIteratee(predicate);
	      collection = keys_1(collection);
	      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
	    }
	    var index = findIndexFunc(collection, predicate, fromIndex);
	    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
	  };
	}

	var _createFind = createFind;

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	var _baseFindIndex = baseFindIndex;

	/** Used to match a single whitespace character. */
	var reWhitespace = /\s/;

	/**
	 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
	 * character of `string`.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {number} Returns the index of the last non-whitespace character.
	 */
	function trimmedEndIndex(string) {
	  var index = string.length;

	  while (index-- && reWhitespace.test(string.charAt(index))) {}
	  return index;
	}

	var _trimmedEndIndex = trimmedEndIndex;

	/** Used to match leading whitespace. */
	var reTrimStart = /^\s+/;

	/**
	 * The base implementation of `_.trim`.
	 *
	 * @private
	 * @param {string} string The string to trim.
	 * @returns {string} Returns the trimmed string.
	 */
	function baseTrim(string) {
	  return string
	    ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '')
	    : string;
	}

	var _baseTrim = baseTrim;

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol_1(value)) {
	    return NAN;
	  }
	  if (isObject_1(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject_1(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = _baseTrim(value);
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	var toNumber_1 = toNumber;

	/** Used as references for various `Number` constants. */
	var INFINITY$2 = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber_1(value);
	  if (value === INFINITY$2 || value === -INFINITY$2) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	var toFinite_1 = toFinite;

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite_1(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	var toInteger_1 = toInteger;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * This method is like `_.find` except that it returns the index of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {number} Returns the index of the found element, else `-1`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'active': false },
	 *   { 'user': 'fred',    'active': false },
	 *   { 'user': 'pebbles', 'active': true }
	 * ];
	 *
	 * _.findIndex(users, function(o) { return o.user == 'barney'; });
	 * // => 0
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.findIndex(users, { 'user': 'fred', 'active': false });
	 * // => 1
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.findIndex(users, ['active', false]);
	 * // => 0
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.findIndex(users, 'active');
	 * // => 2
	 */
	function findIndex(array, predicate, fromIndex) {
	  var length = array == null ? 0 : array.length;
	  if (!length) {
	    return -1;
	  }
	  var index = fromIndex == null ? 0 : toInteger_1(fromIndex);
	  if (index < 0) {
	    index = nativeMax(length + index, 0);
	  }
	  return _baseFindIndex(array, _baseIteratee(predicate), index);
	}

	var findIndex_1 = findIndex;

	/**
	 * Iterates over elements of `collection`, returning the first element
	 * `predicate` returns truthy for. The predicate is invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to inspect.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {*} Returns the matched element, else `undefined`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'age': 36, 'active': true },
	 *   { 'user': 'fred',    'age': 40, 'active': false },
	 *   { 'user': 'pebbles', 'age': 1,  'active': true }
	 * ];
	 *
	 * _.find(users, function(o) { return o.age < 40; });
	 * // => object for 'barney'
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.find(users, { 'age': 1, 'active': true });
	 * // => object for 'pebbles'
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.find(users, ['active', false]);
	 * // => object for 'fred'
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.find(users, 'active');
	 * // => object for 'barney'
	 */
	var find = _createFind(findIndex_1);

	var find_1 = find;

	// IMClient
	const UNREAD_MESSAGES_COUNT_UPDATE = 'unreadmessagescountupdate';
	const CLOSE = 'close';
	const CONFLICT = 'conflict';
	const CONVERSATION_INFO_UPDATED = 'conversationinfoupdated';
	const UNHANDLED_MESSAGE = 'unhandledmessage';

	// shared
	const INVITED = 'invited';
	const KICKED = 'kicked';
	const MEMBERS_JOINED = 'membersjoined';
	const MEMBERS_LEFT = 'membersleft';
	const MEMBER_INFO_UPDATED = 'memberinfoupdated';
	const BLOCKED = 'blocked';
	const UNBLOCKED = 'unblocked';
	const MEMBERS_BLOCKED = 'membersblocked';
	const MEMBERS_UNBLOCKED = 'membersunblocked';
	const MUTED = 'muted';
	const UNMUTED = 'unmuted';
	const MEMBERS_MUTED = 'membersmuted';
	const MEMBERS_UNMUTED = 'membersunmuted';
	const MESSAGE$1 = 'message';
	const MESSAGE_RECALL = 'messagerecall';
	const MESSAGE_UPDATE = 'messageupdate';

	// Conversation
	const LAST_DELIVERED_AT_UPDATE = 'lastdeliveredatupdate';
	const LAST_READ_AT_UPDATE = 'lastreadatupdate';
	const INFO_UPDATED = 'infoupdated';

	var IMEvent = /*#__PURE__*/Object.freeze({
		__proto__: null,
		UNREAD_MESSAGES_COUNT_UPDATE: UNREAD_MESSAGES_COUNT_UPDATE,
		CLOSE: CLOSE,
		CONFLICT: CONFLICT,
		CONVERSATION_INFO_UPDATED: CONVERSATION_INFO_UPDATED,
		UNHANDLED_MESSAGE: UNHANDLED_MESSAGE,
		INVITED: INVITED,
		KICKED: KICKED,
		MEMBERS_JOINED: MEMBERS_JOINED,
		MEMBERS_LEFT: MEMBERS_LEFT,
		MEMBER_INFO_UPDATED: MEMBER_INFO_UPDATED,
		BLOCKED: BLOCKED,
		UNBLOCKED: UNBLOCKED,
		MEMBERS_BLOCKED: MEMBERS_BLOCKED,
		MEMBERS_UNBLOCKED: MEMBERS_UNBLOCKED,
		MUTED: MUTED,
		UNMUTED: UNMUTED,
		MEMBERS_MUTED: MEMBERS_MUTED,
		MEMBERS_UNMUTED: MEMBERS_UNMUTED,
		MESSAGE: MESSAGE$1,
		MESSAGE_RECALL: MESSAGE_RECALL,
		MESSAGE_UPDATE: MESSAGE_UPDATE,
		LAST_DELIVERED_AT_UPDATE: LAST_DELIVERED_AT_UPDATE,
		LAST_READ_AT_UPDATE: LAST_READ_AT_UPDATE,
		INFO_UPDATED: INFO_UPDATED
	});

	/**
	 * 消息状态枚举
	 * @enum {Symbol}
	 * @since 3.2.0
	 * @memberof module:leancloud-realtime
	 */
	const MessageStatus = {
	  /** 初始状态、未知状态 */
	  NONE: Symbol('none'),
	  /** 正在发送 */
	  SENDING: Symbol('sending'),
	  /** 已发送 */
	  SENT: Symbol('sent'),
	  /** 已送达 */
	  DELIVERED: Symbol('delivered'),
	  /** 发送失败 */
	  FAILED: Symbol('failed')
	};
	Object.freeze(MessageStatus);
	const rMessageStatus = {
	  [MessageStatus.NONE]: true,
	  [MessageStatus.SENDING]: true,
	  [MessageStatus.SENT]: true,
	  [MessageStatus.DELIVERED]: true,
	  [MessageStatus.READ]: true,
	  [MessageStatus.FAILED]: true
	};
	class Message {
	  /**
	   * @implements AVMessage
	   * @param  {Object|String|ArrayBuffer} content 消息内容
	   */
	  constructor(content) {
	    Object.assign(this, {
	      content
	    }, {
	      /**
	       * @type {String}
	       * @memberof Message#
	       */
	      id: v4_1(),
	      /**
	       * 消息所在的 conversation id
	       * @memberof Message#
	       * @type {String?}
	       */
	      cid: null,
	      /**
	       * 消息发送时间
	       * @memberof Message#
	       * @type {Date}
	       */
	      timestamp: new Date(),
	      /**
	       * 消息发送者
	       * @memberof Message#
	       * @type {String}
	       */
	      from: undefined,
	      /**
	       * 消息提及的用户
	       * @since 4.0.0
	       * @memberof Message#
	       * @type {String[]}
	       */
	      mentionList: [],
	      /**
	       * 消息是否提及了所有人
	       * @since 4.0.0
	       * @memberof Message#
	       * @type {Boolean}
	       */
	      mentionedAll: false,
	      _mentioned: false
	    });
	    this._setStatus(MessageStatus.NONE);
	  }

	  /**
	   * 将当前消息的内容序列化为 JSON 对象
	   * @private
	   * @return {Object}
	   */
	  getPayload() {
	    return this.content;
	  }
	  _toJSON() {
	    const {
	      id,
	      cid,
	      from,
	      timestamp,
	      deliveredAt,
	      updatedAt,
	      mentionList,
	      mentionedAll,
	      mentioned
	    } = this;
	    return {
	      id,
	      cid,
	      from,
	      timestamp,
	      deliveredAt,
	      updatedAt,
	      mentionList,
	      mentionedAll,
	      mentioned
	    };
	  }

	  /**
	   * 返回 JSON 格式的消息
	   * @return {Object} 返回值是一个 plain Object
	   */
	  toJSON() {
	    return {
	      ...this._toJSON(),
	      data: this.content
	    };
	  }

	  /**
	   * 返回 JSON 格式的消息，与 toJSON 不同的是，该对象包含了完整的信息，可以通过 {@link IMClient#parseMessage} 反序列化。
	   * @return {Object} 返回值是一个 plain Object
	   * @since 4.0.0
	   */
	  toFullJSON() {
	    const {
	      content,
	      id,
	      cid,
	      from,
	      timestamp,
	      deliveredAt,
	      _updatedAt,
	      mentionList,
	      mentionedAll
	    } = this;
	    return {
	      data: content,
	      id,
	      cid,
	      from,
	      timestamp: getTime(timestamp),
	      deliveredAt: getTime(deliveredAt),
	      updatedAt: getTime(_updatedAt),
	      mentionList,
	      mentionedAll
	    };
	  }

	  /**
	   * 消息状态，值为 {@link module:leancloud-realtime.MessageStatus} 之一
	   * @type {Symbol}
	   * @readonly
	   * @since 3.2.0
	   */
	  get status() {
	    return this._status;
	  }
	  _setStatus(status) {
	    if (!rMessageStatus[status]) {
	      throw new Error('Invalid message status');
	    }
	    this._status = status;
	  }
	  get timestamp() {
	    return this._timestamp;
	  }
	  set timestamp(value) {
	    this._timestamp = decodeDate(value);
	  }

	  /**
	   * 消息送达时间
	   * @type {?Date}
	   */
	  get deliveredAt() {
	    return this._deliveredAt;
	  }
	  set deliveredAt(value) {
	    this._deliveredAt = decodeDate(value);
	  }

	  /**
	   * 消息修改或撤回时间，可以通过比较其与消息的 timestamp 是否相等判断消息是否被修改过或撤回过。
	   * @type {Date}
	   * @since 3.5.0
	   */
	  get updatedAt() {
	    return this._updatedAt || this.timestamp;
	  }
	  set updatedAt(value) {
	    this._updatedAt = decodeDate(value);
	  }

	  /**
	   * 当前用户是否在该消息中被提及
	   * @type {Boolean}
	   * @readonly
	   * @since 4.0.0
	   */
	  get mentioned() {
	    return this._mentioned;
	  }
	  _updateMentioned(client) {
	    this._mentioned = this.from !== client && (this.mentionedAll || this.mentionList.indexOf(client) > -1);
	  }

	  /**
	   * 获取提及用户列表
	   * @since 4.0.0
	   * @return {String[]} 提及用户的 id 列表
	   */
	  getMentionList() {
	    return this.mentionList;
	  }

	  /**
	   * 设置提及用户列表
	   * @since 4.0.0
	   * @param {String[]} clients 提及用户的 id 列表
	   * @return {this} self
	   */
	  setMentionList(clients) {
	    this.mentionList = ensureArray(clients);
	    return this;
	  }

	  /**
	   * 设置是否提及所有人
	   * @since 4.0.0
	   * @param {Boolean} [value=true]
	   * @return {this} self
	   */
	  mentionAll(value = true) {
	    this.mentionedAll = Boolean(value);
	    return this;
	  }

	  /**
	   * 判断给定的内容是否是有效的 Message，
	   * 该方法始终返回 true
	   * @private
	   * @returns {Boolean}
	   * @implements AVMessage.validate
	   */
	  static validate() {
	    return true;
	  }

	  /**
	   * 解析处理消息内容
	   * <pre>
	   * 如果子类提供了 message，返回该 message
	   * 如果没有提供，将 json 作为 content 实例化一个 Message
	   * @private
	   * @param  {Object}  json    json 格式的消息内容
	   * @param  {Message} message 子类提供的 message
	   * @return {Message}
	   * @implements AVMessage.parse
	   */
	  static parse(json, message) {
	    return message || new this(json);
	  }
	}

	/* eslint-disable no-param-reassign */

	// documented in ../index.js
	const messageType = type => {
	  if (typeof type !== 'number') {
	    throw new TypeError(`${type} is not a Number`);
	  }
	  return target => {
	    target.TYPE = type;
	    target.validate = json => json._lctype === type;
	    target.prototype._getType = () => ({
	      _lctype: type
	    });
	  };
	};

	// documented in ../plugin-im.js
	const messageField = fields => {
	  if (typeof fields !== 'string') {
	    if (!Array.isArray(fields)) {
	      throw new TypeError(`${fields} is not an Array`);
	    } else if (fields.some(value => typeof value !== 'string')) {
	      throw new TypeError('fields contains non-string typed member');
	    }
	  }
	  return target => {
	    // IE10 Hack:
	    // static properties in IE10 will not be inherited from super
	    // search for parse method and assign it manually
	    let originalCustomFields = isIE10 ? getStaticProperty(target, '_customFields') : target._customFields;
	    originalCustomFields = Array.isArray(originalCustomFields) ? originalCustomFields : [];
	    target._customFields = originalCustomFields.concat(fields);
	  };
	};

	// IE10 Hack:
	// static properties in IE10 will not be inherited from super
	// search for parse method and assign it manually

	const IE10Compatible = target => {
	  if (isIE10) {
	    target.parse = getStaticProperty(target, 'parse');
	  }
	};

	var _dec, _class$1;

	// jsdoc-ignore-start
	let TypedMessage = (_dec = messageField(['_lctext', '_lcattrs']), _dec(_class$1 = class TypedMessage extends Message {
	  /**
	   * @type {Number}
	   * @readonly
	   */
	  get type() {
	    return this.constructor.TYPE;
	  }

	  /** @type {String} */
	  set text(text) {
	    return this.setText(text);
	  }
	  get text() {
	    return this.getText();
	  }

	  /** @type {Object} */
	  set attributes(attributes) {
	    return this.setAttributes(attributes);
	  }
	  get attributes() {
	    return this.getAttributes();
	  }

	  /**
	   * 在客户端需要以文本形式展示该消息时显示的文案，
	   * 如 <code>[红包] 新春快乐</code>。
	   * 默认值为消息的 text。
	   * @type {String}
	   * @readonly
	   */
	  get summary() {
	    return this.text;
	  }

	  /**
	   * @param {String} text
	   * @return {this} self
	   */
	  setText(text) {
	    this._lctext = text;
	    return this;
	  }

	  /**
	   * @return {String}
	   */
	  getText() {
	    return this._lctext;
	  }

	  /**
	   * @param {Object} attributes
	   * @return {this} self
	   */
	  setAttributes(attributes) {
	    this._lcattrs = attributes;
	    return this;
	  }

	  /**
	   * @return {Object}
	   */
	  getAttributes() {
	    return this._lcattrs;
	  }
	  _getCustomFields() {
	    const fields = Array.isArray(this.constructor._customFields) ? this.constructor._customFields : [];
	    return fields.reduce((result, field) => {
	      if (typeof field !== 'string') return result;
	      result[field] = this[field]; // eslint-disable-line no-param-reassign
	      return result;
	    }, {});
	  }

	  /* eslint-disable class-methods-use-this */
	  _getType() {
	    throw new Error('not implemented');
	  }
	  /* eslint-enable class-methods-use-this */

	  getPayload() {
	    return compact({
	      _lctext: this.getText(),
	      _lcattrs: this.getAttributes(),
	      ...this._getCustomFields(),
	      ...this._getType()
	    });
	  }
	  toJSON() {
	    const {
	      type,
	      text,
	      attributes,
	      summary
	    } = this;
	    return {
	      ...super._toJSON(),
	      type,
	      text,
	      attributes,
	      summary
	    };
	  }
	  toFullJSON() {
	    return {
	      ...super.toFullJSON(),
	      data: this.getPayload()
	    };
	  }

	  /**
	   * 解析处理消息内容
	   * <pre>
	   * 为给定的 message 设置 text 与 attributes 属性，返回该 message
	   * 如果子类没有提供 message，new this()
	   * @protected
	   * @param  {Object}  json    json 格式的消息内容
	   * @param  {TypedMessage} message 子类提供的 message
	   * @return {TypedMessage}
	   * @implements AVMessage.parse
	   */
	  static parse(json, message = new this()) {
	    message.content = json; // eslint-disable-line no-param-reassign
	    const customFields = isIE10 ? getStaticProperty(message.constructor, '_customFields') : message.constructor._customFields;
	    let fields = Array.isArray(customFields) ? customFields : [];
	    fields = fields.reduce((result, field) => {
	      if (typeof field !== 'string') return result;
	      result[field] = json[field]; // eslint-disable-line no-param-reassign
	      return result;
	    }, {});
	    Object.assign(message, fields);
	    return super.parse(json, message);
	  }
	}) || _class$1);

	var _dec$1, _class$2;

	// jsdoc-ignore-start
	let RecalledMessage = (_dec$1 = messageType(-127), _dec$1(_class$2 = IE10Compatible(_class$2 = class RecalledMessage extends TypedMessage {
	  /**
	   * 在客户端需要以文本形式展示该消息时显示的文案，值为 <code>[该消息已撤回]</code>
	   * @type {String}
	   * @readonly
	   */
	  // eslint-disable-next-line class-methods-use-this
	  get summary() {
	    return '[该消息已撤回]';
	  }
	}) || _class$2) || _class$2);

	/* eslint class-methods-use-this: ["error", { "exceptMethods": ["_addMembers", "_removeMembers"] }] */
	const debug$7 = browser('LC:Conversation');
	const serializeMessage = message => {
	  const content = message.getPayload();
	  let msg;
	  let binaryMsg;
	  if (content instanceof ArrayBuffer) {
	    binaryMsg = content;
	  } else if (typeof content !== 'string') {
	    msg = JSON.stringify(content);
	  } else {
	    msg = content;
	  }
	  return {
	    msg,
	    binaryMsg
	  };
	};
	const {
	  NEW,
	  OLD
	} = LogsCommand.QueryDirection;

	/**
	 * 历史消息查询方向枚举
	 * @enum {Number}
	 * @since 4.0.0
	 * @memberof module:leancloud-realtime
	 */
	const MessageQueryDirection = {
	  /** 从后向前 */
	  NEW_TO_OLD: OLD,
	  /** 从前向后 */
	  OLD_TO_NEW: NEW
	};
	Object.freeze(MessageQueryDirection);
	class ConversationBase extends eventemitter3 {
	  /**
	   * @extends EventEmitter
	   * @private
	   * @abstract
	   */
	  constructor({
	    id,
	    lastMessageAt,
	    lastMessage,
	    lastDeliveredAt,
	    lastReadAt,
	    unreadMessagesCount = 0,
	    members = [],
	    mentioned = false,
	    ...properties
	  }, client) {
	    super();
	    Object.assign(this, {
	      /**
	       * 对话 id，对应 _Conversation 表中的 objectId
	       * @memberof ConversationBase#
	       * @type {String}
	       */
	      id,
	      /**
	       * 最后一条消息时间
	       * @memberof ConversationBase#
	       * @type {?Date}
	       */
	      lastMessageAt,
	      /**
	       * 最后一条消息
	       * @memberof ConversationBase#
	       * @type {?Message}
	       */
	      lastMessage,
	      /**
	       * 参与该对话的用户列表
	       * @memberof ConversationBase#
	       * @type {String[]}
	       */
	      members,
	      // other properties provided by subclasses
	      ...properties
	    });
	    this.members = Array.from(new Set(this.members));
	    Object.assign(internal(this), {
	      messagesWaitingForReceipt: {},
	      lastDeliveredAt,
	      lastReadAt,
	      unreadMessagesCount,
	      mentioned
	    });
	    this._client = client;
	    if (debug$7.enabled) {
	      values_1(IMEvent).forEach(event => this.on(event, (...payload) => this._debug(`${event} event emitted. %o`, payload)));
	    }
	    // onConversationCreate hook
	    applyDecorators(this._client._plugins.onConversationCreate, this);
	  }

	  /**
	   * 当前用户是否在该对话的未读消息中被提及
	   * @type {Boolean}
	   * @since 4.0.0
	   */
	  get unreadMessagesMentioned() {
	    return internal(this).unreadMessagesMentioned;
	  }
	  _setUnreadMessagesMentioned(value) {
	    internal(this).unreadMessagesMentioned = Boolean(value);
	  }
	  set unreadMessagesCount(value) {
	    if (value !== this.unreadMessagesCount) {
	      internal(this).unreadMessagesCount = value;
	      this._client.emit(UNREAD_MESSAGES_COUNT_UPDATE, [this]);
	    }
	  }

	  /**
	   * 当前用户在该对话的未读消息数
	   * @type {Number}
	   */
	  get unreadMessagesCount() {
	    return internal(this).unreadMessagesCount;
	  }
	  set lastMessageAt(value) {
	    const time = decodeDate(value);
	    if (time <= this._lastMessageAt) return;
	    this._lastMessageAt = time;
	  }
	  get lastMessageAt() {
	    return this._lastMessageAt;
	  }

	  /**
	   * 最后消息送达时间，常用来实现消息的「已送达」标记，可通过 {@link Conversation#fetchReceiptTimestamps} 获取或更新该属性
	   * @type {?Date}
	   * @since 3.4.0
	   */
	  get lastDeliveredAt() {
	    if (this.members.length !== 2) return null;
	    return internal(this).lastDeliveredAt;
	  }
	  _setLastDeliveredAt(value) {
	    const date = decodeDate(value);
	    if (!(date < internal(this).lastDeliveredAt)) {
	      internal(this).lastDeliveredAt = date;
	      /**
	       * 最后消息送达时间更新
	       * @event ConversationBase#LAST_DELIVERED_AT_UPDATE
	       * @since 3.4.0
	       */
	      this.emit(LAST_DELIVERED_AT_UPDATE);
	    }
	  }

	  /**
	   * 最后消息被阅读时间，常用来实现发送消息的「已读」标记，可通过 {@link Conversation#fetchReceiptTimestamps} 获取或更新该属性
	   * @type {?Date}
	   * @since 3.4.0
	   */
	  get lastReadAt() {
	    if (this.members.length !== 2) return null;
	    return internal(this).lastReadAt;
	  }
	  _setLastReadAt(value) {
	    const date = decodeDate(value);
	    if (!(date < internal(this).lastReadAt)) {
	      internal(this).lastReadAt = date;
	      /**
	       * 最后消息被阅读时间更新
	       * @event ConversationBase#LAST_READ_AT_UPDATE
	       * @since 3.4.0
	       */
	      this.emit(LAST_READ_AT_UPDATE);
	    }
	  }

	  /**
	   * 返回 JSON 格式的对话，与 toJSON 不同的是，该对象包含了完整的信息，可以通过 {@link IMClient#parseConversation} 反序列化。
	   * @return {Object} 返回值是一个 plain Object
	   * @since 4.0.0
	   */
	  toFullJSON() {
	    const {
	      id,
	      members,
	      lastMessageAt,
	      lastDeliveredAt,
	      lastReadAt,
	      lastMessage,
	      unreadMessagesCount
	    } = this;
	    return {
	      id,
	      members,
	      lastMessageAt: getTime(lastMessageAt),
	      lastDeliveredAt: getTime(lastDeliveredAt),
	      lastReadAt: getTime(lastReadAt),
	      lastMessage: lastMessage ? lastMessage.toFullJSON() : undefined,
	      unreadMessagesCount
	    };
	  }

	  /**
	   * 返回 JSON 格式的对话
	   * @return {Object} 返回值是一个 plain Object
	   * @since 4.0.0
	   */
	  toJSON() {
	    const {
	      id,
	      members,
	      lastMessageAt,
	      lastDeliveredAt,
	      lastReadAt,
	      lastMessage,
	      unreadMessagesCount,
	      unreadMessagesMentioned
	    } = this;
	    return {
	      id,
	      members,
	      lastMessageAt,
	      lastDeliveredAt,
	      lastReadAt,
	      lastMessage: lastMessage ? lastMessage.toJSON() : undefined,
	      unreadMessagesCount,
	      unreadMessagesMentioned
	    };
	  }
	  _debug(...params) {
	    debug$7(...params, `[${this.id}]`);
	  }
	  _send(command, ...args) {
	    /* eslint-disable no-param-reassign */
	    if (command.cmd === null) {
	      command.cmd = 'conv';
	    }
	    if (command.cmd === 'conv' && command.convMessage === null) {
	      command.convMessage = new ConvCommand();
	    }
	    if (command.convMessage && command.convMessage.cid === null) {
	      command.convMessage.cid = this.id;
	    }
	    /* eslint-enable no-param-reassign */
	    return this._client._send(command, ...args);
	  }

	  /**
	   * 发送消息
	   * @param  {Message} message 消息，Message 及其子类的实例
	   * @param {Object} [options] since v3.3.0，发送选项
	   * @param {Boolean} [options.transient] since v3.3.1，是否作为暂态消息发送
	   * @param {Boolean} [options.receipt] 是否需要回执，仅在普通对话中有效
	   * @param {Boolean} [options.will] since v3.4.0，是否指定该消息作为「掉线消息」发送，
	   * 「掉线消息」会延迟到当前用户掉线后发送，常用来实现「下线通知」功能
	   * @param {MessagePriority} [options.priority] 消息优先级，仅在暂态对话中有效，
	   * see: {@link module:leancloud-realtime.MessagePriority MessagePriority}
	   * @param {Object} [options.pushData] 消息对应的离线推送内容，如果消息接收方不在线，会推送指定的内容。其结构说明参见: {@link https://url.leanapp.cn/pushData 推送消息内容}
	   * @return {Promise.<Message>} 发送的消息
	   */
	  async send(message, options) {
	    this._debug(message, 'send');
	    if (!(message instanceof Message)) {
	      throw new TypeError(`${message} is not a Message`);
	    }
	    const {
	      transient,
	      receipt,
	      priority,
	      pushData,
	      will
	    } = {
	      // support Message static property: sendOptions
	      ...message.constructor.sendOptions,
	      // support Message static property: getSendOptions
	      ...(typeof message.constructor.getSendOptions === 'function' ? message.constructor.getSendOptions(message) : {}),
	      ...options
	    };
	    if (receipt) {
	      if (this.transient) {
	        console.warn('receipt option is ignored as the conversation is transient.');
	      } else if (transient) {
	        console.warn('receipt option is ignored as the message is sent transiently.');
	      } else if (this.members.length > 2) {
	        console.warn('receipt option is recommended to be used in one-on-one conversation.'); // eslint-disable-line max-len
	      }
	    }

	    if (priority && !this.transient) {
	      console.warn('priority option is ignored as the conversation is not transient.');
	    }
	    Object.assign(message, {
	      cid: this.id,
	      from: this._client.id
	    });
	    message._setStatus(MessageStatus.SENDING);
	    const {
	      msg,
	      binaryMsg
	    } = serializeMessage(message);
	    const command = new GenericCommand({
	      cmd: 'direct',
	      directMessage: new DirectCommand({
	        msg,
	        binaryMsg,
	        cid: this.id,
	        r: receipt,
	        transient,
	        dt: message.id,
	        pushData: JSON.stringify(pushData),
	        will,
	        mentionPids: message.mentionList,
	        mentionAll: message.mentionedAll
	      }),
	      priority
	    });
	    try {
	      const resCommand = await this._send(command);
	      const {
	        ackMessage: {
	          uid,
	          t,
	          code,
	          reason,
	          appCode
	        }
	      } = resCommand;
	      if (code !== null) {
	        throw createError({
	          code,
	          reason,
	          appCode
	        });
	      }
	      Object.assign(message, {
	        id: uid,
	        timestamp: t
	      });
	      if (!transient) {
	        this.lastMessage = message;
	        this.lastMessageAt = message.timestamp;
	      }
	      message._setStatus(MessageStatus.SENT);
	      if (receipt) {
	        internal(this).messagesWaitingForReceipt[message.id] = message;
	      }
	      return message;
	    } catch (error) {
	      message._setStatus(MessageStatus.FAILED);
	      throw error;
	    }
	  }
	  async _update(message, newMessage, recall) {
	    this._debug('patch %O %O %O', message, newMessage, recall);
	    if (message instanceof Message) {
	      if (message.from !== this._client.id) {
	        throw new Error('Updating message from others is not allowed');
	      }
	      if (message.status !== MessageStatus.SENT && message.status !== MessageStatus.DELIVERED) {
	        throw new Error('Message is not sent');
	      }
	    } else if (!(message.id && message.timestamp)) {
	      throw new TypeError(`${message} is not a Message`);
	    }
	    let msg;
	    let binaryMsg;
	    if (!recall) {
	      const content = serializeMessage(newMessage);
	      ({
	        msg,
	        binaryMsg
	      } = content);
	    }
	    await this._send(new GenericCommand({
	      cmd: CommandType.patch,
	      op: OpType.modify,
	      patchMessage: new PatchCommand({
	        patches: [new PatchItem({
	          cid: this.id,
	          mid: message.id,
	          timestamp: Number(message.timestamp),
	          recall,
	          data: msg,
	          binaryMsg,
	          mentionPids: newMessage.mentionList,
	          mentionAll: newMessage.mentionedAll
	        })],
	        lastPatchTime: this._client._lastPatchTime
	      })
	    }));
	    const {
	      id,
	      cid,
	      timestamp,
	      from,
	      _status
	    } = message;
	    Object.assign(newMessage, {
	      id,
	      cid,
	      timestamp,
	      from,
	      _status
	    });
	    if (this.lastMessage && this.lastMessage.id === newMessage.id) {
	      this.lastMessage = newMessage;
	    }
	    return newMessage;
	  }

	  /**
	   * 获取对话人数，或暂态对话的在线人数
	   * @return {Promise.<Number>}
	   */
	  async count() {
	    this._debug('count');
	    const resCommand = await this._send(new GenericCommand({
	      op: 'count'
	    }));
	    return resCommand.convMessage.count;
	  }

	  /**
	   * 应用增加成员的操作，产生副作用
	   * @param {string[]} members
	   * @abstract
	   * @private
	   */
	  _addMembers() {}

	  /**
	   * 应用减少成员的操作，产生副作用
	   * @param {string[]} members
	   * @abstract
	   * @private
	   */
	  _removeMembers() {}

	  /**
	   * 修改已发送的消息
	   * @param {AVMessage} message 要修改的消息，该消息必须是由当前用户发送的。也可以提供一个包含消息 {id, timestamp} 的对象
	   * @param {AVMessage} newMessage 新的消息
	   * @return {Promise.<AVMessage>} 更新后的消息
	   */
	  async update(message, newMessage) {
	    if (!(newMessage instanceof Message)) {
	      throw new TypeError(`${newMessage} is not a Message`);
	    }
	    return this._update(message, newMessage, false);
	  }

	  /**
	   * 撤回已发送的消息
	   * @param {AVMessage} message 要撤回的消息，该消息必须是由当前用户发送的。也可以提供一个包含消息 {id, timestamp} 的对象
	   * @return {Promise.<RecalledMessage>} 一条已撤回的消息
	   */
	  async recall(message) {
	    return this._update(message, new RecalledMessage(), true);
	  }

	  /**
	   * 查询消息记录
	   * 如果仅需实现消息向前记录翻页查询需求，建议使用 {@link Conversation#createMessagesIterator}。
	   * 不论何种方向，获得的消息都是按照时间升序排列的。
	   * startClosed 与 endClosed 用于指定查询区间的开闭。
	   *
	   * @param  {Object} [options]
	   * @param  {Number} [options.limit] 限制查询结果的数量，目前服务端默认为 20
	   * @param  {Number}   [options.type] 指定查询的富媒体消息类型，不指定则查询所有消息。
	   * @param  {MessageQueryDirection} [options.direction] 查询的方向。
	   * 在不指定的情况下如果 startTime 大于 endTime，则为从新到旧查询，可以实现加载聊天记录等场景。
	   * 如果 startTime 小于 endTime，则为从旧到新查询，可以实现弹幕等场景。
	   * @param  {Date}   [options.startTime] 从该时间开始查询，不传则从当前时间开始查询
	   * @param  {String} [options.startMessageId] 从该消息之前开始查询，需要与 startTime 同时使用，为防止某时刻有重复消息
	   * @param  {Boolean}[options.startClosed] 指定查询范围是否包括开始的时间点，默认不包括
	   * @param  {Date}   [options.endTime] 查询到该时间为止，不传则查询最早消息为止
	   * @param  {String} [options.endMessageId] 查询到该消息为止，需要与 endTime 同时使用，为防止某时刻有重复消息
	   * @param  {Boolean}[options.endClosed] 指定查询范围是否包括结束的时间点，默认不包括
	   *
	   * @param  {Date}   [options.beforeTime] DEPRECATED: 使用 startTime 代替。限制查询结果为小于该时间之前的消息，不传则为当前时间
	   * @param  {String} [options.beforeMessageId] DEPRECATED: 使用 startMessageId 代替。
	   * 限制查询结果为该消息之前的消息，需要与 beforeTime 同时使用，为防止某时刻有重复消息
	   * @param  {Date}   [options.afterTime] DEPRECATED: 使用 endTime 代替。限制查询结果为大于该时间之前的消息
	   * @param  {String} [options.afterMessageId] DEPRECATED: 使用 endMessageId 代替。
	   * 限制查询结果为该消息之后的消息，需要与 afterTime 同时使用，为防止某时刻有重复消息
	   * @return {Promise.<Message[]>} 消息列表
	   */
	  async queryMessages(options = {}) {
	    this._debug('query messages %O', options);
	    const {
	      beforeTime,
	      beforeMessageId,
	      afterTime,
	      afterMessageId,
	      limit,
	      direction,
	      type,
	      startTime,
	      startMessageId,
	      startClosed,
	      endTime,
	      endMessageId,
	      endClosed
	    } = options;
	    if (beforeMessageId || beforeTime || afterMessageId || afterTime) {
	      console.warn('DEPRECATION: queryMessages options beforeTime, beforeMessageId, afterTime and afterMessageId are deprecated in favor of startTime, startMessageId, endTime and endMessageId.');
	      return this.queryMessages({
	        startTime: beforeTime,
	        startMessageId: beforeMessageId,
	        endTime: afterTime,
	        endMessageId: afterMessageId,
	        limit
	      });
	    }
	    if (startMessageId && !startTime) {
	      throw new Error('query option startMessageId must be used with option startTime');
	    }
	    if (endMessageId && !endTime) {
	      throw new Error('query option endMessageId must be used with option endTime');
	    }
	    const conditions = {
	      t: startTime,
	      mid: startMessageId,
	      tIncluded: startClosed,
	      tt: endTime,
	      tmid: endMessageId,
	      ttIncluded: endClosed,
	      l: limit,
	      lctype: type
	    };
	    if (conditions.t instanceof Date) {
	      conditions.t = conditions.t.getTime();
	    }
	    if (conditions.tt instanceof Date) {
	      conditions.tt = conditions.tt.getTime();
	    }
	    if (direction !== undefined) {
	      conditions.direction = direction;
	    } else if (conditions.tt > conditions.t) {
	      conditions.direction = MessageQueryDirection.OLD_TO_NEW;
	    }
	    const resCommand = await this._send(new GenericCommand({
	      cmd: 'logs',
	      logsMessage: new LogsCommand(Object.assign(conditions, {
	        cid: this.id
	      }))
	    }));
	    return Promise.all(resCommand.logsMessage.logs.map(async ({
	      msgId,
	      timestamp,
	      patchTimestamp,
	      from,
	      ackAt,
	      readAt,
	      data,
	      mentionAll,
	      mentionPids,
	      bin
	    }) => {
	      const messageData = {
	        data,
	        bin,
	        id: msgId,
	        cid: this.id,
	        timestamp,
	        from,
	        deliveredAt: ackAt,
	        updatedAt: patchTimestamp,
	        mentionList: mentionPids,
	        mentionedAll: mentionAll
	      };
	      const message = await this._client.parseMessage(messageData);
	      let status = MessageStatus.SENT;
	      if (this.members.length === 2) {
	        if (ackAt) status = MessageStatus.DELIVERED;
	        if (ackAt) this._setLastDeliveredAt(ackAt);
	        if (readAt) this._setLastReadAt(readAt);
	      }
	      message._setStatus(status);
	      return message;
	    }));
	  }

	  /**
	   * 获取消息翻页迭代器
	   * @param  {Object} [options]
	   * @param  {Date}   [options.beforeTime] 限制起始查询结果为小于该时间之前的消息，不传则为当前时间
	   * @param  {String} [options.beforeMessageId] 限制起始查询结果为该消息之前的消息，需要与 beforeTime 同时使用，为防止某时刻有重复消息
	   * @param  {Number} [options.limit] 限制每页查询结果的数量，目前服务端默认为 20
	   * @return {AsyncIterater.<Promise.<IteratorResult<Message[]>>>} [AsyncIterator]{@link https://github.com/tc39/proposal-async-iteration}，调用其 next 方法返回获取下一页消息的 Promise
	   * @example
	   * var messageIterator = conversation.createMessagesIterator({ limit: 10 });
	   * messageIterator.next().then(function(result) {
	   *   // result: {
	   *   //   value: [message1, ..., message10],
	   *   //   done: false,
	   *   // }
	   * });
	   * messageIterator.next().then(function(result) {
	   *   // result: {
	   *   //   value: [message11, ..., message20],
	   *   //   done: false,
	   *   // }
	   * });
	   * messageIterator.next().then(function(result) {
	   *   // No more messages
	   *   // result: { value: [], done: true }
	   * });
	   */
	  createMessagesIterator({
	    beforeTime,
	    beforeMessageId,
	    limit
	  } = {}) {
	    let promise;
	    return {
	      next: () => {
	        if (promise === undefined) {
	          // first call
	          promise = this.queryMessages({
	            limit,
	            startTime: beforeTime,
	            startMessageId: beforeMessageId
	          });
	        } else {
	          promise = promise.then(prevMessages => {
	            if (prevMessages.length === 0 || prevMessages.length < limit) {
	              // no more messages
	              return [];
	            }
	            return this.queryMessages({
	              startTime: prevMessages[0].timestamp,
	              startMessageId: prevMessages[0].id,
	              limit
	            });
	          });
	        }
	        return promise.then(value => ({
	          value: Array.from(value),
	          done: value.length === 0 || value.length < limit
	        }));
	      }
	    };
	  }

	  /**
	   * 将该会话标记为已读
	   * @return {Promise.<this>} self
	   */
	  async read() {
	    this.unreadMessagesCount = 0;
	    this._setUnreadMessagesMentioned(false);
	    // 跳过暂态会话
	    if (this.transient) return this;
	    const client = this._client;
	    if (!internal(client).readConversationsBuffer) {
	      internal(client).readConversationsBuffer = new Set();
	    }
	    internal(client).readConversationsBuffer.add(this);
	    client._doSendRead();
	    return this;
	  }
	  _handleReceipt({
	    messageId,
	    timestamp,
	    read
	  }) {
	    if (read) {
	      this._setLastReadAt(timestamp);
	    } else {
	      this._setLastDeliveredAt(timestamp);
	    }
	    const {
	      messagesWaitingForReceipt
	    } = internal(this);
	    const message = messagesWaitingForReceipt[messageId];
	    if (!message) return;
	    message._setStatus(MessageStatus.DELIVERED);
	    message.deliveredAt = timestamp;
	    delete messagesWaitingForReceipt[messageId];
	  }

	  /**
	   * 更新对话的最新回执时间戳（lastDeliveredAt、lastReadAt）
	   * @since 3.4.0
	   * @return {Promise.<this>} this
	   */
	  async fetchReceiptTimestamps() {
	    // 暂态/系统会话不支持回执
	    if (this.transient || this.system) return this;
	    const {
	      convMessage: {
	        maxReadTimestamp,
	        maxAckTimestamp
	      }
	    } = await this._send(new GenericCommand({
	      op: 'max_read'
	    }));
	    this._setLastDeliveredAt(maxAckTimestamp);
	    this._setLastReadAt(maxReadTimestamp);
	    return this;
	  }
	  _fetchAllReceiptTimestamps() {
	    // 暂态/系统会话不支持回执
	    if (this.transient || this.system) return this;
	    const convMessage = new ConvCommand({
	      queryAllMembers: true
	    });
	    return this._send(new GenericCommand({
	      op: 'max_read',
	      convMessage
	    })).then(({
	      convMessage: {
	        maxReadTuples
	      }
	    }) => maxReadTuples.filter(maxReadTuple => maxReadTuple.maxAckTimestamp || maxReadTuple.maxReadTimestamp).map(({
	      pid,
	      maxAckTimestamp,
	      maxReadTimestamp
	    }) => ({
	      pid,
	      lastDeliveredAt: decodeDate(maxAckTimestamp),
	      lastReadAt: decodeDate(maxReadTimestamp)
	    })));
	  }
	}

	const debug$8 = browser('LC:SignatureFactoryRunner');
	function _validateSignature(signatureResult = {}) {
	  const {
	    signature,
	    timestamp,
	    nonce
	  } = signatureResult;
	  if (typeof signature !== 'string' || typeof timestamp !== 'number' || typeof nonce !== 'string') {
	    throw new Error('malformed signature');
	  }
	  return {
	    signature,
	    timestamp,
	    nonce
	  };
	}
	var runSignatureFactory = ((signatureFactory, params) => Promise.resolve().then(() => {
	  debug$8('call signatureFactory with %O', params);
	  return signatureFactory(...params);
	}).then(tap(signatureResult => debug$8('sign result %O', signatureResult)), error => {
	  // eslint-disable-next-line no-param-reassign
	  error.message = `sign error: ${error.message}`;
	  debug$8(error);
	  throw error;
	}).then(_validateSignature));

	/**
	 * 部分失败异常
	 * @typedef OperationFailureError
	 * @type {Error}
	 * @property {string} message 异常信息
	 * @property {string[]} clientIds 因为该原因失败的 client id 列表
	 * @property {number} [code] 错误码
	 * @property {string} [detail] 详细信息
	 */

	/**
	 * 部分成功的结果
	 * @typedef PartiallySuccess
	 * @type {Object}
	 * @property {string[]} successfulClientIds 成功的 client id 列表
	 * @property {OperationFailureError[]} failures 失败的异常列表
	 */

	/**
	 * 分页查询结果
	 * @typedef PagedResults
	 * @type {Object}
	 * @property {T[]} results 查询结果
	 * @property {string} [next] 存在表示还有更多结果，在下次查询中带上可实现翻页。
	 */

	const createPartiallySuccess = ({
	  allowedPids,
	  failedPids
	}) => ({
	  successfulClientIds: allowedPids,
	  failures: failedPids.map(({
	    pids,
	    ...error
	  }) => Object.assign(createError(error), {
	    clientIds: pids
	  }))
	});

	/**
	 * @extends ConversationBase
	 * @private
	 * @abstract
	 */
	class PersistentConversation extends ConversationBase {
	  constructor(data, {
	    creator,
	    createdAt,
	    updatedAt,
	    transient = false,
	    system = false,
	    muted = false,
	    mutedMembers = [],
	    ...attributes
	  }, client) {
	    super({
	      ...data,
	      /**
	       * 对话创建者
	       * @memberof PersistentConversation#
	       * @type {String}
	       */
	      creator,
	      /**
	       * 对话创建时间
	       * @memberof PersistentConversation#
	       * @type {Date}
	       */
	      createdAt,
	      /**
	       * 对话更新时间
	       * @memberof PersistentConversation#
	       * @type {Date}
	       */
	      updatedAt,
	      /**
	       * 对该对话设置了静音的用户列表
	       * @memberof PersistentConversation#
	       * @type {?String[]}
	       */
	      mutedMembers,
	      /**
	       * 暂态对话标记
	       * @memberof PersistentConversation#
	       * @type {Boolean}
	       */
	      transient,
	      /**
	       * 系统对话标记
	       * @memberof PersistentConversation#
	       * @type {Boolean}
	       * @since 3.3.0
	       */
	      system,
	      /**
	       * 当前用户静音该对话标记
	       * @memberof PersistentConversation#
	       * @type {Boolean}
	       */
	      muted,
	      _attributes: attributes
	    }, client);
	    this._reset();
	  }
	  set createdAt(value) {
	    this._createdAt = decodeDate(value);
	  }
	  get createdAt() {
	    return this._createdAt;
	  }
	  set updatedAt(value) {
	    this._updatedAt = decodeDate(value);
	  }
	  get updatedAt() {
	    return this._updatedAt;
	  }

	  /**
	   * 对话名字，对应 _Conversation 表中的 name
	   * @type {String}
	   */
	  get name() {
	    return this.get('name');
	  }
	  set name(value) {
	    this.set('name', value);
	  }

	  /**
	   * 获取对话的自定义属性
	   * @since 3.2.0
	   * @param  {String} key key 属性的键名，'x' 对应 Conversation 表中的 x 列
	   * @return {Any} 属性的值
	   */
	  get(key) {
	    return get_1(internal(this).currentAttributes, key);
	  }

	  /**
	   * 设置对话的自定义属性
	   * @since 3.2.0
	   * @param {String} key 属性的键名，'x' 对应 Conversation 表中的 x 列，支持使用 'x.y.z' 来修改对象的部分字段。
	   * @param {Any} value 属性的值
	   * @return {this} self
	   * @example
	   *
	   * // 设置对话的 color 属性
	   * conversation.set('color', {
	   *   text: '#000',
	   *   background: '#DDD',
	   * });
	   * // 设置对话的 color.text 属性
	   * conversation.set('color.text', '#333');
	   */
	  set(key, value) {
	    this._debug(`set [${key}]: ${value}`);
	    const {
	      pendingAttributes
	    } = internal(this);
	    const pendingKeys = Object.keys(pendingAttributes);
	    // suppose pendingAttributes = { 'a.b': {} }
	    // set 'a' or 'a.b': delete 'a.b'
	    const re = new RegExp(`^${key}`);
	    const childKeys = pendingKeys.filter(re.test.bind(re));
	    childKeys.forEach(k => {
	      delete pendingAttributes[k];
	    });
	    if (childKeys.length) {
	      pendingAttributes[key] = value;
	    } else {
	      // set 'a.c': nothing to do
	      // set 'a.b.c.d': assign c: { d: {} } to 'a.b'
	      const parentKey = find_1(pendingKeys, k => key.indexOf(k) === 0); // 'a.b'
	      if (parentKey) {
	        setValue(pendingAttributes[parentKey], key.slice(parentKey.length + 1), value);
	      } else {
	        pendingAttributes[key] = value;
	      }
	    }
	    this._buildCurrentAttributes();
	    return this;
	  }
	  _buildCurrentAttributes() {
	    const {
	      pendingAttributes
	    } = internal(this);
	    internal(this).currentAttributes = Object.keys(pendingAttributes).reduce((target, k) => setValue(target, k, pendingAttributes[k]), cloneDeep_1(this._attributes));
	  }
	  _updateServerAttributes(attributes) {
	    Object.keys(attributes).forEach(key => setValue(this._attributes, key, attributes[key]));
	    this._buildCurrentAttributes();
	  }
	  _reset() {
	    Object.assign(internal(this), {
	      pendingAttributes: {},
	      currentAttributes: this._attributes
	    });
	  }

	  /**
	   * 保存当前对话的属性至服务器
	   * @return {Promise.<this>} self
	   */
	  async save() {
	    this._debug('save');
	    const attr = internal(this).pendingAttributes;
	    if (isEmpty_1(attr)) {
	      this._debug('nothing touched, resolve with self');
	      return this;
	    }
	    this._debug('attr: %O', attr);
	    const convMessage = new ConvCommand({
	      attr: new JsonObjectMessage({
	        data: JSON.stringify(encode(attr))
	      })
	    });
	    const resCommand = await this._send(new GenericCommand({
	      op: 'update',
	      convMessage
	    }));
	    this.updatedAt = resCommand.convMessage.udate;
	    this._attributes = internal(this).currentAttributes;
	    internal(this).pendingAttributes = {};
	    return this;
	  }

	  /**
	   * 从服务器更新对话的属性
	   * @return {Promise.<this>} self
	   */
	  async fetch() {
	    const query = this._client.getQuery().equalTo('objectId', this.id);
	    await query.find();
	    return this;
	  }

	  /**
	   * 静音，客户端拒绝收到服务器端的离线推送通知
	   * @return {Promise.<this>} self
	   */
	  async mute() {
	    this._debug('mute');
	    await this._send(new GenericCommand({
	      op: 'mute'
	    }));
	    if (!this.transient) {
	      this.muted = true;
	      this.mutedMembers = union(this.mutedMembers, [this._client.id]);
	    }
	    return this;
	  }

	  /**
	   * 取消静音
	   * @return {Promise.<this>} self
	   */
	  async unmute() {
	    this._debug('unmute');
	    await this._send(new GenericCommand({
	      op: 'unmute'
	    }));
	    if (!this.transient) {
	      this.muted = false;
	      this.mutedMembers = difference(this.mutedMembers, [this._client.id]);
	    }
	    return this;
	  }
	  async _appendConversationSignature(command, action, clientIds) {
	    if (this._client.options.conversationSignatureFactory) {
	      const params = [this.id, this._client.id, clientIds.sort(), action];
	      const signatureResult = await runSignatureFactory(this._client.options.conversationSignatureFactory, params);
	      Object.assign(command.convMessage, keyRemap({
	        signature: 's',
	        timestamp: 't',
	        nonce: 'n'
	      }, signatureResult));
	    }
	  }
	  async _appendBlacklistSignature(command, action, clientIds) {
	    if (this._client.options.blacklistSignatureFactory) {
	      const params = [this.id, this._client.id, clientIds.sort(), action];
	      const signatureResult = await runSignatureFactory(this._client.options.blacklistSignatureFactory, params);
	      Object.assign(command.blacklistMessage, keyRemap({
	        signature: 's',
	        timestamp: 't',
	        nonce: 'n'
	      }, signatureResult));
	    }
	  }

	  /**
	   * 增加成员
	   * @param {String|String[]} clientIds 新增成员 client id
	   * @return {Promise.<PartiallySuccess>} 部分成功结果，包含了成功的 id 列表、失败原因与对应的 id 列表
	   */
	  async add(clientIds) {
	    this._debug('add', clientIds);
	    if (typeof clientIds === 'string') {
	      clientIds = [clientIds]; // eslint-disable-line no-param-reassign
	    }

	    const command = new GenericCommand({
	      op: 'add',
	      convMessage: new ConvCommand({
	        m: clientIds
	      })
	    });
	    await this._appendConversationSignature(command, 'invite', clientIds);
	    const {
	      convMessage,
	      convMessage: {
	        allowedPids
	      }
	    } = await this._send(command);
	    this._addMembers(allowedPids);
	    return createPartiallySuccess(convMessage);
	  }

	  /**
	   * 剔除成员
	   * @param {String|String[]} clientIds 成员 client id
	   * @return {Promise.<PartiallySuccess>} 部分成功结果，包含了成功的 id 列表、失败原因与对应的 id 列表
	   */
	  async remove(clientIds) {
	    this._debug('remove', clientIds);
	    if (typeof clientIds === 'string') {
	      clientIds = [clientIds]; // eslint-disable-line no-param-reassign
	    }

	    const command = new GenericCommand({
	      op: 'remove',
	      convMessage: new ConvCommand({
	        m: clientIds
	      })
	    });
	    await this._appendConversationSignature(command, 'kick', clientIds);
	    const {
	      convMessage,
	      convMessage: {
	        allowedPids
	      }
	    } = await this._send(command);
	    this._removeMembers(allowedPids);
	    return createPartiallySuccess(convMessage);
	  }

	  /**
	   * （当前用户）加入该对话
	   * @return {Promise.<this>} self
	   */
	  async join() {
	    this._debug('join');
	    return this.add(this._client.id).then(({
	      failures
	    }) => {
	      if (failures[0]) throw failures[0];
	      return this;
	    });
	  }

	  /**
	   * （当前用户）退出该对话
	   * @return {Promise.<this>} self
	   */
	  async quit() {
	    this._debug('quit');
	    return this.remove(this._client.id).then(({
	      failures
	    }) => {
	      if (failures[0]) throw failures[0];
	      return this;
	    });
	  }

	  /**
	   * 在该对话中禁言成员
	   * @param {String|String[]} clientIds 成员 client id
	   * @return {Promise.<PartiallySuccess>} 部分成功结果，包含了成功的 id 列表、失败原因与对应的 id 列表
	   */
	  async muteMembers(clientIds) {
	    this._debug('mute', clientIds);
	    clientIds = ensureArray(clientIds); // eslint-disable-line no-param-reassign
	    const command = new GenericCommand({
	      op: OpType.add_shutup,
	      convMessage: new ConvCommand({
	        m: clientIds
	      })
	    });
	    const {
	      convMessage
	    } = await this._send(command);
	    return createPartiallySuccess(convMessage);
	  }

	  /**
	   * 在该对话中解除成员禁言
	   * @param {String|String[]} clientIds 成员 client id
	   * @return {Promise.<PartiallySuccess>} 部分成功结果，包含了成功的 id 列表、失败原因与对应的 id 列表
	   */
	  async unmuteMembers(clientIds) {
	    this._debug('unmute', clientIds);
	    clientIds = ensureArray(clientIds); // eslint-disable-line no-param-reassign
	    const command = new GenericCommand({
	      op: OpType.remove_shutup,
	      convMessage: new ConvCommand({
	        m: clientIds
	      })
	    });
	    const {
	      convMessage
	    } = await this._send(command);
	    return createPartiallySuccess(convMessage);
	  }

	  /**
	   * 查询该对话禁言成员列表
	   * @param {Object} [options]
	   * @param {Number} [options.limit] 返回的成员数量，服务器默认值 10
	   * @param {String} [options.next] 从指定 next 开始查询，与 limit 一起使用可以完成翻页。
	   * @return {PagedResults.<string>} 查询结果。其中的 cureser 存在表示还有更多结果。
	   */
	  async queryMutedMembers({
	    limit,
	    next
	  } = {}) {
	    this._debug('query muted: limit %O, next: %O', limit, next);
	    const command = new GenericCommand({
	      op: OpType.query_shutup,
	      convMessage: new ConvCommand({
	        limit,
	        next
	      })
	    });
	    const {
	      convMessage: {
	        m,
	        next: newNext
	      }
	    } = await this._send(command);
	    return {
	      results: m,
	      next: newNext
	    };
	  }

	  /**
	   * 将用户加入该对话黑名单
	   * @param {String|String[]} clientIds 成员 client id
	   * @return {Promise.<PartiallySuccess>} 部分成功结果，包含了成功的 id 列表、失败原因与对应的 id 列表
	   */
	  async blockMembers(clientIds) {
	    this._debug('block', clientIds);
	    clientIds = ensureArray(clientIds); // eslint-disable-line no-param-reassign
	    const command = new GenericCommand({
	      cmd: 'blacklist',
	      op: OpType.block,
	      blacklistMessage: new BlacklistCommand({
	        srcCid: this.id,
	        toPids: clientIds
	      })
	    });
	    await this._appendBlacklistSignature(command, 'conversation-block-clients', clientIds);
	    const {
	      blacklistMessage
	    } = await this._send(command);
	    return createPartiallySuccess(blacklistMessage);
	  }

	  /**
	   * 将用户移出该对话黑名单
	   * @param {String|String[]} clientIds 成员 client id
	   * @return {Promise.<PartiallySuccess>} 部分成功结果，包含了成功的 id 列表、失败原因与对应的 id 列表
	   */
	  async unblockMembers(clientIds) {
	    this._debug('unblock', clientIds);
	    clientIds = ensureArray(clientIds); // eslint-disable-line no-param-reassign
	    const command = new GenericCommand({
	      cmd: 'blacklist',
	      op: OpType.unblock,
	      blacklistMessage: new BlacklistCommand({
	        srcCid: this.id,
	        toPids: clientIds
	      })
	    });
	    await this._appendBlacklistSignature(command, 'conversation-unblock-clients', clientIds);
	    const {
	      blacklistMessage
	    } = await this._send(command);
	    return createPartiallySuccess(blacklistMessage);
	  }

	  /**
	   * 查询该对话黑名单
	   * @param {Object} [options]
	   * @param {Number} [options.limit] 返回的成员数量，服务器默认值 10
	   * @param {String} [options.next] 从指定 next 开始查询，与 limit 一起使用可以完成翻页
	   * @return {PagedResults.<string>} 查询结果。其中的 cureser 存在表示还有更多结果。
	   */
	  async queryBlockedMembers({
	    limit,
	    next
	  } = {}) {
	    this._debug('query blocked: limit %O, next: %O', limit, next);
	    const command = new GenericCommand({
	      cmd: 'blacklist',
	      op: OpType.query,
	      blacklistMessage: new BlacklistCommand({
	        srcCid: this.id,
	        limit,
	        next
	      })
	    });
	    const {
	      blacklistMessage: {
	        blockedPids,
	        next: newNext
	      }
	    } = await this._send(command);
	    return {
	      results: blockedPids,
	      next: newNext
	    };
	  }
	  toFullJSON() {
	    const {
	      creator,
	      system,
	      transient,
	      createdAt,
	      updatedAt,
	      _attributes
	    } = this;
	    return {
	      ...super.toFullJSON(),
	      creator,
	      system,
	      transient,
	      createdAt: getTime(createdAt),
	      updatedAt: getTime(updatedAt),
	      ..._attributes
	    };
	  }
	  toJSON() {
	    const {
	      creator,
	      system,
	      transient,
	      muted,
	      mutedMembers,
	      createdAt,
	      updatedAt,
	      _attributes
	    } = this;
	    return {
	      ...super.toJSON(),
	      creator,
	      system,
	      transient,
	      muted,
	      mutedMembers,
	      createdAt,
	      updatedAt,
	      ..._attributes
	    };
	  }
	}

	/**
	 * 对话成员角色枚举
	 * @enum {String}
	 * @since 4.0.0
	 * @memberof module:leancloud-realtime
	 */
	const ConversationMemberRole = {
	  /** 所有者 */
	  OWNER: 'Owner',
	  /** 管理员 */
	  MANAGER: 'Manager',
	  /** 成员 */
	  MEMBER: 'Member'
	};
	Object.freeze(ConversationMemberRole);
	class ConversationMemberInfo {
	  /**
	   * 对话成员属性，保存了成员与某个对话相关的属性，对应 _ConversationMemberInfo 表
	   * @since 4.0.0
	   */
	  constructor({
	    conversation,
	    memberId,
	    role
	  }) {
	    if (!conversation) throw new Error('conversation requried');
	    if (!memberId) throw new Error('memberId requried');
	    Object.assign(internal(this), {
	      conversation,
	      memberId,
	      role
	    });
	  }

	  /**
	   * 对话 Id
	   * @type {String}
	   * @readonly
	   */
	  get conversationId() {
	    return internal(this).conversation.id;
	  }

	  /**
	   * 成员 Id
	   * @type {String}
	   * @readonly
	   */
	  get memberId() {
	    return internal(this).memberId;
	  }

	  /**
	   * 角色
	   * @type {module:leancloud-realtime.ConversationMemberRole | String}
	   * @readonly
	   */
	  get role() {
	    if (this.isOwner) return ConversationMemberRole.OWNER;
	    return internal(this).role;
	  }

	  /**
	   * 是否是管理员
	   * @type {Boolean}
	   * @readonly
	   */
	  get isOwner() {
	    return this.memberId === internal(this).conversation.creator;
	  }
	  toJSON() {
	    const {
	      conversationId,
	      memberId,
	      role,
	      isOwner
	    } = this;
	    return {
	      conversationId,
	      memberId,
	      role,
	      isOwner
	    };
	  }
	}

	/**
	 * 普通对话
	 *
	 * 无法直接实例化，请使用 {@link IMClient#createConversation} 创建新的普通对话。
	 * @extends PersistentConversation
	 * @public
	 */
	class Conversation extends PersistentConversation {
	  _addMembers(members) {
	    super._addMembers(members);
	    this.members = union(this.members, members);
	    const {
	      memberInfoMap
	    } = internal(this);
	    if (!memberInfoMap) return;
	    members.forEach(memberId => {
	      memberInfoMap[memberId] = memberInfoMap[memberId] || new ConversationMemberInfo({
	        conversation: this,
	        memberId,
	        role: ConversationMemberRole.MEMBER
	      });
	    });
	  }
	  _removeMembers(members) {
	    super._removeMembers(members);
	    this.members = difference(this.members, members);
	    const {
	      memberInfoMap
	    } = internal(this);
	    if (!memberInfoMap) return;
	    members.forEach(memberId => {
	      delete memberInfoMap[memberId];
	    });
	  }
	  async _fetchAllMemberInfo() {
	    const response = await this._client._requestWithSessionToken({
	      method: 'GET',
	      path: '/classes/_ConversationMemberInfo',
	      query: {
	        where: {
	          cid: this.id
	        }
	      }
	    });
	    const memberInfos = response.results.map(info => new ConversationMemberInfo({
	      conversation: this,
	      memberId: info.clientId,
	      role: info.role
	    }));
	    const memberInfoMap = {};
	    memberInfos.forEach(memberInfo => {
	      memberInfoMap[memberInfo.memberId] = memberInfo;
	    });
	    this.members.forEach(memberId => {
	      memberInfoMap[memberId] = memberInfoMap[memberId] || new ConversationMemberInfo({
	        conversation: this,
	        memberId,
	        role: ConversationMemberRole.MEMBER
	      });
	    });
	    internal(this).memberInfoMap = memberInfoMap;
	    return memberInfoMap;
	  }

	  /**
	   * 获取所有成员的对话属性
	   * @since 4.0.0
	   * @return {Promise.<ConversationMemberInfo[]>} 所有成员的对话属性列表
	   */
	  async getAllMemberInfo({
	    noCache = false
	  } = {}) {
	    let {
	      memberInfoMap
	    } = internal(this);
	    if (!memberInfoMap || noCache) {
	      memberInfoMap = await this._fetchAllMemberInfo();
	    }
	    return this.members.map(memberId => memberInfoMap[memberId]);
	  }

	  /**
	   * 获取指定成员的对话属性
	   * @since 4.0.0
	   * @param {String} memberId 成员 Id
	   * @return {Promise.<ConversationMemberInfo>} 指定成员的对话属性
	   */
	  async getMemberInfo(memberId) {
	    if (this.members.indexOf(memberId) === -1) throw new Error(`${memberId} is not the mumber of conversation[${this.id}]`);
	    const {
	      memberInfoMap
	    } = internal(this);
	    if (!(memberInfoMap && memberInfoMap[memberId])) await this.getAllMemberInfo();
	    return internal(this).memberInfoMap[memberId];
	  }

	  /**
	   * 更新指定用户的角色
	   * @since 4.0.0
	   * @param {String} memberId 成员 Id
	   * @param {module:leancloud-realtime.ConversationMemberRole | String} role 角色
	   * @return {Promise.<this>} self
	   */
	  async updateMemberRole(memberId, role) {
	    this._debug('update member role');
	    if (role === ConversationMemberRole.OWNER) throw createError({
	      code: ErrorCode.OWNER_PROMOTION_NOT_ALLOWED
	    });
	    await this._send(new GenericCommand({
	      op: OpType.member_info_update,
	      convMessage: new ConvCommand({
	        targetClientId: memberId,
	        info: new ConvMemberInfo({
	          pid: memberId,
	          role
	        })
	      })
	    }));
	    const {
	      memberInfos
	    } = internal(this);
	    if (memberInfos && memberInfos[memberId]) {
	      internal(memberInfos[memberId]).role = role;
	    }
	    return this;
	  }
	}

	/**
	 * 聊天室。
	 *
	 * 无法直接实例化，请使用 {@link IMClient#createChatRoom} 创建新的聊天室。
	 * @since 4.0.0
	 * @extends PersistentConversation
	 * @public
	 */
	class ChatRoom extends PersistentConversation {}

	/**
	 * 服务号。
	 *
	 * 服务号不支持在客户端创建。
	 * @since 4.0.0
	 * @extends PersistentConversation
	 * @public
	 */
	class ServiceConversation extends PersistentConversation {
	  /**
	   * 订阅该服务号
	   * @return {Promise.<this>} self
	   */
	  async subscribe() {
	    return this.join();
	  }

	  /**
	   * 退订该服务号
	   * @return {Promise.<this>} self
	   */
	  async unsubscribe() {
	    return this.quit();
	  }
	}

	const transformNotFoundError = error => error.code === ErrorCode.CONVERSATION_NOT_FOUND ? createError({
	  code: ErrorCode.TEMPORARY_CONVERSATION_EXPIRED
	}) : error;

	/**
	 * 临时对话
	 * @since 4.0.0
	 * @extends ConversationBase
	 * @public
	 */
	class TemporaryConversation extends ConversationBase {
	  /**
	   * 无法直接实例化，请使用 {@link IMClient#createTemporaryConversation} 创建新的临时对话。
	   */
	  constructor(data, {
	    expiredAt
	  }, client) {
	    super({
	      ...data,
	      expiredAt
	    }, client);
	  }

	  /**
	   * 对话失效时间
	   * @type {Date}
	   */
	  set expiredAt(value) {
	    this._expiredAt = decodeDate(value);
	  }
	  get expiredAt() {
	    return this._expiredAt;
	  }

	  /**
	   * 对话是否已失效
	   * @type {Boolean}
	   */
	  get expired() {
	    return this.expiredAt < new Date();
	  }
	  async _send(...args) {
	    if (this.expired) throw createError({
	      code: ErrorCode.TEMPORARY_CONVERSATION_EXPIRED
	    });
	    try {
	      return await super._send(...args);
	    } catch (error) {
	      throw transformNotFoundError(error);
	    }
	  }
	  async send(...args) {
	    try {
	      return await super.send(...args);
	    } catch (error) {
	      throw transformNotFoundError(error);
	    }
	  }
	  toFullJSON() {
	    const {
	      expiredAt
	    } = this;
	    return {
	      ...super.toFullJSON(),
	      expiredAt: getTime(expiredAt)
	    };
	  }
	  toJSON() {
	    const {
	      expiredAt,
	      expired
	    } = this;
	    return {
	      ...super.toJSON(),
	      expiredAt,
	      expired
	    };
	  }
	}

	const debug$9 = browser('LC:ConversationQuery');
	class ConversationQuery {
	  static _encode(value) {
	    if (value instanceof Date) {
	      return {
	        __type: 'Date',
	        iso: value.toJSON()
	      };
	    }
	    if (value instanceof RegExp) {
	      return value.source;
	    }
	    return value;
	  }
	  static _quote(s) {
	    return `\\Q${s.replace('\\E', '\\E\\\\E\\Q')}\\E`;
	  }
	  static _calculateFlag(options) {
	    return ['withLastMessagesRefreshed', 'compact'].reduce(
	    // eslint-disable-next-line no-bitwise
	    (prev, key) => (prev << 1) + Boolean(options[key]), 0);
	  }

	  /**
	   * 构造一个用 AND 连接所有查询的 ConversationQuery
	   * @param {...ConversationQuery} queries
	   * @return {ConversationQuery}
	   */
	  static and(...queries) {
	    if (queries.length < 2) {
	      throw new Error('The queries must contain at least two elements');
	    }
	    if (!queries.every(q => q instanceof ConversationQuery)) {
	      throw new Error('The element of queries must be an instance of ConversationQuery');
	    }
	    const combined = new ConversationQuery(queries[0]._client);
	    combined._where.$and = queries.map(q => q._where);
	    return combined;
	  }

	  /**
	   * 构造一个用 OR 连接所有查询的 ConversationQuery
	   * @param  {...ConversationQuery} queries
	   * @return {ConversationQuery}
	   */
	  static or(...queries) {
	    const combined = ConversationQuery.and(...queries);
	    combined._where.$or = combined._where.$and;
	    delete combined._where.$and;
	    return combined;
	  }

	  /**
	   * Create a ConversationQuery
	   * @param  {IMClient} client
	   */
	  constructor(client) {
	    this._client = client;
	    this._where = {};
	    this._extraOptions = {};
	  }
	  _addCondition(key, condition, value) {
	    // Check if we already have a condition
	    if (!this._where[key]) {
	      this._where[key] = {};
	    }
	    this._where[key][condition] = this.constructor._encode(value);
	    return this;
	  }
	  toJSON() {
	    const json = {
	      where: this._where,
	      flag: this.constructor._calculateFlag(this._extraOptions)
	    };
	    if (typeof this._skip !== 'undefined') json.skip = this._skip;
	    if (typeof this._limit !== 'undefined') json.limit = this._limit;
	    if (typeof this._order !== 'undefined') json.sort = this._order;
	    debug$9(json);
	    return json;
	  }

	  /**
	   * 增加查询条件，指定聊天室的组员包含某些成员即可返回
	   * @param {string[]} peerIds - 成员 ID 列表
	   * @return {ConversationQuery} self
	   */
	  containsMembers(peerIds) {
	    return this.containsAll('m', peerIds);
	  }

	  /**
	   * 增加查询条件，指定聊天室的组员条件满足条件的才返回
	   *
	   * @param {string[]} - 成员 ID 列表
	   * @param {Boolean} includeSelf - 是否包含自己
	   * @return {ConversationQuery} self
	   */
	  withMembers(peerIds, includeSelf) {
	    const peerIdsSet = new Set(peerIds);
	    if (includeSelf) {
	      peerIdsSet.add(this._client.id);
	    }
	    this.sizeEqualTo('m', peerIdsSet.size);
	    return this.containsMembers(Array.from(peerIdsSet));
	  }

	  /**
	   * 增加查询条件，当 conversation 的属性中对应的字段满足等于条件时即可返回
	   *
	   * @param {string} key
	   * @param value
	   * @return {ConversationQuery} self
	   */
	  equalTo(key, value) {
	    this._where[key] = this.constructor._encode(value);
	    return this;
	  }

	  /**
	   * 增加查询条件，当 conversation 的属性中对应的字段满足小于条件时即可返回
	   * @param {string} key
	   * @param value
	   * @return {ConversationQuery} self
	   */
	  lessThan(key, value) {
	    return this._addCondition(key, '$lt', value);
	  }

	  /**
	   * 增加查询条件，当 conversation 的属性中对应的字段满足小于等于条件时即可返回
	    * @param {string} key
	   * @param value
	   * @return {ConversationQuery} self
	   */
	  lessThanOrEqualTo(key, value) {
	    return this._addCondition(key, '$lte', value);
	  }

	  /**
	   * 增加查询条件，当 conversation 的属性中对应的字段满足大于条件时即可返回
	   *
	   * @param {string} key
	   * @param value
	   * @return {ConversationQuery} self
	   */

	  greaterThan(key, value) {
	    return this._addCondition(key, '$gt', value);
	  }

	  /**
	   * 增加查询条件，当 conversation 的属性中对应的字段满足大于等于条件时即可返回
	   *
	   * @param {string} key
	   * @param value
	   * @return {ConversationQuery} self
	   */

	  greaterThanOrEqualTo(key, value) {
	    return this._addCondition(key, '$gte', value);
	  }

	  /**
	   * 增加查询条件，当 conversation 的属性中对应的字段满足不等于条件时即可返回
	   *
	   * @param {string} key
	   * @param value
	   * @return {ConversationQuery} self
	   */
	  notEqualTo(key, value) {
	    return this._addCondition(key, '$ne', value);
	  }

	  /**
	   * 增加查询条件，当 conversation 存在指定的字段时即可返回
	   *
	   * @since 3.5.0
	   * @param {string} key
	   * @return {ConversationQuery} self
	   */
	  exists(key) {
	    return this._addCondition(key, '$exists', true);
	  }

	  /**
	   * 增加查询条件，当 conversation 不存在指定的字段时即可返回
	   *
	   * @since 3.5.0
	   * @param {string} key
	   * @return {ConversationQuery} self
	   */
	  doesNotExist(key) {
	    return this._addCondition(key, '$exists', false);
	  }

	  /**
	   * 增加查询条件，当 conversation 的属性中对应的字段对应的值包含在指定值中时即可返回
	   *
	   * @param {string} key
	   * @param values
	   * @return {ConversationQuery} self
	   */
	  containedIn(key, values) {
	    return this._addCondition(key, '$in', values);
	  }

	  /**
	   * 增加查询条件，当 conversation 的属性中对应的字段对应的值不包含在指定值中时即可返回
	   *
	   * @param {string} key
	   * @param values
	   * @return {ConversationQuery} self
	   */
	  notContainsIn(key, values) {
	    return this._addCondition(key, '$nin', values);
	  }

	  /**
	   * 增加查询条件，当conversation的属性中对应的字段中的元素包含所有的值才可返回
	   *
	   * @param {string} key
	   * @param values
	   * @return {ConversationQuery} self
	   */
	  containsAll(key, values) {
	    return this._addCondition(key, '$all', values);
	  }

	  /**
	   * 增加查询条件，当 conversation 的属性中对应的字段对应的值包含此字符串即可返回
	   *
	   * @param {string} key
	   * @param {string} subString
	   * @return {ConversationQuery} self
	   */
	  contains(key, subString) {
	    return this._addCondition(key, '$regex', ConversationQuery._quote(subString));
	  }

	  /**
	   * 增加查询条件，当 conversation 的属性中对应的字段对应的值以此字符串起始即可返回
	   *
	   * @param {string} key
	   * @param {string} prefix
	   * @return {ConversationQuery} self
	   */
	  startsWith(key, prefix) {
	    return this._addCondition(key, '$regex', `^${ConversationQuery._quote(prefix)}`);
	  }

	  /**
	   * 增加查询条件，当 conversation 的属性中对应的字段对应的值以此字符串结束即可返回
	   *
	   * @param {string} key
	   * @param {string} suffix
	   * @return {ConversationQuery} self
	   */
	  endsWith(key, suffix) {
	    return this._addCondition(key, '$regex', `${ConversationQuery._quote(suffix)}$`);
	  }

	  /**
	   * 增加查询条件，当 conversation 的属性中对应的字段对应的值满足提供的正则表达式即可返回
	   *
	   * @param {string} key
	   * @param {RegExp} regex
	   * @return {ConversationQuery} self
	   */
	  matches(key, regex) {
	    this._addCondition(key, '$regex', regex);
	    // Javascript regex options support mig as inline options but store them
	    // as properties of the object. We support mi & should migrate them to
	    // modifiers
	    let _modifiers = '';
	    if (regex.ignoreCase) {
	      _modifiers += 'i';
	    }
	    if (regex.multiline) {
	      _modifiers += 'm';
	    }
	    if (_modifiers && _modifiers.length) {
	      this._addCondition(key, '$options', _modifiers);
	    }
	    return this;
	  }

	  /**
	   * 添加查询约束条件，查找 key 类型是数组，该数组的长度匹配提供的数值
	   *
	   * @param {string} key
	   * @param {Number} length
	   * @return {ConversationQuery} self
	   */
	  sizeEqualTo(key, length) {
	    return this._addCondition(key, '$size', length);
	  }

	  /**
	   * 设置返回集合的大小上限
	   *
	   * @param {Number} limit - 上限
	   * @return {ConversationQuery} self
	   */
	  limit(limit) {
	    this._limit = limit;
	    return this;
	  }

	  /**
	   * 设置返回集合的起始位置，一般用于分页
	   *
	   * @param {Number} skip - 起始位置跳过几个对象
	   * @return {ConversationQuery} self
	   */
	  skip(skip) {
	    this._skip = skip;
	    return this;
	  }

	  /**
	   * 设置返回集合按照指定key进行增序排列
	   *
	   * @param {string} key
	   * @return {ConversationQuery} self
	   */
	  ascending(key) {
	    this._order = key;
	    return this;
	  }

	  /**
	   * 设置返回集合按照指定key进行增序排列，如果已设置其他排序，原排序的优先级较高
	   *
	   * @param {string} key
	   * @return {ConversationQuery} self
	   */
	  addAscending(key) {
	    if (this._order) {
	      this._order += `,${key}`;
	    } else {
	      this._order = key;
	    }
	    return this;
	  }

	  /**
	   * 设置返回集合按照指定 key 进行降序排列
	   *
	   * @param {string} key
	   * @return {ConversationQuery} self
	   */
	  descending(key) {
	    this._order = `-${key}`;
	    return this;
	  }

	  /**
	   * 设置返回集合按照指定 key 进行降序排列，如果已设置其他排序，原排序的优先级较高
	   *
	   * @param {string} key
	   * @return {ConversationQuery} self
	   */
	  addDescending(key) {
	    if (this._order) {
	      this._order += `,-${key}`;
	    } else {
	      this._order = `-${key}`;
	    }
	    return this;
	  }

	  /**
	   * 设置返回的 conversations 刷新最后一条消息
	   * @param  {Boolean} [enabled=true]
	   * @return {ConversationQuery} self
	   */
	  withLastMessagesRefreshed(enabled = true) {
	    this._extraOptions.withLastMessagesRefreshed = enabled;
	    return this;
	  }

	  /**
	   * 设置返回的 conversations 为精简模式，即不含成员列表
	   * @param  {Boolean} [enabled=true]
	   * @return {ConversationQuery} self
	   */
	  compact(enabled = true) {
	    this._extraOptions.compact = enabled;
	    return this;
	  }

	  /**
	   * 执行查询
	   * @return {Promise.<ConversationBase[]>}
	   */
	  async find() {
	    return this._client._executeQuery(this);
	  }

	  /**
	   * 返回符合条件的第一个结果
	   * @return {Promise.<ConversationBase>}
	   */
	  async first() {
	    return (await this.limit(1).find())[0];
	  }
	}

	const debug$a = browser('LC:SessionManager');
	class SessionManager {
	  constructor({
	    refresh,
	    onBeforeGetSessionToken
	  } = {}) {
	    this.refresh = refresh;
	    this._onBeforeGetSessionToken = onBeforeGetSessionToken;
	    this.setSessionToken(null, 0);
	  }
	  setSessionToken(token, ttl) {
	    debug$a('set session token', token, ttl);
	    const sessionToken = new Expirable(token, ttl * 1000);
	    this._sessionToken = sessionToken;
	    delete this._pendingSessionTokenPromise;
	    return sessionToken;
	  }
	  async setSessionTokenAsync(promise) {
	    const currentSessionToken = this._sessionToken;
	    this._pendingSessionTokenPromise = promise.catch(error => {
	      // revert, otherwise the following getSessionToken calls
	      // will all be rejected
	      this._sessionToken = currentSessionToken;
	      throw error;
	    });
	    return this.setSessionToken(...(await this._pendingSessionTokenPromise));
	  }
	  async getSessionToken({
	    autoRefresh = true
	  } = {}) {
	    debug$a('get session token');
	    if (this._onBeforeGetSessionToken) {
	      this._onBeforeGetSessionToken(this);
	    }
	    const {
	      value,
	      originalValue
	    } = this._sessionToken || (await this._pendingSessionTokenPromise);
	    if (value === Expirable.EXPIRED && autoRefresh && this.refresh) {
	      debug$a('refresh expired session token');
	      const {
	        value: newValue
	      } = await this.setSessionTokenAsync(this.refresh(this, originalValue));
	      debug$a('session token', newValue);
	      return newValue;
	    }
	    debug$a('session token', value);
	    return value;
	  }
	  revoke() {
	    if (this._sessionToken) this._sessionToken.expiredAt = -1;
	  }
	}

	var _dec$2, _dec2, _class$3;
	const debug$b = browser('LC:IMClient');
	const {
	  INVITED: INVITED$1,
	  KICKED: KICKED$1,
	  MEMBERS_JOINED: MEMBERS_JOINED$1,
	  MEMBERS_LEFT: MEMBERS_LEFT$1,
	  MEMBER_INFO_UPDATED: MEMBER_INFO_UPDATED$1,
	  BLOCKED: BLOCKED$1,
	  UNBLOCKED: UNBLOCKED$1,
	  MEMBERS_BLOCKED: MEMBERS_BLOCKED$1,
	  MEMBERS_UNBLOCKED: MEMBERS_UNBLOCKED$1,
	  MUTED: MUTED$1,
	  UNMUTED: UNMUTED$1,
	  MEMBERS_MUTED: MEMBERS_MUTED$1,
	  MEMBERS_UNMUTED: MEMBERS_UNMUTED$1,
	  MESSAGE: MESSAGE$2,
	  UNREAD_MESSAGES_COUNT_UPDATE: UNREAD_MESSAGES_COUNT_UPDATE$1,
	  CLOSE: CLOSE$1,
	  CONFLICT: CONFLICT$1,
	  UNHANDLED_MESSAGE: UNHANDLED_MESSAGE$1,
	  CONVERSATION_INFO_UPDATED: CONVERSATION_INFO_UPDATED$1,
	  MESSAGE_RECALL: MESSAGE_RECALL$1,
	  MESSAGE_UPDATE: MESSAGE_UPDATE$1,
	  INFO_UPDATED: INFO_UPDATED$1
	} = IMEvent;
	const isTemporaryConversatrionId = id => /^_tmp:/.test(id);

	/**
	 * 1 patch-msg
	 * 1 temp-conv-msg
	 * 0 auto-bind-deviceid-and-installation
	 * 1 transient-msg-ack
	 * 1 keep-notification
	 * 1 partial-failed-msg
	 * 0 group-chat-rcp
	 * 1 omit-peer-id
	 * @ignore
	 */
	const configBitmap = 0b10111011;
	let IMClient = (_dec$2 = throttle(1000), _dec2 = throttle(1000), (_class$3 = class IMClient extends eventemitter3 {
	  /**
	   * 无法直接实例化，请使用 {@link Realtime#createIMClient} 创建新的 IMClient。
	   *
	   * @extends EventEmitter
	   */
	  constructor(id, options = {}, props) {
	    if (!(id === undefined || typeof id === 'string')) {
	      throw new TypeError(`Client id [${id}] is not a String`);
	    }
	    super();
	    Object.assign(this, {
	      /**
	       * @var id {String} 客户端 id
	       * @memberof IMClient#
	       */
	      id,
	      options
	    }, props);
	    if (!this._messageParser) {
	      throw new Error('IMClient must be initialized with a MessageParser');
	    }
	    this._conversationCache = new Cache(`client:${this.id}`);
	    this._ackMessageBuffer = {};
	    internal(this).lastPatchTime = Date.now();
	    internal(this).lastNotificationTime = undefined;
	    internal(this)._eventemitter = new eventemitter3();
	    if (debug$b.enabled) {
	      values_1(IMEvent).forEach(event => this.on(event, (...payload) => this._debug(`${event} event emitted. %o`, payload)));
	    }
	    // onIMClientCreate hook
	    applyDecorators(this._plugins.onIMClientCreate, this);
	  }
	  _debug(...params) {
	    debug$b(...params, `[${this.id}]`);
	  }

	  /**
	   * @override
	   * @private
	   */
	  async _dispatchCommand(command) {
	    this._debug(trim(command), 'received');
	    if (command.serverTs && command.notificationType === 1) {
	      internal(this).lastNotificationTime = getTime(decodeDate(command.serverTs));
	    }
	    switch (command.cmd) {
	      case CommandType.conv:
	        return this._dispatchConvMessage(command);
	      case CommandType.direct:
	        return this._dispatchDirectMessage(command);
	      case CommandType.session:
	        return this._dispatchSessionMessage(command);
	      case CommandType.unread:
	        return this._dispatchUnreadMessage(command);
	      case CommandType.rcp:
	        return this._dispatchRcpMessage(command);
	      case CommandType.patch:
	        return this._dispatchPatchMessage(command);
	      default:
	        return this.emit(UNHANDLED_MESSAGE$1, command);
	    }
	  }
	  async _dispatchSessionMessage(message) {
	    const {
	      sessionMessage: {
	        code,
	        reason
	      }
	    } = message;
	    switch (message.op) {
	      case OpType.closed:
	        {
	          internal(this)._eventemitter.emit('close');
	          if (code === ErrorCode.SESSION_CONFLICT) {
	            /**
	             * 用户在其他客户端登录，当前客户端被服务端强行下线。详见文档「单点登录」章节。
	             * @event IMClient#CONFLICT
	             * @param {Object} payload
	             * @param {string} payload.reason 原因
	             */
	            return this.emit(CONFLICT$1, {
	              reason
	            });
	          }
	          /**
	           * 当前客户端被服务端强行下线
	           * @event IMClient#CLOSE
	           * @param {Object} payload
	           * @param {Number} payload.code 错误码
	           * @param {String} payload.reason 原因
	           */
	          return this.emit(CLOSE$1, {
	            code,
	            reason
	          });
	        }
	      default:
	        this.emit(UNHANDLED_MESSAGE$1, message);
	        throw new Error('Unrecognized session command');
	    }
	  }
	  _dispatchUnreadMessage({
	    unreadMessage: {
	      convs,
	      notifTime
	    }
	  }) {
	    internal(this).lastUnreadNotifTime = notifTime;
	    // ensure all converstions are cached
	    return this.getConversations(convs.map(conv => conv.cid)).then(() =>
	    // update conversations data
	    Promise.all(convs.map(({
	      cid,
	      unread,
	      mid,
	      timestamp: ts,
	      from,
	      data,
	      binaryMsg,
	      patchTimestamp,
	      mentioned
	    }) => {
	      const conversation = this._conversationCache.get(cid);
	      // deleted conversation
	      if (!conversation) return null;
	      let timestamp;
	      if (ts) {
	        timestamp = decodeDate(ts);
	        conversation.lastMessageAt = timestamp; // eslint-disable-line no-param-reassign
	      }

	      return (mid ? this._messageParser.parse(binaryMsg || data).then(message => {
	        const messageProps = {
	          id: mid,
	          cid,
	          timestamp,
	          updatedAt: patchTimestamp,
	          from
	        };
	        Object.assign(message, messageProps);
	        conversation.lastMessage = message; // eslint-disable-line no-param-reassign
	      }) : Promise.resolve()).then(() => {
	        conversation._setUnreadMessagesMentioned(mentioned);
	        const countNotUpdated = unread === internal(conversation).unreadMessagesCount;
	        if (countNotUpdated) return null; // to be filtered
	        // manipulate internal property directly to skip unreadmessagescountupdate event
	        internal(conversation).unreadMessagesCount = unread;
	        return conversation;
	      });
	      // filter conversations without unread count update
	    })).then(conversations => conversations.filter(conversation => conversation))).then(conversations => {
	      if (conversations.length) {
	        /**
	         * 未读消息数目更新
	         * @event IMClient#UNREAD_MESSAGES_COUNT_UPDATE
	         * @since 3.4.0
	         * @param {Conversation[]} conversations 未读消息数目有更新的对话列表
	         */
	        this.emit(UNREAD_MESSAGES_COUNT_UPDATE$1, conversations);
	      }
	    });
	  }
	  async _dispatchRcpMessage(message) {
	    const {
	      rcpMessage,
	      rcpMessage: {
	        read
	      }
	    } = message;
	    const conversationId = rcpMessage.cid;
	    const messageId = rcpMessage.id;
	    const timestamp = decodeDate(rcpMessage.t);
	    const conversation = this._conversationCache.get(conversationId);
	    // conversation not cached means the client does not send the message
	    // during this session
	    if (!conversation) return;
	    conversation._handleReceipt({
	      messageId,
	      timestamp,
	      read
	    });
	  }
	  _dispatchPatchMessage({
	    patchMessage: {
	      patches
	    }
	  }) {
	    // ensure all converstions are cached
	    return this.getConversations(patches.map(patch => patch.cid)).then(() => Promise.all(patches.map(({
	      cid,
	      mid,
	      timestamp,
	      recall,
	      data,
	      patchTimestamp,
	      from,
	      binaryMsg,
	      mentionAll,
	      mentionPids,
	      patchCode,
	      patchReason
	    }) => {
	      const conversation = this._conversationCache.get(cid);
	      // deleted conversation
	      if (!conversation) return null;
	      return this._messageParser.parse(binaryMsg || data).then(message => {
	        const patchTime = getTime(decodeDate(patchTimestamp));
	        const messageProps = {
	          id: mid,
	          cid,
	          timestamp,
	          updatedAt: patchTime,
	          from,
	          mentionList: mentionPids,
	          mentionedAll: mentionAll
	        };
	        Object.assign(message, messageProps);
	        message._setStatus(MessageStatus.SENT);
	        message._updateMentioned(this.id);
	        if (internal(this).lastPatchTime < patchTime) {
	          internal(this).lastPatchTime = patchTime;
	        }
	        // update conversation lastMessage
	        if (conversation.lastMessage && conversation.lastMessage.id === mid) {
	          conversation.lastMessage = message; // eslint-disable-line no-param-reassign
	        }

	        let reason;
	        if (patchCode) {
	          reason = {
	            code: patchCode.toNumber(),
	            detail: patchReason
	          };
	        }
	        if (recall) {
	          /**
	           * 消息被撤回
	           * @event IMClient#MESSAGE_RECALL
	           * @param {AVMessage} message 被撤回的消息
	           * @param {ConversationBase} conversation 消息所在的会话
	           * @param {PatchReason} [reason] 撤回的原因，不存在代表是发送者主动撤回
	           */
	          this.emit(MESSAGE_RECALL$1, message, conversation, reason);
	          /**
	           * 消息被撤回
	           * @event ConversationBase#MESSAGE_RECALL
	           * @param {AVMessage} message 被撤回的消息
	           * @param {PatchReason} [reason] 撤回的原因，不存在代表是发送者主动撤回
	           */
	          conversation.emit(MESSAGE_RECALL$1, message, reason);
	        } else {
	          /**
	           * 消息被修改
	           * @event IMClient#MESSAGE_UPDATE
	           * @param {AVMessage} message 被修改的消息
	           * @param {ConversationBase} conversation 消息所在的会话
	           * @param {PatchReason} [reason] 修改的原因，不存在代表是发送者主动修改
	           */
	          this.emit(MESSAGE_UPDATE$1, message, conversation, reason);
	          /**
	           * 消息被修改
	           * @event ConversationBase#MESSAGE_UPDATE
	           * @param {AVMessage} message 被修改的消息
	           * @param {PatchReason} [reason] 修改的原因，不存在代表是发送者主动修改
	           */
	          conversation.emit(MESSAGE_UPDATE$1, message, reason);
	        }
	      });
	    })));
	  }
	  async _dispatchConvMessage(message) {
	    const {
	      convMessage,
	      convMessage: {
	        initBy,
	        m,
	        info,
	        attr
	      }
	    } = message;
	    const conversation = await this.getConversation(convMessage.cid);
	    switch (message.op) {
	      case OpType.joined:
	        {
	          conversation._addMembers([this.id]);
	          const payload = {
	            invitedBy: initBy
	          };
	          /**
	           * 当前用户被添加至某个对话
	           * @event IMClient#INVITED
	           * @param {Object} payload
	           * @param {String} payload.invitedBy 邀请者 id
	           * @param {ConversationBase} conversation
	           */
	          this.emit(INVITED$1, payload, conversation);
	          /**
	           * 当前用户被添加至当前对话
	           * @event ConversationBase#INVITED
	           * @param {Object} payload
	           * @param {String} payload.invitedBy 该移除操作的发起者 id
	           */
	          conversation.emit(INVITED$1, payload);
	          return;
	        }
	      case OpType.left:
	        {
	          conversation._removeMembers([this.id]);
	          const payload = {
	            kickedBy: initBy
	          };
	          /**
	           * 当前用户被从某个对话中移除
	           * @event IMClient#KICKED
	           * @param {Object} payload
	           * @param {String} payload.kickedBy 该移除操作的发起者 id
	           * @param {ConversationBase} conversation
	           */
	          this.emit(KICKED$1, payload, conversation);
	          /**
	           * 当前用户被从当前对话中移除
	           * @event ConversationBase#KICKED
	           * @param {Object} payload
	           * @param {String} payload.kickedBy 该移除操作的发起者 id
	           */
	          conversation.emit(KICKED$1, payload);
	          return;
	        }
	      case OpType.members_joined:
	        {
	          conversation._addMembers(m);
	          const payload = {
	            invitedBy: initBy,
	            members: m
	          };
	          /**
	           * 有用户被添加至某个对话
	           * @event IMClient#MEMBERS_JOINED
	           * @param {Object} payload
	           * @param {String[]} payload.members 被添加的用户 id 列表
	           * @param {String} payload.invitedBy 邀请者 id
	           * @param {ConversationBase} conversation
	           */
	          this.emit(MEMBERS_JOINED$1, payload, conversation);
	          /**
	           * 有成员被添加至当前对话
	           * @event ConversationBase#MEMBERS_JOINED
	           * @param {Object} payload
	           * @param {String[]} payload.members 被添加的成员 id 列表
	           * @param {String} payload.invitedBy 邀请者 id
	           */
	          conversation.emit(MEMBERS_JOINED$1, payload);
	          return;
	        }
	      case OpType.members_left:
	        {
	          conversation._removeMembers(m);
	          const payload = {
	            kickedBy: initBy,
	            members: m
	          };
	          /**
	           * 有成员被从某个对话中移除
	           * @event IMClient#MEMBERS_LEFT
	           * @param {Object} payload
	           * @param {String[]} payload.members 被移除的成员 id 列表
	           * @param {String} payload.kickedBy 该移除操作的发起者 id
	           * @param {ConversationBase} conversation
	           */
	          this.emit(MEMBERS_LEFT$1, payload, conversation);
	          /**
	           * 有成员被从当前对话中移除
	           * @event ConversationBase#MEMBERS_LEFT
	           * @param {Object} payload
	           * @param {String[]} payload.members 被移除的成员 id 列表
	           * @param {String} payload.kickedBy 该移除操作的发起者 id
	           */
	          conversation.emit(MEMBERS_LEFT$1, payload);
	          return;
	        }
	      case OpType.members_blocked:
	        {
	          const payload = {
	            blockedBy: initBy,
	            members: m
	          };
	          /**
	           * 有成员被加入某个对话的黑名单
	           * @event IMClient#MEMBERS_BLOCKED
	           * @param {Object} payload
	           * @param {String[]} payload.members 成员 id 列表
	           * @param {String} payload.blockedBy 该操作的发起者 id
	           * @param {ConversationBase} conversation
	           */
	          this.emit(MEMBERS_BLOCKED$1, payload, conversation);
	          /**
	           * 有成员被加入当前对话的黑名单
	           * @event ConversationBase#MEMBERS_BLOCKED
	           * @param {Object} payload
	           * @param {String[]} payload.members 成员 id 列表
	           * @param {String} payload.blockedBy 该操作的发起者 id
	           */
	          conversation.emit(MEMBERS_BLOCKED$1, payload);
	          return;
	        }
	      case OpType.members_unblocked:
	        {
	          const payload = {
	            unblockedBy: initBy,
	            members: m
	          };
	          /**
	           * 有成员被移出某个对话的黑名单
	           * @event IMClient#MEMBERS_UNBLOCKED
	           * @param {Object} payload
	           * @param {String[]} payload.members 成员 id 列表
	           * @param {String} payload.unblockedBy 该操作的发起者 id
	           * @param {ConversationBase} conversation
	           */
	          this.emit(MEMBERS_UNBLOCKED$1, payload, conversation);
	          /**
	           * 有成员被移出当前对话的黑名单
	           * @event ConversationBase#MEMBERS_UNBLOCKED
	           * @param {Object} payload
	           * @param {String[]} payload.members 成员 id 列表
	           * @param {String} payload.unblockedBy 该操作的发起者 id
	           */
	          conversation.emit(MEMBERS_UNBLOCKED$1, payload);
	          return;
	        }
	      case OpType.blocked:
	        {
	          const payload = {
	            blockedBy: initBy
	          };
	          /**
	           * 当前用户被加入某个对话的黑名单
	           * @event IMClient#BLOCKED
	           * @param {Object} payload
	           * @param {String} payload.blockedBy 该操作的发起者 id
	           * @param {ConversationBase} conversation
	           */
	          this.emit(BLOCKED$1, payload, conversation);
	          /**
	           * 当前用户被加入当前对话的黑名单
	           * @event ConversationBase#BLOCKED
	           * @param {Object} payload
	           * @param {String} payload.blockedBy 该操作的发起者 id
	           */
	          conversation.emit(BLOCKED$1, payload);
	          return;
	        }
	      case OpType.unblocked:
	        {
	          const payload = {
	            unblockedBy: initBy
	          };
	          /**
	           * 当前用户被移出某个对话的黑名单
	           * @event IMClient#UNBLOCKED
	           * @param {Object} payload
	           * @param {String} payload.unblockedBy 该操作的发起者 id
	           * @param {ConversationBase} conversation
	           */
	          this.emit(UNBLOCKED$1, payload, conversation);
	          /**
	           * 当前用户被移出当前对话的黑名单
	           * @event ConversationBase#UNBLOCKED
	           * @param {Object} payload
	           * @param {String} payload.unblockedBy 该操作的发起者 id
	           */
	          conversation.emit(UNBLOCKED$1, payload);
	          return;
	        }
	      case OpType.members_shutuped:
	        {
	          const payload = {
	            mutedBy: initBy,
	            members: m
	          };
	          /**
	           * 有成员在某个对话中被禁言
	           * @event IMClient#MEMBERS_MUTED
	           * @param {Object} payload
	           * @param {String[]} payload.members 成员 id 列表
	           * @param {String} payload.mutedBy 该操作的发起者 id
	           * @param {ConversationBase} conversation
	           */
	          this.emit(MEMBERS_MUTED$1, payload, conversation);
	          /**
	           * 有成员在当前对话中被禁言
	           * @event ConversationBase#MEMBERS_MUTED
	           * @param {Object} payload
	           * @param {String[]} payload.members 成员 id 列表
	           * @param {String} payload.mutedBy 该操作的发起者 id
	           */
	          conversation.emit(MEMBERS_MUTED$1, payload);
	          return;
	        }
	      case OpType.members_unshutuped:
	        {
	          const payload = {
	            unmutedBy: initBy,
	            members: m
	          };
	          /**
	           * 有成员在某个对话中被解除禁言
	           * @event IMClient#MEMBERS_UNMUTED
	           * @param {Object} payload
	           * @param {String[]} payload.members 成员 id 列表
	           * @param {String} payload.unmutedBy 该操作的发起者 id
	           * @param {ConversationBase} conversation
	           */
	          this.emit(MEMBERS_UNMUTED$1, payload, conversation);
	          /**
	           * 有成员在当前对话中被解除禁言
	           * @event ConversationBase#MEMBERS_UNMUTED
	           * @param {Object} payload
	           * @param {String[]} payload.members 成员 id 列表
	           * @param {String} payload.unmutedBy 该操作的发起者 id
	           */
	          conversation.emit(MEMBERS_UNMUTED$1, payload);
	          return;
	        }
	      case OpType.shutuped:
	        {
	          const payload = {
	            mutedBy: initBy
	          };
	          /**
	           * 有成员在某个对话中被禁言
	           * @event IMClient#MUTED
	           * @param {Object} payload
	           * @param {String} payload.mutedBy 该操作的发起者 id
	           * @param {ConversationBase} conversation
	           */
	          this.emit(MUTED$1, payload, conversation);
	          /**
	           * 有成员在当前对话中被禁言
	           * @event ConversationBase#MUTED
	           * @param {Object} payload
	           * @param {String} payload.mutedBy 该操作的发起者 id
	           */
	          conversation.emit(MUTED$1, payload);
	          return;
	        }
	      case OpType.unshutuped:
	        {
	          const payload = {
	            unmutedBy: initBy
	          };
	          /**
	           * 有成员在某个对话中被解除禁言
	           * @event IMClient#UNMUTED
	           * @param {Object} payload
	           * @param {String} payload.unmutedBy 该操作的发起者 id
	           * @param {ConversationBase} conversation
	           */
	          this.emit(UNMUTED$1, payload, conversation);
	          /**
	           * 有成员在当前对话中被解除禁言
	           * @event ConversationBase#UNMUTED
	           * @param {Object} payload
	           * @param {String} payload.unmutedBy 该操作的发起者 id
	           */
	          conversation.emit(UNMUTED$1, payload);
	          return;
	        }
	      case OpType.member_info_changed:
	        {
	          const {
	            pid,
	            role
	          } = info;
	          const {
	            memberInfoMap
	          } = internal(conversation);
	          // 如果不存在缓存，且不是 role 的更新，则不通知
	          if (!memberInfoMap && !role) return;
	          const memberInfo = await conversation.getMemberInfo(pid);
	          internal(memberInfo).role = role;
	          const payload = {
	            member: pid,
	            memberInfo,
	            updatedBy: initBy
	          };
	          /**
	           * 有成员的对话信息被更新
	           * @event IMClient#MEMBER_INFO_UPDATED
	           * @param {Object} payload
	           * @param {String} payload.member 被更新对话信息的成员 id
	           * @param {ConversationMumberInfo} payload.memberInfo 被更新的成员对话信息
	           * @param {String} payload.updatedBy 该操作的发起者 id
	           * @param {ConversationBase} conversation
	           */
	          this.emit(MEMBER_INFO_UPDATED$1, payload, conversation);
	          /**
	           * 有成员的对话信息被更新
	           * @event ConversationBase#MEMBER_INFO_UPDATED
	           * @param {Object} payload
	           * @param {String} payload.member 被更新对话信息的成员 id
	           * @param {ConversationMumberInfo} payload.memberInfo 被更新的成员对话信息
	           * @param {String} payload.updatedBy 该操作的发起者 id
	           */
	          conversation.emit(MEMBER_INFO_UPDATED$1, payload);
	          return;
	        }
	      case OpType.updated:
	        {
	          const attributes = decode(JSON.parse(attr.data));
	          conversation._updateServerAttributes(attributes);
	          const payload = {
	            attributes,
	            updatedBy: initBy
	          };
	          /**
	           * 该对话信息被更新
	           * @event IMClient#CONVERSATION_INFO_UPDATED
	           * @param {Object} payload
	           * @param {Object} payload.attributes 被更新的属性
	           * @param {String} payload.updatedBy 该操作的发起者 id
	           * @param {ConversationBase} conversation
	           */
	          this.emit(CONVERSATION_INFO_UPDATED$1, payload, conversation);
	          /**
	           * 有对话信息被更新
	           * @event ConversationBase#INFO_UPDATED
	           * @param {Object} payload
	           * @param {Object} payload.attributes 被更新的属性
	           * @param {String} payload.updatedBy 该操作的发起者 id
	           */
	          conversation.emit(INFO_UPDATED$1, payload);
	          return;
	        }
	      default:
	        this.emit(UNHANDLED_MESSAGE$1, message);
	        throw new Error('Unrecognized conversation command');
	    }
	  }
	  _dispatchDirectMessage(originalMessage) {
	    const {
	      directMessage,
	      directMessage: {
	        id,
	        cid,
	        fromPeerId,
	        timestamp,
	        transient,
	        patchTimestamp,
	        mentionPids,
	        mentionAll,
	        binaryMsg,
	        msg
	      }
	    } = originalMessage;
	    const content = binaryMsg ? binaryMsg.toArrayBuffer() : msg;
	    return Promise.all([this.getConversation(directMessage.cid), this._messageParser.parse(content)]).then(([conversation, message]) => {
	      // deleted conversation
	      if (!conversation) return undefined;
	      const messageProps = {
	        id,
	        cid,
	        timestamp,
	        updatedAt: patchTimestamp,
	        from: fromPeerId,
	        mentionList: mentionPids,
	        mentionedAll: mentionAll
	      };
	      Object.assign(message, messageProps);
	      message._updateMentioned(this.id);
	      message._setStatus(MessageStatus.SENT);
	      // filter outgoing message sent from another device
	      if (message.from !== this.id) {
	        if (!(transient || conversation.transient)) {
	          this._sendAck(message);
	        }
	      }
	      return this._dispatchParsedMessage(message, conversation);
	    });
	  }
	  _dispatchParsedMessage(message, conversation) {
	    // beforeMessageDispatch hook
	    return applyDispatcher(this._plugins.beforeMessageDispatch, [message, conversation]).then(shouldDispatch => {
	      if (shouldDispatch === false) return;
	      conversation.lastMessage = message; // eslint-disable-line no-param-reassign
	      conversation.lastMessageAt = message.timestamp; // eslint-disable-line no-param-reassign
	      // filter outgoing message sent from another device
	      if (message.from !== this.id) {
	        conversation.unreadMessagesCount += 1; // eslint-disable-line no-param-reassign
	        if (message.mentioned) conversation._setUnreadMessagesMentioned(true);
	      }
	      /**
	       * 当前用户收到消息
	       * @event IMClient#MESSAGE
	       * @param {Message} message
	       * @param {ConversationBase} conversation 收到消息的对话
	       */
	      this.emit(MESSAGE$2, message, conversation);
	      /**
	       * 当前对话收到消息
	       * @event ConversationBase#MESSAGE
	       * @param {Message} message
	       */
	      conversation.emit(MESSAGE$2, message);
	    });
	  }
	  _sendAck(message) {
	    this._debug('send ack for %O', message);
	    const {
	      cid
	    } = message;
	    if (!cid) {
	      throw new Error('missing cid');
	    }
	    if (!this._ackMessageBuffer[cid]) {
	      this._ackMessageBuffer[cid] = [];
	    }
	    this._ackMessageBuffer[cid].push(message);
	    return this._doSendAck();
	  }

	  // jsdoc-ignore-start
	  // jsdoc-ignore-end
	  _doSendAck() {
	    // if not connected, just skip everything
	    if (!this._connection.is('connected')) return;
	    this._debug('do send ack %O', this._ackMessageBuffer);
	    Promise.all(Object.keys(this._ackMessageBuffer).map(cid => {
	      const convAckMessages = this._ackMessageBuffer[cid];
	      const timestamps = convAckMessages.map(message => message.timestamp);
	      const command = new GenericCommand({
	        cmd: 'ack',
	        ackMessage: new AckCommand({
	          cid,
	          fromts: Math.min.apply(null, timestamps),
	          tots: Math.max.apply(null, timestamps)
	        })
	      });
	      delete this._ackMessageBuffer[cid];
	      return this._send(command, false).catch(error => {
	        this._debug('send ack failed: %O', error);
	        this._ackMessageBuffer[cid] = convAckMessages;
	      });
	    }));
	  }
	  _omitPeerId(value) {
	    internal(this).peerIdOmittable = value;
	  }
	  _send(cmd, ...args) {
	    const command = cmd;
	    if (!internal(this).peerIdOmittable && this.id) {
	      command.peerId = this.id;
	    }
	    return this._connection.send(command, ...args);
	  }
	  async _open(appId, tag, deviceId, isReconnect = false) {
	    this._debug('open session');
	    const {
	      lastUnreadNotifTime,
	      lastPatchTime,
	      lastNotificationTime
	    } = internal(this);
	    const command = new GenericCommand({
	      cmd: 'session',
	      op: 'open',
	      appId,
	      peerId: this.id,
	      sessionMessage: new SessionCommand({
	        ua: `js/${version}`,
	        r: isReconnect,
	        lastUnreadNotifTime,
	        lastPatchTime,
	        configBitmap
	      })
	    });
	    if (!isReconnect) {
	      Object.assign(command.sessionMessage, trim({
	        tag,
	        deviceId
	      }));
	      if (this.options.signatureFactory) {
	        const signatureResult = await runSignatureFactory(this.options.signatureFactory, [this._identity]);
	        Object.assign(command.sessionMessage, keyRemap({
	          signature: 's',
	          timestamp: 't',
	          nonce: 'n'
	        }, signatureResult));
	      }
	    } else {
	      const sessionToken = await this._sessionManager.getSessionToken({
	        autoRefresh: false
	      });
	      if (sessionToken && sessionToken !== Expirable.EXPIRED) {
	        Object.assign(command.sessionMessage, {
	          st: sessionToken
	        });
	      }
	    }
	    let resCommand;
	    try {
	      resCommand = await this._send(command);
	    } catch (error) {
	      if (error.code === ErrorCode.SESSION_TOKEN_EXPIRED) {
	        if (!this._sessionManager) {
	          // let it fail if sessoinToken not cached but command rejected as token expired
	          // to prevent session openning flood
	          throw new Error('Unexpected session expiration');
	        }
	        debug$b('Session token expired, reopening');
	        this._sessionManager.revoke();
	        return this._open(appId, tag, deviceId, isReconnect);
	      }
	      throw error;
	    }
	    const {
	      peerId,
	      sessionMessage,
	      sessionMessage: {
	        st: token,
	        stTtl: tokenTTL,
	        code
	      },
	      serverTs
	    } = resCommand;
	    if (code) {
	      throw createError(sessionMessage);
	    }
	    if (peerId) {
	      this.id = peerId;
	      if (!this._identity) this._identity = peerId;
	      if (token) {
	        this._sessionManager = this._sessionManager || this._createSessionManager();
	        this._sessionManager.setSessionToken(token, tokenTTL);
	      }
	      const serverTime = getTime(decodeDate(serverTs));
	      if (serverTs) {
	        internal(this).lastPatchTime = serverTime;
	      }
	      if (lastNotificationTime) {
	        // Do not await for it as this is failable
	        this._syncNotifications(lastNotificationTime).catch(error => console.warn('Syncing notifications failed:', error));
	      } else {
	        // Set timestamp to now for next reconnection
	        internal(this).lastNotificationTime = serverTime;
	      }
	    } else {
	      console.warn('Unexpected session opened without peerId.');
	    }
	    return undefined;
	  }
	  async _syncNotifications(timestamp) {
	    const {
	      hasMore,
	      notifications
	    } = await this._fetchNotifications(timestamp);
	    notifications.forEach(notification => {
	      const {
	        cmd,
	        op,
	        serverTs,
	        notificationType,
	        ...payload
	      } = notification;
	      this._dispatchCommand({
	        cmd: CommandType[cmd],
	        op: OpType[op],
	        serverTs,
	        notificationType,
	        [`${cmd}Message`]: payload
	      });
	    });
	    if (hasMore) {
	      return this._syncNotifications(internal(this).lastNotificationTime);
	    }
	    return undefined;
	  }
	  async _fetchNotifications(timestamp) {
	    return this._requestWithSessionToken({
	      method: 'GET',
	      path: '/rtm/notifications',
	      query: {
	        start_ts: timestamp,
	        notification_type: 'permanent'
	      }
	    });
	  }
	  _createSessionManager() {
	    debug$b('create SessionManager');
	    return new SessionManager({
	      onBeforeGetSessionToken: this._connection.checkConnectionAvailability.bind(this._connection),
	      refresh: (manager, expiredSessionToken) => manager.setSessionTokenAsync(Promise.resolve(new GenericCommand({
	        cmd: 'session',
	        op: 'refresh',
	        sessionMessage: new SessionCommand({
	          ua: `js/${version}`,
	          st: expiredSessionToken
	        })
	      })).then(async command => {
	        if (this.options.signatureFactory) {
	          const signatureResult = await runSignatureFactory(this.options.signatureFactory, [this._identity]);
	          Object.assign(command.sessionMessage, keyRemap({
	            signature: 's',
	            timestamp: 't',
	            nonce: 'n'
	          }, signatureResult));
	        }
	        return command;
	      }).then(this._send.bind(this)).then(({
	        sessionMessage: {
	          st: token,
	          stTtl: ttl
	        }
	      }) => [token, ttl]))
	    });
	  }
	  async _requestWithSessionToken({
	    headers,
	    query,
	    ...params
	  }) {
	    const sessionToken = await this._sessionManager.getSessionToken();
	    return this._request({
	      headers: {
	        'X-LC-IM-Session-Token': sessionToken,
	        ...headers
	      },
	      query: {
	        client_id: this.id,
	        ...query
	      },
	      ...params
	    });
	  }

	  /**
	   * 关闭客户端
	   * @return {Promise}
	   */
	  async close() {
	    this._debug('close session');
	    const _ee = internal(this)._eventemitter;
	    _ee.emit('beforeclose');
	    if (this._connection.is('connected')) {
	      const command = new GenericCommand({
	        cmd: 'session',
	        op: 'close'
	      });
	      await this._send(command);
	    }
	    _ee.emit('close');
	    this.emit(CLOSE$1, {
	      code: 0
	    });
	  }

	  /**
	   * 获取 client 列表中在线的 client，每次查询最多 20 个 clientId，超出部分会被忽略
	   * @param  {String[]} clientIds 要查询的 client ids
	   * @return {Primse.<String[]>} 在线的 client ids
	   */
	  async ping(clientIds) {
	    this._debug('ping');
	    if (!(clientIds instanceof Array)) {
	      throw new TypeError(`clientIds ${clientIds} is not an Array`);
	    }
	    if (!clientIds.length) {
	      return Promise.resolve([]);
	    }
	    const command = new GenericCommand({
	      cmd: 'session',
	      op: 'query',
	      sessionMessage: new SessionCommand({
	        sessionPeerIds: clientIds
	      })
	    });
	    const resCommand = await this._send(command);
	    return resCommand.sessionMessage.onlineSessionPeerIds;
	  }

	  /**
	   * 获取某个特定的对话
	   * @param  {String} id 对话 id，对应 _Conversation 表中的 objectId
	   * @param  {Boolean} [noCache=false] 强制不从缓存中获取
	   * @return {Promise.<ConversationBase>} 如果 id 对应的对话不存在则返回 null
	   */
	  async getConversation(id, noCache = false) {
	    if (typeof id !== 'string') {
	      throw new TypeError(`${id} is not a String`);
	    }
	    if (!noCache) {
	      const cachedConversation = this._conversationCache.get(id);
	      if (cachedConversation) {
	        return cachedConversation;
	      }
	    }
	    if (isTemporaryConversatrionId(id)) {
	      return (await this._getTemporaryConversations([id]))[0] || null;
	    }
	    return this.getQuery().equalTo('objectId', id).find().then(conversations => conversations[0] || null);
	  }

	  /**
	   * 通过 id 批量获取某个特定的对话
	   * @since 3.4.0
	   * @param  {String[]} ids 对话 id 列表，对应 _Conversation 表中的 objectId
	   * @param  {Boolean} [noCache=false] 强制不从缓存中获取
	   * @return {Promise.<ConversationBase[]>} 如果 id 对应的对话不存在则返回 null
	   */
	  async getConversations(ids, noCache = false) {
	    const remoteConversationIds = noCache ? ids : ids.filter(id => this._conversationCache.get(id) === null);
	    if (remoteConversationIds.length) {
	      const remoteTemporaryConversationIds = remove_1(remoteConversationIds, isTemporaryConversatrionId);
	      const query = [];
	      if (remoteConversationIds.length) {
	        query.push(this.getQuery().containedIn('objectId', remoteConversationIds).limit(999).find());
	      }
	      if (remoteTemporaryConversationIds.length) {
	        const remoteTemporaryConversationsPromise = remoteTemporaryConversationIds.map(this._getTemporaryConversations.bind(this));
	        query.push(...remoteTemporaryConversationsPromise);
	      }
	      await Promise.all(query);
	    }
	    return ids.map(id => this._conversationCache.get(id));
	  }
	  async _getTemporaryConversations(ids) {
	    const command = new GenericCommand({
	      cmd: 'conv',
	      op: 'query',
	      convMessage: new ConvCommand({
	        tempConvIds: ids
	      })
	    });
	    const resCommand = await this._send(command);
	    return this._handleQueryResults(resCommand);
	  }

	  /**
	   * 构造一个 ConversationQuery 来查询对话
	   * @return {ConversationQuery.<PersistentConversation>}
	   */
	  getQuery() {
	    return new ConversationQuery(this);
	  }

	  /**
	   * 构造一个 ConversationQuery 来查询聊天室
	   * @return {ConversationQuery.<ChatRoom>}
	   */
	  getChatRoomQuery() {
	    return this.getQuery().equalTo('tr', true);
	  }

	  /**
	   * 构造一个 ConversationQuery 来查询服务号
	   * @return {ConversationQuery.<ServiceConversation>}
	   */
	  getServiceConversationQuery() {
	    return this.getQuery().equalTo('sys', true);
	  }
	  async _executeQuery(query) {
	    const queryJSON = query.toJSON();
	    queryJSON.where = new JsonObjectMessage({
	      data: JSON.stringify(encode(queryJSON.where))
	    });
	    const command = new GenericCommand({
	      cmd: 'conv',
	      op: 'query',
	      convMessage: new ConvCommand(queryJSON)
	    });
	    const resCommand = await this._send(command);
	    return this._handleQueryResults(resCommand);
	  }
	  async _handleQueryResults(resCommand) {
	    let conversations;
	    try {
	      conversations = decode(JSON.parse(resCommand.convMessage.results.data));
	    } catch (error) {
	      const commandString = JSON.stringify(trim(resCommand));
	      throw new Error(`Parse query result failed: ${error.message}. Command: ${commandString}`);
	    }
	    conversations = await Promise.all(conversations.map(this._parseConversationFromRawData.bind(this)));
	    return conversations.map(this._upsertConversationToCache.bind(this));
	  }
	  _upsertConversationToCache(fetchedConversation) {
	    let conversation = this._conversationCache.get(fetchedConversation.id);
	    if (!conversation) {
	      conversation = fetchedConversation;
	      this._debug('no match, set cache');
	      this._conversationCache.set(fetchedConversation.id, fetchedConversation);
	    } else {
	      this._debug('update cached conversation');
	      ['creator', 'createdAt', 'updatedAt', 'lastMessageAt', 'lastMessage', 'mutedMembers', 'members', '_attributes', 'transient', 'muted'].forEach(key => {
	        const value = fetchedConversation[key];
	        if (value !== undefined) conversation[key] = value;
	      });
	      if (conversation._reset) conversation._reset();
	    }
	    return conversation;
	  }

	  /**
	   * 反序列化消息，与 {@link Message#toFullJSON} 相对。
	   * @param {Object}
	   * @return {AVMessage} 解析后的消息
	   * @since 4.0.0
	   */
	  async parseMessage({
	    data,
	    bin = false,
	    ...properties
	  }) {
	    const content = bin ? base64Arraybuffer_2(data) : data;
	    const message = await this._messageParser.parse(content);
	    Object.assign(message, properties);
	    message._updateMentioned(this.id);
	    return message;
	  }

	  /**
	   * 反序列化对话，与 {@link Conversation#toFullJSON} 相对。
	   * @param {Object}
	   * @return {ConversationBase} 解析后的对话
	   * @since 4.0.0
	   */
	  async parseConversation({
	    id,
	    lastMessageAt,
	    lastMessage,
	    lastDeliveredAt,
	    lastReadAt,
	    unreadMessagesCount,
	    members,
	    mentioned,
	    ...properties
	  }) {
	    const conversationData = {
	      id,
	      lastMessageAt,
	      lastMessage,
	      lastDeliveredAt,
	      lastReadAt,
	      unreadMessagesCount,
	      members,
	      mentioned
	    };
	    if (lastMessage) {
	      conversationData.lastMessage = await this.parseMessage(lastMessage);
	      conversationData.lastMessage._setStatus(MessageStatus.SENT);
	    }
	    const {
	      transient,
	      system,
	      expiredAt
	    } = properties;
	    if (transient) return new ChatRoom(conversationData, properties, this);
	    if (system) return new ServiceConversation(conversationData, properties, this);
	    if (expiredAt || isTemporaryConversatrionId(id)) {
	      return new TemporaryConversation(conversationData, {
	        expiredAt
	      }, this);
	    }
	    return new Conversation(conversationData, properties, this);
	  }
	  async _parseConversationFromRawData(rawData) {
	    const data = keyRemap({
	      objectId: 'id',
	      lm: 'lastMessageAt',
	      m: 'members',
	      tr: 'transient',
	      sys: 'system',
	      c: 'creator',
	      mu: 'mutedMembers'
	    }, rawData);
	    if (data.msg) {
	      data.lastMessage = {
	        data: data.msg,
	        bin: data.bin,
	        from: data.msg_from,
	        id: data.msg_mid,
	        timestamp: data.msg_timestamp,
	        updatedAt: data.patch_timestamp
	      };
	      delete data.lastMessageFrom;
	      delete data.lastMessageId;
	      delete data.lastMessageTimestamp;
	      delete data.lastMessagePatchTimestamp;
	    }
	    const {
	      ttl
	    } = data;
	    if (ttl) data.expiredAt = Date.now() + ttl * 1000;
	    return this.parseConversation(data);
	  }

	  /**
	   * 创建一个对话
	   * @param {Object} options 除了下列字段外的其他字段将被视为对话的自定义属性
	   * @param {String[]} options.members 对话的初始成员列表，默认包含当前 client
	   * @param {String} [options.name] 对话的名字
	   * @param {Boolean} [options.unique=true] 唯一对话，当其为 true 时，如果当前已经有相同成员的对话存在则返回该对话，否则会创建新的对话
	   * @return {Promise.<Conversation>}
	   */
	  async createConversation({
	    members: m,
	    name,
	    transient,
	    unique = true,
	    _tempConv: tempConv,
	    _tempConvTTL: tempConvTTL,
	    ...properties
	  } = {}) {
	    if (!(transient || Array.isArray(m))) {
	      throw new TypeError(`conversation members ${m} is not an array`);
	    }
	    let members = new Set(m);
	    members.add(this.id);
	    members = Array.from(members).sort();
	    let attr = properties || {};
	    if (name) {
	      if (typeof name !== 'string') {
	        throw new TypeError(`conversation name ${name} is not a string`);
	      }
	      attr.name = name;
	    }
	    attr = new JsonObjectMessage({
	      data: JSON.stringify(encode(attr))
	    });
	    const startCommandJson = {
	      m: members,
	      attr,
	      transient,
	      unique,
	      tempConv,
	      tempConvTTL
	    };
	    const command = new GenericCommand({
	      cmd: 'conv',
	      op: 'start',
	      convMessage: new ConvCommand(startCommandJson)
	    });
	    if (this.options.conversationSignatureFactory) {
	      const params = [null, this._identity, members, 'create'];
	      const signatureResult = await runSignatureFactory(this.options.conversationSignatureFactory, params);
	      Object.assign(command.convMessage, keyRemap({
	        signature: 's',
	        timestamp: 't',
	        nonce: 'n'
	      }, signatureResult));
	    }
	    const {
	      convMessage: {
	        cid,
	        cdate,
	        tempConvTTL: ttl
	      }
	    } = await this._send(command);
	    const data = {
	      name,
	      transient,
	      unique,
	      id: cid,
	      createdAt: cdate,
	      updatedAt: cdate,
	      lastMessageAt: null,
	      creator: this.id,
	      members: transient ? [] : members,
	      ...properties
	    };
	    if (ttl) data.expiredAt = Date.now() + ttl * 1000;
	    const conversation = await this.parseConversation(data);
	    return this._upsertConversationToCache(conversation);
	  }

	  /**
	   * 创建一个聊天室
	   * @since 4.0.0
	   * @param {Object} options 除了下列字段外的其他字段将被视为对话的自定义属性
	   * @param {String} [options.name] 对话的名字
	   * @return {Promise.<ChatRoom>}
	   */
	  async createChatRoom(param) {
	    return this.createConversation({
	      ...param,
	      transient: true,
	      members: null,
	      unique: false,
	      _tempConv: false
	    });
	  }

	  /**
	   * 创建一个临时对话
	   * @since 4.0.0
	   * @param {Object} options
	   * @param {String[]} options.members 对话的初始成员列表，默认包含当前 client
	   * @param {String} [options.ttl] 对话存在时间，单位为秒，最大值与默认值均为 86400（一天），过期后该对话不再可用。
	   * @return {Promise.<TemporaryConversation>}
	   */
	  async createTemporaryConversation({
	    ttl: _tempConvTTL,
	    ...param
	  }) {
	    return this.createConversation({
	      ...param,
	      _tempConv: true,
	      _tempConvTTL
	    });
	  }

	  // jsdoc-ignore-start
	  // jsdoc-ignore-end
	  _doSendRead() {
	    // if not connected, just skip everything
	    if (!this._connection.is('connected')) return;
	    const buffer = internal(this).readConversationsBuffer;
	    const conversations = Array.from(buffer);
	    if (!conversations.length) return;
	    const ids = conversations.map(conversation => {
	      if (!(conversation instanceof ConversationBase)) {
	        throw new TypeError(`${conversation} is not a Conversation`);
	      }
	      return conversation.id;
	    });
	    this._debug(`mark [${ids}] as read`);
	    buffer.clear();
	    this._sendReadCommand(conversations).catch(error => {
	      this._debug('send read failed: %O', error);
	      conversations.forEach(buffer.add.bind(buffer));
	    });
	  }
	  _sendReadCommand(conversations) {
	    return this._send(new GenericCommand({
	      cmd: 'read',
	      readMessage: new ReadCommand({
	        convs: conversations.map(conversation => new ReadTuple({
	          cid: conversation.id,
	          mid: conversation.lastMessage && conversation.lastMessage.from !== this.id ? conversation.lastMessage.id : undefined,
	          timestamp: (conversation.lastMessageAt || new Date()).getTime()
	        }))
	      })
	    }), false);
	  }
	}, (_applyDecoratedDescriptor(_class$3.prototype, "_doSendAck", [_dec$2], Object.getOwnPropertyDescriptor(_class$3.prototype, "_doSendAck"), _class$3.prototype), _applyDecoratedDescriptor(_class$3.prototype, "_doSendRead", [_dec2], Object.getOwnPropertyDescriptor(_class$3.prototype, "_doSendRead"), _class$3.prototype)), _class$3));
	/**
	 * 修改、撤回消息的原因
	 * @typedef PatchReason
	 * @type {Object}
	 * @property {number} code 负数为内置 code，正数为开发者在 hook 中自定义的 code。比如因为敏感词过滤被修改的 code 为 -4408。
	 * @property {string} [detail] 具体的原因说明。
	 */

	const RECONNECT_ERROR = 'reconnecterror';

	var CoreEvent = /*#__PURE__*/Object.freeze({
		__proto__: null,
		RECONNECT_ERROR: RECONNECT_ERROR,
		DISCONNECT: DISCONNECT,
		RECONNECT: RECONNECT,
		RETRY: RETRY,
		SCHEDULE: SCHEDULE,
		OFFLINE: OFFLINE,
		ONLINE: ONLINE
	});

	var _class$4;
	// jsdoc-ignore-start
	let BinaryMessage = IE10Compatible(_class$4 = class BinaryMessage extends Message {
	  /**
	   * 二进制消息
	   * @extends Message
	   * @param {ArrayBuffer} buffer
	   * @since 4.0.0
	   */
	  constructor(buffer) {
	    if (!(buffer instanceof ArrayBuffer)) {
	      throw new TypeError(`${buffer} is not an ArrayBuffer`);
	    }
	    super(buffer);
	  }

	  /**
	   * @type ArrayBuffer
	   */
	  get buffer() {
	    return this.content;
	  }
	  set buffer(buffer) {
	    this.content = buffer;
	  }
	  static validate(target) {
	    return target instanceof ArrayBuffer;
	  }
	  toJSON() {
	    return {
	      ...super._toJSON(),
	      data: base64Arraybuffer_1(this.content)
	    };
	  }
	  toFullJSON() {
	    return {
	      ...super.toFullJSON(),
	      bin: true,
	      data: base64Arraybuffer_1(this.content)
	    };
	  }
	}) || _class$4;

	var _dec$3, _class$5;

	// jsdoc-ignore-start
	let TextMessage = (_dec$3 = messageType(-1), _dec$3(_class$5 = IE10Compatible(_class$5 = class TextMessage extends TypedMessage {
	  /**
	   * 文类类型消息
	   * @extends TypedMessage
	   * @param  {String} [text='']
	   * @throws {TypeError} text 不是 String 类型
	   */
	  constructor(text = '') {
	    if (typeof text !== 'string') {
	      throw new TypeError(`${text} is not a string`);
	    }
	    super();
	    this.setText(text);
	  }
	}) || _class$5) || _class$5);
	/**
	 * @name TYPE
	 * @memberof TextMessage
	 * @type Number
	 * @static
	 * @const
	 */

	var _class$6;
	const debug$c = browser('LC:MessageParser');
	const tryParseJson = (target, key, descriptor) => {
	  const fn = descriptor.value;
	  // eslint-disable-next-line no-param-reassign
	  descriptor.value = function wrapper(param) {
	    let content;
	    if (typeof param !== 'string') {
	      content = param;
	    } else {
	      try {
	        content = JSON.parse(param);
	      } catch (error) {
	        content = param;
	      }
	    }
	    return fn.call(this, content);
	  };
	};
	const applyPlugins = (target, key, descriptor) => {
	  const fn = descriptor.value;
	  // eslint-disable-next-line no-param-reassign
	  descriptor.value = function wrapper(json) {
	    return Promise.resolve(json).then(applyMiddlewares(this._plugins.beforeMessageParse)).then(decoratedJson => fn.call(this, decoratedJson)).then(applyMiddlewares(this._plugins.afterMessageParse));
	  };
	};
	let MessageParser = (_class$6 = class MessageParser {
	  /**
	   * 消息解析器
	   * @param {Object} plugins 插件，插件的 messageClasses 会自动被注册，在解析时 beforeMessageParse 与 afterMessageParse Middleware 会被应用。
	   */
	  constructor(plugins = {}) {
	    this._plugins = plugins;
	    this._messageClasses = [];
	    this.register(plugins.messageClasses);
	  }

	  /**
	   * 注册消息类
	   *
	   * @param  {Function | Function[]} messageClass 消息类，需要实现 {@link AVMessage} 接口，
	   * 建议继承自 {@link TypedMessage}，也可以传入一个消息类数组。
	   * @throws {TypeError} 如果 messageClass 没有实现 {@link AVMessage} 接口则抛出异常
	   */
	  register(messageClasses) {
	    ensureArray(messageClasses).map(klass => this._register(klass));
	  }
	  _register(messageClass) {
	    if (messageClass && messageClass.parse && messageClass.prototype && messageClass.prototype.getPayload) {
	      this._messageClasses.unshift(messageClass);
	    } else {
	      throw new TypeError('Invalid messageClass');
	    }
	  }

	  // jsdoc-ignore-start
	  // jsdoc-ignore-end
	  /**
	   * 解析消息内容
	   * @param {Object | string | any} target 消息内容，如果是字符串会尝试 parse 为 JSON。
	   * @return {AVMessage} 解析后的消息
	   * @throws {Error} 如果不匹配任何注册的消息则抛出异常
	   */
	  parse(content) {
	    debug$c('parsing message: %O', content);
	    // eslint-disable-next-line
	    for (const Klass of this._messageClasses) {
	      const contentCopy = isPlainObject_1(content) ? {
	        ...content
	      } : content;
	      let valid;
	      let result;
	      try {
	        valid = Klass.validate(contentCopy);
	      } catch (error) {
	        // eslint-disable-line no-empty
	      }
	      if (valid) {
	        try {
	          result = Klass.parse(contentCopy);
	        } catch (error) {
	          console.warn('parsing a valid message content error', {
	            error,
	            Klass,
	            content: contentCopy
	          });
	        }
	        if (result !== undefined) {
	          debug$c('parse result: %O', result);
	          return result;
	        }
	      }
	    }
	    throw new Error('No Message Class matched');
	  }
	}, (_applyDecoratedDescriptor(_class$6.prototype, "parse", [tryParseJson, applyPlugins], Object.getOwnPropertyDescriptor(_class$6.prototype, "parse"), _class$6.prototype)), _class$6);

	/** @module leancloud-realtime */
	const debug$d = browser('LC:IMPlugin');

	/**
	 * 消息优先级枚举
	 * @enum {Number}
	 * @since 3.3.0
	 */
	const MessagePriority = {
	  /** 高 */
	  HIGH: 1,
	  /** 普通 */
	  NORMAL: 2,
	  /** 低 */
	  LOW: 3
	};
	Object.freeze(MessagePriority);

	/**
	 * 为 Conversation 定义一个新属性
	 * @param {String} prop 属性名
	 * @param {Object} [descriptor] 属性的描述符，参见 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor#Description getOwnPropertyDescriptor#Description - MDN}，默认为该属性名对应的 Conversation 自定义属性的 getter/setter
	 * @returns void
	 * @example
	 *
	 * conversation.get('type');
	 * conversation.set('type', 1);
	 *
	 * // equals to
	 * defineConversationProperty('type');
	 * conversation.type;
	 * conversation.type = 1;
	 */
	const defineConversationProperty = (prop, descriptor = {
	  get() {
	    return this.get(prop);
	  },
	  set(value) {
	    this.set(prop, value);
	  }
	}) => {
	  Object.defineProperty(Conversation.prototype, prop, descriptor);
	};
	const onRealtimeCreate = realtime => {
	  /* eslint-disable no-param-reassign */
	  const deviceId = v4_1();
	  realtime._IMClients = {};
	  realtime._IMClientsCreationCount = 0;
	  const messageParser = new MessageParser(realtime._plugins);
	  realtime._messageParser = messageParser;
	  const signAVUser = async user => realtime._request({
	    method: 'POST',
	    path: '/rtm/sign',
	    data: {
	      session_token: user.getSessionToken()
	    }
	  });

	  /**
	   * 注册消息类
	   *
	   * 在接收消息、查询消息时，会按照消息类注册顺序的逆序依次尝试解析消息内容
	   *
	   * @memberof Realtime
	   * @instance
	   * @param  {Function | Function[]} messageClass 消息类，需要实现 {@link AVMessage} 接口，
	   * 建议继承自 {@link TypedMessage}
	   * @throws {TypeError} 如果 messageClass 没有实现 {@link AVMessage} 接口则抛出异常
	   */
	  const register = messageParser.register.bind(messageParser);
	  /**
	   * 创建一个即时通讯客户端，多次创建相同 id 的客户端会返回同一个实例
	   * @memberof Realtime
	   * @instance
	   * @param  {String|AV.User} [identity] 客户端 identity，如果不指定该参数，服务端会随机生成一个字符串作为 identity，
	   * 如果传入一个已登录的 AV.User，则会使用该用户的 id 作为客户端 identity 登录。
	   * @param  {Object} [options]
	   * @param  {Function} [options.signatureFactory] open session 时的签名方法 // TODO need details
	   * @param  {Function} [options.conversationSignatureFactory] 对话创建、增减成员操作时的签名方法
	   * @param  {Function} [options.blacklistSignatureFactory] 黑名单操作时的签名方法
	   * @param  {String} [options.tag] 客户端类型标记，以支持单点登录功能
	   * @param  {String} [options.isReconnect=false] 单点登录时标记该次登录是不是应用启动时自动重新登录
	   * @return {Promise.<IMClient>}
	   */
	  const createIMClient = async (identity, {
	    tag,
	    isReconnect,
	    ...clientOptions
	  } = {}, lagecyTag) => {
	    let id;
	    const buildinOptions = {};
	    if (identity) {
	      if (typeof identity === 'string') {
	        id = identity;
	      } else if (identity.id && identity.getSessionToken) {
	        ({
	          id
	        } = identity);
	        const sessionToken = identity.getSessionToken();
	        if (!sessionToken) {
	          throw new Error('User must be authenticated');
	        }
	        buildinOptions.signatureFactory = signAVUser;
	      } else {
	        throw new TypeError('Identity must be a String or an AV.User');
	      }
	      if (realtime._IMClients[id] !== undefined) {
	        return realtime._IMClients[id];
	      }
	    }
	    if (lagecyTag) {
	      console.warn('DEPRECATION createIMClient tag param: Use options.tag instead.');
	    }
	    const _tag = tag || lagecyTag;
	    const promise = realtime._open().then(connection => {
	      const client = new IMClient(id, {
	        ...buildinOptions,
	        ...clientOptions
	      }, {
	        _connection: connection,
	        _request: realtime._request.bind(realtime),
	        _messageParser: messageParser,
	        _plugins: realtime._plugins,
	        _identity: identity
	      });
	      connection.on(RECONNECT, () => client._open(realtime._options.appId, _tag, deviceId, true)
	      /**
	       * 客户端连接恢复正常，该事件通常在 {@link Realtime#event:RECONNECT} 之后发生
	       * @event IMClient#RECONNECT
	       * @see Realtime#event:RECONNECT
	       * @since 3.2.0
	       */
	      /**
	       * 客户端重新登录发生错误（网络连接已恢复，但重新登录错误）
	       * @event IMClient#RECONNECT_ERROR
	       * @since 3.2.0
	       */.then(() => client.emit(RECONNECT), error => client.emit(RECONNECT_ERROR, error)));
	      internal(client)._eventemitter.on('beforeclose', () => {
	        delete realtime._IMClients[client.id];
	        if (realtime._firstIMClient === client) {
	          delete realtime._firstIMClient;
	        }
	      }, realtime);
	      internal(client)._eventemitter.on('close', () => {
	        realtime._deregister(client);
	      }, realtime);
	      return client._open(realtime._options.appId, _tag, deviceId, isReconnect).then(() => {
	        realtime._IMClients[client.id] = client;
	        realtime._IMClientsCreationCount += 1;
	        if (realtime._IMClientsCreationCount === 1) {
	          client._omitPeerId(true);
	          realtime._firstIMClient = client;
	        } else if (realtime._IMClientsCreationCount > 1 && realtime._firstIMClient) {
	          realtime._firstIMClient._omitPeerId(false);
	        }
	        realtime._register(client);
	        return client;
	      }).catch(error => {
	        delete realtime._IMClients[client.id];
	        throw error;
	      });
	    }).then(...finalize(() => {
	      realtime._deregisterPending(promise);
	    })).catch(error => {
	      delete realtime._IMClients[id];
	      throw error;
	    });
	    if (identity) {
	      realtime._IMClients[id] = promise;
	    }
	    realtime._registerPending(promise);
	    return promise;
	  };
	  Object.assign(realtime, {
	    register,
	    createIMClient
	  });
	  /* eslint-enable no-param-reassign */
	};

	const beforeCommandDispatch = (command, realtime) => {
	  const isIMCommand = command.service === null || command.service === 2;
	  if (!isIMCommand) return true;
	  const targetClient = command.peerId ? realtime._IMClients[command.peerId] : realtime._firstIMClient;
	  if (targetClient) {
	    Promise.resolve(targetClient).then(client => client._dispatchCommand(command)).catch(debug$d);
	  } else {
	    debug$d('[WARN] Unexpected message received without any live client match: %O', trim(command));
	  }
	  return false;
	};
	const IMPlugin = {
	  name: 'leancloud-realtime-plugin-im',
	  onRealtimeCreate,
	  beforeCommandDispatch,
	  messageClasses: [Message, BinaryMessage, RecalledMessage, TextMessage]
	};

	/** @module leancloud-realtime */
	Realtime.defineConversationProperty = defineConversationProperty;
	Realtime.__preRegisteredPlugins = [IMPlugin];
	const Event = {
	  ...CoreEvent,
	  ...IMEvent
	};

	exports.BinaryMessage = BinaryMessage;
	exports.ChatRoom = ChatRoom;
	exports.Conversation = Conversation;
	exports.ConversationMemberRole = ConversationMemberRole;
	exports.ConversationQuery = ConversationQuery;
	exports.ErrorCode = ErrorCode;
	exports.Event = Event;
	exports.EventEmitter = eventemitter3;
	exports.IE10Compatible = IE10Compatible;
	exports.IMPlugin = IMPlugin;
	exports.Message = Message;
	exports.MessageParser = MessageParser;
	exports.MessagePriority = MessagePriority;
	exports.MessageQueryDirection = MessageQueryDirection;
	exports.MessageStatus = MessageStatus;
	exports.Promise = polyfilledPromise;
	exports.Protocals = message;
	exports.Protocols = message;
	exports.Realtime = Realtime;
	exports.RecalledMessage = RecalledMessage;
	exports.ServiceConversation = ServiceConversation;
	exports.TemporaryConversation = TemporaryConversation;
	exports.TextMessage = TextMessage;
	exports.TypedMessage = TypedMessage;
	exports.debug = debug$2;
	exports.defineConversationProperty = defineConversationProperty;
	exports.getAdapter = getAdapter;
	exports.messageField = messageField;
	exports.messageType = messageType;
	exports.setAdapters = setAdapters;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=im.js.map
