export default {
    data: () => {
        return {
            img_url: process.env.VUE_APP_IMG,
            new_profile: null,
            file: "",
            type: "",
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
        /**
         * change the file to image
         * @param {*} e 
         */
        preview_image(e) {
            this.file = e.target.files[0]
            let reader = new FileReader();
            reader.readAsDataURL(this.file);
            reader.onload = e => {
                this.new_profile = e.target.result
            }
        },
        
        /**
         * edit profile
         */
        editProfile() {
            this.$refs.form.validate();
            if(this.user.type == "Admin"){
                this.type = '0';
            }else {
                this.type = '1';
            }
            const formData = new FormData();
            formData.append('profile', this.file);
            formData.append('old_profile', this.user.profile);
            formData.append('name', this.user.name);
            formData.append('email', this.user.email);
            formData.append('type', this.type);
            formData.append('phone', this.user.phone);
            formData.append('dob', this.user.dob);
            formData.append('address', this.user.address);
            this.$axios.post(`/update/user/${this.$route.params.user.id}`, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                    console.log(response);
                    alert('complete successfully updated your profile.....');
                    this.$router.push({ name: 'profile' });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    created() {
        /**
         * set the data in form input
         */
        this.user.name = this.$route.params.user.name
        this.user.email = this.$route.params.user.email
        if(this.$route.params.user.type === 0){
            this.user.type = "Admin";
        }else {
            this.user.type = "User";
        }
        this.user.phone = this.$route.params.user.phone
        this.user.dob = this.$route.params.user.dob
        this.user.address = this.$route.params.user.address
        this.user.profile = this.$route.params.user.profile
        this.user.id = this.$route.params.user.id
    },
};
