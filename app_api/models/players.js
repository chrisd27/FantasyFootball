var mongoose = require('mongoose');

var statsSchema = new mongoose.Schema({
	gameId: Number,
	rules:[{
	  id: Number,
	  value: {type: Number, min :0}
	}],
    position: String,
});

var playerSchema = new mongoose.Schema({
	details: {
        firstName: {type: String, required: true},
		lastName: {type: String, required: true},
		nickname: String,
        prefPosition: String
    },
    stats: [statsSchema],
    totals: {
    	goals: {type: Number, "default": 0, min :0},
		goalPoints: {type: Number, "default": 0, min :0},
		assists: {type: Number, "default": 0, min :0},
		assistPoints: {type: Number, "default": 0, min :0},
		redCards: {type: Number, "default": 0, min :0},
		yellowCards: {type: Number, "default": 0, min :0},
		cardPoints: {type: Number, "default": 0, min :0},
		motm: {type: Number, "default": 0, min :0},
		motmPoints: {type: Number, "default": 0, min :0},
		fantasyTotal: {type: Number, "default": 0, min :0}
	}
});
mongoose.model('Player', playerSchema);