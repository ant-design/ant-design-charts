declare const _default: (directory: string) => {
    name: "git";
    detect: (directory: string) => string | null;
    getSinceRevision: (directory: string, { staged, branch }: {
        staged?: boolean | undefined;
        branch?: string | undefined;
    }) => string | null;
    getChangedFiles: (directory: string, revision: string | null, staged?: boolean | undefined) => string[];
    getUnstagedChangedFiles: (directory: string) => string[];
    stageFile: (directory: string, file: string) => void;
    rootDirectory: string;
} | {
    name: "hg";
    detect: (directory: string) => string | undefined;
    getSinceRevision: (directory: string, { branch }: {
        branch?: string | undefined;
    }) => string;
    getChangedFiles: (directory: string, revision: string | null, _staged?: boolean | undefined) => string[];
    getUnstagedChangedFiles: () => never[];
    stageFile: (directory: string, file: string) => void;
    rootDirectory: string;
} | undefined;
export default _default;
