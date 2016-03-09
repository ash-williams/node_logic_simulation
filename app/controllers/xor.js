var def = require('./definitions/xor-def.js');

exports.get = function(req, res){
    res.json({
        content: 'XOR page'
    });
};

exports.post = function(req, res){
    res.json({
        result: def.xor(req.body.a, req.body.b)
    });
};