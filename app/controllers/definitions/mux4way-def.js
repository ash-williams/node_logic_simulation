var multiplexer = require('./multiplexer-def.js');

module.exports = {
        mux4way: function(
                a,
                b,
                c,
                d,
                sel1,
                sel2
                ){
            
            var e = multiplexer.multiplexer(a,b,sel1); 
            var f = multiplexer.multiplexer(c,d,sel1);
            
            return multiplexer.multiplexer(e.toString(),f.toString(),sel2);
           
    }
};