var express = require('express');
var router = express.Router();

/* GET mensajes */
router.get('/', function (req, res, next) {
    res.send("sirve mensajes");
});

module.exports = router;
