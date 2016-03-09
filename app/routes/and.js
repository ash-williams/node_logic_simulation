var and = require('../controllers/and');

module.exports = function(app){
	app.route('/api/and')
		.get(and.get)
		.post(and.post);

}