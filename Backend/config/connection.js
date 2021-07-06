
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
    }
})
module.exports = db_conn;
