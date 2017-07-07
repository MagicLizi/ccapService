var express = require('express');
var router = express.Router();

var ccap = require('ccap')({
    width:140,
    height:32,
    offset:20,
    quality:100,
    fontsize:28
});
/* GET home page. */
router.get('/ccapInfo', function(req, res, next) {
    let ary = ccap.get();
    let txt = ary[0];
    let buf = ary[1];
    let base64Image = new Buffer(buf, 'binary').toString('base64');
    res.send({txt:txt,base64Image:base64Image});
});

module.exports = router;
