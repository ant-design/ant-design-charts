'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var platformAdaptersNode = require('@leancloud/platform-adapters-node');
var _defineProperty = _interopDefault(require('@babel/runtime/helpers/defineProperty'));
var protobufLight = _interopDefault(require('protobufjs/dist/protobuf-light'));
var EventEmitter = _interopDefault(require('eventemitter3'));
var _asyncToGenerator = _interopDefault(require('@babel/runtime/helpers/asyncToGenerator'));
var _toConsumableArray = _interopDefault(require('@babel/runtime/helpers/toConsumableArray'));
var _objectWithoutProperties = _interopDefault(require('@babel/runtime/helpers/objectWithoutProperties'));
var _assertThisInitialized = _interopDefault(require('@babel/runtime/helpers/assertThisInitialized'));
var _inheritsLoose = _interopDefault(require('@babel/runtime/helpers/inheritsLoose'));
var _regeneratorRuntime = _interopDefault(require('@babel/runtime/regenerator'));
var d = _interopDefault(require('debug'));
var shuffle = _interopDefault(require('lodash/shuffle'));
var values = _interopDefault(require('lodash/values'));
var _toArray = _interopDefault(require('@babel/runtime/helpers/toArray'));
var _createClass = _interopDefault(require('@babel/runtime/helpers/createClass'));
var _applyDecoratedDescriptor = _interopDefault(require('@babel/runtime/helpers/applyDecoratedDescriptor'));
var StateMachine = _interopDefault(require('javascript-state-machine'));
var _typeof = _interopDefault(require('@babel/runtime/helpers/typeof'));
var isPlainObject = _interopDefault(require('lodash/isPlainObject'));
var promiseTimeout = require('promise-timeout');
var uuid = _interopDefault(require('uuid/v4'));
var _slicedToArray = _interopDefault(require('@babel/runtime/helpers/slicedToArray'));
var base64Arraybuffer = require('base64-arraybuffer');
var remove = _interopDefault(require('lodash/remove'));
var isEmpty = _interopDefault(require('lodash/isEmpty'));
var cloneDeep = _interopDefault(require('lodash/cloneDeep'));
var find = _interopDefault(require('lodash/find'));
var _get = _interopDefault(require('lodash/get'));

var messageCompiled = protobufLight.newBuilder({})['import']({
  "package": 'push_server.messages2',
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
        "default": 'OLD'
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

var _messages$push_server = messageCompiled.push_server.messages2,
  JsonObjectMessage = _messages$push_server.JsonObjectMessage,
  UnreadTuple = _messages$push_server.UnreadTuple,
  LogItem = _messages$push_server.LogItem,
  DataCommand = _messages$push_server.DataCommand,
  SessionCommand = _messages$push_server.SessionCommand,
  ErrorCommand = _messages$push_server.ErrorCommand,
  DirectCommand = _messages$push_server.DirectCommand,
  AckCommand = _messages$push_server.AckCommand,
  UnreadCommand = _messages$push_server.UnreadCommand,
  ConvCommand = _messages$push_server.ConvCommand,
  RoomCommand = _messages$push_server.RoomCommand,
  LogsCommand = _messages$push_server.LogsCommand,
  RcpCommand = _messages$push_server.RcpCommand,
  ReadTuple = _messages$push_server.ReadTuple,
  MaxReadTuple = _messages$push_server.MaxReadTuple,
  ReadCommand = _messages$push_server.ReadCommand,
  PresenceCommand = _messages$push_server.PresenceCommand,
  ReportCommand = _messages$push_server.ReportCommand,
  GenericCommand = _messages$push_server.GenericCommand,
  BlacklistCommand = _messages$push_server.BlacklistCommand,
  PatchCommand = _messages$push_server.PatchCommand,
  PatchItem = _messages$push_server.PatchItem,
  ConvMemberInfo = _messages$push_server.ConvMemberInfo,
  CommandType = _messages$push_server.CommandType,
  OpType = _messages$push_server.OpType,
  StatusType = _messages$push_server.StatusType;

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

var adapters = {};
var getAdapter = function getAdapter(name) {
  var adapter = adapters[name];
  if (adapter === undefined) {
    throw new Error("".concat(name, " adapter is not configured"));
  }
  return adapter;
};

/**
 * 指定 Adapters
 * @function
 * @memberof module:leancloud-realtime
 * @param {Adapters} newAdapters Adapters 的类型请参考 {@link https://url.leanapp.cn/adapter-type-definitions @leancloud/adapter-types} 中的定义
 */
var setAdapters = function setAdapters(newAdapters) {
  Object.assign(adapters, newAdapters);
};

/* eslint-disable */
var global$1 = typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : {};

var EXPIRED = Symbol('expired');
var debug = d('LC:Expirable');
var Expirable = /*#__PURE__*/function () {
  function Expirable(value, ttl) {
    this.originalValue = value;
    if (typeof ttl === 'number') {
      this.expiredAt = Date.now() + ttl;
    }
  }
  _createClass(Expirable, [{
    key: "value",
    get: function get() {
      var expired = this.expiredAt && this.expiredAt <= Date.now();
      if (expired) debug("expired: ".concat(this.originalValue));
      return expired ? EXPIRED : this.originalValue;
    }
  }]);
  return Expirable;
}();
Expirable.EXPIRED = EXPIRED;

var debug$1 = d('LC:Cache');
var Cache = /*#__PURE__*/function () {
  function Cache() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'anonymous';
    this.name = name;
    this._map = {};
  }
  var _proto = Cache.prototype;
  _proto.get = function get(key) {
    var cache = this._map[key];
    if (cache) {
      var value = cache.value;
      if (value !== Expirable.EXPIRED) {
        debug$1('[%s] hit: %s', this.name, key);
        return value;
      }
      delete this._map[key];
    }
    debug$1("[".concat(this.name, "] missed: ").concat(key));
    return null;
  };
  _proto.set = function set(key, value, ttl) {
    debug$1('[%s] set: %s %d', this.name, key, ttl);
    this._map[key] = new Expirable(value, ttl);
  };
  return Cache;
}();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * 调试日志控制器
 * @const
 * @memberof module:leancloud-realtime
 * @example
 * debug.enable();  // 启用调试日志
 * debug.disable(); // 关闭调试日志
 */
var debug$2 = {
  enable: function enable() {
    var namespaces = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'LC*';
    return d.enable(namespaces);
  },
  disable: d.disable
};
var tryAll = function tryAll(promiseConstructors) {
  var promise = new Promise(promiseConstructors[0]);
  if (promiseConstructors.length === 1) {
    return promise;
  }
  return promise["catch"](function () {
    return tryAll(promiseConstructors.slice(1));
  });
};

// eslint-disable-next-line no-sequences
var tap = function tap(interceptor) {
  return function (value) {
    return interceptor(value), value;
  };
};
var finalize = function finalize(callback) {
  return [
  // eslint-disable-next-line no-sequences
  function (value) {
    return callback(), value;
  }, function (error) {
    callback();
    throw error;
  }];
};

/**
 * 将对象转换为 Date，支持 string、number、ProtoBuf Long 以及 LeanCloud 的 Date 类型，
 * 其他情况下（包括对象为 falsy）返回原值。
 * @private
 */
var decodeDate = function decodeDate(date) {
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
var getTime = function getTime(date) {
  return date && date.getTime ? date.getTime() : undefined;
};

/**
 * 解码对象中的 LeanCloud 数据结构。
 * 目前仅会处理 Date 类型。
 * @private
 */
var decode = function decode(value) {
  if (!value) return value;
  if (value.__type === 'Date' && value.iso) {
    return new Date(value.iso);
  }
  if (Array.isArray(value)) {
    return value.map(decode);
  }
  if (isPlainObject(value)) {
    return Object.keys(value).reduce(function (result, key) {
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, decode(value[key])));
    }, {});
  }
  return value;
};
/**
 * 将对象中的特殊类型编码为 LeanCloud 数据结构。
 * 目前仅会处理 Date 类型。
 * @private
 */
var encode = function encode(value) {
  if (value instanceof Date) return {
    __type: 'Date',
    iso: value.toJSON()
  };
  if (Array.isArray(value)) {
    return value.map(encode);
  }
  if (isPlainObject(value)) {
    return Object.keys(value).reduce(function (result, key) {
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, encode(value[key])));
    }, {});
  }
  return value;
};
var keyRemap = function keyRemap(keymap, obj) {
  return Object.keys(obj).reduce(function (newObj, key) {
    var newKey = keymap[key] || key;
    return Object.assign(newObj, _defineProperty({}, newKey, obj[key]));
  }, {});
};
var isIE10 = global$1.navigator && global$1.navigator.userAgent && global$1.navigator.userAgent.indexOf('MSIE 10.') !== -1;

/* eslint-disable no-proto */
var getStaticProperty = function getStaticProperty(klass, property) {
  return klass[property] || (klass.__proto__ ? getStaticProperty(klass.__proto__, property) : undefined);
};
/* eslint-enable no-proto */

var union = function union(a, b) {
  return Array.from(new Set([].concat(_toConsumableArray(a), _toConsumableArray(b))));
};
var difference = function difference(a, b) {
  return Array.from(function (bSet) {
    return new Set(a.filter(function (x) {
      return !bSet.has(x);
    }));
  }(new Set(b)));
};
var map = new WeakMap();

// protected property helper
var internal = function internal(object) {
  if (!map.has(object)) {
    map.set(object, {});
  }
  return map.get(object);
};
var compact = function compact(obj, filter) {
  if (!isPlainObject(obj)) return obj;
  var object = _objectSpread({}, obj);
  Object.keys(object).forEach(function (prop) {
    var value = object[prop];
    if (value === filter) {
      delete object[prop];
    } else {
      object[prop] = compact(value, filter);
    }
  });
  return object;
};

// debug utility
var removeNull = function removeNull(obj) {
  return compact(obj, null);
};
var trim = function trim(message) {
  return removeNull(JSON.parse(JSON.stringify(message)));
};
var ensureArray = function ensureArray(target) {
  if (Array.isArray(target)) {
    return target;
  }
  if (target === undefined || target === null) {
    return [];
  }
  return [target];
};
var setValue = function setValue(target, key, value) {
  // '.' is not allowed in Class keys, escaping is not in concern now.
  var segs = key.split('.');
  var lastSeg = segs.pop();
  var currentTarget = target;
  segs.forEach(function (seg) {
    if (currentTarget[seg] === undefined) currentTarget[seg] = {};
    currentTarget = currentTarget[seg];
  });
  currentTarget[lastSeg] = value;
  return target;
};
var isWeapp =
// eslint-disable-next-line no-undef
(typeof wx === "undefined" ? "undefined" : _typeof(wx)) === 'object' && typeof wx.connectSocket === 'function';

// throttle decorator
var throttle = function throttle(wait) {
  return function (target, property, descriptor) {
    var callback = descriptor.value;
    // very naive, internal use only
    if (callback.length) {
      throw new Error('throttled function should not accept any arguments');
    }
    return _objectSpread(_objectSpread({}, descriptor), {}, {
      value: function value() {
        var _this = this;
        var _internal = internal(this),
          throttleMeta = _internal.throttleMeta;
        if (!throttleMeta) {
          throttleMeta = {};
          internal(this).throttleMeta = throttleMeta;
        }
        var _throttleMeta = throttleMeta,
          propertyMeta = _throttleMeta[property];
        if (!propertyMeta) {
          propertyMeta = {};
          throttleMeta[property] = propertyMeta;
        }
        var _propertyMeta = propertyMeta,
          _propertyMeta$previou = _propertyMeta.previouseTimestamp,
          previouseTimestamp = _propertyMeta$previou === void 0 ? 0 : _propertyMeta$previou,
          timeout = _propertyMeta.timeout;
        var now = Date.now();
        var remainingTime = wait - (now - previouseTimestamp);
        if (remainingTime <= 0) {
          throttleMeta[property].previouseTimestamp = now;
          callback.apply(this);
        } else if (!timeout) {
          propertyMeta.timeout = setTimeout(function () {
            propertyMeta.previouseTimestamp = Date.now();
            delete propertyMeta.timeout;
            callback.apply(_this);
          }, remainingTime);
        }
      }
    });
  };
};
var isCNApp = function isCNApp(appId) {
  return appId.slice(-9) !== '-MdYXbMMI';
};
var equalBuffer = function equalBuffer(buffer1, buffer2) {
  if (!buffer1 || !buffer2) return false;
  if (buffer1.byteLength !== buffer2.byteLength) return false;
  var a = new Uint8Array(buffer1);
  var b = new Uint8Array(buffer2);
  return !a.some(function (value, index) {
    return value !== b[index];
  });
};

