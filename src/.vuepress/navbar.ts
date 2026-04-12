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
                link: "java/"
            },
            {
                text: "AI",
                link: "ai/",
            },
        ],
    },
    "/life/",
    "/entertainment/",
    // "/info/",
    "/friends",
    "/intro"
]);