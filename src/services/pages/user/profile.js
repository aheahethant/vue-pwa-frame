import { mapGetters } from "vuex";

export default {
    data() {
        return {
            img_url: process.env.VUE_APP_IMG,
            type: "",
        }
    },
    computed: {
        ...mapGetters(["user", "userName", "userEmail", "userType", "userProfile", "userPhone", "userDOB", "userAddress", "userCreateDate", "userCreateUser", "userUpdatedDate", "userUpdatedUser"]),
    },
    created() {
        if(this.userType === '0'){
            this.type = "Admin";
        }else{
            this.type = "User";
        }
    },
    methods: {
        /**
         * change edit-profile route with parameters
         * @param {*} user 
         */
        editProfile(user) {
            this.$router.push({ name: "edit-profile", params: {user : user} })
        }
    },
}