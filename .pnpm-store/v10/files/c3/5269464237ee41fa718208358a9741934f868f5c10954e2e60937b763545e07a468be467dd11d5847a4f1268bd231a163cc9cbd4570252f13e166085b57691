"use strict";
const declaration_1 = require("typedoc/dist/lib/utils/options/declaration");
const plugin_1 = require("./plugin");
module.exports = (PluginHost) => {
    const app = PluginHost.owner;
    if (app.converter.hasComponent('markdown')) {
        return;
    }
    app.options.addDeclaration({
        help: 'Markdown Plugin: Deprecated in favour of theme.',
        name: 'platform',
        type: declaration_1.ParameterType.String,
    });
    app.options.addDeclaration({
        help: 'Markdown Plugin: Deprecated.',
        name: 'hideProjectTitle',
        type: declaration_1.ParameterType.Boolean,
    });
    app.options.addDeclaration({
        help: 'Markdown Plugin: Do not print source file link rendering.',
        name: 'hideSources',
        type: declaration_1.ParameterType.Boolean,
    });
    app.options.addDeclaration({
        help: 'Markdown Plugin: Do not print breadcrumbs.',
        name: 'hideBreadcrumbs',
        type: declaration_1.ParameterType.Boolean,
    });
    app.options.addDeclaration({
        help: 'Markdown Plugin: Do not print indexes.',
        name: 'hideIndexes',
        type: declaration_1.ParameterType.Boolean,
    });
    app.options.addDeclaration({
        help: 'Markdown Plugin: Use HTML named anchors as fragment identifiers for engines that do not automatically assign header ids.',
        name: 'namedAnchors',
        type: declaration_1.ParameterType.Boolean,
    });
    app.options.addDeclaration({
        help: 'Markdown Plugin: Use long navigation title instead of default short one (applicable to navigation / front-matter only).',
        name: 'longTitle',
        type: declaration_1.ParameterType.Boolean,
    });
    app.options.addDeclaration({
        help: 'Markdown Plugin: Specifies the base path that all links to be served from. If omitted all urls will be relative.',
        name: 'publicPath',
        type: declaration_1.ParameterType.String,
    });
    app.options.addDeclaration({
        help: 'Skips updating of the sidebar.json file when used with docusaurus or docusaurus2 theme',
        name: 'skipSidebar',
        type: declaration_1.ParameterType.Boolean,
    });
    app.converter.addComponent('markdown', new plugin_1.MarkdownPlugin(app.converter));
};
