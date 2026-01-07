"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../models/reflections/index");
const components_1 = require("../components");
const events_1 = require("../events");
const ignoredClasses = new Set([
    'tsd-parent-kind-module',
    'tsd-is-not-exported',
    'tsd-is-overwrite'
]);
const completeLegend = [
    [
        { name: 'Namespace', classes: ['tsd-kind-namespace'] },
        { name: 'Object literal', classes: ['tsd-kind-object-literal'] },
        { name: 'Variable', classes: ['tsd-kind-variable'] },
        { name: 'Function', classes: ['tsd-kind-function'] },
        { name: 'Function with type parameter', classes: ['tsd-kind-function', 'tsd-has-type-parameter'] },
        { name: 'Index signature', classes: ['tsd-kind-index-signature'] },
        { name: 'Type alias', classes: ['tsd-kind-type-alias'] },
        { name: 'Type alias with type parameter', classes: ['tsd-kind-type-alias', 'tsd-has-type-parameter'] }
    ],
    [
        { name: 'Enumeration', classes: ['tsd-kind-enum'] },
        { name: 'Enumeration member', classes: ['tsd-kind-enum-member'] },
        { name: 'Property', classes: ['tsd-kind-property', 'tsd-parent-kind-enum'] },
        { name: 'Method', classes: ['tsd-kind-method', 'tsd-parent-kind-enum'] }
    ],
    [
        { name: 'Interface', classes: ['tsd-kind-interface'] },
        { name: 'Interface with type parameter', classes: ['tsd-kind-interface', 'tsd-has-type-parameter'] },
        { name: 'Constructor', classes: ['tsd-kind-constructor', 'tsd-parent-kind-interface'] },
        { name: 'Property', classes: ['tsd-kind-property', 'tsd-parent-kind-interface'] },
        { name: 'Method', classes: ['tsd-kind-method', 'tsd-parent-kind-interface'] },
        { name: 'Index signature', classes: ['tsd-kind-index-signature', 'tsd-parent-kind-interface'] }
    ],
    [
        { name: 'Class', classes: ['tsd-kind-class'] },
        { name: 'Class with type parameter', classes: ['tsd-kind-class', 'tsd-has-type-parameter'] },
        { name: 'Constructor', classes: ['tsd-kind-constructor', 'tsd-parent-kind-class'] },
        { name: 'Property', classes: ['tsd-kind-property', 'tsd-parent-kind-class'] },
        { name: 'Method', classes: ['tsd-kind-method', 'tsd-parent-kind-class'] },
        { name: 'Accessor', classes: ['tsd-kind-accessor', 'tsd-parent-kind-class'] },
        { name: 'Index signature', classes: ['tsd-kind-index-signature', 'tsd-parent-kind-class'] }
    ],
    [
        { name: 'Inherited constructor', classes: ['tsd-kind-constructor', 'tsd-parent-kind-class', 'tsd-is-inherited'] },
        { name: 'Inherited property', classes: ['tsd-kind-property', 'tsd-parent-kind-class', 'tsd-is-inherited'] },
        { name: 'Inherited method', classes: ['tsd-kind-method', 'tsd-parent-kind-class', 'tsd-is-inherited'] },
        { name: 'Inherited accessor', classes: ['tsd-kind-accessor', 'tsd-parent-kind-class', 'tsd-is-inherited'] }
    ],
    [
        { name: 'Protected property', classes: ['tsd-kind-property', 'tsd-parent-kind-class', 'tsd-is-protected'] },
        { name: 'Protected method', classes: ['tsd-kind-method', 'tsd-parent-kind-class', 'tsd-is-protected'] },
        { name: 'Protected accessor', classes: ['tsd-kind-accessor', 'tsd-parent-kind-class', 'tsd-is-protected'] }
    ],
    [
        { name: 'Private property', classes: ['tsd-kind-property', 'tsd-parent-kind-class', 'tsd-is-private'] },
        { name: 'Private method', classes: ['tsd-kind-method', 'tsd-parent-kind-class', 'tsd-is-private'] },
        { name: 'Private accessor', classes: ['tsd-kind-accessor', 'tsd-parent-kind-class', 'tsd-is-private'] }
    ],
    [
        { name: 'Static property', classes: ['tsd-kind-property', 'tsd-parent-kind-class', 'tsd-is-static'] },
        { name: 'Static method', classes: ['tsd-kind-method', 'tsd-parent-kind-class', 'tsd-is-static'] }
    ]
];
class LegendBuilder {
    constructor() {
        this._classesList = [];
    }
    build() {
        const filteredLegend = completeLegend.map(list => {
            return list.filter(item => {
                for (const classes of this._classesList) {
                    if (this.isArrayEqualToSet(item.classes, classes)) {
                        return true;
                    }
                }
                return false;
            });
        }).filter(list => list.length);
        return filteredLegend;
    }
    registerCssClasses(classArray) {
        let exists = false;
        const items = classArray.filter(cls => !ignoredClasses.has(cls));
        for (const classes of this._classesList) {
            if (this.isArrayEqualToSet(items, classes)) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            this._classesList.push(new Set(items));
        }
    }
    isArrayEqualToSet(a, b) {
        if (a.length !== b.size) {
            return false;
        }
        for (const value of a) {
            if (!b.has(value)) {
                return false;
            }
        }
        return true;
    }
}
exports.LegendBuilder = LegendBuilder;
let LegendPlugin = class LegendPlugin extends components_1.RendererComponent {
    initialize() {
        this.listenTo(this.owner, {
            [events_1.RendererEvent.BEGIN]: this.onRenderBegin,
            [events_1.PageEvent.BEGIN]: this.onRendererBeginPage
        });
    }
    onRenderBegin(event) {
        this._project = event.project;
    }
    onRendererBeginPage(page) {
        var _a;
        const model = page.model;
        const builder = new LegendBuilder();
        this.buildLegend(model, builder);
        (_a = this._project.children) === null || _a === void 0 ? void 0 : _a.forEach(reflection => {
            if (reflection !== model) {
                this.buildLegend(reflection, builder);
            }
        });
        page.legend = builder.build().sort((a, b) => b.length - a.length);
    }
    buildLegend(model, builder) {
        var _a, _b;
        if (model instanceof index_1.DeclarationReflection) {
            const children = (model.children || [])
                .concat(...((_a = model.groups) === null || _a === void 0 ? void 0 : _a.map(group => group.children)) || [])
                .concat(...model.getAllSignatures())
                .concat(model.indexSignature)
                .filter(item => item);
            for (const child of children) {
                const cssClasses = (_b = child === null || child === void 0 ? void 0 : child.cssClasses) === null || _b === void 0 ? void 0 : _b.split(' ');
                if (cssClasses) {
                    builder.registerCssClasses(cssClasses);
                }
            }
        }
    }
};
LegendPlugin = __decorate([
    components_1.Component({ name: 'legend' })
], LegendPlugin);
exports.LegendPlugin = LegendPlugin;
//# sourceMappingURL=LegendPlugin.js.map