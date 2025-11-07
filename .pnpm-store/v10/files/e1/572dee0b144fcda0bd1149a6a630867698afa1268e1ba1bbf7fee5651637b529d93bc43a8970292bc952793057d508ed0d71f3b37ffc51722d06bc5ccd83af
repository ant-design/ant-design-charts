"use strict";

var _require = require('../adapter'),
    getAdapter = _require.getAdapter;

var debug = require('debug')('cos');

module.exports = function (uploadInfo, data, file) {
  var saveOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var url = uploadInfo.upload_url + '?sign=' + encodeURIComponent(uploadInfo.token);
  var fileFormData = {
    field: 'fileContent',
    data: data,
    name: file.attributes.name
  };
  var options = {
    headers: file._uploadHeaders,
    data: {
      op: 'upload'
    },
    onprogress: saveOptions.onprogress
  };
  debug('url: %s, file: %o, options: %o', url, fileFormData, options);
  var upload = getAdapter('upload');
  return upload(url, fileFormData, options).then(function (response) {
    debug(response.status, response.data);

    if (response.ok === false) {
      var error = new Error(response.status);
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
};