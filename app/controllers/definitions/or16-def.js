var or = require('./or-def.js');

module.exports = {
        or16: function(
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
                r1: or.or(a1, b1).toString(),
                r2: or.or(a2, b2).toString(),
                r3: or.or(a3, b3).toString(),
                r4: or.or(a4, b4).toString(),
                r5: or.or(a5, b5).toString(),
                r6: or.or(a6, b6).toString(),
                r7: or.or(a7, b7).toString(),
                r8: or.or(a8, b8).toString(),
                r9: or.or(a9, b9).toString(),
                r10: or.or(a10, b10).toString(),
                r11: or.or(a11, b11).toString(),
                r12: or.or(a12, b12).toString(),
                r13: or.or(a13, b13).toString(),
                r14: or.or(a14, b14).toString(),
                r15: or.or(a15, b15).toString(),
                r16: or.or(a1, b16).toString()
             };
    }
};