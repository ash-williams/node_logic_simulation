// function nand(a,b){
//     if(a.typeof != Boolean){
//         a = stringToBoolean(a);
//     }
    
//     if(b.typeof != Boolean){
//         b = stringToBoolean(b);
//     }
    
//     return !(a && b);
// }

// function stringToBoolean(string){
//     switch(string.toLowerCase().trim()){
//         case "true": case "yes": case "1": return true;
//         case "false": case "no": case "0": case null: return false;
//         default: return Boolean(string);
//     }
// }

var def = require('./definitions/nand-def.js');

exports.get = function(req, res){
    res.json({
        content: 'NAND page'
    });
};

exports.post = function(req, res){
    res.json({
        result: def.nand(req.body.a, req.body.b)
    });
};