var _class;
function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var debug$3 = d('LC:WebSocketPlus');
var OPEN = 'open';
var DISCONNECT = 'disconnect';
var RECONNECT = 'reconnect';
var RETRY = 'retry';
var SCHEDULE = 'schedule';
var OFFLINE = 'offline';
var ONLINE = 'online';
var ERROR = 'error';
var MESSAGE = 'message';
var HEARTBEAT_TIME = 180000;
var TIMEOUT_TIME = 380000;
var DEFAULT_RETRY_STRATEGY = function DEFAULT_RETRY_STRATEGY(attempt) {
  return Math.min(1000 * Math.pow(2, attempt), 300000);
};
var requireConnected = function requireConnected(target, name, descriptor) {
  return _objectSpread$1(_objectSpread$1({}, descriptor), {}, {
    value: function requireConnectedWrapper() {
      var _descriptor$value;
      this.checkConnectionAvailability(name);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return (_descriptor$value = descriptor.value).call.apply(_descriptor$value, [this].concat(args));
    }
  });
};
var WebSocketPlus = (_class = /*#__PURE__*/function (_EventEmitter) {
  _inheritsLoose(WebSocketPlus, _EventEmitter);
  function WebSocketPlus(getUrls, protocol) {
    var _this;
    _this = _EventEmitter.call(this) || this;
    _this.init();
    _this._protocol = protocol;
    Promise.resolve(typeof getUrls === 'function' ? getUrls() : getUrls).then(ensureArray).then(function (urls) {
      _this._urls = urls;
      return _this._open();
    }).then(function () {
      _this.__postponeTimeoutTimer = _this._postponeTimeoutTimer.bind(_assertThisInitialized(_this));
      if (global$1.addEventListener) {
        _this.__pause = function () {
          if (_this.can('pause')) _this.pause();
        };
        _this.__resume = function () {
          if (_this.can('resume')) _this.resume();
        };
        global$1.addEventListener('offline', _this.__pause);
        global$1.addEventListener('online', _this.__resume);
      }
      _this.open();
    })["catch"](_this["throw"].bind(_assertThisInitialized(_this)));
    return _this;
  }
  var _proto = WebSocketPlus.prototype;
  _proto._open = function _open() {
    var _this2 = this;
    return this._createWs(this._urls, this._protocol).then(function (ws) {
      var _this2$_urls = _toArray(_this2._urls),
        first = _this2$_urls[0],
        reset = _this2$_urls.slice(1);
      _this2._urls = [].concat(_toConsumableArray(reset), [first]);
      return ws;
    });
  };
  _proto._createWs = function _createWs(urls, protocol) {
    var _this3 = this;
    return tryAll(urls.map(function (url) {
      return function (resolve, reject) {
        debug$3("connect [".concat(url, "] ").concat(protocol));
        var WebSocket = getAdapter('WebSocket');
        var ws = protocol ? new WebSocket(url, protocol) : new WebSocket(url);
        ws.binaryType = _this3.binaryType || 'arraybuffer';
        ws.onopen = function () {
          return resolve(ws);
        };
        ws.onclose = function (error) {
          if (error instanceof Error) {
            return reject(error);
          }
          // in browser, error event is useless
          return reject(new Error("Failed to connect [".concat(url, "]")));
        };
        ws.onerror = ws.onclose;
      };
    })).then(function (ws) {
      _this3._ws = ws;
      _this3._ws.onclose = _this3._handleClose.bind(_this3);
      _this3._ws.onmessage = _this3._handleMessage.bind(_this3);
      return ws;
    });
  };
  _proto._destroyWs = function _destroyWs() {
    var ws = this._ws;
    if (!ws) return;
    ws.onopen = null;
    ws.onclose = null;
    ws.onerror = null;
    ws.onmessage = null;
    this._ws = null;
    ws.close();
  }

  // eslint-disable-next-line class-methods-use-this
  ;
  _proto.onbeforeevent = function onbeforeevent(event, from, to) {
    for (var _len2 = arguments.length, payload = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      payload[_key2 - 3] = arguments[_key2];
    }
    debug$3("".concat(event, ": ").concat(from, " -> ").concat(to, " %o"), payload);
  };
  _proto.onopen = function onopen() {
    this.emit(OPEN);
  };
  _proto.onconnected = function onconnected() {
    this._startConnectionKeeper();
  };
  _proto.onleaveconnected = function onleaveconnected(event, from, to) {
    this._stopConnectionKeeper();
    this._destroyWs();
    if (to === 'offline' || to === 'disconnected') {
      this.emit(DISCONNECT);
    }
  };
  _proto.onpause = function onpause() {
    this.emit(OFFLINE);
  };
  _proto.onbeforeresume = function onbeforeresume() {
    this.emit(ONLINE);
  };
  _proto.onreconnect = function onreconnect() {
    this.emit(RECONNECT);
  };
  _proto.ondisconnected = function ondisconnected(event, from, to) {
    var _this4 = this;
    var attempt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var delay = from === OFFLINE ? 0 : DEFAULT_RETRY_STRATEGY.call(null, attempt);
    debug$3("schedule attempt=".concat(attempt, " delay=").concat(delay));
    this.emit(SCHEDULE, attempt, delay);
    if (this.__scheduledRetry) {
      clearTimeout(this.__scheduledRetry);
    }
    this.__scheduledRetry = setTimeout(function () {
      if (_this4.is('disconnected')) {
        _this4.retry(attempt);
      }
    }, delay);
  };
  _proto.onretry = function onretry(event, from, to) {
    var _this5 = this;
    var attempt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    this.emit(RETRY, attempt);
    this._open().then(function () {
      return _this5.can('reconnect') && _this5.reconnect();
    }, function () {
      return _this5.can('fail') && _this5.fail(attempt + 1);
    });
  };
  _proto.onerror = function onerror(event, from, to, error) {
    this.emit(ERROR, error);
  };
  _proto.onclose = function onclose() {
    if (global$1.removeEventListener) {
      if (this.__pause) global$1.removeEventListener('offline', this.__pause);
      if (this.__resume) global$1.removeEventListener('online', this.__resume);
    }
  };
  _proto.checkConnectionAvailability = function checkConnectionAvailability() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'API';
    if (!this.is('connected')) {
      var currentState = this.current;
      console.warn("".concat(name, " should not be called when the connection is ").concat(currentState));
      if (this.is('disconnected') || this.is('reconnecting')) {
        console.warn('disconnect and reconnect event should be handled to avoid such calls.');
      }
      throw new Error('Connection unavailable');
    }
  }

  // jsdoc-ignore-start
  ;
  _proto.
  // jsdoc-ignore-end
  _ping = function _ping() {
    debug$3('ping');
    try {
      this.ping();
    } catch (error) {
      console.warn("websocket ping error: ".concat(error.message));
    }
  };
  _proto.ping = function ping() {
    if (this._ws.ping) {
      this._ws.ping();
    } else {
      console.warn("The WebSocket implement does not support sending ping frame.\n        Override ping method to use application defined ping/pong mechanism.");
    }
  };
  _proto._postponeTimeoutTimer = function _postponeTimeoutTimer() {
    var _this6 = this;
    debug$3('_postponeTimeoutTimer');
    this._clearTimeoutTimers();
    this._timeoutTimer = setTimeout(function () {
      debug$3('timeout');
      _this6.disconnect();
    }, TIMEOUT_TIME);
  };
  _proto._clearTimeoutTimers = function _clearTimeoutTimers() {
    if (this._timeoutTimer) {
      clearTimeout(this._timeoutTimer);
    }
  };
  _proto._startConnectionKeeper = function _startConnectionKeeper() {
    debug$3('start connection keeper');
    this._heartbeatTimer = setInterval(this._ping.bind(this), HEARTBEAT_TIME);
    var addListener = this._ws.addListener || this._ws.addEventListener;
    if (!addListener) {
      debug$3('connection keeper disabled due to the lack of #addEventListener.');
      return;
    }
    addListener.call(this._ws, 'message', this.__postponeTimeoutTimer);
    addListener.call(this._ws, 'pong', this.__postponeTimeoutTimer);
    this._postponeTimeoutTimer();
  };
  _proto._stopConnectionKeeper = function _stopConnectionKeeper() {
    debug$3('stop connection keeper');
    // websockets/ws#489
    var removeListener = this._ws.removeListener || this._ws.removeEventListener;
    if (removeListener) {
      removeListener.call(this._ws, 'message', this.__postponeTimeoutTimer);
      removeListener.call(this._ws, 'pong', this.__postponeTimeoutTimer);
      this._clearTimeoutTimers();
    }
    if (this._heartbeatTimer) {
      clearInterval(this._heartbeatTimer);
    }
  };
  _proto._handleClose = function _handleClose(event) {
    debug$3("ws closed [".concat(event.code, "] ").concat(event.reason));
    // socket closed manually, ignore close event.
    if (this.isFinished()) return;
    this.handleClose(event);
  };
  _proto.handleClose = function handleClose() {
    // reconnect
    this.disconnect();
  }

  // jsdoc-ignore-start
  ;
  _proto.
  // jsdoc-ignore-end
  send = function send(data) {
    debug$3('send', data);
    this._ws.send(data);
  };
  _proto._handleMessage = function _handleMessage(event) {
    debug$3('message', event.data);
    this.handleMessage(event.data);
  };
  _proto.handleMessage = function handleMessage(message) {
    this.emit(MESSAGE, message);
  };
  _createClass(WebSocketPlus, [{
    key: "urls",
    get: function get() {
      return this._urls;
    },
    set: function set(urls) {
      this._urls = ensureArray(urls);
    }
  }]);
  return WebSocketPlus;
}(EventEmitter), (_applyDecoratedDescriptor(_class.prototype, "_ping", [requireConnected], Object.getOwnPropertyDescriptor(_class.prototype, "_ping"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "send", [requireConnected], Object.getOwnPropertyDescriptor(_class.prototype, "send"), _class.prototype)), _class);
StateMachine.create({
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

var error = Object.freeze({
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
var ErrorCode = Object.freeze(Object.keys(error).reduce(function (result, code) {
  return Object.assign(result, _defineProperty({}, error[code].name, Number(code)));
}, {}));
var createError = function createError(_ref) {
  var code = _ref.code,
    reason = _ref.reason,
    appCode = _ref.appCode,
    detail = _ref.detail,
    errorMessage = _ref.error;
  var message = reason || detail || errorMessage;
  var name = reason;
  if (!message && error[code]) {
    name = error[code].name;
    message = error[code].message || name;
  }
  if (!message) {
    message = "Unknow Error: ".concat(code);
  }
  var err = new Error(message);
  return Object.assign(err, {
    code: code,
    appCode: appCode,
    detail: detail,
    name: name
  });
};

var debug$4 = d('LC:Connection');
var COMMAND_TIMEOUT = 20000;
var EXPIRE = Symbol('expire');
var isIdempotentCommand = function isIdempotentCommand(command) {
  return !(command.cmd === CommandType.direct || command.cmd === CommandType.session && command.op === OpType.open || command.cmd === CommandType.conv && (command.op === OpType.start || command.op === OpType.update || command.op === OpType.members));
};
var Connection = /*#__PURE__*/function (_WebSocketPlus) {
  _inheritsLoose(Connection, _WebSocketPlus);
  function Connection(getUrl, _ref) {
    var _this;
    var format = _ref.format,
      version = _ref.version;
    debug$4('initializing Connection');
    var protocolString = "lc.".concat(format, ".").concat(version);
    _this = _WebSocketPlus.call(this, getUrl, protocolString) || this;
    _this._protocolFormat = format;
    _this._commands = {};
    _this._serialId = 0;
    return _this;
  }
  var _proto = Connection.prototype;
  _proto.send = /*#__PURE__*/function () {
    var _send = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(command) {
      var _this2 = this;
      var waitingForRespond,
        buffer,
        serialId,
        duplicatedCommand,
        message,
        promise,
        _args = arguments;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            waitingForRespond = _args.length > 1 && _args[1] !== undefined ? _args[1] : true;
            if (!waitingForRespond) {
              _context.next = 11;
              break;
            }
            if (!isIdempotentCommand(command)) {
              _context.next = 8;
              break;
            }
            buffer = command.toArrayBuffer();
            duplicatedCommand = values(this._commands).find(function (_ref2) {
              var targetBuffer = _ref2.buffer,
                targetCommand = _ref2.command;
              return targetCommand.cmd === command.cmd && targetCommand.op === command.op && equalBuffer(targetBuffer, buffer);
            });
            if (!duplicatedCommand) {
              _context.next = 8;
              break;
            }
            console.warn("Duplicated command [cmd:".concat(command.cmd, " op:").concat(command.op, "] is throttled."));
            return _context.abrupt("return", duplicatedCommand.promise);
          case 8:
            this._serialId += 1;
            serialId = this._serialId;
            command.i = serialId; // eslint-disable-line no-param-reassign
          case 11:
            if (debug$4.enabled) debug$4('↑ %O sent', trim(command));
            if (this._protocolFormat === 'proto2base64') {
              message = command.toBase64();
            } else if (command.toArrayBuffer) {
              message = command.toArrayBuffer();
            }
            if (message) {
              _context.next = 15;
              break;
            }
            throw new TypeError("".concat(command, " is not a GenericCommand"));
          case 15:
            _WebSocketPlus.prototype.send.call(this, message);
            if (waitingForRespond) {
              _context.next = 18;
              break;
            }
            return _context.abrupt("return", undefined);
          case 18:
            promise = new Promise(function (resolve, reject) {
              _this2._commands[serialId] = {
                command: command,
                buffer: buffer,
                resolve: resolve,
                reject: reject,
                timeout: setTimeout(function () {
                  if (_this2._commands[serialId]) {
                    if (debug$4.enabled) debug$4('✗ %O timeout', trim(command));
                    reject(createError({
                      error: "Command Timeout [cmd:".concat(command.cmd, " op:").concat(command.op, "]"),
                      name: 'COMMAND_TIMEOUT'
                    }));
                    delete _this2._commands[serialId];
                  }
                }, COMMAND_TIMEOUT)
              };
            });
            this._commands[serialId].promise = promise;
            return _context.abrupt("return", promise);
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function send(_x) {
      return _send.apply(this, arguments);
    }
    return send;
  }();
  _proto.handleMessage = function handleMessage(msg) {
    var message;
    try {
      message = GenericCommand.decode(msg);
      if (debug$4.enabled) debug$4('↓ %O received', trim(message));
    } catch (e) {
      console.warn('Decode message failed:', e.message, msg);
      return;
    }
    var serialId = message.i;
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
        console.warn("Unexpected command received with serialId [".concat(serialId, "],\n         which have timed out or never been requested."));
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
  };
  _proto.ping = function ping() {
    return this.send(new GenericCommand({
      cmd: CommandType.echo
    }))["catch"](function (error) {
      return debug$4('ping failed:', error);
    });
  };
  return Connection;
}(WebSocketPlus);

var debug$5 = d('LC:request');
var request = (function (_ref) {
  var _ref$method = _ref.method,
    method = _ref$method === void 0 ? 'GET' : _ref$method,
    _url = _ref.url,
    query = _ref.query,
    headers = _ref.headers,
    data = _ref.data,
    time = _ref.timeout;
  var url = _url;
  if (query) {
    var queryString = Object.keys(query).map(function (key) {
      var value = query[key];
      if (value === undefined) return undefined;
      var v = isPlainObject(value) ? JSON.stringify(value) : value;
      return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(v));
    }).filter(function (qs) {
      return qs;
    }).join('&');
    url = "".concat(url, "?").concat(queryString);
  }
  debug$5('Req: %O %O %O', method, url, {
    headers: headers,
    data: data
  });
  var request = getAdapter('request');
  var promise = request(url, {
    method: method,
    headers: headers,
    data: data
  }).then(function (response) {
    if (response.ok === false) {
      var error = createError(response.data);
      error.response = response;
      throw error;
    }
    debug$5('Res: %O %O %O', url, response.status, response.data);
    return response.data;
  })["catch"](function (error) {
    if (error.response) {
      debug$5('Error: %O %O %O', url, error.response.status, error.response.data);
    }
    throw error;
  });
  return time ? promiseTimeout.timeout(promise, time) : promise;
});

var checkType = function checkType(middleware) {
  return function (param) {
    var constructor = param.constructor;
    return Promise.resolve(param).then(middleware).then(tap(function (result) {
      if (result === undefined || result === null) {
        // eslint-disable-next-line max-len
        return console.warn("Middleware[".concat(middleware._pluginName || 'anonymous plugin', ":").concat(middleware.name || 'anonymous middleware', "] param/return types not match. It returns ").concat(result, " while a ").concat(param.constructor.name, " expected."));
      }
      if (!(result instanceof constructor)) {
        // eslint-disable-next-line max-len
        return console.warn("Middleware[".concat(middleware._pluginName || 'anonymous plugin', ":").concat(middleware.name || 'anonymous middleware', "] param/return types not match. It returns a ").concat(result.constructor.name, " while a ").concat(param.constructor.name, " expected."));
      }
      return 0;
    }));
  };
};
var applyDecorators = function applyDecorators(decorators, target) {
  if (decorators) {
    decorators.forEach(function (decorator) {
      try {
        decorator(target);
      } catch (error) {
        if (decorator._pluginName) {
          error.message += "[".concat(decorator._pluginName, "]");
        }
        throw error;
      }
    });
  }
};
var applyMiddlewares = function applyMiddlewares(middlewares) {
  return function (target) {
    return ensureArray(middlewares).reduce(function (previousPromise, middleware) {
      return previousPromise.then(checkType(middleware))["catch"](function (error) {
        if (middleware._pluginName) {
          // eslint-disable-next-line no-param-reassign
          error.message += "[".concat(middleware._pluginName, "]");
        }
        throw error;
      });
    }, Promise.resolve(target));
  };
};
var applyDispatcher = function applyDispatcher(dispatchers, payload) {
  return ensureArray(dispatchers).reduce(function (resultPromise, dispatcher) {
    return resultPromise.then(function (shouldDispatch) {
      return shouldDispatch === false ? false : dispatcher.apply(void 0, _toConsumableArray(payload));
    })["catch"](function (error) {
      if (dispatcher._pluginName) {
        // eslint-disable-next-line no-param-reassign
        error.message += "[".concat(dispatcher._pluginName, "]");
      }
      throw error;
    });
  }, Promise.resolve(true));
};

var version = "5.0.0-rc.8";

var _excluded = ["plugins"];
function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var debug$6 = d('LC:Realtime');
var routerCache = new Cache('push-router');
var initializedApp = {};
var Realtime = /*#__PURE__*/function (_EventEmitter) {
  _inheritsLoose(Realtime, _EventEmitter);
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
  function Realtime(_ref) {
    var _this2;
    var plugins = _ref.plugins,
      options = _objectWithoutProperties(_ref, _excluded);
    debug$6('initializing Realtime %s %O', version, options);
    _this2 = _EventEmitter.call(this) || this;
    var appId = options.appId;
    if (typeof appId !== 'string') {
      throw new TypeError("appId [".concat(appId, "] is not a string"));
    }
    if (initializedApp[appId]) {
      throw new Error("App [".concat(appId, "] is already initialized."));
    }
    initializedApp[appId] = true;
    if (typeof options.appKey !== 'string') {
      throw new TypeError("appKey [".concat(options.appKey, "] is not a string"));
    }
    if (isCNApp(appId)) {
      if (!options.server) {
        throw new TypeError("server option is required for apps from CN region");
      }
    }
    _this2._options = _objectSpread$2({
      appId: undefined,
      appKey: undefined,
      noBinary: false,
      ssl: true,
      RTMServerName: typeof process !== 'undefined' ? process.env.RTM_SERVER_NAME : undefined
    }, options);
    _this2._cache = new Cache('endpoints');
    var _this = internal(_assertThisInitialized(_this2));
    _this.clients = new Set();
    _this.pendingClients = new Set();
    var mergedPlugins = [].concat(_toConsumableArray(ensureArray(Realtime.__preRegisteredPlugins)), _toConsumableArray(ensureArray(plugins)));
    debug$6('Using plugins %o', mergedPlugins.map(function (plugin) {
      return plugin.name;
    }));
    _this2._plugins = mergedPlugins.reduce(function (result, plugin) {
      Object.keys(plugin).forEach(function (hook) {
        if ({}.hasOwnProperty.call(plugin, hook) && hook !== 'name') {
          if (plugin.name) {
            ensureArray(plugin[hook]).forEach(function (value) {
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
    applyDecorators(_this2._plugins.onRealtimeCreate, _assertThisInitialized(_this2));
    return _this2;
  }
  var _proto = Realtime.prototype;
  _proto._request = /*#__PURE__*/function () {
    var _request2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref2) {
      var method, _url, _ref2$version, version, path, query, headers, data, url, _this$_options, appId, server, _yield$this$construct, api;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            method = _ref2.method, _url = _ref2.url, _ref2$version = _ref2.version, version = _ref2$version === void 0 ? '1.1' : _ref2$version, path = _ref2.path, query = _ref2.query, headers = _ref2.headers, data = _ref2.data;
            url = _url;
            if (url) {
              _context.next = 9;
              break;
            }
            _this$_options = this._options, appId = _this$_options.appId, server = _this$_options.server;
            _context.next = 6;
            return this.constructor._getServerUrls({
              appId: appId,
              server: server
            });
          case 6:
            _yield$this$construct = _context.sent;
            api = _yield$this$construct.api;
            url = "".concat(api, "/").concat(version).concat(path);
          case 9:
            return _context.abrupt("return", request({
              url: url,
              method: method,
              query: query,
              headers: _objectSpread$2({
                'X-LC-Id': this._options.appId,
                'X-LC-Key': this._options.appKey
              }, headers),
              data: data
            }));
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function _request(_x) {
      return _request2.apply(this, arguments);
    }
    return _request;
  }();
  _proto._open = function _open() {
    var _this3 = this;
    if (this._openPromise) return this._openPromise;
    var format = 'protobuf2';
    if (this._options.noBinary) {
      // 不发送 binary data，fallback to base64 string
      format = 'proto2base64';
    }
    var version = 3;
    var protocol = {
      format: format,
      version: version
    };
    this._openPromise = new Promise(function (resolve, reject) {
      debug$6('No connection established, create a new one.');
      var connection = new Connection(function () {
        return _this3._getRTMServers(_this3._options);
      }, protocol);
      connection.on(OPEN, function () {
        return resolve(connection);
      }).on(ERROR, function (error) {
        delete _this3._openPromise;
        reject(error);
      }).on(EXPIRE, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              debug$6('Connection expired. Refresh endpoints.');
              _this3._cache.set('endpoints', null, 0);
              _context2.next = 4;
              return _this3._getRTMServers(_this3._options);
            case 4:
              connection.urls = _context2.sent;
              connection.disconnect();
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))).on(MESSAGE, _this3._dispatchCommand.bind(_this3));
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
      [DISCONNECT, RECONNECT, RETRY, SCHEDULE, OFFLINE, ONLINE].forEach(function (event) {
        return connection.on(event, function () {
          for (var _len = arguments.length, payload = new Array(_len), _key = 0; _key < _len; _key++) {
            payload[_key] = arguments[_key];
          }
          debug$6("".concat(event, " event emitted. %o"), payload);
          _this3.emit.apply(_this3, [event].concat(payload));
          if (event !== RECONNECT) {
            internal(_this3).clients.forEach(function (client) {
              client.emit.apply(client, [event].concat(payload));
            });
          }
        });
      });
      // override handleClose
      connection.handleClose = function handleClose(event) {
        var isFatal = [ErrorCode.APP_NOT_AVAILABLE, ErrorCode.INVALID_LOGIN, ErrorCode.INVALID_ORIGIN].some(function (errorCode) {
          return errorCode === event.code;
        });
        if (isFatal) {
          // in these cases, SDK should throw.
          this["throw"](createError(event));
        } else {
          // reconnect
          this.disconnect();
        }
      };
      internal(_this3).connection = connection;
    });
    return this._openPromise;
  };
  _proto._getRTMServers = /*#__PURE__*/function () {
    var _getRTMServers2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(options) {
      var info, cachedEndPoints, _info, server, secondary, ttl;
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!options.RTMServers) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return", shuffle(ensureArray(options.RTMServers)));
          case 2:
            cachedEndPoints = this._cache.get('endpoints');
            if (!cachedEndPoints) {
              _context3.next = 7;
              break;
            }
            info = cachedEndPoints;
            _context3.next = 14;
            break;
          case 7:
            _context3.next = 9;
            return this.constructor._fetchRTMServers(options);
          case 9:
            info = _context3.sent;
            _info = info, server = _info.server, secondary = _info.secondary, ttl = _info.ttl;
            if (!(typeof server !== 'string' && typeof secondary !== 'string' && typeof ttl !== 'number')) {
              _context3.next = 13;
              break;
            }
            throw new Error("malformed RTM route response: ".concat(JSON.stringify(info)));
          case 13:
            this._cache.set('endpoints', info, info.ttl * 1000);
          case 14:
            debug$6('endpoint info: %O', info);
            return _context3.abrupt("return", [info.server, info.secondary]);
          case 16:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    function _getRTMServers(_x2) {
      return _getRTMServers2.apply(this, arguments);
    }
    return _getRTMServers;
  }();
  Realtime._getServerUrls = /*#__PURE__*/function () {
    var _getServerUrls2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(_ref4) {
      var appId, server, cachedRouter, defaultProtocol;
      return _regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            appId = _ref4.appId, server = _ref4.server;
            debug$6('fetch server urls');
            if (!server) {
              _context4.next = 6;
              break;
            }
            if (!(typeof server !== 'string')) {
              _context4.next = 5;
              break;
            }
            return _context4.abrupt("return", server);
          case 5:
            return _context4.abrupt("return", {
              RTMRouter: server,
              api: server
            });
          case 6:
            cachedRouter = routerCache.get(appId);
            if (!cachedRouter) {
              _context4.next = 9;
              break;
            }
            return _context4.abrupt("return", cachedRouter);
          case 9:
            defaultProtocol = 'https://';
            return _context4.abrupt("return", request({
              url: 'https://app-router.com/2/route',
              query: {
                appId: appId
              },
              timeout: 20000
            }).then(tap(debug$6)).then(function (_ref5) {
              var RTMRouterServer = _ref5.rtm_router_server,
                APIServer = _ref5.api_server,
                _ref5$ttl = _ref5.ttl,
                ttl = _ref5$ttl === void 0 ? 3600 : _ref5$ttl;
              if (!RTMRouterServer) {
                throw new Error('rtm router not exists');
              }
              var serverUrls = {
                RTMRouter: "".concat(defaultProtocol).concat(RTMRouterServer),
                api: "".concat(defaultProtocol).concat(APIServer)
              };
              routerCache.set(appId, serverUrls, ttl * 1000);
              return serverUrls;
            })["catch"](function () {
              var id = appId.slice(0, 8).toLowerCase();
              var domain = 'lncldglobal.com';
              return {
                RTMRouter: "".concat(defaultProtocol).concat(id, ".rtm.").concat(domain),
                api: "".concat(defaultProtocol).concat(id, ".api.").concat(domain)
              };
            }));
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    function _getServerUrls(_x3) {
      return _getServerUrls2.apply(this, arguments);
    }
    return _getServerUrls;
  }();
  Realtime._fetchRTMServers = function _fetchRTMServers(_ref6) {
    var appId = _ref6.appId,
      ssl = _ref6.ssl,
      server = _ref6.server,
      RTMServerName = _ref6.RTMServerName;
    debug$6('fetch endpoint info');
    return this._getServerUrls({
      appId: appId,
      server: server
    }).then(tap(debug$6)).then(function (_ref7) {
      var RTMRouter = _ref7.RTMRouter;
      return request({
        url: "".concat(RTMRouter, "/v1/route"),
        query: {
          appId: appId,
          secure: ssl,
          features: isWeapp ? 'wechat' : undefined,
          server: RTMServerName,
          _t: Date.now()
        },
        timeout: 20000
      }).then(tap(debug$6));
    });
  };
  _proto._close = function _close() {
    if (this._openPromise) {
      this._openPromise.then(function (connection) {
        return connection.close();
      });
    }
    delete this._openPromise;
  }

  /**
   * 手动进行重连。
   * SDK 在网络出现异常时会自动按照一定的时间间隔尝试重连，调用该方法会立即尝试重连并重置重连尝试计数器。
   * 只能在 `SCHEDULE` 事件之后，`RETRY` 事件之前调用，如果当前网络正常或者正在进行重连，调用该方法会抛异常。
   */;
  _proto.retry = function retry() {
    var _internal = internal(this),
      connection = _internal.connection;
    if (!connection) {
      throw new Error('no connection established');
    }
    if (connection.cannot('retry')) {
      throw new Error("retrying not allowed when not disconnected. the connection is now ".concat(connection.current));
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
   */;
  _proto.pause = function pause() {
    // 这个方法常常在网络断开、进入后台时被调用，此时 connection 可能没有建立或者已经 close。
    // 因此不像 retry，这个方法应该尽可能 loose
    var _internal2 = internal(this),
      connection = _internal2.connection;
    if (!connection) return;
    if (connection.can('pause')) connection.pause();
  }

  /**
   * 恢复在线状态。
   * 你可以在网络恢复、应用回到前台等时刻调用该方法让 SDK 恢复在线状态，恢复在线状态后 SDK 会开始尝试重连。
   *
   * @since 3.4.0
   * @see Realtime#event:ONLINE
   */;
  _proto.resume = function resume() {
    // 与 pause 一样，这个方法应该尽可能 loose
    var _internal3 = internal(this),
      connection = _internal3.connection;
    if (!connection) return;
    if (connection.can('resume')) connection.resume();
  };
  _proto._registerPending = function _registerPending(value) {
    internal(this).pendingClients.add(value);
  };
  _proto._deregisterPending = function _deregisterPending(client) {
    internal(this).pendingClients["delete"](client);
  };
  _proto._register = function _register(client) {
    internal(this).clients.add(client);
  };
  _proto._deregister = function _deregister(client) {
    var _this = internal(this);
    _this.clients["delete"](client);
    if (_this.clients.size + _this.pendingClients.size === 0) {
      this._close();
    }
  };
  _proto._dispatchCommand = function _dispatchCommand(command) {
    return applyDispatcher(this._plugins.beforeCommandDispatch, [command, this]).then(function (shouldDispatch) {
      // no plugin handled this command
      if (shouldDispatch) return debug$6('[WARN] Unexpected message received: %O', trim(command));
      return false;
    });
  };
  return Realtime;
}(EventEmitter); // For test purpose only

var polyfilledPromise = Promise;

// IMClient
var UNREAD_MESSAGES_COUNT_UPDATE = 'unreadmessagescountupdate';
var CLOSE = 'close';
var CONFLICT = 'conflict';
var CONVERSATION_INFO_UPDATED = 'conversationinfoupdated';
var UNHANDLED_MESSAGE = 'unhandledmessage';

// shared
var INVITED = 'invited';
var KICKED = 'kicked';
var MEMBERS_JOINED = 'membersjoined';
var MEMBERS_LEFT = 'membersleft';
var MEMBER_INFO_UPDATED = 'memberinfoupdated';
var BLOCKED = 'blocked';
var UNBLOCKED = 'unblocked';
var MEMBERS_BLOCKED = 'membersblocked';
var MEMBERS_UNBLOCKED = 'membersunblocked';
var MUTED = 'muted';
var UNMUTED = 'unmuted';
var MEMBERS_MUTED = 'membersmuted';
var MEMBERS_UNMUTED = 'membersunmuted';
var MESSAGE$1 = 'message';
var MESSAGE_RECALL = 'messagerecall';
var MESSAGE_UPDATE = 'messageupdate';

// Conversation
var LAST_DELIVERED_AT_UPDATE = 'lastdeliveredatupdate';
var LAST_READ_AT_UPDATE = 'lastreadatupdate';
var INFO_UPDATED = 'infoupdated';

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

var _rMessageStatus;
function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * 消息状态枚举
 * @enum {Symbol}
 * @since 3.2.0
 * @memberof module:leancloud-realtime
 */
var MessageStatus = {
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
var rMessageStatus = (_rMessageStatus = {}, _defineProperty(_rMessageStatus, MessageStatus.NONE, true), _defineProperty(_rMessageStatus, MessageStatus.SENDING, true), _defineProperty(_rMessageStatus, MessageStatus.SENT, true), _defineProperty(_rMessageStatus, MessageStatus.DELIVERED, true), _defineProperty(_rMessageStatus, MessageStatus.READ, true), _defineProperty(_rMessageStatus, MessageStatus.FAILED, true), _rMessageStatus);
var Message = /*#__PURE__*/function () {
  /**
   * @implements AVMessage
   * @param  {Object|String|ArrayBuffer} content 消息内容
   */
  function Message(content) {
    Object.assign(this, {
      content: content
    }, {
      /**
       * @type {String}
       * @memberof Message#
       */
      id: uuid(),
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
  var _proto = Message.prototype;
  _proto.getPayload = function getPayload() {
    return this.content;
  };
  _proto._toJSON = function _toJSON() {
    var id = this.id,
      cid = this.cid,
      from = this.from,
      timestamp = this.timestamp,
      deliveredAt = this.deliveredAt,
      updatedAt = this.updatedAt,
      mentionList = this.mentionList,
      mentionedAll = this.mentionedAll,
      mentioned = this.mentioned;
    return {
      id: id,
      cid: cid,
      from: from,
      timestamp: timestamp,
      deliveredAt: deliveredAt,
      updatedAt: updatedAt,
      mentionList: mentionList,
      mentionedAll: mentionedAll,
      mentioned: mentioned
    };
  }

  /**
   * 返回 JSON 格式的消息
   * @return {Object} 返回值是一个 plain Object
   */;
  _proto.toJSON = function toJSON() {
    return _objectSpread$3(_objectSpread$3({}, this._toJSON()), {}, {
      data: this.content
    });
  }

  /**
   * 返回 JSON 格式的消息，与 toJSON 不同的是，该对象包含了完整的信息，可以通过 {@link IMClient#parseMessage} 反序列化。
   * @return {Object} 返回值是一个 plain Object
   * @since 4.0.0
   */;
  _proto.toFullJSON = function toFullJSON() {
    var content = this.content,
      id = this.id,
      cid = this.cid,
      from = this.from,
      timestamp = this.timestamp,
      deliveredAt = this.deliveredAt,
      _updatedAt = this._updatedAt,
      mentionList = this.mentionList,
      mentionedAll = this.mentionedAll;
    return {
      data: content,
      id: id,
      cid: cid,
      from: from,
      timestamp: getTime(timestamp),
      deliveredAt: getTime(deliveredAt),
      updatedAt: getTime(_updatedAt),
      mentionList: mentionList,
      mentionedAll: mentionedAll
    };
  }

  /**
   * 消息状态，值为 {@link module:leancloud-realtime.MessageStatus} 之一
   * @type {Symbol}
   * @readonly
   * @since 3.2.0
   */;
  _proto._setStatus = function _setStatus(status) {
    if (!rMessageStatus[status]) {
      throw new Error('Invalid message status');
    }
    this._status = status;
  };
  _proto._updateMentioned = function _updateMentioned(client) {
    this._mentioned = this.from !== client && (this.mentionedAll || this.mentionList.indexOf(client) > -1);
  }

  /**
   * 获取提及用户列表
   * @since 4.0.0
   * @return {String[]} 提及用户的 id 列表
   */;
  _proto.getMentionList = function getMentionList() {
    return this.mentionList;
  }

  /**
   * 设置提及用户列表
   * @since 4.0.0
   * @param {String[]} clients 提及用户的 id 列表
   * @return {this} self
   */;
  _proto.setMentionList = function setMentionList(clients) {
    this.mentionList = ensureArray(clients);
    return this;
  }

  /**
   * 设置是否提及所有人
   * @since 4.0.0
   * @param {Boolean} [value=true]
   * @return {this} self
   */;
  _proto.mentionAll = function mentionAll() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    this.mentionedAll = Boolean(value);
    return this;
  }

  /**
   * 判断给定的内容是否是有效的 Message，
   * 该方法始终返回 true
   * @private
   * @returns {Boolean}
   * @implements AVMessage.validate
   */;
  Message.validate = function validate() {
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
   */;
  Message.parse = function parse(json, message) {
    return message || new this(json);
  };
  _createClass(Message, [{
    key: "status",
    get: function get() {
      return this._status;
    }
  }, {
    key: "timestamp",
    get: function get() {
      return this._timestamp;
    },
    set: function set(value) {
      this._timestamp = decodeDate(value);
    }

    /**
     * 消息送达时间
     * @type {?Date}
     */
  }, {
    key: "deliveredAt",
    get: function get() {
      return this._deliveredAt;
    },
    set: function set(value) {
      this._deliveredAt = decodeDate(value);
    }

    /**
     * 消息修改或撤回时间，可以通过比较其与消息的 timestamp 是否相等判断消息是否被修改过或撤回过。
     * @type {Date}
     * @since 3.5.0
     */
  }, {
    key: "updatedAt",
    get: function get() {
      return this._updatedAt || this.timestamp;
    },
    set: function set(value) {
      this._updatedAt = decodeDate(value);
    }

    /**
     * 当前用户是否在该消息中被提及
     * @type {Boolean}
     * @readonly
     * @since 4.0.0
     */
  }, {
    key: "mentioned",
    get: function get() {
      return this._mentioned;
    }
  }]);
  return Message;
}();

/* eslint-disable no-param-reassign */

// documented in ../index.js
var messageType = function messageType(type) {
  if (typeof type !== 'number') {
    throw new TypeError("".concat(type, " is not a Number"));
  }
  return function (target) {
    target.TYPE = type;
    target.validate = function (json) {
      return json._lctype === type;
    };
    target.prototype._getType = function () {
      return {
        _lctype: type
      };
    };
  };
};

// documented in ../plugin-im.js
var messageField = function messageField(fields) {
  if (typeof fields !== 'string') {
    if (!Array.isArray(fields)) {
      throw new TypeError("".concat(fields, " is not an Array"));
    } else if (fields.some(function (value) {
      return typeof value !== 'string';
    })) {
      throw new TypeError('fields contains non-string typed member');
    }
  }
  return function (target) {
    // IE10 Hack:
    // static properties in IE10 will not be inherited from super
    // search for parse method and assign it manually
    var originalCustomFields = isIE10 ? getStaticProperty(target, '_customFields') : target._customFields;
    originalCustomFields = Array.isArray(originalCustomFields) ? originalCustomFields : [];
    target._customFields = originalCustomFields.concat(fields);
  };
};

// IE10 Hack:
// static properties in IE10 will not be inherited from super
// search for parse method and assign it manually

var IE10Compatible = function IE10Compatible(target) {
  if (isIE10) {
    target.parse = getStaticProperty(target, 'parse');
  }
};

var _dec, _class$1;
function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// jsdoc-ignore-start
var TypedMessage = (_dec = messageField(['_lctext', '_lcattrs']), _dec(_class$1 = /*#__PURE__*/function (_Message) {
  _inheritsLoose(TypedMessage, _Message);
  function TypedMessage() {
    return _Message.apply(this, arguments) || this;
  }
  var _proto = TypedMessage.prototype;
  /**
   * @param {String} text
   * @return {this} self
   */
  _proto.setText = function setText(text) {
    this._lctext = text;
    return this;
  }

  /**
   * @return {String}
   */;
  _proto.getText = function getText() {
    return this._lctext;
  }

  /**
   * @param {Object} attributes
   * @return {this} self
   */;
  _proto.setAttributes = function setAttributes(attributes) {
    this._lcattrs = attributes;
    return this;
  }

  /**
   * @return {Object}
   */;
  _proto.getAttributes = function getAttributes() {
    return this._lcattrs;
  };
  _proto._getCustomFields = function _getCustomFields() {
    var _this = this;
    var fields = Array.isArray(this.constructor._customFields) ? this.constructor._customFields : [];
    return fields.reduce(function (result, field) {
      if (typeof field !== 'string') return result;
      result[field] = _this[field]; // eslint-disable-line no-param-reassign
      return result;
    }, {});
  }

  /* eslint-disable class-methods-use-this */;
  _proto._getType = function _getType() {
    throw new Error('not implemented');
  }
  /* eslint-enable class-methods-use-this */;
  _proto.getPayload = function getPayload() {
    return compact(_objectSpread$4(_objectSpread$4({
      _lctext: this.getText(),
      _lcattrs: this.getAttributes()
    }, this._getCustomFields()), this._getType()));
  };
  _proto.toJSON = function toJSON() {
    var type = this.type,
      text = this.text,
      attributes = this.attributes,
      summary = this.summary;
    return _objectSpread$4(_objectSpread$4({}, _Message.prototype._toJSON.call(this)), {}, {
      type: type,
      text: text,
      attributes: attributes,
      summary: summary
    });
  };
  _proto.toFullJSON = function toFullJSON() {
    return _objectSpread$4(_objectSpread$4({}, _Message.prototype.toFullJSON.call(this)), {}, {
      data: this.getPayload()
    });
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
   */;
  TypedMessage.parse = function parse(json) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new this();
    message.content = json; // eslint-disable-line no-param-reassign
    var customFields = isIE10 ? getStaticProperty(message.constructor, '_customFields') : message.constructor._customFields;
    var fields = Array.isArray(customFields) ? customFields : [];
    fields = fields.reduce(function (result, field) {
      if (typeof field !== 'string') return result;
      result[field] = json[field]; // eslint-disable-line no-param-reassign
      return result;
    }, {});
    Object.assign(message, fields);
    return _Message.parse.call(this, json, message);
  };
  _createClass(TypedMessage, [{
    key: "type",
    get:
    /**
     * @type {Number}
     * @readonly
     */
    function get() {
      return this.constructor.TYPE;
    }

    /** @type {String} */
  }, {
    key: "text",
    get: function get() {
      return this.getText();
    }

    /** @type {Object} */,
    set: function set(text) {
      return this.setText(text);
    }
  }, {
    key: "attributes",
    get: function get() {
      return this.getAttributes();
    }

    /**
     * 在客户端需要以文本形式展示该消息时显示的文案，
     * 如 <code>[红包] 新春快乐</code>。
     * 默认值为消息的 text。
     * @type {String}
     * @readonly
     */,
    set: function set(attributes) {
      return this.setAttributes(attributes);
    }
  }, {
    key: "summary",
    get: function get() {
      return this.text;
    }
  }]);
  return TypedMessage;
}(Message)) || _class$1);

var _dec$1, _class$2;

// jsdoc-ignore-start
var RecalledMessage = (_dec$1 = messageType(-127), _dec$1(_class$2 = IE10Compatible(_class$2 = /*#__PURE__*/function (_TypedMessage) {
  _inheritsLoose(RecalledMessage, _TypedMessage);
  function RecalledMessage() {
    return _TypedMessage.apply(this, arguments) || this;
  }
  _createClass(RecalledMessage, [{
    key: "summary",
    get:
    /**
     * 在客户端需要以文本形式展示该消息时显示的文案，值为 <code>[该消息已撤回]</code>
     * @type {String}
     * @readonly
     */
    // eslint-disable-next-line class-methods-use-this
    function get() {
      return '[该消息已撤回]';
    }
  }]);
  return RecalledMessage;
}(TypedMessage)) || _class$2) || _class$2);

var _excluded$1 = ["id", "lastMessageAt", "lastMessage", "lastDeliveredAt", "lastReadAt", "unreadMessagesCount", "members", "mentioned"];
function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var debug$7 = d('LC:Conversation');
var serializeMessage = function serializeMessage(message) {
  var content = message.getPayload();
  var msg;
  var binaryMsg;
  if (content instanceof ArrayBuffer) {
    binaryMsg = content;
  } else if (typeof content !== 'string') {
    msg = JSON.stringify(content);
  } else {
    msg = content;
  }
  return {
    msg: msg,
    binaryMsg: binaryMsg
  };
};
var _LogsCommand$QueryDir = LogsCommand.QueryDirection,
  NEW = _LogsCommand$QueryDir.NEW,
  OLD = _LogsCommand$QueryDir.OLD;

/**
 * 历史消息查询方向枚举
 * @enum {Number}
 * @since 4.0.0
 * @memberof module:leancloud-realtime
 */
var MessageQueryDirection = {
  /** 从后向前 */
  NEW_TO_OLD: OLD,
  /** 从前向后 */
  OLD_TO_NEW: NEW
};
Object.freeze(MessageQueryDirection);
var ConversationBase = /*#__PURE__*/function (_EventEmitter) {
  _inheritsLoose(ConversationBase, _EventEmitter);
  /**
   * @extends EventEmitter
   * @private
   * @abstract
   */
  function ConversationBase(_ref, client) {
    var _this;
    var id = _ref.id,
      lastMessageAt = _ref.lastMessageAt,
      lastMessage = _ref.lastMessage,
      lastDeliveredAt = _ref.lastDeliveredAt,
      lastReadAt = _ref.lastReadAt,
      _ref$unreadMessagesCo = _ref.unreadMessagesCount,
      unreadMessagesCount = _ref$unreadMessagesCo === void 0 ? 0 : _ref$unreadMessagesCo,
      _ref$members = _ref.members,
      members = _ref$members === void 0 ? [] : _ref$members,
      _ref$mentioned = _ref.mentioned,
      mentioned = _ref$mentioned === void 0 ? false : _ref$mentioned,
      properties = _objectWithoutProperties(_ref, _excluded$1);
    _this = _EventEmitter.call(this) || this;
    Object.assign(_assertThisInitialized(_this), _objectSpread$5({
      /**
       * 对话 id，对应 _Conversation 表中的 objectId
       * @memberof ConversationBase#
       * @type {String}
       */
      id: id,
      /**
       * 最后一条消息时间
       * @memberof ConversationBase#
       * @type {?Date}
       */
      lastMessageAt: lastMessageAt,
      /**
       * 最后一条消息
       * @memberof ConversationBase#
       * @type {?Message}
       */
      lastMessage: lastMessage,
      /**
       * 参与该对话的用户列表
       * @memberof ConversationBase#
       * @type {String[]}
       */
      members: members
    }, properties));
    _this.members = Array.from(new Set(_this.members));
    Object.assign(internal(_assertThisInitialized(_this)), {
      messagesWaitingForReceipt: {},
      lastDeliveredAt: lastDeliveredAt,
      lastReadAt: lastReadAt,
      unreadMessagesCount: unreadMessagesCount,
      mentioned: mentioned
    });
    _this._client = client;
    if (debug$7.enabled) {
      values(IMEvent).forEach(function (event) {
        return _this.on(event, function () {
          for (var _len = arguments.length, payload = new Array(_len), _key = 0; _key < _len; _key++) {
            payload[_key] = arguments[_key];
          }
          return _this._debug("".concat(event, " event emitted. %o"), payload);
        });
      });
    }
    // onConversationCreate hook
    applyDecorators(_this._client._plugins.onConversationCreate, _assertThisInitialized(_this));
    return _this;
  }

  /**
   * 当前用户是否在该对话的未读消息中被提及
   * @type {Boolean}
   * @since 4.0.0
   */
  var _proto = ConversationBase.prototype;
  _proto._setUnreadMessagesMentioned = function _setUnreadMessagesMentioned(value) {
    internal(this).unreadMessagesMentioned = Boolean(value);
  };
  _proto._setLastDeliveredAt = function _setLastDeliveredAt(value) {
    var date = decodeDate(value);
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
   */;
  _proto._setLastReadAt = function _setLastReadAt(value) {
    var date = decodeDate(value);
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
   */;
  _proto.toFullJSON = function toFullJSON() {
    var id = this.id,
      members = this.members,
      lastMessageAt = this.lastMessageAt,
      lastDeliveredAt = this.lastDeliveredAt,
      lastReadAt = this.lastReadAt,
      lastMessage = this.lastMessage,
      unreadMessagesCount = this.unreadMessagesCount;
    return {
      id: id,
      members: members,
      lastMessageAt: getTime(lastMessageAt),
      lastDeliveredAt: getTime(lastDeliveredAt),
      lastReadAt: getTime(lastReadAt),
      lastMessage: lastMessage ? lastMessage.toFullJSON() : undefined,
      unreadMessagesCount: unreadMessagesCount
    };
  }

  /**
   * 返回 JSON 格式的对话
   * @return {Object} 返回值是一个 plain Object
   * @since 4.0.0
   */;
  _proto.toJSON = function toJSON() {
    var id = this.id,
      members = this.members,
      lastMessageAt = this.lastMessageAt,
      lastDeliveredAt = this.lastDeliveredAt,
      lastReadAt = this.lastReadAt,
      lastMessage = this.lastMessage,
      unreadMessagesCount = this.unreadMessagesCount,
      unreadMessagesMentioned = this.unreadMessagesMentioned;
    return {
      id: id,
      members: members,
      lastMessageAt: lastMessageAt,
      lastDeliveredAt: lastDeliveredAt,
      lastReadAt: lastReadAt,
      lastMessage: lastMessage ? lastMessage.toJSON() : undefined,
      unreadMessagesCount: unreadMessagesCount,
      unreadMessagesMentioned: unreadMessagesMentioned
    };
  };
  _proto._debug = function _debug() {
    for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      params[_key2] = arguments[_key2];
    }
    debug$7.apply(void 0, params.concat(["[".concat(this.id, "]")]));
  };
  _proto._send = function _send(command) {
    var _this$_client;
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
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    return (_this$_client = this._client)._send.apply(_this$_client, [command].concat(args));
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
   */;
  _proto.send =
  /*#__PURE__*/
  function () {
    var _send2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(message, options) {
      var _message$constructor$, _transient, receipt, priority, pushData, will, _serializeMessage, msg, binaryMsg, command, resCommand, _resCommand$ackMessag, uid, t, code, reason, appCode;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            this._debug(message, 'send');
            if (message instanceof Message) {
              _context.next = 3;
              break;
            }
            throw new TypeError("".concat(message, " is not a Message"));
          case 3:
            _message$constructor$ = _objectSpread$5(_objectSpread$5(_objectSpread$5({}, message.constructor.sendOptions), typeof message.constructor.getSendOptions === 'function' ? message.constructor.getSendOptions(message) : {}), options), _transient = _message$constructor$["transient"], receipt = _message$constructor$.receipt, priority = _message$constructor$.priority, pushData = _message$constructor$.pushData, will = _message$constructor$.will;
            if (receipt) {
              if (this["transient"]) {
                console.warn('receipt option is ignored as the conversation is transient.');
              } else if (_transient) {
                console.warn('receipt option is ignored as the message is sent transiently.');
              } else if (this.members.length > 2) {
                console.warn('receipt option is recommended to be used in one-on-one conversation.'); // eslint-disable-line max-len
              }
            }

            if (priority && !this["transient"]) {
              console.warn('priority option is ignored as the conversation is not transient.');
            }
            Object.assign(message, {
              cid: this.id,
              from: this._client.id
            });
            message._setStatus(MessageStatus.SENDING);
            _serializeMessage = serializeMessage(message), msg = _serializeMessage.msg, binaryMsg = _serializeMessage.binaryMsg;
            command = new GenericCommand({
              cmd: 'direct',
              directMessage: new DirectCommand({
                msg: msg,
                binaryMsg: binaryMsg,
                cid: this.id,
                r: receipt,
                "transient": _transient,
                dt: message.id,
                pushData: JSON.stringify(pushData),
                will: will,
                mentionPids: message.mentionList,
                mentionAll: message.mentionedAll
              }),
              priority: priority
            });
            _context.prev = 10;
            _context.next = 13;
            return this._send(command);
          case 13:
            resCommand = _context.sent;
            _resCommand$ackMessag = resCommand.ackMessage, uid = _resCommand$ackMessag.uid, t = _resCommand$ackMessag.t, code = _resCommand$ackMessag.code, reason = _resCommand$ackMessag.reason, appCode = _resCommand$ackMessag.appCode;
            if (!(code !== null)) {
              _context.next = 17;
              break;
            }
            throw createError({
              code: code,
              reason: reason,
              appCode: appCode
            });
          case 17:
            Object.assign(message, {
              id: uid,
              timestamp: t
            });
            if (!_transient) {
              this.lastMessage = message;
              this.lastMessageAt = message.timestamp;
            }
            message._setStatus(MessageStatus.SENT);
            if (receipt) {
              internal(this).messagesWaitingForReceipt[message.id] = message;
            }
            return _context.abrupt("return", message);
          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](10);
            message._setStatus(MessageStatus.FAILED);
            throw _context.t0;
          case 28:
          case "end":
            return _context.stop();
        }
      }, _callee, this, [[10, 24]]);
    }));
    function send(_x, _x2) {
      return _send2.apply(this, arguments);
    }
    return send;
  }();
  _proto._update = /*#__PURE__*/function () {
    var _update2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(message, newMessage, recall) {
      var msg, binaryMsg, content, id, cid, timestamp, from, _status;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            this._debug('patch %O %O %O', message, newMessage, recall);
            if (!(message instanceof Message)) {
              _context2.next = 8;
              break;
            }
            if (!(message.from !== this._client.id)) {
              _context2.next = 4;
              break;
            }
            throw new Error('Updating message from others is not allowed');
          case 4:
            if (!(message.status !== MessageStatus.SENT && message.status !== MessageStatus.DELIVERED)) {
              _context2.next = 6;
              break;
            }
            throw new Error('Message is not sent');
          case 6:
            _context2.next = 10;
            break;
          case 8:
            if (message.id && message.timestamp) {
              _context2.next = 10;
              break;
            }
            throw new TypeError("".concat(message, " is not a Message"));
          case 10:
            if (!recall) {
              content = serializeMessage(newMessage);
              msg = content.msg;
              binaryMsg = content.binaryMsg;
            }
            _context2.next = 13;
            return this._send(new GenericCommand({
              cmd: CommandType.patch,
              op: OpType.modify,
              patchMessage: new PatchCommand({
                patches: [new PatchItem({
                  cid: this.id,
                  mid: message.id,
                  timestamp: Number(message.timestamp),
                  recall: recall,
                  data: msg,
                  binaryMsg: binaryMsg,
                  mentionPids: newMessage.mentionList,
                  mentionAll: newMessage.mentionedAll
                })],
                lastPatchTime: this._client._lastPatchTime
              })
            }));
          case 13:
            id = message.id, cid = message.cid, timestamp = message.timestamp, from = message.from, _status = message._status;
            Object.assign(newMessage, {
              id: id,
              cid: cid,
              timestamp: timestamp,
              from: from,
              _status: _status
            });
            if (this.lastMessage && this.lastMessage.id === newMessage.id) {
              this.lastMessage = newMessage;
            }
            return _context2.abrupt("return", newMessage);
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    function _update(_x3, _x4, _x5) {
      return _update2.apply(this, arguments);
    }
    return _update;
  }()
  /**
   * 获取对话人数，或暂态对话的在线人数
   * @return {Promise.<Number>}
   */
  ;
  _proto.count =
  /*#__PURE__*/
  function () {
    var _count = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
      var resCommand;
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            this._debug('count');
            _context3.next = 3;
            return this._send(new GenericCommand({
              op: 'count'
            }));
          case 3:
            resCommand = _context3.sent;
            return _context3.abrupt("return", resCommand.convMessage.count);
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    function count() {
      return _count.apply(this, arguments);
    }
    return count;
  }()
  /**
   * 应用增加成员的操作，产生副作用
   * @param {string[]} members
   * @abstract
   * @private
   */
  ;
  _proto._addMembers = function _addMembers() {}

  /**
   * 应用减少成员的操作，产生副作用
   * @param {string[]} members
   * @abstract
   * @private
   */;
  _proto._removeMembers = function _removeMembers() {}

  /**
   * 修改已发送的消息
   * @param {AVMessage} message 要修改的消息，该消息必须是由当前用户发送的。也可以提供一个包含消息 {id, timestamp} 的对象
   * @param {AVMessage} newMessage 新的消息
   * @return {Promise.<AVMessage>} 更新后的消息
   */;
  _proto.update =
  /*#__PURE__*/
  function () {
    var _update3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(message, newMessage) {
      return _regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (newMessage instanceof Message) {
              _context4.next = 2;
              break;
            }
            throw new TypeError("".concat(newMessage, " is not a Message"));
          case 2:
            return _context4.abrupt("return", this._update(message, newMessage, false));
          case 3:
          case "end":
            return _context4.stop();
        }
      }, _callee4, this);
    }));
    function update(_x6, _x7) {
      return _update3.apply(this, arguments);
    }
    return update;
  }()
  /**
   * 撤回已发送的消息
   * @param {AVMessage} message 要撤回的消息，该消息必须是由当前用户发送的。也可以提供一个包含消息 {id, timestamp} 的对象
   * @return {Promise.<RecalledMessage>} 一条已撤回的消息
   */
  ;
  _proto.recall =
  /*#__PURE__*/
  function () {
    var _recall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(message) {
      return _regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", this._update(message, new RecalledMessage(), true));
          case 1:
          case "end":
            return _context5.stop();
        }
      }, _callee5, this);
    }));
    function recall(_x8) {
      return _recall.apply(this, arguments);
    }
    return recall;
  }()
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
  ;
  _proto.queryMessages =
  /*#__PURE__*/
  function () {
    var _queryMessages = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7() {
      var _this2 = this;
      var options,
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
        endClosed,
        conditions,
        resCommand,
        _args7 = arguments;
      return _regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            options = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {};
            this._debug('query messages %O', options);
            beforeTime = options.beforeTime, beforeMessageId = options.beforeMessageId, afterTime = options.afterTime, afterMessageId = options.afterMessageId, limit = options.limit, direction = options.direction, type = options.type, startTime = options.startTime, startMessageId = options.startMessageId, startClosed = options.startClosed, endTime = options.endTime, endMessageId = options.endMessageId, endClosed = options.endClosed;
            if (!(beforeMessageId || beforeTime || afterMessageId || afterTime)) {
              _context7.next = 6;
              break;
            }
            console.warn('DEPRECATION: queryMessages options beforeTime, beforeMessageId, afterTime and afterMessageId are deprecated in favor of startTime, startMessageId, endTime and endMessageId.');
            return _context7.abrupt("return", this.queryMessages({
              startTime: beforeTime,
              startMessageId: beforeMessageId,
              endTime: afterTime,
              endMessageId: afterMessageId,
              limit: limit
            }));
          case 6:
            if (!(startMessageId && !startTime)) {
              _context7.next = 8;
              break;
            }
            throw new Error('query option startMessageId must be used with option startTime');
          case 8:
            if (!(endMessageId && !endTime)) {
              _context7.next = 10;
              break;
            }
            throw new Error('query option endMessageId must be used with option endTime');
          case 10:
            conditions = {
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
            _context7.next = 16;
            return this._send(new GenericCommand({
              cmd: 'logs',
              logsMessage: new LogsCommand(Object.assign(conditions, {
                cid: this.id
              }))
            }));
          case 16:
            resCommand = _context7.sent;
            return _context7.abrupt("return", Promise.all(resCommand.logsMessage.logs.map( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(_ref2) {
                var msgId, timestamp, patchTimestamp, from, ackAt, readAt, data, mentionAll, mentionPids, bin, messageData, message, status;
                return _regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      msgId = _ref2.msgId, timestamp = _ref2.timestamp, patchTimestamp = _ref2.patchTimestamp, from = _ref2.from, ackAt = _ref2.ackAt, readAt = _ref2.readAt, data = _ref2.data, mentionAll = _ref2.mentionAll, mentionPids = _ref2.mentionPids, bin = _ref2.bin;
                      messageData = {
                        data: data,
                        bin: bin,
                        id: msgId,
                        cid: _this2.id,
                        timestamp: timestamp,
                        from: from,
                        deliveredAt: ackAt,
                        updatedAt: patchTimestamp,
                        mentionList: mentionPids,
                        mentionedAll: mentionAll
                      };
                      _context6.next = 4;
                      return _this2._client.parseMessage(messageData);
                    case 4:
                      message = _context6.sent;
                      status = MessageStatus.SENT;
                      if (_this2.members.length === 2) {
                        if (ackAt) status = MessageStatus.DELIVERED;
                        if (ackAt) _this2._setLastDeliveredAt(ackAt);
                        if (readAt) _this2._setLastReadAt(readAt);
                      }
                      message._setStatus(status);
                      return _context6.abrupt("return", message);
                    case 9:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6);
              }));
              return function (_x9) {
                return _ref3.apply(this, arguments);
              };
            }())));
          case 18:
          case "end":
            return _context7.stop();
        }
      }, _callee7, this);
    }));
    function queryMessages() {
      return _queryMessages.apply(this, arguments);
    }
    return queryMessages;
  }()
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
  ;
  _proto.createMessagesIterator = function createMessagesIterator() {
    var _this3 = this;
    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      beforeTime = _ref4.beforeTime,
      beforeMessageId = _ref4.beforeMessageId,
      limit = _ref4.limit;
    var promise;
    return {
      next: function next() {
        if (promise === undefined) {
          // first call
          promise = _this3.queryMessages({
            limit: limit,
            startTime: beforeTime,
            startMessageId: beforeMessageId
          });
        } else {
          promise = promise.then(function (prevMessages) {
            if (prevMessages.length === 0 || prevMessages.length < limit) {
              // no more messages
              return [];
            }
            return _this3.queryMessages({
              startTime: prevMessages[0].timestamp,
              startMessageId: prevMessages[0].id,
              limit: limit
            });
          });
        }
        return promise.then(function (value) {
          return {
            value: Array.from(value),
            done: value.length === 0 || value.length < limit
          };
        });
      }
    };
  }

  /**
   * 将该会话标记为已读
   * @return {Promise.<this>} self
   */;
  _proto.read =
  /*#__PURE__*/
  function () {
    var _read = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8() {
      var client;
      return _regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            this.unreadMessagesCount = 0;
            this._setUnreadMessagesMentioned(false);
            // 跳过暂态会话
            if (!this["transient"]) {
              _context8.next = 4;
              break;
            }
            return _context8.abrupt("return", this);
          case 4:
            client = this._client;
            if (!internal(client).readConversationsBuffer) {
              internal(client).readConversationsBuffer = new Set();
            }
            internal(client).readConversationsBuffer.add(this);
            client._doSendRead();
            return _context8.abrupt("return", this);
          case 9:
          case "end":
            return _context8.stop();
        }
      }, _callee8, this);
    }));
    function read() {
      return _read.apply(this, arguments);
    }
    return read;
  }();
  _proto._handleReceipt = function _handleReceipt(_ref5) {
    var messageId = _ref5.messageId,
      timestamp = _ref5.timestamp,
      read = _ref5.read;
    if (read) {
      this._setLastReadAt(timestamp);
    } else {
      this._setLastDeliveredAt(timestamp);
    }
    var _internal = internal(this),
      messagesWaitingForReceipt = _internal.messagesWaitingForReceipt;
    var message = messagesWaitingForReceipt[messageId];
    if (!message) return;
    message._setStatus(MessageStatus.DELIVERED);
    message.deliveredAt = timestamp;
    delete messagesWaitingForReceipt[messageId];
  }

  /**
   * 更新对话的最新回执时间戳（lastDeliveredAt、lastReadAt）
   * @since 3.4.0
   * @return {Promise.<this>} this
   */;
  _proto.fetchReceiptTimestamps =
  /*#__PURE__*/
  function () {
    var _fetchReceiptTimestamps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9() {
      var _yield$this$_send, _yield$this$_send$con, maxReadTimestamp, maxAckTimestamp;
      return _regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            if (!(this["transient"] || this.system)) {
              _context9.next = 2;
              break;
            }
            return _context9.abrupt("return", this);
          case 2:
            _context9.next = 4;
            return this._send(new GenericCommand({
              op: 'max_read'
            }));
          case 4:
            _yield$this$_send = _context9.sent;
            _yield$this$_send$con = _yield$this$_send.convMessage;
            maxReadTimestamp = _yield$this$_send$con.maxReadTimestamp;
            maxAckTimestamp = _yield$this$_send$con.maxAckTimestamp;
            this._setLastDeliveredAt(maxAckTimestamp);
            this._setLastReadAt(maxReadTimestamp);
            return _context9.abrupt("return", this);
          case 11:
          case "end":
            return _context9.stop();
        }
      }, _callee9, this);
    }));
    function fetchReceiptTimestamps() {
      return _fetchReceiptTimestamps.apply(this, arguments);
    }
    return fetchReceiptTimestamps;
  }();
  _proto._fetchAllReceiptTimestamps = function _fetchAllReceiptTimestamps() {
    // 暂态/系统会话不支持回执
    if (this["transient"] || this.system) return this;
    var convMessage = new ConvCommand({
      queryAllMembers: true
    });
    return this._send(new GenericCommand({
      op: 'max_read',
      convMessage: convMessage
    })).then(function (_ref6) {
      var maxReadTuples = _ref6.convMessage.maxReadTuples;
      return maxReadTuples.filter(function (maxReadTuple) {
        return maxReadTuple.maxAckTimestamp || maxReadTuple.maxReadTimestamp;
      }).map(function (_ref7) {
        var pid = _ref7.pid,
          maxAckTimestamp = _ref7.maxAckTimestamp,
          maxReadTimestamp = _ref7.maxReadTimestamp;
        return {
          pid: pid,
          lastDeliveredAt: decodeDate(maxAckTimestamp),
          lastReadAt: decodeDate(maxReadTimestamp)
        };
      });
    });
  };
  _createClass(ConversationBase, [{
    key: "unreadMessagesMentioned",
    get: function get() {
      return internal(this).unreadMessagesMentioned;
    }
  }, {
    key: "unreadMessagesCount",
    get:
    /**
     * 当前用户在该对话的未读消息数
     * @type {Number}
     */
    function get() {
      return internal(this).unreadMessagesCount;
    },
    set: function set(value) {
      if (value !== this.unreadMessagesCount) {
        internal(this).unreadMessagesCount = value;
        this._client.emit(UNREAD_MESSAGES_COUNT_UPDATE, [this]);
      }
    }
  }, {
    key: "lastMessageAt",
    get: function get() {
      return this._lastMessageAt;
    }

    /**
     * 最后消息送达时间，常用来实现消息的「已送达」标记，可通过 {@link Conversation#fetchReceiptTimestamps} 获取或更新该属性
     * @type {?Date}
     * @since 3.4.0
     */,
    set: function set(value) {
      var time = decodeDate(value);
      if (time <= this._lastMessageAt) return;
      this._lastMessageAt = time;
    }
  }, {
    key: "lastDeliveredAt",
    get: function get() {
      if (this.members.length !== 2) return null;
      return internal(this).lastDeliveredAt;
    }
  }, {
    key: "lastReadAt",
    get: function get() {
      if (this.members.length !== 2) return null;
      return internal(this).lastReadAt;
    }
  }]);
  return ConversationBase;
}(EventEmitter);

