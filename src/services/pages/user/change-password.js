export default {
    data() {
        return {
            valid: true,
            confirm_error: "",
            current_error: "",
            new_error: "",
            current_password: "",
            new_password: "",
            confirm_new_password: "",
            error: "",
            //validation rules
            current_passwordRules: [value => !!value || "Current Password is required"],
            new_passwordRules: [value => !!value || "New password is required"],
            new_confirm_passwordRules: [value => !!value || "New Password and New Confirm password must match"],
        }
    },
    methods: {
        /**
         * user's password change by user's id
         */
        changePassword() {
            this.$refs.form.validate();
            const formData = new FormData();
            formData.append('current_password', this.current_password);
            formData.append('new_password', this.new_password);
            formData.append('confirm_new_password', this.confirm_new_password);
            this.$axios.post(`/change/password/${this.$route.params.user}`, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                    console.log(response);
                    alert('complete successfully changed password.....');
                    this.$router.push({ name: 'profile' });
                })
                .catch((error) => {
                    this.current_error = error.response.data.errors.current_password[0];
                    this.new_error = error.response.data.errors.new_password[0];
                    this.confirm_error = error.response.data.errors.confirm_new_password[0];
                });
        },
    },
}