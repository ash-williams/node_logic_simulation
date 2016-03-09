var and = require('./and-def.js'),
    not = require('./not-def.js'),
    or = require('./or-def.js');

module.exports = {
    multiplexer: function(a,b,c){
        var d = not.not(c);
        var e = and.and(a, d.toString());
        var f = and.and(c, b);
        
        return or.or(e.toString(),f.toString());
    }
};