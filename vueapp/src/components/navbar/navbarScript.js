export default {
    name: "navbar",
    data(){
        return{
            navItems: [
                // {name: 'Home', link: '/home'},
                {name: 'Admin', link: '/home/admin'},
                {name: 'User', link: '/home/user'},
                {name: 'Employees', link: '/home/employees'},
            ]
        }
    },
    methods: {
        logout(){
            localStorage.removeItem('user');
            this.$router.push("/");
        }
    }
}
