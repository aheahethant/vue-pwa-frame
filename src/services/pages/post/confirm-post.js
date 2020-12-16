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
    /**
     * save post to DB
     */
    confirmPost() {
      this.$refs.form.validate()
      this.$axios.post('/create/post', {
        title: this.post.title,
        description: this.post.description,
      })
        .then((response) => {
          console.log(response);
          alert('saving.....');
          this.$router.push({ name: 'post-list'});
        })
        .catch((error) => {
          console.log(error);
        });
    },
    backToCreate(){
      this.$router.push({ name: 'create-post', params: { post: this.$route.params.post }});
    }
  },
  
  /**
   * set data in form input
   */
  created() {
    this.post = this.$route.params.post
  },
};
