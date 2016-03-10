var express = require('express'),
	morgan = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

module.exports = function(){
	var app = express();

	if(process.env.NODE_ENV === 'development'){
		app.use(morgan('dev'));
	} else if(process.env.NODE_ENV === 'production'){
		app.use(compress());
	}
	
	//Middleware for REST API
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	
	app.use(function(req,res,next){
	    res.header('Access-Control-Allow-Origin', '*');
	    res.header('Access-Control-Allow-Methods', 'GET,POST');
	    res.header('Access-Control-Allow-Headers', 'Content-Type');
	   next();
	});
	
	app.set('views', '/pubic');
	app.set('view engine', 'ejs');
	
    require('../app/routes/index.js')(app);
	//require('../app/routes/nand.js')(app);
	

	app.get('/', function(req, res) {
	    res.render('index');
	});

	return app;
};