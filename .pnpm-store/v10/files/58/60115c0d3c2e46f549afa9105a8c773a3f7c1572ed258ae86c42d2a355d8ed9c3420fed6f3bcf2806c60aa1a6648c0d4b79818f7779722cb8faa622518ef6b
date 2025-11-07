import { RendererEvent } from 'typedoc/dist/lib/output/events';
import { Renderer } from 'typedoc/dist/lib/output/renderer';
import MarkdownTheme from '../../theme';
export default class GitbookTheme extends MarkdownTheme {
    constructor(renderer: Renderer, basePath: string);
    writeSummary(renderer: RendererEvent): void;
    getSummaryMarkdown(renderer: RendererEvent): string;
    allowedDirectoryListings(): string[];
}
