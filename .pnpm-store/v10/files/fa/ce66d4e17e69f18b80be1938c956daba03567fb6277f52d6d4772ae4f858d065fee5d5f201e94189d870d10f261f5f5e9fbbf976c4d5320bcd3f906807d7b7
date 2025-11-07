"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const events_1 = require("typedoc/dist/lib/output/events");
const theme_1 = require("../../theme");
class GitbookTheme extends theme_1.default {
    constructor(renderer, basePath) {
        super(renderer, basePath);
        this.listenTo(renderer, events_1.RendererEvent.END, this.writeSummary, 1024);
    }
    writeSummary(renderer) {
        const outputDirectory = renderer.outputDirectory;
        const summaryMarkdown = this.getSummaryMarkdown(renderer);
        try {
            fs.writeFileSync(`${outputDirectory}/SUMMARY.md`, summaryMarkdown);
            this.application.logger.write(`[typedoc-plugin-markdown] SUMMARY.md written to ${outputDirectory}`);
        }
        catch (e) {
            this.application.logger.write(`[typedoc-plugin-markdown] failed to write SUMMARY at ${outputDirectory}`);
        }
    }
    getSummaryMarkdown(renderer) {
        const md = [];
        md.push(`* [Globals](globals.md)`);
        this.getNavigation(renderer.project).children.forEach(rootNavigation => {
            if (rootNavigation.children) {
                md.push(`* [${rootNavigation.title}](${rootNavigation.url})`);
                rootNavigation.children.forEach(item => {
                    md.push(`  * [${item.title}](${item.url})`);
                });
            }
        });
        return md.join('\n');
    }
    allowedDirectoryListings() {
        return ['README.md', 'globals.md', 'classes', 'enums', 'interfaces', 'modules', 'media', '.DS_Store', 'SUMMARY.md'];
    }
}
exports.default = GitbookTheme;
