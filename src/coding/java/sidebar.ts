import {arraySidebar} from "vuepress-theme-hope";

export const Java = arraySidebar([
    {
        text: "JavaSE",
        prefix: "se/",
        collapsible: true,
        children: ["generics", "lambda", "optional"]
    }
])