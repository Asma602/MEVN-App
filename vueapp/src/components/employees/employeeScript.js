import { EmployeesService } from '../../services/employees.service';

const employeeService = new EmployeesService();
export default {
    name: "employee",
    data(){
        return{
            loader: true,
            employees: [],
            skeletons: [1,2,3]
        }
    },
    methods: {
        navigateToNew(){
            this.$router.push('/home/addNewEmployee');
        },
        viewEmployeeDetails(id){
            this.$router.push({ path: `employeeDetails/${id}`})
        },
        confirmDelete(id){
            this.$confirm.require({
                message: 'Do you want to delete this record?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    this.deleteRecord(id);
                }
            });
        },
        deleteRecord(id){
            employeeService.deleteEmployee(id).then((res) => {
                if(res.data.status){
                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});
                    const index = this.employees.findIndex(e => e.id === id);
                    if(index !== -1){
                        this.employees.splice(index, 1);
                    }
                }
            })

        }
    },
    mounted() {
        employeeService.getEmployees().then(res => {
            this.employees = res.data.employees;
        });
        setTimeout(() => {
            this.loader = false;
        }, 1000);
    }
}