var debug$8 = d('LC:SignatureFactoryRunner');
function _validateSignature() {
  var signatureResult = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var signature = signatureResult.signature,
    timestamp = signatureResult.timestamp,
    nonce = signatureResult.nonce;
  if (typeof signature !== 'string' || typeof timestamp !== 'number' || typeof nonce !== 'string') {
    throw new Error('malformed signature');
  }
  return {
    signature: signature,
    timestamp: timestamp,
    nonce: nonce
  };
}
var runSignatureFactory = (function (signatureFactory, params) {
  return Promise.resolve().then(function () {
    debug$8('call signatureFactory with %O', params);
    return signatureFactory.apply(void 0, _toConsumableArray(params));
  }).then(tap(function (signatureResult) {
    return debug$8('sign result %O', signatureResult);
  }), function (error) {
    // eslint-disable-next-line no-param-reassign
    error.message = "sign error: ".concat(error.message);
    debug$8(error);
    throw error;
  }).then(_validateSignature);
});

var _excluded$2 = ["pids"],
  _excluded2 = ["creator", "createdAt", "updatedAt", "transient", "system", "muted", "mutedMembers"];
function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$6(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

var createPartiallySuccess = function createPartiallySuccess(_ref) {
  var allowedPids = _ref.allowedPids,
    failedPids = _ref.failedPids;
  return {
    successfulClientIds: allowedPids,
    failures: failedPids.map(function (_ref2) {
      var pids = _ref2.pids,
        error = _objectWithoutProperties(_ref2, _excluded$2);
      return Object.assign(createError(error), {
        clientIds: pids
      });
    })
  };
};

/**
 * @extends ConversationBase
 * @private
 * @abstract
 */
var PersistentConversation = /*#__PURE__*/function (_ConversationBase) {
  _inheritsLoose(PersistentConversation, _ConversationBase);
  function PersistentConversation(data, _ref3, client) {
    var _this;
    var creator = _ref3.creator,
      createdAt = _ref3.createdAt,
      updatedAt = _ref3.updatedAt,
      _ref3$transient = _ref3["transient"],
      _transient = _ref3$transient === void 0 ? false : _ref3$transient,
      _ref3$system = _ref3.system,
      system = _ref3$system === void 0 ? false : _ref3$system,
      _ref3$muted = _ref3.muted,
      muted = _ref3$muted === void 0 ? false : _ref3$muted,
      _ref3$mutedMembers = _ref3.mutedMembers,
      mutedMembers = _ref3$mutedMembers === void 0 ? [] : _ref3$mutedMembers,
      attributes = _objectWithoutProperties(_ref3, _excluded2);
    _this = _ConversationBase.call(this, _objectSpread$6(_objectSpread$6({}, data), {}, {
      /**
       * 对话创建者
       * @memberof PersistentConversation#
       * @type {String}
       */
      creator: creator,
      /**
       * 对话创建时间
       * @memberof PersistentConversation#
       * @type {Date}
       */
      createdAt: createdAt,
      /**
       * 对话更新时间
       * @memberof PersistentConversation#
       * @type {Date}
       */
      updatedAt: updatedAt,
      /**
       * 对该对话设置了静音的用户列表
       * @memberof PersistentConversation#
       * @type {?String[]}
       */
      mutedMembers: mutedMembers,
      /**
       * 暂态对话标记
       * @memberof PersistentConversation#
       * @type {Boolean}
       */
      "transient": _transient,
      /**
       * 系统对话标记
       * @memberof PersistentConversation#
       * @type {Boolean}
       * @since 3.3.0
       */
      system: system,
      /**
       * 当前用户静音该对话标记
       * @memberof PersistentConversation#
       * @type {Boolean}
       */
      muted: muted,
      _attributes: attributes
    }), client) || this;
    _this._reset();
    return _this;
  }
  var _proto = PersistentConversation.prototype;
  /**
   * 获取对话的自定义属性
   * @since 3.2.0
   * @param  {String} key key 属性的键名，'x' 对应 Conversation 表中的 x 列
   * @return {Any} 属性的值
   */
  _proto.get = function get(key) {
    return _get(internal(this).currentAttributes, key);
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
   */;
  _proto.set = function set(key, value) {
    this._debug("set [".concat(key, "]: ").concat(value));
    var _internal = internal(this),
      pendingAttributes = _internal.pendingAttributes;
    var pendingKeys = Object.keys(pendingAttributes);
    // suppose pendingAttributes = { 'a.b': {} }
    // set 'a' or 'a.b': delete 'a.b'
    var re = new RegExp("^".concat(key));
    var childKeys = pendingKeys.filter(re.test.bind(re));
    childKeys.forEach(function (k) {
      delete pendingAttributes[k];
    });
    if (childKeys.length) {
      pendingAttributes[key] = value;
    } else {
      // set 'a.c': nothing to do
      // set 'a.b.c.d': assign c: { d: {} } to 'a.b'
      var parentKey = find(pendingKeys, function (k) {
        return key.indexOf(k) === 0;
      }); // 'a.b'
      if (parentKey) {
        setValue(pendingAttributes[parentKey], key.slice(parentKey.length + 1), value);
      } else {
        pendingAttributes[key] = value;
      }
    }
    this._buildCurrentAttributes();
    return this;
  };
  _proto._buildCurrentAttributes = function _buildCurrentAttributes() {
    var _internal2 = internal(this),
      pendingAttributes = _internal2.pendingAttributes;
    internal(this).currentAttributes = Object.keys(pendingAttributes).reduce(function (target, k) {
      return setValue(target, k, pendingAttributes[k]);
    }, cloneDeep(this._attributes));
  };
  _proto._updateServerAttributes = function _updateServerAttributes(attributes) {
    var _this2 = this;
    Object.keys(attributes).forEach(function (key) {
      return setValue(_this2._attributes, key, attributes[key]);
    });
    this._buildCurrentAttributes();
  };
  _proto._reset = function _reset() {
    Object.assign(internal(this), {
      pendingAttributes: {},
      currentAttributes: this._attributes
    });
  }

  /**
   * 保存当前对话的属性至服务器
   * @return {Promise.<this>} self
   */;
  _proto.save =
  /*#__PURE__*/
  function () {
    var _save = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var attr, convMessage, resCommand;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            this._debug('save');
            attr = internal(this).pendingAttributes;
            if (!isEmpty(attr)) {
              _context.next = 5;
              break;
            }
            this._debug('nothing touched, resolve with self');
            return _context.abrupt("return", this);
          case 5:
            this._debug('attr: %O', attr);
            convMessage = new ConvCommand({
              attr: new JsonObjectMessage({
                data: JSON.stringify(encode(attr))
              })
            });
            _context.next = 9;
            return this._send(new GenericCommand({
              op: 'update',
              convMessage: convMessage
            }));
          case 9:
            resCommand = _context.sent;
            this.updatedAt = resCommand.convMessage.udate;
            this._attributes = internal(this).currentAttributes;
            internal(this).pendingAttributes = {};
            return _context.abrupt("return", this);
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function save() {
      return _save.apply(this, arguments);
    }
    return save;
  }()
  /**
   * 从服务器更新对话的属性
   * @return {Promise.<this>} self
   */
  ;
  _proto.fetch =
  /*#__PURE__*/
  function () {
    var _fetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      var query;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            query = this._client.getQuery().equalTo('objectId', this.id);
            _context2.next = 3;
            return query.find();
          case 3:
            return _context2.abrupt("return", this);
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    function fetch() {
      return _fetch.apply(this, arguments);
    }
    return fetch;
  }()
  /**
   * 静音，客户端拒绝收到服务器端的离线推送通知
   * @return {Promise.<this>} self
   */
  ;
  _proto.mute =
  /*#__PURE__*/
  function () {
    var _mute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            this._debug('mute');
            _context3.next = 3;
            return this._send(new GenericCommand({
              op: 'mute'
            }));
          case 3:
            if (!this["transient"]) {
              this.muted = true;
              this.mutedMembers = union(this.mutedMembers, [this._client.id]);
            }
            return _context3.abrupt("return", this);
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    function mute() {
      return _mute.apply(this, arguments);
    }
    return mute;
  }()
  /**
   * 取消静音
   * @return {Promise.<this>} self
   */
  ;
  _proto.unmute =
  /*#__PURE__*/
  function () {
    var _unmute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
      return _regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            this._debug('unmute');
            _context4.next = 3;
            return this._send(new GenericCommand({
              op: 'unmute'
            }));
          case 3:
            if (!this["transient"]) {
              this.muted = false;
              this.mutedMembers = difference(this.mutedMembers, [this._client.id]);
            }
            return _context4.abrupt("return", this);
          case 5:
          case "end":
            return _context4.stop();
        }
      }, _callee4, this);
    }));
    function unmute() {
      return _unmute.apply(this, arguments);
    }
    return unmute;
  }();
  _proto._appendConversationSignature = /*#__PURE__*/function () {
    var _appendConversationSignature2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(command, action, clientIds) {
      var params, signatureResult;
      return _regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!this._client.options.conversationSignatureFactory) {
              _context5.next = 6;
              break;
            }
            params = [this.id, this._client.id, clientIds.sort(), action];
            _context5.next = 4;
            return runSignatureFactory(this._client.options.conversationSignatureFactory, params);
          case 4:
            signatureResult = _context5.sent;
            Object.assign(command.convMessage, keyRemap({
              signature: 's',
              timestamp: 't',
              nonce: 'n'
            }, signatureResult));
          case 6:
          case "end":
            return _context5.stop();
        }
      }, _callee5, this);
    }));
    function _appendConversationSignature(_x, _x2, _x3) {
      return _appendConversationSignature2.apply(this, arguments);
    }
    return _appendConversationSignature;
  }();
  _proto._appendBlacklistSignature = /*#__PURE__*/function () {
    var _appendBlacklistSignature2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(command, action, clientIds) {
      var params, signatureResult;
      return _regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (!this._client.options.blacklistSignatureFactory) {
              _context6.next = 6;
              break;
            }
            params = [this.id, this._client.id, clientIds.sort(), action];
            _context6.next = 4;
            return runSignatureFactory(this._client.options.blacklistSignatureFactory, params);
          case 4:
            signatureResult = _context6.sent;
            Object.assign(command.blacklistMessage, keyRemap({
              signature: 's',
              timestamp: 't',
              nonce: 'n'
            }, signatureResult));
          case 6:
          case "end":
            return _context6.stop();
        }
      }, _callee6, this);
    }));
    function _appendBlacklistSignature(_x4, _x5, _x6) {
      return _appendBlacklistSignature2.apply(this, arguments);
    }
    return _appendBlacklistSignature;
  }()
  /**
   * 增加成员
   * @param {String|String[]} clientIds 新增成员 client id
   * @return {Promise.<PartiallySuccess>} 部分成功结果，包含了成功的 id 列表、失败原因与对应的 id 列表
   */
  ;
  _proto.add =
  /*#__PURE__*/
  function () {
    var _add = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7(clientIds) {
      var command, _yield$this$_send, convMessage, allowedPids;
      return _regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            this._debug('add', clientIds);
            if (typeof clientIds === 'string') {
              clientIds = [clientIds]; // eslint-disable-line no-param-reassign
            }
            command = new GenericCommand({
              op: 'add',
              convMessage: new ConvCommand({
                m: clientIds
              })
            });
            _context7.next = 5;
            return this._appendConversationSignature(command, 'invite', clientIds);
          case 5:
            _context7.next = 7;
            return this._send(command);
          case 7:
            _yield$this$_send = _context7.sent;
            convMessage = _yield$this$_send.convMessage;
            allowedPids = _yield$this$_send.convMessage.allowedPids;
            this._addMembers(allowedPids);
            return _context7.abrupt("return", createPartiallySuccess(convMessage));
          case 12:
          case "end":
            return _context7.stop();
        }
      }, _callee7, this);
    }));
    function add(_x7) {
      return _add.apply(this, arguments);
    }
    return add;
  }()
  /**
   * 剔除成员
   * @param {String|String[]} clientIds 成员 client id
   * @return {Promise.<PartiallySuccess>} 部分成功结果，包含了成功的 id 列表、失败原因与对应的 id 列表
   */
  ;
  _proto.remove =
  /*#__PURE__*/
  function () {
    var _remove = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8(clientIds) {
      var command, _yield$this$_send2, convMessage, allowedPids;
      return _regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            this._debug('remove', clientIds);
            if (typeof clientIds === 'string') {
              clientIds = [clientIds]; // eslint-disable-line no-param-reassign
            }
            command = new GenericCommand({
              op: 'remove',
              convMessage: new ConvCommand({
                m: clientIds
              })
            });
            _context8.next = 5;
            return this._appendConversationSignature(command, 'kick', clientIds);
          case 5:
            _context8.next = 7;
            return this._send(command);
          case 7:
            _yield$this$_send2 = _context8.sent;
            convMessage = _yield$this$_send2.convMessage;
            allowedPids = _yield$this$_send2.convMessage.allowedPids;
            this._removeMembers(allowedPids);
            return _context8.abrupt("return", createPartiallySuccess(convMessage));
          case 12:
          case "end":
            return _context8.stop();
        }
      }, _callee8, this);
    }));
    function remove(_x8) {
      return _remove.apply(this, arguments);
    }
    return remove;
  }()
  /**
   * （当前用户）加入该对话
   * @return {Promise.<this>} self
   */
  ;
  _proto.join =
  /*#__PURE__*/
  function () {
    var _join = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9() {
      var _this3 = this;
      return _regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            this._debug('join');
            return _context9.abrupt("return", this.add(this._client.id).then(function (_ref4) {
              var failures = _ref4.failures;
              if (failures[0]) throw failures[0];
              return _this3;
            }));
          case 2:
          case "end":
            return _context9.stop();
        }
      }, _callee9, this);
    }));
    function join() {
      return _join.apply(this, arguments);
    }
    return join;
  }()
  /**
   * （当前用户）退出该对话
   * @return {Promise.<this>} self
   */
  ;
  _proto.quit =
  /*#__PURE__*/
  function () {
    var _quit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee10() {
      var _this4 = this;
      return _regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            this._debug('quit');
            return _context10.abrupt("return", this.remove(this._client.id).then(function (_ref5) {
              var failures = _ref5.failures;
              if (failures[0]) throw failures[0];
              return _this4;
            }));
          case 2:
          case "end":
            return _context10.stop();
        }
      }, _callee10, this);
    }));
    function quit() {
      return _quit.apply(this, arguments);
    }
    return quit;
  }()
  /**
   * 在该对话中禁言成员
   * @param {String|String[]} clientIds 成员 client id
   * @return {Promise.<PartiallySuccess>} 部分成功结果，包含了成功的 id 列表、失败原因与对应的 id 列表
   */
  ;
  _proto.muteMembers =
  /*#__PURE__*/
  function () {
    var _muteMembers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee11(clientIds) {
      var command, _yield$this$_send3, convMessage;
      return _regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            this._debug('mute', clientIds);
            clientIds = ensureArray(clientIds); // eslint-disable-line no-param-reassign
            command = new GenericCommand({
              op: OpType.add_shutup,
              convMessage: new ConvCommand({
                m: clientIds
              })
            });
            _context11.next = 5;
            return this._send(command);
          case 5:
            _yield$this$_send3 = _context11.sent;
            convMessage = _yield$this$_send3.convMessage;
            return _context11.abrupt("return", createPartiallySuccess(convMessage));
          case 8:
          case "end":
            return _context11.stop();
        }
      }, _callee11, this);
    }));
    function muteMembers(_x9) {
      return _muteMembers.apply(this, arguments);
    }
    return muteMembers;
  }()
  /**
   * 在该对话中解除成员禁言
   * @param {String|String[]} clientIds 成员 client id
   * @return {Promise.<PartiallySuccess>} 部分成功结果，包含了成功的 id 列表、失败原因与对应的 id 列表
   */
  ;
  _proto.unmuteMembers =
  /*#__PURE__*/
  function () {
    var _unmuteMembers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee12(clientIds) {
      var command, _yield$this$_send4, convMessage;
      return _regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            this._debug('unmute', clientIds);
            clientIds = ensureArray(clientIds); // eslint-disable-line no-param-reassign
            command = new GenericCommand({
              op: OpType.remove_shutup,
              convMessage: new ConvCommand({
                m: clientIds
              })
            });
            _context12.next = 5;
            return this._send(command);
          case 5:
            _yield$this$_send4 = _context12.sent;
            convMessage = _yield$this$_send4.convMessage;
            return _context12.abrupt("return", createPartiallySuccess(convMessage));
          case 8:
          case "end":
            return _context12.stop();
        }
      }, _callee12, this);
    }));
    function unmuteMembers(_x10) {
      return _unmuteMembers.apply(this, arguments);
    }
    return unmuteMembers;
  }()
  /**
   * 查询该对话禁言成员列表
   * @param {Object} [options]
   * @param {Number} [options.limit] 返回的成员数量，服务器默认值 10
   * @param {String} [options.next] 从指定 next 开始查询，与 limit 一起使用可以完成翻页。
   * @return {PagedResults.<string>} 查询结果。其中的 cureser 存在表示还有更多结果。
   */
  ;
  _proto.queryMutedMembers =
  /*#__PURE__*/
  function () {
    var _queryMutedMembers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee13() {
      var _ref6,
        limit,
        next,
        command,
        _yield$this$_send5,
        _yield$this$_send5$co,
        m,
        newNext,
        _args13 = arguments;
      return _regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _ref6 = _args13.length > 0 && _args13[0] !== undefined ? _args13[0] : {}, limit = _ref6.limit, next = _ref6.next;
            this._debug('query muted: limit %O, next: %O', limit, next);
            command = new GenericCommand({
              op: OpType.query_shutup,
              convMessage: new ConvCommand({
                limit: limit,
                next: next
              })
            });
            _context13.next = 5;
            return this._send(command);
          case 5:
            _yield$this$_send5 = _context13.sent;
            _yield$this$_send5$co = _yield$this$_send5.convMessage;
            m = _yield$this$_send5$co.m;
            newNext = _yield$this$_send5$co.next;
            return _context13.abrupt("return", {
              results: m,
              next: newNext
            });
          case 10:
          case "end":
            return _context13.stop();
        }
      }, _callee13, this);
    }));
    function queryMutedMembers() {
      return _queryMutedMembers.apply(this, arguments);
    }
    return queryMutedMembers;
  }()
  /**
   * 将用户加入该对话黑名单
   * @param {String|String[]} clientIds 成员 client id
   * @return {Promise.<PartiallySuccess>} 部分成功结果，包含了成功的 id 列表、失败原因与对应的 id 列表
   */
  ;
  _proto.blockMembers =
  /*#__PURE__*/
  function () {
    var _blockMembers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee14(clientIds) {
      var command, _yield$this$_send6, blacklistMessage;
      return _regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            this._debug('block', clientIds);
            clientIds = ensureArray(clientIds); // eslint-disable-line no-param-reassign
            command = new GenericCommand({
              cmd: 'blacklist',
              op: OpType.block,
              blacklistMessage: new BlacklistCommand({
                srcCid: this.id,
                toPids: clientIds
              })
            });
            _context14.next = 5;
            return this._appendBlacklistSignature(command, 'conversation-block-clients', clientIds);
          case 5:
            _context14.next = 7;
            return this._send(command);
          case 7:
            _yield$this$_send6 = _context14.sent;
            blacklistMessage = _yield$this$_send6.blacklistMessage;
            return _context14.abrupt("return", createPartiallySuccess(blacklistMessage));
          case 10:
          case "end":
            return _context14.stop();
        }
      }, _callee14, this);
    }));
    function blockMembers(_x11) {
      return _blockMembers.apply(this, arguments);
    }
    return blockMembers;
  }()
  /**
   * 将用户移出该对话黑名单
   * @param {String|String[]} clientIds 成员 client id
   * @return {Promise.<PartiallySuccess>} 部分成功结果，包含了成功的 id 列表、失败原因与对应的 id 列表
   */
  ;
  _proto.unblockMembers =
  /*#__PURE__*/
  function () {
    var _unblockMembers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee15(clientIds) {
      var command, _yield$this$_send7, blacklistMessage;
      return _regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            this._debug('unblock', clientIds);
            clientIds = ensureArray(clientIds); // eslint-disable-line no-param-reassign
            command = new GenericCommand({
              cmd: 'blacklist',
              op: OpType.unblock,
              blacklistMessage: new BlacklistCommand({
                srcCid: this.id,
                toPids: clientIds
              })
            });
            _context15.next = 5;
            return this._appendBlacklistSignature(command, 'conversation-unblock-clients', clientIds);
          case 5:
            _context15.next = 7;
            return this._send(command);
          case 7:
            _yield$this$_send7 = _context15.sent;
            blacklistMessage = _yield$this$_send7.blacklistMessage;
            return _context15.abrupt("return", createPartiallySuccess(blacklistMessage));
          case 10:
          case "end":
            return _context15.stop();
        }
      }, _callee15, this);
    }));
    function unblockMembers(_x12) {
      return _unblockMembers.apply(this, arguments);
    }
    return unblockMembers;
  }()
  /**
   * 查询该对话黑名单
   * @param {Object} [options]
   * @param {Number} [options.limit] 返回的成员数量，服务器默认值 10
   * @param {String} [options.next] 从指定 next 开始查询，与 limit 一起使用可以完成翻页
   * @return {PagedResults.<string>} 查询结果。其中的 cureser 存在表示还有更多结果。
   */
  ;
  _proto.queryBlockedMembers =
  /*#__PURE__*/
  function () {
    var _queryBlockedMembers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee16() {
      var _ref7,
        limit,
        next,
        command,
        _yield$this$_send8,
        _yield$this$_send8$bl,
        blockedPids,
        newNext,
        _args16 = arguments;
      return _regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            _ref7 = _args16.length > 0 && _args16[0] !== undefined ? _args16[0] : {}, limit = _ref7.limit, next = _ref7.next;
            this._debug('query blocked: limit %O, next: %O', limit, next);
            command = new GenericCommand({
              cmd: 'blacklist',
              op: OpType.query,
              blacklistMessage: new BlacklistCommand({
                srcCid: this.id,
                limit: limit,
                next: next
              })
            });
            _context16.next = 5;
            return this._send(command);
          case 5:
            _yield$this$_send8 = _context16.sent;
            _yield$this$_send8$bl = _yield$this$_send8.blacklistMessage;
            blockedPids = _yield$this$_send8$bl.blockedPids;
            newNext = _yield$this$_send8$bl.next;
            return _context16.abrupt("return", {
              results: blockedPids,
              next: newNext
            });
          case 10:
          case "end":
            return _context16.stop();
        }
      }, _callee16, this);
    }));
    function queryBlockedMembers() {
      return _queryBlockedMembers.apply(this, arguments);
    }
    return queryBlockedMembers;
  }();
  _proto.toFullJSON = function toFullJSON() {
    var creator = this.creator,
      system = this.system,
      _transient2 = this["transient"],
      createdAt = this.createdAt,
      updatedAt = this.updatedAt,
      _attributes = this._attributes;
    return _objectSpread$6(_objectSpread$6({}, _ConversationBase.prototype.toFullJSON.call(this)), {}, {
      creator: creator,
      system: system,
      "transient": _transient2,
      createdAt: getTime(createdAt),
      updatedAt: getTime(updatedAt)
    }, _attributes);
  };
  _proto.toJSON = function toJSON() {
    var creator = this.creator,
      system = this.system,
      _transient3 = this["transient"],
      muted = this.muted,
      mutedMembers = this.mutedMembers,
      createdAt = this.createdAt,
      updatedAt = this.updatedAt,
      _attributes = this._attributes;
    return _objectSpread$6(_objectSpread$6({}, _ConversationBase.prototype.toJSON.call(this)), {}, {
      creator: creator,
      system: system,
      "transient": _transient3,
      muted: muted,
      mutedMembers: mutedMembers,
      createdAt: createdAt,
      updatedAt: updatedAt
    }, _attributes);
  };
  _createClass(PersistentConversation, [{
    key: "createdAt",
    get: function get() {
      return this._createdAt;
    },
    set: function set(value) {
      this._createdAt = decodeDate(value);
    }
  }, {
    key: "updatedAt",
    get: function get() {
      return this._updatedAt;
    }

    /**
     * 对话名字，对应 _Conversation 表中的 name
     * @type {String}
     */,
    set: function set(value) {
      this._updatedAt = decodeDate(value);
    }
  }, {
    key: "name",
    get: function get() {
      return this.get('name');
    },
    set: function set(value) {
      this.set('name', value);
    }
  }]);
  return PersistentConversation;
}(ConversationBase);

