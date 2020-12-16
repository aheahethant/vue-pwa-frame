export default {
    data: () => ({
        valid: true,
        status: "",
        post: {
            title: "",
            description: "",
            status: "",
        },
        error: "",

        // validation rules
        titleRules: [value => !!value || "The title field is required."],
        descriptionRules: [value => !!value || "The description field is required."]
    }),
    methods: {
        /**
         * edit post
         */
        editPost() {
            this.$refs.form.validate()
            this.$axios.put(`/edit/post/${this.$route.params.item.id}`, {
                title: this.post.title,
                description: this.post.description,
                status: this.post.status,
            })
            .then((response) => {
                console.log(response);
                alert('updating.....');
                this.$router.push({ name: 'post-list' });
            })
            .catch((error) => {
                console.log(error);
            });
        },
        
        /**
         * Check the Status
         * @param e
         */
        check (e) {
            if(e == true){
                this.post.status = '1';
            }else{
                this.post.status = '0';
            }
        },
    },

    /**
     * add the data by id from DB in form
     */
    created() {
        this.post.title = this.$route.params.item.title
        this.post.description = this.$route.params.item.description
        if(this.$route.params.item.status === 1){
            this.status = true;
        }else{
            this.status = false;
        }
    },
};