import type { RemarkPlugin } from "@astrojs/markdown-remark";
import { visit } from "unist-util-visit";
import { LATEST_JAVADOC } from "../versions";

export const plugin: RemarkPlugin = (options) => {
    return (tree) => {
        visit(tree, "link", (node) => {
            const match = node.url.match(/^jd::([^\s]+)$/);
            if (!match) return;
            const jd = match[1];

            const [classPath, method] = jd.split("#");
            const parts = classPath.split(".");

            const isClass = (part: string): boolean => {
                return part[0] === part[0].toUpperCase();
            }

            let startClassIndex: number = parts.findIndex((part) => isClass(part))
            const packageOnly = startClassIndex === -1;
            if (packageOnly) startClassIndex = parts.length;

            const packageName = parts.slice(0, startClassIndex).join("/")
            if (packageOnly) {
                node.url = `${LATEST_JAVADOC}/${packageName}/package-summary.html`
            } else {
                const className = parts.slice(startClassIndex).join(".")
                const methodName = method ? `#${method}` : "";
                node.url = `${LATEST_JAVADOC}/${packageName}/${className}.html${methodName}`
            }
        })
    }
}