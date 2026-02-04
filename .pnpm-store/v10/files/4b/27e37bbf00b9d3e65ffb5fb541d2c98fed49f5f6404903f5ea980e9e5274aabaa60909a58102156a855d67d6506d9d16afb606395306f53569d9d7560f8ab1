import { NavigationItem } from 'typedoc';
import { ContextAwareRendererComponent } from 'typedoc/dist/lib/output/components';
import { PageEvent } from 'typedoc/dist/lib/output/events';
export declare class FrontMatterComponent extends ContextAwareRendererComponent {
    initialize(): void;
    onPageEnd(page: PageEvent): void;
    getYamlString(page: PageEvent): string;
    getId(page: PageEvent): string;
    getTitle(page: PageEvent): any;
    getLabel(page: PageEvent): string;
    escapeYAMLString(str: string): string;
    getProjectName(page: PageEvent): any;
    getTitleFromNavigation(page: PageEvent, url: string): string;
    findNavigationItem(navigation: NavigationItem[], url: any, item: NavigationItem): NavigationItem;
    stripExt(url: string): string;
}
