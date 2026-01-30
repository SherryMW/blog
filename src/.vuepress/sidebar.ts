import {sidebar} from "vuepress-theme-hope";
import {Collection} from "../collection/sidebar.js";
import {Life} from "../life/sidebar.js";
import {Java} from "../coding/java/sidebar.js";

export default sidebar({
    "/coding/java/": Java,
    "/life/": Life,
    "/collection/": Collection
});