var halfadder = require('../controllers/halfadder');

module.exports = function(app){
	app.route('/api/halfadder')
		.get(halfadder.get)
		.post(halfadder.post);

}