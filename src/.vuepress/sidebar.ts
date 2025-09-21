import {sidebar} from "vuepress-theme-hope";
import {CollectionSidebar} from "../collection/sidebar.js";
import {LifeSidebar} from "../life/sidebar.js";
import {CodeSidebar} from "../code/sidebar.js";

export default sidebar({
    "/code/": CodeSidebar,
    "/collection/": CollectionSidebar,
    "/life/": LifeSidebar
});