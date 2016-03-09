var def = require('./definitions/or-def.js');

exports.get = function(req, res){
    res.json({
        content: 'OR page'
    });
};

exports.post = function(req, res){
    res.json({
        result: def.or(req.body.a, req.body.b)
    });
};