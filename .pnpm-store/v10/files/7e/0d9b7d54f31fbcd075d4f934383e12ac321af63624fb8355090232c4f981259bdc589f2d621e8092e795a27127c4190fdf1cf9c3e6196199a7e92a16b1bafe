"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const FS = require("fs-extra");
const Path = require("path");
const Marked = require("marked");
const HighlightJS = require("highlight.js");
const Handlebars = require("handlebars");
const components_1 = require("../components");
const events_1 = require("../events");
const utils_1 = require("../../utils");
const customMarkedRenderer = new Marked.Renderer();
customMarkedRenderer.heading = (text, level, _, slugger) => {
    const slug = slugger.slug(text);
    return `
<a href="#${slug}" id="${slug}" style="color: inherit; text-decoration: none;">
  <h${level}>${text}</h${level}>
</a>
`;
};
let MarkedPlugin = class MarkedPlugin extends components_1.ContextAwareRendererComponent {
    constructor() {
        super(...arguments);
        this.includePattern = /\[\[include:([^\]]+?)\]\]/g;
        this.mediaPattern = /media:\/\/([^ "\)\]\}]+)/g;
    }
    initialize() {
        super.initialize();
        this.listenTo(this.owner, events_1.MarkdownEvent.PARSE, this.onParseMarkdown);
        const that = this;
        Handlebars.registerHelper('markdown', function (arg) { return that.parseMarkdown(arg.fn(this), this); });
        Handlebars.registerHelper('relativeURL', (url) => url ? this.getRelativeUrl(url) : url);
        Marked.setOptions({
            highlight: (text, lang) => this.getHighlighted(text, lang),
            renderer: customMarkedRenderer
        });
    }
    getHighlighted(text, lang) {
        try {
            if (lang) {
                return HighlightJS.highlight(lang, text).value;
            }
            else {
                return HighlightJS.highlightAuto(text).value;
            }
        }
        catch (error) {
            this.application.logger.warn(error.message);
            return text;
        }
    }
    parseMarkdown(text, context) {
        if (this.includes) {
            text = text.replace(this.includePattern, (match, path) => {
                path = Path.join(this.includes, path.trim());
                if (FS.existsSync(path) && FS.statSync(path).isFile()) {
                    const contents = utils_1.readFile(path);
                    if (path.substr(-4).toLocaleLowerCase() === '.hbs') {
                        const template = Handlebars.compile(contents);
                        return template(context, { allowProtoMethodsByDefault: true, allowProtoPropertiesByDefault: true });
                    }
                    else {
                        return contents;
                    }
                }
                else {
                    this.application.logger.warn('Could not find file to include: ' + path);
                    return '';
                }
            });
        }
        if (this.mediaDirectory) {
            text = text.replace(this.mediaPattern, (match, path) => {
                const fileName = Path.join(this.mediaDirectory, path);
                if (FS.existsSync(fileName) && FS.statSync(fileName).isFile()) {
                    return this.getRelativeUrl('media') + '/' + path;
                }
                else {
                    this.application.logger.warn('Could not find media file: ' + fileName);
                    return match;
                }
            });
        }
        const event = new events_1.MarkdownEvent(events_1.MarkdownEvent.PARSE, text, text);
        this.owner.trigger(event);
        return event.parsedText;
    }
    onBeginRenderer(event) {
        super.onBeginRenderer(event);
        delete this.includes;
        if (this.includeSource) {
            const includes = Path.resolve(this.includeSource);
            if (FS.existsSync(includes) && FS.statSync(includes).isDirectory()) {
                this.includes = includes;
            }
            else {
                this.application.logger.warn('Could not find provided includes directory: ' + includes);
            }
        }
        if (this.mediaSource) {
            const media = Path.resolve(this.mediaSource);
            if (FS.existsSync(media) && FS.statSync(media).isDirectory()) {
                this.mediaDirectory = Path.join(event.outputDirectory, 'media');
                FS.copySync(media, this.mediaDirectory);
            }
            else {
                this.mediaDirectory = undefined;
                this.application.logger.warn('Could not find provided media directory: ' + media);
            }
        }
    }
    onParseMarkdown(event) {
        event.parsedText = Marked(event.parsedText);
    }
};
__decorate([
    utils_1.BindOption('includes')
], MarkedPlugin.prototype, "includeSource", void 0);
__decorate([
    utils_1.BindOption('media')
], MarkedPlugin.prototype, "mediaSource", void 0);
MarkedPlugin = __decorate([
    components_1.Component({ name: 'marked' })
], MarkedPlugin);
exports.MarkedPlugin = MarkedPlugin;
//# sourceMappingURL=MarkedPlugin.js.map