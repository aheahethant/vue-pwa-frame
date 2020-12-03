export default {
    data() {
        return {
            hello: "",
        }
    },
    methods: {
        testing() {
            return this.hello ="HelloWorld!"; 
        },
    },
    mounted() {
        this.$axios
            .get("/test")
            .then((response) => {
                this.hello = response.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
};