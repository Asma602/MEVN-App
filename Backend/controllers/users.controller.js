

const user = require('../models/users.model');

exports.signup = (req, res) => {
    user.signup(req.body.user, (err, data) => {
        if(err){
            res.json({status: true})
        }
        else{
            res.json(data);
        }
    })
}
exports.login = (req, res) => {
    user.login(req.body.user, (err, data) => {
        if(err){
            res.json({status: false})
        }
        else{
            res.json(data);
        }
    })
}

exports.getAllUsers = (req, res) => {
    user.getAllUsers(req, (err, data) => {
        if(err){
            res.json({status:false})
        }
        else{
            res.json(data);
        }
    })
}
