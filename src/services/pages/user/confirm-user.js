export default {
    data: () => {
        return {
            profile: null,
            file: "",
            menu: false,
            valid: true,
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
        confirmUser() {
            this.$refs.form.validate();
            const formData = new FormData();
            formData.append('profile', this.file);
            formData.append('name', this.user.name);
            formData.append('email', this.user.email);
            formData.append('password', this.user.confirmPassword);
            formData.append('type', 1);
            formData.append('phone', this.user.phone);
            formData.append('dob', this.user.date);
            formData.append('address', this.user.address);
            formData.append('create_user_id', 1);
            formData.append('updated_user_id', 2)
            this.$axios.post('/create/user', formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(function (response) {
                    console.log(response);
                    alert('saving.....');
                    window.location.href = 'http://localhost:8080/user/list';
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    created() {
        this.user = this.$route.params.user
        this.profile = this.$route.params.profile
        this.file = this.$route.params.file
    }
};
