const mongoose = require('mongoose');

const cocktailSchema = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    recipe: { type: String, required: true },
    instructions: { type: String, required: true },
    drinkId: String,

});

module.exports = mongoose.model('Cocktail', cocktailSchema)