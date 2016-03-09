var nand = require('./nand-def.js');

module.exports = {
        not: function(a){
             return nand.nand(a,a);
    }
};