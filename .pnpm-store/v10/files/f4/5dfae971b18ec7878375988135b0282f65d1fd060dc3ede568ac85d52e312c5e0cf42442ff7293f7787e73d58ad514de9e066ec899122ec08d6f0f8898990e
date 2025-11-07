function utf2b64(string) {
  if (typeof module !== 'undefined' && module.exports) {
    return Buffer.from(string).toString('base64');
  }

  return global.btoa(string);
}

function b642utf(string) {
  if (typeof module !== 'undefined' && module.exports) {
    return Buffer.from(string, 'base64').toString('utf-8');
  }

  return global.atob(string);
}

/**
 * Encode plain SVG data string into Data URI string.
 *
 * @param {String} str input string
 * @param {String} type Data URI type
 * @return {String} output string
 */
// @XXX: Buffer
exports.encodeSVGDatauri = function encodeSVGDatauri(str, type) {
  let result = '';
  let prefix = 'data:image/svg+xml';
  if (!type || type === 'base64') {
    // base64
    prefix += ';base64,';
    result = prefix + utf2b64(str);
  } else if (type === 'enc') {
    // URI encoded
    result = `${prefix},${encodeURIComponent(str)}`;
  } else if (type === 'unenc') {
    // unencoded
    result = `${prefix},${str}`;
  }
  return result;
};

/**
 * Decode SVG Data URI string into plain SVG string.
 *
 * @param {string} str input string
 * @return {String} output string
 */

exports.decodeSVGDatauri = function decodeSVGDatauri(str) {
  const regexp = /data:image\/svg\+xml(;charset=[^;,]*)?(;base64)?,(.*)/;
  const match = regexp.exec(str);
  let result = '';

  // plain string
  if (!match) return str;

  const data = match[3];

  if (match[2]) {
    // base64
    result = b642utf(data);
  } else if (data.charAt(0) === '%') {
    // URI encoded
    result = decodeURIComponent(data);
  } else if (data.charAt(0) === '<') {
    // unencoded
    result = data;
  }
  return result;
};

exports.intersectArrays = function intersectArrays(a, b) {
  return a.filter((n) => b.indexOf(n) > -1);
};

/**
 * Convert a row of numbers to an optimized string view.
 *
 * @example
 * [0, -1, .5, .5] → "0-1 .5.5"
 *
 * @param {number[]} data
 * @param {Object} params
 * @param {string?} command path data instruction
 * @return {string}
 */
exports.cleanupOutData = function cleanupOutData(data, params, command) {
  let str = '';
  let delimiter;
  let prev;

  data.forEach((item, i) => {
    // space delimiter by default
    delimiter = ' ';

    // no extra space in front of first number
    if (i === 0) delimiter = '';

    // no extra space after 'arcto' command flags
    if (params.noSpaceAfterFlags && (command === 'A' || command === 'a')) {
      const pos = i % 7;
      if (pos === 4 || pos === 5) delimiter = '';
    }

    // remove floating-point numbers leading zeros
    // 0.5 → .5
    // -0.5 → -.5
    if (params.leadingZero) {
      item = removeLeadingZero(item);
    }

    // no extra space in front of negative number or
    // in front of a floating number if a previous number is floating too
    if (
      params.negativeExtraSpace
      && delimiter !== ''
      && (item < 0 || (String(item).charCodeAt(0) === 46 && prev % 1 !== 0))
    ) {
      delimiter = '';
    }
    // save prev item value
    prev = item;
    str += delimiter + item;
  });
  return str;
};

/**
 * Remove floating-point numbers leading zero.
 *
 * @example
 * 0.5 → .5
 *
 * @example
 * -0.5 → -.5
 *
 * @param {Float} num input number
 *
 * @return {String} output number as string
 */
var removeLeadingZero = (exports.removeLeadingZero = function (num) {
  let strNum = num.toString();

  if (num > 0 && num < 1 && strNum.charCodeAt(0) == 48) {
    strNum = strNum.slice(1);
  } else if (num > -1 && num < 0 && strNum.charCodeAt(1) == 48) {
    strNum = strNum.charAt(0) + strNum.slice(2);
  }
  return strNum;
});
