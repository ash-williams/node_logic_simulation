var demux8way = require('../controllers/demux8way');

module.exports = function(app){
	app.route('/api/demux8way')
		.get(demux8way.get)
		.post(demux8way.post);

}