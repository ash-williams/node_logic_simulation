var mux4way = require('../controllers/mux4way');

module.exports = function(app){
	app.route('/api/mux4way')
		.get(mux4way.get)
		.post(mux4way.post);

}