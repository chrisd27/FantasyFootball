var mongoose = require('mongoose');

var gamesSchema = new mongoose.Schema({
    opposition: String, 
    score: String, 
    date: String, 
    result: String
});

mongoose.model('Game', gamesSchema);