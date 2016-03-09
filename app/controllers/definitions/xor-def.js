var nand = require('./nand-def.js');

module.exports = {
    xor: function(a,b){
        var c = nand.nand(a,b);
        var d = nand.nand(a, c.toString());
        var e = nand.nand(b, c.toString());
        return nand.nand(d.toString(), e.toString());
    }
};