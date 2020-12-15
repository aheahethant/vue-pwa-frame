import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../pages/user/Login";
// import store from "../store";
import Testing from "../pages/test/Testing";
import UserList from "../pages/user/UserList";
import PostList from "../pages/post/PostList";
import ConfirmPost from "../pages/post/ConfirmPost";
import CreatePost from "../pages/post/CreatePost";
import UpdatePost from "../pages/post/UpdatePost";
import CreateUser from "../pages/user/CreateUser";
import ConfirmUser from "../pages/user/ConfirmUser";
import UpdateUser from "../pages/user/UpdateUser";
import Profile from "../pages/user/Profile";
import EditProfile from "../pages/user/EditProfile";
import ChangePassword from "../pages/user/ChangePassword";

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/change/password",
        name: "change-password",
        component: ChangePassword,
    },
    {
        path: "/edit/profile",
        name: "edit-profile",
        component: EditProfile,
    },
    {
        path: "/profile",
        name: "profile",
        component: Profile,
    },
    {
        path: "/update/user",
        name: "update-user",
        component: UpdateUser,
    },
    {
        path: "/create/user",
        name: "create-user",
        component: CreateUser,
    },
    {
        path: "/confirm/user",
        name: "confirm-user",
        component: ConfirmUser,
    },
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
        path: "/confirm/post",
        name: "confirm-post",
        component: ConfirmPost,
    },
    {
        path: "/create/post",
        name: "create-post",
        component: CreatePost,
    },
    {
        path: "/post/list",
        name: "post-list",
        component: PostList,
    },
    {
        path: "/edit/post",
        name: "edit-post",
        component: UpdatePost,
    },
    {
        path: "/*",
        redirect: "/post/list",
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
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
