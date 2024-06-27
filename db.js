const mongoose = require('mongoose');

// define the mongoDB connection URL without extra space
const mongoURL = 'mongodb://127.0.0.1:27017/hotels'; // database with database name: hotels

// set up mongodb connection
mongoose.connect(mongoURL);
    /*, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});*/

// get the default connection
// mongoose contains a default connection object representing the mongoDb connection
const db = mongoose.connection;

db.on('connected', () => {
    console.log('connected to mongoDB server');
});

db.on('error', (err) => {
    console.log('mongoDB connection error', err);
});

db.on('disconnected', () => {
    console.log('mongoDB server disconnected');
});

module.exports = db;
