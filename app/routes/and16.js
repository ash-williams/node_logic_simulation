var and16 = require('../controllers/and16');

module.exports = function(app){
	app.route('/api/and16')
		.get(and16.get)
		.post(and16.post);

};