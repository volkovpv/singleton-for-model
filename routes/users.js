let express = require('express');

let router = express.Router();

let Singleton = require('../singleton');



/* GET users listing. */
router.get('/', function(req, res, next) {
    let singleton = new Singleton();
  console.log(`singleton.counter: ${singleton.counter} and singleton.prop: ${singleton.prop}`);
  res.send('respond with a resource');
});

module.exports = router;
