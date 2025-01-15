import {arraySidebar} from "vuepress-theme-hope";

export const CollectionSidebar = arraySidebar([
    {
        text: "影视",
        prefix: "movies/",
        collapsible: true,
        children: [
            {
                text: "奥斯卡",
                prefix: "oscars/",
                collapsible: true,
                children: ["1935", "1934", "1933", "1932", "1931", "1930", "1929"],
            }
        ]
    },
])