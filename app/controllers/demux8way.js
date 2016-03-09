var def = require('./definitions/demux8way-def.js');

exports.get = function(req, res){
    res.json({
        content: 'DEMUX8WAY page'
    });
};

exports.post = function(req, res){
    res.json({
        result: def.demux8way(req.body.in, req.body.sel1, req.body.sel2, req.body.sel3)
    });
};