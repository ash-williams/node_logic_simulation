var mux8way16 = require('../controllers/mux8way16');

module.exports = function(app){
	app.route('/api/mux8way16')
		.get(mux8way16.get)
		.post(mux8way16.post);

};