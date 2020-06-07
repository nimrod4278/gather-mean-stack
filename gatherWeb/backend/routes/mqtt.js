const express = require('express');
const axios = require('axios');
// checks for jwt and verify
const checkAuth = require('../middleware/auth-check');
const Team = require('../models/team');
const mqttHandler = require("../middleware/mqtt_handler");



// init mqtt client
const mqttClient = new mqttHandler();
mqttClient.connect();
const router = express.Router();

router.get('/', checkAuth, async (req ,res, next) => {
    console.log("game starting on ESP8266");
    mqttClient.setTeam(req.user.team)
    await mqttClient.sendMessage(`${req.user.team}`)
    // const userTeam = await Team.findOne({name: req.user.team});
    // await userTeam.update({points: mqttClient.lastScore})
    // res.status(200).json({points: team.points});
});

// router.get("/", checkAuth, (req, res) => {
//     const userTeam = req.user.team;
//     console.log('XXXXXXXXXX');
//     setTimeout(async () => {
//        const points = await axios.get("https://io.adafruit.com/api/v2/gather1122/feeds/finish?x-aio-key=aio_UNqL67055VEEiNZQaFlALTKsgSbV")
//        console.log(points.data);
//     }, 5 * 1000);
//     res.status(200).send("Message sent to mqtt");
// });

module.exports = router;