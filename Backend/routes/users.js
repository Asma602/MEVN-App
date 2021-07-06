var express = require('express');
var router = express.Router();
const user = require('../controllers/users.controller');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getAllUsers', user.getAllUsers)
module.exports = router;
