const express = require('express');
// const request = require('request');
const axios = require('axios');

// checks for jwt and verify
const checkAuth = require('../middleware/auth-check');

const Team = require('../models/team');

const router = express.Router();

// GLOBAL VARS
const ESP8266_URL = "http://192.168.43.20/"; //"http://192.168.1.172";
const HOMEPAGE = "http://localhost:4200/";

router.get('/', checkAuth, async (req ,res, next) => {
// router.get('/', async (req ,res, next) => {
    console.log('server started playing', req.user);
    const userTeam = await Team.findOne({name: req.user.team});
    // return res.json(req.user);
    try{
        // TODO: Seprate the axios.get to a seprate async function.
        // Return here response that game started
        const countOfButtonPress = await axios.get(ESP8266_URL);
        // countOfButtonPress = countOfButtonPressdata;
        console.log(countOfButtonPress.data);
        const newTeamPoints = userTeam.points + countOfButtonPress.data;
        await userTeam.update({points: newTeamPoints});
        res.status(200).json({
            teamId: userTeam.id,
            points: newTeamPoints
        })
        // console.log(countOfButtonPress.data);
    }
    catch(err) {
        // example - timeout
        res.status(500).json({
            message: "Failed Connect to ESP",
            error: err
        })
    }
    // res.redirect(HOMEPAGE);
    // res.send('A Call was sent to ESP8266');
});

router.post('/', (req ,res, next) => {
    const body = req.body;
    console.log(body);
    res.status(201).json({
        message: 'games added'
    });
    // no next because we send a response 
});


async function startGame(url){
    return;
}

module.exports = router;