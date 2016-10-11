var mongoose = require('mongoose');

var rulesSchema = new mongoose.Schema({
    rule: String, 
    points: Number, 
    position: String,
    custom: String
});

mongoose.model('Rule', rulesSchema);