/**
 * 对话成员角色枚举
 * @enum {String}
 * @since 4.0.0
 * @memberof module:leancloud-realtime
 */
var ConversationMemberRole = {
  /** 所有者 */
  OWNER: 'Owner',
  /** 管理员 */
  MANAGER: 'Manager',
  /** 成员 */
  MEMBER: 'Member'
};
Object.freeze(ConversationMemberRole);
var ConversationMemberInfo = /*#__PURE__*/function () {
  /**
   * 对话成员属性，保存了成员与某个对话相关的属性，对应 _ConversationMemberInfo 表
   * @since 4.0.0
   */
  function ConversationMemberInfo(_ref) {
    var conversation = _ref.conversation,
      memberId = _ref.memberId,
      role = _ref.role;
    if (!conversation) throw new Error('conversation requried');
    if (!memberId) throw new Error('memberId requried');
    Object.assign(internal(this), {
      conversation: conversation,
      memberId: memberId,
      role: role
    });
  }

  /**
   * 对话 Id
   * @type {String}
   * @readonly
   */
  var _proto = ConversationMemberInfo.prototype;
  _proto.toJSON = function toJSON() {
    var conversationId = this.conversationId,
      memberId = this.memberId,
      role = this.role,
      isOwner = this.isOwner;
    return {
      conversationId: conversationId,
      memberId: memberId,
      role: role,
      isOwner: isOwner
    };
  };
  _createClass(ConversationMemberInfo, [{
    key: "conversationId",
    get: function get() {
      return internal(this).conversation.id;
    }

    /**
     * 成员 Id
     * @type {String}
     * @readonly
     */
  }, {
    key: "memberId",
    get: function get() {
      return internal(this).memberId;
    }

    /**
     * 角色
     * @type {module:leancloud-realtime.ConversationMemberRole | String}
     * @readonly
     */
  }, {
    key: "role",
    get: function get() {
      if (this.isOwner) return ConversationMemberRole.OWNER;
      return internal(this).role;
    }

    /**
     * 是否是管理员
     * @type {Boolean}
     * @readonly
     */
  }, {
    key: "isOwner",
    get: function get() {
      return this.memberId === internal(this).conversation.creator;
    }
  }]);
  return ConversationMemberInfo;
}();

