const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokeSchema = new Schema({
    Name: String,
    Type: String,
    HP: Number,
    Attack: Number,
    Defense: Number,
    ImageURL:String
},{timestamps: true});

module.exports = model('Poke', pokeSchema);