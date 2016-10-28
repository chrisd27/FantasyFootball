var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
    teamName: {type: String, required: true},
    players: [{
    	playerId: String
    }],
	games: [{
		gamesId: String
	}]
});

mongoose.model('Team', teamSchema);
