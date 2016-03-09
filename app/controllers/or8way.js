var def = require('./definitions/or8way-def.js');

exports.get = function(req, res){
    res.json({
        content: 'OR8Way page'
    });
};

exports.post = function(req, res){
    res.json({
        result: def.or8way(
            req.body.a1, 
            req.body.a2, 
            req.body.a3, 
            req.body.a4, 
            req.body.a5, 
            req.body.a6, 
            req.body.a7, 
            req.body.a8)
    });
};