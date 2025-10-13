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
                children: ["application", "template-syntax", "reactivity-fundamentals"]
            },
            {
                text: "深入组件",
                prefix: "components/",
                children: ["props"]
            },
            {
                text: "应用规模化",
                prefix: "scaling-up/",
                children: ["sfc"]
            },

        ]
    },
    {
        text: "API",
        prefix: "api/",
        children: [
            {
                text: "全局API",
                children: ["application"]
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