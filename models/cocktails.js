const mongoose = require('mongoose');

const cocktailSchema = mongoose.Schema({
    name: { type: String },
    image: { type: String },
    glassware: { type: String },
    instructions: { type: String },
    ingredients: [],
    measurements: [],
    alcoholic: { type: String }
});

module.exports = mongoose.model('Cocktail', cocktailSchema)