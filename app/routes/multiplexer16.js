var multiplexer16 = require('../controllers/multiplexer16');

module.exports = function(app){
	app.route('/api/multiplexer16')
		.get(multiplexer16.get)
		.post(multiplexer16.post);

};