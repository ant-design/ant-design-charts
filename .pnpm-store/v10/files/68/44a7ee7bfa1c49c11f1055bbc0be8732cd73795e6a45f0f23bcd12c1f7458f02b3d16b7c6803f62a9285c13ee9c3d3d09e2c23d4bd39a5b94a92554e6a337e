import { RendererEvent } from 'typedoc/dist/lib/output/events';
import { Renderer } from 'typedoc/dist/lib/output/renderer';
import MarkdownTheme from '../../theme';
export default class Docusaurus2Theme extends MarkdownTheme {
    sidebarName: string;
    constructor(renderer: Renderer, basePath: string);
    onRendererEnd(renderer: RendererEvent): void;
    writeSideBar(renderer: RendererEvent, docusarusRoot: string): void;
    getNavObject(renderer: RendererEvent, docsRoot: string): {};
    findDocusaurus2Root(outputDirectory: string): any;
}
