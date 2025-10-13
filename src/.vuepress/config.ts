import {defineUserConfig} from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
    base: "/",
    lang: "zh-CN",
    title: "MW Blog",
    description: "MW Blog",
    head: [
    ["meta", {name: "keywords", content: "Blog,MW,Sherry,Sherry4869"}],
    ["script", {}, `
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement('script');
        hm.src = 'https://hm.baidu.com/hm.js?f9bafdab6b8a32a696dad5540cffcde2';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(hm, s);
    })();`]
    ],
    theme
});
