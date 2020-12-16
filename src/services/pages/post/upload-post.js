export default {
    data() {
        return {
            file: "",
        }
    },
    methods: {
        /**
         * change the file
         * @param {*} e 
         */
        csv_file(e) {
            this.file = e.target.files[0]
        },

        /**
         * upload post by excel csv file
         */
        uploadPost(){
            const formData = new FormData();
            formData.append('file', this.file);
            this.$axios.post('/upload/post', formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                console.log(response);
                alert('uploading.....');
                this.$router.push({ name: 'post-list' });
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
}