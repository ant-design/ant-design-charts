import type { EmbedOptions, OpenOptions } from './interfaces';
declare type Route = '/run' | `/edit/${string}` | `/github/${string}` | `/fork/${string}`;
/**
 * Pseudo-random id string for internal accounting.
 * 8 characters long, and collisions around 1 per million.
 */
export declare function genID(): string;
export declare function openUrl(route: Route, options?: OpenOptions): string;
export declare function embedUrl(route: Route, options?: EmbedOptions): string;
export declare function replaceAndEmbed(target: HTMLElement, frame: HTMLIFrameElement, options?: EmbedOptions): void;
export declare function findElement(elementOrId: string | HTMLElement): HTMLElement;
export declare function openTarget(options?: OpenOptions): "_self" | "_blank";
export {};
