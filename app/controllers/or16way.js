var def = require('./definitions/or16way-def.js');

exports.get = function(req, res){
    res.json({
        content: 'OR16Way page'
    });
};

exports.post = function(req, res){
    res.json({
        result: def.or16way(
            req.body.a1, 
            req.body.a2, 
            req.body.a3, 
            req.body.a4, 
            req.body.a5, 
            req.body.a6, 
            req.body.a7, 
            req.body.a8,
            req.body.a9, 
            req.body.a10, 
            req.body.a11, 
            req.body.a12, 
            req.body.a13, 
            req.body.a14, 
            req.body.a15, 
            req.body.a16)
    });
};