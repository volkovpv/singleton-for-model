let express = require('express');

let router = express.Router();

let Singleton = require('../singleton');

let singleton = new Singleton({prop: 'pet'});

/* GET pet listing. */
router.get('/', function(req, res, next) {
    console.log(`singleton.counter: ${singleton.counter} and singleton.prop: ${singleton.prop}`);
    res.send('respond with a pet');
});

module.exports = router;
