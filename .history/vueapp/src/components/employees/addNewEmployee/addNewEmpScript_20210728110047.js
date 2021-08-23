import {EmployeesService} from "../../../services/employees.service";

const employeeService = new EmployeesService();

export default {
    name: "addNewEmployee",
    data(){
        return{
            selectedFile: null,
            formData: null,
            employee: {
                id: this.$route.params.id !== null? this.$route.params.id : null,
                name: null,
                gender: null,
                start: null,
                department: null,
                position: null,
                company: null,
                email: null
            },
            genders: [
                {value: 'Male'},
                {value: 'Female'}
            ],
            departments: [
                {value: 'Software'},
                {value: 'Human Resource Management'},
                {value: 'Marketing'},
                {value: 'Consultancy'},
                {value: 'Finance'},
            ]
        }
    },
    methods: {
        addNewEmployee(){

            console.log(this.employee)
          // event.preventDefault();
            if(this.selectedFile){
                this.employee.img = 'http://localhost:3000/images/' + this.selectedFile.name.replace(/\s/g, '');
            }
          this.axios.post('http://localhost:3000/addNewEmployee', {employee: this.employee}).then((res) =>{
              console.log(res.data);
              this.uploadImage(null);
              this.$router.push("/home/employees");

          })
        },
        validateForm(formElements){
            if(formElements.findIndex(e => e.value === null)){
                console.log("error");
            }
        },
        onFileSelected(event){
            this.selectedFile = event.target.files[0];

        },
        uploadImage(){
            this.formData = new FormData();
            const imageBlob = this.selectedFile;
            this.formData.set('file', imageBlob);
            console.log(this.selectedFile)
            if(this.selectedFile){
                this.axios.post('http://localhost:3000/file/upload?fileName='
                    +this.selectedFile.name.replace(/\s/g, ''),
                    this.formData).then(res => {
                    console.log(res);
                    this.selectedFile = null;
                })
            }

        },
        backToDetails(){
            if(this.$route.params.id){
                this.$router.push(`/home/employeeDetails/${this.$route.params.id}`);
            }
            else{
                this.$router.push('/home/employees');
            }
        }
    },
    created() {

    },
    mounted() {
        console.log(this.$route.params.id);
        if (this.$route.params.id !== null || this.$route.params.id !== 'undefined') {
            console.log("here")
            employeeService.getEmployeeDetails(this.employee.id).then((res) => {
                this.employee = res.data.employee[0];
                this.employee.gender = {value: this.employee.gender};
                this.employee.department = {value: this.employee.department};

                console.log(this.employee)
            })
        }
    }
}
