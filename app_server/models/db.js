var mongoose = require("mongoose");

// Connect to the Fantasy Football Data mongoDB
var ffDataStr = "mongodb://localhost/ffData"; 
var ffDataDB = mongoose.createConnection(ffDataStr);

ffDataDB.on('connected', function(){
	console.log("Successfully connected to the ffDataDB");
});

ffDataDB.on('error', function(){
	console.log("An error has occured when attempting to connect to the ffDataDB");
});

ffDataDB.on('disconnected', function(){
	console.log("Successfully disconnected to the ffDataDB");
});