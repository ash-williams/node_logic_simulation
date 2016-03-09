var or = require('../controllers/or');

module.exports = function(app){
	app.route('/api/or')
		.get(or.get)
		.post(or.post);

}