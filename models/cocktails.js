const mongoose = require('mongoose');

const cocktailSchema = mongoose.Schema({
    name: { type: String },
    image: { type: String }
});

module.exports = mongoose.model('Cocktail', cocktailSchema)