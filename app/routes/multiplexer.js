var multiplexer = require('../controllers/multiplexer');

module.exports = function(app){
	app.route('/api/multiplexer')
		.get(multiplexer.get)
		.post(multiplexer.post);

};