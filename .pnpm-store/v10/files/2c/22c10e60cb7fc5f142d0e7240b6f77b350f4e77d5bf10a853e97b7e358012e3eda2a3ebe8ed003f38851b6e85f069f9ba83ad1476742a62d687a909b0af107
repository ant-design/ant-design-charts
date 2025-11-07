"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const index_1 = require("../../models/index");
const index_2 = require("../factories/index");
const components_1 = require("../components");
const utils_1 = require("../../utils");
const preferred = [
    ts.SyntaxKind.ClassDeclaration,
    ts.SyntaxKind.InterfaceDeclaration,
    ts.SyntaxKind.EnumDeclaration
];
let BlockConverter = class BlockConverter extends components_1.ConverterNodeComponent {
    constructor() {
        super(...arguments);
        this.supports = [
            ts.SyntaxKind.Block,
            ts.SyntaxKind.ModuleBlock,
            ts.SyntaxKind.SourceFile
        ];
    }
    convert(context, node) {
        if (node.kind === ts.SyntaxKind.SourceFile) {
            this.convertSourceFile(context, node);
        }
        else {
            this.convertStatements(context, node);
        }
        return context.scope;
    }
    convertSourceFile(context, node) {
        let result = context.scope;
        context.withSourceFile(node, () => {
            if (this.mode === utils_1.SourceFileMode.Modules) {
                result = index_2.createDeclaration(context, node, index_1.ReflectionKind.Module, node.fileName);
                context.withScope(result, () => {
                    this.convertStatements(context, node);
                    result.setFlag(index_1.ReflectionFlag.Exported);
                });
            }
            else {
                this.convertStatements(context, node);
            }
        });
        return result;
    }
    convertStatements(context, node) {
        if (node.statements) {
            const statements = [];
            node.statements.forEach((statement) => {
                if (preferred.includes(statement.kind)) {
                    this.owner.convertNode(context, statement);
                }
                else {
                    statements.push(statement);
                }
            });
            statements.forEach((statement) => {
                this.owner.convertNode(context, statement);
            });
        }
    }
};
__decorate([
    utils_1.BindOption('mode')
], BlockConverter.prototype, "mode", void 0);
BlockConverter = __decorate([
    components_1.Component({ name: 'node:block' })
], BlockConverter);
exports.BlockConverter = BlockConverter;
//# sourceMappingURL=block.js.map