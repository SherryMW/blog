import {navbar} from "vuepress-theme-hope";

export default navbar([
    {
        text: "主页",
        icon: "home",
        link: "/",
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