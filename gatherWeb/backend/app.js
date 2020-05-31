const express = require('express');
const cors = require('cors');
// const request = require('request');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const gamesRoutes = require('./routes/games');
const userRoutes = require('./routes/user');
const statRoutes = require('./routes/statistics');

// init express app
const app = express();

mongoose.set('useCreateIndex', true);
// connecting to mongoDB
mongoose.connect(
    'mongodb+srv://admin:qNO6YvoEMoZNtrXp@cluster0-kjiwp.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    )
    .then(() => {
        console.log('Connected to Database');
    })
    .catch(() => {
        console.log('Connection failed');
    });


// middleware for parsing json data
app.use(bodyParser.json());

// parse url encoded data
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    // all domain allowed access to resources
    res.setHeader('Access-Control-Allow-Origin','*');
    // Headers allowed
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authurization');
    // Methods allowed
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATH, DELETE, OPTIONS');
    next();
});
app.use(cors());

// use gamesRouter for all path start with api/games
app.use('/api/games', gamesRoutes);
app.use('/api/user', userRoutes);
app.use('/api/statistics', statRoutes);

// app.use('/api/games', (req ,res, next) => {
//     request.get("http://192.168.1.172", res, (err, res,body) => {
//        console.log(body);
//    });
//    next();
// });

// app.use('/api/games', (req ,res, next) => {
//     res.send('Implement get games');
// });

module.exports = app;