'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var protobufLight = _interopDefault(require('protobufjs/dist/protobuf-light'));
var EventEmitter = _interopDefault(require('eventemitter3'));
var d = _interopDefault(require('debug'));
var shuffle = _interopDefault(require('lodash/shuffle'));
var values = _interopDefault(require('lodash/values'));
var StateMachine = _interopDefault(require('javascript-state-machine'));
var isPlainObject = _interopDefault(require('lodash/isPlainObject'));
var promiseTimeout = require('promise-timeout');

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
const isIE10 = global$1.navigator && global$1.navigator.userAgent && global$1.navigator.userAgent.indexOf('MSIE 10.') !== -1;
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
const isWeapp =
// eslint-disable-next-line no-undef
typeof wx === 'object' && typeof wx.connectSocket === 'function';
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

exports.EventEmitter = EventEmitter;
exports.Promise = polyfilledPromise;
exports.Protocals = message;
exports.Protocols = message;
exports.Realtime = Realtime;
exports.debug = debug$2;
exports.getAdapter = getAdapter;
exports.setAdapters = setAdapters;
//# sourceMappingURL=core.js.map
