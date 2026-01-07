import type { IElement } from '../dom/interfaces';
export interface SceneGraphSelector {
    selectOne: <R extends IElement, T extends IElement>(query: string, root: R) => T | null;
    selectAll: <R extends IElement, T extends IElement>(query: string, root: R) => T[];
    is: <T extends IElement>(query: string, element: T) => boolean;
}
/**
 * support the following DOM API:
 * * getElementById
 * * getElementsByClassName
 * * getElementsByName
 * * getElementsByTag
 * * querySelector
 * * querySelectorAll
 */
export declare class DefaultSceneGraphSelector implements SceneGraphSelector {
    selectOne<R extends IElement, T extends IElement>(query: string, root: R): T | null;
    selectAll<R extends IElement, T extends IElement>(query: string, root: R): T[];
    is<T extends IElement>(query: string, node: T): boolean;
    private getIdOrClassname;
    private getAttribute;
    private attributeToString;
}
//# sourceMappingURL=SceneGraphSelector.d.ts.map