import * as Handlebars from 'handlebars';
import { ContainerReflection, DeclarationReflection, NavigationItem, ProjectReflection, Reflection, Renderer, UrlMapping } from 'typedoc';
import { Theme } from 'typedoc/dist/lib/output/theme';
import { TemplateMapping } from 'typedoc/dist/lib/output/themes/DefaultTheme';
export default class MarkdownTheme extends Theme {
    static MAPPINGS: TemplateMapping[];
    static URL_PREFIX: RegExp;
    static handlebars: typeof Handlebars;
    static isSingleFile: boolean;
    indexName: string;
    fileExt: string;
    constructor(renderer: Renderer, basePath: string);
    isOutputDirectory(outputDirectory: string): boolean;
    allowedDirectoryListings(): string[];
    getUrls(project: ProjectReflection): UrlMapping[];
    buildUrls(reflection: DeclarationReflection, urls: UrlMapping[]): UrlMapping[];
    toUrl(mapping: TemplateMapping, reflection: DeclarationReflection): string;
    getUrl(reflection: Reflection, relative?: Reflection, separator?: string): string;
    applyAnchorUrl(reflection: Reflection, container: Reflection): void;
    toAnchorRef(reflection: Reflection): string;
    getEntryPoint(project: ProjectReflection): ContainerReflection;
    getNavigation(project: ProjectReflection): NavigationItem;
    getNavigationV3(project: ProjectReflection): NavigationItem;
    private onPageEnd;
    static getMapping(reflection: DeclarationReflection): TemplateMapping | undefined;
    static formatContents(contents: string): string;
}
