
const db = require('../config/connection');

const employee = function(employee){
    this.id = employee.id;
    this.name = employee.name;
    this.department = employee.department;
    this.company = employee.company;
    this.position = employee.position;
    this.start = employee.start;
    this.img = employee.img;
    this.gender = employee.gender;
}

employee.getAllEmployees = (req, result) => {
    let sql = `SELECT * FROM employees`;
    db.query(sql, (err, response) => {
        if(err) result({status: false}, null);
        else{
            result(null,{status: true, employees: response});
        }
    })
}
employee.addNewEmployee = async (data, result) => {
    const flag = await checkIfUserExist(data.email);
    let sql = '';
    if(flag === 0){
        sql =   `INSERT INTO employees (name, department, company, gender, position, start, img, email)
                VALUES ('${data.name}','${data.department.value}','${data.company}','${data.gender.value}','${data.position}'
                ,'${data.start}','${data.img}', '${data.email}')`;

    }
    else{
        sql =   `UPDATE employees SET name ='${data.name}',  department= '${data.department.value}', email='${data.email}'
                     ,  company='${data.company}',  gender='${data.gender.value}',  position='${data.position}'
                     , start = '${data.start}', img = '${data.img }' WHERE id = '${data.id}'`;
        console.log(sql);
    }
    db.query(sql, (err, response) => {
        if(err) result({status: false}, null);
        else{
            result(null, {status: true, msg: 'Record added'});
        }
    })
    // result(null, {status: false, msg: 'Record already exists'});



}
employee.getEmployeeDetails = (id, result) => {
    let sql = `SELECT * FROM employees WHERE id = '${id}'`;
    db.query(sql, (err, response) => {
        if(err) result({status: false, err}, null);
        else{
            result(null, {status: true, employee: response});
        }
    })
}
employee.deleteEmployee = (id, result) => {
    let sql = `DELETE FROM employees WHERE id = '${id}'`;
    db.query(sql, (err, response) =>{
        if(err) result({status: false}, null);
        else{
            result(null, {status: true, response});
        }

    })
}
function checkIfUserExist(email){
    let sql = `SELECT COUNT(*) as total FROM employees WHERE email = '${email}'`;
    return new Promise((resolve, reject) => {
        db.query(sql, (err, response) => {
            if(err) return reject(err);
            else{
                resolve(response[0].total);
            }
        })
    })
}


module.exports = employee;
