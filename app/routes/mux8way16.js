var mux4way16 = require('../controllers/mux4way16');

module.exports = function(app){
	app.route('/api/mux4way16')
		.get(mux4way16.get)
		.post(mux4way16.post);

};