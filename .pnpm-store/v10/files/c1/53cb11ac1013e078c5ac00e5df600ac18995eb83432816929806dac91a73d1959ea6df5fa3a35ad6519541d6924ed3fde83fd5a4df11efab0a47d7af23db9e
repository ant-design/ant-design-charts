"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlPlugin = void 0;
const domparser_rs_1 = require("domparser-rs");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class HtmlPlugin {
    constructor(config) {
        this.config = config;
    }
    async generate(outputDir, assets, globalPublicPath) {
        const templatePath = this.config.template
            ? path_1.default.resolve(process.cwd(), this.config.template)
            : undefined;
        const publicPath = globalPublicPath || "";
        let htmlContent = "";
        if (this.config.templateContent) {
            htmlContent = this.config.templateContent;
        }
        else if (templatePath && fs_1.default.existsSync(templatePath)) {
            htmlContent = fs_1.default.readFileSync(templatePath, "utf-8");
        }
        else {
            htmlContent = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>${this.config.title || "Utoo App"}</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;
        }
        const parser = new domparser_rs_1.DOMParser();
        const doc = parser.parseFromString(htmlContent, "text/html");
        if (this.config.title) {
            const title = doc.querySelector("title");
            if (title) {
                title.textContent = this.config.title;
            }
            else {
                const head = doc.querySelector("head");
                if (head) {
                    const titleNode = doc.createElement("title");
                    titleNode.textContent = this.config.title;
                    head.appendChild(titleNode);
                }
            }
        }
        // Inject meta
        if (this.config.meta) {
            const head = doc.querySelector("head");
            if (head) {
                Object.entries(this.config.meta).forEach(([name, value]) => {
                    const meta = doc.createElement("meta");
                    if (typeof value === "string") {
                        meta.setAttribute("name", name);
                        meta.setAttribute("content", value);
                    }
                    else {
                        Object.entries(value).forEach(([k, v]) => {
                            meta.setAttribute(k, v);
                        });
                    }
                    head.appendChild(meta);
                });
            }
        }
        const head = doc.querySelector("head");
        const body = doc.querySelector("body");
        // Inject CSS
        assets.css.forEach((cssFile) => {
            const link = doc.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", publicPath
                ? publicPath.endsWith("/")
                    ? publicPath + cssFile
                    : publicPath + "/" + cssFile
                : cssFile);
            if (head)
                head.appendChild(link);
        });
        // Inject JS
        assets.js.forEach((jsFile) => {
            const script = doc.createElement("script");
            script.setAttribute("src", publicPath
                ? publicPath.endsWith("/")
                    ? publicPath + jsFile
                    : publicPath + "/" + jsFile
                : jsFile);
            if (this.config.scriptLoading === "defer") {
                script.setAttribute("defer", "");
            }
            else if (this.config.scriptLoading === "module") {
                script.setAttribute("type", "module");
            }
            if (this.config.inject === "head" && head) {
                head.appendChild(script);
            }
            else if (body) {
                body.appendChild(script);
            }
            else if (head) {
                head.appendChild(script); // Fallback
            }
        });
        const finalHtml = doc.outerHTML;
        const filename = this.config.filename || "index.html";
        fs_1.default.writeFileSync(path_1.default.join(outputDir, filename), finalHtml);
    }
}
exports.HtmlPlugin = HtmlPlugin;
