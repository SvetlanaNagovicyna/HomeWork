var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
	res.json({
		status: 'ok',
		data: req.body
	});
});

module.exports = router;