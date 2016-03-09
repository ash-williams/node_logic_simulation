var xor = require('../controllers/xor');

module.exports = function(app){
	app.route('/api/xor')
		.get(xor.get)
		.post(xor.post);

}