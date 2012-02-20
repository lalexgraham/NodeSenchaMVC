
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

db = mongoose.connect('mongodb://127.0.0.1/PoiPoi');

//create the marker Model using the 'marker' collection as a data-source
markerModel = mongoose.model('marker', new mongoose.Schema({
    MarkerID: Number,
    title: String,
    long: String,
    lat: String,
    icon: String,
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


app.listen(5000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
