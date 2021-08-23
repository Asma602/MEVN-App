
const employee = require('../models/employees.model');

exports.getAllEmployees = (req, res) => {

    employee.getAllEmployees(req, (err, data) => {
        if(err) res.json({status: false});
        else{
            res.json(data);
        }
    })
}

exports.addNewEmployee = (req, res) => {
    if(!req){
        res.json({status: false});
    }
    else{
        employee.addNewEmployee(req.body.employee, (err, data) => {
            if(err) res.json({status: false});
            else{
                res.json(data);
            }
        })
    }
}
exports.getEmployeeDetails = (req, res) => {
    if(!req){
        res.json({status: false});
    }
    else{
        employee.getEmployeeDetails(req.query.id, (err, data) => {
            if(err) res.json({status: false});
            else{
                res.json(data);
            }
        })
    }
}
exports.deleteEmployee = (req, res) => {
    if(!req){
        res.json({status: false});
    }
    else{
        employee.deleteEmployee(req.query.id, (err, data) => {
            if(err) res.json({status: false});
            else{
                res.json(data);
            }
        })
    }
}
