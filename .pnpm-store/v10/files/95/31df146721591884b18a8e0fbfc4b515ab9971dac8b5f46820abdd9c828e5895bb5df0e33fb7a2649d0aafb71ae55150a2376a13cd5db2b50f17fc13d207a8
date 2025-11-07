"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrontMatterComponentV3 = void 0;
const path = require("path");
const components_1 = require("typedoc/dist/lib/output/components");
const events_1 = require("typedoc/dist/lib/output/events");
const reflection_title_1 = require("../resources/helpers/reflection-title");
let FrontMatterComponentV3 = class FrontMatterComponentV3 extends components_1.ContextAwareRendererComponent {
    initialize() {
        super.initialize();
        this.listenTo(this.application.renderer, {
            [events_1.PageEvent.END]: this.onPageEnd,
        });
    }
    onPageEnd(page) {
        page.contents = page.contents
            .replace(/^/, this.getYamlString(this.getYamlItems(page)) + '\n\n')
            .replace(/[\r\n]{3,}/g, '\n\n');
    }
    getYamlString(yamlItems) {
        const yaml = `---
${Object.entries(yamlItems)
            .map(([key, value]) => `${key}: ${typeof value === 'string' ? `"${this.escapeYAMLString(value)}"` : value}`)
            .join('\n')}
---`;
        return yaml;
    }
    getYamlItems(page) {
        return this.getDefaultValues(page);
    }
    getDefaultValues(page) {
        return {
            id: this.getId(page),
            title: this.getTitle(page),
        };
    }
    getId(page) {
        return path.basename(page.url, path.extname(page.url));
    }
    getTitle(page) {
        return reflection_title_1.reflectionTitle.call(page);
    }
    escapeYAMLString(str) {
        return str.replace(/([^\\])'/g, '$1\\\'').replace(/\"/g, '');
    }
};
FrontMatterComponentV3 = __decorate([
    components_1.Component({ name: 'frontmatter-v3' })
], FrontMatterComponentV3);
exports.FrontMatterComponentV3 = FrontMatterComponentV3;
