import { RendererEvent } from 'typedoc/dist/lib/output/events';
import { Renderer } from 'typedoc/dist/lib/output/renderer';
import MarkdownTheme from '../../theme';
export default class VuePressTheme extends MarkdownTheme {
    constructor(renderer: Renderer, basePath: string);
    onRendererEnd(renderer: RendererEvent): void;
    writeSideBar(renderer: RendererEvent, root: string): void;
    getNavObject(renderer: RendererEvent, docsRoot?: string): any[];
    findRoot(outputDirectory: string): any;
}
