var nand = require('../controllers/nand');

module.exports = function(app){
	app.route('/api/nand')
		.get(nand.get)
		.post(nand.post);

}