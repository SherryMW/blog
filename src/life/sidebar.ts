import {arraySidebar} from "vuepress-theme-hope";

export const LifeSidebar = arraySidebar([
    {
        text: "健康",
        prefix: "healthy/",
        collapsible: true,
        children: [
            {
                text: "健身",
                prefix: "gym/",
                collapsible: true,
                children: [
                    "2025", "2024", "2022"
                ]
            },
            "trail-running.md"
            // "sex.md"
        ]
    },
    // {
    //     text: "美食",
    //     prefix: "food/china/guangdong/",
    //     collapsible: true,
    //     children: [
    //         {
    //             text: "广州",
    //             prefix: "guangzhou/",
    //             collapsible: true,
    //             children: [
    //                 {
    //                     text: "越秀",
    //                     prefix: "yx/",
    //                     collapsible: true,
    //                     children: "structure"
    //                 },
    //                 {
    //                     text: "天河",
    //                     prefix: "th/",
    //                     collapsible: true,
    //                     children: "structure"
    //                 },
    //                 {
    //                     text: "白云",
    //                     prefix: "by/",
    //                     collapsible: true,
    //                     children: "structure"
    //                 },
    //                 {
    //                     text: "荔湾",
    //                     prefix: "lw/",
    //                     collapsible: true,
    //                     children: "structure"
    //                 },
    //                 {
    //                     text: "海珠",
    //                     prefix: "hz/",
    //                     collapsible: true,
    //                     children: "structure"
    //                 },
    //                 {
    //                     text: "番禺",
    //                     prefix: "py/",
    //                     collapsible: true,
    //                     children: "structure"
    //                 },
    //                 {
    //                     text: "黄埔",
    //                     prefix: "hp/",
    //                     collapsible: true,
    //                     children: "structure"
    //                 }
    //             ]
    //         }
    //     ]
    // }
])