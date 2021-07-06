
const task = require('../models/task.model');

exports.addNewTask = (req, res) => {
    if(!req){
        res.json(404);
    }
    else{
        task.addNewTask(req.body.task, (err, data) => {
            if(err){
                res.json({status: false});
            }
            else{
                res.json(data);
            }
        })
    }
}
