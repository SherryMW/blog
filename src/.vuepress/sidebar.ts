import {sidebar} from "vuepress-theme-hope";
import {Collection} from "../collection/sidebar.js";
import {Life} from "../life/sidebar.js";
import {Code} from "../code/sidebar.js";
import {Vue} from "../code/vue/sidebar.js";

export default sidebar({
    "/code/": Code,
    "/code/vue/": Vue,
    "/life/": Life,
    "/collection/": Collection
});