"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrontMatterComponent = void 0;
const path = require("path");
const components_1 = require("typedoc/dist/lib/output/components");
const events_1 = require("typedoc/dist/lib/output/events");
let FrontMatterComponent = class FrontMatterComponent extends components_1.ContextAwareRendererComponent {
    initialize() {
        super.initialize();
        this.listenTo(this.application.renderer, {
            [events_1.PageEvent.END]: this.onPageEnd,
        });
    }
    onPageEnd(page) {
        page.contents = page.contents.replace(/^/, this.getYamlString(page) + '\n\n').replace(/[\r\n]{3,}/g, '\n\n');
    }
    getYamlString(page) {
        const yaml = `---
id: "${this.escapeYAMLString(this.getId(page))}"
title: "${this.escapeYAMLString(this.getTitle(page))}"
sidebar_label: "${this.escapeYAMLString(this.getLabel(page))}"
---`;
        return yaml;
    }
    getId(page) {
        return this.stripExt(page.url);
    }
    getTitle(page) {
        if (page.url === page.project.url) {
            return this.getProjectName(page);
        }
        return this.getTitleFromNavigation(page, page.url) || this.getProjectName(page);
    }
    getLabel(page) {
        if (this.stripExt(page.url) === 'globals') {
            return 'Globals';
        }
        const title = this.getTitleFromNavigation(page, page.url);
        return title ? title : !!page.project.readme ? 'README' : 'Globals';
    }
    escapeYAMLString(str) {
        return str.replace(/([^\\])'/g, '$1\\\'');
    }
    getProjectName(page) {
        return (page.project.packageInfo && page.project.packageInfo.label) || page.project.name;
    }
    getTitleFromNavigation(page, url) {
        const item = this.findNavigationItem(page.navigation.children, url, null);
        return item ? item.title : null;
    }
    findNavigationItem(navigation, url, item) {
        navigation.forEach(navigationChild => {
            if (navigationChild.url === url) {
                item = navigationChild;
                return;
            }
            if (navigationChild.children) {
                item = this.findNavigationItem(navigationChild.children, url, item);
            }
        });
        return item;
    }
    stripExt(url) {
        return path.basename(url, path.extname(url));
    }
};
FrontMatterComponent = __decorate([
    components_1.Component({ name: 'frontmatter' })
], FrontMatterComponent);
exports.FrontMatterComponent = FrontMatterComponent;
