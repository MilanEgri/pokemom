const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const pokeSchema = new Schema({
    Name: String,
    Type: String,
    HP: Number,
    Attack: Number,
    Defense: Number
});

const Poke = model('Poke', pokeSchema);

module.exports = Poke;