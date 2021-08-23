import {BaseService} from "./base.service";
import Vue  from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export class EmployeesService extends BaseService{
    employees = [];
    constructor() {
        super();
    }
    getEmployees() {
        this.dataFactory();
        return axios.get('http://localhost:3000/getAllEmployees');
    }
    getEmployeeDetails(id){
        this.dataFactory();
        return axios.get('http://localhost:3000/getEmployeeDetails?id='+id);
        // return this.employees.filter(e => e.id === id);
    }
    deleteEmployee(id){
        return axios.delete('http://localhost:3000/deleteEmployee?id='+id);
    }
    addNewEmployee(employee){
        return axios.post('http://localhost:3000/addNewEmployee', {employee});
    }
    dataFactory(){
        this.employees =  [
            {   id: 1,
                name: 'M.Usman',
                department: 'Software',
                position: 'Senior Software Engineer',
                company: 'Stella Technology',
                gender: 'Male',
                start: 'Mar 2017',
                img: 'avatar.png'
            },
            {
                id: 2,
                name: 'Ayesha Liaquat',
                department: 'Software',
                position: 'Software Engineer',
                company: 'Jin Technologies',
                gender: 'Female',
                start: 'August 2019',
                img: 'avatar.png'
            },
            {
                id: 3,
                name: 'Asma Liaquat',
                department: 'Software',
                position: 'Angular Developer',
                company: 'Tangent Technologies',
                gender: 'Female',
                start: 'June 2021',
                img: 'avatar.png'
            },
            {
                id: 4,
                name: 'M.Adnan',
                department: 'Software',
                position: 'Android Developer',
                company: 'Freelancer',
                gender: 'Male',
                start: 'May 2019',
                img: 'avatar.png'
            },
            {
                id: 5,
                name: 'Seemab Zahra',
                department: 'Marketing',
                position: 'CTO',
                company: 'Star Land Marketing',
                gender: 'Female',
                start: 'January 2018',
                img: 'avatar.png'
            },
            {
                id: 6,
                name: 'Hina Kiyani',
                department: 'Consultancy',
                position: 'Team Lead',
                company: 'PTET',
                gender: 'Female',
                start: 'Feb 2006',
                img: 'avatar.png'
            },
            {
                id: 7,
                name: 'Saiqa',
                department: 'Accounts',
                position: 'Finance Head',
                company: 'Ufone',
                gender: 'Female',
                start: 'December 2019',
                img: 'avatar.png'
            },
        ];

    }
}

