import {hopeTheme} from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
    hostname: "https://blog.sherry4869.com", // 当前网站部署到的域名
    author: {
        name: "MW",
        url: "https://blog.sherry4869.com",
    },
    logo: "/logo.svg", // 网站 Logo
    repo: "SherryMW/Blog", // 仓库配置，默认为 GitHub 同时也可以是一个完整的 URL
    repoDisplay: false, // 是否在导航栏内显示仓库链接入口，默认为 true
    docsDir: "src", // 文档在仓库中的目录
    navbar, // 导航栏
    sidebar, // 侧边栏
    pageInfo: ["Author", "Category", "Tag"], // 文章中顶部展示的相关标识信息
    breadcrumb: false, // 是否全局启用路径导航
    editLink: false, // 是否展示编辑此页
    // 博客相关
    blog: {
        avatar: "/avatar.jpg", // 头像
        description: "",
        intro: "", // 填写后点击头像或作者名称进入个人介绍页的界面地址
        medias: {
            Wechat: "https://img.sherry4869.com/blog/public/wechat.jpg",
            Steam: "https://steamcommunity.com/profiles/76561199424720757/"
        },
        timeline: "点点滴滴",// 时间轴顶部描述文字
        articleInfo: ["Author", "Date", "Category", "Tag"] // 博客主页列表中展示的文章相关标识信息
    },
    // 加密配置
    encrypt: {
        global: true,
        admin: "MW8888",
    },
    markdown: {
        tabs: true, // 选项卡
        tasklist: true, // 任务列表
        figure: true, // 图片描述
        component: true
    },
    // 在这里配置主题提供的插件
    plugins: {
        blog: true,
        // 评论插件配置
        comment: {
            provider: "Waline",
            serverURL: "https://waline.sherry4869.com",
        },
        slimsearch: true,
        components: {
            components: ["VPCard"]
        },
        icon: {
            assets: "fontawesome-with-brands",
        },
        // 版权信息插件配置
        copyright: {
            author: "MW",
            triggerLength: 300,
            global: true
        }
    },
});
