var and = require('./and-def.js');

module.exports = {
        and16: function(
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
             return {
                r1: and.and(a1, b1).toString(),
                r2: and.and(a2, b2).toString(),
                r3: and.and(a3, b3).toString(),
                r4: and.and(a4, b4).toString(),
                r5: and.and(a5, b5).toString(),
                r6: and.and(a6, b6).toString(),
                r7: and.and(a7, b7).toString(),
                r8: and.and(a8, b8).toString(),
                r9: and.and(a9, b9).toString(),
                r10: and.and(a10, b10).toString(),
                r11: and.and(a11, b11).toString(),
                r12: and.and(a12, b12).toString(),
                r13: and.and(a13, b13).toString(),
                r14: and.and(a14, b14).toString(),
                r15: and.and(a15, b15).toString(),
                r16: and.and(a16, b16).toString()
             };
    }
};