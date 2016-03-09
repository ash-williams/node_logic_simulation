var def = require('./definitions/demux4way-def.js');

exports.get = function(req, res){
    res.json({
        content: 'DEMUX4WAY page'
    });
};

exports.post = function(req, res){
    res.json({
        result: def.demux4way(req.body.in, req.body.sel1, req.body.sel2)
    });
};