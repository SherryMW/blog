import {arraySidebar} from "vuepress-theme-hope";

export const Life = arraySidebar([
    {
        text: "睡眠",
        prefix: "sleep/",
        collapsible: true,
        children: "structure"
    },
    {
        text: "运动",
        prefix: "fitness/",
        collapsible: true,
        children: [
            {
                text: "跑步",
                prefix: "running/",
                collapsible: true,
                children: ["trail", "road", "2025", "2024"]
            }
        ]
    },
    {
        text: "养护",
        prefix: "wellness/",
        collapsible: true,
        children: [
            {
                text: "SPA",
                prefix: "spa/china/",
                collapsible: true,
                children: [
                    {
                        text: "广州",
                        prefix: "guangdong/guangzhou/",
                        collapsible: false,
                        children: [
                            {
                                text: "越秀",
                                prefix: "yx/",
                                collapsible: true,
                                children: "structure"
                            },
                            {
                                text: "天河",
                                prefix: "th/",
                                collapsible: true,
                                children: "structure"
                            },
                            {
                                text: "荔湾",
                                prefix: "lw/",
                                collapsible: true,
                                children: "structure"
                            },
                            {
                                text: "白云",
                                prefix: "by/",
                                collapsible: true,
                                children: "structure"
                            }
                        ]
                    },
                    {
                        text: "澳门",
                        prefix: "macao/",
                        collapsible: false,
                        children: [
                            {
                                text: "澳门半岛",
                                prefix: "ambd/",
                                collapsible: true,
                                children: "structure"
                            },
                        ]
                    }
                ]
            },
            {
                text: "美容",
                prefix: "facial/china/",
                collapsible: true,
                children: [
                    {
                        text: "广州",
                        prefix: "guangdong/guangzhou/",
                        collapsible: false,
                        children: [
                            {
                                text: "越秀",
                                prefix: "yx/",
                                collapsible: true,
                                children: "structure"
                            }
                        ]
                    },
                    {
                        text: "澳门",
                        prefix: "macao/",
                        collapsible: false,
                        children: [
                            {
                                text: "澳门半岛",
                                prefix: "ambd/",
                                collapsible: true,
                                children: "structure"
                            },
                        ]
                    }
                ]
            },
            {
                text: "口腔",
                prefix: "oral/china/",
                collapsible: true,
                children: [
                    {
                        text: "广州",
                        prefix: "guangdong/guangzhou/",
                        collapsible: false,
                        children: [
                            {
                                text: "天河",
                                prefix: "th/",
                                collapsible: true,
                                children: "structure"
                            }
                        ]
                    }
                ]
            },
            {
                text: "理发",
                prefix: "haircut/china/",
                collapsible: true,
                children: [
                    {
                        text: "广州",
                        prefix: "guangdong/guangzhou/",
                        collapsible: false,
                        children: [
                            {
                                text: "越秀",
                                prefix: "yx/",
                                collapsible: true,
                                children: "structure"
                            },
                            {
                                text: "天河",
                                prefix: "th/",
                                collapsible: true,
                                children: "structure"
                            },
                            {
                                text: "荔湾",
                                prefix: "lw/",
                                collapsible: true,
                                children: "structure"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "medication"
    // {
    //     text: "美食",
    //     prefix: "food/china/",
    //     collapsible: true,
    //     children: [
    //         {
    //             text: "广东",
    //             prefix: "guangdong/",
    //             collapsible: true,
    //             children: [
    //                 {
    //                     text: "广州",
    //                     prefix: "guangzhou/",
    //                     collapsible: true,
    //                     children: [
    //                         {
    //                             text: "越秀",
    //                             prefix: "yx/",
    //                             collapsible: true,
    //                             children: "structure"
    //                         },
    //                         {
    //                             text: "天河",
    //                             prefix: "th/",
    //                             collapsible: true,
    //                             children: "structure"
    //                         },
    //                         {
    //                             text: "白云",
    //                             prefix: "by/",
    //                             collapsible: true,
    //                             children: "structure"
    //                         },
    //                         {
    //                             text: "荔湾",
    //                             prefix: "lw/",
    //                             collapsible: true,
    //                             children: "structure"
    //                         },
    //                         {
    //                             text: "海珠",
    //                             prefix: "hz/",
    //                             collapsible: true,
    //                             children: "structure"
    //                         },
    //                         {
    //                             text: "番禺",
    //                             prefix: "py/",
    //                             collapsible: true,
    //                             children: "structure"
    //                         },
    //                         {
    //                             text: "黄埔",
    //                             prefix: "hp/",
    //                             collapsible: true,
    //                             children: "structure"
    //                         },
    //                         {
    //                             text: "从化",
    //                             prefix: "ch/",
    //                             collapsible: true,
    //                             children: "structure"
    //                         },
    //                         "bread-dessert.md",
    //                         "drink.md"
    //                     ]
    //                 },
    //                 {
    //                     text: "深圳",
    //                     prefix: "shenzhen/",
    //                     collapsible: true,
    //                     children: "structure"
    //                 },
    //                 {
    //                     text: "佛山",
    //                     prefix: "foshan/",
    //                     collapsible: true,
    //                     children: [
    //                         {
    //                             text: "禅城",
    //                             prefix: "cc/",
    //                             collapsible: true,
    //                             children: "structure"
    //                         },
    //                     ]
    //                 }
    //             ]
    //         },
    //         {
    //             text: "澳门",
    //             prefix: "macao/",
    //             collapsible: true,
    //             children: [
    //                 {
    //                     text: "澳门半岛",
    //                     prefix: "ambd/",
    //                     collapsible: true,
    //                     children: "structure"
    //                 },
    //                 {
    //                     text: "氹仔岛",
    //                     prefix: "dzd/",
    //                     collapsible: true,
    //                     children: "structure"
    //                 }
    //             ]
    //         }
    //     ]
    // }
])