import { createWebHistory,createRouter } from "vue-router";
// We have to add the VUE component here using import
import homeCompo from "../components/homeCompo.vue"
import infoComp from "../components/infoComp.vue"
import aboutCompo from "../components/aboutCompo.vue"

const routes = [
    {
        path:"/",
        component: homeCompo,
        name: "Home",
        alias: "/home"
    },
    {
        path:"/info",
        component: infoComp,
        name: "Info"
    },
    {
        path:"/about",
        component: aboutCompo,
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;