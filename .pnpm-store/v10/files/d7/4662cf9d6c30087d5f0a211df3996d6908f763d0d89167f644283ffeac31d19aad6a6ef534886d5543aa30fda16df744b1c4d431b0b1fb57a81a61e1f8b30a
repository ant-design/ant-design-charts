"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownPlugin = void 0;
const path = require("path");
const typedoc_1 = require("typedoc");
const converter_1 = require("typedoc/dist/lib/converter");
const components_1 = require("typedoc/dist/lib/converter/components");
let MarkdownPlugin = class MarkdownPlugin extends components_1.ConverterComponent {
    initialize() {
        this.listenTo(this.owner, {
            [converter_1.Converter.EVENT_BEGIN]: this.onBegin,
            [converter_1.Converter.EVENT_RESOLVE_BEGIN]: this.onResolveBegin,
        });
    }
    onBegin() {
        typedoc_1.Renderer.getDefaultTheme = () => path.join(__dirname, 'resources');
    }
    onResolveBegin() {
        const options = this.application.options;
        const theme = options.getValue('platform') || options.getValue('theme');
        if (theme === 'default' || theme === 'markdown') {
            options.setValue('theme', path.join(__dirname));
        }
        const subThemes = ['docusaurus', 'docusaurus2', 'vuepress', 'gitbook', 'bitbucket'];
        if (subThemes.includes(theme)) {
            options.setValue('theme', path.join(__dirname, 'subthemes', theme));
        }
    }
};
MarkdownPlugin = __decorate([
    components_1.Component({ name: 'markdown' })
], MarkdownPlugin);
exports.MarkdownPlugin = MarkdownPlugin;
