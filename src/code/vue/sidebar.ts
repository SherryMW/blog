import {arraySidebar} from "vuepress-theme-hope";

export const Vue = arraySidebar([
    {
        text: "深度指南",
        prefix: "guide/",
        children: [
            {
                text: "开始",
                children: ["introduction", "quick-start"]
            },
            {
                text: "基础",
                prefix: "essentials/",
                children: ["application", "template-syntax", "reactivity-fundamentals", "computed", "class-and-style", "event-handling", "forms", "watchers", "component-basics"]
            },
            {
                text: "深入组件",
                prefix: "components/",
                children: ["props", "attrs"]
            },
            {
                text: "应用规模化",
                prefix: "scaling-up/",
                children: ["sfc"]
            },
            {
                text: "TypeScript",
                prefix: "typescript/",
                children: ["composition-api"]
            },
            {
                text: "进阶主题",
                prefix: "extras/",
                children: ["reactivity-in-depth"]
            },
        ]
    },
    {
        text: "API",
        prefix: "api/",
        children: [
            {
                text: "全局API",
                children: ["application", "general"]
            },
            {
                text: "组合式API",
                children: ["composition-api-setup", "reactivity-core", "reactivity-advanced"]
            },
            {
                text: "内置内容",
                children: ["built-in-directives"]
            },
            {
                text: "单文件组件",
                children: ["sfc-script-setup"]
            }
        ]
    }
])