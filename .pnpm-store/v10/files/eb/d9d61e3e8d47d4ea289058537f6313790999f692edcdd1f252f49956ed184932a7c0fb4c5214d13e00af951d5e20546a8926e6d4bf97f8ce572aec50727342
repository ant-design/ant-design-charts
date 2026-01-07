import { ContextAwareRendererComponent } from 'typedoc/dist/lib/output/components';
import { PageEvent } from 'typedoc/dist/lib/output/events';
export declare class FrontMatterComponentV3 extends ContextAwareRendererComponent {
    initialize(): void;
    onPageEnd(page: PageEvent): void;
    getYamlString(yamlItems: {
        [key: string]: string | number | boolean;
    }): string;
    getYamlItems(page: PageEvent): {
        id: string;
        title: any;
    };
    getDefaultValues(page: PageEvent): {
        id: string;
        title: any;
    };
    getId(page: PageEvent): string;
    getTitle(page: PageEvent): any;
    escapeYAMLString(str: string): string;
}
