// var nand = require('./nand.js');
// function not(a){
//     return nand.post(a,a);
// }

var def = require('./definitions/not-def.js');

exports.get = function(req, res){
    res.json({
        content: 'NOT page'
    });
};

exports.post = function(req, res){
    res.json({
        result: def.not(req.body.a)
    });
};