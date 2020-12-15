export default {
  data: () => ({
    valid: true,
    post: {
      title: "",
      description: "",
    },
    error: "",

    // validation rules
    titleRules: [value => !!value || "The title field is required."],
    descriptionRules: [value => !!value || "The description field is required."]
  }),
  methods: {
    confirmPost() {
      this.$refs.form.validate()
      this.$axios.post('/create/post', {
        title: this.post.title,
        description: this.post.description,
        create_user_id: 1,
        updated_user_id: 1,
      })
        .then(function (response) {
          console.log(response);
          alert('saving.....');
          window.location.href = 'http://localhost:8080/post/list';
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  created() {
    this.post = this.$route.params.post
  },
};
