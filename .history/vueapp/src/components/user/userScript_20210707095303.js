import input from "../input/input";
import Vue  from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
    data(){

        return{
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            newTask : '',
            tasks: [
                {id: 1, title: 'Morning walk', completed: false},
                {id: 2, title: 'Breakfast', completed: false},
                {id: 3, title: 'Go to office', completed: false},
                {id: 4, title: 'Out for meeting', completed: false},
                {id: 5, title: 'Do groceries', completed: false},
            ],
            display: false
        }
    },
    components: {
        'app-input': input
    },
    methods: {
        addNewTask(){
            if(this.newTask === ''){
                alert('Please enter a valid task name!');
                return;
            }
            const index = this.tasks.findIndex(t => t.title === this.newTask);
            if(index === -1){
                const id = this.tasks.length > 0 ? this.tasks[this.tasks.length-1].id+1: 1;
                this.tasks.push({id, title: this.newTask, completed: false});
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
                this.$toast.add({severity:'success', summary: 'Task added!', life: 2000});

            }
            else{
                alert('Task is already in the queue!')
            }
        },
        updateTaskStatus(task){
            const index = this.tasks.findIndex(t => t.id === task.id);
            if(index !== -1){
                this.tasks[index].completed = true;
                localStorage.setItem('tasks', JSON.stringify(this.tasks))
            }
        },
        updateTaskValue(event, task){
            const index = this.tasks.findIndex(t => t.id === task.id);
            if(index !== -1){
                this.tasks[index].name =  event.target.value;
                localStorage.setItem('tasks', JSON.stringify(this.tasks))
                alert('Task updated');
            }
        },
        removeTask(id){
            this.$confirm.require({
                message: 'Are you sure you want to remove this task?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    const index = this.tasks.findIndex(t => t.id === id);
                    if(index !== -1){
                        this.tasks.splice(index, 1);
                    }
                },
                reject: () => {
                    //callback to execute when user rejects the action
                }
            });

        },
        viewDetails(){
            this.display = true;

        },
        getAllTasks(){
            this.axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
                this.tasks = res;
            })
        }
    },
    created() {
        if(JSON.parse(localStorage.getItem('user')) === null){
            this.$router.push('/');
            return;
        }
        this.$root.$on('addTask', (task) => {
            this.newTask = task;
            this.addNewTask();
        })
    },
    mounted() {
        // this.getAllTasks();
        console.log(this.$toast)
        this.$toast.removeAllGroups();

        if(!localStorage.getItem('tasks')){
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        }
        else{
            this.tasks = JSON.parse(localStorage.getItem('tasks'));
            // this.tasks.forEach(t => {
            //   if(t.completed){
            //     document.getElementById(t.id).style.textDecoration = 'line-through';
            //   }
            // })
        }

    }
}
