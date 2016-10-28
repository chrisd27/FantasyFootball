var mongoose = require("mongoose");

// Connect to the Fantasy Football Data mongoDB
mongoose.Promise = global.Promise;
var ffDataStr = "mongodb://localhost/ffData"; 
/*
var ffDataDB = mongoose.createConnection(ffDataStr);

ffDataDB.on('connected', function(){
	console.log("Mongoose connected to "+ffDataStr);
});

ffDataDB.on('error', function(e){
	console.log("Mongoose connection error :"+e);
});

ffDataDB.on('disconnected', function(){
	console.log("Mongoose successfully disconnected");
});

*/
mongoose.connect(ffDataStr);

mongoose.connection.on('connected', function(){
	console.log("Mongoose connected to "+ffDataStr);
});

mongoose.connection.on('error', function(e){
	console.log("Mongoose connection error :"+e);
});

mongoose.connection.on('disconnected', function(){
	console.log("Mongoose successfully disconnected");
});

gracefulShutdown = function (msg, callback){
	mongoose.connection.close(function(){
		console.log("Mongoose disconnect "+msg);
		callback();
	});
}

// Nodemon restarts
process.once('SIGUSR2', function(){
	gracefulShutdown('nodemon restart', function(){
		process.kill(process.id, 'SIGUSR2');
	});
});

// For app termination
process.once('SIGINT', function(){
	gracefulShutdown('app termination', function(){
		process.exit(0);
	});
});

// For app termination
process.once('SIGTERM', function(){
	gracefulShutdown('Heroku app termination', function(){
		process.exit(0);
	});
});

// Require Mongoose Schemas
require('./players');
require('./games');
require('./rules');
require('./team');