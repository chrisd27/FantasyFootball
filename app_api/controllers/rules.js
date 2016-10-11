var mongoose = require('mongoose');
var Rule = mongoose.model('Rule');

var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
};

module.exports.allRules = function(req, res){
	sendJsonResponse(res, 200, {"status": "successGET"});
};

module.exports.ruleCreate = function(req, res){
	sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.ruleReadOne = function(req, res){
	if(req.params && req.params.rulesid){
		Rule.findById(req.params.rulesid)
		.exec(function(err, rule){
			if(!rules){
				sendJsonResponse(res, 404, {
					"message" : "ruleid not found"
				});
			} else if(err){
				sendJsonResponse(res, 404, rule);
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
	sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.ruleDeleteOne = function(req, res){
	sendJsonResponse(res, 200, {"status": "success"});
};