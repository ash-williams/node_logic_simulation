var demultiplexer = require('../controllers/demultiplexer');

module.exports = function(app){
	app.route('/api/demultiplexer')
		.get(demultiplexer.get)
		.post(demultiplexer.post);

}