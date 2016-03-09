var def = require('./definitions/dff-def.js');

exports.get = function(req, res){
    res.json({
        content: 'DFF page'
    });
};

exports.post = function(req, res){
    res.json({
        result: def.dff(req.body.a)
    });
};