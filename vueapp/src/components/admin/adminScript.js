import Vue  from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
// import {BASE_URL} from "../global";
Vue.use(VueAxios, axios);

export default {
    data(){
        return{
            text: '',
            selectedFile: '',
            users: [],
            columns: [
                {field: 'id', header: 'Id'},
                {field: 'username', header: 'Username'},
                {field: 'email', header: 'Email Address'},
            ]
        }
    },
    methods: {
        onFileSelected(event){
            this.selectedFile = event.target.files[0];

        },
        uploadImage(event){
            event.preventDefault();
            const formData = new FormData();
            const imageBlob = this.selectedFile;
            formData.set('file', imageBlob);

            // formData.append('image', this.selectedFile, this.selectedFile.name);
            console.log(formData);
            this.axios.post('http://localhost:3000/file/upload?fileName='+this.selectedFile.name.replace(/\s/g, ''), formData).then(res => {
                console.log(res);
                this.selectedFile = null;
            })
        }
    },
    created() {
        if(JSON.parse(localStorage.getItem('user')) === null){
            this.$router.push('/');
            return;
        }
        this.axios.get('http://localhost:3000/users//getAllUsers').then((res) => {
            // console.log("users", res.data.users);
            this.users = res.data.users;
        })
    }
}
