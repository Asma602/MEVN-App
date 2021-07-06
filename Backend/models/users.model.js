
const db = require('../config/connection');

const user = function(user){
    this.id = user.id;
}

user.signup = async (data, result) => {
    const flag = await checkIfUserExist(data);
    if(!flag.status){
        let sql = `INSERT INTO users (username, email, password) VALUES ('${data.username}', '${data.email}', '${data.password}')`;
        db.query(sql, (err, response) => {
            if(err){
                result(err, null);
            }
            else{
                result(null, {status: true, response});
            }
        })
    }
    else{
        result(null, {status: false, msg: 'user already exists'});
    }

}
user.login = async (data, result) => {
    const flag = await checkIfUserExist(data);
    if(flag.status){
        if(data.password === flag.response[0].password){
            result(null, {status: true, user: flag.response[0]});
        }
        else{
            result(null, {status: false});
        }
    }
    else{
        result(null, {status: false});

    }
}
user.getAllUsers = (data, result) => {
    let sql = `SELECT * FROM users`;
    db.query(sql, (err, users) => {
        if(err) result(null, {status: false});
        else{
            result(null, {users: users});
        }
    })
}
function checkIfUserExist(user){
    let sql =  `SELECT * FROM users WHERE email = '${user.email}'`;
    return new Promise((resolve, reject) => {
        db.query(sql, (err, response) =>{
            if(err) return reject(err);
            else{
                console.log(response.length)
                if(response.length >= 1)
                    resolve({status: true, response})
                else
                    resolve({status: false, response})
            }
        })
    })

}

module.exports = user;
