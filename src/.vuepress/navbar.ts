import {navbar} from "vuepress-theme-hope";

export default navbar([
    {
        text: "主页",
        icon: "house",
        link: "/",
    },
    {
        text: "生活",
        icon: "camera",
        link: "/life/"
    },
    {
        text: "收藏",
        icon: "star",
        link: "/collection/"
    },
    {
        text: "友情链接",
        icon: "comments",
        link: "/friends"
    },
    {
        text: "关于",
        icon: "user",
        link: "/intro"
    }
]);