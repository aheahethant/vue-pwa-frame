import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import moment from "moment";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$store = store;
Vue.prototype.moment = moment;

Vue.prototype.$http = axios;

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
    /**
     * This is to set token to any request to server side.
     * @returns Resquest with configurations
     */
    created() {
        axios.interceptors.request.use(
            function (config) {
                const token = localStorage.getItem('token')
                if (token) {
                    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
                }
                return config;
            },
            function (error) {
                return Promise.reject(error);
            }
        );
    },
}).$mount("#app");
