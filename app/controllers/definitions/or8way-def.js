var or = require('./or-def.js');

module.exports = {
        or8way: function(
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7,
                a8
                ){
            
            var b = or.or(a1, a2);
            var c = or.or(b.toString(), a3);
            var d = or.or(c.toString(), a4);
            var e = or.or(d.toString(), a5);
            var f = or.or(e.toString(), a6);
            var g = or.or(f.toString(), a7);
            return or.or(g.toString(), a8);
    }
};