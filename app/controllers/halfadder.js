var def = require('./definitions/halfadder-def.js');

exports.get = function(req, res){
    res.json({
        content: 'HalfAdder page'
    });
};

exports.post = function(req, res){
    res.json({
        result: def.halfadder(req.body.a, req.body.b)
    });
};

