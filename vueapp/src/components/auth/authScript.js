import Vue  from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
    data(){
        return{
            loginView: true,
            errors: [],
            user:{
                username: null,
                email: null,
                password: null
            }

        }
    },
    methods:{
        switchView(){
            this.loginView = !this.loginView;
        },

        submitForm(event){
            this.errors = [];
            event.preventDefault();
            if(this.user.username === '' ||
                this.user.email === '' ||
                this.user.password === ''){
                this.errors.push('All fields are required');
            }
            if(this.user.password.length < 8 && !this.loginView){
                this.errors.push('Password must be 8 characters long');
            }
            if(this.errors.length === 0){
                if(!this.loginView){
                    this.axios.post('http://localhost:3000/signup', {user: this.user}).then(
                        (res) => {
                            if(res.data.status === false){
                                this.errors.push('User already exists!');
                            }
                            else{
                                this.user = {
                                    username: null,
                                    password: null,
                                    email: null
                                }
                                this.loginView = true;
                            }
                        }
                    )
                }
                else{
                    this.axios.post('http://localhost:3000/login', {user: this.user}).then(
                        (res) => {
                            console.log(res);

                            if(res.data.status === false){
                                this.errors.push('User doesn\'t exists!');
                            }
                            else{
                                localStorage.setItem('user', JSON.stringify(res.data.user));
                                this.$router.push('/home/user');
                            }
                        }
                    )
                }

            }

        }
    },
    created() {
        if(JSON.parse(localStorage.getItem('user')) !== null){
            this.$router.push('/home/user');
        }
    }
}
