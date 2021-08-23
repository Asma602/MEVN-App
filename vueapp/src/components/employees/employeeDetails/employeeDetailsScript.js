import {EmployeesService} from "../../../services/employees.service";

const employeeService = new EmployeesService();

export default {
    name: "employeeDetails",
    data(){
        return{
            employee: {
                id: this.$route.params.id,
                name: null,
                gender: null,
                start: null,
                department: null,
                position: null,
                company: null,
                email: null
            }
        }
    },

    methods:{
        getSingleEmployee(id){
            employeeService.getEmployeeDetails(+id).then((res) => {
                console.log(res);
                this.employee = res.data.employee[0]
            });
            console.log(this.employee);
        },
        back(){
            this.$router.push("/home/employees");
        },
        editEmployeeView(id){
            this.$router.push({ path: `/home/addNewEmployee/${id}`})
        }

    },
    created() {
        this.getSingleEmployee(this.employee.id);
        console.log("employee: ", this.employee)
    }

}
