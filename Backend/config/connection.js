
const db = require('../config/db.config');
let mysql = require('mysql');

const db_conn =  mysql.createConnection({
    host: db.HOST,
    user: db.USER,
    password: db.PASSWORD,
    database: db.DB
});
db_conn.connect((err) => {
    if(err){
        console.log("error connecting with database", err);
    }
    else{
        console.log("Connection successful");
        // populateEmployeesTable().then(res => {
        //     console.log("records added")
        // });
    }
})
async function populateEmployeesTable(){
    const employees = [
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
    for (let i=0;i<employees.length;i++){
        await insertRecord(employees[i]);
    }

}
function insertRecord(emp){
    let sql = `INSERT INTO employees (name, department, position, company, gender, start, img)
                VALUES ('${emp.name}', '${emp.department}', '${emp.position}', '${emp.company}',
                '${emp.gender}', '${emp.start}', 'http://localhost://8080/src/assets/${emp.img}')` ;
    return new Promise((resolve, reject) => {
        db_conn.query(sql, (err, res) => {
            if(err) return reject(err);
            else{
                resolve({status: true});
            }
        })
    })
}
module.exports = db_conn;
