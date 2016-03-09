var not = require('../controllers/not');

module.exports = function(app){
	app.route('/api/not')
		.get(not.get)
		.post(not.post);

}