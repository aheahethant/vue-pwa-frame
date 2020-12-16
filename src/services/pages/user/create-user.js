export default {
    data: () => {
        return {
            menu: false,
            valid: true,
            profile: null,
            file: "",
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
            passwordRules: [value => !!value || "Password is required."],
            confirmPasswordRules: [value => !!value || "Confirm password is required"],
            profileRules: [value => !!value || value <= 2000000 || 'Profile size should be less than 2 MB!'],
        }
    },
    methods: {
        /**
         * change the file to image
         * @param {*} e 
         */
        preview_image(e) {
            this.file = e.target.files[0]
            let reader = new FileReader();
            reader.readAsDataURL(this.file);
            reader.onload = e => {
                this.profile = e.target.result
            }
        },

        /**
         * change the route link 
         * go to confirm user by parameters
         */
        createUser() {
            this.$refs.form.validate();
            this.$router.push({ name: 'confirm-user', params: { user: this.user, profile: this.profile, file: this.file } });
        },
    }
};
