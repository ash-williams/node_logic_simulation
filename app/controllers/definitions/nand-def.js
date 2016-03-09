var tools = require('./tools.js');
module.exports = {
    nand: function(a,b){
        if(a.typeof != Boolean){
            a = tools.stringToBoolean(a);
        }
        
        if(b.typeof != Boolean){
            b = tools.stringToBoolean(b);
        }
        
        return !(a && b);
    }
};