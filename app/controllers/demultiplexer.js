var def = require('./definitions/demultiplexer-def.js');

exports.get = function(req, res){
    res.json({
        content: 'Demultiplexer page'
    });
};

exports.post = function(req, res){
    res.json({
        result: def.demultiplexer(req.body.a, req.body.b)
    });
};