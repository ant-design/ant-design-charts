"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs-extra");
const events_1 = require("typedoc/dist/lib/output/events");
const theme_1 = require("../../theme");
class VuePressTheme extends theme_1.default {
    constructor(renderer, basePath) {
        super(renderer, basePath);
        this.listenTo(renderer, events_1.RendererEvent.END, this.onRendererEnd, 1024);
    }
    onRendererEnd(renderer) {
        const root = this.findRoot(renderer.outputDirectory);
        if (root === null) {
            this.application.logger.warn(`[typedoc-markdown-plugin] sidebars.json not written as could not locate VuePress root directory. In order to to implemnent sidebars.json functionality, the output directory must be a child of a 'docs' directory.`);
            return;
        }
        this.writeSideBar(renderer, root);
    }
    writeSideBar(renderer, root) {
        const childDirectory = renderer.outputDirectory.split(root + 'docs/')[1];
        const docsRoot = childDirectory ? childDirectory + '/' : '';
        const vuePressRoot = root + 'docs/.vuepress';
        const navObject = this.getNavObject(renderer, docsRoot);
        const sidebarPath = vuePressRoot + '/api-sidebar.json';
        const relativeNavObject = this.getNavObject(renderer);
        const relativeSidebarPath = vuePressRoot + '/api-sidebar-relative.json';
        if (!fs.existsSync(vuePressRoot)) {
            fs.mkdirSync(vuePressRoot);
        }
        try {
            fs.writeFileSync(sidebarPath, JSON.stringify(navObject, null, 2));
            fs.writeFileSync(relativeSidebarPath, JSON.stringify(relativeNavObject, null, 2));
            this.application.logger.write(`[typedoc-plugin-markdown] sidebars.json updated at ${sidebarPath}`);
        }
        catch (e) {
            this.application.logger.write(`[typedoc-plugin-markdown] failed to update sidebars.json at ${sidebarPath}`);
        }
    }
    getNavObject(renderer, docsRoot = '') {
        const projectUrls = [docsRoot + this.indexName.replace('.md', '')];
        if (renderer.project.url === 'globals.md') {
            projectUrls.push(docsRoot + 'globals');
        }
        const navObject = [];
        this.getNavigation(renderer.project).children.forEach((rootNavigation) => {
            navObject.push({
                title: rootNavigation.title,
                children: rootNavigation.children.map((item) => {
                    return docsRoot + item.url.replace('.md', '');
                }),
            });
        });
        return navObject;
    }
    findRoot(outputDirectory) {
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
exports.default = VuePressTheme;
