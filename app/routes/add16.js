var add16 = require('../controllers/add16');

module.exports = function(app){
	app.route('/api/add16')
		.get(add16.get)
		.post(add16.post);

};