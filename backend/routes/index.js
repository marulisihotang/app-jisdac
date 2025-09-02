var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    return res.json({
        status: 200,
        message: "Connection Success!"
    });
});

module.exports = router;
