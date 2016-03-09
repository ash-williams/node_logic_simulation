var not = require('./not-def.js');

module.exports = {
        not16: function(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16){
             return {
                r1: not.not(i1).toString(),
                r2: not.not(i2).toString(),
                r3: not.not(i3).toString(),
                r4: not.not(i4).toString(),
                r5: not.not(i5).toString(),
                r6: not.not(i6).toString(),
                r7: not.not(i7).toString(),
                r8: not.not(i8).toString(),
                r9: not.not(i9).toString(),
                r10: not.not(i10).toString(),
                r11: not.not(i11).toString(),
                r12: not.not(i12).toString(),
                r13: not.not(i13).toString(),
                r14: not.not(i14).toString(),
                r15: not.not(i15).toString(),
                r16: not.not(i16).toString()
             };
    }
};