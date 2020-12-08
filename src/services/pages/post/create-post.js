export default {
    data: () => {
        return {
            valid: true,
            post: {
            title: "",
            description: "",
            },
            error: "",

            // validation rules for user email.
            titleRules: [value => !!value || "The title field is required."],
            descriptionRules: [value => !!value || "The description field is required."]
        }
    },
    methods: {
        createPost() {
            this.$refs.form.validate()
            this.$router.push({name:'confirm-post', params: { post: this.post }});
        }
    }
};
