var or16 = require('../controllers/or16');

module.exports = function(app){
	app.route('/api/or16')
		.get(or16.get)
		.post(or16.post);
};