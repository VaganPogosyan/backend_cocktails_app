const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const cocktailsController = require('./controllers/cocktails');
const APP = express();
const PORT = process.env.PORT || 3003;
const DBNAME = 'cocktails';
const db = mongoose.connection;

const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost:27017/${DBNAME}`

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// mongoose.connection.once('open', () => {
//     console.log('connected to mongoose...');
// });

db.on('open', () => { });


const whitelist = ['http://localhost:3000', 'https://frontend-cocktails.herokuapp.com']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

// APP.use(cors(corsOptions));

APP.use(cors(corsOptions));

APP.use(express.json());

APP.use('/cocktails', cocktailsController)

APP.listen(PORT, () => {
    console.log("listening on port: ", PORT)
})
