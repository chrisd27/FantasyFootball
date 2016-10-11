var mongoose = require('mongoose');
var Player = mongoose.model('Player');

var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
};

module.exports.allPlayers = function(req, res){
	sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.playerCreate = function(req, res){
	sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.playerReadOne = function(req, res){
	sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.playerUpdateOne = function(req, res){
	sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.playerDeleteOne = function(req, res){
	sendJsonResponse(res, 200, {"status": "success"});
};