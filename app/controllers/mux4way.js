var def = require('./definitions/mux4way-def.js');

exports.get = function(req, res){
    res.json({
        content: 'MUX4WAY page'
    });
};

exports.post = function(req, res){
    res.json({
        result: def.mux4way(req.body.a, req.body.b, req.body.c, req.body.d, req.body.sel1, req.body.sel2)
    });
};