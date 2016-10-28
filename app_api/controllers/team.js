var mongoose = require('mongoose');
var Team = mongoose.model('Team');

var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
};

module.exports.allTeams = function(req, res){
	Team.find()
	.exec(function(err, teams){
		if(!teams){
			sendJsonResponse(res, 404, {
				"message" : "teams not found"
			});
		} else if(err){
			sendJsonResponse(res, 404, err);
			return;
		}
		sendJsonResponse(res, 200, teams);
	});
};

module.exports.teamCreate = function(req, res){
	Team.create({
	    teamName: req.body.teamName
	}, function(err, game){
		if(err){
			sendJsonResponse(res, 400, err);
		} else {
			sendJsonResponse(res, 201, game);
		}
	});
};

module.exports.teamReadOne = function(req, res){
	if(req.params && req.params.teamid){
		Team.findById(req.params.teamid)
		.exec(function(err, team){
			if(!team){
				sendJsonResponse(res, 404, {
					"message" : "team not found"
				});
			} else if(err){
				sendJsonResponse(res, 404, err);
				return;
			}
			sendJsonResponse(res, 200, game);
		});
	} else {
		sendJsonResponse(res, 404, {
			"message" : "No teamId in request"
		});
	} 
};

module.exports.teamUpdateOne = function(req, res){
	if(!req.params.teamid){
		sendJsonResponse(res, 404, {"message": "Not found, teamid is required"});
		return;
	}
	Team.findById(req.params.teamid)
		.exec(function(err, team){
			if(!team){
				sendJsonResponse(res, 404, {"message": "teamid not found"});
				return;
			} else if(err){
				sendJsonResponse(res, 400, err);
				return;
			}
			team.teamName = req.body.teamName
	    	team.save(function(err, team){
	    		if(err){
					sendJsonResponse(res, 404, err);
	    		} else {
	    			sendJsonResponse(res, 200, team);
	    		}
	    	});
		});
};

module.exports.teamDeleteOne = function(req, res){
	var teamId = req.params.teamid;
	if(teamId){
		Team.findByIdAndRemove(gameId)
			.exec(function(err){
				if(err){
					sendJsonResponse(res, 404, err);
					return;
				} 
				sendJsonResponse(res, 204, {"message": "deleted"});
			});
	} else {
		sendJsonResponse(res, 404, {"message": "No teamid"});
	}
};