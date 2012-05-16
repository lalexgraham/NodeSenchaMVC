
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function (req, res) {
   res.redirect('/index.html');
});

var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/PoiPoi');

//create the marker Model using the 'marker' collection as a data-source
markerModel = mongoose.model('marker', new mongoose.Schema({
    MarkerID: Number,
    title: String,
    long: String,
    lat: String,
    icon: String,
    description: String
}));


poiModel = mongoose.model('poi', new mongoose.Schema({
    MarkerID: Number,
    title: String,
    image: String,
    description: String
}));


app.get('/markers', function (req, res) {
    markerModel.find({}, function (err, markers) {
        res.contentType('json');
        res.json({
            success: true,
          data: markers

        });
    });

});

app.get('/marker/:markerid', function (req, res) {
    markerModel.find({MarkerID: +req.params.markerid}, function (err, markers) {
        res.contentType('json');
        res.json({
            success: true,
          data: markers

        });
    });

});


//example url 
//http://localhost:5000/pois/1234

app.get('/pois/:markerid', function(req, res) {
//console.log('markerid param : ' + req.params.markerid);
 poiModel.find({MarkerID: +req.params.markerid}, function (err,pois) {
		res.contentType('json');
		res.json({
		    success: true,
		  data: pois

		});
 });
});


app.get('/pois', function(req, res) {
 poiModel.find({}, function (err,pois) {
		res.contentType('json');
		res.json({
		    success: true,
		  data: pois

		});
 });
});

app.get('/poi/insert',function() {
	var poi = new poiModel();
	poi.title ='New Poi!';
	poi.image ='';
	poi.description ='A description about the Poi';
	poi.MarkerID = 78;
	poi.save(function(err, poi_Saved){
		if (err){
			throw err;
			console.log(err);
		}else{

			console.log('Poi is saved');
		}	
	});
});


app.listen(5000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
