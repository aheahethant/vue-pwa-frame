import moment from 'moment'
export default {
    data() {
        return {
            img_url: process.env.VUE_APP_IMG,
            profile: "",
            name: "",
            type: "",
            email: "",
            phone: "",
            address: "",
            dob: "",
            created_date: "",
            created_user: "",
            updated_date: "",
            updated_user: "",
        }
    },

    /**
     * change format date
     */
    filters: {
        moment: function (date) {
            return moment(date).format('YYYY-MM-DD');
        }
    },
    created() {
        /**
         * detail user
         */
        this.profile = this.$route.params.item.profile;
        this.name = this.$route.params.item.name;
        if(this.$route.params.item.type === '0'){
            this.type = "Admin";
        }else {
            this.type = "User";
        }
        this.email = this.$route.params.item.email;
        this.phone = this.$route.params.item.phone;
        this.address = this.$route.params.item.address;
        this.created_date = this.$route.params.item.created_at;
        this.created_user = this.$route.params.item.create_user_id;
        this.updated_date = this.$route.params.item.updated_at;
        this.updated_user = this.$route.params.item.updated_user_id;
        this.dob = this.$route.params.item.dob;
    },
    methods: {
        /**
         * back to the user-list route
         */
        close(){
            this.$router.push({ name: 'user-list' });
        }
    },
}