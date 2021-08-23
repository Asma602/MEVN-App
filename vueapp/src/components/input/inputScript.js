export default {
    props: [
        'msg' // this comes from parent - using as an input property
    ],
    data() {
        return {
            newTask: '',
            name: "input.vue",
            message: ''  // this goes to parent - using as an output property
        }
    },
    methods: {
        updateMsg(event){
            this.message = event.target.value;
            this.$emit('msgUpdated', this.message)     // emitting event to parent
        },
        addNewTask(){
            this.$root.$emit('addTask', this.newTask);  // emitting event using event bus (used for siblings)
            this.newTask = '';
        }
    }
}
