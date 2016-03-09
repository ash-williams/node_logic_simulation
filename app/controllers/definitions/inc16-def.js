var add16 = require('./add16-def.js');

module.exports = {
        inc16: function(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16){
             
        //      var b1 = "true",
        //         b2 = "false",
        //         b3 = "false",
        //         b4 = "false",
        //         b5 = "false",
        //         b6 = "false",
        //         b7 = "false",
        //         b8 = "false",
        //         b9 = "false",
        //         b10 = "false",
        //         b11 = "false",
        //         b12 = "false",
        //         b13 = "false",
        //         b14 = "false",
        //         b15 = "false",
        //         b16 = "false";
             
             var res1 = add16.add16(
                        i1,
                        i2,
                        i3,
                        i4,
                        i5,
                        i6,
                        i7,
                        i8,
                        i9,
                        i10,
                        i11,
                        i12,
                        i13,
                        i14,
                        i15,
                        i16,
                        "true",
                        "false",
                        "false",
                        "false",
                        "false",
                        "false",
                        "false",
                        "false",
                        "false",
                        "false",
                        "false",
                        "false",
                        "false",
                        "false",
                        "false",
                        "false"
                     );
             
             return {
                r1: (res1.r1).toString(),
                r2: (res1.r2).toString(),
                r3: (res1.r3).toString(),
                r4: (res1.r4).toString(),
                r5: (res1.r5).toString(),
                r6: (res1.r6).toString(),
                r7: (res1.r7).toString(),
                r8: (res1.r8).toString(),
                r9: (res1.r9).toString(),
                r10: (res1.r10).toString(),
                r11: (res1.r11).toString(),
                r12: (res1.r12).toString(),
                r13: (res1.r13).toString(),
                r14: (res1.r14).toString(),
                r15: (res1.r15).toString(),
                r16: (res1.r16).toString()     
                };
    }
};

// CHIP Inc16 {
//     IN in[16];
//     OUT out[16];

//     PARTS:
// Add16(a=in,b[0]=true,out=out);
// }