export declare const name = "git";
export declare const detect: (directory: string) => string | null;
export declare const getSinceRevision: (directory: string, { staged, branch }: {
    staged?: boolean | undefined;
    branch?: string | undefined;
}) => string | null;
export declare const getChangedFiles: (directory: string, revision: string | null, staged?: boolean | undefined) => string[];
export declare const getUnstagedChangedFiles: (directory: string) => string[];
export declare const stageFile: (directory: string, file: string) => void;
