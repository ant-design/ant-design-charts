export type StyledString = {
    type: "text";
    value: string;
} | {
    type: "code";
    value: string;
} | {
    type: "strong";
    value: string;
} | {
    type: "stack";
    value: StyledString[];
} | {
    type: "line";
    value: StyledString[];
};
export declare function renderStyledStringToErrorAnsi(string: StyledString): string;
