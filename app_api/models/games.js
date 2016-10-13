var mongoose = require('mongoose');

var gamesSchema = new mongoose.Schema({
    opposition: {type: String, required: true}, 
    oppositionScore: {type: Number, required: true}, 
    accountTeamScore: {type: Number, required: true}, 
    date: {type: String, required: true}, 
    players: [{
    	playerId: String,
    	stats: [{
    		ruleId: String,
    		ruleInstances: Number,
    		ruleTotal: Number,
    		ruleCalcualtedTotal: Number
    	}],
    }],

});

mongoose.model('Game', gamesSchema);
