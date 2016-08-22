var express = require('express');
var router = express.Router();
const mongodb = require('../mongodb/get-hello');

router.get('/hello', mongodb.getHello);

module.exports = router;
