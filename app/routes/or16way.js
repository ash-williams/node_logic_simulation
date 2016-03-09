var or16way = require('../controllers/or16way');

module.exports = function(app){
	app.route('/api/or16way')
		.get(or16way.get)
		.post(or16way.post);
};