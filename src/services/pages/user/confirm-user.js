export default {
    /**
     * declare data variables
     */
    data: () => {
        return {
            profile: null,
            file: "",
            menu: false,
            valid: true,
            type: "",
            user: {
                date: new Date().toISOString().substr(0, 10),
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                type: "",
                phone: "",
                address: "",
            },
            error: "",

            // validation rules
            nameRules: [value => !!value || "The name field is required."],
            emailRules: [value => !!value || "The email field is required."],
            typeRules: [value => !!value || "Type is required"],
            passwordRules: [value => !!value || "Password is required"],
            confirmPasswordRules: [value => !!value || "Confirm password is required & Password must match"],
        }
    },
    methods: {
        /**
         * save user
         */
        confirmUser() {
            this.$refs.form.validate();
            if(this.user.type == "Admin"){
                this.type = '0';
            }else {
                this.type = '1';
            }
            const formData = new FormData();
            formData.append('profile', this.file);
            formData.append('name', this.user.name);
            formData.append('email', this.user.email);
            formData.append('password', this.user.confirmPassword);
            formData.append('type', this.type);
            formData.append('phone', this.user.phone);
            formData.append('dob', this.user.date);
            formData.append('address', this.user.address);
            this.$axios.post('/create/user', formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                    console.log(response);
                    alert('saving.....');
                    this.$router.push({ name: 'user-list' });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    created() {
        /**
         * set the data in form input
         */
        this.user = this.$route.params.user
        this.profile = this.$route.params.profile
        this.file = this.$route.params.file
    }
};
