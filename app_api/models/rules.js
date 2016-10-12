var mongoose = require('mongoose');

var rulesSchema = new mongoose.Schema({
    name: {type: String, required: true}, 
    points: {type: Number, required: true}, 
    position: {type: String, required: true},
    custom: {type: String, required: true}
});
mongoose.model('Rule', rulesSchema);