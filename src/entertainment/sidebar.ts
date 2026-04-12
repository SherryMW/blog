import {arraySidebar} from "vuepress-theme-hope";

export const Entertainment = arraySidebar([
    {
        text: "影视",
        prefix: "films/",
        collapsible: true,
        children: [
            {
                text: "中国大陆",
                prefix: "chinese-mainland/",
                collapsible: true,
                children: [
                    {
                        text: "电影",
                        prefix: "movies/",
                        collapsible: true,
                        children: "structure"
                    },
                    {
                        text: "剧集",
                        prefix: "tv/",
                        collapsible: true,
                        children: "structure"
                    },
                    "animations"
                ]
            },
            {
                text: "中国香港",
                prefix: "hongkong/",
                collapsible: true,
                children: [
                    {
                        text: "电影",
                        prefix: "movies/",
                        collapsible: true,
                        children: "structure"
                    },
                    {
                        text: "剧集",
                        prefix: "tv/",
                        collapsible: true,
                        children: "structure"
                    },
                ]
            },
            {
                text: "中国台湾",
                prefix: "taiwan/",
                collapsible: true,
                children: [
                    {
                        text: "电影",
                        prefix: "movies/",
                        collapsible: true,
                        children: "structure"
                    },
                    {
                        text: "剧集",
                        prefix: "tv/",
                        collapsible: true,
                        children: "structure"
                    },
                ]
            },
            {
                text: "美国",
                prefix: "america/",
                collapsible: true,
                children: [
                    {
                        text: "电影",
                        prefix: "movies/",
                        collapsible: true,
                        children: "structure"
                    },
                    {
                        text: "剧集",
                        prefix: "tv/",
                        collapsible: true,
                        children: "structure"
                    },
                ]
            },
            {
                text: "韩国",
                prefix: "korea/",
                collapsible: true,
                children: [
                    {
                        text: "电影",
                        prefix: "movies/",
                        collapsible: true,
                        children: "structure"
                    },
                    {
                        text: "剧集",
                        prefix: "tv/",
                        collapsible: true,
                        children: "structure"
                    },
                ]
            },
            {
                text: "日本",
                prefix: "japan/",
                collapsible: true,
                children: [
                    {
                        text: "电影",
                        prefix: "movies/",
                        collapsible: true,
                        children: "structure"
                    }
                ]
            },
            {
                text: "英国",
                prefix: "britain/",
                collapsible: true,
                children: [
                    {
                        text: "电影",
                        prefix: "movies/",
                        collapsible: true,
                        children: "structure"
                    },
                    {
                        text: "剧集",
                        prefix: "tv/",
                        collapsible: true,
                        children: "structure"
                    },
                ]
            },
            {
                text: "法国",
                prefix: "france/",
                collapsible: true,
                children: [
                    {
                        text: "电影",
                        prefix: "movies/",
                        collapsible: true,
                        children: "structure"
                    }
                ]
            },
            {
                text: "意大利",
                prefix: "italy/",
                collapsible: true,
                children: [
                    {
                        text: "电影",
                        prefix: "movies/",
                        collapsible: true,
                        children: "structure"
                    },
                    {
                        text: "剧集",
                        prefix: "tv/",
                        collapsible: true,
                        children: "structure"
                    }
                ]
            },
            {
                text: "加拿大",
                prefix: "canada/",
                collapsible: true,
                children: [
                    {
                        text: "电影",
                        prefix: "movies/",
                        collapsible: true,
                        children: "structure"
                    }
                ]
            },
            {
                text: "澳大利亚",
                prefix: "australia/",
                collapsible: true,
                children: [
                    {
                        text: "电影",
                        prefix: "movies/",
                        collapsible: true,
                        children: "structure"
                    }
                ]
            },
            {
                text: "丹麦",
                prefix: "denmark/",
                collapsible: true,
                children: [
                    {
                        text: "电影",
                        prefix: "movies/",
                        collapsible: true,
                        children: "structure"
                    }
                ]
            },
            {
                text: "印度",
                prefix: "india/",
                collapsible: true,
                children: [
                    {
                        text: "电影",
                        prefix: "movies/",
                        collapsible: true,
                        children: "structure"
                    }
                ]
            },
            {
                text: "泰国",
                prefix: "thailand/",
                collapsible: true,
                children: [
                    {
                        text: "电影",
                        prefix: "movies/",
                        collapsible: true,
                        children: "structure"
                    }
                ]
            },
            {
                text: "荣誉奖项",
                prefix: "awards/",
                collapsible: true,
                children: [
                    {
                        text: "奥斯卡金像奖",
                        prefix: "oscars/",
                        collapsible: true,
                        children: "structure"
                    },
                    {
                        text: "韩国青龙电影奖",
                        prefix: "blue-dragon/",
                        collapsible: true,
                        children: "structure"
                    },
                    {
                        text: "香港电影金像奖",
                        prefix: "hkfaa/",
                        collapsible: true,
                        children: "structure"
                    }
                ]
            },
            "auditorium",
            "resource"
        ]
    },
    {
        text: "游戏",
        prefix: "game/",
        collapsible: true,
        children: "structure"
    },
    {
        text: "书籍",
        prefix: "book/",
        collapsible: true,
        children: "structure"
    },
    {
        text: "娱乐场",
        prefix: "gambling/",
        collapsible: true,
        children: "structure"
    }
])