var inc16 = require('../controllers/inc16');

module.exports = function(app){
	app.route('/api/inc16')
		.get(inc16.get)
		.post(inc16.post);

}