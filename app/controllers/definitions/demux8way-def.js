var demux = require('./demultiplexer-def.js');

module.exports = {
    demux8way: function(i,sel1,sel2, sel3){
        var res1 = demux.demultiplexer(i, sel3);
        
        var ao = res1.a;
        var bo = res1.b;
        
        var res2 = demux.demultiplexer(ao, sel2);
        
        var aoo = res2.a;
        var boo = res2.b;
        
        var res3 = demux.demultiplexer(bo, sel2);
        
        var coo = res3.a;
        var doo = res3.b;
        
        var res4 = demux.demultiplexer(aoo, sel1);
        var res5 = demux.demultiplexer(boo, sel1);
        var res6 = demux.demultiplexer(coo, sel1);
        var res7 = demux.demultiplexer(doo, sel1);
        
        
        return {
            a: res4.a.toString(), 
            b: res4.b.toString(),
            c: res5.a.toString(),
            d: res5.b.toString(),
            e: res6.a.toString(),
            f: res6.b.toString(),
            g: res7.a.toString(),
            h: res7.b.toString(),
        };
    }
};

// CHIP DMux8Way {
//     IN in, sel[3];
//     OUT a, b, c, d, e, f, g, h;

//     PARTS:
// 	DMux(in=in,sel=sel[2],a=ao,b=bo);

// 	DMux(in=ao,sel=sel[1],a=aoo,b=boo);
// 	DMux(in=bo,sel=sel[1],a=coo,b=doo);

// 	DMux(in=aoo,sel=sel[0],a=a,b=b);
// 	DMux(in=boo,sel=sel[0],a=c,b=d);
// 	DMux(in=coo,sel=sel[0],a=e,b=f);
// 	DMux(in=doo,sel=sel[0],a=g,b=h);
// }