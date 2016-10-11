var mongoose = require('mongoose');
var Game = mongoose.model('Game');

var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
};

module.exports.allGames = function(req, res){
	sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.gameCreate = function(req, res){
	sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.gameReadOne = function(req, res){
	sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.gameUpdateOne = function(req, res){
	sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.gameDeleteOne = function(req, res){
	sendJsonResponse(res, 200, {"status": "success"});
};