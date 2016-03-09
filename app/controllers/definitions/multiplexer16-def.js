var multiplexer = require('./multiplexer-def.js');

module.exports = {
        multiplexer16: function(
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
                b16,
                c1
                ){
             return {
                r1: multiplexer.multiplexer(a1, b1, c1).toString(),
                r2: multiplexer.multiplexer(a2, b2, c1).toString(),
                r3: multiplexer.multiplexer(a3, b3, c1).toString(),
                r4: multiplexer.multiplexer(a4, b4, c1).toString(),
                r5: multiplexer.multiplexer(a5, b5, c1).toString(),
                r6: multiplexer.multiplexer(a6, b6, c1).toString(),
                r7: multiplexer.multiplexer(a7, b7, c1).toString(),
                r8: multiplexer.multiplexer(a8, b8, c1).toString(),
                r9: multiplexer.multiplexer(a9, b9, c1).toString(),
                r10: multiplexer.multiplexer(a10, b10, c1).toString(),
                r11: multiplexer.multiplexer(a11, b11, c1).toString(),
                r12: multiplexer.multiplexer(a12, b12, c1).toString(),
                r13: multiplexer.multiplexer(a13, b13, c1).toString(),
                r14: multiplexer.multiplexer(a14, b14, c1).toString(),
                r15: multiplexer.multiplexer(a15, b15, c1).toString(),
                r16: multiplexer.multiplexer(a16, b16, c1).toString()
             };
    }
};