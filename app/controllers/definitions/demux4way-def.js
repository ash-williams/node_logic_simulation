var demux = require('./demultiplexer-def.js');

module.exports = {
    demux4way: function(i,sel1,sel2){
        var res1 = demux.demultiplexer(i, sel2);
        
        var ao = res1.a;
        var bo = res1.b;
        
        var res2 = demux.demultiplexer(ao, sel1);
        
        var a = res2.a;
        var b = res2.b;
        
        var res3 = demux.demultiplexer(bo, sel1);
        
        var c = res3.a;
        var d = res3.b;
        
        return {
            a: a.toString(), 
            b: b.toString(),
            c: c.toString(),
            d: d.toString()
        };
    }
};

// CHIP DMux4Way {
//     IN in, sel[2];
//     OUT a, b, c, d;

//     PARTS:
// 	DMux(in=in,sel=sel[1],a=ao,b=bo);
// 	DMux(in=ao,sel=sel[0],a=a,b=b);
// 	DMux(in=bo,sel=sel[0],a=c,b=d);
// }