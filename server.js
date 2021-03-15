const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const cocktailsController = require('./controllers/cocktails');
const APP = express();
const PORT = 3003;
const DBNAME = 'cocktails';

mongoose.connect(`mongodb://localhost:27017/${DBNAME}`, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongoose...');
});

// APP.use(cors(corsOptions));

APP.use(express.json());

APP.use('/cocktails', cocktailsController)

APP.listen(PORT, () => {
    console.log("listening on port: ", PORT)
})