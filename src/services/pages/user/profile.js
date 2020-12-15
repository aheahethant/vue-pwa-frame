import { mapGetters } from "vuex";

export default {
    data() {
        return {
            img_url: process.env.VUE_APP_IMG,
        }
    },
    computed: {
        ...mapGetters(["user", "userName", "userEmail", "userType", "userProfile", "userPhone", "userDOB", "userAddress", "userCreateDate", "userCreateUser", "userUpdatedDate", "userUpdatedUser"]),
    },
    methods: {
        editProfile(user) {
            this.$router.push({ name: "edit-profile", params: {user : user} })
        }
    },
}