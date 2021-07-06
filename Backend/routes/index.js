var express = require('express');
const user = require('../controllers/users.controller');
var router = express.Router();
const task = require('../controllers/task.controller');
const db = require('../config/connection');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// user routes
router.post('/signup',user.signup);
router.post('/login', user.login);


// task routes
router.post('/addNewTask', task.addNewTask);



module.exports = router;
