const db = require('../config/connection');
const task = function(task){
    this.id = task.id;
    this.name = task.name;
    this.check = task.checked;
    this.description = task.description;
}

task.addNewTask = (data, result) => {

    let sql = `INSERT INTO task (name, checked, description) VALUES 
                ('${data.name}','${data.checked}', '${data.description}')`;
    db.query(sql, (err, response) => {
        if(err){
            result(null, {status: false});
        }
        else{
            result(null, {status: true, response});
        }
    })
}

module.exports = task;
