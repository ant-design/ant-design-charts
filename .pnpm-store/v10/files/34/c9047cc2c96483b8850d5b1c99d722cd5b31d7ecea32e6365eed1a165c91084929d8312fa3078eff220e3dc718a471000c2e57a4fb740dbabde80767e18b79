"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextAwareHelpersComponent = void 0;
const path = require("path");
const Util = require("util");
const fs = require("fs-extra");
const Handlebars = require("handlebars");
const typedoc_1 = require("typedoc");
const components_1 = require("typedoc/dist/lib/output/components");
const events_1 = require("typedoc/dist/lib/output/events");
const theme_1 = require("../theme");
let ContextAwareHelpersComponent = class ContextAwareHelpersComponent extends components_1.ContextAwareRendererComponent {
    constructor() {
        super(...arguments);
        this.includePattern = /\[\[include:([^\]]+?)\]\]/g;
        this.mediaPattern = /media:\/\/([^ "\)\]\}]+)/g;
        this.brackets = /\[\[([^\]]+)\]\]/g;
        this.inlineTag = /(?:\[(.+?)\])?\{@(link|linkcode|linkplain)\s+((?:.|\n)+?)\}/gi;
        this.warnings = [];
    }
    initialize() {
        super.initialize();
        this.includes = this.application.options.getValue('includes');
        this.mediaDirectory = this.application.options.getValue('media');
        this.listInvalidSymbolLinks = this.application.options.getValue('listInvalidSymbolLinks');
        this.publicPath = this.application.options.getValue('publicPath');
        this.listenTo(this.owner, {
            [events_1.RendererEvent.END]: this.onEndRenderer,
        }, undefined, 100);
        const component = this;
        theme_1.default.handlebars.registerHelper('comment', function () {
            return component.parseComments(this);
        });
        theme_1.default.handlebars.registerHelper('breadcrumbs', function () {
            return component.breadcrumb(this.model, this.project, []);
        });
        theme_1.default.handlebars.registerHelper('relativeURL', (url) => {
            return url ? (this.publicPath ? this.publicPath + url : this.getRelativeUrl(url)) : url;
        });
    }
    breadcrumb(model, project, md) {
        const theme = this.application.renderer.theme;
        if (model && model.parent) {
            this.breadcrumb(model.parent, project, md);
            if (model.url) {
                md.push(`[${model.name}](${theme_1.default.handlebars.helpers.relativeURL(model.url)})`);
            }
            else {
                md.push(model.url);
            }
        }
        else {
            if (!!project.readme) {
                md.push(`[${project.name}](${theme_1.default.handlebars.helpers.relativeURL(theme.indexName + theme.fileExt)})`);
            }
            md.push(`[${project.readme ? 'Globals' : project.name}](${theme_1.default.handlebars.helpers.relativeURL(project.url)})`);
        }
        return md.join(' › ');
    }
    parseComments(text) {
        const context = Object.assign(text, '');
        if (this.includes) {
            text = text.replace(this.includePattern, (match, includesPath) => {
                includesPath = path.join(this.includes, includesPath.trim());
                if (fs.existsSync(includesPath) && fs.statSync(includesPath).isFile()) {
                    const contents = fs.readFileSync(includesPath, 'utf-8');
                    if (includesPath.substr(-4).toLocaleLowerCase() === '.hbs') {
                        const template = Handlebars.compile(contents);
                        return template(context);
                    }
                    else {
                        return contents;
                    }
                }
                else {
                    return '';
                }
            });
        }
        if (this.mediaDirectory) {
            text = text.replace(this.mediaPattern, (match, mediaPath) => {
                if (fs.existsSync(path.join(this.mediaDirectory, mediaPath))) {
                    return theme_1.default.handlebars.helpers.relativeURL('media') + '/' + mediaPath;
                }
                else {
                    return match;
                }
            });
        }
        return this.replaceInlineTags(this.replaceBrackets(text));
    }
    replaceBrackets(text) {
        return text.replace(this.brackets, (match, content) => {
            const split = typedoc_1.MarkedLinksPlugin.splitLinkText(content);
            return this.buildLink(match, split.target, split.caption);
        });
    }
    replaceInlineTags(text) {
        return text.replace(this.inlineTag, (match, leading, tagName, content) => {
            const split = typedoc_1.MarkedLinksPlugin.splitLinkText(content);
            const target = split.target;
            const caption = leading || split.caption;
            const monospace = tagName === 'linkcode';
            return this.buildLink(match, target, caption, monospace);
        });
    }
    buildLink(original, target, caption, monospace) {
        if (!this.urlPrefix.test(target)) {
            let reflection;
            if (this.reflection) {
                reflection = this.reflection.findReflectionByName(target);
            }
            else if (this.project) {
                reflection = this.project.findReflectionByName(target);
            }
            if (reflection && reflection.url) {
                if (this.urlPrefix.test(reflection.url)) {
                    target = reflection.url;
                }
                else {
                    target = this.getRelativeUrl(reflection.url);
                }
            }
            else {
                const fullName = (this.reflection || this.project).getFullName();
                this.warnings.push(`In ${fullName}: ${original}`);
                return original;
            }
        }
        if (monospace) {
            caption = '`' + caption + '`';
        }
        return Util.format('[%s](%s)', caption, target);
    }
    onEndRenderer(event) {
        if (this.listInvalidSymbolLinks && this.warnings.length > 0) {
            this.application.logger.write('');
            this.application.logger.warn('Found invalid symbol reference(s) in JSDocs, ' +
                'they will not render as links in the generated documentation.');
            for (const warning of this.warnings) {
                this.application.logger.write('  ' + warning);
            }
        }
    }
};
ContextAwareHelpersComponent = __decorate([
    components_1.Component({ name: 'helpers' })
], ContextAwareHelpersComponent);
exports.ContextAwareHelpersComponent = ContextAwareHelpersComponent;
