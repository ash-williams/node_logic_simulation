var def = require('./definitions/or16-def.js');

exports.get = function(req, res){
    res.json({
        content: 'OR16 page'
    });
};

exports.post = function(req, res){
    res.json({
        result: def.or16(
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
            req.body.a16,
            req.body.b1, 
            req.body.b2, 
            req.body.b3, 
            req.body.b4, 
            req.body.b5, 
            req.body.b6, 
            req.body.b7, 
            req.body.b8, 
            req.body.b9, 
            req.body.b10, 
            req.body.b11, 
            req.body.b12, 
            req.body.b13, 
            req.body.b14, 
            req.body.b15, 
            req.body.b16)
    });
};