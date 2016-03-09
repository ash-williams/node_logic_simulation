var nand = require('./nand-def.js'),
    not = require('./not-def.js');

module.exports = {
    and: function(a,b){
        var c = nand.nand(a,b);
        return not.not(c.toString());
    }
};