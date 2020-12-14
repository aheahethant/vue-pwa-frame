export default {
    data() {
        return {
            valid: true,
            password: "",
            current_password: "",
            new_password: "",
            confirm_new_password: "",
            error: "",
            
            //validation rules
            current_passwordRules: [value => !!value || "Current Password is required"],
            new_passwordRules: [value => !!value || "New password is required"],
            new_confirm_passwordRules: [value => !!value || "New Password and New Confirm password must match"]
        }
    },
    methods: {
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
                .then(function (response) {
                    console.log(response);
                    alert('complete successfully changed password.....');
                    window.location.href = 'http://localhost:8080/profile';
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
}