import { codeFrameColumns } from "@babel/code-frame";
import { renderStyledStringToErrorAnsi } from "./styledString";
export function formatIssue(issue, forceColor = true) {
    const { filePath, title, description, source } = issue;
    let { documentationLink } = issue;
    let formattedTitle = renderStyledStringToErrorAnsi(title).replace(/\n/g, "\n    ");
    let formattedFilePath = filePath
        .replace("[project]/", "./")
        .replaceAll("/./", "/")
        .replace("\\\\?\\", "");
    let message = "";
    if (source && source.range) {
        const { start } = source.range;
        message = `${formattedFilePath}:${start.line + 1}:${start.column + 1}\n${formattedTitle}`;
    }
    else if (formattedFilePath) {
        message = `${formattedFilePath}\n${formattedTitle}`;
    }
    else {
        message = formattedTitle;
    }
    message += "\n";
    if ((source === null || source === void 0 ? void 0 : source.range) && source.source.content) {
        const { start, end } = source.range;
        message +=
            codeFrameColumns(source.source.content, {
                start: {
                    line: start.line + 1,
                    column: start.column + 1,
                },
                end: {
                    line: end.line + 1,
                    column: end.column + 1,
                },
            }, 
            // forceColor display is noise on browser
            { forceColor }).trim() + "\n\n";
    }
    if (description) {
        message += renderStyledStringToErrorAnsi(description) + "\n\n";
    }
    // TODO: make it possible to enable this for debugging, but not in tests.
    // if (detail) {
    //   message += renderStyledStringToErrorAnsi(detail) + '\n\n'
    // }
    // TODO: Include a trace from the issue.
    if (documentationLink) {
        message += documentationLink + "\n\n";
    }
    return message;
}
export function handleIssues(issues, throwErrors = true, forceColor = true) {
    const topLevelErrors = new Set();
    const topLevelWarnings = new Set();
    for (const issue of issues) {
        if (issue.severity === "error" || issue.severity === "fatal") {
            topLevelErrors.add(formatIssue(issue, forceColor));
        }
        else if (isRelevantWarning(issue)) {
            topLevelWarnings.add(formatIssue(issue, forceColor));
        }
    }
    if (topLevelWarnings.size !== 0) {
        const warnMsg = `Utoopack build encountered ${topLevelWarnings.size} warnings:\n${[...topLevelWarnings].join("\n")}`;
        console.warn(warnMsg);
    }
    if (topLevelErrors.size !== 0) {
        const errMsg = `Utoopack build failed with ${topLevelErrors.size} errors:\n${[...topLevelErrors].join("\n")}`;
        if (throwErrors) {
            throw new Error(errMsg);
        }
        else {
            console.error(errMsg);
        }
    }
}
function isRelevantWarning(issue) {
    return issue.severity === "warning" && !isNodeModulesIssue(issue);
}
function isNodeModulesIssue(issue) {
    if (issue.severity === "warning" && issue.stage === "config") {
        // Override for the externalize issue
        // `Package foo (serverExternalPackages or default list) can't be external`
        if (renderStyledStringToErrorAnsi(issue.title).includes("can't be external")) {
            return false;
        }
    }
    return (issue.severity === "warning" &&
        (issue.filePath.match(/^(?:.*[\\/])?node_modules(?:[\\/].*)?$/) !== null ||
            issue.filePath.includes("@utoo/pack")));
}
