const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dupeSchema = new Schema({
    name:{type: String, required: true},
    brand:{type: String, required: true},
    price:{type: String, required:true},
    color:{type: String, required: true},
    dupe:{type: String, required: true}
});

const Dupe = mongoose.model('Dupe', dupeSchema);

module.exports = Dupe