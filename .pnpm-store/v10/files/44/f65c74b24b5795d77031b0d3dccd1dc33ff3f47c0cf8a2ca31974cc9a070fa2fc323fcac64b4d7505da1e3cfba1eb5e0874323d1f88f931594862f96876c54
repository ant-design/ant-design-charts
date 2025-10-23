"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const path = require("path");
const events_1 = require("typedoc/dist/lib/output/events");
const front_matter_component_1 = require("../../components/front-matter.component");
const theme_1 = require("../../theme");
class DocusaurusTheme extends theme_1.default {
    constructor(renderer, basePath) {
        super(renderer, basePath);
        this.indexName = 'index';
        renderer.addComponent('frontmatter', new front_matter_component_1.FrontMatterComponent(renderer));
        this.listenTo(renderer, events_1.RendererEvent.END, this.onRendererEnd, 1024);
    }
    onRendererEnd(renderer) {
        if (!this.application.options.getValue('skipSidebar')) {
            const docusarusRoot = this.findDocusaurusRoot(renderer.outputDirectory);
            if (docusarusRoot === null) {
                this.application.logger.warn(`[typedoc-markdown-plugin] sidebars.json not written as could not locate docusaurus root directory. In order to to implemnent sidebars.json functionality, the output directory must be a child of a 'docs' directory.`);
                return;
            }
            this.writeSideBar(renderer, docusarusRoot);
        }
    }
    writeSideBar(renderer, docusarusRoot) {
        const childDirectory = renderer.outputDirectory.split(docusarusRoot + 'docs/')[1];
        const docsRoot = childDirectory ? childDirectory + '/' : '';
        const websitePath = docusarusRoot + 'website';
        const packageName = renderer.project.packageInfo.name;
        const navObject = this.getNavObject(renderer, docsRoot);
        const sidebarPath = websitePath + '/sidebars.json';
        let contents;
        if (!fs.existsSync(sidebarPath)) {
            contents = '{}';
            if (!fs.existsSync(websitePath)) {
                fs.mkdirSync(websitePath);
            }
        }
        else {
            contents = fs.readFileSync(sidebarPath);
        }
        const jsonContent = JSON.parse(contents.toString());
        const update = Object.assign(Object.assign({}, jsonContent), { [packageName]: navObject });
        try {
            fs.writeFileSync(sidebarPath, JSON.stringify(update, null, 2));
            this.application.logger.write(`[typedoc-plugin-markdown] sidebars.json updated at ${sidebarPath}`);
        }
        catch (e) {
            this.application.logger.write(`[typedoc-plugin-markdown] failed to update sidebars.json at ${sidebarPath}`);
        }
    }
    getNavObject(renderer, docsRoot) {
        const projectUrls = [docsRoot + this.indexName.replace('.md', '')];
        if (renderer.project.url === 'globals.md') {
            projectUrls.push(docsRoot + 'globals');
        }
        const navObject = {
            ['Introduction']: projectUrls,
        };
        this.getNavigation(renderer.project).children.forEach(rootNavigation => {
            navObject[rootNavigation.title] = rootNavigation.children.map(item => {
                return docsRoot + item.url.replace('.md', '');
            });
        });
        return navObject;
    }
    findDocusaurusRoot(outputDirectory) {
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
exports.default = DocusaurusTheme;
