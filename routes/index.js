let express = require('express');

let router = express.Router();

let Singleton = require('../singleton');

/* GET home page. */
router.get('/', function(req, res, next) {
    let singleton = new Singleton();
    console.log(`singleton.counter: ${singleton.counter} and singleton.prop: ${singleton.prop}`);
  res.render('index', { title: 'Express' });
});

module.exports = router;
