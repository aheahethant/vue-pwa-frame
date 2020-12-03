import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../pages/user/Login";
import PostList from "../pages/post/PostList";
// import store from "../store";
import Testing from "../pages/test/Testing";
import UserList from "../pages/user/UserList";

Vue.use(VueRouter);

const routes = [
    {
        path: "/test",
        component: Testing,
    },
    {
        path: "/user/list",
        name: "user-list",
        component: UserList,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/post/list",
        name: "post-list",
        component: PostList,
    },
    {
        path: "/*",
        redirect: "/post/list",
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

/**
 * This is to handle and check authentication for routing.
 */
// router.beforeEach((to, from, next) => {
//     const loggedIn = store.getters.isLoggedIn;
//     if (!loggedIn && to.name != "login") {
//         return next("/login");
//     }
//     next();
// });

export default router;
