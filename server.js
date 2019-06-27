const express = require('express');
const app = express();
const birds = require('./bird-app/db/birds');

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    try {
        await res.send("hello")
    } catch (error) {
        console.log(`You got an error: ${error}`)
    }
})

app.get('/birds.json', async (req, res) => {
    try {
        await res.json(birds)
    } catch (error) {
        console.log(`There is an error: ${error}`);
    }
})

app.get('/birds/:id.json', async (req, res) => {
    try {
        res.json(birds[req.params.id - 1])
    } catch (error) {
        console.log(`There is an error: ${error}`);
    }
})

app.listen(PORT, () => console.log("It's connecting..."));