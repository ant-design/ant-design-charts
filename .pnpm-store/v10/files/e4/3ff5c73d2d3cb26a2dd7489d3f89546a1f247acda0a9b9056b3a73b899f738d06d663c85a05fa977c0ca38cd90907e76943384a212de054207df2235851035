export interface Issue {
    severity: string;
    stage: string;
    filePath: string;
    title: any;
    description?: any;
    detail?: any;
    source?: IssueSource;
    documentationLink: string;
    importTraces: any;
}
export interface IssueSource {
    source: Source;
    range?: IssueSourceRange;
}
export interface IssueSourceRange {
    start: SourcePos;
    end: SourcePos;
}
export interface Source {
    ident: string;
    content?: string;
}
export interface SourcePos {
    line: number;
    column: number;
}
export declare function formatIssue(issue: Issue, forceColor?: boolean): string;
export declare function handleIssues(issues: Issue[], throwErrors?: boolean, forceColor?: boolean): void;
