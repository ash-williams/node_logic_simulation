var alu = require('../controllers/alu');

module.exports = function(app){
	app.route('/api/alu')
		.get(alu.get)
		.post(alu.post);

}