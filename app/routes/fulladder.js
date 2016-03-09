var fulladder = require('../controllers/fulladder');

module.exports = function(app){
	app.route('/api/fulladder')
		.get(fulladder.get)
		.post(fulladder.post);

};