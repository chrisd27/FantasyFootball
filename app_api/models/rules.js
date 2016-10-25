var mongoose = require('mongoose');

var rulesSchema = new mongoose.Schema({
    name: {type: String, required: true}, 
    gkPoints: {type: Number, required: true, "default" : 0}, 
    defPoints: {type: Number, required: true, "default" : 0},
    midPoints: {type: Number, required: true, "default" : 0},
    fwdPoints: {type: Number, required: true, "default" : 0},
    subPoints: {type: Number, required: true, "default" : 0}
});
mongoose.model('Rule', rulesSchema);