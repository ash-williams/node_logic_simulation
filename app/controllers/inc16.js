var def = require('./definitions/inc16-def.js');

exports.get = function(req, res){
    res.json({
        content: 'INC16 page'
    });
};

exports.post = function(req, res){
    res.json({
        result: def.inc16(
            req.body.i1, 
            req.body.i2, 
            req.body.i3, 
            req.body.i4, 
            req.body.i5, 
            req.body.i6, 
            req.body.i7, 
            req.body.i8, 
            req.body.i9, 
            req.body.i10, 
            req.body.i11, 
            req.body.i12, 
            req.body.i13, 
            req.body.i14, 
            req.body.i15, 
            req.body.i16)
    });
};