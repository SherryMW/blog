import {sidebar} from "vuepress-theme-hope";
import {Entertainment} from "../entertainment/sidebar.js";
import {Life} from "../life/sidebar.js";
import {Java} from "../coding/java/sidebar.js";
import {AI} from "../coding/ai/sidebar.js";

export default sidebar({
    "/coding/java/": Java,
    "/coding/ai/": AI,
    "/life/": Life,
    "/entertainment/": Entertainment,
});