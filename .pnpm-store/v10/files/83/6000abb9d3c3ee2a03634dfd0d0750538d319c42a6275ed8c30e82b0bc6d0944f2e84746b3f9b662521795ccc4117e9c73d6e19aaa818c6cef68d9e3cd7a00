import { ProjectReflection, Reflection } from 'typedoc';
import { ContextAwareRendererComponent } from 'typedoc/dist/lib/output/components';
import { RendererEvent } from 'typedoc/dist/lib/output/events';
export declare class ContextAwareHelpersComponent extends ContextAwareRendererComponent {
    private includes?;
    private mediaDirectory?;
    private includePattern;
    private mediaPattern;
    private brackets;
    private inlineTag;
    private listInvalidSymbolLinks;
    private warnings;
    private publicPath;
    initialize(): void;
    breadcrumb(model: Reflection, project: ProjectReflection, md: string[]): string;
    parseComments(text: string): string;
    private replaceBrackets;
    private replaceInlineTags;
    private buildLink;
    onEndRenderer(event: RendererEvent): void;
}
