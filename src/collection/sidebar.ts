import {arraySidebar} from "vuepress-theme-hope";

export const Collection = arraySidebar([
    {
        text: "影视",
        prefix: "movies/",
        collapsible: true,
        children: [
            {
                text: "中国大陆",
                prefix: "chinese-mainland/",
                collapsible: true,
                children: ["movie", "tv", "cartoon"]
            },
        ]
    },
    {
        text: "阅读",
        prefix: "read/",
        collapsible: true,
        children: []
    }
    // {
    //     text: "影视",
    //     prefix: "movies/",
    //     collapsible: true,
    //     children: [
    //         {
    //             text: "回忆",
    //             prefix: "recall/",
    //             collapsible: true,
    //             children: [
    //                 {
    //                     text: "中国大陆",
    //                     prefix: "chinese-mainland/",
    //                     collapsible: true,
    //                     children: ["movie", "tv", "cartoon"]
    //                 },
    //                 {
    //                     text: "中国香港",
    //                     prefix: "hongkong/",
    //                     collapsible: true,
    //                     children: ["movie", "tv"]
    //                 },
    //                 {
    //                     text: "中国台湾",
    //                     prefix: "chinese-taiwan/",
    //                     collapsible: true,
    //                     children: ["movie", "tv"]
    //                 },
    //                 {
    //                     text: "美国",
    //                     prefix: "america/",
    //                     collapsible: true,
    //                     children: ["movie", "tv", "cartoon"]
    //                 },
    //                 {
    //                     text: "韩国",
    //                     prefix: "korea/",
    //                     collapsible: true,
    //                     children: ["movie", "tv"]
    //                 },
    //                 {
    //                     text: "日本",
    //                     prefix: "japan/",
    //                     collapsible: true,
    //                     children: ["movie", "tv", "cartoon"]
    //                 },
    //                 {
    //                     text: "英国",
    //                     prefix: "britain/",
    //                     collapsible: true,
    //                     children: ["movie", "tv"]
    //                 },
    //                 {
    //                     text: "西班牙",
    //                     prefix: "spain/",
    //                     collapsible: true,
    //                     children: ["movie", "tv"]
    //                 },
    //                 {
    //                     text: "俄国",
    //                     prefix: "russia/",
    //                     collapsible: true,
    //                     children: ["movie", "tv"]
    //                 },
    //                 {
    //                     text: "德国",
    //                     prefix: "germany/",
    //                     collapsible: true,
    //                     children: ["movie", "tv"]
    //                 },
    //                 "india", "italy", "thailand", "france", "denmark", "australia"
    //             ]
    //         },
    //         {
    //             text: "奥斯卡金像奖",
    //             prefix: "oscars/",
    //             collapsible: true,
    //             children: [
    //                 "2025", "2024", "2023", "2022", "2021", "2020",
    //                 "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010",
    //                 "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000",
    //                 "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991", "1990",
    //                 "1989", "1988", "1987", "1986", "1985", "1984", "1983", "1982", "1981", "1980",
    //                 "1979", "1978", "1977", "1976", "1975", "1974", "1973", "1972", "1971", "1970",
    //                 "1969", "1968", "1967", "1966", "1965", "1964", "1963", "1962", "1961", "1960",
    //                 "1959", "1958", "1957", "1956", "1955", "1954", "1953", "1952", "1951", "1950",
    //                 "1949", "1948", "1947", "1946", "1945", "1944", "1943", "1942", "1941", "1940",
    //                 "1939", "1938", "1937", "1936", "1935", "1934", "1933", "1932", "1931", "1930",
    //                 "1929"],
    //         },
    //         {
    //             text: "韩国青龙电影奖",
    //             prefix: "blue-dragon/",
    //             collapsible: true,
    //             children: [
    //                 "2024", "2023", "2022", "2021", "2020",
    //                 "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010",
    //                 "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000",
    //                 "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991", "1990",
    //                 "1973", "1972", "1971", "1970",
    //                 "1969", "1967", "1966", "1965", "1964", "1963"
    //             ]
    //         },
    //         {
    //             text: "香港电影金像奖",
    //             prefix: "hkfaa/",
    //             collapsible: true,
    //             children: [
    //                 "2025", "2024", "2023", "2021", "2020",
    //                 "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010",
    //                 "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000",
    //                 "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991", "1990",
    //                 "1989", "1988", "1987", "1986", "1985", "1984", "1983", "1982"
    //             ]
    //         },
    //         "resource",
    //         "auditorium",
    //     ]
    // },
    // {
    //     text: "小说",
    //     prefix: "novel/",
    //     collapsible: true,
    //     children: ["korea"]
    // },
    // {
    //     text: "游戏",
    //     prefix: "game/",
    //     collapsible: true,
    //     children: ["recall", "tools", "tga"]
    // }
])