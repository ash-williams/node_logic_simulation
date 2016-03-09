var def = require('./definitions/fulladder-def.js');

exports.get = function(req, res){
    res.json({
        content: 'FullAdder page'
    });
};

exports.post = function(req, res){
    res.json({
        result: def.fulladder(req.body.a, req.body.b, req.body.c)
    });
};

