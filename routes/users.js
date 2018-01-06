let express = require('express');

let router = express.Router();

let Singleton = require('../singleton');

let singleton = new Singleton({prop: 'app'});

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(`singleton.counter: ${singleton.counter} and singleton.prop: ${singleton.prop}`);
  res.send('respond with a resource');
});

module.exports = router;
