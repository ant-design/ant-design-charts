"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _ = require('underscore');

var cos = require('./uploader/cos');

var qiniu = require('./uploader/qiniu');

var s3 = require('./uploader/s3');

var AVError = require('./error');

var _require = require('./request'),
    request = _require.request,
    AVRequest = _require._request;

var _require2 = require('./utils'),
    tap = _require2.tap,
    transformFetchOptions = _require2.transformFetchOptions;

var debug = require('debug')('leancloud:file');

var parseBase64 = require('./utils/parse-base64');

module.exports = function (AV) {
  // port from browserify path module
  // since react-native packager won't shim node modules.
  var extname = function extname(path) {
    if (!_.isString(path)) return '';
    return path.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4];
  };

  var b64Digit = function b64Digit(number) {
    if (number < 26) {
      return String.fromCharCode(65 + number);
    }

    if (number < 52) {
      return String.fromCharCode(97 + (number - 26));
    }

    if (number < 62) {
      return String.fromCharCode(48 + (number - 52));
    }

    if (number === 62) {
      return '+';
    }

    if (number === 63) {
      return '/';
    }

    throw new Error('Tried to encode large digit ' + number + ' in base64.');
  };

  var encodeBase64 = function encodeBase64(array) {
    var chunks = [];
    chunks.length = Math.ceil(array.length / 3);

    _.times(chunks.length, function (i) {
      var b1 = array[i * 3];
      var b2 = array[i * 3 + 1] || 0;
      var b3 = array[i * 3 + 2] || 0;
      var has2 = i * 3 + 1 < array.length;
      var has3 = i * 3 + 2 < array.length;
      chunks[i] = [b64Digit(b1 >> 2 & 0x3f), b64Digit(b1 << 4 & 0x30 | b2 >> 4 & 0x0f), has2 ? b64Digit(b2 << 2 & 0x3c | b3 >> 6 & 0x03) : '=', has3 ? b64Digit(b3 & 0x3f) : '='].join('');
    });

    return chunks.join('');
  };
  /**
   * An AV.File is a local representation of a file that is saved to the AV
   * cloud.
   * @param name {String} The file's name. This will change to a unique value
   *     once the file has finished saving.
   * @param data {Array} The data for the file, as either:
   *     1. an Array of byte value Numbers, or
   *     2. an Object like { base64: "..." } with a base64-encoded String.
   *     3. a Blob(File) selected with a file upload control in a browser.
   *     4. an Object like { blob: {uri: "..."} } that mimics Blob
   *        in some non-browser environments such as React Native.
   *     5. a Buffer in Node.js runtime.
   *     6. a Stream in Node.js runtime.
   *
   *        For example:<pre>
   * var fileUploadControl = $("#profilePhotoFileUpload")[0];
   * if (fileUploadControl.files.length > 0) {
   *   var file = fileUploadControl.files[0];
   *   var name = "photo.jpg";
   *   var file = new AV.File(name, file);
   *   file.save().then(function() {
   *     // The file has been saved to AV.
   *   }, function(error) {
   *     // The file either could not be read, or could not be saved to AV.
   *   });
   * }</pre>
   *
   * @class
   * @param [mimeType] {String} Content-Type header to use for the file. If
   *     this is omitted, the content type will be inferred from the name's
   *     extension.
   */


  AV.File = function (name, data, mimeType) {
    this.attributes = {
      name: name,
      url: '',
      metaData: {},
      // 用来存储转换后要上传的 base64 String
      base64: ''
    };

    if (_.isString(data)) {
      throw new TypeError('Creating an AV.File from a String is not yet supported.');
    }

    if (_.isArray(data)) {
      this.attributes.metaData.size = data.length;
      data = {
        base64: encodeBase64(data)
      };
    }

    this._extName = '';
    this._data = data;
    this._uploadHeaders = {};

    if (data && data.blob && typeof data.blob.uri === 'string') {
      this._extName = extname(data.blob.uri);
    }

    if (typeof Blob !== 'undefined' && data instanceof Blob) {
      if (data.size) {
        this.attributes.metaData.size = data.size;
      }

      if (data.name) {
        this._extName = extname(data.name);
      }
    }
    /* NODE-ONLY:start */


    if (data instanceof require('stream') && data.path) {
      this._extName = extname(data.path);
    }

    if (Buffer.isBuffer(data)) {
      this.attributes.metaData.size = data.length;
    }
    /* NODE-ONLY:end */


    var owner;

    if (data && data.owner) {
      owner = data.owner;
    } else if (!AV._config.disableCurrentUser) {
      try {
        owner = AV.User.current();
      } catch (error) {
        if ('SYNC_API_NOT_AVAILABLE' !== error.code) {
          throw error;
        }
      }
    }

    this.attributes.metaData.owner = owner ? owner.id : 'unknown';
    this.set('mime_type', mimeType);
  };
  /**
   * Creates a fresh AV.File object with exists url for saving to AVOS Cloud.
   * @param {String} name the file name
   * @param {String} url the file url.
   * @param {Object} [metaData] the file metadata object.
   * @param {String} [type] Content-Type header to use for the file. If
   *     this is omitted, the content type will be inferred from the name's
   *     extension.
   * @return {AV.File} the file object
   */


  AV.File.withURL = function (name, url, metaData, type) {
    if (!name || !url) {
      throw new Error('Please provide file name and url');
    }

    var file = new AV.File(name, null, type); //copy metaData properties to file.

    if (metaData) {
      for (var prop in metaData) {
        if (!file.attributes.metaData[prop]) file.attributes.metaData[prop] = metaData[prop];
      }
    }

    file.attributes.url = url; //Mark the file is from external source.

    file.attributes.metaData.__source = 'external';
    file.attributes.metaData.size = 0;
    return file;
  };
  /**
   * Creates a file object with exists objectId.
   * @param {String} objectId The objectId string
   * @return {AV.File} the file object
   */


  AV.File.createWithoutData = function (objectId) {
    if (!objectId) {
      throw new TypeError('The objectId must be provided');
    }

    var file = new AV.File();
    file.id = objectId;
    return file;
  };
  /**
   * Request file censor.
   * @since 4.13.0
   * @param {String} objectId
   * @return {Promise.<string>}
   */


  AV.File.censor = function (objectId) {
    if (!AV._config.masterKey) {
      throw new Error('Cannot censor a file without masterKey');
    }

    return request({
      method: 'POST',
      path: "/files/".concat(objectId, "/censor"),
      authOptions: {
        useMasterKey: true
      }
    }).then(function (res) {
      return res.censorResult;
    });
  };

  _.extend(AV.File.prototype,
  /** @lends AV.File.prototype */
  {
    className: '_File',
    _toFullJSON: function _toFullJSON(seenObjects) {
      var _this = this;

      var full = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var json = _.clone(this.attributes);

      AV._objectEach(json, function (val, key) {
        json[key] = AV._encode(val, seenObjects, undefined, full);
      });

      AV._objectEach(this._operations, function (val, key) {
        json[key] = val;
      });

      if (_.has(this, 'id')) {
        json.objectId = this.id;
      }

      ['createdAt', 'updatedAt'].forEach(function (key) {
        if (_.has(_this, key)) {
          var val = _this[key];
          json[key] = _.isDate(val) ? val.toJSON() : val;
        }
      });

      if (full) {
        json.__type = 'File';
      }

      return json;
    },

    /**
     * Returns a JSON version of the file with meta data.
     * Inverse to {@link AV.parseJSON}
     * @since 3.0.0
     * @return {Object}
     */
    toFullJSON: function toFullJSON() {
      var seenObjects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return this._toFullJSON(seenObjects);
    },

    /**
     * Returns a JSON version of the object.
     * @return {Object}
     */
    toJSON: function toJSON(key, holder) {
      var seenObjects = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [this];
      return this._toFullJSON(seenObjects, false);
    },

    /**
     * Gets a Pointer referencing this file.
     * @private
     */
    _toPointer: function _toPointer() {
      return {
        __type: 'Pointer',
        className: this.className,
        objectId: this.id
      };
    },

    /**
     * Returns the ACL for this file.
     * @returns {AV.ACL} An instance of AV.ACL.
     */
    getACL: function getACL() {
      return this._acl;
    },

    /**
     * Sets the ACL to be used for this file.
     * @param {AV.ACL} acl An instance of AV.ACL.
     */
    setACL: function setACL(acl) {
      if (!(acl instanceof AV.ACL)) {
        return new AVError(AVError.OTHER_CAUSE, 'ACL must be a AV.ACL.');
      }

      this._acl = acl;
      return this;
    },

    /**
     * Gets the name of the file. Before save is called, this is the filename
     * given by the user. After save is called, that name gets prefixed with a
     * unique identifier.
     */
    name: function name() {
      return this.get('name');
    },

    /**
     * Gets the url of the file. It is only available after you save the file or
     * after you get the file from a AV.Object.
     * @return {String}
     */
    url: function url() {
      return this.get('url');
    },

    /**
     * Gets the attributs of the file object.
     * @param {String} The attribute name which want to get.
     * @returns {Any}
     */
    get: function get(attrName) {
      switch (attrName) {
        case 'objectId':
          return this.id;

        case 'url':
        case 'name':
        case 'mime_type':
        case 'metaData':
        case 'createdAt':
        case 'updatedAt':
          return this.attributes[attrName];

        default:
          return this.attributes.metaData[attrName];
      }
    },

    /**
     * Set the metaData of the file object.
     * @param {Object} Object is an key value Object for setting metaData.
     * @param {String} attr is an optional metadata key.
     * @param {Object} value is an optional metadata value.
     * @returns {String|Number|Array|Object}
     */
    set: function set() {
      var _this2 = this;

      var set = function set(attrName, value) {
        switch (attrName) {
          case 'name':
          case 'url':
          case 'mime_type':
          case 'base64':
          case 'metaData':
            _this2.attributes[attrName] = value;
            break;

          default:
            // File 并非一个 AVObject，不能完全自定义其他属性，所以只能都放在 metaData 上面
            _this2.attributes.metaData[attrName] = value;
            break;
        }
      };

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      switch (args.length) {
        case 1:
          // 传入一个 Object
          for (var k in args[0]) {
            set(k, args[0][k]);
          }

          break;

        case 2:
          set(args[0], args[1]);
          break;
      }

      return this;
    },

    /**
     * Set a header for the upload request.
     * For more infomation, go to https://url.leanapp.cn/avfile-upload-headers
     *
     * @param {String} key header key
     * @param {String} value header value
     * @return {AV.File} this
     */
    setUploadHeader: function setUploadHeader(key, value) {
      this._uploadHeaders[key] = value;
      return this;
    },

    /**
     * <p>Returns the file's metadata JSON object if no arguments is given.Returns the
     * metadata value if a key is given.Set metadata value if key and value are both given.</p>
     * <p><pre>
     *  var metadata = file.metaData(); //Get metadata JSON object.
     *  var size = file.metaData('size');  // Get the size metadata value.
     *  file.metaData('format', 'jpeg'); //set metadata attribute and value.
     *</pre></p>
     * @return {Object} The file's metadata JSON object.
     * @param {String} attr an optional metadata key.
     * @param {Object} value an optional metadata value.
     **/
    metaData: function metaData(attr, value) {
      if (attr && value) {
        this.attributes.metaData[attr] = value;
        return this;
      } else if (attr && !value) {
        return this.attributes.metaData[attr];
      } else {
        return this.attributes.metaData;
      }
    },

    /**
     * 如果文件是图片，获取图片的缩略图URL。可以传入宽度、高度、质量、格式等参数。
     * @return {String} 缩略图URL
     * @param {Number} width 宽度，单位：像素
     * @param {Number} heigth 高度，单位：像素
     * @param {Number} quality 质量，1-100的数字，默认100
     * @param {Number} scaleToFit 是否将图片自适应大小。默认为true。
     * @param {String} fmt 格式，默认为png，也可以为jpeg,gif等格式。
     */
    thumbnailURL: function thumbnailURL(width, height) {
      var quality = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
      var scaleToFit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var fmt = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'png';
      var url = this.attributes.url;

      if (!url) {
        throw new Error('Invalid url.');
      }

      if (!width || !height || width <= 0 || height <= 0) {
        throw new Error('Invalid width or height value.');
      }

      if (quality <= 0 || quality > 100) {
        throw new Error('Invalid quality value.');
      }

      var mode = scaleToFit ? 2 : 1;
      return url + '?imageView/' + mode + '/w/' + width + '/h/' + height + '/q/' + quality + '/format/' + fmt;
    },

    /**
     * Returns the file's size.
     * @return {Number} The file's size in bytes.
     **/
    size: function size() {
      return this.metaData().size;
    },

    /**
     * Returns the file's owner.
     * @return {String} The file's owner id.
     */
    ownerId: function ownerId() {
      return this.metaData().owner;
    },

    /**
     * Destroy the file.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the destroy
     *     completes.
     */
    destroy: function destroy(options) {
      if (!this.id) {
        return _promise.default.reject(new Error('The file id does not eixst.'));
      }

      var request = AVRequest('files', null, this.id, 'DELETE', null, options);
      return request;
    },

    /**
     * Request Qiniu upload token
     * @param {string} type
     * @return {Promise} Resolved with the response
     * @private
     */
    _fileToken: function _fileToken(type, authOptions) {
      var name = this.attributes.name;
      var extName = extname(name);

      if (!extName && this._extName) {
        name += this._extName;
        extName = this._extName;
      }

      var data = {
        name: name,
        keep_file_name: authOptions.keepFileName,
        key: authOptions.key,
        ACL: this._acl,
        mime_type: type,
        metaData: this.attributes.metaData
      };
      return AVRequest('fileTokens', null, null, 'POST', data, authOptions);
    },

    /**
     * @callback UploadProgressCallback
     * @param {XMLHttpRequestProgressEvent} event - The progress event with 'loaded' and 'total' attributes
     */

    /**
     * Saves the file to the AV cloud.
     * @param {AuthOptions} [options] AuthOptions plus:
     * @param {UploadProgressCallback} [options.onprogress] 文件上传进度，在 Node.js 中无效，回调参数说明详见 {@link UploadProgressCallback}。
     * @param {boolean} [options.keepFileName = false] 保留下载文件的文件名。
     * @param {string} [options.key] 指定文件的 key。设置该选项需要使用 masterKey
     * @return {Promise} Promise that is resolved when the save finishes.
     */
    save: function save() {
      var _this3 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.id) {
        throw new Error('File is already saved.');
      }

      if (!this._previousSave) {
        if (this._data) {
          var mimeType = this.get('mime_type');
          this._previousSave = this._fileToken(mimeType, options).then(function (uploadInfo) {
            if (uploadInfo.mime_type) {
              mimeType = uploadInfo.mime_type;

              _this3.set('mime_type', mimeType);
            }

            _this3._token = uploadInfo.token;
            return _promise.default.resolve().then(function () {
              var data = _this3._data;

              if (data && data.base64) {
                return parseBase64(data.base64, mimeType);
              }

              if (data && data.blob) {
                if (!data.blob.type && mimeType) {
                  data.blob.type = mimeType;
                }

                if (!data.blob.name) {
                  data.blob.name = _this3.get('name');
                }

                return data.blob;
              }

              if (typeof Blob !== 'undefined' && data instanceof Blob) {
                return data;
              }
              /* NODE-ONLY:start */


              if (data instanceof require('stream')) {
                return data;
              }

              if (Buffer.isBuffer(data)) {
                return data;
              }
              /* NODE-ONLY:end */


              throw new TypeError('malformed file data');
            }).then(function (data) {
              var _options = _.extend({}, options); // filter out download progress events


              if (options.onprogress) {
                _options.onprogress = function (event) {
                  if (event.direction === 'download') return;
                  return options.onprogress(event);
                };
              }

              switch (uploadInfo.provider) {
                case 's3':
                  return s3(uploadInfo, data, _this3, _options);

                case 'qcloud':
                  return cos(uploadInfo, data, _this3, _options);

                case 'qiniu':
                default:
                  return qiniu(uploadInfo, data, _this3, _options);
              }
            }).then(tap(function () {
              return _this3._callback(true);
            }), function (error) {
              _this3._callback(false);

              throw error;
            });
          });
        } else if (this.attributes.url && this.attributes.metaData.__source === 'external') {
          // external link file.
          var data = {
            name: this.attributes.name,
            ACL: this._acl,
            metaData: this.attributes.metaData,
            mime_type: this.mimeType,
            url: this.attributes.url
          };
          this._previousSave = AVRequest('files', null, null, 'post', data, options).then(function (response) {
            _this3.id = response.objectId;
            return _this3;
          });
        }
      }

      return this._previousSave;
    },
    _callback: function _callback(success) {
      AVRequest('fileCallback', null, null, 'post', {
        token: this._token,
        result: success
      }).catch(debug);
      delete this._token;
      delete this._data;
    },

    /**
     * fetch the file from server. If the server's representation of the
     * model differs from its current attributes, they will be overriden,
     * @param {Object} fetchOptions Optional options to set 'keys',
     *      'include' and 'includeACL' option.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the fetch
     *     completes.
     */
    fetch: function fetch(fetchOptions, options) {
      if (!this.id) {
        throw new Error('Cannot fetch unsaved file');
      }

      var request = AVRequest('files', null, this.id, 'GET', transformFetchOptions(fetchOptions), options);
      return request.then(this._finishFetch.bind(this));
    },
    _finishFetch: function _finishFetch(response) {
      var value = AV.Object.prototype.parse(response);
      value.attributes = {
        name: value.name,
        url: value.url,
        mime_type: value.mime_type,
        bucket: value.bucket
      };
      value.attributes.metaData = value.metaData || {};
      value.id = value.objectId; // clean

      delete value.objectId;
      delete value.metaData;
      delete value.url;
      delete value.name;
      delete value.mime_type;
      delete value.bucket;

      _.extend(this, value);

      return this;
    },

    /**
     * Request file censor
     * @since 4.13.0
     * @return {Promise.<string>}
     */
    censor: function censor() {
      if (!this.id) {
        throw new Error('Cannot censor an unsaved file');
      }

      return AV.File.censor(this.id);
    }
  });
};