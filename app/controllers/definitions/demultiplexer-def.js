var and = require('./and-def.js'),
    not = require('./not-def.js');

module.exports = {
    demultiplexer: function(a,b){
        var c = not.not(b);
        var d = not.not(c.toString());
        var e = and.and(c.toString(), a);
        var f = and.and(d.toString(), a);
        
        return {
            a: e.toString(), 
            b: f.toString()
        };
    }
};