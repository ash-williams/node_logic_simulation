var multiplexer = require('./multiplexer-def.js'),
    dff = require('./dff-def.js');

module.exports = {
        bit: function(i,load){
            
            var a = multiplexer.multiplexer(out, i, load);
            var out = (dff.dff(a.toString())).toString();
            return out;
        }
};


// CHIP Bit {
//     IN in, load;
//     OUT out;

//     PARTS:
// Mux(a=gayout,b=in,sel=load,out=a);
// DFF(in=a,out=out,out=gayout);
// }