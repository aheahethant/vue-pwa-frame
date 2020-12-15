export default {
    data: () => ({
        valid: true,
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
        editPost() {
            this.$refs.form.validate()
            this.$axios.put(`/edit/post/${this.$route.params.item.id}`, {
                title: this.post.title,
                description: this.post.description,
                create_user_id: 1,
                updated_user_id: 1,
            })
            .then(function (response) {
                console.log(response);
                alert('updating.....');
                window.location.href = 'http://localhost:8080/post/list';
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        check (e) {
            console.log(e);
        },
    },
    created() {
        this.post.title = this.$route.params.item.title
        this.post.description = this.$route.params.item.description
        if(this.$route.params.item.status === '1'){
            this.post.status = 'Checked';
        }else{
            this.post.status = 'Unchecked';
        }
    },
};