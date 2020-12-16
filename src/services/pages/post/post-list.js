import { mapGetters } from "vuex";
export default {
    data() {
        return {
            selectedDialogNote: false,
            item: {},
            headerList: [
                {
                    text: "ID",
                    align: "start",
                    value: "id",
                },
                {
                    text: "Post Title",
                    value: "title",
                },
                {
                    text: "Post Desciption",
                    value: "description",
                },
                {
                    text: "Posted User",
                    value: "user.name",
                },
                {
                    text: "Posted Date",
                    value: "created_at",
                },
                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            postList: [],
            showList: [],
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn"]),
        headers() {
            if (!this.isLoggedIn) {
                return this.headerList.slice(0, this.headerList.length - 1);
            } else {
                return this.headerList;
            }
        },
    },
    mounted() {
        this.$axios
            .get("/post/list")
            .then((response) => {
                this.postList = response.data;
                this.showList = this.postList;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    methods: {
        /**
         * detial post
         * @param {*} item 
         */
        showDetail(item) {
            this.$axios.get(`/post/detail/${item.id}`)
                .then((response) => {
                    console.log(response);
                    this.$router.push({ name: 'detail-post', params: { item: item } });
                })
                .catch((error) => {
                    console.log(error);
                })
        },

        /**
         * edit post
         * @param {*} item 
         */
        editPost(item) {
            this.$router.push({ name: 'edit-post', params: { item: item } });
        },

        /**
         * delete post by id
         * @param {*} item 
         */
        deletePost(item) {
            this.$axios
                .delete(`/delete/post/${item.id}`)
                .then((response) => {
                    console.log(response);
                    alert("deleting......");
                    this.$axios
                        .get("/post/list")
                        .then((response) => {
                            this.postList = response.data;
                            this.showList = this.postList;
                        })
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        /**
         * change the upload post route
         */
        uploadPost() {
            this.$router.push({ name: 'upload-post' })
        },

        /**
         * This is to filter posts of datatable.
         * @returns void
         */
        filterPosts() {
            this.showList = this.postList.filter((post) => {
                return (
                    post.title.includes(this.keyword) ||
                    post.description.includes(this.keyword) ||
                    post.created_user.includes(this.keyword)
                );
            });
        },
    },
};
