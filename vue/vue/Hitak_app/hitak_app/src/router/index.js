import { createWebHistory, createRouter } from "vue-router";
import homecomp from "../components/homeComp.vue"
import aboutcomp from "../components/aboutComp.vue"
import information from "../components/information.vue"
const routes = [
        {
        path:"/",
        component: homecomp
    },
        {
        path:"/aboutcomp",
        component: aboutcomp
    },
        {
        path:"/information",
        component: information
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
