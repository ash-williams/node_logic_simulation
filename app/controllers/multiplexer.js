var def = require('./definitions/multiplexer-def.js');

exports.get = function(req, res){
    res.json({
        content: 'Multiplexer page'
    });
};

exports.post = function(req, res){
    res.json({
        result: def.multiplexer(req.body.a, req.body.b, req.body.c)
    });
};