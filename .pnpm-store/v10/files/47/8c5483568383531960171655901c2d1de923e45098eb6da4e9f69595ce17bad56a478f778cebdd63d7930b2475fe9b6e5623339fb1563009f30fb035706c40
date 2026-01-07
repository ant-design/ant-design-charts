'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var protobufLight = _interopDefault(require('protobufjs/dist/protobuf-light'));
var EventEmitter = _interopDefault(require('eventemitter3'));
var _asyncToGenerator = _interopDefault(require('@babel/runtime/helpers/asyncToGenerator'));
var _toConsumableArray = _interopDefault(require('@babel/runtime/helpers/toConsumableArray'));
var _defineProperty = _interopDefault(require('@babel/runtime/helpers/defineProperty'));
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
var isIE10 = global$1.navigator && global$1.navigator.userAgent && global$1.navigator.userAgent.indexOf('MSIE 10.') !== -1;
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
var isWeapp =
// eslint-disable-next-line no-undef
(typeof wx === "undefined" ? "undefined" : _typeof(wx)) === 'object' && typeof wx.connectSocket === 'function';
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

exports.EventEmitter = EventEmitter;
exports.Promise = polyfilledPromise;
exports.Protocals = message;
exports.Protocols = message;
exports.Realtime = Realtime;
exports.debug = debug$2;
exports.getAdapter = getAdapter;
exports.setAdapters = setAdapters;
//# sourceMappingURL=core.js.map
