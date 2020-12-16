import { mapGetters } from "vuex";
import moment from 'moment'
export default {
    data() {
        return {
            img_url: process.env.VUE_APP_IMG,
            selectedDialogNote: false,
            item: {},
            userName: "",
            email: "",
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
    filters: {
        moment: function (date) {
            return moment(date).format('YYYY-MM-DD');
        }
    },
    methods: {
        /**
         * change update-user route with parameters
         * @param {*} item 
         */
        editUser(item) {
            this.$router.push({ name: 'update-user', params: { item: item } });
        },

        /**
         * show user detail by id
         * @param {*} item 
         */
        showDetail(item) {
            this.$axios.get(`/user/detail/${item.id}`)
                .then((response) => {
                    console.log(response);
                    this.$router.push({ name: 'detail-user', params: { item: item } });
                })
                .catch((error) => {
                    console.log(error);
                })
        },

        /**
         * delete user by user's id
         * @param {*} item 
         */
        destroy(item) {
            this.$axios
                .delete(`/delete/user/${item.id}`)
                .then((response) => {
                    console.log(response);
                    alert("deleting......");
                    this.$axios
                        .get("/user/list")
                        .then((response) => {
                            this.userList = response.data;
                            this.showList = this.userList;
                        })
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 

        /**
         * This is to filter posts of datatable.
         * @returns void
         */
        filterUsers() {
            this.showList = this.userList.filter((user) => {
                // if(this.date && this.date1){
                //     return true;
                // }
                return (
                    user.name.includes(this.userName) &&
                    user.email.includes(this.email) &&
                    user.created_at.includes(this.date) &&
                    user.updated_at.includes(this.date1)
                );
            });
        },
    },
};
