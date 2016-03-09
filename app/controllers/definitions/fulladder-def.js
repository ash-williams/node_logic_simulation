var halfadder = require('./halfadder-def.js'),
    or = require('./or-def.js');

module.exports = {
        fulladder: function(a,b,c){
            var res1 = halfadder.halfadder(a,b);
            
            var ab = res1.sum;
            var cab = res1.carry;
            
            var res2 = halfadder.halfadder(c.toString(), ab.toString());
            
            var sum = res2.sum;
            var s = res2.carry;
            
            var carry = or.or(cab.toString(),s.toString());
            
             return {
                sum: sum.toString(),
                carry: carry.toString()
             };
    }
};


// CHIP FullAdder {
//     IN a, b, c;  // 1-bit inputs
//     OUT sum,     // Right bit of a + b + c
//         carry;   // Left bit of a + b + c

//     PARTS:
// HalfAdder(a=a,b=b,sum=ab,carry=cab);
// HalfAdder(a=c,b=ab,sum=sum,carry=s);
// Or(a=cab,b=s,out=carry);


// }