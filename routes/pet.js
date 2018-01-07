let express = require('express');

let router = express.Router();

let Singleton = require('../singleton');



/* GET pet listing. */
router.get('/', function(req, res, next) {
    let singleton = new Singleton();
    console.log(`singleton.counter: ${singleton.counter} and singleton.prop: ${singleton.getListssss()}`);
    res.send('respond with a pet');
});

module.exports = router;
