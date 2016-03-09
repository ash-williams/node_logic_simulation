var not16 = require('../controllers/not16');

module.exports = function(app){
	app.route('/api/not16')
		.get(not16.get)
		.post(not16.post);

}