/**
 * 普通对话
 *
 * 无法直接实例化，请使用 {@link IMClient#createConversation} 创建新的普通对话。
 * @extends PersistentConversation
 * @public
 */
var Conversation = /*#__PURE__*/function (_PersistentConversati) {
  _inheritsLoose(Conversation, _PersistentConversati);
  function Conversation() {
    return _PersistentConversati.apply(this, arguments) || this;
  }
  var _proto = Conversation.prototype;
  _proto._addMembers = function _addMembers(members) {
    var _this = this;
    _PersistentConversati.prototype._addMembers.call(this, members);
    this.members = union(this.members, members);
    var _internal = internal(this),
      memberInfoMap = _internal.memberInfoMap;
    if (!memberInfoMap) return;
    members.forEach(function (memberId) {
      memberInfoMap[memberId] = memberInfoMap[memberId] || new ConversationMemberInfo({
        conversation: _this,
        memberId: memberId,
        role: ConversationMemberRole.MEMBER
      });
    });
  };
  _proto._removeMembers = function _removeMembers(members) {
    _PersistentConversati.prototype._removeMembers.call(this, members);
    this.members = difference(this.members, members);
    var _internal2 = internal(this),
      memberInfoMap = _internal2.memberInfoMap;
    if (!memberInfoMap) return;
    members.forEach(function (memberId) {
      delete memberInfoMap[memberId];
    });
  };
  _proto._fetchAllMemberInfo = /*#__PURE__*/function () {
    var _fetchAllMemberInfo2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var _this2 = this;
      var response, memberInfos, memberInfoMap;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this._client._requestWithSessionToken({
              method: 'GET',
              path: '/classes/_ConversationMemberInfo',
              query: {
                where: {
                  cid: this.id
                }
              }
            });
          case 2:
            response = _context.sent;
            memberInfos = response.results.map(function (info) {
              return new ConversationMemberInfo({
                conversation: _this2,
                memberId: info.clientId,
                role: info.role
              });
            });
            memberInfoMap = {};
            memberInfos.forEach(function (memberInfo) {
              memberInfoMap[memberInfo.memberId] = memberInfo;
            });
            this.members.forEach(function (memberId) {
              memberInfoMap[memberId] = memberInfoMap[memberId] || new ConversationMemberInfo({
                conversation: _this2,
                memberId: memberId,
                role: ConversationMemberRole.MEMBER
              });
            });
            internal(this).memberInfoMap = memberInfoMap;
            return _context.abrupt("return", memberInfoMap);
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function _fetchAllMemberInfo() {
      return _fetchAllMemberInfo2.apply(this, arguments);
    }
    return _fetchAllMemberInfo;
  }()
  /**
   * 获取所有成员的对话属性
   * @since 4.0.0
   * @return {Promise.<ConversationMemberInfo[]>} 所有成员的对话属性列表
   */
  ;
  _proto.getAllMemberInfo =
  /*#__PURE__*/
  function () {
    var _getAllMemberInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      var _ref,
        _ref$noCache,
        noCache,
        _internal3,
        memberInfoMap,
        _args2 = arguments;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _ref = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, _ref$noCache = _ref.noCache, noCache = _ref$noCache === void 0 ? false : _ref$noCache;
            _internal3 = internal(this), memberInfoMap = _internal3.memberInfoMap;
            if (!(!memberInfoMap || noCache)) {
              _context2.next = 6;
              break;
            }
            _context2.next = 5;
            return this._fetchAllMemberInfo();
          case 5:
            memberInfoMap = _context2.sent;
          case 6:
            return _context2.abrupt("return", this.members.map(function (memberId) {
              return memberInfoMap[memberId];
            }));
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    function getAllMemberInfo() {
      return _getAllMemberInfo.apply(this, arguments);
    }
    return getAllMemberInfo;
  }()
  /**
   * 获取指定成员的对话属性
   * @since 4.0.0
   * @param {String} memberId 成员 Id
   * @return {Promise.<ConversationMemberInfo>} 指定成员的对话属性
   */
  ;
  _proto.getMemberInfo =
  /*#__PURE__*/
  function () {
    var _getMemberInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(memberId) {
      var _internal4, memberInfoMap;
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(this.members.indexOf(memberId) === -1)) {
              _context3.next = 2;
              break;
            }
            throw new Error("".concat(memberId, " is not the mumber of conversation[").concat(this.id, "]"));
          case 2:
            _internal4 = internal(this), memberInfoMap = _internal4.memberInfoMap;
            if (memberInfoMap && memberInfoMap[memberId]) {
              _context3.next = 6;
              break;
            }
            _context3.next = 6;
            return this.getAllMemberInfo();
          case 6:
            return _context3.abrupt("return", internal(this).memberInfoMap[memberId]);
          case 7:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    function getMemberInfo(_x) {
      return _getMemberInfo.apply(this, arguments);
    }
    return getMemberInfo;
  }()
  /**
   * 更新指定用户的角色
   * @since 4.0.0
   * @param {String} memberId 成员 Id
   * @param {module:leancloud-realtime.ConversationMemberRole | String} role 角色
   * @return {Promise.<this>} self
   */
  ;
  _proto.updateMemberRole =
  /*#__PURE__*/
  function () {
    var _updateMemberRole = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(memberId, role) {
      var _internal5, memberInfos;
      return _regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            this._debug('update member role');
            if (!(role === ConversationMemberRole.OWNER)) {
              _context4.next = 3;
              break;
            }
            throw createError({
              code: ErrorCode.OWNER_PROMOTION_NOT_ALLOWED
            });
          case 3:
            _context4.next = 5;
            return this._send(new GenericCommand({
              op: OpType.member_info_update,
              convMessage: new ConvCommand({
                targetClientId: memberId,
                info: new ConvMemberInfo({
                  pid: memberId,
                  role: role
                })
              })
            }));
          case 5:
            _internal5 = internal(this), memberInfos = _internal5.memberInfos;
            if (memberInfos && memberInfos[memberId]) {
              internal(memberInfos[memberId]).role = role;
            }
            return _context4.abrupt("return", this);
          case 8:
          case "end":
            return _context4.stop();
        }
      }, _callee4, this);
    }));
    function updateMemberRole(_x2, _x3) {
      return _updateMemberRole.apply(this, arguments);
    }
    return updateMemberRole;
  }();
  return Conversation;
}(PersistentConversation);

/**
 * 聊天室。
 *
 * 无法直接实例化，请使用 {@link IMClient#createChatRoom} 创建新的聊天室。
 * @since 4.0.0
 * @extends PersistentConversation
 * @public
 */
var ChatRoom = /*#__PURE__*/function (_PersistentConversati) {
  _inheritsLoose(ChatRoom, _PersistentConversati);
  function ChatRoom() {
    return _PersistentConversati.apply(this, arguments) || this;
  }
  return ChatRoom;
}(PersistentConversation);

/**
 * 服务号。
 *
 * 服务号不支持在客户端创建。
 * @since 4.0.0
 * @extends PersistentConversation
 * @public
 */
var ServiceConversation = /*#__PURE__*/function (_PersistentConversati) {
  _inheritsLoose(ServiceConversation, _PersistentConversati);
  function ServiceConversation() {
    return _PersistentConversati.apply(this, arguments) || this;
  }
  var _proto = ServiceConversation.prototype;
  /**
   * 订阅该服务号
   * @return {Promise.<this>} self
   */
  _proto.subscribe =
  /*#__PURE__*/
  function () {
    var _subscribe = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", this.join());
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function subscribe() {
      return _subscribe.apply(this, arguments);
    }
    return subscribe;
  }()
  /**
   * 退订该服务号
   * @return {Promise.<this>} self
   */
  ;
  _proto.unsubscribe =
  /*#__PURE__*/
  function () {
    var _unsubscribe = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", this.quit());
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    function unsubscribe() {
      return _unsubscribe.apply(this, arguments);
    }
    return unsubscribe;
  }();
  return ServiceConversation;
}(PersistentConversation);

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$7(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var transformNotFoundError = function transformNotFoundError(error) {
  return error.code === ErrorCode.CONVERSATION_NOT_FOUND ? createError({
    code: ErrorCode.TEMPORARY_CONVERSATION_EXPIRED
  }) : error;
};

/**
 * 临时对话
 * @since 4.0.0
 * @extends ConversationBase
 * @public
 */
var TemporaryConversation = /*#__PURE__*/function (_ConversationBase) {
  _inheritsLoose(TemporaryConversation, _ConversationBase);
  /**
   * 无法直接实例化，请使用 {@link IMClient#createTemporaryConversation} 创建新的临时对话。
   */
  function TemporaryConversation(data, _ref, client) {
    var expiredAt = _ref.expiredAt;
    return _ConversationBase.call(this, _objectSpread$7(_objectSpread$7({}, data), {}, {
      expiredAt: expiredAt
    }), client) || this;
  }

  /**
   * 对话失效时间
   * @type {Date}
   */
  var _proto = TemporaryConversation.prototype;
  _proto._send = /*#__PURE__*/function () {
    var _send2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var _ConversationBase$pro,
        _len,
        args,
        _key,
        _args = arguments;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!this.expired) {
              _context.next = 2;
              break;
            }
            throw createError({
              code: ErrorCode.TEMPORARY_CONVERSATION_EXPIRED
            });
          case 2:
            _context.prev = 2;
            for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = _args[_key];
            }
            _context.next = 6;
            return (_ConversationBase$pro = _ConversationBase.prototype._send).call.apply(_ConversationBase$pro, [this].concat(args));
          case 6:
            return _context.abrupt("return", _context.sent);
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            throw transformNotFoundError(_context.t0);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, this, [[2, 9]]);
    }));
    function _send() {
      return _send2.apply(this, arguments);
    }
    return _send;
  }();
  _proto.send = /*#__PURE__*/function () {
    var _send3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      var _ConversationBase$pro2,
        _len2,
        args,
        _key2,
        _args2 = arguments;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            for (_len2 = _args2.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = _args2[_key2];
            }
            _context2.next = 4;
            return (_ConversationBase$pro2 = _ConversationBase.prototype.send).call.apply(_ConversationBase$pro2, [this].concat(args));
          case 4:
            return _context2.abrupt("return", _context2.sent);
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            throw transformNotFoundError(_context2.t0);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this, [[0, 7]]);
    }));
    function send() {
      return _send3.apply(this, arguments);
    }
    return send;
  }();
  _proto.toFullJSON = function toFullJSON() {
    var expiredAt = this.expiredAt;
    return _objectSpread$7(_objectSpread$7({}, _ConversationBase.prototype.toFullJSON.call(this)), {}, {
      expiredAt: getTime(expiredAt)
    });
  };
  _proto.toJSON = function toJSON() {
    var expiredAt = this.expiredAt,
      expired = this.expired;
    return _objectSpread$7(_objectSpread$7({}, _ConversationBase.prototype.toJSON.call(this)), {}, {
      expiredAt: expiredAt,
      expired: expired
    });
  };
  _createClass(TemporaryConversation, [{
    key: "expiredAt",
    get: function get() {
      return this._expiredAt;
    }

    /**
     * 对话是否已失效
     * @type {Boolean}
     */,
    set: function set(value) {
      this._expiredAt = decodeDate(value);
    }
  }, {
    key: "expired",
    get: function get() {
      return this.expiredAt < new Date();
    }
  }]);
  return TemporaryConversation;
}(ConversationBase);

