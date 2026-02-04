"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const Handlebars = require("handlebars");
const typedoc_1 = require("typedoc");
const events_1 = require("typedoc/dist/lib/output/events");
const theme_1 = require("typedoc/dist/lib/output/theme");
const helpers_component_1 = require("./components/helpers.component");
const options_component_1 = require("./components/options.component");
class MarkdownTheme extends theme_1.Theme {
    constructor(renderer, basePath) {
        super(renderer, basePath);
        this.indexName = 'README';
        this.fileExt = '.md';
        this.listenTo(renderer, events_1.PageEvent.END, this.onPageEnd, 1024);
        renderer.removeComponent('assets');
        renderer.removeComponent('javascript-index');
        renderer.removeComponent('toc');
        renderer.removeComponent('pretty-print');
        renderer.addComponent('helpers', new helpers_component_1.ContextAwareHelpersComponent(renderer));
        renderer.addComponent('options', new options_component_1.OptionsComponent(renderer));
    }
    isOutputDirectory(outputDirectory) {
        let isOutputDirectory = true;
        const listings = fs.readdirSync(outputDirectory);
        if (!listings.includes(this.indexName + this.fileExt)) {
            isOutputDirectory = false;
            return;
        }
        listings.forEach((listing) => {
            if (!this.allowedDirectoryListings().includes(listing)) {
                isOutputDirectory = false;
                return;
            }
        });
        return isOutputDirectory;
    }
    allowedDirectoryListings() {
        return [
            this.indexName + this.fileExt,
            'globals' + this.fileExt,
            'classes',
            'enums',
            'interfaces',
            'modules',
            'media',
            '.DS_Store',
        ];
    }
    getUrls(project) {
        const urls = [];
        const entryPoint = this.getEntryPoint(project);
        const omitReadme = this.application.options.getValue('readme') === 'none';
        const inlineGroupTitles = ['Functions', 'Variables', 'Object literals'];
        if (project.groups) {
            MarkdownTheme.isSingleFile =
                project.groups && project.groups.every((group) => inlineGroupTitles.includes(group.title));
        }
        if (omitReadme || MarkdownTheme.isSingleFile) {
            entryPoint.url = this.indexName + this.fileExt;
            urls.push(new typedoc_1.UrlMapping(this.indexName + this.fileExt, Object.assign(Object.assign({}, entryPoint), { displayReadme: MarkdownTheme.isSingleFile }), 'reflection.hbs'));
        }
        else {
            entryPoint.url = 'globals' + this.fileExt;
            urls.push(new typedoc_1.UrlMapping('globals' + this.fileExt, entryPoint, 'reflection.hbs'));
            urls.push(new typedoc_1.UrlMapping(this.indexName + this.fileExt, project, 'index.hbs'));
        }
        if (entryPoint.children) {
            entryPoint.children.forEach((child) => {
                if (child instanceof typedoc_1.DeclarationReflection) {
                    this.buildUrls(child, urls);
                }
            });
        }
        return urls;
    }
    buildUrls(reflection, urls) {
        const mapping = MarkdownTheme.getMapping(reflection);
        if (mapping) {
            if (!reflection.url || !MarkdownTheme.URL_PREFIX.test(reflection.url)) {
                const url = this.toUrl(mapping, reflection);
                urls.push(new typedoc_1.UrlMapping(url, reflection, mapping.template));
                reflection.url = url;
                reflection.hasOwnDocument = true;
            }
            for (const child of reflection.children || []) {
                if (mapping.isLeaf) {
                    this.applyAnchorUrl(child, reflection);
                }
                else {
                    this.buildUrls(child, urls);
                }
            }
        }
        else if (reflection.parent) {
            this.applyAnchorUrl(reflection, reflection.parent);
        }
        return urls;
    }
    toUrl(mapping, reflection) {
        return mapping.directory + '/' + this.getUrl(reflection) + this.fileExt;
    }
    getUrl(reflection, relative, separator = '.') {
        let url = reflection.getAlias();
        if (reflection.parent && reflection.parent !== relative && !(reflection.parent instanceof typedoc_1.ProjectReflection)) {
            url = this.getUrl(reflection.parent, relative, separator) + separator + url;
        }
        return url;
    }
    applyAnchorUrl(reflection, container) {
        if (!reflection.url || !MarkdownTheme.URL_PREFIX.test(reflection.url)) {
            const anchor = this.toAnchorRef(reflection);
            reflection.url = container.url + '#' + anchor;
            reflection.anchor = anchor;
            reflection.hasOwnDocument = false;
        }
        reflection.traverse((child) => {
            if (child instanceof typedoc_1.DeclarationReflection) {
                this.applyAnchorUrl(child, container);
            }
        });
    }
    toAnchorRef(reflection) {
        function parseAnchorRef(ref) {
            return ref.replace(/["\$]/g, '').replace(/ /g, '-');
        }
        let anchorPrefix = '';
        reflection.flags.forEach((flag) => (anchorPrefix += `${flag}-`));
        const prefixRef = parseAnchorRef(anchorPrefix);
        const reflectionRef = parseAnchorRef(reflection.name);
        const anchorRef = prefixRef + reflectionRef;
        return anchorRef.toLowerCase();
    }
    getEntryPoint(project) {
        const entryPoint = this.owner.entryPoint;
        if (entryPoint) {
            const reflection = project.getChildByName(entryPoint);
            if (reflection) {
                if (reflection instanceof typedoc_1.ContainerReflection) {
                    return reflection;
                }
                else {
                    this.application.logger.warn('The given entry point `%s` is not a container.', entryPoint);
                }
            }
            else {
                this.application.logger.warn('The entry point `%s` could not be found.', entryPoint);
            }
        }
        return project;
    }
    getNavigation(project) {
        function createNavigationGroup(name, url = null) {
            const navigationGroup = new typedoc_1.NavigationItem(name, url);
            navigationGroup.children = [];
            delete navigationGroup.cssClasses;
            delete navigationGroup.reflection;
            return navigationGroup;
        }
        function getNavigationGroup(reflection) {
            if (reflection.kind === typedoc_1.ReflectionKind.Namespace) {
                return namespacesNavigation;
            }
            if (reflection.kind === typedoc_1.ReflectionKind.Module) {
                return modulesNavigation;
            }
            if (reflection.kind === typedoc_1.ReflectionKind.Class) {
                return classesNavigation;
            }
            if (reflection.kind === typedoc_1.ReflectionKind.Enum) {
                return enumsNavigation;
            }
            if (reflection.kind === typedoc_1.ReflectionKind.Interface) {
                return interfacesNavigation;
            }
            return null;
        }
        function addNavigationItem(longTitle, reflection, parentNavigationItem, group) {
            let navigationGroup;
            if (group) {
                navigationGroup = group;
            }
            else {
                navigationGroup = getNavigationGroup(reflection);
            }
            let titlePrefix = '';
            if (longTitle && parentNavigationItem && parentNavigationItem.title) {
                titlePrefix = parentNavigationItem.title.replace(/\"/g, '') + '.';
            }
            const title = titlePrefix + reflection.name.replace(/\"/g, '');
            const url = reflection.url;
            const nav = new typedoc_1.NavigationItem(title, url, parentNavigationItem);
            nav.parent = parentNavigationItem;
            navigationGroup.children.push(nav);
            if (reflection.children) {
                reflection.children.forEach((reflectionChild) => {
                    if (reflectionChild.hasOwnDocument) {
                        addNavigationItem(longTitle, reflectionChild, nav, navigationGroup);
                    }
                });
            }
            delete nav.cssClasses;
            delete nav.reflection;
            return nav;
        }
        const isModules = this.application.options.getValue('mode') === 1;
        const isLongTitle = this.application.options.getValue('longTitle');
        const navigation = createNavigationGroup(project.name, this.indexName + this.fileExt);
        const externalModulesNavigation = createNavigationGroup('External Modules');
        const modulesNavigation = createNavigationGroup('Modules');
        const namespacesNavigation = createNavigationGroup('Namespaces');
        const classesNavigation = createNavigationGroup('Classes');
        const enumsNavigation = createNavigationGroup('Enums');
        const interfacesNavigation = createNavigationGroup('Interfaces');
        if (project.groups) {
            if (!isModules) {
                project.groups.forEach((group) => {
                    group.children.forEach((reflection) => {
                        if (reflection.hasOwnDocument) {
                            addNavigationItem(isLongTitle, reflection);
                        }
                    });
                });
            }
            if (isModules) {
                project.groups[0].children.forEach((module) => {
                    const moduleNavigation = addNavigationItem(isLongTitle, module);
                    if (module.children) {
                        module.children.forEach((reflection) => {
                            if (reflection.hasOwnDocument) {
                                addNavigationItem(isLongTitle, reflection, moduleNavigation);
                            }
                        });
                    }
                });
            }
        }
        if (externalModulesNavigation.children.length) {
            navigation.children.push(externalModulesNavigation);
        }
        if (modulesNavigation.children.length) {
            navigation.children.push(modulesNavigation);
        }
        if (classesNavigation.children.length) {
            navigation.children.push(classesNavigation);
        }
        if (enumsNavigation.children.length) {
            navigation.children.push(enumsNavigation);
        }
        if (interfacesNavigation.children.length) {
            navigation.children.push(interfacesNavigation);
        }
        return navigation;
    }
    getNavigationV3(project) {
        const entryPoint = this.getEntryPoint(project);
        const navigation = createNavigationItem(project.name);
        const hasSeperateGlobals = this.application.options.getValue('readme') !== 'none';
        navigation.children.push(createNavigationItem(hasSeperateGlobals ? 'README' : 'Globals', this.indexName + this.fileExt));
        if (hasSeperateGlobals) {
            navigation.children.push(createNavigationItem('Globals', 'globals.md'));
        }
        buildGroups(entryPoint.groups);
        navigation.children.sort(sortCallback);
        function buildGroups(groups, level = 0) {
            groups.forEach((reflectionGroup) => {
                if (reflectionGroup.allChildrenHaveOwnDocument()) {
                    let reflectionGroupItem = navigation.children.find((child) => child.title === reflectionGroup.title);
                    if (!reflectionGroupItem) {
                        reflectionGroupItem = createNavigationItem(reflectionGroup.title);
                        navigation.children.push(reflectionGroupItem);
                    }
                    reflectionGroup.children.forEach((reflectionGroupChild) => {
                        const reflectionGroupChildItem = createNavigationItem(reflectionGroupChild.name, reflectionGroupChild.url);
                        reflectionGroupItem.children.push(reflectionGroupChildItem);
                        const reflection = reflectionGroupChild;
                        if (reflection.groups) {
                            buildGroups(reflection.groups, level + 1);
                        }
                    });
                }
            });
        }
        function createNavigationItem(title, url) {
            const navigationItem = new typedoc_1.NavigationItem(title.replace(/\"/g, ''), url);
            navigationItem.children = [];
            delete navigationItem.cssClasses;
            delete navigationItem.reflection;
            delete navigationItem.isLabel;
            return navigationItem;
        }
        function sortCallback(a, b) {
            const weights = {
                Namespaces: 1,
                Enumerations: 2,
                Classes: 3,
                Interfaces: 4,
            };
            const aWeight = weights[a.title] || 0;
            const bWeight = weights[b.title] || 0;
            return aWeight - bWeight;
        }
        return navigation;
    }
    onPageEnd(page) {
        page.contents = page.contents ? MarkdownTheme.formatContents(page.contents) : '';
    }
    static getMapping(reflection) {
        return MarkdownTheme.MAPPINGS.find((mapping) => reflection.kindOf(mapping.kind));
    }
    static formatContents(contents) {
        return (contents
            .replace(/[\r\n]{3,}/g, '\n\n')
            .replace(/!spaces/g, '')
            .replace(/^\s+|\s+$/g, '') + '\n');
    }
}
exports.default = MarkdownTheme;
MarkdownTheme.MAPPINGS = [
    {
        kind: [typedoc_1.ReflectionKind.Class],
        isLeaf: false,
        directory: 'classes',
        template: 'reflection.hbs',
    },
    {
        kind: [typedoc_1.ReflectionKind.Interface],
        isLeaf: false,
        directory: 'interfaces',
        template: 'reflection.hbs',
    },
    {
        kind: [typedoc_1.ReflectionKind.Enum],
        isLeaf: false,
        directory: 'enums',
        template: 'reflection.hbs',
    },
    {
        kind: [typedoc_1.ReflectionKind.Namespace, typedoc_1.ReflectionKind.Module],
        isLeaf: false,
        directory: 'modules',
        template: 'reflection.hbs',
    },
];
MarkdownTheme.URL_PREFIX = /^(http|ftp)s?:\/\//;
MarkdownTheme.handlebars = Handlebars.create();
MarkdownTheme.isSingleFile = false;
