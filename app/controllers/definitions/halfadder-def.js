var xor = require('./xor-def.js'),
    and = require('./and-def.js');

module.exports = {
        halfadder: function(a,b){
                
             return {
                sum: (xor.xor(a,b)).toString(),
                carry: (and.and(a,b)).toString()
             };
    }
};


// CHIP HalfAdder {
//     IN a, b;    // 1-bit inputs
//     OUT sum,    // Right bit of a + b 
//         carry;  // Left bit of a + b

//     PARTS:
//     	Xor(a=a,b=b,out=sum);
// 	And(a=a,b=b,out=carry);
// }