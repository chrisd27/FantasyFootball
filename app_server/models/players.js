var mongoose = require('mongoose');

var totalsSchema = new mongoose.Schema({
	goals: {type: Number, "default": 0, min :0},
	goalPoints: {type: Number, "default": 0, min :0},
	assists: {type: Number, "default": 0, min :0},
	assistPoints: {type: Number, "default": 0, min :0},
	redCards: {type: Number, "default": 0, min :0},
	yellowCards: {type: Number, "default": 0, min :0},
	motm: {type: Number, "default": 0, min :0},
	fantasyTotal: {type: Number, "default": 0, min :0}
});

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
        name: {type: String, required: true}
    },
    stats: [statsSchema],
    totals: [totalsSchema]
});

mongoose.model('Player', playerSchema);