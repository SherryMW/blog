import {sidebar} from "vuepress-theme-hope";
import {CollectionSidebar} from "../collection/sidebar.js";
import {LifeSidebar} from "../life/sidebar.js";

export default sidebar({
    "/collection/": CollectionSidebar,
    "/life/": LifeSidebar
});