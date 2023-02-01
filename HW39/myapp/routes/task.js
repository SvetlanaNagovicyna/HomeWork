var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
	res.json({
		status: 'ok',
		data: Number(req.body.firstInputValue) + Number(req.body.secondInputValue)
	});
});


module.exports = router;