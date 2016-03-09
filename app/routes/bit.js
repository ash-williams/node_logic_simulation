var bit = require('../controllers/bit');

module.exports = function(app){
	app.route('/api/bit')
		.get(bit.get)
		.post(bit.post);

}