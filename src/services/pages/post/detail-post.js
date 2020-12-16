export default {
    data() {
        return {
            title: "",
            description: "",
            status: "",
            created_date: "",
            created_user: "",
            updated_date: "",
            updated_user: "",
        }
    },

    /**
     * post detail by parameters
     */
    created() {
        this.title = this.$route.params.item.title;
        this.description = this.$route.params.item.description;
        if(this.$route.params.item.status === 1) {
            this.status = "Active";
        }else {
            this.status = "Not Active";
        }
        this.created_date = this.$route.params.item.created_at;
        this.created_user = this.$route.params.item.create_user_id;
        this.updated_date = this.$route.params.item.updated_at;
        this.updated_user = this.$route.params.item.updated_user_id;
    },
    methods: { 
        /**
         * back to the post list route
         */       
        close() {
            this.$router.push({ name: 'post-list' });
        },
    },
}