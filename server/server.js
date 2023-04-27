require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const pokeom = require('./model/Pokemons')
const app = express()
const PORT = 5000;
app.use(express.json())

app.post('/api/catch', async (req, res) => {
    const { Name, Type, HP, Attack, Defense, ImageURL } = req.body
    try {
        const cughtPokemon = await pokeom.create({ Name, Type, HP, Attack, Defense, ImageURL })
        res.status(200).json(cughtPokemon)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
})

app.get('/api/pokemons', async (req, res) => {
    const pokeoms = await pokeom.find({}).sort({ createdAt: -1 })
    res.status(200).json(pokeoms)

})


mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log('Connected to db & listening on port', PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })

