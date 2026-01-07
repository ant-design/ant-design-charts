import type { Project, OpenOptions, EmbedOptions } from './interfaces';
import type { VM } from './vm';
/**
 * Get a VM instance for an existing StackBlitz project iframe.
 */
export declare function connect(frameEl: HTMLIFrameElement): Promise<VM>;
/**
 * Open an existing StackBlitz project in a new tab (or in the current window).
 */
export declare function openProject(project: Project, options?: OpenOptions): void;
/**
 * Open an existing StackBlitz project in a new tab (or in the current window).
 */
export declare function openProjectId(projectId: string, options?: OpenOptions): void;
/**
 * Open a project from Github and open it in a new tab (or in the current window).
 *
 * Example usage:
 *
 *     sdk.openGithubProject('some/repository');
 *     sdk.openGithubProject('some/repository/tree/some-branch');
 */
export declare function openGithubProject(repoSlug: string, options?: OpenOptions): void;
/**
 * Create a new project and embed it on the current page.
 *
 * Returns a promise resolving to a VM instance.
 */
export declare function embedProject(elementOrId: string | HTMLElement, project: Project, options?: EmbedOptions): Promise<VM>;
/**
 * Embeds an existing StackBlitz project on the current page.
 *
 * Returns a promise resolving to a VM instance.
 */
export declare function embedProjectId(elementOrId: string | HTMLElement, projectId: string, options?: EmbedOptions): Promise<VM>;
/**
 * Embeds a project from Github on the current page.
 *
 * Returns a promise resolving to a VM instance.
 */
export declare function embedGithubProject(elementOrId: string | HTMLElement, repoSlug: string, options?: EmbedOptions): Promise<VM>;
