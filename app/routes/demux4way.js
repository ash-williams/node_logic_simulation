var demux4way = require('../controllers/demux4way');

module.exports = function(app){
	app.route('/api/demux4way')
		.get(demux4way.get)
		.post(demux4way.post);

}