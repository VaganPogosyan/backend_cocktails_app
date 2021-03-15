const express = require('express');
const COCKTAILS = express.Router();
const Cocktail = require('../models/cocktails')

// Index
COCKTAILS.get('/', (req, res) => {
    res.send("hello")
})









module.exports = COCKTAILS