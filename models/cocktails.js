const mongoose = require('mongoose');

const cocktailSchema = mongoose.Schema({
    name: { type: String },
    image: { type: String },
    // recipe: { type: String },
    // instructions: { type: String },
    // drinkId: String,

});

module.exports = mongoose.model('Cocktail', cocktailSchema)