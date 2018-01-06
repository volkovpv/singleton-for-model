let express = require('express');

let router = express.Router();

let Singleton = require('../singleton');

let singleton = new Singleton({prop: 'index'});

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(`singleton.counter: ${singleton.counter} and singleton.prop: ${singleton.prop}`);
  res.render('index', { title: 'Express' });
});

module.exports = router;
