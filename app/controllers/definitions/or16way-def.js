var or = require('./or-def.js');

module.exports = {
        or16way: function(
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
                a16
                ){
            
            var b = or.or(a1, a2);
            var c = or.or(b.toString(), a3);
            var d = or.or(c.toString(), a4);
            var e = or.or(d.toString(), a5);
            var f = or.or(e.toString(), a6);
            var g = or.or(f.toString(), a7);
            var i = or.or(g.toString(), a8);
            var j = or.or(i.toString(), a9);
            var k = or.or(j.toString(), a10);
            var l = or.or(k.toString(), a11);
            var m = or.or(l.toString(), a12);
            var n = or.or(m.toString(), a13);
            var o = or.or(n.toString(), a14);
            var p = or.or(o.toString(), a15);
            return (or.or(p.toString(), a16)).toString();
    }
};