require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 5000;
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to db & listening on port', PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })

