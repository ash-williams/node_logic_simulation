var def = require('./definitions/bit-def.js');

exports.get = function(req, res){
    res.json({
        content: 'bit page'
    });
};

exports.post = function(req, res){
    res.json({
        result: def.bit(req.body.in, req.body.load)
    });
};