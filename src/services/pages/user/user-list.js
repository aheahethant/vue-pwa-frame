import { mapGetters } from "vuex";
export default {
    data() {
        return {
            img_url: process.env.VUE_APP_IMG,
            selectedDialogNote: false,
            item: {},
            date: new Date().toISOString().substr(0, 10),
            date1: new Date().toISOString().substr(0, 10),
            menu: false,
            menu1: false,
            headerList: [
                {
                    text: "ID",
                    align: "start",
                    value: "id",
                },
                {
                    text: "Name",
                    value: "name",
                },
                {
                    text: "Email",
                    value: "email",
                },
                {
                    text: "Created User",
                    value: "user.name",
                },
                {
                    text: "Type",
                    value: "type",
                },
                {
                    text: "Phone",
                    value: "phone",
                },
                {
                    text: "Address",
                    value: "address",
                },
                {
                    text: "Created Date",
                    value: "created_at",
                },
                {
                    text: "Updated Date",
                    value: "updated_at",
                },
                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            userList: [],
            showList: [],
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn"]),
        headers() {
            if (!this.isLoggedIn) {
                return this.headerList.slice(0, this.headerList.length);
            } else {
                return this.headerList;
            }
        },
    },
    mounted() {
        this.$axios
            .get("/user/list")
            .then((response) => {
                this.userList = response.data;
                this.showList = this.userList;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    methods: {
        editUser(item) {
            this.$router.push({ name: 'update-user', params: { item: item } });
        },
        showDetail(item) {
            this.selectedDialogNote = true;
            this.item = item;
        },
        hideDetail: function (event) {
            if (event) {
                this.selectedDialogNote = false;
            }
        },
        destroy(item) {
            this.$axios
                .delete(`/delete/user/${item.id}`)
                .then(function (response) {
                    console.log(response);
                    alert("deleting......");
                    window.location.href = 'http://localhost:8080/user/list';
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
};
