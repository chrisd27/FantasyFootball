var mongoose = require('mongoose');

var gamesSchema = new mongoose.Schema({
    opposition: {type: String, required: true}, 
    score: {type: String, required: true}, 
    date: {type: String, required: true}, 
    result: {type: String, required: true}
});

mongoose.model('Game', gamesSchema);