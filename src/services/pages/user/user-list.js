import { mapGetters } from "vuex";
export default {
    data() {
        return {
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
        showDetail(item) {
            this.selectedDialogNote = true;
            this.item = item;
        },
        hideDetail: function (event){
            if (event) {
                this.selectedDialogNote = false;
              }
        },
    },
};
