var def = require('./definitions/and-def.js');

exports.get = function(req, res){
    res.json({
        content: 'AND page'
    });
};

exports.post = function(req, res){
    res.json({
        result: def.and(req.body.a, req.body.b)
    });
};