var debug$9 = d('LC:ConversationQuery');
var ConversationQuery = /*#__PURE__*/function () {
  ConversationQuery._encode = function _encode(value) {
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
  };
  ConversationQuery._quote = function _quote(s) {
    return "\\Q".concat(s.replace('\\E', '\\E\\\\E\\Q'), "\\E");
  };
  ConversationQuery._calculateFlag = function _calculateFlag(options) {
    return ['withLastMessagesRefreshed', 'compact'].reduce(
    // eslint-disable-next-line no-bitwise
    function (prev, key) {
      return (prev << 1) + Boolean(options[key]);
    }, 0);
  }

  /**
   * 构造一个用 AND 连接所有查询的 ConversationQuery
   * @param {...ConversationQuery} queries
   * @return {ConversationQuery}
   */;
  ConversationQuery.and = function and() {
    for (var _len = arguments.length, queries = new Array(_len), _key = 0; _key < _len; _key++) {
      queries[_key] = arguments[_key];
    }
    if (queries.length < 2) {
      throw new Error('The queries must contain at least two elements');
    }
    if (!queries.every(function (q) {
      return q instanceof ConversationQuery;
    })) {
      throw new Error('The element of queries must be an instance of ConversationQuery');
    }
    var combined = new ConversationQuery(queries[0]._client);
    combined._where.$and = queries.map(function (q) {
      return q._where;
    });
    return combined;
  }

  /**
   * 构造一个用 OR 连接所有查询的 ConversationQuery
   * @param  {...ConversationQuery} queries
   * @return {ConversationQuery}
   */;
  ConversationQuery.or = function or() {
    var combined = ConversationQuery.and.apply(ConversationQuery, arguments);
    combined._where.$or = combined._where.$and;
    delete combined._where.$and;
    return combined;
  }

  /**
   * Create a ConversationQuery
   * @param  {IMClient} client
   */;
  function ConversationQuery(client) {
    this._client = client;
    this._where = {};
    this._extraOptions = {};
  }
  var _proto = ConversationQuery.prototype;
  _proto._addCondition = function _addCondition(key, condition, value) {
    // Check if we already have a condition
    if (!this._where[key]) {
      this._where[key] = {};
    }
    this._where[key][condition] = this.constructor._encode(value);
    return this;
  };
  _proto.toJSON = function toJSON() {
    var json = {
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
   */;
  _proto.containsMembers = function containsMembers(peerIds) {
    return this.containsAll('m', peerIds);
  }

  /**
   * 增加查询条件，指定聊天室的组员条件满足条件的才返回
   *
   * @param {string[]} - 成员 ID 列表
   * @param {Boolean} includeSelf - 是否包含自己
   * @return {ConversationQuery} self
   */;
  _proto.withMembers = function withMembers(peerIds, includeSelf) {
    var peerIdsSet = new Set(peerIds);
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
   */;
  _proto.equalTo = function equalTo(key, value) {
    this._where[key] = this.constructor._encode(value);
    return this;
  }

  /**
   * 增加查询条件，当 conversation 的属性中对应的字段满足小于条件时即可返回
   * @param {string} key
   * @param value
   * @return {ConversationQuery} self
   */;
  _proto.lessThan = function lessThan(key, value) {
    return this._addCondition(key, '$lt', value);
  }

  /**
   * 增加查询条件，当 conversation 的属性中对应的字段满足小于等于条件时即可返回
    * @param {string} key
   * @param value
   * @return {ConversationQuery} self
   */;
  _proto.lessThanOrEqualTo = function lessThanOrEqualTo(key, value) {
    return this._addCondition(key, '$lte', value);
  }

  /**
   * 增加查询条件，当 conversation 的属性中对应的字段满足大于条件时即可返回
   *
   * @param {string} key
   * @param value
   * @return {ConversationQuery} self
   */;
  _proto.greaterThan = function greaterThan(key, value) {
    return this._addCondition(key, '$gt', value);
  }

  /**
   * 增加查询条件，当 conversation 的属性中对应的字段满足大于等于条件时即可返回
   *
   * @param {string} key
   * @param value
   * @return {ConversationQuery} self
   */;
  _proto.greaterThanOrEqualTo = function greaterThanOrEqualTo(key, value) {
    return this._addCondition(key, '$gte', value);
  }

  /**
   * 增加查询条件，当 conversation 的属性中对应的字段满足不等于条件时即可返回
   *
   * @param {string} key
   * @param value
   * @return {ConversationQuery} self
   */;
  _proto.notEqualTo = function notEqualTo(key, value) {
    return this._addCondition(key, '$ne', value);
  }

  /**
   * 增加查询条件，当 conversation 存在指定的字段时即可返回
   *
   * @since 3.5.0
   * @param {string} key
   * @return {ConversationQuery} self
   */;
  _proto.exists = function exists(key) {
    return this._addCondition(key, '$exists', true);
  }

  /**
   * 增加查询条件，当 conversation 不存在指定的字段时即可返回
   *
   * @since 3.5.0
   * @param {string} key
   * @return {ConversationQuery} self
   */;
  _proto.doesNotExist = function doesNotExist(key) {
    return this._addCondition(key, '$exists', false);
  }

  /**
   * 增加查询条件，当 conversation 的属性中对应的字段对应的值包含在指定值中时即可返回
   *
   * @param {string} key
   * @param values
   * @return {ConversationQuery} self
   */;
  _proto.containedIn = function containedIn(key, values) {
    return this._addCondition(key, '$in', values);
  }

  /**
   * 增加查询条件，当 conversation 的属性中对应的字段对应的值不包含在指定值中时即可返回
   *
   * @param {string} key
   * @param values
   * @return {ConversationQuery} self
   */;
  _proto.notContainsIn = function notContainsIn(key, values) {
    return this._addCondition(key, '$nin', values);
  }

  /**
   * 增加查询条件，当conversation的属性中对应的字段中的元素包含所有的值才可返回
   *
   * @param {string} key
   * @param values
   * @return {ConversationQuery} self
   */;
  _proto.containsAll = function containsAll(key, values) {
    return this._addCondition(key, '$all', values);
  }

  /**
   * 增加查询条件，当 conversation 的属性中对应的字段对应的值包含此字符串即可返回
   *
   * @param {string} key
   * @param {string} subString
   * @return {ConversationQuery} self
   */;
  _proto.contains = function contains(key, subString) {
    return this._addCondition(key, '$regex', ConversationQuery._quote(subString));
  }

  /**
   * 增加查询条件，当 conversation 的属性中对应的字段对应的值以此字符串起始即可返回
   *
   * @param {string} key
   * @param {string} prefix
   * @return {ConversationQuery} self
   */;
  _proto.startsWith = function startsWith(key, prefix) {
    return this._addCondition(key, '$regex', "^".concat(ConversationQuery._quote(prefix)));
  }

  /**
   * 增加查询条件，当 conversation 的属性中对应的字段对应的值以此字符串结束即可返回
   *
   * @param {string} key
   * @param {string} suffix
   * @return {ConversationQuery} self
   */;
  _proto.endsWith = function endsWith(key, suffix) {
    return this._addCondition(key, '$regex', "".concat(ConversationQuery._quote(suffix), "$"));
  }

  /**
   * 增加查询条件，当 conversation 的属性中对应的字段对应的值满足提供的正则表达式即可返回
   *
   * @param {string} key
   * @param {RegExp} regex
   * @return {ConversationQuery} self
   */;
  _proto.matches = function matches(key, regex) {
    this._addCondition(key, '$regex', regex);
    // Javascript regex options support mig as inline options but store them
    // as properties of the object. We support mi & should migrate them to
    // modifiers
    var _modifiers = '';
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
   */;
  _proto.sizeEqualTo = function sizeEqualTo(key, length) {
    return this._addCondition(key, '$size', length);
  }

  /**
   * 设置返回集合的大小上限
   *
   * @param {Number} limit - 上限
   * @return {ConversationQuery} self
   */;
  _proto.limit = function limit(_limit) {
    this._limit = _limit;
    return this;
  }

  /**
   * 设置返回集合的起始位置，一般用于分页
   *
   * @param {Number} skip - 起始位置跳过几个对象
   * @return {ConversationQuery} self
   */;
  _proto.skip = function skip(_skip) {
    this._skip = _skip;
    return this;
  }

  /**
   * 设置返回集合按照指定key进行增序排列
   *
   * @param {string} key
   * @return {ConversationQuery} self
   */;
  _proto.ascending = function ascending(key) {
    this._order = key;
    return this;
  }

  /**
   * 设置返回集合按照指定key进行增序排列，如果已设置其他排序，原排序的优先级较高
   *
   * @param {string} key
   * @return {ConversationQuery} self
   */;
  _proto.addAscending = function addAscending(key) {
    if (this._order) {
      this._order += ",".concat(key);
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
   */;
  _proto.descending = function descending(key) {
    this._order = "-".concat(key);
    return this;
  }

  /**
   * 设置返回集合按照指定 key 进行降序排列，如果已设置其他排序，原排序的优先级较高
   *
   * @param {string} key
   * @return {ConversationQuery} self
   */;
  _proto.addDescending = function addDescending(key) {
    if (this._order) {
      this._order += ",-".concat(key);
    } else {
      this._order = "-".concat(key);
    }
    return this;
  }

  /**
   * 设置返回的 conversations 刷新最后一条消息
   * @param  {Boolean} [enabled=true]
   * @return {ConversationQuery} self
   */;
  _proto.withLastMessagesRefreshed = function withLastMessagesRefreshed() {
    var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    this._extraOptions.withLastMessagesRefreshed = enabled;
    return this;
  }

  /**
   * 设置返回的 conversations 为精简模式，即不含成员列表
   * @param  {Boolean} [enabled=true]
   * @return {ConversationQuery} self
   */;
  _proto.compact = function compact() {
    var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    this._extraOptions.compact = enabled;
    return this;
  }

  /**
   * 执行查询
   * @return {Promise.<ConversationBase[]>}
   */;
  _proto.find =
  /*#__PURE__*/
  function () {
    var _find = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", this._client._executeQuery(this));
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function find() {
      return _find.apply(this, arguments);
    }
    return find;
  }()
  /**
   * 返回符合条件的第一个结果
   * @return {Promise.<ConversationBase>}
   */
  ;
  _proto.first =
  /*#__PURE__*/
  function () {
    var _first = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return this.limit(1).find();
          case 2:
            return _context2.abrupt("return", _context2.sent[0]);
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    function first() {
      return _first.apply(this, arguments);
    }
    return first;
  }();
  return ConversationQuery;
}();

var debug$a = d('LC:SessionManager');
var SessionManager = /*#__PURE__*/function () {
  function SessionManager() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      refresh = _ref.refresh,
      onBeforeGetSessionToken = _ref.onBeforeGetSessionToken;
    this.refresh = refresh;
    this._onBeforeGetSessionToken = onBeforeGetSessionToken;
    this.setSessionToken(null, 0);
  }
  var _proto = SessionManager.prototype;
  _proto.setSessionToken = function setSessionToken(token, ttl) {
    debug$a('set session token', token, ttl);
    var sessionToken = new Expirable(token, ttl * 1000);
    this._sessionToken = sessionToken;
    delete this._pendingSessionTokenPromise;
    return sessionToken;
  };
  _proto.setSessionTokenAsync = /*#__PURE__*/function () {
    var _setSessionTokenAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(promise) {
      var _this = this;
      var currentSessionToken;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            currentSessionToken = this._sessionToken;
            this._pendingSessionTokenPromise = promise["catch"](function (error) {
              // revert, otherwise the following getSessionToken calls
              // will all be rejected
              _this._sessionToken = currentSessionToken;
              throw error;
            });
            _context.t0 = this.setSessionToken;
            _context.t1 = this;
            _context.t2 = _toConsumableArray;
            _context.next = 7;
            return this._pendingSessionTokenPromise;
          case 7:
            _context.t3 = _context.sent;
            _context.t4 = (0, _context.t2)(_context.t3);
            return _context.abrupt("return", _context.t0.apply.call(_context.t0, _context.t1, _context.t4));
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function setSessionTokenAsync(_x) {
      return _setSessionTokenAsync.apply(this, arguments);
    }
    return setSessionTokenAsync;
  }();
  _proto.getSessionToken = /*#__PURE__*/function () {
    var _getSessionToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      var _ref2,
        _ref2$autoRefresh,
        autoRefresh,
        _ref3,
        value,
        originalValue,
        _yield$this$setSessio,
        newValue,
        _args2 = arguments;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _ref2 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, _ref2$autoRefresh = _ref2.autoRefresh, autoRefresh = _ref2$autoRefresh === void 0 ? true : _ref2$autoRefresh;
            debug$a('get session token');
            if (this._onBeforeGetSessionToken) {
              this._onBeforeGetSessionToken(this);
            }
            _context2.t0 = this._sessionToken;
            if (_context2.t0) {
              _context2.next = 8;
              break;
            }
            _context2.next = 7;
            return this._pendingSessionTokenPromise;
          case 7:
            _context2.t0 = _context2.sent;
          case 8:
            _ref3 = _context2.t0;
            value = _ref3.value;
            originalValue = _ref3.originalValue;
            if (!(value === Expirable.EXPIRED && autoRefresh && this.refresh)) {
              _context2.next = 19;
              break;
            }
            debug$a('refresh expired session token');
            _context2.next = 15;
            return this.setSessionTokenAsync(this.refresh(this, originalValue));
          case 15:
            _yield$this$setSessio = _context2.sent;
            newValue = _yield$this$setSessio.value;
            debug$a('session token', newValue);
            return _context2.abrupt("return", newValue);
          case 19:
            debug$a('session token', value);
            return _context2.abrupt("return", value);
          case 21:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    function getSessionToken() {
      return _getSessionToken.apply(this, arguments);
    }
    return getSessionToken;
  }();
  _proto.revoke = function revoke() {
    if (this._sessionToken) this._sessionToken.expiredAt = -1;
  };
  return SessionManager;
}();

var _excluded$3 = ["cmd", "op", "serverTs", "notificationType"],
  _excluded2$1 = ["headers", "query"],
  _excluded3 = ["data", "bin"],
  _excluded4 = ["id", "lastMessageAt", "lastMessage", "lastDeliveredAt", "lastReadAt", "unreadMessagesCount", "members", "mentioned"],
  _excluded5 = ["members", "name", "transient", "unique", "_tempConv", "_tempConvTTL"],
  _excluded6 = ["ttl"];
var _dec$2, _dec2, _class$3;
function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$8(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var debug$b = d('LC:IMClient');
var INVITED$1 = INVITED,
  KICKED$1 = KICKED,
  MEMBERS_JOINED$1 = MEMBERS_JOINED,
  MEMBERS_LEFT$1 = MEMBERS_LEFT,
  MEMBER_INFO_UPDATED$1 = MEMBER_INFO_UPDATED,
  BLOCKED$1 = BLOCKED,
  UNBLOCKED$1 = UNBLOCKED,
  MEMBERS_BLOCKED$1 = MEMBERS_BLOCKED,
  MEMBERS_UNBLOCKED$1 = MEMBERS_UNBLOCKED,
  MUTED$1 = MUTED,
  UNMUTED$1 = UNMUTED,
  MEMBERS_MUTED$1 = MEMBERS_MUTED,
  MEMBERS_UNMUTED$1 = MEMBERS_UNMUTED,
  MESSAGE$2 = MESSAGE$1,
  UNREAD_MESSAGES_COUNT_UPDATE$1 = UNREAD_MESSAGES_COUNT_UPDATE,
  CLOSE$1 = CLOSE,
  CONFLICT$1 = CONFLICT,
  UNHANDLED_MESSAGE$1 = UNHANDLED_MESSAGE,
  CONVERSATION_INFO_UPDATED$1 = CONVERSATION_INFO_UPDATED,
  MESSAGE_RECALL$1 = MESSAGE_RECALL,
  MESSAGE_UPDATE$1 = MESSAGE_UPDATE,
  INFO_UPDATED$1 = INFO_UPDATED;
var isTemporaryConversatrionId = function isTemporaryConversatrionId(id) {
  return /^_tmp:/.test(id);
};

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
var configBitmap = 187;
var IMClient = (_dec$2 = throttle(1000), _dec2 = throttle(1000), (_class$3 = /*#__PURE__*/function (_EventEmitter) {
  _inheritsLoose(IMClient, _EventEmitter);
  /**
   * 无法直接实例化，请使用 {@link Realtime#createIMClient} 创建新的 IMClient。
   *
   * @extends EventEmitter
   */
  function IMClient(id) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var props = arguments.length > 2 ? arguments[2] : undefined;
    if (!(id === undefined || typeof id === 'string')) {
      throw new TypeError("Client id [".concat(id, "] is not a String"));
    }
    _this = _EventEmitter.call(this) || this;
    Object.assign(_assertThisInitialized(_this), {
      /**
       * @var id {String} 客户端 id
       * @memberof IMClient#
       */
      id: id,
      options: options
    }, props);
    if (!_this._messageParser) {
      throw new Error('IMClient must be initialized with a MessageParser');
    }
    _this._conversationCache = new Cache("client:".concat(_this.id));
    _this._ackMessageBuffer = {};
    internal(_assertThisInitialized(_this)).lastPatchTime = Date.now();
    internal(_assertThisInitialized(_this)).lastNotificationTime = undefined;
    internal(_assertThisInitialized(_this))._eventemitter = new EventEmitter();
    if (debug$b.enabled) {
      values(IMEvent).forEach(function (event) {
        return _this.on(event, function () {
          for (var _len = arguments.length, payload = new Array(_len), _key = 0; _key < _len; _key++) {
            payload[_key] = arguments[_key];
          }
          return _this._debug("".concat(event, " event emitted. %o"), payload);
        });
      });
    }
    // onIMClientCreate hook
    applyDecorators(_this._plugins.onIMClientCreate, _assertThisInitialized(_this));
    return _this;
  }
  var _proto = IMClient.prototype;
  _proto._debug = function _debug() {
    for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      params[_key2] = arguments[_key2];
    }
    debug$b.apply(void 0, params.concat(["[".concat(this.id, "]")]));
  }

  /**
   * @override
   * @private
   */;
  _proto._dispatchCommand =
  /*#__PURE__*/
  function () {
    var _dispatchCommand2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(command) {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            this._debug(trim(command), 'received');
            if (command.serverTs && command.notificationType === 1) {
              internal(this).lastNotificationTime = getTime(decodeDate(command.serverTs));
            }
            _context.t0 = command.cmd;
            _context.next = _context.t0 === CommandType.conv ? 5 : _context.t0 === CommandType.direct ? 6 : _context.t0 === CommandType.session ? 7 : _context.t0 === CommandType.unread ? 8 : _context.t0 === CommandType.rcp ? 9 : _context.t0 === CommandType.patch ? 10 : 11;
            break;
          case 5:
            return _context.abrupt("return", this._dispatchConvMessage(command));
          case 6:
            return _context.abrupt("return", this._dispatchDirectMessage(command));
          case 7:
            return _context.abrupt("return", this._dispatchSessionMessage(command));
          case 8:
            return _context.abrupt("return", this._dispatchUnreadMessage(command));
          case 9:
            return _context.abrupt("return", this._dispatchRcpMessage(command));
          case 10:
            return _context.abrupt("return", this._dispatchPatchMessage(command));
          case 11:
            return _context.abrupt("return", this.emit(UNHANDLED_MESSAGE$1, command));
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function _dispatchCommand(_x) {
      return _dispatchCommand2.apply(this, arguments);
    }
    return _dispatchCommand;
  }();
  _proto._dispatchSessionMessage = /*#__PURE__*/function () {
    var _dispatchSessionMessage2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(message) {
      var _message$sessionMessa, code, reason;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _message$sessionMessa = message.sessionMessage, code = _message$sessionMessa.code, reason = _message$sessionMessa.reason;
            _context2.t0 = message.op;
            _context2.next = _context2.t0 === OpType.closed ? 4 : 8;
            break;
          case 4:
            internal(this)._eventemitter.emit('close');
            if (!(code === ErrorCode.SESSION_CONFLICT)) {
              _context2.next = 7;
              break;
            }
            return _context2.abrupt("return", this.emit(CONFLICT$1, {
              reason: reason
            }));
          case 7:
            return _context2.abrupt("return", this.emit(CLOSE$1, {
              code: code,
              reason: reason
            }));
          case 8:
            this.emit(UNHANDLED_MESSAGE$1, message);
            throw new Error('Unrecognized session command');
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    function _dispatchSessionMessage(_x2) {
      return _dispatchSessionMessage2.apply(this, arguments);
    }
    return _dispatchSessionMessage;
  }();
  _proto._dispatchUnreadMessage = function _dispatchUnreadMessage(_ref) {
    var _this2 = this;
    var _ref$unreadMessage = _ref.unreadMessage,
      convs = _ref$unreadMessage.convs,
      notifTime = _ref$unreadMessage.notifTime;
    internal(this).lastUnreadNotifTime = notifTime;
    // ensure all converstions are cached
    return this.getConversations(convs.map(function (conv) {
      return conv.cid;
    })).then(function () {
      return (
        // update conversations data
        Promise.all(convs.map(function (_ref2) {
          var cid = _ref2.cid,
            unread = _ref2.unread,
            mid = _ref2.mid,
            ts = _ref2.timestamp,
            from = _ref2.from,
            data = _ref2.data,
            binaryMsg = _ref2.binaryMsg,
            patchTimestamp = _ref2.patchTimestamp,
            mentioned = _ref2.mentioned;
          var conversation = _this2._conversationCache.get(cid);
          // deleted conversation
          if (!conversation) return null;
          var timestamp;
          if (ts) {
            timestamp = decodeDate(ts);
            conversation.lastMessageAt = timestamp; // eslint-disable-line no-param-reassign
          }

          return (mid ? _this2._messageParser.parse(binaryMsg || data).then(function (message) {
            var messageProps = {
              id: mid,
              cid: cid,
              timestamp: timestamp,
              updatedAt: patchTimestamp,
              from: from
            };
            Object.assign(message, messageProps);
            conversation.lastMessage = message; // eslint-disable-line no-param-reassign
          }) : Promise.resolve()).then(function () {
            conversation._setUnreadMessagesMentioned(mentioned);
            var countNotUpdated = unread === internal(conversation).unreadMessagesCount;
            if (countNotUpdated) return null; // to be filtered
            // manipulate internal property directly to skip unreadmessagescountupdate event
            internal(conversation).unreadMessagesCount = unread;
            return conversation;
          });
          // filter conversations without unread count update
        })).then(function (conversations) {
          return conversations.filter(function (conversation) {
            return conversation;
          });
        })
      );
    }).then(function (conversations) {
      if (conversations.length) {
        /**
         * 未读消息数目更新
         * @event IMClient#UNREAD_MESSAGES_COUNT_UPDATE
         * @since 3.4.0
         * @param {Conversation[]} conversations 未读消息数目有更新的对话列表
         */
        _this2.emit(UNREAD_MESSAGES_COUNT_UPDATE$1, conversations);
      }
    });
  };
  _proto._dispatchRcpMessage = /*#__PURE__*/function () {
    var _dispatchRcpMessage2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(message) {
      var rcpMessage, read, conversationId, messageId, timestamp, conversation;
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            rcpMessage = message.rcpMessage, read = message.rcpMessage.read;
            conversationId = rcpMessage.cid;
            messageId = rcpMessage.id;
            timestamp = decodeDate(rcpMessage.t);
            conversation = this._conversationCache.get(conversationId); // conversation not cached means the client does not send the message
            // during this session
            if (conversation) {
              _context3.next = 7;
              break;
            }
            return _context3.abrupt("return");
          case 7:
            conversation._handleReceipt({
              messageId: messageId,
              timestamp: timestamp,
              read: read
            });
          case 8:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    function _dispatchRcpMessage(_x3) {
      return _dispatchRcpMessage2.apply(this, arguments);
    }
    return _dispatchRcpMessage;
  }();
  _proto._dispatchPatchMessage = function _dispatchPatchMessage(_ref3) {
    var _this3 = this;
    var patches = _ref3.patchMessage.patches;
    // ensure all converstions are cached
    return this.getConversations(patches.map(function (patch) {
      return patch.cid;
    })).then(function () {
      return Promise.all(patches.map(function (_ref4) {
        var cid = _ref4.cid,
          mid = _ref4.mid,
          timestamp = _ref4.timestamp,
          recall = _ref4.recall,
          data = _ref4.data,
          patchTimestamp = _ref4.patchTimestamp,
          from = _ref4.from,
          binaryMsg = _ref4.binaryMsg,
          mentionAll = _ref4.mentionAll,
          mentionPids = _ref4.mentionPids,
          patchCode = _ref4.patchCode,
          patchReason = _ref4.patchReason;
        var conversation = _this3._conversationCache.get(cid);
        // deleted conversation
        if (!conversation) return null;
        return _this3._messageParser.parse(binaryMsg || data).then(function (message) {
          var patchTime = getTime(decodeDate(patchTimestamp));
          var messageProps = {
            id: mid,
            cid: cid,
            timestamp: timestamp,
            updatedAt: patchTime,
            from: from,
            mentionList: mentionPids,
            mentionedAll: mentionAll
          };
          Object.assign(message, messageProps);
          message._setStatus(MessageStatus.SENT);
          message._updateMentioned(_this3.id);
          if (internal(_this3).lastPatchTime < patchTime) {
            internal(_this3).lastPatchTime = patchTime;
          }
          // update conversation lastMessage
          if (conversation.lastMessage && conversation.lastMessage.id === mid) {
            conversation.lastMessage = message; // eslint-disable-line no-param-reassign
          }

          var reason;
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
            _this3.emit(MESSAGE_RECALL$1, message, conversation, reason);
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
            _this3.emit(MESSAGE_UPDATE$1, message, conversation, reason);
            /**
             * 消息被修改
             * @event ConversationBase#MESSAGE_UPDATE
             * @param {AVMessage} message 被修改的消息
             * @param {PatchReason} [reason] 修改的原因，不存在代表是发送者主动修改
             */
            conversation.emit(MESSAGE_UPDATE$1, message, reason);
          }
        });
      }));
    });
  };
  _proto._dispatchConvMessage = /*#__PURE__*/function () {
    var _dispatchConvMessage2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(message) {
      var convMessage, _message$convMessage, initBy, m, info, attr, conversation, payload, _payload, _payload2, _payload3, _payload4, _payload5, _payload6, _payload7, _payload8, _payload9, _payload10, _payload11, pid, role, _internal, memberInfoMap, memberInfo, _payload12, attributes, _payload13;
      return _regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            convMessage = message.convMessage, _message$convMessage = message.convMessage, initBy = _message$convMessage.initBy, m = _message$convMessage.m, info = _message$convMessage.info, attr = _message$convMessage.attr;
            _context4.next = 3;
            return this.getConversation(convMessage.cid);
          case 3:
            conversation = _context4.sent;
            _context4.t0 = message.op;
            _context4.next = _context4.t0 === OpType.joined ? 7 : _context4.t0 === OpType.left ? 12 : _context4.t0 === OpType.members_joined ? 17 : _context4.t0 === OpType.members_left ? 22 : _context4.t0 === OpType.members_blocked ? 27 : _context4.t0 === OpType.members_unblocked ? 31 : _context4.t0 === OpType.blocked ? 35 : _context4.t0 === OpType.unblocked ? 39 : _context4.t0 === OpType.members_shutuped ? 43 : _context4.t0 === OpType.members_unshutuped ? 47 : _context4.t0 === OpType.shutuped ? 51 : _context4.t0 === OpType.unshutuped ? 55 : _context4.t0 === OpType.member_info_changed ? 59 : _context4.t0 === OpType.updated ? 71 : 77;
            break;
          case 7:
            conversation._addMembers([this.id]);
            payload = {
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
            return _context4.abrupt("return");
          case 12:
            conversation._removeMembers([this.id]);
            _payload = {
              kickedBy: initBy
            };
            /**
             * 当前用户被从某个对话中移除
             * @event IMClient#KICKED
             * @param {Object} payload
             * @param {String} payload.kickedBy 该移除操作的发起者 id
             * @param {ConversationBase} conversation
             */
            this.emit(KICKED$1, _payload, conversation);
            /**
             * 当前用户被从当前对话中移除
             * @event ConversationBase#KICKED
             * @param {Object} payload
             * @param {String} payload.kickedBy 该移除操作的发起者 id
             */
            conversation.emit(KICKED$1, _payload);
            return _context4.abrupt("return");
          case 17:
            conversation._addMembers(m);
            _payload2 = {
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
            this.emit(MEMBERS_JOINED$1, _payload2, conversation);
            /**
             * 有成员被添加至当前对话
             * @event ConversationBase#MEMBERS_JOINED
             * @param {Object} payload
             * @param {String[]} payload.members 被添加的成员 id 列表
             * @param {String} payload.invitedBy 邀请者 id
             */
            conversation.emit(MEMBERS_JOINED$1, _payload2);
            return _context4.abrupt("return");
          case 22:
            conversation._removeMembers(m);
            _payload3 = {
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
            this.emit(MEMBERS_LEFT$1, _payload3, conversation);
            /**
             * 有成员被从当前对话中移除
             * @event ConversationBase#MEMBERS_LEFT
             * @param {Object} payload
             * @param {String[]} payload.members 被移除的成员 id 列表
             * @param {String} payload.kickedBy 该移除操作的发起者 id
             */
            conversation.emit(MEMBERS_LEFT$1, _payload3);
            return _context4.abrupt("return");
          case 27:
            _payload4 = {
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
            this.emit(MEMBERS_BLOCKED$1, _payload4, conversation);
            /**
             * 有成员被加入当前对话的黑名单
             * @event ConversationBase#MEMBERS_BLOCKED
             * @param {Object} payload
             * @param {String[]} payload.members 成员 id 列表
             * @param {String} payload.blockedBy 该操作的发起者 id
             */
            conversation.emit(MEMBERS_BLOCKED$1, _payload4);
            return _context4.abrupt("return");
          case 31:
            _payload5 = {
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
            this.emit(MEMBERS_UNBLOCKED$1, _payload5, conversation);
            /**
             * 有成员被移出当前对话的黑名单
             * @event ConversationBase#MEMBERS_UNBLOCKED
             * @param {Object} payload
             * @param {String[]} payload.members 成员 id 列表
             * @param {String} payload.unblockedBy 该操作的发起者 id
             */
            conversation.emit(MEMBERS_UNBLOCKED$1, _payload5);
            return _context4.abrupt("return");
          case 35:
            _payload6 = {
              blockedBy: initBy
            };
            /**
             * 当前用户被加入某个对话的黑名单
             * @event IMClient#BLOCKED
             * @param {Object} payload
             * @param {String} payload.blockedBy 该操作的发起者 id
             * @param {ConversationBase} conversation
             */
            this.emit(BLOCKED$1, _payload6, conversation);
            /**
             * 当前用户被加入当前对话的黑名单
             * @event ConversationBase#BLOCKED
             * @param {Object} payload
             * @param {String} payload.blockedBy 该操作的发起者 id
             */
            conversation.emit(BLOCKED$1, _payload6);
            return _context4.abrupt("return");
          case 39:
            _payload7 = {
              unblockedBy: initBy
            };
            /**
             * 当前用户被移出某个对话的黑名单
             * @event IMClient#UNBLOCKED
             * @param {Object} payload
             * @param {String} payload.unblockedBy 该操作的发起者 id
             * @param {ConversationBase} conversation
             */
            this.emit(UNBLOCKED$1, _payload7, conversation);
            /**
             * 当前用户被移出当前对话的黑名单
             * @event ConversationBase#UNBLOCKED
             * @param {Object} payload
             * @param {String} payload.unblockedBy 该操作的发起者 id
             */
            conversation.emit(UNBLOCKED$1, _payload7);
            return _context4.abrupt("return");
          case 43:
            _payload8 = {
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
            this.emit(MEMBERS_MUTED$1, _payload8, conversation);
            /**
             * 有成员在当前对话中被禁言
             * @event ConversationBase#MEMBERS_MUTED
             * @param {Object} payload
             * @param {String[]} payload.members 成员 id 列表
             * @param {String} payload.mutedBy 该操作的发起者 id
             */
            conversation.emit(MEMBERS_MUTED$1, _payload8);
            return _context4.abrupt("return");
          case 47:
            _payload9 = {
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
            this.emit(MEMBERS_UNMUTED$1, _payload9, conversation);
            /**
             * 有成员在当前对话中被解除禁言
             * @event ConversationBase#MEMBERS_UNMUTED
             * @param {Object} payload
             * @param {String[]} payload.members 成员 id 列表
             * @param {String} payload.unmutedBy 该操作的发起者 id
             */
            conversation.emit(MEMBERS_UNMUTED$1, _payload9);
            return _context4.abrupt("return");
          case 51:
            _payload10 = {
              mutedBy: initBy
            };
            /**
             * 有成员在某个对话中被禁言
             * @event IMClient#MUTED
             * @param {Object} payload
             * @param {String} payload.mutedBy 该操作的发起者 id
             * @param {ConversationBase} conversation
             */
            this.emit(MUTED$1, _payload10, conversation);
            /**
             * 有成员在当前对话中被禁言
             * @event ConversationBase#MUTED
             * @param {Object} payload
             * @param {String} payload.mutedBy 该操作的发起者 id
             */
            conversation.emit(MUTED$1, _payload10);
            return _context4.abrupt("return");
          case 55:
            _payload11 = {
              unmutedBy: initBy
            };
            /**
             * 有成员在某个对话中被解除禁言
             * @event IMClient#UNMUTED
             * @param {Object} payload
             * @param {String} payload.unmutedBy 该操作的发起者 id
             * @param {ConversationBase} conversation
             */
            this.emit(UNMUTED$1, _payload11, conversation);
            /**
             * 有成员在当前对话中被解除禁言
             * @event ConversationBase#UNMUTED
             * @param {Object} payload
             * @param {String} payload.unmutedBy 该操作的发起者 id
             */
            conversation.emit(UNMUTED$1, _payload11);
            return _context4.abrupt("return");
          case 59:
            pid = info.pid, role = info.role;
            _internal = internal(conversation), memberInfoMap = _internal.memberInfoMap; // 如果不存在缓存，且不是 role 的更新，则不通知
            if (!(!memberInfoMap && !role)) {
              _context4.next = 63;
              break;
            }
            return _context4.abrupt("return");
          case 63:
            _context4.next = 65;
            return conversation.getMemberInfo(pid);
          case 65:
            memberInfo = _context4.sent;
            internal(memberInfo).role = role;
            _payload12 = {
              member: pid,
              memberInfo: memberInfo,
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
            this.emit(MEMBER_INFO_UPDATED$1, _payload12, conversation);
            /**
             * 有成员的对话信息被更新
             * @event ConversationBase#MEMBER_INFO_UPDATED
             * @param {Object} payload
             * @param {String} payload.member 被更新对话信息的成员 id
             * @param {ConversationMumberInfo} payload.memberInfo 被更新的成员对话信息
             * @param {String} payload.updatedBy 该操作的发起者 id
             */
            conversation.emit(MEMBER_INFO_UPDATED$1, _payload12);
            return _context4.abrupt("return");
          case 71:
            attributes = decode(JSON.parse(attr.data));
            conversation._updateServerAttributes(attributes);
            _payload13 = {
              attributes: attributes,
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
            this.emit(CONVERSATION_INFO_UPDATED$1, _payload13, conversation);
            /**
             * 有对话信息被更新
             * @event ConversationBase#INFO_UPDATED
             * @param {Object} payload
             * @param {Object} payload.attributes 被更新的属性
             * @param {String} payload.updatedBy 该操作的发起者 id
             */
            conversation.emit(INFO_UPDATED$1, _payload13);
            return _context4.abrupt("return");
          case 77:
            this.emit(UNHANDLED_MESSAGE$1, message);
            throw new Error('Unrecognized conversation command');
          case 79:
          case "end":
            return _context4.stop();
        }
      }, _callee4, this);
    }));
    function _dispatchConvMessage(_x4) {
      return _dispatchConvMessage2.apply(this, arguments);
    }
    return _dispatchConvMessage;
  }();
  _proto._dispatchDirectMessage = function _dispatchDirectMessage(originalMessage) {
    var _this4 = this;
    var directMessage = originalMessage.directMessage,
      _originalMessage$dire = originalMessage.directMessage,
      id = _originalMessage$dire.id,
      cid = _originalMessage$dire.cid,
      fromPeerId = _originalMessage$dire.fromPeerId,
      timestamp = _originalMessage$dire.timestamp,
      _transient = _originalMessage$dire["transient"],
      patchTimestamp = _originalMessage$dire.patchTimestamp,
      mentionPids = _originalMessage$dire.mentionPids,
      mentionAll = _originalMessage$dire.mentionAll,
      binaryMsg = _originalMessage$dire.binaryMsg,
      msg = _originalMessage$dire.msg;
    var content = binaryMsg ? binaryMsg.toArrayBuffer() : msg;
    return Promise.all([this.getConversation(directMessage.cid), this._messageParser.parse(content)]).then(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
        conversation = _ref6[0],
        message = _ref6[1];
      // deleted conversation
      if (!conversation) return undefined;
      var messageProps = {
        id: id,
        cid: cid,
        timestamp: timestamp,
        updatedAt: patchTimestamp,
        from: fromPeerId,
        mentionList: mentionPids,
        mentionedAll: mentionAll
      };
      Object.assign(message, messageProps);
      message._updateMentioned(_this4.id);
      message._setStatus(MessageStatus.SENT);
      // filter outgoing message sent from another device
      if (message.from !== _this4.id) {
        if (!(_transient || conversation["transient"])) {
          _this4._sendAck(message);
        }
      }
      return _this4._dispatchParsedMessage(message, conversation);
    });
  };
  _proto._dispatchParsedMessage = function _dispatchParsedMessage(message, conversation) {
    var _this5 = this;
    // beforeMessageDispatch hook
    return applyDispatcher(this._plugins.beforeMessageDispatch, [message, conversation]).then(function (shouldDispatch) {
      if (shouldDispatch === false) return;
      conversation.lastMessage = message; // eslint-disable-line no-param-reassign
      conversation.lastMessageAt = message.timestamp; // eslint-disable-line no-param-reassign
      // filter outgoing message sent from another device
      if (message.from !== _this5.id) {
        conversation.unreadMessagesCount += 1; // eslint-disable-line no-param-reassign
        if (message.mentioned) conversation._setUnreadMessagesMentioned(true);
      }
      /**
       * 当前用户收到消息
       * @event IMClient#MESSAGE
       * @param {Message} message
       * @param {ConversationBase} conversation 收到消息的对话
       */
      _this5.emit(MESSAGE$2, message, conversation);
      /**
       * 当前对话收到消息
       * @event ConversationBase#MESSAGE
       * @param {Message} message
       */
      conversation.emit(MESSAGE$2, message);
    });
  };
  _proto._sendAck = function _sendAck(message) {
    this._debug('send ack for %O', message);
    var cid = message.cid;
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
  ;
  _proto.
  // jsdoc-ignore-end
  _doSendAck = function _doSendAck() {
    var _this6 = this;
    // if not connected, just skip everything
    if (!this._connection.is('connected')) return;
    this._debug('do send ack %O', this._ackMessageBuffer);
    Promise.all(Object.keys(this._ackMessageBuffer).map(function (cid) {
      var convAckMessages = _this6._ackMessageBuffer[cid];
      var timestamps = convAckMessages.map(function (message) {
        return message.timestamp;
      });
      var command = new GenericCommand({
        cmd: 'ack',
        ackMessage: new AckCommand({
          cid: cid,
          fromts: Math.min.apply(null, timestamps),
          tots: Math.max.apply(null, timestamps)
        })
      });
      delete _this6._ackMessageBuffer[cid];
      return _this6._send(command, false)["catch"](function (error) {
        _this6._debug('send ack failed: %O', error);
        _this6._ackMessageBuffer[cid] = convAckMessages;
      });
    }));
  };
  _proto._omitPeerId = function _omitPeerId(value) {
    internal(this).peerIdOmittable = value;
  };
  _proto._send = function _send(cmd) {
    var _this$_connection;
    var command = cmd;
    if (!internal(this).peerIdOmittable && this.id) {
      command.peerId = this.id;
    }
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    return (_this$_connection = this._connection).send.apply(_this$_connection, [command].concat(args));
  };
  _proto._open = /*#__PURE__*/function () {
    var _open2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(appId, tag, deviceId) {
      var isReconnect,
        _internal2,
        lastUnreadNotifTime,
        lastPatchTime,
        lastNotificationTime,
        command,
        signatureResult,
        sessionToken,
        resCommand,
        _resCommand,
        peerId,
        sessionMessage,
        _resCommand$sessionMe,
        token,
        tokenTTL,
        code,
        serverTs,
        serverTime,
        _args5 = arguments;
      return _regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            isReconnect = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : false;
            this._debug('open session');
            _internal2 = internal(this), lastUnreadNotifTime = _internal2.lastUnreadNotifTime, lastPatchTime = _internal2.lastPatchTime, lastNotificationTime = _internal2.lastNotificationTime;
            command = new GenericCommand({
              cmd: 'session',
              op: 'open',
              appId: appId,
              peerId: this.id,
              sessionMessage: new SessionCommand({
                ua: "js/".concat(version),
                r: isReconnect,
                lastUnreadNotifTime: lastUnreadNotifTime,
                lastPatchTime: lastPatchTime,
                configBitmap: configBitmap
              })
            });
            if (isReconnect) {
              _context5.next = 13;
              break;
            }
            Object.assign(command.sessionMessage, trim({
              tag: tag,
              deviceId: deviceId
            }));
            if (!this.options.signatureFactory) {
              _context5.next = 11;
              break;
            }
            _context5.next = 9;
            return runSignatureFactory(this.options.signatureFactory, [this._identity]);
          case 9:
            signatureResult = _context5.sent;
            Object.assign(command.sessionMessage, keyRemap({
              signature: 's',
              timestamp: 't',
              nonce: 'n'
            }, signatureResult));
          case 11:
            _context5.next = 17;
            break;
          case 13:
            _context5.next = 15;
            return this._sessionManager.getSessionToken({
              autoRefresh: false
            });
          case 15:
            sessionToken = _context5.sent;
            if (sessionToken && sessionToken !== Expirable.EXPIRED) {
              Object.assign(command.sessionMessage, {
                st: sessionToken
              });
            }
          case 17:
            _context5.prev = 17;
            _context5.next = 20;
            return this._send(command);
          case 20:
            resCommand = _context5.sent;
            _context5.next = 32;
            break;
          case 23:
            _context5.prev = 23;
            _context5.t0 = _context5["catch"](17);
            if (!(_context5.t0.code === ErrorCode.SESSION_TOKEN_EXPIRED)) {
              _context5.next = 31;
              break;
            }
            if (this._sessionManager) {
              _context5.next = 28;
              break;
            }
            throw new Error('Unexpected session expiration');
          case 28:
            debug$b('Session token expired, reopening');
            this._sessionManager.revoke();
            return _context5.abrupt("return", this._open(appId, tag, deviceId, isReconnect));
          case 31:
            throw _context5.t0;
          case 32:
            _resCommand = resCommand, peerId = _resCommand.peerId, sessionMessage = _resCommand.sessionMessage, _resCommand$sessionMe = _resCommand.sessionMessage, token = _resCommand$sessionMe.st, tokenTTL = _resCommand$sessionMe.stTtl, code = _resCommand$sessionMe.code, serverTs = _resCommand.serverTs;
            if (!code) {
              _context5.next = 35;
              break;
            }
            throw createError(sessionMessage);
          case 35:
            if (peerId) {
              this.id = peerId;
              if (!this._identity) this._identity = peerId;
              if (token) {
                this._sessionManager = this._sessionManager || this._createSessionManager();
                this._sessionManager.setSessionToken(token, tokenTTL);
              }
              serverTime = getTime(decodeDate(serverTs));
              if (serverTs) {
                internal(this).lastPatchTime = serverTime;
              }
              if (lastNotificationTime) {
                // Do not await for it as this is failable
                this._syncNotifications(lastNotificationTime)["catch"](function (error) {
                  return console.warn('Syncing notifications failed:', error);
                });
              } else {
                // Set timestamp to now for next reconnection
                internal(this).lastNotificationTime = serverTime;
              }
            } else {
              console.warn('Unexpected session opened without peerId.');
            }
            return _context5.abrupt("return", undefined);
          case 37:
          case "end":
            return _context5.stop();
        }
      }, _callee5, this, [[17, 23]]);
    }));
    function _open(_x5, _x6, _x7) {
      return _open2.apply(this, arguments);
    }
    return _open;
  }();
  _proto._syncNotifications = /*#__PURE__*/function () {
    var _syncNotifications2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(timestamp) {
      var _this7 = this;
      var _yield$this$_fetchNot, hasMore, notifications;
      return _regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return this._fetchNotifications(timestamp);
          case 2:
            _yield$this$_fetchNot = _context6.sent;
            hasMore = _yield$this$_fetchNot.hasMore;
            notifications = _yield$this$_fetchNot.notifications;
            notifications.forEach(function (notification) {
              var cmd = notification.cmd,
                op = notification.op,
                serverTs = notification.serverTs,
                notificationType = notification.notificationType,
                payload = _objectWithoutProperties(notification, _excluded$3);
              _this7._dispatchCommand(_defineProperty({
                cmd: CommandType[cmd],
                op: OpType[op],
                serverTs: serverTs,
                notificationType: notificationType
              }, "".concat(cmd, "Message"), payload));
            });
            if (!hasMore) {
              _context6.next = 8;
              break;
            }
            return _context6.abrupt("return", this._syncNotifications(internal(this).lastNotificationTime));
          case 8:
            return _context6.abrupt("return", undefined);
          case 9:
          case "end":
            return _context6.stop();
        }
      }, _callee6, this);
    }));
    function _syncNotifications(_x8) {
      return _syncNotifications2.apply(this, arguments);
    }
    return _syncNotifications;
  }();
  _proto._fetchNotifications = /*#__PURE__*/function () {
    var _fetchNotifications2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7(timestamp) {
      return _regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", this._requestWithSessionToken({
              method: 'GET',
              path: '/rtm/notifications',
              query: {
                start_ts: timestamp,
                notification_type: 'permanent'
              }
            }));
          case 1:
          case "end":
            return _context7.stop();
        }
      }, _callee7, this);
    }));
    function _fetchNotifications(_x9) {
      return _fetchNotifications2.apply(this, arguments);
    }
    return _fetchNotifications;
  }();
  _proto._createSessionManager = function _createSessionManager() {
    var _this8 = this;
    debug$b('create SessionManager');
    return new SessionManager({
      onBeforeGetSessionToken: this._connection.checkConnectionAvailability.bind(this._connection),
      refresh: function refresh(manager, expiredSessionToken) {
        return manager.setSessionTokenAsync(Promise.resolve(new GenericCommand({
          cmd: 'session',
          op: 'refresh',
          sessionMessage: new SessionCommand({
            ua: "js/".concat(version),
            st: expiredSessionToken
          })
        })).then( /*#__PURE__*/function () {
          var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8(command) {
            var signatureResult;
            return _regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  if (!_this8.options.signatureFactory) {
                    _context8.next = 5;
                    break;
                  }
                  _context8.next = 3;
                  return runSignatureFactory(_this8.options.signatureFactory, [_this8._identity]);
                case 3:
                  signatureResult = _context8.sent;
                  Object.assign(command.sessionMessage, keyRemap({
                    signature: 's',
                    timestamp: 't',
                    nonce: 'n'
                  }, signatureResult));
                case 5:
                  return _context8.abrupt("return", command);
                case 6:
                case "end":
                  return _context8.stop();
              }
            }, _callee8);
          }));
          return function (_x10) {
            return _ref7.apply(this, arguments);
          };
        }()).then(_this8._send.bind(_this8)).then(function (_ref8) {
          var _ref8$sessionMessage = _ref8.sessionMessage,
            token = _ref8$sessionMessage.st,
            ttl = _ref8$sessionMessage.stTtl;
          return [token, ttl];
        }));
      }
    });
  };
  _proto._requestWithSessionToken = /*#__PURE__*/function () {
    var _requestWithSessionToken2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9(_ref9) {
      var headers, query, params, sessionToken;
      return _regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            headers = _ref9.headers, query = _ref9.query, params = _objectWithoutProperties(_ref9, _excluded2$1);
            _context9.next = 3;
            return this._sessionManager.getSessionToken();
          case 3:
            sessionToken = _context9.sent;
            return _context9.abrupt("return", this._request(_objectSpread$8({
              headers: _objectSpread$8({
                'X-LC-IM-Session-Token': sessionToken
              }, headers),
              query: _objectSpread$8({
                client_id: this.id
              }, query)
            }, params)));
          case 5:
          case "end":
            return _context9.stop();
        }
      }, _callee9, this);
    }));
    function _requestWithSessionToken(_x11) {
      return _requestWithSessionToken2.apply(this, arguments);
    }
    return _requestWithSessionToken;
  }()
  /**
   * 关闭客户端
   * @return {Promise}
   */
  ;
  _proto.close =
  /*#__PURE__*/
  function () {
    var _close = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee10() {
      var _ee, command;
      return _regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            this._debug('close session');
            _ee = internal(this)._eventemitter;
            _ee.emit('beforeclose');
            if (!this._connection.is('connected')) {
              _context10.next = 7;
              break;
            }
            command = new GenericCommand({
              cmd: 'session',
              op: 'close'
            });
            _context10.next = 7;
            return this._send(command);
          case 7:
            _ee.emit('close');
            this.emit(CLOSE$1, {
              code: 0
            });
          case 9:
          case "end":
            return _context10.stop();
        }
      }, _callee10, this);
    }));
    function close() {
      return _close.apply(this, arguments);
    }
    return close;
  }()
  /**
   * 获取 client 列表中在线的 client，每次查询最多 20 个 clientId，超出部分会被忽略
   * @param  {String[]} clientIds 要查询的 client ids
   * @return {Primse.<String[]>} 在线的 client ids
   */
  ;
  _proto.ping =
  /*#__PURE__*/
  function () {
    var _ping = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee11(clientIds) {
      var command, resCommand;
      return _regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            this._debug('ping');
            if (clientIds instanceof Array) {
              _context11.next = 3;
              break;
            }
            throw new TypeError("clientIds ".concat(clientIds, " is not an Array"));
          case 3:
            if (clientIds.length) {
              _context11.next = 5;
              break;
            }
            return _context11.abrupt("return", Promise.resolve([]));
          case 5:
            command = new GenericCommand({
              cmd: 'session',
              op: 'query',
              sessionMessage: new SessionCommand({
                sessionPeerIds: clientIds
              })
            });
            _context11.next = 8;
            return this._send(command);
          case 8:
            resCommand = _context11.sent;
            return _context11.abrupt("return", resCommand.sessionMessage.onlineSessionPeerIds);
          case 10:
          case "end":
            return _context11.stop();
        }
      }, _callee11, this);
    }));
    function ping(_x12) {
      return _ping.apply(this, arguments);
    }
    return ping;
  }()
  /**
   * 获取某个特定的对话
   * @param  {String} id 对话 id，对应 _Conversation 表中的 objectId
   * @param  {Boolean} [noCache=false] 强制不从缓存中获取
   * @return {Promise.<ConversationBase>} 如果 id 对应的对话不存在则返回 null
   */
  ;
  _proto.getConversation =
  /*#__PURE__*/
  function () {
    var _getConversation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee12(id) {
      var noCache,
        cachedConversation,
        _args12 = arguments;
      return _regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            noCache = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : false;
            if (!(typeof id !== 'string')) {
              _context12.next = 3;
              break;
            }
            throw new TypeError("".concat(id, " is not a String"));
          case 3:
            if (noCache) {
              _context12.next = 7;
              break;
            }
            cachedConversation = this._conversationCache.get(id);
            if (!cachedConversation) {
              _context12.next = 7;
              break;
            }
            return _context12.abrupt("return", cachedConversation);
          case 7:
            if (!isTemporaryConversatrionId(id)) {
              _context12.next = 14;
              break;
            }
            _context12.next = 10;
            return this._getTemporaryConversations([id]);
          case 10:
            _context12.t0 = _context12.sent[0];
            if (_context12.t0) {
              _context12.next = 13;
              break;
            }
            _context12.t0 = null;
          case 13:
            return _context12.abrupt("return", _context12.t0);
          case 14:
            return _context12.abrupt("return", this.getQuery().equalTo('objectId', id).find().then(function (conversations) {
              return conversations[0] || null;
            }));
          case 15:
          case "end":
            return _context12.stop();
        }
      }, _callee12, this);
    }));
    function getConversation(_x13) {
      return _getConversation.apply(this, arguments);
    }
    return getConversation;
  }()
  /**
   * 通过 id 批量获取某个特定的对话
   * @since 3.4.0
   * @param  {String[]} ids 对话 id 列表，对应 _Conversation 表中的 objectId
   * @param  {Boolean} [noCache=false] 强制不从缓存中获取
   * @return {Promise.<ConversationBase[]>} 如果 id 对应的对话不存在则返回 null
   */
  ;
  _proto.getConversations =
  /*#__PURE__*/
  function () {
    var _getConversations = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee13(ids) {
      var _this9 = this;
      var noCache,
        remoteConversationIds,
        remoteTemporaryConversationIds,
        query,
        remoteTemporaryConversationsPromise,
        _args13 = arguments;
      return _regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            noCache = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : false;
            remoteConversationIds = noCache ? ids : ids.filter(function (id) {
              return _this9._conversationCache.get(id) === null;
            });
            if (!remoteConversationIds.length) {
              _context13.next = 9;
              break;
            }
            remoteTemporaryConversationIds = remove(remoteConversationIds, isTemporaryConversatrionId);
            query = [];
            if (remoteConversationIds.length) {
              query.push(this.getQuery().containedIn('objectId', remoteConversationIds).limit(999).find());
            }
            if (remoteTemporaryConversationIds.length) {
              remoteTemporaryConversationsPromise = remoteTemporaryConversationIds.map(this._getTemporaryConversations.bind(this));
              query.push.apply(query, _toConsumableArray(remoteTemporaryConversationsPromise));
            }
            _context13.next = 9;
            return Promise.all(query);
          case 9:
            return _context13.abrupt("return", ids.map(function (id) {
              return _this9._conversationCache.get(id);
            }));
          case 10:
          case "end":
            return _context13.stop();
        }
      }, _callee13, this);
    }));
    function getConversations(_x14) {
      return _getConversations.apply(this, arguments);
    }
    return getConversations;
  }();
  _proto._getTemporaryConversations = /*#__PURE__*/function () {
    var _getTemporaryConversations2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee14(ids) {
      var command, resCommand;
      return _regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            command = new GenericCommand({
              cmd: 'conv',
              op: 'query',
              convMessage: new ConvCommand({
                tempConvIds: ids
              })
            });
            _context14.next = 3;
            return this._send(command);
          case 3:
            resCommand = _context14.sent;
            return _context14.abrupt("return", this._handleQueryResults(resCommand));
          case 5:
          case "end":
            return _context14.stop();
        }
      }, _callee14, this);
    }));
    function _getTemporaryConversations(_x15) {
      return _getTemporaryConversations2.apply(this, arguments);
    }
    return _getTemporaryConversations;
  }()
  /**
   * 构造一个 ConversationQuery 来查询对话
   * @return {ConversationQuery.<PersistentConversation>}
   */
  ;
  _proto.getQuery = function getQuery() {
    return new ConversationQuery(this);
  }

  /**
   * 构造一个 ConversationQuery 来查询聊天室
   * @return {ConversationQuery.<ChatRoom>}
   */;
  _proto.getChatRoomQuery = function getChatRoomQuery() {
    return this.getQuery().equalTo('tr', true);
  }

  /**
   * 构造一个 ConversationQuery 来查询服务号
   * @return {ConversationQuery.<ServiceConversation>}
   */;
  _proto.getServiceConversationQuery = function getServiceConversationQuery() {
    return this.getQuery().equalTo('sys', true);
  };
  _proto._executeQuery = /*#__PURE__*/function () {
    var _executeQuery2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee15(query) {
      var queryJSON, command, resCommand;
      return _regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            queryJSON = query.toJSON();
            queryJSON.where = new JsonObjectMessage({
              data: JSON.stringify(encode(queryJSON.where))
            });
            command = new GenericCommand({
              cmd: 'conv',
              op: 'query',
              convMessage: new ConvCommand(queryJSON)
            });
            _context15.next = 5;
            return this._send(command);
          case 5:
            resCommand = _context15.sent;
            return _context15.abrupt("return", this._handleQueryResults(resCommand));
          case 7:
          case "end":
            return _context15.stop();
        }
      }, _callee15, this);
    }));
    function _executeQuery(_x16) {
      return _executeQuery2.apply(this, arguments);
    }
    return _executeQuery;
  }();
  _proto._handleQueryResults = /*#__PURE__*/function () {
    var _handleQueryResults2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee16(resCommand) {
      var conversations, commandString;
      return _regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            conversations = decode(JSON.parse(resCommand.convMessage.results.data));
            _context16.next = 8;
            break;
          case 4:
            _context16.prev = 4;
            _context16.t0 = _context16["catch"](0);
            commandString = JSON.stringify(trim(resCommand));
            throw new Error("Parse query result failed: ".concat(_context16.t0.message, ". Command: ").concat(commandString));
          case 8:
            _context16.next = 10;
            return Promise.all(conversations.map(this._parseConversationFromRawData.bind(this)));
          case 10:
            conversations = _context16.sent;
            return _context16.abrupt("return", conversations.map(this._upsertConversationToCache.bind(this)));
          case 12:
          case "end":
            return _context16.stop();
        }
      }, _callee16, this, [[0, 4]]);
    }));
    function _handleQueryResults(_x17) {
      return _handleQueryResults2.apply(this, arguments);
    }
    return _handleQueryResults;
  }();
  _proto._upsertConversationToCache = function _upsertConversationToCache(fetchedConversation) {
    var conversation = this._conversationCache.get(fetchedConversation.id);
    if (!conversation) {
      conversation = fetchedConversation;
      this._debug('no match, set cache');
      this._conversationCache.set(fetchedConversation.id, fetchedConversation);
    } else {
      this._debug('update cached conversation');
      ['creator', 'createdAt', 'updatedAt', 'lastMessageAt', 'lastMessage', 'mutedMembers', 'members', '_attributes', 'transient', 'muted'].forEach(function (key) {
        var value = fetchedConversation[key];
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
   */;
  _proto.parseMessage =
  /*#__PURE__*/
  function () {
    var _parseMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee17(_ref10) {
      var data, _ref10$bin, bin, properties, content, message;
      return _regeneratorRuntime.wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            data = _ref10.data, _ref10$bin = _ref10.bin, bin = _ref10$bin === void 0 ? false : _ref10$bin, properties = _objectWithoutProperties(_ref10, _excluded3);
            content = bin ? base64Arraybuffer.decode(data) : data;
            _context17.next = 4;
            return this._messageParser.parse(content);
          case 4:
            message = _context17.sent;
            Object.assign(message, properties);
            message._updateMentioned(this.id);
            return _context17.abrupt("return", message);
          case 8:
          case "end":
            return _context17.stop();
        }
      }, _callee17, this);
    }));
    function parseMessage(_x18) {
      return _parseMessage.apply(this, arguments);
    }
    return parseMessage;
  }()
  /**
   * 反序列化对话，与 {@link Conversation#toFullJSON} 相对。
   * @param {Object}
   * @return {ConversationBase} 解析后的对话
   * @since 4.0.0
   */
  ;
  _proto.parseConversation =
  /*#__PURE__*/
  function () {
    var _parseConversation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee18(_ref11) {
      var id, lastMessageAt, lastMessage, lastDeliveredAt, lastReadAt, unreadMessagesCount, members, mentioned, properties, conversationData, _transient2, system, expiredAt;
      return _regeneratorRuntime.wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            id = _ref11.id, lastMessageAt = _ref11.lastMessageAt, lastMessage = _ref11.lastMessage, lastDeliveredAt = _ref11.lastDeliveredAt, lastReadAt = _ref11.lastReadAt, unreadMessagesCount = _ref11.unreadMessagesCount, members = _ref11.members, mentioned = _ref11.mentioned, properties = _objectWithoutProperties(_ref11, _excluded4);
            conversationData = {
              id: id,
              lastMessageAt: lastMessageAt,
              lastMessage: lastMessage,
              lastDeliveredAt: lastDeliveredAt,
              lastReadAt: lastReadAt,
              unreadMessagesCount: unreadMessagesCount,
              members: members,
              mentioned: mentioned
            };
            if (!lastMessage) {
              _context18.next = 7;
              break;
            }
            _context18.next = 5;
            return this.parseMessage(lastMessage);
          case 5:
            conversationData.lastMessage = _context18.sent;
            conversationData.lastMessage._setStatus(MessageStatus.SENT);
          case 7:
            _transient2 = properties["transient"], system = properties.system, expiredAt = properties.expiredAt;
            if (!_transient2) {
              _context18.next = 10;
              break;
            }
            return _context18.abrupt("return", new ChatRoom(conversationData, properties, this));
          case 10:
            if (!system) {
              _context18.next = 12;
              break;
            }
            return _context18.abrupt("return", new ServiceConversation(conversationData, properties, this));
          case 12:
            if (!(expiredAt || isTemporaryConversatrionId(id))) {
              _context18.next = 14;
              break;
            }
            return _context18.abrupt("return", new TemporaryConversation(conversationData, {
              expiredAt: expiredAt
            }, this));
          case 14:
            return _context18.abrupt("return", new Conversation(conversationData, properties, this));
          case 15:
          case "end":
            return _context18.stop();
        }
      }, _callee18, this);
    }));
    function parseConversation(_x19) {
      return _parseConversation.apply(this, arguments);
    }
    return parseConversation;
  }();
  _proto._parseConversationFromRawData = /*#__PURE__*/function () {
    var _parseConversationFromRawData2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee19(rawData) {
      var data, ttl;
      return _regeneratorRuntime.wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            data = keyRemap({
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
            ttl = data.ttl;
            if (ttl) data.expiredAt = Date.now() + ttl * 1000;
            return _context19.abrupt("return", this.parseConversation(data));
          case 5:
          case "end":
            return _context19.stop();
        }
      }, _callee19, this);
    }));
    function _parseConversationFromRawData(_x20) {
      return _parseConversationFromRawData2.apply(this, arguments);
    }
    return _parseConversationFromRawData;
  }()
  /**
   * 创建一个对话
   * @param {Object} options 除了下列字段外的其他字段将被视为对话的自定义属性
   * @param {String[]} options.members 对话的初始成员列表，默认包含当前 client
   * @param {String} [options.name] 对话的名字
   * @param {Boolean} [options.unique=true] 唯一对话，当其为 true 时，如果当前已经有相同成员的对话存在则返回该对话，否则会创建新的对话
   * @return {Promise.<Conversation>}
   */
  ;
  _proto.createConversation =
  /*#__PURE__*/
  function () {
    var _createConversation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee20() {
      var _ref12,
        m,
        name,
        _transient3,
        _ref12$unique,
        unique,
        tempConv,
        tempConvTTL,
        properties,
        members,
        attr,
        startCommandJson,
        command,
        params,
        signatureResult,
        _yield$this$_send,
        _yield$this$_send$con,
        cid,
        cdate,
        ttl,
        data,
        conversation,
        _args20 = arguments;
      return _regeneratorRuntime.wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            _ref12 = _args20.length > 0 && _args20[0] !== undefined ? _args20[0] : {}, m = _ref12.members, name = _ref12.name, _transient3 = _ref12["transient"], _ref12$unique = _ref12.unique, unique = _ref12$unique === void 0 ? true : _ref12$unique, tempConv = _ref12._tempConv, tempConvTTL = _ref12._tempConvTTL, properties = _objectWithoutProperties(_ref12, _excluded5);
            if (_transient3 || Array.isArray(m)) {
              _context20.next = 3;
              break;
            }
            throw new TypeError("conversation members ".concat(m, " is not an array"));
          case 3:
            members = new Set(m);
            members.add(this.id);
            members = Array.from(members).sort();
            attr = properties || {};
            if (!name) {
              _context20.next = 11;
              break;
            }
            if (!(typeof name !== 'string')) {
              _context20.next = 10;
              break;
            }
            throw new TypeError("conversation name ".concat(name, " is not a string"));
          case 10:
            attr.name = name;
          case 11:
            attr = new JsonObjectMessage({
              data: JSON.stringify(encode(attr))
            });
            startCommandJson = {
              m: members,
              attr: attr,
              "transient": _transient3,
              unique: unique,
              tempConv: tempConv,
              tempConvTTL: tempConvTTL
            };
            command = new GenericCommand({
              cmd: 'conv',
              op: 'start',
              convMessage: new ConvCommand(startCommandJson)
            });
            if (!this.options.conversationSignatureFactory) {
              _context20.next = 20;
              break;
            }
            params = [null, this._identity, members, 'create'];
            _context20.next = 18;
            return runSignatureFactory(this.options.conversationSignatureFactory, params);
          case 18:
            signatureResult = _context20.sent;
            Object.assign(command.convMessage, keyRemap({
              signature: 's',
              timestamp: 't',
              nonce: 'n'
            }, signatureResult));
          case 20:
            _context20.next = 22;
            return this._send(command);
          case 22:
            _yield$this$_send = _context20.sent;
            _yield$this$_send$con = _yield$this$_send.convMessage;
            cid = _yield$this$_send$con.cid;
            cdate = _yield$this$_send$con.cdate;
            ttl = _yield$this$_send$con.tempConvTTL;
            data = _objectSpread$8({
              name: name,
              "transient": _transient3,
              unique: unique,
              id: cid,
              createdAt: cdate,
              updatedAt: cdate,
              lastMessageAt: null,
              creator: this.id,
              members: _transient3 ? [] : members
            }, properties);
            if (ttl) data.expiredAt = Date.now() + ttl * 1000;
            _context20.next = 31;
            return this.parseConversation(data);
          case 31:
            conversation = _context20.sent;
            return _context20.abrupt("return", this._upsertConversationToCache(conversation));
          case 33:
          case "end":
            return _context20.stop();
        }
      }, _callee20, this);
    }));
    function createConversation() {
      return _createConversation.apply(this, arguments);
    }
    return createConversation;
  }()
  /**
   * 创建一个聊天室
   * @since 4.0.0
   * @param {Object} options 除了下列字段外的其他字段将被视为对话的自定义属性
   * @param {String} [options.name] 对话的名字
   * @return {Promise.<ChatRoom>}
   */
  ;
  _proto.createChatRoom =
  /*#__PURE__*/
  function () {
    var _createChatRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee21(param) {
      return _regeneratorRuntime.wrap(function _callee21$(_context21) {
        while (1) switch (_context21.prev = _context21.next) {
          case 0:
            return _context21.abrupt("return", this.createConversation(_objectSpread$8(_objectSpread$8({}, param), {}, {
              "transient": true,
              members: null,
              unique: false,
              _tempConv: false
            })));
          case 1:
          case "end":
            return _context21.stop();
        }
      }, _callee21, this);
    }));
    function createChatRoom(_x21) {
      return _createChatRoom.apply(this, arguments);
    }
    return createChatRoom;
  }()
  /**
   * 创建一个临时对话
   * @since 4.0.0
   * @param {Object} options
   * @param {String[]} options.members 对话的初始成员列表，默认包含当前 client
   * @param {String} [options.ttl] 对话存在时间，单位为秒，最大值与默认值均为 86400（一天），过期后该对话不再可用。
   * @return {Promise.<TemporaryConversation>}
   */
  ;
  _proto.createTemporaryConversation =
  /*#__PURE__*/
  function () {
    var _createTemporaryConversation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee22(_ref13) {
      var _tempConvTTL, param;
      return _regeneratorRuntime.wrap(function _callee22$(_context22) {
        while (1) switch (_context22.prev = _context22.next) {
          case 0:
            _tempConvTTL = _ref13.ttl, param = _objectWithoutProperties(_ref13, _excluded6);
            return _context22.abrupt("return", this.createConversation(_objectSpread$8(_objectSpread$8({}, param), {}, {
              _tempConv: true,
              _tempConvTTL: _tempConvTTL
            })));
          case 2:
          case "end":
            return _context22.stop();
        }
      }, _callee22, this);
    }));
    function createTemporaryConversation(_x22) {
      return _createTemporaryConversation.apply(this, arguments);
    }
    return createTemporaryConversation;
  }() // jsdoc-ignore-start
  ;
  _proto.
  // jsdoc-ignore-end
  _doSendRead = function _doSendRead() {
    var _this10 = this;
    // if not connected, just skip everything
    if (!this._connection.is('connected')) return;
    var buffer = internal(this).readConversationsBuffer;
    var conversations = Array.from(buffer);
    if (!conversations.length) return;
    var ids = conversations.map(function (conversation) {
      if (!(conversation instanceof ConversationBase)) {
        throw new TypeError("".concat(conversation, " is not a Conversation"));
      }
      return conversation.id;
    });
    this._debug("mark [".concat(ids, "] as read"));
    buffer.clear();
    this._sendReadCommand(conversations)["catch"](function (error) {
      _this10._debug('send read failed: %O', error);
      conversations.forEach(buffer.add.bind(buffer));
    });
  };
  _proto._sendReadCommand = function _sendReadCommand(conversations) {
    var _this11 = this;
    return this._send(new GenericCommand({
      cmd: 'read',
      readMessage: new ReadCommand({
        convs: conversations.map(function (conversation) {
          return new ReadTuple({
            cid: conversation.id,
            mid: conversation.lastMessage && conversation.lastMessage.from !== _this11.id ? conversation.lastMessage.id : undefined,
            timestamp: (conversation.lastMessageAt || new Date()).getTime()
          });
        })
      })
    }), false);
  };
  return IMClient;
}(EventEmitter), (_applyDecoratedDescriptor(_class$3.prototype, "_doSendAck", [_dec$2], Object.getOwnPropertyDescriptor(_class$3.prototype, "_doSendAck"), _class$3.prototype), _applyDecoratedDescriptor(_class$3.prototype, "_doSendRead", [_dec2], Object.getOwnPropertyDescriptor(_class$3.prototype, "_doSendRead"), _class$3.prototype)), _class$3));
/**
 * 修改、撤回消息的原因
 * @typedef PatchReason
 * @type {Object}
 * @property {number} code 负数为内置 code，正数为开发者在 hook 中自定义的 code。比如因为敏感词过滤被修改的 code 为 -4408。
 * @property {string} [detail] 具体的原因说明。
 */

