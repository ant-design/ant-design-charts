'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var platformAdaptersNode = require('@leancloud/platform-adapters-node');
var protobufLight = _interopDefault(require('protobufjs/dist/protobuf-light'));
var EventEmitter = _interopDefault(require('eventemitter3'));
var d = _interopDefault(require('debug'));
var shuffle = _interopDefault(require('lodash/shuffle'));
var values = _interopDefault(require('lodash/values'));
var StateMachine = _interopDefault(require('javascript-state-machine'));
var isPlainObject = _interopDefault(require('lodash/isPlainObject'));
var promiseTimeout = require('promise-timeout');
var uuid = _interopDefault(require('uuid/v4'));
var base64Arraybuffer = require('base64-arraybuffer');
var remove = _interopDefault(require('lodash/remove'));
var isEmpty = _interopDefault(require('lodash/isEmpty'));
var cloneDeep = _interopDefault(require('lodash/cloneDeep'));
var find = _interopDefault(require('lodash/find'));
var get = _interopDefault(require('lodash/get'));

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

/* eslint-disable */
var global$1 = typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : {};

const EXPIRED = Symbol('expired');
const debug = d('LC:Expirable');
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

const debug$1 = d('LC:Cache');
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
  enable: (namespaces = 'LC*') => d.enable(namespaces),
  disable: d.disable
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
  if (isPlainObject(value)) {
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
  if (isPlainObject(value)) {
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
  if (!isPlainObject(obj)) return obj;
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
const debug$3 = d('LC:WebSocketPlus');
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
let WebSocketPlus = (_class = class WebSocketPlus extends EventEmitter {
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

const debug$4 = d('LC:Connection');
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
        const duplicatedCommand = values(this._commands).find(({
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

const debug$5 = d('LC:request');
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
      const v = isPlainObject(value) ? JSON.stringify(value) : value;
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
  return time ? promiseTimeout.timeout(promise, time) : promise;
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
const debug$6 = d('LC:Realtime');
const routerCache = new Cache('push-router');
const initializedApp = {};
class Realtime extends EventEmitter {
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
    if (options.RTMServers) return shuffle(ensureArray(options.RTMServers));
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
const debug$7 = d('LC:Conversation');
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
class ConversationBase extends EventEmitter {
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
      values(IMEvent).forEach(event => this.on(event, (...payload) => this._debug(`${event} event emitted. %o`, payload)));
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

const debug$8 = d('LC:SignatureFactoryRunner');
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
    return get(internal(this).currentAttributes, key);
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
      const parentKey = find(pendingKeys, k => key.indexOf(k) === 0); // 'a.b'
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
    internal(this).currentAttributes = Object.keys(pendingAttributes).reduce((target, k) => setValue(target, k, pendingAttributes[k]), cloneDeep(this._attributes));
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
    if (isEmpty(attr)) {
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

const debug$9 = d('LC:ConversationQuery');
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

const debug$a = d('LC:SessionManager');
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
const debug$b = d('LC:IMClient');
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
let IMClient = (_dec$2 = throttle(1000), _dec2 = throttle(1000), (_class$3 = class IMClient extends EventEmitter {
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
    internal(this)._eventemitter = new EventEmitter();
    if (debug$b.enabled) {
      values(IMEvent).forEach(event => this.on(event, (...payload) => this._debug(`${event} event emitted. %o`, payload)));
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
      const remoteTemporaryConversationIds = remove(remoteConversationIds, isTemporaryConversatrionId);
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
    const content = bin ? base64Arraybuffer.decode(data) : data;
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
      data: base64Arraybuffer.encode(this.content)
    };
  }
  toFullJSON() {
    return {
      ...super.toFullJSON(),
      bin: true,
      data: base64Arraybuffer.encode(this.content)
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
const debug$c = d('LC:MessageParser');
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
      const contentCopy = isPlainObject(content) ? {
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
const debug$d = d('LC:IMPlugin');

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
  const deviceId = uuid();
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
