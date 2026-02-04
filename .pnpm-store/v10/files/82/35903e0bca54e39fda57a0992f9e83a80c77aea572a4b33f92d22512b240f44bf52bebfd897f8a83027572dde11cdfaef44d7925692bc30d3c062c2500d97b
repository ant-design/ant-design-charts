"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsComponent = void 0;
const components_1 = require("typedoc/dist/lib/output/components");
const theme_1 = require("../theme");
let OptionsComponent = class OptionsComponent extends components_1.ContextAwareRendererComponent {
    initialize() {
        super.initialize();
        const namedAnchors = this.application.options.getValue('namedAnchors');
        const hideBreadcrumbs = this.application.options.getValue('hideBreadcrumbs');
        const hideIndexes = this.application.options.getValue('hideIndexes');
        const hideSourceFiles = this.application.options.getValue('hideSources');
        theme_1.default.handlebars.registerHelper('ifNamedAnchors', function (options) {
            return namedAnchors ? options.fn(this) : options.inverse(this);
        });
        theme_1.default.handlebars.registerHelper('ifBreadcrumbs', function (options) {
            return hideBreadcrumbs ? options.inverse(this) : options.fn(this);
        });
        theme_1.default.handlebars.registerHelper('ifIndexes', function (options) {
            return hideIndexes ? options.inverse(this) : options.fn(this);
        });
        theme_1.default.handlebars.registerHelper('ifSources', function (options) {
            return hideSourceFiles ? options.inverse(this) : options.fn(this);
        });
    }
};
OptionsComponent = __decorate([
    components_1.Component({ name: 'options' })
], OptionsComponent);
exports.OptionsComponent = OptionsComponent;
