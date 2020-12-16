import moment from 'moment'
export default {
    data() {
        return {
            title: "",
            description: "",
            status: "",
            created_date: "",
            updated_date: "",
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
        this.updated_date = this.$route.params.item.updated_at;
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