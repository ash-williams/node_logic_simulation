var dff = require('../controllers/dff');

module.exports = function(app){
	app.route('/api/dff')
		.get(dff.get)
		.post(dff.post);

}