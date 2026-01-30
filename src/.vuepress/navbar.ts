import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: "编程",
        icon: "code",
        prefix: "/coding/",
        children: [
            // {
            //     text: "教程",
            //     icon: "signs-post",
            //     prefix: "cookbook/",
            //     children: ["markdown/", "vuepress/"],
            // },
            {
                text: "Java",
                prefix: "java/",
                children: [
                    {
                        text: "基础",
                        link: "se/"
                    }
                ],
            },
            {
                text: "AI",
                prefix: "ai/",
                children: ["coze"],
            },
        ],
    },
    "/life/",
    "/collection/",
    "/friends",
    "/intro"
]);