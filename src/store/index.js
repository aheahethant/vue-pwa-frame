import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

axios.defaults.baseURL = process.env.VUE_APP_SERVER;

export default new Vuex.Store({
    state: {
        user: {},
    },
    mutations: {
      setUserData(state, userData) {
        state.user = userData;
      },
    },
    actions: {
        login({ commit }, credentials) {
            return axios.post("/login", credentials).then(({ data }) => {
                commit("setUserData", data.user);
            });
        },
        logout({ commit }, credentials) {
            return axios.post("/logout", credentials).then(() => {
                commit("setUserData", null);
            });
        },
    },
    getters: {
        isLoggedIn: (state) => !!state.user,
        user: (state) => {
          if(state.user && state.user) {
              return state.user;
          }  
        },
        userID: (state) => {
            if (state.user && state.user.id) {
                return state.user.id;
            }
        },
        userName: (state) => {
            if (state.user && state.user.name) {
                return state.user.name;
            }
        },
        userType: (state) => {
            if (state.user && state.user.type) {
                return state.user.type;
            }
        },
        userEmail: (state) => {
            if(state.user && state.user.email) {
                return state.user.email;
            }
        },
        userProfile: (state) => {
            if(state.user && state.user.profile) {
                return state.user.profile;
            }
        },
        userPhone: (state) => {
            if(state.user && state.user.phone) {
                return state.user.phone;
            }
        },
        userDOB: (state) => {
            if(state.user && state.user.dob) {
                return state.user.dob;
            }
        },
        userAddress: (state) => {
            if(state.user && state.user.address) {
                return state.user.address;
            }
        },
        userCreateDate: (state) => {
            if(state.user && state.user.created_at) {
                return state.user.created_at;
            }
        },
        userCreateUser: (state) => {
            if(state.user && state.user.create_user_id) {
                return state.user.create_user_id;
            }
        },
        userUpdatedDate: (state) => {
            if(state.user && state.user.updated_at) {
                return state.user.updated_at;
            }
        },
        userUpdatedUser: (state) => {
            if(state.user && state.user.updated_user_id) {
                return state.user.updated_user_id;
            }
        }
    },
    plugins: [createPersistedState()],
});
