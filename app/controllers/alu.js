var def = require('./definitions/alu-def.js');

exports.get = function(req, res){
    res.json({
        content: 'ALU page'
    });
};

exports.post = function(req, res){
    res.json({
        result: def.alu(
            req.body.x1, 
            req.body.x2, 
            req.body.x3, 
            req.body.x4, 
            req.body.x5, 
            req.body.x6, 
            req.body.x7, 
            req.body.x8, 
            req.body.x9, 
            req.body.x10, 
            req.body.x11, 
            req.body.x12, 
            req.body.x13, 
            req.body.x14, 
            req.body.x15, 
            req.body.x16,
            req.body.y1, 
            req.body.y2, 
            req.body.y3, 
            req.body.y4, 
            req.body.y5, 
            req.body.y6, 
            req.body.y7, 
            req.body.y8, 
            req.body.y9, 
            req.body.y10, 
            req.body.y11, 
            req.body.y12, 
            req.body.y13, 
            req.body.y14, 
            req.body.y15, 
            req.body.y16,
            req.body.zx,
            req.body.nx,
            req.body.zy,
            req.body.ny,
            req.body.f,
            req.body.no
            )
    });
};


//   IN  
//         x[16], y[16],  // 16-bit inputs        
//         zx, // zero the x input?
//         nx, // negate the x input?
//         zy, // zero the y input?
//         ny, // negate the y input?
//         f,  // compute  out = x + y (if 1) or out = x & y (if 0)
//         no; // negate the out output?