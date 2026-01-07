"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const path = require("path");
const events_1 = require("typedoc/dist/lib/output/events");
const front_matter_component_1 = require("../../components/front-matter.component");
const theme_1 = require("../../theme");
class Docusaurus2Theme extends theme_1.default {
    constructor(renderer, basePath) {
        super(renderer, basePath);
        this.indexName = 'index';
        this.sidebarName = 'sidebars.js';
        renderer.addComponent('frontmatter', new front_matter_component_1.FrontMatterComponent(renderer));
        this.listenTo(renderer, events_1.RendererEvent.END, this.onRendererEnd, 1024);
    }
    onRendererEnd(renderer) {
        if (!this.application.options.getValue('skipSidebar')) {
            const docusarusRoot = this.findDocusaurus2Root(renderer.outputDirectory);
            if (docusarusRoot === null) {
                this.application.logger.warn(`[typedoc-markdown-plugin] ${this.sidebarName} not written as could not locate docusaurus root directory. In order to to implemnent ${this.sidebarName} functionality, the output directory must be a child of a 'docs' directory.`);
                return;
            }
            this.writeSideBar(renderer, docusarusRoot);
        }
    }
    writeSideBar(renderer, docusarusRoot) {
        const childDirectory = renderer.outputDirectory.split(docusarusRoot + 'docs/')[1];
        const docsRoot = childDirectory ? childDirectory + '/' : '';
        const websitePath = docusarusRoot;
        const navObject = this.getNavObject(renderer, docsRoot);
        const sidebarPath = websitePath + this.sidebarName;
        let jsonContent;
        if (!fs.existsSync(sidebarPath)) {
            if (!fs.existsSync(websitePath)) {
                fs.mkdirSync(websitePath);
            }
            jsonContent = JSON.parse('{}');
        }
        else {
            jsonContent = require(sidebarPath);
        }
        let firstKey = Object.keys(jsonContent)[0];
        if (!firstKey) {
            firstKey = 'docs';
        }
        jsonContent[firstKey] = Object.assign({}, jsonContent[firstKey], navObject);
        try {
            fs.writeFileSync(sidebarPath, 'module.exports = ' + JSON.stringify(jsonContent, null, 2) + ';');
            this.application.logger.write(`[typedoc-plugin-markdown] ${this.sidebarName} updated at ${sidebarPath}`);
        }
        catch (e) {
            this.application.logger.write(`[typedoc-plugin-markdown] failed to update ${this.sidebarName} at ${sidebarPath}`);
        }
    }
    getNavObject(renderer, docsRoot) {
        const navObject = {};
        let url = '';
        let navKey = '';
        this.getNavigation(renderer.project).children.forEach(rootNavigation => {
            rootNavigation.children.map(item => {
                url = item.url.replace('.md', '');
                navKey = url.substr(0, url.indexOf('/'));
                if (navKey !== undefined && navKey.length) {
                    navKey = navKey[0].toUpperCase() + navKey.slice(1);
                }
                if (navObject[navKey] === undefined) {
                    navObject[navKey] = [];
                }
                navObject[navKey].push(docsRoot + url);
            });
        });
        return navObject;
    }
    findDocusaurus2Root(outputDirectory) {
        const docsName = 'docs';
        function splitPath(dir) {
            const parts = dir.split(/(\/|\\)/);
            if (!parts.length) {
                return parts;
            }
            return !parts[0].length ? parts.slice(1) : parts;
        }
        function testDir(parts) {
            if (parts.length === 0) {
                return null;
            }
            const p = parts.join('');
            const itdoes = fs.existsSync(path.join(p, docsName));
            return itdoes ? p : testDir(parts.slice(0, -1));
        }
        return testDir(splitPath(outputDirectory));
    }
}
exports.default = Docusaurus2Theme;
