var airplay = require('airplay');
var express = require('express');
var app = express();

// START SERVER
var server = app.listen(3001, function () {
  var host = server.address().address
  var port = server.address().port
});

// localhost:port/api/handshake/
app.get("/api/handshake", function(req,res) {
	res.sendStatus(200);
});

// localhost:port/api/play/:filename
app.get('/api/play/:filename', function (req, res) {

	var browser = airplay.createBrowser();
	browser.on('deviceOnline', function(device) {
		device.play(url , 0);
	});
	browser.start();

	res.send(req.params.filename);

});