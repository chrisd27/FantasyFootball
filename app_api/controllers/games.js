var mongoose = require('mongoose');
var Game = mongoose.model('Game');

var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
};

module.exports.allGames = function(req, res){
	Game.find()
	.exec(function(err, games){
		if(!games){
			sendJsonResponse(res, 404, {
				"message" : "games not found"
			});
		} else if(err){
			sendJsonResponse(res, 404, err);
			return;
		}
		sendJsonResponse(res, 200, games);
	});
};

module.exports.gameCreate = function(req, res){
	Game.create({
	    opposition: req.body.opposition, 
	    score: req.body.score, 
	    date: req.body.date, 
	    result: req.body.result
	}, function(err, game){
		if(err){
			sendJsonResponse(res, 400, err);
		} else {
			sendJsonResponse(res, 201, game);
		}
	});
};

module.exports.gameReadOne = function(req, res){
	if(req.params && req.params.gameid){
		Game.findById(req.params.gameid)
		.exec(function(err, game){
			if(!game){
				sendJsonResponse(res, 404, {
					"message" : "game not found"
				});
			} else if(err){
				sendJsonResponse(res, 404, err);
				return;
			}
			sendJsonResponse(res, 200, game);
		});
	} else {
		sendJsonResponse(res, 404, {
			"message" : "No gameId in request"
		});
	} 
};

module.exports.gameUpdateOne = function(req, res){
	if(!req.params.gameid){
		sendJsonResponse(res, 404, {"message": "Not found, gamesid is required"});
		return;
	}
	Game.findById(req.params.gameid)
		.exec(function(err, game){
			if(!game){
				sendJsonResponse(res, 404, {"message": "gameid not found"});
				return;
			} else if(err){
				sendJsonResponse(res, 400, err);
				return;
			}
			game.opposition = req.body.opposition, 
	    	game.score = req.body.score, 
	    	game.date = req.body.date,
	    	game.result = req.body.result,
	    	game.save(function(err, game){
	    		if(err){
					sendJsonResponse(res, 404, err);
	    		} else {
	    			sendJsonResponse(res, 200, game);
	    		}
	    	});
		});
};

module.exports.gameDeleteOne = function(req, res){
	var gameId = req.params.gameid;
	if(gameId){
		Game.findByIdAndRemove(gameId)
			.exec(function(err){
				if(err){
					sendJsonResponse(res, 404, err);
					return;
				} 
				sendJsonResponse(res, 204, {"message": "deleted"});
			});
	} else {
		sendJsonResponse(res, 404, {"message": "No gameid"});
	}
};