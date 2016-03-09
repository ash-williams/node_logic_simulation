var or8way = require('../controllers/or8way');

module.exports = function(app){
	app.route('/api/or8way')
		.get(or8way.get)
		.post(or8way.post);
};