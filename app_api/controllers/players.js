var mongoose = require('mongoose');
var Player = mongoose.model('Player');

var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
};

module.exports.allPlayers = function(req, res){
	Player.find()
		.exec(function(err, players){
			if(!players){
				sendJsonResponse(res, 404, {
					"message" : "players not found"
				});
			} else if(err){
				sendJsonResponse(res, 404, err);
				return;
			}
			sendJsonResponse(res, 200, players);
		});
};

module.exports.playerCreate = function(req, res){
	Player.create({
		details: {
	        name: req.body.name,
	        preferredPosition : req.body.preferredPosition
	    }
	}, function(err, player){
		if(err){
			sendJsonResponse(res, 400, err);
		} else {
			sendJsonResponse(res, 201, player);
		}
	});
};

module.exports.playerReadOne = function(req, res){
	if(req.params && req.params.playerid){
		Player.findById(req.params.playerid)
		.exec(function(err, player){
			if(!player){
				sendJsonResponse(res, 404, {
					"message" : "player not found"
				});
			} else if(err){
				sendJsonResponse(res, 404, err);
				return;
			}
			sendJsonResponse(res, 200, player);
		});
	} else {
		sendJsonResponse(res, 404, {
			"message" : "No playerId in request"
		});
	} 
};

module.exports.playerUpdateOne = function(req, res){
	if(!req.params.playerid){
		sendJsonResponse(res, 404, {"message": "Not found, playerid is required"});
		return;
	}
	Player.findById(req.params.playerid)
		.select('-totals -stats')
		.exec(function(err, player){
			if(!player){
				sendJsonResponse(res, 404, {"message": "playerid not found"});
				return;
			} else if(err){
				sendJsonResponse(res, 400, err);
				return;
			}
			player.details.name = req.body.name, 
	    	player.details.preferredPosition = req.body.preferredPosition,
	    	player.save(function(err, player){
	    		if(err){
					sendJsonResponse(res, 404, err);
	    		} else {
	    			sendJsonResponse(res, 200, player);
	    		}
	    	});
		});
};

module.exports.playerDeleteOne = function(req, res){
	var playerId = req.params.playerid;
	if(playerId){
		Player.findByIdAndRemove(playerId)
			.exec(function(err){
				if(err){
					sendJsonResponse(res, 404, err);
					return;
				} 
				sendJsonResponse(res, 204, {"message": "deleted"});
			});
	} else {
		sendJsonResponse(res, 404, {"message": "No playerId"});
	}
};