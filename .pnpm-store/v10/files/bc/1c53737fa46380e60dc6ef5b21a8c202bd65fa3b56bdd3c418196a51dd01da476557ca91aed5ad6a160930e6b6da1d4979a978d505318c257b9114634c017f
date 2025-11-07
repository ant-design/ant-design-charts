"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XAgent = void 0;
exports.default = useXAgent;
var _react = _interopRequireDefault(require("react"));
var _xRequest = _interopRequireDefault(require("../x-request"));
let uuid = 0;

/** This is a wrap class to avoid developer can get too much on origin object */
class XAgent {
  config;
  requestingMap = {};
  constructor(config) {
    this.config = config;
  }
  finishRequest(id) {
    delete this.requestingMap[id];
  }
  request = (info, callbacks, transformStream) => {
    const {
      request
    } = this.config;
    const {
      onUpdate,
      onSuccess,
      onError,
      onStream
    } = callbacks;
    const id = uuid;
    uuid += 1;
    this.requestingMap[id] = true;
    request?.(info, {
      onStream: abortController => {
        if (this.requestingMap[id]) {
          onStream?.(abortController);
        }
      },
      // Status should be unique.
      // One get success or error should not get more message
      onUpdate: chunk => {
        if (this.requestingMap[id]) {
          onUpdate(chunk);
        }
      },
      onSuccess: chunks => {
        if (this.requestingMap[id]) {
          onSuccess(chunks);
          this.finishRequest(id);
        }
      },
      onError: error => {
        if (this.requestingMap[id]) {
          onError(error);
          this.finishRequest(id);
        }
      }
    }, transformStream);
  };
  isRequesting() {
    return Object.keys(this.requestingMap).length > 0;
  }
}
exports.XAgent = XAgent;
function useXAgent(config) {
  const {
    request,
    ...restConfig
  } = config;
  return _react.default.useMemo(() => [new XAgent({
    request: request || (0, _xRequest.default)({
      baseURL: restConfig.baseURL,
      model: restConfig.model,
      dangerouslyApiKey: restConfig.dangerouslyApiKey
    }).create,
    ...restConfig
  })], [config?.baseURL, config?.dangerouslyApiKey, config?.model]);
}