var RECONNECT_ERROR = 'reconnecterror';

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
function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$9(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// jsdoc-ignore-start
var BinaryMessage = IE10Compatible(_class$4 = /*#__PURE__*/function (_Message) {
  _inheritsLoose(BinaryMessage, _Message);
  /**
   * 二进制消息
   * @extends Message
   * @param {ArrayBuffer} buffer
   * @since 4.0.0
   */
  function BinaryMessage(buffer) {
    if (!(buffer instanceof ArrayBuffer)) {
      throw new TypeError("".concat(buffer, " is not an ArrayBuffer"));
    }
    return _Message.call(this, buffer) || this;
  }

  /**
   * @type ArrayBuffer
   */
  BinaryMessage.validate = function validate(target) {
    return target instanceof ArrayBuffer;
  };
  var _proto = BinaryMessage.prototype;
  _proto.toJSON = function toJSON() {
    return _objectSpread$9(_objectSpread$9({}, _Message.prototype._toJSON.call(this)), {}, {
      data: base64Arraybuffer.encode(this.content)
    });
  };
  _proto.toFullJSON = function toFullJSON() {
    return _objectSpread$9(_objectSpread$9({}, _Message.prototype.toFullJSON.call(this)), {}, {
      bin: true,
      data: base64Arraybuffer.encode(this.content)
    });
  };
  _createClass(BinaryMessage, [{
    key: "buffer",
    get: function get() {
      return this.content;
    },
    set: function set(buffer) {
      this.content = buffer;
    }
  }]);
  return BinaryMessage;
}(Message)) || _class$4;

var _dec$3, _class$5;

// jsdoc-ignore-start
var TextMessage = (_dec$3 = messageType(-1), _dec$3(_class$5 = IE10Compatible(_class$5 = /*#__PURE__*/function (_TypedMessage) {
  _inheritsLoose(TextMessage, _TypedMessage);
  /**
   * 文类类型消息
   * @extends TypedMessage
   * @param  {String} [text='']
   * @throws {TypeError} text 不是 String 类型
   */
  function TextMessage() {
    var _this;
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    if (typeof text !== 'string') {
      throw new TypeError("".concat(text, " is not a string"));
    }
    _this = _TypedMessage.call(this) || this;
    _this.setText(text);
    return _this;
  }
  return TextMessage;
}(TypedMessage)) || _class$5) || _class$5);
/**
 * @name TYPE
 * @memberof TextMessage
 * @type Number
 * @static
 * @const
 */

var _class$6;
function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$a(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var debug$c = d('LC:MessageParser');
var tryParseJson = function tryParseJson(target, key, descriptor) {
  var fn = descriptor.value;
  // eslint-disable-next-line no-param-reassign
  descriptor.value = function wrapper(param) {
    var content;
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
var applyPlugins = function applyPlugins(target, key, descriptor) {
  var fn = descriptor.value;
  // eslint-disable-next-line no-param-reassign
  descriptor.value = function wrapper(json) {
    var _this = this;
    return Promise.resolve(json).then(applyMiddlewares(this._plugins.beforeMessageParse)).then(function (decoratedJson) {
      return fn.call(_this, decoratedJson);
    }).then(applyMiddlewares(this._plugins.afterMessageParse));
  };
};
var MessageParser = (_class$6 = /*#__PURE__*/function () {
  /**
   * 消息解析器
   * @param {Object} plugins 插件，插件的 messageClasses 会自动被注册，在解析时 beforeMessageParse 与 afterMessageParse Middleware 会被应用。
   */
  function MessageParser() {
    var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
  var _proto = MessageParser.prototype;
  _proto.register = function register(messageClasses) {
    var _this2 = this;
    ensureArray(messageClasses).map(function (klass) {
      return _this2._register(klass);
    });
  };
  _proto._register = function _register(messageClass) {
    if (messageClass && messageClass.parse && messageClass.prototype && messageClass.prototype.getPayload) {
      this._messageClasses.unshift(messageClass);
    } else {
      throw new TypeError('Invalid messageClass');
    }
  }

  // jsdoc-ignore-start
  ;
  _proto.
  // jsdoc-ignore-end
  /**
   * 解析消息内容
   * @param {Object | string | any} target 消息内容，如果是字符串会尝试 parse 为 JSON。
   * @return {AVMessage} 解析后的消息
   * @throws {Error} 如果不匹配任何注册的消息则抛出异常
   */
  parse = function parse(content) {
    debug$c('parsing message: %O', content);
    // eslint-disable-next-line
    var _iterator = _createForOfIteratorHelper(this._messageClasses),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var Klass = _step.value;
        var contentCopy = isPlainObject(content) ? _objectSpread$a({}, content) : content;
        var valid = void 0;
        var result = void 0;
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
              error: error,
              Klass: Klass,
              content: contentCopy
            });
          }
          if (result !== undefined) {
            debug$c('parse result: %O', result);
            return result;
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    throw new Error('No Message Class matched');
  };
  return MessageParser;
}(), (_applyDecoratedDescriptor(_class$6.prototype, "parse", [tryParseJson, applyPlugins], Object.getOwnPropertyDescriptor(_class$6.prototype, "parse"), _class$6.prototype)), _class$6);

var _excluded$4 = ["tag", "isReconnect"];
function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$b(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var debug$d = d('LC:IMPlugin');

/**
 * 消息优先级枚举
 * @enum {Number}
 * @since 3.3.0
 */
var MessagePriority = {
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
var defineConversationProperty = function defineConversationProperty(prop) {
  var descriptor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    get: function get() {
      return this.get(prop);
    },
    set: function set(value) {
      this.set(prop, value);
    }
  };
  Object.defineProperty(Conversation.prototype, prop, descriptor);
};
var onRealtimeCreate = function onRealtimeCreate(realtime) {
  /* eslint-disable no-param-reassign */
  var deviceId = uuid();
  realtime._IMClients = {};
  realtime._IMClientsCreationCount = 0;
  var messageParser = new MessageParser(realtime._plugins);
  realtime._messageParser = messageParser;
  var signAVUser = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(user) {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", realtime._request({
              method: 'POST',
              path: '/rtm/sign',
              data: {
                session_token: user.getSessionToken()
              }
            }));
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function signAVUser(_x) {
      return _ref.apply(this, arguments);
    };
  }();

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
  var register = messageParser.register.bind(messageParser);
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
  var createIMClient = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(identity) {
      var _realtime$_open$then;
      var _ref3,
        tag,
        isReconnect,
        clientOptions,
        lagecyTag,
        id,
        buildinOptions,
        sessionToken,
        _tag,
        promise,
        _args2 = arguments;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _ref3 = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {}, tag = _ref3.tag, isReconnect = _ref3.isReconnect, clientOptions = _objectWithoutProperties(_ref3, _excluded$4);
            lagecyTag = _args2.length > 2 ? _args2[2] : undefined;
            buildinOptions = {};
            if (!identity) {
              _context2.next = 19;
              break;
            }
            if (!(typeof identity === 'string')) {
              _context2.next = 8;
              break;
            }
            id = identity;
            _context2.next = 17;
            break;
          case 8:
            if (!(identity.id && identity.getSessionToken)) {
              _context2.next = 16;
              break;
            }
            id = identity.id;
            sessionToken = identity.getSessionToken();
            if (sessionToken) {
              _context2.next = 13;
              break;
            }
            throw new Error('User must be authenticated');
          case 13:
            buildinOptions.signatureFactory = signAVUser;
            _context2.next = 17;
            break;
          case 16:
            throw new TypeError('Identity must be a String or an AV.User');
          case 17:
            if (!(realtime._IMClients[id] !== undefined)) {
              _context2.next = 19;
              break;
            }
            return _context2.abrupt("return", realtime._IMClients[id]);
          case 19:
            if (lagecyTag) {
              console.warn('DEPRECATION createIMClient tag param: Use options.tag instead.');
            }
            _tag = tag || lagecyTag;
            promise = (_realtime$_open$then = realtime._open().then(function (connection) {
              var client = new IMClient(id, _objectSpread$b(_objectSpread$b({}, buildinOptions), clientOptions), {
                _connection: connection,
                _request: realtime._request.bind(realtime),
                _messageParser: messageParser,
                _plugins: realtime._plugins,
                _identity: identity
              });
              connection.on(RECONNECT, function () {
                return client._open(realtime._options.appId, _tag, deviceId, true)
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
                 */.then(function () {
                  return client.emit(RECONNECT);
                }, function (error) {
                  return client.emit(RECONNECT_ERROR, error);
                });
              });
              internal(client)._eventemitter.on('beforeclose', function () {
                delete realtime._IMClients[client.id];
                if (realtime._firstIMClient === client) {
                  delete realtime._firstIMClient;
                }
              }, realtime);
              internal(client)._eventemitter.on('close', function () {
                realtime._deregister(client);
              }, realtime);
              return client._open(realtime._options.appId, _tag, deviceId, isReconnect).then(function () {
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
              })["catch"](function (error) {
                delete realtime._IMClients[client.id];
                throw error;
              });
            })).then.apply(_realtime$_open$then, _toConsumableArray(finalize(function () {
              realtime._deregisterPending(promise);
            })))["catch"](function (error) {
              delete realtime._IMClients[id];
              throw error;
            });
            if (identity) {
              realtime._IMClients[id] = promise;
            }
            realtime._registerPending(promise);
            return _context2.abrupt("return", promise);
          case 25:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function createIMClient(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  Object.assign(realtime, {
    register: register,
    createIMClient: createIMClient
  });
  /* eslint-enable no-param-reassign */
};

var beforeCommandDispatch = function beforeCommandDispatch(command, realtime) {
  var isIMCommand = command.service === null || command.service === 2;
  if (!isIMCommand) return true;
  var targetClient = command.peerId ? realtime._IMClients[command.peerId] : realtime._firstIMClient;
  if (targetClient) {
    Promise.resolve(targetClient).then(function (client) {
      return client._dispatchCommand(command);
    })["catch"](debug$d);
  } else {
    debug$d('[WARN] Unexpected message received without any live client match: %O', trim(command));
  }
  return false;
};
var IMPlugin = {
  name: 'leancloud-realtime-plugin-im',
  onRealtimeCreate: onRealtimeCreate,
  beforeCommandDispatch: beforeCommandDispatch,
  messageClasses: [Message, BinaryMessage, RecalledMessage, TextMessage]
};

function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$c(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$c(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
Realtime.defineConversationProperty = defineConversationProperty;
Realtime.__preRegisteredPlugins = [IMPlugin];
var Event = _objectSpread$c(_objectSpread$c({}, CoreEvent), IMEvent);

/** core + plugins + platform adapters */
setAdapters({
  WebSocket: platformAdaptersNode.WebSocket,
  request: platformAdaptersNode.request
});

exports.EventEmitter = EventEmitter;
exports.BinaryMessage = BinaryMessage;
exports.ChatRoom = ChatRoom;
exports.Conversation = Conversation;
exports.ConversationMemberRole = ConversationMemberRole;
exports.ConversationQuery = ConversationQuery;
exports.ErrorCode = ErrorCode;
exports.Event = Event;
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
//# sourceMappingURL=im-node.js.map
