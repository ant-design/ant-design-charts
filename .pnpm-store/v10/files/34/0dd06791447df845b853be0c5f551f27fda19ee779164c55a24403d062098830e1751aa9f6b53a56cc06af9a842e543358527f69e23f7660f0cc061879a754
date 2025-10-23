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
const components_1 = require("../components");
const reference_1 = require("../factories/reference");
const utils_1 = require("../../utils");
let ExportConverter = class ExportConverter extends components_1.ConverterNodeComponent {
    constructor() {
        super(...arguments);
        this.supports = [
            ts.SyntaxKind.ExportAssignment
        ];
    }
    convert(context, node) {
        let symbol;
        if (node.symbol && (node.symbol.flags & ts.SymbolFlags.Alias) === ts.SymbolFlags.Alias) {
            symbol = context.checker.getAliasedSymbol(node.symbol);
        }
        else {
            let type = context.getTypeAtLocation(node.expression);
            symbol = type ? type.symbol : undefined;
        }
        if (symbol && symbol.declarations) {
            const project = context.project;
            symbol.declarations.forEach((declaration) => {
                if (!declaration.symbol) {
                    return;
                }
                const reflection = project.getReflectionFromFQN(context.checker.getFullyQualifiedName(declaration.symbol));
                if (node.isExportEquals && reflection instanceof index_1.DeclarationReflection) {
                    reflection.setFlag(index_1.ReflectionFlag.ExportAssignment, true);
                }
                if (reflection) {
                    markAsExported(reflection);
                }
            });
        }
        function markAsExported(reflection) {
            if (reflection instanceof index_1.DeclarationReflection) {
                reflection.setFlag(index_1.ReflectionFlag.Exported, true);
            }
            reflection.traverse(markAsExported);
        }
        return context.scope;
    }
};
ExportConverter = __decorate([
    components_1.Component({ name: 'node:export' })
], ExportConverter);
exports.ExportConverter = ExportConverter;
let ExportDeclarationConverter = class ExportDeclarationConverter extends components_1.ConverterNodeComponent {
    constructor() {
        super(...arguments);
        this.supports = [ts.SyntaxKind.ExportDeclaration];
    }
    convert(context, node) {
        if (this.application.options.getValue('mode') === utils_1.SourceFileMode.File) {
            return;
        }
        const scope = context.scope;
        if (!(scope instanceof index_1.ContainerReflection)) {
            throw new Error('Expected to be within a container');
        }
        if (node.exportClause && node.exportClause.kind === ts.SyntaxKind.NamedExports) {
            node.exportClause.elements.forEach(specifier => {
                var _a;
                const source = context.expectSymbolAtLocation(specifier.name);
                const target = context.resolveAliasedSymbol(context.expectSymbolAtLocation((_a = specifier.propertyName) !== null && _a !== void 0 ? _a : specifier.name));
                if (!node.moduleSpecifier && !specifier.propertyName) {
                    return;
                }
                reference_1.createReferenceReflection(context, source, target);
            });
        }
        else if (node.exportClause && node.exportClause.kind === ts.SyntaxKind.NamespaceExport) {
            const source = context.expectSymbolAtLocation(node.exportClause.name);
            if (!node.moduleSpecifier) {
                throw new Error('Namespace export is missing a module specifier.');
            }
            const target = context.resolveAliasedSymbol(context.expectSymbolAtLocation(node.moduleSpecifier));
            reference_1.createReferenceReflection(context, source, target);
        }
        else if (node.moduleSpecifier) {
            const sourceFileSymbol = context.expectSymbolAtLocation(node.moduleSpecifier);
            for (const symbol of context.checker.getExportsOfModule(sourceFileSymbol)) {
                if (symbol.name === 'default') {
                    continue;
                }
                reference_1.createReferenceReflection(context, symbol, context.resolveAliasedSymbol(symbol));
            }
        }
        return context.scope;
    }
};
ExportDeclarationConverter = __decorate([
    components_1.Component({ name: 'node:export-declaration' })
], ExportDeclarationConverter);
exports.ExportDeclarationConverter = ExportDeclarationConverter;
//# sourceMappingURL=export.js.map