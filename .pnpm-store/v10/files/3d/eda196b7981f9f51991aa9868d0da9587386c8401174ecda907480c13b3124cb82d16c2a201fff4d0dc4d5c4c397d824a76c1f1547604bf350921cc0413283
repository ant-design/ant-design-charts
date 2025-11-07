"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ts = require("../../../ts-internal");
const declaration_1 = require("../declaration");
const IGNORED_OPTIONS = [
    'out',
    'version',
    'help',
    'emitDeclarationOnly',
    'watch',
    'declaration',
    'declarationDir',
    'declarationMap',
    'mapRoot',
    'sourceMap',
    'inlineSources',
    'removeComments',
    'incremental',
    'tsBuildInfoFile'
];
exports.IGNORED = new Set(IGNORED_OPTIONS);
function addTSOptions(container) {
    container.addDeclarations(_ts.optionDeclarations
        .filter(decl => !exports.IGNORED.has(decl.name))
        .map(createTSDeclaration));
    container.addDeclarations([{
            name: 'configFilePath',
            type: declaration_1.ParameterType.String,
            scope: declaration_1.ParameterScope.TypeScript,
            help: ''
        }]);
}
exports.addTSOptions = addTSOptions;
function createTSDeclaration(option) {
    const param = {
        name: option.name,
        short: option.shortName,
        help: option.description ? option.description.key : '',
        scope: declaration_1.ParameterScope.TypeScript
    };
    switch (option.type) {
        case 'number':
            param.type = declaration_1.ParameterType.Number;
            break;
        case 'boolean':
            param.type = declaration_1.ParameterType.Boolean;
            break;
        case 'string':
            param.type = declaration_1.ParameterType.String;
            break;
        case 'list':
            param.type = declaration_1.ParameterType.Array;
            break;
        case 'object':
            param.type = declaration_1.ParameterType.Mixed;
            break;
        default:
            param.type = declaration_1.ParameterType.Map;
            param.map = option.type;
    }
    return param;
}
//# sourceMappingURL=typescript.js.map