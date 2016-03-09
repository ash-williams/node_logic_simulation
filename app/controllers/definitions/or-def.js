var nand = require('./nand-def.js'),
    not = require('./not-def.js');

module.exports = {
    or: function(a,b){
        var c = not.not(a);
        var d = not.not(b);
        return nand.nand(c.toString(),d.toString());
    }
};