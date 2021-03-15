const express = require('express');
const COCKTAILS = express.Router();
const Cocktail = require('../models/cocktails')

// Index
COCKTAILS.get('/', (req, res) => {
    Cocktail.find({}, (err, foundCocktails) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }
        res.status(200).json(foundCocktails)
    })
})

//curl -X POST -H "Content-Type: application/json" -d '{"name":"Margarita"}' 'http://localhost:3003/cocktails'


// Post
COCKTAILS.post('/', (req, res) => {
    Cocktail.create(req.body, (err, createdCocktail) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }
        res.status(200).send(createdCocktail);
    });

})
// curl -X PUT -H "Content-Type: application/json" -d '{"name":"I updated this"}' 'http://localhost:3003/cocktails/604fb91a6a38ddb24102a502'

// Update
COCKTAILS.put('/:id', (req, res) => {
    Cocktail.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedCocktail) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }

        res.status(200).json(updatedCocktail);
    })
});








module.exports = COCKTAILS