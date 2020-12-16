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
import UploadPost from "../pages/post/UploadPost";
import DetailPost from "../pages/post/DetailPost";
import DetailUser from "../pages/user/DetailUser";

import store from "../store/index.js";
Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/user/detail",
        name: "detail-user",
        component: DetailUser,
        meta: {
            authorize: [0
            ]
        }
    },
    {
        path: "/post/detail",
        name: "detail-post",
        component: DetailPost,
    },
    {
        path: "/upload/post",
        name: "upload-post",
        component: UploadPost,
        meta: {
            authorize: [0,1
            ]
        }
    },
    {
        path: "/change/password",
        name: "change-password",
        component: ChangePassword,
        meta: {
            authorize: [0,1
            ]
        }
    },
    {
        path: "/edit/profile",
        name: "edit-profile",
        component: EditProfile,
        meta: {
            authorize: [0,1
            ]
        }
    },
    {
        path: "/profile",
        name: "profile",
        component: Profile,
        meta: {
            authorize: [0,1
            ]
        }
    },
    {
        path: "/update/user",
        name: "update-user",
        component: UpdateUser,
        meta: {
            authorize: [0
            ]
        }
    },
    {
        path: "/create/user",
        name: "create-user",
        component: CreateUser,
        meta: {
            authorize: [0
            ]
        }
    },
    {
        path: "/confirm/user",
        name: "confirm-user",
        component: ConfirmUser,
        meta: {
            authorize: [0
            ]
        }
    },
    {
        path: "/test",
        component: Testing,
    },
    {
        path: "/user/list",
        name: "user-list",
        component: UserList,
        meta: {
            authorize: [0
            ]
        }
    },
    {
        path: "/confirm/post",
        name: "confirm-post",
        component: ConfirmPost,
        meta: {
            authorize: [0,1
            ]
        }
    },
    {
        path: "/create/post",
        name: "create-post",
        component: CreatePost,
        meta: {
            authorize: [0,1
            ]
        }
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
        meta: {
            authorize: [0,1
            ]
        }
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
router.beforeEach((to, from, next) => {
    const { authorize } = to.meta;
    const loggedIn = store.getters.isLoggedIn;
    const userType = store.getters.userType;
    if (authorize && authorize.length) {
        if (!authorize.includes(+userType)) {
            return next("/post/list");
        }
    } else if (loggedIn && to.name == "login") {
        return next("/post/list");
    }

    next();
});

export default router;
