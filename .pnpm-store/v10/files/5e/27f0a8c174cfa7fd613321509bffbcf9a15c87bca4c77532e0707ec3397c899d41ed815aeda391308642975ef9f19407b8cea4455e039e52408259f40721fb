'use strict';

var EventEmitter = require('eventemitter3');
var Lexer = require('xml-lexer');
var Type = Lexer.Type;

var NodeType = {
    element: 'element',
    text: 'text'
};

var createNode = function createNode(params) {
    return Object.assign({
        name: '',
        type: NodeType.element,
        value: '',
        parent: null,
        attributes: {},
        children: []
    }, params);
};

var create = function create(options) {
    options = Object.assign({
        stream: false,
        parentNodes: true,
        doneEvent: 'done',
        tagPrefix: 'tag:',
        emitTopLevelOnly: false,
        debug: false
    }, options);

    var lexer = void 0,
        rootNode = void 0,
        current = void 0,
        attrName = void 0;

    var reader = new EventEmitter();

    var handleLexerData = function handleLexerData(data) {
        switch (data.type) {

            case Type.openTag:
                if (current === null) {
                    current = rootNode;
                    current.name = data.value;
                } else {
                    var node = createNode({
                        name: data.value,
                        parent: current
                    });
                    current.children.push(node);
                    current = node;
                }
                break;

            case Type.closeTag:
                var parent = current.parent;
                if (!options.parentNodes) {
                    current.parent = null;
                }
                if (current.name !== data.value) {
                    // ignore unexpected closing tag
                    break;
                }
                if (options.stream && parent === rootNode) {
                    rootNode.children = [];
                    // do not expose parent node in top level nodes
                    current.parent = null;
                }
                if (!options.emitTopLevelOnly || parent === rootNode) {
                    reader.emit(options.tagPrefix + current.name, current);
                    reader.emit('tag', current.name, current);
                }
                if (current === rootNode) {
                    // end of document, stop listening
                    lexer.removeAllListeners('data');
                    reader.emit(options.doneEvent, current);
                    rootNode = null;
                }
                current = parent;
                break;

            case Type.text:
                if (current) {
                    current.children.push(createNode({
                        type: NodeType.text,
                        value: data.value,
                        parent: options.parentNodes ? current : null
                    }));
                }
                break;

            case Type.attributeName:
                attrName = data.value;
                current.attributes[attrName] = '';
                break;

            case Type.attributeValue:
                current.attributes[attrName] = data.value;
                break;
        }
    };

    reader.reset = function () {
        lexer = Lexer.create({ debug: options.debug });
        lexer.on('data', handleLexerData);
        rootNode = createNode();
        current = null;
        attrName = '';
        reader.parse = lexer.write;
    };

    reader.reset();
    return reader;
};

var parseSync = function parseSync(xml, options) {
    options = Object.assign({}, options, { stream: false, tagPrefix: ':' });
    var reader = create(options);
    var res = void 0;
    reader.on('done', function (ast) {
        res = ast;
    });
    reader.parse(xml);
    return res;
};

module.exports = {
    parseSync: parseSync,
    create: create,
    NodeType: NodeType
};