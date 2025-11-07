"use strict";

var _ = require('underscore');

var ajax = require('../utils/ajax');

module.exports = function upload(uploadInfo, data, file) {
  var saveOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  /* NODE-ONLY:start */
  if (data instanceof require('stream')) {
    var size = file.metaData('size');

    if (typeof size !== 'number') {
      throw new Error('Saving an AV.File from a Stream to S3 need metaData.size to be set');
    }

    file.setUploadHeader('Content-Length', size.toString());
  }
  /* NODE-ONLY:end */


  return ajax({
    url: uploadInfo.upload_url,
    method: 'PUT',
    data: data,
    headers: _.extend({
      'Content-Type': file.get('mime_type'),
      'Cache-Control': 'public, max-age=31536000'
    }, file._uploadHeaders),
    onprogress: saveOptions.onprogress
  }).then(function () {
    file.attributes.url = uploadInfo.url;
    file._bucket = uploadInfo.bucket;
    file.id = uploadInfo.objectId;
    return file;
  });
};