export default {
    data: () => {
        return {
            img_url: process.env.VUE_APP_IMG,
            new_profile: null,
            file: "",
            menu: false,
            valid: true,
            user: {
                dob: new Date().toISOString().substr(0, 10),
                name: "",
                email: "",
                type: "",
                password: "",
                phone: "",
                address: "",
                profile: "",
                id: "",
            },
            error: "",

            // validation rules
            nameRules: [value => !!value || "The name field is required."],
            emailRules: [value => !!value || "The email field is required."],
            typeRules: [value => !!value || "Type is required"],
        }
    },
    methods: {
        preview_image(e) {
            this.file = e.target.files[0]
            let reader = new FileReader();
            reader.readAsDataURL(this.file);
            reader.onload = e => {
                this.new_profile = e.target.result
            }
        },
        editProfile() {
            this.$refs.form.validate();
            const formData = new FormData();
            formData.append('profile', this.file);
            formData.append('old_profile', this.user.profile);
            formData.append('name', this.user.name);
            formData.append('email', this.user.email);
            formData.append('type', 1);
            formData.append('phone', this.user.phone);
            formData.append('dob', this.user.dob);
            formData.append('address', this.user.address);
            formData.append('create_user_id', 1);
            formData.append('updated_user_id', 2)
            this.$axios.post(`/update/user/${this.$route.params.user.id}`, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(function (response) {
                    console.log(response);
                    alert('complete successfully updated your profile.....');
                    window.location.href = 'http://localhost:8080/profile';
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    created() {
        this.user.name = this.$route.params.user.name
        this.user.email = this.$route.params.user.email
        this.user.type = this.$route.params.user.type
        this.user.phone = this.$route.params.user.phone
        this.user.dob = this.$route.params.user.dob
        this.user.address = this.$route.params.user.address
        this.user.profile = this.$route.params.user.profile
        this.user.id = this.$route.params.user.id
    },
};
