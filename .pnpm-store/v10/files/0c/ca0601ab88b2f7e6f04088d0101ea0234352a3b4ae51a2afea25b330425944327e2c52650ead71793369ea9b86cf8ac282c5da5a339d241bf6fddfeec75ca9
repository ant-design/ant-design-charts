"use strict";

var _sliceInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/slice");

var _Array$from = require("@babel/runtime-corejs3/core-js-stable/array/from");

var _Symbol = require("@babel/runtime-corejs3/core-js-stable/symbol");

var _getIteratorMethod = require("@babel/runtime-corejs3/core-js/get-iterator-method");

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context9; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _sliceInstanceProperty2(_context9 = Object.prototype.toString.call(o)).call(_context9, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = require('../adapter'),
    getAdapter = _require.getAdapter;

var debug = require('debug')('leancloud:qiniu');

var ajax = require('../utils/ajax');

var btoa = require('../utils/btoa');

var SHARD_THRESHOLD = 1024 * 1024 * 64;
var CHUNK_SIZE = 1024 * 1024 * 16;

function upload(uploadInfo, data, file) {
  var saveOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // Get the uptoken to upload files to qiniu.
  var uptoken = uploadInfo.token;
  var url = uploadInfo.upload_url || 'https://upload.qiniup.com';
  var fileFormData = {
    field: 'file',
    data: data,
    name: file.attributes.name
  };
  var options = {
    headers: file._uploadHeaders,
    data: {
      name: file.attributes.name,
      key: uploadInfo.key,
      token: uptoken
    },
    onprogress: saveOptions.onprogress
  };
  debug('url: %s, file: %o, options: %o', url, fileFormData, options);
  var upload = getAdapter('upload');
  return upload(url, fileFormData, options).then(function (response) {
    debug(response.status, response.data);

    if (response.ok === false) {
      var message = response.status;

      if (response.data) {
        if (response.data.error) {
          message = response.data.error;
        } else {
          message = (0, _stringify.default)(response.data);
        }
      }

      var error = new Error(message);
      error.response = response;
      throw error;
    }

    file.attributes.url = uploadInfo.url;
    file._bucket = uploadInfo.bucket;
    file.id = uploadInfo.objectId;
    return file;
  }, function (error) {
    var response = error.response;

    if (response) {
      debug(response.status, response.data);
      error.statusCode = response.status;
      error.response = response.data;
    }

    throw error;
  });
}

function urlSafeBase64(string) {
  var base64 = btoa(unescape(encodeURIComponent(string)));
  var result = '';

  var _iterator = _createForOfIteratorHelper(base64),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var ch = _step.value;

      switch (ch) {
        case '+':
          result += '-';
          break;

        case '/':
          result += '_';
          break;

        default:
          result += ch;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}

var ShardUploader = /*#__PURE__*/function () {
  function ShardUploader(uploadInfo, data, file, saveOptions) {
    var _context,
        _context2,
        _this = this;

    (0, _classCallCheck2.default)(this, ShardUploader);
    this.uploadInfo = uploadInfo;
    this.data = data;
    this.file = file;
    this.size = undefined;
    this.offset = 0;
    this.uploadedChunks = 0;
    var key = urlSafeBase64(uploadInfo.key);
    var uploadURL = uploadInfo.upload_url || 'https://upload.qiniup.com';
    this.baseURL = (0, _concat.default)(_context = (0, _concat.default)(_context2 = "".concat(uploadURL, "/buckets/")).call(_context2, uploadInfo.bucket, "/objects/")).call(_context, key, "/uploads");
    this.upToken = 'UpToken ' + uploadInfo.token;
    this.uploaded = 0;

    if (saveOptions && saveOptions.onprogress) {
      this.onProgress = function (_ref) {
        var loaded = _ref.loaded;
        loaded += _this.uploadedChunks * CHUNK_SIZE;

        if (loaded <= _this.uploaded) {
          return;
        }

        if (_this.size) {
          saveOptions.onprogress({
            loaded: loaded,
            total: _this.size,
            percent: loaded / _this.size * 100
          });
        } else {
          saveOptions.onprogress({
            loaded: loaded
          });
        }

        _this.uploaded = loaded;
      };
    }
  }
  /**
   * @returns {Promise<string>}
   */


  (0, _createClass2.default)(ShardUploader, [{
    key: "getUploadId",
    value: function getUploadId() {
      return ajax({
        method: 'POST',
        url: this.baseURL,
        headers: {
          Authorization: this.upToken
        }
      }).then(function (res) {
        return res.uploadId;
      });
    }
  }, {
    key: "getChunk",
    value: function getChunk() {
      throw new Error('Not implemented');
    }
    /**
     * @param {string} uploadId
     * @param {number} partNumber
     * @param {any} data
     * @returns {Promise<{ partNumber: number, etag: string }>}
     */

  }, {
    key: "uploadPart",
    value: function uploadPart(uploadId, partNumber, data) {
      var _context3, _context4;

      return ajax({
        method: 'PUT',
        url: (0, _concat.default)(_context3 = (0, _concat.default)(_context4 = "".concat(this.baseURL, "/")).call(_context4, uploadId, "/")).call(_context3, partNumber),
        headers: {
          Authorization: this.upToken
        },
        data: data,
        onprogress: this.onProgress
      }).then(function (_ref2) {
        var etag = _ref2.etag;
        return {
          partNumber: partNumber,
          etag: etag
        };
      });
    }
  }, {
    key: "stopUpload",
    value: function stopUpload(uploadId) {
      var _context5;

      return ajax({
        method: 'DELETE',
        url: (0, _concat.default)(_context5 = "".concat(this.baseURL, "/")).call(_context5, uploadId),
        headers: {
          Authorization: this.upToken
        }
      });
    }
  }, {
    key: "upload",
    value: function upload() {
      var _this2 = this;

      var parts = [];
      return this.getUploadId().then(function (uploadId) {
        var uploadPart = function uploadPart() {
          return _promise.default.resolve(_this2.getChunk()).then(function (chunk) {
            if (!chunk) {
              return;
            }

            var partNumber = parts.length + 1;
            return _this2.uploadPart(uploadId, partNumber, chunk).then(function (part) {
              parts.push(part);
              _this2.uploadedChunks++;
              return uploadPart();
            });
          }).catch(function (error) {
            return _this2.stopUpload(uploadId).then(function () {
              return _promise.default.reject(error);
            });
          });
        };

        return uploadPart().then(function () {
          var _context6;

          return ajax({
            method: 'POST',
            url: (0, _concat.default)(_context6 = "".concat(_this2.baseURL, "/")).call(_context6, uploadId),
            headers: {
              Authorization: _this2.upToken
            },
            data: {
              parts: parts,
              fname: _this2.file.attributes.name,
              mimeType: _this2.file.attributes.mime_type
            }
          });
        });
      }).then(function () {
        _this2.file.attributes.url = _this2.uploadInfo.url;
        _this2.file._bucket = _this2.uploadInfo.bucket;
        _this2.file.id = _this2.uploadInfo.objectId;
        return _this2.file;
      });
    }
  }]);
  return ShardUploader;
}();

var BlobUploader = /*#__PURE__*/function (_ShardUploader) {
  (0, _inherits2.default)(BlobUploader, _ShardUploader);

  var _super = _createSuper(BlobUploader);

  function BlobUploader(uploadInfo, data, file, saveOptions) {
    var _this3;

    (0, _classCallCheck2.default)(this, BlobUploader);
    _this3 = _super.call(this, uploadInfo, data, file, saveOptions);
    _this3.size = data.size;
    return _this3;
  }
  /**
   * @returns {Blob | null}
   */


  (0, _createClass2.default)(BlobUploader, [{
    key: "getChunk",
    value: function getChunk() {
      var _context7;

      if (this.offset >= this.size) {
        return null;
      }

      var chunk = (0, _slice.default)(_context7 = this.data).call(_context7, this.offset, this.offset + CHUNK_SIZE);
      this.offset += chunk.size;
      return chunk;
    }
  }]);
  return BlobUploader;
}(ShardUploader);
/* NODE-ONLY:start */


var BufferUploader = /*#__PURE__*/function (_ShardUploader2) {
  (0, _inherits2.default)(BufferUploader, _ShardUploader2);

  var _super2 = _createSuper(BufferUploader);

  function BufferUploader(uploadInfo, data, file, saveOptions) {
    var _this4;

    (0, _classCallCheck2.default)(this, BufferUploader);
    _this4 = _super2.call(this, uploadInfo, data, file, saveOptions);
    _this4.size = data.length;
    return _this4;
  }
  /**
   * @returns {Buffer | null}
   */


  (0, _createClass2.default)(BufferUploader, [{
    key: "getChunk",
    value: function getChunk() {
      var _context8;

      if (this.offset >= this.size) {
        return null;
      }

      var chunk = (0, _slice.default)(_context8 = this.data).call(_context8, this.offset, this.offset + CHUNK_SIZE);
      this.offset += chunk.length;
      return chunk;
    }
  }]);
  return BufferUploader;
}(ShardUploader);
/* NODE-ONLY:end */

/* NODE-ONLY:start */


var StreamUploader = /*#__PURE__*/function (_ShardUploader3) {
  (0, _inherits2.default)(StreamUploader, _ShardUploader3);

  var _super3 = _createSuper(StreamUploader);

  function StreamUploader() {
    (0, _classCallCheck2.default)(this, StreamUploader);
    return _super3.apply(this, arguments);
  }

  (0, _createClass2.default)(StreamUploader, [{
    key: "_read",
    value:
    /**
     * @param {number} [size]
     * @returns {Buffer | null}
     */
    function _read(size) {
      var chunk = this.data.read(size);

      if (chunk) {
        this.offset += chunk.length;
      }

      return chunk;
    }
    /**
     * @returns {Buffer | null | Promise<Buffer | null>}
     */

  }, {
    key: "getChunk",
    value: function getChunk() {
      var _this5 = this;

      if (this.data.readableLength >= CHUNK_SIZE) {
        return this._read(CHUNK_SIZE);
      }

      if (this.data.readableEnded) {
        if (this.data.readable) {
          return this._read();
        }

        return null;
      }

      return new _promise.default(function (resolve, reject) {
        var onReadable = function onReadable() {
          var chunk = _this5._read(CHUNK_SIZE);

          if (chunk !== null) {
            resolve(chunk);
            removeListeners();
          }
        };

        var onError = function onError(error) {
          reject(error);
          removeListeners();
        };

        var removeListeners = function removeListeners() {
          _this5.data.off('readable', onReadable);

          _this5.data.off('error', onError);
        };

        _this5.data.on('readable', onReadable);

        _this5.data.on('error', onError);
      });
    }
  }]);
  return StreamUploader;
}(ShardUploader);
/* NODE-ONLY:end */


function isBlob(data) {
  return typeof Blob !== 'undefined' && data instanceof Blob;
}
/* NODE-ONLY:start */


function isBuffer(data) {
  return typeof Buffer !== 'undefined' && Buffer.isBuffer(data);
}
/* NODE-ONLY:end */

/* NODE-ONLY:start */


function isStream(data) {
  return typeof require === 'function' && data instanceof require('stream');
}
/* NODE-ONLY:end */


module.exports = function (uploadInfo, data, file) {
  var saveOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (isBlob(data) && data.size >= SHARD_THRESHOLD) {
    return new BlobUploader(uploadInfo, data, file, saveOptions).upload();
  }
  /* NODE-ONLY:start */


  if (isBuffer(data) && data.length >= SHARD_THRESHOLD) {
    return new BufferUploader(uploadInfo, data, file, saveOptions).upload();
  }

  if (isStream(data)) {
    return new StreamUploader(uploadInfo, data, file, saveOptions).upload();
  }
  /* NODE-ONLY:end */


  return upload(uploadInfo, data, file, saveOptions);
};