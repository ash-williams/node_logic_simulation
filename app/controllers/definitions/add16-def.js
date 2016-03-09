var halfadder = require('./halfadder-def.js'),
    fulladder = require('./fulladder-def.js');

module.exports = {
        add16: function(
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7,
                a8,
                a9,
                a10,
                a11,
                a12,
                a13,
                a14,
                a15,
                a16,
                b1,
                b2,
                b3,
                b4,
                b5,
                b6,
                b7,
                b8,
                b9,
                b10,
                b11,
                b12,
                b13,
                b14,
                b15,
                b16
            ){
            var res1  = halfadder.halfadder(a1,b1);
            var res2  = fulladder.fulladder(a2,b2,res1.carry);
            var res3  = fulladder.fulladder(a3,b3,res2.carry);
            var res4  = fulladder.fulladder(a4,b4,res3.carry);
            var res5  = fulladder.fulladder(a5,b5,res4.carry);
            var res6  = fulladder.fulladder(a6,b6,res5.carry);
            var res7  = fulladder.fulladder(a7,b7,res6.carry);
            var res8  = fulladder.fulladder(a8,b8,res7.carry);
            var res9  = fulladder.fulladder(a9,b9,res8.carry);
            var res10 = fulladder.fulladder(a10,b10,res9.carry);
            var res11 = fulladder.fulladder(a11,b11,res10.carry);
            var res12 = fulladder.fulladder(a12,b12,res11.carry);
            var res13 = fulladder.fulladder(a13,b13,res12.carry);
            var res14 = fulladder.fulladder(a14,b14,res13.carry);
            var res15 = fulladder.fulladder(a15,b15,res14.carry);
            var res16 = fulladder.fulladder(a16,b16,res15.carry);
            
            return {
                r1: res1.sum,
                r2: res2.sum,
                r3: res3.sum,
                r4: res4.sum,
                r5: res5.sum,
                r6: res6.sum,
                r7: res7.sum,
                r8: res8.sum,
                r9: res9.sum,
                r10: res10.sum,
                r11: res11.sum,
                r12: res12.sum,
                r13: res13.sum,
                r14: res14.sum,
                r15: res15.sum,
                r16: res16.sum
            };
            
            
    }
};


// CHIP Add16 {
//     IN a[16], b[16];
//     OUT out[16];

//     PARTS:	
// 	HalfAdder(a=a[0],b=b[0],sum=out[0],carry=c);
// 	FullAdder(a=a[1],b=b[1],c=c,sum=out[1],carry=d);
// 	FullAdder(a=a[2],b=b[2],c=d,sum=out[2],carry=e);
// 	FullAdder(a=a[3],b=b[3],c=e,sum=out[3],carry=f);
// 	FullAdder(a=a[4],b=b[4],c=f,sum=out[4],carry=g);
// 	FullAdder(a=a[5],b=b[5],c=g,sum=out[5],carry=h);
// 	FullAdder(a=a[6],b=b[6],c=h,sum=out[6],carry=i);
// 	FullAdder(a=a[7],b=b[7],c=i,sum=out[7],carry=j);
// 	FullAdder(a=a[8],b=b[8],c=j,sum=out[8],carry=k);
// 	FullAdder(a=a[9],b=b[9],c=k,sum=out[9],carry=l);
// 	FullAdder(a=a[10],b=b[10],c=l,sum=out[10],carry=m);
// 	FullAdder(a=a[11],b=b[11],c=m,sum=out[11],carry=n);
// 	FullAdder(a=a[12],b=b[12],c=n,sum=out[12],carry=o);
// 	FullAdder(a=a[13],b=b[13],c=o,sum=out[13],carry=p);
// 	FullAdder(a=a[14],b=b[14],c=p,sum=out[14],carry=q);
// 	FullAdder(a=a[15],b=b[15],c=q,sum=out[15],carry=drop);
// }