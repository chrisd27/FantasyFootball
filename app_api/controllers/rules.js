var mongoose = require('mongoose');
var Rule = mongoose.model('Rule');

var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
};

module.exports.allRules = function(req, res){
	Rule.find()
		.exec(function(err, rules){
			if(!rules){
				sendJsonResponse(res, 404, {
					"message" : "rules not found"
				});
			} else if(err){
				sendJsonResponse(res, 404, err);
				return;
			}
			sendJsonResponse(res, 200, rules);
		});
};

module.exports.ruleCreate = function(req, res){
	Rule.create({
		name: req.body.name, 
	    points: req.body.points, 
	    position: req.body.position,
	    custom: req.body.custom
	}, function(err, rule){
		if(err){
			sendJsonResponse(res, 400, err);
		} else {
			sendJsonResponse(res, 201, rule);
		}
	});
};

module.exports.ruleReadOne = function(req, res){
	if(req.params && req.params.ruleid){
		Rule.findById(req.params.ruleid)
		.exec(function(err, rule){
			if(!rule){
				sendJsonResponse(res, 404, {
					"message" : "ruleid not found"
				});
			} else if(err){
				sendJsonResponse(res, 404, err);
				return;
			}
			sendJsonResponse(res, 200, rule);
		});
	} else {
		sendJsonResponse(res, 404, {
			"message" : "No ruleid in request"
		});
	}
};

module.exports.ruleUpdateOne = function(req, res){
	if(!req.params.ruleid){
		sendJsonResponse(res, 404, {"message": "Not found, locationid is required"});
		return;
	}
	Rule.findById(req.params.ruleid)
		.exec(function(err, rule){
			if(!rule){
				sendJsonResponse(res, 404, {"message": "ruleid not found"});
				return;
			} else if(err){
				sendJsonResponse(res, 400, err);
				return;
			}
			rule.name = req.body.name, 
	    	rule.points = req.body.points, 
	    	rule.position = req.body.position,
	    	rule.custom = req.body.custom,
	    	rule.save(function(err, rule){
	    		if(err){
					sendJsonResponse(res, 404, err);
	    		} else {
	    			sendJsonResponse(res, 200, rule);
	    		}
	    	});
		});
};

module.exports.ruleDeleteOne = function(req, res){
	var ruleId = req.params.ruleId;
	if(ruleId){
		Rule.findByIdAndRemove(ruleId)
			.exec(function(err){
				if(err){
					sendJsonResponse(res, 404, err);
					return;
				} 
				sendJsonResponse(res, 204, {"message": "deleted"});
			});
	} else {
		sendJsonResponse(res, 404, {"message": "No ruleId"});
	}
};